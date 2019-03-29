import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ChartsEmptyComponent } from './charts-base/charts-empty/charts-empty.component';
import { ChartsLoadingComponent } from './charts-base/charts-loading/charts-loading.component';

import { NgEchartsComponent } from './ng-echarts.component';
import { NgEchartsLineComponent } from './ng-echarts-line/ng-echarts-line.component';
import { NgEchartsPieComponent } from './ng-echarts-pie/ng-echarts-pie.component';


@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    ChartsEmptyComponent,
    ChartsLoadingComponent,
    NgEchartsComponent,
    NgEchartsLineComponent,
    NgEchartsPieComponent
  ],
  exports: [
    NgEchartsComponent,
    NgEchartsLineComponent,
    NgEchartsPieComponent
  ]
})
export class NgEchartsModule { }
