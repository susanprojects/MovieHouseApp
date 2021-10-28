import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMoviesComponent } from './search-movies.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MovieService } from '../../shared/service/movie.service';
import { DisplayMode, PlotLength } from 'src/app/shared/movie-details';
import { of } from 'rxjs';

describe('SearchMoviesComponent', () => {
  let component: SearchMoviesComponent;
  let fixture: ComponentFixture<SearchMoviesComponent>;
  let movieService: MovieService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SearchMoviesComponent],
      providers: [
        {
          provide: MovieService, useValue: {
            getSearchedMovies: () => of({ Response: 'True', Search: [{ Title: 'Harry Potter', Type: 'movie' }] })
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchMoviesComponent);
    component = fixture.componentInstance;
    movieService = TestBed.inject(MovieService);
    fixture.detectChanges();
  });
  describe('Setup component', () => {
    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should initialize values for the variables used', () => {
      expect(component.isSearchMode).toEqual(DisplayMode.SEARCHMODE);
      expect(component.searchPlotLength).toEqual(PlotLength.FULL);
      expect(component.isShortPlot).toBe(false);
    });
  });

  describe('Setup service MovieService', () => {
    it('should be created', () => {
      const service: MovieService = TestBed.inject(MovieService);
      expect(service).toBeTruthy();
    });

    it('should have getSearchedMovies function', () => {
      const service: MovieService = TestBed.inject(MovieService);
      expect(service.getSearchedMovies).toBeTruthy();
    });

    it('should call getSearchedMovies with user input', () => {
      const movieTitle = 'Harry Potter';
      const searchTerm = encodeURIComponent(movieTitle);
      spyOn(movieService, 'getSearchedMovies')
        .and
        .callThrough();
      component.searchMovies(movieTitle);
      fixture.detectChanges();
      expect(movieService.getSearchedMovies).toHaveBeenCalledWith(searchTerm);
    });
  });

  describe('togglePlotLength function', () => {
    it('should toggle the plot length to be short or full on button click', () => {
      expect(component.isShortPlot).toBe(false);
      expect(component.searchPlotLength).toEqual(PlotLength.FULL);
      component.togglePlotLength();
      expect(component.isShortPlot).toBe(true);
      expect(component.searchPlotLength).toEqual(PlotLength.SHORT);
      component.togglePlotLength();
      expect(component.isShortPlot).toBe(false);
      expect(component.searchPlotLength).toEqual(PlotLength.FULL);
    });
  });

});
