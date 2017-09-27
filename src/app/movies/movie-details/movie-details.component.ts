import {Component, Input, OnInit} from '@angular/core';

import {MovieService} from '../movie.service';
import {Movie} from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailsComponent implements OnInit {

    @Input() movie: Movie;
    @Input() movieEdit: Movie;

    constructor(private movieService: MovieService) {}

  ngOnInit() {
  }

  deleteMovie() {
      this.movieService.deleteMovie(this.movie.$key);
  }


}
