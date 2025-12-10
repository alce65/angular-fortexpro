import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });


  // test de implementacion (caja blanca)
  it('should create', () => {
    expect(component).toBeTruthy();
    expect( component['title']() ).toContain('Angular');
    expect( component['subtitle']() ).toMatch(/demo/i);
  });

  // test de funcionalidad (caja negra)
  // Modo HTML
  it('should render title', async () => {
    const element = fixture.nativeElement as HTMLElement;
    expect(element.querySelector('h1')?.textContent).toContain('Angular');
    expect(element.querySelector('p')?.textContent).toMatch(/demo/i);
  });

  // Modo HTML
  it('should render title', async () => {
    const elementH1 = debugElement.query(By.css('h1')).nativeElement as HTMLElement;
    const elementP = debugElement.query(By.css('p')).nativeElement as HTMLElement;
    expect(elementH1.textContent).toContain('Angular');
    expect(elementP.textContent).toMatch(/demo/i);
  })
});
