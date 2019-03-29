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

  constructor(private modalService: NzModalService) { }

  resultChange(data) {
    if (data && Array.isArray(data)) {
      this.result = [...data];
    }
  }

  headerReset() {
    window.location.reload();
  }

  headerShare() {
    const colorList = this.result.map(d => d.hex);
    this.modalService.info({
      nzTitle: 'Hex JSON',
      nzContent: colorList.toString()
    });
  }
}
