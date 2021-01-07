import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  constructor(
    private weatherService: WeatherService
  ) { }

  ngOnInit(): void {
  }

  getWeatherByCity() {
    let city = 'London';
    this.weatherService.getWeatherByCity(city).subscribe((data) => {
      console.log(`${JSON.stringify(data)}`);
      // TODO: Display temp, humidity and description in the view
    });
  }

}
