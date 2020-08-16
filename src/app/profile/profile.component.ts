import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  t = []
  constructor() { 
    for (let i = 0; i < 100; i++){ this.t.push(i) }
  }

  ngOnInit(): void {
  }

}

