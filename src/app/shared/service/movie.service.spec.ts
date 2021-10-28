import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FeaturedMoviesData, MovieList } from '../movie-details';

describe('MovieService', () => {
  let httpClient: HttpClient;
  let httpController: HttpTestingController;

  const movieTitle = 'horror';
  const movieId = 'tt0078767';
  const plotLength = 'full';
  const apikey: string = '6c3a2d45';
  const featuredMovieURL = `https://www.omdbapi.com/?i=${movieId}&plot=${plotLength}&apikey=${apikey}`;
  const searchMovieTitleURL = `https://www.omdbapi.com/?s=${movieTitle}&apikey=${apikey}`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService]
    });
    httpClient = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should call getMovie with movie id & plotlength and return the movies data', () => {
    httpClient.get<MovieList>(featuredMovieURL).subscribe((data: any) => {
      expect(data.Title).toBe('The Amityville Horror');
      expect(data.Type).toBe('movie');
    });
    const request = httpController.expectOne(featuredMovieURL);
    expect(request.request.method).toBe('GET');

    request.flush({
      Title: 'The Amityville Horror',
      Type: 'movie',
      Response: true
    });

    httpController.verify();
  });

  it('should call getSearchedMovies with movie title and return the movies data', () => {
    httpClient.get<FeaturedMoviesData>(searchMovieTitleURL).subscribe((data: any) => {
      expect(data.Search[0].Title).toBe('The Amityville Horror');
    });
    const request = httpController.expectOne(searchMovieTitleURL);
    expect(request.request.method).toBe('GET');

    request.flush({
      Response: true,
      Search: [{ Title: 'The Amityville Horror' }]
    });

    httpController.verify();
  });

  it("should throw error", () => {
    const emsg = 'deliberate 404 error';

    httpClient.get<any>(searchMovieTitleURL).subscribe(
      data => fail('should have failed with the 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(emsg);
      }
    );

    const req = httpController.expectOne(searchMovieTitleURL);

    req.flush(emsg, { status: 404, statusText: 'Not Found' });
  });
});
