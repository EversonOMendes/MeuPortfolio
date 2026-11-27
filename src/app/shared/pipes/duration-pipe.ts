import { Pipe, PipeTransform } from '@angular/core';
import { formatDuration, monthsBetween } from '../utils/month-range';

@Pipe({
  name: 'duration',
})
export class DurationPipe implements PipeTransform {
  transform(start: string, end?: string): string {
    return formatDuration(monthsBetween(start, end));
  }
}
