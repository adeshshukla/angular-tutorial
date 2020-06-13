import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  // private apiUrl:string = 'http://localhost/SwanApi/api/';
  private apiUrl:string = 'http://localhost:44304/api/';

  constructor(private http:HttpClient) { }

  getSessionFromDB(){
    let options = {
      headers:new HttpHeaders({ Authorization:'mytoken', 'X-MyHeader2':'header 2 value'}),
      // observe: 'response';
    }

    return this.http.get(this.apiUrl + 'session/getallsessions', options)
    // .pipe(
    //   catchError(err=>{
    //     console.log('Error in getallsessions')
    //     console.log(err);
    //     return throwError('Internal server in Service')
    //   })
    // );
  }

  updateSession(session){
    let options = {
      headers:new HttpHeaders({'X-MyHeader':'headerValue', 'X-MyHeader2':'header 2 value'})      
    }

    return this.http.put(this.apiUrl + 'session/UpdateSession', session, options)
    // .pipe(
    //   catchError(err=>{
    //     console.log('Error in update session')
    //     console.log(err);
    //     return throwError('Error caught in UpdateSession')
    //   })
    // );
  }

  addSession(session){
    return this.http.post(this.apiUrl + 'session/InsertSession', session)
  }

}
