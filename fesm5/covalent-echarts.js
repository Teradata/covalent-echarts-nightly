import { Injectable, Optional, SkipSelf, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, NgModule, forwardRef, Directive, TemplateRef, ContentChild, ViewChild } from '@angular/core';
import { BehaviorSubject, Subject, fromEvent, merge, timer } from 'rxjs';
import { __extends, __values, __assign } from 'tslib';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { init, connect, dispose } from 'echarts/lib/echarts';
import { CommonModule } from '@angular/common';
import { TdChartOptionsService, TdSeriesComponent, assignDefined } from '@covalent/echarts/base';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/tree';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdChartOptionsService$1 = /** @class */ (function () {
    function TdChartOptionsService$$1() {
        this._options = {};
        this._optionsSubject = new BehaviorSubject(this._options);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    TdChartOptionsService$$1.prototype.setOption = /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    function (option, value) {
        /** @type {?} */
        var options = {};
        options[option] = value;
        Object.assign(this._options, options);
        this._optionsSubject.next(this._options);
    };
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    TdChartOptionsService$$1.prototype.setArrayOption = /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    function (option, value) {
        /** @type {?} */
        var prevValue = this.getOption(option);
        if (prevValue) {
            /** @type {?} */
            var index = prevValue.indexOf(value);
            index > -1 ? prevValue[index] = value : prevValue.push(value);
        }
        else {
            prevValue = [value];
        }
        this.setOption(option, prevValue);
    };
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    TdChartOptionsService$$1.prototype.removeArrayOption = /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    function (option, value) {
        /** @type {?} */
        var prevValue = this.getOption(option);
        if (prevValue) {
            /** @type {?} */
            var index = prevValue.indexOf(value);
            if (index > -1) {
                /* tslint:disable-next-line */
                prevValue[index] = null;
            }
            else {
                prevValue = [];
            }
        }
        this.setOption(option, prevValue);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    TdChartOptionsService$$1.prototype.getOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return this._options[option];
    };
    /**
     * @param {?} option
     * @return {?}
     */
    TdChartOptionsService$$1.prototype.clearOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /* tslint:disable-next-line */
        this.setOption(option, null);
    };
    /**
     * @return {?}
     */
    TdChartOptionsService$$1.prototype.listen = /**
     * @return {?}
     */
    function () {
        return this._optionsSubject.asObservable();
    };
    TdChartOptionsService$$1.decorators = [
        { type: Injectable }
    ];
    return TdChartOptionsService$$1;
}());
/**
 * @param {?} parent
 * @return {?}
 */
function CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService$1();
}
/** @type {?} */
var CHART_PROVIDER = {
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
function assignDefined$1(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var e_1, _a, e_2, _b, e_3, _c;
    /** @type {?} */
    var keys = new Set();
    try {
        for (var sources_1 = __values(sources), sources_1_1 = sources_1.next(); !sources_1_1.done; sources_1_1 = sources_1.next()) {
            var source = sources_1_1.value;
            try {
                for (var _d = __values(Object.keys(source)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var key = _e.value;
                    keys.add(key);
                    /** @type {?} */
                    var val = source[key];
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
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (sources_1_1 && !sources_1_1.done && (_a = sources_1.return)) _a.call(sources_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        // delete keys that are not in any source
        for (var _f = __values(Object.keys(target)), _g = _f.next(); !_g.done; _g = _f.next()) {
            var key = _g.value;
            if (!keys.has(key)) {
                delete target[key];
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
        }
        finally { if (e_3) throw e_3.error; }
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
var TdChartComponent = /** @class */ (function () {
    function TdChartComponent(_changeDetectorRef, _elementRef, _optionsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._optionsService = _optionsService;
        this._destroy = new Subject();
        this._widthSubject = new Subject();
        this._heightSubject = new Subject();
        this._state = {};
        this._options = {};
        this.config = {};
        this.click = new EventEmitter();
        this.dblclick = new EventEmitter();
        this.contextmenu = new EventEmitter();
        this.magictypechanged = new EventEmitter();
        this.dataviewchanged = new EventEmitter();
        this.datazoom = new EventEmitter();
        this.restore = new EventEmitter();
    }
    Object.defineProperty(TdChartComponent.prototype, "instance", {
        get: /**
         * @return {?}
         */
        function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdChartComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._instance = init(this._elementRef.nativeElement);
        fromEvent(this._instance, 'click').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.click.next(params);
        });
        fromEvent(this._instance, 'dblclick').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.dblclick.next(params);
        });
        fromEvent(this._instance, 'contextmenu').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.contextmenu.next(params);
        });
        fromEvent(this._instance, 'magictypechanged').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.magictypechanged.next(params);
        });
        fromEvent(this._instance, 'dataviewchanged').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.dataviewchanged.next(params);
        });
        fromEvent(this._instance, 'datazoom').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.datazoom.next(params);
        });
        fromEvent(this._instance, 'restore').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.restore.next(params);
        });
        if (this.group) {
            this._instance.group = this.group;
            connect(this.group);
            this._changeDetectorRef.markForCheck();
        }
        merge(fromEvent(window, 'resize').pipe(debounceTime(100)), this._widthSubject.asObservable().pipe(distinctUntilChanged()), this._heightSubject.asObservable().pipe(distinctUntilChanged())).pipe(takeUntil(this._destroy), debounceTime(100)).subscribe(function () {
            if (_this._instance) {
                _this._instance.resize();
                _this._changeDetectorRef.markForCheck();
            }
        });
        this._optionsService.listen().pipe(tap(function (options) {
            assignDefined$1(_this._options, options);
        }), debounceTime(0), takeUntil(this._destroy)).subscribe(function () {
            _this.render();
        });
        timer(500, 250).pipe(takeUntil(this._destroy)).subscribe(function () {
            if (_this._elementRef && _this._elementRef.nativeElement) {
                _this._widthSubject.next(((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().width);
                _this._heightSubject.next(((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().height);
            }
        });
    };
    /**
     * @return {?}
     */
    TdChartComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this._instance) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    TdChartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._instance) {
            this._instance.clear();
            dispose(this._instance);
        }
        this._destroy.next(true);
        this._destroy.unsubscribe();
    };
    /**
     * @return {?}
     */
    TdChartComponent.prototype.checkToolboxHeight = /**
     * @return {?}
     */
    function () {
        return this.config.toolbox.height ? this.config.toolbox.height : '40';
    };
    /**
     * @return {?}
     */
    TdChartComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this._instance) {
            this._instance.setOption(assignDefined$1(this._state, {
                grid: {
                    show: true,
                    left: '20',
                    right: '20',
                    bottom: (this.config.toolbox && typeof this.config.toolbox.bottom === 'number')
                        || (this.config.toolbox && this.config.toolbox.bottom) ? this.checkToolboxHeight() : '10',
                    top: (this.config.toolbox && typeof this.config.toolbox.top === 'number')
                        || (this.config.toolbox && this.config.toolbox.top) ? this.checkToolboxHeight() : '10',
                    containLabel: true,
                    borderColor: '#FCFCFC',
                },
            }, this.config ? this.config : {}, this._options), true);
            this._changeDetectorRef.markForCheck();
        }
    };
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
    TdChartComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: TdChartOptionsService$1 }
    ]; };
    TdChartComponent.propDecorators = {
        config: [{ type: Input, args: ['config',] }],
        group: [{ type: Input, args: ['group',] }],
        click: [{ type: Output, args: ['click',] }],
        dblclick: [{ type: Output, args: ['dblclick',] }],
        contextmenu: [{ type: Output, args: ['contextmenu',] }],
        magictypechanged: [{ type: Output, args: ['magictypechanged',] }],
        dataviewchanged: [{ type: Output, args: ['dataviewchanged',] }],
        datazoom: [{ type: Output, args: ['datazoom',] }],
        restore: [{ type: Output, args: ['restore',] }]
    };
    return TdChartComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var TdChartAxisComponent = /** @class */ (function () {
    function TdChartAxisComponent(_axisOption, _optionsService) {
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
    TdChartAxisComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdChartAxisComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdChartAxisComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeOption();
    };
    /**
     * @return {?}
     */
    TdChartAxisComponent.prototype._setOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = assignDefined$1(this._state, this.config ? this.config : {}, {
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
    };
    /**
     * @return {?}
     */
    TdChartAxisComponent.prototype._removeOption = /**
     * @return {?}
     */
    function () {
        this._optionsService.clearOption(this._axisOption);
    };
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
    return TdChartAxisComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdChartXAxisComponent = /** @class */ (function (_super) {
    __extends(TdChartXAxisComponent, _super);
    function TdChartXAxisComponent(_optionsService) {
        return _super.call(this, 'xAxis', _optionsService) || this;
    }
    TdChartXAxisComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-x-axis',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TdChartXAxisComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService$1 }
    ]; };
    TdChartXAxisComponent.propDecorators = {
        position: [{ type: Input, args: ['position',] }]
    };
    return TdChartXAxisComponent;
}(TdChartAxisComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdChartYAxisComponent = /** @class */ (function (_super) {
    __extends(TdChartYAxisComponent, _super);
    function TdChartYAxisComponent(_optionsService) {
        return _super.call(this, 'yAxis', _optionsService) || this;
    }
    TdChartYAxisComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-y-axis',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TdChartYAxisComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService$1 }
    ]; };
    TdChartYAxisComponent.propDecorators = {
        position: [{ type: Input, args: ['position',] }]
    };
    return TdChartYAxisComponent;
}(TdChartAxisComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var BASE_MODULE_COMPONENTS = [
    TdChartComponent,
    TdChartXAxisComponent,
    TdChartYAxisComponent,
];
var CovalentBaseEchartsModule = /** @class */ (function () {
    function CovalentBaseEchartsModule() {
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
    return CovalentBaseEchartsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
var TdSeriesComponent$1 = /** @class */ (function () {
    function TdSeriesComponent$$1(type, optionsService) {
        this.optionsService = optionsService;
        this._state = {};
        this._options = {};
        this.config = {};
        this._type = type;
    }
    Object.defineProperty(TdSeriesComponent$$1.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdSeriesComponent$$1.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdSeriesComponent$$1.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdSeriesComponent$$1.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeOption();
    };
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    TdSeriesComponent$$1.prototype.setStateOption = /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    function (option, value) {
        this._options[option] = value;
        this._setOptions();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    TdSeriesComponent$$1.prototype.removeStateOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /* tslint:disable-next-line */
        this._options[option] = null;
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdSeriesComponent$$1.prototype._setOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = assignDefined$1(this._state, this.config ? this.config : {}, {
            id: this.id,
            type: this.type,
            name: this.name,
            color: this.color,
            data: this.data,
            animation: this.animation,
            animationThreshold: this.animationThreshold,
            animationDuration: this.animationDuration,
            animationEasing: this.animationEasing,
            animationDelay: this.animationDelay,
            animationDurationUpdate: this.animationDurationUpdate,
            animationEasingUpdate: this.animationEasingUpdate,
            animationDelayUpdate: this.animationDelayUpdate,
            tooltip: this.tooltip,
        }, this.getConfig(), this._options);
        this.optionsService.setArrayOption('series', config);
    };
    /**
     * @return {?}
     */
    TdSeriesComponent$$1.prototype._removeOption = /**
     * @return {?}
     */
    function () {
        this.optionsService.removeArrayOption('series', this._state);
    };
    TdSeriesComponent$$1.propDecorators = {
        config: [{ type: Input, args: ['config',] }],
        id: [{ type: Input, args: ['id',] }],
        name: [{ type: Input, args: ['name',] }],
        color: [{ type: Input, args: ['color',] }],
        data: [{ type: Input, args: ['data',] }],
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
    return TdSeriesComponent$$1;
}());

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
var TdChartSeriesBarComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesBarComponent, _super);
    function TdChartSeriesBarComponent(_optionsService) {
        return _super.call(this, 'bar', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesBarComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return {
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
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
        };
    };
    TdChartSeriesBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-bar]',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: TdSeriesComponent, useExisting: forwardRef(function () { return TdChartSeriesBarComponent; }),
                        }]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesBarComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
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
        markPoint: [{ type: Input, args: ['markPoint',] }],
        markLine: [{ type: Input, args: ['markLine',] }],
        markArea: [{ type: Input, args: ['markArea',] }],
        zlevel: [{ type: Input, args: ['zlevel',] }],
        z: [{ type: Input, args: ['z',] }]
    };
    return TdChartSeriesBarComponent;
}(TdSeriesComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var BAR_MODULE_COMPONENTS = [
    TdChartSeriesBarComponent,
];
var CovalentBarEchartsModule = /** @class */ (function () {
    function CovalentBarEchartsModule() {
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
    return CovalentBarEchartsModule;
}());

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
var TdChartSeriesLineComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesLineComponent, _super);
    function TdChartSeriesLineComponent(_optionsService) {
        return _super.call(this, 'line', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesLineComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return {
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
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            silent: this.silent,
        };
    };
    TdChartSeriesLineComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-line]',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: TdSeriesComponent, useExisting: forwardRef(function () { return TdChartSeriesLineComponent; }),
                        }]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesLineComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
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
        markPoint: [{ type: Input, args: ['markPoint',] }],
        markLine: [{ type: Input, args: ['markLine',] }],
        markArea: [{ type: Input, args: ['markArea',] }],
        zlevel: [{ type: Input, args: ['zlevel',] }],
        z: [{ type: Input, args: ['z',] }],
        silent: [{ type: Input, args: ['silent',] }]
    };
    return TdChartSeriesLineComponent;
}(TdSeriesComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var LINE_MODULE_COMPONENTS = [
    TdChartSeriesLineComponent,
];
var CovalentLineEchartsModule = /** @class */ (function () {
    function CovalentLineEchartsModule() {
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
    return CovalentLineEchartsModule;
}());

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
var TdChartSeriesScatterComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesScatterComponent, _super);
    function TdChartSeriesScatterComponent(_optionsService) {
        return _super.call(this, 'scatter', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesScatterComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return {
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
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            silent: this.silent,
        };
    };
    TdChartSeriesScatterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-scatter]',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: TdSeriesComponent, useExisting: forwardRef(function () { return TdChartSeriesScatterComponent; }),
                        }]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesScatterComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
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
        markPoint: [{ type: Input, args: ['markPoint',] }],
        markLine: [{ type: Input, args: ['markLine',] }],
        markArea: [{ type: Input, args: ['markArea',] }],
        zlevel: [{ type: Input, args: ['zlevel',] }],
        z: [{ type: Input, args: ['z',] }],
        silent: [{ type: Input, args: ['silent',] }]
    };
    return TdChartSeriesScatterComponent;
}(TdSeriesComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var SCATTER_MODULE_COMPONENTS = [
    TdChartSeriesScatterComponent,
];
var CovalentScatterEchartsModule = /** @class */ (function () {
    function CovalentScatterEchartsModule() {
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
    return CovalentScatterEchartsModule;
}());

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
var TdChartSeriesTreeComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesTreeComponent, _super);
    function TdChartSeriesTreeComponent(_optionsService) {
        return _super.call(this, 'tree', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesTreeComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return {
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
        };
    };
    TdChartSeriesTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-tree]',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: TdSeriesComponent, useExisting: forwardRef(function () { return TdChartSeriesTreeComponent; }),
                        }]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesTreeComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesTreeComponent.propDecorators = {
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
        emphasis: [{ type: Input, args: ['emphasis',] }]
    };
    return TdChartSeriesTreeComponent;
}(TdSeriesComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TREE_MODULE_COMPONENTS = [
    TdChartSeriesTreeComponent,
];
var CovalentTreeEchartsModule = /** @class */ (function () {
    function CovalentTreeEchartsModule() {
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
    return CovalentTreeEchartsModule;
}());

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
var TdTooltipContext = /** @class */ (function () {
    function TdTooltipContext() {
    }
    return TdTooltipContext;
}());
var TdChartTooltipFormatterDirective = /** @class */ (function () {
    function TdChartTooltipFormatterDirective() {
    }
    TdChartTooltipFormatterDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'ng-template[tdTooltipFormatter]',
                },] }
    ];
    return TdChartTooltipFormatterDirective;
}());
var TdChartTooltipComponent = /** @class */ (function () {
    function TdChartTooltipComponent(_changeDetectorRef, _elementRef, _optionsService) {
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
    TdChartTooltipComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdChartTooltipComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeOption();
    };
    /**
     * @return {?}
     */
    TdChartTooltipComponent.prototype._setOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = assignDefined(this._state, this.config ? this.config : {}, {
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
            formatter: this.formatter ? this.formatter : (this.formatterTemplate ? this._formatter() : undefined),
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth,
            padding: this.padding,
            textStyle: this.textStyle,
            extraCssText: this.extraCssText,
        });
        // set tooltip configuration in parent chart and render new configurations
        this._optionsService.setOption('tooltip', config);
    };
    /**
     * @return {?}
     */
    TdChartTooltipComponent.prototype._removeOption = /**
     * @return {?}
     */
    function () {
        this._optionsService.clearOption('tooltip');
    };
    /**
     * @return {?}
     */
    TdChartTooltipComponent.prototype._formatter = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return function (params, ticket, callback) {
            _this._context = {
                $implicit: params,
                ticket: ticket,
            };
            // timeout set since we need to set the HTML at the end of the angular lifecycle when
            // the tooltip delay is more than 0
            setTimeout(function () {
                callback(ticket, ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML);
            });
            _this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML;
        };
    };
    TdChartTooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-tooltip',
                    template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TdChartTooltipComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: TdChartOptionsService }
    ]; };
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
    return TdChartTooltipComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdSeriesTooltipComponent = /** @class */ (function () {
    function TdSeriesTooltipComponent(_changeDetectorRef, _elementRef, _seriesComponent) {
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
    TdSeriesTooltipComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdSeriesTooltipComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeOption();
    };
    /**
     * @return {?}
     */
    TdSeriesTooltipComponent.prototype._setOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = assignDefined(this._state, this.config ? this.config : {}, {
            position: this.position,
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth,
            padding: this.padding,
            textStyle: this.textStyle,
            extraCssText: this.extraCssText,
            formatter: this.formatter ? this.formatter : (this.formatterTemplate ? this._formatter() : undefined),
        });
        // set series tooltip configuration in parent chart and render new configurations
        this._seriesComponent.setStateOption('tooltip', config);
    };
    /**
     * Formatter for tooltip
     *
     */
    /**
     * Formatter for tooltip
     *
     * @return {?}
     */
    TdSeriesTooltipComponent.prototype._formatter = /**
     * Formatter for tooltip
     *
     * @return {?}
     */
    function () {
        var _this = this;
        return function (params, ticket, callback) {
            _this._context = {
                $implicit: params,
                ticket: ticket,
            };
            // timeout set since we need to set the HTML at the end of the angular lifecycle when
            // the tooltip delay is more than 0
            setTimeout(function () {
                callback(ticket, ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML);
            });
            _this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML;
        };
    };
    /**
     * @return {?}
     */
    TdSeriesTooltipComponent.prototype._removeOption = /**
     * @return {?}
     */
    function () {
        this._seriesComponent.removeStateOption('tooltip');
    };
    TdSeriesTooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series-tooltip',
                    template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TdSeriesTooltipComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: TdSeriesComponent }
    ]; };
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
    return TdSeriesTooltipComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TOOLTIP_MODULE_COMPONENTS = [
    TdChartTooltipComponent,
    TdChartTooltipFormatterDirective,
    TdSeriesTooltipComponent,
];
var CovalentTooltipEchartsModule = /** @class */ (function () {
    function CovalentTooltipEchartsModule() {
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
    return CovalentTooltipEchartsModule;
}());

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
var TdChartViewDataFormatterDirective = /** @class */ (function () {
    function TdChartViewDataFormatterDirective() {
    }
    TdChartViewDataFormatterDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'ng-template[tdViewDataFormatter]',
                },] }
    ];
    return TdChartViewDataFormatterDirective;
}());
var TdChartToolboxComponent = /** @class */ (function () {
    function TdChartToolboxComponent(_changeDetectorRef, _elementRef, _optionsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._optionsService = _optionsService;
        this._state = {};
        this.config = {};
        this.show = true;
        this.showTitle = true;
        this.transitionDuration = 0.5;
        this.left = 'auto';
        this.top = 'auto';
        this.right = 'auto';
        this.bottom = 'auto';
        this.width = 'auto';
        this.height = 'auto';
    }
    /**
     * @return {?}
     */
    TdChartToolboxComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdChartToolboxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeOption();
    };
    /**
     * @return {?}
     */
    TdChartToolboxComponent.prototype._setOptions = /**
     * @return {?}
     */
    function () {
        this._checkFormatterTemplate();
        /** @type {?} */
        var config = assignDefined(this._state, this.config ? this.config : {}, {
            show: this.show,
            name: this.trigger,
            orient: this.orient,
            itemSize: this.itemSize,
            itemGap: this.itemGap,
            showTitle: this.showTitle,
            label: this.label,
            feature: this.feature,
            iconStyle: this.iconStyle,
            zlevel: this.zlevel,
            z: this.z,
            transitionDuration: this.transitionDuration,
            left: this.left,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            width: this.width,
            height: this.height,
        });
        // set toolbox configuration in parent chart and render new configurations
        this._optionsService.setOption('toolbox', config);
    };
    /**
     * @return {?}
     */
    TdChartToolboxComponent.prototype._removeOption = /**
     * @return {?}
     */
    function () {
        this._optionsService.clearOption('toolbox');
    };
    /**
     * @return {?}
     */
    TdChartToolboxComponent.prototype._checkFormatterTemplate = /**
     * @return {?}
     */
    function () {
        if (this.formatterTemplate) {
            this.feature = __assign({}, this.feature, { dataView: __assign({}, this.feature.dataView, { optionToContent: this._optionToContentFormatter() }) });
        }
    };
    /**
     * @return {?}
     */
    TdChartToolboxComponent.prototype._optionToContentFormatter = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return function () {
            _this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML;
        };
    };
    TdChartToolboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-toolbox',
                    template: "<ng-template #toolboxContent\n            [ngTemplateOutlet]=\"formatterTemplate\">\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TdChartToolboxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: TdChartOptionsService }
    ]; };
    TdChartToolboxComponent.propDecorators = {
        config: [{ type: Input, args: ['config',] }],
        show: [{ type: Input, args: ['show',] }],
        trigger: [{ type: Input, args: ['name',] }],
        orient: [{ type: Input, args: ['orient',] }],
        itemSize: [{ type: Input, args: ['itemSize',] }],
        itemGap: [{ type: Input, args: ['itemGap',] }],
        showTitle: [{ type: Input, args: ['showTitle',] }],
        label: [{ type: Input, args: ['label',] }],
        feature: [{ type: Input, args: ['feature',] }],
        iconStyle: [{ type: Input, args: ['iconStyle',] }],
        zlevel: [{ type: Input, args: ['zlevel',] }],
        z: [{ type: Input, args: ['z',] }],
        transitionDuration: [{ type: Input, args: ['transitionDuration',] }],
        left: [{ type: Input, args: ['left',] }],
        top: [{ type: Input, args: ['top',] }],
        right: [{ type: Input, args: ['right',] }],
        bottom: [{ type: Input, args: ['bottom',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }],
        formatterTemplate: [{ type: ContentChild, args: [TdChartViewDataFormatterDirective, { read: TemplateRef },] }],
        fullTemplate: [{ type: ViewChild, args: ['toolboxContent',] }]
    };
    return TdChartToolboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TOOLBOX_MODULE_COMPONENTS = [
    TdChartToolboxComponent,
    TdChartViewDataFormatterDirective,
];
var CovalentToolboxEchartsModule = /** @class */ (function () {
    function CovalentToolboxEchartsModule() {
    }
    CovalentToolboxEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        TOOLBOX_MODULE_COMPONENTS,
                    ],
                    exports: [
                        TOOLBOX_MODULE_COMPONENTS,
                    ],
                },] }
    ];
    return CovalentToolboxEchartsModule;
}());

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

