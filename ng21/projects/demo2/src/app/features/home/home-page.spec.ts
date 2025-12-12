import { ComponentFixture, TestBed } from '@angular/core/testing';

import HomePage from './home-page';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomePage],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title', () => {
    const h2Element: HTMLHeadingElement = debugElement.query(By.css('h2')).nativeElement;
    expect(h2Element.textContent).toContain('Home');
  });
});
