import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { COMPANY, PROJECTS } from '../../../../core/data/portfolio.data';
import { Project } from '../../../../shared/models/portfolio.model';
import { Button } from '../../../../shared/ui/button/button';
import { Icon } from '../../../../shared/ui/icon/icon';
import { LogoTile } from '../../../../shared/ui/logo-tile/logo-tile';
import { Modal } from '../../../../shared/ui/modal/modal';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';
import { ProjectCard } from '../project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [Button, Icon, LogoTile, Modal, SectionHeader, ProjectCard],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly company = COMPANY;
  protected readonly projects = PROJECTS;

  protected readonly selected = signal<Project | null>(null);
  protected readonly modalOpen = computed(() => this.selected() !== null);

  protected openDetails(project: Project): void {
    this.selected.set(project);
  }

  protected onModalOpenChange(open: boolean): void {
    if (!open) this.selected.set(null);
  }
}
