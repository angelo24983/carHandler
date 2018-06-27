import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Duty } from './shared/duty';
import { DUTIES } from './shared/mock-duties';
import { MessageService } from './message.service';

@Injectable({providedIn: 'root'})
export class DutyService {

  constructor(private messageService: MessageService) { }

  getDuties(): Observable<Duty[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(DUTIES);
  }

  getDuty(id: number): Observable<Duty> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched hero id=${id}');
    return of(DUTIES.find(duty => duty.id === id));

  }
}