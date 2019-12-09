import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tv-shows',
  templateUrl: './tv-shows.component.html',
  styleUrls: ['./tv-shows.component.css']
})
export class TvShowsComponent implements OnInit {

  private tvUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=39c71b288a0baedda68e1940108ed8f3&language=en-US&page=1';

  dataMovie: any = {};
  dataTv: any = {};
  public show:boolean = false;

  ngOnInit () {}

  toggle() {
    this.show = !this.show;
  }

  constructor(private http : HttpClient){
    this.getTv();
    this.getTvShows();
  }
  
  getTv() {
    return this.http.get(this.tvUrl)
  }
  getTvShows() {
    this.getTv().subscribe(data => {
      console.log(data);
      this.dataTv = data;
    })
  }
}
