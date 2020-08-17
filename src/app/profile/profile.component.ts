import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  t = []
  messages = [
    { width:'', msg: "hello" },
    { width:'', msg: "hello 123 456 789" },
    { width:'', msg: "hello 789 456 123 789 456 123 789 456 132"},
    { width:'', msg: "hello 789 456 123 789 456 123 789 456 132 789 456 123 789 456 123 789 456 132"},
    { width:'', msg: "hello 789 456 123 789 456 123 789 456 132 789 456 123 789 456 123 789 456 132AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},
    { width:'', msg: "hello" },
    { width:'', msg: "hello 123 456 789" },
    { width:'', msg: "hello 789 456 123 789 456 123 789 456 132"},
    { width:'', msg: "hello 789 456 123 789 456 123 789 456 132 789 456 123 789 456 123 789 456 132"},
    { width:'', msg: "hello 789 456 123 789 456 123 789 456 132 789 456 123 789 456 123 789 456 132AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}
  
  ]
  constructor() { 
    for(let j = 0; j< this.messages.length; j++){
      this.messages[j].width= (this.messages[j].msg.length + 5) + '%' 
    }    
    for (let i = 0; i < 100; i++){ this.t.push(i) }
  }

  ngOnInit(): void {
  }

}

