import { Renderer2 } from '@angular/core';
import { prefix } from '@fortawesome/free-solid-svg-icons';
declare var $: any;
export class MessagesTrait {
  public count = 0;
  private max_count = 0;
  public active_search = 'none';
  private listOfMsgs = new Array < Element > ();
  public searchInMsgs(event) {
    this.count = 0;
    this.listOfMsgs.forEach(e => {
      e.classList.remove('pulsed')
      e.classList.remove('highlightElement')
    })
    this.listOfMsgs = new Array < Element > ();
    if (event.target.value == '') return;
    
    let ctn = document.getElementById('messagesContainer__')
    let searc_attr = event.target.value.toUpperCase()
    let childrens = ctn.children
    for (let i = 0; i < childrens.length; i++) {
      let lc = childrens[i].firstElementChild.firstElementChild
      let value = lc.textContent.toUpperCase()
      if (value.includes(searc_attr)) {
        this.count++;
        this.listOfMsgs.push(lc)
        lc.classList.add('pulsed')
      }
    }
    this.max_count = this.count;
  }
  public activeSearchInConv() {
    this.active_search = this.active_search == 'none' ? 'inline-flex' : 'none'
  }
  public scroll(direction: number) {
    let element = null;
    this.listOfMsgs[this.count - 1].classList.remove('highlightElement')
    if (direction == 1) {
      if (this.count + 1 <= this.max_count) {
        this.count++;
      }
    } else {
      if (this.count - 1 > 0) {
        this.count--;
      }
    }
    element = this.listOfMsgs[this.count - 1]
    element.classList.add('highlightElement');
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    })
  }
}


export class Message {
  public id: number;
  public from: number;
  public send: string;
  public seen: string;
  public self: boolean;
  public type: 1|2|3|4|5;
  public value: any;
  private count_msg_sended = 0;
  public newmsgcl = ''
  public static prefix = 1;
  constructor(self:boolean, value:any, send?:string, seen?:string, id?:number, from?:number, type?:1|2|3|4|5){
    this.id = id;
    this.from = from;
    this.send = send;
    this.seen = seen;
    this.self = self;
    this.type = type;
    this.value = value;
  }
  public getTitle(): string{
      return `<div><b>Vu à ${this.seen}</b><br><b>Envoyé ${this.send}</b></div>`;
  }
  public getWidth(){
    if( typeof( this.value ) == 'string' )
      return ( (this.value.length + 5 ) * Message.prefix )+ '%';
  }

  public createTextMsg(rendrer: Renderer2): any{
    let field = rendrer.createElement('div');
    let mcontent = rendrer.createElement('div')
    let parag = rendrer.createElement('p')
    rendrer.addClass(field, 'field')
    rendrer.addClass(field, 'new_msg_sended')
    rendrer.setStyle(field, 'width', '100%')
    rendrer.setAttribute(mcontent, 'data-variation', 'inverted')
    rendrer.setAttribute(mcontent, 'data-position', 'left center')
    rendrer.setAttribute(mcontent, 'data-html', '<p>pl</p>')
    rendrer.setStyle(mcontent, 'width', this.getWidth())
    rendrer.addClass(mcontent, 'msgPopup')
    rendrer.addClass(mcontent, 'msgContent')
    rendrer.addClass(mcontent, 'msg_self')
    rendrer.addClass(parag, 'message_text_value')
    rendrer.appendChild(parag, rendrer.createText( this.value ) )
    rendrer.appendChild(mcontent, parag)
    rendrer.appendChild(field, mcontent)
    console.log(field)
    return field;
  }
  public static getWritingEffect(rendrer: Renderer2){
   let c1 = ['ui','mini','teal','empty','circular','label']
   let c2 = ['ui','mini','blue','empty','circular','label']
   let field = rendrer.createElement('div');
   let container = rendrer.createElement('div');
   let write = rendrer.createElement('div');
   let l1 = rendrer.createElement('div');
   let l2 = rendrer.createElement('div');
   let l3 = rendrer.createElement('div');
   rendrer.setStyle(field, 'width', '100%')
   rendrer.setStyle(field, 'display', 'flex')
   rendrer.addClass(container, 'msgContent')
   rendrer.addClass(container, 'msg_friend_writing')
   rendrer.setAttribute(write, 'id', 'isWriting__')
   c1.forEach(e=> {rendrer.addClass(l1, e); rendrer.addClass(l3, e);})
   c2.forEach(e=> rendrer.addClass(l2, e) )
   rendrer.appendChild(write, l1)
   rendrer.appendChild(write, l2)
   rendrer.appendChild(write, l3)
   rendrer.appendChild(container, write)
   rendrer.appendChild(field, container)
   return field;
  }
}
