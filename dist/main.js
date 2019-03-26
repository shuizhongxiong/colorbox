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

module.exports = "<div class=\"app-wrapper\">\n  <app-header (headerReset)=\"headerReset()\" (headerShare)=\"headerShare()\">\n  </app-header>\n  <div class=\"app-content\">\n    <div class=\"content-palette\">\n      <app-color-palette (resultChange)=\"resultChange($event)\"\n        (graphChange)=\"graphChange($event)\">\n      </app-color-palette>\n    </div>\n    <div class=\"content-main\">\n      <div class=\"main-graph\">\n        <app-color-graph [result]=\"result\" [graph]=\"graph\"></app-color-graph>\n      </div>\n      <div class=\"main-chart\">\n        <app-color-chart [result]=\"result\"></app-color-chart>\n      </div>\n    </div>\n    <div class=\"content-stack\">\n      <app-color-stack [result]=\"result\"></app-color-stack>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-wrapper {\n  min-width: 1000px; }\n  .app-wrapper .app-content {\n    display: flex;\n    height: calc(100vh - 60px);\n    background-color: #fff; }\n  .app-wrapper .app-content .content-palette {\n      flex-shrink: 0;\n      overflow: auto;\n      padding: 24px;\n      width: 24%;\n      min-width: 240px; }\n  .app-wrapper .app-content .content-main {\n      flex-grow: 1;\n      margin: 20px 0 20px 20px;\n      width: 52%; }\n  .app-wrapper .app-content .content-main .main-graph {\n        margin-bottom: 20px;\n        height: calc((100vh - 60px - 60px) / 2);\n        box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);\n        border-radius: 2px; }\n  .app-wrapper .app-content .content-main .main-chart {\n        overflow: auto;\n        height: calc((100vh - 60px - 60px) / 2);\n        box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);\n        border-radius: 2px; }\n  .app-wrapper .app-content .content-stack {\n      flex-shrink: 0;\n      margin: 20px;\n      width: 24%;\n      min-width: 240px;\n      box-shadow: 0 4px 6px 0 rgba(31, 31, 31, 0.05), 0 0 2px 0 rgba(31, 31, 31, 0.2);\n      border-radius: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsaUJBQWlCLEVBQUE7RUFEbkI7SUFHSSxhQUFhO0lBQ2IsMEJBQW9DO0lBQ3BDLHNCQUFzQixFQUFBO0VBTDFCO01BT00sY0FBYztNQUNkLGNBQWM7TUFDZCxhQUFhO01BQ2IsVUFBVTtNQUNWLGdCQUFnQixFQUFBO0VBWHRCO01BY00sWUFBWTtNQUNaLHdCQUF3QjtNQUN4QixVQUFVLEVBQUE7RUFoQmhCO1FBa0JRLG1CQUFtQjtRQUNuQix1Q0FBaUQ7UUFDakQsK0VBQWdGO1FBQ2hGLGtCQUFrQixFQUFBO0VBckIxQjtRQXdCUSxjQUFjO1FBQ2QsdUNBQWlEO1FBQ2pELCtFQUFnRjtRQUNoRixrQkFBa0IsRUFBQTtFQTNCMUI7TUErQk0sY0FBYztNQUNkLFlBQVk7TUFDWixVQUFVO01BQ1YsZ0JBQWdCO01BQ2hCLCtFQUFnRjtNQUNoRixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiR0b3AtaGVpZ2h0OiA2MHB4O1xuLmFwcC13cmFwcGVyIHtcbiAgbWluLXdpZHRoOiAxMDAwcHg7XG4gIC5hcHAtY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAjeyR0b3AtaGVpZ2h0fSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAuY29udGVudC1wYWxldHRlIHtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgd2lkdGg6IDI0JTtcbiAgICAgIG1pbi13aWR0aDogMjQwcHg7XG4gICAgfVxuICAgIC5jb250ZW50LW1haW4ge1xuICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgbWFyZ2luOiAyMHB4IDAgMjBweCAyMHB4O1xuICAgICAgd2lkdGg6IDUyJTtcbiAgICAgIC5tYWluLWdyYXBoIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKCgxMDB2aCAtIDYwcHggLSAjeyR0b3AtaGVpZ2h0fSkgLyAyKTtcbiAgICAgICAgYm94LXNoYWRvdzogMCA0cHggNnB4IDAgcmdiYSgzMSwgMzEsIDMxLCAwLjA1KSwgMCAwIDJweCAwIHJnYmEoMzEsIDMxLCAzMSwgMC4yMCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgIH1cbiAgICAgIC5tYWluLWNoYXJ0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGhlaWdodDogY2FsYygoMTAwdmggLSA2MHB4IC0gI3skdG9wLWhlaWdodH0pIC8gMik7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDZweCAwIHJnYmEoMzEsIDMxLCAzMSwgMC4wNSksIDAgMCAycHggMCByZ2JhKDMxLCAzMSwgMzEsIDAuMjApO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICB9XG4gICAgfVxuICAgIC5jb250ZW50LXN0YWNrIHtcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgd2lkdGg6IDI0JTtcbiAgICAgIG1pbi13aWR0aDogMjQwcHg7XG4gICAgICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDMxLCAzMSwgMzEsIDAuMDUpLCAwIDAgMnB4IDAgcmdiYSgzMSwgMzEsIDMxLCAwLjIwKTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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
        this.graph = '';
    }
    AppComponent.prototype.resultChange = function (data) {
        if (data && Array.isArray(data)) {
            this.result = data.slice();
        }
    };
    AppComponent.prototype.graphChange = function (value) {
        this.graph = value;
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
/* harmony import */ var _core_ng_echarts__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/ng-echarts */ "./src/app/core/ng-echarts/index.ts");
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
                _core_ng_echarts__WEBPACK_IMPORTED_MODULE_10__["NgEchartsModule"]
            ],
            providers: [{ provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_7__["zh_CN"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_11__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/ng-echarts/charts-base/charts-empty/charts-empty.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/core/ng-echarts/charts-base/charts-empty/charts-empty.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"charts-empty\" *ngIf=\"isShow\">\n  <div class=\"empty-overlay\"></div>\n  <div class=\"empty-text\" [innerHtml]=\"emptyText\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/core/ng-echarts/charts-base/charts-empty/charts-empty.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/core/ng-echarts/charts-base/charts-empty/charts-empty.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".charts-empty .empty-overlay {\n  overflow: hidden;\n  z-index: 9999;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.charts-empty .empty-text {\n  z-index: 10000;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate3d(-50%, -50%, 0);\n          transform: translate3d(-50%, -50%, 0); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvY29yZS9uZy1lY2hhcnRzL2NoYXJ0cy1iYXNlL2NoYXJ0cy1lbXB0eS9jaGFydHMtZW1wdHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1Asb0JBQW9CO0VBQ3BCLHlCQUFpQjtLQUFqQixzQkFBaUI7TUFBakIscUJBQWlCO1VBQWpCLGlCQUFpQixFQUFBOztBQVZyQjtFQWFJLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCw2Q0FBcUM7VUFBckMscUNBQXFDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb3JlL25nLWVjaGFydHMvY2hhcnRzLWJhc2UvY2hhcnRzLWVtcHR5L2NoYXJ0cy1lbXB0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydHMtZW1wdHkge1xuICAuZW1wdHktb3ZlcmxheSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgLmVtcHR5LXRleHQge1xuICAgIHotaW5kZXg6IDEwMDAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNTAlLCAtNTAlLCAwKTtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/ng-echarts/charts-base/charts-empty/charts-empty.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/core/ng-echarts/charts-base/charts-empty/charts-empty.component.ts ***!
  \************************************************************************************/
/*! exports provided: ChartsEmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsEmptyComponent", function() { return ChartsEmptyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartsEmptyComponent = /** @class */ (function () {
    function ChartsEmptyComponent() {
        this.isShow = false;
        this.emptyText = '暂无数据';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartsEmptyComponent.prototype, "isShow", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartsEmptyComponent.prototype, "emptyText", void 0);
    ChartsEmptyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'charts-empty',
            template: __webpack_require__(/*! ./charts-empty.component.html */ "./src/app/core/ng-echarts/charts-base/charts-empty/charts-empty.component.html"),
            styles: [__webpack_require__(/*! ./charts-empty.component.scss */ "./src/app/core/ng-echarts/charts-base/charts-empty/charts-empty.component.scss")]
        })
    ], ChartsEmptyComponent);
    return ChartsEmptyComponent;
}());



/***/ }),

