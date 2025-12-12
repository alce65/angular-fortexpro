import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Menu } from './menu';
import { menuOption } from '../../types/menu-option';
import { provideRouter } from '@angular/router';

const mockRoutes: menuOption[] = [{ path: 'test', label: 'Test' }];

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Menu],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    // component.options = signal(mockRoutes) as unknown as InputSignal<menuOption[]>;
    fixture.componentRef.setInput('options', mockRoutes)
    await fixture.whenStable();
    fixture.detectChanges()
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct routes rendered', () => {
    const element = fixture.nativeElement as HTMLElement;
    const links = element.querySelectorAll('a');
    expect(links.length).toBe(1);
    expect(links[0].textContent).toBe('Test');

  });
});
