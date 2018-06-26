import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';
import { Duty } from './shared/duty';
import { DUTIES } from './shared/mock-duties';

@Injectable({
  providedIn: 'root'
})
export class DutyService {

  constructor(private messageService: MessageService) { }

  getDuties(): Observable<Duty[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(DUTIES);
  }
}