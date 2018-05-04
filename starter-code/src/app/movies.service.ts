import { Injectable } from '@angular/core';
import { Movie, movieList } from './movies-data';

@Injectable()
export class MoviesService {
  
  movies: Array<Movie> = [...movieList];

  constructor() { }

  getMovies() {
    return this.movies;
  }

  getMovie(id: string) {
    let movieInfo;

    this.movies.forEach((oneMovie) => {
      if (oneMovie.id === id) {
        movieInfo = oneMovie;
      }
    });

    return movieInfo;
  }
}
