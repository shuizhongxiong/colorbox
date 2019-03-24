import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as GENERATE from '../color-palette/coloralgorithm/generate.js';

@Component({
  selector: 'app-color-graph',
  templateUrl: './color-graph.component.html',
  styleUrls: ['./color-graph.component.scss']
})
export class ColorGraphComponent implements OnChanges {
  graphLabel = '';
  dotList = [];

  @Input() result: any[] = [];
  @Input() graph = '';

  ngOnChanges(changes: SimpleChanges) {
    const { result, graph } = changes;
    if (graph && graph.currentValue !== graph.previousValue) {
      this.graphLabel = this.getGraphLabel(graph.currentValue);
      if (!graph.firstChange) {
        this.changeDots(this.result, graph.currentValue);
      }
    }
    if (result && result.currentValue) {
      this.changeDots(result.currentValue, this.graph);
    }
  }

  private getGraphLabel(value: string): string {
    let label = '';
    switch (value) {
      case 'hue':
        label = 'Hue';
        break;
      case 'sat':
        label = 'Saturation';
        break;
      case 'lum':
        label = 'Luminosity';
        break;
      default:
        break;
    }
    return label;
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
