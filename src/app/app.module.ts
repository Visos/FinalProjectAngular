import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatListModule, MatListItem} from '@angular/material/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { CarrelloComponent } from './component/carrello/carrello.component';
import { CreateAdminComponent } from './component/create-admin/create-admin.component';
import { CreateUserComponent } from './component/create-user/create-user.component';
import { IndexComponent } from './component/index/index.component';
import { ListCamicieComponent } from './component/list-camicie/list-camicie.component';
import { ListMaglietteComponent } from './component/list-magliette/list-magliette.component';
import { ListPantaloniComponent } from './component/list-pantaloni/list-pantaloni.component';
import { ListVestitiComponent } from './component/list-vestiti/list-vestiti.component';
import { ListScarpeComponent } from './component/list-scarpe/list-scarpe.component';
import { ListProdottiComponent } from './component/list-prodotti/list-prodotti.component';
import { NuovoProdottoComponent } from './component/nuovo-prodotto/nuovo-prodotto.component';
import { ProdottoComponent } from './component/prodotto/prodotto.component';
import { OrdiniComponent } from './component/ordini/ordini.component';
import { ProfiloComponent } from './component/profilo/profilo.component';
import { OrdiniAdminComponent } from './component/ordini-admin/ordini-admin.component';
import { OrdiniAdminAllComponent } from './component/ordini-admin-all/ordini-admin-all.component';
import { HeaderComponent } from './component/fragments/header/header.component';
import { SidebarComponent } from './component/fragments/sidebar/sidebar.component';
import { HeaderAdminComponent } from './component/fragments/header-admin/header-admin.component';
import { HeaderUserComponent } from './component/fragments/header-user/header-user.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    SignUpComponent,
    CarrelloComponent,
    CreateAdminComponent,
    CreateUserComponent,
    IndexComponent,
    ListCamicieComponent,
    ListMaglietteComponent,
    ListPantaloniComponent,
    ListVestitiComponent,
    ListScarpeComponent,
    ListProdottiComponent,
    NuovoProdottoComponent,
    ProdottoComponent,
    OrdiniComponent,
    ProfiloComponent,
    OrdiniAdminComponent,
    OrdiniAdminAllComponent,
    HeaderComponent,
    SidebarComponent,
    HeaderAdminComponent,
    HeaderUserComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatListItem
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
