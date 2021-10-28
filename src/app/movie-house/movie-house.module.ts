import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieHouseRoutingModule } from './movie-house-routing.module';
import { MovieHouseComponent } from './movie-house.component';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';

@NgModule({
  declarations: [
    MovieHouseComponent,
    FeaturedMoviesComponent,
    SearchMoviesComponent
  ],
  imports: [
    CommonModule,
    MovieHouseRoutingModule
  ],
})
export class MovieHouseModule { }
