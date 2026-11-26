/**
 * Utilitários para períodos no formato `YYYY-MM` (ex.: '2023-12').
 * `end` ausente significa "até hoje".
 */

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

/** '2023-12' → 'Dez 2023' */
export function formatMonth(value: string): string {
  const { year, month } = parse(value);
  return `${MONTHS[month - 1]} ${year}`;
}

/** 'Dez 2023 — Atual' | 'Jan 2023 — Dez 2023' */
export function formatPeriod(start: string, end?: string): string {
  return `${formatMonth(start)} — ${end ? formatMonth(end) : 'Atual'}`;
}

/** Quantidade de meses, contando o mês inicial e o final (mesma regra do LinkedIn). */
export function monthsBetween(start: string, end?: string, today = new Date()): number {
  const a = parse(start);
  const b = end ? parse(end) : current(today);
  return Math.max(1, (b.year - a.year) * 12 + (b.month - a.month) + 1);
}

/** 35 → '2 anos e 11 meses' · 12 → '1 ano' · 3 → '3 meses' */
export function formatDuration(totalMonths: number): string {
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const y = years ? `${years} ${years === 1 ? 'ano' : 'anos'}` : '';
  const m = months ? `${months} ${months === 1 ? 'mês' : 'meses'}` : '';
  return [y, m].filter(Boolean).join(' e ');
}