export { TdChartComponent, TdChartAxisComponent, TdChartYAxisComponent, TdChartXAxisComponent, TdChartOptionsService$1 as TdChartOptionsService, CHART_PROVIDER, BASE_MODULE_COMPONENTS, CovalentBaseEchartsModule, assignDefined$1 as assignDefined, TdSeriesComponent$1 as TdSeriesComponent, BAR_MODULE_COMPONENTS, CovalentBarEchartsModule, TdChartSeriesBarComponent, LINE_MODULE_COMPONENTS, CovalentLineEchartsModule, TdChartSeriesLineComponent, SCATTER_MODULE_COMPONENTS, CovalentScatterEchartsModule, TdChartSeriesScatterComponent, TREE_MODULE_COMPONENTS, CovalentTreeEchartsModule, TdChartSeriesTreeComponent, TOOLTIP_MODULE_COMPONENTS, CovalentTooltipEchartsModule, TdTooltipContext, TdChartTooltipFormatterDirective, TdChartTooltipComponent, TdSeriesTooltipComponent, TOOLBOX_MODULE_COMPONENTS, CovalentToolboxEchartsModule, TdChartViewDataFormatterDirective, TdChartToolboxComponent, CHART_PROVIDER_FACTORY as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9jaGFydC1vcHRpb25zLnNlcnZpY2UudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvdXRpbHMvYXNzaWduLWRlZmluZWQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvY2hhcnQuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL2F4aXMvYXhpcy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvYXhpcy94LWF4aXMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL2F4aXMveS1heGlzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9iYXNlLm1vZHVsZS50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9zZXJpZXMvc2VyaWVzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFyL2Jhci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhci9iYXIubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9saW5lL2xpbmUuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9saW5lL2xpbmUubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9zY2F0dGVyL3NjYXR0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9zY2F0dGVyL3NjYXR0ZXIubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlL3RyZWUuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlL3RyZWUubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sdGlwL3Nlcmllcy10b29sdGlwLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvdG9vbHRpcC90b29sdGlwLm1vZHVsZS50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvdG9vbGJveC90b29sYm94LmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvdG9vbGJveC90b29sYm94Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBQcm92aWRlcixcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUZENoYXJ0T3B0aW9uc1NlcnZpY2Uge1xuXG4gIHByaXZhdGUgX29wdGlvbnM6IGFueSA9IHt9O1xuICBwcml2YXRlIF9vcHRpb25zU3ViamVjdDogU3ViamVjdDxhbnk+ID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHRoaXMuX29wdGlvbnMpO1xuXG4gIHNldE9wdGlvbihvcHRpb246IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIGxldCBvcHRpb25zOiBhbnkgPSB7fTtcbiAgICBvcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHRoaXMuX29wdGlvbnNTdWJqZWN0Lm5leHQodGhpcy5fb3B0aW9ucyk7XG4gIH1cblxuICBzZXRBcnJheU9wdGlvbihvcHRpb246IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSB7XG4gICAgbGV0IHByZXZWYWx1ZTogYW55W10gPSB0aGlzLmdldE9wdGlvbihvcHRpb24pO1xuICAgIGlmIChwcmV2VmFsdWUpIHtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gcHJldlZhbHVlLmluZGV4T2YodmFsdWUpO1xuICAgICAgaW5kZXggPiAtMSA/IHByZXZWYWx1ZVtpbmRleF0gPSB2YWx1ZSA6IHByZXZWYWx1ZS5wdXNoKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJldlZhbHVlID0gW3ZhbHVlXTtcbiAgICB9XG4gICAgdGhpcy5zZXRPcHRpb24ob3B0aW9uLCBwcmV2VmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlQXJyYXlPcHRpb24ob3B0aW9uOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGxldCBwcmV2VmFsdWU6IGFueVtdID0gdGhpcy5nZXRPcHRpb24ob3B0aW9uKTtcbiAgICBpZiAocHJldlZhbHVlKSB7XG4gICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHByZXZWYWx1ZS5pbmRleE9mKHZhbHVlKTtcbiAgICAgIGlmIChpbmRleCA+IC0xICkge1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgICAgcHJldlZhbHVlW2luZGV4XSA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmV2VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRPcHRpb24ob3B0aW9uLCBwcmV2VmFsdWUpO1xuICB9XG5cbiAgZ2V0T3B0aW9uKG9wdGlvbjogc3RyaW5nKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zW29wdGlvbl07XG4gIH1cblxuICBjbGVhck9wdGlvbihvcHRpb246IHN0cmluZyk6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIHRoaXMuc2V0T3B0aW9uKG9wdGlvbiwgbnVsbCk7XG4gIH1cblxuICBsaXN0ZW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uc1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ0hBUlRfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IENIQVJUX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVGRDaGFydE9wdGlvbnNTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IENIQVJUX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkRlZmluZWQodGFyZ2V0OiBhbnksIC4uLnNvdXJjZXM6IGFueVtdKTogYW55IHtcbiAgbGV0IGtleXM6IFNldDxzdHJpbmc+ID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGZvciAoY29uc3Qgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XG4gICAgICBrZXlzLmFkZChrZXkpO1xuICAgICAgY29uc3QgdmFsOiBhbnkgPSBzb3VyY2Vba2V5XTtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICB9IGVsc2UgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8vIGRlbGV0ZSBrZXlzIHRoYXQgYXJlIG5vdCBpbiBhbnkgc291cmNlXG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRhcmdldCkpIHtcbiAgICBpZiAoIWtleXMuaGFzKGtleSkpIHtcbiAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3ViamVjdCwgZnJvbUV2ZW50LCBtZXJnZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gJ2VjaGFydHMvbGliL2VjaGFydHMnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsIENIQVJUX1BST1ZJREVSIH0gZnJvbSAnLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCB9IGZyb20gJy4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydCcsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0NIQVJUX1BST1ZJREVSXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9kZXN0cm95OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX2hlaWdodFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBwcml2YXRlIF9pbnN0YW5jZTogYW55O1xuXG4gIGdldCBpbnN0YW5jZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnZ3JvdXAnKSBncm91cDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoJ2NsaWNrJykgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2RibGNsaWNrJykgZGJsY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2NvbnRleHRtZW51JykgY29udGV4dG1lbnU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ21hZ2ljdHlwZWNoYW5nZWQnKSBtYWdpY3R5cGVjaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdkYXRhdmlld2NoYW5nZWQnKSBkYXRhdmlld2NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2RhdGF6b29tJykgZGF0YXpvb206IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ3Jlc3RvcmUnKSByZXN0b3JlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luc3RhbmNlID0gZWNoYXJ0cy5pbml0KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnY2xpY2snKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5jbGljay5uZXh0KHBhcmFtcyk7XG4gICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnZGJsY2xpY2snKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5kYmxjbGljay5uZXh0KHBhcmFtcyk7XG4gICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnY29udGV4dG1lbnUnKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5jb250ZXh0bWVudS5uZXh0KHBhcmFtcyk7XG4gICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnbWFnaWN0eXBlY2hhbmdlZCcpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICB0aGlzLm1hZ2ljdHlwZWNoYW5nZWQubmV4dChwYXJhbXMpO1xuICAgIH0pO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2RhdGF2aWV3Y2hhbmdlZCcpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICB0aGlzLmRhdGF2aWV3Y2hhbmdlZC5uZXh0KHBhcmFtcyk7XG4gICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnZGF0YXpvb20nKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5kYXRhem9vbS5uZXh0KHBhcmFtcyk7XG4gICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAncmVzdG9yZScpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICB0aGlzLnJlc3RvcmUubmV4dChwYXJhbXMpO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XG4gICAgICBlY2hhcnRzLmNvbm5lY3QodGhpcy5ncm91cCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICApLFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApLFxuICAgICAgdGhpcy5faGVpZ2h0U3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgICApLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5faW5zdGFuY2UucmVzaXplKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmxpc3RlbigpLnBpcGUoXG4gICAgICB0YXAoKG9wdGlvbnM6IGFueSkgPT4ge1xuICAgICAgICBhc3NpZ25EZWZpbmVkKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgfSksXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgICB0aW1lcig1MDAsIDI1MCkucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0Lm5leHQoKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKTtcbiAgICAgICAgdGhpcy5faGVpZ2h0U3ViamVjdC5uZXh0KCg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UuY2xlYXIoKTtcbiAgICAgIGVjaGFydHMuZGlzcG9zZSh0aGlzLl9pbnN0YW5jZSk7XG4gICAgfVxuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCh0cnVlKTtcbiAgICB0aGlzLl9kZXN0cm95LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBjaGVja1Rvb2xib3hIZWlnaHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5jb25maWcudG9vbGJveC5oZWlnaHQgPyB0aGlzLmNvbmZpZy50b29sYm94LmhlaWdodCA6ICc0MCc7XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5zZXRPcHRpb24oYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwge1xuICAgICAgICBncmlkOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBsZWZ0OiAnMjAnLFxuICAgICAgICAgIHJpZ2h0OiAnMjAnLFxuICAgICAgICAgIGJvdHRvbTogKHRoaXMuY29uZmlnLnRvb2xib3ggJiYgdHlwZW9mIHRoaXMuY29uZmlnLnRvb2xib3guYm90dG9tID09PSAnbnVtYmVyJykgXG4gICAgICAgICAgfHwgKHRoaXMuY29uZmlnLnRvb2xib3ggJiYgdGhpcy5jb25maWcudG9vbGJveC5ib3R0b20pID8gdGhpcy5jaGVja1Rvb2xib3hIZWlnaHQoKSA6ICcxMCcsXG4gICAgICAgICAgdG9wOiAodGhpcy5jb25maWcudG9vbGJveCAmJiB0eXBlb2YgdGhpcy5jb25maWcudG9vbGJveC50b3AgPT09ICdudW1iZXInKSBcbiAgICAgICAgICB8fCAodGhpcy5jb25maWcudG9vbGJveCAmJiB0aGlzLmNvbmZpZy50b29sYm94LnRvcCkgPyB0aGlzLmNoZWNrVG9vbGJveEhlaWdodCgpIDogJzEwJyxcbiAgICAgICAgICBjb250YWluTGFiZWw6IHRydWUsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjRkNGQ0ZDJyxcbiAgICAgICAgfSxcbiAgICAgIH0sIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwgdGhpcy5fb3B0aW9ucyksIHRydWUpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBcbiAgSVRkQXhpc0xpbmUsXG4gIElUZEF4aXNMYWJlbCxcbiAgSVRkQXhpc1RpY2ssXG4gIElUZFNwbGl0TGluZSxcbiAgSVRkU3BsaXRBcmVhLFxuICBJVGRBeGlzUG9pbnRlcixcbiAgVGRBeGlzVHlwZSxcbiAgVGROYW1lTG9jYXRpb24sXG4gIFRkWEF4aXNQb3NpdGlvbixcbiAgVGRZQXhpc1Bvc2l0aW9uIH0gZnJvbSAnLi9heGlzLmludGVyZmFjZSc7XG4gIFxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRkQ2hhcnRBeGlzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHtcbiAgICBheGlzTGluZToge1xuICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgIGNvbG9yOiAnI0FCQUJBQicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc3BsaXRMaW5lOiB7XG4gICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgY29sb3I6ICcjQUJBQkFCJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ2dyaWRJbmRleCcpIGdyaWRJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ29mZnNldCcpIG9mZnNldDogbnVtYmVyO1xuICBhYnN0cmFjdCBwb3NpdGlvbjogVGRYQXhpc1Bvc2l0aW9uIHwgVGRZQXhpc1Bvc2l0aW9uO1xuICBASW5wdXQoJ3R5cGUnKSB0eXBlOiBUZEF4aXNUeXBlO1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZUxvY2F0aW9uJykgbmFtZUxvY2F0aW9uOiBUZE5hbWVMb2NhdGlvbjtcbiAgQElucHV0KCduYW1lVGV4dFN0eWxlJykgbmFtZVRleHRTdHlsZTogYW55O1xuICBASW5wdXQoJ25hbWVHYXAnKSBuYW1lR2FwOiBudW1iZXI7XG4gIEBJbnB1dCgnbmFtZVJvdGF0ZScpIG5hbWVSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCdpbnZlcnNlJykgaW52ZXJzZTogYm9vbGVhbjtcbiAgQElucHV0KCdib3VuZGFyeUdhcCcpIGJvdW5kYXJ5R2FwOiBib29sZWFuIHwgc3RyaW5nW107XG4gIEBJbnB1dCgnbWluJykgbWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnbWF4JykgbWF4OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnc2NhbGUnKSBzY2FsZTogYm9vbGVhbjtcbiAgQElucHV0KCdtaW5JbnRlcnZhbCcpIG1pbkludGVydmFsOiBudW1iZXI7XG4gIEBJbnB1dCgnaW50ZXJ2YWwnKSBpbnRlcnZhbDogbnVtYmVyO1xuICBASW5wdXQoJ2xvZ0Jhc2UnKSBsb2dCYXNlOiBudW1iZXI7XG4gIEBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuICBASW5wdXQoJ3RyaWdnZXJFdmVudCcpIHRyaWdnZXJFdmVudDogYm9vbGVhbjtcbiAgQElucHV0KCdheGlzTGluZScpIGF4aXNMaW5lOiBJVGRBeGlzTGluZTtcbiAgQElucHV0KCdheGlzVGljaycpIGF4aXNUaWNrOiBJVGRBeGlzVGljaztcbiAgQElucHV0KCdheGlzTGFiZWwnKSBheGlzTGFiZWw6IElUZEF4aXNMYWJlbDtcbiAgQElucHV0KCdzcGxpdExpbmUnKSBzcGxpdExpbmU6IElUZFNwbGl0TGluZTtcbiAgQElucHV0KCdzcGxpdEFyZWEnKSBzcGxpdEFyZWE6IElUZFNwbGl0QXJlYTtcbiAgQElucHV0KCdkYXRhJykgZGF0YTogYW55O1xuICBASW5wdXQoJ2F4aXNQb2ludGVyJykgYXhpc1BvaW50ZXI6IElUZEF4aXNQb2ludGVyO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXhpc09wdGlvbjogc3RyaW5nLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LCB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHNob3c6IHRoaXMuc2hvdyxcbiAgICAgIGdyaWRJbmRleDogdGhpcy5ncmlkSW5kZXgsXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBuYW1lTG9jYXRpb246IHRoaXMubmFtZUxvY2F0aW9uLFxuICAgICAgbmFtZVRleHRTdHlsZTogdGhpcy5uYW1lVGV4dFN0eWxlLFxuICAgICAgbmFtZUdhcDogdGhpcy5uYW1lR2FwLFxuICAgICAgbmFtZVJvdGF0ZTogdGhpcy5uYW1lUm90YXRlLFxuICAgICAgaW52ZXJzZTogdGhpcy5pbnZlcnNlLFxuICAgICAgYm91bmRhcnlHYXA6IHRoaXMuYm91bmRhcnlHYXAsXG4gICAgICBtaW46IHRoaXMubWluLFxuICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgbWluSW50ZXJ2YWw6IHRoaXMubWluSW50ZXJ2YWwsXG4gICAgICBpbnRlcnZhbDogdGhpcy5pbnRlcnZhbCxcbiAgICAgIGxvZ0Jhc2U6IHRoaXMubG9nQmFzZSxcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgICB0cmlnZ2VyRXZlbnQ6IHRoaXMudHJpZ2dlckV2ZW50LFxuICAgICAgYXhpc0xpbmU6IHRoaXMuYXhpc0xpbmUsXG4gICAgICBheGlzVGljazogdGhpcy5heGlzVGljayxcbiAgICAgIGF4aXNMYWJlbDogdGhpcy5heGlzTGFiZWwsXG4gICAgICBzcGxpdExpbmU6IHRoaXMuc3BsaXRMaW5lLFxuICAgICAgc3BsaXRBcmVhOiB0aGlzLnNwbGl0QXJlYSxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIGF4aXNQb2ludGVyOiB0aGlzLmF4aXNQb2ludGVyLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICB9KTtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5zZXRBcnJheU9wdGlvbih0aGlzLl9heGlzT3B0aW9uLCBjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmNsZWFyT3B0aW9uKHRoaXMuX2F4aXNPcHRpb24pO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFRkWEF4aXNQb3NpdGlvbiAgfSBmcm9tICcuL2F4aXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRkQ2hhcnRBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXgtYXhpcycsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRYQXhpc0NvbXBvbmVudCBleHRlbmRzIFRkQ2hhcnRBeGlzQ29tcG9uZW50IHtcblxuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IFRkWEF4aXNQb3NpdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd4QXhpcycsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGRZQXhpc1Bvc2l0aW9uICB9IGZyb20gJy4vYXhpcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGRDaGFydEF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQteS1heGlzJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFlBeGlzQ29tcG9uZW50IGV4dGVuZHMgVGRDaGFydEF4aXNDb21wb25lbnQge1xuXG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogVGRZQXhpc1Bvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3lBeGlzJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVGRDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ2hhcnRYQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy94LWF4aXMuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ2hhcnRZQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy95LWF4aXMuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEJBU0VfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0Q29tcG9uZW50LFxuICBUZENoYXJ0WEF4aXNDb21wb25lbnQsXG4gIFRkQ2hhcnRZQXhpc0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJBU0VfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCQVNFX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEJhc2VFY2hhcnRzTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHsgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCB9IGZyb20gJy4uL3V0aWxzL2Fzc2lnbi1kZWZpbmVkJztcbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBJVGRTZXJpZXNUb29sdGlwIH0gZnJvbSAnLi4vc2VyaWVzL3Nlcmllcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVRkQW5pbWF0aW9uIH0gZnJvbSAnLi4vYmFzZS50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2VyaWVzPFQ+IGV4dGVuZHMgSVRkQW5pbWF0aW9uIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICB0eXBlPzogVDtcblxuICB0b29sdGlwPzogSVRkU2VyaWVzVG9vbHRpcDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRkU2VyaWVzQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgSVRkU2VyaWVzPFQ+LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95ICB7XG5cbiAgcHJpdmF0ZSBfdHlwZTogVDtcblxuICBnZXQgdHlwZSgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIF9zdGF0ZTogYW55ID0ge307XG4gIF9vcHRpb25zOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueVtdO1xuXG4gIEBJbnB1dCgnYW5pbWF0aW9uJykgYW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoJ2FuaW1hdGlvblRocmVzaG9sZCcpIGFuaW1hdGlvblRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoJ2FuaW1hdGlvbkR1cmF0aW9uJykgYW5pbWF0aW9uRHVyYXRpb246IG51bWJlciB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ2FuaW1hdGlvbkVhc2luZycpIGFuaW1hdGlvbkVhc2luZzogc3RyaW5nO1xuICBASW5wdXQoJ2FuaW1hdGlvbkRlbGF5JykgYW5pbWF0aW9uRGVsYXk6IG51bWJlciB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ2FuaW1hdGlvbkR1cmF0aW9uVXBkYXRlJykgYW5pbWF0aW9uRHVyYXRpb25VcGRhdGU6IG51bWJlciB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ2FuaW1hdGlvbkVhc2luZ1VwZGF0ZScpIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZTogc3RyaW5nO1xuICBASW5wdXQoJ2FuaW1hdGlvbkRlbGF5VXBkYXRlJykgYW5pbWF0aW9uRGVsYXlVcGRhdGU6IG51bWJlciB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ3Rvb2x0aXAnKSB0b29sdGlwOiBJVGRTZXJpZXNUb29sdGlwO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGU6IFQsIHByb3RlY3RlZCBvcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuICBcbiAgc2V0U3RhdGVPcHRpb24ob3B0aW9uOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICByZW1vdmVTdGF0ZU9wdGlvbihvcHRpb246IHN0cmluZyk6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIHRoaXMuX29wdGlvbnNbb3B0aW9uXSA9IG51bGw7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0Q29uZmlnKCk6IGFueTtcblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIGFuaW1hdGlvbjogdGhpcy5hbmltYXRpb24sXG4gICAgICBhbmltYXRpb25UaHJlc2hvbGQ6IHRoaXMuYW5pbWF0aW9uVGhyZXNob2xkLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHRoaXMuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBhbmltYXRpb25FYXNpbmc6IHRoaXMuYW5pbWF0aW9uRWFzaW5nLFxuICAgICAgYW5pbWF0aW9uRGVsYXk6IHRoaXMuYW5pbWF0aW9uRGVsYXksXG4gICAgICBhbmltYXRpb25EdXJhdGlvblVwZGF0ZTogdGhpcy5hbmltYXRpb25EdXJhdGlvblVwZGF0ZSxcbiAgICAgIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZTogdGhpcy5hbmltYXRpb25FYXNpbmdVcGRhdGUsXG4gICAgICBhbmltYXRpb25EZWxheVVwZGF0ZTogdGhpcy5hbmltYXRpb25EZWxheVVwZGF0ZSxcbiAgICAgIHRvb2x0aXA6IHRoaXMudG9vbHRpcCxcbiAgICB9ICwgdGhpcy5nZXRDb25maWcoKSwgdGhpcy5fb3B0aW9ucyk7XG4gICAgdGhpcy5vcHRpb25zU2VydmljZS5zZXRBcnJheU9wdGlvbignc2VyaWVzJywgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnNTZXJ2aWNlLnJlbW92ZUFycmF5T3B0aW9uKCdzZXJpZXMnLCB0aGlzLl9zdGF0ZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBUZENvb3JkaW5hdGVTeXN0ZW0sXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkRW1waGFzaXMsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBJVGRTZXJpZXMsXG4gIElUZExhYmVsLFxuICBUZFByb2dyZXNzaXZlQ2h1bmtNb2RlLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQmFyU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdiYXInPiB7XG4gIGxlZ2VuZEhvdmVyTGluaz86IGJvb2xlYW47XG4gIGNvb3JkaW5hdGVTeXN0ZW0/OiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIHhBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHlBeGlzSW5kZXg/OiBudW1iZXI7XG4gIExhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgc3RhY2s/OiBzdHJpbmc7XG4gIGN1cnNvcj86IHN0cmluZztcbiAgYmFyV2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG4gIGJhck1heFdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBiYXJNaW5IZWlnaHQ/OiBudW1iZXI7XG4gIGJhckdhcD86IHN0cmluZztcbiAgYmFyQ2F0ZWdvcnlHYXA/OiBzdHJpbmc7XG4gIGxhcmdlPzogYm9vbGVhbjtcbiAgbGFyZ2VUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIHByb2dyZXNzaXZlPzogbnVtYmVyO1xuICBwcm9ncmVzc2l2ZVRocmVzaG9sZD86IG51bWJlcjtcbiAgcHJvZ3Jlc3NpdmVDaHVua01vZGU/OiBUZFByb2dyZXNzaXZlQ2h1bmtNb2RlO1xuICBkaW1lbnNpb25zPzogYW55W107XG4gIGVuY29kZT86IGFueTtcbiAgc2VyaWVzTGF5b3V0Qnk/OiBUZFNlcmllc0xheW91dEJ5O1xuICBkYXRhc2V0SW5kZXg/OiBudW1iZXI7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICBabGV2ZWw/OiAwO1xuICB6PzogbnVtYmVyO1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtYmFyXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc0JhckNvbXBvbmVudCksXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzQmFyQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J2Jhcic+IGltcGxlbWVudHMgSVRkQmFyU2VyaWVzIHtcblxuICBASW5wdXQoJ2Nvb3JkaW5hdGVTeXN0ZW0nKSBjb29yZGluYXRlU3lzdGVtOiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIEBJbnB1dCgneEF4aXNJbmRleCcpIHhBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCd5QXhpc0luZGV4JykgeUF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2xlZ2VuZEhvdmVyTGluaycpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCdzdGFjaycpIHN0YWNrOiBzdHJpbmc7XG4gIEBJbnB1dCgnY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogYW55O1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuICBASW5wdXQoJ2JhcldpZHRoJykgYmFyV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCdiYXJNYXhXaWR0aCcpIGJhck1heFdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgnYmFyTWluSGVpZ2h0JykgYmFyTWluSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgnYmFyR2FwJykgYmFyR2FwOiBzdHJpbmc7XG4gIEBJbnB1dCgnYmFyQ2F0ZWdvcnlHYXAnKSBiYXJDYXRlZ29yeUdhcDogc3RyaW5nO1xuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IGJvb2xlYW47XG4gIEBJbnB1dCgnbGFyZ2VUaHJlc2hvbGQnKSBsYXJnZVRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoJ3Byb2dyZXNzaXZlJykgcHJvZ3Jlc3NpdmU6IG51bWJlcjtcbiAgQElucHV0KCdwcm9ncmVzc2l2ZVRocmVzaG9sZCcpIHByb2dyZXNzaXZlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmVDaHVua01vZGUnKSBwcm9ncmVzc2l2ZUNodW5rTW9kZTogVGRQcm9ncmVzc2l2ZUNodW5rTW9kZTtcbiAgQElucHV0KCdkaW1lbnNpb25zJykgZGltZW5zaW9uczogYW55W107XG4gIEBJbnB1dCgnZW5jb2RlJykgZW5jb2RlOiBhbnk7XG4gIEBJbnB1dCgnc2VyaWVzTGF5b3V0QnknKSBzZXJpZXNMYXlvdXRCeTogVGRTZXJpZXNMYXlvdXRCeTtcbiAgQElucHV0KCdkYXRhc2V0SW5kZXgnKSBkYXRhc2V0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbiAgQElucHV0KCdtYXJrTGluZScpIG1hcmtMaW5lOiBJVGRNYXJrTGluZTtcbiAgQElucHV0KCdtYXJrQXJlYScpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ2JhcicsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogdGhpcy5jb29yZGluYXRlU3lzdGVtLFxuICAgICAgeEF4aXNJbmRleDogdGhpcy54QXhpc0luZGV4LFxuICAgICAgeUF4aXNJbmRleDogdGhpcy55QXhpc0luZGV4LFxuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgICAgYmFyV2lkdGg6IHRoaXMuYmFyV2lkdGgsXG4gICAgICBiYXJNYXhXaWR0aDogdGhpcy5iYXJNYXhXaWR0aCxcbiAgICAgIGJhck1pbkhlaWdodDogdGhpcy5iYXJNaW5IZWlnaHQsXG4gICAgICBiYXJHYXA6IHRoaXMuYmFyR2FwLFxuICAgICAgYmFyQ2F0ZWdvcnlHYXA6IHRoaXMuYmFyQ2F0ZWdvcnlHYXAsXG4gICAgICBsYXJnZTogdGhpcy5sYXJnZSxcbiAgICAgIGxhcmdlVGhyZXNob2xkOiB0aGlzLmxhcmdlVGhyZXNob2xkLFxuICAgICAgcHJvZ3Jlc3NpdmU6IHRoaXMucHJvZ3Jlc3NpdmUsXG4gICAgICBwcm9ncmVzc2l2ZVRocmVzaG9sZDogdGhpcy5wcm9ncmVzc2l2ZVRocmVzaG9sZCxcbiAgICAgIHByb2dyZXNzaXZlQ2h1bmtNb2RlOiB0aGlzLnByb2dyZXNzaXZlQ2h1bmtNb2RlLFxuICAgICAgZGltZW5zaW9uczogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgZW5jb2RlOiB0aGlzLmVuY29kZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jaGFydC9iYXInO1xuXG5pbXBvcnQgeyBUZENoYXJ0U2VyaWVzQmFyQ29tcG9uZW50IH0gZnJvbSAnLi9iYXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEJBUl9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRTZXJpZXNCYXJDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCQVJfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCQVJfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50QmFyRWNoYXJ0c01vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgVGRDb29yZGluYXRlU3lzdGVtLFxuICBUZE1hcmtQb2ludFN5bWJvbCxcbiAgSVRkTGFiZWwsXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkTGluZVN0eWxlLFxuICBJVGRBcmVhU3R5bGUsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBJVGRFbXBoYXNpcyxcbiAgSVRkU2VyaWVzLFxuICBJVGRTaGFkb3csXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IHR5cGUgVGRTYW1wbGluZyA9ICdhdmVyYWdlJyB8ICdtYXgnIHwgJ21pbicgfCAnc3VtJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRMaW5lU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdsaW5lJz4sIElUZFNoYWRvdyB7XG4gIGNvb3JkaW5hdGVTeXN0ZW0/OiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIHhBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHlBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHBvbGFySW5kZXg/OiBudW1iZXI7XG4gIHN5bWJvbD86IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBzeW1ib2xTaXplPzogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgc3ltYm9sUm90YXRlPzogbnVtYmVyO1xuICBzeW1ib2xLZWVwQXNwZWN0PzogYm9vbGVhbjtcbiAgc3ltYm9sT2Zmc2V0PzogYW55W107XG4gIHNob3dTeW1ib2w/OiBib29sZWFuO1xuICBzaG93QWxsU3ltYm9sPzogYm9vbGVhbiB8ICdhdXRvJztcbiAgaG92ZXJBbmltYXRpb24/OiBib29sZWFuO1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBzdGFjaz86IHN0cmluZztcbiAgY3Vyc29yPzogc3RyaW5nO1xuICBjb25uZWN0TnVsbHM/OiBib29sZWFuO1xuICBjbGlwT3ZlcmZsb3c/OiBib29sZWFuO1xuICBzdGVwPzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsaW5lU3R5bGU/OiBJVGRMaW5lU3R5bGU7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBhcmVhU3R5bGU/OiBJVGRBcmVhU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIHNtb290aD86IGJvb2xlYW4gfCBudW1iZXI7XG4gIHNtb290aE1vbm90b25lPzogc3RyaW5nO1xuICBzYW1wbGluZz86IFRkU2FtcGxpbmc7XG4gIGRpbWVuc2lvbnM/OiBhbnlbXTtcbiAgZW5jb2RlPzogYW55O1xuICBzZXJpZXNMYXlvdXRCeT86IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIGRhdGFzZXRJbmRleD86IG51bWJlcjtcbiAgZGF0YT86IGFueVtdO1xuICBtYXJrUG9pbnQ/OiBJVGRNYXJrUG9pbnQ7XG4gIG1hcmtMaW5lPzogSVRkTWFya0xpbmU7XG4gIG1hcmtBcmVhPzogSVRkTWFya0FyZWE7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLWxpbmVdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzTGluZUNvbXBvbmVudCksXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzTGluZUNvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdsaW5lJz4gaW1wbGVtZW50cyBJVGRMaW5lU2VyaWVzIHtcblxuICBASW5wdXQoJ2Nvb3JkaW5hdGVTeXN0ZW0nKSBjb29yZGluYXRlU3lzdGVtOiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIEBJbnB1dCgneEF4aXNJbmRleCcpIHhBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCd5QXhpc0luZGV4JykgeUF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3BvbGFySW5kZXgnKSBwb2xhckluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnc3ltYm9sJykgc3ltYm9sOiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgQElucHV0KCdzeW1ib2xTaXplJykgc3ltYm9sU2l6ZTogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgQElucHV0KCdzeW1ib2xSb3RhdGUnKSBzeW1ib2xSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCdzeW1ib2xLZWVwQXNwZWN0Jykgc3ltYm9sS2VlcEFzcGVjdDogYm9vbGVhbjtcbiAgQElucHV0KCdzeW1ib2xPZmZzZXQnKSBzeW1ib2xPZmZzZXQ6IGFueVtdO1xuICBASW5wdXQoJ3Nob3dTeW1ib2wnKSBzaG93U3ltYm9sOiBib29sZWFuO1xuICBASW5wdXQoJ3Nob3dBbGxTeW1ib2wnKSBzaG93QWxsU3ltYm9sOiBib29sZWFuO1xuICBASW5wdXQoJ2hvdmVyQW5pbWF0aW9uJykgaG92ZXJBbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgnbGVnZW5kSG92ZXJMaW5rJykgbGVnZW5kSG92ZXJMaW5rOiBib29sZWFuO1xuICBASW5wdXQoJ3N0YWNrJykgc3RhY2s6IHN0cmluZztcbiAgQElucHV0KCdjdXJzb3InKSBjdXJzb3I6IHN0cmluZztcbiAgQElucHV0KCdjb25uZWN0TnVsbHMnKSBjb25uZWN0TnVsbHM6IGJvb2xlYW47XG4gIEBJbnB1dCgnY2xpcE92ZXJmbG93JykgY2xpcE92ZXJmbG93OiBib29sZWFuO1xuICBASW5wdXQoJ3N0ZXAnKSBzdGVwOiBzdHJpbmcgfCBib29sZWFuO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2xpbmVTdHlsZScpIGxpbmVTdHlsZTogSVRkTGluZVN0eWxlO1xuICBASW5wdXQoJ2FyZWFTdHlsZScpIGFyZWFTdHlsZTogSVRkQXJlYVN0eWxlO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuICBASW5wdXQoJ3Ntb290aCcpIHNtb290aDogYm9vbGVhbiB8IG51bWJlcjtcbiAgQElucHV0KCdzbW9vdGhNb25vdG9uZScpIHNtb290aE1vbm90b25lOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2FtcGxpbmcnKSBzYW1wbGluZzogVGRTYW1wbGluZztcbiAgQElucHV0KCdkaW1lbnNpb25zJykgZGltZW5zaW9uczogYW55W107XG4gIEBJbnB1dCgnZW5jb2RlJykgZW5jb2RlOiBhbnk7XG4gIEBJbnB1dCgnc2VyaWVzTGF5b3V0QnknKSBzZXJpZXNMYXlvdXRCeTogVGRTZXJpZXNMYXlvdXRCeTtcbiAgQElucHV0KCdkYXRhc2V0SW5kZXgnKSBkYXRhc2V0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbiAgQElucHV0KCdtYXJrTGluZScpIG1hcmtMaW5lOiBJVGRNYXJrTGluZTtcbiAgQElucHV0KCdtYXJrQXJlYScpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdsaW5lJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjb29yZGluYXRlU3lzdGVtOiB0aGlzLmNvb3JkaW5hdGVTeXN0ZW0sXG4gICAgICB4QXhpc0luZGV4OiB0aGlzLnhBeGlzSW5kZXgsXG4gICAgICB5QXhpc0luZGV4OiB0aGlzLnlBeGlzSW5kZXgsXG4gICAgICBwb2xhckluZGV4OiB0aGlzLnBvbGFySW5kZXgsXG4gICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgc3ltYm9sU2l6ZTogdGhpcy5zeW1ib2xTaXplLFxuICAgICAgc3ltYm9sUm90YXRlOiB0aGlzLnN5bWJvbFJvdGF0ZSxcbiAgICAgIHN5bWJvbEtlZXBBc3BlY3Q6IHRoaXMuc3ltYm9sS2VlcEFzcGVjdCxcbiAgICAgIHN5bWJvbE9mZnNldDogdGhpcy5zeW1ib2xPZmZzZXQsXG4gICAgICBzaG93U3ltYm9sOiB0aGlzLnNob3dTeW1ib2wsXG4gICAgICBzaG93QWxsU3ltYm9sOiB0aGlzLnNob3dBbGxTeW1ib2wsXG4gICAgICBob3ZlckFuaW1hdGlvbjogdGhpcy5ob3ZlckFuaW1hdGlvbixcbiAgICAgIGxlZ2VuZEhvdmVyTGluazogdGhpcy5sZWdlbmRIb3ZlckxpbmssXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIGN1cnNvcjogdGhpcy5jdXJzb3IsXG4gICAgICBjb25uZWN0TnVsbHM6IHRoaXMuY29ubmVjdE51bGxzLFxuICAgICAgY2xpcE92ZXJmbG93OiB0aGlzLmNsaXBPdmVyZmxvdyxcbiAgICAgIHN0ZXA6IHRoaXMuc3RlcCxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxpbmVTdHlsZTogdGhpcy5saW5lU3R5bGUsXG4gICAgICBhcmVhU3R5bGU6IHRoaXMuYXJlYVN0eWxlLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBzbW9vdGg6IHRoaXMuc21vb3RoLFxuICAgICAgc21vb3RoTW9ub3RvbmU6IHRoaXMuc21vb3RoTW9ub3RvbmUsXG4gICAgICBzYW1wbGluZzogdGhpcy5zYW1wbGluZyxcbiAgICAgIGRpbWVuc2lvbnM6IHRoaXMuZGltZW5zaW9ucyxcbiAgICAgIGVuY29kZTogdGhpcy5lbmNvZGUsXG4gICAgICBzZXJpZXNMYXlvdXRCeTogdGhpcy5zZXJpZXNMYXlvdXRCeSxcbiAgICAgIGRhdGFzZXRJbmRleDogdGhpcy5kYXRhc2V0SW5kZXgsXG4gICAgICBtYXJrUG9pbnQ6IHRoaXMubWFya1BvaW50LFxuICAgICAgbWFya0xpbmU6IHRoaXMubWFya0xpbmUsXG4gICAgICBtYXJrQXJlYTogdGhpcy5tYXJrQXJlYSxcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgIH07XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCAnZWNoYXJ0cy9saWIvY2hhcnQvbGluZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRTZXJpZXNMaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9saW5lLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBMSU5FX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydFNlcmllc0xpbmVDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMSU5FX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTElORV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRMaW5lRWNoYXJ0c01vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgVGRDb29yZGluYXRlU3lzdGVtLFxuICBUZE1hcmtQb2ludFN5bWJvbCxcbiAgSVRkTWFya1BvaW50LFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZExhYmVsLFxuICBJVGRFbXBoYXNpcyxcbiAgVGRTZXJpZXNMYXlvdXRCeSxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgSVRkU2VyaWVzLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRTY2F0dGVyU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdzY2F0dGVyJz4ge1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBwb2xhckluZGV4PzogbnVtYmVyO1xuICBnZW9JbmRleD86IG51bWJlcjtcbiAgY2FsZW5kYXJJbmRleD86IG51bWJlcjtcbiAgaG92ZXJBbmltYXRpb24/OiBib29sZWFuO1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgc3ltYm9sU2l6ZT86IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldD86IGFueVtdO1xuICBsYXJnZT86IGJvb2xlYW47XG4gIGxhcmdlVGhyZXNob2xkPzogbnVtYmVyO1xuICBjdXJzb3I/OiBzdHJpbmc7XG4gIGNvbm5lY3ROdWxscz86IGJvb2xlYW47XG4gIGNsaXBPdmVyZmxvdz86IGJvb2xlYW47XG4gIHN0ZXA/OiBib29sZWFuO1xuICBsYWJlbD86IElUZExhYmVsO1xuICBpdGVtU3R5bGU/OiBhbnk7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIHByb2dyZXNzaXZlPzogbnVtYmVyO1xuICBwcm9ncmVzc2l2ZVRocmVzaG9sZD86IG51bWJlcjtcbiAgZGltZW5zaW9ucz86IGFueVtdO1xuICBlbmNvZGU/OiBhbnk7XG4gIHNlcmllc0xheW91dEJ5PzogVGRTZXJpZXNMYXlvdXRCeTtcbiAgZGF0YXNldEluZGV4PzogbnVtYmVyO1xuICBkYXRhPzogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgemxldmVsPzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuICBcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC1zY2F0dGVyXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc1NjYXR0ZXJDb21wb25lbnQpLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1NjYXR0ZXJDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwnc2NhdHRlcic+IGltcGxlbWVudHMgSVRkU2NhdHRlclNlcmllcyB7XG5cbiAgQElucHV0KCdjb29yZGluYXRlU3lzdGVtJykgY29vcmRpbmF0ZVN5c3RlbTogVGRDb29yZGluYXRlU3lzdGVtO1xuICBASW5wdXQoJ3hBeGlzSW5kZXgnKSB4QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgneUF4aXNJbmRleCcpIHlBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdwb2xhckluZGV4JykgcG9sYXJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2dlb0luZGV4JykgZ2VvSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdjYWxlbmRhckluZGV4JykgY2FsZW5kYXJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2hvdmVyQW5pbWF0aW9uJykgaG92ZXJBbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgnbGVnZW5kSG92ZXJMaW5rJykgbGVnZW5kSG92ZXJMaW5rOiBib29sZWFuO1xuICBASW5wdXQoJ3N5bWJvbCcpIHN5bWJvbDogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIEBJbnB1dCgnc3ltYm9sU2l6ZScpIHN5bWJvbFNpemU6IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnc3ltYm9sUm90YXRlJykgc3ltYm9sUm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgnc3ltYm9sS2VlcEFzcGVjdCcpIHN5bWJvbEtlZXBBc3BlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3ltYm9sT2Zmc2V0Jykgc3ltYm9sT2Zmc2V0OiBhbnlbXTtcbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBib29sZWFuO1xuICBASW5wdXQoJ2xhcmdlVGhyZXNob2xkJykgbGFyZ2VUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdjdXJzb3InKSBjdXJzb3I6IHN0cmluZztcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbiAgQElucHV0KCdwcm9ncmVzc2l2ZScpIHByb2dyZXNzaXZlOiBudW1iZXI7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmVUaHJlc2hvbGQnKSBwcm9ncmVzc2l2ZVRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoJ2RpbWVuc2lvbnMnKSBkaW1lbnNpb25zOiBhbnlbXTtcbiAgQElucHV0KCdlbmNvZGUnKSBlbmNvZGU6IGFueTtcbiAgQElucHV0KCdzZXJpZXNMYXlvdXRCeScpIHNlcmllc0xheW91dEJ5OiBUZFNlcmllc0xheW91dEJ5O1xuICBASW5wdXQoJ2RhdGFzZXRJbmRleCcpIGRhdGFzZXRJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ21hcmtQb2ludCcpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoJ21hcmtMaW5lJykgbWFya0xpbmU6IElUZE1hcmtMaW5lO1xuICBASW5wdXQoJ21hcmtBcmVhJykgbWFya0FyZWE6IElUZE1hcmtBcmVhO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3NjYXR0ZXInLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvb3JkaW5hdGVTeXN0ZW06IHRoaXMuY29vcmRpbmF0ZVN5c3RlbSxcbiAgICAgIHhBeGlzSW5kZXg6IHRoaXMueEF4aXNJbmRleCxcbiAgICAgIHlBeGlzSW5kZXg6IHRoaXMueUF4aXNJbmRleCxcbiAgICAgIHBvbGFySW5kZXg6IHRoaXMucG9sYXJJbmRleCxcbiAgICAgIGdlb0luZGV4OiB0aGlzLmdlb0luZGV4LFxuICAgICAgY2FsZW5kYXJJbmRleDogdGhpcy5jYWxlbmRhckluZGV4LFxuICAgICAgaG92ZXJBbmltYXRpb246IHRoaXMuaG92ZXJBbmltYXRpb24sXG4gICAgICBsZWdlbmRIb3Zlckxpbms6IHRoaXMubGVnZW5kSG92ZXJMaW5rLFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgIHN5bWJvbFNpemU6IHRoaXMuc3ltYm9sU2l6ZSxcbiAgICAgIHN5bWJvbFJvdGF0ZTogdGhpcy5zeW1ib2xSb3RhdGUsXG4gICAgICBzeW1ib2xLZWVwQXNwZWN0OiB0aGlzLnN5bWJvbEtlZXBBc3BlY3QsXG4gICAgICBzeW1ib2xPZmZzZXQ6IHRoaXMuc3ltYm9sT2Zmc2V0LFxuICAgICAgbGFyZ2U6IHRoaXMubGFyZ2UsXG4gICAgICBsYXJnZVRocmVzaG9sZDogdGhpcy5sYXJnZVRocmVzaG9sZCxcbiAgICAgIGN1cnNvcjogdGhpcy5jdXJzb3IsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIHByb2dyZXNzaXZlOiB0aGlzLnByb2dyZXNzaXZlLFxuICAgICAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ6IHRoaXMucHJvZ3Jlc3NpdmVUaHJlc2hvbGQsXG4gICAgICBkaW1lbnNpb25zOiB0aGlzLmRpbWVuc2lvbnMsXG4gICAgICBlbmNvZGU6IHRoaXMuZW5jb2RlLFxuICAgICAgc2VyaWVzTGF5b3V0Qnk6IHRoaXMuc2VyaWVzTGF5b3V0QnksXG4gICAgICBkYXRhc2V0SW5kZXg6IHRoaXMuZGF0YXNldEluZGV4LFxuICAgICAgbWFya1BvaW50OiB0aGlzLm1hcmtQb2ludCxcbiAgICAgIG1hcmtMaW5lOiB0aGlzLm1hcmtMaW5lLFxuICAgICAgbWFya0FyZWE6IHRoaXMubWFya0FyZWEsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jaGFydC9zY2F0dGVyJztcblxuaW1wb3J0IHsgVGRDaGFydFNlcmllc1NjYXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL3NjYXR0ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFNDQVRURVJfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0U2VyaWVzU2NhdHRlckNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNDQVRURVJfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTQ0FUVEVSX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFNjYXR0ZXJFY2hhcnRzTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZFNlcmllc1Rvb2x0aXAsXG4gIFRkTWFya1BvaW50U3ltYm9sLFxuICBJVGRMYWJlbCxcbiAgSVRkTGluZVN0eWxlLFxuICBJVGRTZXJpZXMsXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxuICBJVGRFbXBoYXNpcyxcbiAgSVRkU2hhZG93LFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuLyoqXG4gKiBFQ0hBUlQgT1BUSU9OIERPQ1NcbiAqIGh0dHBzOi8vZWNvbWZlLmdpdGh1Yi5pby9lY2hhcnRzLWRvYy9wdWJsaWMvZW4vb3B0aW9uLmh0bWwjc2VyaWVzLXRyZWVcbiAqXG4gKi9cblxuLyoqIFxuICogTFIgLSBmcm9tIGxlZnQgdG8gcmlnaHRcbiAqIFJMIC0gZnJvbSByaWdodCB0byBsZWZ0XG4gKiBUQiAtIGZyb20gdG9wIHRvIGJvdHRvbVxuICogQlQgLSBmcm9tIGJvdHRvbSB0byB0b3BcbiAqL1xuZXhwb3J0IHR5cGUgVGRUcmVlT3JpZW50ID0gJ0xSJyB8ICdSTCd8ICdUQicgfCAnQlQnO1xuXG5leHBvcnQgdHlwZSBUZFRyZWVMYXlvdXQgPSAnb3J0aG9nb25hbCcgfCAncmFkaWFsJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlRW1waGFzaXNMaW5lU3R5bGUgZXh0ZW5kcyBJVGRTaGFkb3cge1xuICBjb2xvcj86IGFueTtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGN1cnZlbmVzcz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlRW1waGFzaXMgZXh0ZW5kcyBJVGRFbXBoYXNpcyB7XG4gIGxpbmVTdHlsZTogSVRkVHJlZUVtcGhhc2lzTGluZVN0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVMZWF2ZXMge1xuICBsYWJlbD86IElUZExhYmVsO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbn1cblxuaW50ZXJmYWNlIElUZFRyZWVTZXJpZXMgZXh0ZW5kcyBJVGRTZXJpZXM8J3RyZWUnPiB7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgbGVmdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBsYXlvdXQ/OiBUZFRyZWVMYXlvdXQ7XG4gIG9yaWVudD86IFRkVHJlZU9yaWVudDtcbiAgc3ltYm9sPzogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7IC8vIHN0cmluZyBhZGRlZCBmb3IgY3VzdG9tIFNWRywgVVJMIG9yIGRhdGFVUklcbiAgc3ltYm9sU2l6ZT86IG51bWJlcjtcbiAgc3ltYm9sUm90YXRlPzogbnVtYmVyO1xuICBzeW1ib2xLZWVwQXNwZWN0PzogYm9vbGVhbjtcbiAgc3ltYm9sT2Zmc2V0PzogYW55W107XG4gIHJvYW0/OiBib29sZWFuIHwgc3RyaW5nO1xuICBleHBhbmRBbmRDb2xsYXBzZT86IGJvb2xlYW47XG4gIGluaXRpYWxUcmVlRGVwdGg/OiBudW1iZXI7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgbGluZVN0eWxlPzogSVRkTGluZVN0eWxlO1xuICBsZWF2ZXM/OiBJVGRUcmVlTGVhdmVzO1xuICBlbXBoYXNpcz86IElUZFRyZWVFbXBoYXNpcztcbiAgZGF0YTogYW55W107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC10cmVlXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc1RyZWVDb21wb25lbnQpLFxuICB9XSxcbn0pXG5cbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzVHJlZUNvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCd0cmVlJz4gaW1wbGVtZW50cyBJVGRUcmVlU2VyaWVzIHtcblxuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgnbGVmdCcpIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdyaWdodCcpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnYm90dG9tJykgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2xheW91dCcpIGxheW91dDogVGRUcmVlTGF5b3V0O1xuICBASW5wdXQoJ29yaWVudCcpIG9yaWVudDogVGRUcmVlT3JpZW50O1xuICBASW5wdXQoJ3N5bWJvbCcpIHN5bWJvbDogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7IC8vIHN0cmluZyBhZGRlZCBmb3IgY3VzdG9tIFNWRywgVVJMIG9yIGRhdGFVUklcbiAgQElucHV0KCdzeW1ib2xTaXplJykgc3ltYm9sU2l6ZTogbnVtYmVyOyAvLyBzdHJpbmcgYWRkZWQgZm9yIGN1c3RvbSBTVkcsIFVSTCBvciBkYXRhVVJJXG4gIEBJbnB1dCgnc3ltYm9sUm90YXRlJykgc3ltYm9sUm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgnc3ltYm9sS2VlcEFzcGVjdCcpIHN5bWJvbEtlZXBBc3BlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgncm9hbScpIHJvYW06IGJvb2xlYW4gfCBzdHJpbmc7XG4gIEBJbnB1dCgnZXhwYW5kQW5kQ29sbGFwc2UnKSBleHBhbmRBbmRDb2xsYXBzZTogYm9vbGVhbjtcbiAgQElucHV0KCdpbml0aWFsVHJlZURlcHRoJykgaW5pdGlhbFRyZWVEZXB0aDogbnVtYmVyO1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ2xpbmVTdHlsZScpIGxpbmVTdHlsZTogSVRkTGluZVN0eWxlO1xuICBASW5wdXQoJ2xlYXZlcycpIGxlYXZlczogSVRkVHJlZUxlYXZlcztcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRUcmVlRW1waGFzaXM7XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigndHJlZScsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBsYXlvdXQ6IHRoaXMubGF5b3V0LFxuICAgICAgb3JpZW50OiB0aGlzLm9yaWVudCxcbiAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICBzeW1ib2xTaXplOiB0aGlzLnN5bWJvbFNpemUsXG4gICAgICBzeW1ib2xSb3RhdGU6IHRoaXMuc3ltYm9sUm90YXRlLFxuICAgICAgc3ltYm9sS2VlcEFzcGVjdDogdGhpcy5zeW1ib2xLZWVwQXNwZWN0LFxuICAgICAgcm9hbTogdGhpcy5yb2FtLFxuICAgICAgZXhwYW5kQW5kQ29sbGFwc2U6IHRoaXMuZXhwYW5kQW5kQ29sbGFwc2UsXG4gICAgICBpbml0aWFsVHJlZURlcHRoOiB0aGlzLmluaXRpYWxUcmVlRGVwdGgsXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBsaW5lU3R5bGU6IHRoaXMubGluZVN0eWxlLFxuICAgICAgbGVhdmVzOiB0aGlzLmxlYXZlcyxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgJ2VjaGFydHMvbGliL2NoYXJ0L3RyZWUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0U2VyaWVzVHJlZUNvbXBvbmVudCB9IGZyb20gJy4vdHJlZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgVFJFRV9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRTZXJpZXNUcmVlQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVFJFRV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRSRUVfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50VHJlZUVjaGFydHNNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgQ29udGVudENoaWxkLFxuICBWaWV3Q2hpbGQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgYXNzaWduRGVmaW5lZCxcbiAgVGRUb29sdGlwVHJpZ2dlcixcbiAgVGRUb29sdGlwVHJpZ2dlck9uLFxuICBUZFRvb2x0aXBQb3NpdGlvbixcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBUZFRvb2x0aXBDb250ZXh0IHtcbiAgJGltcGxpY2l0OiBhbnk7XG4gIHRpY2tldDogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVt0ZFRvb2x0aXBGb3JtYXR0ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUge1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuXG4gIF9jb250ZXh0OiBUZFRvb2x0aXBDb250ZXh0ID0gbmV3IFRkVG9vbHRpcENvbnRleHQoKTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdzaG93Jykgc2hvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgndHJpZ2dlcicpIHRyaWdnZXI6IFRkVG9vbHRpcFRyaWdnZXIgPSAgJ2F4aXMnO1xuICBASW5wdXQoJ2F4aXNQb2ludGVyJykgYXhpc1BvaW50ZXI6IGFueTtcbiAgQElucHV0KCdzaG93Q29udGVudCcpIHNob3dDb250ZW50OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCdhbHdheXNTaG93Q29udGVudCcpIGFsd2F5c1Nob3dDb250ZW50OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgndHJpZ2dlck9uJykgdHJpZ2dlck9uOiBUZFRvb2x0aXBUcmlnZ2VyT24gPSAnbW91c2Vtb3ZlfGNsaWNrJztcbiAgQElucHV0KCdzaG93RGVsYXknKSBzaG93RGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnaGlkZURlbGF5JykgaGlkZURlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ2VudGVyYWJsZScpIGVudGVyYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3JlbmRlck1vZGUnKSByZW5kZXJNb2RlOiAnaHRtbCcgfCAncmljaFRleHQnO1xuICBASW5wdXQoJ2NvbmZpbmUnKSBjb25maW5lOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgndHJhbnNpdGlvbkR1cmF0aW9uJykgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXIgPSAwLjU7XG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogVGRUb29sdGlwUG9zaXRpb247IC8vIHNlcmllc1xuICBASW5wdXQoJ2Zvcm1hdHRlcicpIGZvcm1hdHRlcjogc3RyaW5nIHwgRnVuY3Rpb247IC8vIHNlcmllc1xuICBASW5wdXQoJ2JhY2tncm91bmRDb2xvcicpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJ3JnYmEoNTAsNTAsNTAsMC43KSc7IC8vIHNlcmllc1xuICBASW5wdXQoJ2JvcmRlckNvbG9yJykgYm9yZGVyQ29sb3I6IHN0cmluZyA9ICcjMzMzJzsgLy8gc2VyaWVzXG4gIEBJbnB1dCgnYm9yZGVyV2lkdGgnKSBib3JkZXJXaWR0aDogbnVtYmVyID0gMDsgLy8gc2VyaWVzXG4gIEBJbnB1dCgncGFkZGluZycpIHBhZGRpbmc6IG51bWJlciA9IDU7IC8vIHNlcmllc1xuICBASW5wdXQoJ3RleHRTdHlsZScpIHRleHRTdHlsZTogYW55ID0geyAvLyBzZXJpZXNcbiAgICBjb2xvcjogJyNGRkYnLFxuICB9O1xuICBASW5wdXQoJ2V4dHJhQ3NzVGV4dCcpIGV4dHJhQ3NzVGV4dDogc3RyaW5nOyAvLyBzZXJpZXNcblxuICBAQ29udGVudENoaWxkKFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlLCB7cmVhZDogVGVtcGxhdGVSZWZ9KSBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcENvbnRlbnQnKSBmdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LCB7XG4gICAgICBzaG93OiB0aGlzLnNob3csXG4gICAgICB0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG4gICAgICBheGlzUG9pbnRlcjogdGhpcy5heGlzUG9pbnRlcixcbiAgICAgIHNob3dDb250ZW50OiB0aGlzLnNob3dDb250ZW50LFxuICAgICAgYWx3YXlzU2hvd0NvbnRlbnQ6IHRoaXMuYWx3YXlzU2hvd0NvbnRlbnQsXG4gICAgICB0cmlnZ2VyT246IHRoaXMudHJpZ2dlck9uLFxuICAgICAgc2hvd0RlbGF5OiB0aGlzLnNob3dEZWxheSxcbiAgICAgIGhpZGVEZWxheTogdGhpcy5oaWRlRGVsYXksXG4gICAgICBlbnRlcmFibGU6IHRoaXMuZW50ZXJhYmxlLFxuICAgICAgY29uZmluZTogdGhpcy5jb25maW5lLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgZm9ybWF0dGVyOiB0aGlzLmZvcm1hdHRlciA/IHRoaXMuZm9ybWF0dGVyIDogKHRoaXMuZm9ybWF0dGVyVGVtcGxhdGUgPyB0aGlzLl9mb3JtYXR0ZXIoKSA6IHVuZGVmaW5lZCksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJXaWR0aDogdGhpcy5ib3JkZXJXaWR0aCxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHRleHRTdHlsZTogdGhpcy50ZXh0U3R5bGUsXG4gICAgICBleHRyYUNzc1RleHQ6IHRoaXMuZXh0cmFDc3NUZXh0LFxuICAgIH0pO1xuICAgIC8vIHNldCB0b29sdGlwIGNvbmZpZ3VyYXRpb24gaW4gcGFyZW50IGNoYXJ0IGFuZCByZW5kZXIgbmV3IGNvbmZpZ3VyYXRpb25zXG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2Uuc2V0T3B0aW9uKCd0b29sdGlwJywgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5jbGVhck9wdGlvbigndG9vbHRpcCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZm9ybWF0dGVyKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKHBhcmFtczogYW55LCB0aWNrZXQ6IGFueSwgY2FsbGJhY2s6ICh0aWNrZXQ6IHN0cmluZywgaHRtbDogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLl9jb250ZXh0ID0ge1xuICAgICAgICAkaW1wbGljaXQ6IHBhcmFtcyxcbiAgICAgICAgdGlja2V0OiB0aWNrZXQsXG4gICAgICB9O1xuICAgICAgLy8gdGltZW91dCBzZXQgc2luY2Ugd2UgbmVlZCB0byBzZXQgdGhlIEhUTUwgYXQgdGhlIGVuZCBvZiB0aGUgYW5ndWxhciBsaWZlY3ljbGUgd2hlblxuICAgICAgLy8gdGhlIHRvb2x0aXAgZGVsYXkgaXMgbW9yZSB0aGFuIDBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayh0aWNrZXQsICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUwpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MO1xuICAgIH07XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGFzc2lnbkRlZmluZWQsIFRkU2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlLCBUZFRvb2x0aXBDb250ZXh0IH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllcy10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRTZXJpZXNUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcblxuICBfY29udGV4dDogVGRUb29sdGlwQ29udGV4dCA9IG5ldyBUZFRvb2x0aXBDb250ZXh0KCk7XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueTtcblxuICBASW5wdXQoJ2Zvcm1hdHRlcicpIGZvcm1hdHRlcjogYW55O1xuICAvLyBQYXJlbnQgdG9vbHRpcCB0cmlnZ2VyIG11c3QgYmUgc2V0IHRvICdpdGVtJyB0byByZW5kZXIgdGhlc2UgcHJvcGVydGllc1xuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVtYmVyW107XG4gIEBJbnB1dCgnYmFja2dyb3VuZENvbG9yJykgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAncmdiYSg1MCw1MCw1MCwwLjcpJztcbiAgQElucHV0KCdib3JkZXJDb2xvcicpIGJvcmRlckNvbG9yOiBzdHJpbmcgPSAnIzMzMyc7XG4gIEBJbnB1dCgnYm9yZGVyV2lkdGgnKSBib3JkZXJXaWR0aDogbnVtYmVyID0gMDtcbiAgQElucHV0KCdwYWRkaW5nJykgcGFkZGluZzogbnVtYmVyID0gNTtcbiAgQElucHV0KCd0ZXh0U3R5bGUnKSB0ZXh0U3R5bGU6IGFueSA9IHtcbiAgICBjb2xvcjogJyNGRkYnLFxuICB9O1xuICBASW5wdXQoJ2V4dHJhQ3NzVGV4dCcpIGV4dHJhQ3NzVGV4dDogc3RyaW5nO1xuXG4gIEBDb250ZW50Q2hpbGQoVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUsIHtyZWFkOiBUZW1wbGF0ZVJlZn0pIGZvcm1hdHRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd0b29sdGlwQ29udGVudCcpIGZ1bGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Nlcmllc0NvbXBvbmVudDogVGRTZXJpZXNDb21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHtcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGJvcmRlckNvbG9yOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuYm9yZGVyV2lkdGgsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICB0ZXh0U3R5bGU6IHRoaXMudGV4dFN0eWxlLFxuICAgICAgZXh0cmFDc3NUZXh0OiB0aGlzLmV4dHJhQ3NzVGV4dCxcbiAgICAgIGZvcm1hdHRlcjogdGhpcy5mb3JtYXR0ZXIgPyB0aGlzLmZvcm1hdHRlciA6ICh0aGlzLmZvcm1hdHRlclRlbXBsYXRlID8gdGhpcy5fZm9ybWF0dGVyKCkgOiB1bmRlZmluZWQpLFxuICAgIH0pO1xuICAgIC8vIHNldCBzZXJpZXMgdG9vbHRpcCBjb25maWd1cmF0aW9uIGluIHBhcmVudCBjaGFydCBhbmQgcmVuZGVyIG5ldyBjb25maWd1cmF0aW9uc1xuICAgIHRoaXMuX3Nlcmllc0NvbXBvbmVudC5zZXRTdGF0ZU9wdGlvbigndG9vbHRpcCcsIGNvbmZpZyk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBGb3JtYXR0ZXIgZm9yIHRvb2x0aXBcbiAgICpcbiAgICovXG4gIHByaXZhdGUgX2Zvcm1hdHRlcigpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIChwYXJhbXM6IGFueSwgdGlja2V0OiBhbnksIGNhbGxiYWNrOiAodGlja2V0OiBzdHJpbmcsIGh0bWw6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xuICAgICAgdGhpcy5fY29udGV4dCA9IHtcbiAgICAgICAgJGltcGxpY2l0OiBwYXJhbXMsXG4gICAgICAgIHRpY2tldDogdGlja2V0LFxuICAgICAgfTtcbiAgICAgIC8vIHRpbWVvdXQgc2V0IHNpbmNlIHdlIG5lZWQgdG8gc2V0IHRoZSBIVE1MIGF0IHRoZSBlbmQgb2YgdGhlIGFuZ3VsYXIgbGlmZWN5Y2xlIHdoZW5cbiAgICAgIC8vIHRoZSB0b29sdGlwIGRlbGF5IGlzIG1vcmUgdGhhbiAwXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2FsbGJhY2sodGlja2V0LCAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTDtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX3Nlcmllc0NvbXBvbmVudC5yZW1vdmVTdGF0ZU9wdGlvbigndG9vbHRpcCcpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgJ2VjaGFydHMvbGliL2NvbXBvbmVudC90b29sdGlwJztcblxuaW1wb3J0IHsgVGRDaGFydFRvb2x0aXBDb21wb25lbnQsIFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlIH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFNlcmllc1Rvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL3Nlcmllcy10b29sdGlwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBUT09MVElQX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydFRvb2x0aXBDb21wb25lbnQsXG4gIFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlLFxuICBUZFNlcmllc1Rvb2x0aXBDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUT09MVElQX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVE9PTFRJUF9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRUb29sdGlwRWNoYXJ0c01vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25DaGFuZ2VzLFxuICBDb250ZW50Q2hpbGQsXG4gIFZpZXdDaGlsZCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBhc3NpZ25EZWZpbmVkLFxuICBJVGRMYWJlbCxcbiAgSVRkU2hhZG93LFxuICBJVGRJdGVtU3R5bGUsXG4gIFRkVGV4dFBvc2l0aW9uLFxuICBUZFRleHRBbGlnbixcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCB0eXBlIFRkVG9vbGJveE9yaWVudCA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG5leHBvcnQgdHlwZSBUZEltYWdlVHlwZSA9ICdwbmcnIHwgJ2pwZWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEFjY2VwdGVkQnJ1c2hUeXBlcyB7XG4gIHJlY3Q/OiBzdHJpbmc7XG4gIHBvbHlnb24/OiBzdHJpbmc7XG4gIGxpbmVYPzogc3RyaW5nO1xuICBsaW5lWT86IHN0cmluZztcbiAga2VlcD86IHN0cmluZztcbiAgY2xlYXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQWNjZXB0ZWRNYWdpY1R5cGVzIHtcbiAgbGluZT86IHN0cmluZztcbiAgYmFyPzogc3RyaW5nO1xuICBzdGFjaz86IHN0cmluZztcbiAgdGlsZWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVG9vbGJveEljb25FbXBoYXNpcyBleHRlbmRzIElUZEl0ZW1TdHlsZSwgSVRkU2hhZG93IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRmVhdHVyZUljb25TdHlsZSBleHRlbmRzIElUZEl0ZW1TdHlsZSwgSVRkU2hhZG93IHtcbiAgdGV4dFBvc2l0aW9uPzogVGRUZXh0UG9zaXRpb247XG4gIHRleHRBbGlnbj86IFRkVGV4dEFsaWduO1xuICBlbXBoYXNpcz86IElUZFRvb2xib3hJY29uRW1waGFzaXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkWm9vbVRpdGxlcyB7XG4gIHpvb20/OiBzdHJpbmc7XG4gIGJhY2s/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2F2ZUFzSW1hZ2Uge1xuICB0eXBlPzogVGRJbWFnZVR5cGU7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGJhY2tncm91bmRDb2xvcj86IGFueTtcbiAgZXhjbHVkZUNvbXBvbmVudHM/OiBzdHJpbmdbXTsgLy8gZGVmYXVsdHMgdG8gWyd0b29sYm94J11cbiAgc2hvdz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICBwaXhlbFJhdGlvPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFJlc3RvcmUge1xuICBzaG93PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVZpZXcge1xuICBzaG93PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgb3B0aW9uVG9Db250ZW50PzogRnVuY3Rpb247XG4gIGNvbnRlbnRUb09wdGlvbj86IEZ1bmN0aW9uO1xuICBsYW5nPzogc3RyaW5nW107IC8vIERlZmF1bHRzIHRvIENoaW5lc2UsIHRoZXJlIGFyZSAzIG5hbWVzIGluIGRhdGEgdmlldywgd2hpY2ggYXJlIFsnZGF0YSB2aWV3JywgJ3R1cm4gb2ZmJyBhbmQgJ3JlZnJlc2gnXS5cbiAgdGV4dGFyZWFDb2xvcj86IHN0cmluZztcbiAgdGV4dGFyZWFCb3JkZXJDb2xvcj86IHN0cmluZztcbiAgdGV4dENvbG9yPzogc3RyaW5nO1xuICBidXR0b25Db2xvcj86IHN0cmluZztcbiAgYnV0dG9uVGV4dENvbG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFab29tIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHRpdGxlPzogSVRkWm9vbVRpdGxlcztcbiAgaWNvbj86IElUZFpvb21UaXRsZXM7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIHhBeGlzSW5kZXg/OiBudW1iZXIgfCBudW1iZXJbXSB8IGJvb2xlYW47XG4gIHlBeGlzSW5kZXg/OiBudW1iZXIgfCBudW1iZXJbXSB8IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTWFnaWNUeXBlIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHR5cGU/OiBzdHJpbmdbXTsgLy8gb25seSBleHBlY3RzICdsaW5lJyB8ICdiYXInIHwgJ3N0YWNrJyB8ICd0aWxlZCc7XG4gIHRpdGxlPzogSVRkQWNjZXB0ZWRNYWdpY1R5cGVzO1xuICBpY29uPzogSVRkQWNjZXB0ZWRNYWdpY1R5cGVzO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICBvcHRpb24/OiB7XG4gICAgbGluZT86IG9iamVjdDtcbiAgICBiYXI/OiBvYmplY3Q7XG4gICAgc3RhY2s/OiBvYmplY3Q7XG4gICAgdGlsZWQ/OiBvYmplY3Q7XG4gIH07XG4gIHNlcmllc0luZGV4Pzoge1xuICAgIGxpbmU/OiBhbnlbXTtcbiAgICBiYXI/OiBhbnlbXTtcbiAgICBzdGFjaz86IGFueVtdO1xuICAgIHRpbGVkPzogYW55W107XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQnJ1c2gge1xuICB0eXBlPzogYW55W107XG4gIGljb24/OiBJVGRBY2NlcHRlZEJydXNoVHlwZXM7XG4gIHRpdGxlPzogSVRkQWNjZXB0ZWRCcnVzaFR5cGVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRvb2xib3hGZWF0dXJlIHtcbiAgc2F2ZUFzSW1hZ2U/OiBJVGRTYXZlQXNJbWFnZTtcbiAgcmVzdG9yZT86IElUZFJlc3RvcmU7XG4gIGRhdGFWaWV3PzogSVRkRGF0YVZpZXc7XG4gIGRhdGFab29tPzogSVRkRGF0YVpvb207XG4gIG1hZ2ljVHlwZT86IElUZE1hZ2ljVHlwZTtcbiAgYnJ1c2g/OiBJVGRCcnVzaDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbdGRWaWV3RGF0YUZvcm1hdHRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0Vmlld0RhdGFGb3JtYXR0ZXJEaXJlY3RpdmUge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtdG9vbGJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYm94LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRUb29sYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ25hbWUnKSB0cmlnZ2VyOiBzdHJpbmc7XG4gIEBJbnB1dCgnb3JpZW50Jykgb3JpZW50OiBUZFRvb2xib3hPcmllbnQ7XG4gIEBJbnB1dCgnaXRlbVNpemUnKSBpdGVtU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoJ2l0ZW1HYXAnKSBpdGVtR2FwOiBudW1iZXI7XG4gIEBJbnB1dCgnc2hvd1RpdGxlJykgc2hvd1RpdGxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCdmZWF0dXJlJykgZmVhdHVyZTogSVRkVG9vbGJveEZlYXR1cmU7XG4gIEBJbnB1dCgnaWNvblN0eWxlJykgaWNvblN0eWxlOiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgndHJhbnNpdGlvbkR1cmF0aW9uJykgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXIgPSAwLjU7XG4gIEBJbnB1dCgnbGVmdCcpIGxlZnQ6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCdyaWdodCcpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgnYm90dG9tJykgYm90dG9tOiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuXG4gIEBDb250ZW50Q2hpbGQoVGRDaGFydFZpZXdEYXRhRm9ybWF0dGVyRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGZvcm1hdHRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd0b29sYm94Q29udGVudCcpIGZ1bGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuXG4gICAgdGhpcy5fY2hlY2tGb3JtYXR0ZXJUZW1wbGF0ZSgpO1xuXG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZChcbiAgICAgIHRoaXMuX3N0YXRlLFxuICAgICAgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LFxuICAgICAge1xuICAgICAgICBzaG93OiB0aGlzLnNob3csXG4gICAgICAgIG5hbWU6IHRoaXMudHJpZ2dlcixcbiAgICAgICAgb3JpZW50OiB0aGlzLm9yaWVudCxcbiAgICAgICAgaXRlbVNpemU6IHRoaXMuaXRlbVNpemUsXG4gICAgICAgIGl0ZW1HYXA6IHRoaXMuaXRlbUdhcCxcbiAgICAgICAgc2hvd1RpdGxlOiB0aGlzLnNob3dUaXRsZSxcbiAgICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICAgIGZlYXR1cmU6IHRoaXMuZmVhdHVyZSxcbiAgICAgICAgaWNvblN0eWxlOiB0aGlzLmljb25TdHlsZSxcbiAgICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgICAgejogdGhpcy56LFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIH0sXG4gICAgKTtcbiAgICAvLyBzZXQgdG9vbGJveCBjb25maWd1cmF0aW9uIGluIHBhcmVudCBjaGFydCBhbmQgcmVuZGVyIG5ldyBjb25maWd1cmF0aW9uc1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnNldE9wdGlvbigndG9vbGJveCcsIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UuY2xlYXJPcHRpb24oJ3Rvb2xib3gnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoZWNrRm9ybWF0dGVyVGVtcGxhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybWF0dGVyVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuZmVhdHVyZSA9IHtcbiAgICAgICAgLi4udGhpcy5mZWF0dXJlLFxuICAgICAgICBkYXRhVmlldzoge1xuICAgICAgICAgIC4uLnRoaXMuZmVhdHVyZS5kYXRhVmlldyxcbiAgICAgICAgICBvcHRpb25Ub0NvbnRlbnQ6IHRoaXMuX29wdGlvblRvQ29udGVudEZvcm1hdHRlcigpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vcHRpb25Ub0NvbnRlbnRGb3JtYXR0ZXIoKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgJ2VjaGFydHMvbGliL2NvbXBvbmVudC90b29sYm94JztcblxuaW1wb3J0IHsgVGRDaGFydFRvb2xib3hDb21wb25lbnQsIFRkQ2hhcnRWaWV3RGF0YUZvcm1hdHRlckRpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbGJveC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgVE9PTEJPWF9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRUb29sYm94Q29tcG9uZW50LFxuICBUZENoYXJ0Vmlld0RhdGFGb3JtYXR0ZXJEaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUT09MQk9YX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVE9PTEJPWF9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRUb29sYm94RWNoYXJ0c01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJUZENoYXJ0T3B0aW9uc1NlcnZpY2UiLCJhc3NpZ25EZWZpbmVkIiwidHNsaWJfMS5fX3ZhbHVlcyIsImVjaGFydHMuaW5pdCIsImVjaGFydHMuY29ubmVjdCIsImVjaGFydHMuZGlzcG9zZSIsInRzbGliXzEuX19leHRlbmRzIiwiVGRTZXJpZXNDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBU0E7UUFHVSxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLG9CQUFlLEdBQWlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQStDakY7Ozs7OztJQTdDQ0EsNENBQVM7Ozs7O0lBQVQsVUFBVSxNQUFjLEVBQUUsS0FBVTs7WUFDOUIsT0FBTyxHQUFRLEVBQUU7UUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzFDOzs7Ozs7SUFFREEsaURBQWM7Ozs7O0lBQWQsVUFBZSxNQUFjLEVBQUUsS0FBVTs7WUFDbkMsU0FBUyxHQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksU0FBUyxFQUFFOztnQkFDVCxLQUFLLEdBQVcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDNUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvRDthQUFNO1lBQ0wsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7U0FD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