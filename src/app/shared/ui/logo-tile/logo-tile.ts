import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { Skeleton } from '../skeleton/skeleton';

@Component({
  selector: 'app-logo-tile',
  imports: [Skeleton],
  templateUrl: './logo-tile.html',
  styleUrl: './logo-tile.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--tile]': "size() + 'px'",
  },
})
export class LogoTile {
  readonly src = input.required<string>();
  readonly alt = input('');
  readonly size = input(56);
  protected readonly loaded = signal(false);
}
