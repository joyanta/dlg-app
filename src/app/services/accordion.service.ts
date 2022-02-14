import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAccordionItem } from '../accordion/models/accordion-item';

@Injectable({
  providedIn: 'root'
})
export class AccordionService {

  private resourceUrl = 'assets/json/faqs.json';

  constructor(private httpClient: HttpClient) {
  }

  getData(): Observable<IAccordionItem[]> {
    return this.httpClient.get<IAccordionItem[]>(this.resourceUrl);
  }

}
