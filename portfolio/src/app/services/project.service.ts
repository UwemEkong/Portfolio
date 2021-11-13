import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Project} from "../interfaces/Project";
@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(public httpClient: HttpClient) { }

  projects = <Project[]>[];
  getProjects() {
    let siteURL = window.location.origin
    this.httpClient.get<Project[]>(`${siteURL}/assets/projects.json`).subscribe(data => {
      this.projects = data
      console.log(data)
    })
  }
}
