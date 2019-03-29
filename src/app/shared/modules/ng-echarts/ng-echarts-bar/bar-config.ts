import { ColorLib, TooltipBgColor } from '../ng-echarts.model';

export class BarConfig {
  constructor(
    private legendList: any[],
    private xAxisList: string[],
    private seriesList: any[]
  ) { }

  getOptions() {
    const defaultOptions = {
      tooltip: {
        trigger: 'axis',
        padding: 10,
        axisPointer: {
          lineStyle: {
            color: '#E6EAEE',
            type: 'dashed'
          }
        },
        backgroundColor: TooltipBgColor,
        confine: true
      },
      legend: {
        type: 'scroll',
        bottom: 0,
        itemGap: 16,
        itemWidth: 24,
        itemHeight: 10,
        textStyle: {
          fontSize: 12,
          color: '#354052'
        },
        data: this.legendList
      },
      grid: {
        top: 12,
        left: 'left',
        right: 0,
        bottom: 28,
        containLabel: true
      },
      xAxis: {
        axisLine: {
          lineStyle: {
            color: '#E6EAEE'
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#9A9FA8',
          fontSize: 12,
          margin: 16,
        },
        data: this.xAxisList
      },
      yAxis: [
        {
          type: 'value',
          scale: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#9A9FA8',
            fontSize: 12
          },
          splitLine: {
            lineStyle: {
              color: ['#E6EAEE'],
              type: 'dashed'
            }
          }
        },
        {
          type: 'value',
          scale: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#9A9FA8',
            fontSize: 12
          },
          splitLine: {
            show: false,
            lineStyle: {
              color: ['#E6EAEE'],
              type: 'dashed'
            }
          }
        }
      ],
      series: this.seriesList.map(item => {
        item.itemStyle = {
          borderWidth: 2
        };
        return item;
      }),
      color: ColorLib
    };
    return defaultOptions;
  }
}
