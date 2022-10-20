import { Component, OnInit } from '@angular/core';
import { BreedService } from './services/breed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'psintagram';
  breed: string = '';

  constructor(private breedService: BreedService) {}

  ngOnInit(): void {
    this.breedService.breed$.subscribe((breed) => {
      this.breed = breed;
    });
  }
}
