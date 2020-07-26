import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:8000/api/movies/'

  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Token b95592c0cc04aece687e6e553973f56e050697c5'
    }
  )

  private movies = ['terminator', 'predator']


  constructor(
    private httpClient: HttpClient
  ) {
  }

  getMovies() {
    return this.httpClient.get(this.baseUrl, {headers: this.headers})
  }
}