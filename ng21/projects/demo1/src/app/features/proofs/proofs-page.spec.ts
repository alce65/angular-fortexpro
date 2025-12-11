import { ComponentFixture, TestBed } from '@angular/core/testing';

import ProofsPage from './proofs-page';

describe('ProofsPage', () => {
  let component: ProofsPage;
  let fixture: ComponentFixture<ProofsPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProofsPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProofsPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
