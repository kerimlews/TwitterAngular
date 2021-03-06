import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";
import {AuthService} from "../services/auth.service";
import {Router} from '@angular/router';
import 'rxjs/add/operator/do';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        "X-Requested-With": 'XMLHttpRequest',
        "Authorization": 'Basic ' + this.authService.getAuthToken()
      }
    });
    return next.handle(req).do((event: HttpEvent<any>) => {
      if(event.type !== 0) {
        this.authService.setAuth(true);
      }
    },
    (err: any) => {
      if (err instanceof HttpErrorResponse && err.status === 401) {
        this.authService.logout();
        this.authService.setAuth(false);
        console.log(this.router.url)
        this.router.navigate([this.router.url === '/registration' ? '/registration' : '/login']);
      }
    });
  }
}
