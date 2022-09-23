import {Component} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Quake, Quakes} from './quake';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'quake';
  data: Quakes;
  quake: Quake;

  constructor(httpClient: HttpClient) {
    httpClient.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-09-01&endtime=2022-09-31&minmagnitude=5')
      .subscribe((quakes: Quakes) => {
          this.data = quakes;
        }
      );
  }

  onQuakeSelected(quake: Quake): void {
    this.quake = quake;
  }
}
