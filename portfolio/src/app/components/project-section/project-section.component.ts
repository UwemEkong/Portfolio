import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {Project} from "../../interfaces/Project";

@Component({
  selector: 'app-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss']
})
export class ProjectSectionComponent implements OnInit {

  constructor(public projectservice: ProjectService) { }

  projects = <Project[]>[];
  ngOnInit(): void {
    this.projectservice.getProjects()
  }

}
