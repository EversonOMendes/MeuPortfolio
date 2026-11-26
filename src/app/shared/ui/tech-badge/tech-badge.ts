import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Tech } from '../../models/portfolio.model';

@Component({
  selector: 'app-tech-badge',
  templateUrl: './tech-badge.html',
  styleUrl: './tech-badge.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechBadge {
  readonly tech = input.required<Tech>();
}
