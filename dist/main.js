(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-wrapper\">\n  <app-header (headerReset)=\"headerReset()\" (headerShare)=\"headerShare()\">\n  </app-header>\n  <div class=\"app-content\">\n    <div class=\"content-palette\">\n      <app-color-palette (resultChange)=\"resultChange($event)\" [(graph)]=\"graph\">\n      </app-color-palette>\n    </div>\n    <div class=\"content-main\">\n      <div class=\"main-graph\">\n        <app-color-graph [result]=\"result\" [(graph)]=\"graph\"></app-color-graph>\n      </div>\n      <div class=\"main-chart\">\n        <app-color-chart [result]=\"result\"></app-color-chart>\n      </div>\n    </div>\n    <div class=\"content-stack\">\n      <app-color-stack [result]=\"result\"></app-color-stack>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-wrapper {\n  min-width: 1000px; }\n  .app-wrapper .app-content {\n    display: flex;\n    height: calc(100vh - 60px);\n    background-color: #f8f8f8; }\n  .app-wrapper .app-content .content-palette {\n      flex-shrink: 0;\n      overflow: auto;\n      padding: 24px;\n      width: 24%;\n      min-width: 240px;\n      border-right: 1px solid #E9EBF1;\n      background-color: #fff; }\n  .app-wrapper .app-content .content-main {\n      flex-grow: 1;\n      margin: 20px 0 20px 20px;\n      width: 52%; }\n  .app-wrapper .app-content .content-main .main-graph {\n        margin-bottom: 20px;\n        height: calc((100vh - 60px - 60px) / 2);\n        box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);\n        border-radius: 2px;\n        background-color: #fff; }\n  .app-wrapper .app-content .content-main .main-chart {\n        height: calc((100vh - 60px - 60px) / 2);\n        box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);\n        border-radius: 2px;\n        background-color: #fff; }\n  .app-wrapper .app-content .content-stack {\n      flex-shrink: 0;\n      margin: 20px;\n      width: 24%;\n      min-width: 240px;\n      box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);\n      border-radius: 2px;\n      background-color: #fff; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQWlCLEVBQUE7RUFEbkI7SUFHSSxhQUFhO0lBQ2IsMEJBQW9DO0lBQ3BDLHlCQUF5QixFQUFBO0VBTDdCO01BT00sY0FBYztNQUNkLGNBQWM7TUFDZCxhQUFhO01BQ2IsVUFBVTtNQUNWLGdCQUFnQjtNQUNoQiwrQkFBK0I7TUFDL0Isc0JBQXNCLEVBQUE7RUFiNUI7TUFnQk0sWUFBWTtNQUNaLHdCQUF3QjtNQUN4QixVQUFVLEVBQUE7RUFsQmhCO1FBb0JRLG1CQUFtQjtRQUNuQix1Q0FBaUQ7UUFDakQsK0VBQWdGO1FBQ2hGLGtCQUFrQjtRQUNsQixzQkFBc0IsRUFBQTtFQXhCOUI7UUEyQlEsdUNBQWlEO1FBQ2pELCtFQUFnRjtRQUNoRixrQkFBa0I7UUFDbEIsc0JBQXNCLEVBQUE7RUE5QjlCO01Ba0NNLGNBQWM7TUFDZCxZQUFZO01BQ1osVUFBVTtNQUNWLGdCQUFnQjtNQUNoQiwrRUFBZ0Y7TUFDaEYsa0JBQWtCO01BQ2xCLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJHRvcC1oZWlnaHQ6IDYwcHg7XG4uYXBwLXdyYXBwZXIge1xuICBtaW4td2lkdGg6IDEwMDBweDtcbiAgLmFwcC1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtICN7JHRvcC1oZWlnaHR9KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgIC5jb250ZW50LXBhbGV0dGUge1xuICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICB3aWR0aDogMjQlO1xuICAgICAgbWluLXdpZHRoOiAyNDBweDtcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNFOUVCRjE7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAuY29udGVudC1tYWluIHtcbiAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIG1hcmdpbjogMjBweCAwIDIwcHggMjBweDtcbiAgICAgIHdpZHRoOiA1MiU7XG4gICAgICAubWFpbi1ncmFwaCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIGhlaWdodDogY2FsYygoMTAwdmggLSA2MHB4IC0gI3skdG9wLWhlaWdodH0pIC8gMik7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCAwIHJnYmEoMzEsIDMxLCAzMSwgMC4wNSksIDAgMCAycHggMCByZ2JhKDMxLCAzMSwgMzEsIDAuMjApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICAubWFpbi1jaGFydCB7XG4gICAgICAgIGhlaWdodDogY2FsYygoMTAwdmggLSA2MHB4IC0gI3skdG9wLWhlaWdodH0pIC8gMik7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCAwIHJnYmEoMzEsIDMxLCAzMSwgMC4wNSksIDAgMCAycHggMCByZ2JhKDMxLCAzMSwgMzEsIDAuMjApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgfVxuICAgIC5jb250ZW50LXN0YWNrIHtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgd2lkdGg6IDI0JTtcbiAgICAgIG1pbi13aWR0aDogMjQwcHg7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDMxLCAzMSwgMzEsIDAuMDUpLCAwIDAgMnB4IDAgcmdiYSgzMSwgMzEsIDMxLCAwLjIwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(modalService) {
        this.modalService = modalService;
        this.title = 'colorbox';
        this.result = [];
        this.graph = 'hue';
    }
    AppComponent.prototype.resultChange = function (data) {
        if (data && Array.isArray(data)) {
            this.result = data.slice();
        }
    };
    AppComponent.prototype.headerReset = function () {
        window.location.reload();
    };
    AppComponent.prototype.headerShare = function () {
        var colorList = this.result.map(function (d) { return d.hex; });
        this.modalService.info({
            nzTitle: 'Hex JSON',
            nzContent: colorList.toString()
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzModalService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _modules_ng_echarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/ng-echarts */ "./src/app/modules/ng-echarts/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_color_chart_color_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./layout/color-chart/color-chart.component */ "./src/app/layout/color-chart/color-chart.component.ts");
/* harmony import */ var _layout_color_graph_color_graph_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./layout/color-graph/color-graph.component */ "./src/app/layout/color-graph/color-graph.component.ts");
/* harmony import */ var _layout_color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/color-palette/color-palette.component */ "./src/app/layout/color-palette/color-palette.component.ts");
/* harmony import */ var _layout_color_stack_color_stack_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layout/color-stack/color-stack.component */ "./src/app/layout/color-stack/color-stack.component.ts");
/* harmony import */ var _layout_header_app_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/header/app-header.component */ "./src/app/layout/header/app-header.component.ts");

















Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_8___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"],
                _layout_color_chart_color_chart_component__WEBPACK_IMPORTED_MODULE_12__["ColorChartComponent"],
                _layout_color_graph_color_graph_component__WEBPACK_IMPORTED_MODULE_13__["ColorGraphComponent"],
                _layout_color_palette_color_palette_component__WEBPACK_IMPORTED_MODULE_14__["ColorPaletteComponent"],
                _layout_color_stack_color_stack_component__WEBPACK_IMPORTED_MODULE_15__["ColorStackComponent"],
                _layout_header_app_header_component__WEBPACK_IMPORTED_MODULE_16__["AppHeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NgZorroAntdModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _modules_ng_echarts__WEBPACK_IMPORTED_MODULE_10__["NgEchartsModule"]
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/layout/color-chart/color-chart.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/color-chart/color-chart.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-color-chart\">\n  <div class=\"chart-header clearfloat\">\n    <div class=\"float-left\">图表测试</div>\n    <div class=\"float-right\">\n      <nz-radio-group nzSize=\"small\" [(ngModel)]=\"radioValue\"\n        (ngModelChange)=\"radioChange($event)\">\n        <label nz-radio-button *ngFor=\"let data of radioData\"\n          [nzValue]=\"data.value\">{{data.label}}</label>\n      </nz-radio-group>\n    </div>\n  </div>\n  <div class=\"chart-content\">\n    <ng-echarts-line *ngIf=\"radioValue === 'line'\" height=\"100%\"\n      [status]=\"lineData.status\" [data]=\"lineData.list\"\n      (optionsInit)=\"lineData.optionsInit($event)\"></ng-echarts-line>\n    <ng-echarts-bar *ngIf=\"radioValue === 'bar'\" height=\"100%\"\n      [status]=\"barData.status\" [data]=\"barData.list\"\n      (optionsInit)=\"barData.optionsInit($event)\"></ng-echarts-bar>\n    <ng-echarts-pie *ngIf=\"radioValue === 'pie'\" height=\"100%\"\n      [status]=\"pieData.status\" [dataConfig]=\"pieData.config\"\n      [data]=\"pieData.list\" (optionsInit)=\"pieData.optionsInit($event)\">\n    </ng-echarts-pie>\n    <ng-echarts-treemap *ngIf=\"radioValue === 'treemap'\" height=\"100%\"\n      [status]=\"treemapData.status\" [dataConfig]=\"treemapData.config\"\n      [data]=\"treemapData.list\" (optionsInit)=\"treemapData.optionsInit($event)\">\n    </ng-echarts-treemap>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/color-chart/color-chart.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/color-chart/color-chart.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-color-chart {\n  position: relative;\n  padding: 16px 20px;\n  width: 100%;\n  height: 100%; }\n  .app-color-chart .chart-header {\n    margin-bottom: 10px;\n    font-size: 14px;\n    color: #333333; }\n  .app-color-chart .chart-content {\n    width: 100%;\n    height: calc(100% - 34px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvbGF5b3V0L2NvbG9yLWNoYXJ0L2NvbG9yLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWSxFQUFBO0VBSmQ7SUFNSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGNBQWMsRUFBQTtFQVJsQjtJQVdJLFdBQVc7SUFDWCx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb2xvci1jaGFydC9jb2xvci1jaGFydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29sb3ItY2hhcnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLmNoYXJ0LWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gIH1cbiAgLmNoYXJ0LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMzRweCk7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/color-chart/color-chart.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/color-chart/color-chart.component.ts ***!
  \*************************************************************/
/*! exports provided: ColorChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorChartComponent", function() { return ColorChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _macok_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./macok-data */ "./src/app/layout/color-chart/macok-data.ts");




var ColorChartComponent = /** @class */ (function () {
    function ColorChartComponent() {
        var _this = this;
        this.radioValue = 'bar';
        this.radioData = [
            { label: '折线图', value: 'line' },
            { label: '柱状图', value: 'bar' },
            { label: '饼图', value: 'pie' },
            { label: '矩形树图', value: 'treemap' }
        ];
        this.today = new Date();
        this.colorList = [];
        // 折线图
        this.lineData = {
            list: [],
            status: null,
            optionsInit: function (options) {
                options.color = _this.colorList;
            }
        };
        // 柱状图
        this.barData = {
            list: [],
            status: null,
            optionsInit: function (options) {
                options.color = _this.colorList;
            }
        };
        // 饼图
        this.pieData = {
            list: [],
            status: null,
            config: {
                name: '颜色分布'
            },
            optionsInit: function (options) {
                options.color = _this.colorList;
            }
        };
        // 矩形树图
        this.treemapData = {
            list: _macok_data__WEBPACK_IMPORTED_MODULE_3__["DeviceBrandData"].children,
            status: null,
            config: {
                tooltipFormatter: function (params) {
                    return "\u624B\u673A\u54C1\u724C\uFF1A" + params.name + "<br />\n          \u5360\u6BD4\uFF1A" + params.value.toFixed(2) + "%";
                }
            },
            optionsInit: function (options) {
                options.series[0].levels[0].color = _this.colorList;
            }
        };
    }
    Object.defineProperty(ColorChartComponent.prototype, "result", {
        set: function (data) {
            if (data) {
                var list_1 = [];
                data.forEach(function (d) {
                    list_1.push(d.hex);
                });
                this.colorList = list_1;
                this.radioChange(this.radioValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    ColorChartComponent.prototype.ngOnInit = function () {
        this.radioChange(this.radioValue);
    };
    ColorChartComponent.prototype.radioChange = function (type) {
        switch (type) {
            case 'line':
                this.changeLineData();
                break;
            case 'bar':
                this.changeBarData();
                break;
            case 'pie':
                this.changePieData();
                break;
            case 'treemap':
                this.changeTreemapData();
                break;
            default:
                break;
        }
    };
    ColorChartComponent.prototype.changeLineData = function () {
        var list = [];
        var max = 6;
        var count = this.colorList.length;
        for (var i = 0; i < count; i++) {
            var children = [];
            for (var ii = 0; ii < max; ii++) {
                children.push({
                    key: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(this.today, ii), 'YYYY-MM-DD'),
                    value: (ii + i + Math.random()).toFixed(2)
                });
            }
            list.push({
                name: '颜色' + (i + 1),
                children: children
            });
        }
        this.lineData.list = list;
    };
    ColorChartComponent.prototype.changeBarData = function () {
        var list = [];
        var max = 1;
        var count = this.colorList.length;
        for (var i = 0; i < count; i++) {
            var children = [];
            for (var ii = 0; ii < max; ii++) {
                children.push({
                    key: Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["subDays"])(this.today, ii), 'YYYY-MM-DD'),
                    value: (ii + i + Math.random()).toFixed(2)
                });
            }
            list.push({
                name: '颜色' + (i + 1),
                children: children
            });
        }
        this.barData.list = list;
    };
    ColorChartComponent.prototype.changePieData = function () {
        var count = this.colorList.length;
        var list = [];
        for (var i = 0; i < count; i++) {
            list.push({
                key: '颜色' + i + 1,
                value: Math.random()
            });
        }
        this.pieData.list = list;
    };
    ColorChartComponent.prototype.changeTreemapData = function () {
        this.treemapData.list = _macok_data__WEBPACK_IMPORTED_MODULE_3__["DeviceBrandData"].children.slice();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], ColorChartComponent.prototype, "result", null);
    ColorChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-chart',
            template: __webpack_require__(/*! ./color-chart.component.html */ "./src/app/layout/color-chart/color-chart.component.html"),
            styles: [__webpack_require__(/*! ./color-chart.component.scss */ "./src/app/layout/color-chart/color-chart.component.scss")]
        })
    ], ColorChartComponent);
    return ColorChartComponent;
}());



/***/ }),

/***/ "./src/app/layout/color-chart/macok-data.ts":
/*!**************************************************!*\
  !*** ./src/app/layout/color-chart/macok-data.ts ***!
  \**************************************************/
