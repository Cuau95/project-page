import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private httpClient: HttpClient) { }

  public getEvents() {
    let apiURL = 'http://localhost:8081/employment_fair/events';
    return this.httpClient.get<Event[]>(apiURL);
  } 

}
