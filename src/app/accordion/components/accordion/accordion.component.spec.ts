import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AccordionItemComponent } from '../accordion-item/accordion-item.component';
import { AccordionSvgComponent } from '../accordion-svg/accordion-svg.component';

import { AccordionComponent } from './accordion.component';


describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AccordionComponent,
        AccordionItemComponent,
        AccordionSvgComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have list accordion items with apporpriate values', () => {
    component.accordionItems =  [{
      id: '0',
      question: 'dedede',
      answer: 'dedede'
    }];

    fixture.detectChanges();

    const accordionItemComponent = component.items?.find(x => x.id === 0);
    expect(accordionItemComponent).toBeDefined();
    expect(accordionItemComponent?.open).toEqual(false);
  })

  it('shoudl consistently open and close the accordions', () => {
    component.accordionItems = [
      {
        id: '0',
        question: 'dedede',
        answer: 'dedede'
      },
      {
        id: '1',
        question: 'dedede',
        answer: 'dedede'
      },
      {
        id: '2',
        question: 'dedede',
        answer: 'dedede'
      }
    ];

    fixture.detectChanges();

    // by default all shoudl be clsed;
    component.items?.forEach(x => {
      expect(x?.open).toEqual(false);
    });


    // open 2
    component['updateOpenStates'](
      {
        id: 2,
        open: true
      }
    );
    fixture.detectChanges();

    // 2 should be open
    const openedAccordionTwo = component.items?.find(x => x.id === 2);
    expect(openedAccordionTwo?.open).toEqual(true);

    // rest should be closed;
    let closedAccordionIds = component.items?.filter(x => !x.open).map(y => y.id);
    expect(closedAccordionIds).toEqual([0, 1]);


    // open 1;
    component['updateOpenStates'](
      {
        id: 1,
        open: true
      }
    );
    fixture.detectChanges();
    // 1 should be open;
    const openedAccordionOne = component.items?.find(x => x.id === 1);
    expect(openedAccordionOne?.open).toEqual(true);
    // rest should be closed;
    closedAccordionIds = component.items?.filter(x => !x.open).map(y => y.id);
    expect(closedAccordionIds).toEqual([0, 2]);


    component['updateOpenStates'](
      {
        id: 1,
        open: false
      }
    );
    fixture.detectChanges();
    // all should be closed;
    component.items?.forEach(x => {
      expect(x?.open).toEqual(false);
    });

  });
});
