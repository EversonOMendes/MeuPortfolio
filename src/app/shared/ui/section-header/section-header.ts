import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Cabeçalho de seção: eyebrow (`/ TEXTO`) + título opcional projetado.
 * Use `<span class="hl">` dentro do título para o destaque em laranja.
 */
@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.html',
  styleUrl: './section-header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.compact]': 'compact()' },
})
export class SectionHeader {
  readonly eyebrow = input.required<string>();
  readonly accent = input(true);
  /** Versão sem margem inferior, para usos dentro de faixas/cards. */
  readonly compact = input(false);
}
