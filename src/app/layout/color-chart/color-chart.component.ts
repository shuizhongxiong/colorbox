import { Component, OnInit, Input } from '@angular/core';
import { format, subDays } from 'date-fns';

import { DeviceBrandData } from './macok-data';

@Component({
  selector: 'app-color-chart',
  templateUrl: './color-chart.component.html',
  styleUrls: ['./color-chart.component.scss']
})
export class ColorChartComponent implements OnInit {
  radioValue = 'line';
  radioData = [
    { label: '折线图', value: 'line' },
    // { label: '柱状图', value: 'bar' },
    { label: '饼图', value: 'pie' },
    // { label: '箱型矩图', value: 'treemap' }
  ];

  today = new Date();
  colorList: string[] = [];

  // 折线图
  lineData = {
    list: [],
    status: null,
    optionsInit: (options) => {
      options.color = this.colorList;
    }
  };

  // 折线图
  barData = {
    list: [],
    status: null,
    optionsInit: (options) => {
      options.color = this.colorList;
    }
  };

  // 饼图
  pieData = {
    list: [],
    status: null,
    config: {
      name: '颜色分布'
    },
    optionsInit: (options) => {
      // options.color = this.colorList;
    }
  };

  // 箱型矩图
  treemapData = {
    list: DeviceBrandData.children,
    status: null,
    config: {
      tooltipFormatter: (params) => {
        return `手机品牌：${params.name}<br />
        			占比：${params.value.toFixed(2)}%`;
      }
    },
    optionsInit: (options) => {
      // options.color = this.colorList;
    }
  };

  @Input()
  set result(data: any[]) {
    if (data) {
      const list = [];
      data.forEach(d => {
        list.push(d.hex);
      });
      this.colorList = list;
      this.radioChange(this.radioValue);
    }
  }

  ngOnInit() {
    this.radioChange(this.radioValue);
  }

  private radioChange(type: string) {
    switch (type) {
      case 'line':
        this.changeLineData();
        break;
      case 'bar':
        this.changeBarData();
        break;
      case 'pie':
        this.changePieData();
        break;
      default:
        break;
    }
  }

  private changeLineData() {
    const list = [];
    const max = 6;
    const count = this.colorList.length;
    for (let i = 0; i < count; i++) {
      const children = [];
      for (let ii = 0; ii < max; ii++) {
        children.push({
          key: format(subDays(this.today, ii), 'YYYY-MM-DD'),
          value: (ii + i + Math.random()).toFixed(2)
        });
      }
      list.push({
        name: '颜色' + (i + 1),
        children
      });
    }
    this.lineData.list = list;
  }

  private changeBarData() {
    const list = [];
    const count = this.colorList.length;
    const children = [];
    for (let i = 0; i < count; i++) {
      children.push({
        key: '颜色' + (i + 1),
        value: (i + Math.random()).toFixed(2)
      });
    }
    list.push({
      name: '柱状图',
      children
    });
    console.log(list);
    this.barData.list = list;
  }

  private changePieData() {
    const count = this.colorList.length;
    const list = [];
    for (let i = 0; i < count; i++) {
      list.push({
        key: '颜色' + i + 1,
        value: Math.random()
      });
    }
    this.pieData.list = list;
  }
}
