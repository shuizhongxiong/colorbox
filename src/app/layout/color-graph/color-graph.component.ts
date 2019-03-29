import { Component, Input, Output, OnChanges, SimpleChanges, EventEmitter } from '@angular/core';
import * as GENERATE from '../color-palette/coloralgorithm/generate.js';

@Component({
  selector: 'app-color-graph',
  templateUrl: './color-graph.component.html',
  styleUrls: ['./color-graph.component.scss']
})
export class ColorGraphComponent implements OnChanges {
  navData = [
    { label: '色相', value: 'hue' },
    { label: '饱和度', value: 'sat' },
    { label: '明度', value: 'lum' },
  ];
  dotList = [];

  @Input() result: any[] = [];
  @Input() graph = 'hue';
  @Output()
  graphChange: EventEmitter<string> = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    if (this.graph && this.result && this.result.length > 0) {
      this.changeDots(this.result, this.graph);
    }
  }

  navChange(type) {
    this.graph = type;
    this.graphChange.emit(this.graph);
  }

  private changeDots(result, graph) {
    this.dotList = [];
    result.forEach(d => {
      this.dotList.push(this.getDots(d, graph));
    });
  }

  private getDots(data, graph) {
    const r = {
      hue: {
        variable: data.hue,
        rangeA: [0, 360],
        rangeB: [98, 0],
        label: Math.round(data.hue)
      },
      sat: {
        variable: data.sat,
        rangeA: [0, 1],
        rangeB: [98, 0],
        label: Math.round(100 * data.sat)
      },
      lum: {
        variable: data.lum,
        rangeA: [0, 1],
        rangeB: [98, 0],
        label: Math.round(100 * data.lum)
      }
    };
    return {
      top: GENERATE.distribute(r[graph].variable, r[graph].rangeA, r[graph].rangeB) + '%',
      backgroundColor: data.hex,
      color: data.displayColor,
      step: data.label,
      value: r[graph].label,
      lock: data.lock
    };
  }
}
