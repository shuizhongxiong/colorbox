import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  @Output() reset: EventEmitter<any> = new EventEmitter();
  @Output() share: EventEmitter<any[]> = new EventEmitter();

  doReset() {
    this.reset.emit();
  }
  doShare() {
    this.share.emit();
  }
}
