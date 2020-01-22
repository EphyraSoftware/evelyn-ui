import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appPopoutHost]'
})
export class PopoutHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
