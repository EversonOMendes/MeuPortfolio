import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsPortfolioComponent } from './tools-portfolio.component';

describe('ToolsPortfolioComponent', () => {
  let component: ToolsPortfolioComponent;
  let fixture: ComponentFixture<ToolsPortfolioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolsPortfolioComponent]
    });
    fixture = TestBed.createComponent(ToolsPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
