import { DOCUMENT } from '@angular/common';
import { Directive, inject, input } from '@angular/core';

@Directive({
  selector: 'a[appScrollTo]',
  host: {
    '[attr.href]': "'#' + appScrollTo()",
    '(click)': 'onClick($event)',
  },
})
export class ScrollTo {
  readonly appScrollTo = input.required<string>();
  private readonly document = inject(DOCUMENT);

  protected onClick(event: MouseEvent): void {
    if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) {
      return;
    }
    const target = this.document.getElementById(this.appScrollTo());
    if (!target) return;

    event.preventDefault();
    const reduceMotion = this.document.defaultView?.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  }
}
