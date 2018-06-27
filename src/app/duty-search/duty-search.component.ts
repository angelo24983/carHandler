import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { Duty } from '../shared/duty';
import { DutyService } from '../duty.service';

@Component({
  selector: 'app-duty-search',
  templateUrl: './duty-search.component.html',
  styleUrls: ['./duty-search.component.css']
})
export class DutySearchComponent implements OnInit {
  duties$: Observable<Duty[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private dutyService: DutyService) {}
 
  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
 
  ngOnInit(): void {
    this.duties$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.dutyService.searchDuties(term)),
    );
  }
}