/***/ "./src/app/core/ng-echarts/charts-base/charts-loading/charts-loading.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/core/ng-echarts/charts-base/charts-loading/charts-loading.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"charts-loading\" *ngIf=\"isLoading\">\n  <div class=\"loading-overlay\"></div>\n  <nz-spin [nzSize]=\"size\" [nzTip]=\"tip\" [nzSpinning]=\"isLoading\">\n  </nz-spin>\n</div>\n"

/***/ }),

/***/ "./src/app/core/ng-echarts/charts-base/charts-loading/charts-loading.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/core/ng-echarts/charts-base/charts-loading/charts-loading.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".charts-loading .loading-overlay {\n  overflow: hidden;\n  z-index: 9999;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.charts-loading nz-spin {\n  z-index: 10000;\n  position: absolute;\n  top: 50%;\n  left: 50%; }\n\n.charts-loading nz-spin .ant-spin {\n    margin: -50% -50% 0 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvY29yZS9uZy1lY2hhcnRzL2NoYXJ0cy1iYXNlL2NoYXJ0cy1sb2FkaW5nL2NoYXJ0cy1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLG9CQUFvQjtFQUNwQix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUIsRUFBQTs7QUFWckI7RUFhSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBaEJiO0lBa0JNLHFCQUFxQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29yZS9uZy1lY2hhcnRzL2NoYXJ0cy1iYXNlL2NoYXJ0cy1sb2FkaW5nL2NoYXJ0cy1sb2FkaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXJ0cy1sb2FkaW5nIHtcbiAgLmxvYWRpbmctb3ZlcmxheSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIH1cbiAgbnotc3BpbiB7XG4gICAgei1pbmRleDogMTAwMDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICAuYW50LXNwaW4ge1xuICAgICAgbWFyZ2luOiAtNTAlIC01MCUgMCAwO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/core/ng-echarts/charts-base/charts-loading/charts-loading.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/core/ng-echarts/charts-base/charts-loading/charts-loading.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ChartsLoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsLoadingComponent", function() { return ChartsLoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartsLoadingComponent = /** @class */ (function () {
    function ChartsLoadingComponent() {
        this.isLoading = false;
        this.tip = 'Loading...';
        this.size = 'default';
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChartsLoadingComponent.prototype, "isLoading", void 0);
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
            template: __webpack_require__(/*! ./charts-loading.component.html */ "./src/app/core/ng-echarts/charts-base/charts-loading/charts-loading.component.html"),
            styles: [__webpack_require__(/*! ./charts-loading.component.scss */ "./src/app/core/ng-echarts/charts-base/charts-loading/charts-loading.component.scss")]
        })
    ], ChartsLoadingComponent);
    return ChartsLoadingComponent;
}());



