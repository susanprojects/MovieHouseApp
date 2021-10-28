import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieHouseComponent } from './movie-house/movie-house.component';

const routes: Routes = [
  {
    path: 'movie-house',
    component: MovieHouseComponent
  },
  {
    path: '',
    redirectTo: '/movie-house/featured-page',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
