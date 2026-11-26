import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NAV_ITEMS, SOCIAL_LINKS } from '../../data/portfolio.data';
import { ScrollSpy } from '../../services/scroll-spy';
import { ScrollTo } from '../../../shared/directives/scroll-to';
import { Icon } from '../../../shared/ui/icon/icon';

@Component({
  selector: 'app-header',
  imports: [ScrollTo, Icon],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'menuOpen.set(false)',
  },
})
export class Header {
  protected readonly nav = NAV_ITEMS;
  protected readonly links = SOCIAL_LINKS;
  protected readonly active = inject(ScrollSpy).active;

  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected onScroll(): void {
    const isScrolled = window.scrollY > 10;
    if (isScrolled !== this.scrolled()) this.scrolled.set(isScrolled);
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }
}
