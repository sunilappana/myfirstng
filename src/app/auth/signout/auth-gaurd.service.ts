import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate,  GuardResult,  MaybeAsync,  RouterStateSnapshot, } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
        throw new Error("Method not implemented.");
    }
        CanActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
        {
            return this.authService.isAuthentication();
        }
            
}