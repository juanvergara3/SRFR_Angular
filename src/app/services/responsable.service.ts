import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Responsable } from 'src/app/interfaces/responsable';
import { responsablesPlaceholderArray } from 'src/app/placeholder_data/placeholder-responsables';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ResponsableService {

  constructor(private messageService: MessageService) { }

  getResponsables(): Observable<Responsable[]> {
    const responsablesArrayObservable = of(responsablesPlaceholderArray);

    this.messageService.add('ResponsableService: responsables obtenidos con éxito.');

    return responsablesArrayObservable;
  }
}
