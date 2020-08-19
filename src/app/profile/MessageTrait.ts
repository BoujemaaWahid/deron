export class MessagesTrait {
  public count = 0;
  private max_count = 0;
  public active_search = 'none';
  private listOfMsgs = new Array < Element > ();
  public searchInMsgs(event) {
    this.count = 0;
    this.listOfMsgs.forEach(e => e.classList.remove('pulsed'))
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
