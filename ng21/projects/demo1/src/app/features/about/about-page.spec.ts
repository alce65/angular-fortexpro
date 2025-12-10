import { ComponentFixture, TestBed } from '@angular/core/testing';

import AboutPage from './about-page';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AboutPage', () => {
  let component: AboutPage;
  let fixture: ComponentFixture<AboutPage>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should render the title', () => {
    const h2Element: HTMLHeadingElement = debugElement.query(By.css('h2')).nativeElement;
    expect(h2Element.textContent).toContain('About');
  });
});
