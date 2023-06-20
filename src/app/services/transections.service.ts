import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransectionsService {
  private url = '/assets/transection.json';
  constructor(private httpClient: HttpClient) { }

  getTransections(){
    return this.httpClient.get(this.url);
  }
}
