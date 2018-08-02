import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, NgZone, NgModule } from '@angular/core';
import { Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { init, connect } from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/bar';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/dataZoom';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdChartComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _ngZone
     */
    constructor(_changeDetectorRef, _elementRef, _ngZone) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this._widthSubject = new Subject();
        this._heightSubject = new Subject();
        this._resizing = false;
        this.showLegend = true;
        this.showTooltip = true;
        this.yAxisType = 'value';
        this.xAxisType = 'time';
        this.dataZoom = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.markAreaClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get instance() {
        return this._instance;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._instance = init(this._elementRef.nativeElement);
        fromEvent(this._instance, 'click').subscribe((params) => {
            if (params.componentType === 'markArea') {
                this.markAreaClick.next(params);
            }
        });
        if (this.chartGroup) {
            this._instance.group = this.chartGroup;
            connect(this.chartGroup);
            this._changeDetectorRef.markForCheck();
        }
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(distinctUntilChanged()), this._heightSubject.asObservable().pipe(distinctUntilChanged())).subscribe(() => {
            if (!this._resizing) {
                this._resizing = true;
                setTimeout(() => {
                    this._instance.resize();
                    this._resizing = false;
                    this._changeDetectorRef.markForCheck();
                }, 100);
            }
        });
        this.render();
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next((/** @type {?} */ (this._elementRef.nativeElement)).getBoundingClientRect().width);
            this._heightSubject.next((/** @type {?} */ (this._elementRef.nativeElement)).getBoundingClientRect().height);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this._instance) {
            this._instance.clear();
            this.render();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._resizeSubscription) {
            this._resizeSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    render() {
        let /** @type {?} */ option = {};
        if (this.chartTitle) {
            option.title = {
                text: this.chartTitle,
            };
        }
        if (this.data && this.data instanceof Array) {
            this._series = this.data.map((d) => {
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
            // 'vertical'
            right: '5',
            bottom: '5',
            data: this.data && this.data instanceof Array ? this.data.map((d) => d.name) : [],
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
                    // 'item'
                    formatter: this.tooltipFormatter,
                    axisPointer: {
                        type: 'line',
                        // line and shadow
                        label: {
                            backgroundColor: '#6A7985',
                        },
                    },
                },
                xAxis: [{
                        show: this.showXAxis,
                        // name: 'xAxis',
                        // nameLocation: 'middle',
                        // nameGap: 25,
                        // splitNumber: 5,
                        // minInterval: 3600 * 1000 * 24,
                        position: 'bottom',
                        type: this.xAxisType,
                        boundaryGap: false,
                        axisLabel: {
                            // showMinLabel: false,
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
                        // min : 0,
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
    }
}
TdChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart',
                template: ``,
                styles: [`:host{display:block}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdChartComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: NgZone, },
];
TdChartComponent.propDecorators = {
    "chartTitle": [{ type: Input, args: ['chartTitle',] },],
    "showLegend": [{ type: Input, args: ['showLegend',] },],
    "showTooltip": [{ type: Input, args: ['showTooltip',] },],
    "data": [{ type: Input, args: ['data',] },],
    "max": [{ type: Input, args: ['max',] },],
    "chartGroup": [{ type: Input, args: ['chartGroup',] },],
    "yAxisFormatter": [{ type: Input, args: ['yAxisFormatter',] },],
    "xAxisFormatter": [{ type: Input, args: ['xAxisFormatter',] },],
    "yAxisType": [{ type: Input, args: ['yAxisType',] },],
    "xAxisType": [{ type: Input, args: ['xAxisType',] },],
    "dataZoom": [{ type: Input, args: ['dataZoom',] },],
    "tooltipFormatter": [{ type: Input, args: ['tooltipFormatter',] },],
    "xAxis": [{ type: Input, args: ['xAxis',] },],
    "yAxis": [{ type: Input, args: ['yAxis',] },],
    "showXAxis": [{ type: Input, args: ['showXAxis',] },],
    "showYAxis": [{ type: Input, args: ['showYAxis',] },],
    "yAxisSplitNumber": [{ type: Input, args: ['yAxisSplitNumber',] },],
    "markAreaClick": [{ type: Output, args: ['markAreaClick',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CovalentBaseEchartsModule {
}
CovalentBaseEchartsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    TdChartComponent,
                ],
                exports: [
                    TdChartComponent,
                ],
            },] },
];
/** @nocollapse */
CovalentBaseEchartsModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { TdChartComponent, CovalentBaseEchartsModule };
//# sourceMappingURL=covalent-echarts.js.map
