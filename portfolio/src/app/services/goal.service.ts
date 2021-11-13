import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Goal} from "../interfaces/Goal";


@Injectable({
  providedIn: 'root'
})
export class GoalService {

  constructor(public httpClient: HttpClient) { }

  goals = <Goal[]>[];
  getGoals() {
    this.httpClient.get<Goal[]>(`assets/goals.json`).subscribe(data => {
      this.goals = data
      console.log(data)
    })
  }
}
