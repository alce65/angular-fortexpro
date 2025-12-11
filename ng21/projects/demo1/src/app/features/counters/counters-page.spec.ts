import { ComponentFixture, TestBed } from '@angular/core/testing';

import CountersPage from './counters-page';

describe('CountersPage', () => {
  let component: CountersPage;
  let fixture: ComponentFixture<CountersPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountersPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CountersPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
