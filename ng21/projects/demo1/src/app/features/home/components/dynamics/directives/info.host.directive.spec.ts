import { TestBed } from '@angular/core/testing';
import { InfoHostDirective } from './info.host.directive';
import { ViewContainerRef } from '@angular/core';

describe('InfoHostDirective', () => {
  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [ViewContainerRef],
    });
  });
  it('should create an instance', () => {
    TestBed.runInInjectionContext(() => {
      const directive = new InfoHostDirective();
      expect(directive).toBeTruthy();
    });
  });
});
