import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() image: string | undefined;
  @Input() content: string | undefined;

}
