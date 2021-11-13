import {Component, Input, OnInit} from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  safeUrl: SafeResourceUrl | undefined
  constructor(public projectService: ProjectService,private _sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    console.log("TITLE: " + JSON.stringify(this.projectService.projects))
    console.log("hasVideo: " + this.mediaURL)
    if (this.mediaURL != null) {
      this.safeUrl = this._sanitizer.bypassSecurityTrustResourceUrl(this.mediaURL)
    }
  }

  @Input() projectTitle = "";
  @Input() hasVideo:boolean | undefined;
  @Input() mediaURL:string | undefined;
  @Input() description:string | undefined;
  @Input() technologyImages:string[] | undefined;
}
