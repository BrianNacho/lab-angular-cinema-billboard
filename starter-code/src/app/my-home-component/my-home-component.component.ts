import { Component, OnInit } from '@angular/core';
import { Movie, movieList } from '../movies-data';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  constructor(
    public movieTruc: MoviesService
  ) { }

  ngOnInit() {
  }

  
}
