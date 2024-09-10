import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './component/index/index.component';
import { ProdottoComponent } from './component/prodotto/prodotto.component';
import { ListMaglietteComponent } from './component/list-magliette/list-magliette.component';
import { ListCamicieComponent } from './component/list-camicie/list-camicie.component';
import { ListPantaloniComponent } from './component/list-pantaloni/list-pantaloni.component';
import { ListVestitiComponent } from './component/list-vestiti/list-vestiti.component';
import { ListScarpeComponent } from './component/list-scarpe/list-scarpe.component';
import { ListProdottiComponent } from './component/list-prodotti/list-prodotti.component';
import { OrdiniAdminComponent } from './component/ordini-admin/ordini-admin.component';
import { ProfiloComponent } from './component/profilo/profilo.component';
import { CreateAdminComponent } from './component/create-admin/create-admin.component';
import { NuovoProdottoComponent } from './component/nuovo-prodotto/nuovo-prodotto.component';


const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'index/prodotto', component: ProdottoComponent},
  { path: 'index/listMagliette', component: ListMaglietteComponent },
  { path: 'index/listCamicie', component: ListCamicieComponent },
  { path: 'index/listPantaloni', component: ListPantaloniComponent },
  { path: 'index/listVestiti', component: ListVestitiComponent },
  { path: 'index/listScarpe', component: ListScarpeComponent },
  { path: 'index/listAll', component: ListProdottiComponent },
  { path: 'ordiniAdmin', component: OrdiniAdminComponent},
  { path: 'createAdmin', component: CreateAdminComponent },
  { path: 'profilo', component: ProfiloComponent },
  { path: 'nuovoProdotto', component: NuovoProdottoComponent }
 /*  { path: 'logout', component: LogoutComponent } */

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
