import { Pipe, PipeTransform } from '@angular/core';
import { formatPeriod } from '../utils/month-range';

/** `'2023-12' | period` → 'Dez 2023 — Atual' · `'2023-01' | period: '2023-12'` → 'Jan 2023 — Dez 2023' */
@Pipe({
  name: 'period',
})
export class PeriodPipe implements PipeTransform {
  transform(start: string, end?: string): string {
    return formatPeriod(start, end);
  }
}
