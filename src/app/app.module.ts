import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { PessoaListComponent } from './components/pessoa/pessoa-list/pessoa-list.component';
import { PessoaCreateComponent } from './components/pessoa/pessoa-create/pessoa-create.component';
import { PessoaUpdateComponent } from './components/pessoa/pessoa-update/pessoa-update.component';
import { PessoaDeleteComponent } from './components/pessoa/pessoa-delete/pessoa-delete.component';



// Para realizar requisições HTTP
// Imports para componentes do Angular Material
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    PessoaListComponent,
    PessoaCreateComponent,
    PessoaUpdateComponent,
    PessoaDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
     // Forms
     FormsModule,
     ReactiveFormsModule,
     // Requisições http
     HttpClientModule,
     // Angular Material
     MatFormFieldModule,
     MatPaginatorModule,
     MatCheckboxModule,
     MatSnackBarModule,
     MatToolbarModule,
     MatSidenavModule,
     MatButtonModule,
     MatSelectModule,
     MatInputModule,
     MatRadioModule,
     MatTableModule,
     MatIconModule,
     MatListModule,
     MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
