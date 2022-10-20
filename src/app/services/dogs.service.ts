import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { IDogs } from '../models/dogs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  constructor(private http: HttpClient) { }

  getAllDogs(): Observable<IDogs>{
    return this.http.get<IDogs>('https://dog.ceo/api/breeds/list/all')
  }
}
