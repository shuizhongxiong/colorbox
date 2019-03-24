import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EChartOption } from 'echarts';

import { PieConfig } from './pie-config';

@Component({
  selector: 'ng-echarts-pie',
  template: `
		<ng-echarts
			[height]="height"
			[width]="width"
			[options]="options"
			[loadingSize]="loadingSize"
			[loadingTip]="loadingTip"
			[isShowEmpty]="isShowEmpty"
      [emptyText]="emptyText"
      (chartInit)='onChartInit($event)'>
		</ng-echarts>`
})
export class NgEchartsPieComponent {
  options: EChartOption;

	/**
	 * @description {object} 数据配置 - 会在原始数据里寻找
	 */
  private _dataConfig: any = {
    name: '', // legend、tooltip 注：直接配置，不会寻找
    key: 'key', // x 轴
    value: 'value', // y 轴
    valueType: 'percent', // 提示框数值自动计算百分比
    tooltipFormatter: null // 提示框浮层内容格式器
  };

  @Input()
  set dataConfig(data: any) {
    if (data) {
      this.createDataConfig(data);
    }
  }

	/**
	 * @description {array} 原始数据
	 * @example 标准格式
	 * [{ key: xxx, value: xxx }]
	 */
  @Input()
  set data(data: any[]) {
    let json = data;
    if (json && json.length > 0) {
      this.createOptions(json);
    }
  }

  @Input() height: number | string;
  @Input() width: number | string;

  @Input() loadingSize = 'default';
  @Input() loadingTip = 'Loading...';

  @Input() isShowEmpty = false;
  @Input() emptyText = '暂无数据';


  @Output()
  optionsInit: EventEmitter<any> = new EventEmitter();
  @Output()
  chartInit: EventEmitter<any> = new EventEmitter();

  private createDataConfig(data: any) {
    this._dataConfig = Object.assign(this._dataConfig, data);
  }

  private createOptions(data: any[]) {
    let legendList = [];
    let seriesData = [];
    data.forEach(item => {
      let key = item[this._dataConfig.key];
      legendList.push({ name: key });
      seriesData.push({
        name: key,
        value: item[this._dataConfig.value]
      });
    });

    let seriesList = [
      {
        name: this._dataConfig.name,
        type: 'pie',
        radius: ['50%', '70%'],
        data: seriesData
      }
    ];

    let pieConfig = new PieConfig(
      legendList,
      seriesList
    );
    let options: any = pieConfig.getDefaultOptions();

    if (this._dataConfig.tooltipFormatter) {
      options.tooltip.formatter = this._dataConfig.tooltipFormatter;
    } else if (this._dataConfig.valueType === 'percent') {
      options.tooltip.formatter = (params) => {
        return `${params.seriesName}<br>${params.marker}${params.name}：${params.percent}%`;
      }
    }

    // Delay execute to wait for the map size to be initialized.
    // setTimeout(() => {
    this.options = options;
    this.optionsInit.emit(this.options);
    // }, 0);
  }

  onChartInit(chart) {
    this.chartInit.emit(chart);
  }
}
