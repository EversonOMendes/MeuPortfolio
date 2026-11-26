import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EDUCATION } from '../../../../core/data/portfolio.data';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-about',
  imports: [SectionHeader],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly education = EDUCATION;
  protected readonly stats = [
    { value: '2018', label: 'programando desde' },
    { value: '10+', label: 'tecnologias no dia a dia' },
    { value: '3', label: 'produtos próprios em produção' },
  ] as const;
}
