import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button } from './button';

@Component({
  imports: [Button],
  template: `
    <a appButton href="#x">Primário</a>
    <button appButton variant="outline" size="sm" type="button">Outline</button>
  `,
})
class Host {}

describe('Button', () => {
  let fixture: ComponentFixture<Host>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Host],
    }).compileComponents();

    fixture = TestBed.createComponent(Host);
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(el.querySelectorAll('.btn').length).toBe(2);
  });

  it('mantém o elemento nativo e aplica a variante padrão', () => {
    const link = el.querySelector('a')!;
    expect(link.getAttribute('href')).toBe('#x');
    expect(link.classList).toContain('btn--primary');
  });

  it('aplica variante e tamanho informados', () => {
    const button = el.querySelector('button')!;
    expect(button.classList).toContain('btn--outline');
    expect(button.classList).toContain('btn--sm');
    expect(button.classList).not.toContain('btn--primary');
  });
});
