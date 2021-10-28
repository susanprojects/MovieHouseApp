import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieHouseRoutingModule } from './movie-house-routing.module';
import { MovieHouseComponent } from './movie-house.component';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { MovieCardComponent } from '../shared/components/movie-card/movie-card.component';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { MenubarComponent } from '../shared/components/menubar/menubar.component';


@NgModule({
  declarations: [
    MovieHouseComponent,
    FeaturedMoviesComponent,
    SearchMoviesComponent,
    MovieCardComponent,
    PageNotFoundComponent,
    MenubarComponent
  ],
  imports: [
    CommonModule,
    MovieHouseRoutingModule
  ],
})
export class MovieHouseModule { }