/*! exports provided: DeviceBrandData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceBrandData", function() { return DeviceBrandData; });
var DeviceBrandData = {
    children: [
        {
            name: "OPPO",
            value: 22.50134,
            children: [
                { name: "OPPO F3 Plus", value: 2.9045768e-6 },
                { name: "OPPO U705T", value: 2.9045768e-6 },
                { name: "OPPO R815", value: 2.9045768e-6 },
                { name: "OPPO R2001", value: 5.8091537e-6 },
                { name: "OPPO R803", value: 5.8091537e-6 },
                { name: "OPPO Find 3", value: 8.7137305e-6 },
                { name: "OPPO 3000", value: 1.1618307e-5 },
                { name: "OPPO Find", value: 1.4522884e-5 },
                { name: "OPPO N1T", value: 1.4522884e-5 },
                { name: "OPPO T29", value: 1.7427461e-5 },
                { name: "OPPO R1011", value: 2.6141191e-5 },
                { name: "OPPO R831", value: 3.1950345e-5 },
                { name: "OPPO R807", value: 4.647323e-5 },
                { name: "OPPO R3", value: 5.2282383e-5 },
                { name: "OPPO R815W", value: 5.2282383e-5 },
                { name: "OPPO U701T", value: 5.8091537e-5 },
                { name: "OPPO R831K", value: 6.680527e-5 },
                { name: "OPPO R1001", value: 7.5519e-5 },
                { name: "OPPO R805", value: 7.8423574e-5 },
                { name: "OPPO U701", value: 8.7137305e-5 },
                { name: "OPPO  X909", value: 9.875561e-5 },
                { name: "OPPO R820", value: 1.0166019e-4 },
                { name: "OPPO R813T", value: 1.4232426e-4 },
                { name: "OPPO R801", value: 1.4232426e-4 },
                { name: "OPPO R1C", value: 1.626563e-4 },
                { name: "OPPO N1 mini", value: 1.626563e-4 },
                { name: "OPPO R811", value: 1.7137003e-4 },
                { name: "OPPO R817", value: 1.7717919e-4 },
                { name: "OPPO R1S", value: 1.887975e-4 },
                { name: "OPPO  R9st", value: 2.7303022e-4 },
                { name: "OPPO R809T", value: 3.22408e-4 },
                { name: "OPPO X907", value: 3.4854922e-4 },
                { name: "OPPO  Ulike2", value: 3.5145378e-4 },
                { name: "OPPO  R7s", value: 3.6888124e-4 },
                { name: "OPPO N1W", value: 3.9502245e-4 },
                { name: "OPPO N5111", value: 4.995872e-4 },
                { name: "OPPO 1201", value: 8.626593e-4 },
                { name: "OPPO R830", value: 8.684684e-4 },
                { name: "OPPO R833T", value: 0.0010659797 },
                { name: "OPPO R815T", value: 0.0010950255 },
                { name: "OPPO R821T", value: 0.0012605863 },
                { name: "OPPO 1100", value: 0.0013912923 },
                { name: "OPPO Find 7", value: 0.00151038 },
                { name: "OPPO R823T", value: 0.0015888035 },
                { name: "OPPO R831T", value: 0.0017746964 },
                { name: "OPPO R819T", value: 0.0019954443 },
                { name: "OPPO U707T", value: 0.0021639096 },
                { name: "OPPO A39", value: 0.0023149478 },
                { name: "OPPO R2010", value: 0.0025356954 },
                { name: "OPPO R827", value: 0.0025821687 },
                { name: "OPPO A37FW", value: 0.0031543705 },
                { name: "OPPO 3005", value: 0.0035581065 },
                { name: "OPPO R5", value: 0.004748983 },
                { name: "OPPO Find 5", value: 0.0055216006 },
                { name: "OPPO  N1", value: 0.0071133086 },
                { name: "OPPO 1105", value: 0.0072294916 },
                { name: "OPPO R831S", value: 0.009030329 },
                { name: "OPPO 1107", value: 0.018900082 },
                { name: "OPPO 3007", value: 0.019187635 },
                { name: "OPPO A30", value: 0.02034656 },
                { name: "OPPO R6007", value: 0.021104654 },
                { name: "OPPO R2017", value: 0.024328735 },
                { name: "OPPO  U3", value: 0.02921133 },
                { name: "OPPO  R1S", value: 0.032940805 },
                { name: "OPPO  R5", value: 0.040327143 },
                { name: "OPPO  N1 Mini", value: 0.04037652 },
                { name: "OPPO A11", value: 0.041764908 },
                { name: "OPPO  N3", value: 0.045099363 },
                { name: "OPPO  Find 7", value: 0.05046702 },
                { name: "OPPO  R3", value: 0.06099611 },
                { name: "OPPO A51", value: 0.063130975 },
                { name: "OPPO  R7", value: 0.07713975 },
                { name: "OPPO  A31", value: 0.12586112 },
                { name: "OPPO R7 Plus高配版", value: 0.15928118 },
                { name: "OPPO A83", value: 0.1724302 },
                { name: "OPPO  R1C", value: 0.17263933 },
                { name: "OPPO A73", value: 0.19232364 },
                { name: "OPPO R11s Plus", value: 0.2628032 },
                { name: "OPPO A31", value: 0.27163893 },
                { name: "OPPO A53", value: 0.36944184 },
                { name: "OPPO R7 Plus", value: 0.45212352 },
                { name: "OPPO R11 Plus", value: 0.5070607 },
                { name: "OPPO A59", value: 0.8899594 },
                { name: "OPPO R7s", value: 0.9349949 },
                { name: "OPPO R9s Plus", value: 0.9891478 },
                { name: "OPPO R9 Plus", value: 1.1481066 },
                { name: "OPPO A33", value: 1.3164297 },
                { name: "OPPO R11s", value: 1.3410431 },
                { name: "OPPO A37", value: 1.5139525 },
                { name: "OPPO A59s", value: 1.9864545 },
                { name: "OPPO R11", value: 2.3694928 },
                { name: "OPPO A57", value: 2.8986425 },
                { name: "OPPO R9s", value: 3.7742562 }
            ]
        },
        {
            name: "华为",
            value: 22.420704,
            children: [
                { name: "华为 G520", value: 2.9045768e-6 },
                { name: "华为 Raven", value: 2.9045768e-6 },
                { name: "华为 Y220-T10", value: 2.9045768e-6 },
                { name: "华为 Ascend G735", value: 2.9045768e-6 },
                { name: "华为 C8500", value: 2.9045768e-6 },
                { name: "华为 T8620", value: 2.9045768e-6 },
                { name: "华为 Y536A1", value: 2.9045768e-6 },
                { name: "华为 Honor+", value: 2.9045768e-6 },
                { name: "华为 G535", value: 2.9045768e-6 },
                { name: "华为 Vitria", value: 2.9045768e-6 },
                { name: "华为 Mate 10 保时捷版", value: 2.9045768e-6 },
                { name: "华为 C8500S", value: 2.9045768e-6 },
                { name: "华为 U8800", value: 2.9045768e-6 },
                { name: "华为 U9510", value: 2.9045768e-6 },
                { name: "华为 G620", value: 2.9045768e-6 },
                { name: "华为 S8600 Spark", value: 2.9045768e-6 },
                { name: "华为 T8828", value: 2.9045768e-6 },
                { name: "华为 Mediapad 7 Lite", value: 5.8091537e-6 },
                { name: "华为 U9510E", value: 5.8091537e-6 },
                { name: "华为 T8830", value: 5.8091537e-6 },
                { name: "华为 Y310-T10", value: 8.7137305e-6 },
                { name: "华为 Ascend Y511", value: 8.7137305e-6 },
                { name: "华为 Y325", value: 8.7137305e-6 },
                { name: "华为 HI3798CV100", value: 8.7137305e-6 },
                { name: "华为 3X", value: 1.1618307e-5 },
                { name: "华为 G306T", value: 1.1618307e-5 },
                { name: "华为 Hi3798M", value: 1.4522884e-5 },
                { name: "华为 Y360", value: 1.4522884e-5 },
                { name: "华为 H300", value: 1.7427461e-5 },
                { name: "华为 Y310-5000", value: 1.7427461e-5 },
                { name: "华为 G309T", value: 1.7427461e-5 },
                { name: "华为 G700", value: 2.0332038e-5 },
                { name: "华为 C8650", value: 2.3236615e-5 },
                { name: "华为 荣耀U8860", value: 2.3236615e-5 },
                { name: "华为 U8825D", value: 2.3236615e-5 },
                { name: "华为 Y550", value: 2.6141191e-5 },
                { name: "华为 G610T", value: 2.6141191e-5 },
                { name: "华为 Honor", value: 2.6141191e-5 },
                { name: "华为 Ascend G330C", value: 2.6141191e-5 },
                { name: "华为 U8818", value: 2.6141191e-5 },
                { name: "华为 Ascend D1", value: 2.6141191e-5 },
                { name: "华为 Y520", value: 3.1950345e-5 },
                { name: "华为 Y500", value: 3.4854922e-5 },
                { name: "华为 荣耀Note8", value: 3.4854922e-5 },
                { name: "华为 Y210-2010", value: 3.4854922e-5 },
                { name: "华为 Ascend Y221", value: 3.4854922e-5 },
                { name: "华为 S8-303L", value: 4.647323e-5 },
                { name: "华为 C8812", value: 4.647323e-5 },
                { name: "华为 G615-U10", value: 4.647323e-5 },
                { name: "华为 G750", value: 4.9377806e-5 },
                { name: "华为 C8812+", value: 4.9377806e-5 },
                { name: "华为 Ascend P1", value: 5.2282383e-5 },
                { name: "华为 G606", value: 5.2282383e-5 },
                { name: "华为 MediaPad 7 Youth", value: 5.8091537e-5 },
                { name: "华为 畅玩7X", value: 5.8091537e-5 },
                { name: "华为 荣耀V8", value: 6.390069e-5 },
                { name: "华为 G730-U30", value: 6.390069e-5 },
                { name: "华为 MediaPad T1", value: 8.132815e-5 },
                { name: "华为 G9青春版", value: 8.7137305e-5 },
                { name: "华为 Y336", value: 9.004188e-5 },
                { name: "华为 MediaPad 7 Youth 2", value: 9.004188e-5 },
                { name: "华为 G610S", value: 9.5851035e-5 },
                { name: "华为 G718", value: 1.0166019e-4 },
                { name: "华为 nova", value: 1.132785e-4 },
                { name: "华为 Y610-U00", value: 1.132785e-4 },
                { name: "华为 MediaPad 7 Vogue", value: 1.1618307e-4 },
                { name: "华为 G525", value: 1.248968e-4 },
                { name: "华为 MediaPad T1 Pro", value: 1.3070596e-4 },
                { name: "华为 G520-0000", value: 1.4232426e-4 },
                { name: "华为 G play mini", value: 1.4813342e-4 },
                { name: "华为 Y600D", value: 1.51038e-4 },
                { name: "华为 Y618-T00", value: 1.5394257e-4 },
                { name: "华为 G520-T10", value: 1.5684715e-4 },
                { name: "华为 Y523-L076", value: 1.5975173e-4 },
                { name: "华为 Y320", value: 1.6846546e-4 },
                { name: "华为 Y600", value: 1.9170207e-4 },
                { name: "华为 C8813D", value: 1.9170207e-4 },
                { name: "华为 Y321-C00", value: 1.9460665e-4 },
                { name: "华为 MediaPad 10 Link", value: 1.9751122e-4 },
                { name: "华为 Y535D", value: 2.004158e-4 },
                { name: "华为 MediaPad 10 FHD", value: 2.004158e-4 },
                { name: "华为 G620-L72", value: 2.0332038e-4 },
                { name: "华为 GR5", value: 2.0332038e-4 },
                { name: "华为 Y300", value: 2.0622496e-4 },
                { name: "华为 Y5 II", value: 2.1493869e-4 },
                { name: "华为 C8813DQ", value: 2.1784326e-4 },
                { name: "华为 G520-5000", value: 2.2074784e-4 },
                { name: "华为 Y625", value: 2.26557e-4 },
                { name: "华为 荣耀畅玩5", value: 2.3527072e-4 },
                { name: "华为 荣耀+", value: 2.4107988e-4 },
                { name: "华为 3X Pro", value: 2.4688902e-4 },
                { name: "华为 Y516", value: 2.5850732e-4 },
                { name: "华为 Y6", value: 2.6141191e-4 },
                { name: "华为 GR5Mini", value: 2.6722107e-4 },
                { name: "华为 MediaPad T1 7.0", value: 2.7593478e-4 },
                { name: "华为 G510", value: 2.9626684e-4 },
                { name: "华为 G630", value: 3.0498055e-4 },
                { name: "华为 Y511-U00", value: 3.0788514e-4 },
                { name: "华为 Y330", value: 3.4564463e-4 },
                { name: "华为 G716", value: 3.5435837e-4 },
                { name: "华为 Y518-T00", value: 3.6016753e-4 },
                { name: "华为 Y3 II", value: 3.6888124e-4 },
                { name: "华为 Y523-L176", value: 3.863087e-4 },
                { name: "华为 MediaPad M1", value: 4.2116363e-4 },
                { name: "华为 荣耀3C畅玩版", value: 4.5601855e-4 },
                { name: "华为 Ascend D2", value: 5.5767875e-4 },
                { name: "华为 Y541", value: 5.983428e-4 },
                { name: "华为 Y7 Prime", value: 6.24484e-4 },
                { name: "华为 G521", value: 6.273886e-4 },
                { name: "华为 G616-L076", value: 6.5643433e-4 },
                { name: "华为 G730-C00", value: 7.1743043e-4 },
                { name: "华为 荣耀3", value: 7.6390366e-4 },
                { name: "华为 U9508", value: 7.726174e-4 },
                { name: "华为 C8817L", value: 8.9460966e-4 },
                { name: "华为 MediaPad 10 Link+", value: 9.846515e-4 },
                { name: "华为 Y511-T00", value: 0.001193781 },
                { name: "华为 C8813", value: 0.0013883876 },
                { name: "华为 GR5 2017版", value: 0.0014726204 },
                { name: "华为 Ascend P6s", value: 0.0015394257 },
                { name: "华为 Mate", value: 0.0015597577 },
                { name: "华为 G660-L075", value: 0.001777601 },
                { name: "华为 Ascend G6", value: 0.0018415017 },
                { name: "华为 Ascend G700", value: 0.0019780167 },
                { name: "华为 C8815", value: 0.002044822 },
                { name: "华为 C8816D", value: 0.002326566 },
                { name: "华为 Ascend P2", value: 0.0026780197 },
                { name: "华为 C8816", value: 0.003520347 },
                { name: "华为 Ascend GX1", value: 0.0038311367 },
                { name: "华为 X1", value: 0.0039676516 },
                { name: "华为 荣耀3X Pro", value: 0.0040315525 },
                { name: "华为 G730", value: 0.0041767815 },
                { name: "华为 荣耀3X", value: 0.004624086 },
                { name: "华为 G629", value: 0.004638609 },
                { name: "华为 G620-L75", value: 0.004839025 },
                { name: "华为 Nexus 6P", value: 0.004900021 },
                { name: "华为 荣耀平板", value: 0.0060211876 },
                { name: "华为 G610", value: 0.0062477444 },
                { name: "华为 Y560", value: 0.007307915 },
                { name: "华为 G628", value: 0.007987586 },
                { name: "华为 Y635", value: 0.008251903 },
                { name: "华为 荣耀X1", value: 0.008641115 },
                { name: "华为 C8817", value: 0.008658543 },
                { name: "华为 荣耀7i", value: 0.0086846845 },
                { name: "华为 荣耀平板T1-821", value: 0.009974317 },
                { name: "华为 3C畅玩版", value: 0.010203778 },
                { name: "华为 荣耀畅玩平板T1", value: 0.010656892 },
                { name: "华为 Ascend P6", value: 0.010932826 },
                { name: "华为 荣耀平板3", value: 0.011383036 },
                { name: "华为 麦芒2", value: 0.012103371 },
                { name: "华为 Mate 2", value: 0.013509187 },
                { name: "华为 荣耀平板T1-823L", value: 0.01489467 },
                { name: "华为 MediaPad M2", value: 0.016660653 },
                { name: "华为 Mate 7 青春版", value: 0.017723728 },
                { name: "华为 荣耀3C", value: 0.01797933 },
                { name: "华为 荣耀畅玩平板note", value: 0.020189714 },
                { name: "华为 荣耀7", value: 0.023323752 },
                { name: "华为 麦芒3S", value: 0.023617113 },
                { name: "华为 Magic", value: 0.02450301 },
                { name: "华为 C8818", value: 0.024619192 },
                { name: "华为 揽阅M2青春版 10.1", value: 0.027889745 },
                { name: "华为 3C", value: 0.028395142 },
                { name: "华为 荣耀畅玩4", value: 0.028752405 },
                { name: "华为 荣耀V9", value: 0.029376889 },
                { name: "华为 荣耀3X畅玩版", value: 0.031386856 },
                { name: "华为 荣耀畅玩5C", value: 0.033391014 },
                { name: "华为 麦芒3", value: 0.034709692 },
                { name: "华为 畅享7S", value: 0.037439995 },
                { name: "华为 荣耀平板2", value: 0.037948295 },
                { name: "华为 畅玩4", value: 0.03885162 },
                { name: "华为 揽阅M2 8.0", value: 0.039142076 },
                { name: "华为 荣耀6 Plus", value: 0.042613044 },
                { name: "华为 荣耀畅玩6A", value: 0.043080684 },
                { name: "华为 G7 Plus", value: 0.044785667 },
                { name: "华为 荣耀4A", value: 0.054292347 },
                { name: "华为 P8max", value: 0.055895675 },
                { name: "华为 揽阅M2青春版 7.0", value: 0.06444384 },
                { name: "华为 G9 Plus", value: 0.06585837 },
                { name: "华为 荣耀9青春版", value: 0.06669489 },
                { name: "华为 Nova青春版", value: 0.07055798 },
                { name: "华为 P8 Lite", value: 0.07265799 },
                { name: "华为 M3", value: 0.080061756 },
                { name: "华为 畅享7 Plus(3GB)", value: 0.081816114 },
                { name: "华为 畅享7(2GB)", value: 0.086933985 },
                { name: "华为 Mate S", value: 0.09163359 },
                { name: "华为 荣耀畅玩4X", value: 0.092519484 },
                { name: "华为 荣耀畅玩4C", value: 0.09336762 },
                { name: "华为 荣耀畅玩5X", value: 0.09495062 },
                { name: "华为 Ascend P7", value: 0.0950697 },
                { name: "华为 Ascend G7", value: 0.09697801 },
                { name: "华为 荣耀8青春版", value: 0.101712465 },
                { name: "华为 荣耀 V9 Play", value: 0.10537805 },
                { name: "华为 荣耀6", value: 0.108366854 },
                { name: "华为 P8青春版", value: 0.113412105 },
                { name: "华为 荣耀畅玩6", value: 0.11375194 },
                { name: "华为 畅享7 Plus(4GB)", value: 0.117199674 },
                { name: "华为 Note8", value: 0.119961925 },
                { name: "华为 畅玩6A", value: 0.15134297 },
                { name: "华为 荣耀畅玩5A", value: 0.16999036 },
                { name: "华为 7i", value: 0.1709692 },
                { name: "华为 畅享6", value: 0.17489037 },
                { name: "华为 麦芒6", value: 0.1751634 },
                { name: "华为 6", value: 0.18031031 },
                { name: "华为 G9 青春版", value: 0.22545905 },
                { name: "华为 4A", value: 0.22743417 },
                { name: "华为 nova 2", value: 0.23740268 },
                { name: "华为 畅享7", value: 0.24877119 },
                { name: "华为 6 Plus", value: 0.24900356 },
                { name: "华为 畅玩5C", value: 0.2648945 },
                { name: "华为 Ascend P8", value: 0.26652688 },
                { name: "华为 畅玩4C", value: 0.27566177 },
                { name: "华为 畅玩5A", value: 0.2777908 },
                { name: "华为 P9 Plus", value: 0.28140992 },
                { name: "华为 畅玩4X", value: 0.28561285 },
                { name: "华为 畅享5", value: 0.2900191 },
                { name: "华为 8", value: 0.29565105 },
                { name: "华为 荣耀 9 标配版", value: 0.29680997 },
                { name: "华为 畅玩5", value: 0.30673492 },
                { name: "华为 Mate 9 Pro", value: 0.30707186 },
                { name: "华为 畅享6S", value: 0.31562874 },
                { name: "华为 荣耀V10", value: 0.3187831 },
                { name: "华为 Mate 10 Pro", value: 0.32057232 },
                { name: "华为 Mate 7", value: 0.32443833 },
                { name: "华为 nova 2s", value: 0.3401608 },
                { name: "华为 麦芒4", value: 0.3470359 },
                { name: "华为 7", value: 0.35333014 },
                { name: "华为 nova青春版", value: 0.35923514 },
                { name: "华为 Mate 10", value: 0.40912998 },
                { name: "华为 荣耀畅玩7X", value: 0.416252 },
                { name: "华为 畅玩5X", value: 0.4220234 },
                { name: "华为 nova 2 Plus", value: 0.4317973 },
                { name: "华为 畅玩6X", value: 0.49848637 },
                { name: "华为 P10 Plus", value: 0.5005922 },
                { name: "华为 Nova", value: 0.5067615 },
                { name: "华为 畅享7 Plus", value: 0.5078769 },
                { name: "华为 荣耀 9 高配版", value: 0.5129686 },
                { name: "华为 畅享5S", value: 0.56898624 },
                { name: "华为 V9", value: 0.5800294 },
                { name: "华为 荣耀8", value: 0.59901667 },
                { name: "华为 麦芒5", value: 0.66043395 },
                { name: "华为 荣耀畅玩6X", value: 0.7035843 },
                { name: "华为 8青春版", value: 0.92191267 },
                { name: "华为 Mate 8", value: 0.9285961 },
                { name: "华为 P9", value: 1.0234596 },
                { name: "华为 Mate 9", value: 1.2483174 }
            ]
        },
        {
            name: "VIVO",
            value: 19.308348,
            children: [
                { name: "VIVO X1ST", value: 2.9045768e-6 },
                { name: "VIVO  Xplay3S", value: 2.9045768e-6 },
                { name: "VIVO S9T", value: 2.9045768e-6 },
                { name: "VIVO  Y51A", value: 2.9045768e-6 },
                { name: "VIVO S6T", value: 5.8091537e-6 },
                { name: "VIVO S7I", value: 5.8091537e-6 },
                { name: "VIVO Y13L", value: 8.7137305e-6 },
                { name: "VIVO  Xshot", value: 8.7137305e-6 },
                { name: "VIVO Y17", value: 4.647323e-5 },
                { name: "VIVO S3+", value: 1.3070596e-4 },
                { name: "VIVO V1Max", value: 1.4813342e-4 },
                { name: "VIVO Y3T", value: 1.8589292e-4 },
                { name: "VIVO S12", value: 1.9170207e-4 },
                { name: "VIVO  Xplay5", value: 2.4107988e-4 },
                { name: "VIVO Y28", value: 2.991714e-4 },
                { name: "VIVO S11T", value: 3.4274007e-4 },
                { name: "VIVO X5F", value: 6.157703e-4 },
                { name: "VIVO Y19", value: 6.3029316e-4 },
                { name: "VIVO Y55s", value: 6.593389e-4 },
                { name: "VIVO Y628", value: 9.846515e-4 },
                { name: "VIVO Y622", value: 0.0011676399 },
                { name: "VIVO V5Plus", value: 0.0015481394 },
                { name: "VIVO Y19T", value: 0.0016788454 },
                { name: "VIVO Y17W", value: 0.00302076 },
                { name: "VIVO V5s", value: 0.00302076 },
                { name: "VIVO X1S", value: 0.0037846635 },
                { name: "VIVO Y15", value: 0.004458525 },
                { name: "VIVO Y627", value: 0.0044643343 },
                { name: "VIVO Y613", value: 0.0056319744 },
                { name: "VIVO Y623", value: 0.0073950524 },
                { name: "VIVO Xplay5 旗舰版", value: 0.008179288 },
                { name: "VIVO Y928", value: 0.008289662 },
                { name: "VIVO Y20T", value: 0.00984361 },
                { name: "VIVO X3F", value: 0.009994648 },
                { name: "VIVO X3S", value: 0.010334484 },
                { name: "VIVO Y11", value: 0.010938636 },
                { name: "VIVO Y18L", value: 0.012231173 },
                { name: "VIVO Y913", value: 0.013910018 },
                { name: "VIVO Y17T", value: 0.014156907 },
                { name: "VIVO Y22", value: 0.014859815 },
                { name: "VIVO X3T", value: 0.01650671 },
                { name: "VIVO Y21", value: 0.018444063 },
                { name: "VIVO Y927", value: 0.022208394 },
                { name: "VIVO Xplay", value: 0.022481425 },
                { name: "VIVO X3V", value: 0.02357064 },
                { name: "VIVO Y937", value: 0.0247499 },
                { name: "VIVO Y28L", value: 0.027337877 },
                { name: "VIVO S9", value: 0.029774817 },
                { name: "VIVO Y923", value: 0.03140719 },
                { name: "VIVO X5Max", value: 0.046014305 },
                { name: "VIVO Xplay3S", value: 0.04915125 },
                { name: "VIVO Y29L", value: 0.049639218 },
                { name: "VIVO Xshot", value: 0.05394961 },
                { name: "VIVO X5L", value: 0.06072308 },
                { name: "VIVO X5V", value: 0.06248035 },
                { name: "VIVO S7", value: 0.063505664 },
                { name: "VIVO X3L", value: 0.068370834 },
                { name: "VIVO Y33", value: 0.07151939 },
                { name: "VIVO Y13", value: 0.0722862 },
                { name: "VIVO X5SL", value: 0.106583446 },
                { name: "VIVO X5Max+", value: 0.11908184 },
                { name: "VIVO Y27", value: 0.1206445 },
                { name: "VIVO Y23L", value: 0.14564128 },
                { name: "VIVO Y37", value: 0.15894134 },
                { name: "VIVO X5M", value: 0.1762323 },
                { name: "VIVO Y53", value: 0.23324622 },
                { name: "VIVO Y66i", value: 0.23333918 },
                { name: "VIVO X5Pro", value: 0.23362091 },
                { name: "VIVO Y79", value: 0.26450527 },
                { name: "VIVO Y75", value: 0.2693966 },
                { name: "VIVO X6s Plus", value: 0.28109622 },
                { name: "VIVO Y35", value: 0.30511418 },
                { name: "VIVO X9s L", value: 0.30966565 },
                { name: "VIVO X20 plus", value: 0.3296375 },
                { name: "VIVO Xplay5", value: 0.3594036 },
                { name: "VIVO Xplay6", value: 0.37841406 },
                { name: "VIVO Y31", value: 0.4514206 },
                { name: "VIVO X6 Plus", value: 0.47466302 },
                { name: "VIVO X6s", value: 0.5729045 },
                { name: "VIVO X9s Plus", value: 0.6273044 },
                { name: "VIVO V3 Max", value: 0.72102344 },
                { name: "VIVO X9s", value: 0.81561095 },
                { name: "VIVO Y55", value: 1.0430306 },
                { name: "VIVO X7 Plus", value: 1.0868026 },
                { name: "VIVO Y51", value: 1.5145392 },
                { name: "VIVO X20", value: 2.3030362 },
                { name: "VIVO Y67", value: 2.3391225 },
                { name: "VIVO Y66", value: 2.3667798 }
            ]
        },
        {
            name: "小米",
            value: 11.400298,
            children: [
                { name: "小米 MI pad", value: 2.9045768e-6 },
                { name: "小米 小米电视3", value: 8.7137305e-6 },
                { name: "小米 红米Note4", value: 1.1618307e-5 },
                { name: "小米 电视2S", value: 1.4522884e-5 },
                { name: "小米 MIBOX2", value: 1.7427461e-5 },
                { name: "小米 小米电视3S", value: 2.6141191e-5 },
                { name: "小米 小米盒子3S", value: 2.9045768e-5 },
                { name: "小米 红米2 Pro", value: 4.647323e-5 },
                { name: "小米 小米电视2", value: 5.518696e-5 },
                { name: "小米 Note", value: 5.8091537e-5 },
                { name: "小米 MI 1", value: 6.390069e-5 },
                { name: "小米 小米电视4A", value: 6.680527e-5 },
                { name: "小米 X3 Pro", value: 7.5519e-5 },
                { name: "小米 MI One C1", value: 1.6846546e-4 },
                { name: "小米 MI One Plus", value: 5.722016e-4 },
                { name: "小米 4", value: 6.8548013e-4 },
                { name: "小米 S", value: 7.7552197e-4 },
                { name: "小米 MI 2C", value: 0.0011327849 },
                { name: "小米 MI 1S", value: 0.0013680557 },
                { name: "小米 4S", value: 0.0019809213 },
                { name: "小米 MI 2A", value: 0.005928241 },
                { name: "小米 米王M2", value: 0.007563518 },
                { name: "小米 MI 2", value: 0.010046931 },
                { name: "小米 MI pad 2", value: 0.01176644 },
                { name: "小米 小米平板3", value: 0.012826611 },
                { name: "小米 红米", value: 0.014932429 },
                { name: "小米 青春版", value: 0.030422537 },
                { name: "小米 小米平板", value: 0.03527899 },
                { name: "小米 MI 2S", value: 0.04813174 },
                { name: "小米 MI 4S", value: 0.048227593 },
                { name: "小米 红米5", value: 0.0633982 },
                { name: "小米 note顶配版", value: 0.071289934 },
                { name: "小米 红米3X", value: 0.0728526 },
                { name: "小米 MI 5C", value: 0.07407542 },
                { name: "小米 MIX", value: 0.09168587 },
                { name: "小米 红米Pro", value: 0.09881951 },
                { name: "小米 MI 3", value: 0.101209976 },
                { name: "小米 红米5A", value: 0.10504112 },
                { name: "小米 Note 2", value: 0.11452165 },
                { name: "小米 红米1S", value: 0.14506328 },
                { name: "小米 红米2A", value: 0.1548604 },
                { name: "小米 5", value: 0.16871524 },
                { name: "小米 小米4C", value: 0.17315924 },
                { name: "小米 红米4", value: 0.18092318 },
                { name: "小米 红米3", value: 0.19215228 },
                { name: "小米 红米2", value: 0.21942624 },
                { name: "小米 小米note", value: 0.22196776 },
                { name: "小米 MI 5s Plus", value: 0.25522515 },
                { name: "小米 红米3S", value: 0.2714937 },
                { name: "小米 红米Note2", value: 0.27525803 },
                { name: "小米 红米NOTE 5A", value: 0.2869112 },
                { name: "小米 MI 5s", value: 0.28922614 },
                { name: "小米 MIX 2", value: 0.3124453 },
                { name: "小米 Max", value: 0.31894284 },
                { name: "小米 红米5 Plus", value: 0.34878448 },
                { name: "小米 Max 2", value: 0.35338244 },
                { name: "小米 MI 4", value: 0.35346955 },
                { name: "小米 红米4A", value: 0.38350868 },
                { name: "小米 红米Note", value: 0.38733113 },
                { name: "小米 Note 3", value: 0.39661995 },
                { name: "小米 红米 4X", value: 0.41418394 },
                { name: "小米 红米Note 4", value: 0.5349562 },
                { name: "小米 MI 5", value: 0.61488146 },
                { name: "小米 5X", value: 0.6151255 },
                { name: "小米 红米Note3", value: 0.6544011 },
                { name: "小米 MI 6", value: 0.9252152 },
                { name: "小米 红米Note 4X", value: 0.92748946 }
            ]
        },
        {
            name: "三星",
            value: 4.1268926,
            children: [
                { name: "三星 S5820", value: 2.9045768e-6 },
                { name: "三星 GT-S6310", value: 2.9045768e-6 },
                { name: "三星 GT-S6102", value: 2.9045768e-6 },
                { name: "三星 GALAXY S6 Edge", value: 2.9045768e-6 },
                { name: "三星 B5330", value: 2.9045768e-6 },
                { name: "三星 GALAXY Round", value: 2.9045768e-6 },
                { name: "三星 GALAXY Grand DUOS", value: 2.9045768e-6 },
                { name: "三星 Galaxy Trend Lite", value: 2.9045768e-6 },
                { name: "三星 Galaxy C5", value: 2.9045768e-6 },
                { name: "三星 Galaxy Light", value: 2.9045768e-6 },
                { name: "三星 S5300", value: 2.9045768e-6 },
                { name: "三星 Infuse 4G", value: 2.9045768e-6 },
                { name: "三星 GALAXY C5 Pro", value: 2.9045768e-6 },
                { name: "三星 Galaxy Star S5282", value: 2.9045768e-6 },
                { name: "三星 Galaxy Ace 2x", value: 2.9045768e-6 },
                { name: "三星 GALAXY Grand 2", value: 2.9045768e-6 },
                { name: "三星 S7508", value: 2.9045768e-6 },
                { name: "三星 领世旗舰Ⅲ", value: 2.9045768e-6 },
                { name: "三星 Galaxy Gio", value: 2.9045768e-6 },
                { name: "三星 Galaxy Pocket 2", value: 2.9045768e-6 },
                { name: "三星 Galaxy Xcover", value: 2.9045768e-6 },
                { name: "三星 GALAXY A7", value: 2.9045768e-6 },
                { name: "三星 Galaxy Pocket Neo", value: 2.9045768e-6 },
                { name: "三星 2016版GALAXY J7", value: 2.9045768e-6 },
                { name: "三星 Galaxy Ace DUOS", value: 2.9045768e-6 },
                { name: "三星 Galaxy Y Pop", value: 2.9045768e-6 },
                { name: "三星 Galaxy Star 2", value: 5.8091537e-6 },
                { name: "三星 GALAXY SII", value: 5.8091537e-6 },
                { name: "三星 GALAXY S8+", value: 5.8091537e-6 },
                { name: "三星 Galaxy Mini", value: 5.8091537e-6 },
                { name: "三星 Galaxy Tab S T807A", value: 5.8091537e-6 },
                { name: "三星 G130H", value: 5.8091537e-6 },
                { name: "三星 GALAXY S6 Edge+", value: 5.8091537e-6 },
                { name: "三星 Galaxy Ace 4 Lite Duos", value: 5.8091537e-6 },
                { name: "三星 2016版GALAXY On5", value: 5.8091537e-6 },
                { name: "三星 I8250", value: 5.8091537e-6 },
                { name: "三星 Galaxy Core", value: 5.8091537e-6 },
                { name: "三星 Galaxy C7", value: 5.8091537e-6 },
                { name: "三星 GALAXY Mega Plus", value: 5.8091537e-6 },
                { name: "三星 Celox", value: 5.8091537e-6 },
                { name: "三星 S6790", value: 5.8091537e-6 },
                { name: "三星 2016版GALAXY A7", value: 8.7137305e-6 },
                { name: "三星 Galaxy Tab S 8.4", value: 8.7137305e-6 },
                { name: "三星 Galaxy V Plus", value: 8.7137305e-6 },
                { name: "三星 2016版GALAXY A9", value: 8.7137305e-6 },
                { name: "三星 GALAXY CORE Prime", value: 8.7137305e-6 },
                { name: "三星 Galaxy S4 mini", value: 8.7137305e-6 },
                { name: "三星 Galaxy S L", value: 1.1618307e-5 },
                { name: "三星 G350E", value: 1.1618307e-5 },
                { name: "三星 GALAXY On7", value: 1.1618307e-5 },
                { name: "三星 Galaxy Core 2 DUOS", value: 1.1618307e-5 },
                { name: "三星 Galaxy Y", value: 1.1618307e-5 },
                { name: "三星 S6500D", value: 1.1618307e-5 },
                { name: "三星 Galaxy Tab 2 10.2", value: 1.4522884e-5 },
                { name: "三星 GALAXY Core Lite", value: 1.4522884e-5 },
                { name: "三星 Galaxy Xcover 3", value: 1.4522884e-5 },
                { name: "三星 GALAXY Core Max", value: 1.4522884e-5 },
                { name: "三星 Galaxy Mega", value: 1.4522884e-5 },
                { name: "三星 GALAXY S5", value: 1.4522884e-5 },
                { name: "三星 Galaxy View", value: 1.4522884e-5 },
                { name: "三星 GALAXY A5", value: 1.7427461e-5 },
                { name: "三星 Galaxy Tab 4 7.0", value: 1.7427461e-5 },
                { name: "三星 GALAXY Note II", value: 1.7427461e-5 },
                { name: "三星 GALAXY Note", value: 1.7427461e-5 },
                { name: "三星 Galaxy S DUOS", value: 1.7427461e-5 },
                { name: "三星 Galaxy Tab 3 Kids", value: 2.0332038e-5 },
                { name: "三星 Galaxy Note Pro", value: 2.0332038e-5 },
                { name: "三星 Galaxy S2 LTE升级版", value: 2.0332038e-5 },
                { name: "三星 T959", value: 2.0332038e-5 },
                { name: "三星 Galaxy S5 DUOS", value: 2.3236615e-5 },
                { name: "三星 Galaxy Beam", value: 2.6141191e-5 },
                { name: "三星 Galaxy Tab 2 7.0 WIFI", value: 2.9045768e-5 },
                { name: "三星 Galaxy Tab P7300", value: 2.9045768e-5 },
                { name: "三星 Galaxy Tab 2 P5113", value: 2.9045768e-5 },
                { name: "三星 GALAXY S4", value: 3.1950345e-5 },
                { name: "三星 Galaxy S Plus", value: 3.4854922e-5 },
                { name: "三星 Galaxy Tab N8013", value: 3.4854922e-5 },
                { name: "三星 Galaxy Camera", value: 3.77595e-5 },
                { name: "三星 Galaxy Ace Plus", value: 3.77595e-5 },
                { name: "三星 GT-S7580", value: 3.77595e-5 },
                { name: "三星 Galaxy Star Pro", value: 3.77595e-5 },
                { name: "三星 Galaxy S Advance", value: 4.0664076e-5 },
                { name: "三星 Galaxy Express", value: 4.0664076e-5 },
                { name: "三星 Galaxy Tab S T800", value: 4.0664076e-5 },
                { name: "三星 Galaxy Tab P1000", value: 4.0664076e-5 },
                { name: "三星 I8258", value: 4.3568652e-5 },
                { name: "三星 Galaxy S2 Epic 4G Touch", value: 4.647323e-5 },
                { name: "三星 B9062", value: 4.647323e-5 },
                { name: "三星 S7566", value: 4.647323e-5 },
                { name: "三星 Galaxy S DUOS 2", value: 4.647323e-5 },
                { name: "三星 Galaxy Ace Duos", value: 4.9377806e-5 },
                { name: "三星 2016版 Galaxy A8", value: 4.9377806e-5 },
                { name: "三星 W899", value: 5.2282383e-5 },
                { name: "三星 Galaxy S", value: 5.2282383e-5 },
                { name: "三星 Galaxy Tab Active", value: 5.2282383e-5 },
                { name: "三星 I9050", value: 5.518696e-5 },
                { name: "三星 Galaxy Round", value: 5.8091537e-5 },
                { name: "三星 A510", value: 6.0996113e-5 },
                { name: "三星 Galaxy Tab P7500", value: 6.0996113e-5 },
                { name: "三星 Galaxy Ace Style", value: 6.0996113e-5 },
                { name: "三星 Galaxy Pop", value: 6.0996113e-5 },
                { name: "三星 Galaxy R", value: 6.390069e-5 },
                { name: "三星 SM-G318HZ", value: 6.680527e-5 },
                { name: "三星 Galaxy Ace", value: 6.9709844e-5 },
                { name: "三星 Galaxy S5 Active", value: 7.261442e-5 },
                { name: "三星 T950S", value: 7.261442e-5 },
                { name: "三星 GT-P5220", value: 7.261442e-5 },
                { name: "三星 T561", value: 7.261442e-5 },
                { name: "三星 Galaxy Express 2", value: 7.261442e-5 },
                { name: "三星 Galaxy Avant", value: 7.261442e-5 },
                { name: "三星 GALAXY J1", value: 7.5519e-5 },
                { name: "三星 Galaxy Tab", value: 7.5519e-5 },
                { name: "三星 I779", value: 7.5519e-5 },
                { name: "三星 Galaxy Folder", value: 8.132815e-5 },
                { name: "三星 GalaxyJ3Prime", value: 8.7137305e-5 },
                { name: "三星 GALAXY SIII", value: 8.7137305e-5 },
                { name: "三星 Galaxy S Duos", value: 8.7137305e-5 },
                { name: "三星 Galaxy Tab 7.0 Plus", value: 9.004188e-5 },
                { name: "三星 Galaxy Tab P7510", value: 9.294646e-5 },
                { name: "三星 Galaxy S2 HD LTE E120S", value: 9.5851035e-5 },
                { name: "三星 Galaxy S DUOS 3", value: 9.875561e-5 },
                { name: "三星 Galaxy Tab P6800", value: 1.0166019e-4 },
                { name: "三星 Galaxy K Zoom 2", value: 1.0166019e-4 },
                { name: "三星 BEAM2", value: 1.0166019e-4 },
                { name: "三星 SM-T375L", value: 1.04564766e-4 },
                { name: "三星 大器2", value: 1.1037392e-4 },
                { name: "三星 Galaxy Ace 2", value: 1.1908765e-4 },
                { name: "三星 T315", value: 1.2199223e-4 },
                { name: "三星 Galaxy J Max", value: 1.3070596e-4 },
                { name: "三星 Galaxy Ace Dear", value: 1.3651511e-4 },
                { name: "三星 Galaxy Infinite", value: 1.3651511e-4 },
                { name: "三星 Galaxy Tab P3110", value: 1.3651511e-4 },
                { name: "三星 R850", value: 1.3941969e-4 },
                { name: "三星 Galaxy S6 Active", value: 1.4522884e-4 },
                { name: "三星 SM-T375S", value: 1.4813342e-4 },
                { name: "三星 Galaxy Tab S T805", value: 1.5394257e-4 },
                { name: "三星 Galaxy S5 Neo", value: 1.5394257e-4 },
                { name: "三星 A200", value: 1.626563e-4 },
                { name: "三星 Galaxy W", value: 1.6846546e-4 },
                { name: "三星 Galaxy Tab 3 Lite T113", value: 1.7137003e-4 },
                { name: "三星 Galaxy Tab 5", value: 1.7137003e-4 },
                { name: "三星 GALAXY S7 Edge", value: 1.7427461e-4 },
                { name: "三星 Galaxy Tab 4 10.1", value: 2.004158e-4 },
                { name: "三星 Galaxy Core Advance", value: 2.1493869e-4 },
                { name: "三星 Galaxy Tab 4 7.0 LTE", value: 2.1784326e-4 },
                { name: "三星 GALAXY Note 4", value: 2.2074784e-4 },
                { name: "三星 Galaxy S4 Active", value: 2.3236615e-4 },
                { name: "三星 Galaxy A9", value: 2.381753e-4 },
                { name: "三星 Galaxy Nexus", value: 2.4107988e-4 },
                { name: "三星 SM-T325", value: 2.4398445e-4 },
                { name: "三星 GALAXY Note 3", value: 2.4688902e-4 },
                { name: "三星 Galaxy Note 12.2", value: 2.497936e-4 },
                { name: "三星 Galaxy S7 Active", value: 2.5560276e-4 },
                { name: "三星 Galaxy J1 Ace", value: 2.6141191e-4 },
                { name: "三星 Galaxy J1 Mini", value: 2.9045768e-4 },
                { name: "三星 Galaxy Tab 4 8.0", value: 2.9626684e-4 },
                { name: "三星 Galaxy J1 Mini Prime", value: 2.9626684e-4 },
                { name: "三星 Galaxy Fame", value: 3.02076e-4 },
                { name: "三星 GALAXY S4 Zoom", value: 3.0788514e-4 },
                { name: "三星 Galaxy S5 mini", value: 3.0788514e-4 },
                { name: "三星 SM-T2558", value: 3.136943e-4 },
                { name: "三星 Galaxy S3 Mini", value: 3.136943e-4 },
                { name: "三星 B9388", value: 3.1950345e-4 },
                { name: "三星 Galaxy Tab 2 P5100", value: 3.2821717e-4 },
                { name: "三星 Galaxy Grand 2 LTE", value: 3.3402632e-4 },
                { name: "三星 GalaxyJ7Max", value: 3.3983547e-4 },
                { name: "三星 2016版Galaxy Grand Prime", value: 3.3983547e-4 },
                { name: "三星 Galaxy Tab 4 T230", value: 3.4274007e-4 },
                { name: "三星 2017版 Galaxy A3", value: 3.5145378e-4 },
                { name: "三星 Galaxy Tab 2 P5110", value: 3.5145378e-4 },
                { name: "三星 W999", value: 3.5726294e-4 },
                { name: "三星 Galaxy Tab A 7.0", value: 3.630721e-4 },
                { name: "三星 Galaxy S4 Mini", value: 3.6888124e-4 },
                { name: "三星 Galaxy Tab 3 Lite T110", value: 3.892133e-4 },
                { name: "三星 Galaxy Trend", value: 3.9211786e-4 },
                { name: "三星 GALAXY A3", value: 3.97927e-4 },
                { name: "三星 Galaxy S2 Plus", value: 3.97927e-4 },
                { name: "三星 Galaxy E5", value: 4.1825906e-4 },
                { name: "三星 W789", value: 4.2987737e-4 },
                { name: "三星 Galaxy S4 Zoom", value: 4.5892314e-4 },
                { name: "三星 Galaxy S3 Neo", value: 4.7054145e-4 },
                { name: "三星 Galaxy Ace 4", value: 4.7925516e-4 },
                { name: "三星 Galaxy Note Pro 12.2", value: 4.7925516e-4 },
                { name: "三星 SM-T2556", value: 4.9668265e-4 },
                { name: "三星 GALAXY A8", value: 5.4606044e-4 },
                { name: "三星 Galaxy Tab 4 T531", value: 5.5477413e-4 },
                { name: "三星 Galaxy Tab Q", value: 5.605833e-4 },
                { name: "三星 S7898", value: 5.9543824e-4 },
                { name: "三星 D888", value: 6.0124736e-4 },
                { name: "三星 大器3", value: 6.099611e-4 },
                { name: "三星 Galaxy Tab 2 P3100", value: 6.215794e-4 },
                { name: "三星 Galaxy Tab 4 Lite", value: 6.24484e-4 },
                { name: "三星 Galaxy Tab Pro", value: 6.273886e-4 },
                { name: "三星 Galaxy Tab 3 Lite T111", value: 6.44816e-4 },
                { name: "三星 I8268", value: 6.738618e-4 },
                { name: "三星 GALAXY Mega 6.3", value: 6.825755e-4 },
                { name: "三星 Galaxy J", value: 7.2033505e-4 },
                { name: "三星 Galaxy Trend Duos 2", value: 7.726174e-4 },
                { name: "三星 Galaxy Note 3 Neo", value: 7.7552197e-4 },
                { name: "三星 Galaxy J7 Nxt", value: 7.900449e-4 },
                { name: "三星 GALAXY Note 7", value: 8.016632e-4 },
                { name: "三星 S7568", value: 8.4813643e-4 },
                { name: "三星 I9118", value: 8.8008674e-4 },
                { name: "三星 Galaxy K Zoom", value: 9.1494166e-4 },
                { name: "三星 Galaxy S5 Plus", value: 9.2075084e-4 },
                { name: "三星 Galaxy J1", value: 9.352737e-4 },
                { name: "三星 Galaxy Trend Duos", value: 9.788424e-4 },
                { name: "三星 Galaxy Note 10.1 N8010", value: 9.817469e-4 },
                { name: "三星 领世旗舰8", value: 0.0010195065 },
                { name: "三星 2018版 GALAXY A8+", value: 0.0010456477 },
                { name: "三星 Galaxy Premier", value: 0.0010485522 },
                { name: "三星 Galaxy Tab E", value: 0.0010485522 },
                { name: "三星 2018版 GALAXY A8", value: 0.0010659797 },
                { name: "三星 GALAXY J5", value: 0.0011182621 },
                { name: "三星 Galaxy Tab Pro T321", value: 0.0011269758 },
                { name: "三星 Galaxy Tab 4", value: 0.0011269758 },
                { name: "三星 Galaxy Wide", value: 0.0011444032 },
                { name: "三星 G3819D", value: 0.0011473078 },
                { name: "三星 Galaxy J1 Ace Neo", value: 0.0011676399 },
                { name: "三星 GALAXY Note 5", value: 0.0011879719 },
                { name: "三星 Galaxy Trend 2", value: 0.0012024947 },
                { name: "三星 Galaxy C7 Pro", value: 0.001208304 },
                { name: "三星 Galaxy J3", value: 0.001228636 },
                { name: "三星 Galaxy Style DUOS", value: 0.0012373497 },
                { name: "三星 Galaxy Golden", value: 0.0012431588 },
                { name: "三星 Galaxy Core 4G", value: 0.0012925366 },
                { name: "三星 GALAXY S7", value: 0.0013302962 },
                { name: "三星 Galaxy Tab 4 T231", value: 0.0013506282 },
                { name: "三星 Galaxy Core 2", value: 0.0014058151 },
                { name: "三星 W2013", value: 0.0014522884 },
                { name: "三星 Galaxy Tab A 10.1", value: 0.0016294676 },
                { name: "三星 Galaxy Tab 3 7.0", value: 0.0016294676 },
                { name: "三星 G3818", value: 0.001646895 },
                { name: "三星 Galaxy S2", value: 0.0016788454 },
                { name: "三星 Galaxy Note", value: 0.0016846545 },
                { name: "三星 Galaxy Note 7", value: 0.0017282232 },
                { name: "三星 2016版 Galaxy A9 高配版", value: 0.0017456507 },
                { name: "三星 Galaxy Tab Pro T320", value: 0.0018705474 },
                { name: "三星 Galaxy Tab AL", value: 0.0019518756 },
                { name: "三星 Galaxy Ace 3", value: 0.0019547802 },
                { name: "三星 Galaxy Tab 4 T530", value: 0.00202449 },
                { name: "三星 Galaxy J2", value: 0.0022074783 },
                { name: "三星 Galaxy Core Mini", value: 0.0023585162 },
                { name: "三星 Galaxy C9 Pro", value: 0.0023962758 },
                { name: "三星 领世旗舰3", value: 0.0024107988 },
                { name: "三星 Galaxy Win Pro", value: 0.0024892222 },
                {
                    name: "三星 Galaxy Note 10.1 2014 Edition P600",
                    value: 0.0025821687
                },
                { name: "三星 Galaxy Tab 4 T331C", value: 0.0026170237 },
                { name: "三星 Galaxy J7", value: 0.0026170237 },
                { name: "三星 2016版Galaxy On7", value: 0.0026809243 },
                { name: "三星 Galaxy Tab 3 10.1", value: 0.002724493 },
                { name: "三星 Galaxy Grand", value: 0.0029074813 },
                { name: "三星 2017版 Galaxy A7", value: 0.0029626682 },
                { name: "三星 Galaxy Tab S T805C", value: 0.0033605953 },
                { name: "三星 Galaxy Alpha", value: 0.003540679 },
                { name: "三星 GALAXY S6", value: 0.003561011 },
                { name: "三星 Galaxy Trend 3", value: 0.0036946216 },
                { name: "三星 Galaxy Win", value: 0.0043655788 },
                { name: "三星 Galaxy J7 Pro", value: 0.004385911 },
                { name: "三星 Galaxy Tab S T705C", value: 0.004394625 },
                { name: "三星 Galaxy Tab A 9.7", value: 0.0046269908 },
                { name: "三星 Galaxy Grand Neo Plus", value: 0.0047576968 },
                { name: "三星 Galaxy Core Prime", value: 0.0048651663 },
                { name: "三星 Galaxy Core Lite", value: 0.00497554 },
                { name: "三星 Galaxy Folder 2", value: 0.005016204 },
                { name: "三星 Galaxy Tab A 8.0", value: 0.0051091504 },
                { name: "三星 2017版 Galaxy J3", value: 0.005524505 },
                { name: "三星 Galaxy Grand DUOS", value: 0.0055274097 },
                { name: "三星 W2018", value: 0.0055564553 },
                { name: "三星 Galaxy Tab S", value: 0.005855627 },
                { name: "三星 2017版 Galaxy A5", value: 0.005913718 },
                { name: "三星 Galaxy Tab 3 8.0", value: 0.006549821 },
                { name: "三星 Galaxy Note 10.1", value: 0.006628244 },
                { name: "三星 Galaxy Mega 6.3", value: 0.006671813 },
                {
                    name: "三星 Galaxy Note 10.1 2014 Edition P601",
                    value: 0.0067763776
                },
                { name: "三星 2017版GALAXY J3", value: 0.006819946 },
                { name: "三星 Galaxy Note Edge", value: 0.007061026 },
                { name: "三星 Galaxy Note 8.0", value: 0.007177209 },
                { name: "三星 W2014", value: 0.008382608 },
                { name: "三星 Galaxy Note 8", value: 0.009242363 },
                { name: "三星 Galaxy S3 Neo+", value: 0.010058549 },
                { name: "三星 Galaxy A3", value: 0.010447763 },
                { name: "三星 Galaxy Tab S2", value: 0.0114382235 },
                { name: "三星 Galaxy Core Max", value: 0.013029931 },
                { name: "三星 W2015", value: 0.013093832 },
                { name: "三星 Galaxy Mega Plus", value: 0.013294248 },
                { name: "三星 W2017", value: 0.013567278 },
                { name: "三星 Galaxy S3", value: 0.013869354 },
                { name: "三星 Galaxy J7 Prime", value: 0.014278899 },
                { name: "三星 Galaxy Mega 5.8", value: 0.014804628 },
                { name: "三星 W2016", value: 0.017517501 },
                { name: "三星 Galaxy E7", value: 0.017784724 },
                { name: "三星 GALAXY C8", value: 0.018275596 },
                { name: "三星 Galaxy Note 3 Lite", value: 0.01970465 },
                { name: "三星 GALAXY J3", value: 0.022963583 },
                { name: "三星 Galaxy Mega 2", value: 0.023010056 },
                { name: "三星 Galaxy Grand Max", value: 0.02388143 },
                { name: "三星 Galaxy C5 Pro", value: 0.025034547 },
                { name: "三星 2016版 Galaxy J5", value: 0.025127493 },
                { name: "三星 2016版GALAXY On7", value: 0.027520865 },
                { name: "三星 2016版 Galaxy A5", value: 0.027799703 },
                { name: "三星 2016版 Galaxy J7", value: 0.028467758 },
                { name: "三星 Galaxy S8", value: 0.032194328 },
                { name: "三星 GALAXY A9", value: 0.033004705 },
                { name: "三星 Galaxy On5", value: 0.03411135 },
                { name: "三星 Galaxy On7", value: 0.034718405 },
                { name: "三星 Galaxy Grand Prime", value: 0.03814 },
                { name: "三星 GALAXY C7 Pro", value: 0.0382678 },
                { name: "三星 Galaxy Grand 2", value: 0.041430883 },
                { name: "三星 2016版Galaxy On5", value: 0.041515116 },
                { name: "三星 Galaxy J3 Pro", value: 0.049200624 },
                { name: "三星 Galaxy J5", value: 0.049891915 },
                { name: "三星 2016版 Galaxy A7", value: 0.0540077 },
                { name: "三星 GALAXY J7", value: 0.059044234 },
                { name: "三星 2016版 Galaxy A9", value: 0.0656812 },
                { name: "三星 Galaxy A8", value: 0.06903598 },
                { name: "三星 Galaxy S4", value: 0.069291584 },
                { name: "三星 Galaxy Note 5", value: 0.07990781 },
                { name: "三星 Galaxy S7", value: 0.082399935 },
                { name: "三星 Galaxy Note 2", value: 0.08458999 },
                { name: "三星 Galaxy A5", value: 0.090692505 },
                { name: "三星 Galaxy Note 4", value: 0.09426513 },
                { name: "三星 Galaxy S5", value: 0.102063924 },
                { name: "三星 GALAXY Note 8", value: 0.10441954 },
                { name: "三星 Galaxy A7", value: 0.119534954 },
                { name: "三星 GALAXY C9 Pro", value: 0.120327905 },
                { name: "三星 Galaxy S6", value: 0.12535281 },
                { name: "三星 GALAXY C5", value: 0.14427033 },
                { name: "三星 Galaxy S6 Edge", value: 0.14493838 },
                { name: "三星 GALAXY C7", value: 0.15803511 },
                { name: "三星 Galaxy S6 Edge+", value: 0.16165422 },
                { name: "三星 GALAXY S8", value: 0.20096186 },
                { name: "三星 Galaxy Note 3", value: 0.2637675 },
                { name: "三星 Galaxy S8 Plus", value: 0.26499325 },
                { name: "三星 Galaxy S7 Edge", value: 0.40522912 }
            ]
        },
        {
            name: "魅族",
            value: 3.0714214,
            children: [
                { name: "魅族 魅蓝E2", value: 8.7137305e-6 },
                { name: "魅族 PRO5", value: 3.1950345e-5 },
                { name: "魅族 魅蓝A5", value: 1.3361053e-4 },
                { name: "魅族 MX", value: 4.1825906e-4 },
                { name: "魅族 MX2", value: 0.0019983489 },
                { name: "魅族 魅蓝3", value: 0.0049929675 },
                { name: "魅族 魅蓝S", value: 0.0073050107 },
                { name: "魅族 MX7", value: 0.007377625 },
                { name: "魅族 MX3", value: 0.0138083575 },
                { name: "魅族 魅蓝5", value: 0.015966458 },
                { name: "魅族 魅蓝U10", value: 0.019974774 },
                { name: "魅族 魅蓝6", value: 0.02238267 },
                { name: "魅族 Pro7 Plus", value: 0.024171887 },
                { name: "魅族 魅蓝", value: 0.03294371 },
                { name: "魅族 MX4 Pro", value: 0.034654506 },
                { name: "魅族 魅蓝U20", value: 0.036565717 },
                { name: "魅族 魅蓝X", value: 0.03981594 },
                { name: "魅族 魅蓝Max", value: 0.041166566 },
                { name: "魅族 MX4", value: 0.044698533 },
                { name: "魅族 Pro6 Plus", value: 0.046647504 },
                { name: "魅族 M8", value: 0.046952482 },
                { name: "魅族 Pro6s", value: 0.059442163 },
                { name: "魅族 魅蓝Note5", value: 0.059599012 },
                { name: "魅族 PRO 5", value: 0.06020026 },
                { name: "魅族 Pro7", value: 0.06493181 },
                { name: "魅族 魅蓝Note", value: 0.07618995 },
                { name: "魅族 Pro6", value: 0.08441862 },
                { name: "魅族 魅蓝2", value: 0.10714403 },
                { name: "魅族 魅蓝5s", value: 0.135818 },
                { name: "魅族 魅蓝3S", value: 0.14094168 },
                { name: "魅族 MX5", value: 0.14348029 },
                { name: "魅族 魅蓝metal", value: 0.18336593 },
                { name: "魅族 魅蓝E", value: 0.1911502 },
                { name: "魅族 魅蓝Note 2", value: 0.22683874 },
                { name: "魅族 魅蓝Note6", value: 0.24489067 },
                { name: "魅族 魅蓝Note3", value: 0.31826898 },
                { name: "魅族 魅蓝Note 5", value: 0.5327255 }
            ]
        },
        {
            name: "金立",
            value: 2.4516835,
            children: [
                { name: "金立 GN136T", value: 2.9045768e-6 },
                { name: "金立 GN777", value: 2.9045768e-6 },
                { name: "金立 GN160", value: 2.9045768e-6 },
                { name: "金立 GN138", value: 2.9045768e-6 },
                { name: "金立 GN330", value: 2.9045768e-6 },
                { name: "金立 GN168t", value: 2.9045768e-6 },
                { name: "金立 C605", value: 2.9045768e-6 },
                { name: "金立 GN100", value: 5.8091537e-6 },
                { name: "金立 C620", value: 5.8091537e-6 },
                { name: "金立 GN206", value: 1.4522884e-5 },
                { name: "金立 GN600", value: 1.4522884e-5 },
                { name: "金立 GN868", value: 1.7427461e-5 },
                { name: "金立 C610", value: 1.7427461e-5 },
                { name: "金立 GN305", value: 2.6141191e-5 },
                { name: "金立 GN135", value: 2.9045768e-5 },
                { name: "金立 GN128", value: 2.9045768e-5 },
                { name: "金立 GN700T", value: 4.0664076e-5 },
                { name: "金立 GN878", value: 4.0664076e-5 },
                { name: "金立 P5 Mini", value: 4.3568652e-5 },
                { name: "金立 GN705", value: 5.2282383e-5 },
                { name: "金立 M5 Lite", value: 5.518696e-5 },
                { name: "金立 F103Pro", value: 6.680527e-5 },
                { name: "金立 GN700W", value: 7.261442e-5 },
                { name: "金立 GN139", value: 8.423273e-5 },
                { name: "金立 GN180", value: 9.004188e-5 },
                { name: "金立 S11S", value: 1.04564766e-4 },
                { name: "金立 GN708W", value: 1.248968e-4 },
                { name: "金立 P5W", value: 1.5394257e-4 },
                { name: "金立 W601", value: 1.6846546e-4 },
                { name: "金立 GN800", value: 1.8298834e-4 },
                { name: "金立 GN150", value: 1.887975e-4 },
                { name: "金立 GN810", value: 2.0912953e-4 },
                { name: "金立 E7 Mini", value: 2.1784326e-4 },
                { name: "金立 GN706L", value: 2.26557e-4 },
                { name: "金立 风华3", value: 2.26557e-4 },
                { name: "金立 GN708T", value: 2.4107988e-4 },
                { name: "金立 E5", value: 2.5269817e-4 },
                { name: "金立 GN137", value: 3.630721e-4 },
                { name: "金立 E3T", value: 4.2116363e-4 },
                { name: "金立 E6 Mini", value: 4.4149568e-4 },
                { name: "金立 X817", value: 4.879689e-4 },
                { name: "金立 E3", value: 5.3444214e-4 },
                { name: "金立 X805", value: 6.1286567e-4 },
                { name: "金立 V182", value: 7.1743043e-4 },
                { name: "金立 V4S", value: 8.016632e-4 },
                { name: "金立 GN715", value: 9.527012e-4 },
                { name: "金立 P4S", value: 0.0011211666 },
                { name: "金立 E7T", value: 0.0011763535 },
                { name: "金立 E7", value: 0.0011995902 },
                { name: "金立 V185", value: 0.0020680586 },
                { name: "金立 P7", value: 0.0020941999 },
                { name: "金立 S5.5", value: 0.0027070655 },
                { name: "金立 V188", value: 0.0033112175 },
                { name: "金立 金钢3", value: 0.0033257403 },
                { name: "金立 S5.1", value: 0.0038805145 },
                { name: "金立 天鉴W900", value: 0.003993793 },
                { name: "金立 S5.5L", value: 0.0041128807 },
                { name: "金立 F109", value: 0.004885498 },
                { name: "金立 F301", value: 0.005783012 },
                { name: "金立 E8", value: 0.0061257523 },
                { name: "金立 F103L", value: 0.006352309 },
                { name: "金立 GN151", value: 0.008283853 },
                { name: "金立 F303", value: 0.009004188 },
                { name: "金立 F109L", value: 0.0095153935 },
                { name: "金立 S5.1Pro", value: 0.010221206 },
                { name: "金立 天鉴W900s", value: 0.010741125 },
                { name: "金立 F103S", value: 0.011136147 },
                { name: "金立 GN152", value: 0.01139175 },
                { name: "金立 V188S", value: 0.011473078 },
                { name: "金立 M6s Plus", value: 0.015644051 },
                { name: "金立 M2017", value: 0.01574571 },
                { name: "金立 V183", value: 0.015946126 },
                { name: "金立 F306", value: 0.04800975 },
                { name: "金立 天鉴W909", value: 0.049511414 },
                { name: "金立 S10B", value: 0.05506787 },
                { name: "金立 F105", value: 0.057249207 },
                { name: "金立 大金钢2", value: 0.06433056 },
                { name: "金立 S6 Pro", value: 0.064493224 },
                { name: "金立 F106", value: 0.06567248 },
                { name: "金立 大金钢", value: 0.09826183 },
                { name: "金立 F103", value: 0.10725731 },
                { name: "金立 S10C", value: 0.11270339 },
                { name: "金立 M5 Plus", value: 0.11623535 },
                { name: "金立 F103B", value: 0.14068317 },
                { name: "金立 M6 Plus", value: 0.14445622 },
                { name: "金立 金刚2", value: 0.18470785 },
                { name: "金立 S10", value: 0.22553748 },
                { name: "金立 F100", value: 0.25132722 },
                { name: "金立 金钢", value: 0.47658294 }
            ]
        },
        {
            name: "长虹",
            value: 2.3864903,
            children: [
                { name: "长虹 C660", value: 2.9045768e-6 },
                { name: "长虹 C900", value: 2.9045768e-6 },
                { name: "长虹 P01", value: 2.9045768e-6 },
                { name: "长虹 Z8T", value: 2.9045768e-6 },
                { name: "长虹 C888", value: 5.8091537e-6 },
                { name: "长虹 A9800", value: 8.7137305e-6 },
                { name: "长虹 C808", value: 2.0332038e-5 },
                { name: "长虹 A898", value: 2.3236615e-5 },
                { name: "长虹 T619", value: 3.4854922e-5 },
                { name: "长虹 W5", value: 9.004188e-5 },
                { name: "长虹 H1", value: 1.0166019e-4 },
                { name: "长虹 A100", value: 2.2946157e-4 },
                { name: "长虹 C02", value: 4.763506e-4 },
                { name: "长虹 T02", value: 6.9709844e-4 },
                { name: "长虹 T03", value: 9.6722407e-4 },
                { name: "长虹 S03", value: 0.0010834071 },
                { name: "长虹 T07", value: 0.0012634909 },
                { name: "长虹 C03", value: 0.0014319563 },
                { name: "长虹 S08", value: 0.0019838258 },
                { name: "长虹 Z9", value: 0.0020332038 },
                { name: "长虹 S09", value: 0.0023904666 },
                { name: "长虹 S06", value: 0.003087565 },
                { name: "长虹 V1", value: 0.004952303 },
                { name: "长虹 W7", value: 0.0072759646 },
                { name: "长虹 Z1", value: 0.011406273 },
                { name: "长虹 Z11", value: 0.026852813 },
                { name: "长虹 X9 Plus", value: 0.5128117 },
                { name: "长虹 X9", value: 1.8072509 }
            ]
        },
        {
            name: "米蓝",
            value: 1.928485,
            children: [
                { name: "米蓝 L1尊享版", value: 8.7137305e-6 },
                { name: "米蓝 M3 mini", value: 4.0664076e-5 },
                { name: "米蓝 R9", value: 1.9284357 }
            ]
        },
        {
            name: "乐视",
            value: 1.6251369,
            children: [
                { name: "乐视 S40 Pro", value: 2.9045768e-6 },
                { name: "乐视 C1s", value: 2.9045768e-6 },
                { name: "乐视 NEW C1S", value: 2.9045768e-6 },
                { name: "乐视 S50 Pro", value: 2.9045768e-6 },
                { name: "乐视 U4", value: 8.7137305e-6 },
                { name: "乐视 X3-40S", value: 8.7137305e-6 },
                { name: "乐视 超3 Max 65", value: 1.4522884e-5 },
                { name: "乐视 X3-50", value: 1.7427461e-5 },
                { name: "乐视 MAX4-70", value: 2.0332038e-5 },
                { name: "乐视 X50 AIR", value: 2.6141191e-5 },
                { name: "乐视 X3-40", value: 2.9045768e-5 },
                { name: "乐视 X3-43", value: 3.1950345e-5 },
                { name: "乐视 X60", value: 4.3568652e-5 },
                { name: "乐视 X3-55", value: 6.680527e-5 },
                { name: "乐视 X3-65", value: 6.680527e-5 },
                { name: "乐视 S40", value: 9.004188e-5 },
                { name: "乐视 乐1S", value: 9.294646e-5 },
                { name: "乐视 超级手机1", value: 2.9336225e-4 },
                { name: "乐视 乐Max Pro", value: 4.53114e-4 },
                { name: "乐视 乐Pro 3", value: 6.9128926e-4 },
                { name: "乐视 乐Pro 3双摄AI版", value: 0.005861436 },
                { name: "乐视 乐 Pro3精英版", value: 0.009402115 },
                { name: "乐视 乐Max", value: 0.012873084 },
                { name: "乐视 乐Pro?3双摄AI版", value: 0.012942794 },
                { name: "乐视 超级手机1 Pro", value: 0.022281008 },
                { name: "乐视 超级手机Max", value: 0.02497936 },
                { name: "乐视 乐1", value: 0.05183798 },
                { name: "乐视 乐Pro3", value: 0.0632733 },
                { name: "乐视 乐S3", value: 0.07720655 },
                { name: "乐视 乐Max 2", value: 0.13577154 },
                { name: "乐视 乐2", value: 0.14363423 },
                { name: "乐视 超级手机1s", value: 0.34573177 },
                { name: "乐视 乐2 Pro", value: 0.7173753 }
            ]
        },
        {
            name: "酷派",
            value: 1.382779,
            children: [
                { name: "酷派 5216", value: 2.9045768e-6 },
                { name: "酷派 9900", value: 2.9045768e-6 },
                { name: "酷派 8810", value: 2.9045768e-6 },
                { name: "酷派 5218D", value: 2.9045768e-6 },
                { name: "酷派 旋影90w", value: 2.9045768e-6 },
                { name: "酷派 5200", value: 2.9045768e-6 },
                { name: "酷派 8012", value: 2.9045768e-6 },
                { name: "酷派 7295A", value: 2.9045768e-6 },
                { name: "酷派 8071", value: 2.9045768e-6 },
                { name: "酷派 Mega2.5D", value: 5.8091537e-6 },
                { name: "酷派 7266", value: 5.8091537e-6 },
                { name: "酷派 7728", value: 5.8091537e-6 },
                { name: "酷派 8028", value: 5.8091537e-6 },
                { name: "酷派 5210", value: 8.7137305e-6 },
                { name: "酷派 8950", value: 8.7137305e-6 },
                { name: "酷派 8070", value: 1.1618307e-5 },
                { name: "酷派 8050", value: 1.1618307e-5 },
                { name: "酷派 7920", value: 1.1618307e-5 },
                { name: "酷派 5870", value: 1.1618307e-5 },
                { name: "酷派 E561", value: 1.1618307e-5 },
                { name: "酷派 5010", value: 1.1618307e-5 },
                { name: "酷派 5213", value: 1.1618307e-5 },
                { name: "酷派 8076", value: 1.1618307e-5 },
                { name: "酷派 8735", value: 1.4522884e-5 },
                { name: "酷派 9930", value: 1.4522884e-5 },
                { name: "酷派 8150", value: 1.4522884e-5 },
                { name: "酷派 8022", value: 1.7427461e-5 },
                { name: "酷派 8020", value: 1.7427461e-5 },
                { name: "酷派 8076D", value: 2.0332038e-5 },
                { name: "酷派 9070", value: 2.0332038e-5 },
                { name: "酷派 W711", value: 2.0332038e-5 },
                { name: "酷派 7231", value: 2.0332038e-5 },
                { name: "酷派 8295C", value: 2.3236615e-5 },
                { name: "酷派 7060S", value: 2.3236615e-5 },
                { name: "酷派 7236", value: 2.6141191e-5 },
                { name: "酷派 8195", value: 2.9045768e-5 },
                { name: "酷派 7268", value: 2.9045768e-5 },
                { name: "酷派 9080W", value: 2.9045768e-5 },
                { name: "酷派 7372", value: 2.9045768e-5 },
                { name: "酷派 5876", value: 3.1950345e-5 },
                { name: "酷派 5109", value: 3.1950345e-5 },
                { name: "酷派 8190", value: 3.1950345e-5 },
                { name: "酷派 R106", value: 3.1950345e-5 },
                { name: "酷派 8150D", value: 3.4854922e-5 },
                { name: "酷派 7230", value: 3.4854922e-5 },
                { name: "酷派 7235", value: 4.0664076e-5 },
                { name: "酷派 大观4 mini", value: 4.0664076e-5 },
                { name: "酷派 8730", value: 4.9377806e-5 },
                { name: "酷派 9190l", value: 5.2282383e-5 },
                { name: "酷派 大神Note5", value: 5.2282383e-5 },
                { name: "酷派 8295M", value: 5.2282383e-5 },
                { name: "酷派 5860A", value: 5.518696e-5 },
                { name: "酷派 5315", value: 5.8091537e-5 },
                { name: "酷派 8056", value: 6.0996113e-5 },
                { name: "酷派 5218S", value: 6.0996113e-5 },
                { name: "酷派 9150", value: 6.390069e-5 },
                { name: "酷派 大观HD", value: 6.390069e-5 },
                { name: "酷派 5879", value: 6.390069e-5 },
                { name: "酷派 8722V", value: 6.680527e-5 },
                { name: "酷派 锋尚MAX", value: 7.5519e-5 },
                { name: "酷派 5216D", value: 7.8423574e-5 },
                { name: "酷派 8198T", value: 8.7137305e-5 },
                { name: "酷派 7269", value: 8.7137305e-5 },
                { name: "酷派 5872", value: 8.7137305e-5 },
                { name: "酷派 7295A青春版", value: 9.294646e-5 },
                { name: "酷派 7060", value: 9.294646e-5 },
                { name: "酷派 5860S", value: 9.5851035e-5 },
                { name: "酷派 5310", value: 1.0746934e-4 },
                { name: "酷派 8021", value: 1.1037392e-4 },
                { name: "酷派 8736", value: 1.1037392e-4 },
                { name: "酷派 5216S", value: 1.1618307e-4 },
                { name: "酷派 R108", value: 1.1618307e-4 },
                { name: "酷派 8122", value: 1.2199223e-4 },
                { name: "酷派 7251", value: 1.3361053e-4 },
                { name: "酷派 5217", value: 1.3941969e-4 },
                { name: "酷派 炫影S+", value: 1.4813342e-4 },
                { name: "酷派 Y60", value: 1.5394257e-4 },
                { name: "酷派 5219", value: 1.5975173e-4 },
                { name: "酷派 5930", value: 1.6556088e-4 },
                { name: "酷派 8085q", value: 1.6846546e-4 },
                { name: "酷派 8295", value: 1.7137003e-4 },
                { name: "酷派 8089", value: 1.7427461e-4 },
                { name: "酷派 Y60-W", value: 1.7717919e-4 },
                { name: "酷派 8190Q", value: 1.7717919e-4 },
                { name: "酷派 8085", value: 1.887975e-4 },
                { name: "酷派 7061", value: 1.9460665e-4 },
                { name: "酷派 8079", value: 2.1203411e-4 },
                { name: "酷派 8750", value: 2.2074784e-4 },
                { name: "酷派 5311", value: 2.2365242e-4 },
                { name: "酷派 8707", value: 2.3236615e-4 },
                { name: "酷派 Y60-C1", value: 2.3527072e-4 },
                { name: "酷派 春雷HD", value: 2.6141191e-4 },
                { name: "酷派 7275", value: 2.6431648e-4 },
                { name: "酷派 5313S", value: 2.7593478e-4 },
                { name: "酷派 5261", value: 2.8174394e-4 },
                { name: "酷派 7105", value: 2.875531e-4 },
                { name: "酷派 5890", value: 3.107897e-4 },
                { name: "酷派 8720", value: 3.107897e-4 },
                { name: "酷派 7295+", value: 3.7178583e-4 },
                { name: "酷派 7605", value: 3.892133e-4 },
                { name: "酷派 7270", value: 4.008316e-4 },
                { name: "酷派 8029", value: 4.1825906e-4 },
                { name: "酷派 ivvi K2", value: 4.879689e-4 },
                { name: "酷派 7296S", value: 5.3444214e-4 },
                { name: "酷派 8105", value: 5.6929706e-4 },
                { name: "酷派 7298D", value: 5.925337e-4 },
                { name: "酷派 8717", value: 6.593389e-4 },
                { name: "酷派 8713", value: 6.7967095e-4 },
                { name: "酷派 5200S", value: 6.825755e-4 },
                { name: "酷派 7295", value: 8.016632e-4 },
                { name: "酷派 8017", value: 9.1494166e-4 },
                { name: "酷派 大观4", value: 9.381783e-4 },
                { name: "酷派 7320", value: 9.46892e-4 },
                { name: "酷派 5316", value: 0.0010166019 },
                { name: "酷派 8705", value: 0.0010688843 },
                { name: "酷派 8732", value: 0.0011269758 },
                { name: "酷派 Note3", value: 0.0011298803 },
                { name: "酷派 5951", value: 0.0011444032 },
                { name: "酷派 7295C", value: 0.0012228268 },
                { name: "酷派 5950", value: 0.0012809184 },
                { name: "酷派 5891", value: 0.0013332007 },
                { name: "酷派 7296", value: 0.0015045707 },
                { name: "酷派 5956", value: 0.0016236583 },
                { name: "酷派 Note3Lite", value: 0.0017195095 },
                { name: "酷派 大神1s", value: 0.0017369369 },
                { name: "酷派 大神Note", value: 0.0018502154 },
                { name: "酷派 9976D", value: 0.001893784 },
                { name: "酷派 9976A", value: 0.0020477267 },
                { name: "酷派 ivvi CK2-01", value: 0.002175528 },
                { name: "酷派 8702", value: 0.0024921268 },
                { name: "酷派 Cool1", value: 0.0025298863 },
                { name: "酷派 8715", value: 0.0025908824 },
                { name: "酷派 8712S", value: 0.00302076 },
                { name: "酷派 Y70-C", value: 0.0031805115 },
                { name: "酷派 9190", value: 0.0032008437 },
                { name: "酷派 ivvi V1", value: 0.0032269848 },
                { name: "酷派 5892", value: 0.0032560306 },
                { name: "酷派 5721", value: 0.0033576908 },
                { name: "酷派 Cool Changer S1", value: 0.0033664044 },
                { name: "酷派 ivvi K5", value: 0.003590057 },
                { name: "酷派 大观铂顿", value: 0.003656862 },
                { name: "酷派 ivvi i3Play", value: 0.0036800988 },
                { name: "酷派 8721", value: 0.0037585222 },
                { name: "酷派 8730L", value: 0.003787568 },
                { name: "酷派 K1", value: 0.003897942 },
                { name: "酷派 8718", value: 0.004351056 },
                { name: "酷派 7722", value: 0.004446907 },
                { name: "酷派 8729", value: 0.0044933804 },
                { name: "酷派 Y1", value: 0.004760601 },
                { name: "酷派 ivvi K1 mini", value: 0.0048128837 },
                { name: "酷派 5360", value: 0.005579692 },
                { name: "酷派 ivvi K2-L", value: 0.005794631 },
                { name: "酷派 ivvi 小骨Pro", value: 0.006114134 },
                { name: "酷派 酷玩6", value: 0.0062709814 },
                { name: "酷派 8720L", value: 0.006300027 },
                { name: "酷派 Y891", value: 0.006552725 },
                { name: "酷派 ivvi K1", value: 0.0070116483 },
                { name: "酷派 5367", value: 0.0070987856 },
                { name: "酷派 cool 1C", value: 0.0074095754 },
                { name: "酷派 5263", value: 0.0074763806 },
                { name: "酷派 5270", value: 0.0077377926 },
                { name: "酷派 ivvi S6", value: 0.008089246 },
                { name: "酷派 ivvi 小i", value: 0.008170574 },
                { name: "酷派 cool S1", value: 0.009410828 },
                { name: "酷派 锋尚N1S", value: 0.010578468 },
                { name: "酷派 5263S", value: 0.011743204 },
                { name: "酷派 8712", value: 0.01207723 },
                { name: "酷派 锋尚mini", value: 0.012286359 },
                { name: "酷派 ivvi 小i Plus", value: 0.013009599 },
                { name: "酷派 大神F2全高清版", value: 0.017508788 },
                { name: "酷派 大神X7", value: 0.019144066 },
                { name: "酷派 8722", value: 0.020166477 },
                { name: "酷派 大神F1Plus", value: 0.021023326 },
                { name: "酷派 全魔王手机", value: 0.021511296 },
                { name: "酷派 锋尚Air", value: 0.023660682 },
                { name: "酷派 锋尚N1", value: 0.024656951 },
                { name: "酷派 锋尚Pro2", value: 0.02506069 },
                { name: "酷派 ivvi 小骨MAX", value: 0.02594368 },
                { name: "酷派 T1", value: 0.02658559 },
                { name: "酷派 锋尚N2M", value: 0.027729994 },
                { name: "酷派 锋尚", value: 0.029359462 },
                { name: "酷派 B770", value: 0.03232213 },
                { name: "酷派 大神F1", value: 0.032618396 },
                { name: "酷派 锋尚Pro", value: 0.032661967 },
                { name: "酷派 ivvi F2", value: 0.034756165 },
                { name: "酷派 ivvi i3", value: 0.036693517 },
                { name: "酷派 5267", value: 0.04057694 },
                { name: "酷派 锋尚2", value: 0.04057694 },
                { name: "酷派 8737", value: 0.04279313 },
                { name: "酷派 锋尚3", value: 0.043925915 },
                { name: "酷派 锋尚Max", value: 0.04971183 },
                { name: "酷派 大神Note3", value: 0.055033017 },
                { name: "酷派 cool1", value: 0.0809157 },
                { name: "酷派 大神F2", value: 0.14173172 },
                { name: "酷派 S6", value: 0.16054177 }
            ]
        },
        {
            name: "大神",
            value: 0.94945383,
            children: [
                { name: "大神 F1 Plus", value: 1.7427461e-5 },
                { name: "大神 F1极速版", value: 6.0996113e-5 },
                { name: "大神 F2全高清版", value: 6.680527e-5 },
                { name: "大神 6A", value: 6.9709844e-5 },
                { name: "大神 1S", value: 3.369309e-4 },
                { name: "大神 F2", value: 0.0010369339 },
                { name: "大神 F1", value: 0.004522426 },
                { name: "大神 X7", value: 0.9433426 }
            ]
        },
        {
            name: "联想",
            value: 0.8113674,
            children: [
                { name: "联想 A228t", value: 2.9045768e-6 },
                { name: "联想 LENOVOTV 40S9", value: 2.9045768e-6 },
                { name: "联想 A60", value: 2.9045768e-6 },
                { name: "联想 50S52", value: 2.9045768e-6 },
                { name: "联想 乐Phone S1", value: 2.9045768e-6 },
                { name: "联想 K2", value: 2.9045768e-6 },
                { name: "联想 A65", value: 2.9045768e-6 },
                { name: "联想 A780", value: 2.9045768e-6 },
                { name: "联想 S8-50L", value: 2.9045768e-6 },
                { name: "联想 乐PAD", value: 2.9045768e-6 },
                { name: "联想 A688t", value: 2.9045768e-6 },
                { name: "联想 乐Pad S2005?", value: 2.9045768e-6 },
                { name: "联想 A360", value: 2.9045768e-6 },
                { name: "联想 S680", value: 2.9045768e-6 },
                { name: "联想 A518", value: 2.9045768e-6 },
                { name: "联想 S810t", value: 2.9045768e-6 },
                { name: "联想 A370", value: 2.9045768e-6 },
                { name: "联想 A388t", value: 2.9045768e-6 },
                { name: "联想 A300", value: 2.9045768e-6 },
                { name: "联想 A60+", value: 2.9045768e-6 },
                { name: "联想 A586", value: 5.8091537e-6 },
                { name: "联想 B6000", value: 5.8091537e-6 },
                { name: "联想 A529", value: 5.8091537e-6 },
                { name: "联想 A366t", value: 5.8091537e-6 },
                { name: "联想 A3000-F", value: 5.8091537e-6 },
                { name: "联想 A238t", value: 5.8091537e-6 },
                { name: "联想 T92", value: 5.8091537e-6 },
                { name: "联想 VIBE P1 m", value: 5.8091537e-6 },
                { name: "联想 A700e", value: 8.7137305e-6 },
                { name: "联想 A390e", value: 8.7137305e-6 },
                { name: "联想 A375e", value: 8.7137305e-6 },
                { name: "联想 A300t", value: 8.7137305e-6 },
                { name: "联想 A269", value: 8.7137305e-6 },
                { name: "联想 A526", value: 8.7137305e-6 },
                { name: "联想 A360t", value: 1.1618307e-5 },
                { name: "联想 A218t", value: 1.1618307e-5 },
                { name: "联想 K2110", value: 1.1618307e-5 },
                { name: "联想 S560", value: 1.1618307e-5 },
                { name: "联想 VIBE B", value: 1.1618307e-5 },
                { name: "联想 乐Pad", value: 1.1618307e-5 },
                { name: "联想 A320t", value: 1.4522884e-5 },
                { name: "联想 A710e", value: 1.4522884e-5 },
                { name: "联想 IdeaTab A1020", value: 1.4522884e-5 },
                { name: "联想 IdeaTab A1000-F", value: 1.4522884e-5 },
                { name: "联想 IDEA TV K82", value: 1.4522884e-5 },
                { name: "联想 A708t", value: 1.4522884e-5 },
                { name: "联想 S696", value: 1.7427461e-5 },
                { name: "联想 A328", value: 1.7427461e-5 },
                { name: "联想 A316", value: 2.0332038e-5 },
                { name: "联想 3GW101", value: 2.3236615e-5 },
                { name: "联想 A765e", value: 2.3236615e-5 },
                { name: "联想 A376", value: 2.3236615e-5 },
                { name: "联想 K800", value: 2.3236615e-5 },
                { name: "联想 S899t", value: 2.3236615e-5 },
                { name: "联想 A305e", value: 2.3236615e-5 },
                { name: "联想 A318t", value: 2.6141191e-5 },
                { name: "联想 A698t", value: 2.6141191e-5 },
                { name: "联想 A600e", value: 2.6141191e-5 },
                { name: "联想 A788t", value: 2.6141191e-5 },
                { name: "联想 A820t", value: 2.9045768e-5 },
                { name: "联想 A668t", value: 2.9045768e-5 },
                { name: "联想 A319", value: 3.1950345e-5 },
                { name: "联想 A396", value: 3.1950345e-5 },
                { name: "联想 P700", value: 3.1950345e-5 },
                { name: "联想 S580", value: 3.1950345e-5 },
                { name: "联想 A630e", value: 3.4854922e-5 },
                { name: "联想 VIBE Shot", value: 3.4854922e-5 },
                { name: "联想 VIBE Z2 Pro", value: 3.4854922e-5 },
                { name: "联想 TAB S8-50L", value: 3.77595e-5 },
                { name: "联想 S686", value: 3.77595e-5 },
                { name: "联想 A308T", value: 4.0664076e-5 },
                { name: "联想 A369", value: 4.0664076e-5 },
                { name: "联想 A360e", value: 4.3568652e-5 },
                { name: "联想 A10-30", value: 4.3568652e-5 },
                { name: "联想 A1-07", value: 4.3568652e-5 },
                { name: "联想 A859", value: 4.647323e-5 },
                { name: "联想 A6020", value: 4.647323e-5 },
                { name: "联想 A370e", value: 4.647323e-5 },
                { name: "联想 S870e", value: 4.9377806e-5 },
                { name: "联想 IdeaTab A1010", value: 4.9377806e-5 },
                { name: "联想 A660", value: 5.2282383e-5 },
                { name: "联想 A750", value: 5.8091537e-5 },
                { name: "联想 IdeaTab A2207A-H", value: 5.8091537e-5 },
                { name: "联想 S750", value: 6.0996113e-5 },
                { name: "联想 S870E", value: 6.680527e-5 },
                { name: "联想 A356", value: 6.680527e-5 },
                { name: "联想 P700i", value: 6.9709844e-5 },
                { name: "联想 A390", value: 6.9709844e-5 },
                { name: "联想 IdeaTab A2107A-H", value: 7.5519e-5 },
                { name: "联想 A505e", value: 7.8423574e-5 },
                { name: "联想 A398t", value: 8.7137305e-5 },
                { name: "联想 A590", value: 9.875561e-5 },
                { name: "联想 IdeaTab A1000-T", value: 1.04564766e-4 },
                { name: "联想 S880i", value: 1.04564766e-4 },
                { name: "联想 A516", value: 1.1037392e-4 },
                { name: "联想 IdeaTab 2109A", value: 1.1908765e-4 },
                { name: "联想 S880", value: 1.3070596e-4 },
                { name: "联想 A298t", value: 1.3070596e-4 },
                { name: "联想 A380e", value: 1.3651511e-4 },
                { name: "联想 S720i", value: 1.4232426e-4 },
                { name: "联想 A1900", value: 1.4522884e-4 },
                { name: "联想 A780e", value: 1.4813342e-4 },
                { name: "联想 A785e", value: 1.51038e-4 },
                { name: "联想 A798t", value: 1.51038e-4 },
                { name: "联想 A656", value: 1.5394257e-4 },
                { name: "联想 TB2-X30M", value: 1.5684715e-4 },
                { name: "联想 A616", value: 1.5975173e-4 },
                { name: "联想 A395e", value: 1.5975173e-4 },
                { name: "联想 A706", value: 1.7717919e-4 },
                { name: "联想 A368t", value: 1.7717919e-4 },
                { name: "联想 A750e", value: 1.8008376e-4 },
                { name: "联想 S6000L-F", value: 1.9170207e-4 },
                { name: "联想 K860", value: 1.9170207e-4 },
                { name: "联想 VIBE S1 Lite", value: 1.9170207e-4 },
                { name: "联想 A278t", value: 2.0332038e-4 },
                { name: "联想 B8080", value: 2.1784326e-4 },
                { name: "联想 A390t", value: 2.1784326e-4 },
                { name: "联想 A766", value: 2.2365242e-4 },
                { name: "联想 A10-70", value: 2.2365242e-4 },
                { name: "联想 A378t", value: 2.2946157e-4 },
                { name: "联想 A3690", value: 2.3236615e-4 },
                { name: "联想 A328t", value: 2.3527072e-4 },
                { name: "联想 A658t", value: 2.381753e-4 },
                { name: "联想 A7-60HC", value: 2.4398445e-4 },
                { name: "联想 A789", value: 2.6141191e-4 },
                { name: "联想 S720", value: 2.6722107e-4 },
                { name: "联想 S868t", value: 2.7303022e-4 },
                { name: "联想 A358t", value: 2.9626684e-4 },
                { name: "联想 A288t", value: 3.0788514e-4 },
                { name: "联想 VibeK6Power", value: 3.107897e-4 },
                { name: "联想 A770e", value: 3.1659886e-4 },
                { name: "联想 A800", value: 3.2821717e-4 },
                { name: "联想 A385e", value: 3.2821717e-4 },
                { name: "联想 A760", value: 3.2821717e-4 },
                { name: "联想 A7700", value: 3.3112176e-4 },
                { name: "联想 TAB3 7.0", value: 3.3112176e-4 },
                { name: "联想 A536", value: 3.4854922e-4 },
                { name: "联想 S660", value: 3.5726294e-4 },
                { name: "联想 S939", value: 3.630721e-4 },
                { name: "联想 A398t+", value: 3.6888124e-4 },
                { name: "联想 A680", value: 3.77595e-4 },
                { name: "联想 VIBE C2", value: 3.9502245e-4 },
                { name: "联想 A830", value: 3.9502245e-4 },
                { name: "联想 S860", value: 4.124499e-4 },
                { name: "联想 A670t", value: 4.1825906e-4 },
                { name: "联想 A630", value: 4.3568652e-4 },
                { name: "联想 Yoga Tablet 2-830F", value: 4.4730483e-4 },
                { name: "联想 P770", value: 4.53114e-4 },
                { name: "联想 A690", value: 4.53114e-4 },
                { name: "联想 A66", value: 4.647323e-4 },
                { name: "联想 S890", value: 4.6763686e-4 },
                { name: "联想 A560", value: 4.6763686e-4 },
                { name: "联想 IdeaTab S6000-F", value: 4.7925516e-4 },
                { name: "联想 A816", value: 5.112055e-4 },
                { name: "联想 A860e", value: 5.112055e-4 },
                { name: "联想 S930", value: 5.1701465e-4 },
                { name: "联想 A338t", value: 5.3444214e-4 },
                { name: "联想 A6600", value: 5.722016e-4 },
                { name: "联想 K6Note", value: 5.925337e-4 },
                { name: "联想 S858T", value: 6.0124736e-4 },
                { name: "联想 Yoga Tablet B8080", value: 6.04152e-4 },
                { name: "联想 A678t", value: 6.4191147e-4 },
                { name: "联想 K900", value: 6.7967095e-4 },
                { name: "联想 VIBE S1", value: 6.8548013e-4 },
                { name: "联想 S856", value: 6.9128926e-4 },
                { name: "联想 S920", value: 7.0290756e-4 },
                { name: "联想 P780", value: 7.348579e-4 },
                { name: "联想 K860i", value: 7.668083e-4 },
                { name: "联想 A3500", value: 7.900449e-4 },
                { name: "联想 S650", value: 7.987586e-4 },
                { name: "联想 VIBE X2 Pro", value: 8.1909064e-4 },
                { name: "联想 A828t", value: 0.001002079 },
                { name: "联想 Yoga Book YB1-X90F", value: 0.0010543613 },
                { name: "联想 A7-30", value: 0.0012053994 },
                { name: "联想 A399", value: 0.0012053994 },
                { name: "联想 S938t", value: 0.0012141131 },
                { name: "联想 A330e", value: 0.0012141131 },
                { name: "联想 A606", value: 0.0012518726 },
                { name: "联想 A388T", value: 0.0012954412 },
                { name: "联想 S8-50", value: 0.0013099641 },
                { name: "联想 S668t", value: 0.0014116243 },
                { name: "联想 A7600-F", value: 0.0015016661 },
                { name: "联想 A628t", value: 0.0015365211 },
                { name: "联想 A3890", value: 0.0015452348 },
                { name: "联想 YOGA Tab 3 Pro", value: 0.0015481394 },
                { name: "联想 TAB 2 A7-10", value: 0.001571376 },
                { name: "联想 TB3-850F", value: 0.001571376 },
                { name: "联想 Tab2A7-20F", value: 0.0015858989 },
                { name: "联想 A380T", value: 0.0016149447 },
                { name: "联想 A890e", value: 0.0016410858 },
                { name: "联想 Vibe Z2 Pro", value: 0.0016527042 },
                { name: "联想 S860e", value: 0.0016556088 },
                { name: "联想 TAB A10-80", value: 0.0016585133 },
                { name: "联想 YOGA Tablet 3", value: 0.0016701316 },
                { name: "联想 VIBE X", value: 0.0017805055 },
                { name: "联想 A768t", value: 0.0017805055 },
                { name: "联想 A355e", value: 0.0017834101 },
                { name: "联想 S820", value: 0.0018327879 },
                { name: "联想 A500", value: 0.0019809213 },
                { name: "联想 A889", value: 0.0020477267 },
                { name: "联想 A6010", value: 0.0020564403 },
                { name: "联想 A588t", value: 0.0020680586 },
                { name: "联想 A850+", value: 0.0020854862 },
                { name: "联想 黄金斗士S8畅玩", value: 0.0021029136 },
                { name: "联想 A805e", value: 0.0022132874 },
                { name: "联想 YOGA Tablet B8000", value: 0.0022626652 },
                { name: "联想 A820", value: 0.0022655698 },
                { name: "联想 S658t", value: 0.0022829974 },
                { name: "联想 YOGA Tab 3 Plus", value: 0.0023323752 },
                { name: "联想 A3600d", value: 0.0023730393 },
                { name: "联想 PHAB", value: 0.0024543675 },
                { name: "联想 308", value: 0.002628642 },
                { name: "联想 K80", value: 0.0026460695 },
                { name: "联想 S5000", value: 0.0026722106 },
                { name: "联想 VIBE Z", value: 0.0027971074 },
                { name: "联想 A3000-H", value: 0.002971382 },
                { name: "联想 乐檬K31", value: 0.002991714 },
                { name: "联想 A5890", value: 0.0030846605 },
                { name: "联想 TAB TB2-X30F", value: 0.0031369429 },
                { name: "联想 YOGA Tablet B6000", value: 0.0032850762 },
                { name: "联想 A7000", value: 0.0033228358 },
                { name: "联想 TAB 2 A8-50F", value: 0.0033402632 },
                { name: "联想 VIBE K5 Plus", value: 0.0033518816 },
                { name: "联想 VIBE K5", value: 0.0033954503 },
                { name: "联想 S6000", value: 0.0034738737 },
                { name: "联想 YOGA Tablet 2", value: 0.0035145378 },
                { name: "联想 黄金斗士青春版", value: 0.0035639156 },
                { name: "联想 A368T", value: 0.0036132934 },
                { name: "联想 A2010", value: 0.0036481484 },
                { name: "联想 A688T", value: 0.003842755 },
                { name: "联想 A5000", value: 0.0038659917 },
                { name: "联想 S898T", value: 0.0039153695 },
                { name: "联想 VIBE C", value: 0.003958938 },
                { name: "联想 A850", value: 0.0043684836 },
                { name: "联想 YOGA Tab 3", value: 0.004542758 },
                { name: "联想 A2860", value: 0.0046095634 },
                { name: "联想 A7010", value: 0.0048012654 },
                { name: "联想 A858t", value: 0.004824502 },
                { name: "联想 S810T", value: 0.0053705624 },
                { name: "联想 IdeaTab 3 7.0", value: 0.0054373676 },
                { name: "联想 A360T", value: 0.005777203 },
                { name: "联想 A708T", value: 0.0057888213 },
                { name: "联想 PHAB 2 Plus", value: 0.006053138 },
                { name: "联想 A3300-T", value: 0.006160607 },
                { name: "联想 黄金斗士S8畅玩版", value: 0.006352309 },
                { name: "联想 笋尖S60", value: 0.0063842596 },
                { name: "联想 A3900", value: 0.006616626 },
                { name: "联想 乐檬K5 Note", value: 0.006848992 },
                { name: "联想 TAB 2 A10-70", value: 0.007040694 },
                { name: "联想 A880", value: 0.007252728 },
                { name: "联想 TAB3 8 Plus", value: 0.0077581247 },
                { name: "联想 Vibe P2", value: 0.008042773 },
                { name: "联想 VIBE K5 Note", value: 0.008295471 },
                { name: "联想 A8-50", value: 0.008298376 },
                { name: "联想 A5800-D", value: 0.0083622765 },
                { name: "联想 VIBE Z2", value: 0.008417464 },
                { name: "联想 A320T", value: 0.008431986 },
                { name: "联想 A2800d", value: 0.008580119 },
                { name: "联想 TAB 2 A7-30", value: 0.008847341 },
                { name: "联想 S850", value: 0.009373069 },
                { name: "联想 A6000", value: 0.010235729 },
                { name: "联想 PHAB Plus", value: 0.010264774 },
                { name: "联想 A3800d", value: 0.010322866 },
                { name: "联想 A3910", value: 0.010543614 },
                { name: "联想 A6800", value: 0.0105929915 },
                { name: "联想 笋尖S90", value: 0.0114846965 },
                { name: "联想 A7-30HC", value: 0.0120539935 },
                { name: "联想 A2580", value: 0.012283455 },
                { name: "联想 乐檬3", value: 0.012829515 },
                { name: "联想 P70", value: 0.012864371 },
                { name: "联想 黄金斗士Note8", value: 0.01403782 },
                { name: "联想 Vibe Shot", value: 0.0141772395 },
                { name: "联想 VIBE X2", value: 0.014197571 },
                { name: "联想 A1000", value: 0.014987616 },
                { name: "联想 A788T", value: 0.015734091 },
                { name: "联想 乐檬X3", value: 0.02007353 },
                { name: "联想 A5", value: 0.020259423 },
                { name: "联想 黄金斗士S8", value: 0.020779341 },
                { name: "联想 K10", value: 0.023727488 },
                { name: "联想 VIBE P1", value: 0.024134127 },
                { name: "联想 乐檬K3", value: 0.043118443 },
                { name: "联想 乐檬K3 Note", value: 0.046650406 },
                { name: "联想 黄金斗士A8", value: 0.07134512 }
            ]
        },
        {
            name: "邦华",
            value: 0.7636771,
            children: [
                { name: "邦华 A7 Pro", value: 2.9045768e-6 },
                { name: "邦华 U1", value: 2.9045768e-6 },
                { name: "邦华 V80", value: 2.9045768e-6 },
                { name: "邦华 TD800", value: 8.7137305e-6 },
                { name: "邦华 I9", value: 2.3236615e-5 },
                { name: "邦华 TL600", value: 4.3568652e-5 },
                { name: "邦华 U9", value: 4.3568652e-5 },
                { name: "邦华 TL100", value: 4.647323e-5 },
                { name: "邦华 TL6000", value: 4.9377806e-5 },
                { name: "邦华 TL3000", value: 4.9377806e-5 },
                { name: "邦华 V90", value: 6.0996113e-5 },
                { name: "邦华 TL1000", value: 6.390069e-5 },
                { name: "邦华 TL2000", value: 6.9709844e-5 },
                { name: "邦华 U6", value: 9.875561e-5 },
                { name: "邦华 V70", value: 9.875561e-5 },
                { name: "邦华 U2", value: 1.0746934e-4 },
                { name: "邦华 TL500", value: 1.8008376e-4 },
                { name: "邦华 U10", value: 1.9460665e-4 },
                { name: "邦华 V100", value: 2.2074784e-4 },
                { name: "邦华 U5", value: 3.892133e-4 },
                { name: "邦华 V95", value: 5.315376e-4 },
                { name: "邦华 V95 Pro", value: 6.3029316e-4 },
                { name: "邦华 L2", value: 0.0010863116 },
                { name: "邦华 U12", value: 0.0011182621 },
                { name: "邦华 V2", value: 0.0013680557 },
                { name: "邦华 L3", value: 0.0015626623 },
                { name: "邦华 P1", value: 0.0026199282 },
                { name: "邦华 L1", value: 0.0035987706 },
                { name: "邦华 F3", value: 0.0037439994 },
                { name: "邦华 U7", value: 0.0041477354 },
                { name: "邦华 V6", value: 0.0065352977 },
                { name: "邦华 U11", value: 0.008420368 },
                { name: "邦华 V8", value: 0.24941891 },
                { name: "邦华 X6", value: 0.4771377 }
            ]
        },
        {
            name: "ELEPHONE",
            value: 0.46508083,
            children: [
                { name: "ELEPHONE S2 PLUS", value: 8.7137305e-6 },
                { name: "ELEPHONE P6000", value: 8.7137305e-6 },
                { name: "ELEPHONE P6000 Pro", value: 1.4522884e-5 },
                { name: "ELEPHONE P7000", value: 3.77595e-5 },
                { name: "ELEPHONE P8000", value: 4.0664076e-5 },
                { name: "ELEPHONE P9000", value: 9.294646e-5 },
                { name: "ELEPHONE S2", value: 2.2074784e-4 },
                { name: "ELEPHONE P10", value: 0.46465677 }
            ]
        },
        {
            name: "MICROMAX",
            value: 0.41014656,
            children: [
                { name: "MICROMAX Q419", value: 2.9045768e-6 },
                { name: "MICROMAX Q415", value: 2.9045768e-6 },
                { name: "MICROMAX A106", value: 2.9045768e-6 },
                { name: "MICROMAX A120", value: 2.9045768e-6 },
                { name: "MICROMAX D200", value: 2.9045768e-6 },
                { name: "MICROMAX Q379", value: 2.9045768e-6 },
                { name: "MICROMAX E481", value: 2.9045768e-6 },
                { name: "MICROMAX A111", value: 2.9045768e-6 },
                { name: "MICROMAX Q416", value: 2.9045768e-6 },
                { name: "MICROMAX A093", value: 2.9045768e-6 },
                { name: "MICROMAX Q391", value: 2.9045768e-6 },
                { name: "MICROMAX Yu Yureka Plus", value: 5.8091537e-6 },
                { name: "MICROMAX Q385", value: 5.8091537e-6 },
                { name: "MICROMAX Q417", value: 5.8091537e-6 },
                { name: "MICROMAX A311", value: 5.8091537e-6 },
                { name: "MICROMAX A79", value: 0.113374345 },
                { name: "MICROMAX A77", value: 0.29671705 }
            ]
        },
        {
            name: "朵唯",
            value: 0.35842767,
            children: [
                { name: "朵唯 D30", value: 2.9045768e-6 },
                { name: "朵唯 iEva", value: 2.9045768e-6 },
                { name: "朵唯 D3", value: 5.8091537e-6 },
                { name: "朵唯 D50", value: 5.8091537e-6 },
                { name: "朵唯 D9", value: 8.7137305e-6 },
                { name: "朵唯 D8", value: 1.1618307e-5 },
                { name: "朵唯 D920", value: 1.1618307e-5 },
                { name: "朵唯 D910", value: 1.4522884e-5 },
                { name: "朵唯 D350", value: 2.0332038e-5 },
                { name: "朵唯 D500", value: 2.0332038e-5 },
                { name: "朵唯 M1w", value: 6.390069e-5 },
                { name: "朵唯 D800", value: 8.423273e-5 },
                { name: "朵唯 D330", value: 1.04564766e-4 },
                { name: "朵唯 S2L", value: 1.51038e-4 },
                { name: "朵唯 iSuper S2", value: 1.5394257e-4 },
                { name: "朵唯 S2y", value: 2.1493869e-4 },
                { name: "朵唯 L1C", value: 3.0788514e-4 },
                { name: "朵唯 A15", value: 3.4564463e-4 },
                { name: "朵唯 T35", value: 3.892133e-4 },
                { name: "朵唯 T60", value: 5.2282383e-4 },
                { name: "朵唯 T90", value: 5.5477413e-4 },
                { name: "朵唯 L1 mini", value: 5.8091537e-4 },
                { name: "朵唯 T21", value: 8.336135e-4 },
                { name: "朵唯 A12", value: 8.9170504e-4 },
                { name: "朵唯 T20L", value: 8.975142e-4 },
                { name: "朵唯 L5Pro", value: 0.0013767694 },
                { name: "朵唯 C9", value: 0.0013971014 },
                { name: "朵唯 S3", value: 0.0015684714 },
                { name: "朵唯 L5 Plus", value: 0.0017921239 },
                { name: "朵唯 M1t", value: 0.0020883908 },
                { name: "朵唯 倾城L3C", value: 0.0023556117 },
                { name: "朵唯 L520", value: 0.003116611 },
                { name: "朵唯 倾城L3", value: 0.003218271 },
                { name: "朵唯 L9 Mini", value: 0.004261014 },
                { name: "朵唯 A10", value: 0.005666829 },
                { name: "朵唯 V11", value: 0.009230745 },
                { name: "朵唯 L5 mini", value: 0.010735315 },
                { name: "朵唯 A6", value: 0.013262297 },
                { name: "朵唯 L8 Plus", value: 0.015565627 },
                { name: "朵唯 M2", value: 0.015725378 },
                { name: "朵唯 V3", value: 0.26086584 }
            ]
        },
        {
            name: "奇酷",
            value: 0.3173918,
            children: [
                { name: "奇酷 Q5", value: 0.0053269938 },
                { name: "奇酷 Q5 Plus", value: 0.0067560454 },
                { name: "奇酷 旗舰版", value: 0.009053566 },
                { name: "奇酷 N4A", value: 0.013973919 },
                { name: "奇酷 N5S", value: 0.04689439 },
                { name: "奇酷 F4", value: 0.04844834 },
                { name: "奇酷 N4", value: 0.049543366 },
                { name: "奇酷 N4S", value: 0.063221015 },
                { name: "奇酷 N5", value: 0.07417417 }
            ]
        },
        {
            name: "波导",
            value: 0.2650165,
            children: [
                { name: "波导 I580", value: 2.9045768e-6 },
                { name: "波导 S500", value: 2.9045768e-6 },
                { name: "波导 I8", value: 2.9045768e-6 },
                { name: "波导 T9508", value: 5.8091537e-6 },
                { name: "波导 T9609", value: 8.7137305e-6 },
                { name: "波导 I900", value: 8.7137305e-6 },
                { name: "波导 XL100", value: 1.1618307e-5 },
                { name: "波导 XL200", value: 1.4522884e-5 },
                { name: "波导 T9600", value: 1.7427461e-5 },
                { name: "波导 T9608", value: 2.0332038e-5 },
                { name: "波导 L100", value: 2.6141191e-5 },
                { name: "波导 i8S", value: 2.9045768e-5 },
                { name: "波导 i600", value: 3.77595e-5 },
                { name: "波导 Doeasy E700", value: 4.0664076e-5 },
                { name: "波导 L108", value: 5.2282383e-5 },
                { name: "波导 LT01", value: 6.680527e-5 },
                { name: "波导 L600", value: 1.2780138e-4 },
                { name: "波导 L900", value: 1.887975e-4 },
                { name: "波导 i9", value: 2.1784326e-4 },
                { name: "波导 L802", value: 3.892133e-4 },
                { name: "波导 L5", value: 4.1535447e-4 },
                { name: "波导 LT02", value: 4.8215975e-4 },
                { name: "波导 L7 Plus", value: 5.7801075e-4 },
                { name: "波导 I7", value: 8.5975474e-4 },
                { name: "波导 L8", value: 0.0010078881 },
                { name: "波导 L902", value: 0.0010834071 },
                { name: "波导 D10", value: 0.0012605863 },
                { name: "波导 D08", value: 0.0015394257 },
                { name: "波导 X5", value: 0.0027273975 },
                { name: "波导 L7", value: 0.0036655758 },
                { name: "波导 L6", value: 0.007859785 },
                { name: "波导 L9", value: 0.017029533 },
                { name: "波导 M7", value: 0.047309745 },
                { name: "波导 M6", value: 0.17792566 }
            ]
        },
        {
            name: "中兴",
            value: 0.23769894,
            children: [
                { name: "中兴 U791", value: 2.9045768e-6 },
                { name: "中兴 V815W", value: 2.9045768e-6 },
                { name: "中兴 V985", value: 2.9045768e-6 },
                { name: "中兴 N880G", value: 2.9045768e-6 },
                { name: "中兴 U880F1", value: 2.9045768e-6 },
                { name: "中兴 G721C", value: 2.9045768e-6 },
                { name: "中兴 U790", value: 2.9045768e-6 },
                { name: "中兴 N788", value: 2.9045768e-6 },
                { name: "中兴 N9511", value: 2.9045768e-6 },
                { name: "中兴 V965", value: 2.9045768e-6 },
                { name: "中兴 V788D", value: 2.9045768e-6 },
                { name: "中兴 N790", value: 2.9045768e-6 },
                { name: "中兴 Q101T", value: 2.9045768e-6 },
                { name: "中兴 U889", value: 5.8091537e-6 },
                { name: "中兴 U880E", value: 5.8091537e-6 },
                { name: "中兴 V889F", value: 5.8091537e-6 },
                { name: "中兴 Blade D6", value: 5.8091537e-6 },
                { name: "中兴 Blade N880", value: 5.8091537e-6 },
                { name: "中兴 U816", value: 5.8091537e-6 },
                { name: "中兴 Blade A110", value: 5.8091537e-6 },
                { name: "中兴 Blade C", value: 5.8091537e-6 },
                { name: "中兴 U793", value: 8.7137305e-6 },
                { name: "中兴 U807N", value: 8.7137305e-6 },
                { name: "中兴 Blade L5", value: 8.7137305e-6 },
                { name: "中兴 Grand X Max+", value: 8.7137305e-6 },
                { name: "中兴 N807", value: 1.1618307e-5 },
                { name: "中兴 Blade A5", value: 1.1618307e-5 },
                { name: "中兴 N798", value: 1.1618307e-5 },
                { name: "中兴 V889M", value: 1.1618307e-5 },
                { name: "中兴 Blade L2", value: 1.1618307e-5 },
                { name: "中兴 U795+", value: 1.1618307e-5 },
                { name: "中兴 Grand Era", value: 1.1618307e-5 },
                { name: "中兴 V956", value: 1.4522884e-5 },
                { name: "中兴 U808", value: 1.4522884e-5 },
                { name: "中兴 Blade V6 Plus", value: 1.4522884e-5 },
                { name: "中兴 N855D", value: 1.4522884e-5 },
                { name: "中兴 Blade G Lux", value: 1.7427461e-5 },
                { name: "中兴 N600", value: 1.7427461e-5 },
                { name: "中兴 N983", value: 1.7427461e-5 },
                { name: "中兴 V889D", value: 1.7427461e-5 },
                { name: "中兴 N880F", value: 1.7427461e-5 },
                { name: "中兴 Blade A452", value: 1.7427461e-5 },
                { name: "中兴 U809", value: 2.0332038e-5 },
                { name: "中兴 V955", value: 2.3236615e-5 },
                { name: "中兴 N798+", value: 2.3236615e-5 },
                { name: "中兴 T620", value: 2.3236615e-5 },
                { name: "中兴 AXON天机", value: 2.3236615e-5 },
                { name: "中兴 U950", value: 2.3236615e-5 },
                { name: "中兴 N881E", value: 2.6141191e-5 },
                { name: "中兴 N881F", value: 2.6141191e-5 },
                { name: "中兴 Q201T", value: 2.9045768e-5 },
                { name: "中兴 Q508U", value: 3.1950345e-5 },
                { name: "中兴 Grand S", value: 3.1950345e-5 },
                { name: "中兴 Q501U", value: 3.4854922e-5 },
                { name: "中兴 N818", value: 3.4854922e-5 },
                { name: "中兴 U818", value: 3.4854922e-5 },
                { name: "中兴 U819", value: 3.77595e-5 },
                { name: "中兴 Grand X Quad", value: 3.77595e-5 },
                { name: "中兴 Blade V580", value: 3.77595e-5 },
                { name: "中兴 U795", value: 4.0664076e-5 },
                { name: "中兴 U968", value: 4.647323e-5 },
                { name: "中兴 红牛V5", value: 4.647323e-5 },
                { name: "中兴 Geek", value: 4.647323e-5 },
                { name: "中兴 Q509T", value: 4.9377806e-5 },
                { name: "中兴 U930", value: 5.518696e-5 },
                { name: "中兴 U880", value: 5.8091537e-5 },
                { name: "中兴 G601U", value: 5.8091537e-5 },
                { name: "中兴 V818", value: 5.8091537e-5 },
                { name: "中兴 U969", value: 5.8091537e-5 },
                { name: "中兴 Q501T", value: 6.0996113e-5 },
                { name: "中兴 Blade V6", value: 6.0996113e-5 },
                { name: "中兴 Blade L3", value: 6.0996113e-5 },
                { name: "中兴 U807", value: 6.390069e-5 },
                { name: "中兴 N919D", value: 6.680527e-5 },
                { name: "中兴 U9815", value: 6.9709844e-5 },
                { name: "中兴 Blade L110", value: 7.261442e-5 },
                { name: "中兴 Q805T", value: 7.8423574e-5 },
                { name: "中兴 N986", value: 8.132815e-5 },
                { name: "中兴 U879", value: 8.132815e-5 },
                { name: "中兴 Grand Memo N5L", value: 8.132815e-5 },
                { name: "中兴 N880E", value: 8.423273e-5 },
                { name: "中兴 U956", value: 9.004188e-5 },
                { name: "中兴 Q301C", value: 9.004188e-5 },
                { name: "中兴 Q503U", value: 9.875561e-5 },
                { name: "中兴 U817", value: 1.0166019e-4 },
                { name: "中兴 Q507T", value: 1.132785e-4 },
                { name: "中兴 Q701C", value: 1.1618307e-4 },
                { name: "中兴 Q705U", value: 1.1618307e-4 },
                { name: "中兴 V967S", value: 1.2199223e-4 },
                { name: "中兴 N919", value: 1.2199223e-4 },
                { name: "中兴 S2002", value: 1.3941969e-4 },
                { name: "中兴 大Q", value: 1.4232426e-4 },
                { name: "中兴 memo 5S", value: 1.6556088e-4 },
                { name: "中兴 N909", value: 1.6556088e-4 },
                { name: "中兴 Q801L", value: 1.8298834e-4 },
                { name: "中兴 N980", value: 1.8298834e-4 },
                { name: "中兴 U960E", value: 1.9170207e-4 },
                { name: "中兴 Q802", value: 1.9170207e-4 },
                { name: "中兴 U960S3", value: 2.1203411e-4 },
                { name: "中兴 U930HD", value: 2.1493869e-4 },
                { name: "中兴 天机3", value: 2.5560276e-4 },
                { name: "中兴 小星星", value: 3.2821717e-4 },
                { name: "中兴 V18", value: 3.3983547e-4 },
                { name: "中兴 N960", value: 3.6597668e-4 },
                { name: "中兴 Grand Memo", value: 3.8049955e-4 },
                { name: "中兴 G717C", value: 3.863087e-4 },
                { name: "中兴 DM", value: 4.3278193e-4 },
                { name: "中兴 Axon M", value: 4.5601855e-4 },
                { name: "中兴 青漾3", value: 4.8215975e-4 },
                { name: "中兴 星星1号", value: 5.925337e-4 },
                { name: "中兴 S158", value: 5.983428e-4 },
                { name: "中兴 9180", value: 6.1867485e-4 },
                { name: "中兴 远航Plus", value: 6.3029316e-4 },
                { name: "中兴 Q505T", value: 6.3029316e-4 },
                { name: "中兴 Grand Memo 2", value: 6.331977e-4 },
                { name: "中兴 S36", value: 6.767664e-4 },
                { name: "中兴 威武3C", value: 8.0456777e-4 },
                { name: "中兴 Q802T", value: 8.219952e-4 },
                { name: "中兴 醉享", value: 8.8299136e-4 },
                { name: "中兴 Blade S6", value: 8.975142e-4 },
                { name: "中兴 天机7s", value: 0.0010078881 },
                { name: "中兴 威武3", value: 0.0011240712 },
                { name: "中兴 Blade V8", value: 0.0012228268 },
                { name: "中兴 Q302C", value: 0.0013012504 },
                { name: "中兴 V5 MAX", value: 0.001324487 },
                { name: "中兴 V5S", value: 0.0014377655 },
                { name: "中兴 星星2号活力版", value: 0.0015219982 },
                { name: "中兴 Blade A3", value: 0.0016149447 },
                { name: "中兴 G718C", value: 0.001667227 },
                { name: "中兴 Grand S 2", value: 0.0017427461 },
                { name: "中兴 Q519T", value: 0.0017717918 },
                { name: "中兴 星星2号", value: 0.0022742837 },
                { name: "中兴 小鲜2", value: 0.0026634969 },
                { name: "中兴 Blade A2S", value: 0.0030178553 },
                { name: "中兴 天机7 Max", value: 0.0037672361 },
                { name: "中兴 小鲜3", value: 0.0063435957 },
                { name: "中兴 Axon天机 Max", value: 0.0064336373 },
                { name: "中兴 Blade A1", value: 0.006628244 },
                { name: "中兴 Blade A2", value: 0.0067037633 },
                { name: "中兴 远航3", value: 0.006787996 },
                { name: "中兴 BA602", value: 0.006819946 },
                { name: "中兴 Axon天机", value: 0.006936129 },
                { name: "中兴 小鲜5", value: 0.0077087465 },
                { name: "中兴 V7 Max", value: 0.008257711 },
                { name: "中兴 远航4", value: 0.008632402 },
                { name: "中兴 AxonMini", value: 0.009030329 },
                { name: "中兴 Blade A2 Plus", value: 0.009134894 },
                { name: "中兴 小鲜4", value: 0.0108689265 },
                { name: "中兴 BA603", value: 0.010953159 },
                { name: "中兴 A910", value: 0.01221665 },
                { name: "中兴 BA520", value: 0.012327024 },
                { name: "中兴 远航4s", value: 0.012483871 },
                { name: "中兴 AXON天机7", value: 0.012968935 },
                { name: "中兴 Blade A601", value: 0.0145780705 },
                { name: "中兴 BA510", value: 0.018208792 }
            ]
        },
        {
            name: "锤子科技",
            value: 0.22652794,
            children: [
                { name: "锤子科技 坚果手机文艺青年版", value: 0.005167242 },
                { name: "锤子科技 坚果手机", value: 0.014183048 },
                { name: "锤子科技 坚果Pro", value: 0.047158707 },
                { name: "锤子科技 坚果Pro 2", value: 0.0730472 },
                { name: "锤子科技 坚果Pro(OD103)", value: 0.086971745 }
            ]
        },
        {
            name: "天宏时代",
            value: 0.22625782,
            children: [
                { name: "天宏时代 CYMI-M3", value: 2.9045768e-6 },
                { name: "天宏时代 H999-M1", value: 5.8091537e-6 },
                { name: "天宏时代 H999-M3", value: 5.8091537e-6 },
                { name: "天宏时代 CYM1-1", value: 5.8091537e-6 },
                { name: "天宏时代 CYM1-X1", value: 8.7137305e-6 },
                { name: "天宏时代 CYM1-A", value: 8.7137305e-6 },
                { name: "天宏时代 H777", value: 8.7137305e-6 },
                { name: "天宏时代 H777-S1", value: 1.1618307e-5 },
                { name: "天宏时代 CYM1-T", value: 1.1618307e-5 },
                { name: "天宏时代 H999", value: 1.4522884e-5 },
                { name: "天宏时代 CYM1-C3", value: 2.3236615e-5 },
                { name: "天宏时代 H888", value: 2.3236615e-5 },
                { name: "天宏时代 H555", value: 2.6141191e-5 },
                { name: "天宏时代 CYM1-C2", value: 2.9045768e-5 },
                { name: "天宏时代 CYM1-C1", value: 4.9377806e-5 },
                { name: "天宏时代 CYM1", value: 3.0788514e-4 },
                { name: "天宏时代 R7", value: 0.22571465 }
            ]
        },
        {
            name: "一加",
            value: 0.20747682,
            children: [
                { name: "一加 手机1", value: 4.3568652e-5 },
                { name: "一加 手机X", value: 0.0024746994 },
                { name: "一加 Two", value: 0.0061518936 },
                { name: "一加 3T", value: 0.049688596 },
                { name: "一加 5T", value: 0.071522295 },
                { name: "一加 手机5", value: 0.07759577 }
            ]
        },
        {
            name: "努比亚",
            value: 0.16455589,
            children: [
                { name: "努比亚 Z7", value: 1.1618307e-4 },
                { name: "努比亚 Z5 Mini", value: 1.3361053e-4 },
                { name: "努比亚 Z5", value: 1.4522884e-4 },
                { name: "努比亚 Z5S", value: 4.124499e-4 },
                { name: "努比亚 Z5S Mini", value: 7.261442e-4 },
                { name: "努比亚 Z7 Max", value: 0.0025269818 },
                { name: "努比亚 Z7 Mini", value: 0.0029132904 },
                { name: "努比亚 Z17 Mini S", value: 0.0032298893 },
                { name: "努比亚 Z9 Max", value: 0.0049232575 },
                { name: "努比亚 My 布拉格", value: 0.0052601886 },
                { name: "努比亚 Z9 mini", value: 0.006732809 },
                { name: "努比亚 Z17 S", value: 0.006950652 },
                { name: "努比亚 M2青春版", value: 0.009224935 },
                { name: "努比亚 Z11 Max", value: 0.011612498 },
                { name: "努比亚 Z11 mini", value: 0.01918473 },
                { name: "努比亚 Z11 Mini S", value: 0.025624176 },
                { name: "努比亚 Z17", value: 0.03109059 },
                { name: "努比亚 Z17 Mini", value: 0.033748277 }
            ]
        },
        {
            name: "LG",
            value: 0.15695752,
            children: [
                { name: "LG X180G", value: 2.9045768e-6 },
                { name: "LG H222", value: 2.9045768e-6 },
                { name: "LG K130", value: 2.9045768e-6 },
                { name: "LG P940", value: 2.9045768e-6 },
                { name: "LG  AKA", value: 2.9045768e-6 },
                { name: "LG Volt 2", value: 2.9045768e-6 },
                { name: "LG X165G", value: 2.9045768e-6 },
                { name: "LG Optimus L5", value: 2.9045768e-6 },
                { name: "LG MS770", value: 2.9045768e-6 },
                { name: "LG MS330", value: 2.9045768e-6 },
                { name: "LG  G2", value: 2.9045768e-6 },
                { name: "LG G2 Lite", value: 2.9045768e-6 },
                { name: "LG H525", value: 2.9045768e-6 },
                { name: "LG X330", value: 2.9045768e-6 },
                { name: "LG H736", value: 2.9045768e-6 },
                { name: "LG D337", value: 2.9045768e-6 },
                { name: "LG Realm", value: 2.9045768e-6 },
                { name: "LG Stylus", value: 2.9045768e-6 },
                { name: "LG Optimus L7 II", value: 2.9045768e-6 },
                { name: "LG H440", value: 2.9045768e-6 },
                { name: "LG Optimus Pro", value: 2.9045768e-6 },
                { name: "LG Zero", value: 2.9045768e-6 },
                { name: "LG L70", value: 5.8091537e-6 },
                { name: "LG P990", value: 5.8091537e-6 },
                { name: "LG E900", value: 5.8091537e-6 },
                { name: "LG Optimus Vu", value: 5.8091537e-6 },
                { name: "LG  G4", value: 5.8091537e-6 },
                { name: "LG F560K", value: 8.7137305e-6 },
                { name: "LG  G3 Beat", value: 8.7137305e-6 },
                { name: "LG Spirit", value: 8.7137305e-6 },
                { name: "LG G4c", value: 8.7137305e-6 },
                { name: "LG Stylo2Plus", value: 8.7137305e-6 },
                { name: "LG Leon MS345", value: 8.7137305e-6 },
                { name: "LG X210", value: 8.7137305e-6 },
                { name: "LG G Pro Lite Dual", value: 8.7137305e-6 },
                { name: "LG G Stylo", value: 1.1618307e-5 },
                { name: "LG H440N", value: 1.1618307e-5 },
                { name: "LG Optimus LTE II", value: 1.1618307e-5 },
                { name: "LG G Pad F 8.0", value: 1.1618307e-5 },
                { name: "LG  V10", value: 1.1618307e-5 },
                { name: "LG Optimus LTE 3", value: 1.4522884e-5 },
                { name: "LG TV", value: 1.7427461e-5 },
                { name: "LG G Tablet 10.1", value: 1.7427461e-5 },
                { name: "LG H735", value: 1.7427461e-5 },
                { name: "LG Optimus L9", value: 1.7427461e-5 },
                { name: "LG P705", value: 1.7427461e-5 },
                { name: "LG P970", value: 1.7427461e-5 },
                { name: "LG Optimus GK", value: 1.7427461e-5 },
                { name: "LG  G3", value: 2.0332038e-5 },
                { name: "LG P880", value: 2.0332038e-5 },
                { name: "LG L Bello", value: 2.0332038e-5 },
                { name: "LG L80", value: 2.0332038e-5 },
                { name: "LG Leon", value: 2.3236615e-5 },
                { name: "LG Magna", value: 2.3236615e-5 },
                { name: "LG G4 Stylus", value: 2.6141191e-5 },
                { name: "LG G3 Beat", value: 2.6141191e-5 },
                { name: "LG G stylo", value: 3.1950345e-5 },
                { name: "LG MS210", value: 3.1950345e-5 },
                { name: "LG G3 A", value: 3.4854922e-5 },
                { name: "LG G2 Mini", value: 4.3568652e-5 },
                { name: "LG XStyle", value: 5.2282383e-5 },
                { name: "LG G Tablet 7.0", value: 5.2282383e-5 },
                { name: "LG G Flex 2", value: 5.2282383e-5 },
                { name: "LG XScreen", value: 5.518696e-5 },
                { name: "LG Optimus LTE 2", value: 5.8091537e-5 },
                { name: "LG Gx", value: 6.390069e-5 },
                { name: "LG G3 S", value: 6.9709844e-5 },
                { name: "LG F490L", value: 7.8423574e-5 },
                { name: "LG D801", value: 8.7137305e-5 },
                { name: "LG VS980", value: 9.004188e-5 },
                { name: "LG XCam", value: 9.004188e-5 },
                { name: "LG K20 Plus", value: 9.294646e-5 },
                { name: "LG G3 Stylus", value: 9.875561e-5 },
                { name: "LG Stylus2", value: 1.132785e-4 },
                { name: "LG Optimus G", value: 1.132785e-4 },
                { name: "LG Optimus LTE", value: 1.7427461e-4 },
                { name: "LG Optimus Vu 2", value: 1.9170207e-4 },
                { name: "LG L90", value: 2.0332038e-4 },
                { name: "LG G Tablet 8.3", value: 2.6722107e-4 },
                { name: "LG G Flex", value: 2.6722107e-4 },
                { name: "LG L22", value: 2.9626684e-4 },
                { name: "LG G3 Cat.6", value: 3.2821717e-4 },
                { name: "LG G4 Pro", value: 3.4274007e-4 },
                { name: "LG AKA", value: 3.97927e-4 },
                { name: "LG Stylus2 Plus", value: 5.5186957e-4 },
                { name: "LG Optimus G Pro", value: 6.1286567e-4 },
                { name: "LG XPower", value: 7.2904874e-4 },
                { name: "LG Nexus 5X", value: 8.0456777e-4 },
                { name: "LG G5 SE", value: 8.132815e-4 },
                { name: "LG F160", value: 0.0011647353 },
                { name: "LG Optimus G Pro 2", value: 0.0011763535 },
                { name: "LG  E960", value: 0.0011995902 },
                { name: "LG V10", value: 0.002820344 },
                { name: "LG V20", value: 0.0043597696 },
                { name: "LG  Optimus Vu", value: 0.13840888 }
            ]
        },
        {
            name: "小辣椒",
            value: 0.12508269,
            children: [
                { name: "小辣椒 9", value: 0.019176016 },
                { name: "小辣椒 3", value: 0.10590668 }
            ]
        },
        {
            name: "360",
            value: 0.10441082,
            children: [
                { name: "360  手机f4", value: 1.1618307e-5 },
                { name: "360 F4s", value: 0.007418289 },
                { name: "360 F5", value: 0.0076709874 },
                { name: "360 N6 Lite", value: 0.01489467 },
                { name: "360 N6", value: 0.018519582 },
                { name: "360  手机N4S", value: 0.024383921 },
                { name: "360 N6 Pro", value: 0.031511754 }
            ]
        },
        {
            name: "美图",
            value: 0.102917865,
            children: [
                { name: "美图 1", value: 1.7427461e-5 },
                { name: "美图 T8s", value: 1.3651511e-4 },
                { name: "美图 MK260", value: 1.626563e-4 },
                { name: "美图 M4s", value: 0.0020854862 },
                { name: "美图 V4s", value: 0.0022975202 },
                { name: "美图 V4", value: 0.004687987 },
                { name: "美图 M6s", value: 0.032223374 },
                { name: "美图 T8", value: 0.0613069 }
            ]
        },
        {
            name: "HTC",
            value: 0.102647744,
            children: [
                { name: "HTC  Desire 820 Mini", value: 2.9045768e-6 },
                { name: "HTC FLYER P510", value: 2.9045768e-6 },
                { name: "HTC  Butterfly S", value: 2.9045768e-6 },
                { name: "HTC G12", value: 2.9045768e-6 },
                { name: "HTC Desire 626s", value: 2.9045768e-6 },
                { name: "HTC  Desire 820", value: 2.9045768e-6 },
                { name: "HTC A310e", value: 2.9045768e-6 },
                { name: "HTC Desire 601", value: 2.9045768e-6 },
                { name: "HTC Desire HD", value: 2.9045768e-6 },
                { name: "HTC Desire HD A9191", value: 2.9045768e-6 },
                { name: "HTC Desire 526", value: 5.8091537e-6 },
                { name: "HTC  One", value: 5.8091537e-6 },
                { name: "HTC 微客", value: 5.8091537e-6 },
                { name: "HTC Desire 600", value: 8.7137305e-6 },
                { name: "HTC One M8 mini", value: 8.7137305e-6 },
                { name: "HTC One SV", value: 8.7137305e-6 },
                { name: "HTC  One E8", value: 8.7137305e-6 },
                { name: "HTC 603e", value: 8.7137305e-6 },
                { name: "HTC  One M8", value: 1.1618307e-5 },
                { name: "HTC One mini 2", value: 1.1618307e-5 },
                { name: "HTC Desire 700", value: 1.1618307e-5 },
                { name: "HTC J Butterfly", value: 1.1618307e-5 },
                { name: "HTC Desire 630", value: 1.4522884e-5 },
                { name: "HTC T328d", value: 1.4522884e-5 },
                { name: "HTC One A9s", value: 1.4522884e-5 },
                { name: "HTC Desire 5088", value: 1.4522884e-5 },
                { name: "HTC  8X", value: 1.4522884e-5 },
                { name: "HTC T328t", value: 1.7427461e-5 },
                { name: "HTC T329w", value: 1.7427461e-5 },
                {
                    name: "HTC Sensation XL with Beats Audio X315e",
                    value: 1.7427461e-5
                },
                { name: "HTC EVO 3D X515m", value: 1.7427461e-5 },
                { name: "HTC Desire 5060", value: 1.7427461e-5 },
                { name: "HTC T327t", value: 1.7427461e-5 },
                { name: "HTC Desire 626G Plus", value: 2.0332038e-5 },
                { name: "HTC T320e", value: 2.3236615e-5 },
                { name: "HTC D650", value: 2.3236615e-5 },
                { name: "HTC One X+", value: 2.3236615e-5 },
                { name: "HTC Z710t", value: 2.3236615e-5 },
                { name: "HTC Desire 610", value: 2.3236615e-5 },
                { name: "HTC One Mini", value: 2.6141191e-5 },
                { name: "HTC 野火S", value: 2.9045768e-5 },
                { name: "HTC Desire V", value: 2.9045768e-5 },
                {
                    name: "HTC Sensation XE with Beats Audio Z715e",
                    value: 2.9045768e-5
                },
                { name: "HTC Desire 516", value: 3.1950345e-5 },
                { name: "HTC Desire 709D", value: 3.77595e-5 },
                { name: "HTC One XC", value: 3.77595e-5 },
                { name: "HTC D516w", value: 3.77595e-5 },
                { name: "HTC S710e", value: 4.0664076e-5 },
                { name: "HTC S710D", value: 4.3568652e-5 },
                { name: "HTC  One max", value: 4.647323e-5 },
                { name: "HTC Desire 310", value: 5.2282383e-5 },
                { name: "HTC Desire 619D", value: 5.8091537e-5 },
                { name: "HTC Desire D516t", value: 5.8091537e-5 },
                { name: "HTC One J", value: 6.0996113e-5 },
                { name: "HTC Desire S", value: 6.680527e-5 },
                { name: "HTC Sensation Z710E", value: 6.680527e-5 },
                { name: "HTC G9", value: 6.680527e-5 },
                { name: "HTC Desire 510", value: 6.9709844e-5 },
                { name: "HTC Desire 609d", value: 7.261442e-5 },
                { name: "HTC Desire 7088", value: 7.261442e-5 },
                { name: "HTC Desire D816h", value: 7.5519e-5 },
                { name: "HTC Desire 828", value: 8.423273e-5 },
                { name: "HTC Desire 820G+", value: 8.7137305e-5 },
                { name: "HTC 608t", value: 8.7137305e-5 },
                { name: "HTC Desire 628", value: 9.004188e-5 },
                { name: "HTC One S", value: 9.294646e-5 },
                { name: "HTC T329d", value: 9.5851035e-5 },
                { name: "HTC T528w", value: 9.875561e-5 },
                { name: "HTC Desire 816x", value: 9.875561e-5 },
                { name: "HTC 606w", value: 1.04564766e-4 },
                { name: "HTC T528t", value: 1.1037392e-4 },
                { name: "HTC Desire D516d", value: 1.3070596e-4 },
                { name: "HTC D820f", value: 1.3361053e-4 },
                { name: "HTC T528d", value: 1.4813342e-4 },
                { name: "HTC Desire 616", value: 1.6556088e-4 },
                { name: "HTC Desire 10 Pro", value: 1.7717919e-4 },
                { name: "HTC One E9+", value: 1.7717919e-4 },
                { name: "HTC Desire 530", value: 2.0332038e-4 },
                { name: "HTC Butterfly 2", value: 2.3527072e-4 },
                { name: "HTC Desire 816g", value: 2.6141191e-4 },
                { name: "HTC M910x", value: 2.6722107e-4 },
                { name: "HTC X920e", value: 2.875531e-4 },
                { name: "HTC 620G", value: 3.02076e-4 },
                { name: "HTC Butterfly s", value: 3.369309e-4 },
                { name: "HTC One ME", value: 3.863087e-4 },
                { name: "HTC One M9e", value: 4.124499e-4 },
                { name: "HTC T329t", value: 4.53114e-4 },
                { name: "HTC Butterfly", value: 5.5767875e-4 },
                { name: "HTC Desire 610t", value: 5.7801075e-4 },
                { name: "HTC  One A9", value: 6.361023e-4 },
                { name: "HTC Desire 526G", value: 7.5228536e-4 },
                { name: "HTC One M8 Eye", value: 8.5975474e-4 },
                { name: "HTC M8x", value: 8.858959e-4 },
                { name: "HTC Desire 830", value: 9.06228e-4 },
                { name: "HTC Desire 820 Mini", value: 9.120371e-4 },
                { name: "HTC 802w", value: 0.001022411 },
                { name: "HTC One M9", value: 0.0011182621 },
                { name: "HTC 802d", value: 0.0012954412 },
                { name: "HTC Desire 728", value: 0.0012954412 },
                { name: "HTC G2", value: 0.001379674 },
                { name: "HTC One max", value: 0.0014174335 },
                { name: "HTC One M9+", value: 0.0014290517 },
                { name: "HTC Desire 626", value: 0.0016091355 },
                { name: "HTC U11+", value: 0.0016294676 },
                { name: "HTC One X9", value: 0.0020477267 },
                { name: "HTC One A9", value: 0.0020825816 },
                { name: "HTC Desire 826", value: 0.0021116273 },
                { name: "HTC One E9", value: 0.0022336196 },
                { name: "HTC G4", value: 0.0031456565 },
                { name: "HTC G6", value: 0.0032066528 },
                { name: "HTC E1", value: 0.0032066528 },
                { name: "HTC U Ultra", value: 0.0036103888 },
                { name: "HTC One E8", value: 0.0040431707 },
                { name: "HTC One M8", value: 0.004705414 },
                { name: "HTC G3", value: 0.005213715 },
                { name: "HTC 10", value: 0.008283853 },
                { name: "HTC Desire 816", value: 0.008725349 },
                { name: "HTC Desire 820", value: 0.0097158095 },
                { name: "HTC One", value: 0.015443634 }
            ]
        },
        {
            name: "语信",
            value: 0.098433204,
            children: [
                { name: "语信 小辣椒Q1", value: 2.9045768e-6 },
                { name: "语信 小辣椒 LA-I", value: 2.9045768e-6 },
                { name: "语信 L88", value: 8.7137305e-6 },
                { name: "语信 小辣椒 3", value: 8.7137305e-6 },
                { name: "语信 小辣椒 M2", value: 8.7137305e-6 },
                { name: "语信 T50", value: 1.4522884e-5 },
                { name: "语信 红辣椒醉视", value: 1.7427461e-5 },
                { name: "语信 小辣椒3S", value: 1.7427461e-5 },
                { name: "语信 小辣椒 M3", value: 2.0332038e-5 },
                { name: "语信 小辣椒4G mini", value: 5.518696e-5 },
                { name: "语信 小辣椒 5", value: 1.9170207e-4 },
                { name: "语信 小辣椒 4", value: 2.0332038e-4 },
                { name: "语信 红辣椒国民大圣", value: 2.0622496e-4 },
                { name: "语信 小辣椒X6", value: 2.3527072e-4 },
                { name: "语信 红辣椒Note3 Pro", value: 3.0498055e-4 },
                { name: "语信 小辣椒S2", value: 3.1950345e-4 },
                { name: "语信 红辣椒NX Plus", value: 3.1950345e-4 },
                { name: "语信 小辣椒S3", value: 4.2406822e-4 },
                { name: "语信 红辣椒国民比价王", value: 4.2697278e-4 },
                { name: "语信 小辣椒S6", value: 4.385911e-4 },
                { name: "语信 小辣椒 6", value: 5.751062e-4 },
                { name: "语信 小辣椒X6 Pro", value: 7.726174e-4 },
                { name: "语信 红辣椒T6", value: 9.294646e-4 },
                { name: "语信 小辣椒X5", value: 0.0011618307 },
                { name: "语信 红辣椒XM", value: 0.0012228268 },
                { name: "语信 小辣椒S35", value: 0.0012257313 },
                { name: "语信 红辣椒Note", value: 0.0013128687 },
                { name: "语信 小辣椒S33", value: 0.0014551929 },
                { name: "语信 A9", value: 0.0014668113 },
                { name: "语信 小辣椒S1", value: 0.0015219982 },
                { name: "语信 小辣椒S7", value: 0.001702082 },
                { name: "语信 红辣椒 X1", value: 0.0019576848 },
                { name: "语信 A7", value: 0.0019751121 },
                { name: "语信 小辣椒X4", value: 0.0020564403 },
                { name: "语信 红辣椒NX", value: 0.002416608 },
                { name: "语信 小辣椒S5", value: 0.0030236645 },
                { name: "语信 红辣椒Note3", value: 0.003026569 },
                { name: "语信 小辣椒S31", value: 0.0030643286 },
                { name: "语信 红辣椒经典Plus", value: 0.0031369429 },
                { name: "语信 红辣椒国民猴赛雷", value: 0.004748983 },
                { name: "语信 红辣椒XM Pro", value: 0.004897116 },
                { name: "语信 红辣椒国民全网通", value: 0.005112055 },
                { name: "语信 小辣椒X7", value: 0.0060095694 },
                { name: "语信 小辣椒S1 Pro", value: 0.006291313 },
                { name: "语信 红辣椒", value: 0.0341433 }
            ]
        },
        {
            name: "海信",
            value: 0.09175848,
            children: [
                { name: "海信 HS-U978", value: 2.9045768e-6 },
                { name: "海信 LED50XT900X3DU", value: 2.9045768e-6 },
                { name: "海信 EG98", value: 2.9045768e-6 },
                { name: "海信 U929", value: 2.9045768e-6 },
                { name: "海信 T968", value: 5.8091537e-6 },
                { name: "海信 EG950", value: 5.8091537e-6 },
                { name: "海信 E956", value: 5.8091537e-6 },
                { name: "海信 T929", value: 5.8091537e-6 },
                { name: "海信 HS-E926", value: 5.8091537e-6 },
                { name: "海信 T966", value: 5.8091537e-6 },
                { name: "海信 T958", value: 5.8091537e-6 },
                { name: "海信 U936", value: 5.8091537e-6 },
                { name: "海信 U988", value: 5.8091537e-6 },
                { name: "海信 T950", value: 8.7137305e-6 },
                { name: "海信 U960Q", value: 8.7137305e-6 },
                { name: "海信 T81", value: 8.7137305e-6 },
                { name: "海信 T968S", value: 8.7137305e-6 },
                { name: "海信 U688", value: 8.7137305e-6 },
                { name: "海信 U970", value: 1.4522884e-5 },
                { name: "海信 I631M", value: 1.4522884e-5 },
                { name: "海信 T96", value: 1.4522884e-5 },
                { name: "海信 E956Q", value: 1.4522884e-5 },
                { name: "海信 T978", value: 1.4522884e-5 },
                { name: "海信 E912S", value: 1.4522884e-5 },
                { name: "海信 T980", value: 1.7427461e-5 },
                { name: "海信 T959S1", value: 1.7427461e-5 },
                { name: "海信 X6t", value: 1.7427461e-5 },
                { name: "海信 T970", value: 1.7427461e-5 },
                { name: "海信 EG958", value: 2.0332038e-5 },
                { name: "海信 E917", value: 2.0332038e-5 },
                { name: "海信 EG981", value: 2.3236615e-5 },
                { name: "海信 U966", value: 2.3236615e-5 },
                { name: "海信 T967", value: 2.3236615e-5 },
                { name: "海信 U971", value: 2.3236615e-5 },
                { name: "海信 I630U", value: 2.6141191e-5 },
                { name: "海信 EG939", value: 2.6141191e-5 },
                { name: "海信 E936", value: 2.9045768e-5 },
                { name: "海信 E820", value: 2.9045768e-5 },
                { name: "海信 EG936D", value: 4.0664076e-5 },
                { name: "海信 VIDAA TV", value: 5.8091537e-5 },
                { name: "海信 E968", value: 6.390069e-5 },
                { name: "海信 EG929", value: 6.390069e-5 },
                { name: "海信 E260-T", value: 6.680527e-5 },
                { name: "海信 I630M", value: 6.9709844e-5 },
                { name: "海信 EG980", value: 6.9709844e-5 },
                { name: "海信 E625T", value: 8.423273e-5 },
                { name: "海信 E100T", value: 8.7137305e-5 },
                { name: "海信 小海豚2", value: 9.004188e-5 },
                { name: "海信 I639M", value: 9.004188e-5 },
                { name: "海信 EG966", value: 9.004188e-5 },
                { name: "海信 X68T", value: 9.294646e-5 },
                { name: "海信 E613M", value: 1.0746934e-4 },
                { name: "海信 F20M", value: 1.2199223e-4 },
                { name: "海信 E75M", value: 1.248968e-4 },
                { name: "海信 E600M", value: 1.248968e-4 },
                { name: "海信 I639T", value: 1.248968e-4 },
                { name: "海信 E601M", value: 1.2780138e-4 },
                { name: "海信 I632M", value: 1.3651511e-4 },
                { name: "海信 EG970", value: 1.3651511e-4 },
                { name: "海信 U980", value: 1.4522884e-4 },
                { name: "海信 U939", value: 1.4522884e-4 },
                { name: "海信 I630T", value: 1.4522884e-4 },
                { name: "海信 EG971", value: 1.51038e-4 },
                { name: "海信 E602M", value: 1.626563e-4 },
                { name: "海信 E620M", value: 1.7427461e-4 },
                { name: "海信 M10-M", value: 1.9170207e-4 },
                { name: "海信 E622M", value: 1.9460665e-4 },
                { name: "海信 E621T", value: 1.9751122e-4 },
                { name: "海信 F21T", value: 1.9751122e-4 },
                { name: "海信 E602T", value: 2.0622496e-4 },
                { name: "海信 EG978", value: 2.1784326e-4 },
                { name: "海信 E910", value: 2.2365242e-4 },
                { name: "海信 T85", value: 2.26557e-4 },
                { name: "海信 I632T", value: 2.26557e-4 },
                { name: "海信 小章鱼", value: 2.4107988e-4 },
                { name: "海信 I635T", value: 2.5269817e-4 },
                { name: "海信 X8T", value: 2.875531e-4 },
                { name: "海信 E50-T", value: 3.02076e-4 },
                { name: "海信 C1T", value: 3.107897e-4 },
                { name: "海信 C1M", value: 5.5477413e-4 },
                { name: "海信 G610M", value: 7.3195336e-4 },
                { name: "海信 M20-M", value: 7.4647623e-4 },
                { name: "海信 E75T", value: 7.8133115e-4 },
                { name: "海信 E7 Plus", value: 8.684684e-4 },
                { name: "海信 小岛", value: 9.5560576e-4 },
                { name: "海信 E51-M", value: 0.0012373497 },
                { name: "海信 K8", value: 0.001248968 },
                { name: "海信 E70-T", value: 0.0015829944 },
                { name: "海信 F3 PRO", value: 0.0015975172 },
                { name: "海信 X8", value: 0.0016643225 },
                { name: "海信 E81", value: 0.0017049866 },
                { name: "海信 F23M", value: 0.0020157762 },
                { name: "海信 F26", value: 0.0021145318 },
                { name: "海信 D2-M", value: 0.0021232455 },
                { name: "海信 金刚II", value: 0.0022684745 },
                { name: "海信 F30", value: 0.0023033293 },
                { name: "海信 E76mini", value: 0.0024659857 },
                { name: "海信 金盾", value: 0.0027738707 },
                { name: "海信 哈利", value: 0.0029830004 },
                { name: "海信 F20T", value: 0.0037439994 },
                { name: "海信 F23", value: 0.008176384 },
                { name: "海信 M20-T", value: 0.010290915 },
                { name: "海信 M30", value: 0.013947777 },
                { name: "海信 F22", value: 0.01619592 }
            ]
        },
        {
            name: "MOTO",
            value: 0.083971314,
            children: [
                { name: "MOTO CLIQ", value: 2.9045768e-6 },
                { name: "MOTO XT890", value: 2.9045768e-6 },
                { name: "MOTO  RAZR V锋芒", value: 2.9045768e-6 },
                { name: "MOTO XT800+", value: 2.9045768e-6 },
                { name: "MOTO Milestone 2", value: 2.9045768e-6 },
                { name: "MOTO MB886", value: 2.9045768e-6 },
                { name: "MOTO DROID RAZR", value: 2.9045768e-6 },
                { name: "MOTO MB611", value: 2.9045768e-6 },
                { name: "MOTO DROID X", value: 2.9045768e-6 },
                { name: "MOTO  锋丽", value: 2.9045768e-6 },
                { name: "MOTO Atrix 4G", value: 2.9045768e-6 },
                { name: "MOTO  Z1", value: 5.8091537e-6 },
                { name: "MOTO Moto X极", value: 5.8091537e-6 },
                { name: "MOTO ME860", value: 5.8091537e-6 },
                { name: "MOTO DROID4", value: 5.8091537e-6 },
                { name: "MOTO Moto E", value: 5.8091537e-6 },
                { name: "MOTO Defy+", value: 5.8091537e-6 },
                { name: "MOTO XT531", value: 5.8091537e-6 },
                { name: "MOTO Moto G 2014", value: 5.8091537e-6 },
                { name: "MOTO MB855", value: 5.8091537e-6 },
                { name: "MOTO DEFY", value: 8.7137305e-6 },
                { name: "MOTO MT870", value: 8.7137305e-6 },
                { name: "MOTO G4 Plus", value: 8.7137305e-6 },
                { name: "MOTO Defy", value: 8.7137305e-6 },
                { name: "MOTO XT1069", value: 8.7137305e-6 },
                { name: "MOTO MT917", value: 8.7137305e-6 },
                { name: "MOTO DROID RAZR M", value: 8.7137305e-6 },
                { name: "MOTO MB865", value: 8.7137305e-6 },
                { name: "MOTO  新锋丽i", value: 1.1618307e-5 },
                { name: "MOTO DROID RAZR HD", value: 1.1618307e-5 },
                { name: "MOTO DEFY XT", value: 1.1618307e-5 },
                { name: "MOTO 锋丽", value: 1.1618307e-5 },
                { name: "MOTO A955", value: 1.1618307e-5 },
                { name: "MOTO Droid X", value: 1.4522884e-5 },
                { name: "MOTO  DEFY XT", value: 1.7427461e-5 },
                { name: "MOTO ME865", value: 2.0332038e-5 },
                { name: "MOTO Droid Mini", value: 2.0332038e-5 },
                { name: "MOTO XOOM", value: 2.0332038e-5 },
                { name: "MOTO XT882", value: 2.3236615e-5 },
                { name: "MOTO 摩托罗拉新锋丽i", value: 2.3236615e-5 },
                { name: "MOTO Moto G2", value: 3.77595e-5 },
                { name: "MOTO Moto X 3", value: 3.77595e-5 },
                { name: "MOTO XT928", value: 4.0664076e-5 },
                { name: "MOTO XT910", value: 4.3568652e-5 },
                { name: "MOTO E3 Power", value: 4.647323e-5 },
                { name: "MOTO E18", value: 4.647323e-5 },
                { name: "MOTO XT1526", value: 4.647323e-5 },
                { name: "MOTO Moto E2", value: 4.9377806e-5 },
                { name: "MOTO Droid Ultra", value: 6.390069e-5 },
                { name: "MOTO  G4 Plus", value: 6.680527e-5 },
                { name: "MOTO Moto X Play", value: 6.9709844e-5 },
                { name: "MOTO MotoM", value: 9.294646e-5 },
                { name: "MOTO  Z2 Pro", value: 9.5851035e-5 },
                { name: "MOTO Atrix HD", value: 9.875561e-5 },
                { name: "MOTO Moto G3", value: 1.04564766e-4 },
                { name: "MOTO Moto X4", value: 1.132785e-4 },
                { name: "MOTO XT1585", value: 2.1203411e-4 },
                { name: "MOTO moto E4 Plus", value: 2.1493869e-4 },
                { name: "MOTO Moto Turbo", value: 2.3236615e-4 },
                { name: "MOTO moto z 2018", value: 2.7303022e-4 },
                { name: "MOTO Moto G4 PLAY", value: 2.8464853e-4 },
                { name: "MOTO Moto X", value: 3.6016753e-4 },
                { name: "MOTO Moto Z", value: 4.5892314e-4 },
                { name: "MOTO G5 Plus", value: 5.0830096e-4 },
                { name: "MOTO Moto X Pro", value: 5.2282383e-4 },
                { name: "MOTO Moto G", value: 9.788424e-4 },
                { name: "MOTO  G LTE", value: 0.0011589262 },
                { name: "MOTO  X 极", value: 0.0012315406 },
                { name: "MOTO moto 青柚", value: 0.0015132845 },
                { name: "MOTO Nexus 6", value: 0.0019024977 },
                { name: "MOTO  X Style", value: 0.0019663984 },
                { name: "MOTO  X", value: 0.0027070655 },
                { name: "MOTO  M", value: 0.0044149566 },
                { name: "MOTO Edge", value: 0.0051846695 },
                { name: "MOTO Moto Z Play", value: 0.0052805208 },
                { name: "MOTO  Z", value: 0.0074357167 },
                { name: "MOTO Z2 Pro", value: 0.018934935 },
                { name: "MOTO Z2", value: 0.02678891 }
            ]
        },
        {
            name: "索尼",
            value: 0.06825465,
            children: [
                { name: "索尼 Xperia ray", value: 2.9045768e-6 },
                { name: "索尼 Xperia active", value: 2.9045768e-6 },
                { name: "索尼 E15i", value: 2.9045768e-6 },
                { name: "索尼 Xperia mini", value: 2.9045768e-6 },
                { name: "索尼 Xperia T", value: 2.9045768e-6 },
                { name: "索尼 Xperia sola", value: 2.9045768e-6 },
                { name: "索尼 C2005", value: 2.9045768e-6 },
                { name: "索尼 索尼爱立信WT18i", value: 2.9045768e-6 },
                { name: "索尼 D2306", value: 2.9045768e-6 },
                { name: "索尼 Xperia UL", value: 2.9045768e-6 },
                { name: "索尼 Xperia Neo", value: 5.8091537e-6 },
                { name: "索尼 D2203", value: 5.8091537e-6 },
                { name: "索尼 E2104", value: 5.8091537e-6 },
                { name: "索尼 Xperia M5", value: 8.7137305e-6 },
                { name: "索尼 D2403", value: 8.7137305e-6 },
                { name: "索尼 Xperia VC", value: 8.7137305e-6 },
                { name: "索尼 xperia m2", value: 8.7137305e-6 },
                { name: "索尼 Xperia L", value: 1.1618307e-5 },
                { name: "索尼 D5103", value: 1.1618307e-5 },
                { name: "索尼 Xperia Z1s", value: 1.1618307e-5 },
                { name: "索尼 Xperia V", value: 1.1618307e-5 },
                { name: "索尼 Xperia neo L", value: 1.4522884e-5 },
                { name: "索尼 Xperia J", value: 1.7427461e-5 },
                { name: "索尼 Xperia C5", value: 1.7427461e-5 },
                { name: "索尼 索尼Xperia T3", value: 1.7427461e-5 },
                { name: "索尼 Tablet S", value: 2.3236615e-5 },
                { name: "索尼 Xperia A", value: 2.3236615e-5 },
                { name: "索尼 Xperia acro S", value: 2.9045768e-5 },
                { name: "索尼 Xperia ion", value: 3.4854922e-5 },
                { name: "索尼 S39h", value: 3.4854922e-5 },
                { name: "索尼 Xperia SP", value: 3.4854922e-5 },
                { name: "索尼 Xperia P", value: 3.77595e-5 },
                { name: "索尼 Xperia Z4", value: 3.77595e-5 },
                { name: "索尼 Xperia M2", value: 4.9377806e-5 },
                { name: "索尼 Xperia E4", value: 5.518696e-5 },
                { name: "索尼 Xperia arc S", value: 5.8091537e-5 },
                { name: "索尼 Xperia Z4 Compact", value: 6.9709844e-5 },
                { name: "索尼 E5353", value: 8.423273e-5 },
                { name: "索尼 索尼Xperia SP", value: 1.3070596e-4 },
                { name: "索尼 Xperia T2 Ultra", value: 1.3941969e-4 },
                { name: "索尼 Xperia C3", value: 1.4232426e-4 },
                { name: "索尼 Xperia Tablet Z3", value: 1.5394257e-4 },
                { name: "索尼 Xperia C4", value: 1.5684715e-4 },
                { name: "索尼 Xperia ZR", value: 1.7717919e-4 },
                { name: "索尼 Xperia M4 Aqua", value: 1.9170207e-4 },
                { name: "索尼 Xperia TX", value: 1.9170207e-4 },
                { name: "索尼 Xperia C5 Ultra", value: 2.004158e-4 },
                { name: "索尼 Xperia C", value: 2.1493869e-4 },
                { name: "索尼 Xperia ZL", value: 2.26557e-4 },
                { name: "索尼 Xperia Tablet Z", value: 2.26557e-4 },
                { name: "索尼 Xperia S", value: 2.381753e-4 },
                { name: "索尼 XperiaXAUltra", value: 2.4107988e-4 },
                { name: "索尼 Xperia Z3 Compact", value: 2.4688902e-4 },
                { name: "索尼 索尼Xperia Z1 炫彩版", value: 2.5850732e-4 },
                { name: "索尼 Xperia Z3 mini", value: 2.6141191e-4 },
                { name: "索尼 索尼Xperia Z5 Compact", value: 3.0788514e-4 },
                { name: "索尼 Xperia Z5 Compact", value: 3.3112176e-4 },
                { name: "索尼 XperiaXA", value: 4.8506432e-4 },
                { name: "索尼 F3216", value: 5.6639244e-4 },
                { name: "索尼 Xperia Z3+ Dual", value: 6.535298e-4 },
                { name: "索尼 索尼Xperia C3", value: 8.888005e-4 },
                { name: "索尼 索尼Xperia T2 Ultra", value: 9.294646e-4 },
                { name: "索尼 索尼Xperia Z3", value: 0.0010659797 },
                { name: "索尼 Xperia Z1", value: 0.0011444032 },
                { name: "索尼 Xperia Z", value: 0.001193781 },
                { name: "索尼 XperiaX", value: 0.0012257313 },
                { name: "索尼 索尼L36h", value: 0.0012663954 },
                { name: "索尼 Xperia Z2", value: 0.0013680557 },
                { name: "索尼 Xperia Z Ultra", value: 0.0013709603 },
                { name: "索尼 索尼Xperia Z3+ Dual", value: 0.0013971014 },
                { name: "索尼 Xperia X Performance", value: 0.0019402573 },
                { name: "索尼 索尼Xperia Z1", value: 0.0020564403 },
                { name: "索尼 Xperia Z3", value: 0.0026112145 },
                { name: "索尼 索尼Xperia XZs", value: 0.0032618397 },
                { name: "索尼 Xperia XZ1", value: 0.0035581065 },
                { name: "索尼 索尼Xperia Z2", value: 0.0038747054 },
                { name: "索尼 Xperia XZ", value: 0.005091723 },
                { name: "索尼 Xperia Z5", value: 0.0064684926 },
                { name: "索尼 Xperia Z5 Premium", value: 0.0076622735 },
                { name: "索尼 索尼Xperia XZ Premium", value: 0.013369767 }
            ]
        },
        {
            name: "嘉源",
            value: 0.06816461,
            children: [
                { name: "嘉源 A3-R6", value: 8.7137305e-6 },
                { name: "嘉源 A3-R5", value: 1.1618307e-5 },
                { name: "嘉源 Q1", value: 4.5892314e-4 },
                { name: "嘉源 X3", value: 0.001248968 },
                { name: "嘉源 A1", value: 0.02326566 },
                { name: "嘉源 A3", value: 0.043170724 }
            ]
        },
        {
            name: "酷比",
            value: 0.066416055,
            children: [
                { name: "酷比 i92", value: 2.9045768e-6 },
                { name: "酷比 智青春", value: 2.9045768e-6 },
                { name: "酷比 S610t", value: 5.8091537e-6 },
                { name: "酷比 i90", value: 1.1618307e-5 },
                { name: "酷比 i96T", value: 2.0332038e-5 },
                { name: "酷比 MUSE3", value: 4.647323e-5 },
                { name: "酷比 H1S", value: 2.1203411e-4 },
                { name: "酷比 M100", value: 2.381753e-4 },
                { name: "酷比 MAX3", value: 4.1825906e-4 },
                { name: "酷比 H5", value: 8.4813643e-4 },
                { name: "酷比 H6", value: 0.0011560215 },
                { name: "酷比 MAX5", value: 0.0019054024 },
                { name: "酷比 Halo", value: 0.0021319594 },
                { name: "酷比 M7Q", value: 0.0023004247 },
                { name: "酷比 M9Plus", value: 0.0024746994 },
                { name: "酷比 S103", value: 0.0025240772 },
                { name: "酷比 S305", value: 0.0026983519 },
                { name: "酷比 H7", value: 0.0032153665 },
                { name: "酷比 S301T", value: 0.0057655848 },
                { name: "酷比 S305M", value: 0.007418289 },
                { name: "酷比 S106M", value: 0.008280949 },
                { name: "酷比 M1L", value: 0.02473828 }
            ]
        },
        {
            name: "SUGAR",
            value: 0.060882833,
            children: [
                { name: "SUGAR  时尚手机", value: 5.2282383e-5 },
                { name: "SUGAR  2", value: 8.7137305e-5 },
                { name: "SUGAR  马卡龙时尚手机", value: 2.6722107e-4 },
                { name: "SUGAR  2C", value: 3.4564463e-4 },
                { name: "SUGAR Y12", value: 7.2904874e-4 },
                { name: "SUGAR SOAP R11", value: 7.377625e-4 },
                { name: "SUGAR C11", value: 0.0010136972 },
                { name: "SUGAR F11", value: 0.0013535328 },
                { name: "SUGAR F7", value: 0.004789647 },
                { name: "SUGAR Y7", value: 0.005849818 },
                { name: "SUGAR Y9", value: 0.0070319804 },
                { name: "SUGAR F9", value: 0.03862506 }
            ]
        },
        {
            name: "百立丰",
            value: 0.060540095,
            children: [
                { name: "百立丰 T6+", value: 4.6763686e-4 },
                { name: "百立丰 T3+", value: 8.626593e-4 },
                { name: "百立丰 T5V", value: 0.0011792581 },
                { name: "百立丰 A7+", value: 0.0013709603 },
                { name: "百立丰 T2V", value: 0.0027477297 },
                { name: "百立丰 T708", value: 0.0046066586 },
                { name: "百立丰 T6V", value: 0.0052456656 },
                { name: "百立丰 T9+", value: 0.0067037633 },
                { name: "百立丰 T7+", value: 0.037355762 }
            ]
        },
        {
            name: "ADVAN",
            value: 0.055590693,
            children: [
                { name: "ADVAN T5", value: 0.0053792764 },
                { name: "ADVAN S5", value: 0.05021142 }
            ]
        },
        {
            name: "中国移动",
            value: 0.04977573,
            children: [
                { name: "中国移动 M601", value: 3.77595e-5 },
                { name: "中国移动 M701", value: 8.423273e-5 },
                { name: "中国移动 M811", value: 6.767664e-4 },
                { name: "中国移动 M812C", value: 0.0039357017 },
                { name: "中国移动 N1 max", value: 0.0058178673 },
                { name: "中国移动 A1s", value: 0.009916225 },
                { name: "中国移动 A2", value: 0.013532423 },
                { name: "中国移动 N2", value: 0.015774757 }
            ]
        },
        {
            name: "至尊宝",
            value: 0.04502675,
            children: [
                { name: "至尊宝 L81", value: 5.8091537e-6 },
                { name: "至尊宝 LT986", value: 6.9709844e-5 },
                { name: "至尊宝 L82", value: 1.1908765e-4 },
                { name: "至尊宝 LT416", value: 4.2987737e-4 },
                { name: "至尊宝 LT533", value: 7.1743043e-4 },
                { name: "至尊宝 LT989", value: 9.527012e-4 },
                { name: "至尊宝 LT988", value: 0.0014929525 },
                { name: "至尊宝 LT580", value: 0.0015742806 },
                { name: "至尊宝 LT999", value: 0.008153147 },
                { name: "至尊宝 N1", value: 0.031511754 }
            ]
        },
        {
            name: "贝尔丰",
            value: 0.04484957,
            children: [
                { name: "贝尔丰 BFA500", value: 5.8091537e-6 },
                { name: "贝尔丰 BF5200", value: 8.7137305e-6 },
                { name: "贝尔丰 BFV51", value: 1.4522884e-5 },
                { name: "贝尔丰 G10", value: 1.7427461e-5 },
                { name: "贝尔丰 V5T", value: 3.4854922e-5 },
                { name: "贝尔丰 A503", value: 2.9626684e-4 },
                { name: "贝尔丰 T15", value: 4.5601855e-4 },
                { name: "贝尔丰 T18", value: 5.373467e-4 },
                { name: "贝尔丰 T13", value: 6.1867485e-4 },
                { name: "贝尔丰 T27", value: 8.9460966e-4 },
                { name: "贝尔丰 T16", value: 0.001667227 },
                { name: "贝尔丰 T12", value: 0.001797933 },
                { name: "贝尔丰 T25", value: 0.001893784 },
                { name: "贝尔丰 K11", value: 0.0025589322 },
                { name: "贝尔丰 T19", value: 0.0027535388 },
                { name: "贝尔丰 T26", value: 0.005341517 },
                { name: "贝尔丰 T10", value: 0.009948175 },
                { name: "贝尔丰 A8", value: 0.016004218 }
            ]
        },
        {
            name: "E派",
            value: 0.036678996,
            children: [
                { name: "E派 T314803", value: 1.1618307e-5 },
                { name: "E派 T3581", value: 6.390069e-5 },
                { name: "E派 U5482", value: 1.1618307e-4 },
                { name: "E派 U5581", value: 1.5684715e-4 },
                { name: "E派 U5483", value: 0.001289632 },
                { name: "E派 F6", value: 0.01317516 },
                { name: "E派 S8", value: 0.021865653 }
            ]
        },
        {
            name: "步步高",
            value: 0.032400552,
            children: [
                { name: "步步高 H8", value: 0.0010543613 },
                { name: "步步高 H10", value: 0.0020419175 },
                { name: "步步高 H8S", value: 0.029304275 }
            ]
        },
        {
            name: "诺基亚",
            value: 0.03153499,
            children: [
                { name: "", value: 0.0 },
                { name: "诺基亚 Lumia 930", value: 2.9045768e-6 },
                { name: "诺基亚 X Plus", value: 8.7137305e-6 },
                { name: "诺基亚 N900", value: 2.9045768e-5 },
                { name: "诺基亚 A", value: 8.423273e-5 },
                { name: "诺基亚 X", value: 4.73446e-4 },
                { name: "诺基亚 XL", value: 5.315376e-4 },
                { name: "诺基亚 625", value: 6.506252e-4 },
                { name: "诺基亚 C6", value: 7.145259e-4 },
                { name: "诺基亚 6(2018)", value: 0.006058947 },
                { name: "诺基亚 X2", value: 0.02298101 }
            ]
        },
        {
            name: "夏普",
            value: 0.029992659,
            children: [
                { name: "夏普 50S1", value: 2.9045768e-6 },
                { name: "夏普 SHV31", value: 5.8091537e-6 },
                { name: "夏普 SHL25", value: 1.7427461e-5 },
                { name: "夏普 Disney mobile on docomo", value: 5.8091537e-5 },
                { name: "夏普 Aquos Crystal", value: 1.626563e-4 },
                { name: "夏普 305SH", value: 1.8008376e-4 },
                { name: "夏普 Z3", value: 0.0015481394 },
                { name: "夏普 AQUQS S2", value: 0.006863515 },
                { name: "夏普 S1", value: 0.021154033 }
            ]
        },
        {
            name: "华硕",
            value: 0.02920552,
            children: [
                { name: "华硕 A80", value: 2.9045768e-6 },
                { name: "华硕 ZenFone 3灵智", value: 2.9045768e-6 },
                { name: "华硕 Transformer Pad TF300TL", value: 2.9045768e-6 },
                { name: "华硕 PadFone Mini", value: 2.9045768e-6 },
                { name: "华硕 ZenFone 6", value: 2.9045768e-6 },
                { name: "华硕 Eee Pad Slider SL101", value: 5.8091537e-6 },
                { name: "华硕 ZenFone 2E", value: 5.8091537e-6 },
                { name: "华硕 电神5000", value: 5.8091537e-6 },
                { name: "华硕 The new PadFone Infinity", value: 1.1618307e-5 },
                { name: "华硕 Transformer Pad TF300T", value: 1.4522884e-5 },
                { name: "华硕 PadFone2", value: 2.0332038e-5 },
                { name: "华硕 T45", value: 2.3236615e-5 },
                { name: "华硕 ME172V", value: 2.3236615e-5 },
                { name: "华硕 K01N", value: 2.3236615e-5 },
                { name: "华硕 Eee Pad Transformer TF101", value: 2.9045768e-5 },
                { name: "华硕 MeMO Pad 10", value: 3.77595e-5 },
                { name: "华硕 MeMO Pad FHD 10", value: 3.77595e-5 },
                { name: "华硕 Z00RD", value: 4.3568652e-5 },
                { name: "华硕 ME371MG", value: 5.518696e-5 },
                { name: "华硕 MeMO Pad K011", value: 9.5851035e-5 },
                { name: "华硕 ME173X", value: 9.875561e-5 },
                { name: "华硕 K00S", value: 1.1037392e-4 },
                { name: "华硕 K016", value: 1.132785e-4 },
                { name: "华硕 Z002", value: 1.3070596e-4 },
                { name: "华硕 ZenFone 3 Ultra", value: 1.51038e-4 },
                { name: "华硕 Z007", value: 1.5975173e-4 },
                { name: "华硕 灵智S", value: 1.887975e-4 },
                { name: "华硕 K012", value: 1.9170207e-4 },
                { name: "华硕 ZenFone Zoom", value: 2.1784326e-4 },
                { name: "华硕 ZenFone 3尊爵版", value: 2.4688902e-4 },
                { name: "华硕 ZenFone Go TV", value: 2.4688902e-4 },
                { name: "华硕 Z00ED", value: 2.6431648e-4 },
                { name: "华硕 飞马2 Plus", value: 3.02076e-4 },
                { name: "华硕 ZenFone 3 Max", value: 3.107897e-4 },
                { name: "华硕 鹰眼3", value: 3.746904e-4 },
                { name: "华硕 ZenFone 3灵智版", value: 5.4606044e-4 },
                { name: "华硕 ZenFone Go", value: 5.5186957e-4 },
                { name: "华硕 飞马4A", value: 7.4357167e-4 },
                { name: "华硕 飞马手机", value: 8.0456777e-4 },
                { name: "华硕 飞马5000", value: 9.410829e-4 },
                { name: "华硕 ZenFone 2 laser", value: 0.0010136972 },
                { name: "华硕 飞马3s", value: 0.0011269758 },
                { name: "华硕 ZenFone 5", value: 0.001289632 },
                { name: "华硕 ZenFone Selfie", value: 0.0013535328 },
                { name: "华硕 Nexus 7", value: 0.0013825785 },
                { name: "华硕 T20", value: 0.0014871433 },
                { name: "华硕 ZenFone Max", value: 0.0018385971 },
                { name: "华硕 飞马", value: 0.0018879749 },
                { name: "华硕 ZenFone 3", value: 0.00270997 },
                { name: "华硕 ZenFone 2", value: 0.0036045797 },
                { name: "华硕 飞马3", value: 0.0043684836 }
            ]
        },
        {
            name: "E本",
            value: 0.027608002,
            children: [{ name: "E本 T7", value: 0.027608002 }]
        },
        {
            name: "康佳",
            value: 0.024253216,
            children: [
                { name: "康佳 V983", value: 2.9045768e-6 },
                { name: "康佳 V923", value: 2.9045768e-6 },
                { name: "康佳 2992", value: 5.8091537e-6 },
                { name: "康佳 V981", value: 5.8091537e-6 },
                { name: "康佳 V870", value: 8.7137305e-6 },
                { name: "康佳 W990", value: 8.7137305e-6 },
                { name: "康佳 TV 818", value: 8.7137305e-6 },
                { name: "康佳 901", value: 1.4522884e-5 },
                { name: "康佳 D530", value: 1.4522884e-5 },
                { name: "康佳 V976", value: 1.7427461e-5 },
                { name: "康佳 L813", value: 2.0332038e-5 },
                { name: "康佳 L827", value: 3.1950345e-5 },
                { name: "康佳 L826", value: 3.4854922e-5 },
                { name: "康佳 K35", value: 8.423273e-5 },
                { name: "康佳 L823", value: 1.04564766e-4 },
                { name: "康佳 K23", value: 1.04564766e-4 },
                { name: "康佳 D557", value: 0.0010253156 },
                { name: "康佳 R2", value: 0.0012199222 },
                { name: "康佳 P2", value: 0.0012954412 },
                { name: "康佳 R1", value: 0.005646497 },
                { name: "康佳 D6+", value: 0.014595498 }
            ]
        },
        {
            name: "克莱斯",
            value: 0.02325404,
            children: [{ name: "克莱斯 H9", value: 0.02325404 }]
        },
        {
            name: "TCL",
            value: 0.022545325,
            children: [
                { name: "TCL P606", value: 2.9045768e-6 },
                { name: "TCL J210", value: 2.9045768e-6 },
                { name: "TCL J720", value: 2.9045768e-6 },
                { name: "TCL J726T", value: 2.9045768e-6 },
                { name: "TCL S710", value: 2.9045768e-6 },
                { name: "TCL S810", value: 2.9045768e-6 },
                { name: "TCL J300", value: 5.8091537e-6 },
                { name: "TCL S600", value: 5.8091537e-6 },
                { name: "TCL S300T", value: 8.7137305e-6 },
                { name: "TCL J920", value: 8.7137305e-6 },
                { name: "TCL J600", value: 8.7137305e-6 },
                { name: "TCL J706T", value: 8.7137305e-6 },
                { name: "TCL P550U", value: 8.7137305e-6 },
                { name: "TCL  么么哒3N", value: 8.7137305e-6 },
                { name: "TCL J636D+", value: 8.7137305e-6 },
                { name: "TCL J930", value: 1.1618307e-5 },
                { name: "TCL J929", value: 1.4522884e-5 },
                { name: "TCL J900", value: 1.4522884e-5 },
                { name: "TCL S838M", value: 1.4522884e-5 },
                { name: "TCL J938M", value: 1.7427461e-5 },
                { name: "TCL P689L", value: 2.0332038e-5 },
                { name: "TCL  么么哒", value: 2.0332038e-5 },
                { name: "TCL J928", value: 2.0332038e-5 },
                { name: "TCL VF685", value: 2.0332038e-5 },
                { name: "TCL P301C", value: 2.0332038e-5 },
                { name: "TCL J936D", value: 2.0332038e-5 },
                { name: "TCL P302C", value: 2.3236615e-5 },
                { name: "TCL P308M", value: 2.9045768e-5 },
                { name: "TCL J926", value: 2.9045768e-5 },
                { name: "TCL P596", value: 3.1950345e-5 },
                { name: "TCL 乐玩2", value: 3.1950345e-5 },
                { name: "TCL I709M", value: 3.4854922e-5 },
                { name: "TCL J736L", value: 3.4854922e-5 },
                { name: "TCL idol X+", value: 3.4854922e-5 },
                { name: "TCL P332U", value: 3.77595e-5 },
                { name: "TCL I708", value: 4.0664076e-5 },
                { name: "TCL P360W", value: 4.0664076e-5 },
                { name: "TCL J738M", value: 6.0996113e-5 },
                { name: "TCL P516L", value: 7.261442e-5 },
                { name: "TCL idol X", value: 7.261442e-5 },
                { name: "TCL P560M", value: 8.132815e-5 },
                { name: "TCL P528D", value: 9.5851035e-5 },
                { name: "TCL P307L", value: 9.5851035e-5 },
                { name: "TCL P688L", value: 9.875561e-5 },
                { name: "TCL P586L", value: 1.0166019e-4 },
                { name: "TCL P518L", value: 1.132785e-4 },
                { name: "TCL 续航+", value: 1.132785e-4 },
                { name: "TCL P561U", value: 1.2199223e-4 },
                { name: "TCL P350M", value: 1.2199223e-4 },
                { name: "TCL Y910", value: 1.3941969e-4 },
                { name: "TCL idol3", value: 1.4522884e-4 },
                { name: "TCL P502U", value: 1.51038e-4 },
                { name: "TCL P306C", value: 1.5394257e-4 },
                { name: "TCL 么么哒3S", value: 1.5975173e-4 },
                { name: "TCL P500M", value: 1.6846546e-4 },
                { name: "TCL P589L", value: 1.9751122e-4 },
                { name: "TCL P331M", value: 2.497936e-4 },
                { name: "TCL P520L", value: 2.497936e-4 },
                { name: "TCL P301M", value: 3.1950345e-4 },
                { name: "TCL P501M", value: 3.9502245e-4 },
                { name: "TCL 950", value: 5.8091537e-4 },
                { name: "TCL 么么哒", value: 6.390069e-4 },
                { name: "TCL P308L", value: 6.9128926e-4 },
                { name: "TCL 302U", value: 7.900449e-4 },
                { name: "TCL ono", value: 0.0012228268 },
                { name: "TCL P316L", value: 0.0012751092 },
                { name: "TCL P318L", value: 0.0013128687 },
                { name: "TCL 520", value: 0.0015829944 },
                { name: "TCL 乐玩", value: 0.0019402573 },
                { name: "TCL 乐玩2C", value: 0.0023846575 },
                { name: "TCL 么么哒3N", value: 0.0025298863 },
                { name: "TCL 580", value: 0.0034622555 }
            ]
        }
    ],
    name: "android"
};


/***/ }),

