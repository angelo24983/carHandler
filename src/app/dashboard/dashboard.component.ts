import { Component, OnInit } from '@angular/core';
import { Duty } from '../shared/duty';
import { DutyService } from '../duty.service';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  duties: Duty[] = [];
 
  constructor(private dutyService: DutyService) { }
 
  ngOnInit() {
    this.getHeroes();
  }
 
  getHeroes(): void {
    this.dutyService.getDuties()
      .subscribe(duties => this.duties = duties.slice(1, 5));
  }
}