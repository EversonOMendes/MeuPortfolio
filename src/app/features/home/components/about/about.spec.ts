import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESUME } from '../../../../core/data/portfolio.data';
import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('oferece o currículo em PDF para download', () => {
    const links = Array.from(
      (fixture.nativeElement as HTMLElement).querySelectorAll<HTMLAnchorElement>('a[download]'),
    ).map((a) => a.getAttribute('href'));

    expect(links).toEqual([RESUME.pdf]);
  });
});
