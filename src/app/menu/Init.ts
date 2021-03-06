declare var $: any;
export class Init {
  public static shake_notify_key = [{
      offset: 0.25,
      transform: 'translate3d(-10px, 10px, 0)'
    },
    {
      offset: 0.50,
      transform: 'translate3d(1px, 10px, 0)'
    },
    {
      offset: 0.75,
      transform: 'translate3d(-10px, 10px, 0)'
    },
    {
      offset: 1,
      transform: 'translate3d(0px, 10px, 0)'
    }

  ]
  public static init() {
    addActiveListener()
  }
  public static shakeInfoNotify() {
    
    document.getElementById("infoItem_notify_").animate(Init.shake_notify_key, {
      duration: 500
    })
  }
  public static shakeMsgNotify() {
    document.getElementById("messageItem_notify_").animate(Init.shake_notify_key, {
      duration: 500
    })
  }
}

function addActiveListener() {
  let a = document.getElementsByClassName("menu_item")

  for (let item = 0; item < a.length; item++) {
    a[item].addEventListener('click', () => {
      for (let item2 = 0; item2 < a.length; item2++) {
        a[item2].classList.remove('active')
      }
      a[item].classList.add('active')
    })
  }
}
$(function () {
  $(document).ready(function () {
    $("#search_people_1").focusin(function () {
      $("#search_container_1").removeClass('closeInputSearch')
      $("#search_container_1").addClass('openInputSearch')
      $("#search_container_1").css({
        width: '35%'
      })
    }).focusout(function () {
      $("#search_container_1").removeClass('openInputSearch')
      $("#search_container_1").addClass('closeInputSearch')
      $("#search_container_1").css({
        width: '120px'
      })
    })
    $("#results_search_find_people").on('DOMSubtreeModified', function () {
      $('#results_search_find_people .result .image img').css({
        'border-radius': '25px',
        width: '42px',
        height: '42px'
      })
      $('#results_search_find_people .result .content').css({
        'margin-top': '4%'
      })
      $('#results_search_find_people .result .content .title').css({
        'font-weight': 'bold',
        'color': 'black'
      })
    })

    $(".dropdown").dropdown()
    

  })
}())
