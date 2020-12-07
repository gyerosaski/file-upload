import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
  ) { }

  directoriesGet() {
    return this.http.get('assets/Sample-Files.txt', { responseType: 'text' });
  }

}
