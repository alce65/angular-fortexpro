import { Component, viewChild, ViewContainerRef } from '@angular/core';
import { InfoComponent } from './info/info.component';
import { Card } from '../../../../core/components/card/card';


@Component({
  selector: 'fox-dynamics',
  imports: [Card],
  template: `
    <fox-card>
      <p>Dynamics components</p>
      <button (click)="loadInfoComponent()">Load component</button>
      <button (click)="removeInfoComponent()">Remove components</button>
      <ng-container #tpl></ng-container>
    </fox-card>
  `,
  styles: ``,
})
export default class DynamicsComponent {
  // La directiva permite acceder al ViewContainerRef
  // por DI del ViewContainerRef
  // public infoHost = viewChild(InfoHostDirective)

  //lu mismo puede hacerse con ViewChild
  // teniendo una referencia local en el container
  public vcRef = viewChild('tpl', { read: ViewContainerRef });

  loadInfoComponent() {
    // this.infoHost()?.vcRef.createComponent(InfoComponent);
    this.vcRef()?.createComponent(InfoComponent);
  }

  removeInfoComponent() {
    // this.infoHost()?.vcRef.clear();
    this.vcRef()?.clear();
  }
}
