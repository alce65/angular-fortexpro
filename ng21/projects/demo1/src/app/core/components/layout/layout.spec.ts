import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Layout } from './layout';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Menu } from '../menu/menu';

const TEXT = 'Hello World';

@Component({
  imports: [Layout, Menu],
  template: `<fox-layout>
    <fox-menu [options]="[]"></fox-menu>
    {{ text }}
  </fox-layout>`,
})
class TestHostComponent {
  protected readonly text = TEXT;
}

describe('Layout', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render contents', () => {
    const layoutElement: HTMLElement = debugElement.query(By.directive(Layout)).nativeElement;
    expect(layoutElement).toBeTruthy();
    expect(layoutElement.textContent).toContain(TEXT);

    const headerElement: HTMLElement = debugElement.query(By.directive(Header)).nativeElement;
    expect(headerElement).toBeTruthy();

    const menuElement: HTMLElement = debugElement.query(By.directive(Menu)).nativeElement;
    expect(menuElement).toBeTruthy();

    const footerElement: HTMLElement = debugElement.query(By.directive(Footer)).nativeElement;
    expect(footerElement).toBeTruthy();
  });
});
