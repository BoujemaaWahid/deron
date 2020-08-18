import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    addActiveListener()
  }
}
function addActiveListener(){
  let a = document.querySelectorAll("a")
    a.forEach(item=>{
      item.addEventListener('click', ()=>{
        a.forEach( item_=> item_.classList.remove('active') )
        item.classList.add('active')
      })
    })
}