import { Component, Input } from '@angular/core';

@Component({
  selector: 'charts-empty',
  templateUrl: './charts-empty.component.html',
  styleUrls: ['./charts-empty.component.scss']
})

export class ChartsEmptyComponent {
  @Input() isShow = false;
  @Input() emptyText = '暂无数据';
}
