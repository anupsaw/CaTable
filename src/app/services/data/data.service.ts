import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private readonly http: HttpClient) { }

  getSampleData(): Observable<Array<User>> {
    return this.http.get<Array<User>>('../../../data/sample_data.json');
  }
}
