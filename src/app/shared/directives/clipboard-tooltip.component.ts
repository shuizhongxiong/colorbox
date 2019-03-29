import { Component, Input } from '@angular/core';

@Component({
  selector: 'clipboard-tooltip',
  template: `
    <div class="clipboard-tooltip" nz-tooltip [nzVisible]="visible" [nzTitle]="tips"></div>
  `,
  styles: [`
    :host {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      cursor: pointer;
    }
    :host .clipboard-tooltip {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `]
})

export class ClipboardTooltipComponent {
  tips = null;
  visible = false;

  @Input()
  set status(value: string) {
    if (value === 'start') {
      this.tips = '点击即可复制';
      this.visible = false;
    } else if (value === 'done') {
      this.tips = '复制成功';
      this.visible = true;
      setTimeout(() => {
        this.status = 'start';
      }, 500);
    }
  }
}
