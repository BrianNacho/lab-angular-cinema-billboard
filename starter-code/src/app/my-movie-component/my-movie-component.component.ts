import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '../movies.service';
import { Movie } from '../movies-data';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movieId: string;
  movieInfo: Movie;

  constructor(
    private request: ActivatedRoute,
    private movieTruc: MoviesService,
    private resThang: Router
  ) { }

  ngOnInit() {
    this.request.paramMap
      .subscribe((myParams) => {
        this.movieId = myParams.get('id');
        this.movieInfo = this.movieTruc.getMovie(this.movieId);
      })
  }

}
