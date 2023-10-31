import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import { DisplayCardComponent } from './display_card/display-card/display-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { DetailCardComponent } from './detail_card/detail-card/detail-card.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    DisplayCardComponent,
    DetailCardComponent
  ],
  imports: [
    CommonModule,
    MatCardModule, 
    MatButtonModule,
    MatPaginatorModule,
    AppRoutingModule,
    MatIconModule
  ],
  exports: [
    HomeComponent,
    DisplayCardComponent,
    DetailCardComponent
  ]
})
export class DesignFrameModule { }
