import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  breed$ = new Subject<string>()

  changeBreed(breed: string){
    this.breed$.next(breed)
    
  }
}
