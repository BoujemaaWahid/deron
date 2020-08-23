import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Renderer2
} from '@angular/core';
import {
  Icons
} from './Icons';
import {
  Friends
} from './Friends';
import {
  MessagesTrait,
  Message
} from './MessageTrait';
declare var $: any;
import * as moment from 'moment';
import { SoundEffects } from '../bw/SoundEffects';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {
  @ViewChild('MESSAGES_CONTAINER', {
    static: true
  }) MESSAGES_CONTAINER: ElementRef;
  sendMsgSound = new Audio('assets/intuition.mp3')
  writingSound = new Audio('assets/wind-up-3.mp3')
  writingBubbles: any;
  friends_list = new Array < Friends > ();
  messageTrait = new MessagesTrait();
  friends = new Array < Friends > ();
  icons = new Icons();
  wahid = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/11880505_389864781223543_6418437934454991901_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=Ot20xwa3DXgAX9H6vPF&_nc_ht=scontent-cdg2-1.xx&oh=1edc6c96c07dc0ac819c1549705e4bec&oe=5F61EE7B"
  nada = "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/107118697_286492019462675_5363744277865594370_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=kwW-7aqWy70AX_DJyQ3&oh=d7faf769f16d89b7fbd92f1ef58c10e1&oe=5F620045"
  zied = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/10383015_659507697451884_5463364360211764491_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=LH_labOQjk8AX_-CErk&_nc_ht=scontent-cdg2-1.xx&oh=5cec39ed56ed7b8cf2c64c3bc999a2a7&oe=5F635E4A"
  semah = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/116542089_987908734978792_2138725175343785103_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=1dx2Ge3ZX7sAX_e0grY&_nc_ht=scontent-cdg2-1.xx&oh=3ff014877528beb00be7c6bcaba24cac&oe=5F627E3E"
  mariem = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/p960x960/79951928_2520578464856756_1341550360803672064_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=Aue7k8CT2BYAX-35HPY&_nc_ht=scontent-cdg2-1.xx&_nc_tp=6&oh=2543c805d1a17ef6a180182d88610f2e&oe=5F6267EC"
  ons = "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/116437000_3065708190173771_2535649002713262243_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=9RC0rikNsgIAX8uE--z&_nc_ht=scontent-cdt1-1.xx&oh=0342293efd54e0bbb902e206152b2a4e&oe=5F63A5F8"
  hatem = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/115558513_2330344623926573_4749040569317583572_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=GMuq6UrhveYAX-o7Njh&_nc_ht=scontent-cdg2-1.xx&oh=251804ed4a80c42bf493faa347c70861&oe=5F61063C"
  wided = "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/93702740_899199557195909_1066885759115460608_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=0IM7BjxofZIAX9b4D-G&_nc_ht=scontent-cdt1-1.xx&oh=f74178c6904babef7cbeef4b5d0f52c3&oe=5F6385E7"

  messages = new Array < Message > ();
  constructor(private rendrer: Renderer2, el: ElementRef) {
    let m1 = new Message(true, 'wahid', '4 aout 2001', 'maintenant')

    let m2 = new Message(false, 'zok omok l9a7ba', '4 aout 2001', 'maintenant')
    this.messages.push(m1)
    this.messages.push(m2)

    this.friends_list.push({
      id: 1,
      name: 'Boujemaa Wahid',
      image: this.wahid,
      nmsg: 'Hello'
    });

    this.friends_list.push({
      id: 1,
      name: 'Wided May',
      image: this.wided,
      nmsg: 'Hello'
    });

    this.friends_list.push({
      id: 1,
      name: 'Mrad Semah',
      image: this.semah,
      nmsg: 'Hello'
    });

    this.friends_list.push({
      id: 1,
      name: 'Yassine Nada',
      image: this.nada,
      nmsg: 'Hello'
    });


    this.friends_list.push({
      id: 1,
      name: 'Dams Zied',
      image: this.zied,
      nmsg: 'Hello'
    });

    this.friends_list.push({
      id: 1,
      name: 'Ons hamdi',
      image: this.ons,
      nmsg: 'Hello'
    });

    this.friends_list.push({
      id: 1,
      name: 'Ishak Mariem',
      image: this.mariem,
      nmsg: 'Hello'
    });

    this.friends_list.push({
      id: 1,
      name: 'Hatem helal',
      image: this.hatem,
      nmsg: 'Hello'
    });
    this.friends = [...this.friends_list]
  }
  ngAfterViewInit(): void {

    let container = document.getElementsByClassName('messages')[0]
    let fchild = container.firstElementChild
    container.scrollBy({
      top: container.clientHeight * fchild.childElementCount * 2
    })
    
  }
  ngOnInit(): void {}


  updateFriendsList(event) {
    this.friends_list = this.friends.filter(item => {
      let name = item.name.toUpperCase()
      let value = event.target.value.toUpperCase();
      if (name.includes(value)) return item;
    })
  }

  sendMessage(event) {
    let value = event.target.value.trim()
    if (event.key != 'Enter' || event.target.value == '') return;
    let msg = new Message(true, value)
    let nmsg = msg.createTextMsg(this.rendrer)
    this.rendrer.appendChild(this.MESSAGES_CONTAINER.nativeElement, nmsg)
    event.target.value = ""
    this.sendMsgSound.play()
    effectNewMsg()
  }
  showVocalModal() {
    $('#msgVocalModal').modal('show')
  }
  recordVocalMessage() {
    let element = document.getElementById("messageVocalModal__")
    let wr = (element.getAttribute('working') == 'false').valueOf()
    element.setAttribute('working', wr.toString())
    if (!wr) {
      SoundEffects.effects.stopRecording.play()
      element.classList.remove('vocalWorking')
      document.getElementById("messageVocalModalDesc__").style.opacity = "1";
      return
    }
    SoundEffects.effects.startRecording.play()
    document.getElementById("messageVocalModalDesc__").style.opacity = "0";
    element.classList.add('vocalWorking')

  }
  callAudio(){
    document.getElementById("audioCallEffect__").classList.add("callAudioNow")
    $("#audioCallModal__").modal('show')
    SoundEffects.effects.whenCalling.loop = true
    SoundEffects.playWhenCalling()
  }
}








