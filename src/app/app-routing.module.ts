import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ToolsPortfolioComponent } from './components/tools-portfolio/tools-portfolio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    title: 'Página Inicial',
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuard],
  },
  {
    title: 'Sobre Mim',
    path: 'about',
    component: ToolsPortfolioComponent,
    // canActivate: [AuthGuard],
  },
  {
    title: 'Meus Projetos',
    path: 'projects',
    component: HomeComponent,
    // canActivate: [AuthGuard],
  },

  // // Página não encontrada
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
