import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Icons } from './Icons';
declare var $: any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {
  t = []
  icons = new Icons();
  wahid = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/11880505_389864781223543_6418437934454991901_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=Ot20xwa3DXgAX9H6vPF&_nc_ht=scontent-cdg2-1.xx&oh=1edc6c96c07dc0ac819c1549705e4bec&oe=5F61EE7B"
  nada = "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/107118697_286492019462675_5363744277865594370_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=kwW-7aqWy70AX_DJyQ3&oh=d7faf769f16d89b7fbd92f1ef58c10e1&oe=5F620045"
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
    { cl:'msg_self',width:'', msg: "hello 789 456 123 789 456 123 789 456 132 789 456 123 789 456 123 789 456 132AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA"},
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
  ngAfterViewInit(): void {
    

  }

  ngOnInit(): void {
  }

}

