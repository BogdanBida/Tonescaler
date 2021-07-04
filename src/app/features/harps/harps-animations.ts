import { animate, style, transition, trigger } from '@angular/animations';

export const InsertRemoveAnimationTrigger = trigger('InsertRemoveTrigger', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(100%)' }),
    animate(
      '300ms {{delay}} ease-out',
      style({ opacity: 1, transform: 'translateY(0)' })
    ),
  ]),
  transition(':leave', [
    animate('300ms', style({ opacity: 0, transform: 'translateY(100%)' })),
  ]),
]);
