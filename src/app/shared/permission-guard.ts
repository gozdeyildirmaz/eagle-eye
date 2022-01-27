import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {TokenService} from "../services/token.service";


@Injectable()
export class PermissionGuard implements CanActivate {
  constructor(private tokenServive: TokenService, private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const result = !!this.tokenServive.getToken()
    if(!result)
      this.router.navigateByUrl('/login');

    return result;
  }
}
