export class People {
  wahid = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/11880505_389864781223543_6418437934454991901_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=Ot20xwa3DXgAX9H6vPF&_nc_ht=scontent-cdg2-1.xx&oh=1edc6c96c07dc0ac819c1549705e4bec&oe=5F61EE7B"
  nada = "https://scontent-cdg2-1.cdninstagram.com/v/t51.2885-15/e35/107118697_286492019462675_5363744277865594370_n.jpg?_nc_ht=scontent-cdg2-1.cdninstagram.com&_nc_cat=111&_nc_ohc=kwW-7aqWy70AX_DJyQ3&oh=d7faf769f16d89b7fbd92f1ef58c10e1&oe=5F620045"
  zied = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/10383015_659507697451884_5463364360211764491_n.jpg?_nc_cat=108&_nc_sid=85a577&_nc_ohc=LH_labOQjk8AX_-CErk&_nc_ht=scontent-cdg2-1.xx&oh=5cec39ed56ed7b8cf2c64c3bc999a2a7&oe=5F635E4A"
  semah = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/116542089_987908734978792_2138725175343785103_n.jpg?_nc_cat=102&_nc_sid=85a577&_nc_ohc=1dx2Ge3ZX7sAX_e0grY&_nc_ht=scontent-cdg2-1.xx&oh=3ff014877528beb00be7c6bcaba24cac&oe=5F627E3E"
  mariem = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/p960x960/79951928_2520578464856756_1341550360803672064_o.jpg?_nc_cat=104&_nc_sid=85a577&_nc_ohc=Aue7k8CT2BYAX-35HPY&_nc_ht=scontent-cdg2-1.xx&_nc_tp=6&oh=2543c805d1a17ef6a180182d88610f2e&oe=5F6267EC"
  ons = "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/116437000_3065708190173771_2535649002713262243_n.jpg?_nc_cat=105&_nc_sid=85a577&_nc_ohc=9RC0rikNsgIAX8uE--z&_nc_ht=scontent-cdt1-1.xx&oh=0342293efd54e0bbb902e206152b2a4e&oe=5F63A5F8"
  hatem = "https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-9/115558513_2330344623926573_4749040569317583572_n.jpg?_nc_cat=107&_nc_sid=85a577&_nc_ohc=GMuq6UrhveYAX-o7Njh&_nc_ht=scontent-cdg2-1.xx&oh=251804ed4a80c42bf493faa347c70861&oe=5F61063C"
  wided = "https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/93702740_899199557195909_1066885759115460608_n.jpg?_nc_cat=110&_nc_sid=85a577&_nc_ohc=0IM7BjxofZIAX9b4D-G&_nc_ht=scontent-cdt1-1.xx&oh=f74178c6904babef7cbeef4b5d0f52c3&oe=5F6385E7"
  content = new Array <any> ()
  constructor(){
    this.content = [
        { title: 'Nada yassine', description:'Faculté de science bizerte', image: this.nada },
        { title: 'Wahid boujemaa', description:'Iset bizerte', image: this.wahid },
        { title: 'Wided May', description:'Iset bizerte', image: this.wided },
        { title: 'Zied Dams', description:'Iset bizerte', image: this.zied },
        { title: 'Semah mrad', description:'Iset bizerte', image: this.semah },
        { title: 'Mariem ishak', description:'Faculté manar tunis', image: this.mariem },
        { title: 'Ons hamdi', description:'Fac d\'ing', image: this.ons },
        { title: 'Hatem helal', description:'Fac d\'ing', image: this.hatem },
      ];
  }
}
