import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Skill} from "../interfaces/Skill";

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(public httpClient: HttpClient) { }

  skills = <Skill[]>[];
  getSkills() {
    let siteURL = window.location.origin
    this.httpClient.get<Skill[]>(`${siteURL}/assets/skills.json`).subscribe(data => {
      this.skills = data
      console.log(data)
    })
  }
}
