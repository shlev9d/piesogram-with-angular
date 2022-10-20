import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IDogInfo } from '../models/dogInfo';

@Injectable({
  providedIn: 'root'
})
export class DogInfoService {

  constructor(private http: HttpClient) { }

  getDogInfo(breed: string): Observable<IDogInfo>{
    return this.http.get<IDogInfo>(
      `https://dog.ceo/api/breed/${breed}/images/random`
    );
  }
}


