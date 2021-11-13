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
    this.httpClient.get<Project[]>(`assets/projects.json`).subscribe(data => {
      this.projects = data
      console.log(data)
    })
  }
}
