import { Component } from '@angular/core';

@Component({
  selector: 'app-tools-portfolio',
  templateUrl: './tools-portfolio.component.html',
  styleUrls: ['./tools-portfolio.component.css']
})
export class ToolsPortfolioComponent {
  title = 'MeuPortfolio';
  public isMenuOpen = false;

  public toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
