import { DurationPipe } from './duration-pipe';

describe('DurationPipe', () => {
  it('create an instance', () => {
    const pipe = new DurationPipe();
    expect(pipe).toBeTruthy();
    expect(pipe.transform('2023-01', '2023-12')).toBe('1 ano');
    expect(pipe.transform('2022-11', '2023-01')).toBe('3 meses');
  });
});
