import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCES } from '../../../../core/data/portfolio.data';
import { Experience as ExperienceItem } from '../../../../shared/models/portfolio.model';
import { DurationPipe } from '../../../../shared/pipes/duration-pipe';
import { PeriodPipe } from '../../../../shared/pipes/period-pipe';
import { Icon } from '../../../../shared/ui/icon/icon';
import { LogoTile } from '../../../../shared/ui/logo-tile/logo-tile';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-experience',
  imports: [DurationPipe, PeriodPipe, Icon, LogoTile, SectionHeader],
  templateUrl: './experience.html',
  styleUrl: './experience.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly experiences = EXPERIENCES;

  /** Início do primeiro cargo na empresa (os cargos vêm do mais recente ao mais antigo). */
  protected firstStart(exp: ExperienceItem): string {
    return exp.roles[exp.roles.length - 1].start;
  }

  /** Fim do cargo mais recente; `undefined` se ainda estiver na empresa. */
  protected lastEnd(exp: ExperienceItem): string | undefined {
    return exp.roles[0].end;
  }

  protected initials(name: string): string {
    return name
      .split(/\s+/)
      .map((word) => word[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }
}
