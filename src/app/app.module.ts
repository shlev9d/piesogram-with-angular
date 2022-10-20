import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './components/dogs/dogs.component';
import { DogInfoComponent } from './components/dog-info/dog-info.component';
import { HttpClientModule } from '@angular/common/http';
import { DogClearComponent } from './components/dog-clear/dog-clear.component';

@NgModule({
  declarations: [AppComponent, DogsComponent, DogInfoComponent, DogClearComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
