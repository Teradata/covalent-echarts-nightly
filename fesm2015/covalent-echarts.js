import { Injectable, Optional, SkipSelf, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, NgModule, forwardRef, Directive, TemplateRef, ContentChild, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { init, connect } from 'echarts/lib/echarts';
import { CommonModule } from '@angular/common';
import { TdChartOptionsService, TdSeriesComponent, assignDefined } from '@covalent/echarts/base';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/tree';
import 'echarts/lib/component/tooltip';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartOptionsService$1 {
    constructor() {
        this._options = {};
        this._optionsSubject = new BehaviorSubject(this._options);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    setOption(option, value) {
        /** @type {?} */
        let options = {};
        options[option] = value;
        Object.assign(this._options, options);
        this._optionsSubject.next(this._options);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    setArrayOption(option, value) {
        /** @type {?} */
        let prevValue = this.getOption(option);
        if (prevValue) {
            /** @type {?} */
            let index = prevValue.indexOf(value);
            index > -1 ? prevValue[index] = value : prevValue.push(value);
        }
        else {
            prevValue = [value];
        }
        this.setOption(option, prevValue);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    removeArrayOption(option, value) {
        /** @type {?} */
        let prevValue = this.getOption(option);
        if (prevValue) {
            /** @type {?} */
            let index = prevValue.indexOf(value);
            if (index > -1) {
                /* tslint:disable-next-line */
                prevValue[index] = null;
            }
            else {
                prevValue = [];
            }
        }
        this.setOption(option, prevValue);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getOption(option) {
        return this._options[option];
    }
    /**
     * @param {?} option
     * @return {?}
     */
    clearOption(option) {
        /* tslint:disable-next-line */
        this.setOption(option, null);
    }
    /**
     * @return {?}
     */
    listen() {
        return this._optionsSubject.asObservable();
    }
}
TdChartOptionsService$1.decorators = [
    { type: Injectable }
];
/**
 * @param {?} parent
 * @return {?}
 */
function CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService$1();
}
/** @type {?} */
const CHART_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdChartOptionsService$1,
    deps: [[new Optional(), new SkipSelf(), TdChartOptionsService$1]],
    useFactory: CHART_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {...?} sources
 * @return {?}
 */
function assignDefined$1(target, ...sources) {
    for (const source of sources) {
        for (const key of Object.keys(source)) {
            /** @type {?} */
            const val = source[key];
            /* tslint:disable-next-line */
            if (val !== undefined && val !== null) {
                target[key] = val;
                /* tslint:disable-next-line */
            }
            else if (val === null) {
                delete target[key];
            }
        }
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _optionsService
     */
    constructor(_changeDetectorRef, _elementRef, _optionsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._optionsService = _optionsService;
        this._subs = [];
        this._widthSubject = new Subject();
        this._heightSubject = new Subject();
        this._state = {};
        this._options = {};
        this.config = {};
        this.click = new EventEmitter();
        this.dblclick = new EventEmitter();
        this.contextmenu = new EventEmitter();
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
        this._subs.push(fromEvent(this._instance, 'click').subscribe((params) => {
            this.click.next(params);
        }));
        this._subs.push(fromEvent(this._instance, 'dblclick').subscribe((params) => {
            this.dblclick.next(params);
        }));
        this._subs.push(fromEvent(this._instance, 'contextmenu').subscribe((params) => {
            this.contextmenu.next(params);
        }));
        if (this.group) {
            this._instance.group = this.group;
            connect(this.group);
            this._changeDetectorRef.markForCheck();
        }
        this._subs.push(merge(fromEvent(window, 'resize').pipe(debounceTime(100)), this._widthSubject.asObservable().pipe(debounceTime(100)), this._heightSubject.asObservable().pipe(debounceTime(100))).pipe(debounceTime(100)).subscribe(() => {
            this._instance.resize();
            this._changeDetectorRef.markForCheck();
        }));
        this.render();
        this._optionsService.listen().subscribe((options) => {
            assignDefined$1(this._options, options);
            this.render();
        });
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().width);
            this._heightSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height);
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
        if (this._subs) {
            this._subs.forEach((sub) => {
                sub.unsubscribe();
            });
        }
    }
    /**
     * @return {?}
     */
    render() {
        if (this._instance) {
            this._instance.setOption(assignDefined$1(this._state, {
                grid: {
                    show: true,
                    left: '20',
                    right: '20',
                    bottom: '10',
                    top: '10',
                    containLabel: true,
                    borderColor: '#FCFCFC',
                },
                xAxis: [{}],
                // throws error if its empty
                yAxis: [{}],
            }, this.config ? this.config : {}, this._options), true);
            this._changeDetectorRef.markForCheck();
        }
    }
}
TdChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [CHART_PROVIDER],
                styles: [":host{display:block;width:100%}"]
            }] }
];
/** @nocollapse */
TdChartComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdChartOptionsService$1 }
];
TdChartComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    group: [{ type: Input, args: ['group',] }],
    click: [{ type: Output, args: ['click',] }],
    dblclick: [{ type: Output, args: ['dblclick',] }],
    contextmenu: [{ type: Output, args: ['contextmenu',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class TdChartAxisComponent {
    /**
     * @param {?} _axisOption
     * @param {?} _optionsService
     */
    constructor(_axisOption, _optionsService) {
        this._axisOption = _axisOption;
        this._optionsService = _optionsService;
        this._state = {
            axisLine: {
                lineStyle: {
                    color: '#ABABAB',
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#ABABAB',
                },
            },
        };
        this.config = {};
        this.show = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        let config = assignDefined$1(this._state, this.config ? this.config : {}, {
            id: this.id,
            show: this.show,
            gridIndex: this.gridIndex,
            position: this.position,
            offset: this.offset,
            type: this.type,
            name: this.name,
            nameLocation: this.nameLocation,
            nameTextStyle: this.nameTextStyle,
            nameGap: this.nameGap,
            nameRotate: this.nameRotate,
            inverse: this.inverse,
            boundaryGap: this.boundaryGap,
            min: this.min,
            max: this.max,
            scale: this.scale,
            minInterval: this.minInterval,
            interval: this.interval,
            logBase: this.logBase,
            silent: this.silent,
            triggerEvent: this.triggerEvent,
            axisLine: this.axisLine,
            axisTick: this.axisTick,
            axisLabel: this.axisLabel,
            splitLine: this.splitLine,
            splitArea: this.splitArea,
            data: this.data,
            axisPointer: this.axisPointer,
            zlevel: this.zlevel,
            z: this.z,
        });
        this._optionsService.setArrayOption(this._axisOption, config);
    }
    /**
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption(this._axisOption);
    }
}
TdChartAxisComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    id: [{ type: Input, args: ['id',] }],
    show: [{ type: Input, args: ['show',] }],
    gridIndex: [{ type: Input, args: ['gridIndex',] }],
    offset: [{ type: Input, args: ['offset',] }],
    type: [{ type: Input, args: ['type',] }],
    name: [{ type: Input, args: ['name',] }],
    nameLocation: [{ type: Input, args: ['nameLocation',] }],
    nameTextStyle: [{ type: Input, args: ['nameTextStyle',] }],
    nameGap: [{ type: Input, args: ['nameGap',] }],
    nameRotate: [{ type: Input, args: ['nameRotate',] }],
    inverse: [{ type: Input, args: ['inverse',] }],
    boundaryGap: [{ type: Input, args: ['boundaryGap',] }],
    min: [{ type: Input, args: ['min',] }],
    max: [{ type: Input, args: ['max',] }],
    scale: [{ type: Input, args: ['scale',] }],
    minInterval: [{ type: Input, args: ['minInterval',] }],
    interval: [{ type: Input, args: ['interval',] }],
    logBase: [{ type: Input, args: ['logBase',] }],
    silent: [{ type: Input, args: ['silent',] }],
    triggerEvent: [{ type: Input, args: ['triggerEvent',] }],
    axisLine: [{ type: Input, args: ['axisLine',] }],
    axisTick: [{ type: Input, args: ['axisTick',] }],
    axisLabel: [{ type: Input, args: ['axisLabel',] }],
    splitLine: [{ type: Input, args: ['splitLine',] }],
    splitArea: [{ type: Input, args: ['splitArea',] }],
    data: [{ type: Input, args: ['data',] }],
    axisPointer: [{ type: Input, args: ['axisPointer',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartXAxisComponent extends TdChartAxisComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('xAxis', _optionsService);
    }
}
TdChartXAxisComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-x-axis',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartXAxisComponent.ctorParameters = () => [
    { type: TdChartOptionsService$1 }
];
TdChartXAxisComponent.propDecorators = {
    position: [{ type: Input, args: ['position',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartYAxisComponent extends TdChartAxisComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('yAxis', _optionsService);
    }
}
TdChartYAxisComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-y-axis',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartYAxisComponent.ctorParameters = () => [
    { type: TdChartOptionsService$1 }
];
TdChartYAxisComponent.propDecorators = {
    position: [{ type: Input, args: ['position',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const BASE_MODULE_COMPONENTS = [
    TdChartComponent,
    TdChartXAxisComponent,
    TdChartYAxisComponent,
];
class CovalentBaseEchartsModule {
}
CovalentBaseEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    BASE_MODULE_COMPONENTS,
                ],
                exports: [
                    BASE_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class TdSeriesComponent$1 {
    /**
     * @param {?} type
     * @param {?} optionsService
     */
    constructor(type, optionsService) {
        this.optionsService = optionsService;
        this._state = {};
        this._options = {};
        this.config = {};
        this._type = type;
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    setStateOption(option, value) {
        this._options[option] = value;
        this._setOptions();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    removeStateOption(option) {
        /* tslint:disable-next-line */
        this._options[option] = null;
        this._setOptions();
    }
    /**
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        let config = assignDefined$1(this._state, this.config ? this.config : {}, this.getConfig(), this._options);
        this.optionsService.setArrayOption('series', config);
    }
    /**
     * @return {?}
     */
    _removeOption() {
        /** @type {?} */
        let config = this.getConfig();
        this.optionsService.removeArrayOption('series', config);
    }
}
TdSeriesComponent$1.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    id: [{ type: Input, args: ['id',] }],
    name: [{ type: Input, args: ['name',] }],
    color: [{ type: Input, args: ['color',] }],
    animation: [{ type: Input, args: ['animation',] }],
    animationThreshold: [{ type: Input, args: ['animationThreshold',] }],
    animationDuration: [{ type: Input, args: ['animationDuration',] }],
    animationEasing: [{ type: Input, args: ['animationEasing',] }],
    animationDelay: [{ type: Input, args: ['animationDelay',] }],
    animationDurationUpdate: [{ type: Input, args: ['animationDurationUpdate',] }],
    animationEasingUpdate: [{ type: Input, args: ['animationEasingUpdate',] }],
    animationDelayUpdate: [{ type: Input, args: ['animationDelayUpdate',] }],
    tooltip: [{ type: Input, args: ['tooltip',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartSeriesBarComponent extends TdSeriesComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('bar', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            id: this.id,
            type: this.type,
            name: this.name,
            color: this.color,
            coordinateSystem: this.coordinateSystem,
            xAxisIndex: this.xAxisIndex,
            yAxisIndex: this.yAxisIndex,
            legendHoverLink: this.legendHoverLink,
            stack: this.stack,
            cursor: this.cursor,
            label: this.label,
            itemStyle: this.itemStyle,
            emphasis: this.emphasis,
            barWidth: this.barWidth,
            barMaxWidth: this.barMaxWidth,
            barMinHeight: this.barMinHeight,
            barGap: this.barGap,
            barCategoryGap: this.barCategoryGap,
            large: this.large,
            largeThreshold: this.largeThreshold,
            progressive: this.progressive,
            progressiveThreshold: this.progressiveThreshold,
            progressiveChunkMode: this.progressiveChunkMode,
            dimensions: this.dimensions,
            encode: this.encode,
            seriesLayoutBy: this.seriesLayoutBy,
            datasetIndex: this.datasetIndex,
            data: this.data,
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            animation: this.animation,
            animationThreshold: this.animationThreshold,
            animationDuration: this.animationDuration,
            animationEasing: this.animationEasing,
            animationDelay: this.animationDelay,
            animationDurationUpdate: this.animationDurationUpdate,
            animationEasingUpdate: this.animationEasingUpdate,
            animationDelayUpdate: this.animationDelayUpdate,
            tooltip: this.tooltip,
        };
    }
}
TdChartSeriesBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-bar]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesBarComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesBarComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesBarComponent.propDecorators = {
    coordinateSystem: [{ type: Input, args: ['coordinateSystem',] }],
    xAxisIndex: [{ type: Input, args: ['xAxisIndex',] }],
    yAxisIndex: [{ type: Input, args: ['yAxisIndex',] }],
    legendHoverLink: [{ type: Input, args: ['legendHoverLink',] }],
    stack: [{ type: Input, args: ['stack',] }],
    cursor: [{ type: Input, args: ['cursor',] }],
    label: [{ type: Input, args: ['label',] }],
    itemStyle: [{ type: Input, args: ['itemStyle',] }],
    emphasis: [{ type: Input, args: ['emphasis',] }],
    barWidth: [{ type: Input, args: ['barWidth',] }],
    barMaxWidth: [{ type: Input, args: ['barMaxWidth',] }],
    barMinHeight: [{ type: Input, args: ['barMinHeight',] }],
    barGap: [{ type: Input, args: ['barGap',] }],
    barCategoryGap: [{ type: Input, args: ['barCategoryGap',] }],
    large: [{ type: Input, args: ['large',] }],
    largeThreshold: [{ type: Input, args: ['largeThreshold',] }],
    progressive: [{ type: Input, args: ['progressive',] }],
    progressiveThreshold: [{ type: Input, args: ['progressiveThreshold',] }],
    progressiveChunkMode: [{ type: Input, args: ['progressiveChunkMode',] }],
    dimensions: [{ type: Input, args: ['dimensions',] }],
    encode: [{ type: Input, args: ['encode',] }],
    seriesLayoutBy: [{ type: Input, args: ['seriesLayoutBy',] }],
    datasetIndex: [{ type: Input, args: ['datasetIndex',] }],
    data: [{ type: Input, args: ['data',] }],
    markPoint: [{ type: Input, args: ['markPoint',] }],
    markLine: [{ type: Input, args: ['markLine',] }],
    markArea: [{ type: Input, args: ['markArea',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const BAR_MODULE_COMPONENTS = [
    TdChartSeriesBarComponent,
];
class CovalentBarEchartsModule {
}
CovalentBarEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    BAR_MODULE_COMPONENTS,
                ],
                exports: [
                    BAR_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartSeriesLineComponent extends TdSeriesComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('line', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            id: this.id,
            type: this.type,
            name: this.name,
            color: this.color,
            coordinateSystem: this.coordinateSystem,
            xAxisIndex: this.xAxisIndex,
            yAxisIndex: this.yAxisIndex,
            polarIndex: this.polarIndex,
            symbol: this.symbol,
            symbolSize: this.symbolSize,
            symbolRotate: this.symbolRotate,
            symbolKeepAspect: this.symbolKeepAspect,
            symbolOffset: this.symbolOffset,
            showSymbol: this.showSymbol,
            showAllSymbol: this.showAllSymbol,
            hoverAnimation: this.hoverAnimation,
            legendHoverLink: this.legendHoverLink,
            stack: this.stack,
            cursor: this.cursor,
            connectNulls: this.connectNulls,
            clipOverflow: this.clipOverflow,
            step: this.step,
            label: this.label,
            itemStyle: this.itemStyle,
            lineStyle: this.lineStyle,
            areaStyle: this.areaStyle,
            emphasis: this.emphasis,
            smooth: this.smooth,
            smoothMonotone: this.smoothMonotone,
            sampling: this.sampling,
            dimensions: this.dimensions,
            encode: this.encode,
            seriesLayoutBy: this.seriesLayoutBy,
            datasetIndex: this.datasetIndex,
            data: this.data,
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            silent: this.silent,
            animation: this.animation,
            animationThreshold: this.animationThreshold,
            animationDuration: this.animationDuration,
            animationEasing: this.animationEasing,
            animationDelay: this.animationDelay,
            animationDurationUpdate: this.animationDurationUpdate,
            animationEasingUpdate: this.animationEasingUpdate,
            animationDelayUpdate: this.animationDelayUpdate,
            tooltip: this.tooltip,
        };
    }
}
TdChartSeriesLineComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-line]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesLineComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesLineComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesLineComponent.propDecorators = {
    coordinateSystem: [{ type: Input, args: ['coordinateSystem',] }],
    xAxisIndex: [{ type: Input, args: ['xAxisIndex',] }],
    yAxisIndex: [{ type: Input, args: ['yAxisIndex',] }],
    polarIndex: [{ type: Input, args: ['polarIndex',] }],
    symbol: [{ type: Input, args: ['symbol',] }],
    symbolSize: [{ type: Input, args: ['symbolSize',] }],
    symbolRotate: [{ type: Input, args: ['symbolRotate',] }],
    symbolKeepAspect: [{ type: Input, args: ['symbolKeepAspect',] }],
    symbolOffset: [{ type: Input, args: ['symbolOffset',] }],
    showSymbol: [{ type: Input, args: ['showSymbol',] }],
    showAllSymbol: [{ type: Input, args: ['showAllSymbol',] }],
    hoverAnimation: [{ type: Input, args: ['hoverAnimation',] }],
    legendHoverLink: [{ type: Input, args: ['legendHoverLink',] }],
    stack: [{ type: Input, args: ['stack',] }],
    cursor: [{ type: Input, args: ['cursor',] }],
    connectNulls: [{ type: Input, args: ['connectNulls',] }],
    clipOverflow: [{ type: Input, args: ['clipOverflow',] }],
    step: [{ type: Input, args: ['step',] }],
    label: [{ type: Input, args: ['label',] }],
    itemStyle: [{ type: Input, args: ['itemStyle',] }],
    lineStyle: [{ type: Input, args: ['lineStyle',] }],
    areaStyle: [{ type: Input, args: ['areaStyle',] }],
    emphasis: [{ type: Input, args: ['emphasis',] }],
    smooth: [{ type: Input, args: ['smooth',] }],
    smoothMonotone: [{ type: Input, args: ['smoothMonotone',] }],
    sampling: [{ type: Input, args: ['sampling',] }],
    dimensions: [{ type: Input, args: ['dimensions',] }],
    encode: [{ type: Input, args: ['encode',] }],
    seriesLayoutBy: [{ type: Input, args: ['seriesLayoutBy',] }],
    datasetIndex: [{ type: Input, args: ['datasetIndex',] }],
    data: [{ type: Input, args: ['data',] }],
    markPoint: [{ type: Input, args: ['markPoint',] }],
    markLine: [{ type: Input, args: ['markLine',] }],
    markArea: [{ type: Input, args: ['markArea',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }],
    silent: [{ type: Input, args: ['silent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const LINE_MODULE_COMPONENTS = [
    TdChartSeriesLineComponent,
];
class CovalentLineEchartsModule {
}
CovalentLineEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    LINE_MODULE_COMPONENTS,
                ],
                exports: [
                    LINE_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartSeriesScatterComponent extends TdSeriesComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('scatter', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            id: this.id,
            type: this.type,
            name: this.name,
            color: this.color,
            coordinateSystem: this.coordinateSystem,
            xAxisIndex: this.xAxisIndex,
            yAxisIndex: this.yAxisIndex,
            polarIndex: this.polarIndex,
            geoIndex: this.geoIndex,
            calendarIndex: this.calendarIndex,
            hoverAnimation: this.hoverAnimation,
            legendHoverLink: this.legendHoverLink,
            symbol: this.symbol,
            symbolSize: this.symbolSize,
            symbolRotate: this.symbolRotate,
            symbolKeepAspect: this.symbolKeepAspect,
            symbolOffset: this.symbolOffset,
            large: this.large,
            largeThreshold: this.largeThreshold,
            cursor: this.cursor,
            label: this.label,
            itemStyle: this.itemStyle,
            emphasis: this.emphasis,
            progressive: this.progressive,
            progressiveThreshold: this.progressiveThreshold,
            dimensions: this.dimensions,
            encode: this.encode,
            seriesLayoutBy: this.seriesLayoutBy,
            datasetIndex: this.datasetIndex,
            data: this.data,
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            silent: this.silent,
            animation: this.animation,
            animationThreshold: this.animationThreshold,
            animationDuration: this.animationDuration,
            animationEasing: this.animationEasing,
            animationDelay: this.animationDelay,
            animationDurationUpdate: this.animationDurationUpdate,
            animationEasingUpdate: this.animationEasingUpdate,
            animationDelayUpdate: this.animationDelayUpdate,
            tooltip: this.tooltip,
        };
    }
}
TdChartSeriesScatterComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-scatter]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesScatterComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesScatterComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesScatterComponent.propDecorators = {
    coordinateSystem: [{ type: Input, args: ['coordinateSystem',] }],
    xAxisIndex: [{ type: Input, args: ['xAxisIndex',] }],
    yAxisIndex: [{ type: Input, args: ['yAxisIndex',] }],
    polarIndex: [{ type: Input, args: ['polarIndex',] }],
    geoIndex: [{ type: Input, args: ['geoIndex',] }],
    calendarIndex: [{ type: Input, args: ['calendarIndex',] }],
    hoverAnimation: [{ type: Input, args: ['hoverAnimation',] }],
    legendHoverLink: [{ type: Input, args: ['legendHoverLink',] }],
    symbol: [{ type: Input, args: ['symbol',] }],
    symbolSize: [{ type: Input, args: ['symbolSize',] }],
    symbolRotate: [{ type: Input, args: ['symbolRotate',] }],
    symbolKeepAspect: [{ type: Input, args: ['symbolKeepAspect',] }],
    symbolOffset: [{ type: Input, args: ['symbolOffset',] }],
    large: [{ type: Input, args: ['large',] }],
    largeThreshold: [{ type: Input, args: ['largeThreshold',] }],
    cursor: [{ type: Input, args: ['cursor',] }],
    label: [{ type: Input, args: ['label',] }],
    itemStyle: [{ type: Input, args: ['itemStyle',] }],
    emphasis: [{ type: Input, args: ['emphasis',] }],
    progressive: [{ type: Input, args: ['progressive',] }],
    progressiveThreshold: [{ type: Input, args: ['progressiveThreshold',] }],
    dimensions: [{ type: Input, args: ['dimensions',] }],
    encode: [{ type: Input, args: ['encode',] }],
    seriesLayoutBy: [{ type: Input, args: ['seriesLayoutBy',] }],
    datasetIndex: [{ type: Input, args: ['datasetIndex',] }],
    data: [{ type: Input, args: ['data',] }],
    markPoint: [{ type: Input, args: ['markPoint',] }],
    markLine: [{ type: Input, args: ['markLine',] }],
    markArea: [{ type: Input, args: ['markArea',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }],
    silent: [{ type: Input, args: ['silent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const SCATTER_MODULE_COMPONENTS = [
    TdChartSeriesScatterComponent,
];
class CovalentScatterEchartsModule {
}
CovalentScatterEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    SCATTER_MODULE_COMPONENTS,
                ],
                exports: [
                    SCATTER_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartSeriesTreeComponent extends TdSeriesComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('tree', _optionsService);
        this.config = {};
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            id: this.id,
            type: this.type,
            name: this.name,
            data: this.data,
            zlevel: this.zlevel,
            z: this.z,
            left: this.left,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            width: this.width,
            height: this.height,
            layout: this.layout,
            orient: this.orient,
            symbol: this.symbol,
            symbolSize: this.symbolSize,
            symbolRotate: this.symbolRotate,
            symbolKeepAspect: this.symbolKeepAspect,
            roam: this.roam,
            expandAndCollapse: this.expandAndCollapse,
            initialTreeDepth: this.initialTreeDepth,
            itemStyle: this.itemStyle,
            label: this.label,
            lineStyle: this.lineStyle,
            leaves: this.leaves,
            emphasis: this.emphasis,
            tooltip: this.tooltip,
        };
    }
}
TdChartSeriesTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-tree]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesTreeComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesTreeComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesTreeComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    id: [{ type: Input, args: ['id',] }],
    name: [{ type: Input, args: ['name',] }],
    data: [{ type: Input, args: ['data',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }],
    left: [{ type: Input, args: ['left',] }],
    top: [{ type: Input, args: ['top',] }],
    right: [{ type: Input, args: ['right',] }],
    bottom: [{ type: Input, args: ['bottom',] }],
    width: [{ type: Input, args: ['width',] }],
    height: [{ type: Input, args: ['height',] }],
    layout: [{ type: Input, args: ['layout',] }],
    orient: [{ type: Input, args: ['orient',] }],
    symbol: [{ type: Input, args: ['symbol',] }],
    symbolSize: [{ type: Input, args: ['symbolSize',] }],
    symbolRotate: [{ type: Input, args: ['symbolRotate',] }],
    symbolKeepAspect: [{ type: Input, args: ['symbolKeepAspect',] }],
    roam: [{ type: Input, args: ['roam',] }],
    expandAndCollapse: [{ type: Input, args: ['expandAndCollapse',] }],
    initialTreeDepth: [{ type: Input, args: ['initialTreeDepth',] }],
    itemStyle: [{ type: Input, args: ['itemStyle',] }],
    label: [{ type: Input, args: ['label',] }],
    lineStyle: [{ type: Input, args: ['lineStyle',] }],
    leaves: [{ type: Input, args: ['leaves',] }],
    emphasis: [{ type: Input, args: ['emphasis',] }],
    tooltip: [{ type: Input, args: ['tooltip',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TREE_MODULE_COMPONENTS = [
    TdChartSeriesTreeComponent,
];
class CovalentTreeEchartsModule {
}
CovalentTreeEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TREE_MODULE_COMPONENTS,
                ],
                exports: [
                    TREE_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdTooltipContext {
}
class TdChartTooltipFormatterDirective {
}
TdChartTooltipFormatterDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[tdTooltipFormatter]',
            },] }
];
class TdChartTooltipComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _optionsService
     */
    constructor(_changeDetectorRef, _elementRef, _optionsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._optionsService = _optionsService;
        this._state = {};
        this._context = new TdTooltipContext();
        this.config = {};
        this.show = true;
        this.trigger = 'axis';
        this.showContent = true;
        this.alwaysShowContent = false;
        this.triggerOn = 'mousemove|click';
        this.showDelay = 0;
        this.hideDelay = 0;
        this.enterable = false;
        this.confine = false;
        this.transitionDuration = 0.5;
        // series
        this.backgroundColor = 'rgba(50,50,50,0.7)'; // series
        // series
        this.borderColor = '#333'; // series
        // series
        this.borderWidth = 0; // series
        // series
        this.padding = 5; // series
        // series
        this.textStyle = {
            // series
            color: '#FFF',
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        let config = assignDefined(this._state, this.config ? this.config : {}, {
            show: this.show,
            trigger: this.trigger,
            axisPointer: this.axisPointer,
            showContent: this.showContent,
            alwaysShowContent: this.alwaysShowContent,
            triggerOn: this.triggerOn,
            showDelay: this.showDelay,
            hideDelay: this.hideDelay,
            enterable: this.enterable,
            confine: this.confine,
            transitionDuration: this.transitionDuration,
            position: this.position,
            formatter: this.formatter ? this.formatter : this._formatter(),
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth,
            padding: this.padding,
            textStyle: this.textStyle,
            extraCssText: this.extraCssText,
        });
        // set tooltip configuration in parent chart and render new configurations
        this._optionsService.setOption('tooltip', config);
    }
    /**
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('tooltip');
    }
    /**
     * @return {?}
     */
    _formatter() {
        return (params, ticket, callback) => {
            this._context = {
                $implicit: params,
                ticket: ticket,
            };
            // timeout set since we need to set the HTML at the end of the angular lifecycle when
            // the tooltip delay is more than 0
            setTimeout(() => {
                callback(ticket, ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML);
            });
            this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML;
        };
    }
}
TdChartTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-tooltip',
                template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartTooltipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdChartOptionsService }
];
TdChartTooltipComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    show: [{ type: Input, args: ['show',] }],
    trigger: [{ type: Input, args: ['trigger',] }],
    axisPointer: [{ type: Input, args: ['axisPointer',] }],
    showContent: [{ type: Input, args: ['showContent',] }],
    alwaysShowContent: [{ type: Input, args: ['alwaysShowContent',] }],
    triggerOn: [{ type: Input, args: ['triggerOn',] }],
    showDelay: [{ type: Input, args: ['showDelay',] }],
    hideDelay: [{ type: Input, args: ['hideDelay',] }],
    enterable: [{ type: Input, args: ['enterable',] }],
    renderMode: [{ type: Input, args: ['renderMode',] }],
    confine: [{ type: Input, args: ['confine',] }],
    transitionDuration: [{ type: Input, args: ['transitionDuration',] }],
    position: [{ type: Input, args: ['position',] }],
    formatter: [{ type: Input, args: ['formatter',] }],
    backgroundColor: [{ type: Input, args: ['backgroundColor',] }],
    borderColor: [{ type: Input, args: ['borderColor',] }],
    borderWidth: [{ type: Input, args: ['borderWidth',] }],
    padding: [{ type: Input, args: ['padding',] }],
    textStyle: [{ type: Input, args: ['textStyle',] }],
    extraCssText: [{ type: Input, args: ['extraCssText',] }],
    formatterTemplate: [{ type: ContentChild, args: [TdChartTooltipFormatterDirective, { read: TemplateRef },] }],
    fullTemplate: [{ type: ViewChild, args: ['tooltipContent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdSeriesTooltipComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _seriesComponent
     */
    constructor(_changeDetectorRef, _elementRef, _seriesComponent) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._seriesComponent = _seriesComponent;
        this._state = {};
        this._context = new TdTooltipContext();
        this.backgroundColor = 'rgba(50,50,50,0.7)';
        this.borderColor = '#333';
        this.borderWidth = 0;
        this.padding = 5;
        this.textStyle = {
            color: '#FFF',
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        let config = assignDefined(this._state, this.config ? this.config : {}, {
            position: this.position,
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth,
            padding: this.padding,
            textStyle: this.textStyle,
            extraCssText: this.extraCssText,
            formatter: this.formatter ? this.formatter : this._formatter(),
        });
        // set series tooltip configuration in parent chart and render new configurations
        this._seriesComponent.setStateOption('tooltip', config);
    }
    /**
     * Formatter for tooltip
     *
     * @return {?}
     */
    _formatter() {
        return (params, ticket, callback) => {
            this._context = {
                $implicit: params,
                ticket: ticket,
            };
            // timeout set since we need to set the HTML at the end of the angular lifecycle when
            // the tooltip delay is more than 0
            setTimeout(() => {
                callback(ticket, ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML);
            });
            this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML;
        };
    }
    /**
     * @return {?}
     */
    _removeOption() {
        this._seriesComponent.removeStateOption('tooltip');
    }
}
TdSeriesTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series-tooltip',
                template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdSeriesTooltipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdSeriesComponent }
];
TdSeriesTooltipComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    formatter: [{ type: Input, args: ['formatter',] }],
    position: [{ type: Input, args: ['position',] }],
    backgroundColor: [{ type: Input, args: ['backgroundColor',] }],
    borderColor: [{ type: Input, args: ['borderColor',] }],
    borderWidth: [{ type: Input, args: ['borderWidth',] }],
    padding: [{ type: Input, args: ['padding',] }],
    textStyle: [{ type: Input, args: ['textStyle',] }],
    extraCssText: [{ type: Input, args: ['extraCssText',] }],
    formatterTemplate: [{ type: ContentChild, args: [TdChartTooltipFormatterDirective, { read: TemplateRef },] }],
    fullTemplate: [{ type: ViewChild, args: ['tooltipContent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TOOLTIP_MODULE_COMPONENTS = [
    TdChartTooltipComponent,
    TdChartTooltipFormatterDirective,
    TdSeriesTooltipComponent,
];
class CovalentTooltipEchartsModule {
}
CovalentTooltipEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TOOLTIP_MODULE_COMPONENTS,
                ],
                exports: [
                    TOOLTIP_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { TdChartComponent, TdChartAxisComponent, TdChartYAxisComponent, TdChartXAxisComponent, TdChartOptionsService$1 as TdChartOptionsService, CHART_PROVIDER, BASE_MODULE_COMPONENTS, CovalentBaseEchartsModule, assignDefined$1 as assignDefined, TdSeriesComponent$1 as TdSeriesComponent, BAR_MODULE_COMPONENTS, CovalentBarEchartsModule, TdChartSeriesBarComponent, LINE_MODULE_COMPONENTS, CovalentLineEchartsModule, TdChartSeriesLineComponent, SCATTER_MODULE_COMPONENTS, CovalentScatterEchartsModule, TdChartSeriesScatterComponent, TREE_MODULE_COMPONENTS, CovalentTreeEchartsModule, TdChartSeriesTreeComponent, TOOLTIP_MODULE_COMPONENTS, CovalentTooltipEchartsModule, TdTooltipContext, TdChartTooltipFormatterDirective, TdChartTooltipComponent, TdSeriesTooltipComponent, CHART_PROVIDER_FACTORY as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9jaGFydC1vcHRpb25zLnNlcnZpY2UudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvdXRpbHMvYXNzaWduLWRlZmluZWQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvY2hhcnQuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL2F4aXMvYXhpcy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvYXhpcy94LWF4aXMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL2F4aXMveS1heGlzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9iYXNlLm1vZHVsZS50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9zZXJpZXMvc2VyaWVzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFyL2Jhci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhci9iYXIubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9saW5lL2xpbmUuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9saW5lL2xpbmUubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9zY2F0dGVyL3NjYXR0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9zY2F0dGVyL3NjYXR0ZXIubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlL3RyZWUuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlL3RyZWUubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sdGlwL3Nlcmllcy10b29sdGlwLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvdG9vbHRpcC90b29sdGlwLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBQcm92aWRlcixcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZENoYXJ0T3B0aW9uc1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgX29wdGlvbnM6IGFueSA9IHt9O1xuICBwcml2YXRlIF9vcHRpb25zU3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHRoaXMuX29wdGlvbnMpO1xuXG4gIHNldE9wdGlvbihvcHRpb246IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxldCBvcHRpb25zOiBhbnkgPSB7fTtcbiAgICBvcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHRoaXMuX29wdGlvbnNTdWJqZWN0Lm5leHQodGhpcy5fb3B0aW9ucyk7XG4gIH1cblxuICBzZXRBcnJheU9wdGlvbihvcHRpb246IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSB7XG4gICAgbGV0IHByZXZWYWx1ZTogYW55W10gPSB0aGlzLmdldE9wdGlvbihvcHRpb24pO1xuICAgIGlmIChwcmV2VmFsdWUpIHtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gcHJldlZhbHVlLmluZGV4T2YodmFsdWUpO1xuICAgICAgaW5kZXggPiAtMSA/IHByZXZWYWx1ZVtpbmRleF0gPSB2YWx1ZSA6IHByZXZWYWx1ZS5wdXNoKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJldlZhbHVlID0gW3ZhbHVlXTtcbiAgICB9XG4gICAgdGhpcy5zZXRPcHRpb24ob3B0aW9uLCBwcmV2VmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlQXJyYXlPcHRpb24ob3B0aW9uOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGxldCBwcmV2VmFsdWU6IGFueVtdID0gdGhpcy5nZXRPcHRpb24ob3B0aW9uKTtcbiAgICBpZiAocHJldlZhbHVlKSB7XG4gICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHByZXZWYWx1ZS5pbmRleE9mKHZhbHVlKTtcbiAgICAgIGlmIChpbmRleCA+IC0xICkge1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgcHJldlZhbHVlW2luZGV4XSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmV2VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRPcHRpb24ob3B0aW9uLCBwcmV2VmFsdWUpO1xuICB9XG5cbiAgZ2V0T3B0aW9uKG9wdGlvbjogc3RyaW5nKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zW29wdGlvbl07XG4gIH1cblxuICBjbGVhck9wdGlvbihvcHRpb246IHN0cmluZyk6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIHRoaXMuc2V0T3B0aW9uKG9wdGlvbiwgbnVsbCk7XG4gIH1cblxuICBsaXN0ZW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uc1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ0hBUlRfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IENIQVJUX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVGRDaGFydE9wdGlvbnNTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IENIQVJUX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkRlZmluZWQodGFyZ2V0OiBhbnksIC4uLnNvdXJjZXM6IGFueVtdKTogYW55IHtcbiAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcbiAgICAgIGNvbnN0IHZhbDogYW55ID0gc291cmNlW2tleV07XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgfSBlbHNlIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIERvQ2hlY2ssXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gJ2VjaGFydHMvbGliL2VjaGFydHMnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsIENIQVJUX1BST1ZJREVSIH0gZnJvbSAnLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCB9IGZyb20gJy4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydCcsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0NIQVJUX1BST1ZJREVSXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgRG9DaGVjaywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIF93aWR0aFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfaGVpZ2h0U3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgX2luc3RhbmNlOiBhbnk7XG5cbiAgZ2V0IGluc3RhbmNlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuICBwcml2YXRlIF9vcHRpb25zOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdncm91cCcpIGdyb3VwOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgnY2xpY2snKSBjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgnZGJsY2xpY2snKSBkYmxjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgnY29udGV4dG1lbnUnKSBjb250ZXh0bWVudTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnN0YW5jZSA9IGVjaGFydHMuaW5pdCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2NsaWNrJykuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmNsaWNrLm5leHQocGFyYW1zKTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnZGJsY2xpY2snKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZGJsY2xpY2submV4dChwYXJhbXMpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdjb250ZXh0bWVudScpLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5jb250ZXh0bWVudS5uZXh0KHBhcmFtcyk7XG4gICAgICB9KSxcbiAgICApO1xuICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XG4gICAgICBlY2hhcnRzLmNvbm5lY3QodGhpcy5ncm91cCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgbWVyZ2UoXG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICApLFxuICAgICAgICB0aGlzLl93aWR0aFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy5faGVpZ2h0U3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICApLFxuICAgICAgKS5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5faW5zdGFuY2UucmVzaXplKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmxpc3RlbigpLnN1YnNjcmliZSgob3B0aW9uczogYW55KSA9PiB7XG4gICAgICBhc3NpZ25EZWZpbmVkKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KCg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XG4gICAgICB0aGlzLl9oZWlnaHRTdWJqZWN0Lm5leHQoKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5jbGVhcigpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3Vicykge1xuICAgICAgdGhpcy5fc3Vicy5mb3JFYWNoKChzdWI6IFN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlLnNldE9wdGlvbihhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB7XG4gICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIGxlZnQ6ICcyMCcsXG4gICAgICAgICAgcmlnaHQ6ICcyMCcsXG4gICAgICAgICAgYm90dG9tOiAnMTAnLFxuICAgICAgICAgIHRvcDogJzEwJyxcbiAgICAgICAgICBjb250YWluTGFiZWw6IHRydWUsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjRkNGQ0ZDJyxcbiAgICAgICAgfSxcbiAgICAgICAgeEF4aXMgOiBbe31dLCAvLyB0aHJvd3MgZXJyb3IgaWYgaXRzIGVtcHR5XG4gICAgICAgIHlBeGlzIDogW3t9XSwgLy8gdGhyb3dzIGVycm9yIGlmIGl0cyBlbXB0eVxuICAgICAgfSwgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LCB0aGlzLl9vcHRpb25zKSwgdHJ1ZSk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFxuICBJVGRBeGlzTGluZSxcbiAgSVRkQXhpc0xhYmVsLFxuICBJVGRBeGlzVGljayxcbiAgSVRkU3BsaXRMaW5lLFxuICBJVGRTcGxpdEFyZWEsXG4gIElUZEF4aXNQb2ludGVyLFxuICBUZEF4aXNUeXBlLFxuICBUZE5hbWVMb2NhdGlvbixcbiAgVGRYQXhpc1Bvc2l0aW9uLFxuICBUZFlBeGlzUG9zaXRpb24gfSBmcm9tICcuL2F4aXMuaW50ZXJmYWNlJztcbiAgXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGRDaGFydEF4aXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge1xuICAgIGF4aXNMaW5lOiB7XG4gICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgY29sb3I6ICcjQUJBQkFCJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzcGxpdExpbmU6IHtcbiAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICBjb2xvcjogJyNBQkFCQUInLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgQElucHV0KCdzaG93Jykgc2hvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnZ3JpZEluZGV4JykgZ3JpZEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnb2Zmc2V0Jykgb2Zmc2V0OiBudW1iZXI7XG4gIGFic3RyYWN0IHBvc2l0aW9uOiBUZFhBeGlzUG9zaXRpb24gfCBUZFlBeGlzUG9zaXRpb247XG4gIEBJbnB1dCgndHlwZScpIHR5cGU6IFRkQXhpc1R5cGU7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCduYW1lTG9jYXRpb24nKSBuYW1lTG9jYXRpb246IFRkTmFtZUxvY2F0aW9uO1xuICBASW5wdXQoJ25hbWVUZXh0U3R5bGUnKSBuYW1lVGV4dFN0eWxlOiBhbnk7XG4gIEBJbnB1dCgnbmFtZUdhcCcpIG5hbWVHYXA6IG51bWJlcjtcbiAgQElucHV0KCduYW1lUm90YXRlJykgbmFtZVJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ2ludmVyc2UnKSBpbnZlcnNlOiBib29sZWFuO1xuICBASW5wdXQoJ2JvdW5kYXJ5R2FwJykgYm91bmRhcnlHYXA6IGJvb2xlYW4gfCBzdHJpbmdbXTtcbiAgQElucHV0KCdtaW4nKSBtaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdtYXgnKSBtYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdzY2FsZScpIHNjYWxlOiBib29sZWFuO1xuICBASW5wdXQoJ21pbkludGVydmFsJykgbWluSW50ZXJ2YWw6IG51bWJlcjtcbiAgQElucHV0KCdpbnRlcnZhbCcpIGludGVydmFsOiBudW1iZXI7XG4gIEBJbnB1dCgnbG9nQmFzZScpIGxvZ0Jhc2U6IG51bWJlcjtcbiAgQElucHV0KCdzaWxlbnQnKSBzaWxlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgndHJpZ2dlckV2ZW50JykgdHJpZ2dlckV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoJ2F4aXNMaW5lJykgYXhpc0xpbmU6IElUZEF4aXNMaW5lO1xuICBASW5wdXQoJ2F4aXNUaWNrJykgYXhpc1RpY2s6IElUZEF4aXNUaWNrO1xuICBASW5wdXQoJ2F4aXNMYWJlbCcpIGF4aXNMYWJlbDogSVRkQXhpc0xhYmVsO1xuICBASW5wdXQoJ3NwbGl0TGluZScpIHNwbGl0TGluZTogSVRkU3BsaXRMaW5lO1xuICBASW5wdXQoJ3NwbGl0QXJlYScpIHNwbGl0QXJlYTogSVRkU3BsaXRBcmVhO1xuICBASW5wdXQoJ2RhdGEnKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgnYXhpc1BvaW50ZXInKSBheGlzUG9pbnRlcjogSVRkQXhpc1BvaW50ZXI7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9heGlzT3B0aW9uOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgZ3JpZEluZGV4OiB0aGlzLmdyaWRJbmRleCxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG5hbWVMb2NhdGlvbjogdGhpcy5uYW1lTG9jYXRpb24sXG4gICAgICBuYW1lVGV4dFN0eWxlOiB0aGlzLm5hbWVUZXh0U3R5bGUsXG4gICAgICBuYW1lR2FwOiB0aGlzLm5hbWVHYXAsXG4gICAgICBuYW1lUm90YXRlOiB0aGlzLm5hbWVSb3RhdGUsXG4gICAgICBpbnZlcnNlOiB0aGlzLmludmVyc2UsXG4gICAgICBib3VuZGFyeUdhcDogdGhpcy5ib3VuZGFyeUdhcCxcbiAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICBtYXg6IHRoaXMubWF4LFxuICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICBtaW5JbnRlcnZhbDogdGhpcy5taW5JbnRlcnZhbCxcbiAgICAgIGludGVydmFsOiB0aGlzLmludGVydmFsLFxuICAgICAgbG9nQmFzZTogdGhpcy5sb2dCYXNlLFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICAgIHRyaWdnZXJFdmVudDogdGhpcy50cmlnZ2VyRXZlbnQsXG4gICAgICBheGlzTGluZTogdGhpcy5heGlzTGluZSxcbiAgICAgIGF4aXNUaWNrOiB0aGlzLmF4aXNUaWNrLFxuICAgICAgYXhpc0xhYmVsOiB0aGlzLmF4aXNMYWJlbCxcbiAgICAgIHNwbGl0TGluZTogdGhpcy5zcGxpdExpbmUsXG4gICAgICBzcGxpdEFyZWE6IHRoaXMuc3BsaXRBcmVhLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgYXhpc1BvaW50ZXI6IHRoaXMuYXhpc1BvaW50ZXIsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgIH0pO1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnNldEFycmF5T3B0aW9uKHRoaXMuX2F4aXNPcHRpb24sIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UuY2xlYXJPcHRpb24odGhpcy5fYXhpc09wdGlvbik7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGRYQXhpc1Bvc2l0aW9uICB9IGZyb20gJy4vYXhpcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGRDaGFydEF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQteC1heGlzJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFhBeGlzQ29tcG9uZW50IGV4dGVuZHMgVGRDaGFydEF4aXNDb21wb25lbnQge1xuXG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogVGRYQXhpc1Bvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3hBeGlzJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBUZFlBeGlzUG9zaXRpb24gIH0gZnJvbSAnLi9heGlzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUZENoYXJ0QXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC15LWF4aXMnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0WUF4aXNDb21wb25lbnQgZXh0ZW5kcyBUZENoYXJ0QXhpc0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCdwb3NpdGlvbicpIHBvc2l0aW9uOiBUZFlBeGlzUG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigneUF4aXMnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUZENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDaGFydFhBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzL3gtYXhpcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDaGFydFlBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzL3ktYXhpcy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQkFTRV9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRDb21wb25lbnQsXG4gIFRkQ2hhcnRYQXhpc0NvbXBvbmVudCxcbiAgVGRDaGFydFlBeGlzQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQkFTRV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJBU0VfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50QmFzZUVjaGFydHNNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQgeyBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMvYXNzaWduLWRlZmluZWQnO1xuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IElUZFNlcmllc1Rvb2x0aXAgfSBmcm9tICcuLi9zZXJpZXMvc2VyaWVzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJVGRBbmltYXRpb24gfSBmcm9tICcuLi9iYXNlLnR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRTZXJpZXM8VD4gZXh0ZW5kcyBJVGRBbmltYXRpb24ge1xuICBpZD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHR5cGU/OiBUO1xuXG4gIHRvb2x0aXA/OiBJVGRTZXJpZXNUb29sdGlwO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGRTZXJpZXNDb21wb25lbnQ8VCA9IGFueT4gaW1wbGVtZW50cyBJVGRTZXJpZXM8VD4sIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kgIHtcblxuICBwcml2YXRlIF90eXBlOiBUO1xuXG4gIGdldCB0eXBlKCk6IFQge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgX3N0YXRlOiBhbnkgPSB7fTtcbiAgX29wdGlvbnM6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZztcblxuICBASW5wdXQoJ2FuaW1hdGlvbicpIGFuaW1hdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCdhbmltYXRpb25UaHJlc2hvbGQnKSBhbmltYXRpb25UaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdhbmltYXRpb25EdXJhdGlvbicpIGFuaW1hdGlvbkR1cmF0aW9uOiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCdhbmltYXRpb25FYXNpbmcnKSBhbmltYXRpb25FYXNpbmc6IHN0cmluZztcbiAgQElucHV0KCdhbmltYXRpb25EZWxheScpIGFuaW1hdGlvbkRlbGF5OiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCdhbmltYXRpb25EdXJhdGlvblVwZGF0ZScpIGFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlOiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCdhbmltYXRpb25FYXNpbmdVcGRhdGUnKSBhbmltYXRpb25FYXNpbmdVcGRhdGU6IHN0cmluZztcbiAgQElucHV0KCdhbmltYXRpb25EZWxheVVwZGF0ZScpIGFuaW1hdGlvbkRlbGF5VXBkYXRlOiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCd0b29sdGlwJykgdG9vbHRpcDogSVRkU2VyaWVzVG9vbHRpcDtcblxuICBjb25zdHJ1Y3Rvcih0eXBlOiBULCBwcm90ZWN0ZWQgb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cbiAgXG4gIHNldFN0YXRlT3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgcmVtb3ZlU3RhdGVPcHRpb24ob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICB0aGlzLl9vcHRpb25zW29wdGlvbl0gPSBudWxsO1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIGFic3RyYWN0IGdldENvbmZpZygpOiBhbnk7XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHRoaXMuZ2V0Q29uZmlnKCksIHRoaXMuX29wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9uc1NlcnZpY2Uuc2V0QXJyYXlPcHRpb24oJ3NlcmllcycsIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICB0aGlzLm9wdGlvbnNTZXJ2aWNlLnJlbW92ZUFycmF5T3B0aW9uKCdzZXJpZXMnLCBjb25maWcpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgVGRDb29yZGluYXRlU3lzdGVtLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZEVtcGhhc2lzLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBJVGRNYXJrUG9pbnQsXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgSVRkU2VyaWVzLFxuICBJVGRMYWJlbCxcbiAgVGRQcm9ncmVzc2l2ZUNodW5rTW9kZSxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEJhclNlcmllcyBleHRlbmRzIElUZFNlcmllczwnYmFyJz4ge1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBMYWJlbD86IElUZExhYmVsO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIHN0YWNrPzogc3RyaW5nO1xuICBjdXJzb3I/OiBzdHJpbmc7XG4gIGJhcldpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBiYXJNYXhXaWR0aD86IG51bWJlciB8IHN0cmluZztcbiAgYmFyTWluSGVpZ2h0PzogbnVtYmVyO1xuICBiYXJHYXA/OiBzdHJpbmc7XG4gIGJhckNhdGVnb3J5R2FwPzogc3RyaW5nO1xuICBsYXJnZT86IGJvb2xlYW47XG4gIGxhcmdlVGhyZXNob2xkPzogbnVtYmVyO1xuICBwcm9ncmVzc2l2ZT86IG51bWJlcjtcbiAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIHByb2dyZXNzaXZlQ2h1bmtNb2RlPzogVGRQcm9ncmVzc2l2ZUNodW5rTW9kZTtcbiAgZGltZW5zaW9ucz86IGFueVtdO1xuICBlbmNvZGU/OiBhbnk7XG4gIHNlcmllc0xheW91dEJ5PzogVGRTZXJpZXNMYXlvdXRCeTtcbiAgZGF0YXNldEluZGV4PzogbnVtYmVyO1xuICBkYXRhPzogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgWmxldmVsPzogMDtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLWJhcl0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNCYXJDb21wb25lbnQpLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc0JhckNvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdiYXInPiBpbXBsZW1lbnRzIElUZEJhclNlcmllcyB7XG5cbiAgQElucHV0KCdjb29yZGluYXRlU3lzdGVtJykgY29vcmRpbmF0ZVN5c3RlbTogVGRDb29yZGluYXRlU3lzdGVtO1xuICBASW5wdXQoJ3hBeGlzSW5kZXgnKSB4QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgneUF4aXNJbmRleCcpIHlBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdsZWdlbmRIb3ZlckxpbmsnKSBsZWdlbmRIb3Zlckxpbms6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3RhY2snKSBzdGFjazogc3RyaW5nO1xuICBASW5wdXQoJ2N1cnNvcicpIGN1cnNvcjogc3RyaW5nO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IGFueTtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbiAgQElucHV0KCdiYXJXaWR0aCcpIGJhcldpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgnYmFyTWF4V2lkdGgnKSBiYXJNYXhXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoJ2Jhck1pbkhlaWdodCcpIGJhck1pbkhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoJ2JhckdhcCcpIGJhckdhcDogc3RyaW5nO1xuICBASW5wdXQoJ2JhckNhdGVnb3J5R2FwJykgYmFyQ2F0ZWdvcnlHYXA6IHN0cmluZztcbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBib29sZWFuO1xuICBASW5wdXQoJ2xhcmdlVGhyZXNob2xkJykgbGFyZ2VUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdwcm9ncmVzc2l2ZScpIHByb2dyZXNzaXZlOiBudW1iZXI7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmVUaHJlc2hvbGQnKSBwcm9ncmVzc2l2ZVRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoJ3Byb2dyZXNzaXZlQ2h1bmtNb2RlJykgcHJvZ3Jlc3NpdmVDaHVua01vZGU6IFRkUHJvZ3Jlc3NpdmVDaHVua01vZGU7XG4gIEBJbnB1dCgnZGltZW5zaW9ucycpIGRpbWVuc2lvbnM6IGFueVtdO1xuICBASW5wdXQoJ2VuY29kZScpIGVuY29kZTogYW55O1xuICBASW5wdXQoJ3Nlcmllc0xheW91dEJ5Jykgc2VyaWVzTGF5b3V0Qnk6IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIEBJbnB1dCgnZGF0YXNldEluZGV4JykgZGF0YXNldEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueVtdO1xuICBASW5wdXQoJ21hcmtQb2ludCcpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoJ21hcmtMaW5lJykgbWFya0xpbmU6IElUZE1hcmtMaW5lO1xuICBASW5wdXQoJ21hcmtBcmVhJykgbWFya0FyZWE6IElUZE1hcmtBcmVhO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcignYmFyJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogdGhpcy5jb29yZGluYXRlU3lzdGVtLFxuICAgICAgeEF4aXNJbmRleDogdGhpcy54QXhpc0luZGV4LFxuICAgICAgeUF4aXNJbmRleDogdGhpcy55QXhpc0luZGV4LFxuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgICAgYmFyV2lkdGg6IHRoaXMuYmFyV2lkdGgsXG4gICAgICBiYXJNYXhXaWR0aDogdGhpcy5iYXJNYXhXaWR0aCxcbiAgICAgIGJhck1pbkhlaWdodDogdGhpcy5iYXJNaW5IZWlnaHQsXG4gICAgICBiYXJHYXA6IHRoaXMuYmFyR2FwLFxuICAgICAgYmFyQ2F0ZWdvcnlHYXA6IHRoaXMuYmFyQ2F0ZWdvcnlHYXAsXG4gICAgICBsYXJnZTogdGhpcy5sYXJnZSxcbiAgICAgIGxhcmdlVGhyZXNob2xkOiB0aGlzLmxhcmdlVGhyZXNob2xkLFxuICAgICAgcHJvZ3Jlc3NpdmU6IHRoaXMucHJvZ3Jlc3NpdmUsXG4gICAgICBwcm9ncmVzc2l2ZVRocmVzaG9sZDogdGhpcy5wcm9ncmVzc2l2ZVRocmVzaG9sZCxcbiAgICAgIHByb2dyZXNzaXZlQ2h1bmtNb2RlOiB0aGlzLnByb2dyZXNzaXZlQ2h1bmtNb2RlLFxuICAgICAgZGltZW5zaW9uczogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgZW5jb2RlOiB0aGlzLmVuY29kZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIGFuaW1hdGlvbjogdGhpcy5hbmltYXRpb24sXG4gICAgICBhbmltYXRpb25UaHJlc2hvbGQ6IHRoaXMuYW5pbWF0aW9uVGhyZXNob2xkLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHRoaXMuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBhbmltYXRpb25FYXNpbmc6IHRoaXMuYW5pbWF0aW9uRWFzaW5nLFxuICAgICAgYW5pbWF0aW9uRGVsYXk6IHRoaXMuYW5pbWF0aW9uRGVsYXksXG4gICAgICBhbmltYXRpb25EdXJhdGlvblVwZGF0ZTogdGhpcy5hbmltYXRpb25EdXJhdGlvblVwZGF0ZSxcbiAgICAgIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZTogdGhpcy5hbmltYXRpb25FYXNpbmdVcGRhdGUsXG4gICAgICBhbmltYXRpb25EZWxheVVwZGF0ZTogdGhpcy5hbmltYXRpb25EZWxheVVwZGF0ZSxcbiAgICAgIHRvb2x0aXA6IHRoaXMudG9vbHRpcCxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jaGFydC9iYXInO1xuXG5pbXBvcnQgeyBUZENoYXJ0U2VyaWVzQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEJBUl9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRTZXJpZXNCYXJDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCQVJfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCQVJfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50QmFyRWNoYXJ0c01vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgVGRDb29yZGluYXRlU3lzdGVtLFxuICBUZE1hcmtQb2ludFN5bWJvbCxcbiAgSVRkTGFiZWwsXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkTGluZVN0eWxlLFxuICBJVGRBcmVhU3R5bGUsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBJVGRFbXBoYXNpcyxcbiAgSVRkU2VyaWVzLFxuICBJVGRTaGFkb3csXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IHR5cGUgVGRTYW1wbGluZyA9ICdhdmVyYWdlJyB8ICdtYXgnIHwgJ21pbicgfCAnc3VtJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRMaW5lU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdsaW5lJz4sIElUZFNoYWRvdyB7XG4gIGNvb3JkaW5hdGVTeXN0ZW0/OiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIHhBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHlBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHBvbGFySW5kZXg/OiBudW1iZXI7XG4gIHN5bWJvbD86IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBzeW1ib2xTaXplPzogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgc3ltYm9sUm90YXRlPzogbnVtYmVyO1xuICBzeW1ib2xLZWVwQXNwZWN0PzogYm9vbGVhbjtcbiAgc3ltYm9sT2Zmc2V0PzogYW55W107XG4gIHNob3dTeW1ib2w/OiBib29sZWFuO1xuICBzaG93QWxsU3ltYm9sPzogYm9vbGVhbiB8ICdhdXRvJztcbiAgaG92ZXJBbmltYXRpb24/OiBib29sZWFuO1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBzdGFjaz86IHN0cmluZztcbiAgY3Vyc29yPzogc3RyaW5nO1xuICBjb25uZWN0TnVsbHM/OiBib29sZWFuO1xuICBjbGlwT3ZlcmZsb3c/OiBib29sZWFuO1xuICBzdGVwPzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsaW5lU3R5bGU/OiBJVGRMaW5lU3R5bGU7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBhcmVhU3R5bGU/OiBJVGRBcmVhU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIHNtb290aD86IGJvb2xlYW4gfCBudW1iZXI7XG4gIHNtb290aE1vbm90b25lPzogc3RyaW5nO1xuICBzYW1wbGluZz86IFRkU2FtcGxpbmc7XG4gIGRpbWVuc2lvbnM/OiBhbnlbXTtcbiAgZW5jb2RlPzogYW55O1xuICBzZXJpZXNMYXlvdXRCeT86IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIGRhdGFzZXRJbmRleD86IG51bWJlcjtcbiAgZGF0YT86IGFueVtdO1xuICBtYXJrUG9pbnQ/OiBJVGRNYXJrUG9pbnQ7XG4gIG1hcmtMaW5lPzogSVRkTWFya0xpbmU7XG4gIG1hcmtBcmVhPzogSVRkTWFya0FyZWE7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLWxpbmVdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzTGluZUNvbXBvbmVudCksXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzTGluZUNvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdsaW5lJz4gaW1wbGVtZW50cyBJVGRMaW5lU2VyaWVzIHtcblxuICBASW5wdXQoJ2Nvb3JkaW5hdGVTeXN0ZW0nKSBjb29yZGluYXRlU3lzdGVtOiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIEBJbnB1dCgneEF4aXNJbmRleCcpIHhBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCd5QXhpc0luZGV4JykgeUF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3BvbGFySW5kZXgnKSBwb2xhckluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnc3ltYm9sJykgc3ltYm9sOiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgQElucHV0KCdzeW1ib2xTaXplJykgc3ltYm9sU2l6ZTogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgQElucHV0KCdzeW1ib2xSb3RhdGUnKSBzeW1ib2xSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCdzeW1ib2xLZWVwQXNwZWN0Jykgc3ltYm9sS2VlcEFzcGVjdDogYm9vbGVhbjtcbiAgQElucHV0KCdzeW1ib2xPZmZzZXQnKSBzeW1ib2xPZmZzZXQ6IGFueVtdO1xuICBASW5wdXQoJ3Nob3dTeW1ib2wnKSBzaG93U3ltYm9sOiBib29sZWFuO1xuICBASW5wdXQoJ3Nob3dBbGxTeW1ib2wnKSBzaG93QWxsU3ltYm9sOiBib29sZWFuO1xuICBASW5wdXQoJ2hvdmVyQW5pbWF0aW9uJykgaG92ZXJBbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgnbGVnZW5kSG92ZXJMaW5rJykgbGVnZW5kSG92ZXJMaW5rOiBib29sZWFuO1xuICBASW5wdXQoJ3N0YWNrJykgc3RhY2s6IHN0cmluZztcbiAgQElucHV0KCdjdXJzb3InKSBjdXJzb3I6IHN0cmluZztcbiAgQElucHV0KCdjb25uZWN0TnVsbHMnKSBjb25uZWN0TnVsbHM6IGJvb2xlYW47XG4gIEBJbnB1dCgnY2xpcE92ZXJmbG93JykgY2xpcE92ZXJmbG93OiBib29sZWFuO1xuICBASW5wdXQoJ3N0ZXAnKSBzdGVwOiBzdHJpbmcgfCBib29sZWFuO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2xpbmVTdHlsZScpIGxpbmVTdHlsZTogSVRkTGluZVN0eWxlO1xuICBASW5wdXQoJ2FyZWFTdHlsZScpIGFyZWFTdHlsZTogSVRkQXJlYVN0eWxlO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuICBASW5wdXQoJ3Ntb290aCcpIHNtb290aDogYm9vbGVhbiB8IG51bWJlcjtcbiAgQElucHV0KCdzbW9vdGhNb25vdG9uZScpIHNtb290aE1vbm90b25lOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2FtcGxpbmcnKSBzYW1wbGluZzogVGRTYW1wbGluZztcbiAgQElucHV0KCdkaW1lbnNpb25zJykgZGltZW5zaW9uczogYW55W107XG4gIEBJbnB1dCgnZW5jb2RlJykgZW5jb2RlOiBhbnk7XG4gIEBJbnB1dCgnc2VyaWVzTGF5b3V0QnknKSBzZXJpZXNMYXlvdXRCeTogVGRTZXJpZXNMYXlvdXRCeTtcbiAgQElucHV0KCdkYXRhc2V0SW5kZXgnKSBkYXRhc2V0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdkYXRhJykgZGF0YTogYW55W107XG4gIEBJbnB1dCgnbWFya1BvaW50JykgbWFya1BvaW50OiBJVGRNYXJrUG9pbnQ7XG4gIEBJbnB1dCgnbWFya0xpbmUnKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgnbWFya0FyZWEnKSBtYXJrQXJlYTogSVRkTWFya0FyZWE7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcbiAgQElucHV0KCdzaWxlbnQnKSBzaWxlbnQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcignbGluZScsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgIGNvb3JkaW5hdGVTeXN0ZW06IHRoaXMuY29vcmRpbmF0ZVN5c3RlbSxcbiAgICAgIHhBeGlzSW5kZXg6IHRoaXMueEF4aXNJbmRleCxcbiAgICAgIHlBeGlzSW5kZXg6IHRoaXMueUF4aXNJbmRleCxcbiAgICAgIHBvbGFySW5kZXg6IHRoaXMucG9sYXJJbmRleCxcbiAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICBzeW1ib2xTaXplOiB0aGlzLnN5bWJvbFNpemUsXG4gICAgICBzeW1ib2xSb3RhdGU6IHRoaXMuc3ltYm9sUm90YXRlLFxuICAgICAgc3ltYm9sS2VlcEFzcGVjdDogdGhpcy5zeW1ib2xLZWVwQXNwZWN0LFxuICAgICAgc3ltYm9sT2Zmc2V0OiB0aGlzLnN5bWJvbE9mZnNldCxcbiAgICAgIHNob3dTeW1ib2w6IHRoaXMuc2hvd1N5bWJvbCxcbiAgICAgIHNob3dBbGxTeW1ib2w6IHRoaXMuc2hvd0FsbFN5bWJvbCxcbiAgICAgIGhvdmVyQW5pbWF0aW9uOiB0aGlzLmhvdmVyQW5pbWF0aW9uLFxuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIGNvbm5lY3ROdWxsczogdGhpcy5jb25uZWN0TnVsbHMsXG4gICAgICBjbGlwT3ZlcmZsb3c6IHRoaXMuY2xpcE92ZXJmbG93LFxuICAgICAgc3RlcDogdGhpcy5zdGVwLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgbGluZVN0eWxlOiB0aGlzLmxpbmVTdHlsZSxcbiAgICAgIGFyZWFTdHlsZTogdGhpcy5hcmVhU3R5bGUsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIHNtb290aDogdGhpcy5zbW9vdGgsXG4gICAgICBzbW9vdGhNb25vdG9uZTogdGhpcy5zbW9vdGhNb25vdG9uZSxcbiAgICAgIHNhbXBsaW5nOiB0aGlzLnNhbXBsaW5nLFxuICAgICAgZGltZW5zaW9uczogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgZW5jb2RlOiB0aGlzLmVuY29kZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgICBhbmltYXRpb246IHRoaXMuYW5pbWF0aW9uLFxuICAgICAgYW5pbWF0aW9uVGhyZXNob2xkOiB0aGlzLmFuaW1hdGlvblRocmVzaG9sZCxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgYW5pbWF0aW9uRWFzaW5nOiB0aGlzLmFuaW1hdGlvbkVhc2luZyxcbiAgICAgIGFuaW1hdGlvbkRlbGF5OiB0aGlzLmFuaW1hdGlvbkRlbGF5LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb25VcGRhdGU6IHRoaXMuYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUsXG4gICAgICBhbmltYXRpb25FYXNpbmdVcGRhdGU6IHRoaXMuYW5pbWF0aW9uRWFzaW5nVXBkYXRlLFxuICAgICAgYW5pbWF0aW9uRGVsYXlVcGRhdGU6IHRoaXMuYW5pbWF0aW9uRGVsYXlVcGRhdGUsXG4gICAgICB0b29sdGlwOiB0aGlzLnRvb2x0aXAsXG4gICAgfTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jaGFydC9saW5lJztcblxuaW1wb3J0IHsgVGRDaGFydFNlcmllc0xpbmVDb21wb25lbnQgfSBmcm9tICcuL2xpbmUuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IExJTkVfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0U2VyaWVzTGluZUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIExJTkVfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBMSU5FX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudExpbmVFY2hhcnRzTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBUZENvb3JkaW5hdGVTeXN0ZW0sXG4gIFRkTWFya1BvaW50U3ltYm9sLFxuICBJVGRNYXJrUG9pbnQsXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkTGFiZWwsXG4gIElUZEVtcGhhc2lzLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBJVGRNYXJrTGluZSxcbiAgSVRkTWFya0FyZWEsXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxuICBJVGRTZXJpZXMsXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFNjYXR0ZXJTZXJpZXMgZXh0ZW5kcyBJVGRTZXJpZXM8J3NjYXR0ZXInPiB7XG4gIGNvb3JkaW5hdGVTeXN0ZW0/OiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIHhBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHlBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHBvbGFySW5kZXg/OiBudW1iZXI7XG4gIGdlb0luZGV4PzogbnVtYmVyO1xuICBjYWxlbmRhckluZGV4PzogbnVtYmVyO1xuICBob3ZlckFuaW1hdGlvbj86IGJvb2xlYW47XG4gIGxlZ2VuZEhvdmVyTGluaz86IGJvb2xlYW47XG4gIHN5bWJvbD86IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBzeW1ib2xTaXplPzogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgc3ltYm9sUm90YXRlPzogbnVtYmVyO1xuICBzeW1ib2xLZWVwQXNwZWN0PzogYm9vbGVhbjtcbiAgc3ltYm9sT2Zmc2V0PzogYW55W107XG4gIGxhcmdlPzogYm9vbGVhbjtcbiAgbGFyZ2VUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIGN1cnNvcj86IHN0cmluZztcbiAgY29ubmVjdE51bGxzPzogYm9vbGVhbjtcbiAgY2xpcE92ZXJmbG93PzogYm9vbGVhbjtcbiAgc3RlcD86IGJvb2xlYW47XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IGFueTtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgcHJvZ3Jlc3NpdmU/OiBudW1iZXI7XG4gIHByb2dyZXNzaXZlVGhyZXNob2xkPzogbnVtYmVyO1xuICBkaW1lbnNpb25zPzogYW55W107XG4gIGVuY29kZT86IGFueTtcbiAgc2VyaWVzTGF5b3V0Qnk/OiBUZFNlcmllc0xheW91dEJ5O1xuICBkYXRhc2V0SW5kZXg/OiBudW1iZXI7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICB6bGV2ZWw/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNpbGVudD86IGJvb2xlYW47XG59XG4gIFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLXNjYXR0ZXJdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzU2NhdHRlckNvbXBvbmVudCksXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzU2NhdHRlckNvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdzY2F0dGVyJz4gaW1wbGVtZW50cyBJVGRTY2F0dGVyU2VyaWVzIHtcblxuICBASW5wdXQoJ2Nvb3JkaW5hdGVTeXN0ZW0nKSBjb29yZGluYXRlU3lzdGVtOiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIEBJbnB1dCgneEF4aXNJbmRleCcpIHhBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCd5QXhpc0luZGV4JykgeUF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3BvbGFySW5kZXgnKSBwb2xhckluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnZ2VvSW5kZXgnKSBnZW9JbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2NhbGVuZGFySW5kZXgnKSBjYWxlbmRhckluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnaG92ZXJBbmltYXRpb24nKSBob3ZlckFuaW1hdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCdsZWdlbmRIb3ZlckxpbmsnKSBsZWdlbmRIb3Zlckxpbms6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3ltYm9sJykgc3ltYm9sOiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgQElucHV0KCdzeW1ib2xTaXplJykgc3ltYm9sU2l6ZTogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgQElucHV0KCdzeW1ib2xSb3RhdGUnKSBzeW1ib2xSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCdzeW1ib2xLZWVwQXNwZWN0Jykgc3ltYm9sS2VlcEFzcGVjdDogYm9vbGVhbjtcbiAgQElucHV0KCdzeW1ib2xPZmZzZXQnKSBzeW1ib2xPZmZzZXQ6IGFueVtdO1xuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IGJvb2xlYW47XG4gIEBJbnB1dCgnbGFyZ2VUaHJlc2hvbGQnKSBsYXJnZVRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoJ2N1cnNvcicpIGN1cnNvcjogc3RyaW5nO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuICBASW5wdXQoJ3Byb2dyZXNzaXZlJykgcHJvZ3Jlc3NpdmU6IG51bWJlcjtcbiAgQElucHV0KCdwcm9ncmVzc2l2ZVRocmVzaG9sZCcpIHByb2dyZXNzaXZlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgnZGltZW5zaW9ucycpIGRpbWVuc2lvbnM6IGFueVtdO1xuICBASW5wdXQoJ2VuY29kZScpIGVuY29kZTogYW55O1xuICBASW5wdXQoJ3Nlcmllc0xheW91dEJ5Jykgc2VyaWVzTGF5b3V0Qnk6IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIEBJbnB1dCgnZGF0YXNldEluZGV4JykgZGF0YXNldEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueVtdO1xuICBASW5wdXQoJ21hcmtQb2ludCcpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoJ21hcmtMaW5lJykgbWFya0xpbmU6IElUZE1hcmtMaW5lO1xuICBASW5wdXQoJ21hcmtBcmVhJykgbWFya0FyZWE6IElUZE1hcmtBcmVhO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3NjYXR0ZXInLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBjb29yZGluYXRlU3lzdGVtOiB0aGlzLmNvb3JkaW5hdGVTeXN0ZW0sXG4gICAgICB4QXhpc0luZGV4OiB0aGlzLnhBeGlzSW5kZXgsXG4gICAgICB5QXhpc0luZGV4OiB0aGlzLnlBeGlzSW5kZXgsXG4gICAgICBwb2xhckluZGV4OiB0aGlzLnBvbGFySW5kZXgsXG4gICAgICBnZW9JbmRleDogdGhpcy5nZW9JbmRleCxcbiAgICAgIGNhbGVuZGFySW5kZXg6IHRoaXMuY2FsZW5kYXJJbmRleCxcbiAgICAgIGhvdmVyQW5pbWF0aW9uOiB0aGlzLmhvdmVyQW5pbWF0aW9uLFxuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICBzeW1ib2xTaXplOiB0aGlzLnN5bWJvbFNpemUsXG4gICAgICBzeW1ib2xSb3RhdGU6IHRoaXMuc3ltYm9sUm90YXRlLFxuICAgICAgc3ltYm9sS2VlcEFzcGVjdDogdGhpcy5zeW1ib2xLZWVwQXNwZWN0LFxuICAgICAgc3ltYm9sT2Zmc2V0OiB0aGlzLnN5bWJvbE9mZnNldCxcbiAgICAgIGxhcmdlOiB0aGlzLmxhcmdlLFxuICAgICAgbGFyZ2VUaHJlc2hvbGQ6IHRoaXMubGFyZ2VUaHJlc2hvbGQsXG4gICAgICBjdXJzb3I6IHRoaXMuY3Vyc29yLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBwcm9ncmVzc2l2ZTogdGhpcy5wcm9ncmVzc2l2ZSxcbiAgICAgIHByb2dyZXNzaXZlVGhyZXNob2xkOiB0aGlzLnByb2dyZXNzaXZlVGhyZXNob2xkLFxuICAgICAgZGltZW5zaW9uczogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgZW5jb2RlOiB0aGlzLmVuY29kZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgICBhbmltYXRpb246IHRoaXMuYW5pbWF0aW9uLFxuICAgICAgYW5pbWF0aW9uVGhyZXNob2xkOiB0aGlzLmFuaW1hdGlvblRocmVzaG9sZCxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgYW5pbWF0aW9uRWFzaW5nOiB0aGlzLmFuaW1hdGlvbkVhc2luZyxcbiAgICAgIGFuaW1hdGlvbkRlbGF5OiB0aGlzLmFuaW1hdGlvbkRlbGF5LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb25VcGRhdGU6IHRoaXMuYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUsXG4gICAgICBhbmltYXRpb25FYXNpbmdVcGRhdGU6IHRoaXMuYW5pbWF0aW9uRWFzaW5nVXBkYXRlLFxuICAgICAgYW5pbWF0aW9uRGVsYXlVcGRhdGU6IHRoaXMuYW5pbWF0aW9uRGVsYXlVcGRhdGUsXG4gICAgICB0b29sdGlwOiB0aGlzLnRvb2x0aXAsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCAnZWNoYXJ0cy9saWIvY2hhcnQvc2NhdHRlcic7XG5cbmltcG9ydCB7IFRkQ2hhcnRTZXJpZXNTY2F0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zY2F0dGVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBTQ0FUVEVSX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydFNlcmllc1NjYXR0ZXJDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTQ0FUVEVSX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU0NBVFRFUl9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRTY2F0dGVyRWNoYXJ0c01vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRTZXJpZXNUb29sdGlwLFxuICBUZE1hcmtQb2ludFN5bWJvbCxcbiAgSVRkTGFiZWwsXG4gIElUZExpbmVTdHlsZSxcbiAgSVRkU2VyaWVzLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgSVRkRW1waGFzaXMsXG4gIElUZFNoYWRvdyxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbi8qKlxuICogRUNIQVJUIE9QVElPTiBET0NTXG4gKiBodHRwczovL2Vjb21mZS5naXRodWIuaW8vZWNoYXJ0cy1kb2MvcHVibGljL2VuL29wdGlvbi5odG1sI3Nlcmllcy10cmVlXG4gKlxuICovXG5cbi8qKiBcbiAqIExSIC0gZnJvbSBsZWZ0IHRvIHJpZ2h0XG4gKiBSTCAtIGZyb20gcmlnaHQgdG8gbGVmdFxuICogVEIgLSBmcm9tIHRvcCB0byBib3R0b21cbiAqIEJUIC0gZnJvbSBib3R0b20gdG8gdG9wXG4gKi9cbmV4cG9ydCB0eXBlIFRkVHJlZU9yaWVudCA9ICdMUicgfCAnUkwnfCAnVEInIHwgJ0JUJztcblxuZXhwb3J0IHR5cGUgVGRUcmVlTGF5b3V0ID0gJ29ydGhvZ29uYWwnIHwgJ3JhZGlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZUVtcGhhc2lzTGluZVN0eWxlIGV4dGVuZHMgSVRkU2hhZG93IHtcbiAgY29sb3I/OiBhbnk7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBjdXJ2ZW5lc3M/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZUVtcGhhc2lzIGV4dGVuZHMgSVRkRW1waGFzaXMge1xuICBsaW5lU3R5bGU6IElUZFRyZWVFbXBoYXNpc0xpbmVTdHlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlTGVhdmVzIHtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBlbXBoYXNpczogSVRkRW1waGFzaXM7XG59XG5cbmludGVyZmFjZSBJVGRUcmVlU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCd0cmVlJz4ge1xuICB6bGV2ZWw/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIGxlZnQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcD86IHN0cmluZyB8IG51bWJlcjtcbiAgcmlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbT86IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgbGF5b3V0PzogVGRUcmVlTGF5b3V0O1xuICBvcmllbnQ/OiBUZFRyZWVPcmllbnQ7XG4gIHN5bWJvbD86IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nOyAvLyBzdHJpbmcgYWRkZWQgZm9yIGN1c3RvbSBTVkcsIFVSTCBvciBkYXRhVVJJXG4gIHN5bWJvbFNpemU/OiBudW1iZXI7XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldD86IGFueVtdO1xuICByb2FtPzogYm9vbGVhbiB8IHN0cmluZztcbiAgZXhwYW5kQW5kQ29sbGFwc2U/OiBib29sZWFuO1xuICBpbml0aWFsVHJlZURlcHRoPzogbnVtYmVyO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGxpbmVTdHlsZT86IElUZExpbmVTdHlsZTtcbiAgbGVhdmVzPzogSVRkVHJlZUxlYXZlcztcbiAgZW1waGFzaXM/OiBJVGRUcmVlRW1waGFzaXM7XG4gIGRhdGE6IGFueVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtdHJlZV0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNUcmVlQ29tcG9uZW50KSxcbiAgfV0sXG59KVxuXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1RyZWVDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwndHJlZSc+IGltcGxlbWVudHMgSVRkVHJlZVNlcmllcyB7XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2RhdGEnKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcbiAgQElucHV0KCdsZWZ0JykgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3RvcCcpIHRvcDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3JpZ2h0JykgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdib3R0b20nKSBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd3aWR0aCcpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnbGF5b3V0JykgbGF5b3V0OiBUZFRyZWVMYXlvdXQ7XG4gIEBJbnB1dCgnb3JpZW50Jykgb3JpZW50OiBUZFRyZWVPcmllbnQ7XG4gIEBJbnB1dCgnc3ltYm9sJykgc3ltYm9sOiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZzsgLy8gc3RyaW5nIGFkZGVkIGZvciBjdXN0b20gU1ZHLCBVUkwgb3IgZGF0YVVSSVxuICBASW5wdXQoJ3N5bWJvbFNpemUnKSBzeW1ib2xTaXplOiBudW1iZXI7IC8vIHN0cmluZyBhZGRlZCBmb3IgY3VzdG9tIFNWRywgVVJMIG9yIGRhdGFVUklcbiAgQElucHV0KCdzeW1ib2xSb3RhdGUnKSBzeW1ib2xSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCdzeW1ib2xLZWVwQXNwZWN0Jykgc3ltYm9sS2VlcEFzcGVjdDogYm9vbGVhbjtcbiAgQElucHV0KCdyb2FtJykgcm9hbTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCdleHBhbmRBbmRDb2xsYXBzZScpIGV4cGFuZEFuZENvbGxhcHNlOiBib29sZWFuO1xuICBASW5wdXQoJ2luaXRpYWxUcmVlRGVwdGgnKSBpbml0aWFsVHJlZURlcHRoOiBudW1iZXI7XG4gIEBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgnbGluZVN0eWxlJykgbGluZVN0eWxlOiBJVGRMaW5lU3R5bGU7XG4gIEBJbnB1dCgnbGVhdmVzJykgbGVhdmVzOiBJVGRUcmVlTGVhdmVzO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZFRyZWVFbXBoYXNpcztcbiAgQElucHV0KCd0b29sdGlwJykgdG9vbHRpcDogSVRkU2VyaWVzVG9vbHRpcDtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd0cmVlJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgbGF5b3V0OiB0aGlzLmxheW91dCxcbiAgICAgIG9yaWVudDogdGhpcy5vcmllbnQsXG4gICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgc3ltYm9sU2l6ZTogdGhpcy5zeW1ib2xTaXplLFxuICAgICAgc3ltYm9sUm90YXRlOiB0aGlzLnN5bWJvbFJvdGF0ZSxcbiAgICAgIHN5bWJvbEtlZXBBc3BlY3Q6IHRoaXMuc3ltYm9sS2VlcEFzcGVjdCxcbiAgICAgIHJvYW06IHRoaXMucm9hbSxcbiAgICAgIGV4cGFuZEFuZENvbGxhcHNlOiB0aGlzLmV4cGFuZEFuZENvbGxhcHNlLFxuICAgICAgaW5pdGlhbFRyZWVEZXB0aDogdGhpcy5pbml0aWFsVHJlZURlcHRoLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgbGluZVN0eWxlOiB0aGlzLmxpbmVTdHlsZSxcbiAgICAgIGxlYXZlczogdGhpcy5sZWF2ZXMsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIHRvb2x0aXA6IHRoaXMudG9vbHRpcCxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jaGFydC90cmVlJztcblxuaW1wb3J0IHsgVGRDaGFydFNlcmllc1RyZWVDb21wb25lbnQgfSBmcm9tICcuL3RyZWUuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFRSRUVfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0U2VyaWVzVHJlZUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRSRUVfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUUkVFX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFRyZWVFY2hhcnRzTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkNoYW5nZXMsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgYXNzaWduRGVmaW5lZCxcbiAgVGRUb29sdGlwVHJpZ2dlcixcbiAgVGRUb29sdGlwVHJpZ2dlck9uLFxuICBUZFRvb2x0aXBQb3NpdGlvbixcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBUZFRvb2x0aXBDb250ZXh0IHtcbiAgJGltcGxpY2l0OiBhbnk7XG4gIHRpY2tldDogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVt0ZFRvb2x0aXBGb3JtYXR0ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUge1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcblxuICBfY29udGV4dDogVGRUb29sdGlwQ29udGV4dCA9IG5ldyBUZFRvb2x0aXBDb250ZXh0KCk7XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ3RyaWdnZXInKSB0cmlnZ2VyOiBUZFRvb2x0aXBUcmlnZ2VyID0gICdheGlzJztcbiAgQElucHV0KCdheGlzUG9pbnRlcicpIGF4aXNQb2ludGVyOiBhbnk7XG4gIEBJbnB1dCgnc2hvd0NvbnRlbnQnKSBzaG93Q29udGVudDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnYWx3YXlzU2hvd0NvbnRlbnQnKSBhbHdheXNTaG93Q29udGVudDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3RyaWdnZXJPbicpIHRyaWdnZXJPbjogVGRUb29sdGlwVHJpZ2dlck9uID0gJ21vdXNlbW92ZXxjbGljayc7XG4gIEBJbnB1dCgnc2hvd0RlbGF5Jykgc2hvd0RlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ2hpZGVEZWxheScpIGhpZGVEZWxheTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdlbnRlcmFibGUnKSBlbnRlcmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCdyZW5kZXJNb2RlJykgcmVuZGVyTW9kZTogJ2h0bWwnIHwgJ3JpY2hUZXh0JztcbiAgQElucHV0KCdjb25maW5lJykgY29uZmluZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3RyYW5zaXRpb25EdXJhdGlvbicpIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyID0gMC41O1xuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IFRkVG9vbHRpcFBvc2l0aW9uOyAvLyBzZXJpZXNcbiAgQElucHV0KCdmb3JtYXR0ZXInKSBmb3JtYXR0ZXI6IHN0cmluZyB8IEZ1bmN0aW9uOyAvLyBzZXJpZXNcbiAgQElucHV0KCdiYWNrZ3JvdW5kQ29sb3InKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICdyZ2JhKDUwLDUwLDUwLDAuNyknOyAvLyBzZXJpZXNcbiAgQElucHV0KCdib3JkZXJDb2xvcicpIGJvcmRlckNvbG9yOiBzdHJpbmcgPSAnIzMzMyc7IC8vIHNlcmllc1xuICBASW5wdXQoJ2JvcmRlcldpZHRoJykgYm9yZGVyV2lkdGg6IG51bWJlciA9IDA7IC8vIHNlcmllc1xuICBASW5wdXQoJ3BhZGRpbmcnKSBwYWRkaW5nOiBudW1iZXIgPSA1OyAvLyBzZXJpZXNcbiAgQElucHV0KCd0ZXh0U3R5bGUnKSB0ZXh0U3R5bGU6IGFueSA9IHsgLy8gc2VyaWVzXG4gICAgY29sb3I6ICcjRkZGJyxcbiAgfTtcbiAgQElucHV0KCdleHRyYUNzc1RleHQnKSBleHRyYUNzc1RleHQ6IHN0cmluZzsgLy8gc2VyaWVzXG5cbiAgQENvbnRlbnRDaGlsZChUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwge3JlYWQ6IFRlbXBsYXRlUmVmfSkgZm9ybWF0dGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXBDb250ZW50JykgZnVsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwge1xuICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgdHJpZ2dlcjogdGhpcy50cmlnZ2VyLFxuICAgICAgYXhpc1BvaW50ZXI6IHRoaXMuYXhpc1BvaW50ZXIsXG4gICAgICBzaG93Q29udGVudDogdGhpcy5zaG93Q29udGVudCxcbiAgICAgIGFsd2F5c1Nob3dDb250ZW50OiB0aGlzLmFsd2F5c1Nob3dDb250ZW50LFxuICAgICAgdHJpZ2dlck9uOiB0aGlzLnRyaWdnZXJPbixcbiAgICAgIHNob3dEZWxheTogdGhpcy5zaG93RGVsYXksXG4gICAgICBoaWRlRGVsYXk6IHRoaXMuaGlkZURlbGF5LFxuICAgICAgZW50ZXJhYmxlOiB0aGlzLmVudGVyYWJsZSxcbiAgICAgIGNvbmZpbmU6IHRoaXMuY29uZmluZSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIGZvcm1hdHRlcjogdGhpcy5mb3JtYXR0ZXIgPyB0aGlzLmZvcm1hdHRlciA6IHRoaXMuX2Zvcm1hdHRlcigpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGJvcmRlckNvbG9yOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuYm9yZGVyV2lkdGgsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICB0ZXh0U3R5bGU6IHRoaXMudGV4dFN0eWxlLFxuICAgICAgZXh0cmFDc3NUZXh0OiB0aGlzLmV4dHJhQ3NzVGV4dCxcbiAgICB9KTtcbiAgICAvLyBzZXQgdG9vbHRpcCBjb25maWd1cmF0aW9uIGluIHBhcmVudCBjaGFydCBhbmQgcmVuZGVyIG5ldyBjb25maWd1cmF0aW9uc1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnNldE9wdGlvbigndG9vbHRpcCcsIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UuY2xlYXJPcHRpb24oJ3Rvb2x0aXAnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Zvcm1hdHRlcigpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIChwYXJhbXM6IGFueSwgdGlja2V0OiBhbnksIGNhbGxiYWNrOiAodGlja2V0OiBzdHJpbmcsIGh0bWw6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xuICAgICAgdGhpcy5fY29udGV4dCA9IHtcbiAgICAgICAgJGltcGxpY2l0OiBwYXJhbXMsXG4gICAgICAgIHRpY2tldDogdGlja2V0LFxuICAgICAgfTtcbiAgICAgIC8vIHRpbWVvdXQgc2V0IHNpbmNlIHdlIG5lZWQgdG8gc2V0IHRoZSBIVE1MIGF0IHRoZSBlbmQgb2YgdGhlIGFuZ3VsYXIgbGlmZWN5Y2xlIHdoZW5cbiAgICAgIC8vIHRoZSB0b29sdGlwIGRlbGF5IGlzIG1vcmUgdGhhbiAwXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2FsbGJhY2sodGlja2V0LCAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTDtcbiAgICB9O1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFxuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGFzc2lnbkRlZmluZWQsIFRkU2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlLCBUZFRvb2x0aXBDb250ZXh0IH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllcy10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRTZXJpZXNUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuXG4gIF9jb250ZXh0OiBUZFRvb2x0aXBDb250ZXh0ID0gbmV3IFRkVG9vbHRpcENvbnRleHQoKTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55O1xuXG4gIEBJbnB1dCgnZm9ybWF0dGVyJykgZm9ybWF0dGVyOiBhbnk7XG4gIC8vIFBhcmVudCB0b29sdGlwIHRyaWdnZXIgbXVzdCBiZSBzZXQgdG8gJ2l0ZW0nIHRvIHJlbmRlciB0aGVzZSBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogc3RyaW5nIHwgc3RyaW5nW10gfCBudW1iZXJbXTtcbiAgQElucHV0KCdiYWNrZ3JvdW5kQ29sb3InKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICdyZ2JhKDUwLDUwLDUwLDAuNyknO1xuICBASW5wdXQoJ2JvcmRlckNvbG9yJykgYm9yZGVyQ29sb3I6IHN0cmluZyA9ICcjMzMzJztcbiAgQElucHV0KCdib3JkZXJXaWR0aCcpIGJvcmRlcldpZHRoOiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ3BhZGRpbmcnKSBwYWRkaW5nOiBudW1iZXIgPSA1O1xuICBASW5wdXQoJ3RleHRTdHlsZScpIHRleHRTdHlsZTogYW55ID0ge1xuICAgIGNvbG9yOiAnI0ZGRicsXG4gIH07XG4gIEBJbnB1dCgnZXh0cmFDc3NUZXh0JykgZXh0cmFDc3NUZXh0OiBzdHJpbmc7XG5cbiAgQENvbnRlbnRDaGlsZChUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwge3JlYWQ6IFRlbXBsYXRlUmVmfSkgZm9ybWF0dGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXBDb250ZW50JykgZnVsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VyaWVzQ29tcG9uZW50OiBUZFNlcmllc0NvbXBvbmVudCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwge1xuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJXaWR0aDogdGhpcy5ib3JkZXJXaWR0aCxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHRleHRTdHlsZTogdGhpcy50ZXh0U3R5bGUsXG4gICAgICBleHRyYUNzc1RleHQ6IHRoaXMuZXh0cmFDc3NUZXh0LFxuICAgICAgZm9ybWF0dGVyOiB0aGlzLmZvcm1hdHRlciA/IHRoaXMuZm9ybWF0dGVyIDogdGhpcy5fZm9ybWF0dGVyKCksXG4gICAgfSk7XG4gICAgLy8gc2V0IHNlcmllcyB0b29sdGlwIGNvbmZpZ3VyYXRpb24gaW4gcGFyZW50IGNoYXJ0IGFuZCByZW5kZXIgbmV3IGNvbmZpZ3VyYXRpb25zXG4gICAgdGhpcy5fc2VyaWVzQ29tcG9uZW50LnNldFN0YXRlT3B0aW9uKCd0b29sdGlwJywgY29uZmlnKTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIEZvcm1hdHRlciBmb3IgdG9vbHRpcFxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBfZm9ybWF0dGVyKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKHBhcmFtczogYW55LCB0aWNrZXQ6IGFueSwgY2FsbGJhY2s6ICh0aWNrZXQ6IHN0cmluZywgaHRtbDogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLl9jb250ZXh0ID0ge1xuICAgICAgICAkaW1wbGljaXQ6IHBhcmFtcyxcbiAgICAgICAgdGlja2V0OiB0aWNrZXQsXG4gICAgICB9O1xuICAgICAgLy8gdGltZW91dCBzZXQgc2luY2Ugd2UgbmVlZCB0byBzZXQgdGhlIEhUTUwgYXQgdGhlIGVuZCBvZiB0aGUgYW5ndWxhciBsaWZlY3ljbGUgd2hlblxuICAgICAgLy8gdGhlIHRvb2x0aXAgZGVsYXkgaXMgbW9yZSB0aGFuIDBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayh0aWNrZXQsICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUwpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fc2VyaWVzQ29tcG9uZW50LnJlbW92ZVN0YXRlT3B0aW9uKCd0b29sdGlwJyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCAnZWNoYXJ0cy9saWIvY29tcG9uZW50L3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBUZENoYXJ0VG9vbHRpcENvbXBvbmVudCwgVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRkU2VyaWVzVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vc2VyaWVzLXRvb2x0aXAuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFRPT0xUSVBfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0VG9vbHRpcENvbXBvbmVudCxcbiAgVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUsXG4gIFRkU2VyaWVzVG9vbHRpcENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRPT0xUSVBfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUT09MVElQX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFRvb2x0aXBFY2hhcnRzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIlRkQ2hhcnRPcHRpb25zU2VydmljZSIsImFzc2lnbkRlZmluZWQiLCJlY2hhcnRzLmluaXQiLCJlY2hhcnRzLmNvbm5lY3QiLCJUZFNlcmllc0NvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE1BVWFBLHVCQUFxQjtJQURsQztRQUdVLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsb0JBQWUsR0FBaUIsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBK0NqRjs7Ozs7O0lBN0NDLFNBQVMsQ0FBQyxNQUFjLEVBQUUsS0FBVTs7WUFDOUIsT0FBTyxHQUFRLEVBQUU7UUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzFDOzs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBYyxFQUFFLEtBQVU7O1lBQ25DLFNBQVMsR0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUM3QyxJQUFJLFNBQVMsRUFBRTs7Z0JBQ1QsS0FBSyxHQUFXLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1lBQzVDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0Q7YUFBTTtZQUNMLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7S0FDbkM7Ozs7OztJQUVELGlCQUFpQixDQUFDLE1BQWMsRUFBRSxLQUFVOztZQUN0QyxTQUFTLEdBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDN0MsSUFBSSxTQUFTLEVBQUU7O2dCQUNULEtBQUssR0FBVyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUM1QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRzs7Z0JBRWYsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxTQUFTLEdBQUcsRUFBRSxDQUFDO2FBQ2hCO1NBQ0Y7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztLQUNuQzs7Ozs7SUFFRCxTQUFTLENBQUMsTUFBYztRQUN0QixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDOUI7Ozs7O0lBRUQsV0FBVyxDQUFDLE1BQWM7O1FBRXhCLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQzlCOzs7O0lBRUQsTUFBTTtRQUNKLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUM1Qzs7O1lBakRGLFVBQVU7Ozs7OztBQXFEWCxTQUFnQixzQkFBc0IsQ0FDcEMsTUFBNkI7SUFDN0IsT0FBTyxNQUFNLElBQUksSUFBSUEsdUJBQXFCLEVBQUUsQ0FBQztDQUM5Qzs7QUFFRCxNQUFhLGNBQWMsR0FBYTs7SUFFdEMsT0FBTyxFQUFFQSx1QkFBcUI7SUFDOUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUVBLHVCQUFxQixDQUFDLENBQUM7SUFDL0QsVUFBVSxFQUFFLHNCQUFzQjtDQUNuQzs7Ozs7Ozs7Ozs7QUN4RUQsU0FBZ0JDLGVBQWEsQ0FBQyxNQUFXLEVBQUUsR0FBRyxPQUFjO0lBQzFELEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFO1FBQzVCLEtBQUssTUFBTSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTs7a0JBQy9CLEdBQUcsR0FBUSxNQUFNLENBQUMsR0FBRyxDQUFDOztZQUU1QixJQUFJLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLElBQUksRUFBRTtnQkFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQzs7YUFFbkI7aUJBQU0sSUFBSSxHQUFHLEtBQUssSUFBSSxFQUFFO2dCQUN2QixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNwQjtTQUNGO0tBQ0Y7SUFDRCxPQUFPLE1BQU0sQ0FBQztDQUNmOzs7Ozs7Ozs7OztBQ2RELE1BNkJhLGdCQUFnQjs7Ozs7O0lBdUIzQixZQUFvQixrQkFBcUMsRUFDckMsV0FBdUIsRUFDdkIsZUFBc0M7UUFGdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUF2QmxELFVBQUssR0FBbUIsRUFBRSxDQUFDO1FBQzNCLGtCQUFhLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7UUFDdkQsbUJBQWMsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQVF4RCxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFFVixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBSWpCLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNoRCxhQUFRLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDbkQsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztLQUsvRTs7OztJQWxCRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7SUFrQkQsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLEdBQUdDLElBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUNiLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLE1BQVc7WUFDdkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekIsQ0FBQyxDQUNILENBQUM7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FDYixTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFXO1lBQzFELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQzVCLENBQUMsQ0FDSCxDQUFDO1FBQ0YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBVztZQUM3RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMvQixDQUFDLENBQ0gsQ0FBQztRQUNGLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDbENDLE9BQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2IsS0FBSyxDQUNILFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM5QixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCLEVBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3BDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEIsRUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FDckMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUNsQixDQUNGLENBQUMsSUFBSSxDQUNKLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FDbEIsQ0FBQyxTQUFTLENBQUM7WUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4QyxDQUFDLENBQ0gsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNkLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBWTtZQUNuREYsZUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDdEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0tBQ0o7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFO1lBQ3RELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLG9CQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxJQUFFLHFCQUFxQixFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDckcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsb0JBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLElBQUUscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUN4RztLQUNGOzs7O0lBRUQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0tBQ0Y7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFpQjtnQkFDbkMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ25CLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7SUFFRCxNQUFNO1FBQ0osSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDQSxlQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDbEQsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxJQUFJO29CQUNWLElBQUksRUFBRSxJQUFJO29CQUNWLEtBQUssRUFBRSxJQUFJO29CQUNYLE1BQU0sRUFBRSxJQUFJO29CQUNaLEdBQUcsRUFBRSxJQUFJO29CQUNULFlBQVksRUFBRSxJQUFJO29CQUNsQixXQUFXLEVBQUUsU0FBUztpQkFDdkI7Z0JBQ0QsS0FBSyxFQUFHLENBQUMsRUFBRSxDQUFDOztnQkFDWixLQUFLLEVBQUcsQ0FBQyxFQUFFLENBQUM7YUFDYixFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4QztLQUNGOzs7WUF6SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsRUFBRTtnQkFFWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDOzthQUM1Qjs7OztZQXJCQyxpQkFBaUI7WUFEakIsVUFBVTtZQWFIRCx1QkFBcUI7OztxQkF5QjNCLEtBQUssU0FBQyxRQUFRO29CQUVkLEtBQUssU0FBQyxPQUFPO29CQUViLE1BQU0sU0FBQyxPQUFPO3VCQUNkLE1BQU0sU0FBQyxVQUFVOzBCQUNqQixNQUFNLFNBQUMsYUFBYTs7Ozs7OztBQ2xEdkI7OztBQXFCQSxNQUFzQixvQkFBb0I7Ozs7O0lBZ0R4QyxZQUFvQixXQUFtQixFQUNuQixlQUFzQztRQUR0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUNuQixvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUEvQ2xELFdBQU0sR0FBUTtZQUNwQixRQUFRLEVBQUU7Z0JBQ1IsU0FBUyxFQUFFO29CQUNULEtBQUssRUFBRSxTQUFTO2lCQUNqQjthQUNGO1lBQ0QsU0FBUyxFQUFFO2dCQUNULFNBQVMsRUFBRTtvQkFDVCxLQUFLLEVBQUUsU0FBUztpQkFDakI7YUFDRjtTQUNGLENBQUM7UUFFZSxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBR25CLFNBQUksR0FBWSxJQUFJLENBQUM7S0FnQ25DOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRU8sV0FBVzs7WUFDYixNQUFNLEdBQVFDLGVBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDM0UsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNWLENBQUM7UUFDRixJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQy9EOzs7O0lBRU8sYUFBYTtRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDcEQ7OztxQkF2RkEsS0FBSyxTQUFDLFFBQVE7aUJBRWQsS0FBSyxTQUFDLElBQUk7bUJBQ1YsS0FBSyxTQUFDLE1BQU07d0JBQ1osS0FBSyxTQUFDLFdBQVc7cUJBQ2pCLEtBQUssU0FBQyxRQUFRO21CQUVkLEtBQUssU0FBQyxNQUFNO21CQUNaLEtBQUssU0FBQyxNQUFNOzJCQUNaLEtBQUssU0FBQyxjQUFjOzRCQUNwQixLQUFLLFNBQUMsZUFBZTtzQkFDckIsS0FBSyxTQUFDLFNBQVM7eUJBQ2YsS0FBSyxTQUFDLFlBQVk7c0JBQ2xCLEtBQUssU0FBQyxTQUFTOzBCQUNmLEtBQUssU0FBQyxhQUFhO2tCQUNuQixLQUFLLFNBQUMsS0FBSztrQkFDWCxLQUFLLFNBQUMsS0FBSztvQkFDWCxLQUFLLFNBQUMsT0FBTzswQkFDYixLQUFLLFNBQUMsYUFBYTt1QkFDbkIsS0FBSyxTQUFDLFVBQVU7c0JBQ2hCLEtBQUssU0FBQyxTQUFTO3FCQUNmLEtBQUssU0FBQyxRQUFROzJCQUNkLEtBQUssU0FBQyxjQUFjO3VCQUNwQixLQUFLLFNBQUMsVUFBVTt1QkFDaEIsS0FBSyxTQUFDLFVBQVU7d0JBQ2hCLEtBQUssU0FBQyxXQUFXO3dCQUNqQixLQUFLLFNBQUMsV0FBVzt3QkFDakIsS0FBSyxTQUFDLFdBQVc7bUJBQ2pCLEtBQUssU0FBQyxNQUFNOzBCQUNaLEtBQUssU0FBQyxhQUFhO3FCQUNuQixLQUFLLFNBQUMsUUFBUTtnQkFDZCxLQUFLLFNBQUMsR0FBRzs7Ozs7OztBQ25FWixNQWVhLHFCQUFzQixTQUFRLG9CQUFvQjs7OztJQUk3RCxZQUFZLGVBQXNDO1FBQ2hELEtBQUssQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7S0FDakM7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVJRRCx1QkFBcUI7Ozt1QkFXM0IsS0FBSyxTQUFDLFVBQVU7Ozs7Ozs7QUNqQm5CLE1BZWEscUJBQXNCLFNBQVEsb0JBQW9COzs7O0lBSTdELFlBQVksZUFBc0M7UUFDaEQsS0FBSyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztLQUNqQzs7O1lBWEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBUlFBLHVCQUFxQjs7O3VCQVczQixLQUFLLFNBQUMsVUFBVTs7Ozs7OztBQ2pCbkI7QUFPQSxNQUFhLHNCQUFzQixHQUFnQjtJQUNqRCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtDQUN0QjtBQWFELE1BQWEseUJBQXlCOzs7WUFYckMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7aUJBQ3ZCO2FBQ0Y7Ozs7Ozs7QUN2QkQ7Ozs7QUFnQkEsTUFBc0JJLG1CQUFpQjs7Ozs7SUEyQnJDLFlBQVksSUFBTyxFQUFZLGNBQXFDO1FBQXJDLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQW5CcEUsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBRUYsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQWlCaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDbkI7Ozs7SUF6QkQsSUFBSSxJQUFJO1FBQ04sT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ25COzs7O0lBeUJELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN0Qjs7Ozs7O0lBRUQsY0FBYyxDQUFDLE1BQWMsRUFBRSxLQUFVO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxNQUFjOztRQUU5QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7SUFJTyxXQUFXOztZQUNiLE1BQU0sR0FBUUgsZUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM3RyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDdEQ7Ozs7SUFFTyxhQUFhOztZQUNmLE1BQU0sR0FBUSxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2xDLElBQUksQ0FBQyxjQUFjLENBQUMsaUJBQWlCLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0tBQ3pEOzs7cUJBckRBLEtBQUssU0FBQyxRQUFRO2lCQUVkLEtBQUssU0FBQyxJQUFJO21CQUNWLEtBQUssU0FBQyxNQUFNO29CQUNaLEtBQUssU0FBQyxPQUFPO3dCQUViLEtBQUssU0FBQyxXQUFXO2lDQUNqQixLQUFLLFNBQUMsb0JBQW9CO2dDQUMxQixLQUFLLFNBQUMsbUJBQW1COzhCQUN6QixLQUFLLFNBQUMsaUJBQWlCOzZCQUN2QixLQUFLLFNBQUMsZ0JBQWdCO3NDQUN0QixLQUFLLFNBQUMseUJBQXlCO29DQUMvQixLQUFLLFNBQUMsdUJBQXVCO21DQUM3QixLQUFLLFNBQUMsc0JBQXNCO3NCQUM1QixLQUFLLFNBQUMsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2xCLE1BK0RhLHlCQUEwQixTQUFRLGlCQUF3Qjs7OztJQWdDckUsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0tBQy9COzs7O0lBRUQsU0FBUztRQUNQLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0Isb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtZQUMvQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO1lBQy9DLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1QsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0MsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN6QyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLHVCQUF1QixFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDckQscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtZQUNqRCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO1lBQy9DLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO0tBQ0g7OztZQXpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLE1BQU0seUJBQXlCLENBQUM7cUJBQ3JGLENBQUM7YUFDSDs7OztZQXREQyxxQkFBcUI7OzsrQkF5RHBCLEtBQUssU0FBQyxrQkFBa0I7eUJBQ3hCLEtBQUssU0FBQyxZQUFZO3lCQUNsQixLQUFLLFNBQUMsWUFBWTs4QkFDbEIsS0FBSyxTQUFDLGlCQUFpQjtvQkFDdkIsS0FBSyxTQUFDLE9BQU87cUJBQ2IsS0FBSyxTQUFDLFFBQVE7b0JBQ2QsS0FBSyxTQUFDLE9BQU87d0JBQ2IsS0FBSyxTQUFDLFdBQVc7dUJBQ2pCLEtBQUssU0FBQyxVQUFVO3VCQUNoQixLQUFLLFNBQUMsVUFBVTswQkFDaEIsS0FBSyxTQUFDLGFBQWE7MkJBQ25CLEtBQUssU0FBQyxjQUFjO3FCQUNwQixLQUFLLFNBQUMsUUFBUTs2QkFDZCxLQUFLLFNBQUMsZ0JBQWdCO29CQUN0QixLQUFLLFNBQUMsT0FBTzs2QkFDYixLQUFLLFNBQUMsZ0JBQWdCOzBCQUN0QixLQUFLLFNBQUMsYUFBYTttQ0FDbkIsS0FBSyxTQUFDLHNCQUFzQjttQ0FDNUIsS0FBSyxTQUFDLHNCQUFzQjt5QkFDNUIsS0FBSyxTQUFDLFlBQVk7cUJBQ2xCLEtBQUssU0FBQyxRQUFROzZCQUNkLEtBQUssU0FBQyxnQkFBZ0I7MkJBQ3RCLEtBQUssU0FBQyxjQUFjO21CQUNwQixLQUFLLFNBQUMsTUFBTTt3QkFDWixLQUFLLFNBQUMsV0FBVzt1QkFDakIsS0FBSyxTQUFDLFVBQVU7dUJBQ2hCLEtBQUssU0FBQyxVQUFVO3FCQUNoQixLQUFLLFNBQUMsUUFBUTtnQkFDZCxLQUFLLFNBQUMsR0FBRzs7Ozs7OztBQzdGWjtBQU9BLE1BQWEscUJBQXFCLEdBQWdCO0lBQ2hELHlCQUF5QjtDQUMxQjtBQWFELE1BQWEsd0JBQXdCOzs7WUFYcEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixxQkFBcUI7aUJBQ3RCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7aUJBQ3RCO2FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJELE1BNkVhLDBCQUEyQixTQUFRLGlCQUF5Qjs7OztJQXdDdkUsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0tBQ2hDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0MsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN6QyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLHVCQUF1QixFQUFFLElBQUksQ0FBQyx1QkFBdUI7WUFDckQscUJBQXFCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQjtZQUNqRCxvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO1lBQy9DLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztTQUN0QixDQUFDO0tBQ0g7OztZQXpHRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLE1BQU0sMEJBQTBCLENBQUM7cUJBQ3RGLENBQUM7YUFDSDs7OztZQXBFQyxxQkFBcUI7OzsrQkF1RXBCLEtBQUssU0FBQyxrQkFBa0I7eUJBQ3hCLEtBQUssU0FBQyxZQUFZO3lCQUNsQixLQUFLLFNBQUMsWUFBWTt5QkFDbEIsS0FBSyxTQUFDLFlBQVk7cUJBQ2xCLEtBQUssU0FBQyxRQUFRO3lCQUNkLEtBQUssU0FBQyxZQUFZOzJCQUNsQixLQUFLLFNBQUMsY0FBYzsrQkFDcEIsS0FBSyxTQUFDLGtCQUFrQjsyQkFDeEIsS0FBSyxTQUFDLGNBQWM7eUJBQ3BCLEtBQUssU0FBQyxZQUFZOzRCQUNsQixLQUFLLFNBQUMsZUFBZTs2QkFDckIsS0FBSyxTQUFDLGdCQUFnQjs4QkFDdEIsS0FBSyxTQUFDLGlCQUFpQjtvQkFDdkIsS0FBSyxTQUFDLE9BQU87cUJBQ2IsS0FBSyxTQUFDLFFBQVE7MkJBQ2QsS0FBSyxTQUFDLGNBQWM7MkJBQ3BCLEtBQUssU0FBQyxjQUFjO21CQUNwQixLQUFLLFNBQUMsTUFBTTtvQkFDWixLQUFLLFNBQUMsT0FBTzt3QkFDYixLQUFLLFNBQUMsV0FBVzt3QkFDakIsS0FBSyxTQUFDLFdBQVc7d0JBQ2pCLEtBQUssU0FBQyxXQUFXO3VCQUNqQixLQUFLLFNBQUMsVUFBVTtxQkFDaEIsS0FBSyxTQUFDLFFBQVE7NkJBQ2QsS0FBSyxTQUFDLGdCQUFnQjt1QkFDdEIsS0FBSyxTQUFDLFVBQVU7eUJBQ2hCLEtBQUssU0FBQyxZQUFZO3FCQUNsQixLQUFLLFNBQUMsUUFBUTs2QkFDZCxLQUFLLFNBQUMsZ0JBQWdCOzJCQUN0QixLQUFLLFNBQUMsY0FBYzttQkFDcEIsS0FBSyxTQUFDLE1BQU07d0JBQ1osS0FBSyxTQUFDLFdBQVc7dUJBQ2pCLEtBQUssU0FBQyxVQUFVO3VCQUNoQixLQUFLLFNBQUMsVUFBVTtxQkFDaEIsS0FBSyxTQUFDLFFBQVE7Z0JBQ2QsS0FBSyxTQUFDLEdBQUc7cUJBQ1QsS0FBSyxTQUFDLFFBQVE7Ozs7Ozs7QUNuSGpCO0FBT0EsTUFBYSxzQkFBc0IsR0FBZ0I7SUFDakQsMEJBQTBCO0NBQzNCO0FBYUQsTUFBYSx5QkFBeUI7OztZQVhyQyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHNCQUFzQjtpQkFDdkI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHNCQUFzQjtpQkFDdkI7YUFDRjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQkQsTUFvRWEsNkJBQThCLFNBQVEsaUJBQTRCOzs7O0lBbUM3RSxZQUFZLGVBQXNDO1FBQ2hELEtBQUssQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTztZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0Isb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjtZQUMvQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3pDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtZQUNyRCxxQkFBcUIsRUFBRSxJQUFJLENBQUMscUJBQXFCO1lBQ2pELG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0I7WUFDL0MsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7S0FDSDs7O1lBL0ZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsTUFBTSw2QkFBNkIsQ0FBQztxQkFDekYsQ0FBQzthQUNIOzs7O1lBM0RDLHFCQUFxQjs7OytCQThEcEIsS0FBSyxTQUFDLGtCQUFrQjt5QkFDeEIsS0FBSyxTQUFDLFlBQVk7eUJBQ2xCLEtBQUssU0FBQyxZQUFZO3lCQUNsQixLQUFLLFNBQUMsWUFBWTt1QkFDbEIsS0FBSyxTQUFDLFVBQVU7NEJBQ2hCLEtBQUssU0FBQyxlQUFlOzZCQUNyQixLQUFLLFNBQUMsZ0JBQWdCOzhCQUN0QixLQUFLLFNBQUMsaUJBQWlCO3FCQUN2QixLQUFLLFNBQUMsUUFBUTt5QkFDZCxLQUFLLFNBQUMsWUFBWTsyQkFDbEIsS0FBSyxTQUFDLGNBQWM7K0JBQ3BCLEtBQUssU0FBQyxrQkFBa0I7MkJBQ3hCLEtBQUssU0FBQyxjQUFjO29CQUNwQixLQUFLLFNBQUMsT0FBTzs2QkFDYixLQUFLLFNBQUMsZ0JBQWdCO3FCQUN0QixLQUFLLFNBQUMsUUFBUTtvQkFDZCxLQUFLLFNBQUMsT0FBTzt3QkFDYixLQUFLLFNBQUMsV0FBVzt1QkFDakIsS0FBSyxTQUFDLFVBQVU7MEJBQ2hCLEtBQUssU0FBQyxhQUFhO21DQUNuQixLQUFLLFNBQUMsc0JBQXNCO3lCQUM1QixLQUFLLFNBQUMsWUFBWTtxQkFDbEIsS0FBSyxTQUFDLFFBQVE7NkJBQ2QsS0FBSyxTQUFDLGdCQUFnQjsyQkFDdEIsS0FBSyxTQUFDLGNBQWM7bUJBQ3BCLEtBQUssU0FBQyxNQUFNO3dCQUNaLEtBQUssU0FBQyxXQUFXO3VCQUNqQixLQUFLLFNBQUMsVUFBVTt1QkFDaEIsS0FBSyxTQUFDLFVBQVU7cUJBQ2hCLEtBQUssU0FBQyxRQUFRO2dCQUNkLEtBQUssU0FBQyxHQUFHO3FCQUNULEtBQUssU0FBQyxRQUFROzs7Ozs7O0FDckdqQjtBQU9BLE1BQWEseUJBQXlCLEdBQWdCO0lBQ3BELDZCQUE2QjtDQUM5QjtBQWFELE1BQWEsNEJBQTRCOzs7WUFYeEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWix5QkFBeUI7aUJBQzFCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx5QkFBeUI7aUJBQzFCO2FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJELE1Bd0ZhLDBCQUEyQixTQUFRLGlCQUF5Qjs7OztJQThCdkUsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBN0JoQixXQUFNLEdBQVEsRUFBRSxDQUFDO0tBOEJqQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN6QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLENBQUM7S0FDSDs7O1lBekVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUM7d0JBQ1YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsTUFBTSwwQkFBMEIsQ0FBQztxQkFDdEYsQ0FBQzthQUNIOzs7O1lBOUVDLHFCQUFxQjs7O3FCQWtGcEIsS0FBSyxTQUFDLFFBQVE7aUJBQ2QsS0FBSyxTQUFDLElBQUk7bUJBQ1YsS0FBSyxTQUFDLE1BQU07bUJBQ1osS0FBSyxTQUFDLE1BQU07cUJBQ1osS0FBSyxTQUFDLFFBQVE7Z0JBQ2QsS0FBSyxTQUFDLEdBQUc7bUJBQ1QsS0FBSyxTQUFDLE1BQU07a0JBQ1osS0FBSyxTQUFDLEtBQUs7b0JBQ1gsS0FBSyxTQUFDLE9BQU87cUJBQ2IsS0FBSyxTQUFDLFFBQVE7b0JBQ2QsS0FBSyxTQUFDLE9BQU87cUJBQ2IsS0FBSyxTQUFDLFFBQVE7cUJBQ2QsS0FBSyxTQUFDLFFBQVE7cUJBQ2QsS0FBSyxTQUFDLFFBQVE7cUJBQ2QsS0FBSyxTQUFDLFFBQVE7eUJBQ2QsS0FBSyxTQUFDLFlBQVk7MkJBQ2xCLEtBQUssU0FBQyxjQUFjOytCQUNwQixLQUFLLFNBQUMsa0JBQWtCO21CQUN4QixLQUFLLFNBQUMsTUFBTTtnQ0FDWixLQUFLLFNBQUMsbUJBQW1COytCQUN6QixLQUFLLFNBQUMsa0JBQWtCO3dCQUN4QixLQUFLLFNBQUMsV0FBVztvQkFDakIsS0FBSyxTQUFDLE9BQU87d0JBQ2IsS0FBSyxTQUFDLFdBQVc7cUJBQ2pCLEtBQUssU0FBQyxRQUFRO3VCQUNkLEtBQUssU0FBQyxVQUFVO3NCQUNoQixLQUFLLFNBQUMsU0FBUzs7Ozs7OztBQ3BIbEI7QUFPQSxNQUFhLHNCQUFzQixHQUFnQjtJQUNqRCwwQkFBMEI7Q0FDM0I7QUFhRCxNQUFhLHlCQUF5Qjs7O1lBWHJDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osc0JBQXNCO2lCQUN2QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1Asc0JBQXNCO2lCQUN2QjthQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCRCxNQXVCYSxnQkFBZ0I7Q0FHNUI7TUFLWSxnQ0FBZ0M7OztZQUg1QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQzthQUM1Qzs7QUFTRCxNQUFhLHVCQUF1Qjs7Ozs7O0lBa0NsQyxZQUFvQixrQkFBcUMsRUFDckMsV0FBdUIsRUFDdkIsZUFBc0M7UUFGdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFsQ2xELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFekIsYUFBUSxHQUFxQixJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFFbkMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUVuQixTQUFJLEdBQVksSUFBSSxDQUFDO1FBQ2xCLFlBQU8sR0FBc0IsTUFBTSxDQUFDO1FBRWhDLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ3RCLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUMzQyxjQUFTLEdBQXVCLGlCQUFpQixDQUFDO1FBQ2xELGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRTdCLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDZCx1QkFBa0IsR0FBVyxHQUFHLENBQUM7O1FBR3BDLG9CQUFlLEdBQVcsb0JBQW9CLENBQUM7O1FBQ25ELGdCQUFXLEdBQVcsTUFBTSxDQUFDOztRQUM3QixnQkFBVyxHQUFXLENBQUMsQ0FBQzs7UUFDNUIsWUFBTyxHQUFXLENBQUMsQ0FBQzs7UUFDbEIsY0FBUyxHQUFROztZQUNuQyxLQUFLLEVBQUUsTUFBTTtTQUNkLENBQUM7S0FTRDs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7S0FDcEI7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUN0Qjs7OztJQUVPLFdBQVc7O1lBQ2IsTUFBTSxHQUFRLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEVBQUU7WUFDM0UsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN6QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0MsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUM5RCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUNoQyxDQUFDOztRQUVGLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUNuRDs7OztJQUVPLGFBQWE7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDN0M7Ozs7SUFFTyxVQUFVO1FBQ2hCLE9BQU8sQ0FBQyxNQUFXLEVBQUUsTUFBVyxFQUFFLFFBQWdEO1lBQ2hGLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2QsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FBQzs7O1lBR0YsVUFBVSxDQUFDO2dCQUNULFFBQVEsQ0FBQyxNQUFNLEVBQUUsb0JBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLElBQUUsU0FBUyxDQUFDLENBQUM7YUFDM0UsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sb0JBQWMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLElBQUUsU0FBUyxDQUFDO1NBQ2hFLENBQUM7S0FDSDs7O1lBcEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixtS0FBdUM7Z0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBL0JDLGlCQUFpQjtZQURqQixVQUFVO1lBVVYscUJBQXFCOzs7cUJBNkJwQixLQUFLLFNBQUMsUUFBUTttQkFFZCxLQUFLLFNBQUMsTUFBTTtzQkFDWixLQUFLLFNBQUMsU0FBUzswQkFDZixLQUFLLFNBQUMsYUFBYTswQkFDbkIsS0FBSyxTQUFDLGFBQWE7Z0NBQ25CLEtBQUssU0FBQyxtQkFBbUI7d0JBQ3pCLEtBQUssU0FBQyxXQUFXO3dCQUNqQixLQUFLLFNBQUMsV0FBVzt3QkFDakIsS0FBSyxTQUFDLFdBQVc7d0JBQ2pCLEtBQUssU0FBQyxXQUFXO3lCQUNqQixLQUFLLFNBQUMsWUFBWTtzQkFDbEIsS0FBSyxTQUFDLFNBQVM7aUNBQ2YsS0FBSyxTQUFDLG9CQUFvQjt1QkFDMUIsS0FBSyxTQUFDLFVBQVU7d0JBQ2hCLEtBQUssU0FBQyxXQUFXOzhCQUNqQixLQUFLLFNBQUMsaUJBQWlCOzBCQUN2QixLQUFLLFNBQUMsYUFBYTswQkFDbkIsS0FBSyxTQUFDLGFBQWE7c0JBQ25CLEtBQUssU0FBQyxTQUFTO3dCQUNmLEtBQUssU0FBQyxXQUFXOzJCQUdqQixLQUFLLFNBQUMsY0FBYztnQ0FFcEIsWUFBWSxTQUFDLGdDQUFnQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQzsyQkFDbEUsU0FBUyxTQUFDLGdCQUFnQjs7Ozs7OztBQ3ZFN0IsTUF1QmEsd0JBQXdCOzs7Ozs7SUF1Qm5DLFlBQW9CLGtCQUFxQyxFQUNyQyxXQUF1QixFQUN2QixnQkFBbUM7UUFGbkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBdkIvQyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXpCLGFBQVEsR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBTzFCLG9CQUFlLEdBQVcsb0JBQW9CLENBQUM7UUFDbkQsZ0JBQVcsR0FBVyxNQUFNLENBQUM7UUFDN0IsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDNUIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNsQixjQUFTLEdBQVE7WUFDbkMsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDO0tBU0Q7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7Ozs7SUFFTyxXQUFXOztZQUNiLE1BQU0sR0FBUSxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1lBQzNFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUU7U0FDL0QsQ0FBQzs7UUFFRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztLQUN6RDs7Ozs7O0lBTU8sVUFBVTtRQUNoQixPQUFPLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxRQUFnRDtZQUNoRixJQUFJLENBQUMsUUFBUSxHQUFHO2dCQUNkLFNBQVMsRUFBRSxNQUFNO2dCQUNqQixNQUFNLEVBQUUsTUFBTTthQUNmLENBQUM7OztZQUdGLFVBQVUsQ0FBQztnQkFDVCxRQUFRLENBQUMsTUFBTSxFQUFFLG9CQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxJQUFFLFNBQVMsQ0FBQyxDQUFDO2FBQzNFLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2QyxPQUFPLG9CQUFjLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxJQUFFLFNBQVMsQ0FBQztTQUNoRSxDQUFDO0tBQ0g7Ozs7SUFFTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztLQUNwRDs7O1lBbEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyxtS0FBdUM7Z0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBZkMsaUJBQWlCO1lBQ2pCLFVBQVU7WUFNWSxpQkFBaUI7OztxQkFldEMsS0FBSyxTQUFDLFFBQVE7d0JBRWQsS0FBSyxTQUFDLFdBQVc7dUJBRWpCLEtBQUssU0FBQyxVQUFVOzhCQUNoQixLQUFLLFNBQUMsaUJBQWlCOzBCQUN2QixLQUFLLFNBQUMsYUFBYTswQkFDbkIsS0FBSyxTQUFDLGFBQWE7c0JBQ25CLEtBQUssU0FBQyxTQUFTO3dCQUNmLEtBQUssU0FBQyxXQUFXOzJCQUdqQixLQUFLLFNBQUMsY0FBYztnQ0FFcEIsWUFBWSxTQUFDLGdDQUFnQyxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQzsyQkFDbEUsU0FBUyxTQUFDLGdCQUFnQjs7Ozs7OztBQzVDN0I7QUFRQSxNQUFhLHlCQUF5QixHQUFnQjtJQUNwRCx1QkFBdUI7SUFDdkIsZ0NBQWdDO0lBQ2hDLHdCQUF3QjtDQUN6QjtBQWFELE1BQWEsNEJBQTRCOzs7WUFYeEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWix5QkFBeUI7aUJBQzFCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx5QkFBeUI7aUJBQzFCO2FBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==