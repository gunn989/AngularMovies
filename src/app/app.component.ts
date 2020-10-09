import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'my website';

  private movieUrl = 'https://api.themoviedb.org/3/movie/now_playing?api_key=&language=en-US&page=1';
  private tvUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=language=en-US&page=1';

  dataMovie: any = {};
  dataTv: any = {};
  public show:boolean = false;

  ngOnInit () {}

  toggle() {
    this.show = !this.show;
  }

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