/***/ "./src/app/layout/color-graph/color-graph.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/color-graph/color-graph.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-color-graph\">\n  <div class=\"graph-nav\">\n    <div class=\"nav-item\" *ngFor=\"let data of navData\"\n      [class.selected]=\"data.value === graph\"\n      (click)=\"navChange(data.value)\">{{data.label}}</div>\n  </div>\n  <div class=\"graph-dots\">\n    <div class=\"dots\" *ngFor=\"let dot of dotList\" [style.top]=\"dot.top\"\n      [style.backgroundColor]=\"dot.backgroundColor\" [class.lock]=\"dot.lock\">\n      <span class=\"dot-step\" [style.color]=\"dot.color\" nz-tooltip\n        [nzTitle]=\"dot.step\">{{dot.step}}</span>\n      <span class=\"dot-value\">{{dot.value}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/color-graph/color-graph.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/color-graph/color-graph.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-color-graph {\n  overflow: auto hidden;\n  height: 100%;\n  background-image: linear-gradient(rgba(244, 244, 250, 0.8) 1px, transparent 0), linear-gradient(#f4f4fa 1px, transparent 0), linear-gradient(90deg, rgba(244, 244, 250, 0.8) 1px, transparent 0), linear-gradient(90deg, #f4f4fa 1px, transparent 0), linear-gradient(transparent 3px, #fff 0, #fff 94px, transparent 0), linear-gradient(90deg, #f4f4fa 3px, transparent 0, transparent 94px, #f4f4fa 0);\n  background-size: 24px 24px, 96px 96px, 24px 24px, 96px 96px, 96px 96px, 96px 96px; }\n  .app-color-graph .graph-nav {\n    height: 50px;\n    display: flex;\n    align-items: center;\n    background-color: #fff;\n    border-bottom: 1px solid #E9EBF1; }\n  .app-color-graph .graph-nav .nav-item {\n      margin-left: 24px;\n      font-size: 14px;\n      color: #333333;\n      cursor: pointer; }\n  .app-color-graph .graph-nav .nav-item.selected {\n        font-size: 14px;\n        color: #5D60E6;\n        box-shadow: 0 1px 0; }\n  .app-color-graph .graph-dots {\n    display: flex;\n    justify-content: space-between;\n    height: calc(100% - 88px);\n    padding: 12px; }\n  .app-color-graph .graph-dots .dots {\n      display: flex;\n      justify-content: center;\n      flex-shrink: 0;\n      position: relative;\n      height: 25px;\n      width: 25px;\n      border-radius: 50%;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16); }\n  .app-color-graph .graph-dots .dots.lock {\n        border: 2px solid black;\n        box-sizing: content-box; }\n  .app-color-graph .graph-dots .dots .dot-step {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        width: 100%;\n        position: absolute;\n        font-weight: 700;\n        line-height: 25px;\n        text-align: center; }\n  .app-color-graph .graph-dots .dots .dot-value {\n        margin-top: 32px;\n        font-weight: 700;\n        color: #292936; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvbGF5b3V0L2NvbG9yLWdyYXBoL2NvbG9yLWdyYXBoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWix5WUFBeVk7RUFDelksaUZBQWlGLEVBQUE7RUFKbkY7SUFNSSxZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsZ0NBQWdDLEVBQUE7RUFWcEM7TUFZTSxpQkFBaUI7TUFDakIsZUFBZTtNQUNmLGNBQWM7TUFDZCxlQUFlLEVBQUE7RUFmckI7UUFpQlEsZUFBZTtRQUNmLGNBQWM7UUFDZCxtQkFBbUIsRUFBQTtFQW5CM0I7SUF3QkksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsYUFBYSxFQUFBO0VBM0JqQjtNQTZCTSxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIseUNBQXdDLEVBQUE7RUFwQzlDO1FBc0NRLHVCQUF1QjtRQUN2Qix1QkFBdUIsRUFBQTtFQXZDL0I7UUEwQ1EsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLGtCQUFrQixFQUFBO0VBakQxQjtRQW9EUSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb2xvci1ncmFwaC9jb2xvci1ncmFwaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29sb3ItZ3JhcGgge1xuICBvdmVyZmxvdzogYXV0byBoaWRkZW47XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjQ0LCAyNDQsIDI1MCwgMC44KSAxcHgsIHRyYW5zcGFyZW50IDApLCBsaW5lYXItZ3JhZGllbnQoI2Y0ZjRmYSAxcHgsIHRyYW5zcGFyZW50IDApLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjQ0LCAyNDQsIDI1MCwgMC44KSAxcHgsIHRyYW5zcGFyZW50IDApLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmNGY0ZmEgMXB4LCB0cmFuc3BhcmVudCAwKSwgbGluZWFyLWdyYWRpZW50KHRyYW5zcGFyZW50IDNweCwgI2ZmZiAwLCAjZmZmIDk0cHgsIHRyYW5zcGFyZW50IDApLCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICNmNGY0ZmEgM3B4LCB0cmFuc3BhcmVudCAwLCB0cmFuc3BhcmVudCA5NHB4LCAjZjRmNGZhIDApO1xuICBiYWNrZ3JvdW5kLXNpemU6IDI0cHggMjRweCwgOTZweCA5NnB4LCAyNHB4IDI0cHgsIDk2cHggOTZweCwgOTZweCA5NnB4LCA5NnB4IDk2cHg7XG4gIC5ncmFwaC1uYXYge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0U5RUJGMTtcbiAgICAubmF2LWl0ZW0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGNvbG9yOiAjNUQ2MEU2O1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAuZ3JhcGgtZG90cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4OHB4KTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIC5kb3RzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgd2lkdGg6IDI1cHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAuMTYpO1xuICAgICAgJi5sb2NrIHtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gICAgICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgICAgfVxuICAgICAgLmRvdC1zdGVwIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuZG90LXZhbHVlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgY29sb3I6ICMyOTI5MzY7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/color-graph/color-graph.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/color-graph/color-graph.component.ts ***!
  \*************************************************************/
