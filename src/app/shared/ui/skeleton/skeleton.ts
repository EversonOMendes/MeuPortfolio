import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type SkeletonShape = 'rect' | 'text' | 'circle';

/** Bloco de carregamento com shimmer. Puramente visual (`aria-hidden`). */
@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.html',
  styleUrl: './skeleton.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'aria-hidden': 'true',
    '[class.skeleton--text]': "shape() === 'text'",
    '[class.skeleton--circle]': "shape() === 'circle'",
    '[style.width]': 'width()',
    '[style.height]': 'height()',
    '[style.border-radius]': 'radius()',
  },
})
export class Skeleton {
  readonly shape = input<SkeletonShape>('rect');
  readonly width = input('100%');
  readonly height = input<string>();
  readonly radius = input<string>();
}
