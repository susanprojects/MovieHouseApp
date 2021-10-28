import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieHouseComponent } from './movie-house.component';

const routes: Routes = [
  {
    path: 'movie-house',
    component: MovieHouseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieHouseRoutingModule { }
