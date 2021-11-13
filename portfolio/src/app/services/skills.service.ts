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
    this.httpClient.get<Skill[]>(`assets/skills.json`).subscribe(data => {
      this.skills = data
      console.log(data)
    })
  }
}
