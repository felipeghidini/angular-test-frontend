import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonLinkComponent } from './components/button-link/button-link.component';
import { SelectLinkComponent } from './components/select-link/select-link.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'buttons',
    component: ButtonLinkComponent
  },
  {
    path: 'selects',
    component: SelectLinkComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
