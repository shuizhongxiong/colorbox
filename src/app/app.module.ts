import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh';

import { AppRoutingModule } from './app-routing.module';
import { NgEchartsModule } from './modules/ng-echarts';

import { AppComponent } from './app.component';
import { ColorChartComponent } from './layout/color-chart/color-chart.component';
import { ColorGraphComponent } from './layout/color-graph/color-graph.component';
import { ColorPaletteComponent } from './layout/color-palette/color-palette.component';
import { ColorStackComponent } from './layout/color-stack/color-stack.component';
import { AppHeaderComponent } from './layout/header/app-header.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    ColorChartComponent,
    ColorGraphComponent,
    ColorPaletteComponent,
    ColorStackComponent,
    AppHeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    AppRoutingModule,
    NgEchartsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
