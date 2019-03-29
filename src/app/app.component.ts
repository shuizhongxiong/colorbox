import { Component } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'colorbox';
  result = [];
  graph = 'hue';
  reset = false;
  colorList = '';

  constructor(private modalService: NzModalService) { }

  resultChange(data) {
    if (data && Array.isArray(data)) {
      this.result = [...data];
    }
  }

  headerReset() {
    this.reset = true;
  }

  headerShare(tplContent) {
    this.colorList = this.result.map(d => d.hex).toString();
    this.modalService.create({
      nzTitle: '颜色列表（点击下方列表即可复制）',
      nzContent: tplContent,
      nzCancelText: null,
      nzOnOk: () => new Promise(resolve => resolve())
    });
  }
}
