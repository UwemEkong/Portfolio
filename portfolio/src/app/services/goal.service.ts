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
    let siteURL = window.location.origin
    this.httpClient.get<Goal[]>(`${siteURL}/assets/goals.json`).subscribe(data => {
      this.goals = data
      console.log(data)
    })
  }
}