/*___________________________________________________JQUERY STYLE______________________________*/
function effectNewMsg() {
  $(".msgPopup").popup()
  $(".new_msg_sended").transition({
    animation: 'jiggle',
    duration: 800,
    interval: 200
  })
  try {
    document.getElementsByClassName('new_msg_sended')[0].classList.remove('new_msg_sended')
  } catch (e) {}
  scrollInSend()
}

function scrollInSend() {
  let container = document.getElementsByClassName('messages')[0]
  let fchild = container.firstElementChild
  container.scrollBy({
    top: container.clientHeight * fchild.childElementCount * 3
  })
}
$(function () {
  $(document).ready(function () {

    $('#msgVocalModal').modal({
      closable:true,
      onHide: function (e) {
        setTimeout(() => {
          let element = document.getElementById("messageVocalModal__")
          element.classList.remove('vocalWorking')
          document.getElementById("messageVocalModalDesc__").style.opacity = "1";
        }, 1000)
      }
    })
    
    
    $("#audioCallModal__").modal({
       onHide: function (e) {
        SoundEffects.stopWhenCalling()
        setTimeout(() => {
          let element = document.getElementById("audioCallEffect__")
          element.classList.remove('callAudioNow')
        }, 500)
      }
    })

    
    $("#isWriting__ .label").transition('set looping')
    
    $("#isWriting__ .label").transition({
      animation: 'jiggle',
      duration: 1500,
      interval: 100,
    })
    
    $(".popup").popup()
    
    $(".msgPopup").popup()
    
    $("#msgInput").focusin(function () {
      $(".inputMessageField").removeClass('closeInputMsg')
      $(".inputMessageField").addClass('openInputMsg')
    }).focusout(function () {
      $(".inputMessageField").removeClass('openInputMsg')
      $(".inputMessageField").addClass('closeInputMsg')
    });

  })
}())
