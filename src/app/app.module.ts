import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TvShowsComponent } from './tv-shows/tv-shows.component';
import {RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvShowsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'Home', component: HomeComponent},
      {path: 'Movies', component: MoviesComponent},
      {path: 'TvShows', component: TvShowsComponent},
      {path: '', redirectTo: 'Home', pathMatch:'full'},
      {path: '**', redirectTo: 'Home', pathMatch:'full'}


    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
