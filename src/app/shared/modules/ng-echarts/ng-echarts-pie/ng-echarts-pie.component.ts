import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { EChartOption } from 'echarts';

import { PieConfig } from './pie-config';

@Component({
  selector: 'ng-echarts-pie',
  template: `
    <ng-echarts
      [height]="height"
			[width]="width"
			[options]="options"
      [status]="status"
			[loadingSize]="loadingSize"
      [loadingTip]="loadingTip"
			[emptyTip]="emptyTip"
      (chartInit)="onChartInit($event)">
		</ng-echarts>`
})
export class NgEchartsPieComponent implements OnChanges {
  options: EChartOption;
  private dataTmp: any;

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

  /**
	 * @description {array} 原始数据
	 * @example 标准格式
	 * [{ key: xxx, value: xxx }]
	 */
  @Input() data: any[];

  @Input() dataConfig: any;
  @Input() height: number | string;
  @Input() width: number | string;
  @Input() status = null;
  @Input() loadingSize = 'default';
  @Input() loadingTip = 'Loading...';
  @Input() emptyTip = '暂无数据';
  @Output()
  optionsInit: EventEmitter<any> = new EventEmitter();
  @Output()
  chartInit: EventEmitter<any> = new EventEmitter();

  ngOnChanges({ dataConfig, data }: SimpleChanges) {
    const isDataConfigChange = (dataConfig && dataConfig.currentValue && dataConfig.currentValue !== dataConfig.previousValue);
    const isDataChange = (data && data.currentValue && data.currentValue !== data.previousValue);
    if (isDataConfigChange) {
      Object.assign(this._dataConfig, dataConfig.currentValue);
      if (!isDataChange) {
        this.createOptions(this.dataTmp);
      }
    }
    if (isDataChange) {
      this.dataTmp = data.currentValue;
      if (this.dataTmp && this.dataTmp.length > 0) {
        this.createOptions(this.dataTmp);
      }
    }
  }

  private createOptions(data: any[]) {
    const legendList = [];
    const seriesData = [];
    data.forEach(item => {
      const key = item[this._dataConfig.key];
      legendList.push({ name: key });
      seriesData.push({
        name: key,
        value: item[this._dataConfig.value]
      });
    });

    const seriesList = [{
      name: this._dataConfig.name,
      type: 'pie',
      radius: ['50%', '70%'],
      data: seriesData
    }];
    const pieConfig = new PieConfig(
      legendList,
      seriesList
    );
    const options: any = pieConfig.getDefaultOptions();

    if (this._dataConfig.tooltipFormatter) {
      options.tooltip.formatter = this._dataConfig.tooltipFormatter;
    } else if (this._dataConfig.valueType === 'percent') {
      options.tooltip.formatter = (params) => {
        return `${params.seriesName}<br>${params.marker}${params.name}：${params.percent}%`;
      };
    }
    this.options = options;
    this.optionsInit.emit(this.options);
  }

  onChartInit(chart) {
    this.chartInit.emit(chart);
  }
}
