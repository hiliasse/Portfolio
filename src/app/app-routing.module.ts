import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContactComponent } from './contact/contact.component';
import { CreationsComponent } from './creations/creations.component';
import { ProposComponent } from './propos/propos.component';

const routes: Routes = [
 
 
  { path: "accueil", component: AccueilComponent},
  { path: "propos", component: ProposComponent},
  { path: "mesCreations", component: CreationsComponent},
  { path: "contact", component: ContactComponent},
  { path: "", redirectTo: "accueil",pathMatch:"full" },
  { path: "**", redirectTo: "accueil",pathMatch:"full" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
