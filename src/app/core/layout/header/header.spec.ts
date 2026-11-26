import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NAV_ITEMS } from '../../data/portfolio.data';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renderiza um link por item de navegação', () => {
    const links = el.querySelectorAll('.nav__link');
    expect(links.length).toBe(NAV_ITEMS.length);
    expect(links[0].getAttribute('href')).toBe('#' + NAV_ITEMS[0].id);
  });

  it('abre e fecha o menu mobile', async () => {
    const toggle = el.querySelector<HTMLButtonElement>('.menu-toggle')!;
    expect(toggle.getAttribute('aria-expanded')).toBe('false');

    toggle.click();
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(el.querySelector('.nav')!.classList).toContain('is-open');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(toggle.getAttribute('aria-expanded')).toBe('false');
  });
});
