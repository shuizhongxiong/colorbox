import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-color-stack',
  templateUrl: './color-stack.component.html',
  styleUrls: ['./color-stack.component.scss']
})
export class ColorStackComponent {
  @Input() result: any[] = [];
}
