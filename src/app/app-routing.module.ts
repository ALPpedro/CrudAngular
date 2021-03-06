import { PessoaDeleteComponent } from './components/pessoa/pessoa-delete/pessoa-delete.component';
import { PessoaUpdateComponent } from './components/pessoa/pessoa-update/pessoa-update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

import { NavComponent } from './components/nav/nav.component';
import { PessoaCreateComponent } from './components/pessoa/pessoa-create/pessoa-create.component';
import { PessoaListComponent } from './components/pessoa/pessoa-list/pessoa-list.component';
import { UploadComponent } from './components/upload/upload.component';

const routes: Routes = [
  { path:'', component: NavComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'pessoas', component: PessoaListComponent },
    {path: 'upload', component: UploadComponent},
    {path: 'pessoas/create', component: PessoaCreateComponent },
    {path: 'pessoas/update/:id', component: PessoaUpdateComponent },
    {path: 'pessoas/delete/:id', component: PessoaDeleteComponent }

  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
