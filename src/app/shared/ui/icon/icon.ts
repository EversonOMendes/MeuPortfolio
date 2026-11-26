import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'arrow-right'
  | 'arrow-up'
  | 'rocket'
  | 'mail'
  | 'send'
  | 'linkedin'
  | 'github'
  | 'close'
  | 'external'
  | 'check'
  | 'menu'
  | 'whatsapp';

/** Ícones SVG inline (sem dependência externa), herdam `currentColor`. */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'aria-hidden': 'true',
    '[style.width.px]': 'size()',
    '[style.height.px]': 'size()',
  },
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
}
