import { animate, style, transition, trigger } from '@angular/animations';

const easingFn = '300ms ease-in-out';
const translateOffset = 33;

export const routeAnimations = trigger('routeAnimation', [
  transition('center => bottom', [
    style({ opacity: 0, transform: `translateY(${translateOffset}%)` }),
    animate(easingFn, style({ opacity: 1, transform: 'translateY(0)' })),
  ]),
  transition('bottom => center', [
    style({ opacity: 0 }),
    animate(easingFn, style({ opacity: 1 })),
  ]),
  transition('center => left', [
    style({ opacity: 0, transform: `translateX(-${translateOffset}%)` }),
    animate(easingFn, style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition('left => center', [
    style({ opacity: 0, transform: `translateX(${translateOffset}%)` }),
    animate(easingFn, style({ opacity: 1, transform: 'translateX(0)' })),
  ]),
  transition('* <=> *', [
    style({ opacity: 0 }),
    animate('400ms ease-in-out', style({ opacity: 1 })),
  ]),
]);
