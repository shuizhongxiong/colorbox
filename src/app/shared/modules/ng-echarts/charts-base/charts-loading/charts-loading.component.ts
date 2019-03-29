import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'charts-loading',
  templateUrl: './charts-loading.component.html',
  styleUrls: ['./charts-loading.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ChartsLoadingComponent {
  @Input() tip = 'Loading...';
  @Input() size = 'default';
}
