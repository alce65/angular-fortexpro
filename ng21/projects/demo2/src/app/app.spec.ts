import { ComponentFixture, TestBed } from '@angular/core/testing';
import { App } from './app';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Layout } from './core/components/layout/layout';
import { Menu } from './core/components/menu/menu';

describe.skip('App', () => {
  let component: App;
  let fixture: ComponentFixture<App>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
    fixture = TestBed.createComponent(App);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have header and footer'`, () => {
    const elementHeader = debugElement.query(By.directive(Layout));
    expect(elementHeader).toBeTruthy();
    const elementFooter = debugElement.query(By.directive(Menu));
    expect(elementFooter).toBeTruthy();
  });
});
