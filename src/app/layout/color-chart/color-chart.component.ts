import { Component, OnInit, Input } from '@angular/core';
import { format, subDays } from 'date-fns';

@Component({
  selector: 'app-color-chart',
  templateUrl: './color-chart.component.html',
  styleUrls: ['./color-chart.component.scss']
})
export class ColorChartComponent implements OnInit {
  today = new Date();
  colorList: string[] = [];

  // 折线图
  lineData = {
    chart: null,
    list: [],
    chartInit: (chart) => {
      this.lineData.chart = chart;
    }
  };

  // 饼图
  pieData = {
    chart: null,
    list: [],
    config: {
      name: '数据分布'
    },
    chartInit: (chart) => {
      this.pieData.chart = chart;
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
      this.changeData();
    }
  }

  ngOnInit() {
    this.changeData();

    setTimeout(() => {
      this.changeColor();
    }, 0);
  }

  private changeData() {
    this.changeLineData();
    this.changePieData();
    this.changeColor();
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
        name: '数据' + (i + 1),
        children
      });
    }
    this.lineData.list = list;
  }

  private changePieData() {
    const count = this.colorList.length;
    const list = [];
    for (let i = 0; i < count; i++) {
      list.push({
        key: '数据' + i + 1,
        value: Math.random()
      });
    }
    this.pieData.list = list;
  }

  private changeColor() {
    if (!this.lineData.chart) {
      return false;
    }
    setTimeout(() => {
      this.lineData.chart.setOption({
        color: this.colorList
      });
      this.pieData.chart.setOption({
        color: this.colorList
      });
    }, 0);
  }
}
