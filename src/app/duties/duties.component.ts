import { Component, OnInit } from '@angular/core';
import { Duty } from '../shared/duty';
import { DUTIES } from '../shared/mock-duties';

@Component({
  selector: 'app-duties',
  templateUrl: './duties.component.html',
  styleUrls: ['./duties.component.css']
})
export class DutiesComponent implements OnInit {

  duty = new Duty(1, 'Assicurazione');
  duties = DUTIES;

  selectedDuty: Duty;

  constructor() { }

  ngOnInit() {
  }

  onSelect(duty: Duty): void {
    this.selectedDuty = duty;
  }

}