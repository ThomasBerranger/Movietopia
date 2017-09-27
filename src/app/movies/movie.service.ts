import {Injectable} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Movie} from './movie';

@Injectable()
export class MovieService {

    private dbPath: string = '/movies';

    movie: FirebaseObjectObservable<Movie> = null;
    movies: FirebaseListObservable<Movie[]> = null;

    constructor(private db: AngularFireDatabase) {}

    createMovie(customer: Movie): void {
        this.movies.push(customer).catch(error => this.handleError(error));
    }

    updateMovie(key: string, value: any): void {
        this.movies.update(key, value).catch(error => this.handleError(error));
    }

    deleteMovie(key: string): void {
        this.movies.remove(key).catch(error => this.handleError(error));
    }

    getMoviesList(query = {}): FirebaseListObservable<Movie[]> {
        this.movies = this.db.list(this.dbPath, {
            query: query
        });
        return this.movies;
    }

    deleteAllMovies(): void {
        this.movies.remove().catch(error => this.handleError(error));
    }

    private handleError(error) {
        console.log(error);
    }

    findMovies(start, end): FirebaseListObservable<Movie[]> {
        return this.db.list(this.dbPath, {
            query: {
                orderByChild: 'title',
                limitToFirst: 5,
                startAt: start,
                endAt: end
            }
        });
    }
}
