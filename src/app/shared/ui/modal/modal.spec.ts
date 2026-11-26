import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modal } from './modal';

describe('Modal', () => {
  let component: Modal;
  let fixture: ComponentFixture<Modal>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modal],
    }).compileComponents();

    fixture = TestBed.createComponent(Modal);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('title', 'SmartChat');
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('não renderiza o painel enquanto fechado', () => {
    expect(el.querySelector('.modal__panel')).toBeNull();
  });

  it('renderiza título acessível quando aberto', async () => {
    fixture.componentRef.setInput('open', true);
    await fixture.whenStable();

    const dialog = el.querySelector('dialog')!;
    const title = el.querySelector('.modal__title')!;
    expect(title.textContent).toContain('SmartChat');
    expect(dialog.getAttribute('aria-labelledby')).toBe(title.id);
  });

  it('fecha pelo botão e emite openChange(false)', async () => {
    const emitted: boolean[] = [];
    component.open.subscribe((v) => emitted.push(v));
    fixture.componentRef.setInput('open', true);
    await fixture.whenStable();

    el.querySelector<HTMLButtonElement>('.modal__close')!.click();
    await fixture.whenStable();

    expect(component.open()).toBe(false);
    expect(emitted).toContain(false);
    expect(el.querySelector('.modal__panel')).toBeNull();
  });

  it('fecha com Esc (evento cancel do <dialog>)', async () => {
    fixture.componentRef.setInput('open', true);
    await fixture.whenStable();

    el.querySelector('dialog')!.dispatchEvent(new Event('cancel', { cancelable: true }));
    await fixture.whenStable();

    expect(component.open()).toBe(false);
  });
});
