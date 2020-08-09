import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  signature: string|any;
  constructor(private route: Router, private acRoute: ActivatedRoute) {
   try{
      this.signature = atob(acRoute.snapshot.paramMap.get('signature'))
      this.signature = JSON.parse(this.signature)
   }catch(e){this.route.navigate(['404'])}

  }
  
  ngOnInit(): void {
  }

}