/***/ }),

/***/ "./src/app/core/ng-echarts/index.ts":
/*!******************************************!*\
  !*** ./src/app/core/ng-echarts/index.ts ***!
  \******************************************/
/*! exports provided: NgEchartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ng_echarts_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-echarts.module */ "./src/app/core/ng-echarts/ng-echarts.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgEchartsModule", function() { return _ng_echarts_module__WEBPACK_IMPORTED_MODULE_0__["NgEchartsModule"]; });




/***/ }),

/***/ "./src/app/core/ng-echarts/ng-echarts-line/line-config.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/ng-echarts/ng-echarts-line/line-config.ts ***!
  \****************************************************************/
/*! exports provided: LineConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineConfig", function() { return LineConfig; });
/* harmony import */ var _ng_echarts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ng-echarts.model */ "./src/app/core/ng-echarts/ng-echarts.model.ts");

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
        };
        return options;
    };
    return LineConfig;
}());



/***/ }),

/***/ "./src/app/core/ng-echarts/ng-echarts-line/ng-echarts-line.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/core/ng-echarts/ng-echarts-line/ng-echarts-line.component.ts ***!
  \******************************************************************************/
/*! exports provided: NgEchartsLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEchartsLineComponent", function() { return NgEchartsLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tool */ "./src/app/core/ng-echarts/tool.ts");
/* harmony import */ var _line_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./line-config */ "./src/app/core/ng-echarts/ng-echarts-line/line-config.ts");




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
            value: 'value',
            valueType: 'largeNum',
            valueUnit: null,
            nameRight: 'nameRight',
            valueRight: 'valueRight',
            valueRightType: 'percent',
            valueRightUnit: null,
        };
        this.loadingSize = 'default';
        this.loadingTip = 'Loading...';
        this.isShowEmpty = false;
        this.emptyText = '暂无数据';
        this.optionsInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(NgEchartsLineComponent.prototype, "dataConfig", {
        set: function (data) {
            if (data) {
                Object.assign(this._dataConfig, data);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgEchartsLineComponent.prototype, "data", {
        /**
           * @description {array} 原始数据
           * @example 标准格式
           * [{ name: xxx, tooltipConfig: { type: xxx, unit: xxx, realName: xxx }, children: [{ key: xxx, value: xxx } ]}]
           * @example 右 y 轴格式
           * [{ nameRight: xxx, tooltipConfig: { type: xxx, unit: xxx, realName: xxx }, children: [{ key: xxx, valueRight: xxx } ]}]
           */
        set: function (data) {
            var json = data;
            if (json && json.length > 0) {
                this.createOptions(json);
            }
        },
        enumerable: true,
        configurable: true
    });
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
                    type: 'line',
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
                    type: 'line',
                    name: rightName,
                    data: seriesRight_1,
                    yAxisIndex: 1
                };
                seriesList.push(seriesRightData);
            }
        });
        xAxisList = Array.from(xAxisList);
        var lineConfig = new _line_config__WEBPACK_IMPORTED_MODULE_3__["LineConfig"](legendList, xAxisList, seriesList);
        // Delay execute to wait for the map size to be initialized.
        // setTimeout(() => {
        var defaultOptions = lineConfig.getOptions();
        this.options = this.optionsHandle(defaultOptions);
        this.optionsInit.emit(this.options);
        // }, 0);
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
            return _tool__WEBPACK_IMPORTED_MODULE_2__["Tool"].chartTooltipFormatter(data);
        };
        // 左侧 label 格式化
        options.yAxis[0].axisLabel.formatter = _tool__WEBPACK_IMPORTED_MODULE_2__["Tool"].chartYLabelFormatter(this._dataConfig.valueType);
        // 右侧 label 格式化
        options.yAxis[1].axisLabel.formatter = _tool__WEBPACK_IMPORTED_MODULE_2__["Tool"].chartYLabelFormatter(this._dataConfig.valueRightType);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], NgEchartsLineComponent.prototype, "dataConfig", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], NgEchartsLineComponent.prototype, "data", null);
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
    ], NgEchartsLineComponent.prototype, "loadingSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsLineComponent.prototype, "loadingTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsLineComponent.prototype, "isShowEmpty", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsLineComponent.prototype, "emptyText", void 0);
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
            template: "\n\t\t<ng-echarts\n\t\t\t[height]=\"height\"\n\t\t\t[width]=\"width\"\n\t\t\t[options]=\"options\"\n\t\t\t[loadingSize]=\"loadingSize\"\n\t\t\t[loadingTip]=\"loadingTip\"\n\t\t\t[isShowEmpty]=\"isShowEmpty\"\n\t\t\t[emptyText]=\"emptyText\"\n\t\t\t(chartInit)='onChartInit($event)'>\n\t\t</ng-echarts>"
        })
    ], NgEchartsLineComponent);
    return NgEchartsLineComponent;
}());



/***/ }),

/***/ "./src/app/core/ng-echarts/ng-echarts-pie/ng-echarts-pie.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/core/ng-echarts/ng-echarts-pie/ng-echarts-pie.component.ts ***!
  \****************************************************************************/
