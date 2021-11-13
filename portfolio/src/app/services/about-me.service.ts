import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AboutMe} from "../interfaces/AboutMe";

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {

  constructor(public httpClient: HttpClient) { }

  getAboutMe() {
    let siteURL = window.location.origin
    return this.httpClient.get<AboutMe>(`${siteURL}/assets/about-me.json`);
  }
}
