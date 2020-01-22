import {Component, ComponentFactoryResolver, Input, OnInit, Type, ViewChild} from '@angular/core';
import {PopoutHostDirective} from './popout-host.directive';

@Component({
  selector: 'app-popout-panel',
  templateUrl: './popout-panel.component.html',
  styleUrls: ['./popout-panel.component.scss']
})
export class PopoutPanelComponent implements OnInit {
  @Input() childComponent: Type<any>;

  @ViewChild(PopoutHostDirective, {static: true}) popoutHost: PopoutHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.childComponent);

    this.popoutHost.viewContainerRef.createComponent(componentFactory);
  }

}
