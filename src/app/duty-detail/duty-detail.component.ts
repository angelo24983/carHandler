import { Component, OnInit, Input } from '@angular/core';
import { Duty } from '../shared/duty';

@Component({
  selector: 'app-duty-detail',
  templateUrl: './duty-detail.component.html',
  styleUrls: ['./duty-detail.component.css']
})
export class DutyDetailComponent implements OnInit {

  @Input() duty: Duty;

  constructor() { }

  ngOnInit() {
  }

}