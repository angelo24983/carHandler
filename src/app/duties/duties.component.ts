import { Component, OnInit } from '@angular/core';
import { Duty } from '../shared/duty';

@Component({
  selector: 'app-duties',
  templateUrl: './duties.component.html',
  styleUrls: ['./duties.component.css']
})
export class DutiesComponent implements OnInit {

  duty = new Duty(1, 'Assicurazione');

  constructor() { }

  ngOnInit() {
  }

}