import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() type:string | undefined
  @Input() name:string | undefined
  @Input() image:string | undefined
  @Input() description:string | undefined
}
