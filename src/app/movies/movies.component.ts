import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

 

  private movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=39c71b288a0baedda68e1940108ed8f3&language=en-US&page=1';

  dataMovie: any = {};

  ngOnInit () {}

  constructor(private http : HttpClient){
    this.getMovie();
    this.getMvoies();
  }
  getMovie() {
    return this.http.get(this.movieUrl)
  }



  getMvoies() {
    this.getMovie().subscribe(data => {
      console.log(data);
      this.dataMovie = data
    })
  }


}
