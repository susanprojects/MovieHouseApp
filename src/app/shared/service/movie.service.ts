import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FeaturedMoviesData, MovieList } from '../movie-details';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apikey: string = '6c3a2d45';

  constructor(private http: HttpClient) { }

  getMovie(movieId: string, plotLength: string): Observable<MovieList> {
    return this.http.get<MovieList>(`https://www.omdbapi.com/?i=${movieId}&plot=${plotLength}&apikey=${this.apikey}`)
      .pipe(
        catchError(this.handleError));
  }

  getSearchedMovies(movieTitle: string): Observable<FeaturedMoviesData> {
    return this.http.get<FeaturedMoviesData>(`https://www.omdbapi.com/?s=${movieTitle}&apikey=${this.apikey}`)
      .pipe(
        map(moviesData => moviesData),
        catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Response returned code ${error.status}, body is: `, error.error);
    }
    return throwError(
      'Something went wrong; please try again later.');
  }
}