/*! exports provided: NgEchartsPieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEchartsPieComponent", function() { return NgEchartsPieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pie_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pie-config */ "./src/app/core/ng-echarts/ng-echarts-pie/pie-config.ts");



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
        this.loadingSize = 'default';
        this.loadingTip = 'Loading...';
        this.isShowEmpty = false;
        this.emptyText = '暂无数据';
        this.optionsInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.chartInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(NgEchartsPieComponent.prototype, "dataConfig", {
        set: function (data) {
            if (data) {
                this.createDataConfig(data);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgEchartsPieComponent.prototype, "data", {
        /**
         * @description {array} 原始数据
         * @example 标准格式
         * [{ key: xxx, value: xxx }]
         */
        set: function (data) {
            var json = data;
            if (json && json.length > 0) {
                this.createOptions(json);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgEchartsPieComponent.prototype.createDataConfig = function (data) {
        this._dataConfig = Object.assign(this._dataConfig, data);
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
        var seriesList = [
            {
                name: this._dataConfig.name,
                type: 'pie',
                radius: ['50%', '70%'],
                data: seriesData
            }
        ];
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
        // Delay execute to wait for the map size to be initialized.
        // setTimeout(() => {
        this.options = options;
        this.optionsInit.emit(this.options);
        // }, 0);
    };
    NgEchartsPieComponent.prototype.onChartInit = function (chart) {
        this.chartInit.emit(chart);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], NgEchartsPieComponent.prototype, "dataConfig", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Array])
    ], NgEchartsPieComponent.prototype, "data", null);
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
    ], NgEchartsPieComponent.prototype, "loadingSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsPieComponent.prototype, "loadingTip", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsPieComponent.prototype, "isShowEmpty", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsPieComponent.prototype, "emptyText", void 0);
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
            template: "\n\t\t<ng-echarts\n\t\t\t[height]=\"height\"\n\t\t\t[width]=\"width\"\n\t\t\t[options]=\"options\"\n\t\t\t[loadingSize]=\"loadingSize\"\n\t\t\t[loadingTip]=\"loadingTip\"\n\t\t\t[isShowEmpty]=\"isShowEmpty\"\n      [emptyText]=\"emptyText\"\n      (chartInit)='onChartInit($event)'>\n\t\t</ng-echarts>"
        })
    ], NgEchartsPieComponent);
    return NgEchartsPieComponent;
}());



/***/ }),

/***/ "./src/app/core/ng-echarts/ng-echarts-pie/pie-config.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/ng-echarts/ng-echarts-pie/pie-config.ts ***!
  \**************************************************************/
/*! exports provided: PieConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PieConfig", function() { return PieConfig; });
/* harmony import */ var _ng_echarts_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ng-echarts.model */ "./src/app/core/ng-echarts/ng-echarts.model.ts");

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

/***/ "./src/app/core/ng-echarts/ng-echarts.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/ng-echarts/ng-echarts.component.ts ***!
  \*********************************************************/
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
        this.isLoading = true;
        this.loadingSize = 'default';
        this.loadingTip = 'Loading...';
        this.isShowEmpty = false;
        this.emptyText = '暂无数据';
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
        var isShowEmpty = _a.isShowEmpty, options = _a.options;
        if (this.isShowEmpty || (isShowEmpty && isShowEmpty.currentValue)) {
            this.disposeChart();
        }
        else if (options && options.currentValue && !options.firstChange) {
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
        this.isLoading = true;
        if (!this.chart) {
            this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.chart = this.createChart();
            this.addEventHandle();
            if (this.autoResize) {
                this.listenResize();
            }
            this.chartInit.emit(this.chart);
        }
        this.chart.setOption(opt, true);
        setTimeout(function () {
            if (_this.chart) {
                _this.chart.resize();
                _this.isLoading = false;
            }
        }, 0);
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
    };
    var _a;
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
    ], NgEchartsComponent.prototype, "isShowEmpty", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgEchartsComponent.prototype, "emptyText", void 0);
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
            template: "\n\t\t<div class=\"echarts-container\" #chartEl></div>\n\t\t<charts-loading\n\t\t\t[isLoading]=\"isLoading\"\n\t\t\t[size]=\"loadingSize\"\n\t\t\t[tip]=\"loadingTip\"></charts-loading>\n\t\t<charts-empty\n\t\t\t[isShow]=\"isShowEmpty\"\n\t\t\t[emptyText]=\"emptyText\"></charts-empty>\n\t",
            styles: ["\n\t\t:host() {\n\t\t\tposition: relative;\n\t\t\tdisplay: block;\n\t\t}\n\t\t.echarts-container {\n\t\t\theight: 100%;\n\t\t\twidth: 100%;\n\t\t}\n\t"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], NgEchartsComponent);
    return NgEchartsComponent;
}());



/***/ }),

/***/ "./src/app/core/ng-echarts/ng-echarts.model.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/ng-echarts/ng-echarts.model.ts ***!
  \*****************************************************/
/*! exports provided: ColorLib, LineLegendIconPath, TooltipBgColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorLib", function() { return ColorLib; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineLegendIconPath", function() { return LineLegendIconPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipBgColor", function() { return TooltipBgColor; });
// chart color lib
var ColorLib = ['#23A597', '#0A689C', '#0BB2DD', '#EF494A',
    '#F9D827', '#C26CB1', '#473E86', '#C4E09F', '#14497F', '#998DB7', '#1B676B'];
// line
var LineLegendIconPath = "path://M7.1,4C7.6,1.7,9.6,0,12,0s4.4,1.7,\n  4.9,4H24v2h-7.1c-0.5,2.3-2.5,4-4.9,4S7.6,8.3,7.1,6H0 V4H7.1z M12,8c1.7,0,3-1.3,3-3s-1.3-3-3-3S9,3.3,9,5S10.3,8,12,8z";
// tooltip
var TooltipBgColor = '#353C48';


/***/ }),

/***/ "./src/app/core/ng-echarts/ng-echarts.module.ts":
/*!******************************************************!*\
  !*** ./src/app/core/ng-echarts/ng-echarts.module.ts ***!
  \******************************************************/
