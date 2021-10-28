import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MovieList, PlotLength } from '../../movie-details';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnChanges {

  @Input()
  movieId: string = '';

  @Input()
  displayMode!: string;

  @Input()
  plotLength: PlotLength = PlotLength.FULL;

  isReadMore: boolean = true;
  movie$!: Observable<MovieList>;

  public NA: string = 'N/A';

  constructor(private movieService: MovieService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.displayMode = changes?.displayMode?.currentValue;
    this.plotLength = changes?.plotLength?.currentValue;
    this.movie$ = this.movieService.getMovie(this.movieId, this.plotLength).pipe(map(movieData => movieData));
  }

  showPlotLengthText() {
    this.isReadMore = !this.isReadMore;
  }
}
