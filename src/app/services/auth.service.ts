import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, tap, throwError} from "rxjs";
import {TokenService} from "./token.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   OAUTH_CLIENT = 'dev_test';
   OAUTH_SECRET = '3H1Bf6mCctIgpCuzvrnyekf3VhAUEnKJ';
   API_URL = 'http://localhost:4200/';

  username = 'onlinedemo@cameramanager.com'
  password = 'demo1234'
  base_url = 'https://rest.cameramanager.com';
  token_url='/oauth/token'

   HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      Authorization: 'Basic ' + btoa(this.OAUTH_CLIENT + ':' + this.OAUTH_SECRET)
    }),
     withCredentials:true
  };
  redirectUrl = '';
  private static handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }

  private static log(message: string): any {
    console.log(message);
  }
  constructor(private http: HttpClient, private tokenService: TokenService) { }

  login(loginData: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      // .set('username', this.username)
      // .set('password', this.password)
      .set('grant_type', 'password')
      .set('scope', 'write');

    let url = this.base_url + this.token_url  + '?username=' + loginData.email + '&password=' +loginData.password
debugger;
    return this.http.post<any>(url, body, this.HTTP_OPTIONS)
      .pipe(
        tap((res: any) => {
          this.tokenService.saveToken(res.access_token);
          this.tokenService.saveRefreshToken(res.refresh_token);
        }),
        catchError(AuthService.handleError)
      );
  }

  refreshToken(refreshData: any): Observable<any> {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
    const body = new HttpParams()
      .set('refresh_token', refreshData.refresh_token)
      .set('grant_type', 'refresh_token');
    return this.http.post<any>(this.API_URL + 'oauth/token', body, this.HTTP_OPTIONS)
      .pipe(
        tap((res:any) => {
          this.tokenService.saveToken(res.access_token);
          this.tokenService.saveRefreshToken(res.refresh_token);
        }),
        catchError(AuthService.handleError)
      );
  }

  logout(): void {
    this.tokenService.removeToken();
    this.tokenService.removeRefreshToken();
  }

  register(data: any): Observable<any> {
    return this.http.post<any>(this.API_URL + 'oauth/signup', data)
      .pipe(
        tap(_ => AuthService.log('register')),
        catchError(AuthService.handleError)
      );
  }

  secured(): Observable<any> {
    return this.http.get<any>(this.API_URL + 'secret')
      .pipe(catchError(AuthService.handleError));
  }

}
