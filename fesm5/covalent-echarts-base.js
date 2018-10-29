import { Injectable, Optional, SkipSelf, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, NgModule } from '@angular/core';
import { BehaviorSubject, Subject, fromEvent, merge } from 'rxjs';
import { __extends, __values } from 'tslib';
import { debounceTime } from 'rxjs/operators';
import { init, connect } from 'echarts/lib/echarts';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdChartOptionsService = /** @class */ (function () {
    function TdChartOptionsService() {
        this._options = {};
        this._optionsSubject = new BehaviorSubject(this._options);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    TdChartOptionsService.prototype.setOption = /**
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
    TdChartOptionsService.prototype.setArrayOption = /**
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
    TdChartOptionsService.prototype.removeArrayOption = /**
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
    TdChartOptionsService.prototype.getOption = /**
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
    TdChartOptionsService.prototype.clearOption = /**
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
    TdChartOptionsService.prototype.listen = /**
     * @return {?}
     */
    function () {
        return this._optionsSubject.asObservable();
    };
    TdChartOptionsService.decorators = [
        { type: Injectable }
    ];
    return TdChartOptionsService;
}());
/**
 * @param {?} parent
 * @return {?}
 */
function CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService();
}
/** @type {?} */
var CHART_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdChartOptionsService,
    deps: [[new Optional(), new SkipSelf(), TdChartOptionsService]],
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
function assignDefined(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    var e_1, _a, e_2, _b;
    try {
        for (var sources_1 = __values(sources), sources_1_1 = sources_1.next(); !sources_1_1.done; sources_1_1 = sources_1.next()) {
            var source = sources_1_1.value;
            try {
                for (var _c = __values(Object.keys(source)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var key = _d.value;
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
                    if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
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
        this._subs.push(fromEvent(this._instance, 'click').subscribe(function (params) {
            _this.click.next(params);
        }));
        this._subs.push(fromEvent(this._instance, 'dblclick').subscribe(function (params) {
            _this.dblclick.next(params);
        }));
        this._subs.push(fromEvent(this._instance, 'contextmenu').subscribe(function (params) {
            _this.contextmenu.next(params);
        }));
        if (this.group) {
            this._instance.group = this.group;
            connect(this.group);
            this._changeDetectorRef.markForCheck();
        }
        this._subs.push(merge(fromEvent(window, 'resize').pipe(debounceTime(100)), this._widthSubject.asObservable().pipe(debounceTime(100)), this._heightSubject.asObservable().pipe(debounceTime(100))).pipe(debounceTime(100)).subscribe(function () {
            _this._instance.resize();
            _this._changeDetectorRef.markForCheck();
        }));
        this.render();
        this._optionsService.listen().subscribe(function (options) {
            assignDefined(_this._options, options);
            _this.render();
        });
    };
    /**
     * @return {?}
     */
    TdChartComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().width);
            this._heightSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height);
        }
    };
    /**
     * @return {?}
     */
    TdChartComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this._instance) {
            this._instance.clear();
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
        if (this._subs) {
            this._subs.forEach(function (sub) {
                sub.unsubscribe();
            });
        }
    };
    /**
     * @return {?}
     */
    TdChartComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this._instance) {
            this._instance.setOption(assignDefined(this._state, {
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
                // throws error if its empty
                series: [],
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
        { type: TdChartOptionsService }
    ]; };
    TdChartComponent.propDecorators = {
        config: [{ type: Input, args: ['config',] }],
        group: [{ type: Input, args: ['group',] }],
        click: [{ type: Output, args: ['click',] }],
        dblclick: [{ type: Output, args: ['dblclick',] }],
        contextmenu: [{ type: Output, args: ['contextmenu',] }]
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
        var config = assignDefined(this._state, this.config ? this.config : {}, {
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
        { type: TdChartOptionsService }
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
        { type: TdChartOptionsService }
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
var TdSeriesComponent = /** @class */ (function () {
    function TdSeriesComponent(type, optionsService) {
        this.optionsService = optionsService;
        this._state = {};
        this._options = {};
        this.config = {};
        this._type = type;
    }
    Object.defineProperty(TdSeriesComponent.prototype, "type", {
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
    TdSeriesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdSeriesComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdSeriesComponent.prototype.ngOnDestroy = /**
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
    TdSeriesComponent.prototype.setStateOption = /**
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
    TdSeriesComponent.prototype.removeStateOption = /**
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
    TdSeriesComponent.prototype._setOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = assignDefined(this._state, this.config ? this.config : {}, this.getConfig(), this._options);
        this.optionsService.setArrayOption('series', config);
    };
    /**
     * @return {?}
     */
    TdSeriesComponent.prototype._removeOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = this.getConfig();
        this.optionsService.removeArrayOption('series', config);
    };
    TdSeriesComponent.propDecorators = {
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
    return TdSeriesComponent;
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

export { TdChartComponent, TdChartAxisComponent, TdChartYAxisComponent, TdChartXAxisComponent, TdChartOptionsService, CHART_PROVIDER, BASE_MODULE_COMPONENTS, CovalentBaseEchartsModule, assignDefined, TdSeriesComponent, CHART_PROVIDER_FACTORY as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy1iYXNlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL2NoYXJ0LW9wdGlvbnMuc2VydmljZS50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS91dGlscy9hc3NpZ24tZGVmaW5lZC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9jaGFydC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvYXhpcy9heGlzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9heGlzL3gtYXhpcy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvYXhpcy95LWF4aXMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL2Jhc2UubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL3Nlcmllcy9zZXJpZXMuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIFByb3ZpZGVyLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRPcHRpb25zU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XG4gIHByaXZhdGUgX29wdGlvbnNTdWJqZWN0OiBTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odGhpcy5fb3B0aW9ucyk7XG5cbiAgc2V0T3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IG9wdGlvbnM6IGFueSA9IHt9O1xuICAgIG9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgdGhpcy5fb3B0aW9uc1N1YmplY3QubmV4dCh0aGlzLl9vcHRpb25zKTtcbiAgfVxuXG4gIHNldEFycmF5T3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBsZXQgcHJldlZhbHVlOiBhbnlbXSA9IHRoaXMuZ2V0T3B0aW9uKG9wdGlvbik7XG4gICAgaWYgKHByZXZWYWx1ZSkge1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBwcmV2VmFsdWUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICBpbmRleCA+IC0xID8gcHJldlZhbHVlW2luZGV4XSA9IHZhbHVlIDogcHJldlZhbHVlLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2VmFsdWUgPSBbdmFsdWVdO1xuICAgIH1cbiAgICB0aGlzLnNldE9wdGlvbihvcHRpb24sIHByZXZWYWx1ZSk7XG4gIH1cblxuICByZW1vdmVBcnJheU9wdGlvbihvcHRpb246IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSB7XG4gICAgbGV0IHByZXZWYWx1ZTogYW55W10gPSB0aGlzLmdldE9wdGlvbihvcHRpb24pO1xuICAgIGlmIChwcmV2VmFsdWUpIHtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gcHJldlZhbHVlLmluZGV4T2YodmFsdWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEgKSB7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICBwcmV2VmFsdWVbaW5kZXhdID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldE9wdGlvbihvcHRpb24sIHByZXZWYWx1ZSk7XG4gIH1cblxuICBnZXRPcHRpb24ob3B0aW9uOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnNbb3B0aW9uXTtcbiAgfVxuXG4gIGNsZWFyT3B0aW9uKG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgdGhpcy5zZXRPcHRpb24ob3B0aW9uLCBudWxsKTtcbiAgfVxuXG4gIGxpc3RlbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDSEFSVF9QUk9WSURFUl9GQUNUT1JZKFxuICBwYXJlbnQ6IFRkQ2hhcnRPcHRpb25zU2VydmljZSk6IFRkQ2hhcnRPcHRpb25zU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFRkQ2hhcnRPcHRpb25zU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgQ0hBUlRfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBUZENoYXJ0T3B0aW9uc1NlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogQ0hBUlRfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gYXNzaWduRGVmaW5lZCh0YXJnZXQ6IGFueSwgLi4uc291cmNlczogYW55W10pOiBhbnkge1xuICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xuICAgICAgY29uc3QgdmFsOiBhbnkgPSBzb3VyY2Vba2V5XTtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgaWYgKHZhbCAhPT0gdW5kZWZpbmVkICYmIHZhbCAhPT0gbnVsbCkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICB9IGVsc2UgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgRG9DaGVjayxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCwgZnJvbUV2ZW50LCBtZXJnZSwgdGltZXIgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGVjaGFydHMgZnJvbSAnZWNoYXJ0cy9saWIvZWNoYXJ0cyc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSwgQ0hBUlRfUFJPVklERVIgfSBmcm9tICcuL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0JyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFydC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbQ0hBUlRfUFJPVklERVJdLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHByaXZhdGUgX3dpZHRoU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9oZWlnaHRTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBfaW5zdGFuY2U6IGFueTtcblxuICBnZXQgaW5zdGFuY2UoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG4gIHByaXZhdGUgX29wdGlvbnM6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2dyb3VwJykgZ3JvdXA6IHN0cmluZztcblxuICBAT3V0cHV0KCdjbGljaycpIGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdkYmxjbGljaycpIGRibGNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdjb250ZXh0bWVudScpIGNvbnRleHRtZW51OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luc3RhbmNlID0gZWNoYXJ0cy5pbml0KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnY2xpY2snKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuY2xpY2submV4dChwYXJhbXMpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdkYmxjbGljaycpLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5kYmxjbGljay5uZXh0KHBhcmFtcyk7XG4gICAgICB9KSxcbiAgICApO1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2NvbnRleHRtZW51Jykuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRleHRtZW51Lm5leHQocGFyYW1zKTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcbiAgICAgIGVjaGFydHMuY29ubmVjdCh0aGlzLmdyb3VwKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICBtZXJnZShcbiAgICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgICksXG4gICAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICApLFxuICAgICAgICB0aGlzLl9oZWlnaHRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgICksXG4gICAgICApLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLl9pbnN0YW5jZS5yZXNpemUoKTtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KSxcbiAgICApO1xuICAgIHRoaXMucmVuZGVyKCk7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UubGlzdGVuKCkuc3Vic2NyaWJlKChvcHRpb25zOiBhbnkpID0+IHtcbiAgICAgIGFzc2lnbkRlZmluZWQodGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdEb0NoZWNrKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9lbGVtZW50UmVmICYmIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkge1xuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0Lm5leHQoKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKTtcbiAgICAgIHRoaXMuX2hlaWdodFN1YmplY3QubmV4dCgoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlLmNsZWFyKCk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9zdWJzKSB7XG4gICAgICB0aGlzLl9zdWJzLmZvckVhY2goKHN1YjogU3Vic2NyaXB0aW9uKSA9PiB7XG4gICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2Uuc2V0T3B0aW9uKGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHtcbiAgICAgICAgZ3JpZDoge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgbGVmdDogJzIwJyxcbiAgICAgICAgICByaWdodDogJzIwJyxcbiAgICAgICAgICBib3R0b206ICcxMCcsXG4gICAgICAgICAgdG9wOiAnMTAnLFxuICAgICAgICAgIGNvbnRhaW5MYWJlbDogdHJ1ZSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyNGQ0ZDRkMnLFxuICAgICAgICB9LFxuICAgICAgICB4QXhpcyA6IFt7fV0sIC8vIHRocm93cyBlcnJvciBpZiBpdHMgZW1wdHlcbiAgICAgICAgeUF4aXMgOiBbe31dLCAvLyB0aHJvd3MgZXJyb3IgaWYgaXRzIGVtcHR5XG4gICAgICAgIHNlcmllczogW10sXG4gICAgICB9LCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHRoaXMuX29wdGlvbnMpLCB0cnVlKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgXG4gIElUZEF4aXNMaW5lLFxuICBJVGRBeGlzTGFiZWwsXG4gIElUZEF4aXNUaWNrLFxuICBJVGRTcGxpdExpbmUsXG4gIElUZFNwbGl0QXJlYSxcbiAgSVRkQXhpc1BvaW50ZXIsXG4gIFRkQXhpc1R5cGUsXG4gIFRkTmFtZUxvY2F0aW9uLFxuICBUZFhBeGlzUG9zaXRpb24sXG4gIFRkWUF4aXNQb3NpdGlvbiB9IGZyb20gJy4vYXhpcy5pbnRlcmZhY2UnO1xuICBcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZENoYXJ0QXhpc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7XG4gICAgYXhpc0xpbmU6IHtcbiAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICBjb2xvcjogJyNBQkFCQUInLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNwbGl0TGluZToge1xuICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgIGNvbG9yOiAnI0FCQUJBQicsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICBASW5wdXQoJ3Nob3cnKSBzaG93OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCdncmlkSW5kZXgnKSBncmlkSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdvZmZzZXQnKSBvZmZzZXQ6IG51bWJlcjtcbiAgYWJzdHJhY3QgcG9zaXRpb246IFRkWEF4aXNQb3NpdGlvbiB8IFRkWUF4aXNQb3NpdGlvbjtcbiAgQElucHV0KCd0eXBlJykgdHlwZTogVGRBeGlzVHlwZTtcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ25hbWVMb2NhdGlvbicpIG5hbWVMb2NhdGlvbjogVGROYW1lTG9jYXRpb247XG4gIEBJbnB1dCgnbmFtZVRleHRTdHlsZScpIG5hbWVUZXh0U3R5bGU6IGFueTtcbiAgQElucHV0KCduYW1lR2FwJykgbmFtZUdhcDogbnVtYmVyO1xuICBASW5wdXQoJ25hbWVSb3RhdGUnKSBuYW1lUm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgnaW52ZXJzZScpIGludmVyc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgnYm91bmRhcnlHYXAnKSBib3VuZGFyeUdhcDogYm9vbGVhbiB8IHN0cmluZ1tdO1xuICBASW5wdXQoJ21pbicpIG1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ21heCcpIG1heDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3NjYWxlJykgc2NhbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgnbWluSW50ZXJ2YWwnKSBtaW5JbnRlcnZhbDogbnVtYmVyO1xuICBASW5wdXQoJ2ludGVydmFsJykgaW50ZXJ2YWw6IG51bWJlcjtcbiAgQElucHV0KCdsb2dCYXNlJykgbG9nQmFzZTogbnVtYmVyO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcbiAgQElucHV0KCd0cmlnZ2VyRXZlbnQnKSB0cmlnZ2VyRXZlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgnYXhpc0xpbmUnKSBheGlzTGluZTogSVRkQXhpc0xpbmU7XG4gIEBJbnB1dCgnYXhpc1RpY2snKSBheGlzVGljazogSVRkQXhpc1RpY2s7XG4gIEBJbnB1dCgnYXhpc0xhYmVsJykgYXhpc0xhYmVsOiBJVGRBeGlzTGFiZWw7XG4gIEBJbnB1dCgnc3BsaXRMaW5lJykgc3BsaXRMaW5lOiBJVGRTcGxpdExpbmU7XG4gIEBJbnB1dCgnc3BsaXRBcmVhJykgc3BsaXRBcmVhOiBJVGRTcGxpdEFyZWE7XG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueTtcbiAgQElucHV0KCdheGlzUG9pbnRlcicpIGF4aXNQb2ludGVyOiBJVGRBeGlzUG9pbnRlcjtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F4aXNPcHRpb246IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBzaG93OiB0aGlzLnNob3csXG4gICAgICBncmlkSW5kZXg6IHRoaXMuZ3JpZEluZGV4LFxuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbmFtZUxvY2F0aW9uOiB0aGlzLm5hbWVMb2NhdGlvbixcbiAgICAgIG5hbWVUZXh0U3R5bGU6IHRoaXMubmFtZVRleHRTdHlsZSxcbiAgICAgIG5hbWVHYXA6IHRoaXMubmFtZUdhcCxcbiAgICAgIG5hbWVSb3RhdGU6IHRoaXMubmFtZVJvdGF0ZSxcbiAgICAgIGludmVyc2U6IHRoaXMuaW52ZXJzZSxcbiAgICAgIGJvdW5kYXJ5R2FwOiB0aGlzLmJvdW5kYXJ5R2FwLFxuICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICBzY2FsZTogdGhpcy5zY2FsZSxcbiAgICAgIG1pbkludGVydmFsOiB0aGlzLm1pbkludGVydmFsLFxuICAgICAgaW50ZXJ2YWw6IHRoaXMuaW50ZXJ2YWwsXG4gICAgICBsb2dCYXNlOiB0aGlzLmxvZ0Jhc2UsXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgdHJpZ2dlckV2ZW50OiB0aGlzLnRyaWdnZXJFdmVudCxcbiAgICAgIGF4aXNMaW5lOiB0aGlzLmF4aXNMaW5lLFxuICAgICAgYXhpc1RpY2s6IHRoaXMuYXhpc1RpY2ssXG4gICAgICBheGlzTGFiZWw6IHRoaXMuYXhpc0xhYmVsLFxuICAgICAgc3BsaXRMaW5lOiB0aGlzLnNwbGl0TGluZSxcbiAgICAgIHNwbGl0QXJlYTogdGhpcy5zcGxpdEFyZWEsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBheGlzUG9pbnRlcjogdGhpcy5heGlzUG9pbnRlcixcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgfSk7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2Uuc2V0QXJyYXlPcHRpb24odGhpcy5fYXhpc09wdGlvbiwgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5jbGVhck9wdGlvbih0aGlzLl9heGlzT3B0aW9uKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBUZFhBeGlzUG9zaXRpb24gIH0gZnJvbSAnLi9heGlzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUZENoYXJ0QXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC14LWF4aXMnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0WEF4aXNDb21wb25lbnQgZXh0ZW5kcyBUZENoYXJ0QXhpc0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCdwb3NpdGlvbicpIHBvc2l0aW9uOiBUZFhBeGlzUG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigneEF4aXMnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFRkWUF4aXNQb3NpdGlvbiAgfSBmcm9tICcuL2F4aXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRkQ2hhcnRBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXktYXhpcycsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRZQXhpc0NvbXBvbmVudCBleHRlbmRzIFRkQ2hhcnRBeGlzQ29tcG9uZW50IHtcblxuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IFRkWUF4aXNQb3NpdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd5QXhpcycsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRkQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZENoYXJ0WEF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMveC1heGlzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZENoYXJ0WUF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMveS1heGlzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBCQVNFX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydENvbXBvbmVudCxcbiAgVGRDaGFydFhBeGlzQ29tcG9uZW50LFxuICBUZENoYXJ0WUF4aXNDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCQVNFX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQkFTRV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRCYXNlRWNoYXJ0c01vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7IElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuLi91dGlscy9hc3NpZ24tZGVmaW5lZCc7XG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgSVRkU2VyaWVzVG9vbHRpcCB9IGZyb20gJy4uL3Nlcmllcy9zZXJpZXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IElUZEFuaW1hdGlvbiB9IGZyb20gJy4uL2Jhc2UudHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFNlcmllczxUPiBleHRlbmRzIElUZEFuaW1hdGlvbiB7XG4gIGlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbiAgdHlwZT86IFQ7XG5cbiAgdG9vbHRpcD86IElUZFNlcmllc1Rvb2x0aXA7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZFNlcmllc0NvbXBvbmVudDxUID0gYW55PiBpbXBsZW1lbnRzIElUZFNlcmllczxUPiwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSAge1xuXG4gIHByaXZhdGUgX3R5cGU6IFQ7XG5cbiAgZ2V0IHR5cGUoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBfc3RhdGU6IGFueSA9IHt9O1xuICBfb3B0aW9uczogYW55ID0ge307XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgnYW5pbWF0aW9uJykgYW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoJ2FuaW1hdGlvblRocmVzaG9sZCcpIGFuaW1hdGlvblRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoJ2FuaW1hdGlvbkR1cmF0aW9uJykgYW5pbWF0aW9uRHVyYXRpb246IG51bWJlciB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ2FuaW1hdGlvbkVhc2luZycpIGFuaW1hdGlvbkVhc2luZzogc3RyaW5nO1xuICBASW5wdXQoJ2FuaW1hdGlvbkRlbGF5JykgYW5pbWF0aW9uRGVsYXk6IG51bWJlciB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ2FuaW1hdGlvbkR1cmF0aW9uVXBkYXRlJykgYW5pbWF0aW9uRHVyYXRpb25VcGRhdGU6IG51bWJlciB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ2FuaW1hdGlvbkVhc2luZ1VwZGF0ZScpIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZTogc3RyaW5nO1xuICBASW5wdXQoJ2FuaW1hdGlvbkRlbGF5VXBkYXRlJykgYW5pbWF0aW9uRGVsYXlVcGRhdGU6IG51bWJlciB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ3Rvb2x0aXAnKSB0b29sdGlwOiBJVGRTZXJpZXNUb29sdGlwO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGU6IFQsIHByb3RlY3RlZCBvcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuICBcbiAgc2V0U3RhdGVPcHRpb24ob3B0aW9uOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICByZW1vdmVTdGF0ZU9wdGlvbihvcHRpb246IHN0cmluZyk6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIHRoaXMuX29wdGlvbnNbb3B0aW9uXSA9IG51bGw7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0Q29uZmlnKCk6IGFueTtcblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwgdGhpcy5nZXRDb25maWcoKSwgdGhpcy5fb3B0aW9ucyk7XG4gICAgdGhpcy5vcHRpb25zU2VydmljZS5zZXRBcnJheU9wdGlvbignc2VyaWVzJywgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSB0aGlzLmdldENvbmZpZygpO1xuICAgIHRoaXMub3B0aW9uc1NlcnZpY2UucmVtb3ZlQXJyYXlPcHRpb24oJ3NlcmllcycsIGNvbmZpZyk7XG4gIH1cblxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX192YWx1ZXMiLCJlY2hhcnRzLmluaXQiLCJlY2hhcnRzLmNvbm5lY3QiLCJ0c2xpYl8xLl9fZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtJQVNBO1FBR1UsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNuQixvQkFBZSxHQUFpQixJQUFJLGVBQWUsQ0FBTSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7S0ErQ2pGOzs7Ozs7SUE3Q0MseUNBQVM7Ozs7O0lBQVQsVUFBVSxNQUFjLEVBQUUsS0FBVTs7WUFDOUIsT0FBTyxHQUFRLEVBQUU7UUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzFDOzs7Ozs7SUFFRCw4Q0FBYzs7Ozs7SUFBZCxVQUFlLE1BQWMsRUFBRSxLQUFVOztZQUNuQyxTQUFT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