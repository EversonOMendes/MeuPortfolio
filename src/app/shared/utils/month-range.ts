const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

interface YearMonth {
  readonly year: number;
  readonly month: number; // 1-12
}

function parse(value: string): YearMonth {
  const [year, month] = value.split('-').map(Number);
  return { year, month };
}

function current(today: Date): YearMonth {
  return { year: today.getFullYear(), month: today.getMonth() + 1 };
}

export function formatMonth(value: string): string {
  const { year, month } = parse(value);
  return `${MONTHS[month - 1]} ${year}`;
}

export function formatPeriod(start: string, end?: string): string {
  return `${formatMonth(start)} - ${end ? formatMonth(end) : 'Atual'}`;
}

export function monthsBetween(start: string, end?: string, today = new Date()): number {
  const a = parse(start);
  const b = end ? parse(end) : current(today);
  return Math.max(1, (b.year - a.year) * 12 + (b.month - a.month) + 1);
}

export function formatDuration(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const y = years ? `${years} ${years === 1 ? 'ano' : 'anos'}` : '';
  const m = months ? `${months} ${months === 1 ? 'mês' : 'meses'}` : '';
  return [y, m].filter(Boolean).join(' e ');
}
