import {
  Directive, Input, Output, OnDestroy, EventEmitter, HostListener, ElementRef,
  ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef
} from '@angular/core';

import { ClipboardTooltipComponent } from './clipboard-tooltip.component';

@Directive({ selector: '[clipboard]' })
export class ClipboardDirective implements OnDestroy {
  private componentRef: any;

  @Input() payload: string;
  @Input()
  set isNeedTooltip(value: boolean) {
    if (value) {
      // fix ExpressionChangedAfterItHasBeenCheckedError
      setTimeout(() => {
        this.appendTooltip();
      }, 0);
    }
  }

  @Output()
  copied: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private el: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) { }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    event.preventDefault();
    if (!this.payload) {
      return;
    }
    const listener = (e: ClipboardEvent) => {
      e.preventDefault();
      const clipboard = e.clipboardData;
      clipboard.setData('text', this.payload.toString());

      this.componentRef.instance.status = 'done';

      this.copied.emit(this.payload);
    };
    document.addEventListener('copy', listener, false);
    document.execCommand('copy');
    document.removeEventListener('copy', listener, false);
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  private appendTooltip() {
    const domEl = this.el.nativeElement;
    domEl.style.position = 'relative';

    // Create a component reference from the component
    this.componentRef = this.componentFactoryResolver
      .resolveComponentFactory(ClipboardTooltipComponent)
      .create(this.injector);

    // input
    this.componentRef.instance.status = 'start';

    // Attach component to the appRef so that it's inside the ng component tree
    this.appRef.attachView(this.componentRef.hostView);

    // Get DOM element from component
    const domElem = (this.componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    domEl.appendChild(domElem);
  }
}
