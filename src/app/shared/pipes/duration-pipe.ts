import { Pipe, PipeTransform } from '@angular/core';
import { formatDuration, monthsBetween } from '../utils/month-range';

/** `'2023-01' | duration: '2023-12'` → '1 ano' · sem fim, conta até o mês atual. */
@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(start: string, end?: string): string {
    return formatDuration(monthsBetween(start, end));
  }
}
