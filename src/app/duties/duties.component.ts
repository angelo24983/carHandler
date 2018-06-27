import { Component, OnInit } from '@angular/core';
import { Duty } from '../shared/duty';
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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.dutyService.addDuty({ name } as Duty)
      .subscribe(duty => {
        this.duties.push(duty);
      });
  }

  delete(duty: Duty): void {
    this.duties = this.duties.filter(d => d !== duty);
    this.dutyService.deleteDuty(duty).subscribe();
  }

  onSelect(duty: Duty): void {
    this.selectedDuty = duty;
  }

}