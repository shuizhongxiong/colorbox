import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { EChartOption } from 'echarts';

import { Tools } from '../ng-echarts-tools';
import { LineConfig } from './line-config';

@Component({
  selector: 'ng-echarts-line',
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
export class NgEchartsLineComponent implements OnChanges {
  options: EChartOption;
  tooltipConfigs: any[] = [];
  private dataTmp: any;

  /**
	 * @description {object} 数据配置 - 会在原始数据里寻找
	 */
  private _dataConfig: any = {
    key: 'key', // {string} x 轴
    children: 'children', // {string} 子数据列表

    name: 'name', // {string} 左侧 legend、tooltip
    type: 'line', // 左侧类型
    value: 'value', // {string} 左侧 y 轴
    valueType: 'largeNum', // {string} largeNum: 自动添加大数单位 | percent: * 100 + '%' | percent2: + '%'
    valueUnit: null,	// {string} tooltip 里增加的单位

    nameRight: 'nameRight',  // {string} 右侧 legend、tooltip
    typeRight: 'line', // 左侧类型
    valueRight: 'valueRight', // {string} 右侧 y 轴名称，默认空值不显示
    valueRightType: 'percent', // {string} unit: 自动添加大数单位 | percent: * 100 + '%' | percent2: + '%'
    valueRightUnit: null,	// {string} tooltip 里增加的单位
  };

  /**
	 * @description {array} 原始数据
	 * @example 标准格式
	 * [{ name: xxx, tooltipConfig: { type: xxx, unit: xxx, realName: xxx }, children: [{ key: xxx, value: xxx } ]}]
	 * @example 右 y 轴格式
	 * [{ nameRight: xxx, tooltipConfig: { type: xxx, unit: xxx, realName: xxx }, children: [{ key: xxx, valueRight: xxx } ]}]
	 */
  @Input() data: any[] = [];

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
    let xAxisList: any = new Set(); // 自动去重
    const seriesList = [];

    data.forEach(item => {
      const leftName = item[this._dataConfig.name];
      if (item.tooltipConfig) {
        this.tooltipConfigs.push(item.tooltipConfig);
      }
      // 默认左侧
      if (leftName) {
        legendList.push(leftName);
        const series = [];
        const children = item[this._dataConfig.children];
        if (children) {
          children.forEach(child => {
            const key = child[this._dataConfig.key] || null;
            if (key) {
              xAxisList.add(key);
            }
            // y 轴数据
            const leftValue = child[this._dataConfig.value] || '--';
            series.push(leftValue);
          });
        }
        const seriesData: any = {
          type: this._dataConfig.type || 'line',
          name: leftName,
          data: series
        };
        seriesList.push(seriesData);
      }
      // 右侧
      const rightName = item[this._dataConfig.nameRight];
      if (rightName) {
        legendList.push(rightName);
        const seriesRight = [];
        const children = item[this._dataConfig.children];
        if (children) {
          children.forEach(child => {
            const key = child[this._dataConfig.key] || null;
            if (key) {
              xAxisList.add(key);
            }
            const rightValue = child[this._dataConfig.valueRight] || '--';
            seriesRight.push(rightValue);
          });
        }
        const seriesRightData: any = {
          type: this._dataConfig.typeRight || 'line',
          name: rightName,
          data: seriesRight,
          yAxisIndex: 1
        };
        seriesList.push(seriesRightData);
      }
    });
    xAxisList = Array.from(xAxisList);
    const lineConfig = new LineConfig(
      legendList,
      xAxisList,
      seriesList
    );
    const defaultOptions = lineConfig.getOptions();
    this.options = this.optionsHandle(defaultOptions);
    this.optionsInit.emit(this.options);
  }

  private optionsHandle(options: EChartOption): EChartOption {
    // tooltip 格式化
    options.tooltip.formatter = (params: any) => {
      params.map(d => {
        Object.assign(d, this.tooltipConfigs[d.seriesIndex]);
        return d;
      });
      const data = params.sort(this.sortData('value', false));
      return Tools.chartTooltipFormatter(data);
    };
    // 左侧 label 格式化
    options.yAxis[0].axisLabel.formatter = Tools.chartYLabelFormatter(this._dataConfig.valueType);
    // 右侧 label 格式化
    options.yAxis[1].axisLabel.formatter = Tools.chartYLabelFormatter(this._dataConfig.valueRightType);
    return options;
  }

  onChartInit(chart) {
    this.chartInit.emit(chart);
  }

  sortData(type, rev) {
    // rev false降序 || true升序
    if (rev === undefined) {
      rev = 1;
    } else {
      rev = (rev) ? 1 : -1;
    }
    return (a, b) => {
      a = +a[type];
      b = +b[type];
      if (a < b) {
        return rev * -1;
      }
      if (a > b) {
        return rev * 1;
      }
      return 0;
    };
  }
}
