import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';

import {Router} from '@angular/router';
import {throwError} from 'rxjs';
import {TokenService} from '../services/token.service';
import {catchError, map} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  api_key = 'dev_test'
  secret = '3H1Bf6mCctIgpCuzvrnyekf3VhAUEnKJ'

  constructor(private router: Router,
              private tokenService: TokenService,
              private authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): any {

    const token = this.tokenService.getToken();
    const refreshToken = this.tokenService.getRefreshToken();
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + token
        }
      });
    } else {
      request = request.clone({
        setHeaders: {
          Authorization: 'Basic ' + btoa(this.api_key + ':' + this.secret)
        }
      });
    }

    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        setHeaders: {
          'content-type': 'application/json'
        }
      });
    }

    request = request.clone({
      headers: request.headers.set('Accept', 'application/json')
    });

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('event--->>>', event);
        }
        return event;
      }));
  }
}
