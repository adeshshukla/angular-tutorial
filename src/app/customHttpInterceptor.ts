import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError, finalize } from 'rxjs/operators';

@Injectable()
export class CustomHttpInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = '12345';

        // let token = localStorage,getItem('id_token');
        // if(token){
        //     const authRequest = req.clone({
        //         //setHeaders: { Authorization: 'Bearer ${token}', 'X-CustomHeader-Interceptor':'Interceptor header value' }
        //         headers: req.headers.set('Authorization','Bearer ' + token)
        //     });
        //     next.handle(authRequest)
        // }else{
        //     next.handle(req);
        // }


        const authRequest = req.clone({
            //setHeaders: { Authorization: 'Bearer ${token}', 'X-CustomHeader-Interceptor':'Interceptor header value' }
            headers: req.headers.set('Authorization','Bearer ' + token)
        });
        
        console.log('Request ----')
        console.log(req);

        return next.handle(authRequest)
            .pipe(
                retry(2),
                catchError(err=>{
                    console.log('Error caught in Interceptor');
                    console.error(err);
                    // return throwError(err);
                    return throwError('Internal Server Error');
                }),

                // Finalize - Every request end up here
                finalize(()=>{
                    console.log('Inside interceptor finalize')
                    const msg = authRequest.method +'-'+ authRequest.urlWithParams;
                    console.log(msg);
                })

                );


                
    }


}