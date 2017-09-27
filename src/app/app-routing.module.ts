import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MoviesListComponent} from './movies/movies-list/movies-list.component';
import {CreateMovieComponent} from './movies/create-movie/create-movie.component';
import {SearchMovieComponent} from './movies/search-movie/search-movie.component';
import {UserLoginComponent} from './auth/user-login/user-login.component';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: MoviesListComponent},
    {path: 'ajouter-film', component: CreateMovieComponent},
    {path: 'rechercher-film', component: SearchMovieComponent},
    {path: 'login', component: UserLoginComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}