import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayCardComponent } from './design-frame/display_card/display-card/display-card.component';
import { HomeComponent } from './design-frame/home/home/home.component';
import { DetailCardComponent } from './design-frame/detail_card/detail-card/detail-card.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'displaycard/:id', component: DisplayCardComponent},
  { path: 'detailcard/:id', component: DetailCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
