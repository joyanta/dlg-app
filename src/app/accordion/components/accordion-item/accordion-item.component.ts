import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-accordion-item',
  templateUrl: './accordion-item.component.html',
  styleUrls: ['./accordion-item.component.scss']
})
export class AccordionItemComponent {
  @Input() id: number | null = null;
  @Output() clicked = new EventEmitter<{
    id: number | null;
    open: boolean | null;
  }>();

  open = false;

  toggle(): void {
    this.open = !this.open;
    this.clicked.emit({
      id: this.id, open: this.open
    });
  }
}