/*! exports provided: ColorGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorGraphComponent", function() { return ColorGraphComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _color_palette_coloralgorithm_generate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-palette/coloralgorithm/generate.js */ "./src/app/layout/color-palette/coloralgorithm/generate.js");



var ColorGraphComponent = /** @class */ (function () {
    function ColorGraphComponent() {
        this.navData = [
            { label: '色相', value: 'hue' },
            { label: '饱和度', value: 'sat' },
            { label: '明度', value: 'lum' },
        ];
        this.dotList = [];
        this.result = [];
        this.graph = 'hue';
        this.graphChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ColorGraphComponent.prototype.ngOnChanges = function (changes) {
        if (this.graph && this.result && this.result.length > 0) {
            this.changeDots(this.result, this.graph);
        }
    };
    ColorGraphComponent.prototype.navChange = function (type) {
        this.graph = type;
        this.graphChange.emit(this.graph);
    };
    ColorGraphComponent.prototype.changeDots = function (result, graph) {
        var _this = this;
        this.dotList = [];
        result.forEach(function (d) {
            _this.dotList.push(_this.getDots(d, graph));
        });
    };
    ColorGraphComponent.prototype.getDots = function (data, graph) {
        var r = {
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
            top: _color_palette_coloralgorithm_generate_js__WEBPACK_IMPORTED_MODULE_2__["distribute"](r[graph].variable, r[graph].rangeA, r[graph].rangeB) + '%',
            backgroundColor: data.hex,
            color: data.displayColor,
            step: data.label,
            value: r[graph].label,
            lock: data.lock
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ColorGraphComponent.prototype, "result", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ColorGraphComponent.prototype, "graph", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ColorGraphComponent.prototype, "graphChange", void 0);
    ColorGraphComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-graph',
            template: __webpack_require__(/*! ./color-graph.component.html */ "./src/app/layout/color-graph/color-graph.component.html"),
            styles: [__webpack_require__(/*! ./color-graph.component.scss */ "./src/app/layout/color-graph/color-graph.component.scss")]
        })
    ], ColorGraphComponent);
    return ColorGraphComponent;
}());



