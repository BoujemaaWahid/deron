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
    { cl:'msg_self', width:'', msg: "hello" },
    { cl:'msg_self',width:'', msg: "hello 123 456 789" },
    { cl:'msg_friend',width:'', msg: "hello 789 456 123 789 456 123 789 456 132"},
    { cl:'msg_self',width:'', msg: "hello 789 456 123 789 456 123 789 456 132 789 456 123 789 456 123 789 456 132"},
    {cl:'msg_friend', width:'', msg: "hello 789 456 123 789 456 123 789 456 132 789 456 123 789 456 123 789 456 132AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},
    { cl:'msg_self',width:'', msg: "hello" },
    { cl:'msg_friend',width:'', msg: "hello 123 456 789" },
    { cl:'msg_self',width:'', msg: "hello 789 456 123 789 456 123 789 456 132"},
    { cl:'msg_friend',width:'', msg: "hello 789 456 123 789 456 123 789 456 132 789 456 123 789 456 123 789 456 132"},
    { cl:'msg_self',width:'', msg: "hello 789 456 123 789 456 123 789 456 132 789 456 123 789 456 123 789 456 132AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"}
  
  ]
  constructor() { 
    for(let j = 0; j< this.messages.length; j++){
      this.messages[j].width= (this.messages[j].msg.length + 3) + '%' 
    }    
    for (let i = 0; i < 100; i++){ this.t.push(i) }
  }

  ngOnInit(): void {
  }

}

