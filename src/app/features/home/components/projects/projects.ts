import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { COMPANY, PROJECTS } from '../../../../core/data/portfolio.data';
import { Project } from '../../../../shared/models/portfolio.model';
import { Button } from '../../../../shared/ui/button/button';
import { Icon } from '../../../../shared/ui/icon/icon';
import { LogoTile } from '../../../../shared/ui/logo-tile/logo-tile';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { ProjectDetailsModal } from '../../modals/project-details-modal/project-details-modal';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [Button, Icon, LogoTile, SectionHeader, ProjectCard, ProjectDetailsModal],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly company = COMPANY;
  protected readonly projects = PROJECTS;

  protected readonly selected = signal<Project | null>(null);

  protected openDetails(project: Project): void {
    this.selected.set(project);
  }
}
