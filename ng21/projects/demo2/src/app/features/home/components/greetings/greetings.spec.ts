import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Greetings } from './greetings';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Greetings', () => {
  let component: Greetings;
  let fixture: ComponentFixture<Greetings>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Greetings],
    }).compileComponents();

    fixture = TestBed.createComponent(Greetings);
    component = fixture.componentInstance;
    await fixture.whenStable();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should type a user name and see in the document', () => {
    const TEXT = 'Test user';
    const inputElement: HTMLInputElement = debugElement.query(By.css('input')).nativeElement;
    inputElement.value = TEXT;
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    const pElement: HTMLParagraphElement = debugElement.queryAll(By.css('p'))[1].nativeElement;
    expect(pElement.textContent).toContain(TEXT);

    const buttonDebugElement = debugElement.query(By.css('button'));
    buttonDebugElement.triggerEventHandler('click');
    fixture.detectChanges();
     expect(pElement.textContent).toBe('Hola amigo');
  });
});
