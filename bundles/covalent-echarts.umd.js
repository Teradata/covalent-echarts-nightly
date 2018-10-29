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
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_d && !_d.done && (_b = _c.return))
                            _b.call(_c);
                    }
                    finally {
                        if (e_2)
                            throw e_2.error;
                    }
                }
            }
        }
        catch (e_1_1) {
            e_1 = { error: e_1_1 };
        }
        finally {
            try {
                if (sources_1_1 && !sources_1_1.done && (_a = sources_1.return))
                    _a.call(sources_1);
            }
            finally {
                if (e_1)
                    throw e_1.error;
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
            this._subs = [];
            this._widthSubject = new rxjs.Subject();
            this._heightSubject = new rxjs.Subject();
            this._state = {};
            this._options = {};
            this.config = {};
            this.click = new core.EventEmitter();
            this.dblclick = new core.EventEmitter();
            this.contextmenu = new core.EventEmitter();
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
                this._subs.push(rxjs.fromEvent(this._instance, 'click').subscribe(function (params) {
                    _this.click.next(params);
                }));
                this._subs.push(rxjs.fromEvent(this._instance, 'dblclick').subscribe(function (params) {
                    _this.dblclick.next(params);
                }));
                this._subs.push(rxjs.fromEvent(this._instance, 'contextmenu').subscribe(function (params) {
                    _this.contextmenu.next(params);
                }));
                if (this.group) {
                    this._instance.group = this.group;
                    echarts.connect(this.group);
                    this._changeDetectorRef.markForCheck();
                }
                this._subs.push(rxjs.merge(rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(100)), this._widthSubject.asObservable().pipe(operators.debounceTime(100)), this._heightSubject.asObservable().pipe(operators.debounceTime(100))).pipe(operators.debounceTime(100)).subscribe(function () {
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
            { type: core.Component, args: [{
                        selector: 'td-chart',
                        template: '',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [CHART_PROVIDER],
                        styles: [":host{display:block;width:100%}"]
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
            group: [{ type: core.Input, args: ['group',] }],
            click: [{ type: core.Output, args: ['click',] }],
            dblclick: [{ type: core.Output, args: ['dblclick',] }],
            contextmenu: [{ type: core.Output, args: ['contextmenu',] }]
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvY2hhcnQtb3B0aW9ucy5zZXJ2aWNlLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS91dGlscy9hc3NpZ24tZGVmaW5lZC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9jaGFydC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvYXhpcy9heGlzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9heGlzL3gtYXhpcy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvYXhpcy95LWF4aXMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL2Jhc2UubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL3Nlcmllcy9zZXJpZXMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXIvYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFyL2Jhci5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2xpbmUvbGluZS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2xpbmUvbGluZS5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3NjYXR0ZXIvc2NhdHRlci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3NjYXR0ZXIvc2NhdHRlci5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3Rvb2x0aXAvc2VyaWVzLXRvb2x0aXAuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sdGlwL3Rvb2x0aXAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIFByb3ZpZGVyLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRPcHRpb25zU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XG4gIHByaXZhdGUgX29wdGlvbnNTdWJqZWN0OiBTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odGhpcy5fb3B0aW9ucyk7XG5cbiAgc2V0T3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IG9wdGlvbnM6IGFueSA9IHt9O1xuICAgIG9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgdGhpcy5fb3B0aW9uc1N1YmplY3QubmV4dCh0aGlzLl9vcHRpb25zKTtcbiAgfVxuXG4gIHNldEFycmF5T3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBsZXQgcHJldlZhbHVlOiBhbnlbXSA9IHRoaXMuZ2V0T3B0aW9uKG9wdGlvbik7XG4gICAgaWYgKHByZXZWYWx1ZSkge1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBwcmV2VmFsdWUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICBpbmRleCA+IC0xID8gcHJldlZhbHVlW2luZGV4XSA9IHZhbHVlIDogcHJldlZhbHVlLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2VmFsdWUgPSBbdmFsdWVdO1xuICAgIH1cbiAgICB0aGlzLnNldE9wdGlvbihvcHRpb24sIHByZXZWYWx1ZSk7XG4gIH1cblxuICByZW1vdmVBcnJheU9wdGlvbihvcHRpb246IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSB7XG4gICAgbGV0IHByZXZWYWx1ZTogYW55W10gPSB0aGlzLmdldE9wdGlvbihvcHRpb24pO1xuICAgIGlmIChwcmV2VmFsdWUpIHtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gcHJldlZhbHVlLmluZGV4T2YodmFsdWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEgKSB7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICBwcmV2VmFsdWVbaW5kZXhdID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldE9wdGlvbihvcHRpb24sIHByZXZWYWx1ZSk7XG4gIH1cblxuICBnZXRPcHRpb24ob3B0aW9uOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnNbb3B0aW9uXTtcbiAgfVxuXG4gIGNsZWFyT3B0aW9uKG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgdGhpcy5zZXRPcHRpb24ob3B0aW9uLCBudWxsKTtcbiAgfVxuXG4gIGxpc3RlbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDSEFSVF9QUk9WSURFUl9GQUNUT1JZKFxuICBwYXJlbnQ6IFRkQ2hhcnRPcHRpb25zU2VydmljZSk6IFRkQ2hhcnRPcHRpb25zU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFRkQ2hhcnRPcHRpb25zU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgQ0hBUlRfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBUZENoYXJ0T3B0aW9uc1NlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogQ0hBUlRfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBhc3NpZ25EZWZpbmVkKHRhcmdldDogYW55LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueSB7XG4gIGZvciAoY29uc3Qgc291cmNlIG9mIHNvdXJjZXMpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhzb3VyY2UpKSB7XG4gICAgICBjb25zdCB2YWw6IGFueSA9IHNvdXJjZVtrZXldO1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsO1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgIH0gZWxzZSBpZiAodmFsID09PSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSB0YXJnZXRba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBEb0NoZWNrLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0LCBmcm9tRXZlbnQsIG1lcmdlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZWNoYXJ0cyBmcm9tICdlY2hhcnRzL2xpYi9lY2hhcnRzJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLCBDSEFSVF9QUk9WSURFUiB9IGZyb20gJy4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlVXJsczogWycuL2NoYXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtDSEFSVF9QUk9WSURFUl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIERvQ2hlY2ssIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX2hlaWdodFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBwcml2YXRlIF9pbnN0YW5jZTogYW55O1xuXG4gIGdldCBpbnN0YW5jZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnZ3JvdXAnKSBncm91cDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoJ2NsaWNrJykgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2RibGNsaWNrJykgZGJsY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2NvbnRleHRtZW51JykgY29udGV4dG1lbnU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5zdGFuY2UgPSBlY2hhcnRzLmluaXQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdjbGljaycpLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5jbGljay5uZXh0KHBhcmFtcyk7XG4gICAgICB9KSxcbiAgICApO1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2RibGNsaWNrJykuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmRibGNsaWNrLm5leHQocGFyYW1zKTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnY29udGV4dG1lbnUnKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuY29udGV4dG1lbnUubmV4dChwYXJhbXMpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgdGhpcy5faW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICAgICAgZWNoYXJ0cy5jb25uZWN0KHRoaXMuZ3JvdXApO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIG1lcmdlKFxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgICksXG4gICAgICAgIHRoaXMuX2hlaWdodFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgKSxcbiAgICAgICkucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luc3RhbmNlLnJlc2l6ZSgpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5saXN0ZW4oKS5zdWJzY3JpYmUoKG9wdGlvbnM6IGFueSkgPT4ge1xuICAgICAgYXNzaWduRGVmaW5lZCh0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QubmV4dCgoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpO1xuICAgICAgdGhpcy5faGVpZ2h0U3ViamVjdC5uZXh0KCg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YnMpIHtcbiAgICAgIHRoaXMuX3N1YnMuZm9yRWFjaCgoc3ViOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5zZXRPcHRpb24oYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwge1xuICAgICAgICBncmlkOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBsZWZ0OiAnMjAnLFxuICAgICAgICAgIHJpZ2h0OiAnMjAnLFxuICAgICAgICAgIGJvdHRvbTogJzEwJyxcbiAgICAgICAgICB0b3A6ICcxMCcsXG4gICAgICAgICAgY29udGFpbkxhYmVsOiB0cnVlLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0ZDRkNGQycsXG4gICAgICAgIH0sXG4gICAgICAgIHhBeGlzIDogW3t9XSwgLy8gdGhyb3dzIGVycm9yIGlmIGl0cyBlbXB0eVxuICAgICAgICB5QXhpcyA6IFt7fV0sIC8vIHRocm93cyBlcnJvciBpZiBpdHMgZW1wdHlcbiAgICAgICAgc2VyaWVzOiBbXSxcbiAgICAgIH0sIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwgdGhpcy5fb3B0aW9ucyksIHRydWUpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBcbiAgSVRkQXhpc0xpbmUsXG4gIElUZEF4aXNMYWJlbCxcbiAgSVRkQXhpc1RpY2ssXG4gIElUZFNwbGl0TGluZSxcbiAgSVRkU3BsaXRBcmVhLFxuICBJVGRBeGlzUG9pbnRlcixcbiAgVGRBeGlzVHlwZSxcbiAgVGROYW1lTG9jYXRpb24sXG4gIFRkWEF4aXNQb3NpdGlvbixcbiAgVGRZQXhpc1Bvc2l0aW9uIH0gZnJvbSAnLi9heGlzLmludGVyZmFjZSc7XG4gIFxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRkQ2hhcnRBeGlzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHtcbiAgICBheGlzTGluZToge1xuICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgIGNvbG9yOiAnI0FCQUJBQicsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc3BsaXRMaW5lOiB7XG4gICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgY29sb3I6ICcjQUJBQkFCJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ2dyaWRJbmRleCcpIGdyaWRJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ29mZnNldCcpIG9mZnNldDogbnVtYmVyO1xuICBhYnN0cmFjdCBwb3NpdGlvbjogVGRYQXhpc1Bvc2l0aW9uIHwgVGRZQXhpc1Bvc2l0aW9uO1xuICBASW5wdXQoJ3R5cGUnKSB0eXBlOiBUZEF4aXNUeXBlO1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZUxvY2F0aW9uJykgbmFtZUxvY2F0aW9uOiBUZE5hbWVMb2NhdGlvbjtcbiAgQElucHV0KCduYW1lVGV4dFN0eWxlJykgbmFtZVRleHRTdHlsZTogYW55O1xuICBASW5wdXQoJ25hbWVHYXAnKSBuYW1lR2FwOiBudW1iZXI7XG4gIEBJbnB1dCgnbmFtZVJvdGF0ZScpIG5hbWVSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCdpbnZlcnNlJykgaW52ZXJzZTogYm9vbGVhbjtcbiAgQElucHV0KCdib3VuZGFyeUdhcCcpIGJvdW5kYXJ5R2FwOiBib29sZWFuIHwgc3RyaW5nW107XG4gIEBJbnB1dCgnbWluJykgbWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnbWF4JykgbWF4OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnc2NhbGUnKSBzY2FsZTogYm9vbGVhbjtcbiAgQElucHV0KCdtaW5JbnRlcnZhbCcpIG1pbkludGVydmFsOiBudW1iZXI7XG4gIEBJbnB1dCgnaW50ZXJ2YWwnKSBpbnRlcnZhbDogbnVtYmVyO1xuICBASW5wdXQoJ2xvZ0Jhc2UnKSBsb2dCYXNlOiBudW1iZXI7XG4gIEBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuICBASW5wdXQoJ3RyaWdnZXJFdmVudCcpIHRyaWdnZXJFdmVudDogYm9vbGVhbjtcbiAgQElucHV0KCdheGlzTGluZScpIGF4aXNMaW5lOiBJVGRBeGlzTGluZTtcbiAgQElucHV0KCdheGlzVGljaycpIGF4aXNUaWNrOiBJVGRBeGlzVGljaztcbiAgQElucHV0KCdheGlzTGFiZWwnKSBheGlzTGFiZWw6IElUZEF4aXNMYWJlbDtcbiAgQElucHV0KCdzcGxpdExpbmUnKSBzcGxpdExpbmU6IElUZFNwbGl0TGluZTtcbiAgQElucHV0KCdzcGxpdEFyZWEnKSBzcGxpdEFyZWE6IElUZFNwbGl0QXJlYTtcbiAgQElucHV0KCdkYXRhJykgZGF0YTogYW55O1xuICBASW5wdXQoJ2F4aXNQb2ludGVyJykgYXhpc1BvaW50ZXI6IElUZEF4aXNQb2ludGVyO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXhpc09wdGlvbjogc3RyaW5nLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LCB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHNob3c6IHRoaXMuc2hvdyxcbiAgICAgIGdyaWRJbmRleDogdGhpcy5ncmlkSW5kZXgsXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBuYW1lTG9jYXRpb246IHRoaXMubmFtZUxvY2F0aW9uLFxuICAgICAgbmFtZVRleHRTdHlsZTogdGhpcy5uYW1lVGV4dFN0eWxlLFxuICAgICAgbmFtZUdhcDogdGhpcy5uYW1lR2FwLFxuICAgICAgbmFtZVJvdGF0ZTogdGhpcy5uYW1lUm90YXRlLFxuICAgICAgaW52ZXJzZTogdGhpcy5pbnZlcnNlLFxuICAgICAgYm91bmRhcnlHYXA6IHRoaXMuYm91bmRhcnlHYXAsXG4gICAgICBtaW46IHRoaXMubWluLFxuICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgbWluSW50ZXJ2YWw6IHRoaXMubWluSW50ZXJ2YWwsXG4gICAgICBpbnRlcnZhbDogdGhpcy5pbnRlcnZhbCxcbiAgICAgIGxvZ0Jhc2U6IHRoaXMubG9nQmFzZSxcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgICB0cmlnZ2VyRXZlbnQ6IHRoaXMudHJpZ2dlckV2ZW50LFxuICAgICAgYXhpc0xpbmU6IHRoaXMuYXhpc0xpbmUsXG4gICAgICBheGlzVGljazogdGhpcy5heGlzVGljayxcbiAgICAgIGF4aXNMYWJlbDogdGhpcy5heGlzTGFiZWwsXG4gICAgICBzcGxpdExpbmU6IHRoaXMuc3BsaXRMaW5lLFxuICAgICAgc3BsaXRBcmVhOiB0aGlzLnNwbGl0QXJlYSxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIGF4aXNQb2ludGVyOiB0aGlzLmF4aXNQb2ludGVyLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICB9KTtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5zZXRBcnJheU9wdGlvbih0aGlzLl9heGlzT3B0aW9uLCBjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmNsZWFyT3B0aW9uKHRoaXMuX2F4aXNPcHRpb24pO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFRkWEF4aXNQb3NpdGlvbiAgfSBmcm9tICcuL2F4aXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRkQ2hhcnRBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXgtYXhpcycsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRYQXhpc0NvbXBvbmVudCBleHRlbmRzIFRkQ2hhcnRBeGlzQ29tcG9uZW50IHtcblxuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IFRkWEF4aXNQb3NpdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd4QXhpcycsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGRZQXhpc1Bvc2l0aW9uICB9IGZyb20gJy4vYXhpcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGRDaGFydEF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQteS1heGlzJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFlBeGlzQ29tcG9uZW50IGV4dGVuZHMgVGRDaGFydEF4aXNDb21wb25lbnQge1xuXG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogVGRZQXhpc1Bvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3lBeGlzJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVGRDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ2hhcnRYQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy94LWF4aXMuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ2hhcnRZQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy95LWF4aXMuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEJBU0VfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0Q29tcG9uZW50LFxuICBUZENoYXJ0WEF4aXNDb21wb25lbnQsXG4gIFRkQ2hhcnRZQXhpc0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJBU0VfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCQVNFX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEJhc2VFY2hhcnRzTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHsgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCB9IGZyb20gJy4uL3V0aWxzL2Fzc2lnbi1kZWZpbmVkJztcbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBJVGRTZXJpZXNUb29sdGlwIH0gZnJvbSAnLi4vc2VyaWVzL3Nlcmllcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVRkQW5pbWF0aW9uIH0gZnJvbSAnLi4vYmFzZS50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2VyaWVzPFQ+IGV4dGVuZHMgSVRkQW5pbWF0aW9uIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICB0eXBlPzogVDtcblxuICB0b29sdGlwPzogSVRkU2VyaWVzVG9vbHRpcDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRkU2VyaWVzQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgSVRkU2VyaWVzPFQ+LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95ICB7XG5cbiAgcHJpdmF0ZSBfdHlwZTogVDtcblxuICBnZXQgdHlwZSgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIF9zdGF0ZTogYW55ID0ge307XG4gIF9vcHRpb25zOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KCdhbmltYXRpb24nKSBhbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgnYW5pbWF0aW9uVGhyZXNob2xkJykgYW5pbWF0aW9uVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgnYW5pbWF0aW9uRHVyYXRpb24nKSBhbmltYXRpb25EdXJhdGlvbjogbnVtYmVyIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnYW5pbWF0aW9uRWFzaW5nJykgYW5pbWF0aW9uRWFzaW5nOiBzdHJpbmc7XG4gIEBJbnB1dCgnYW5pbWF0aW9uRGVsYXknKSBhbmltYXRpb25EZWxheTogbnVtYmVyIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUnKSBhbmltYXRpb25EdXJhdGlvblVwZGF0ZTogbnVtYmVyIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnYW5pbWF0aW9uRWFzaW5nVXBkYXRlJykgYW5pbWF0aW9uRWFzaW5nVXBkYXRlOiBzdHJpbmc7XG4gIEBJbnB1dCgnYW5pbWF0aW9uRGVsYXlVcGRhdGUnKSBhbmltYXRpb25EZWxheVVwZGF0ZTogbnVtYmVyIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgndG9vbHRpcCcpIHRvb2x0aXA6IElUZFNlcmllc1Rvb2x0aXA7XG5cbiAgY29uc3RydWN0b3IodHlwZTogVCwgcHJvdGVjdGVkIG9wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG4gIFxuICBzZXRTdGF0ZU9wdGlvbihvcHRpb246IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIHJlbW92ZVN0YXRlT3B0aW9uKG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgdGhpcy5fb3B0aW9uc1tvcHRpb25dID0gbnVsbDtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBhYnN0cmFjdCBnZXRDb25maWcoKTogYW55O1xuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LCB0aGlzLmdldENvbmZpZygpLCB0aGlzLl9vcHRpb25zKTtcbiAgICB0aGlzLm9wdGlvbnNTZXJ2aWNlLnNldEFycmF5T3B0aW9uKCdzZXJpZXMnLCBjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IHRoaXMuZ2V0Q29uZmlnKCk7XG4gICAgdGhpcy5vcHRpb25zU2VydmljZS5yZW1vdmVBcnJheU9wdGlvbignc2VyaWVzJywgY29uZmlnKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFxuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIFRkQ29vcmRpbmF0ZVN5c3RlbSxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRFbXBoYXNpcyxcbiAgVGRTZXJpZXNMYXlvdXRCeSxcbiAgSVRkTWFya1BvaW50LFxuICBJVGRNYXJrTGluZSxcbiAgSVRkTWFya0FyZWEsXG4gIElUZFNlcmllcyxcbiAgSVRkTGFiZWwsXG4gIFRkUHJvZ3Jlc3NpdmVDaHVua01vZGUsXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRCYXJTZXJpZXMgZXh0ZW5kcyBJVGRTZXJpZXM8J2Jhcic+IHtcbiAgbGVnZW5kSG92ZXJMaW5rPzogYm9vbGVhbjtcbiAgY29vcmRpbmF0ZVN5c3RlbT86IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgeEF4aXNJbmRleD86IG51bWJlcjtcbiAgeUF4aXNJbmRleD86IG51bWJlcjtcbiAgTGFiZWw/OiBJVGRMYWJlbDtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBlbXBoYXNpcz86IElUZEVtcGhhc2lzO1xuICBzdGFjaz86IHN0cmluZztcbiAgY3Vyc29yPzogc3RyaW5nO1xuICBiYXJXaWR0aD86IG51bWJlciB8IHN0cmluZztcbiAgYmFyTWF4V2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG4gIGJhck1pbkhlaWdodD86IG51bWJlcjtcbiAgYmFyR2FwPzogc3RyaW5nO1xuICBiYXJDYXRlZ29yeUdhcD86IHN0cmluZztcbiAgbGFyZ2U/OiBib29sZWFuO1xuICBsYXJnZVRocmVzaG9sZD86IG51bWJlcjtcbiAgcHJvZ3Jlc3NpdmU/OiBudW1iZXI7XG4gIHByb2dyZXNzaXZlVGhyZXNob2xkPzogbnVtYmVyO1xuICBwcm9ncmVzc2l2ZUNodW5rTW9kZT86IFRkUHJvZ3Jlc3NpdmVDaHVua01vZGU7XG4gIGRpbWVuc2lvbnM/OiBhbnlbXTtcbiAgZW5jb2RlPzogYW55O1xuICBzZXJpZXNMYXlvdXRCeT86IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIGRhdGFzZXRJbmRleD86IG51bWJlcjtcbiAgZGF0YT86IGFueVtdO1xuICBtYXJrUG9pbnQ/OiBJVGRNYXJrUG9pbnQ7XG4gIG1hcmtMaW5lPzogSVRkTWFya0xpbmU7XG4gIG1hcmtBcmVhPzogSVRkTWFya0FyZWE7XG4gIFpsZXZlbD86IDA7XG4gIHo/OiBudW1iZXI7XG4gIHNpbGVudD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC1iYXJdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzQmFyQ29tcG9uZW50KSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNCYXJDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwnYmFyJz4gaW1wbGVtZW50cyBJVGRCYXJTZXJpZXMge1xuXG4gIEBJbnB1dCgnY29vcmRpbmF0ZVN5c3RlbScpIGNvb3JkaW5hdGVTeXN0ZW06IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgQElucHV0KCd4QXhpc0luZGV4JykgeEF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3lBeGlzSW5kZXgnKSB5QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnbGVnZW5kSG92ZXJMaW5rJykgbGVnZW5kSG92ZXJMaW5rOiBib29sZWFuO1xuICBASW5wdXQoJ3N0YWNrJykgc3RhY2s6IHN0cmluZztcbiAgQElucHV0KCdjdXJzb3InKSBjdXJzb3I6IHN0cmluZztcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBhbnk7XG4gIEBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgnYmFyV2lkdGgnKSBiYXJXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoJ2Jhck1heFdpZHRoJykgYmFyTWF4V2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCdiYXJNaW5IZWlnaHQnKSBiYXJNaW5IZWlnaHQ6IG51bWJlcjtcbiAgQElucHV0KCdiYXJHYXAnKSBiYXJHYXA6IHN0cmluZztcbiAgQElucHV0KCdiYXJDYXRlZ29yeUdhcCcpIGJhckNhdGVnb3J5R2FwOiBzdHJpbmc7XG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogYm9vbGVhbjtcbiAgQElucHV0KCdsYXJnZVRocmVzaG9sZCcpIGxhcmdlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmUnKSBwcm9ncmVzc2l2ZTogbnVtYmVyO1xuICBASW5wdXQoJ3Byb2dyZXNzaXZlVGhyZXNob2xkJykgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdwcm9ncmVzc2l2ZUNodW5rTW9kZScpIHByb2dyZXNzaXZlQ2h1bmtNb2RlOiBUZFByb2dyZXNzaXZlQ2h1bmtNb2RlO1xuICBASW5wdXQoJ2RpbWVuc2lvbnMnKSBkaW1lbnNpb25zOiBhbnlbXTtcbiAgQElucHV0KCdlbmNvZGUnKSBlbmNvZGU6IGFueTtcbiAgQElucHV0KCdzZXJpZXNMYXlvdXRCeScpIHNlcmllc0xheW91dEJ5OiBUZFNlcmllc0xheW91dEJ5O1xuICBASW5wdXQoJ2RhdGFzZXRJbmRleCcpIGRhdGFzZXRJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2RhdGEnKSBkYXRhOiBhbnlbXTtcbiAgQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbiAgQElucHV0KCdtYXJrTGluZScpIG1hcmtMaW5lOiBJVGRNYXJrTGluZTtcbiAgQElucHV0KCdtYXJrQXJlYScpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ2JhcicsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgIGNvb3JkaW5hdGVTeXN0ZW06IHRoaXMuY29vcmRpbmF0ZVN5c3RlbSxcbiAgICAgIHhBeGlzSW5kZXg6IHRoaXMueEF4aXNJbmRleCxcbiAgICAgIHlBeGlzSW5kZXg6IHRoaXMueUF4aXNJbmRleCxcbiAgICAgIGxlZ2VuZEhvdmVyTGluazogdGhpcy5sZWdlbmRIb3ZlckxpbmssXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIGN1cnNvcjogdGhpcy5jdXJzb3IsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIGJhcldpZHRoOiB0aGlzLmJhcldpZHRoLFxuICAgICAgYmFyTWF4V2lkdGg6IHRoaXMuYmFyTWF4V2lkdGgsXG4gICAgICBiYXJNaW5IZWlnaHQ6IHRoaXMuYmFyTWluSGVpZ2h0LFxuICAgICAgYmFyR2FwOiB0aGlzLmJhckdhcCxcbiAgICAgIGJhckNhdGVnb3J5R2FwOiB0aGlzLmJhckNhdGVnb3J5R2FwLFxuICAgICAgbGFyZ2U6IHRoaXMubGFyZ2UsXG4gICAgICBsYXJnZVRocmVzaG9sZDogdGhpcy5sYXJnZVRocmVzaG9sZCxcbiAgICAgIHByb2dyZXNzaXZlOiB0aGlzLnByb2dyZXNzaXZlLFxuICAgICAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ6IHRoaXMucHJvZ3Jlc3NpdmVUaHJlc2hvbGQsXG4gICAgICBwcm9ncmVzc2l2ZUNodW5rTW9kZTogdGhpcy5wcm9ncmVzc2l2ZUNodW5rTW9kZSxcbiAgICAgIGRpbWVuc2lvbnM6IHRoaXMuZGltZW5zaW9ucyxcbiAgICAgIGVuY29kZTogdGhpcy5lbmNvZGUsXG4gICAgICBzZXJpZXNMYXlvdXRCeTogdGhpcy5zZXJpZXNMYXlvdXRCeSxcbiAgICAgIGRhdGFzZXRJbmRleDogdGhpcy5kYXRhc2V0SW5kZXgsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBtYXJrUG9pbnQ6IHRoaXMubWFya1BvaW50LFxuICAgICAgbWFya0xpbmU6IHRoaXMubWFya0xpbmUsXG4gICAgICBtYXJrQXJlYTogdGhpcy5tYXJrQXJlYSxcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBhbmltYXRpb246IHRoaXMuYW5pbWF0aW9uLFxuICAgICAgYW5pbWF0aW9uVGhyZXNob2xkOiB0aGlzLmFuaW1hdGlvblRocmVzaG9sZCxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgYW5pbWF0aW9uRWFzaW5nOiB0aGlzLmFuaW1hdGlvbkVhc2luZyxcbiAgICAgIGFuaW1hdGlvbkRlbGF5OiB0aGlzLmFuaW1hdGlvbkRlbGF5LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb25VcGRhdGU6IHRoaXMuYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUsXG4gICAgICBhbmltYXRpb25FYXNpbmdVcGRhdGU6IHRoaXMuYW5pbWF0aW9uRWFzaW5nVXBkYXRlLFxuICAgICAgYW5pbWF0aW9uRGVsYXlVcGRhdGU6IHRoaXMuYW5pbWF0aW9uRGVsYXlVcGRhdGUsXG4gICAgICB0b29sdGlwOiB0aGlzLnRvb2x0aXAsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCAnZWNoYXJ0cy9saWIvY2hhcnQvYmFyJztcblxuaW1wb3J0IHsgVGRDaGFydFNlcmllc0JhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBCQVJfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0U2VyaWVzQmFyQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQkFSX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQkFSX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEJhckVjaGFydHNNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFxuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIFRkQ29vcmRpbmF0ZVN5c3RlbSxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZExhYmVsLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZExpbmVTdHlsZSxcbiAgSVRkQXJlYVN0eWxlLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBJVGRNYXJrUG9pbnQsXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgSVRkRW1waGFzaXMsXG4gIElUZFNlcmllcyxcbiAgSVRkU2hhZG93LFxuICBUZFNlcmllc0NvbXBvbmVudCxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCB0eXBlIFRkU2FtcGxpbmcgPSAnYXZlcmFnZScgfCAnbWF4JyB8ICdtaW4nIHwgJ3N1bSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTGluZVNlcmllcyBleHRlbmRzIElUZFNlcmllczwnbGluZSc+LCBJVGRTaGFkb3cge1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBwb2xhckluZGV4PzogbnVtYmVyO1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgc3ltYm9sU2l6ZT86IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldD86IGFueVtdO1xuICBzaG93U3ltYm9sPzogYm9vbGVhbjtcbiAgc2hvd0FsbFN5bWJvbD86IGJvb2xlYW4gfCAnYXV0byc7XG4gIGhvdmVyQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgbGVnZW5kSG92ZXJMaW5rPzogYm9vbGVhbjtcbiAgc3RhY2s/OiBzdHJpbmc7XG4gIGN1cnNvcj86IHN0cmluZztcbiAgY29ubmVjdE51bGxzPzogYm9vbGVhbjtcbiAgY2xpcE92ZXJmbG93PzogYm9vbGVhbjtcbiAgc3RlcD86IHN0cmluZyB8IGJvb2xlYW47XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgbGluZVN0eWxlPzogSVRkTGluZVN0eWxlO1xuICB3aWR0aD86IG51bWJlcjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgYXJlYVN0eWxlPzogSVRkQXJlYVN0eWxlO1xuICBlbXBoYXNpcz86IElUZEVtcGhhc2lzO1xuICBzbW9vdGg/OiBib29sZWFuIHwgbnVtYmVyO1xuICBzbW9vdGhNb25vdG9uZT86IHN0cmluZztcbiAgc2FtcGxpbmc/OiBUZFNhbXBsaW5nO1xuICBkaW1lbnNpb25zPzogYW55W107XG4gIGVuY29kZT86IGFueTtcbiAgc2VyaWVzTGF5b3V0Qnk/OiBUZFNlcmllc0xheW91dEJ5O1xuICBkYXRhc2V0SW5kZXg/OiBudW1iZXI7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICB6bGV2ZWw/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNpbGVudD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC1saW5lXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc0xpbmVDb21wb25lbnQpLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc0xpbmVDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwnbGluZSc+IGltcGxlbWVudHMgSVRkTGluZVNlcmllcyB7XG5cbiAgQElucHV0KCdjb29yZGluYXRlU3lzdGVtJykgY29vcmRpbmF0ZVN5c3RlbTogVGRDb29yZGluYXRlU3lzdGVtO1xuICBASW5wdXQoJ3hBeGlzSW5kZXgnKSB4QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgneUF4aXNJbmRleCcpIHlBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdwb2xhckluZGV4JykgcG9sYXJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3N5bWJvbCcpIHN5bWJvbDogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIEBJbnB1dCgnc3ltYm9sU2l6ZScpIHN5bWJvbFNpemU6IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnc3ltYm9sUm90YXRlJykgc3ltYm9sUm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgnc3ltYm9sS2VlcEFzcGVjdCcpIHN5bWJvbEtlZXBBc3BlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3ltYm9sT2Zmc2V0Jykgc3ltYm9sT2Zmc2V0OiBhbnlbXTtcbiAgQElucHV0KCdzaG93U3ltYm9sJykgc2hvd1N5bWJvbDogYm9vbGVhbjtcbiAgQElucHV0KCdzaG93QWxsU3ltYm9sJykgc2hvd0FsbFN5bWJvbDogYm9vbGVhbjtcbiAgQElucHV0KCdob3ZlckFuaW1hdGlvbicpIGhvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoJ2xlZ2VuZEhvdmVyTGluaycpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCdzdGFjaycpIHN0YWNrOiBzdHJpbmc7XG4gIEBJbnB1dCgnY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgnY29ubmVjdE51bGxzJykgY29ubmVjdE51bGxzOiBib29sZWFuO1xuICBASW5wdXQoJ2NsaXBPdmVyZmxvdycpIGNsaXBPdmVyZmxvdzogYm9vbGVhbjtcbiAgQElucHV0KCdzdGVwJykgc3RlcDogc3RyaW5nIHwgYm9vbGVhbjtcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdsaW5lU3R5bGUnKSBsaW5lU3R5bGU6IElUZExpbmVTdHlsZTtcbiAgQElucHV0KCdhcmVhU3R5bGUnKSBhcmVhU3R5bGU6IElUZEFyZWFTdHlsZTtcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbiAgQElucHV0KCdzbW9vdGgnKSBzbW9vdGg6IGJvb2xlYW4gfCBudW1iZXI7XG4gIEBJbnB1dCgnc21vb3RoTW9ub3RvbmUnKSBzbW9vdGhNb25vdG9uZTogc3RyaW5nO1xuICBASW5wdXQoJ3NhbXBsaW5nJykgc2FtcGxpbmc6IFRkU2FtcGxpbmc7XG4gIEBJbnB1dCgnZGltZW5zaW9ucycpIGRpbWVuc2lvbnM6IGFueVtdO1xuICBASW5wdXQoJ2VuY29kZScpIGVuY29kZTogYW55O1xuICBASW5wdXQoJ3Nlcmllc0xheW91dEJ5Jykgc2VyaWVzTGF5b3V0Qnk6IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIEBJbnB1dCgnZGF0YXNldEluZGV4JykgZGF0YXNldEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueVtdO1xuICBASW5wdXQoJ21hcmtQb2ludCcpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoJ21hcmtMaW5lJykgbWFya0xpbmU6IElUZE1hcmtMaW5lO1xuICBASW5wdXQoJ21hcmtBcmVhJykgbWFya0FyZWE6IElUZE1hcmtBcmVhO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ2xpbmUnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBjb29yZGluYXRlU3lzdGVtOiB0aGlzLmNvb3JkaW5hdGVTeXN0ZW0sXG4gICAgICB4QXhpc0luZGV4OiB0aGlzLnhBeGlzSW5kZXgsXG4gICAgICB5QXhpc0luZGV4OiB0aGlzLnlBeGlzSW5kZXgsXG4gICAgICBwb2xhckluZGV4OiB0aGlzLnBvbGFySW5kZXgsXG4gICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgc3ltYm9sU2l6ZTogdGhpcy5zeW1ib2xTaXplLFxuICAgICAgc3ltYm9sUm90YXRlOiB0aGlzLnN5bWJvbFJvdGF0ZSxcbiAgICAgIHN5bWJvbEtlZXBBc3BlY3Q6IHRoaXMuc3ltYm9sS2VlcEFzcGVjdCxcbiAgICAgIHN5bWJvbE9mZnNldDogdGhpcy5zeW1ib2xPZmZzZXQsXG4gICAgICBzaG93U3ltYm9sOiB0aGlzLnNob3dTeW1ib2wsXG4gICAgICBzaG93QWxsU3ltYm9sOiB0aGlzLnNob3dBbGxTeW1ib2wsXG4gICAgICBob3ZlckFuaW1hdGlvbjogdGhpcy5ob3ZlckFuaW1hdGlvbixcbiAgICAgIGxlZ2VuZEhvdmVyTGluazogdGhpcy5sZWdlbmRIb3ZlckxpbmssXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIGN1cnNvcjogdGhpcy5jdXJzb3IsXG4gICAgICBjb25uZWN0TnVsbHM6IHRoaXMuY29ubmVjdE51bGxzLFxuICAgICAgY2xpcE92ZXJmbG93OiB0aGlzLmNsaXBPdmVyZmxvdyxcbiAgICAgIHN0ZXA6IHRoaXMuc3RlcCxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxpbmVTdHlsZTogdGhpcy5saW5lU3R5bGUsXG4gICAgICBhcmVhU3R5bGU6IHRoaXMuYXJlYVN0eWxlLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBzbW9vdGg6IHRoaXMuc21vb3RoLFxuICAgICAgc21vb3RoTW9ub3RvbmU6IHRoaXMuc21vb3RoTW9ub3RvbmUsXG4gICAgICBzYW1wbGluZzogdGhpcy5zYW1wbGluZyxcbiAgICAgIGRpbWVuc2lvbnM6IHRoaXMuZGltZW5zaW9ucyxcbiAgICAgIGVuY29kZTogdGhpcy5lbmNvZGUsXG4gICAgICBzZXJpZXNMYXlvdXRCeTogdGhpcy5zZXJpZXNMYXlvdXRCeSxcbiAgICAgIGRhdGFzZXRJbmRleDogdGhpcy5kYXRhc2V0SW5kZXgsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBtYXJrUG9pbnQ6IHRoaXMubWFya1BvaW50LFxuICAgICAgbWFya0xpbmU6IHRoaXMubWFya0xpbmUsXG4gICAgICBtYXJrQXJlYTogdGhpcy5tYXJrQXJlYSxcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgYW5pbWF0aW9uOiB0aGlzLmFuaW1hdGlvbixcbiAgICAgIGFuaW1hdGlvblRocmVzaG9sZDogdGhpcy5hbmltYXRpb25UaHJlc2hvbGQsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogdGhpcy5hbmltYXRpb25EdXJhdGlvbixcbiAgICAgIGFuaW1hdGlvbkVhc2luZzogdGhpcy5hbmltYXRpb25FYXNpbmcsXG4gICAgICBhbmltYXRpb25EZWxheTogdGhpcy5hbmltYXRpb25EZWxheSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlOiB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlLFxuICAgICAgYW5pbWF0aW9uRWFzaW5nVXBkYXRlOiB0aGlzLmFuaW1hdGlvbkVhc2luZ1VwZGF0ZSxcbiAgICAgIGFuaW1hdGlvbkRlbGF5VXBkYXRlOiB0aGlzLmFuaW1hdGlvbkRlbGF5VXBkYXRlLFxuICAgICAgdG9vbHRpcDogdGhpcy50b29sdGlwLFxuICAgIH07XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCAnZWNoYXJ0cy9saWIvY2hhcnQvbGluZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRTZXJpZXNMaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9saW5lLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBMSU5FX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydFNlcmllc0xpbmVDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMSU5FX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTElORV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRMaW5lRWNoYXJ0c01vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgVGRDb29yZGluYXRlU3lzdGVtLFxuICBUZE1hcmtQb2ludFN5bWJvbCxcbiAgSVRkTWFya1BvaW50LFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZExhYmVsLFxuICBJVGRFbXBoYXNpcyxcbiAgVGRTZXJpZXNMYXlvdXRCeSxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgSVRkU2VyaWVzLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRTY2F0dGVyU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdzY2F0dGVyJz4ge1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBwb2xhckluZGV4PzogbnVtYmVyO1xuICBnZW9JbmRleD86IG51bWJlcjtcbiAgY2FsZW5kYXJJbmRleD86IG51bWJlcjtcbiAgaG92ZXJBbmltYXRpb24/OiBib29sZWFuO1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgc3ltYm9sU2l6ZT86IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldD86IGFueVtdO1xuICBsYXJnZT86IGJvb2xlYW47XG4gIGxhcmdlVGhyZXNob2xkPzogbnVtYmVyO1xuICBjdXJzb3I/OiBzdHJpbmc7XG4gIGNvbm5lY3ROdWxscz86IGJvb2xlYW47XG4gIGNsaXBPdmVyZmxvdz86IGJvb2xlYW47XG4gIHN0ZXA/OiBib29sZWFuO1xuICBsYWJlbD86IElUZExhYmVsO1xuICBpdGVtU3R5bGU/OiBhbnk7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIHByb2dyZXNzaXZlPzogbnVtYmVyO1xuICBwcm9ncmVzc2l2ZVRocmVzaG9sZD86IG51bWJlcjtcbiAgZGltZW5zaW9ucz86IGFueVtdO1xuICBlbmNvZGU/OiBhbnk7XG4gIHNlcmllc0xheW91dEJ5PzogVGRTZXJpZXNMYXlvdXRCeTtcbiAgZGF0YXNldEluZGV4PzogbnVtYmVyO1xuICBkYXRhPzogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgemxldmVsPzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuICBcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC1zY2F0dGVyXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc1NjYXR0ZXJDb21wb25lbnQpLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1NjYXR0ZXJDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwnc2NhdHRlcic+IGltcGxlbWVudHMgSVRkU2NhdHRlclNlcmllcyB7XG5cbiAgQElucHV0KCdjb29yZGluYXRlU3lzdGVtJykgY29vcmRpbmF0ZVN5c3RlbTogVGRDb29yZGluYXRlU3lzdGVtO1xuICBASW5wdXQoJ3hBeGlzSW5kZXgnKSB4QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgneUF4aXNJbmRleCcpIHlBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdwb2xhckluZGV4JykgcG9sYXJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2dlb0luZGV4JykgZ2VvSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdjYWxlbmRhckluZGV4JykgY2FsZW5kYXJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2hvdmVyQW5pbWF0aW9uJykgaG92ZXJBbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgnbGVnZW5kSG92ZXJMaW5rJykgbGVnZW5kSG92ZXJMaW5rOiBib29sZWFuO1xuICBASW5wdXQoJ3N5bWJvbCcpIHN5bWJvbDogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIEBJbnB1dCgnc3ltYm9sU2l6ZScpIHN5bWJvbFNpemU6IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnc3ltYm9sUm90YXRlJykgc3ltYm9sUm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgnc3ltYm9sS2VlcEFzcGVjdCcpIHN5bWJvbEtlZXBBc3BlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3ltYm9sT2Zmc2V0Jykgc3ltYm9sT2Zmc2V0OiBhbnlbXTtcbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBib29sZWFuO1xuICBASW5wdXQoJ2xhcmdlVGhyZXNob2xkJykgbGFyZ2VUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdjdXJzb3InKSBjdXJzb3I6IHN0cmluZztcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbiAgQElucHV0KCdwcm9ncmVzc2l2ZScpIHByb2dyZXNzaXZlOiBudW1iZXI7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmVUaHJlc2hvbGQnKSBwcm9ncmVzc2l2ZVRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoJ2RpbWVuc2lvbnMnKSBkaW1lbnNpb25zOiBhbnlbXTtcbiAgQElucHV0KCdlbmNvZGUnKSBlbmNvZGU6IGFueTtcbiAgQElucHV0KCdzZXJpZXNMYXlvdXRCeScpIHNlcmllc0xheW91dEJ5OiBUZFNlcmllc0xheW91dEJ5O1xuICBASW5wdXQoJ2RhdGFzZXRJbmRleCcpIGRhdGFzZXRJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2RhdGEnKSBkYXRhOiBhbnlbXTtcbiAgQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbiAgQElucHV0KCdtYXJrTGluZScpIG1hcmtMaW5lOiBJVGRNYXJrTGluZTtcbiAgQElucHV0KCdtYXJrQXJlYScpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdzY2F0dGVyJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogdGhpcy5jb29yZGluYXRlU3lzdGVtLFxuICAgICAgeEF4aXNJbmRleDogdGhpcy54QXhpc0luZGV4LFxuICAgICAgeUF4aXNJbmRleDogdGhpcy55QXhpc0luZGV4LFxuICAgICAgcG9sYXJJbmRleDogdGhpcy5wb2xhckluZGV4LFxuICAgICAgZ2VvSW5kZXg6IHRoaXMuZ2VvSW5kZXgsXG4gICAgICBjYWxlbmRhckluZGV4OiB0aGlzLmNhbGVuZGFySW5kZXgsXG4gICAgICBob3ZlckFuaW1hdGlvbjogdGhpcy5ob3ZlckFuaW1hdGlvbixcbiAgICAgIGxlZ2VuZEhvdmVyTGluazogdGhpcy5sZWdlbmRIb3ZlckxpbmssXG4gICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgc3ltYm9sU2l6ZTogdGhpcy5zeW1ib2xTaXplLFxuICAgICAgc3ltYm9sUm90YXRlOiB0aGlzLnN5bWJvbFJvdGF0ZSxcbiAgICAgIHN5bWJvbEtlZXBBc3BlY3Q6IHRoaXMuc3ltYm9sS2VlcEFzcGVjdCxcbiAgICAgIHN5bWJvbE9mZnNldDogdGhpcy5zeW1ib2xPZmZzZXQsXG4gICAgICBsYXJnZTogdGhpcy5sYXJnZSxcbiAgICAgIGxhcmdlVGhyZXNob2xkOiB0aGlzLmxhcmdlVGhyZXNob2xkLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgICAgcHJvZ3Jlc3NpdmU6IHRoaXMucHJvZ3Jlc3NpdmUsXG4gICAgICBwcm9ncmVzc2l2ZVRocmVzaG9sZDogdGhpcy5wcm9ncmVzc2l2ZVRocmVzaG9sZCxcbiAgICAgIGRpbWVuc2lvbnM6IHRoaXMuZGltZW5zaW9ucyxcbiAgICAgIGVuY29kZTogdGhpcy5lbmNvZGUsXG4gICAgICBzZXJpZXNMYXlvdXRCeTogdGhpcy5zZXJpZXNMYXlvdXRCeSxcbiAgICAgIGRhdGFzZXRJbmRleDogdGhpcy5kYXRhc2V0SW5kZXgsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBtYXJrUG9pbnQ6IHRoaXMubWFya1BvaW50LFxuICAgICAgbWFya0xpbmU6IHRoaXMubWFya0xpbmUsXG4gICAgICBtYXJrQXJlYTogdGhpcy5tYXJrQXJlYSxcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgYW5pbWF0aW9uOiB0aGlzLmFuaW1hdGlvbixcbiAgICAgIGFuaW1hdGlvblRocmVzaG9sZDogdGhpcy5hbmltYXRpb25UaHJlc2hvbGQsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogdGhpcy5hbmltYXRpb25EdXJhdGlvbixcbiAgICAgIGFuaW1hdGlvbkVhc2luZzogdGhpcy5hbmltYXRpb25FYXNpbmcsXG4gICAgICBhbmltYXRpb25EZWxheTogdGhpcy5hbmltYXRpb25EZWxheSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlOiB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlLFxuICAgICAgYW5pbWF0aW9uRWFzaW5nVXBkYXRlOiB0aGlzLmFuaW1hdGlvbkVhc2luZ1VwZGF0ZSxcbiAgICAgIGFuaW1hdGlvbkRlbGF5VXBkYXRlOiB0aGlzLmFuaW1hdGlvbkRlbGF5VXBkYXRlLFxuICAgICAgdG9vbHRpcDogdGhpcy50b29sdGlwLFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgJ2VjaGFydHMvbGliL2NoYXJ0L3NjYXR0ZXInO1xuXG5pbXBvcnQgeyBUZENoYXJ0U2VyaWVzU2NhdHRlckNvbXBvbmVudCB9IGZyb20gJy4vc2NhdHRlci5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgU0NBVFRFUl9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRTZXJpZXNTY2F0dGVyQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU0NBVFRFUl9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNDQVRURVJfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50U2NhdHRlckVjaGFydHNNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgQ29udGVudENoaWxkLFxuICBWaWV3Q2hpbGQsXG4gIE9uSW5pdCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBhc3NpZ25EZWZpbmVkLFxuICBUZFRvb2x0aXBUcmlnZ2VyLFxuICBUZFRvb2x0aXBUcmlnZ2VyT24sXG4gIFRkVG9vbHRpcFBvc2l0aW9uLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IGNsYXNzIFRkVG9vbHRpcENvbnRleHQge1xuICAkaW1wbGljaXQ6IGFueTtcbiAgdGlja2V0OiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW3RkVG9vbHRpcEZvcm1hdHRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSB7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXRvb2x0aXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0VG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBcbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuXG4gIF9jb250ZXh0OiBUZFRvb2x0aXBDb250ZXh0ID0gbmV3IFRkVG9vbHRpcENvbnRleHQoKTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdzaG93Jykgc2hvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgndHJpZ2dlcicpIHRyaWdnZXI6IFRkVG9vbHRpcFRyaWdnZXIgPSAgJ2F4aXMnO1xuICBASW5wdXQoJ2F4aXNQb2ludGVyJykgYXhpc1BvaW50ZXI6IGFueTtcbiAgQElucHV0KCdzaG93Q29udGVudCcpIHNob3dDb250ZW50OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCdhbHdheXNTaG93Q29udGVudCcpIGFsd2F5c1Nob3dDb250ZW50OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgndHJpZ2dlck9uJykgdHJpZ2dlck9uOiBUZFRvb2x0aXBUcmlnZ2VyT24gPSAnbW91c2Vtb3ZlfGNsaWNrJztcbiAgQElucHV0KCdzaG93RGVsYXknKSBzaG93RGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnaGlkZURlbGF5JykgaGlkZURlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ2VudGVyYWJsZScpIGVudGVyYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3JlbmRlck1vZGUnKSByZW5kZXJNb2RlOiAnaHRtbCcgfCAncmljaFRleHQnO1xuICBASW5wdXQoJ2NvbmZpbmUnKSBjb25maW5lOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgndHJhbnNpdGlvbkR1cmF0aW9uJykgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXIgPSAwLjU7XG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogVGRUb29sdGlwUG9zaXRpb247IC8vIHNlcmllc1xuICBASW5wdXQoJ2Zvcm1hdHRlcicpIGZvcm1hdHRlcjogc3RyaW5nIHwgRnVuY3Rpb247IC8vIHNlcmllc1xuICBASW5wdXQoJ2JhY2tncm91bmRDb2xvcicpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJ3JnYmEoNTAsNTAsNTAsMC43KSc7IC8vIHNlcmllc1xuICBASW5wdXQoJ2JvcmRlckNvbG9yJykgYm9yZGVyQ29sb3I6IHN0cmluZyA9ICcjMzMzJzsgLy8gc2VyaWVzXG4gIEBJbnB1dCgnYm9yZGVyV2lkdGgnKSBib3JkZXJXaWR0aDogbnVtYmVyID0gMDsgLy8gc2VyaWVzXG4gIEBJbnB1dCgncGFkZGluZycpIHBhZGRpbmc6IG51bWJlciA9IDU7IC8vIHNlcmllc1xuICBASW5wdXQoJ3RleHRTdHlsZScpIHRleHRTdHlsZTogYW55ID0geyAvLyBzZXJpZXNcbiAgICBjb2xvcjogJyNGRkYnLFxuICB9O1xuICBASW5wdXQoJ2V4dHJhQ3NzVGV4dCcpIGV4dHJhQ3NzVGV4dDogc3RyaW5nOyAvLyBzZXJpZXNcblxuICBAQ29udGVudENoaWxkKFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlLCB7cmVhZDogVGVtcGxhdGVSZWZ9KSBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcENvbnRlbnQnKSBmdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LCB7XG4gICAgICBzaG93OiB0aGlzLnNob3csXG4gICAgICB0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG4gICAgICBheGlzUG9pbnRlcjogdGhpcy5heGlzUG9pbnRlcixcbiAgICAgIHNob3dDb250ZW50OiB0aGlzLnNob3dDb250ZW50LFxuICAgICAgYWx3YXlzU2hvd0NvbnRlbnQ6IHRoaXMuYWx3YXlzU2hvd0NvbnRlbnQsXG4gICAgICB0cmlnZ2VyT246IHRoaXMudHJpZ2dlck9uLFxuICAgICAgc2hvd0RlbGF5OiB0aGlzLnNob3dEZWxheSxcbiAgICAgIGhpZGVEZWxheTogdGhpcy5oaWRlRGVsYXksXG4gICAgICBlbnRlcmFibGU6IHRoaXMuZW50ZXJhYmxlLFxuICAgICAgY29uZmluZTogdGhpcy5jb25maW5lLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgZm9ybWF0dGVyOiB0aGlzLmZvcm1hdHRlciA/IHRoaXMuZm9ybWF0dGVyIDogdGhpcy5fZm9ybWF0dGVyKCksXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgICBib3JkZXJXaWR0aDogdGhpcy5ib3JkZXJXaWR0aCxcbiAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgIHRleHRTdHlsZTogdGhpcy50ZXh0U3R5bGUsXG4gICAgICBleHRyYUNzc1RleHQ6IHRoaXMuZXh0cmFDc3NUZXh0LFxuICAgIH0pO1xuICAgIC8vIHNldCB0b29sdGlwIGNvbmZpZ3VyYXRpb24gaW4gcGFyZW50IGNoYXJ0IGFuZCByZW5kZXIgbmV3IGNvbmZpZ3VyYXRpb25zXG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2Uuc2V0T3B0aW9uKCd0b29sdGlwJywgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5jbGVhck9wdGlvbigndG9vbHRpcCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZm9ybWF0dGVyKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKHBhcmFtczogYW55LCB0aWNrZXQ6IGFueSwgY2FsbGJhY2s6ICh0aWNrZXQ6IHN0cmluZywgaHRtbDogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLl9jb250ZXh0ID0ge1xuICAgICAgICAkaW1wbGljaXQ6IHBhcmFtcyxcbiAgICAgICAgdGlja2V0OiB0aWNrZXQsXG4gICAgICB9O1xuICAgICAgLy8gdGltZW91dCBzZXQgc2luY2Ugd2UgbmVlZCB0byBzZXQgdGhlIEhUTUwgYXQgdGhlIGVuZCBvZiB0aGUgYW5ndWxhciBsaWZlY3ljbGUgd2hlblxuICAgICAgLy8gdGhlIHRvb2x0aXAgZGVsYXkgaXMgbW9yZSB0aGFuIDBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayh0aWNrZXQsICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUwpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MO1xuICAgIH07XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgXG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgQ29udGVudENoaWxkLFxuICBWaWV3Q2hpbGQsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCwgVGRTZXJpZXNDb21wb25lbnQgfSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuaW1wb3J0IHsgVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUsIFRkVG9vbHRpcENvbnRleHQgfSBmcm9tICcuL3Rvb2x0aXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzLXRvb2x0aXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZFNlcmllc1Rvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG5cbiAgX2NvbnRleHQ6IFRkVG9vbHRpcENvbnRleHQgPSBuZXcgVGRUb29sdGlwQ29udGV4dCgpO1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnk7XG5cbiAgQElucHV0KCdmb3JtYXR0ZXInKSBmb3JtYXR0ZXI6IGFueTtcbiAgLy8gUGFyZW50IHRvb2x0aXAgdHJpZ2dlciBtdXN0IGJlIHNldCB0byAnaXRlbScgdG8gcmVuZGVyIHRoZXNlIHByb3BlcnRpZXNcbiAgQElucHV0KCdwb3NpdGlvbicpIHBvc2l0aW9uOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bWJlcltdO1xuICBASW5wdXQoJ2JhY2tncm91bmRDb2xvcicpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJ3JnYmEoNTAsNTAsNTAsMC43KSc7XG4gIEBJbnB1dCgnYm9yZGVyQ29sb3InKSBib3JkZXJDb2xvcjogc3RyaW5nID0gJyMzMzMnO1xuICBASW5wdXQoJ2JvcmRlcldpZHRoJykgYm9yZGVyV2lkdGg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgncGFkZGluZycpIHBhZGRpbmc6IG51bWJlciA9IDU7XG4gIEBJbnB1dCgndGV4dFN0eWxlJykgdGV4dFN0eWxlOiBhbnkgPSB7XG4gICAgY29sb3I6ICcjRkZGJyxcbiAgfTtcbiAgQElucHV0KCdleHRyYUNzc1RleHQnKSBleHRyYUNzc1RleHQ6IHN0cmluZztcblxuICBAQ29udGVudENoaWxkKFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlLCB7cmVhZDogVGVtcGxhdGVSZWZ9KSBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcENvbnRlbnQnKSBmdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zZXJpZXNDb21wb25lbnQ6IFRkU2VyaWVzQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LCB7XG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBib3JkZXJDb2xvcjogdGhpcy5ib3JkZXJDb2xvcixcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgdGV4dFN0eWxlOiB0aGlzLnRleHRTdHlsZSxcbiAgICAgIGV4dHJhQ3NzVGV4dDogdGhpcy5leHRyYUNzc1RleHQsXG4gICAgICBmb3JtYXR0ZXI6IHRoaXMuZm9ybWF0dGVyID8gdGhpcy5mb3JtYXR0ZXIgOiB0aGlzLl9mb3JtYXR0ZXIoKSxcbiAgICB9KTtcbiAgICAvLyBzZXQgc2VyaWVzIHRvb2x0aXAgY29uZmlndXJhdGlvbiBpbiBwYXJlbnQgY2hhcnQgYW5kIHJlbmRlciBuZXcgY29uZmlndXJhdGlvbnNcbiAgICB0aGlzLl9zZXJpZXNDb21wb25lbnQuc2V0U3RhdGVPcHRpb24oJ3Rvb2x0aXAnLCBjb25maWcpO1xuICB9XG4gIFxuICAvKipcbiAgICogRm9ybWF0dGVyIGZvciB0b29sdGlwXG4gICAqXG4gICAqL1xuICBwcml2YXRlIF9mb3JtYXR0ZXIoKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiAocGFyYW1zOiBhbnksIHRpY2tldDogYW55LCBjYWxsYmFjazogKHRpY2tldDogc3RyaW5nLCBodG1sOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMuX2NvbnRleHQgPSB7XG4gICAgICAgICRpbXBsaWNpdDogcGFyYW1zLFxuICAgICAgICB0aWNrZXQ6IHRpY2tldCxcbiAgICAgIH07XG4gICAgICAvLyB0aW1lb3V0IHNldCBzaW5jZSB3ZSBuZWVkIHRvIHNldCB0aGUgSFRNTCBhdCB0aGUgZW5kIG9mIHRoZSBhbmd1bGFyIGxpZmVjeWNsZSB3aGVuXG4gICAgICAvLyB0aGUgdG9vbHRpcCBkZWxheSBpcyBtb3JlIHRoYW4gMFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHRpY2tldCwgKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUw7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXJpZXNDb21wb25lbnQucmVtb3ZlU3RhdGVPcHRpb24oJ3Rvb2x0aXAnKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jb21wb25lbnQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IFRkQ2hhcnRUb29sdGlwQ29tcG9uZW50LCBUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRTZXJpZXNUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi9zZXJpZXMtdG9vbHRpcC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgVE9PTFRJUF9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRUb29sdGlwQ29tcG9uZW50LFxuICBUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSxcbiAgVGRTZXJpZXNUb29sdGlwQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVE9PTFRJUF9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRPT0xUSVBfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50VG9vbHRpcEVjaGFydHNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiQmVoYXZpb3JTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIk9wdGlvbmFsIiwiU2tpcFNlbGYiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiU3ViamVjdCIsIkV2ZW50RW1pdHRlciIsImVjaGFydHMuaW5pdCIsImZyb21FdmVudCIsImVjaGFydHMuY29ubmVjdCIsIm1lcmdlIiwiZGVib3VuY2VUaW1lIiwiQ29tcG9uZW50IiwiQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kiLCJDaGFuZ2VEZXRlY3RvclJlZiIsIkVsZW1lbnRSZWYiLCJJbnB1dCIsIk91dHB1dCIsInRzbGliXzEuX19leHRlbmRzIiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiLCJUZFNlcmllc0NvbXBvbmVudCIsImZvcndhcmRSZWYiLCJUZENoYXJ0T3B0aW9uc1NlcnZpY2UiLCJEaXJlY3RpdmUiLCJhc3NpZ25EZWZpbmVkIiwiQ29udGVudENoaWxkIiwiVGVtcGxhdGVSZWYiLCJWaWV3Q2hpbGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQVNBO1lBR1UsYUFBUSxHQUFRLEVBQUUsQ0FBQztZQUNuQixvQkFBZSxHQUFpQixJQUFJQSxvQkFBZSxDQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQStDakY7Ozs7OztRQTdDQyx5Q0FBUzs7Ozs7WUFBVCxVQUFVLE1BQWMsRUFBRSxLQUFVOztvQkFDOUIsT0FBTyxHQUFRLEVBQUU7Z0JBQ3JCLE9BQU8sQ0FBQyxN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