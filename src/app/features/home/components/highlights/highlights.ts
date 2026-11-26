import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS, TECHS } from '../../../../core/data/portfolio.data';
import { ScrollTo } from '../../../../shared/directives/scroll-to';
import { Icon } from '../../../../shared/ui/icon/icon';
import { LogoTile } from '../../../../shared/ui/logo-tile/logo-tile';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { TechBadge } from '../../../../shared/ui/tech-badge/tech-badge';

@Component({
  selector: 'app-highlights',
  imports: [ScrollTo, Icon, LogoTile, SectionHeader, TechBadge],
  templateUrl: './highlights.html',
  styleUrl: './highlights.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Highlights {
  protected readonly techs = TECHS;
  protected readonly projects = PROJECTS;
}
