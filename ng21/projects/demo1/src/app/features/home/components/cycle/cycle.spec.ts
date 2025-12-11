import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cycle } from './cycle';
//import { DebugElement } from '@angular/core';

describe('Cycle', () => {
  vi.spyOn(console, 'log')
  let component: Cycle;
  let fixture: ComponentFixture<Cycle>;
  //let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cycle],
    }).compileComponents();

    fixture = TestBed.createComponent(Cycle);
    component = fixture.componentInstance;
    await fixture.whenStable();
    //debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(console.log).toHaveBeenCalledTimes(3);
    component["test"].set(25)
    fixture.detectChanges()
  });

});
