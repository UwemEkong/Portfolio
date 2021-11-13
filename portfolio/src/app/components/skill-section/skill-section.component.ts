import { Component, OnInit } from '@angular/core';
import {SkillsService} from "../../services/skills.service";

@Component({
  selector: 'app-skill-section',
  templateUrl: './skill-section.component.html',
  styleUrls: ['./skill-section.component.scss']
})
export class SkillSectionComponent implements OnInit {

  constructor(public skillService:SkillsService) { }

  ngOnInit(): void {
    this.skillService.getSkills()
  }

}
