import { Component, Input, QueryList, ViewChildren } from '@angular/core';
import { IAccordionItem } from '../../models/accordion-item';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {

  @Input() accordionItems: IAccordionItem[] | null = null;

  @ViewChildren(AccordionItemComponent) items: QueryList<AccordionItemComponent> | undefined;

  onClick(arg: {
    id: number | null;
    open: boolean | null;
  }): void {
    this.updateOpenStates(arg);
  }

  private updateOpenStates(arg: {
    id: number | null;
    open: boolean | null;
  }): void {
    this.items?.forEach(accordionItem => {
      if (accordionItem.id === arg.id) {
        accordionItem.open = arg.open as boolean;
      } else {
        accordionItem.open = false;
      }
    });
  }
}
