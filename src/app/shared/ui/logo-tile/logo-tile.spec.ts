import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoTile } from './logo-tile';

describe('LogoTile', () => {
  let component: LogoTile;
  let fixture: ComponentFixture<LogoTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoTile],
    }).compileComponents();

    fixture = TestBed.createComponent(LogoTile);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('src', 'assets/x.webp');
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
