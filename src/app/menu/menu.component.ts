import { Component, OnInit } from '@angular/core';
import { People } from './People';
import { Init } from './Init';
declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  people = new People()
  constructor() { 
    
  }
  ngOnInit(): void {
    Init.init()
    $('#search_find_people').search({source: this.people.content, showNoResults: false})
  }
}