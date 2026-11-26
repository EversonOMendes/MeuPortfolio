import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { Project } from '../../../../shared/models/portfolio.model';
import { Icon } from '../../../../shared/ui/icon/icon';
import { LogoTile } from '../../../../shared/ui/logo-tile/logo-tile';

@Component({
  selector: 'app-project-card',
  imports: [Icon, LogoTile],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly details = output<Project>();
}
