import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { ScrollTo } from './scroll-to';

@Component({
  imports: [ScrollTo],
  template: `
    <a appScrollTo="alvo">Ir</a>
    <div id="alvo"></div>
  `,
})
class Host {}

describe('ScrollTo', () => {
  it('should create an instance', async () => {
    await TestBed.configureTestingModule({ imports: [Host] }).compileComponents();
    const fixture = TestBed.createComponent(Host);
    document.body.appendChild(fixture.nativeElement);
    await fixture.whenStable();

    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    const target: HTMLElement = fixture.nativeElement.querySelector('#alvo');
    target.scrollIntoView = vi.fn();

    expect(link.getAttribute('href')).toBe('#alvo');

    const event = new MouseEvent('click', { bubbles: true, cancelable: true, button: 0 });
    link.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
    expect(target.scrollIntoView).toHaveBeenCalled();

    fixture.nativeElement.remove();
  });
});
