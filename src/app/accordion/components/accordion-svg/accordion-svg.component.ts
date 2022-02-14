import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-accordion-svg',
  templateUrl: './accordion-svg.component.html',
  styleUrls: ['./accordion-svg.component.scss']
})
export class AccordionSvgComponent {;
  @Input() open = false;

}
