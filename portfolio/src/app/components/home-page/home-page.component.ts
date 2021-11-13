import { Component, OnInit } from '@angular/core';
import {AboutMeService} from "../../services/about-me.service";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(public aboutMeService: AboutMeService) { }

  content = ""
  ngOnInit(): void {
    this.aboutMeService.getAboutMe().subscribe(data =>{
      this.content = data.content
      console.log(data)
    })
  }

}
