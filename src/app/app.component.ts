import { Component } from '@angular/core';
import { IndexedDbService } from './services/indexed-db.service';
import { DXdb } from './services/DxDbSchemas';
import { AccountService } from './services/account.service';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private x1:AccountService, private deron: IndexedDbService){
    $.get("https://ipinfo.io?token=83e376fb63ebde", function(response) {
      console.log(response);
    })
    

    //this.x();
    /*this.deron.getInstance().then(res=>{
      
    })*/
  }
  async x(){
    let t = await this.deron.instance()
    //t.put(DXdb.VALIDATION, {canValidate: true}, DXdb.VALIDATION_KEY)
    /*
    let e = await this.deron.getInstance()
    */
  }
}
