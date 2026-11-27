import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RESUME, SOCIAL_LINKS } from '../../../../core/data/portfolio.data';
import { Button } from '../../../../shared/ui/button/button';
import { Icon } from '../../../../shared/ui/icon/icon';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-contact',
  imports: [Button, Icon, SectionHeader],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly links = SOCIAL_LINKS;
  protected readonly resume = RESUME;
}
