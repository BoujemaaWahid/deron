import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { IndexedDbService } from '../services/indexed-db.service';
import { DXdb } from '../services/DxDbSchemas';

@Injectable({
    providedIn: 'root'
})
export class ValidationGuard implements CanActivate {
    constructor(private router: Router, private dx: IndexedDbService){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {   
        return new Promise<boolean>(async resolve=>{
            let activate = await this.decision()

            if( !activate ){
                resolve(true)
                return;
            }

            this.router.navigate(['404'])
            resolve(false);
        })
    }
    private async decision(){
        let t = await this.dx.instance()
        let r = await t.get(DXdb.VALIDATION, DXdb.VALIDATION_KEY)
        return r.canValidate;
    }
}