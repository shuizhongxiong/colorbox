import { ColorLib, LineLegendIconPath, TooltipBgColor } from '../ng-echarts.model';

export class LineConfig {
  constructor(
    private legendList: string[],
    private xAxisList: string[],
    private seriesList: any[]
  ) { }

  getOptions() {
    const options = {
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
        icon: LineLegendIconPath,
        data: this.legendList
      },
      grid: {
        top: 36,
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
          fontSize: 14,
          margin: 16
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
            fontSize: 14
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
            fontSize: 14
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
        if (this.xAxisList && this.xAxisList.length === 1) {
          item.showSymbol = true;
        } else {
          item.showSymbol = false;
        }
        item.hoverAnimation = false;
        item.symbolSize = 10;
        item.itemStyle = {
          borderWidth: 2
        };
        item.animationDuration = 500;

        // 数据只有1条时，加上区域阴影
        if (this.seriesList.length === 1) {
          item.areaStyle = {
            opacity: 0.1
          };
        }

        return item;
      }),
      // color: ColorLib
    };
    return options;
  }

}
