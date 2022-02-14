import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionSvgComponent } from '../accordion-svg/accordion-svg.component';

import { AccordionItemComponent } from './accordion-item.component';

describe('AccordionItemComponent', () => {
  let component: AccordionItemComponent;
  let fixture: ComponentFixture<AccordionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionItemComponent, AccordionSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit toggle when opens', () => {
    component.id = 1;
    fixture.detectChanges();
    spyOn(component.clicked, 'emit');

    component.toggle();

    expect(component.clicked.emit).toHaveBeenCalledWith(
      {
        id: 1, open: true
      }
    );
  });

  it('should emit toggle when closed', () => {
    component.id = 1;
    component.open = true;
    fixture.detectChanges();
    spyOn(component.clicked, 'emit');

    component.toggle();
    expect(component.clicked.emit).toHaveBeenCalledWith(
      {
        id: 1, open: false
      }
    );
  });
});
