import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[foxInfoHost]',
  standalone: true,
})
export class InfoHostDirective {
  public vcRef = inject(ViewContainerRef);
}
