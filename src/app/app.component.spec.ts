import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AccordionComponent } from './accordion/components/accordion/accordion.component';
import { AppComponent } from './app.component';
import { AccordionService } from './services/accordion.service';


describe('AppComponent', () => {
  const mockAccordionService = jasmine.createSpyObj('AccordionService', ['getData']);
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
        AccordionComponent
      ],
      providers: [
        {
          provide: AccordionService,
          useValue: mockAccordionService
        }

      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('[test-data-id="title"]')?.textContent).toContain('HAVE A QUESTION? WE CAN HELP');
  });
});









// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { AppComponent } from './app.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { By } from '@angular/platform-browser';
// import { Component } from '@angular/core';
// import { AccordionService } from './services/accordion.service';
// fdescribe('AppComponent', () => {
//   let fixture: ComponentFixture<TestHostComponent>;
//   let testHostComponent: TestHostComponent;
//   let component: AppComponent;
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         RouterTestingModule,
//         HttpClientTestingModule,
//       ],
//       declarations: [
//         AppComponent
//       ],
//       providers: [
//         AccordionService
//       ]
//     }).compileComponents();


//     fixture = TestBed.createComponent(TestHostComponent);

//     testHostComponent = fixture.componentInstance;
//     component = fixture.debugElement.query(By.directive(AppComponent)).componentInstance;
//     fixture.detectChanges();

//   });

//   it('should create app component', () => {
//     expect(component).toBeTruthy();
//   });


// });


// @Component({
//   selector: 'test-host-component',
//   template: `<app-root></app-root>`
// })
// class TestHostComponent {}
