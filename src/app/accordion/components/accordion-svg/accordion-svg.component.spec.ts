import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionSvgComponent } from './accordion-svg.component';

describe('AccordionSvgComponent', () => {
  let component: AccordionSvgComponent;
  let fixture: ComponentFixture<AccordionSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
