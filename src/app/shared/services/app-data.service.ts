import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {

  constructor(private httpClient: HttpClient) { }

  loadAppJSONData() {
      return this.httpClient.get("assets/app.data.json");
  }
}
