import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../shared/components/page-not-found/page-not-found.component';
import { FeaturedMoviesComponent } from './featured-movies/featured-movies.component';
import { MovieHouseComponent } from './movie-house.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';

const routes: Routes = [
  {
    path: 'movie-house',
    component: MovieHouseComponent,
    children: [
      {
        path: 'featured-page',
        component: FeaturedMoviesComponent
      },
      {
        path: 'search-page',
        component: SearchMoviesComponent
      }
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieHouseRoutingModule { }
