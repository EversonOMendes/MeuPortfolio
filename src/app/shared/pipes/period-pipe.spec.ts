import { PeriodPipe } from './period-pipe';

describe('PeriodPipe', () => {
  it('create an instance', () => {
    const pipe = new PeriodPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform('2022-11', '2023-01')).toBe('Nov 2022 — Jan 2023');
    expect(pipe.transform('2023-12')).toBe('Dez 2023 — Atual');
  });
});