/*! exports provided: NgEchartsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgEchartsModule", function() { return NgEchartsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _charts_base_charts_empty_charts_empty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charts-base/charts-empty/charts-empty.component */ "./src/app/core/ng-echarts/charts-base/charts-empty/charts-empty.component.ts");
/* harmony import */ var _charts_base_charts_loading_charts_loading_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./charts-base/charts-loading/charts-loading.component */ "./src/app/core/ng-echarts/charts-base/charts-loading/charts-loading.component.ts");
/* harmony import */ var _ng_echarts_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ng-echarts.component */ "./src/app/core/ng-echarts/ng-echarts.component.ts");
/* harmony import */ var _ng_echarts_line_ng_echarts_line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ng-echarts-line/ng-echarts-line.component */ "./src/app/core/ng-echarts/ng-echarts-line/ng-echarts-line.component.ts");
/* harmony import */ var _ng_echarts_pie_ng_echarts_pie_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng-echarts-pie/ng-echarts-pie.component */ "./src/app/core/ng-echarts/ng-echarts-pie/ng-echarts-pie.component.ts");









var NgEchartsModule = /** @class */ (function () {
    function NgEchartsModule() {
    }
    NgEchartsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_3__["NgZorroAntdModule"]
            ],
            exports: [
                _ng_echarts_component__WEBPACK_IMPORTED_MODULE_6__["NgEchartsComponent"],
                _ng_echarts_line_ng_echarts_line_component__WEBPACK_IMPORTED_MODULE_7__["NgEchartsLineComponent"],
                _ng_echarts_pie_ng_echarts_pie_component__WEBPACK_IMPORTED_MODULE_8__["NgEchartsPieComponent"],
            ],
            declarations: [
                _charts_base_charts_empty_charts_empty_component__WEBPACK_IMPORTED_MODULE_4__["ChartsEmptyComponent"],
                _charts_base_charts_loading_charts_loading_component__WEBPACK_IMPORTED_MODULE_5__["ChartsLoadingComponent"],
                _ng_echarts_component__WEBPACK_IMPORTED_MODULE_6__["NgEchartsComponent"],
                _ng_echarts_line_ng_echarts_line_component__WEBPACK_IMPORTED_MODULE_7__["NgEchartsLineComponent"],
                _ng_echarts_pie_ng_echarts_pie_component__WEBPACK_IMPORTED_MODULE_8__["NgEchartsPieComponent"]
            ]
        })
    ], NgEchartsModule);
    return NgEchartsModule;
}());



/***/ }),

/***/ "./src/app/core/ng-echarts/tool.ts":
/*!*****************************************!*\
  !*** ./src/app/core/ng-echarts/tool.ts ***!
  \*****************************************/
