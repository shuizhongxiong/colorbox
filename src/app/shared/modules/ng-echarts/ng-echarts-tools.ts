export class Tools {
  public static deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  public static getNumberUnits(value) {
    const units = ['K', 'M', 'B', 'T', 'P', 'E'];
    const vLen = parseInt(value, 10).toString().length;
    if (vLen < 4) {
      return value;
    } else if (value.toString().indexOf('+') !== -1) {
      return value;	// 超大数转为科学计数法
    }
    const diff = (vLen > units.length * 3) ?
      units.length * 3 :
      Math.floor((vLen - 1) / 3);
    return (value / Math.pow(1000, diff)) + units[diff - 1];
  }

  public static addComma(num: number, fixed?: number): string {
    if (!num) {
      return '0';
    }
    const finalNum = (fixed !== undefined) ? num.toFixed(fixed) : num;
    const list = finalNum.toString().split('.');
    const end = (list[1] !== undefined) ? ('.' + list[1]) : '';
    return (+list[0]).toLocaleString() + end;
  }

  public static chartYLabelFormatter(type: string) {
    if (type === 'largeNum') {
      return (value => {
        return Tools.getNumberUnits(value);
      });
    } else if (type === 'percent') {
      return (value => {
        return (value * 100).toFixed(0) + '%';
      });
    } else if (type === 'percent2') {
      return (value => {
        return value + '%';
      });
    }
    return null;
  }

  public static chartTooltipFormatter(params: any) {
    let tip = '';
    const name = params[0].name;
    params.forEach((d, i) => {
      const value = d.value;
      let valueStr = '--';
      if ((value || value === 0) && value !== '--') {
        valueStr = value.toString();
        if (d.type === 'largeNum') {
          valueStr = this.addComma(value);
        } else if (d.type === 'percent') {
          valueStr = (value * 100).toFixed(2) + '%';
        } else if (d.type === 'percent2') {
          valueStr = value + '%';
        }
        if (d.unit) {
          valueStr += d.unit;
        }
        if (typeof d.type === 'function') {
          valueStr = d.type(valueStr, d);
        }
      }
      tip += `<br/>${d.marker}${d.realName || d.seriesName}：${valueStr}`;
    });
    return name + tip;
  }
}
