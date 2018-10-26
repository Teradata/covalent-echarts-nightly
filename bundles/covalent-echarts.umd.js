(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('echarts/lib/echarts'), require('@angular/common'), require('@covalent/echarts/base'), require('echarts/lib/chart/bar'), require('echarts/lib/chart/line'), require('echarts/lib/chart/scatter'), require('echarts/lib/component/tooltip')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'echarts/lib/echarts', '@angular/common', '@covalent/echarts/base', 'echarts/lib/chart/bar', 'echarts/lib/chart/line', 'echarts/lib/chart/scatter', 'echarts/lib/component/tooltip'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.echarts = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.echarts,global.ng.common,global.covalent.echarts.base));
}(this, (function (exports,core,rxjs,operators,echarts,common,base) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdChartOptionsService = /** @class */ (function () {
        function TdChartOptionsService() {
            this._options = {};
            this._optionsSubject = new rxjs.BehaviorSubject(this._options);
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
                        prevValue[index] = undefined;
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
                this.setOption(option, undefined);
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
            { type: core.Injectable }
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
        deps: [[new core.Optional(), new core.SkipSelf(), TdChartOptionsService]],
        useFactory: CHART_PROVIDER_FACTORY,
    };

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

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
        var e_1, _a, e_2, _b, e_3, _c;
        try {
            for (var _d = __values(Object.keys(target)), _e = _d.next(); !_e.done; _e = _d.next()) {
                var key = _e.value;
                delete target[key];
            }
        }
        catch (e_1_1) {
            e_1 = { error: e_1_1 };
        }
        finally {
            try {
                if (_e && !_e.done && (_a = _d.return))
                    _a.call(_d);
            }
            finally {
                if (e_1)
                    throw e_1.error;
            }
        }
        try {
            for (var sources_1 = __values(sources), sources_1_1 = sources_1.next(); !sources_1_1.done; sources_1_1 = sources_1.next()) {
                var source = sources_1_1.value;
                try {
                    for (var _f = __values(Object.keys(source)), _g = _f.next(); !_g.done; _g = _f.next()) {
                        var key = _g.value;
                        /** @type {?} */
                        var val = source[key];
                        if (val !== undefined) {
                            target[key] = val;
                        }
                        else {
                            delete target[key];
                        }
                    }
                }
                catch (e_3_1) {
                    e_3 = { error: e_3_1 };
                }
                finally {
                    try {
                        if (_g && !_g.done && (_c = _f.return))
                            _c.call(_f);
                    }
                    finally {
                        if (e_3)
                            throw e_3.error;
                    }
                }
            }
        }
        catch (e_2_1) {
            e_2 = { error: e_2_1 };
        }
        finally {
            try {
                if (sources_1_1 && !sources_1_1.done && (_b = sources_1.return))
                    _b.call(sources_1);
            }
            finally {
                if (e_2)
                    throw e_2.error;
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
    var TdChartComponent = /** @class */ (function () {
        function TdChartComponent(_changeDetectorRef, _elementRef, _optionsService) {
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._optionsService = _optionsService;
            this._widthSubject = new rxjs.Subject();
            this._heightSubject = new rxjs.Subject();
            this._resizing = false;
            this._state = {};
            this._options = {};
            this.config = {};
            this.showLegend = true;
            this.dataZoom = true;
            this.markAreaClick = new core.EventEmitter();
        }
        Object.defineProperty(TdChartComponent.prototype, "instance", {
            get: /**
             * @return {?}
             */ function () {
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
                this._resizeSubscription = rxjs.merge(rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(10)), this._widthSubject.asObservable().pipe(operators.debounceTime(0), operators.distinctUntilChanged()), this._heightSubject.asObservable().pipe(operators.debounceTime(0), operators.distinctUntilChanged())).subscribe(function () {
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
                    this._widthSubject.next((( /** @type {?} */(this._elementRef.nativeElement))).getBoundingClientRect().width);
                    this._heightSubject.next((( /** @type {?} */(this._elementRef.nativeElement))).getBoundingClientRect().height);
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
                if (this._resizeSubscription) {
                    this._resizeSubscription.unsubscribe();
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
                    this._legend = {
                        show: this.showLegend,
                        type: 'scroll',
                        selectedMode: 'multiple',
                        orient: 'horizontal',
                        // 'vertical'
                        right: '5',
                        bottom: '5',
                    },
                        this._instance.setOption(assignDefined(this._state, {
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
            { type: core.Component, args: [{
                        selector: 'td-chart',
                        template: '',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [CHART_PROVIDER],
                        styles: [":host{display:block}"]
                    }] }
        ];
        /** @nocollapse */
        TdChartComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.ElementRef },
                { type: TdChartOptionsService }
            ];
        };
        TdChartComponent.propDecorators = {
            config: [{ type: core.Input, args: ['config',] }],
            chartTitle: [{ type: core.Input, args: ['chartTitle',] }],
            showLegend: [{ type: core.Input, args: ['showLegend',] }],
            chartGroup: [{ type: core.Input, args: ['chartGroup',] }],
            dataZoom: [{ type: core.Input, args: ['dataZoom',] }],
            markAreaClick: [{ type: core.Output, args: ['markAreaClick',] }]
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
            this._state = {};
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
            config: [{ type: core.Input, args: ['config',] }],
            id: [{ type: core.Input, args: ['id',] }],
            show: [{ type: core.Input, args: ['show',] }],
            gridIndex: [{ type: core.Input, args: ['gridIndex',] }],
            offset: [{ type: core.Input, args: ['offset',] }],
            type: [{ type: core.Input, args: ['type',] }],
            name: [{ type: core.Input, args: ['name',] }],
            nameLocation: [{ type: core.Input, args: ['nameLocation',] }],
            nameTextStyle: [{ type: core.Input, args: ['nameTextStyle',] }],
            nameGap: [{ type: core.Input, args: ['nameGap',] }],
            nameRotate: [{ type: core.Input, args: ['nameRotate',] }],
            inverse: [{ type: core.Input, args: ['inverse',] }],
            boundaryGap: [{ type: core.Input, args: ['boundaryGap',] }],
            min: [{ type: core.Input, args: ['min',] }],
            max: [{ type: core.Input, args: ['max',] }],
            scale: [{ type: core.Input, args: ['scale',] }],
            minInterval: [{ type: core.Input, args: ['minInterval',] }],
            interval: [{ type: core.Input, args: ['interval',] }],
            logBase: [{ type: core.Input, args: ['logBase',] }],
            silent: [{ type: core.Input, args: ['silent',] }],
            triggerEvent: [{ type: core.Input, args: ['triggerEvent',] }],
            axisLine: [{ type: core.Input, args: ['axisLine',] }],
            axisTick: [{ type: core.Input, args: ['axisTick',] }],
            axisLabel: [{ type: core.Input, args: ['axisLabel',] }],
            splitLine: [{ type: core.Input, args: ['splitLine',] }],
            splitArea: [{ type: core.Input, args: ['splitArea',] }],
            data: [{ type: core.Input, args: ['data',] }],
            axisPointer: [{ type: core.Input, args: ['axisPointer',] }],
            zlevel: [{ type: core.Input, args: ['zlevel',] }],
            z: [{ type: core.Input, args: ['z',] }]
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
            { type: core.Component, args: [{
                        selector: 'td-chart-x-axis',
                        template: '',
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdChartXAxisComponent.ctorParameters = function () {
            return [
                { type: TdChartOptionsService }
            ];
        };
        TdChartXAxisComponent.propDecorators = {
            position: [{ type: core.Input, args: ['position',] }]
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
            { type: core.Component, args: [{
                        selector: 'td-chart-y-axis',
                        template: '',
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdChartYAxisComponent.ctorParameters = function () {
            return [
                { type: TdChartOptionsService }
            ];
        };
        TdChartYAxisComponent.propDecorators = {
            position: [{ type: core.Input, args: ['position',] }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
             */ function () {
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
                this._options[option] = undefined;
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
            config: [{ type: core.Input, args: ['config',] }],
            id: [{ type: core.Input, args: ['id',] }],
            name: [{ type: core.Input, args: ['name',] }],
            color: [{ type: core.Input, args: ['color',] }],
            animation: [{ type: core.Input, args: ['animation',] }],
            animationThreshold: [{ type: core.Input, args: ['animationThreshold',] }],
            animationDuration: [{ type: core.Input, args: ['animationDuration',] }],
            animationEasing: [{ type: core.Input, args: ['animationEasing',] }],
            animationDelay: [{ type: core.Input, args: ['animationDelay',] }],
            animationDurationUpdate: [{ type: core.Input, args: ['animationDurationUpdate',] }],
            animationEasingUpdate: [{ type: core.Input, args: ['animationEasingUpdate',] }],
            animationDelayUpdate: [{ type: core.Input, args: ['animationDelayUpdate',] }],
            tooltip: [{ type: core.Input, args: ['tooltip',] }]
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
            };
        TdChartSeriesBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-bar]',
                        template: '',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: base.TdSeriesComponent, useExisting: core.forwardRef(function () { return TdChartSeriesBarComponent; }),
                            }]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesBarComponent.ctorParameters = function () {
            return [
                { type: base.TdChartOptionsService }
            ];
        };
        TdChartSeriesBarComponent.propDecorators = {
            coordinateSystem: [{ type: core.Input, args: ['coordinateSystem',] }],
            xAxisIndex: [{ type: core.Input, args: ['xAxisIndex',] }],
            yAxisIndex: [{ type: core.Input, args: ['yAxisIndex',] }],
            legendHoverLink: [{ type: core.Input, args: ['legendHoverLink',] }],
            stack: [{ type: core.Input, args: ['stack',] }],
            cursor: [{ type: core.Input, args: ['cursor',] }],
            label: [{ type: core.Input, args: ['label',] }],
            itemStyle: [{ type: core.Input, args: ['itemStyle',] }],
            emphasis: [{ type: core.Input, args: ['emphasis',] }],
            barWidth: [{ type: core.Input, args: ['barWidth',] }],
            barMaxWidth: [{ type: core.Input, args: ['barMaxWidth',] }],
            barMinHeight: [{ type: core.Input, args: ['barMinHeight',] }],
            barGap: [{ type: core.Input, args: ['barGap',] }],
            barCategoryGap: [{ type: core.Input, args: ['barCategoryGap',] }],
            large: [{ type: core.Input, args: ['large',] }],
            largeThreshold: [{ type: core.Input, args: ['largeThreshold',] }],
            progressive: [{ type: core.Input, args: ['progressive',] }],
            progressiveThreshold: [{ type: core.Input, args: ['progressiveThreshold',] }],
            progressiveChunkMode: [{ type: core.Input, args: ['progressiveChunkMode',] }],
            dimensions: [{ type: core.Input, args: ['dimensions',] }],
            encode: [{ type: core.Input, args: ['encode',] }],
            seriesLayoutBy: [{ type: core.Input, args: ['seriesLayoutBy',] }],
            datasetIndex: [{ type: core.Input, args: ['datasetIndex',] }],
            data: [{ type: core.Input, args: ['data',] }],
            markPoint: [{ type: core.Input, args: ['markPoint',] }],
            markLine: [{ type: core.Input, args: ['markLine',] }],
            markArea: [{ type: core.Input, args: ['markArea',] }],
            zlevel: [{ type: core.Input, args: ['zlevel',] }],
            z: [{ type: core.Input, args: ['z',] }]
        };
        return TdChartSeriesBarComponent;
    }(base.TdSeriesComponent));

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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
            };
        TdChartSeriesLineComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-line]',
                        template: '',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: base.TdSeriesComponent, useExisting: core.forwardRef(function () { return TdChartSeriesLineComponent; }),
                            }]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesLineComponent.ctorParameters = function () {
            return [
                { type: base.TdChartOptionsService }
            ];
        };
        TdChartSeriesLineComponent.propDecorators = {
            coordinateSystem: [{ type: core.Input, args: ['coordinateSystem',] }],
            xAxisIndex: [{ type: core.Input, args: ['xAxisIndex',] }],
            yAxisIndex: [{ type: core.Input, args: ['yAxisIndex',] }],
            polarIndex: [{ type: core.Input, args: ['polarIndex',] }],
            symbol: [{ type: core.Input, args: ['symbol',] }],
            symbolSize: [{ type: core.Input, args: ['symbolSize',] }],
            symbolRotate: [{ type: core.Input, args: ['symbolRotate',] }],
            symbolKeepAspect: [{ type: core.Input, args: ['symbolKeepAspect',] }],
            symbolOffset: [{ type: core.Input, args: ['symbolOffset',] }],
            showSymbol: [{ type: core.Input, args: ['showSymbol',] }],
            showAllSymbol: [{ type: core.Input, args: ['showAllSymbol',] }],
            hoverAnimation: [{ type: core.Input, args: ['hoverAnimation',] }],
            legendHoverLink: [{ type: core.Input, args: ['legendHoverLink',] }],
            stack: [{ type: core.Input, args: ['stack',] }],
            cursor: [{ type: core.Input, args: ['cursor',] }],
            connectNulls: [{ type: core.Input, args: ['connectNulls',] }],
            clipOverflow: [{ type: core.Input, args: ['clipOverflow',] }],
            step: [{ type: core.Input, args: ['step',] }],
            label: [{ type: core.Input, args: ['label',] }],
            itemStyle: [{ type: core.Input, args: ['itemStyle',] }],
            lineStyle: [{ type: core.Input, args: ['lineStyle',] }],
            areaStyle: [{ type: core.Input, args: ['areaStyle',] }],
            emphasis: [{ type: core.Input, args: ['emphasis',] }],
            smooth: [{ type: core.Input, args: ['smooth',] }],
            smoothMonotone: [{ type: core.Input, args: ['smoothMonotone',] }],
            sampling: [{ type: core.Input, args: ['sampling',] }],
            dimensions: [{ type: core.Input, args: ['dimensions',] }],
            encode: [{ type: core.Input, args: ['encode',] }],
            seriesLayoutBy: [{ type: core.Input, args: ['seriesLayoutBy',] }],
            datasetIndex: [{ type: core.Input, args: ['datasetIndex',] }],
            data: [{ type: core.Input, args: ['data',] }],
            markPoint: [{ type: core.Input, args: ['markPoint',] }],
            markLine: [{ type: core.Input, args: ['markLine',] }],
            markArea: [{ type: core.Input, args: ['markArea',] }],
            zlevel: [{ type: core.Input, args: ['zlevel',] }],
            z: [{ type: core.Input, args: ['z',] }],
            silent: [{ type: core.Input, args: ['silent',] }]
        };
        return TdChartSeriesLineComponent;
    }(base.TdSeriesComponent));

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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
            };
        TdChartSeriesScatterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-scatter]',
                        template: '',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: base.TdSeriesComponent, useExisting: core.forwardRef(function () { return TdChartSeriesScatterComponent; }),
                            }]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesScatterComponent.ctorParameters = function () {
            return [
                { type: base.TdChartOptionsService }
            ];
        };
        TdChartSeriesScatterComponent.propDecorators = {
            coordinateSystem: [{ type: core.Input, args: ['coordinateSystem',] }],
            xAxisIndex: [{ type: core.Input, args: ['xAxisIndex',] }],
            yAxisIndex: [{ type: core.Input, args: ['yAxisIndex',] }],
            polarIndex: [{ type: core.Input, args: ['polarIndex',] }],
            geoIndex: [{ type: core.Input, args: ['geoIndex',] }],
            calendarIndex: [{ type: core.Input, args: ['calendarIndex',] }],
            hoverAnimation: [{ type: core.Input, args: ['hoverAnimation',] }],
            legendHoverLink: [{ type: core.Input, args: ['legendHoverLink',] }],
            symbol: [{ type: core.Input, args: ['symbol',] }],
            symbolSize: [{ type: core.Input, args: ['symbolSize',] }],
            symbolRotate: [{ type: core.Input, args: ['symbolRotate',] }],
            symbolKeepAspect: [{ type: core.Input, args: ['symbolKeepAspect',] }],
            symbolOffset: [{ type: core.Input, args: ['symbolOffset',] }],
            large: [{ type: core.Input, args: ['large',] }],
            largeThreshold: [{ type: core.Input, args: ['largeThreshold',] }],
            cursor: [{ type: core.Input, args: ['cursor',] }],
            label: [{ type: core.Input, args: ['label',] }],
            itemStyle: [{ type: core.Input, args: ['itemStyle',] }],
            emphasis: [{ type: core.Input, args: ['emphasis',] }],
            progressive: [{ type: core.Input, args: ['progressive',] }],
            progressiveThreshold: [{ type: core.Input, args: ['progressiveThreshold',] }],
            dimensions: [{ type: core.Input, args: ['dimensions',] }],
            encode: [{ type: core.Input, args: ['encode',] }],
            seriesLayoutBy: [{ type: core.Input, args: ['seriesLayoutBy',] }],
            datasetIndex: [{ type: core.Input, args: ['datasetIndex',] }],
            data: [{ type: core.Input, args: ['data',] }],
            markPoint: [{ type: core.Input, args: ['markPoint',] }],
            markLine: [{ type: core.Input, args: ['markLine',] }],
            markArea: [{ type: core.Input, args: ['markArea',] }],
            zlevel: [{ type: core.Input, args: ['zlevel',] }],
            z: [{ type: core.Input, args: ['z',] }],
            silent: [{ type: core.Input, args: ['silent',] }]
        };
        return TdChartSeriesScatterComponent;
    }(base.TdSeriesComponent));

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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
    var TdTooltipContext = /** @class */ (function () {
        function TdTooltipContext() {
        }
        return TdTooltipContext;
    }());
    var TdChartTooltipFormatterDirective = /** @class */ (function () {
        function TdChartTooltipFormatterDirective() {
        }
        TdChartTooltipFormatterDirective.decorators = [
            { type: core.Directive, args: [{
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
        TdChartTooltipComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._setOptions();
            };
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
                var config = base.assignDefined(this._state, this.config ? this.config : {}, {
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
                        callback(ticket, (( /** @type {?} */(_this._elementRef.nativeElement))).innerHTML);
                    });
                    _this._changeDetectorRef.markForCheck();
                    return (( /** @type {?} */(_this._elementRef.nativeElement))).innerHTML;
                };
            };
        TdChartTooltipComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-tooltip',
                        template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdChartTooltipComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.ElementRef },
                { type: base.TdChartOptionsService }
            ];
        };
        TdChartTooltipComponent.propDecorators = {
            config: [{ type: core.Input, args: ['config',] }],
            show: [{ type: core.Input, args: ['show',] }],
            trigger: [{ type: core.Input, args: ['trigger',] }],
            axisPointer: [{ type: core.Input, args: ['axisPointer',] }],
            showContent: [{ type: core.Input, args: ['showContent',] }],
            alwaysShowContent: [{ type: core.Input, args: ['alwaysShowContent',] }],
            triggerOn: [{ type: core.Input, args: ['triggerOn',] }],
            showDelay: [{ type: core.Input, args: ['showDelay',] }],
            hideDelay: [{ type: core.Input, args: ['hideDelay',] }],
            enterable: [{ type: core.Input, args: ['enterable',] }],
            renderMode: [{ type: core.Input, args: ['renderMode',] }],
            confine: [{ type: core.Input, args: ['confine',] }],
            transitionDuration: [{ type: core.Input, args: ['transitionDuration',] }],
            position: [{ type: core.Input, args: ['position',] }],
            formatter: [{ type: core.Input, args: ['formatter',] }],
            backgroundColor: [{ type: core.Input, args: ['backgroundColor',] }],
            borderColor: [{ type: core.Input, args: ['borderColor',] }],
            borderWidth: [{ type: core.Input, args: ['borderWidth',] }],
            padding: [{ type: core.Input, args: ['padding',] }],
            textStyle: [{ type: core.Input, args: ['textStyle',] }],
            extraCssText: [{ type: core.Input, args: ['extraCssText',] }],
            formatterTemplate: [{ type: core.ContentChild, args: [TdChartTooltipFormatterDirective, { read: core.TemplateRef },] }],
            fullTemplate: [{ type: core.ViewChild, args: ['tooltipContent',] }]
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
        TdSeriesTooltipComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._setOptions();
            };
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
                var config = base.assignDefined(this._state, this.config ? this.config : {}, {
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
                        callback(ticket, (( /** @type {?} */(_this._elementRef.nativeElement))).innerHTML);
                    });
                    _this._changeDetectorRef.markForCheck();
                    return (( /** @type {?} */(_this._elementRef.nativeElement))).innerHTML;
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
            { type: core.Component, args: [{
                        selector: 'td-chart-series-tooltip',
                        template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdSeriesTooltipComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.ElementRef },
                { type: base.TdSeriesComponent }
            ];
        };
        TdSeriesTooltipComponent.propDecorators = {
            config: [{ type: core.Input, args: ['config',] }],
            formatter: [{ type: core.Input, args: ['formatter',] }],
            position: [{ type: core.Input, args: ['position',] }],
            backgroundColor: [{ type: core.Input, args: ['backgroundColor',] }],
            borderColor: [{ type: core.Input, args: ['borderColor',] }],
            borderWidth: [{ type: core.Input, args: ['borderWidth',] }],
            padding: [{ type: core.Input, args: ['padding',] }],
            textStyle: [{ type: core.Input, args: ['textStyle',] }],
            extraCssText: [{ type: core.Input, args: ['extraCssText',] }],
            formatterTemplate: [{ type: core.ContentChild, args: [TdChartTooltipFormatterDirective, { read: core.TemplateRef },] }],
            fullTemplate: [{ type: core.ViewChild, args: ['tooltipContent',] }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.TdChartComponent = TdChartComponent;
    exports.TdChartAxisComponent = TdChartAxisComponent;
    exports.TdChartYAxisComponent = TdChartYAxisComponent;
    exports.TdChartXAxisComponent = TdChartXAxisComponent;
    exports.TdChartOptionsService = TdChartOptionsService;
    exports.CHART_PROVIDER = CHART_PROVIDER;
    exports.BASE_MODULE_COMPONENTS = BASE_MODULE_COMPONENTS;
    exports.CovalentBaseEchartsModule = CovalentBaseEchartsModule;
    exports.assignDefined = assignDefined;
    exports.TdSeriesComponent = TdSeriesComponent;
    exports.BAR_MODULE_COMPONENTS = BAR_MODULE_COMPONENTS;
    exports.CovalentBarEchartsModule = CovalentBarEchartsModule;
    exports.TdChartSeriesBarComponent = TdChartSeriesBarComponent;
    exports.LINE_MODULE_COMPONENTS = LINE_MODULE_COMPONENTS;
    exports.CovalentLineEchartsModule = CovalentLineEchartsModule;
    exports.TdChartSeriesLineComponent = TdChartSeriesLineComponent;
    exports.SCATTER_MODULE_COMPONENTS = SCATTER_MODULE_COMPONENTS;
    exports.CovalentScatterEchartsModule = CovalentScatterEchartsModule;
    exports.TdChartSeriesScatterComponent = TdChartSeriesScatterComponent;
    exports.TOOLTIP_MODULE_COMPONENTS = TOOLTIP_MODULE_COMPONENTS;
    exports.CovalentTooltipEchartsModule = CovalentTooltipEchartsModule;
    exports.TdTooltipContext = TdTooltipContext;
    exports.TdChartTooltipFormatterDirective = TdChartTooltipFormatterDirective;
    exports.TdChartTooltipComponent = TdChartTooltipComponent;
    exports.TdSeriesTooltipComponent = TdSeriesTooltipComponent;
    exports.ɵa = CHART_PROVIDER_FACTORY;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvY2hhcnQtb3B0aW9ucy5zZXJ2aWNlLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS91dGlscy9hc3NpZ24tZGVmaW5lZC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9jaGFydC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvYXhpcy9heGlzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9heGlzL3gtYXhpcy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvYXhpcy95LWF4aXMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL2Jhc2UubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL3Nlcmllcy9zZXJpZXMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXIvYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFyL2Jhci5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2xpbmUvbGluZS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2xpbmUvbGluZS5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3NjYXR0ZXIvc2NhdHRlci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3NjYXR0ZXIvc2NhdHRlci5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3Rvb2x0aXAvc2VyaWVzLXRvb2x0aXAuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sdGlwL3Rvb2x0aXAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIFByb3ZpZGVyLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRPcHRpb25zU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XG4gIHByaXZhdGUgX29wdGlvbnNTdWJqZWN0OiBTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odGhpcy5fb3B0aW9ucyk7XG5cbiAgc2V0T3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IG9wdGlvbnM6IGFueSA9IHt9O1xuICAgIG9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgdGhpcy5fb3B0aW9uc1N1YmplY3QubmV4dCh0aGlzLl9vcHRpb25zKTtcbiAgfVxuXG4gIHNldEFycmF5T3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBsZXQgcHJldlZhbHVlOiBhbnlbXSA9IHRoaXMuZ2V0T3B0aW9uKG9wdGlvbik7XG4gICAgaWYgKHByZXZWYWx1ZSkge1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBwcmV2VmFsdWUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICBpbmRleCA+IC0xID8gcHJldlZhbHVlW2luZGV4XSA9IHZhbHVlIDogcHJldlZhbHVlLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2VmFsdWUgPSBbdmFsdWVdO1xuICAgIH1cbiAgICB0aGlzLnNldE9wdGlvbihvcHRpb24sIHByZXZWYWx1ZSk7XG4gIH1cblxuICByZW1vdmVBcnJheU9wdGlvbihvcHRpb246IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSB7XG4gICAgbGV0IHByZXZWYWx1ZTogYW55W10gPSB0aGlzLmdldE9wdGlvbihvcHRpb24pO1xuICAgIGlmIChwcmV2VmFsdWUpIHtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gcHJldlZhbHVlLmluZGV4T2YodmFsdWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEgKSB7XG4gICAgICAgIHByZXZWYWx1ZVtpbmRleF0gPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmV2VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRPcHRpb24ob3B0aW9uLCBwcmV2VmFsdWUpO1xuICB9XG5cbiAgZ2V0T3B0aW9uKG9wdGlvbjogc3RyaW5nKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zW29wdGlvbl07XG4gIH1cblxuICBjbGVhck9wdGlvbihvcHRpb246IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0T3B0aW9uKG9wdGlvbiwgdW5kZWZpbmVkKTtcblxuICB9XG5cbiAgbGlzdGVuKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnNTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENIQVJUX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVGRDaGFydE9wdGlvbnNTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBDSEFSVF9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkQ2hhcnRPcHRpb25zU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBDSEFSVF9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkRlZmluZWQodGFyZ2V0OiBhbnksIC4uLnNvdXJjZXM6IGFueVtdKTogYW55IHtcbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGFyZ2V0KSkge1xuICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgfVxuICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xuICAgICAgY29uc3QgdmFsOiBhbnkgPSBzb3VyY2Vba2V5XTtcbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgTmdab25lLFxuICBPbkRlc3Ryb3ksXG4gIERvQ2hlY2ssXG4gIENvbnRlbnRDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YnNjcmlwdGlvbiwgU3ViamVjdCwgZnJvbUV2ZW50LCBtZXJnZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZWNoYXJ0cyBmcm9tICdlY2hhcnRzL2xpYi9lY2hhcnRzJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLCBDSEFSVF9QUk9WSURFUiB9IGZyb20gJy4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlVXJsczogWycuL2NoYXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtDSEFSVF9QUk9WSURFUl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIERvQ2hlY2ssIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfcmVzaXplU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgX3dpZHRoU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9oZWlnaHRTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX3Jlc2l6aW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBfbGVnZW5kOiBhbnk7XG5cbiAgcHJpdmF0ZSBfaW5zdGFuY2U6IGFueTtcblxuICBnZXQgaW5zdGFuY2UoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG4gIHByaXZhdGUgX29wdGlvbnM6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2NoYXJ0VGl0bGUnKSBjaGFydFRpdGxlOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2hvd0xlZ2VuZCcpIHNob3dMZWdlbmQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ2NoYXJ0R3JvdXAnKSBjaGFydEdyb3VwOiBzdHJpbmc7XG4gIEBJbnB1dCgnZGF0YVpvb20nKSBkYXRhWm9vbTogYm9vbGVhbiA9IHRydWU7XG5cbiAgQE91dHB1dCgnbWFya0FyZWFDbGljaycpIG1hcmtBcmVhQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5zdGFuY2UgPSBlY2hhcnRzLmluaXQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdjbGljaycpLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgIGlmIChwYXJhbXMuY29tcG9uZW50VHlwZSA9PT0gJ21hcmtBcmVhJykge1xuICAgICAgICB0aGlzLm1hcmtBcmVhQ2xpY2submV4dChwYXJhbXMpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLmNoYXJ0R3JvdXApIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlLmdyb3VwID0gdGhpcy5jaGFydEdyb3VwO1xuICAgICAgZWNoYXJ0cy5jb25uZWN0KHRoaXMuY2hhcnRHcm91cCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uID0gbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwKSxcbiAgICAgICksXG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgICAgIHRoaXMuX2hlaWdodFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuX3Jlc2l6aW5nKSB7XG4gICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5faW5zdGFuY2UucmVzaXplKCk7XG4gICAgICAgICAgdGhpcy5fcmVzaXppbmcgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfSwgMTAwKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmxpc3RlbigpLnN1YnNjcmliZSgob3B0aW9uczogYW55KSA9PiB7XG4gICAgICBhc3NpZ25EZWZpbmVkKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KCg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XG4gICAgICB0aGlzLl9oZWlnaHRTdWJqZWN0Lm5leHQoKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5jbGVhcigpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLl9yZXNpemVTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9sZWdlbmQgPSB7XG4gICAgICAgIHNob3c6IHRoaXMuc2hvd0xlZ2VuZCxcbiAgICAgICAgdHlwZTogJ3Njcm9sbCcsXG4gICAgICAgIHNlbGVjdGVkTW9kZTogJ211bHRpcGxlJyxcbiAgICAgICAgb3JpZW50OiAnaG9yaXpvbnRhbCcsIC8vICd2ZXJ0aWNhbCdcbiAgICAgICAgcmlnaHQ6ICc1JyxcbiAgICAgICAgYm90dG9tOiAnNScsXG4gICAgICB9LFxuICAgICAgdGhpcy5faW5zdGFuY2Uuc2V0T3B0aW9uKGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHtcbiAgICAgICAgZ3JpZDoge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgbGVmdDogJzIwJyxcbiAgICAgICAgICByaWdodDogJzIwJyxcbiAgICAgICAgICBib3R0b206IHRoaXMuc2hvd0xlZ2VuZCA/ICczMCcgOiAnMTAnLFxuICAgICAgICAgIHRvcDogJzEwJyxcbiAgICAgICAgICBjb250YWluTGFiZWw6IHRydWUsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjRkNGQ0ZDJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YVpvb206IHRoaXMuZGF0YVpvb20gPyBbe1xuICAgICAgICAgIHR5cGU6ICdpbnNpZGUnLFxuICAgICAgICAgIHRocm90dGxlOiA1MCxcbiAgICAgICAgICB6b29tT25Nb3VzZVdoZWVsOiAnc2hpZnQnLFxuICAgICAgICB9XSA6IHVuZGVmaW5lZCxcbiAgICAgICAgbGVnZW5kOiB0aGlzLl9sZWdlbmQsXG4gICAgICAgIHhBeGlzIDogW3t9XSwgLy8gdGhyb3dzIGVycm9yIGlmIGl0cyBlbXB0eVxuICAgICAgICB5QXhpcyA6IFt7fV0sIC8vIHRocm93cyBlcnJvciBpZiBpdHMgZW1wdHlcbiAgICAgICAgc2VyaWVzOiBbXSxcbiAgICAgIH0sIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwgdGhpcy5fb3B0aW9ucyksIHRydWUpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBcbiAgSVRkQXhpc0xpbmUsXG4gIElUZEF4aXNMYWJlbCxcbiAgSVRkQXhpc1RpY2ssXG4gIElUZFNwbGl0TGluZSxcbiAgSVRkU3BsaXRBcmVhLFxuICBJVGRBeGlzUG9pbnRlcixcbiAgVGRBeGlzVHlwZSxcbiAgVGROYW1lTG9jYXRpb24sXG4gIFRkWEF4aXNQb3NpdGlvbixcbiAgVGRZQXhpc1Bvc2l0aW9uIH0gZnJvbSAnLi9heGlzLmludGVyZmFjZSc7XG4gIFxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRkQ2hhcnRBeGlzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgQElucHV0KCdzaG93Jykgc2hvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnZ3JpZEluZGV4JykgZ3JpZEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnb2Zmc2V0Jykgb2Zmc2V0OiBudW1iZXI7XG4gIGFic3RyYWN0IHBvc2l0aW9uOiBUZFhBeGlzUG9zaXRpb24gfCBUZFlBeGlzUG9zaXRpb247XG4gIEBJbnB1dCgndHlwZScpIHR5cGU6IFRkQXhpc1R5cGU7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCduYW1lTG9jYXRpb24nKSBuYW1lTG9jYXRpb246IFRkTmFtZUxvY2F0aW9uO1xuICBASW5wdXQoJ25hbWVUZXh0U3R5bGUnKSBuYW1lVGV4dFN0eWxlOiBhbnk7XG4gIEBJbnB1dCgnbmFtZUdhcCcpIG5hbWVHYXA6IG51bWJlcjtcbiAgQElucHV0KCduYW1lUm90YXRlJykgbmFtZVJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ2ludmVyc2UnKSBpbnZlcnNlOiBib29sZWFuO1xuICBASW5wdXQoJ2JvdW5kYXJ5R2FwJykgYm91bmRhcnlHYXA6IGJvb2xlYW4gfCBzdHJpbmdbXTtcbiAgQElucHV0KCdtaW4nKSBtaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdtYXgnKSBtYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdzY2FsZScpIHNjYWxlOiBib29sZWFuO1xuICBASW5wdXQoJ21pbkludGVydmFsJykgbWluSW50ZXJ2YWw6IG51bWJlcjtcbiAgQElucHV0KCdpbnRlcnZhbCcpIGludGVydmFsOiBudW1iZXI7XG4gIEBJbnB1dCgnbG9nQmFzZScpIGxvZ0Jhc2U6IG51bWJlcjtcbiAgQElucHV0KCdzaWxlbnQnKSBzaWxlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgndHJpZ2dlckV2ZW50JykgdHJpZ2dlckV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoJ2F4aXNMaW5lJykgYXhpc0xpbmU6IElUZEF4aXNMaW5lO1xuICBASW5wdXQoJ2F4aXNUaWNrJykgYXhpc1RpY2s6IElUZEF4aXNUaWNrO1xuICBASW5wdXQoJ2F4aXNMYWJlbCcpIGF4aXNMYWJlbDogSVRkQXhpc0xhYmVsO1xuICBASW5wdXQoJ3NwbGl0TGluZScpIHNwbGl0TGluZTogSVRkU3BsaXRMaW5lO1xuICBASW5wdXQoJ3NwbGl0QXJlYScpIHNwbGl0QXJlYTogSVRkU3BsaXRBcmVhO1xuICBASW5wdXQoJ2RhdGEnKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgnYXhpc1BvaW50ZXInKSBheGlzUG9pbnRlcjogSVRkQXhpc1BvaW50ZXI7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9heGlzT3B0aW9uOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgZ3JpZEluZGV4OiB0aGlzLmdyaWRJbmRleCxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG5hbWVMb2NhdGlvbjogdGhpcy5uYW1lTG9jYXRpb24sXG4gICAgICBuYW1lVGV4dFN0eWxlOiB0aGlzLm5hbWVUZXh0U3R5bGUsXG4gICAgICBuYW1lR2FwOiB0aGlzLm5hbWVHYXAsXG4gICAgICBuYW1lUm90YXRlOiB0aGlzLm5hbWVSb3RhdGUsXG4gICAgICBpbnZlcnNlOiB0aGlzLmludmVyc2UsXG4gICAgICBib3VuZGFyeUdhcDogdGhpcy5ib3VuZGFyeUdhcCxcbiAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICBtYXg6IHRoaXMubWF4LFxuICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICBtaW5JbnRlcnZhbDogdGhpcy5taW5JbnRlcnZhbCxcbiAgICAgIGludGVydmFsOiB0aGlzLmludGVydmFsLFxuICAgICAgbG9nQmFzZTogdGhpcy5sb2dCYXNlLFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICAgIHRyaWdnZXJFdmVudDogdGhpcy50cmlnZ2VyRXZlbnQsXG4gICAgICBheGlzTGluZTogdGhpcy5heGlzTGluZSxcbiAgICAgIGF4aXNUaWNrOiB0aGlzLmF4aXNUaWNrLFxuICAgICAgYXhpc0xhYmVsOiB0aGlzLmF4aXNMYWJlbCxcbiAgICAgIHNwbGl0TGluZTogdGhpcy5zcGxpdExpbmUsXG4gICAgICBzcGxpdEFyZWE6IHRoaXMuc3BsaXRBcmVhLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgYXhpc1BvaW50ZXI6IHRoaXMuYXhpc1BvaW50ZXIsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgIH0pO1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnNldEFycmF5T3B0aW9uKHRoaXMuX2F4aXNPcHRpb24sIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UuY2xlYXJPcHRpb24odGhpcy5fYXhpc09wdGlvbik7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGRYQXhpc1Bvc2l0aW9uICB9IGZyb20gJy4vYXhpcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGRDaGFydEF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQteC1heGlzJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFhBeGlzQ29tcG9uZW50IGV4dGVuZHMgVGRDaGFydEF4aXNDb21wb25lbnQge1xuXG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogVGRYQXhpc1Bvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3hBeGlzJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBUZFlBeGlzUG9zaXRpb24gIH0gZnJvbSAnLi9heGlzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUZENoYXJ0QXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC15LWF4aXMnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0WUF4aXNDb21wb25lbnQgZXh0ZW5kcyBUZENoYXJ0QXhpc0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCdwb3NpdGlvbicpIHBvc2l0aW9uOiBUZFlBeGlzUG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigneUF4aXMnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUZENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDaGFydFhBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzL3gtYXhpcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDaGFydFlBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzL3ktYXhpcy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQkFTRV9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRDb21wb25lbnQsXG4gIFRkQ2hhcnRYQXhpc0NvbXBvbmVudCxcbiAgVGRDaGFydFlBeGlzQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQkFTRV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJBU0VfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50QmFzZUVjaGFydHNNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQgeyBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMvYXNzaWduLWRlZmluZWQnO1xuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IElUZFNlcmllc1Rvb2x0aXAgfSBmcm9tICcuLi9zZXJpZXMvc2VyaWVzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJVGRBbmltYXRpb24gfSBmcm9tICcuLi9iYXNlLnR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRTZXJpZXM8VD4gZXh0ZW5kcyBJVGRBbmltYXRpb24ge1xuICBpZD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHR5cGU/OiBUO1xuXG4gIHRvb2x0aXA/OiBJVGRTZXJpZXNUb29sdGlwO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGRTZXJpZXNDb21wb25lbnQ8VCA9IGFueT4gaW1wbGVtZW50cyBJVGRTZXJpZXM8VD4sIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kgIHtcblxuICBwcml2YXRlIF90eXBlOiBUO1xuXG4gIGdldCB0eXBlKCk6IFQge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgX3N0YXRlOiBhbnkgPSB7fTtcbiAgX29wdGlvbnM6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZztcblxuICBASW5wdXQoJ2FuaW1hdGlvbicpIGFuaW1hdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCdhbmltYXRpb25UaHJlc2hvbGQnKSBhbmltYXRpb25UaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdhbmltYXRpb25EdXJhdGlvbicpIGFuaW1hdGlvbkR1cmF0aW9uOiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCdhbmltYXRpb25FYXNpbmcnKSBhbmltYXRpb25FYXNpbmc6IHN0cmluZztcbiAgQElucHV0KCdhbmltYXRpb25EZWxheScpIGFuaW1hdGlvbkRlbGF5OiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCdhbmltYXRpb25EdXJhdGlvblVwZGF0ZScpIGFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlOiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCdhbmltYXRpb25FYXNpbmdVcGRhdGUnKSBhbmltYXRpb25FYXNpbmdVcGRhdGU6IHN0cmluZztcbiAgQElucHV0KCdhbmltYXRpb25EZWxheVVwZGF0ZScpIGFuaW1hdGlvbkRlbGF5VXBkYXRlOiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCd0b29sdGlwJykgdG9vbHRpcDogSVRkU2VyaWVzVG9vbHRpcDtcblxuICBjb25zdHJ1Y3Rvcih0eXBlOiBULCBwcm90ZWN0ZWQgb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cbiAgXG4gIHNldFN0YXRlT3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgcmVtb3ZlU3RhdGVPcHRpb24ob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zW29wdGlvbl0gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0Q29uZmlnKCk6IGFueTtcblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwgdGhpcy5nZXRDb25maWcoKSwgdGhpcy5fb3B0aW9ucyk7XG4gICAgdGhpcy5vcHRpb25zU2VydmljZS5zZXRBcnJheU9wdGlvbignc2VyaWVzJywgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSB0aGlzLmdldENvbmZpZygpO1xuICAgIHRoaXMub3B0aW9uc1NlcnZpY2UucmVtb3ZlQXJyYXlPcHRpb24oJ3NlcmllcycsIGNvbmZpZyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBUZENvb3JkaW5hdGVTeXN0ZW0sXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkRW1waGFzaXMsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBJVGRTZXJpZXMsXG4gIElUZExhYmVsLFxuICBUZFByb2dyZXNzaXZlQ2h1bmtNb2RlLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQmFyU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdiYXInPiB7XG4gIGxlZ2VuZEhvdmVyTGluaz86IGJvb2xlYW47XG4gIGNvb3JkaW5hdGVTeXN0ZW0/OiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIHhBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHlBeGlzSW5kZXg/OiBudW1iZXI7XG4gIExhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgc3RhY2s/OiBzdHJpbmc7XG4gIGN1cnNvcj86IHN0cmluZztcbiAgYmFyV2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG4gIGJhck1heFdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBiYXJNaW5IZWlnaHQ/OiBudW1iZXI7XG4gIGJhckdhcD86IHN0cmluZztcbiAgYmFyQ2F0ZWdvcnlHYXA/OiBzdHJpbmc7XG4gIGxhcmdlPzogYm9vbGVhbjtcbiAgbGFyZ2VUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIHByb2dyZXNzaXZlPzogbnVtYmVyO1xuICBwcm9ncmVzc2l2ZVRocmVzaG9sZD86IG51bWJlcjtcbiAgcHJvZ3Jlc3NpdmVDaHVua01vZGU/OiBUZFByb2dyZXNzaXZlQ2h1bmtNb2RlO1xuICBkaW1lbnNpb25zPzogYW55W107XG4gIGVuY29kZT86IGFueTtcbiAgc2VyaWVzTGF5b3V0Qnk/OiBUZFNlcmllc0xheW91dEJ5O1xuICBkYXRhc2V0SW5kZXg/OiBudW1iZXI7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICBabGV2ZWw/OiAwO1xuICB6PzogbnVtYmVyO1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtYmFyXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc0JhckNvbXBvbmVudCksXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzQmFyQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J2Jhcic+IGltcGxlbWVudHMgSVRkQmFyU2VyaWVzIHtcblxuICBASW5wdXQoJ2Nvb3JkaW5hdGVTeXN0ZW0nKSBjb29yZGluYXRlU3lzdGVtOiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIEBJbnB1dCgneEF4aXNJbmRleCcpIHhBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCd5QXhpc0luZGV4JykgeUF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2xlZ2VuZEhvdmVyTGluaycpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCdzdGFjaycpIHN0YWNrOiBzdHJpbmc7XG4gIEBJbnB1dCgnY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogYW55O1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuICBASW5wdXQoJ2JhcldpZHRoJykgYmFyV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCdiYXJNYXhXaWR0aCcpIGJhck1heFdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgnYmFyTWluSGVpZ2h0JykgYmFyTWluSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgnYmFyR2FwJykgYmFyR2FwOiBzdHJpbmc7XG4gIEBJbnB1dCgnYmFyQ2F0ZWdvcnlHYXAnKSBiYXJDYXRlZ29yeUdhcDogc3RyaW5nO1xuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IGJvb2xlYW47XG4gIEBJbnB1dCgnbGFyZ2VUaHJlc2hvbGQnKSBsYXJnZVRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoJ3Byb2dyZXNzaXZlJykgcHJvZ3Jlc3NpdmU6IG51bWJlcjtcbiAgQElucHV0KCdwcm9ncmVzc2l2ZVRocmVzaG9sZCcpIHByb2dyZXNzaXZlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmVDaHVua01vZGUnKSBwcm9ncmVzc2l2ZUNodW5rTW9kZTogVGRQcm9ncmVzc2l2ZUNodW5rTW9kZTtcbiAgQElucHV0KCdkaW1lbnNpb25zJykgZGltZW5zaW9uczogYW55W107XG4gIEBJbnB1dCgnZW5jb2RlJykgZW5jb2RlOiBhbnk7XG4gIEBJbnB1dCgnc2VyaWVzTGF5b3V0QnknKSBzZXJpZXNMYXlvdXRCeTogVGRTZXJpZXNMYXlvdXRCeTtcbiAgQElucHV0KCdkYXRhc2V0SW5kZXgnKSBkYXRhc2V0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdkYXRhJykgZGF0YTogYW55W107XG4gIEBJbnB1dCgnbWFya1BvaW50JykgbWFya1BvaW50OiBJVGRNYXJrUG9pbnQ7XG4gIEBJbnB1dCgnbWFya0xpbmUnKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgnbWFya0FyZWEnKSBtYXJrQXJlYTogSVRkTWFya0FyZWE7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdiYXInLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBjb29yZGluYXRlU3lzdGVtOiB0aGlzLmNvb3JkaW5hdGVTeXN0ZW0sXG4gICAgICB4QXhpc0luZGV4OiB0aGlzLnhBeGlzSW5kZXgsXG4gICAgICB5QXhpc0luZGV4OiB0aGlzLnlBeGlzSW5kZXgsXG4gICAgICBsZWdlbmRIb3Zlckxpbms6IHRoaXMubGVnZW5kSG92ZXJMaW5rLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICBjdXJzb3I6IHRoaXMuY3Vyc29yLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBiYXJXaWR0aDogdGhpcy5iYXJXaWR0aCxcbiAgICAgIGJhck1heFdpZHRoOiB0aGlzLmJhck1heFdpZHRoLFxuICAgICAgYmFyTWluSGVpZ2h0OiB0aGlzLmJhck1pbkhlaWdodCxcbiAgICAgIGJhckdhcDogdGhpcy5iYXJHYXAsXG4gICAgICBiYXJDYXRlZ29yeUdhcDogdGhpcy5iYXJDYXRlZ29yeUdhcCxcbiAgICAgIGxhcmdlOiB0aGlzLmxhcmdlLFxuICAgICAgbGFyZ2VUaHJlc2hvbGQ6IHRoaXMubGFyZ2VUaHJlc2hvbGQsXG4gICAgICBwcm9ncmVzc2l2ZTogdGhpcy5wcm9ncmVzc2l2ZSxcbiAgICAgIHByb2dyZXNzaXZlVGhyZXNob2xkOiB0aGlzLnByb2dyZXNzaXZlVGhyZXNob2xkLFxuICAgICAgcHJvZ3Jlc3NpdmVDaHVua01vZGU6IHRoaXMucHJvZ3Jlc3NpdmVDaHVua01vZGUsXG4gICAgICBkaW1lbnNpb25zOiB0aGlzLmRpbWVuc2lvbnMsXG4gICAgICBlbmNvZGU6IHRoaXMuZW5jb2RlLFxuICAgICAgc2VyaWVzTGF5b3V0Qnk6IHRoaXMuc2VyaWVzTGF5b3V0QnksXG4gICAgICBkYXRhc2V0SW5kZXg6IHRoaXMuZGF0YXNldEluZGV4LFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgbWFya1BvaW50OiB0aGlzLm1hcmtQb2ludCxcbiAgICAgIG1hcmtMaW5lOiB0aGlzLm1hcmtMaW5lLFxuICAgICAgbWFya0FyZWE6IHRoaXMubWFya0FyZWEsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgYW5pbWF0aW9uOiB0aGlzLmFuaW1hdGlvbixcbiAgICAgIGFuaW1hdGlvblRocmVzaG9sZDogdGhpcy5hbmltYXRpb25UaHJlc2hvbGQsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogdGhpcy5hbmltYXRpb25EdXJhdGlvbixcbiAgICAgIGFuaW1hdGlvbkVhc2luZzogdGhpcy5hbmltYXRpb25FYXNpbmcsXG4gICAgICBhbmltYXRpb25EZWxheTogdGhpcy5hbmltYXRpb25EZWxheSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlOiB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlLFxuICAgICAgYW5pbWF0aW9uRWFzaW5nVXBkYXRlOiB0aGlzLmFuaW1hdGlvbkVhc2luZ1VwZGF0ZSxcbiAgICAgIGFuaW1hdGlvbkRlbGF5VXBkYXRlOiB0aGlzLmFuaW1hdGlvbkRlbGF5VXBkYXRlLFxuICAgICAgdG9vbHRpcDogdGhpcy50b29sdGlwLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgJ2VjaGFydHMvbGliL2NoYXJ0L2Jhcic7XG5cbmltcG9ydCB7IFRkQ2hhcnRTZXJpZXNCYXJDb21wb25lbnQgfSBmcm9tICcuL2Jhci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQkFSX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydFNlcmllc0JhckNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJBUl9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJBUl9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRCYXJFY2hhcnRzTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBUZENvb3JkaW5hdGVTeXN0ZW0sXG4gIFRkTWFya1BvaW50U3ltYm9sLFxuICBJVGRMYWJlbCxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRMaW5lU3R5bGUsXG4gIElUZEFyZWFTdHlsZSxcbiAgVGRTZXJpZXNMYXlvdXRCeSxcbiAgSVRkTWFya1BvaW50LFxuICBJVGRNYXJrTGluZSxcbiAgSVRkTWFya0FyZWEsXG4gIElUZEVtcGhhc2lzLFxuICBJVGRTZXJpZXMsXG4gIElUZFNoYWRvdyxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgdHlwZSBUZFNhbXBsaW5nID0gJ2F2ZXJhZ2UnIHwgJ21heCcgfCAnbWluJyB8ICdzdW0nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZExpbmVTZXJpZXMgZXh0ZW5kcyBJVGRTZXJpZXM8J2xpbmUnPiwgSVRkU2hhZG93IHtcbiAgY29vcmRpbmF0ZVN5c3RlbT86IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgeEF4aXNJbmRleD86IG51bWJlcjtcbiAgeUF4aXNJbmRleD86IG51bWJlcjtcbiAgcG9sYXJJbmRleD86IG51bWJlcjtcbiAgc3ltYm9sPzogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIHN5bWJvbFNpemU/OiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBzeW1ib2xSb3RhdGU/OiBudW1iZXI7XG4gIHN5bWJvbEtlZXBBc3BlY3Q/OiBib29sZWFuO1xuICBzeW1ib2xPZmZzZXQ/OiBhbnlbXTtcbiAgc2hvd1N5bWJvbD86IGJvb2xlYW47XG4gIHNob3dBbGxTeW1ib2w/OiBib29sZWFuIHwgJ2F1dG8nO1xuICBob3ZlckFuaW1hdGlvbj86IGJvb2xlYW47XG4gIGxlZ2VuZEhvdmVyTGluaz86IGJvb2xlYW47XG4gIHN0YWNrPzogc3RyaW5nO1xuICBjdXJzb3I/OiBzdHJpbmc7XG4gIGNvbm5lY3ROdWxscz86IGJvb2xlYW47XG4gIGNsaXBPdmVyZmxvdz86IGJvb2xlYW47XG4gIHN0ZXA/OiBzdHJpbmcgfCBib29sZWFuO1xuICBsYWJlbD86IElUZExhYmVsO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGxpbmVTdHlsZT86IElUZExpbmVTdHlsZTtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIGFyZWFTdHlsZT86IElUZEFyZWFTdHlsZTtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgc21vb3RoPzogYm9vbGVhbiB8IG51bWJlcjtcbiAgc21vb3RoTW9ub3RvbmU/OiBzdHJpbmc7XG4gIHNhbXBsaW5nPzogVGRTYW1wbGluZztcbiAgZGltZW5zaW9ucz86IGFueVtdO1xuICBlbmNvZGU/OiBhbnk7XG4gIHNlcmllc0xheW91dEJ5PzogVGRTZXJpZXNMYXlvdXRCeTtcbiAgZGF0YXNldEluZGV4PzogbnVtYmVyO1xuICBkYXRhPzogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgemxldmVsPzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtbGluZV0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNMaW5lQ29tcG9uZW50KSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNMaW5lQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J2xpbmUnPiBpbXBsZW1lbnRzIElUZExpbmVTZXJpZXMge1xuXG4gIEBJbnB1dCgnY29vcmRpbmF0ZVN5c3RlbScpIGNvb3JkaW5hdGVTeXN0ZW06IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgQElucHV0KCd4QXhpc0luZGV4JykgeEF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3lBeGlzSW5kZXgnKSB5QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgncG9sYXJJbmRleCcpIHBvbGFySW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdzeW1ib2wnKSBzeW1ib2w6IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBASW5wdXQoJ3N5bWJvbFNpemUnKSBzeW1ib2xTaXplOiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ3N5bWJvbFJvdGF0ZScpIHN5bWJvbFJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ3N5bWJvbEtlZXBBc3BlY3QnKSBzeW1ib2xLZWVwQXNwZWN0OiBib29sZWFuO1xuICBASW5wdXQoJ3N5bWJvbE9mZnNldCcpIHN5bWJvbE9mZnNldDogYW55W107XG4gIEBJbnB1dCgnc2hvd1N5bWJvbCcpIHNob3dTeW1ib2w6IGJvb2xlYW47XG4gIEBJbnB1dCgnc2hvd0FsbFN5bWJvbCcpIHNob3dBbGxTeW1ib2w6IGJvb2xlYW47XG4gIEBJbnB1dCgnaG92ZXJBbmltYXRpb24nKSBob3ZlckFuaW1hdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCdsZWdlbmRIb3ZlckxpbmsnKSBsZWdlbmRIb3Zlckxpbms6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3RhY2snKSBzdGFjazogc3RyaW5nO1xuICBASW5wdXQoJ2N1cnNvcicpIGN1cnNvcjogc3RyaW5nO1xuICBASW5wdXQoJ2Nvbm5lY3ROdWxscycpIGNvbm5lY3ROdWxsczogYm9vbGVhbjtcbiAgQElucHV0KCdjbGlwT3ZlcmZsb3cnKSBjbGlwT3ZlcmZsb3c6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3RlcCcpIHN0ZXA6IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgnbGluZVN0eWxlJykgbGluZVN0eWxlOiBJVGRMaW5lU3R5bGU7XG4gIEBJbnB1dCgnYXJlYVN0eWxlJykgYXJlYVN0eWxlOiBJVGRBcmVhU3R5bGU7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgnc21vb3RoJykgc21vb3RoOiBib29sZWFuIHwgbnVtYmVyO1xuICBASW5wdXQoJ3Ntb290aE1vbm90b25lJykgc21vb3RoTW9ub3RvbmU6IHN0cmluZztcbiAgQElucHV0KCdzYW1wbGluZycpIHNhbXBsaW5nOiBUZFNhbXBsaW5nO1xuICBASW5wdXQoJ2RpbWVuc2lvbnMnKSBkaW1lbnNpb25zOiBhbnlbXTtcbiAgQElucHV0KCdlbmNvZGUnKSBlbmNvZGU6IGFueTtcbiAgQElucHV0KCdzZXJpZXNMYXlvdXRCeScpIHNlcmllc0xheW91dEJ5OiBUZFNlcmllc0xheW91dEJ5O1xuICBASW5wdXQoJ2RhdGFzZXRJbmRleCcpIGRhdGFzZXRJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2RhdGEnKSBkYXRhOiBhbnlbXTtcbiAgQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbiAgQElucHV0KCdtYXJrTGluZScpIG1hcmtMaW5lOiBJVGRNYXJrTGluZTtcbiAgQElucHV0KCdtYXJrQXJlYScpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdsaW5lJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogdGhpcy5jb29yZGluYXRlU3lzdGVtLFxuICAgICAgeEF4aXNJbmRleDogdGhpcy54QXhpc0luZGV4LFxuICAgICAgeUF4aXNJbmRleDogdGhpcy55QXhpc0luZGV4LFxuICAgICAgcG9sYXJJbmRleDogdGhpcy5wb2xhckluZGV4LFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgIHN5bWJvbFNpemU6IHRoaXMuc3ltYm9sU2l6ZSxcbiAgICAgIHN5bWJvbFJvdGF0ZTogdGhpcy5zeW1ib2xSb3RhdGUsXG4gICAgICBzeW1ib2xLZWVwQXNwZWN0OiB0aGlzLnN5bWJvbEtlZXBBc3BlY3QsXG4gICAgICBzeW1ib2xPZmZzZXQ6IHRoaXMuc3ltYm9sT2Zmc2V0LFxuICAgICAgc2hvd1N5bWJvbDogdGhpcy5zaG93U3ltYm9sLFxuICAgICAgc2hvd0FsbFN5bWJvbDogdGhpcy5zaG93QWxsU3ltYm9sLFxuICAgICAgaG92ZXJBbmltYXRpb246IHRoaXMuaG92ZXJBbmltYXRpb24sXG4gICAgICBsZWdlbmRIb3Zlckxpbms6IHRoaXMubGVnZW5kSG92ZXJMaW5rLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICBjdXJzb3I6IHRoaXMuY3Vyc29yLFxuICAgICAgY29ubmVjdE51bGxzOiB0aGlzLmNvbm5lY3ROdWxscyxcbiAgICAgIGNsaXBPdmVyZmxvdzogdGhpcy5jbGlwT3ZlcmZsb3csXG4gICAgICBzdGVwOiB0aGlzLnN0ZXAsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBsaW5lU3R5bGU6IHRoaXMubGluZVN0eWxlLFxuICAgICAgYXJlYVN0eWxlOiB0aGlzLmFyZWFTdHlsZSxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgICAgc21vb3RoOiB0aGlzLnNtb290aCxcbiAgICAgIHNtb290aE1vbm90b25lOiB0aGlzLnNtb290aE1vbm90b25lLFxuICAgICAgc2FtcGxpbmc6IHRoaXMuc2FtcGxpbmcsXG4gICAgICBkaW1lbnNpb25zOiB0aGlzLmRpbWVuc2lvbnMsXG4gICAgICBlbmNvZGU6IHRoaXMuZW5jb2RlLFxuICAgICAgc2VyaWVzTGF5b3V0Qnk6IHRoaXMuc2VyaWVzTGF5b3V0QnksXG4gICAgICBkYXRhc2V0SW5kZXg6IHRoaXMuZGF0YXNldEluZGV4LFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgbWFya1BvaW50OiB0aGlzLm1hcmtQb2ludCxcbiAgICAgIG1hcmtMaW5lOiB0aGlzLm1hcmtMaW5lLFxuICAgICAgbWFya0FyZWE6IHRoaXMubWFya0FyZWEsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICAgIGFuaW1hdGlvbjogdGhpcy5hbmltYXRpb24sXG4gICAgICBhbmltYXRpb25UaHJlc2hvbGQ6IHRoaXMuYW5pbWF0aW9uVGhyZXNob2xkLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHRoaXMuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBhbmltYXRpb25FYXNpbmc6IHRoaXMuYW5pbWF0aW9uRWFzaW5nLFxuICAgICAgYW5pbWF0aW9uRGVsYXk6IHRoaXMuYW5pbWF0aW9uRGVsYXksXG4gICAgICBhbmltYXRpb25EdXJhdGlvblVwZGF0ZTogdGhpcy5hbmltYXRpb25EdXJhdGlvblVwZGF0ZSxcbiAgICAgIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZTogdGhpcy5hbmltYXRpb25FYXNpbmdVcGRhdGUsXG4gICAgICBhbmltYXRpb25EZWxheVVwZGF0ZTogdGhpcy5hbmltYXRpb25EZWxheVVwZGF0ZSxcbiAgICAgIHRvb2x0aXA6IHRoaXMudG9vbHRpcCxcbiAgICB9O1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgJ2VjaGFydHMvbGliL2NoYXJ0L2xpbmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0U2VyaWVzTGluZUNvbXBvbmVudCB9IGZyb20gJy4vbGluZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgTElORV9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRTZXJpZXNMaW5lQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTElORV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIExJTkVfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50TGluZUVjaGFydHNNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFxuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIFRkQ29vcmRpbmF0ZVN5c3RlbSxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRMYWJlbCxcbiAgSVRkRW1waGFzaXMsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG4gIElUZFNlcmllcyxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2NhdHRlclNlcmllcyBleHRlbmRzIElUZFNlcmllczwnc2NhdHRlcic+IHtcbiAgY29vcmRpbmF0ZVN5c3RlbT86IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgeEF4aXNJbmRleD86IG51bWJlcjtcbiAgeUF4aXNJbmRleD86IG51bWJlcjtcbiAgcG9sYXJJbmRleD86IG51bWJlcjtcbiAgZ2VvSW5kZXg/OiBudW1iZXI7XG4gIGNhbGVuZGFySW5kZXg/OiBudW1iZXI7XG4gIGhvdmVyQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgbGVnZW5kSG92ZXJMaW5rPzogYm9vbGVhbjtcbiAgc3ltYm9sPzogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIHN5bWJvbFNpemU/OiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBzeW1ib2xSb3RhdGU/OiBudW1iZXI7XG4gIHN5bWJvbEtlZXBBc3BlY3Q/OiBib29sZWFuO1xuICBzeW1ib2xPZmZzZXQ/OiBhbnlbXTtcbiAgbGFyZ2U/OiBib29sZWFuO1xuICBsYXJnZVRocmVzaG9sZD86IG51bWJlcjtcbiAgY3Vyc29yPzogc3RyaW5nO1xuICBjb25uZWN0TnVsbHM/OiBib29sZWFuO1xuICBjbGlwT3ZlcmZsb3c/OiBib29sZWFuO1xuICBzdGVwPzogYm9vbGVhbjtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgaXRlbVN0eWxlPzogYW55O1xuICBlbXBoYXNpcz86IElUZEVtcGhhc2lzO1xuICBwcm9ncmVzc2l2ZT86IG51bWJlcjtcbiAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIGRpbWVuc2lvbnM/OiBhbnlbXTtcbiAgZW5jb2RlPzogYW55O1xuICBzZXJpZXNMYXlvdXRCeT86IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIGRhdGFzZXRJbmRleD86IG51bWJlcjtcbiAgZGF0YT86IGFueVtdO1xuICBtYXJrUG9pbnQ/OiBJVGRNYXJrUG9pbnQ7XG4gIG1hcmtMaW5lPzogSVRkTWFya0xpbmU7XG4gIG1hcmtBcmVhPzogSVRkTWFya0FyZWE7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cbiAgXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtc2NhdHRlcl0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNTY2F0dGVyQ29tcG9uZW50KSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNTY2F0dGVyQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J3NjYXR0ZXInPiBpbXBsZW1lbnRzIElUZFNjYXR0ZXJTZXJpZXMge1xuXG4gIEBJbnB1dCgnY29vcmRpbmF0ZVN5c3RlbScpIGNvb3JkaW5hdGVTeXN0ZW06IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgQElucHV0KCd4QXhpc0luZGV4JykgeEF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3lBeGlzSW5kZXgnKSB5QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgncG9sYXJJbmRleCcpIHBvbGFySW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdnZW9JbmRleCcpIGdlb0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnY2FsZW5kYXJJbmRleCcpIGNhbGVuZGFySW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdob3ZlckFuaW1hdGlvbicpIGhvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoJ2xlZ2VuZEhvdmVyTGluaycpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCdzeW1ib2wnKSBzeW1ib2w6IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBASW5wdXQoJ3N5bWJvbFNpemUnKSBzeW1ib2xTaXplOiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ3N5bWJvbFJvdGF0ZScpIHN5bWJvbFJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ3N5bWJvbEtlZXBBc3BlY3QnKSBzeW1ib2xLZWVwQXNwZWN0OiBib29sZWFuO1xuICBASW5wdXQoJ3N5bWJvbE9mZnNldCcpIHN5bWJvbE9mZnNldDogYW55W107XG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogYm9vbGVhbjtcbiAgQElucHV0KCdsYXJnZVRocmVzaG9sZCcpIGxhcmdlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgnY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmUnKSBwcm9ncmVzc2l2ZTogbnVtYmVyO1xuICBASW5wdXQoJ3Byb2dyZXNzaXZlVGhyZXNob2xkJykgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdkaW1lbnNpb25zJykgZGltZW5zaW9uczogYW55W107XG4gIEBJbnB1dCgnZW5jb2RlJykgZW5jb2RlOiBhbnk7XG4gIEBJbnB1dCgnc2VyaWVzTGF5b3V0QnknKSBzZXJpZXNMYXlvdXRCeTogVGRTZXJpZXNMYXlvdXRCeTtcbiAgQElucHV0KCdkYXRhc2V0SW5kZXgnKSBkYXRhc2V0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdkYXRhJykgZGF0YTogYW55W107XG4gIEBJbnB1dCgnbWFya1BvaW50JykgbWFya1BvaW50OiBJVGRNYXJrUG9pbnQ7XG4gIEBJbnB1dCgnbWFya0xpbmUnKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgnbWFya0FyZWEnKSBtYXJrQXJlYTogSVRkTWFya0FyZWE7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcbiAgQElucHV0KCdzaWxlbnQnKSBzaWxlbnQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcignc2NhdHRlcicsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgIGNvb3JkaW5hdGVTeXN0ZW06IHRoaXMuY29vcmRpbmF0ZVN5c3RlbSxcbiAgICAgIHhBeGlzSW5kZXg6IHRoaXMueEF4aXNJbmRleCxcbiAgICAgIHlBeGlzSW5kZXg6IHRoaXMueUF4aXNJbmRleCxcbiAgICAgIHBvbGFySW5kZXg6IHRoaXMucG9sYXJJbmRleCxcbiAgICAgIGdlb0luZGV4OiB0aGlzLmdlb0luZGV4LFxuICAgICAgY2FsZW5kYXJJbmRleDogdGhpcy5jYWxlbmRhckluZGV4LFxuICAgICAgaG92ZXJBbmltYXRpb246IHRoaXMuaG92ZXJBbmltYXRpb24sXG4gICAgICBsZWdlbmRIb3Zlckxpbms6IHRoaXMubGVnZW5kSG92ZXJMaW5rLFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgIHN5bWJvbFNpemU6IHRoaXMuc3ltYm9sU2l6ZSxcbiAgICAgIHN5bWJvbFJvdGF0ZTogdGhpcy5zeW1ib2xSb3RhdGUsXG4gICAgICBzeW1ib2xLZWVwQXNwZWN0OiB0aGlzLnN5bWJvbEtlZXBBc3BlY3QsXG4gICAgICBzeW1ib2xPZmZzZXQ6IHRoaXMuc3ltYm9sT2Zmc2V0LFxuICAgICAgbGFyZ2U6IHRoaXMubGFyZ2UsXG4gICAgICBsYXJnZVRocmVzaG9sZDogdGhpcy5sYXJnZVRocmVzaG9sZCxcbiAgICAgIGN1cnNvcjogdGhpcy5jdXJzb3IsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIHByb2dyZXNzaXZlOiB0aGlzLnByb2dyZXNzaXZlLFxuICAgICAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ6IHRoaXMucHJvZ3Jlc3NpdmVUaHJlc2hvbGQsXG4gICAgICBkaW1lbnNpb25zOiB0aGlzLmRpbWVuc2lvbnMsXG4gICAgICBlbmNvZGU6IHRoaXMuZW5jb2RlLFxuICAgICAgc2VyaWVzTGF5b3V0Qnk6IHRoaXMuc2VyaWVzTGF5b3V0QnksXG4gICAgICBkYXRhc2V0SW5kZXg6IHRoaXMuZGF0YXNldEluZGV4LFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgbWFya1BvaW50OiB0aGlzLm1hcmtQb2ludCxcbiAgICAgIG1hcmtMaW5lOiB0aGlzLm1hcmtMaW5lLFxuICAgICAgbWFya0FyZWE6IHRoaXMubWFya0FyZWEsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICAgIGFuaW1hdGlvbjogdGhpcy5hbmltYXRpb24sXG4gICAgICBhbmltYXRpb25UaHJlc2hvbGQ6IHRoaXMuYW5pbWF0aW9uVGhyZXNob2xkLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHRoaXMuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBhbmltYXRpb25FYXNpbmc6IHRoaXMuYW5pbWF0aW9uRWFzaW5nLFxuICAgICAgYW5pbWF0aW9uRGVsYXk6IHRoaXMuYW5pbWF0aW9uRGVsYXksXG4gICAgICBhbmltYXRpb25EdXJhdGlvblVwZGF0ZTogdGhpcy5hbmltYXRpb25EdXJhdGlvblVwZGF0ZSxcbiAgICAgIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZTogdGhpcy5hbmltYXRpb25FYXNpbmdVcGRhdGUsXG4gICAgICBhbmltYXRpb25EZWxheVVwZGF0ZTogdGhpcy5hbmltYXRpb25EZWxheVVwZGF0ZSxcbiAgICAgIHRvb2x0aXA6IHRoaXMudG9vbHRpcCxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jaGFydC9zY2F0dGVyJztcblxuaW1wb3J0IHsgVGRDaGFydFNlcmllc1NjYXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL3NjYXR0ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFNDQVRURVJfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0U2VyaWVzU2NhdHRlckNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNDQVRURVJfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTQ0FUVEVSX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFNjYXR0ZXJFY2hhcnRzTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkNoYW5nZXMsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgYXNzaWduRGVmaW5lZCxcbiAgVGRUb29sdGlwVHJpZ2dlcixcbiAgVGRUb29sdGlwVHJpZ2dlck9uLFxuICBUZFRvb2x0aXBQb3NpdGlvbixcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBUZFRvb2x0aXBDb250ZXh0IHtcbiAgJGltcGxpY2l0OiBhbnk7XG4gIHRpY2tldDogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVt0ZFRvb2x0aXBGb3JtYXR0ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUge1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcblxuICBfY29udGV4dDogVGRUb29sdGlwQ29udGV4dCA9IG5ldyBUZFRvb2x0aXBDb250ZXh0KCk7XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ3RyaWdnZXInKSB0cmlnZ2VyOiBUZFRvb2x0aXBUcmlnZ2VyID0gICdheGlzJztcbiAgQElucHV0KCdheGlzUG9pbnRlcicpIGF4aXNQb2ludGVyOiBhbnk7XG4gIEBJbnB1dCgnc2hvd0NvbnRlbnQnKSBzaG93Q29udGVudDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnYWx3YXlzU2hvd0NvbnRlbnQnKSBhbHdheXNTaG93Q29udGVudDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3RyaWdnZXJPbicpIHRyaWdnZXJPbjogVGRUb29sdGlwVHJpZ2dlck9uID0gJ21vdXNlbW92ZXxjbGljayc7XG4gIEBJbnB1dCgnc2hvd0RlbGF5Jykgc2hvd0RlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ2hpZGVEZWxheScpIGhpZGVEZWxheTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdlbnRlcmFibGUnKSBlbnRlcmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCdyZW5kZXJNb2RlJykgcmVuZGVyTW9kZTogJ2h0bWwnIHwgJ3JpY2hUZXh0JztcbiAgQElucHV0KCdjb25maW5lJykgY29uZmluZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3RyYW5zaXRpb25EdXJhdGlvbicpIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyID0gMC41O1xuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IFRkVG9vbHRpcFBvc2l0aW9uOyAvLyBzZXJpZXNcbiAgQElucHV0KCdmb3JtYXR0ZXInKSBmb3JtYXR0ZXI6IHN0cmluZyB8IEZ1bmN0aW9uOyAvLyBzZXJpZXNcbiAgQElucHV0KCdiYWNrZ3JvdW5kQ29sb3InKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICdyZ2JhKDUwLDUwLDUwLDAuNyknOyAvLyBzZXJpZXNcbiAgQElucHV0KCdib3JkZXJDb2xvcicpIGJvcmRlckNvbG9yOiBzdHJpbmcgPSAnIzMzMyc7IC8vIHNlcmllc1xuICBASW5wdXQoJ2JvcmRlcldpZHRoJykgYm9yZGVyV2lkdGg6IG51bWJlciA9IDA7IC8vIHNlcmllc1xuICBASW5wdXQoJ3BhZGRpbmcnKSBwYWRkaW5nOiBudW1iZXIgPSA1OyAvLyBzZXJpZXNcbiAgQElucHV0KCd0ZXh0U3R5bGUnKSB0ZXh0U3R5bGU6IGFueSA9IHsgLy8gc2VyaWVzXG4gICAgY29sb3I6ICcjRkZGJyxcbiAgfTtcbiAgQElucHV0KCdleHRyYUNzc1RleHQnKSBleHRyYUNzc1RleHQ6IHN0cmluZzsgLy8gc2VyaWVzXG5cbiAgQENvbnRlbnRDaGlsZChUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwge3JlYWQ6IFRlbXBsYXRlUmVmfSkgZm9ybWF0dGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXBDb250ZW50JykgZnVsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwge1xuICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgdHJpZ2dlcjogdGhpcy50cmlnZ2VyLFxuICAgICAgYXhpc1BvaW50ZXI6IHRoaXMuYXhpc1BvaW50ZXIsXG4gICAgICBzaG93Q29udGVudDogdGhpcy5zaG93Q29udGVudCxcbiAgICAgIGFsd2F5c1Nob3dDb250ZW50OiB0aGlzLmFsd2F5c1Nob3dDb250ZW50LFxuICAgICAgdHJpZ2dlck9uOiB0aGlzLnRyaWdnZXJPbixcbiAgICAgIHNob3dEZWxheTogdGhpcy5zaG93RGVsYXksXG4gICAgICBoaWRlRGVsYXk6IHRoaXMuaGlkZURlbGF5LFxuICAgICAgZW50ZXJhYmxlOiB0aGlzLmVudGVyYWJsZSxcbiAgICAgIGNvbmZpbmU6IHRoaXMuY29uZmluZSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIGZvcm1hdHRlcjogdGhpcy5mb3JtYXR0ZXIgPyB0aGlzLmZvcm1hdHRlciA6IHRoaXMuX2Zvcm1hdHRlcigpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGJvcmRlckNvbG9yOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuYm9yZGVyV2lkdGgsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICB0ZXh0U3R5bGU6IHRoaXMudGV4dFN0eWxlLFxuICAgICAgZXh0cmFDc3NUZXh0OiB0aGlzLmV4dHJhQ3NzVGV4dCxcbiAgICB9KTtcbiAgICAvLyBzZXQgdG9vbHRpcCBjb25maWd1cmF0aW9uIGluIHBhcmVudCBjaGFydCBhbmQgcmVuZGVyIG5ldyBjb25maWd1cmF0aW9uc1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnNldE9wdGlvbigndG9vbHRpcCcsIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UuY2xlYXJPcHRpb24oJ3Rvb2x0aXAnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Zvcm1hdHRlcigpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIChwYXJhbXM6IGFueSwgdGlja2V0OiBhbnksIGNhbGxiYWNrOiAodGlja2V0OiBzdHJpbmcsIGh0bWw6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xuICAgICAgdGhpcy5fY29udGV4dCA9IHtcbiAgICAgICAgJGltcGxpY2l0OiBwYXJhbXMsXG4gICAgICAgIHRpY2tldDogdGlja2V0LFxuICAgICAgfTtcbiAgICAgIC8vIHRpbWVvdXQgc2V0IHNpbmNlIHdlIG5lZWQgdG8gc2V0IHRoZSBIVE1MIGF0IHRoZSBlbmQgb2YgdGhlIGFuZ3VsYXIgbGlmZWN5Y2xlIHdoZW5cbiAgICAgIC8vIHRoZSB0b29sdGlwIGRlbGF5IGlzIG1vcmUgdGhhbiAwXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2FsbGJhY2sodGlja2V0LCAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTDtcbiAgICB9O1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFxuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGFzc2lnbkRlZmluZWQsIFRkU2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlLCBUZFRvb2x0aXBDb250ZXh0IH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllcy10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRTZXJpZXNUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuXG4gIF9jb250ZXh0OiBUZFRvb2x0aXBDb250ZXh0ID0gbmV3IFRkVG9vbHRpcENvbnRleHQoKTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55O1xuXG4gIEBJbnB1dCgnZm9ybWF0dGVyJykgZm9ybWF0dGVyOiBhbnk7XG4gIC8vIFBhcmVudCB0b29sdGlwIHRyaWdnZXIgbXVzdCBiZSBzZXQgdG8gJ2l0ZW0nIHRvIHJlbmRlciB0aGVzZSBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogc3RyaW5nIHwgc3RyaW5nW10gfCBudW1iZXJbXTtcbiAgQElucHV0KCdiYWNrZ3JvdW5kQ29sb3InKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICdyZ2JhKDUwLDUwLDUwLDAuNyknO1xuICBASW5wdXQoJ2JvcmRlckNvbG9yJykgYm9yZGVyQ29sb3I6IHN0cmluZyA9ICcjMzMzJztcbiAgQElucHV0KCdib3JkZXJXaWR0aCcpIGJvcmRlcldpZHRoOiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ3BhZGRpbmcnKSBwYWRkaW5nOiBudW1iZXIgPSA1O1xuICBASW5wdXQoJ3RleHRTdHlsZScpIHRleHRTdHlsZTogYW55ID0ge1xuICAgIGNvbG9yOiAnI0ZGRicsXG4gIH07XG4gIEBJbnB1dCgnZXh0cmFDc3NUZXh0JykgZXh0cmFDc3NUZXh0OiBzdHJpbmc7XG5cbiAgQENvbnRlbnRDaGlsZChUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwge3JlYWQ6IFRlbXBsYXRlUmVmfSkgZm9ybWF0dGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXBDb250ZW50JykgZnVsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfc2VyaWVzQ29tcG9uZW50OiBUZFNlcmllc0NvbXBvbmVudCkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwge1xuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJXaWR0aDogdGhpcy5ib3JkZXJXaWR0aCxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHRleHRTdHlsZTogdGhpcy50ZXh0U3R5bGUsXG4gICAgICBleHRyYUNzc1RleHQ6IHRoaXMuZXh0cmFDc3NUZXh0LFxuICAgICAgZm9ybWF0dGVyOiB0aGlzLmZvcm1hdHRlciA/IHRoaXMuZm9ybWF0dGVyIDogdGhpcy5fZm9ybWF0dGVyKCksXG4gICAgfSk7XG4gICAgLy8gc2V0IHNlcmllcyB0b29sdGlwIGNvbmZpZ3VyYXRpb24gaW4gcGFyZW50IGNoYXJ0IGFuZCByZW5kZXIgbmV3IGNvbmZpZ3VyYXRpb25zXG4gICAgdGhpcy5fc2VyaWVzQ29tcG9uZW50LnNldFN0YXRlT3B0aW9uKCd0b29sdGlwJywgY29uZmlnKTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIEZvcm1hdHRlciBmb3IgdG9vbHRpcFxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBfZm9ybWF0dGVyKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKHBhcmFtczogYW55LCB0aWNrZXQ6IGFueSwgY2FsbGJhY2s6ICh0aWNrZXQ6IHN0cmluZywgaHRtbDogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLl9jb250ZXh0ID0ge1xuICAgICAgICAkaW1wbGljaXQ6IHBhcmFtcyxcbiAgICAgICAgdGlja2V0OiB0aWNrZXQsXG4gICAgICB9O1xuICAgICAgLy8gdGltZW91dCBzZXQgc2luY2Ugd2UgbmVlZCB0byBzZXQgdGhlIEhUTUwgYXQgdGhlIGVuZCBvZiB0aGUgYW5ndWxhciBsaWZlY3ljbGUgd2hlblxuICAgICAgLy8gdGhlIHRvb2x0aXAgZGVsYXkgaXMgbW9yZSB0aGFuIDBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayh0aWNrZXQsICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUwpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fc2VyaWVzQ29tcG9uZW50LnJlbW92ZVN0YXRlT3B0aW9uKCd0b29sdGlwJyk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCAnZWNoYXJ0cy9saWIvY29tcG9uZW50L3Rvb2x0aXAnO1xuXG5pbXBvcnQgeyBUZENoYXJ0VG9vbHRpcENvbXBvbmVudCwgVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcbmltcG9ydCB7IFRkU2VyaWVzVG9vbHRpcENvbXBvbmVudCB9IGZyb20gJy4vc2VyaWVzLXRvb2x0aXAuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFRPT0xUSVBfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0VG9vbHRpcENvbXBvbmVudCxcbiAgVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUsXG4gIFRkU2VyaWVzVG9vbHRpcENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRPT0xUSVBfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUT09MVElQX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFRvb2x0aXBFY2hhcnRzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkJlaGF2aW9yU3ViamVjdCIsIkluamVjdGFibGUiLCJPcHRpb25hbCIsIlNraXBTZWxmIiwidHNsaWJfMS5fX3ZhbHVlcyIsIlN1YmplY3QiLCJFdmVudEVtaXR0ZXIiLCJlY2hhcnRzLmluaXQiLCJmcm9tRXZlbnQiLCJlY2hhcnRzLmNvbm5lY3QiLCJtZXJnZSIsImRlYm91bmNlVGltZSIsImRpc3RpbmN0VW50aWxDaGFuZ2VkIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIk91dHB1dCIsInRzbGliXzEuX19leHRlbmRzIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJUZFNlcmllc0NvbXBvbmVudCIsImZvcndhcmRSZWYiLCJUZENoYXJ0T3B0aW9uc1NlcnZpY2UiLCJEaXJlY3RpdmUiLCJhc3NpZ25EZWZpbmVkIiwiQ29udGVudENoaWxkIiwiVGVtcGxhdGVSZWYiLCJWaWV3Q2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVNBO1lBR1UsYUFBUSxHQUFRLEVBQUUsQ0FBQztZQUNuQixvQkFBZSxHQUFpQixJQUFJQSxvQkFBZSxDQUFNLElBQUksQ0FBQyxRQUFRLENB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