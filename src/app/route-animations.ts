import { query, transition, trigger, style, animate } from "@angular/animations";

export const fader = trigger('routeAnimations', [
  transition('* <=> *', [
    query(':enter', [
      style({ opacity: 0, position: 'absolute', width: '100%', left: 0 })
    ], { optional: true }),

    query(':leave', [style({ position: 'absolute', width: '100%', left: 0})], { optional: true}),
    query(':leave', [animate('600ms', style({ opacity: 0 }))], {optional: true}),
    
    query(':enter', [
      animate('600ms', style({ opacity: 1 }))
    ], { optional: true }),
    
  ]),
]);