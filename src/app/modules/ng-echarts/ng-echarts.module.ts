import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ChartsEmptyComponent } from './charts-base/charts-empty/charts-empty.component';
import { ChartsLoadingComponent } from './charts-base/charts-loading/charts-loading.component';

import { NgEchartsComponent } from './ng-echarts.component';
import { NgEchartsLineComponent } from './ng-echarts-line/ng-echarts-line.component';
import { NgEchartsBarComponent } from './ng-echarts-bar/ng-echarts-bar.component';
import { NgEchartsPieComponent } from './ng-echarts-pie/ng-echarts-pie.component';
import { NgEchartsTreemapComponent } from './ng-echarts-treemap/ng-echarts-treemap.component';

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
    NgEchartsBarComponent,
    NgEchartsPieComponent,
    NgEchartsTreemapComponent
  ],
  exports: [
    NgEchartsComponent,
    NgEchartsLineComponent,
    NgEchartsBarComponent,
    NgEchartsPieComponent,
    NgEchartsTreemapComponent
  ]
})
export class NgEchartsModule { }
