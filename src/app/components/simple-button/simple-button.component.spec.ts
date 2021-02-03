import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleButtonComponent } from './simple-button.component';

describe('SimpleButtonComponent', () => {
  let component: SimpleButtonComponent;
  let fixture: ComponentFixture<SimpleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleButtonComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should look correspondingly to the Input', () => {
    const text = 'Test text 1';
    component.text = text;

    fixture.detectChanges();

    // Способ через fixture
    expect(fixture.debugElement.nativeElement.querySelector('button').innerHTML.trim()).toEqual(text);

    // Способ через snapshot
    // @ts-ignore
    expect(fixture.debugElement.nativeElement.innerHTML).toMatchSnapshot();
  });

  it('should look correctly without input', () => {
    // @ts-ignore
    expect(fixture.debugElement.nativeElement.innerHTML).toMatchSnapshot();
  });

  it('should dispatch event on click', () => {
    spyOn(component.buttonClick, 'emit');

    fixture.debugElement.nativeElement.querySelector('button').click();

    expect(component.buttonClick.emit).toHaveBeenCalled();
  });

});
