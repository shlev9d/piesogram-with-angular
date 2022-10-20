import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DogsService } from './../../services/dogs.service';
import { BreedService } from './../../services/breed.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss'],
})
export class DogsComponent implements OnInit {
  dogs: string[] = [];


  constructor(
    private dogsService: DogsService,
    private breedService: BreedService
  ) {}

  ngOnInit(): void {
    this.dogsService.getAllDogs().subscribe((items) => {
      this.dogs = Object.keys(items.message);
    });
  }

  setBreed(value: string) {
    this.breedService.changeBreed(value);
  }

}
