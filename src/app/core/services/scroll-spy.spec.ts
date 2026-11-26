import { TestBed } from '@angular/core/testing';

import { ScrollSpy } from './scroll-spy';

describe('ScrollSpy', () => {
  let service: ScrollSpy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
    expect(service.active()).toBeNull();
  });

  it('não falha sem IntersectionObserver (ex.: SSR/jsdom)', () => {
    expect(() => service.observe(['inicio', 'sobre'])).not.toThrow();
  });
});
