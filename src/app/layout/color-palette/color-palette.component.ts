import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

import * as CURVES from './coloralgorithm/curves.js';
import * as GENERATE from './coloralgorithm/generate.js';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorPaletteComponent implements OnInit {
  values = {
    steps: 11,
    minor_steps_map: [null],
    hue_start: 315,
    hue_end: 293,
    hue_curve: 'easeInQuad',
    sat_start: 4,
    sat_end: 90,
    sat_curve: 'easeOutQuad',
    sat_rate: 130,
    lum_start: 100,
    lum_end: 53,
    lum_curve: 'easeOutQuad',
    lock_hex: '',
    modifier: 10,
  };
  steps = {
    min: 3,
    max: 21
  };
  minorSteps = [];
  minorStepsHandle = {
    add: () => {
      if (this.values.minor_steps_map.length === this.minorSteps.length ||
        !this.values.minor_steps_map.every(d => d !== null)) {
        return false;
      }
      this.values.minor_steps_map.push(null);
    },
    clear: () => {
      this.values.minor_steps_map = [null];
      this.valueChange(this.values.minor_steps_map, 'minor_steps_map');
    },
    change: (value, index) => {
      const map = [...this.values.minor_steps_map];
      map[index] = value;
      this.values.minor_steps_map = map;

      const sortValue = map.sort((x, y) => x - y);
      this.valueChange(sortValue, 'minor_steps_map');

      console.log(this.values.minor_steps_map);
    }
  };
  hue = { // 色调
    startMin: 0,
    startMax: 359,
    endMin: 0,
    endMax: 359
  };
  saturation = {  // 饱和
    startMin: 0,
    startMax: 100,
    endMin: 0,
    endMax: 100,
    rateMin: 0,
    rateMax: 200
  };
  luminosity = { // 亮度
    startMin: 0,
    startMax: 100,
    endMin: 0,
    endMax: 100
  };
  curves = Object.keys(CURVES);
  graph = 'sat';
  result = [];

  @Output() resultChange: EventEmitter<any[]> = new EventEmitter();
  @Output() graphChange: EventEmitter<string> = new EventEmitter();

  ngOnInit() {
    this.valueChange('#8b37ff', 'lock_hex');
  }

  valueChange(value: any, key: string) {
    this.values[key] = value;
    this.result = GENERATE.generate(this.values);
    this.resultChange.emit(this.result);

    // 更改图表类型
    let type = key.substring(0, 3);
    if (type !== 'hue' && type !== 'sat' && type !== 'lum') {
      type = this.graph;
    }
    this.chageGraph(type);

    this.handleMinorSteps();
  }

  chageGraph(key: string) {
    this.graph = key;
    this.graphChange.emit(this.graph);
  }

  private handleMinorSteps() {
    const minorSteps = [null];
    this.result.forEach(d => {
      minorSteps.push(d.label);
    });
    this.minorSteps = minorSteps;
  }
}
