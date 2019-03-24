import { Component, Input } from '@angular/core';

@Component({
  selector: 'charts-loading',
  templateUrl: './charts-loading.component.html',
  styleUrls: ['./charts-loading.component.scss']
})
export class ChartsLoadingComponent {
  @Input() isLoading = false;
  @Input() tip = 'Loading...';
  @Input() size = 'default';
}
