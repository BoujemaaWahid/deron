import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes,
  } from '@angular/animations';

  function slideTo(direction) {
    const optional = { optional: true };
    return [
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          [direction]: 0,
          width: '100%'
        }),
      ], optional),
      query(':enter', [
        style({[direction]: '-100%'})
      ]),
      group([
        query(':leave', [
          animate('400ms ease', style({[direction]: '100%'}))
        ], optional)
      ]),
      query(':enter', [
        animate('400ms ease', style({[direction]: '0%'}))
      ], optional)
    ];
  }
  export const slider = trigger('routeAnimations', [
    transition('isLogin => isRegister', slideTo('right') ),
    transition('isRegister => isLogin', slideTo('left') )
  ]);