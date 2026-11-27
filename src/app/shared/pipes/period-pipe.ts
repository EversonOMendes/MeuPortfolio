import { Pipe, PipeTransform } from '@angular/core';
import { formatPeriod } from '../utils/month-range';

@Pipe({
  name: 'period',
})
export class PeriodPipe implements PipeTransform {
  transform(start: string, end?: string): string {
    return formatPeriod(start, end);
  }
}
