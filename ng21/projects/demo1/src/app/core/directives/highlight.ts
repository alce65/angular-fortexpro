import { Directive, ElementRef, inject, input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[foxHighlight]',
  host: {
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class Highlight implements OnInit {
  private elementRef: ElementRef<HTMLElement> = inject(ElementRef);
  private renderer = inject(Renderer2);
  foxHighlight = input<string>()

  ngOnInit(): void {
    console.log('Directiva Highlight', this.elementRef);
  }

  // @HostListener('mouseenter')
  onMouseEnter() {
    // this.elementRef.nativeElement.style = 'background-color: yellow';
    const color = this.foxHighlight() || 'yellow'
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', color );
  }

  // @HostListener('mouseleave')
  onMouseLeave() {
    // this.elementRef.nativeElement.style = 'background-color: none';
    this.renderer.removeStyle(this.elementRef.nativeElement, 'backgroundColor');
  }

  //constructor(public elementRef: ElementRef, public rendered: Rendered2) { }
}