/***/ }),

/***/ "./src/app/layout/color-palette/color-palette.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/layout/color-palette/color-palette.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-color-palette\">\n  <div class=\"palette-block\">\n    <div class=\"block-header\">\n      <div class=\"header-title\">颜色数量</div>\n    </div>\n    <div class=\"block-group\">\n      <div class=\"group-content\">\n        <nz-slider class=\"slider-steps\" [nzMin]=\"steps.min\" [nzMax]=\"steps.max\"\n          [(ngModel)]=\"values.steps\"\n          (ngModelChange)=\"valueChange($event, 'steps')\">\n        </nz-slider>\n        <div class=\"content-tip\">{{ values.steps }}</div>\n      </div>\n    </div>\n  </div>\n  <div class=\"palette-block\">\n    <div class=\"block-header\">\n      <div class=\"header-title\">插入颜色</div>\n      <div class=\"header-btn\">\n        <a href=\"javascript:void(0);\" (click)=\"minorStepsHandle.add()\">添加</a>\n        <a href=\"javascript:void(0);\"\n          (click)=\"minorStepsHandle.clear()\">清空</a>\n      </div>\n    </div>\n    <div class=\"block-group\">\n      <div class=\"group-content\"\n        *ngFor=\"let data of values.minor_steps_map;let i = index;\">\n        <nz-select [nzAllowClear]=\"true\" [(ngModel)]=\"data\"\n          (ngModelChange)=\"minorStepsHandle.change($event, i)\">\n          <ng-template ngFor let-option [ngForOf]=\"minorSteps\">\n            <nz-option [nzValue]=\"option\" [nzLabel]=\"option\">\n            </nz-option>\n          </ng-template>\n        </nz-select>\n      </div>\n    </div>\n  </div>\n  <div class=\"palette-block\">\n    <div class=\"block-header\">\n      <div class=\"header-title\">色相</div>\n      <div class=\"header-btn\">\n        <a href=\"javascript:void(0);\" (click)=\"chageGraph('hue')\">查看曲线</a>\n      </div>\n    </div>\n    <div class=\"block-group\">\n      <div class=\"group-label\">开始</div>\n      <div class=\"group-content\">\n        <nz-slider class=\"slider-hue\" [nzMin]=\"hue.startMin\"\n          [nzMax]=\"hue.startMax\" [(ngModel)]=\"values.hue_start\"\n          (ngModelChange)=\"valueChange($event, 'hue_start')\">\n        </nz-slider>\n        <div class=\"content-tip\">{{ values.hue_start }}</div>\n      </div>\n    </div>\n    <div class=\"block-group\">\n      <div class=\"group-label\">结束</div>\n      <div class=\"group-content\">\n        <nz-slider class=\"slider-hue\" [nzMin]=\"hue.endMin\" [nzMax]=\"hue.endMax\"\n          [(ngModel)]=\"values.hue_end\"\n          (ngModelChange)=\"valueChange($event, 'hue_end')\">\n        </nz-slider>\n        <div class=\"content-tip\">{{ values.hue_end }}</div>\n      </div>\n    </div>\n    <div class=\"block-group\">\n      <div class=\"group-label\">矫正曲线</div>\n      <div class=\"group-content\">\n        <nz-select [(ngModel)]=\"values.hue_curve\"\n          (ngModelChange)=\"valueChange($event, 'hue_curve')\">\n          <nz-option *ngFor=\"let option of curves\" [nzValue]=\"option\"\n            [nzLabel]=\"option\">\n          </nz-option>\n        </nz-select>\n      </div>\n    </div>\n  </div>\n  <div class=\"palette-block\">\n    <div class=\"block-header\">\n      <div class=\"header-title\">饱和度</div>\n      <div class=\"header-btn\">\n        <a href=\"javascript:void(0);\" (click)=\"chageGraph('sat')\">查看曲线</a>\n      </div>\n    </div>\n    <div class=\"block-group\">\n      <div class=\"group-label\">开始</div>\n      <div class=\"group-content\">\n        <nz-slider class=\"slider-sat\" [nzMin]=\"saturation.startMin\"\n          [nzMax]=\"saturation.startMax\" [(ngModel)]=\"values.sat_start\"\n          (ngModelChange)=\"valueChange($event, 'sat_start')\">\n        </nz-slider>\n        <div class=\"content-tip\">{{ values.sat_start }}\n        </div>\n      </div>\n    </div>\n    <div class=\"block-group\">\n      <div class=\"group-label\">结束</div>\n      <div class=\"group-content\">\n        <nz-slider class=\"slider-sat\" [nzMin]=\"saturation.endMin\"\n          [nzMax]=\"saturation.endMax\" [(ngModel)]=\"values.sat_end\"\n          (ngModelChange)=\"valueChange($event, 'sat_end')\">\n        </nz-slider>\n        <div class=\"content-tip\">{{ values.sat_end }}\n        </div>\n      </div>\n    </div>\n    <div class=\"block-group\">\n      <div class=\"group-label\">矫正曲线</div>\n      <div class=\"group-content\">\n        <nz-select [(ngModel)]=\"values.sat_curve\"\n          (ngModelChange)=\"valueChange($event, 'sat_curve')\">\n          <nz-option *ngFor=\"let option of curves\" [nzValue]=\"option\"\n            [nzLabel]=\"option\">\n          </nz-option>\n        </nz-select>\n      </div>\n    </div>\n    <div class=\"block-group\">\n      <div class=\"group-label\">曲率</div>\n      <div class=\"group-content\">\n        <nz-slider class=\"slider-sat-rate\" [nzMin]=\"saturation.rateMin\"\n          [nzMax]=\"saturation.rateMax\" [(ngModel)]=\"values.sat_rate\"\n          (ngModelChange)=\"valueChange($event, 'sat_rate')\">\n        </nz-slider>\n        <div class=\"content-tip\">{{ values.sat_rate }}\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"palette-block\">\n    <div class=\"block-header\">\n      <div class=\"header-title\">明度</div>\n      <div class=\"header-btn\">\n        <a href=\"javascript:void(0);\" (click)=\"chageGraph('lum')\">查看曲线</a>\n      </div>\n    </div>\n    <div class=\"block-group\">\n      <div class=\"group-label\">开始</div>\n      <div class=\"group-content\">\n        <nz-slider class=\"slider-lum\" [nzMin]=\"luminosity.startMin\"\n          [nzMax]=\"luminosity.startMax\" [(ngModel)]=\"values.lum_start\"\n          (ngModelChange)=\"valueChange($event, 'lum_start')\">\n        </nz-slider>\n        <div class=\"content-tip\">{{ values.lum_start }}\n        </div>\n      </div>\n    </div>\n    <div class=\"block-group\">\n      <div class=\"group-label\">结束</div>\n      <div class=\"group-content\">\n        <nz-slider class=\"slider-lum\" [nzMin]=\"luminosity.endMin\"\n          [nzMax]=\"luminosity.endMax\" [(ngModel)]=\"values.lum_end\"\n          (ngModelChange)=\"valueChange($event, 'lum_end')\">\n        </nz-slider>\n        <div class=\"content-tip\">{{ values.lum_end }}\n        </div>\n      </div>\n    </div>\n    <div class=\"block-group\">\n      <div class=\"group-label\">矫正曲线</div>\n      <div class=\"group-content\">\n        <nz-select [(ngModel)]=\"values.lum_curve\"\n          (ngModelChange)=\"valueChange($event, 'lum_curve')\">\n          <nz-option *ngFor=\"let option of curves\" [nzValue]=\"option\"\n            [nzLabel]=\"option\">\n          </nz-option>\n        </nz-select>\n      </div>\n    </div>\n  </div>\n  <div class=\"palette-block\">\n    <div class=\"block-header\">\n      <div class=\"header-title\">锁定颜色 (可选)</div>\n      <div class=\"header-btn\">\n        <a href=\"javascript:void(0);\"\n          (click)=\"valueChange('', 'lock_hex')\">清空</a>\n      </div>\n    </div>\n    <div class=\"block-group\">\n      <div class=\"group-content\">\n        <input nz-input [(ngModel)]=\"values.lock_hex\"\n          (ngModelChange)=\"valueChange($event, 'lock_hex')\" />\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/color-palette/color-palette.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/layout/color-palette/color-palette.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-color-palette {\n  overflow-x: auto; }\n  .app-color-palette .palette-block {\n    color: #292936;\n    font-size: 14px; }\n  .app-color-palette .palette-block:not(:last-child) {\n      margin-bottom: 24px;\n      padding-bottom: 24px;\n      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.16); }\n  .app-color-palette .palette-block .block-header {\n      margin-bottom: 8px;\n      display: flex;\n      justify-content: space-between;\n      align-items: center; }\n  .app-color-palette .palette-block .block-header .header-title {\n        font-size: 18px;\n        font-weight: bold; }\n  .app-color-palette .palette-block .block-header .header-btn {\n        font-weight: 500; }\n  .app-color-palette .palette-block .block-header .header-btn > a {\n          margin-left: 12px; }\n  .app-color-palette .palette-block .block-group {\n      margin-bottom: 8px; }\n  .app-color-palette .palette-block .block-group .group-label {\n        font-weight: 600; }\n  .app-color-palette .palette-block .block-group .group-content .content-tip {\n        margin-top: 4px; }\n  .app-color-palette nz-slider,\n  .app-color-palette nz-select {\n    width: 100%; }\n  .app-color-palette nz-slider .ant-slider {\n    margin: 14px 15px; }\n  .app-color-palette nz-slider .ant-slider-rail {\n    height: 8px;\n    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);\n    border-radius: 10px;\n    background: #e6e6e6 !important; }\n  .app-color-palette nz-slider .ant-slider-track {\n    height: 8px;\n    background-color: transparent !important; }\n  .app-color-palette nz-slider .ant-slider-handle {\n    margin-left: -15px;\n    margin-top: -11px;\n    width: 30px;\n    height: 30px;\n    border: 1px solid #ccc !important;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16); }\n  .app-color-palette .slider-steps .ant-slider-rail {\n    background-color: #e6e6e6 !important; }\n  .app-color-palette .slider-steps .ant-slider-track {\n    background-color: #787891 !important; }\n  .app-color-palette .slider-hue .ant-slider-rail {\n    background-image: linear-gradient(90deg, red, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, red) !important; }\n  .app-color-palette .slider-sat .ant-slider-rail {\n    background-image: linear-gradient(90deg, #fff, #8b37ff) !important; }\n  .app-color-palette .slider-sat-rate .ant-slider-track {\n    background-color: #8b37ff !important; }\n  .app-color-palette .slider-lum .ant-slider-rail {\n    background-image: linear-gradient(-90deg, #fff, #000) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvbGF5b3V0L2NvbG9yLXBhbGV0dGUvY29sb3ItcGFsZXR0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQixFQUFBO0VBRGxCO0lBR0ksY0FBYztJQUNkLGVBQWUsRUFBQTtFQUpuQjtNQU1NLG1CQUFtQjtNQUNuQixvQkFBb0I7TUFDcEIsdUNBQXNDLEVBQUE7RUFSNUM7TUFXTSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLDhCQUE4QjtNQUM5QixtQkFBbUIsRUFBQTtFQWR6QjtRQWdCUSxlQUFlO1FBQ2YsaUJBQWlCLEVBQUE7RUFqQnpCO1FBb0JRLGdCQUFnQixFQUFBO0VBcEJ4QjtVQXNCVSxpQkFBaUIsRUFBQTtFQXRCM0I7TUEyQk0sa0JBQWtCLEVBQUE7RUEzQnhCO1FBNkJRLGdCQUFnQixFQUFBO0VBN0J4QjtRQWlDVSxlQUFlLEVBQUE7RUFqQ3pCOztJQXdDSSxXQUFXLEVBQUE7RUF4Q2Y7SUE0Q00saUJBQWlCLEVBQUE7RUE1Q3ZCO0lBK0NNLFdBQVc7SUFDWCw4Q0FBNkM7SUFDN0MsbUJBQW1CO0lBQ25CLDhCQUE4QixFQUFBO0VBbERwQztJQXFETSxXQUFXO0lBQ1gsd0NBQXdDLEVBQUE7RUF0RDlDO0lBeURNLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMseUNBQXdDLEVBQUE7RUE5RDlDO0lBbUVNLG9DQUFvQyxFQUFBO0VBbkUxQztJQXNFTSxvQ0FBb0MsRUFBQTtFQXRFMUM7SUEyRU0sK0dBQStHLEVBQUE7RUEzRXJIO0lBZ0ZNLGtFQUFrRSxFQUFBO0VBaEZ4RTtJQXFGTSxvQ0FBb0MsRUFBQTtFQXJGMUM7SUEwRk0sZ0VBQWdFLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29sb3ItcGFsZXR0ZS9jb2xvci1wYWxldHRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb2xvci1wYWxldHRlIHtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLnBhbGV0dGUtYmxvY2sge1xuICAgIGNvbG9yOiAjMjkyOTM2O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAyNHB4O1xuICAgICAgYm94LXNoYWRvdzogMCAycHggMCByZ2JhKDAsIDAsIDAsIC4xNik7XG4gICAgfVxuICAgIC5ibG9jay1oZWFkZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAuaGVhZGVyLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5oZWFkZXItYnRuIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgPmEge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5ibG9jay1ncm91cCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAuZ3JvdXAtbGFiZWwge1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgfVxuICAgICAgLmdyb3VwLWNvbnRlbnQge1xuICAgICAgICAuY29udGVudC10aXAge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBuei1zbGlkZXIsXG4gIG56LXNlbGVjdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgbnotc2xpZGVyIHtcbiAgICAuYW50LXNsaWRlciB7XG4gICAgICBtYXJnaW46IDE0cHggMTVweDtcbiAgICB9XG4gICAgLmFudC1zbGlkZXItcmFpbCB7XG4gICAgICBoZWlnaHQ6IDhweDtcbiAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIC40KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5hbnQtc2xpZGVyLXRyYWNrIHtcbiAgICAgIGhlaWdodDogOHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmFudC1zbGlkZXItaGFuZGxlIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbiAgICAgIG1hcmdpbi10b3A6IC0xMXB4O1xuICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjICFpbXBvcnRhbnQ7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAuMTYpO1xuICAgIH1cbiAgfVxuICAuc2xpZGVyLXN0ZXBzIHtcbiAgICAuYW50LXNsaWRlci1yYWlsIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTYgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmFudC1zbGlkZXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc4Nzg5MSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAuc2xpZGVyLWh1ZSB7XG4gICAgLmFudC1zbGlkZXItcmFpbCB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJlZCwgI2ZmMCAxNyUsICMwZjAgMzMlLCAjMGZmIDUwJSwgIzAwZiA2NyUsICNmMGYgODMlLCByZWQpICFpbXBvcnRhbnQ7XG4gICAgfVxuICB9XG4gIC5zbGlkZXItc2F0IHtcbiAgICAuYW50LXNsaWRlci1yYWlsIHtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmZiwgIzhiMzdmZikgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cbiAgLnNsaWRlci1zYXQtcmF0ZSB7XG4gICAgLmFudC1zbGlkZXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzhiMzdmZiAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuICAuc2xpZGVyLWx1bSB7XG4gICAgLmFudC1zbGlkZXItcmFpbCB7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTkwZGVnLCAjZmZmLCAjMDAwKSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/color-palette/color-palette.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/layout/color-palette/color-palette.component.ts ***!
  \*****************************************************************/
