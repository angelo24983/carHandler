import { Component, OnInit } from '@angular/core';
import { Duty } from '../shared/duty';
import { DUTIES } from '../shared/mock-duties';
import { DutyService } from '../duty.service';

@Component({
  selector: 'app-duties',
  templateUrl: './duties.component.html',
  styleUrls: ['./duties.component.css']
})
export class DutiesComponent implements OnInit {

  duty = new Duty(1, 'Assicurazione');
  duties: Duty[];

  selectedDuty: Duty;

  constructor(private dutyService: DutyService) { }

  ngOnInit() {
    this.getDuties();
  }

  getDuties(): void {
    this.dutyService.getDuties()
    .subscribe(duties => this.duties=duties);
  }

  onSelect(duty: Duty): void {
    this.selectedDuty = duty;
  }

}