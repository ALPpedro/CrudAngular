import { PessoaUpdateComponent } from './components/pessoa/pessoa-update/pessoa-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { NavComponent } from './components/nav/nav.component';
import { PessoaCreateComponent } from './components/pessoa/pessoa-create/pessoa-create.component';
import { PessoaListComponent } from './components/pessoa/pessoa-list/pessoa-list.component';

const routes: Routes = [
  { path:'', component: NavComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'pessoas', component: PessoaListComponent },
    {path: 'pessoas/create', component: PessoaCreateComponent },
    {path: 'pessoas/update/:id', component: PessoaUpdateComponent }

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
