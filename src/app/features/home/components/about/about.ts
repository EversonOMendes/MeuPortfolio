import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CERTIFICATIONS, EDUCATION, RESUME } from '../../../../core/data/portfolio.data';
import { Button } from '../../../../shared/ui/button/button';
import { Icon } from '../../../../shared/ui/icon/icon';
import { SectionHeader } from '../../../../shared/ui/section-header/section-header';

@Component({
  selector: 'app-about',
  imports: [Button, Icon, SectionHeader],
  templateUrl: './about.html',
  styleUrl: './about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly education = EDUCATION;
  protected readonly certifications = CERTIFICATIONS;
  protected readonly resume = RESUME;
  protected readonly stats = [
    { value: '2018', label: 'programando desde' },
    { value: '10+', label: 'tecnologias no dia a dia' },
    { value: '3', label: 'produtos próprios em produção' },
  ] as const;
}
