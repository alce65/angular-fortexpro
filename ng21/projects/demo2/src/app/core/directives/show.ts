import { Directive, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[foxShow]',
})
export class Show {
  private hasView = false;

  private templateRef: TemplateRef<HTMLElement> = inject(TemplateRef);
  private viewContainer: ViewContainerRef = inject(ViewContainerRef);

  // @Input() set foxShow(condition: boolean) {
  //   if (condition && !this.hasView) {
  //     this.viewContainer.createEmbeddedView(this.templateRef);
  //     this.hasView = true;
  //   } else if (!condition && this.hasView) {
  //     this.viewContainer.clear();
  //     this.hasView = false;
  //   }
  // }

  foxShow = input(undefined, {
    transform: (condition: boolean) => {
      if (condition && !this.hasView) {
        this.viewContainer.createEmbeddedView(this.templateRef);
        this.hasView = true;
      } else if (!condition && this.hasView) {
        this.viewContainer.clear();
        this.hasView = false;
      }
    },
  });
}
