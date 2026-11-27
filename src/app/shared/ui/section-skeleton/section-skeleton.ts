import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Skeleton } from '../skeleton/skeleton';

export type SectionSkeletonVariant = 'split' | 'cards' | 'timeline' | 'cta';

@Component({
  selector: 'app-section-skeleton',
  imports: [Skeleton],
  templateUrl: './section-skeleton.html',
  styleUrl: './section-skeleton.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { role: 'status', 'aria-busy': 'true' },
})
export class SectionSkeleton {
  readonly variant = input<SectionSkeletonVariant>('split');
  protected readonly three = [0, 1, 2];
}
