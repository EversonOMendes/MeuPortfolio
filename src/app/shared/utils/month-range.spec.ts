import { formatDuration, formatMonth, formatPeriod, monthsBetween } from './month-range';

describe('month-range', () => {
  it('formata mês e período', () => {
    expect(formatMonth('2023-12')).toBe('Dez 2023');
    expect(formatPeriod('2023-01', '2023-12')).toBe('Jan 2023 - Dez 2023');
    expect(formatPeriod('2025-06')).toBe('Jun 2025 - Atual');
  });

  it('conta meses incluindo início e fim', () => {
    expect(monthsBetween('2023-01', '2023-12')).toBe(12);
    expect(monthsBetween('2022-11', '2023-01')).toBe(3);
    expect(monthsBetween('2025-06', undefined, new Date(2026, 10, 25))).toBe(18);
  });

  it('formata duração em português', () => {
    expect(formatDuration(1)).toBe('1 mês');
    expect(formatDuration(12)).toBe('1 ano');
    expect(formatDuration(18)).toBe('1 ano e 6 meses');
    expect(formatDuration(35)).toBe('2 anos e 11 meses');
  });
});
