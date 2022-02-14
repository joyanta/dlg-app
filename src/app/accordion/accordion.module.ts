import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion-item/accordion-item.component';
import { AccordionSvgComponent } from './components/accordion-svg/accordion-svg.component';

const EXPORTED_DECLARATIONS = [AccordionComponent, AccordionItemComponent, AccordionSvgComponent];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [EXPORTED_DECLARATIONS],
  declarations: [EXPORTED_DECLARATIONS]
})
export class AccordionModule { }
