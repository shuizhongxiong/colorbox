import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  @Output() headerReset: EventEmitter<any> = new EventEmitter();
  @Output() headerShare: EventEmitter<any[]> = new EventEmitter();

  reset() {
    this.headerReset.emit();
  }
  share() {
    this.headerShare.emit();
  }
}
