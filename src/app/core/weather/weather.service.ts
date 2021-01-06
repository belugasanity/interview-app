import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class WeatherService {
    key = environment.weatherKey;
    endpoint = environment.weatherEndpoint;

    constructor(
        private http: HttpClient
    ) {}

    getWeatherByCity(city:string) {
        return this.http.get(`${this.endpoint}${city}&appid=${this.key}`);
    }
}