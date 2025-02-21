import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const accessToken = typeof localStorage !== 'undefined' ? localStorage.getItem('access_token') : null;
      if (accessToken) {
          const cloned = req.clone({
            headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
        });
        console.log('cloned', cloned);
        return next.handle(cloned);
    } else {
        return next.handle(req);
    }
  }
}
