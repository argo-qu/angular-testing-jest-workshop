import {TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {SimpleButtonComponent} from '../../components/simple-button/simple-button.component';

describe('AppComponent', () => {

  // Юнит тесты
  describe('Unit', () => {
    let component: AppComponent;
    let fixture;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        schemas: [CUSTOM_ELEMENTS_SCHEMA],
        imports: [
          RouterTestingModule,
        ],
        declarations: [
          AppComponent,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });

    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    describe('addNumbers', () => {
      it('should add numbers to the list', () => {
        expect(component.numbers).toEqual([]);
        component.addNumbers();
        expect(component.numbers).toEqual([100]);
        component.addNumbers();
        component.addNumbers();
        component.addNumbers();
        expect(component.numbers).toEqual([100, 200, 300, 400]);
      });
    });

    describe('layout', () => {
      it('should look properly', () => {
        // @ts-ignore
        expect(fixture.debugElement.nativeElement.innerHTML).toMatchSnapshot();

        component.addNumbers();
        fixture.detectChanges();

        // @ts-ignore
        expect(fixture.debugElement.nativeElement.innerHTML).toMatchSnapshot();

        component.addNumbers();
        component.addNumbers();
        component.addNumbers();
        fixture.detectChanges();

        // @ts-ignore
        expect(fixture.debugElement.nativeElement.innerHTML).toMatchSnapshot();
      });
    });

  });

  // Интеграционные тесты
  describe('Integration', () => {
    let component: AppComponent;
    let fixture;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        imports: [
          RouterTestingModule,
        ],
        declarations: [
          AppComponent,
          SimpleButtonComponent,
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      component = fixture.componentInstance;
    });

    it('should create the app', () => {
      expect(component).toBeTruthy();
    });

    it('should add numbers when clicking button', () => {
      // @ts-ignore
      expect(fixture.debugElement.nativeElement.innerHTML).toMatchSnapshot();

      fixture.debugElement.nativeElement.querySelector('button').click();
      fixture.detectChanges();

      // @ts-ignore
      expect(fixture.debugElement.nativeElement.innerHTML).toMatchSnapshot();

      fixture.debugElement.nativeElement.querySelector('button').click();
      fixture.debugElement.nativeElement.querySelector('button').click();
      fixture.debugElement.nativeElement.querySelector('button').click();
      fixture.detectChanges();

      // @ts-ignore
      expect(fixture.debugElement.nativeElement.innerHTML).toMatchSnapshot();
    });
  });

});
