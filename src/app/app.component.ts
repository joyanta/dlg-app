import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAccordionItem } from './accordion/models/accordion-item';
import { AccordionService } from './services/accordion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  accordionItems$: Observable<IAccordionItem[]> | null = null;
  constructor(private accordionService: AccordionService) { }

  ngOnInit(): void {
    this.accordionItems$ = this.accordionService.getData();
  }
}
