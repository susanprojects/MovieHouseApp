import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DisplayMode, FeaturedMoviesData, PlotLength } from 'src/app/shared/movie-details';
import { MovieService } from 'src/app/shared/service/movie.service';

@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent {
  movies$!: Observable<FeaturedMoviesData>;

  isSearchMode: string = DisplayMode.SEARCHMODE;
  isShortPlot: boolean = false;

  searchPlotLength: PlotLength = PlotLength.FULL;

  backArrorImgAlt = 'go back arrow';
  linkFromSearchPage = '/movie-house/featured-page';
  imgSrc = '../../../assets/images/gobackarrow.svg';
  searchLinkText = 'Back to popular movies';

  constructor(private movieService: MovieService) { }

  searchMovies(searchMovie: string) {
    const searchTerm = encodeURIComponent(searchMovie);

    this.movies$ = this.movieService.getSearchedMovies(searchTerm)
      .pipe(
        map(moviesData => moviesData));
  }

  togglePlotLength() {
    this.isShortPlot = !this.isShortPlot;

    this.searchPlotLength = this.isShortPlot ? PlotLength.SHORT : PlotLength.FULL;
  }

}
