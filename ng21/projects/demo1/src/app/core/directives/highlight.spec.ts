import { TestBed } from '@angular/core/testing';
import { Highlight } from './highlight';
import { ElementRef, Renderer2 } from '@angular/core';

const renderer2Mock = {
  setStyle: vi.fn(),
  removeStyle: vi.fn(),
};

describe('Highlight', () => {
  let directive: Highlight
  beforeEach((): void => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElementRef,
          useValue: new ElementRef<HTMLDivElement>(document.createElement('div')),
        },
        {
          provide: Renderer2,
          useValue: renderer2Mock
        }
      ],
    });

    TestBed.runInInjectionContext(() => {
      directive = new Highlight();
    })
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
    expect(directive['elementRef'].nativeElement).toBeInstanceOf(HTMLDivElement);
  });

    it('should response to mouse movements', () => {
    directive.onMouseEnter();
    expect(renderer2Mock.setStyle).toHaveBeenCalled();
    directive.onMouseLeave();
    expect(renderer2Mock.removeStyle).toHaveBeenCalled();
  });
});
