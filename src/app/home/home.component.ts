import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'my website';

  private movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=39c71b288a0baedda68e1940108ed8f3&language=en-US&page=1';
  private tvUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=39c71b288a0baedda68e1940108ed8f3&language=en-US&page=1';

  dataMovie: any = {};
  dataTv: any = {};
 

  ngOnInit () {}



  constructor(private http : HttpClient){
    this.getMovie();
    this.getTv();
    this.getMvoies();
    this.getTvShows();
  }
  getMovie() {
    return this.http.get(this.movieUrl)
  }
  getTv() {
    return this.http.get(this.tvUrl)
  }


  getMvoies() {
    this.getMovie().subscribe(data => {
      console.log(data);
      this.dataMovie = data
    })
  }

  getTvShows() {
    this.getTv().subscribe(data => {
      console.log(data);
      this.dataTv = data;
    })
  }
}
