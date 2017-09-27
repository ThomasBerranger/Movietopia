import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-search-movie',
  templateUrl: './search-movie.component.html',
  styleUrls: ['./search-movie.component.css']
})

export class SearchMovieComponent implements OnInit {

    startWith = new Subject();
    endWith = new Subject();
    movies: any[];

    @Input() movie: Movie;

    constructor(private movieService: MovieService) {}

    ngOnInit() {
        this.movieService.findMovies(this.startWith, this.endWith)
            .subscribe(customers => this.movies = customers)
    }

    search($event) {
        const queryText = $event.target.value
        this.startWith.next(queryText)
        this.endWith.next(queryText + '\uf8ff');
    }

    onSelect(movie: Movie): void {
        this.movie = movie;
    }

}