/*! exports provided: ColorPaletteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPaletteComponent", function() { return ColorPaletteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _coloralgorithm_curves_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coloralgorithm/curves.js */ "./src/app/layout/color-palette/coloralgorithm/curves.js");
/* harmony import */ var _coloralgorithm_generate_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coloralgorithm/generate.js */ "./src/app/layout/color-palette/coloralgorithm/generate.js");




var ColorPaletteComponent = /** @class */ (function () {
    function ColorPaletteComponent() {
        var _this = this;
        this.values = {
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
        this.steps = {
            min: 3,
            max: 21
        };
        this.minorSteps = [];
        this.minorStepsHandle = {
            add: function () {
                if (_this.values.minor_steps_map.length === _this.minorSteps.length ||
                    !_this.values.minor_steps_map.every(function (d) { return d !== null; })) {
                    return false;
                }
                _this.values.minor_steps_map.push(null);
            },
            clear: function () {
                _this.values.minor_steps_map = [null];
                _this.valueChange(_this.values.minor_steps_map, 'minor_steps_map');
            },
            change: function (value, index) {
                var map = _this.values.minor_steps_map.slice();
                map[index] = value;
                _this.values.minor_steps_map = map;
                var sortValue = map.sort(function (x, y) { return x - y; });
                _this.valueChange(sortValue, 'minor_steps_map');
                console.log(_this.values.minor_steps_map);
            }
        };
        this.hue = {
            startMin: 0,
            startMax: 359,
            endMin: 0,
            endMax: 359
        };
        this.saturation = {
            startMin: 0,
            startMax: 100,
            endMin: 0,
            endMax: 100,
            rateMin: 0,
            rateMax: 200
        };
        this.luminosity = {
            startMin: 0,
            startMax: 100,
            endMin: 0,
            endMax: 100
        };
        this.curves = Object.keys(_coloralgorithm_curves_js__WEBPACK_IMPORTED_MODULE_2__);
        this.result = [];
        this.graph = 'hue';
        this.graphChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.resultChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ColorPaletteComponent.prototype.ngOnInit = function () {
        this.valueChange('', 'lock_hex');
    };
    ColorPaletteComponent.prototype.valueChange = function (value, key) {
        // 更改图表类型
        var type = key.substring(0, 3);
        if (type !== 'hue' && type !== 'sat' && type !== 'lum') {
            type = this.graph;
        }
        this.chageGraph(type);
        this.handleMinorSteps();
        this.values[key] = value;
        this.result = _coloralgorithm_generate_js__WEBPACK_IMPORTED_MODULE_3__["generate"](this.values);
        this.resultChange.emit(this.result);
    };
    ColorPaletteComponent.prototype.chageGraph = function (key) {
        this.graph = key;
        this.graphChange.emit(this.graph);
    };
    ColorPaletteComponent.prototype.handleMinorSteps = function () {
        var minorSteps = [null];
        this.result.forEach(function (d) {
            minorSteps.push(d.label);
        });
        this.minorSteps = minorSteps;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ColorPaletteComponent.prototype, "graph", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ColorPaletteComponent.prototype, "graphChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ColorPaletteComponent.prototype, "resultChange", void 0);
    ColorPaletteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-palette',
            template: __webpack_require__(/*! ./color-palette.component.html */ "./src/app/layout/color-palette/color-palette.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./color-palette.component.scss */ "./src/app/layout/color-palette/color-palette.component.scss")]
        })
    ], ColorPaletteComponent);
    return ColorPaletteComponent;
}());



