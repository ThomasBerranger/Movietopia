import {AppRoutingModule} from './app-routing.module';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';

import {environment} from '../environments/environment';
import {AppComponent} from './app.component';

import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { SearchMovieComponent } from './movies/search-movie/search-movie.component';


import {MovieService} from './movies/movie.service';
import {AuthService} from './auth/auth.service';


import {AngularFireAuthModule} from 'angularfire2/auth';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCardModule, MdToolbarModule} from '@angular/material';
import { UserInfoComponent } from './auth/user-info/user-info.component';
import { UserLoginComponent } from './auth/user-login/user-login.component';
import { MovieEditComponent } from './movies/movie-edit/movie-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateMovieComponent,
    MovieDetailsComponent,
    MoviesListComponent,
    SearchMovieComponent,
    UserInfoComponent,
    UserLoginComponent,
    MovieEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
  ],
  providers: [MovieService, AuthService],
  bootstrap: [AppComponent]
})

export class AppModule { }