/*! exports provided: Tool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tool", function() { return Tool; });
var Tool = /** @class */ (function () {
    function Tool() {
    }
    Tool.getNumberUnits = function (value) {
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
    Tool.addComma = function (num, fixed) {
        if (!num) {
            return '0';
        }
        var finalNum = (fixed !== undefined) ? num.toFixed(fixed) : num;
        var list = finalNum.toString().split('.');
        var end = (list[1] !== undefined) ? ('.' + list[1]) : '';
        return (+list[0]).toLocaleString() + end;
    };
    Tool.chartYLabelFormatter = function (type) {
        if (type === 'largeNum') {
            return (function (value) {
                return Tool.getNumberUnits(value);
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
    Tool.chartTooltipFormatter = function (params) {
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
    return Tool;
}());



/***/ }),

/***/ "./src/app/layout/color-chart/color-chart.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/color-chart/color-chart.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-color-chart\">\n  <ng-echarts-line height=\"100%\" [data]=\"lineData.list\"\n    (chartInit)=\"lineData.chartInit($event)\"></ng-echarts-line>\n  <nz-divider></nz-divider>\n  <ng-echarts-pie height=\"100%\" [dataConfig]=\"pieData.config\"\n    [data]=\"pieData.list\" (chartInit)=\"pieData.chartInit($event)\">\n  </ng-echarts-pie>\n  <nz-divider></nz-divider>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/color-chart/color-chart.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/color-chart/color-chart.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-color-chart {\n  position: relative;\n  width: 100%;\n  height: 100%; }\n  .app-color-chart .chart-container {\n    width: 100%;\n    height: 100%;\n    -webkit-transform: translateZ(0);\n            transform: translateZ(0); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvbGF5b3V0L2NvbG9yLWNoYXJ0L2NvbG9yLWNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZLEVBQUE7RUFIZDtJQUtJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbG9yLWNoYXJ0L2NvbG9yLWNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb2xvci1jaGFydCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgLmNoYXJ0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgfVxufVxuIl19 */"

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



var ColorChartComponent = /** @class */ (function () {
    function ColorChartComponent() {
        var _this = this;
        this.today = new Date();
        this.colorList = [];
        // 折线图
        this.lineData = {
            chart: null,
            list: [],
            chartInit: function (chart) {
                _this.lineData.chart = chart;
            }
        };
        // 饼图
        this.pieData = {
            chart: null,
            list: [],
            config: {
                name: '数据分布'
            },
            chartInit: function (chart) {
                _this.pieData.chart = chart;
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
                this.changeData();
            }
        },
        enumerable: true,
        configurable: true
    });
    ColorChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeData();
        setTimeout(function () {
            _this.changeColor();
        }, 0);
    };
    ColorChartComponent.prototype.changeData = function () {
        this.changeLineData();
        this.changePieData();
        this.changeColor();
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
                name: '数据' + (i + 1),
                children: children
            });
        }
        this.lineData.list = list;
    };
    ColorChartComponent.prototype.changePieData = function () {
        var count = this.colorList.length;
        var list = [];
        for (var i = 0; i < count; i++) {
            list.push({
                key: '数据' + i + 1,
                value: Math.random()
            });
        }
        this.pieData.list = list;
    };
    ColorChartComponent.prototype.changeColor = function () {
        var _this = this;
        if (!this.lineData.chart) {
            return false;
        }
        setTimeout(function () {
            _this.lineData.chart.setOption({
                color: _this.colorList
            });
            _this.pieData.chart.setOption({
                color: _this.colorList
            });
        }, 0);
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

/***/ "./src/app/layout/color-graph/color-graph.component.html":
/*!***************************************************************!*\
  !*** ./src/app/layout/color-graph/color-graph.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-color-graph\">\n  <div class=\"graph-title\">{{graphLabel}}</div>\n  <div class=\"graph-dots\">\n    <div class=\"dots\" *ngFor=\"let dot of dotList\" [style.top]=\"dot.top\"\n      [style.backgroundColor]=\"dot.backgroundColor\" [class.lock]=\"dot.lock\">\n      <span class=\"dot-step\" [style.color]=\"dot.color\" nz-tooltip\n        [nzTitle]=\"dot.step\">{{dot.step}}</span>\n      <span class=\"dot-value\">{{dot.value}}</span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/color-graph/color-graph.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/layout/color-graph/color-graph.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-color-graph {\n  overflow: auto hidden;\n  height: 100%; }\n  .app-color-graph .graph-title {\n    font-size: 18px;\n    font-weight: bold;\n    color: #292936; }\n  .app-color-graph .graph-dots {\n    display: flex;\n    justify-content: space-between;\n    height: calc(100% - 62px);\n    background-image: linear-gradient(rgba(244, 244, 250, 0.8) 1px, transparent 0), linear-gradient(#f4f4fa 1px, transparent 0), linear-gradient(90deg, rgba(244, 244, 250, 0.8) 1px, transparent 0), linear-gradient(90deg, #f4f4fa 1px, transparent 0), linear-gradient(transparent 3px, #fff 0, #fff 94px, transparent 0), linear-gradient(90deg, #f4f4fa 3px, transparent 0, transparent 94px, #f4f4fa 0);\n    background-size: 24px 24px, 96px 96px, 24px 24px, 96px 96px, 96px 96px, 96px 96px; }\n  .app-color-graph .graph-dots .dots {\n      display: flex;\n      justify-content: center;\n      flex-shrink: 0;\n      position: relative;\n      height: 25px;\n      width: 25px;\n      border-radius: 50%;\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16); }\n  .app-color-graph .graph-dots .dots.lock {\n        border: 2px solid black;\n        box-sizing: content-box; }\n  .app-color-graph .graph-dots .dots .dot-step {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        width: 100%;\n        position: absolute;\n        font-size: 12px;\n        font-weight: 700;\n        line-height: 25px;\n        text-align: center; }\n  .app-color-graph .graph-dots .dots .dot-value {\n        margin-top: 32px;\n        font-size: 12px;\n        font-weight: 700;\n        color: #292936; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvbGF5b3V0L2NvbG9yLWdyYXBoL2NvbG9yLWdyYXBoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVksRUFBQTtFQUZkO0lBSUksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjLEVBQUE7RUFObEI7SUFTSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6Qix5WUFBeVk7SUFDclksaUZBQWlGLEVBQUE7RUFiekY7TUFlTSxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLGNBQWM7TUFDZCxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFdBQVc7TUFDWCxrQkFBa0I7TUFDbEIseUNBQXdDLEVBQUE7RUF0QjlDO1FBd0JRLHVCQUF1QjtRQUN2Qix1QkFBdUIsRUFBQTtFQXpCL0I7UUE0QlEsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIsV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixrQkFBa0IsRUFBQTtFQXBDMUI7UUF1Q1EsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L2NvbG9yLWdyYXBoL2NvbG9yLWdyYXBoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC1jb2xvci1ncmFwaCB7XG4gIG92ZXJmbG93OiBhdXRvIGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICAuZ3JhcGgtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzI5MjkzNjtcbiAgfVxuICAuZ3JhcGgtZG90cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MnB4KTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNDQsIDI0NCwgMjUwLCAwLjgpIDFweCwgdHJhbnNwYXJlbnQgMCksIGxpbmVhci1ncmFkaWVudCgjZjRmNGZhIDFweCwgdHJhbnNwYXJlbnQgMCksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNDQsIDI0NCwgMjUwLCAwLjgpIDFweCwgdHJhbnNwYXJlbnQgMCksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Y0ZjRmYSAxcHgsIHRyYW5zcGFyZW50IDApLCBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgM3B4LCAjZmZmIDAsICNmZmYgOTRweCwgdHJhbnNwYXJlbnQgMCksIGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2Y0ZjRmYSAzcHgsIHRyYW5zcGFyZW50IDAsIHRyYW5zcGFyZW50IDk0cHgsICNmNGY0ZmEgMCk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjRweCAyNHB4LCA5NnB4IDk2cHgsIDI0cHggMjRweCwgOTZweCA5NnB4LCA5NnB4IDk2cHgsIDk2cHggOTZweDtcbiAgICAuZG90cyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGhlaWdodDogMjVweDtcbiAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgLjE2KTtcbiAgICAgICYubG9jayB7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xuICAgICAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICAgIH1cbiAgICAgIC5kb3Qtc3RlcCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuZG90LXZhbHVlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBjb2xvcjogIzI5MjkzNjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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
        this.graphLabel = '';
        this.dotList = [];
        this.result = [];
        this.graph = '';
    }
    ColorGraphComponent.prototype.ngOnChanges = function (changes) {
        var result = changes.result, graph = changes.graph;
        if (graph && graph.currentValue !== graph.previousValue) {
            this.graphLabel = this.getGraphLabel(graph.currentValue);
            if (!graph.firstChange) {
                this.changeDots(this.result, graph.currentValue);
            }
        }
        if (result && result.currentValue) {
            this.changeDots(result.currentValue, this.graph);
        }
    };
    ColorGraphComponent.prototype.getGraphLabel = function (value) {
        var label = '';
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
        this.graph = 'sat';
        this.result = [];
        this.resultChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.graphChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ColorPaletteComponent.prototype.ngOnInit = function () {
        this.valueChange('', 'lock_hex');
    };
    ColorPaletteComponent.prototype.valueChange = function (value, key) {
        this.values[key] = value;
        this.result = _coloralgorithm_generate_js__WEBPACK_IMPORTED_MODULE_3__["generate"](this.values);
        this.resultChange.emit(this.result);
        // 更改图表类型
        var type = key.substring(0, 3);
        if (type !== 'hue' && type !== 'sat' && type !== 'lum') {
            type = this.graph;
        }
        this.chageGraph(type);
        this.handleMinorSteps();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ColorPaletteComponent.prototype, "resultChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], ColorPaletteComponent.prototype, "graphChange", void 0);
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

module.exports = ".app-color-stack {\n  padding: 16px 20px 20px 20px;\n  height: 100%; }\n  .app-color-stack .stack-header {\n    margin-bottom: 14px; }\n  .app-color-stack .stack-header .header-title {\n      font-size: 14px;\n      color: #333333; }\n  .app-color-stack .stack-header .header-subtitle {\n      font-size: 12px;\n      color: #909090; }\n  .app-color-stack .stack-main {\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    height: calc(100% - 35px); }\n  .app-color-stack .stack-main .stack-block {\n      flex: 1;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      padding: 0 24px;\n      min-height: 30px;\n      font-size: 16px; }\n  .app-color-stack .stack-main .stack-block .block-label {\n        min-width: 27px;\n        font-weight: bold; }\n  .app-color-stack .stack-main .stack-block .block-lock {\n        margin: 0 4px;\n        width: 16px; }\n  .app-color-stack .stack-main .stack-block .block-lock > i {\n          font-size: 16px;\n          color: #fff; }\n  .app-color-stack .stack-main .stack-block .block-black {\n        margin: 0 4px;\n        color: black; }\n  .app-color-stack .stack-main .stack-block .block-white {\n        margin: 0 4px;\n        color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvbGF5b3V0L2NvbG9yLXN0YWNrL2NvbG9yLXN0YWNrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLFlBQVksRUFBQTtFQUZkO0lBSUksbUJBQW1CLEVBQUE7RUFKdkI7TUFNTSxlQUFlO01BQ2YsY0FBYyxFQUFBO0VBUHBCO01BVU0sZUFBZTtNQUNmLGNBQWMsRUFBQTtFQVhwQjtJQWVJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHlCQUF5QixFQUFBO0VBbEI3QjtNQW9CTSxPQUFPO01BQ1AsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQiw4QkFBOEI7TUFDOUIsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixlQUFlLEVBQUE7RUExQnJCO1FBNEJRLGVBQWU7UUFDZixpQkFBaUIsRUFBQTtFQTdCekI7UUFnQ1EsYUFBYTtRQUNiLFdBQVcsRUFBQTtFQWpDbkI7VUFtQ1UsZUFBZTtVQUNmLFdBQVcsRUFBQTtFQXBDckI7UUF3Q1EsYUFBYTtRQUNiLFlBQVksRUFBQTtFQXpDcEI7UUE0Q1EsYUFBYTtRQUNiLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9jb2xvci1zdGFjay9jb2xvci1zdGFjay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29sb3Itc3RhY2sge1xuICBwYWRkaW5nOiAxNnB4IDIwcHggMjBweCAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIC5zdGFjay1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XG4gICAgLmhlYWRlci10aXRsZSB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzMzMzMzMztcbiAgICB9XG4gICAgLmhlYWRlci1zdWJ0aXRsZSB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogIzkwOTA5MDtcbiAgICB9XG4gIH1cbiAgLnN0YWNrLW1haW4ge1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM1cHgpO1xuICAgIC5zdGFjay1ibG9jayB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgLmJsb2NrLWxhYmVsIHtcbiAgICAgICAgbWluLXdpZHRoOiAyN3B4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICAgIC5ibG9jay1sb2NrIHtcbiAgICAgICAgbWFyZ2luOiAwIDRweDtcbiAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgID5pIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5ibG9jay1ibGFjayB7XG4gICAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgIH1cbiAgICAgIC5ibG9jay13aGl0ZSB7XG4gICAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

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

module.exports = "<div class=\"header clearfloat\">\n  <div class=\"float-left\">\n    <div class=\"header-logo\">\n      <img src=\"/assets/images/logo.png\" alt=\"极光可视化色彩工具\">\n    </div>\n    <p class=\"header-title\">极光可视化色彩工具</p>\n  </div>\n  <div class=\"float-right\">\n    <button nz-button (click)=\"reset()\">重置</button>\n    <button nz-button nzType=\"primary\" (click)=\"share()\">导出</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/header/app-header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/layout/header/app-header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  position: relative;\n  padding: 0 20px;\n  height: 60px;\n  width: 100%;\n  line-height: 60px;\n  background: #fff;\n  box-shadow: 0 4px 6px 0 rgba(0, 62, 118, 0.05), 0 0 2px 0 rgba(0, 62, 118, 0.15); }\n  .header .float-left {\n    display: flex;\n    align-items: center; }\n  .header .float-left .header-logo {\n      margin-right: 12px;\n      height: 24px;\n      width: 24px; }\n  .header .float-left .header-logo > img {\n        display: block;\n        width: 100%; }\n  .header .float-left .header-title {\n      font-size: 16px;\n      font-weight: bold; }\n  .header .float-right > button {\n    margin-left: 16px;\n    width: 80px;\n    height: 30px;\n    line-height: 30px;\n    font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYW9tZC9Eb2N1bWVudHMvZ2l0aHViL2NvbG9yYm94L3NyYy9hcHAvbGF5b3V0L2hlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0ZBQTBFLEVBQUE7RUFQNUU7SUFTSSxhQUFhO0lBQ2IsbUJBQW1CLEVBQUE7RUFWdkI7TUFZTSxrQkFBa0I7TUFDbEIsWUFBWTtNQUNaLFdBQVcsRUFBQTtFQWRqQjtRQWdCUSxjQUFjO1FBQ2QsV0FBVyxFQUFBO0VBakJuQjtNQXFCTSxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUF0QnZCO0lBMkJNLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2FwcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAwIDIwcHg7XG4gIGhlaWdodDogNjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDRweCA2cHggMCByZ2JhKDAsNjIsMTE4LDAuMDUpLCAwIDAgMnB4IDAgcmdiYSgwLDYyLDExOCwwLjE1KTtcbiAgLmZsb2F0LWxlZnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAuaGVhZGVyLWxvZ28ge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICA+aW1nIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIH1cbiAgICAuaGVhZGVyLXRpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgfVxuICAuZmxvYXQtcmlnaHQge1xuICAgID5idXR0b24ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICB3aWR0aDogODBweDtcbiAgICAgIGhlaWdodDogMzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgIH1cbiAgfVxufVxuXG4vLyAuaGVhZGVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbi8vICAgY29sb3I6ICMyOTI5MzY7XG4vLyAgIGhlaWdodDogNjRweDtcbi8vICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjYWNhZDk7XG4vLyAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCAycHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KTtcbi8vICAgbWFyZ2luLWJvdHRvbTogMDtcbi8vICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICB6LWluZGV4OiA4OTk7XG4vLyAgIHBhZGRpbmctbGVmdDogMjRweDtcbi8vICAgcGFkZGluZy1yaWdodDogMjRweDtcbi8vIH1cbi8vIC5oZWFkZXIsXG4vLyAubGVmdEhlYWRlciB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyB9XG4vLyAuY2VudGVySGVhZGVyIHtcbi8vICAgZmxleDogMTtcbi8vIH1cbi8vIC5yaWdodEhlYWRlciB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyB9XG4vLyAubG9nbyB7XG4vLyAgIGZsb2F0OiBsZWZ0O1xuLy8gICBtYXJnaW4tcmlnaHQ6IDhweDtcbi8vIH1cbi8vIC5sb2dvVGV4dCB7XG4vLyAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbi8vIH1cbi8vIC5sb2dvVHlwZSB7XG4vLyAgIGZvbnQtc2l6ZTogMjBweDtcbi8vICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4vLyB9XG4vLyAubG9nb0NvbXBhbnkge1xuLy8gICBmb250LXNpemU6IDE0cHg7XG4vLyAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbi8vICAgbWFyZ2luOiAwO1xuLy8gfVxuLy8gLmJ1dHRvbiB7XG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICM4YjM3ZmY7XG4vLyAgIHBhZGRpbmc6IDhweCAzMnB4O1xuLy8gICBib3JkZXItcmFkaXVzOiAyNHB4O1xuLy8gICBjdXJzb3I6IHBvaW50ZXI7XG4vLyAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuLy8gICBtYXJnaW4tbGVmdDogOHB4O1xuLy8gICBib3JkZXI6IDJweCBzb2xpZCAjOGIzN2ZmO1xuLy8gfVxuLy8gLmJ1dHRvbkxhYmVsIHtcbi8vICAgY29sb3I6ICNmZmY7XG4vLyAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4vLyAgIGZvbnQtc2l6ZTogMTZweDtcbi8vICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4vLyB9XG4vLyAuYnV0dG9uOmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzdiMjBmOTtcbi8vIH1cbi8vIC5idXR0b246YWN0aXZlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogIzU5MGRjNDtcbi8vICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbi8vIH1cbi8vIC5zZWNvbmRhcnlCdXR0b24ge1xuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuLy8gICBwYWRkaW5nOiA4cHggMzJweDtcbi8vICAgYm9yZGVyLXJhZGl1czogMjRweDtcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbi8vICAgbWFyZ2luLWxlZnQ6IDhweDtcbi8vICAgYm9yZGVyOiAycHggc29saWQgI2NhY2FkOTtcbi8vIH1cbi8vIC5zZWNvbmRhcnlCdXR0b25MYWJlbCB7XG4vLyAgIGNvbG9yOiAjMjkyOTM2O1xuLy8gICBmb250LXdlaWdodDogNzAwO1xuLy8gICBmb250LXNpemU6IDE2cHg7XG4vLyB9XG4vLyAuc2Vjb25kYXJ5QnV0dG9uOmhvdmVyIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmYTtcbi8vIH1cbi8vIC5zZWNvbmRhcnlCdXR0b246YWN0aXZlIHtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2U3ZTdlZjtcbi8vICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcbi8vIH1cbiJdfQ== */"

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