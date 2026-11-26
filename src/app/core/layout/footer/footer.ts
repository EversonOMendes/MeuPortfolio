import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../data/portfolio.data';
import { ScrollTo } from '../../../shared/directives/scroll-to';
import { Icon } from '../../../shared/ui/icon/icon';

@Component({
  selector: 'app-footer',
  imports: [ScrollTo, Icon],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly year = new Date().getFullYear();
  protected readonly links = SOCIAL_LINKS;
}
