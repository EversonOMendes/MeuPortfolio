import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionSkeleton } from './section-skeleton';

describe('SectionSkeleton', () => {
  let component: SectionSkeleton;
  let fixture: ComponentFixture<SectionSkeleton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionSkeleton],
    }).compileComponents();

    fixture = TestBed.createComponent(SectionSkeleton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
