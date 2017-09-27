import {Component, OnInit, Input} from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';

import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {

    @Input() movie: Movie;
    @Input() movieEdit: Movie;

    constructor(private movieService: MovieService, public authService: AuthService) {}

    ngOnInit() {
    }

    deleteMovie() {
        this.movieService.deleteMovie(this.movie.$key);
        this.movie = null;
    }

    updateTitle(keyMovie: string, nameUpdateMovie: string) {
        this.movieService.updateMovie(keyMovie, { title: nameUpdateMovie })
    }

    updateDate(keyMovie: string, dateUpdateMovie: string) {
        this.movieService.updateMovie(keyMovie, { date: dateUpdateMovie })
    }

    updateImage(keyMovie: string, imageUpdateMovie: string) {
        this.movieService.updateMovie(keyMovie, { image: imageUpdateMovie })
    }

    updateNote(keyMovie: string, noteUpdateMovie: string) {
        this.movieService.updateMovie(keyMovie, { note: noteUpdateMovie })
    }

    updateSynopsis(keyMovie: string, synopsisUpdateMovie: string) {
        this.movieService.updateMovie(keyMovie, { synopsis: synopsisUpdateMovie })
    }

    updateAvaible(isActive: boolean) {
        this.movieService.updateMovie(this.movie.$key, {avaible: isActive})
    }

}
