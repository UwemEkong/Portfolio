import { Component, OnInit } from '@angular/core';
import {GoalService} from "../../services/goal.service";

@Component({
  selector: 'app-goal-section',
  templateUrl: './goal-section.component.html',
  styleUrls: ['./goal-section.component.scss']
})
export class GoalSectionComponent implements OnInit {

  constructor(public goalService:GoalService) { }

  ngOnInit(): void {
    this.goalService.getGoals()
  }

}
