import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'charts-empty',
  templateUrl: './charts-empty.component.html',
  styleUrls: ['./charts-empty.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ChartsEmptyComponent {
  @Input() tip = '暂无数据';
}
