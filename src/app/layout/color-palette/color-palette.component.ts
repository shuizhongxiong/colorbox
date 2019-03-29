import { Component, OnInit, Output, EventEmitter, ViewEncapsulation, Input, OnChanges, SimpleChanges } from '@angular/core';

import * as CURVES from './coloralgorithm/curves.js';
import * as GENERATE from './coloralgorithm/generate.js';

@Component({
  selector: 'app-color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ColorPaletteComponent implements OnInit, OnChanges {
  values = {
    steps: 11,
    minor_steps_map: [null],
    hue_start: 0,
    hue_end: 359,
    hue_curve: 'linear',
    sat_start: 50,
    sat_end: 50,
    sat_curve: 'linear',
    sat_rate: 130,
    lum_start: 50,
    lum_end: 50,
    lum_curve: 'linear',
    lock_hex: '',
    modifier: 10,
  };
  valuesClone = JSON.parse(JSON.stringify(this.values));

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
  result = [];

  @Input() reset = false;
  @Output()
  resetChange: EventEmitter<boolean> = new EventEmitter();

  @Input() graph = 'hue';
  @Output()
  graphChange: EventEmitter<string> = new EventEmitter();

  @Output()
  resultChange: EventEmitter<any[]> = new EventEmitter();

  ngOnInit() {
    this.valueChange('', 'lock_hex');
  }

  ngOnChanges(changes: SimpleChanges) {
    const { reset } = changes;
    if (reset && reset.currentValue) {
      this.values = JSON.parse(JSON.stringify(this.valuesClone));
      this.valueChange('', 'lock_hex');
    }
  }

  valueChange(value: any, key: string) {
    // 更改图表类型
    let type = key.substring(0, 3);
    if (type !== 'hue' && type !== 'sat' && type !== 'lum') {
      type = this.graph;
    }
    this.chageGraph(type);
    this.handleMinorSteps();

    this.values[key] = value;
    this.result = GENERATE.generate(this.values);
    this.resultChange.emit(this.result);

    if (this.reset) {
      setTimeout(() => {
        this.reset = false;
        this.resetChange.emit(this.reset);
      }, 0);
    }
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
