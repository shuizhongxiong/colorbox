import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NgEchartsModule } from './modules/ng-echarts';
import { ClipboardDirective } from './directives/clipboard.directive';
import { ClipboardTooltipComponent } from './directives/clipboard-tooltip.component';

@NgModule({
  declarations: [
    ClipboardDirective,
    ClipboardTooltipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NgEchartsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgZorroAntdModule,
    NgEchartsModule,
    ClipboardDirective
  ],
  entryComponents: [
    ClipboardTooltipComponent
  ]
})
export class SharedModule { }
