import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError, of, timer, } from 'rxjs';
import { catchError, retry, tap, map, finalize, retryWhen, delayWhen, mergeMap } from 'rxjs/operators';
import { DemoService } from './services/demo.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    /**
     *
     */
    constructor(private demo:DemoService) {
        
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = '1234';
        // token = localStorage.getItem('token');

        // Request handle
        // Execute when actual req happens.
        // It will ovverride the headers provided in any other http request.
        const authRequest = req.clone({
            setHeaders: { Authorization: 'Bearer ' + token, 'X-CustomHeader-Interceptor': 'Interceptor header value' }
            //headers: req.headers.set('Authorization','Bearer ' + token)
        });

        let maxRetry = 2;

        return next.handle(authRequest)
            .pipe(
                // tap(x=>{
                //     console.log('inside tap')
                //     console.log(x)
                // }, err=>{
                //     console.log('tap err')
                //     console.log(err)
                // }),
                // map(data=> console.log(data))

                // retry(2),
                retryWhen(this.genericRetryStrategy()),

                catchError(err => {

                    // Not working this way
                    // if(err.status == 500){
                    //     retry(2)
                    // }

                    console.log('Error in interceptor')
                    console.log(err);
                    console.log(this.demo.getStudentList());
                    // return throwError('Internal server in interceptor')
                    return new Observable<any>(null);
                }),

                // Finalize - Every request end up here
                finalize(() => {
                    console.log('Inside interceptor finalize')
                    const msg = authRequest.method + '-' + authRequest.urlWithParams;
                    console.log(msg);
                })
            );
        //.subscribe(data=>console.log(data));


        //throw new Error("Method not implemented.");
    }

    genericRetryStrategy = ({
        maxRetryAttempts = 3,
        scalingDuration = 1000,
        // excludedStatusCodes = [],
        includedStatus = [500]
    }: {
        maxRetryAttempts?: number,
        scalingDuration?: number,
        excludedStatusCodes?: number[],
        includedStatus?: number[]
    } = {}) => (attempts: Observable<any>) => {
        return attempts.pipe(
            mergeMap((error, i) => {
                const retryAttempt = i + 1;
                // if maximum number of retries have been met
                // or response is a status code we don't wish to retry, throw error
                if (retryAttempt > maxRetryAttempts //|| excludedStatusCodes.find(e => e === error.status)
                    || includedStatus.find(e => e !== error.status)) {
                    return throwError(error);
                }

                console.log(
                    `Attempt ${retryAttempt}: retrying in ${retryAttempt *
                    scalingDuration}ms`
                );
                // retry after 1s, 2s, etc...
                return timer(retryAttempt * scalingDuration);
            }),
            finalize(() => console.log('We are done!'))
        );
    };


}