/***/ }),

/***/ "./src/app/layout/color-palette/coloralgorithm/curves.js":
/*!***************************************************************!*\
  !*** ./src/app/layout/color-palette/coloralgorithm/curves.js ***!
  \***************************************************************/
/*! exports provided: linear, easeInCubic, easeOutCubic, easeInOutCubic, easeInSine, easeOutSine, easeInOutSine, easeInQuad, easeOutQuad, easeInOutQuad, easeInQuart, easeOutQuart, easeInOutQuart, easeInCirc, easeOutCirc, easeInOutCirc, easeInQuint, easeOutQuint, easeInOutQuint, easeInExpo, easeOutExpo, easeInOutExpo, easeInBack, easeOutBack, easeInOutBack */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linear", function() { return linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCubic", function() { return easeInCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutCubic", function() { return easeOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCubic", function() { return easeInOutCubic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInSine", function() { return easeInSine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutSine", function() { return easeOutSine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutSine", function() { return easeInOutSine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuad", function() { return easeInQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuad", function() { return easeOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuad", function() { return easeInOutQuad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuart", function() { return easeInQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuart", function() { return easeOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuart", function() { return easeInOutQuart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInCirc", function() { return easeInCirc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutCirc", function() { return easeOutCirc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutCirc", function() { return easeInOutCirc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInQuint", function() { return easeInQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutQuint", function() { return easeOutQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutQuint", function() { return easeInOutQuint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInExpo", function() { return easeInExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutExpo", function() { return easeOutExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutExpo", function() { return easeInOutExpo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInBack", function() { return easeInBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeOutBack", function() { return easeOutBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easeInOutBack", function() { return easeInOutBack; });
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bezier-easing */ "./node_modules/bezier-easing/src/index.js");
/* harmony import */ var bezier_easing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bezier_easing__WEBPACK_IMPORTED_MODULE_0__);

const linear = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.5, 0.5, 0.5, 0.5)
const easeInCubic = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.55, 0.055, 0.675, 0.19)
const easeOutCubic = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.215, 0.61, 0.355, 1)
const easeInOutCubic = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.645, 0.045, 0.355, 1)
const easeInSine = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.47, 0, 0.745, 0.715)
const easeOutSine = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.39, 0.575, 0.565, 1)
const easeInOutSine = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.445, 0.05, 0.55, 0.95)
const easeInQuad = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.55, 0.085, 0.68, 0.53)
const easeOutQuad = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.25, 0.46, 0.45, 0.94)
const easeInOutQuad = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.455, 0.03, 0.515, 0.955)
const easeInQuart = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.895, 0.03, 0.685, 0.22)
const easeOutQuart = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.165, 0.84, 0.44, 1)
const easeInOutQuart = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.77, 0, 0.175, 1)
const easeInCirc = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.6, 0.04, 0.98, 0.335)
const easeOutCirc = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.075, 0.82, 0.165, 1)
const easeInOutCirc = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.785, 0.135, 0.15, 0.86)
const easeInQuint = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.755, 0.05, 0.855, 0.06)
const easeOutQuint = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.23, 1, 0.32, 1)
const easeInOutQuint = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.86, 0, 0.07, 1)
const easeInExpo = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.95, 0.05, 0.795, 0.035)
const easeOutExpo = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.19, 1, 0.22, 1)
const easeInOutExpo = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(1, 0, 0, 1)
const easeInBack = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.6, -0.28, 0.735, 0.045)
const easeOutBack = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.175, 0.885, 0.32, 1.275)
const easeInOutBack = bezier_easing__WEBPACK_IMPORTED_MODULE_0___default()(0.68, -0.55, 0.265, 1.55)


/***/ }),

/***/ "./src/app/layout/color-palette/coloralgorithm/generate.js":
/*!*****************************************************************!*\
  !*** ./src/app/layout/color-palette/coloralgorithm/generate.js ***!
  \*****************************************************************/
/*! exports provided: generate, distribute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generate", function() { return generate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distribute", function() { return distribute; });
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js");
/* harmony import */ var chroma_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chroma_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _curves_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curves.js */ "./src/app/layout/color-palette/coloralgorithm/curves.js");


function generate(specs) {
  var t = specs;

  function generateNumberOfSteps(curve, steps) {
    var array = []
    for (var step in Array.from(Array(steps).keys())) {
      const value = curve(step / (steps - 1))
      array.push(value)
    }
    array.reverse()
    return array
  }
  var a = generateNumberOfSteps(_curves_js__WEBPACK_IMPORTED_MODULE_1__[t.lum_curve], t.steps);
  var o = generateNumberOfSteps(_curves_js__WEBPACK_IMPORTED_MODULE_1__[t.sat_curve], t.steps);
  var i = generateNumberOfSteps(_curves_js__WEBPACK_IMPORTED_MODULE_1__[t.hue_curve], t.steps);
  var u = [];
  var l = [];
  var s = [];
  for (var c in a) {
    var f = a[c];
    u.push(distribute(f, [0, 1], [.01 * t.lum_end, .01 * t.lum_start], true))
  }
  for (var c in o) {
    var p = o[c];
    var h = distribute(p, [0, 1], [.01 * t.sat_start, .01 * t.sat_end], true);
    h *= .01 * t.sat_rate;
    l.push(h)
  }
  for (var c in i) {
    var d = i[c];
    s.push(distribute(d, [0, 1], [t.hue_start, t.hue_end]))
  }
  l.reverse();
  o.reverse();
  s.reverse();
  i.reverse();
  var v = {
    hue: s,
    hue_steps: i,
    sat: l,
    sat_steps: o,
    lum: u,
    lum_steps: a
  };
  var b = [];
  v.hue.map(function(e, t) {
    var r = {
      hue: v.hue[t],
      hueStep: v.hue_steps[t],
      sat: v.sat[t],
      satStep: v.sat_steps[t],
      lum: v.lum[t],
      lumStep: v.lum_steps[t],
      major: true,
      step: 10 * t
    };
    b.push(r)
  });
  t.minor_steps_map.map(function(e, r) {
    if (false == isNaN(e)) {
      var n = {};
      var a = void 0;
      var o = {};
      b.map(function(t, r) {
        if (e == t.step) {
          a = r + 1;
          n = t;
          o = b[r + 1]
        }
      });
      var i = (n.hueStep + o.hueStep) / 2;
      var u = distribute(i, [0, 1], [t.hue_start, t.hue_end], true);
      var l = (n.satStep + o.satStep) / 2;
      var s = distribute(l, [0, 1], [.01 * t.sat_start, .01 * t.sat_end], true) * (.01 * t.sat_rate);
      var c = (n.lumStep + o.lumStep) / 2;
      var f = distribute(c, [0, 1], [.01 * t.lum_end, .01 * t.lum_start], true);
      if (void 0 != a) {
        var p = {
          hue: u,
          hueStep: i,
          sat: s,
          satStep: l,
          lum: f,
          lumStep: c,
          major: false,
          step: (n.step + o.step) / 2
        };
        b.splice(a, 0, p)
      }
    }
  });
  var m = se(t, b);
  t.lock_hex && (m = ce(t, m, t.lock_hex));
  return m
};
function distribute(value, rangeA, rangeB) {
  const [fromLow, fromHigh] = Array.from(rangeA)
  const [toLow, toHigh] = Array.from(rangeB)
  const result = toLow + (((value - fromLow) / (fromHigh - fromLow)) * (toHigh - toLow));
  if (toLow < toHigh) {
    if (result < toLow) {
      return toLow
    }
    if (result > toHigh) {
      return toHigh
    }
  } else {
    if (result > toLow) {
      return toLow
    }
    if (result < toHigh) {
      return toHigh
    }
  }
  return result;
}

function ce(e, t, r) {
  var n = [];
  var a = e.lock_hex;
  var o = chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(a).hsv();
  isNaN(o[0]) && (o[0] = 0);
  var i = {
    hue: o[0],
    sat: o[1],
    lum: o[2]
  };
  var u = 999999;
  var l = "";
  var s = true;
  var c = false;
  var f = void 0;
  try {
    for (var p = t[Symbol.iterator](), h; !(s = (h = p.next()).done); s = true) {
      var d = h.value;
      var v = chroma_js__WEBPACK_IMPORTED_MODULE_0___default.a.deltaE(d.hex, a);
      if (u > v) {
        u = v;
        l = d
      }
    }
  } catch (e) {
    c = true;
    f = e
  } finally {
    try {
      !s && p.return && p.return()
    } finally {
      if (c) throw f
    }
  }
  var b = t.indexOf(l);
  var m = [];
  var g = {
    hue: i.hue - l.hue,
    sat: i.sat - l.sat,
    lum: i.lum - l.lum
  };
  for (var y in t) {
    var _ = {};
    if (y < b) {
      var w = {
        hue: distribute(y, [0, b], [0, g.hue]),
        sat: distribute(y, [0, b], [0, g.sat]),
        lum: distribute(y, [0, b], [0, g.lum])
      };
      _.hue = t[y].hue + w.hue;
      _.sat = t[y].sat + w.sat;
      _.lum = t[y].lum + w.lum
    }
    if (y == b) {
      _.hue = i.hue;
      _.sat = i.sat;
      _.lum = i.lum
    }
    if (y > b) {
      var O = {
        hue: distribute(y, [b, t.length - 1], [g.hue, 0]),
        sat: distribute(y, [b, t.length - 1], [g.sat, 0]),
        lum: distribute(y, [b, t.length - 1], [g.lum, 0])
      };
      _.hue = t[y].hue + O.hue;
      _.sat = t[y].sat + O.sat;
      _.lum = t[y].lum + O.lum
    }
    _.step = t[y].label;
    m.push(_)
  }
  return se(e, m)
}

function se(e, t) {
  var r = [];
  var n = 0;
  t.map(function(t, n) {
    var a = {
      hue: t.hue,
      sat: t.sat,
      lum: t.lum
    };
    a.sat > 1 && (a.sat = 1);
    var o = chroma_js__WEBPACK_IMPORTED_MODULE_0___default.a.hsv([a.hue, a.sat, a.lum]);
    var i = chroma_js__WEBPACK_IMPORTED_MODULE_0___default.a.hsv([a.hue, a.sat, a.lum]).rgb();
    var u = chroma_js__WEBPACK_IMPORTED_MODULE_0___default.a.contrast(o, "white").toFixed(2);
    var l = chroma_js__WEBPACK_IMPORTED_MODULE_0___default.a.contrast(o, "black").toFixed(2);
    var s = "";
    s = u >= 4.5 ? "white" : "black";
    s = u >= 4.5 ? "white" : "black";
    var c = false;
    e.lock_hex.toUpperCase() == chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(o).hex().toUpperCase() && (c = true);
    "#" + e.lock_hex.toUpperCase() == chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(o).hex().toUpperCase() && (c = true);
    var f = {
      hex: chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(o).hex(),
      hue: chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(o).hsv()[0],
      sat: chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(o).hsv()[1],
      lum: chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(o).hsv()[2],
      hsv: chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(o).hsv(),
      hsl: chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(o).hsl(),
      rgb: chroma_js__WEBPACK_IMPORTED_MODULE_0___default()(o).rgb(),
      hueRange: [e.hue_start, e.hue_end],
      steps: e.steps,
      label: t.step,
      contrastBlack: l,
      contrastWhite: u,
      displayColor: s,
      lock: c
    };
    isNaN(f.hue) && (f.hue = 0);
    isNaN(f.hsv[0]) && (f.hsv[0] = 0);
    isNaN(f.hsl[0]) && (f.hsl[0] = 0);
    r.push(f)
  });
  return r
}


/***/ }),

/***/ "./src/app/layout/color-stack/color-stack.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/color-stack/color-stack.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-color-stack\">\n  <div class=\"stack-header clearfloat\">\n    <p class=\"float-left header-title\">文字测试</p>\n    <p class=\"float-right header-subtitle\">请注意文字阅读清晰度</p>\n  </div>\n  <div class=\"stack-main\">\n    <div class=\"stack-block\" *ngFor=\"let data of result\"\n      [style.backgroundColor]=\"data.hex\">\n      <div class=\"block-label\" [style.color]=\"data.displayColor\">{{data.label}}\n      </div>\n      <div class=\"block-lock\">\n        <i *ngIf=\"data.lock\" nz-icon type=\"lock\" theme=\"outline\"></i>\n      </div>\n      <div class=\"block-black\">{{data.contrastBlack}}b</div>\n      <div class=\"block-white\">{{data.contrastWhite}}w</div>\n      <div class=\"block-hex\" [style.color]=\"data.displayColor\">{{data.hex}}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/color-stack/color-stack.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/color-stack/color-stack.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-color-stack {\n  padding: 16px 20px 20px 20px;\n  height: 100%; }\n  .app-color-stack .stack-header {\n    margin-bottom: 14px;\n    line-height: 21px; }\n  .app-color-stack .stack-header .header-title {\n      font-size: 14px;\n      color: #333333; }\n  .app-color-stack .stack-header .header-subtitle {\n      color: #909090; }\n  .app-color-stack .stack-main {\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    height: calc(100% - 35px); }\n  .app-color-stack .stack-main .stack-block {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 0 24px;\n      min-height: 30px;\n      font-size: 16px; }\n  .app-color-stack .stack-main .stack-block .block-label {\n        min-width: 27px;\n        font-weight: bold; }\n  .app-color-stack .stack-main .stack-block .block-lock {\n        margin: 0 4px;\n        width: 16px; }\n  .app-color-stack .stack-main .stack-block .block-lock > i {\n          font-size: 16px;\n          color: #fff; }\n  .app-color-stack .stack-main .stack-block .block-black {\n        margin: 0 4px;\n        color: black; }\n  .app-color-stack .stack-main .stack-block .block-white {\n        margin: 0 4px;\n        color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvbGF5b3V0L2NvbG9yLXN0YWNrL2NvbG9yLXN0YWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVksRUFBQTtFQUZkO0lBSUksbUJBQW1CO0lBQ25CLGlCQUFpQixFQUFBO0VBTHJCO01BT00sZUFBZTtNQUNmLGNBQWMsRUFBQTtFQVJwQjtNQVdNLGNBQWMsRUFBQTtFQVhwQjtJQWVJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QixFQUFBO0VBbEI3QjtNQW9CTSxPQUFPO01BQ1AsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixlQUFlLEVBQUE7RUExQnJCO1FBNEJRLGVBQWU7UUFDZixpQkFBaUIsRUFBQTtFQTdCekI7UUFnQ1EsYUFBYTtRQUNiLFdBQVcsRUFBQTtFQWpDbkI7VUFtQ1UsZUFBZTtVQUNmLFdBQVcsRUFBQTtFQXBDckI7UUF3Q1EsYUFBYTtRQUNiLFlBQVksRUFBQTtFQXpDcEI7UUE0Q1EsYUFBYTtRQUNiLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb2xvci1zdGFjay9jb2xvci1zdGFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29sb3Itc3RhY2sge1xuICBwYWRkaW5nOiAxNnB4IDIwcHggMjBweCAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIC5zdGFjay1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDIxcHg7XG4gICAgLmhlYWRlci10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICB9XG4gICAgLmhlYWRlci1zdWJ0aXRsZSB7XG4gICAgICBjb2xvcjogIzkwOTA5MDtcbiAgICB9XG4gIH1cbiAgLnN0YWNrLW1haW4ge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM1cHgpO1xuICAgIC5zdGFjay1ibG9jayB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgLmJsb2NrLWxhYmVsIHtcbiAgICAgICAgbWluLXdpZHRoOiAyN3B4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5ibG9jay1sb2NrIHtcbiAgICAgICAgbWFyZ2luOiAwIDRweDtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgID5pIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5ibG9jay1ibGFjayB7XG4gICAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICAgIC5ibG9jay13aGl0ZSB7XG4gICAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/layout/color-stack/color-stack.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/color-stack/color-stack.component.ts ***!
  \*************************************************************/
/*! exports provided: ColorStackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorStackComponent", function() { return ColorStackComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorStackComponent = /** @class */ (function () {
    function ColorStackComponent() {
        this.result = [];
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ColorStackComponent.prototype, "result", void 0);
    ColorStackComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-color-stack',
            template: __webpack_require__(/*! ./color-stack.component.html */ "./src/app/layout/color-stack/color-stack.component.html"),
            styles: [__webpack_require__(/*! ./color-stack.component.scss */ "./src/app/layout/color-stack/color-stack.component.scss")]
        })
    ], ColorStackComponent);
    return ColorStackComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/app-header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/header/app-header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header clearfloat\">\n  <div class=\"float-left\">\n    <div class=\"header-logo\">\n      <img src=\"./assets/images/logo.png\" alt=\"极光可视化色彩工具\">\n    </div>\n    <p class=\"header-title\">极光可视化色彩工具</p>\n  </div>\n  <div class=\"float-right\">\n    <button nz-button (click)=\"reset()\">重置</button>\n    <button nz-button nzType=\"primary\" (click)=\"share()\">导出</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/header/app-header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/header/app-header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  position: relative;\n  padding: 0 20px;\n  height: 60px;\n  width: 100%;\n  line-height: 60px;\n  background: #fff;\n  box-shadow: 0 4px 6px 0 rgba(0, 62, 118, 0.05), 0 0 2px 0 rgba(0, 62, 118, 0.15); }\n  .header .float-left {\n    display: flex;\n    align-items: center; }\n  .header .float-left .header-logo {\n      margin-right: 12px;\n      height: 24px;\n      width: 24px; }\n  .header .float-left .header-logo > img {\n        display: block;\n        width: 100%; }\n  .header .float-left .header-title {\n      font-size: 16px;\n      font-weight: bold; }\n  .header .float-right > button {\n    margin-left: 16px;\n    width: 80px;\n    height: 30px;\n    line-height: 30px;\n    font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvbGF5b3V0L2hlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0ZBQTBFLEVBQUE7RUFQNUU7SUFTSSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7RUFWdkI7TUFZTSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFdBQVcsRUFBQTtFQWRqQjtRQWdCUSxjQUFjO1FBQ2QsV0FBVyxFQUFBO0VBakJuQjtNQXFCTSxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUF0QnZCO0lBMkJNLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDAsNjIsMTE4LDAuMDUpLCAwIDAgMnB4IDAgcmdiYSgwLDYyLDExOCwwLjE1KTtcbiAgLmZsb2F0LWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICA+aW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgICAuaGVhZGVyLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuICAuZmxvYXQtcmlnaHQge1xuICAgID5idXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/header/app-header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/header/app-header.component.ts ***!
  \*******************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppHeaderComponent = /** @class */ (function () {
    function AppHeaderComponent() {
        this.headerReset = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.headerShare = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    AppHeaderComponent.prototype.reset = function () {
        this.headerReset.emit();
    };
    AppHeaderComponent.prototype.share = function () {
        this.headerShare.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AppHeaderComponent.prototype, "headerReset", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], AppHeaderComponent.prototype, "headerShare", void 0);
    AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./app-header.component.html */ "./src/app/layout/header/app-header.component.html"),
            styles: [__webpack_require__(/*! ./app-header.component.scss */ "./src/app/layout/header/app-header.component.scss")]
        })
    ], AppHeaderComponent);
    return AppHeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/ng-echarts/charts-base/charts-empty/charts-empty.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/ng-echarts/charts-base/charts-empty/charts-empty.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"charts-empty\">\n  <div class=\"empty-overlay\"></div>\n  <nz-empty [nzNotFoundContent]=\"tip\"></nz-empty>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/ng-echarts/charts-base/charts-empty/charts-empty.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/ng-echarts/charts-base/charts-empty/charts-empty.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "charts-empty .charts-empty {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0; }\n  charts-empty .charts-empty .empty-overlay {\n    overflow: hidden;\n    z-index: 999;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    pointer-events: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  charts-empty .charts-empty nz-empty {\n    position: absolute;\n    z-index: 1000;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvbW9kdWxlcy9uZy1lY2hhcnRzL2NoYXJ0cy1iYXNlL2NoYXJ0cy1lbXB0eS9jaGFydHMtZW1wdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTyxFQUFBO0VBTlg7SUFRTSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1Asb0JBQW9CO0lBQ3BCLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQixFQUFBO0VBaEJ2QjtJQW1CTSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbmctZWNoYXJ0cy9jaGFydHMtYmFzZS9jaGFydHMtZW1wdHkvY2hhcnRzLWVtcHR5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2hhcnRzLWVtcHR5IHtcbiAgLmNoYXJ0cy1lbXB0eSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICAuZW1wdHktb3ZlcmxheSB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgei1pbmRleDogOTk5O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG4gICAgbnotZW1wdHkge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/modules/ng-echarts/charts-base/charts-empty/charts-empty.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/ng-echarts/charts-base/charts-empty/charts-empty.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ChartsEmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsEmptyComponent", function() { return ChartsEmptyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartsEmptyComponent = /** @class */ (function () {
    function ChartsEmptyComponent() {
        this.tip = '暂无数据';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartsEmptyComponent.prototype, "tip", void 0);
    ChartsEmptyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'charts-empty',
            template: __webpack_require__(/*! ./charts-empty.component.html */ "./src/app/modules/ng-echarts/charts-base/charts-empty/charts-empty.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./charts-empty.component.scss */ "./src/app/modules/ng-echarts/charts-base/charts-empty/charts-empty.component.scss")]
        })
    ], ChartsEmptyComponent);
    return ChartsEmptyComponent;
}());



/***/ }),

/***/ "./src/app/modules/ng-echarts/charts-base/charts-loading/charts-loading.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/ng-echarts/charts-base/charts-loading/charts-loading.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"charts-loading\">\n  <div class=\"loading-overlay\"></div>\n  <nz-spin [nzSize]=\"size\" [nzTip]=\"tip\" [nzSpinning]=\"true\">\n  </nz-spin>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/ng-echarts/charts-base/charts-loading/charts-loading.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/ng-echarts/charts-base/charts-loading/charts-loading.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "charts-loading .charts-loading {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0; }\n  charts-loading .charts-loading .loading-overlay {\n    overflow: hidden;\n    z-index: 999;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    pointer-events: none;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n  charts-loading .charts-loading nz-spin {\n    position: absolute;\n    z-index: 1000;\n    display: block;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvbW9kdWxlcy9uZy1lY2hhcnRzL2NoYXJ0cy1iYXNlL2NoYXJ0cy1sb2FkaW5nL2NoYXJ0cy1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU8sRUFBQTtFQU5YO0lBUU0sZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsT0FBTztJQUNQLG9CQUFvQjtJQUNwQix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUIsRUFBQTtFQWhCdkI7SUFtQk0sa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9uZy1lY2hhcnRzL2NoYXJ0cy1iYXNlL2NoYXJ0cy1sb2FkaW5nL2NoYXJ0cy1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2hhcnRzLWxvYWRpbmcge1xuICAuY2hhcnRzLWxvYWRpbmcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgLmxvYWRpbmctb3ZlcmxheSB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgei1pbmRleDogOTk5O1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICB9XG4gICAgbnotc3BpbiB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/modules/ng-echarts/charts-base/charts-loading/charts-loading.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/ng-echarts/charts-base/charts-loading/charts-loading.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ChartsLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsLoadingComponent", function() { return ChartsLoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartsLoadingComponent = /** @class */ (function () {
    function ChartsLoadingComponent() {
        this.tip = 'Loading...';
        this.size = 'default';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartsLoadingComponent.prototype, "tip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartsLoadingComponent.prototype, "size", void 0);
    ChartsLoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'charts-loading',
            template: __webpack_require__(/*! ./charts-loading.component.html */ "./src/app/modules/ng-echarts/charts-base/charts-loading/charts-loading.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./charts-loading.component.scss */ "./src/app/modules/ng-echarts/charts-base/charts-loading/charts-loading.component.scss")]
        })
    ], ChartsLoadingComponent);
    return ChartsLoadingComponent;
}());



/***/ }),

/***/ "./src/app/modules/ng-echarts/index.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/ng-echarts/index.ts ***!
  \*********************************************/
/*! exports provided: NgEchartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ng_echarts_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-echarts.module */ "./src/app/modules/ng-echarts/ng-echarts.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgEchartsModule", function() { return _ng_echarts_module__WEBPACK_IMPORTED_MODULE_0__["NgEchartsModule"]; });




/***/ }),

/***/ "./src/app/modules/ng-echarts/ng-echarts-bar/bar-config.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/ng-echarts/ng-echarts-bar/bar-config.ts ***!
  \*****************************************************************/
/*! exports provided: BarConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarConfig", function() { return BarConfig; });
/* harmony import */ var _ng_echarts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ng-echarts.model */ "./src/app/modules/ng-echarts/ng-echarts.model.ts");

var BarConfig = /** @class */ (function () {
    function BarConfig(legendList, xAxisList, seriesList) {
        this.legendList = legendList;
        this.xAxisList = xAxisList;
        this.seriesList = seriesList;
    }
    BarConfig.prototype.getOptions = function () {
        var defaultOptions = {
            tooltip: {
                trigger: 'axis',
                padding: 10,
                axisPointer: {
                    lineStyle: {
                        color: '#E6EAEE',
                        type: 'dashed'
                    }
                },
                backgroundColor: _ng_echarts_model__WEBPACK_IMPORTED_MODULE_0__["TooltipBgColor"],
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
            series: this.seriesList.map(function (item) {
                item.itemStyle = {
                    borderWidth: 2
                };
                return item;
            }),
            color: _ng_echarts_model__WEBPACK_IMPORTED_MODULE_0__["ColorLib"]
        };
        return defaultOptions;
    };
    return BarConfig;
}());



/***/ }),

/***/ "./src/app/modules/ng-echarts/ng-echarts-bar/ng-echarts-bar.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/ng-echarts/ng-echarts-bar/ng-echarts-bar.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NgEchartsBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEchartsBarComponent", function() { return NgEchartsBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_echarts_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ng-echarts-tools */ "./src/app/modules/ng-echarts/ng-echarts-tools.ts");
/* harmony import */ var _bar_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-config */ "./src/app/modules/ng-echarts/ng-echarts-bar/bar-config.ts");




