import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../movie';
import {FirebaseListObservable} from 'angularfire2/database';
import {MovieService} from '../movie.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

    movies: FirebaseListObservable<Movie[]>;

    @Input() movie: Movie;

    constructor(private movieService: MovieService, public authService: AuthService) {}

    ngOnInit() {
        this.movies = this.movieService.getMoviesList();
    }

    deleteAllMovies() {
        this.movieService.deleteAllMovies();
    }

    onEdit(movie: Movie): void {
        this.movie = movie;
    }

    onBackToHome(movie: Movie): void {
        this.movie = null;
    }

}
