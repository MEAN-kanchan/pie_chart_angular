import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_KEY = 'https://jsonplaceholder.typicode.com/users';
  constructor(private httpClient: HttpClient) { }
  public getData(){
    console.log('in server:::::',this.httpClient.get(this.API_KEY))
    return this.httpClient.get(this.API_KEY);
  }
}
