import { Component, OnInit } from '@angular/core';
import { People } from './People';
import { Init } from './Init';
import { MenuService } from '../services/menu-services.service';
import { duration } from 'moment';
declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  people = new People()
  info_sound = new Audio('assets/juntos.mp3')
  msg_sound = new Audio('assets/me-too.mp3')
  constructor(private service: MenuService) { 
    this.service.notification.subscribe(res=>{
      if( res == null )return;
      Init.shakeInfoNotify()
      Init.shakeMsgNotify()
    })
  }
  ngOnInit(): void {
    Init.init()
    $('#search_find_people').search({source: this.people.content, showNoResults: false})
  }
}