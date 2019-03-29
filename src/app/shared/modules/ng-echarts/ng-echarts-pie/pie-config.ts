import { ColorLib, TooltipBgColor } from '../ng-echarts.model';

export class PieConfig {
  constructor(
    private legendList: any[],
    private seriesList: any[]
  ) { }

  getDefaultOptions() {
    const defaultOptions = {
      tooltip: {
        trigger: 'item',
        padding: 10,
        backgroundColor: TooltipBgColor
      },
      legend: {
        type: 'scroll',
        bottom: '0',
        itemGap: 16,
        itemWidth: 10,
        itemHeight: 10,
        textStyle: {
          fontSize: 12,
          color: '#354052'
        },
        data: this.legendList.map(item => {
          item.icon = 'circle';
          return item;
        })
      },
      series: this.seriesList,
      color: ColorLib
    };
    return defaultOptions;
  }
}
