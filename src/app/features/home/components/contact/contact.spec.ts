import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RESUME } from '../../../../core/data/portfolio.data';
import { Contact } from './contact';

describe('Contact', () => {
  let component: Contact;
  let fixture: ComponentFixture<Contact>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contact],
    }).compileComponents();

    fixture = TestBed.createComponent(Contact);
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
