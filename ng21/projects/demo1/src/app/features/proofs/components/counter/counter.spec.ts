import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterAsync } from './counter';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe.skip('CounterAsync', () => {
  let component: CounterAsync;
  let fixture: ComponentFixture<CounterAsync>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterAsync],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterAsync);
    component = fixture.componentInstance;
    await fixture.whenStable();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('When we use the buttons', () => {
    let outputElement: HTMLOutputElement;
    let buttonDebugElements: DebugElement[];
    beforeEach(() => {
      outputElement = debugElement.query(By.css('output')).nativeElement;
      buttonDebugElements = debugElement.queryAll(By.css('button'));
    });

    it('should increase the display when the button ➕ is clicked', () => {
      //
      component['counter'].set(0);
      // buttonDebugElements[1].nativeElement.click()
      buttonDebugElements[1].triggerEventHandler('click');
      expect(component['counter']()).toBe(1);
      fixture.detectChanges();
      expect(outputElement.textContent).toBe('1');
    });

    it('should increase the display when the button ➖ is clicked', () => {
      component['counter'].set(0);
      buttonDebugElements[0].triggerEventHandler('click');
      fixture.detectChanges();
      expect(outputElement.textContent).toBe('-1');
    });

    it('should reset the display when the button 🔄 is clicked', () => {
      component['counter'].set(5);
      fixture.detectChanges();
      expect(outputElement.textContent).toBe('5');
      buttonDebugElements[2].triggerEventHandler('click');
      fixture.detectChanges();
      expect(outputElement.textContent).toBe('0');
    });
  });
});
