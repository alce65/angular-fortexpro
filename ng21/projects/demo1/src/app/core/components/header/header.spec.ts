import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });


  // test de implementacion (caja blanca)
  it('should create', () => {
    expect(component).toBeTruthy();
    expect( component['title']() ).toContain('Angular');
    expect( component['subtitle']() ).toMatch(/demo/i);
  });

  // test de funcionalidad (caja negra)
  it('should render title', async () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Angular');
    expect(compiled.querySelector('p')?.textContent).toMatch(/demo/i);
  });
});
