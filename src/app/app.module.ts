import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
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
    OrdiniAdminAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
