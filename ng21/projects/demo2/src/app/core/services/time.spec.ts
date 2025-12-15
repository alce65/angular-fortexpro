import { TestBed } from '@angular/core/testing';

import { Time } from './time';

describe('Time', () => {
  let service: Time;

  beforeEach(() => {
    TestBed.configureTestingModule({
      //providers: [Time]
    });
     service = TestBed.inject(Time);
     //service = new Time();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('method getTimestamp return a number', () => {
    const result = service.getTimestamp()
    expect(typeof result).toBe('number')
  })
});
