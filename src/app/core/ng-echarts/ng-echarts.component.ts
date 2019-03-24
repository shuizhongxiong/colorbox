import {
  Component, OnInit, Input, Output, OnDestroy, ElementRef, NgZone,
  EventEmitter, AfterViewInit, ViewChild, OnChanges, SimpleChanges
} from '@angular/core';
import { Subject, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { init, ECharts, EChartOption } from 'echarts';

@Component({
  selector: 'ng-echarts',
  template: `
		<div class="echarts-container" #chartEl></div>
		<charts-loading
			[isLoading]="isLoading"
			[size]="loadingSize"
			[tip]="loadingTip"></charts-loading>
		<charts-empty
			[isShow]="isShowEmpty"
			[emptyText]="emptyText"></charts-empty>
	`,
  styles: [`
		:host() {
			position: relative;
			display: block;
		}
		.echarts-container {
			height: 100%;
			width: 100%;
		}
	`]
})
export class NgEchartsComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  private domEl: HTMLElement;
  private chart: ECharts;
  private destroy$ = new Subject<void>();
  private reaction: any;
  isLoading = true;

  @Input() loadingSize = 'default';
  @Input() loadingTip = 'Loading...';

  @Input() isShowEmpty = false;
  @Input() emptyText = '暂无数据';

  @Input() height: number | string = 400;
  @Input() width: number | string = '100%';

  /**
	 * @description echarts 图表配置项
	 * @see http://echarts.baidu.com/option.html#title
	 */
  @Input() options: EChartOption;

  /**
	 * @description 创建 echarts 实例可选参数
	 * @see http://echarts.baidu.com/api.html#echarts.init
	 */
  @Input() theme: string;
  @Input() initOpts: {
    devicePixelRatio?: number;
    renderer?: string;
    width?: number | string;
    height?: number | string;
  } = {};

  /**
	 * @description 默认开启图表自适应
	 */
  @Input() autoResize = true;

  /**
	 * @description 图表实例化后的回调函数，$event就是 echartsInstance 对象
	 * @see http://echarts.baidu.com/api.html#echartsInstance
	 * @example (chartInit)='onChartInit($event)'
	 *
	 */
  @Output() chartInit = new EventEmitter<ECharts>();

  /**
	 * @description 图表事件，回调函数中的参数 $event 就是 params 对象
	 * @see http://echarts.baidu.com/api.html#events
	 * @example (chartClick)='onChartClick($event)'
	 */
  @Output() chartClick = new EventEmitter<any>();
  @Output() chartDblClick = new EventEmitter<any>();
  @Output() chartMouseDown = new EventEmitter<any>();
  @Output() chartMouseUp = new EventEmitter<any>();
  @Output() chartMouseOver = new EventEmitter<any>();
  @Output() chartMouseOut = new EventEmitter<any>();
  @Output() chartGlobalOut = new EventEmitter<any>();
  @Output() chartContextMenu = new EventEmitter<any>();
  @Output() chartDataZoom = new EventEmitter<any>();

  @ViewChild('chartEl') chartElRef: ElementRef;

  constructor(
    private el: ElementRef,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.domEl = this.el.nativeElement;
    this.initChart();
  }

  ngOnChanges({ isShowEmpty, options }: SimpleChanges) {
    if (this.isShowEmpty || (isShowEmpty && isShowEmpty.currentValue)) {
      this.disposeChart();
    } else if (options && options.currentValue && !options.firstChange) {
      this.onOptionsChange(options.currentValue);
    }
  }

  ngAfterViewInit() {
    this.onOptionsChange(this.options);
  }

  ngOnDestroy() {
    this.disposeChart();
  }

  private initChart() {
    if (this.height) {
      const height = isNaN(+this.height) ? this.height : +this.height + 'px';
      this.domEl.style.height = height.toString();
    } else {
      this.domEl.style.height = '400px';
    }
    if (this.width) {
      const width = isNaN(+this.width) ? this.width : +this.width + 'px';
      this.domEl.style.width = width.toString();
    } else {
      this.domEl.style.width = '100%';
    }
    // gpu 加速
    this.domEl.style.transform = 'translateZ(0)';
    // 修复动画层级低于 z-index 层级
    this.domEl.style.zIndex = '99';
    // 屏幕的设备像素比
    if (!this.initOpts || !this.initOpts.devicePixelRatio) {
      this.initOpts.devicePixelRatio = window.devicePixelRatio || 1;
    }
  }

  private onOptionsChange(opt: EChartOption) {
    if (!opt) {
      return;
    }
    this.isLoading = true;
    if (!this.chart) {
      this.destroy$ = new Subject<void>();
      this.chart = this.createChart();
      this.addEventHandle();
      if (this.autoResize) {
        this.listenResize();
      }
      this.chartInit.emit(this.chart);
    }
    this.chart.setOption(opt, true);
    setTimeout(() => {
      if (this.chart) {
        this.chart.resize();
        this.isLoading = false;
      }
    }, 0);
  }

  private createChart() {
    // 初始化图表实例，跳出 ng 检测优化性能
    return this.ngZone.runOutsideAngular(() =>
      init(this.chartElRef.nativeElement, this.theme || undefined, this.initOpts || undefined)
    );
  }

  private listenResize() {
    this.ngZone.runOutsideAngular(() => {
      fromEvent(window, 'resize')
        .pipe(
          distinctUntilChanged(),
          debounceTime(10),
          takeUntil(this.destroy$)
        )
        .subscribe(() => {
          if (this.chart) {
            this.chart.resize();
          }
        });
    });
  }

  private addEventHandle() {
    this.chart.on('click', e =>
      this.ngZone.run(() => this.chartClick.emit(e))
    );
    this.chart.on('dblClick', e =>
      this.ngZone.run(() => this.chartDblClick.emit(e))
    );
    this.chart.on('mousedown', e =>
      this.ngZone.run(() => this.chartMouseDown.emit(e))
    );
    this.chart.on('mouseup', e =>
      this.ngZone.run(() => this.chartMouseUp.emit(e))
    );
    this.chart.on('mouseover', e =>
      this.ngZone.run(() => this.chartMouseOver.emit(e))
    );
    this.chart.on('mouseout', e =>
      this.ngZone.run(() => this.chartMouseOut.emit(e))
    );
    this.chart.on('globalout', e =>
      this.ngZone.run(() => this.chartGlobalOut.emit(e))
    );
    this.chart.on('contextmenu', e =>
      this.ngZone.run(() => this.chartContextMenu.emit(e))
    );
    this.chart.on('datazoom', e =>
      this.ngZone.run(() => this.chartDataZoom.emit(e))
    );
  }

  private disposeChart() {
    this.isLoading = false;

    this.destroy$.next();
    this.destroy$.complete();

    if (this.reaction) {
      this.reaction.dispose();
    }

    if (this.chart) {
      this.chart.dispose();
      this.chart = null;
    }
  }
}
