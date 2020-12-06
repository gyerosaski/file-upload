import { animate, group, state, style, transition, trigger } from '@angular/animations';

export const FadeInOutAnimation = [
    trigger('fadeInOut', [
        state('fadeOut', style({
            'opacity': '0',
            'visibility': 'hidden'
        })),
        state('fadeIn', style({
            'opacity': '1',
            'visibility': 'visible'
        })),
        transition('fadeOut => fadeIn', [group([
            animate('300ms ease-in-out', style({
                'opacity': '1'
            })),
        ])]),
        transition('fadeIn => fadeOut', [group([
            animate('300ms ease-in-out', style({
                'opacity': '0'
            }))
        ])])
    ]),
]
