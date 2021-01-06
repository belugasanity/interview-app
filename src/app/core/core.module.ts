import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather/weather.component';



@NgModule({
  declarations: [WeatherComponent],
  imports: [
    CommonModule
  ],
  exports: [
    WeatherComponent
  ]
})
export class CoreModule { }
