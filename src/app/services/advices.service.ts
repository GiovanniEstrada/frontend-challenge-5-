import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class AdvicesService {

  constructor(private http: HttpClient) {}
  
  getQuote() {
    return this.http.get("https://api.adviceslip.com/advice")
  }
}
