import { ChangeDetectionStrategy, Component, computed, model } from '@angular/core';
import { Project } from '../../../../shared/models/portfolio.model';
import { Modal } from '../../../../shared/modals/modal/modal';
import { Button } from '../../../../shared/ui/button/button';
import { Icon } from '../../../../shared/ui/icon/icon';
import { LogoTile } from '../../../../shared/ui/logo-tile/logo-tile';

/**
 * Detalhes de um projeto. Abre quando `project` recebe um valor e o limpa ao fechar.
 * Uso: `<app-project-details-modal [(project)]="selecionado" />`
 */
@Component({
  selector: 'app-project-details-modal',
  imports: [Modal, Button, Icon, LogoTile],
  templateUrl: './project-details-modal.html',
  styleUrl: './project-details-modal.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectDetailsModal {
  readonly project = model<Project | null>(null);

  protected readonly open = computed(() => this.project() !== null);

  protected onOpenChange(open: boolean): void {
    if (!open) this.project.set(null);
  }
}
