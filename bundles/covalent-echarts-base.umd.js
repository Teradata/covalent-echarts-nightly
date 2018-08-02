(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('echarts/lib/echarts'), require('echarts/lib/chart/line'), require('echarts/lib/chart/bar'), require('echarts/lib/component/tooltip'), require('echarts/lib/component/title'), require('echarts/lib/component/legend'), require('echarts/lib/component/legendScroll'), require('echarts/lib/component/markArea'), require('echarts/lib/component/dataZoom')) :
	typeof define === 'function' && define.amd ? define('@covalent/echarts/base', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'echarts/lib/echarts', 'echarts/lib/chart/line', 'echarts/lib/chart/bar', 'echarts/lib/component/tooltip', 'echarts/lib/component/title', 'echarts/lib/component/legend', 'echarts/lib/component/legendScroll', 'echarts/lib/component/markArea', 'echarts/lib/component/dataZoom'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.base = {}),global.ng.core,global.rxjs,global.Rx.Observable.prototype,global.echarts));
}(this, (function (exports,core,rxjs,operators,echarts) { 'use strict';

var TdChartComponent = /** @class */ (function () {
    function TdChartComponent(_changeDetectorRef, _elementRef, _ngZone) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._widthSubject = new rxjs.Subject();
        this._heightSubject = new rxjs.Subject();
        this._resizing = false;
        this.showLegend = true;
        this.showTooltip = true;
        this.yAxisType = 'value';
        this.xAxisType = 'time';
        this.dataZoom = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.markAreaClick = new core.EventEmitter();
    }
    Object.defineProperty(TdChartComponent.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    TdChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._instance = echarts.init(this._elementRef.nativeElement);
        rxjs.fromEvent(this._instance, 'click').subscribe(function (params) {
            if (params.componentType === 'markArea') {
                _this.markAreaClick.next(params);
            }
        });
        if (this.chartGroup) {
            this._instance.group = this.chartGroup;
            echarts.connect(this.chartGroup);
            this._changeDetectorRef.markForCheck();
        }
        this._resizeSubscription = rxjs.merge(rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(10)), this._widthSubject.asObservable().pipe(operators.distinctUntilChanged()), this._heightSubject.asObservable().pipe(operators.distinctUntilChanged())).subscribe(function () {
            if (!_this._resizing) {
                _this._resizing = true;
                setTimeout(function () {
                    _this._instance.resize();
                    _this._resizing = false;
                    _this._changeDetectorRef.markForCheck();
                }, 100);
            }
        });
        this.render();
    };
    TdChartComponent.prototype.ngDoCheck = function () {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(((this._elementRef.nativeElement)).getBoundingClientRect().width);
            this._heightSubject.next(((this._elementRef.nativeElement)).getBoundingClientRect().height);
        }
    };
    TdChartComponent.prototype.ngOnChanges = function () {
        if (this._instance) {
            this._instance.clear();
            this.render();
        }
    };
    TdChartComponent.prototype.ngOnDestroy = function () {
        if (this._resizeSubscription) {
            this._resizeSubscription.unsubscribe();
        }
    };
    TdChartComponent.prototype.render = function () {
        var option = {};
        if (this.chartTitle) {
            option.title = {
                text: this.chartTitle,
            };
        }
        if (this.data && this.data instanceof Array) {
            this._series = this.data.map(function (d) {
                return {
                    name: d.name,
                    id: d.id,
                    type: d.type ? d.type : 'line',
                    stack: d.stack,
                    data: d.data,
                    color: d.color,
                    connectNulls: false,
                    barWidth: d.barWidth,
                    barGap: d.barGap,
                    z: d.z,
                    lineStyle: {
                        opacity: d.opacity,
                        width: d.width,
                        shadowBlur: d.shadowBlur,
                        shadowColor: d.shadowColor,
                        shadowOffsetX: d.shadowOffsetX,
                        shadowOffsetY: d.shadowOffsetY,
                    },
                    itemStyle: {
                        opacity: d.opacity,
                    },
                    showSymbol: false,
                    areaStyle: d.area ? { opacity: d.opacity } : undefined,
                    markArea: {
                        data: d.markArea,
                        itemStyle: {
                            borderColor: '#464646',
                            borderWidth: 1,
                            opacity: d.markAreaOpacity ? d.markAreaOpacity : 0.1,
                        },
                    },
                };
            });
        }
        this._legend = {
            show: this.showLegend,
            type: 'scroll',
            selectedMode: 'multiple',
            orient: 'horizontal',
            right: '5',
            bottom: '5',
            data: this.data && this.data instanceof Array ? this.data.map(function (d) { return d.name; }) : [],
        }, this._instance.setOption({
            grid: {
                show: true,
                left: '20',
                right: '20',
                bottom: this.showLegend ? '30' : '10',
                top: '10',
                containLabel: true,
                borderColor: '#FCFCFC',
            },
            dataZoom: this.dataZoom ? [{
                    type: 'inside',
                    throttle: 50,
                    zoomOnMouseWheel: 'shift',
                }] : undefined,
            legend: this._legend,
            tooltip: {
                show: this.showTooltip,
                trigger: 'axis',
                formatter: this.tooltipFormatter,
                axisPointer: {
                    type: 'line',
                    label: {
                        backgroundColor: '#6A7985',
                    },
                },
            },
            xAxis: [{
                    show: this.showXAxis,
                    position: 'bottom',
                    type: this.xAxisType,
                    boundaryGap: false,
                    axisLabel: {
                        formatter: this.xAxisFormatter,
                        inside: !this.showXAxis,
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#777777',
                        },
                    },
                    data: this.xAxis,
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: '#ECECEC',
                        },
                    },
                }],
            yAxis: [{
                    show: this.showYAxis,
                    max: this.max,
                    type: this.yAxisType,
                    axisLabel: {
                        inside: true,
                        showMinLabel: false,
                        formatter: this.yAxisFormatter,
                    },
                    splitNumber: this.yAxisSplitNumber,
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: '#777777',
                        },
                    },
                    data: this.yAxis,
                    splitLine: {
                        lineStyle: {
                            color: '#ECECEC',
                        },
                    },
                }],
            series: this._series,
        });
        this._changeDetectorRef.markForCheck();
    };
    return TdChartComponent;
}());
TdChartComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-chart',
                template: "",
                styles: [":host{display:block}"],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
TdChartComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: core.ElementRef, },
    { type: core.NgZone, },
]; };
TdChartComponent.propDecorators = {
    "chartTitle": [{ type: core.Input, args: ['chartTitle',] },],
    "showLegend": [{ type: core.Input, args: ['showLegend',] },],
    "showTooltip": [{ type: core.Input, args: ['showTooltip',] },],
    "data": [{ type: core.Input, args: ['data',] },],
    "max": [{ type: core.Input, args: ['max',] },],
    "chartGroup": [{ type: core.Input, args: ['chartGroup',] },],
    "yAxisFormatter": [{ type: core.Input, args: ['yAxisFormatter',] },],
    "xAxisFormatter": [{ type: core.Input, args: ['xAxisFormatter',] },],
    "yAxisType": [{ type: core.Input, args: ['yAxisType',] },],
    "xAxisType": [{ type: core.Input, args: ['xAxisType',] },],
    "dataZoom": [{ type: core.Input, args: ['dataZoom',] },],
    "tooltipFormatter": [{ type: core.Input, args: ['tooltipFormatter',] },],
    "xAxis": [{ type: core.Input, args: ['xAxis',] },],
    "yAxis": [{ type: core.Input, args: ['yAxis',] },],
    "showXAxis": [{ type: core.Input, args: ['showXAxis',] },],
    "showYAxis": [{ type: core.Input, args: ['showYAxis',] },],
    "yAxisSplitNumber": [{ type: core.Input, args: ['yAxisSplitNumber',] },],
    "markAreaClick": [{ type: core.Output, args: ['markAreaClick',] },],
};
var CovalentBaseEchartsModule = /** @class */ (function () {
    function CovalentBaseEchartsModule() {
    }
    return CovalentBaseEchartsModule;
}());
CovalentBaseEchartsModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    TdChartComponent,
                ],
                exports: [
                    TdChartComponent,
                ],
            },] },
];
CovalentBaseEchartsModule.ctorParameters = function () { return []; };

exports.TdChartComponent = TdChartComponent;
exports.CovalentBaseEchartsModule = CovalentBaseEchartsModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-echarts-base.umd.js.map
