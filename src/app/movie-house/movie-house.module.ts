import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieHouseRoutingModule } from './movie-house-routing.module';
import { MovieHouseComponent } from './movie-house.component';


@NgModule({
  declarations: [
    MovieHouseComponent
  ],
  imports: [
    CommonModule,
    MovieHouseRoutingModule
  ],
})
export class MovieHouseModule { }
