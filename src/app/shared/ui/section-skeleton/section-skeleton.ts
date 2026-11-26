import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Skeleton } from '../skeleton/skeleton';

export type SectionSkeletonVariant = 'split' | 'cards' | 'timeline' | 'cta';

/**
 * Placeholder de seção inteira, com layout próximo do conteúdo real para evitar
 * saltos de layout (CLS) enquanto blocos `@defer` carregam.
 */
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
