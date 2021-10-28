import { Component } from '@angular/core';
import { DisplayMode, FeaturedMovieIds, PlotLength } from 'src/app/shared/movie-details';

@Component({
  selector: 'app-featured-movies',
  templateUrl: './featured-movies.component.html',
  styleUrls: ['./featured-movies.component.scss']
})
export class FeaturedMoviesComponent {

  movieIds: FeaturedMovieIds[] = [{ movieId: 'tt0078767' }, { movieId: 'tt3688406' }];

  isFeatureMode = DisplayMode.FEATUREMODE;
  featurePlotLength = PlotLength.FULL;

  searchIconImgAlt = 'search Icon';
  linkFromFeaturePage = '/movie-house/search-page';
  imgSrc = '../../../assets/images/search-magnifying-glass.svg';
  featureLinkText = "Search a movie";

  constructor() { }
}
