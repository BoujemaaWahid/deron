//tslint:disable
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
export interface Deactivator {
    confirm(): Promise<boolean>
}
@Injectable({
    providedIn: 'root'
})
export class DirtyFields implements CanDeactivate<Deactivator>{
    canDeactivate(component: Deactivator,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState?: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        return component.confirm();
    }
}