var NgEchartsBarComponent = /** @class */ (function () {
    function NgEchartsBarComponent() {
        this.tooltipConfigs = [];
        /**
           * @description {object} 数据配置 - 会在原始数据里寻找
           */
        this._dataConfig = {
            key: 'key',
            children: 'children',
            name: 'name',
            type: 'bar',
            value: 'value',
            valueType: 'largeNum',
            valueUnit: null,
            nameRight: 'nameRight',
            typeRight: 'bar',
            valueRight: 'valueRight',
            valueRightType: 'percent',
            valueRightUnit: null,
        };
        /**
           * @description {array} 原始数据
           * @example 标准格式
           * [{ name: xxx, tooltipConfig: { type: xxx, unit: xxx, realName: xxx }, children: [{ key: xxx, value: xxx } ]}]
           * @example 右 y 轴格式
           * [{ nameRight: xxx, tooltipConfig: { type: xxx, unit: xxx, realName: xxx }, children: [{ key: xxx, valueRight: xxx } ]}]
           */
        this.data = [];
        this.status = null;
        this.loadingSize = 'default';
        this.loadingTip = 'Loading...';
        this.emptyTip = '暂无数据';
        this.optionsInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgEchartsBarComponent.prototype.ngOnChanges = function (_a) {
        var dataConfig = _a.dataConfig, data = _a.data;
        var isDataConfigChange = (dataConfig && dataConfig.currentValue && dataConfig.currentValue !== dataConfig.previousValue);
        var isDataChange = (data && data.currentValue && data.currentValue !== data.previousValue);
        if (isDataConfigChange) {
            Object.assign(this._dataConfig, dataConfig.currentValue);
            if (!isDataChange) {
                this.createOptions(this.dataTmp);
            }
        }
        if (isDataChange) {
            this.dataTmp = data.currentValue;
            if (this.dataTmp && this.dataTmp.length > 0) {
                this.createOptions(this.dataTmp);
            }
        }
    };
    NgEchartsBarComponent.prototype.createOptions = function (data) {
        var _this = this;
        var legendList = [];
        var xAxisList = new Set(); // 自动去重
        var seriesList = [];
        data.forEach(function (item) {
            var leftName = item[_this._dataConfig.name];
            if (item.tooltipConfig) {
                _this.tooltipConfigs.push(item.tooltipConfig);
            }
            // 默认左侧
            if (leftName) {
                legendList.push(leftName);
                var series_1 = [];
                var children = item[_this._dataConfig.children];
                if (children) {
                    children.forEach(function (child) {
                        var key = child[_this._dataConfig.key] || null;
                        if (key) {
                            xAxisList.add(key);
                        }
                        // y 轴数据
                        var leftValue = child[_this._dataConfig.value] || '--';
                        series_1.push(leftValue);
                    });
                }
                var seriesData = {
                    type: _this._dataConfig.type || 'bar',
                    name: leftName,
                    data: series_1
                };
                seriesList.push(seriesData);
            }
            // 右侧
            var rightName = item[_this._dataConfig.nameRight];
            if (rightName) {
                legendList.push(rightName);
                var seriesRight_1 = [];
                var children = item[_this._dataConfig.children];
                if (children) {
                    children.forEach(function (child) {
                        var key = child[_this._dataConfig.key] || null;
                        if (key) {
                            xAxisList.add(key);
                        }
                        var rightValue = child[_this._dataConfig.valueRight] || '--';
                        seriesRight_1.push(rightValue);
                    });
                }
                var seriesRightData = {
                    type: _this._dataConfig.typeRight || 'bar',
                    name: rightName,
                    data: seriesRight_1,
                    yAxisIndex: 1
                };
                seriesList.push(seriesRightData);
            }
        });
        xAxisList = Array.from(xAxisList);
        var barConfig = new _bar_config__WEBPACK_IMPORTED_MODULE_3__["BarConfig"](legendList, xAxisList, seriesList);
        var defaultOptions = barConfig.getOptions();
        this.options = this.optionsHandle(defaultOptions);
        this.optionsInit.emit(this.options);
    };
    NgEchartsBarComponent.prototype.optionsHandle = function (options) {
        var _this = this;
        // tooltip 格式化
        options.tooltip.formatter = function (params) {
            params.map(function (d) {
                Object.assign(d, _this.tooltipConfigs[d.seriesIndex]);
                return d;
            });
            return _ng_echarts_tools__WEBPACK_IMPORTED_MODULE_2__["Tools"].chartTooltipFormatter(params);
        };
        // 左侧 label 格式化
        options.yAxis[0].axisLabel.formatter = _ng_echarts_tools__WEBPACK_IMPORTED_MODULE_2__["Tools"].chartYLabelFormatter(this._dataConfig.valueType);
        // 右侧 label 格式化
        options.yAxis[1].axisLabel.formatter = _ng_echarts_tools__WEBPACK_IMPORTED_MODULE_2__["Tools"].chartYLabelFormatter(this._dataConfig.valueRightType);
        return options;
    };
    NgEchartsBarComponent.prototype.onChartInit = function (chart) {
        this.chartInit.emit(chart);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgEchartsBarComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsBarComponent.prototype, "dataConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsBarComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsBarComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsBarComponent.prototype, "status", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsBarComponent.prototype, "loadingSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsBarComponent.prototype, "loadingTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsBarComponent.prototype, "emptyTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgEchartsBarComponent.prototype, "optionsInit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgEchartsBarComponent.prototype, "chartInit", void 0);
    NgEchartsBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-echarts-bar',
            template: "\n\t\t<ng-echarts\n\t\t\t[height]=\"height\"\n\t\t\t[width]=\"width\"\n\t\t\t[options]=\"options\"\n      [status]=\"status\"\n\t\t\t[loadingSize]=\"loadingSize\"\n      [loadingTip]=\"loadingTip\"\n\t\t\t[emptyTip]=\"emptyTip\"\n\t\t\t(chartInit)=\"onChartInit($event)\">\n\t\t</ng-echarts>"
        })
    ], NgEchartsBarComponent);
    return NgEchartsBarComponent;
}());



/***/ }),

/***/ "./src/app/modules/ng-echarts/ng-echarts-line/line-config.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/ng-echarts/ng-echarts-line/line-config.ts ***!
  \*******************************************************************/
/*! exports provided: LineConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineConfig", function() { return LineConfig; });
/* harmony import */ var _ng_echarts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ng-echarts.model */ "./src/app/modules/ng-echarts/ng-echarts.model.ts");

var LineConfig = /** @class */ (function () {
    function LineConfig(legendList, xAxisList, seriesList) {
        this.legendList = legendList;
        this.xAxisList = xAxisList;
        this.seriesList = seriesList;
    }
    LineConfig.prototype.getOptions = function () {
        var _this = this;
        var options = {
            tooltip: {
                trigger: 'axis',
                padding: 10,
                axisPointer: {
                    lineStyle: {
                        color: '#E6EAEE',
                        type: 'dashed'
                    }
                },
                backgroundColor: _ng_echarts_model__WEBPACK_IMPORTED_MODULE_0__["TooltipBgColor"],
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
                icon: _ng_echarts_model__WEBPACK_IMPORTED_MODULE_0__["LineLegendIconPath"],
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
            series: this.seriesList.map(function (item) {
                if (_this.xAxisList && _this.xAxisList.length === 1) {
                    item.showSymbol = true;
                }
                else {
                    item.showSymbol = false;
                }
                item.hoverAnimation = false;
                item.symbolSize = 10;
                item.itemStyle = {
                    borderWidth: 2
                };
                item.animationDuration = 500;
                // 数据只有1条时，加上区域阴影
                if (_this.seriesList.length === 1) {
                    item.areaStyle = {
                        opacity: 0.1
                    };
                }
                return item;
            }),
            color: _ng_echarts_model__WEBPACK_IMPORTED_MODULE_0__["ColorLib"]
        };
        return options;
    };
    return LineConfig;
}());



/***/ }),

/***/ "./src/app/modules/ng-echarts/ng-echarts-line/ng-echarts-line.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/ng-echarts/ng-echarts-line/ng-echarts-line.component.ts ***!
  \*********************************************************************************/
/*! exports provided: NgEchartsLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEchartsLineComponent", function() { return NgEchartsLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_echarts_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ng-echarts-tools */ "./src/app/modules/ng-echarts/ng-echarts-tools.ts");
/* harmony import */ var _line_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-config */ "./src/app/modules/ng-echarts/ng-echarts-line/line-config.ts");




var NgEchartsLineComponent = /** @class */ (function () {
    function NgEchartsLineComponent() {
        this.tooltipConfigs = [];
        /**
           * @description {object} 数据配置 - 会在原始数据里寻找
           */
        this._dataConfig = {
            key: 'key',
            children: 'children',
            name: 'name',
            type: 'line',
            value: 'value',
            valueType: 'largeNum',
            valueUnit: null,
            nameRight: 'nameRight',
            typeRight: 'line',
            valueRight: 'valueRight',
            valueRightType: 'percent',
            valueRightUnit: null,
        };
        /**
           * @description {array} 原始数据
           * @example 标准格式
           * [{ name: xxx, tooltipConfig: { type: xxx, unit: xxx, realName: xxx }, children: [{ key: xxx, value: xxx } ]}]
           * @example 右 y 轴格式
           * [{ nameRight: xxx, tooltipConfig: { type: xxx, unit: xxx, realName: xxx }, children: [{ key: xxx, valueRight: xxx } ]}]
           */
        this.data = [];
        this.status = null;
        this.loadingSize = 'default';
        this.loadingTip = 'Loading...';
        this.emptyTip = '暂无数据';
        this.optionsInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgEchartsLineComponent.prototype.ngOnChanges = function (_a) {
        var dataConfig = _a.dataConfig, data = _a.data;
        var isDataConfigChange = (dataConfig && dataConfig.currentValue && dataConfig.currentValue !== dataConfig.previousValue);
        var isDataChange = (data && data.currentValue && data.currentValue !== data.previousValue);
        if (isDataConfigChange) {
            Object.assign(this._dataConfig, dataConfig.currentValue);
            if (!isDataChange) {
                this.createOptions(this.dataTmp);
            }
        }
        if (isDataChange) {
            this.dataTmp = data.currentValue;
            if (this.dataTmp && this.dataTmp.length > 0) {
                this.createOptions(this.dataTmp);
            }
        }
    };
    NgEchartsLineComponent.prototype.createOptions = function (data) {
        var _this = this;
        var legendList = [];
        var xAxisList = new Set(); // 自动去重
        var seriesList = [];
        data.forEach(function (item) {
            var leftName = item[_this._dataConfig.name];
            if (item.tooltipConfig) {
                _this.tooltipConfigs.push(item.tooltipConfig);
            }
            // 默认左侧
            if (leftName) {
                legendList.push(leftName);
                var series_1 = [];
                var children = item[_this._dataConfig.children];
                if (children) {
                    children.forEach(function (child) {
                        var key = child[_this._dataConfig.key] || null;
                        if (key) {
                            xAxisList.add(key);
                        }
                        // y 轴数据
                        var leftValue = child[_this._dataConfig.value] || '--';
                        series_1.push(leftValue);
                    });
                }
                var seriesData = {
                    type: _this._dataConfig.type || 'line',
                    name: leftName,
                    data: series_1
                };
                seriesList.push(seriesData);
            }
            // 右侧
            var rightName = item[_this._dataConfig.nameRight];
            if (rightName) {
                legendList.push(rightName);
                var seriesRight_1 = [];
                var children = item[_this._dataConfig.children];
                if (children) {
                    children.forEach(function (child) {
                        var key = child[_this._dataConfig.key] || null;
                        if (key) {
                            xAxisList.add(key);
                        }
                        var rightValue = child[_this._dataConfig.valueRight] || '--';
                        seriesRight_1.push(rightValue);
                    });
                }
                var seriesRightData = {
                    type: _this._dataConfig.typeRight || 'line',
                    name: rightName,
                    data: seriesRight_1,
                    yAxisIndex: 1
                };
                seriesList.push(seriesRightData);
            }
        });
        xAxisList = Array.from(xAxisList);
        var lineConfig = new _line_config__WEBPACK_IMPORTED_MODULE_3__["LineConfig"](legendList, xAxisList, seriesList);
        var defaultOptions = lineConfig.getOptions();
        this.options = this.optionsHandle(defaultOptions);
        this.optionsInit.emit(this.options);
    };
    NgEchartsLineComponent.prototype.optionsHandle = function (options) {
        var _this = this;
        // tooltip 格式化
        options.tooltip.formatter = function (params) {
            params.map(function (d) {
                Object.assign(d, _this.tooltipConfigs[d.seriesIndex]);
                return d;
            });
            var data = params.sort(_this.sortData('value', false));
            return _ng_echarts_tools__WEBPACK_IMPORTED_MODULE_2__["Tools"].chartTooltipFormatter(data);
        };
        // 左侧 label 格式化
        options.yAxis[0].axisLabel.formatter = _ng_echarts_tools__WEBPACK_IMPORTED_MODULE_2__["Tools"].chartYLabelFormatter(this._dataConfig.valueType);
        // 右侧 label 格式化
        options.yAxis[1].axisLabel.formatter = _ng_echarts_tools__WEBPACK_IMPORTED_MODULE_2__["Tools"].chartYLabelFormatter(this._dataConfig.valueRightType);
        return options;
    };
    NgEchartsLineComponent.prototype.onChartInit = function (chart) {
        this.chartInit.emit(chart);
    };
    NgEchartsLineComponent.prototype.sortData = function (type, rev) {
        // rev false降序 || true升序
        if (rev === undefined) {
            rev = 1;
        }
        else {
            rev = (rev) ? 1 : -1;
        }
        return function (a, b) {
            a = +a[type];
            b = +b[type];
            if (a < b) {
                return rev * -1;
            }
            if (a > b) {
                return rev * 1;
            }
            return 0;
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgEchartsLineComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsLineComponent.prototype, "dataConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsLineComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsLineComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsLineComponent.prototype, "status", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsLineComponent.prototype, "loadingSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsLineComponent.prototype, "loadingTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsLineComponent.prototype, "emptyTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgEchartsLineComponent.prototype, "optionsInit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgEchartsLineComponent.prototype, "chartInit", void 0);
    NgEchartsLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-echarts-line',
            template: "\n\t\t<ng-echarts\n\t\t\t[height]=\"height\"\n\t\t\t[width]=\"width\"\n\t\t\t[options]=\"options\"\n      [status]=\"status\"\n\t\t\t[loadingSize]=\"loadingSize\"\n      [loadingTip]=\"loadingTip\"\n\t\t\t[emptyTip]=\"emptyTip\"\n\t\t\t(chartInit)=\"onChartInit($event)\">\n\t\t</ng-echarts>"
        })
    ], NgEchartsLineComponent);
    return NgEchartsLineComponent;
}());



/***/ }),

/***/ "./src/app/modules/ng-echarts/ng-echarts-pie/ng-echarts-pie.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/ng-echarts/ng-echarts-pie/ng-echarts-pie.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NgEchartsPieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEchartsPieComponent", function() { return NgEchartsPieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pie_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pie-config */ "./src/app/modules/ng-echarts/ng-echarts-pie/pie-config.ts");



var NgEchartsPieComponent = /** @class */ (function () {
    function NgEchartsPieComponent() {
        /**
           * @description {object} 数据配置 - 会在原始数据里寻找
           */
        this._dataConfig = {
            name: '',
            key: 'key',
            value: 'value',
            valueType: 'percent',
            tooltipFormatter: null // 提示框浮层内容格式器
        };
        this.status = null;
        this.loadingSize = 'default';
        this.loadingTip = 'Loading...';
        this.emptyTip = '暂无数据';
        this.optionsInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgEchartsPieComponent.prototype.ngOnChanges = function (_a) {
        var dataConfig = _a.dataConfig, data = _a.data;
        var isDataConfigChange = (dataConfig && dataConfig.currentValue && dataConfig.currentValue !== dataConfig.previousValue);
        var isDataChange = (data && data.currentValue && data.currentValue !== data.previousValue);
        if (isDataConfigChange) {
            Object.assign(this._dataConfig, dataConfig.currentValue);
            if (!isDataChange) {
                this.createOptions(this.dataTmp);
            }
        }
        if (isDataChange) {
            this.dataTmp = data.currentValue;
            if (this.dataTmp && this.dataTmp.length > 0) {
                this.createOptions(this.dataTmp);
            }
        }
    };
    NgEchartsPieComponent.prototype.createOptions = function (data) {
        var _this = this;
        var legendList = [];
        var seriesData = [];
        data.forEach(function (item) {
            var key = item[_this._dataConfig.key];
            legendList.push({ name: key });
            seriesData.push({
                name: key,
                value: item[_this._dataConfig.value]
            });
        });
        var seriesList = [{
                name: this._dataConfig.name,
                type: 'pie',
                radius: ['50%', '70%'],
                data: seriesData
            }];
        var pieConfig = new _pie_config__WEBPACK_IMPORTED_MODULE_2__["PieConfig"](legendList, seriesList);
        var options = pieConfig.getDefaultOptions();
        if (this._dataConfig.tooltipFormatter) {
            options.tooltip.formatter = this._dataConfig.tooltipFormatter;
        }
        else if (this._dataConfig.valueType === 'percent') {
            options.tooltip.formatter = function (params) {
                return params.seriesName + "<br>" + params.marker + params.name + "\uFF1A" + params.percent + "%";
            };
        }
        this.options = options;
        this.optionsInit.emit(this.options);
    };
    NgEchartsPieComponent.prototype.onChartInit = function (chart) {
        this.chartInit.emit(chart);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgEchartsPieComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsPieComponent.prototype, "dataConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsPieComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsPieComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsPieComponent.prototype, "status", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsPieComponent.prototype, "loadingSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsPieComponent.prototype, "loadingTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsPieComponent.prototype, "emptyTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgEchartsPieComponent.prototype, "optionsInit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgEchartsPieComponent.prototype, "chartInit", void 0);
    NgEchartsPieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-echarts-pie',
            template: "\n    <ng-echarts\n      [height]=\"height\"\n\t\t\t[width]=\"width\"\n\t\t\t[options]=\"options\"\n      [status]=\"status\"\n\t\t\t[loadingSize]=\"loadingSize\"\n      [loadingTip]=\"loadingTip\"\n\t\t\t[emptyTip]=\"emptyTip\"\n      (chartInit)=\"onChartInit($event)\">\n\t\t</ng-echarts>"
        })
    ], NgEchartsPieComponent);
    return NgEchartsPieComponent;
}());



/***/ }),

/***/ "./src/app/modules/ng-echarts/ng-echarts-pie/pie-config.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/ng-echarts/ng-echarts-pie/pie-config.ts ***!
  \*****************************************************************/
/*! exports provided: PieConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieConfig", function() { return PieConfig; });
/* harmony import */ var _ng_echarts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ng-echarts.model */ "./src/app/modules/ng-echarts/ng-echarts.model.ts");

var PieConfig = /** @class */ (function () {
    function PieConfig(legendList, seriesList) {
        this.legendList = legendList;
        this.seriesList = seriesList;
    }
    PieConfig.prototype.getDefaultOptions = function () {
        var defaultOptions = {
            tooltip: {
                trigger: 'item',
                padding: 10,
                backgroundColor: _ng_echarts_model__WEBPACK_IMPORTED_MODULE_0__["TooltipBgColor"]
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
                data: this.legendList.map(function (item) {
                    item.icon = 'circle';
                    return item;
                })
            },
            series: this.seriesList,
            color: _ng_echarts_model__WEBPACK_IMPORTED_MODULE_0__["ColorLib"]
        };
        return defaultOptions;
    };
    return PieConfig;
}());



/***/ }),

/***/ "./src/app/modules/ng-echarts/ng-echarts-tools.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/ng-echarts/ng-echarts-tools.ts ***!
  \********************************************************/
/*! exports provided: Tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
var Tools = /** @class */ (function () {
    function Tools() {
    }
    Tools.deepClone = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    Tools.getNumberUnits = function (value) {
        var units = ['K', 'M', 'B', 'T', 'P', 'E'];
        var vLen = parseInt(value, 10).toString().length;
        if (vLen < 4) {
            return value;
        }
        else if (value.toString().indexOf('+') !== -1) {
            return value; // 超大数转为科学计数法
        }
        var diff = (vLen > units.length * 3) ?
            units.length * 3 :
            Math.floor((vLen - 1) / 3);
        return (value / Math.pow(1000, diff)) + units[diff - 1];
    };
    Tools.addComma = function (num, fixed) {
        if (!num) {
            return '0';
        }
        var finalNum = (fixed !== undefined) ? num.toFixed(fixed) : num;
        var list = finalNum.toString().split('.');
        var end = (list[1] !== undefined) ? ('.' + list[1]) : '';
        return (+list[0]).toLocaleString() + end;
    };
    Tools.chartYLabelFormatter = function (type) {
        if (type === 'largeNum') {
            return (function (value) {
                return Tools.getNumberUnits(value);
            });
        }
        else if (type === 'percent') {
            return (function (value) {
                return (value * 100).toFixed(0) + '%';
            });
        }
        else if (type === 'percent2') {
            return (function (value) {
                return value + '%';
            });
        }
        return null;
    };
    Tools.chartTooltipFormatter = function (params) {
        var _this = this;
        var tip = '';
        var name = params[0].name;
        params.forEach(function (d, i) {
            var value = d.value;
            var valueStr = '--';
            if ((value || value === 0) && value !== '--') {
                valueStr = value.toString();
                if (d.type === 'largeNum') {
                    valueStr = _this.addComma(value);
                }
                else if (d.type === 'percent') {
                    valueStr = (value * 100).toFixed(2) + '%';
                }
                else if (d.type === 'percent2') {
                    valueStr = value + '%';
                }
                if (d.unit) {
                    valueStr += d.unit;
                }
                if (typeof d.type === 'function') {
                    valueStr = d.type(valueStr, d);
                }
            }
            tip += "<br/>" + d.marker + (d.realName || d.seriesName) + "\uFF1A" + valueStr;
        });
        return name + tip;
    };
    return Tools;
}());



/***/ }),

/***/ "./src/app/modules/ng-echarts/ng-echarts-treemap/ng-echarts-treemap.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/ng-echarts/ng-echarts-treemap/ng-echarts-treemap.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NgEchartsTreemapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEchartsTreemapComponent", function() { return NgEchartsTreemapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_echarts_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ng-echarts.model */ "./src/app/modules/ng-echarts/ng-echarts.model.ts");



var NgEchartsTreemapComponent = /** @class */ (function () {
    function NgEchartsTreemapComponent() {
        this.isFinish = false;
        this.level = 0;
        /**
           * @description {object} 图表自定义配置
           */
        this._dataConfig = {
            name: '',
            tooltipFormatter: null // 提示框浮层内容格式器
        };
        /**
           * @description {array} 原始数据
           *  [{ name: xxx, value: xxx }]
           */
        this.data = [];
        this.status = null;
        this.loadingSize = 'default';
        this.loadingTip = 'Loading...';
        this.emptyTip = '暂无数据';
        this.optionsInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.levelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgEchartsTreemapComponent.prototype.ngOnChanges = function (_a) {
        var dataConfig = _a.dataConfig, data = _a.data;
        var isDataConfigChange = (dataConfig && dataConfig.currentValue && dataConfig.currentValue !== dataConfig.previousValue);
        var isDataChange = (data && data.currentValue && data.currentValue !== data.previousValue);
        if (isDataConfigChange) {
            Object.assign(this._dataConfig, dataConfig.currentValue);
            if (!isDataChange) {
                this.createOptions(this.dataTmp);
            }
        }
        if (isDataChange) {
            this.dataTmp = data.currentValue;
            if (this.dataTmp && this.dataTmp.length > 0) {
                this.createOptions(this.dataTmp);
            }
        }
    };
    NgEchartsTreemapComponent.prototype.createOptions = function (data) {
        var options = {
            tooltip: {
                formatter: this._dataConfig.tooltipFormatter,
                backgroundColor: _ng_echarts_model__WEBPACK_IMPORTED_MODULE_2__["TooltipBgColor"]
            },
            series: [{
                    name: this._dataConfig.name || '',
                    type: 'treemap',
                    width: '100%',
                    height: '100%',
                    roam: false,
                    zoomToNodeRatio: 0,
                    drillDownIcon: '',
                    nodeClick: 'none',
                    leafDepth: 1,
                    breadcrumb: {
                        show: false
                    },
                    itemStyle: {
                        gapWidth: 1
                    },
                    levels: [{
                            color: _ng_echarts_model__WEBPACK_IMPORTED_MODULE_2__["ColorLib"],
                        }],
                    data: data
                }]
        };
        this.level = 0;
        this.options = options;
        this.optionsInit.emit(this.options);
    };
    NgEchartsTreemapComponent.prototype.onChartInit = function (chart) {
        var _this = this;
        if (chart) {
            chart.on('finished', function () {
                _this.isFinish = true;
            });
            // 第二层时点击返回上一层
            chart.on('click', function (data) {
                if (!_this.isFinish || !data) {
                    return false;
                }
                _this.isFinish = false;
                if (_this.level === 1) {
                    chart.setOption(chart.getOption());
                    _this.level = 0;
                    _this.levelChange.emit(data);
                }
                else if (_this.level === 0) {
                    var d = data.data;
                    if (d && d.name && d.children && d.children.length > 0) {
                        _this.level = 1;
                        _this.levelChange.emit(data);
                    }
                }
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], NgEchartsTreemapComponent.prototype, "data", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsTreemapComponent.prototype, "dataConfig", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsTreemapComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsTreemapComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsTreemapComponent.prototype, "status", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsTreemapComponent.prototype, "loadingSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsTreemapComponent.prototype, "loadingTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsTreemapComponent.prototype, "emptyTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgEchartsTreemapComponent.prototype, "optionsInit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgEchartsTreemapComponent.prototype, "chartInit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], NgEchartsTreemapComponent.prototype, "levelChange", void 0);
    NgEchartsTreemapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-echarts-treemap',
            template: "\n\t\t<ng-echarts\n      [height]=\"height\"\n      [width]=\"width\"\n      [options]=\"options\"\n      [status]=\"status\"\n      [loadingSize]=\"loadingSize\"\n      [loadingTip]=\"loadingTip\"\n      [emptyTip]=\"emptyTip\"\n      (chartInit)=\"onChartInit($event)\">\n\t\t</ng-echarts>"
        })
    ], NgEchartsTreemapComponent);
    return NgEchartsTreemapComponent;
}());



/***/ }),

/***/ "./src/app/modules/ng-echarts/ng-echarts.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/ng-echarts/ng-echarts.component.ts ***!
  \************************************************************/
/*! exports provided: NgEchartsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEchartsComponent", function() { return NgEchartsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_4__);





var NgEchartsComponent = /** @class */ (function () {
    function NgEchartsComponent(el, ngZone) {
        this.el = el;
        this.ngZone = ngZone;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.isFinished = false;
        this.status = null;
        this.loadingSize = 'default';
        this.loadingTip = 'Loading...';
        this.emptyTip = '暂无数据';
        this.height = 400;
        this.width = '100%';
        this.initOpts = {};
        /**
           * @description 默认开启图表自适应
           */
        this.autoResize = true;
        /**
           * @description 图表实例化后的回调函数，$event就是 echartsInstance 对象
           * @see http://echarts.baidu.com/api.html#echartsInstance
           * @example (chartInit)='onChartInit($event)'
           *
           */
        this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /**
           * @description 图表事件，回调函数中的参数 $event 就是 params 对象
           * @see http://echarts.baidu.com/api.html#events
           * @example (chartClick)='onChartClick($event)'
           */
        this.chartClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartDblClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartMouseDown = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartMouseUp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartMouseOver = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartMouseOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartGlobalOut = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartContextMenu = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartDataZoom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    NgEchartsComponent.prototype.ngOnInit = function () {
        this.domEl = this.el.nativeElement;
        this.initChart();
    };
    NgEchartsComponent.prototype.ngOnChanges = function (_a) {
        var status = _a.status, options = _a.options;
        if (status && status.currentValue !== status.previousValue) {
            if (status.currentValue === 'empty') {
                if (this.chart) {
                    this.chart.clear();
                }
                return false;
            }
        }
        if (options && options.currentValue && !options.firstChange) {
            this.onOptionsChange(options.currentValue);
        }
    };
    NgEchartsComponent.prototype.ngAfterViewInit = function () {
        this.onOptionsChange(this.options);
    };
    NgEchartsComponent.prototype.ngOnDestroy = function () {
        this.disposeChart();
    };
    NgEchartsComponent.prototype.initChart = function () {
        if (this.height) {
            var height = isNaN(+this.height) ? this.height : +this.height + 'px';
            this.domEl.style.height = height.toString();
        }
        else {
            this.domEl.style.height = '400px';
        }
        if (this.width) {
            var width = isNaN(+this.width) ? this.width : +this.width + 'px';
            this.domEl.style.width = width.toString();
        }
        else {
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
    };
    NgEchartsComponent.prototype.onOptionsChange = function (opt) {
        var _this = this;
        if (!opt) {
            return;
        }
        if (!this.chart) {
            this.isFinished = false;
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.chart = this.createChart();
            this.addEventHandle();
            if (this.autoResize) {
                this.listenResize();
            }
            // 渲染结束执行一下图表自适应，防止视图大小改变
            this.chart.on('finished', function () {
                if (!_this.isFinished) {
                    _this.chart.resize();
                    _this.isFinished = true;
                    _this.chartInit.emit(_this.chart);
                }
            });
        }
        this.chart.setOption(opt, true);
    };
    NgEchartsComponent.prototype.createChart = function () {
        var _this = this;
        // 初始化图表实例，跳出 ng 检测优化性能
        return this.ngZone.runOutsideAngular(function () {
            return Object(echarts__WEBPACK_IMPORTED_MODULE_4__["init"])(_this.chartElRef.nativeElement, _this.theme || undefined, _this.initOpts || undefined);
        });
    };
    NgEchartsComponent.prototype.listenResize = function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize')
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(10), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(_this.destroy$))
                .subscribe(function () {
                if (_this.chart) {
                    _this.chart.resize();
                }
            });
        });
    };
    NgEchartsComponent.prototype.addEventHandle = function () {
        var _this = this;
        this.chart.on('click', function (e) {
            return _this.ngZone.run(function () { return _this.chartClick.emit(e); });
        });
        this.chart.on('dblClick', function (e) {
            return _this.ngZone.run(function () { return _this.chartDblClick.emit(e); });
        });
        this.chart.on('mousedown', function (e) {
            return _this.ngZone.run(function () { return _this.chartMouseDown.emit(e); });
        });
        this.chart.on('mouseup', function (e) {
            return _this.ngZone.run(function () { return _this.chartMouseUp.emit(e); });
        });
        this.chart.on('mouseover', function (e) {
            return _this.ngZone.run(function () { return _this.chartMouseOver.emit(e); });
        });
        this.chart.on('mouseout', function (e) {
            return _this.ngZone.run(function () { return _this.chartMouseOut.emit(e); });
        });
        this.chart.on('globalout', function (e) {
            return _this.ngZone.run(function () { return _this.chartGlobalOut.emit(e); });
        });
        this.chart.on('contextmenu', function (e) {
            return _this.ngZone.run(function () { return _this.chartContextMenu.emit(e); });
        });
        this.chart.on('datazoom', function (e) {
            return _this.ngZone.run(function () { return _this.chartDataZoom.emit(e); });
        });
    };
    NgEchartsComponent.prototype.disposeChart = function () {
        this.destroy$.next();
        this.destroy$.complete();
        if (this.chart) {
            this.chart.dispose();
            this.chart = null;
        }
    };
    var _a;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgEchartsComponent.prototype, "status", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "loadingSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "loadingTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "emptyTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", typeof (_a = typeof echarts__WEBPACK_IMPORTED_MODULE_4__["EChartOption"] !== "undefined" && echarts__WEBPACK_IMPORTED_MODULE_4__["EChartOption"]) === "function" ? _a : Object)
    ], NgEchartsComponent.prototype, "options", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgEchartsComponent.prototype, "theme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "initOpts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "autoResize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "chartInit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "chartClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "chartDblClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "chartMouseDown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "chartMouseUp", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "chartMouseOver", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "chartMouseOut", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "chartGlobalOut", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "chartContextMenu", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "chartDataZoom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chartEl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], NgEchartsComponent.prototype, "chartElRef", void 0);
    NgEchartsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-echarts',
            template: "\n\t\t<div class=\"echarts-container\" #chartEl></div>\n    <charts-loading\n      *ngIf=\"status === 'loading'\"\n\t\t\t[size]=\"loadingSize\"\n\t\t\t[tip]=\"loadingTip\"></charts-loading>\n    <charts-empty\n      *ngIf=\"status === 'empty'\"\n\t\t\t[tip]=\"emptyTip\"></charts-empty>\n\t",
            styles: ["\n\t\t:host() {\n\t\t\tposition: relative;\n\t\t\tdisplay: block;\n\t\t}\n\t\t.echarts-container {\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t}\n\t"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], NgEchartsComponent);
    return NgEchartsComponent;
}());



/***/ }),

/***/ "./src/app/modules/ng-echarts/ng-echarts.model.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/ng-echarts/ng-echarts.model.ts ***!
  \********************************************************/
/*! exports provided: ColorLib, LineLegendIconPath, TooltipBgColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorLib", function() { return ColorLib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineLegendIconPath", function() { return LineLegendIconPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipBgColor", function() { return TooltipBgColor; });
// chart color lib
var ColorLib = [];
// line
var LineLegendIconPath = "path://M7.1,4C7.6,1.7,9.6,0,12,0s4.4,1.7,\n  4.9,4H24v2h-7.1c-0.5,2.3-2.5,4-4.9,4S7.6,8.3,7.1,6H0 V4H7.1z M12,8c1.7,0,3-1.3,3-3s-1.3-3-3-3S9,3.3,9,5S10.3,8,12,8z";
// tooltip
var TooltipBgColor = '#353C48';


/***/ }),

/***/ "./src/app/modules/ng-echarts/ng-echarts.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/ng-echarts/ng-echarts.module.ts ***!
  \*********************************************************/
/*! exports provided: NgEchartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEchartsModule", function() { return NgEchartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _charts_base_charts_empty_charts_empty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts-base/charts-empty/charts-empty.component */ "./src/app/modules/ng-echarts/charts-base/charts-empty/charts-empty.component.ts");
/* harmony import */ var _charts_base_charts_loading_charts_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts-base/charts-loading/charts-loading.component */ "./src/app/modules/ng-echarts/charts-base/charts-loading/charts-loading.component.ts");
/* harmony import */ var _ng_echarts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ng-echarts.component */ "./src/app/modules/ng-echarts/ng-echarts.component.ts");
/* harmony import */ var _ng_echarts_line_ng_echarts_line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ng-echarts-line/ng-echarts-line.component */ "./src/app/modules/ng-echarts/ng-echarts-line/ng-echarts-line.component.ts");
/* harmony import */ var _ng_echarts_bar_ng_echarts_bar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng-echarts-bar/ng-echarts-bar.component */ "./src/app/modules/ng-echarts/ng-echarts-bar/ng-echarts-bar.component.ts");
/* harmony import */ var _ng_echarts_pie_ng_echarts_pie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ng-echarts-pie/ng-echarts-pie.component */ "./src/app/modules/ng-echarts/ng-echarts-pie/ng-echarts-pie.component.ts");
/* harmony import */ var _ng_echarts_treemap_ng_echarts_treemap_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ng-echarts-treemap/ng-echarts-treemap.component */ "./src/app/modules/ng-echarts/ng-echarts-treemap/ng-echarts-treemap.component.ts");











var NgEchartsModule = /** @class */ (function () {
    function NgEchartsModule() {
    }
    NgEchartsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"]
            ],
            declarations: [
                _charts_base_charts_empty_charts_empty_component__WEBPACK_IMPORTED_MODULE_4__["ChartsEmptyComponent"],
                _charts_base_charts_loading_charts_loading_component__WEBPACK_IMPORTED_MODULE_5__["ChartsLoadingComponent"],
                _ng_echarts_component__WEBPACK_IMPORTED_MODULE_6__["NgEchartsComponent"],
                _ng_echarts_line_ng_echarts_line_component__WEBPACK_IMPORTED_MODULE_7__["NgEchartsLineComponent"],
                _ng_echarts_bar_ng_echarts_bar_component__WEBPACK_IMPORTED_MODULE_8__["NgEchartsBarComponent"],
                _ng_echarts_pie_ng_echarts_pie_component__WEBPACK_IMPORTED_MODULE_9__["NgEchartsPieComponent"],
                _ng_echarts_treemap_ng_echarts_treemap_component__WEBPACK_IMPORTED_MODULE_10__["NgEchartsTreemapComponent"]
            ],
            exports: [
                _ng_echarts_component__WEBPACK_IMPORTED_MODULE_6__["NgEchartsComponent"],
                _ng_echarts_line_ng_echarts_line_component__WEBPACK_IMPORTED_MODULE_7__["NgEchartsLineComponent"],
                _ng_echarts_bar_ng_echarts_bar_component__WEBPACK_IMPORTED_MODULE_8__["NgEchartsBarComponent"],
                _ng_echarts_pie_ng_echarts_pie_component__WEBPACK_IMPORTED_MODULE_9__["NgEchartsPieComponent"],
                _ng_echarts_treemap_ng_echarts_treemap_component__WEBPACK_IMPORTED_MODULE_10__["NgEchartsTreemapComponent"]
            ]
        })
    ], NgEchartsModule);
    return NgEchartsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gaomd/Documents/github/colorbox/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map