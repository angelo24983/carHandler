import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Duty } from '../shared/duty';
import { DutyService } from '../duty.service';

@Component({
  selector: 'app-duty-detail',
  templateUrl: './duty-detail.component.html',
  styleUrls: ['./duty-detail.component.css']
})
export class DutyDetailComponent implements OnInit {

  @Input() duty: Duty;

  constructor(
    private route: ActivatedRoute,
    private dutyService: DutyService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getDuty();
  }

  getDuty(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dutyService.getDuty(id)
    .subscribe(duty => this.duty = duty);
  }

  goBack(): void {
    this.location.back();
  }

}