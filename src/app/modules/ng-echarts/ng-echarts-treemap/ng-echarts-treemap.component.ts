import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EChartOption } from 'echarts';

import { ColorLib, TooltipBgColor } from '../ng-echarts.model';

@Component({
  selector: 'ng-echarts-treemap',
  template: `
		<ng-echarts
      [height]="height"
      [width]="width"
      [options]="options"
      [status]="status"
      [loadingSize]="loadingSize"
      [loadingTip]="loadingTip"
      [emptyTip]="emptyTip">
		</ng-echarts>`
})
export class NgEchartsTreemapComponent {
  options: EChartOption;
  isFinish = false;
  level = 0;
  private dataTmp: any;

	/**
	 * @description {object} 图表自定义配置
	 */
  private _dataConfig: any = {
    name: '', // legend、tooltip 注：直接配置，不会寻找
    tooltipFormatter: null // 提示框浮层内容格式器
  };

  @Input()
  set dataConfig(data: any) {
    if (data) {
      this.createdataConfig(data);
    }
  }

	/**
	 * @description {array} 原始数据
	 *  [{ name: xxx, value: xxx }]
	 */
  @Input()
  set data(data: any[]) {
    let json = data;
    if (json && json.length > 0) {
      this.createOptions(json);
    }
  }

  @Input() isShowEmpty = false;
  @Input() emptyText = '暂无数据';
  @Input() height: number | string;
  @Input() width: number | string;
  @Input() status = null;
  @Input() loadingSize = 'default';
  @Input() loadingTip = 'Loading...';
  @Input() emptyTip = '暂无数据';

  @Output()
  optionsInit: EventEmitter<any> = new EventEmitter();

  @Output()
  levelChange: EventEmitter<any> = new EventEmitter();

  private createdataConfig(data: any) {
    this._dataConfig = Object.assign(this._dataConfig, data);
  }

  private createOptions(data: any[]) {
    const options: any = {
      tooltip: {
        formatter: this._dataConfig.tooltipFormatter,
        backgroundColor: TooltipBgColor
      },
      series: [{
        name: this._dataConfig.name || '',
        type: 'treemap',
        width: '100%',
        height: '100%',
        roam: false,
        zoomToNodeRatio: 0,
        drillDownIcon: '',
        nodeClick: 'none',
        leafDepth: 1,
        breadcrumb: {
          show: false
        },
        itemStyle: {
          gapWidth: 1
        },
        levels: [{
          color: ColorLib,
        }],
        data
      }]
    };
    this.level = 0;
    this.options = options;
    this.optionsInit.emit(this.options);
  }

  doChartInit(chart) {
    if (chart) {
      chart.on('finished', () => {
        this.isFinish = true;
      });
      // 第二层时点击返回上一层
      chart.on('click', (data) => {
        if (!this.isFinish || !data) {
          return false;
        }
        this.isFinish = false;

        if (this.level === 1) {
          chart.setOption(chart.getOption());
          this.level = 0;
          this.levelChange.emit(data);
        } else if (this.level === 0) {
          const d = data.data;
          if (d && d.name && d.children && d.children.length > 0) {
            this.level = 1;
            this.levelChange.emit(data);
          }
        }
      });
    }
  }
}
