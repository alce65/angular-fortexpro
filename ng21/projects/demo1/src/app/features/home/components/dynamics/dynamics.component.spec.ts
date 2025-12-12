import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import DynamicsComponent from './dynamics.component';
// import { InfoHostDirective } from './directives/info.host.directive';

describe('DynamicsComponent', () => {
  let component: DynamicsComponent;
  let fixture: ComponentFixture<DynamicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // Test de la implementación de InfoHostDirective
  // describe('When we test the implementation', () => {
  //   beforeEach(() => {
  //     if (component.infoHost()) {
  //       vi.spyOn(
  //         (component.infoHost() as InfoHostDirective).vcRef,
  //         'createComponent',
  //       );
  //       vi.spyOn((component.infoHost() as InfoHostDirective).vcRef, 'clear');
  //     }
  //   });

  //   it('should create InfoComponent', () => {
  //     component.loadInfoComponent();
  //     expect(component.infoHost()?.vcRef.createComponent).toHaveBeenCalled();
  //     expect(component.infoHost()?.vcRef.length).toBe(1);
  //   });
  //   it('should remove InfoComponent', () => {
  //     component.loadInfoComponent();
  //     expect(component.infoHost()?.vcRef.createComponent).toHaveBeenCalled();
  //     component.removeInfoComponent();
  //     expect(component.infoHost()?.vcRef.clear).toHaveBeenCalled();
  //     expect(component.infoHost()?.vcRef.length).toBe(0);
  //   });
  // });

  // Test de la funcionalidad del componente

  describe('When user click the button Load...', () => {
    it('should create InfoComponent', () => {
      const button = fixture.debugElement.queryAll(By.css('button'))[0]
        .nativeElement;
      button.click();
      // expect(component.infoHost.vcRef.length).toBe(1);
      const infoComponent = fixture.debugElement.query(By.css('alce-info'));
      expect(infoComponent).toBeTruthy();
    });
  });

  describe('When user click the button Remove...', () => {
    it('should remove InfoComponent', () => {
      const buttons = fixture.debugElement
        .queryAll(By.css('button'))
        .map((button) => button.nativeElement);
      buttons[0].click();
      let infoComponent = fixture.debugElement.query(By.css('alce-info'));
      expect(infoComponent).toBeTruthy();
      buttons[1].click();
      infoComponent = fixture.debugElement.query(By.css('cas-info'));
      expect(infoComponent).toBeNull();
    });
  });
});
