import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable, throwError, of, } from 'rxjs';
import { catchError, retry, tap, map, finalize } from 'rxjs/operators';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
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
                retry(2),
                catchError(err => {
                    console.log('Error in interceptor')
                    console.log(err);
                    return throwError('Internal server in interceptor')
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


}