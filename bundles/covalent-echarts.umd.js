(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('echarts/lib/echarts'), require('@angular/common'), require('@covalent/echarts/base'), require('echarts/lib/chart/bar'), require('echarts/lib/chart/line'), require('echarts/lib/chart/scatter'), require('echarts/lib/chart/tree'), require('echarts/lib/component/tooltip'), require('echarts/lib/component/toolbox')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'echarts/lib/echarts', '@angular/common', '@covalent/echarts/base', 'echarts/lib/chart/bar', 'echarts/lib/chart/line', 'echarts/lib/chart/scatter', 'echarts/lib/chart/tree', 'echarts/lib/component/tooltip', 'echarts/lib/component/toolbox'], factory) :
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
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
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
                catch (e_2_1) {
                    e_2 = { error: e_2_1 };
                }
                finally {
                    try {
                        if (_e && !_e.done && (_b = _d.return))
                            _b.call(_d);
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
        try {
            // delete keys that are not in any source
            for (var _f = __values(Object.keys(target)), _g = _f.next(); !_g.done; _g = _f.next()) {
                var key = _g.value;
                if (!keys.has(key)) {
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
            this._destroy = new rxjs.Subject();
            this._widthSubject = new rxjs.Subject();
            this._heightSubject = new rxjs.Subject();
            this._state = {};
            this._options = {};
            this.config = {};
            this.chartClick = new core.EventEmitter();
            this.chartDblclick = new core.EventEmitter();
            this.chartContextmenu = new core.EventEmitter();
            this.magicTypeChanged = new core.EventEmitter();
            this.dataViewChanged = new core.EventEmitter();
            this.datazoom = new core.EventEmitter();
            this.restore = new core.EventEmitter();
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
                rxjs.fromEvent(this._instance, 'click').pipe(operators.takeUntil(this._destroy)).subscribe(function (params) {
                    _this.chartClick.next(params);
                });
                rxjs.fromEvent(this._instance, 'dblclick').pipe(operators.takeUntil(this._destroy)).subscribe(function (params) {
                    _this.chartDblclick.next(params);
                });
                rxjs.fromEvent(this._instance, 'contextmenu').pipe(operators.takeUntil(this._destroy)).subscribe(function (params) {
                    _this.chartContextmenu.next(params);
                });
                rxjs.fromEvent(this._instance, 'magictypechanged').pipe(operators.takeUntil(this._destroy)).subscribe(function (params) {
                    _this.magicTypeChanged.next(params);
                });
                rxjs.fromEvent(this._instance, 'dataviewchanged').pipe(operators.takeUntil(this._destroy)).subscribe(function (params) {
                    _this.dataViewChanged.next(params);
                });
                rxjs.fromEvent(this._instance, 'datazoom').pipe(operators.takeUntil(this._destroy)).subscribe(function (params) {
                    _this.datazoom.next(params);
                });
                rxjs.fromEvent(this._instance, 'restore').pipe(operators.takeUntil(this._destroy)).subscribe(function (params) {
                    _this.restore.next(params);
                });
                if (this.group) {
                    this._instance.group = this.group;
                    echarts.connect(this.group);
                    this._changeDetectorRef.markForCheck();
                }
                rxjs.merge(rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(100)), this._widthSubject.asObservable().pipe(operators.distinctUntilChanged()), this._heightSubject.asObservable().pipe(operators.distinctUntilChanged())).pipe(operators.takeUntil(this._destroy), operators.debounceTime(100)).subscribe(function () {
                    if (_this._instance) {
                        _this._instance.resize();
                        _this._changeDetectorRef.markForCheck();
                    }
                });
                this._optionsService.listen().pipe(operators.tap(function (options) {
                    assignDefined(_this._options, options);
                }), operators.debounceTime(0), operators.takeUntil(this._destroy)).subscribe(function () {
                    _this.render();
                });
                rxjs.timer(500, 250).pipe(operators.takeUntil(this._destroy)).subscribe(function () {
                    if (_this._elementRef && _this._elementRef.nativeElement) {
                        _this._widthSubject.next((( /** @type {?} */(_this._elementRef.nativeElement))).getBoundingClientRect().width);
                        _this._heightSubject.next((( /** @type {?} */(_this._elementRef.nativeElement))).getBoundingClientRect().height);
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
                    echarts.dispose(this._instance);
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
                    this._instance.setOption(assignDefined(this._state, {
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
            chartClick: [{ type: core.Output, args: ['chartClick',] }],
            chartDblclick: [{ type: core.Output, args: ['chartDblclick',] }],
            chartContextmenu: [{ type: core.Output, args: ['chartContextmenu',] }],
            magicTypeChanged: [{ type: core.Output, args: ['magicTypeChanged',] }],
            dataViewChanged: [{ type: core.Output, args: ['dataViewChanged',] }],
            datazoom: [{ type: core.Output, args: ['datazoom',] }],
            restore: [{ type: core.Output, args: ['restore',] }]
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
                var config = assignDefined(this._state, this.config ? this.config : {}, {
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
        TdSeriesComponent.prototype._removeOption = /**
         * @return {?}
         */
            function () {
                this.optionsService.removeArrayOption('series', this._state);
            };
        TdSeriesComponent.propDecorators = {
            config: [{ type: core.Input, args: ['config',] }],
            id: [{ type: core.Input, args: ['id',] }],
            name: [{ type: core.Input, args: ['name',] }],
            color: [{ type: core.Input, args: ['color',] }],
            data: [{ type: core.Input, args: ['data',] }],
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
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-tree]',
                        template: '',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: base.TdSeriesComponent, useExisting: core.forwardRef(function () { return TdChartSeriesTreeComponent; }),
                            }]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesTreeComponent.ctorParameters = function () {
            return [
                { type: base.TdChartOptionsService }
            ];
        };
        TdChartSeriesTreeComponent.propDecorators = {
            zlevel: [{ type: core.Input, args: ['zlevel',] }],
            z: [{ type: core.Input, args: ['z',] }],
            left: [{ type: core.Input, args: ['left',] }],
            top: [{ type: core.Input, args: ['top',] }],
            right: [{ type: core.Input, args: ['right',] }],
            bottom: [{ type: core.Input, args: ['bottom',] }],
            width: [{ type: core.Input, args: ['width',] }],
            height: [{ type: core.Input, args: ['height',] }],
            layout: [{ type: core.Input, args: ['layout',] }],
            orient: [{ type: core.Input, args: ['orient',] }],
            symbol: [{ type: core.Input, args: ['symbol',] }],
            symbolSize: [{ type: core.Input, args: ['symbolSize',] }],
            symbolRotate: [{ type: core.Input, args: ['symbolRotate',] }],
            symbolKeepAspect: [{ type: core.Input, args: ['symbolKeepAspect',] }],
            roam: [{ type: core.Input, args: ['roam',] }],
            expandAndCollapse: [{ type: core.Input, args: ['expandAndCollapse',] }],
            initialTreeDepth: [{ type: core.Input, args: ['initialTreeDepth',] }],
            itemStyle: [{ type: core.Input, args: ['itemStyle',] }],
            label: [{ type: core.Input, args: ['label',] }],
            lineStyle: [{ type: core.Input, args: ['lineStyle',] }],
            leaves: [{ type: core.Input, args: ['leaves',] }],
            emphasis: [{ type: core.Input, args: ['emphasis',] }]
        };
        return TdChartSeriesTreeComponent;
    }(base.TdSeriesComponent));

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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
    var TdChartViewDataFormatterDirective = /** @class */ (function () {
        function TdChartViewDataFormatterDirective() {
        }
        TdChartViewDataFormatterDirective.decorators = [
            { type: core.Directive, args: [{
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
                var config = base.assignDefined(this._state, this.config ? this.config : {}, {
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
                    return (( /** @type {?} */(_this._elementRef.nativeElement))).innerHTML;
                };
            };
        TdChartToolboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-toolbox',
                        template: "<ng-template #toolboxContent\n            [ngTemplateOutlet]=\"formatterTemplate\">\n</ng-template>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdChartToolboxComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.ElementRef },
                { type: base.TdChartOptionsService }
            ];
        };
        TdChartToolboxComponent.propDecorators = {
            config: [{ type: core.Input, args: ['config',] }],
            show: [{ type: core.Input, args: ['show',] }],
            trigger: [{ type: core.Input, args: ['name',] }],
            orient: [{ type: core.Input, args: ['orient',] }],
            itemSize: [{ type: core.Input, args: ['itemSize',] }],
            itemGap: [{ type: core.Input, args: ['itemGap',] }],
            showTitle: [{ type: core.Input, args: ['showTitle',] }],
            label: [{ type: core.Input, args: ['label',] }],
            feature: [{ type: core.Input, args: ['feature',] }],
            iconStyle: [{ type: core.Input, args: ['iconStyle',] }],
            zlevel: [{ type: core.Input, args: ['zlevel',] }],
            z: [{ type: core.Input, args: ['z',] }],
            transitionDuration: [{ type: core.Input, args: ['transitionDuration',] }],
            left: [{ type: core.Input, args: ['left',] }],
            top: [{ type: core.Input, args: ['top',] }],
            right: [{ type: core.Input, args: ['right',] }],
            bottom: [{ type: core.Input, args: ['bottom',] }],
            width: [{ type: core.Input, args: ['width',] }],
            height: [{ type: core.Input, args: ['height',] }],
            formatterTemplate: [{ type: core.ContentChild, args: [TdChartViewDataFormatterDirective, { read: core.TemplateRef },] }],
            fullTemplate: [{ type: core.ViewChild, args: ['toolboxContent',] }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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
    exports.TREE_MODULE_COMPONENTS = TREE_MODULE_COMPONENTS;
    exports.CovalentTreeEchartsModule = CovalentTreeEchartsModule;
    exports.TdChartSeriesTreeComponent = TdChartSeriesTreeComponent;
    exports.TOOLTIP_MODULE_COMPONENTS = TOOLTIP_MODULE_COMPONENTS;
    exports.CovalentTooltipEchartsModule = CovalentTooltipEchartsModule;
    exports.TdTooltipContext = TdTooltipContext;
    exports.TdChartTooltipFormatterDirective = TdChartTooltipFormatterDirective;
    exports.TdChartTooltipComponent = TdChartTooltipComponent;
    exports.TdSeriesTooltipComponent = TdSeriesTooltipComponent;
    exports.TOOLBOX_MODULE_COMPONENTS = TOOLBOX_MODULE_COMPONENTS;
    exports.CovalentToolboxEchartsModule = CovalentToolboxEchartsModule;
    exports.TdChartViewDataFormatterDirective = TdChartViewDataFormatterDirective;
    exports.TdChartToolboxComponent = TdChartToolboxComponent;
    exports.ɵa = CHART_PROVIDER_FACTORY;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy51bWQuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvY2hhcnQtb3B0aW9ucy5zZXJ2aWNlLnRzIiwibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS91dGlscy9hc3NpZ24tZGVmaW5lZC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9jaGFydC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvYXhpcy9heGlzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9heGlzL3gtYXhpcy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvYXhpcy95LWF4aXMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL2Jhc2UubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL3Nlcmllcy9zZXJpZXMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXIvYmFyLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFyL2Jhci5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2xpbmUvbGluZS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2xpbmUvbGluZS5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3NjYXR0ZXIvc2NhdHRlci5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3NjYXR0ZXIvc2NhdHRlci5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3RyZWUvdHJlZS5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3RyZWUvdHJlZS5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3Rvb2x0aXAvc2VyaWVzLXRvb2x0aXAuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sdGlwL3Rvb2x0aXAubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sYm94L3Rvb2xib3guY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sYm94L3Rvb2xib3gubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIFByb3ZpZGVyLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRPcHRpb25zU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XG4gIHByaXZhdGUgX29wdGlvbnNTdWJqZWN0OiBTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odGhpcy5fb3B0aW9ucyk7XG5cbiAgc2V0T3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IG9wdGlvbnM6IGFueSA9IHt9O1xuICAgIG9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgdGhpcy5fb3B0aW9uc1N1YmplY3QubmV4dCh0aGlzLl9vcHRpb25zKTtcbiAgfVxuXG4gIHNldEFycmF5T3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBsZXQgcHJldlZhbHVlOiBhbnlbXSA9IHRoaXMuZ2V0T3B0aW9uKG9wdGlvbik7XG4gICAgaWYgKHByZXZWYWx1ZSkge1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBwcmV2VmFsdWUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICBpbmRleCA+IC0xID8gcHJldlZhbHVlW2luZGV4XSA9IHZhbHVlIDogcHJldlZhbHVlLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2VmFsdWUgPSBbdmFsdWVdO1xuICAgIH1cbiAgICB0aGlzLnNldE9wdGlvbihvcHRpb24sIHByZXZWYWx1ZSk7XG4gIH1cblxuICByZW1vdmVBcnJheU9wdGlvbihvcHRpb246IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSB7XG4gICAgbGV0IHByZXZWYWx1ZTogYW55W10gPSB0aGlzLmdldE9wdGlvbihvcHRpb24pO1xuICAgIGlmIChwcmV2VmFsdWUpIHtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gcHJldlZhbHVlLmluZGV4T2YodmFsdWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEgKSB7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgICBwcmV2VmFsdWVbaW5kZXhdID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldE9wdGlvbihvcHRpb24sIHByZXZWYWx1ZSk7XG4gIH1cblxuICBnZXRPcHRpb24ob3B0aW9uOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnNbb3B0aW9uXTtcbiAgfVxuXG4gIGNsZWFyT3B0aW9uKG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgdGhpcy5zZXRPcHRpb24ob3B0aW9uLCBudWxsKTtcbiAgfVxuXG4gIGxpc3RlbigpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zU3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBDSEFSVF9QUk9WSURFUl9GQUNUT1JZKFxuICBwYXJlbnQ6IFRkQ2hhcnRPcHRpb25zU2VydmljZSk6IFRkQ2hhcnRPcHRpb25zU2VydmljZSB7XG4gIHJldHVybiBwYXJlbnQgfHwgbmV3IFRkQ2hhcnRPcHRpb25zU2VydmljZSgpO1xufVxuXG5leHBvcnQgY29uc3QgQ0hBUlRfUFJPVklERVI6IFByb3ZpZGVyID0ge1xuICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VydmljZSBhdmFpbGFibGUsIHVzZSB0aGF0LiBPdGhlcndpc2UsIHByb3ZpZGUgYSBuZXcgb25lLlxuICBwcm92aWRlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIGRlcHM6IFtbbmV3IE9wdGlvbmFsKCksIG5ldyBTa2lwU2VsZigpLCBUZENoYXJ0T3B0aW9uc1NlcnZpY2VdXSxcbiAgdXNlRmFjdG9yeTogQ0hBUlRfUFJPVklERVJfRkFDVE9SWSxcbn07XG4iLCIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBhc3NpZ25EZWZpbmVkKHRhcmdldDogYW55LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueSB7XG4gIGxldCBrZXlzOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBmb3IgKGNvbnN0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoc291cmNlKSkge1xuICAgICAga2V5cy5hZGQoa2V5KTtcbiAgICAgIGNvbnN0IHZhbDogYW55ID0gc291cmNlW2tleV07XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgfSBlbHNlIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBkZWxldGUga2V5cyB0aGF0IGFyZSBub3QgaW4gYW55IHNvdXJjZVxuICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0YXJnZXQpKSB7XG4gICAgaWYgKCFrZXlzLmhhcyhrZXkpKSB7XG4gICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZWNoYXJ0cyBmcm9tICdlY2hhcnRzL2xpYi9lY2hhcnRzJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLCBDSEFSVF9QUk9WSURFUiB9IGZyb20gJy4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlVXJsczogWycuL2NoYXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtDSEFSVF9QUk9WSURFUl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfZGVzdHJveTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX3dpZHRoU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9oZWlnaHRTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBfaW5zdGFuY2U6IGFueTtcblxuICBnZXQgaW5zdGFuY2UoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG4gIHByaXZhdGUgX29wdGlvbnM6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2dyb3VwJykgZ3JvdXA6IHN0cmluZztcblxuICBAT3V0cHV0KCdjaGFydENsaWNrJykgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgnY2hhcnREYmxjbGljaycpIGNoYXJ0RGJsY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2NoYXJ0Q29udGV4dG1lbnUnKSBjaGFydENvbnRleHRtZW51OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdtYWdpY1R5cGVDaGFuZ2VkJykgbWFnaWNUeXBlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgnZGF0YVZpZXdDaGFuZ2VkJykgZGF0YVZpZXdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdkYXRhem9vbScpIGRhdGF6b29tOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdyZXN0b3JlJykgcmVzdG9yZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnN0YW5jZSA9IGVjaGFydHMuaW5pdCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2NsaWNrJykucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSxcbiAgICApLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuY2hhcnRDbGljay5uZXh0KHBhcmFtcyk7XG4gICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnZGJsY2xpY2snKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5jaGFydERibGNsaWNrLm5leHQocGFyYW1zKTtcbiAgICB9KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdjb250ZXh0bWVudScpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0Q29udGV4dG1lbnUubmV4dChwYXJhbXMpO1xuICAgIH0pO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ21hZ2ljdHlwZWNoYW5nZWQnKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5tYWdpY1R5cGVDaGFuZ2VkLm5leHQocGFyYW1zKTtcbiAgICB9KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdkYXRhdmlld2NoYW5nZWQnKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5kYXRhVmlld0NoYW5nZWQubmV4dChwYXJhbXMpO1xuICAgIH0pO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2RhdGF6b29tJykucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSxcbiAgICApLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZGF0YXpvb20ubmV4dChwYXJhbXMpO1xuICAgIH0pO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ3Jlc3RvcmUnKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZXN0b3JlLm5leHQocGFyYW1zKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgdGhpcy5faW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICAgICAgZWNoYXJ0cy5jb25uZWN0KHRoaXMuZ3JvdXApO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgKSxcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgICAgIHRoaXMuX2hlaWdodFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICksXG4gICAgKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuX2luc3RhbmNlLnJlc2l6ZSgpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5saXN0ZW4oKS5waXBlKFxuICAgICAgdGFwKChvcHRpb25zOiBhbnkpID0+IHtcbiAgICAgICAgYXNzaWduRGVmaW5lZCh0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIH0pLFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gICAgdGltZXIoNTAwLCAyNTApLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KCg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XG4gICAgICAgIHRoaXMuX2hlaWdodFN1YmplY3QubmV4dCgoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlLmNsZWFyKCk7XG4gICAgICBlY2hhcnRzLmRpc3Bvc2UodGhpcy5faW5zdGFuY2UpO1xuICAgIH1cbiAgICB0aGlzLl9kZXN0cm95Lm5leHQodHJ1ZSk7XG4gICAgdGhpcy5fZGVzdHJveS51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgY2hlY2tUb29sYm94SGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnRvb2xib3guaGVpZ2h0ID8gdGhpcy5jb25maWcudG9vbGJveC5oZWlnaHQgOiAnNDAnO1xuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2Uuc2V0T3B0aW9uKGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHtcbiAgICAgICAgZ3JpZDoge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgbGVmdDogJzIwJyxcbiAgICAgICAgICByaWdodDogJzIwJyxcbiAgICAgICAgICBib3R0b206ICh0aGlzLmNvbmZpZy50b29sYm94ICYmIHR5cGVvZiB0aGlzLmNvbmZpZy50b29sYm94LmJvdHRvbSA9PT0gJ251bWJlcicpIFxuICAgICAgICAgIHx8ICh0aGlzLmNvbmZpZy50b29sYm94ICYmIHRoaXMuY29uZmlnLnRvb2xib3guYm90dG9tKSA/IHRoaXMuY2hlY2tUb29sYm94SGVpZ2h0KCkgOiAnMTAnLFxuICAgICAgICAgIHRvcDogKHRoaXMuY29uZmlnLnRvb2xib3ggJiYgdHlwZW9mIHRoaXMuY29uZmlnLnRvb2xib3gudG9wID09PSAnbnVtYmVyJykgXG4gICAgICAgICAgfHwgKHRoaXMuY29uZmlnLnRvb2xib3ggJiYgdGhpcy5jb25maWcudG9vbGJveC50b3ApID8gdGhpcy5jaGVja1Rvb2xib3hIZWlnaHQoKSA6ICcxMCcsXG4gICAgICAgICAgY29udGFpbkxhYmVsOiB0cnVlLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0ZDRkNGQycsXG4gICAgICAgIH0sXG4gICAgICB9LCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHRoaXMuX29wdGlvbnMpLCB0cnVlKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgXG4gIElUZEF4aXNMaW5lLFxuICBJVGRBeGlzTGFiZWwsXG4gIElUZEF4aXNUaWNrLFxuICBJVGRTcGxpdExpbmUsXG4gIElUZFNwbGl0QXJlYSxcbiAgSVRkQXhpc1BvaW50ZXIsXG4gIFRkQXhpc1R5cGUsXG4gIFRkTmFtZUxvY2F0aW9uLFxuICBUZFhBeGlzUG9zaXRpb24sXG4gIFRkWUF4aXNQb3NpdGlvbiB9IGZyb20gJy4vYXhpcy5pbnRlcmZhY2UnO1xuICBcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZENoYXJ0QXhpc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7XG4gICAgYXhpc0xpbmU6IHtcbiAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICBjb2xvcjogJyNBQkFCQUInLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNwbGl0TGluZToge1xuICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgIGNvbG9yOiAnI0FCQUJBQicsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICBASW5wdXQoJ3Nob3cnKSBzaG93OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCdncmlkSW5kZXgnKSBncmlkSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdvZmZzZXQnKSBvZmZzZXQ6IG51bWJlcjtcbiAgYWJzdHJhY3QgcG9zaXRpb246IFRkWEF4aXNQb3NpdGlvbiB8IFRkWUF4aXNQb3NpdGlvbjtcbiAgQElucHV0KCd0eXBlJykgdHlwZTogVGRBeGlzVHlwZTtcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ25hbWVMb2NhdGlvbicpIG5hbWVMb2NhdGlvbjogVGROYW1lTG9jYXRpb247XG4gIEBJbnB1dCgnbmFtZVRleHRTdHlsZScpIG5hbWVUZXh0U3R5bGU6IGFueTtcbiAgQElucHV0KCduYW1lR2FwJykgbmFtZUdhcDogbnVtYmVyO1xuICBASW5wdXQoJ25hbWVSb3RhdGUnKSBuYW1lUm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgnaW52ZXJzZScpIGludmVyc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgnYm91bmRhcnlHYXAnKSBib3VuZGFyeUdhcDogYm9vbGVhbiB8IHN0cmluZ1tdO1xuICBASW5wdXQoJ21pbicpIG1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ21heCcpIG1heDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3NjYWxlJykgc2NhbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgnbWluSW50ZXJ2YWwnKSBtaW5JbnRlcnZhbDogbnVtYmVyO1xuICBASW5wdXQoJ2ludGVydmFsJykgaW50ZXJ2YWw6IG51bWJlcjtcbiAgQElucHV0KCdsb2dCYXNlJykgbG9nQmFzZTogbnVtYmVyO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcbiAgQElucHV0KCd0cmlnZ2VyRXZlbnQnKSB0cmlnZ2VyRXZlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgnYXhpc0xpbmUnKSBheGlzTGluZTogSVRkQXhpc0xpbmU7XG4gIEBJbnB1dCgnYXhpc1RpY2snKSBheGlzVGljazogSVRkQXhpc1RpY2s7XG4gIEBJbnB1dCgnYXhpc0xhYmVsJykgYXhpc0xhYmVsOiBJVGRBeGlzTGFiZWw7XG4gIEBJbnB1dCgnc3BsaXRMaW5lJykgc3BsaXRMaW5lOiBJVGRTcGxpdExpbmU7XG4gIEBJbnB1dCgnc3BsaXRBcmVhJykgc3BsaXRBcmVhOiBJVGRTcGxpdEFyZWE7XG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueTtcbiAgQElucHV0KCdheGlzUG9pbnRlcicpIGF4aXNQb2ludGVyOiBJVGRBeGlzUG9pbnRlcjtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F4aXNPcHRpb246IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBzaG93OiB0aGlzLnNob3csXG4gICAgICBncmlkSW5kZXg6IHRoaXMuZ3JpZEluZGV4LFxuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbmFtZUxvY2F0aW9uOiB0aGlzLm5hbWVMb2NhdGlvbixcbiAgICAgIG5hbWVUZXh0U3R5bGU6IHRoaXMubmFtZVRleHRTdHlsZSxcbiAgICAgIG5hbWVHYXA6IHRoaXMubmFtZUdhcCxcbiAgICAgIG5hbWVSb3RhdGU6IHRoaXMubmFtZVJvdGF0ZSxcbiAgICAgIGludmVyc2U6IHRoaXMuaW52ZXJzZSxcbiAgICAgIGJvdW5kYXJ5R2FwOiB0aGlzLmJvdW5kYXJ5R2FwLFxuICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICBzY2FsZTogdGhpcy5zY2FsZSxcbiAgICAgIG1pbkludGVydmFsOiB0aGlzLm1pbkludGVydmFsLFxuICAgICAgaW50ZXJ2YWw6IHRoaXMuaW50ZXJ2YWwsXG4gICAgICBsb2dCYXNlOiB0aGlzLmxvZ0Jhc2UsXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgdHJpZ2dlckV2ZW50OiB0aGlzLnRyaWdnZXJFdmVudCxcbiAgICAgIGF4aXNMaW5lOiB0aGlzLmF4aXNMaW5lLFxuICAgICAgYXhpc1RpY2s6IHRoaXMuYXhpc1RpY2ssXG4gICAgICBheGlzTGFiZWw6IHRoaXMuYXhpc0xhYmVsLFxuICAgICAgc3BsaXRMaW5lOiB0aGlzLnNwbGl0TGluZSxcbiAgICAgIHNwbGl0QXJlYTogdGhpcy5zcGxpdEFyZWEsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBheGlzUG9pbnRlcjogdGhpcy5heGlzUG9pbnRlcixcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgfSk7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2Uuc2V0QXJyYXlPcHRpb24odGhpcy5fYXhpc09wdGlvbiwgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5jbGVhck9wdGlvbih0aGlzLl9heGlzT3B0aW9uKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBUZFhBeGlzUG9zaXRpb24gIH0gZnJvbSAnLi9heGlzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUZENoYXJ0QXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC14LWF4aXMnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0WEF4aXNDb21wb25lbnQgZXh0ZW5kcyBUZENoYXJ0QXhpc0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCdwb3NpdGlvbicpIHBvc2l0aW9uOiBUZFhBeGlzUG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigneEF4aXMnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFRkWUF4aXNQb3NpdGlvbiAgfSBmcm9tICcuL2F4aXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRkQ2hhcnRBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXktYXhpcycsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRZQXhpc0NvbXBvbmVudCBleHRlbmRzIFRkQ2hhcnRBeGlzQ29tcG9uZW50IHtcblxuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IFRkWUF4aXNQb3NpdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd5QXhpcycsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRkQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZENoYXJ0WEF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMveC1heGlzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZENoYXJ0WUF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMveS1heGlzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBCQVNFX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydENvbXBvbmVudCxcbiAgVGRDaGFydFhBeGlzQ29tcG9uZW50LFxuICBUZENoYXJ0WUF4aXNDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCQVNFX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQkFTRV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRCYXNlRWNoYXJ0c01vZHVsZSB7XG5cbn1cbiIsImltcG9ydCB7IElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuLi91dGlscy9hc3NpZ24tZGVmaW5lZCc7XG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgSVRkU2VyaWVzVG9vbHRpcCB9IGZyb20gJy4uL3Nlcmllcy9zZXJpZXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IElUZEFuaW1hdGlvbiB9IGZyb20gJy4uL2Jhc2UudHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFNlcmllczxUPiBleHRlbmRzIElUZEFuaW1hdGlvbiB7XG4gIGlkPzogc3RyaW5nO1xuICBuYW1lPzogc3RyaW5nO1xuICBjb2xvcj86IHN0cmluZztcbiAgdHlwZT86IFQ7XG5cbiAgdG9vbHRpcD86IElUZFNlcmllc1Rvb2x0aXA7XG59XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZFNlcmllc0NvbXBvbmVudDxUID0gYW55PiBpbXBsZW1lbnRzIElUZFNlcmllczxUPiwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSAge1xuXG4gIHByaXZhdGUgX3R5cGU6IFQ7XG5cbiAgZ2V0IHR5cGUoKTogVCB7XG4gICAgcmV0dXJuIHRoaXMuX3R5cGU7XG4gIH1cblxuICBfc3RhdGU6IGFueSA9IHt9O1xuICBfb3B0aW9uczogYW55ID0ge307XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnY29sb3InKSBjb2xvcjogc3RyaW5nO1xuICBASW5wdXQoJ2RhdGEnKSBkYXRhOiBhbnlbXTtcblxuICBASW5wdXQoJ2FuaW1hdGlvbicpIGFuaW1hdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCdhbmltYXRpb25UaHJlc2hvbGQnKSBhbmltYXRpb25UaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdhbmltYXRpb25EdXJhdGlvbicpIGFuaW1hdGlvbkR1cmF0aW9uOiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCdhbmltYXRpb25FYXNpbmcnKSBhbmltYXRpb25FYXNpbmc6IHN0cmluZztcbiAgQElucHV0KCdhbmltYXRpb25EZWxheScpIGFuaW1hdGlvbkRlbGF5OiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCdhbmltYXRpb25EdXJhdGlvblVwZGF0ZScpIGFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlOiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCdhbmltYXRpb25FYXNpbmdVcGRhdGUnKSBhbmltYXRpb25FYXNpbmdVcGRhdGU6IHN0cmluZztcbiAgQElucHV0KCdhbmltYXRpb25EZWxheVVwZGF0ZScpIGFuaW1hdGlvbkRlbGF5VXBkYXRlOiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCd0b29sdGlwJykgdG9vbHRpcDogSVRkU2VyaWVzVG9vbHRpcDtcblxuICBjb25zdHJ1Y3Rvcih0eXBlOiBULCBwcm90ZWN0ZWQgb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cbiAgXG4gIHNldFN0YXRlT3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgcmVtb3ZlU3RhdGVPcHRpb24ob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICB0aGlzLl9vcHRpb25zW29wdGlvbl0gPSBudWxsO1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIGFic3RyYWN0IGdldENvbmZpZygpOiBhbnk7XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBhbmltYXRpb246IHRoaXMuYW5pbWF0aW9uLFxuICAgICAgYW5pbWF0aW9uVGhyZXNob2xkOiB0aGlzLmFuaW1hdGlvblRocmVzaG9sZCxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgYW5pbWF0aW9uRWFzaW5nOiB0aGlzLmFuaW1hdGlvbkVhc2luZyxcbiAgICAgIGFuaW1hdGlvbkRlbGF5OiB0aGlzLmFuaW1hdGlvbkRlbGF5LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb25VcGRhdGU6IHRoaXMuYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUsXG4gICAgICBhbmltYXRpb25FYXNpbmdVcGRhdGU6IHRoaXMuYW5pbWF0aW9uRWFzaW5nVXBkYXRlLFxuICAgICAgYW5pbWF0aW9uRGVsYXlVcGRhdGU6IHRoaXMuYW5pbWF0aW9uRGVsYXlVcGRhdGUsXG4gICAgICB0b29sdGlwOiB0aGlzLnRvb2x0aXAsXG4gICAgfSAsIHRoaXMuZ2V0Q29uZmlnKCksIHRoaXMuX29wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9uc1NlcnZpY2Uuc2V0QXJyYXlPcHRpb24oJ3NlcmllcycsIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5vcHRpb25zU2VydmljZS5yZW1vdmVBcnJheU9wdGlvbignc2VyaWVzJywgdGhpcy5fc3RhdGUpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgVGRDb29yZGluYXRlU3lzdGVtLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZEVtcGhhc2lzLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBJVGRNYXJrUG9pbnQsXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgSVRkU2VyaWVzLFxuICBJVGRMYWJlbCxcbiAgVGRQcm9ncmVzc2l2ZUNodW5rTW9kZSxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEJhclNlcmllcyBleHRlbmRzIElUZFNlcmllczwnYmFyJz4ge1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBMYWJlbD86IElUZExhYmVsO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIHN0YWNrPzogc3RyaW5nO1xuICBjdXJzb3I/OiBzdHJpbmc7XG4gIGJhcldpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBiYXJNYXhXaWR0aD86IG51bWJlciB8IHN0cmluZztcbiAgYmFyTWluSGVpZ2h0PzogbnVtYmVyO1xuICBiYXJHYXA/OiBzdHJpbmc7XG4gIGJhckNhdGVnb3J5R2FwPzogc3RyaW5nO1xuICBsYXJnZT86IGJvb2xlYW47XG4gIGxhcmdlVGhyZXNob2xkPzogbnVtYmVyO1xuICBwcm9ncmVzc2l2ZT86IG51bWJlcjtcbiAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIHByb2dyZXNzaXZlQ2h1bmtNb2RlPzogVGRQcm9ncmVzc2l2ZUNodW5rTW9kZTtcbiAgZGltZW5zaW9ucz86IGFueVtdO1xuICBlbmNvZGU/OiBhbnk7XG4gIHNlcmllc0xheW91dEJ5PzogVGRTZXJpZXNMYXlvdXRCeTtcbiAgZGF0YXNldEluZGV4PzogbnVtYmVyO1xuICBkYXRhPzogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgWmxldmVsPzogMDtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLWJhcl0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNCYXJDb21wb25lbnQpLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc0JhckNvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdiYXInPiBpbXBsZW1lbnRzIElUZEJhclNlcmllcyB7XG5cbiAgQElucHV0KCdjb29yZGluYXRlU3lzdGVtJykgY29vcmRpbmF0ZVN5c3RlbTogVGRDb29yZGluYXRlU3lzdGVtO1xuICBASW5wdXQoJ3hBeGlzSW5kZXgnKSB4QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgneUF4aXNJbmRleCcpIHlBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdsZWdlbmRIb3ZlckxpbmsnKSBsZWdlbmRIb3Zlckxpbms6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3RhY2snKSBzdGFjazogc3RyaW5nO1xuICBASW5wdXQoJ2N1cnNvcicpIGN1cnNvcjogc3RyaW5nO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IGFueTtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbiAgQElucHV0KCdiYXJXaWR0aCcpIGJhcldpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgnYmFyTWF4V2lkdGgnKSBiYXJNYXhXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoJ2Jhck1pbkhlaWdodCcpIGJhck1pbkhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoJ2JhckdhcCcpIGJhckdhcDogc3RyaW5nO1xuICBASW5wdXQoJ2JhckNhdGVnb3J5R2FwJykgYmFyQ2F0ZWdvcnlHYXA6IHN0cmluZztcbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBib29sZWFuO1xuICBASW5wdXQoJ2xhcmdlVGhyZXNob2xkJykgbGFyZ2VUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdwcm9ncmVzc2l2ZScpIHByb2dyZXNzaXZlOiBudW1iZXI7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmVUaHJlc2hvbGQnKSBwcm9ncmVzc2l2ZVRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoJ3Byb2dyZXNzaXZlQ2h1bmtNb2RlJykgcHJvZ3Jlc3NpdmVDaHVua01vZGU6IFRkUHJvZ3Jlc3NpdmVDaHVua01vZGU7XG4gIEBJbnB1dCgnZGltZW5zaW9ucycpIGRpbWVuc2lvbnM6IGFueVtdO1xuICBASW5wdXQoJ2VuY29kZScpIGVuY29kZTogYW55O1xuICBASW5wdXQoJ3Nlcmllc0xheW91dEJ5Jykgc2VyaWVzTGF5b3V0Qnk6IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIEBJbnB1dCgnZGF0YXNldEluZGV4JykgZGF0YXNldEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnbWFya1BvaW50JykgbWFya1BvaW50OiBJVGRNYXJrUG9pbnQ7XG4gIEBJbnB1dCgnbWFya0xpbmUnKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgnbWFya0FyZWEnKSBtYXJrQXJlYTogSVRkTWFya0FyZWE7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdiYXInLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvb3JkaW5hdGVTeXN0ZW06IHRoaXMuY29vcmRpbmF0ZVN5c3RlbSxcbiAgICAgIHhBeGlzSW5kZXg6IHRoaXMueEF4aXNJbmRleCxcbiAgICAgIHlBeGlzSW5kZXg6IHRoaXMueUF4aXNJbmRleCxcbiAgICAgIGxlZ2VuZEhvdmVyTGluazogdGhpcy5sZWdlbmRIb3ZlckxpbmssXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIGN1cnNvcjogdGhpcy5jdXJzb3IsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIGJhcldpZHRoOiB0aGlzLmJhcldpZHRoLFxuICAgICAgYmFyTWF4V2lkdGg6IHRoaXMuYmFyTWF4V2lkdGgsXG4gICAgICBiYXJNaW5IZWlnaHQ6IHRoaXMuYmFyTWluSGVpZ2h0LFxuICAgICAgYmFyR2FwOiB0aGlzLmJhckdhcCxcbiAgICAgIGJhckNhdGVnb3J5R2FwOiB0aGlzLmJhckNhdGVnb3J5R2FwLFxuICAgICAgbGFyZ2U6IHRoaXMubGFyZ2UsXG4gICAgICBsYXJnZVRocmVzaG9sZDogdGhpcy5sYXJnZVRocmVzaG9sZCxcbiAgICAgIHByb2dyZXNzaXZlOiB0aGlzLnByb2dyZXNzaXZlLFxuICAgICAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ6IHRoaXMucHJvZ3Jlc3NpdmVUaHJlc2hvbGQsXG4gICAgICBwcm9ncmVzc2l2ZUNodW5rTW9kZTogdGhpcy5wcm9ncmVzc2l2ZUNodW5rTW9kZSxcbiAgICAgIGRpbWVuc2lvbnM6IHRoaXMuZGltZW5zaW9ucyxcbiAgICAgIGVuY29kZTogdGhpcy5lbmNvZGUsXG4gICAgICBzZXJpZXNMYXlvdXRCeTogdGhpcy5zZXJpZXNMYXlvdXRCeSxcbiAgICAgIGRhdGFzZXRJbmRleDogdGhpcy5kYXRhc2V0SW5kZXgsXG4gICAgICBtYXJrUG9pbnQ6IHRoaXMubWFya1BvaW50LFxuICAgICAgbWFya0xpbmU6IHRoaXMubWFya0xpbmUsXG4gICAgICBtYXJrQXJlYTogdGhpcy5tYXJrQXJlYSxcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCAnZWNoYXJ0cy9saWIvY2hhcnQvYmFyJztcblxuaW1wb3J0IHsgVGRDaGFydFNlcmllc0JhckNvbXBvbmVudCB9IGZyb20gJy4vYmFyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBCQVJfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0U2VyaWVzQmFyQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQkFSX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQkFSX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEJhckVjaGFydHNNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFxuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIFRkQ29vcmRpbmF0ZVN5c3RlbSxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZExhYmVsLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZExpbmVTdHlsZSxcbiAgSVRkQXJlYVN0eWxlLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBJVGRNYXJrUG9pbnQsXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgSVRkRW1waGFzaXMsXG4gIElUZFNlcmllcyxcbiAgSVRkU2hhZG93LFxuICBUZFNlcmllc0NvbXBvbmVudCxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCB0eXBlIFRkU2FtcGxpbmcgPSAnYXZlcmFnZScgfCAnbWF4JyB8ICdtaW4nIHwgJ3N1bSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTGluZVNlcmllcyBleHRlbmRzIElUZFNlcmllczwnbGluZSc+LCBJVGRTaGFkb3cge1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBwb2xhckluZGV4PzogbnVtYmVyO1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgc3ltYm9sU2l6ZT86IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldD86IGFueVtdO1xuICBzaG93U3ltYm9sPzogYm9vbGVhbjtcbiAgc2hvd0FsbFN5bWJvbD86IGJvb2xlYW4gfCAnYXV0byc7XG4gIGhvdmVyQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgbGVnZW5kSG92ZXJMaW5rPzogYm9vbGVhbjtcbiAgc3RhY2s/OiBzdHJpbmc7XG4gIGN1cnNvcj86IHN0cmluZztcbiAgY29ubmVjdE51bGxzPzogYm9vbGVhbjtcbiAgY2xpcE92ZXJmbG93PzogYm9vbGVhbjtcbiAgc3RlcD86IHN0cmluZyB8IGJvb2xlYW47XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgbGluZVN0eWxlPzogSVRkTGluZVN0eWxlO1xuICB3aWR0aD86IG51bWJlcjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgYXJlYVN0eWxlPzogSVRkQXJlYVN0eWxlO1xuICBlbXBoYXNpcz86IElUZEVtcGhhc2lzO1xuICBzbW9vdGg/OiBib29sZWFuIHwgbnVtYmVyO1xuICBzbW9vdGhNb25vdG9uZT86IHN0cmluZztcbiAgc2FtcGxpbmc/OiBUZFNhbXBsaW5nO1xuICBkaW1lbnNpb25zPzogYW55W107XG4gIGVuY29kZT86IGFueTtcbiAgc2VyaWVzTGF5b3V0Qnk/OiBUZFNlcmllc0xheW91dEJ5O1xuICBkYXRhc2V0SW5kZXg/OiBudW1iZXI7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICB6bGV2ZWw/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNpbGVudD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC1saW5lXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc0xpbmVDb21wb25lbnQpLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc0xpbmVDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwnbGluZSc+IGltcGxlbWVudHMgSVRkTGluZVNlcmllcyB7XG5cbiAgQElucHV0KCdjb29yZGluYXRlU3lzdGVtJykgY29vcmRpbmF0ZVN5c3RlbTogVGRDb29yZGluYXRlU3lzdGVtO1xuICBASW5wdXQoJ3hBeGlzSW5kZXgnKSB4QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgneUF4aXNJbmRleCcpIHlBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdwb2xhckluZGV4JykgcG9sYXJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3N5bWJvbCcpIHN5bWJvbDogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIEBJbnB1dCgnc3ltYm9sU2l6ZScpIHN5bWJvbFNpemU6IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnc3ltYm9sUm90YXRlJykgc3ltYm9sUm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgnc3ltYm9sS2VlcEFzcGVjdCcpIHN5bWJvbEtlZXBBc3BlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3ltYm9sT2Zmc2V0Jykgc3ltYm9sT2Zmc2V0OiBhbnlbXTtcbiAgQElucHV0KCdzaG93U3ltYm9sJykgc2hvd1N5bWJvbDogYm9vbGVhbjtcbiAgQElucHV0KCdzaG93QWxsU3ltYm9sJykgc2hvd0FsbFN5bWJvbDogYm9vbGVhbjtcbiAgQElucHV0KCdob3ZlckFuaW1hdGlvbicpIGhvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoJ2xlZ2VuZEhvdmVyTGluaycpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCdzdGFjaycpIHN0YWNrOiBzdHJpbmc7XG4gIEBJbnB1dCgnY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgnY29ubmVjdE51bGxzJykgY29ubmVjdE51bGxzOiBib29sZWFuO1xuICBASW5wdXQoJ2NsaXBPdmVyZmxvdycpIGNsaXBPdmVyZmxvdzogYm9vbGVhbjtcbiAgQElucHV0KCdzdGVwJykgc3RlcDogc3RyaW5nIHwgYm9vbGVhbjtcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdsaW5lU3R5bGUnKSBsaW5lU3R5bGU6IElUZExpbmVTdHlsZTtcbiAgQElucHV0KCdhcmVhU3R5bGUnKSBhcmVhU3R5bGU6IElUZEFyZWFTdHlsZTtcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbiAgQElucHV0KCdzbW9vdGgnKSBzbW9vdGg6IGJvb2xlYW4gfCBudW1iZXI7XG4gIEBJbnB1dCgnc21vb3RoTW9ub3RvbmUnKSBzbW9vdGhNb25vdG9uZTogc3RyaW5nO1xuICBASW5wdXQoJ3NhbXBsaW5nJykgc2FtcGxpbmc6IFRkU2FtcGxpbmc7XG4gIEBJbnB1dCgnZGltZW5zaW9ucycpIGRpbWVuc2lvbnM6IGFueVtdO1xuICBASW5wdXQoJ2VuY29kZScpIGVuY29kZTogYW55O1xuICBASW5wdXQoJ3Nlcmllc0xheW91dEJ5Jykgc2VyaWVzTGF5b3V0Qnk6IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIEBJbnB1dCgnZGF0YXNldEluZGV4JykgZGF0YXNldEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnbWFya1BvaW50JykgbWFya1BvaW50OiBJVGRNYXJrUG9pbnQ7XG4gIEBJbnB1dCgnbWFya0xpbmUnKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgnbWFya0FyZWEnKSBtYXJrQXJlYTogSVRkTWFya0FyZWE7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcbiAgQElucHV0KCdzaWxlbnQnKSBzaWxlbnQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcignbGluZScsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogdGhpcy5jb29yZGluYXRlU3lzdGVtLFxuICAgICAgeEF4aXNJbmRleDogdGhpcy54QXhpc0luZGV4LFxuICAgICAgeUF4aXNJbmRleDogdGhpcy55QXhpc0luZGV4LFxuICAgICAgcG9sYXJJbmRleDogdGhpcy5wb2xhckluZGV4LFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgIHN5bWJvbFNpemU6IHRoaXMuc3ltYm9sU2l6ZSxcbiAgICAgIHN5bWJvbFJvdGF0ZTogdGhpcy5zeW1ib2xSb3RhdGUsXG4gICAgICBzeW1ib2xLZWVwQXNwZWN0OiB0aGlzLnN5bWJvbEtlZXBBc3BlY3QsXG4gICAgICBzeW1ib2xPZmZzZXQ6IHRoaXMuc3ltYm9sT2Zmc2V0LFxuICAgICAgc2hvd1N5bWJvbDogdGhpcy5zaG93U3ltYm9sLFxuICAgICAgc2hvd0FsbFN5bWJvbDogdGhpcy5zaG93QWxsU3ltYm9sLFxuICAgICAgaG92ZXJBbmltYXRpb246IHRoaXMuaG92ZXJBbmltYXRpb24sXG4gICAgICBsZWdlbmRIb3Zlckxpbms6IHRoaXMubGVnZW5kSG92ZXJMaW5rLFxuICAgICAgc3RhY2s6IHRoaXMuc3RhY2ssXG4gICAgICBjdXJzb3I6IHRoaXMuY3Vyc29yLFxuICAgICAgY29ubmVjdE51bGxzOiB0aGlzLmNvbm5lY3ROdWxscyxcbiAgICAgIGNsaXBPdmVyZmxvdzogdGhpcy5jbGlwT3ZlcmZsb3csXG4gICAgICBzdGVwOiB0aGlzLnN0ZXAsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBsaW5lU3R5bGU6IHRoaXMubGluZVN0eWxlLFxuICAgICAgYXJlYVN0eWxlOiB0aGlzLmFyZWFTdHlsZSxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgICAgc21vb3RoOiB0aGlzLnNtb290aCxcbiAgICAgIHNtb290aE1vbm90b25lOiB0aGlzLnNtb290aE1vbm90b25lLFxuICAgICAgc2FtcGxpbmc6IHRoaXMuc2FtcGxpbmcsXG4gICAgICBkaW1lbnNpb25zOiB0aGlzLmRpbWVuc2lvbnMsXG4gICAgICBlbmNvZGU6IHRoaXMuZW5jb2RlLFxuICAgICAgc2VyaWVzTGF5b3V0Qnk6IHRoaXMuc2VyaWVzTGF5b3V0QnksXG4gICAgICBkYXRhc2V0SW5kZXg6IHRoaXMuZGF0YXNldEluZGV4LFxuICAgICAgbWFya1BvaW50OiB0aGlzLm1hcmtQb2ludCxcbiAgICAgIG1hcmtMaW5lOiB0aGlzLm1hcmtMaW5lLFxuICAgICAgbWFya0FyZWE6IHRoaXMubWFya0FyZWEsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICB9O1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgJ2VjaGFydHMvbGliL2NoYXJ0L2xpbmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0U2VyaWVzTGluZUNvbXBvbmVudCB9IGZyb20gJy4vbGluZS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgTElORV9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRTZXJpZXNMaW5lQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgTElORV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIExJTkVfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50TGluZUVjaGFydHNNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFxuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIFRkQ29vcmRpbmF0ZVN5c3RlbSxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRMYWJlbCxcbiAgSVRkRW1waGFzaXMsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG4gIElUZFNlcmllcyxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2NhdHRlclNlcmllcyBleHRlbmRzIElUZFNlcmllczwnc2NhdHRlcic+IHtcbiAgY29vcmRpbmF0ZVN5c3RlbT86IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgeEF4aXNJbmRleD86IG51bWJlcjtcbiAgeUF4aXNJbmRleD86IG51bWJlcjtcbiAgcG9sYXJJbmRleD86IG51bWJlcjtcbiAgZ2VvSW5kZXg/OiBudW1iZXI7XG4gIGNhbGVuZGFySW5kZXg/OiBudW1iZXI7XG4gIGhvdmVyQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgbGVnZW5kSG92ZXJMaW5rPzogYm9vbGVhbjtcbiAgc3ltYm9sPzogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIHN5bWJvbFNpemU/OiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBzeW1ib2xSb3RhdGU/OiBudW1iZXI7XG4gIHN5bWJvbEtlZXBBc3BlY3Q/OiBib29sZWFuO1xuICBzeW1ib2xPZmZzZXQ/OiBhbnlbXTtcbiAgbGFyZ2U/OiBib29sZWFuO1xuICBsYXJnZVRocmVzaG9sZD86IG51bWJlcjtcbiAgY3Vyc29yPzogc3RyaW5nO1xuICBjb25uZWN0TnVsbHM/OiBib29sZWFuO1xuICBjbGlwT3ZlcmZsb3c/OiBib29sZWFuO1xuICBzdGVwPzogYm9vbGVhbjtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgaXRlbVN0eWxlPzogYW55O1xuICBlbXBoYXNpcz86IElUZEVtcGhhc2lzO1xuICBwcm9ncmVzc2l2ZT86IG51bWJlcjtcbiAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIGRpbWVuc2lvbnM/OiBhbnlbXTtcbiAgZW5jb2RlPzogYW55O1xuICBzZXJpZXNMYXlvdXRCeT86IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIGRhdGFzZXRJbmRleD86IG51bWJlcjtcbiAgZGF0YT86IGFueVtdO1xuICBtYXJrUG9pbnQ/OiBJVGRNYXJrUG9pbnQ7XG4gIG1hcmtMaW5lPzogSVRkTWFya0xpbmU7XG4gIG1hcmtBcmVhPzogSVRkTWFya0FyZWE7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cbiAgXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtc2NhdHRlcl0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNTY2F0dGVyQ29tcG9uZW50KSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNTY2F0dGVyQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J3NjYXR0ZXInPiBpbXBsZW1lbnRzIElUZFNjYXR0ZXJTZXJpZXMge1xuXG4gIEBJbnB1dCgnY29vcmRpbmF0ZVN5c3RlbScpIGNvb3JkaW5hdGVTeXN0ZW06IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgQElucHV0KCd4QXhpc0luZGV4JykgeEF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3lBeGlzSW5kZXgnKSB5QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgncG9sYXJJbmRleCcpIHBvbGFySW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdnZW9JbmRleCcpIGdlb0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnY2FsZW5kYXJJbmRleCcpIGNhbGVuZGFySW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdob3ZlckFuaW1hdGlvbicpIGhvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoJ2xlZ2VuZEhvdmVyTGluaycpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCdzeW1ib2wnKSBzeW1ib2w6IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBASW5wdXQoJ3N5bWJvbFNpemUnKSBzeW1ib2xTaXplOiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ3N5bWJvbFJvdGF0ZScpIHN5bWJvbFJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ3N5bWJvbEtlZXBBc3BlY3QnKSBzeW1ib2xLZWVwQXNwZWN0OiBib29sZWFuO1xuICBASW5wdXQoJ3N5bWJvbE9mZnNldCcpIHN5bWJvbE9mZnNldDogYW55W107XG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogYm9vbGVhbjtcbiAgQElucHV0KCdsYXJnZVRocmVzaG9sZCcpIGxhcmdlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgnY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmUnKSBwcm9ncmVzc2l2ZTogbnVtYmVyO1xuICBASW5wdXQoJ3Byb2dyZXNzaXZlVGhyZXNob2xkJykgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdkaW1lbnNpb25zJykgZGltZW5zaW9uczogYW55W107XG4gIEBJbnB1dCgnZW5jb2RlJykgZW5jb2RlOiBhbnk7XG4gIEBJbnB1dCgnc2VyaWVzTGF5b3V0QnknKSBzZXJpZXNMYXlvdXRCeTogVGRTZXJpZXNMYXlvdXRCeTtcbiAgQElucHV0KCdkYXRhc2V0SW5kZXgnKSBkYXRhc2V0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbiAgQElucHV0KCdtYXJrTGluZScpIG1hcmtMaW5lOiBJVGRNYXJrTGluZTtcbiAgQElucHV0KCdtYXJrQXJlYScpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdzY2F0dGVyJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjb29yZGluYXRlU3lzdGVtOiB0aGlzLmNvb3JkaW5hdGVTeXN0ZW0sXG4gICAgICB4QXhpc0luZGV4OiB0aGlzLnhBeGlzSW5kZXgsXG4gICAgICB5QXhpc0luZGV4OiB0aGlzLnlBeGlzSW5kZXgsXG4gICAgICBwb2xhckluZGV4OiB0aGlzLnBvbGFySW5kZXgsXG4gICAgICBnZW9JbmRleDogdGhpcy5nZW9JbmRleCxcbiAgICAgIGNhbGVuZGFySW5kZXg6IHRoaXMuY2FsZW5kYXJJbmRleCxcbiAgICAgIGhvdmVyQW5pbWF0aW9uOiB0aGlzLmhvdmVyQW5pbWF0aW9uLFxuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICBzeW1ib2xTaXplOiB0aGlzLnN5bWJvbFNpemUsXG4gICAgICBzeW1ib2xSb3RhdGU6IHRoaXMuc3ltYm9sUm90YXRlLFxuICAgICAgc3ltYm9sS2VlcEFzcGVjdDogdGhpcy5zeW1ib2xLZWVwQXNwZWN0LFxuICAgICAgc3ltYm9sT2Zmc2V0OiB0aGlzLnN5bWJvbE9mZnNldCxcbiAgICAgIGxhcmdlOiB0aGlzLmxhcmdlLFxuICAgICAgbGFyZ2VUaHJlc2hvbGQ6IHRoaXMubGFyZ2VUaHJlc2hvbGQsXG4gICAgICBjdXJzb3I6IHRoaXMuY3Vyc29yLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBwcm9ncmVzc2l2ZTogdGhpcy5wcm9ncmVzc2l2ZSxcbiAgICAgIHByb2dyZXNzaXZlVGhyZXNob2xkOiB0aGlzLnByb2dyZXNzaXZlVGhyZXNob2xkLFxuICAgICAgZGltZW5zaW9uczogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgZW5jb2RlOiB0aGlzLmVuY29kZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCAnZWNoYXJ0cy9saWIvY2hhcnQvc2NhdHRlcic7XG5cbmltcG9ydCB7IFRkQ2hhcnRTZXJpZXNTY2F0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zY2F0dGVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBTQ0FUVEVSX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydFNlcmllc1NjYXR0ZXJDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTQ0FUVEVSX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU0NBVFRFUl9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRTY2F0dGVyRWNoYXJ0c01vZHVsZSB7IH1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRTZXJpZXNUb29sdGlwLFxuICBUZE1hcmtQb2ludFN5bWJvbCxcbiAgSVRkTGFiZWwsXG4gIElUZExpbmVTdHlsZSxcbiAgSVRkU2VyaWVzLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgSVRkRW1waGFzaXMsXG4gIElUZFNoYWRvdyxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbi8qKlxuICogRUNIQVJUIE9QVElPTiBET0NTXG4gKiBodHRwczovL2Vjb21mZS5naXRodWIuaW8vZWNoYXJ0cy1kb2MvcHVibGljL2VuL29wdGlvbi5odG1sI3Nlcmllcy10cmVlXG4gKlxuICovXG5cbi8qKiBcbiAqIExSIC0gZnJvbSBsZWZ0IHRvIHJpZ2h0XG4gKiBSTCAtIGZyb20gcmlnaHQgdG8gbGVmdFxuICogVEIgLSBmcm9tIHRvcCB0byBib3R0b21cbiAqIEJUIC0gZnJvbSBib3R0b20gdG8gdG9wXG4gKi9cbmV4cG9ydCB0eXBlIFRkVHJlZU9yaWVudCA9ICdMUicgfCAnUkwnfCAnVEInIHwgJ0JUJztcblxuZXhwb3J0IHR5cGUgVGRUcmVlTGF5b3V0ID0gJ29ydGhvZ29uYWwnIHwgJ3JhZGlhbCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZUVtcGhhc2lzTGluZVN0eWxlIGV4dGVuZHMgSVRkU2hhZG93IHtcbiAgY29sb3I/OiBhbnk7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBjdXJ2ZW5lc3M/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZUVtcGhhc2lzIGV4dGVuZHMgSVRkRW1waGFzaXMge1xuICBsaW5lU3R5bGU6IElUZFRyZWVFbXBoYXNpc0xpbmVTdHlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlTGVhdmVzIHtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBlbXBoYXNpczogSVRkRW1waGFzaXM7XG59XG5cbmludGVyZmFjZSBJVGRUcmVlU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCd0cmVlJz4ge1xuICB6bGV2ZWw/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIGxlZnQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcD86IHN0cmluZyB8IG51bWJlcjtcbiAgcmlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbT86IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgbGF5b3V0PzogVGRUcmVlTGF5b3V0O1xuICBvcmllbnQ/OiBUZFRyZWVPcmllbnQ7XG4gIHN5bWJvbD86IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nOyAvLyBzdHJpbmcgYWRkZWQgZm9yIGN1c3RvbSBTVkcsIFVSTCBvciBkYXRhVVJJXG4gIHN5bWJvbFNpemU/OiBudW1iZXI7XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldD86IGFueVtdO1xuICByb2FtPzogYm9vbGVhbiB8IHN0cmluZztcbiAgZXhwYW5kQW5kQ29sbGFwc2U/OiBib29sZWFuO1xuICBpbml0aWFsVHJlZURlcHRoPzogbnVtYmVyO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGxpbmVTdHlsZT86IElUZExpbmVTdHlsZTtcbiAgbGVhdmVzPzogSVRkVHJlZUxlYXZlcztcbiAgZW1waGFzaXM/OiBJVGRUcmVlRW1waGFzaXM7XG4gIGRhdGE6IGFueVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtdHJlZV0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNUcmVlQ29tcG9uZW50KSxcbiAgfV0sXG59KVxuXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1RyZWVDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwndHJlZSc+IGltcGxlbWVudHMgSVRkVHJlZVNlcmllcyB7XG5cbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ2xlZnQnKSBsZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgndG9wJykgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgncmlnaHQnKSByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2JvdHRvbScpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3dpZHRoJykgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdoZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdsYXlvdXQnKSBsYXlvdXQ6IFRkVHJlZUxheW91dDtcbiAgQElucHV0KCdvcmllbnQnKSBvcmllbnQ6IFRkVHJlZU9yaWVudDtcbiAgQElucHV0KCdzeW1ib2wnKSBzeW1ib2w6IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nOyAvLyBzdHJpbmcgYWRkZWQgZm9yIGN1c3RvbSBTVkcsIFVSTCBvciBkYXRhVVJJXG4gIEBJbnB1dCgnc3ltYm9sU2l6ZScpIHN5bWJvbFNpemU6IG51bWJlcjsgLy8gc3RyaW5nIGFkZGVkIGZvciBjdXN0b20gU1ZHLCBVUkwgb3IgZGF0YVVSSVxuICBASW5wdXQoJ3N5bWJvbFJvdGF0ZScpIHN5bWJvbFJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ3N5bWJvbEtlZXBBc3BlY3QnKSBzeW1ib2xLZWVwQXNwZWN0OiBib29sZWFuO1xuICBASW5wdXQoJ3JvYW0nKSByb2FtOiBib29sZWFuIHwgc3RyaW5nO1xuICBASW5wdXQoJ2V4cGFuZEFuZENvbGxhcHNlJykgZXhwYW5kQW5kQ29sbGFwc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgnaW5pdGlhbFRyZWVEZXB0aCcpIGluaXRpYWxUcmVlRGVwdGg6IG51bWJlcjtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCdsaW5lU3R5bGUnKSBsaW5lU3R5bGU6IElUZExpbmVTdHlsZTtcbiAgQElucHV0KCdsZWF2ZXMnKSBsZWF2ZXM6IElUZFRyZWVMZWF2ZXM7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkVHJlZUVtcGhhc2lzO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3RyZWUnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgbGF5b3V0OiB0aGlzLmxheW91dCxcbiAgICAgIG9yaWVudDogdGhpcy5vcmllbnQsXG4gICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgc3ltYm9sU2l6ZTogdGhpcy5zeW1ib2xTaXplLFxuICAgICAgc3ltYm9sUm90YXRlOiB0aGlzLnN5bWJvbFJvdGF0ZSxcbiAgICAgIHN5bWJvbEtlZXBBc3BlY3Q6IHRoaXMuc3ltYm9sS2VlcEFzcGVjdCxcbiAgICAgIHJvYW06IHRoaXMucm9hbSxcbiAgICAgIGV4cGFuZEFuZENvbGxhcHNlOiB0aGlzLmV4cGFuZEFuZENvbGxhcHNlLFxuICAgICAgaW5pdGlhbFRyZWVEZXB0aDogdGhpcy5pbml0aWFsVHJlZURlcHRoLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgbGluZVN0eWxlOiB0aGlzLmxpbmVTdHlsZSxcbiAgICAgIGxlYXZlczogdGhpcy5sZWF2ZXMsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jaGFydC90cmVlJztcblxuaW1wb3J0IHsgVGRDaGFydFNlcmllc1RyZWVDb21wb25lbnQgfSBmcm9tICcuL3RyZWUuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFRSRUVfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0U2VyaWVzVHJlZUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRSRUVfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUUkVFX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFRyZWVFY2hhcnRzTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkNoYW5nZXMsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIGFzc2lnbkRlZmluZWQsXG4gIFRkVG9vbHRpcFRyaWdnZXIsXG4gIFRkVG9vbHRpcFRyaWdnZXJPbixcbiAgVGRUb29sdGlwUG9zaXRpb24sXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgY2xhc3MgVGRUb29sdGlwQ29udGV4dCB7XG4gICRpbXBsaWNpdDogYW55O1xuICB0aWNrZXQ6IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbdGRUb29sdGlwRm9ybWF0dGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlIHtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcblxuICBfY29udGV4dDogVGRUb29sdGlwQ29udGV4dCA9IG5ldyBUZFRvb2x0aXBDb250ZXh0KCk7XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ3RyaWdnZXInKSB0cmlnZ2VyOiBUZFRvb2x0aXBUcmlnZ2VyID0gICdheGlzJztcbiAgQElucHV0KCdheGlzUG9pbnRlcicpIGF4aXNQb2ludGVyOiBhbnk7XG4gIEBJbnB1dCgnc2hvd0NvbnRlbnQnKSBzaG93Q29udGVudDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnYWx3YXlzU2hvd0NvbnRlbnQnKSBhbHdheXNTaG93Q29udGVudDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3RyaWdnZXJPbicpIHRyaWdnZXJPbjogVGRUb29sdGlwVHJpZ2dlck9uID0gJ21vdXNlbW92ZXxjbGljayc7XG4gIEBJbnB1dCgnc2hvd0RlbGF5Jykgc2hvd0RlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ2hpZGVEZWxheScpIGhpZGVEZWxheTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdlbnRlcmFibGUnKSBlbnRlcmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCdyZW5kZXJNb2RlJykgcmVuZGVyTW9kZTogJ2h0bWwnIHwgJ3JpY2hUZXh0JztcbiAgQElucHV0KCdjb25maW5lJykgY29uZmluZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3RyYW5zaXRpb25EdXJhdGlvbicpIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyID0gMC41O1xuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IFRkVG9vbHRpcFBvc2l0aW9uOyAvLyBzZXJpZXNcbiAgQElucHV0KCdmb3JtYXR0ZXInKSBmb3JtYXR0ZXI6IHN0cmluZyB8IEZ1bmN0aW9uOyAvLyBzZXJpZXNcbiAgQElucHV0KCdiYWNrZ3JvdW5kQ29sb3InKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICdyZ2JhKDUwLDUwLDUwLDAuNyknOyAvLyBzZXJpZXNcbiAgQElucHV0KCdib3JkZXJDb2xvcicpIGJvcmRlckNvbG9yOiBzdHJpbmcgPSAnIzMzMyc7IC8vIHNlcmllc1xuICBASW5wdXQoJ2JvcmRlcldpZHRoJykgYm9yZGVyV2lkdGg6IG51bWJlciA9IDA7IC8vIHNlcmllc1xuICBASW5wdXQoJ3BhZGRpbmcnKSBwYWRkaW5nOiBudW1iZXIgPSA1OyAvLyBzZXJpZXNcbiAgQElucHV0KCd0ZXh0U3R5bGUnKSB0ZXh0U3R5bGU6IGFueSA9IHsgLy8gc2VyaWVzXG4gICAgY29sb3I6ICcjRkZGJyxcbiAgfTtcbiAgQElucHV0KCdleHRyYUNzc1RleHQnKSBleHRyYUNzc1RleHQ6IHN0cmluZzsgLy8gc2VyaWVzXG5cbiAgQENvbnRlbnRDaGlsZChUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwge3JlYWQ6IFRlbXBsYXRlUmVmfSkgZm9ybWF0dGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXBDb250ZW50JykgZnVsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwge1xuICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgdHJpZ2dlcjogdGhpcy50cmlnZ2VyLFxuICAgICAgYXhpc1BvaW50ZXI6IHRoaXMuYXhpc1BvaW50ZXIsXG4gICAgICBzaG93Q29udGVudDogdGhpcy5zaG93Q29udGVudCxcbiAgICAgIGFsd2F5c1Nob3dDb250ZW50OiB0aGlzLmFsd2F5c1Nob3dDb250ZW50LFxuICAgICAgdHJpZ2dlck9uOiB0aGlzLnRyaWdnZXJPbixcbiAgICAgIHNob3dEZWxheTogdGhpcy5zaG93RGVsYXksXG4gICAgICBoaWRlRGVsYXk6IHRoaXMuaGlkZURlbGF5LFxuICAgICAgZW50ZXJhYmxlOiB0aGlzLmVudGVyYWJsZSxcbiAgICAgIGNvbmZpbmU6IHRoaXMuY29uZmluZSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIGZvcm1hdHRlcjogdGhpcy5mb3JtYXR0ZXIgPyB0aGlzLmZvcm1hdHRlciA6ICh0aGlzLmZvcm1hdHRlclRlbXBsYXRlID8gdGhpcy5fZm9ybWF0dGVyKCkgOiB1bmRlZmluZWQpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGJvcmRlckNvbG9yOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuYm9yZGVyV2lkdGgsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICB0ZXh0U3R5bGU6IHRoaXMudGV4dFN0eWxlLFxuICAgICAgZXh0cmFDc3NUZXh0OiB0aGlzLmV4dHJhQ3NzVGV4dCxcbiAgICB9KTtcbiAgICAvLyBzZXQgdG9vbHRpcCBjb25maWd1cmF0aW9uIGluIHBhcmVudCBjaGFydCBhbmQgcmVuZGVyIG5ldyBjb25maWd1cmF0aW9uc1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnNldE9wdGlvbigndG9vbHRpcCcsIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UuY2xlYXJPcHRpb24oJ3Rvb2x0aXAnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Zvcm1hdHRlcigpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIChwYXJhbXM6IGFueSwgdGlja2V0OiBhbnksIGNhbGxiYWNrOiAodGlja2V0OiBzdHJpbmcsIGh0bWw6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xuICAgICAgdGhpcy5fY29udGV4dCA9IHtcbiAgICAgICAgJGltcGxpY2l0OiBwYXJhbXMsXG4gICAgICAgIHRpY2tldDogdGlja2V0LFxuICAgICAgfTtcbiAgICAgIC8vIHRpbWVvdXQgc2V0IHNpbmNlIHdlIG5lZWQgdG8gc2V0IHRoZSBIVE1MIGF0IHRoZSBlbmQgb2YgdGhlIGFuZ3VsYXIgbGlmZWN5Y2xlIHdoZW5cbiAgICAgIC8vIHRoZSB0b29sdGlwIGRlbGF5IGlzIG1vcmUgdGhhbiAwXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2FsbGJhY2sodGlja2V0LCAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTDtcbiAgICB9O1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkLCBUZFNlcmllc0NvbXBvbmVudCB9IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5pbXBvcnQgeyBUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwgVGRUb29sdGlwQ29udGV4dCB9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXMtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkU2VyaWVzVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG5cbiAgX2NvbnRleHQ6IFRkVG9vbHRpcENvbnRleHQgPSBuZXcgVGRUb29sdGlwQ29udGV4dCgpO1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnk7XG5cbiAgQElucHV0KCdmb3JtYXR0ZXInKSBmb3JtYXR0ZXI6IGFueTtcbiAgLy8gUGFyZW50IHRvb2x0aXAgdHJpZ2dlciBtdXN0IGJlIHNldCB0byAnaXRlbScgdG8gcmVuZGVyIHRoZXNlIHByb3BlcnRpZXNcbiAgQElucHV0KCdwb3NpdGlvbicpIHBvc2l0aW9uOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bWJlcltdO1xuICBASW5wdXQoJ2JhY2tncm91bmRDb2xvcicpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJ3JnYmEoNTAsNTAsNTAsMC43KSc7XG4gIEBJbnB1dCgnYm9yZGVyQ29sb3InKSBib3JkZXJDb2xvcjogc3RyaW5nID0gJyMzMzMnO1xuICBASW5wdXQoJ2JvcmRlcldpZHRoJykgYm9yZGVyV2lkdGg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgncGFkZGluZycpIHBhZGRpbmc6IG51bWJlciA9IDU7XG4gIEBJbnB1dCgndGV4dFN0eWxlJykgdGV4dFN0eWxlOiBhbnkgPSB7XG4gICAgY29sb3I6ICcjRkZGJyxcbiAgfTtcbiAgQElucHV0KCdleHRyYUNzc1RleHQnKSBleHRyYUNzc1RleHQ6IHN0cmluZztcblxuICBAQ29udGVudENoaWxkKFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlLCB7cmVhZDogVGVtcGxhdGVSZWZ9KSBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcENvbnRlbnQnKSBmdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zZXJpZXNDb21wb25lbnQ6IFRkU2VyaWVzQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LCB7XG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBib3JkZXJDb2xvcjogdGhpcy5ib3JkZXJDb2xvcixcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgdGV4dFN0eWxlOiB0aGlzLnRleHRTdHlsZSxcbiAgICAgIGV4dHJhQ3NzVGV4dDogdGhpcy5leHRyYUNzc1RleHQsXG4gICAgICBmb3JtYXR0ZXI6IHRoaXMuZm9ybWF0dGVyID8gdGhpcy5mb3JtYXR0ZXIgOiAodGhpcy5mb3JtYXR0ZXJUZW1wbGF0ZSA/IHRoaXMuX2Zvcm1hdHRlcigpIDogdW5kZWZpbmVkKSxcbiAgICB9KTtcbiAgICAvLyBzZXQgc2VyaWVzIHRvb2x0aXAgY29uZmlndXJhdGlvbiBpbiBwYXJlbnQgY2hhcnQgYW5kIHJlbmRlciBuZXcgY29uZmlndXJhdGlvbnNcbiAgICB0aGlzLl9zZXJpZXNDb21wb25lbnQuc2V0U3RhdGVPcHRpb24oJ3Rvb2x0aXAnLCBjb25maWcpO1xuICB9XG4gIFxuICAvKipcbiAgICogRm9ybWF0dGVyIGZvciB0b29sdGlwXG4gICAqXG4gICAqL1xuICBwcml2YXRlIF9mb3JtYXR0ZXIoKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiAocGFyYW1zOiBhbnksIHRpY2tldDogYW55LCBjYWxsYmFjazogKHRpY2tldDogc3RyaW5nLCBodG1sOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMuX2NvbnRleHQgPSB7XG4gICAgICAgICRpbXBsaWNpdDogcGFyYW1zLFxuICAgICAgICB0aWNrZXQ6IHRpY2tldCxcbiAgICAgIH07XG4gICAgICAvLyB0aW1lb3V0IHNldCBzaW5jZSB3ZSBuZWVkIHRvIHNldCB0aGUgSFRNTCBhdCB0aGUgZW5kIG9mIHRoZSBhbmd1bGFyIGxpZmVjeWNsZSB3aGVuXG4gICAgICAvLyB0aGUgdG9vbHRpcCBkZWxheSBpcyBtb3JlIHRoYW4gMFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHRpY2tldCwgKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUw7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXJpZXNDb21wb25lbnQucmVtb3ZlU3RhdGVPcHRpb24oJ3Rvb2x0aXAnKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jb21wb25lbnQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IFRkQ2hhcnRUb29sdGlwQ29tcG9uZW50LCBUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRTZXJpZXNUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi9zZXJpZXMtdG9vbHRpcC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgVE9PTFRJUF9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRUb29sdGlwQ29tcG9uZW50LFxuICBUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSxcbiAgVGRTZXJpZXNUb29sdGlwQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVE9PTFRJUF9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRPT0xUSVBfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50VG9vbHRpcEVjaGFydHNNb2R1bGUgeyB9XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgQ29udGVudENoaWxkLFxuICBWaWV3Q2hpbGQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgYXNzaWduRGVmaW5lZCxcbiAgSVRkTGFiZWwsXG4gIElUZFNoYWRvdyxcbiAgSVRkSXRlbVN0eWxlLFxuICBUZFRleHRQb3NpdGlvbixcbiAgVGRUZXh0QWxpZ24sXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgdHlwZSBUZFRvb2xib3hPcmllbnQgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuZXhwb3J0IHR5cGUgVGRJbWFnZVR5cGUgPSAncG5nJyB8ICdqcGVnJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRBY2NlcHRlZEJydXNoVHlwZXMge1xuICByZWN0Pzogc3RyaW5nO1xuICBwb2x5Z29uPzogc3RyaW5nO1xuICBsaW5lWD86IHN0cmluZztcbiAgbGluZVk/OiBzdHJpbmc7XG4gIGtlZXA/OiBzdHJpbmc7XG4gIGNsZWFyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEFjY2VwdGVkTWFnaWNUeXBlcyB7XG4gIGxpbmU/OiBzdHJpbmc7XG4gIGJhcj86IHN0cmluZztcbiAgc3RhY2s/OiBzdHJpbmc7XG4gIHRpbGVkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRvb2xib3hJY29uRW1waGFzaXMgZXh0ZW5kcyBJVGRJdGVtU3R5bGUsIElUZFNoYWRvdyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEZlYXR1cmVJY29uU3R5bGUgZXh0ZW5kcyBJVGRJdGVtU3R5bGUsIElUZFNoYWRvdyB7XG4gIHRleHRQb3NpdGlvbj86IFRkVGV4dFBvc2l0aW9uO1xuICB0ZXh0QWxpZ24/OiBUZFRleHRBbGlnbjtcbiAgZW1waGFzaXM/OiBJVGRUb29sYm94SWNvbkVtcGhhc2lzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFpvb21UaXRsZXMge1xuICB6b29tPzogc3RyaW5nO1xuICBiYWNrPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFNhdmVBc0ltYWdlIHtcbiAgdHlwZT86IFRkSW1hZ2VUeXBlO1xuICBuYW1lPzogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBhbnk7XG4gIGV4Y2x1ZGVDb21wb25lbnRzPzogc3RyaW5nW107IC8vIGRlZmF1bHRzIHRvIFsndG9vbGJveCddXG4gIHNob3c/OiBib29sZWFuO1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgcGl4ZWxSYXRpbz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRSZXN0b3JlIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFWaWV3IHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIG9wdGlvblRvQ29udGVudD86IEZ1bmN0aW9uO1xuICBjb250ZW50VG9PcHRpb24/OiBGdW5jdGlvbjtcbiAgbGFuZz86IHN0cmluZ1tdOyAvLyBEZWZhdWx0cyB0byBDaGluZXNlLCB0aGVyZSBhcmUgMyBuYW1lcyBpbiBkYXRhIHZpZXcsIHdoaWNoIGFyZSBbJ2RhdGEgdmlldycsICd0dXJuIG9mZicgYW5kICdyZWZyZXNoJ10uXG4gIHRleHRhcmVhQ29sb3I/OiBzdHJpbmc7XG4gIHRleHRhcmVhQm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIHRleHRDb2xvcj86IHN0cmluZztcbiAgYnV0dG9uQ29sb3I/OiBzdHJpbmc7XG4gIGJ1dHRvblRleHRDb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhWm9vbSB7XG4gIHNob3c/OiBib29sZWFuO1xuICB0aXRsZT86IElUZFpvb21UaXRsZXM7XG4gIGljb24/OiBJVGRab29tVGl0bGVzO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICB4QXhpc0luZGV4PzogbnVtYmVyIHwgbnVtYmVyW10gfCBib29sZWFuO1xuICB5QXhpc0luZGV4PzogbnVtYmVyIHwgbnVtYmVyW10gfCBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZE1hZ2ljVHlwZSB7XG4gIHNob3c/OiBib29sZWFuO1xuICB0eXBlPzogc3RyaW5nW107IC8vIG9ubHkgZXhwZWN0cyAnbGluZScgfCAnYmFyJyB8ICdzdGFjaycgfCAndGlsZWQnO1xuICB0aXRsZT86IElUZEFjY2VwdGVkTWFnaWNUeXBlcztcbiAgaWNvbj86IElUZEFjY2VwdGVkTWFnaWNUeXBlcztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgb3B0aW9uPzoge1xuICAgIGxpbmU/OiBvYmplY3Q7XG4gICAgYmFyPzogb2JqZWN0O1xuICAgIHN0YWNrPzogb2JqZWN0O1xuICAgIHRpbGVkPzogb2JqZWN0O1xuICB9O1xuICBzZXJpZXNJbmRleD86IHtcbiAgICBsaW5lPzogYW55W107XG4gICAgYmFyPzogYW55W107XG4gICAgc3RhY2s/OiBhbnlbXTtcbiAgICB0aWxlZD86IGFueVtdO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEJydXNoIHtcbiAgdHlwZT86IGFueVtdO1xuICBpY29uPzogSVRkQWNjZXB0ZWRCcnVzaFR5cGVzO1xuICB0aXRsZT86IElUZEFjY2VwdGVkQnJ1c2hUeXBlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUb29sYm94RmVhdHVyZSB7XG4gIHNhdmVBc0ltYWdlPzogSVRkU2F2ZUFzSW1hZ2U7XG4gIHJlc3RvcmU/OiBJVGRSZXN0b3JlO1xuICBkYXRhVmlldz86IElUZERhdGFWaWV3O1xuICBkYXRhWm9vbT86IElUZERhdGFab29tO1xuICBtYWdpY1R5cGU/OiBJVGRNYWdpY1R5cGU7XG4gIGJydXNoPzogSVRkQnJ1c2g7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW3RkVmlld0RhdGFGb3JtYXR0ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFZpZXdEYXRhRm9ybWF0dGVyRGlyZWN0aXZlIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXRvb2xib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJveC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0VG9vbGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ3Nob3cnKSBzaG93OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCduYW1lJykgdHJpZ2dlcjogc3RyaW5nO1xuICBASW5wdXQoJ29yaWVudCcpIG9yaWVudDogVGRUb29sYm94T3JpZW50O1xuICBASW5wdXQoJ2l0ZW1TaXplJykgaXRlbVNpemU6IG51bWJlcjtcbiAgQElucHV0KCdpdGVtR2FwJykgaXRlbUdhcDogbnVtYmVyO1xuICBASW5wdXQoJ3Nob3dUaXRsZScpIHNob3dUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgnZmVhdHVyZScpIGZlYXR1cmU6IElUZFRvb2xib3hGZWF0dXJlO1xuICBASW5wdXQoJ2ljb25TdHlsZScpIGljb25TdHlsZTogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ3RyYW5zaXRpb25EdXJhdGlvbicpIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyID0gMC41O1xuICBASW5wdXQoJ2xlZnQnKSBsZWZ0OiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgndG9wJykgdG9wOiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgncmlnaHQnKSByaWdodDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoJ2JvdHRvbScpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoJ3dpZHRoJykgd2lkdGg6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCdoZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcblxuICBAQ29udGVudENoaWxkKFRkQ2hhcnRWaWV3RGF0YUZvcm1hdHRlckRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndG9vbGJveENvbnRlbnQnKSBmdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcblxuICAgIHRoaXMuX2NoZWNrRm9ybWF0dGVyVGVtcGxhdGUoKTtcblxuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQoXG4gICAgICB0aGlzLl9zdGF0ZSxcbiAgICAgIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSxcbiAgICAgIHtcbiAgICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgICBuYW1lOiB0aGlzLnRyaWdnZXIsXG4gICAgICAgIG9yaWVudDogdGhpcy5vcmllbnQsXG4gICAgICAgIGl0ZW1TaXplOiB0aGlzLml0ZW1TaXplLFxuICAgICAgICBpdGVtR2FwOiB0aGlzLml0ZW1HYXAsXG4gICAgICAgIHNob3dUaXRsZTogdGhpcy5zaG93VGl0bGUsXG4gICAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgICBmZWF0dXJlOiB0aGlzLmZlYXR1cmUsXG4gICAgICAgIGljb25TdHlsZTogdGhpcy5pY29uU3R5bGUsXG4gICAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICAgIHo6IHRoaXMueixcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICB9LFxuICAgICk7XG4gICAgLy8gc2V0IHRvb2xib3ggY29uZmlndXJhdGlvbiBpbiBwYXJlbnQgY2hhcnQgYW5kIHJlbmRlciBuZXcgY29uZmlndXJhdGlvbnNcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5zZXRPcHRpb24oJ3Rvb2xib3gnLCBjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmNsZWFyT3B0aW9uKCd0b29sYm94Jyk7XG4gIH1cblxuICBwcml2YXRlIF9jaGVja0Zvcm1hdHRlclRlbXBsYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvcm1hdHRlclRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmZlYXR1cmUgPSB7XG4gICAgICAgIC4uLnRoaXMuZmVhdHVyZSxcbiAgICAgICAgZGF0YVZpZXc6IHtcbiAgICAgICAgICAuLi50aGlzLmZlYXR1cmUuZGF0YVZpZXcsXG4gICAgICAgICAgb3B0aW9uVG9Db250ZW50OiB0aGlzLl9vcHRpb25Ub0NvbnRlbnRGb3JtYXR0ZXIoKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3B0aW9uVG9Db250ZW50Rm9ybWF0dGVyKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTDtcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jb21wb25lbnQvdG9vbGJveCc7XG5cbmltcG9ydCB7IFRkQ2hhcnRUb29sYm94Q29tcG9uZW50LCBUZENoYXJ0Vmlld0RhdGFGb3JtYXR0ZXJEaXJlY3RpdmUgfSBmcm9tICcuL3Rvb2xib3guY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFRPT0xCT1hfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0VG9vbGJveENvbXBvbmVudCxcbiAgVGRDaGFydFZpZXdEYXRhRm9ybWF0dGVyRGlyZWN0aXZlLFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVE9PTEJPWF9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRPT0xCT1hfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50VG9vbGJveEVjaGFydHNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiQmVoYXZpb3JTdWJqZWN0IiwiSW5qZWN0YWJsZSIsIk9wdGlvbmFsIiwiU2tpcFNlbGYiLCJ0c2xpYl8xLl9fdmFsdWVzIiwiU3ViamVjdCIsIkV2ZW50RW1pdHRlciIsImVjaGFydHMuaW5pdCIsImZyb21FdmVudCIsInRha2VVbnRpbCIsImVjaGFydHMuY29ubmVjdCIsIm1lcmdlIiwiZGVib3VuY2VUaW1lIiwiZGlzdGluY3RVbnRpbENoYW5nZWQiLCJ0YXAiLCJ0aW1lciIsImVjaGFydHMuZGlzcG9zZSIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJFbGVtZW50UmVmIiwiSW5wdXQiLCJPdXRwdXQiLCJ0c2xpYl8xLl9fZXh0ZW5kcyIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIiwiVGRTZXJpZXNDb21wb25lbnQiLCJmb3J3YXJkUmVmIiwiVGRDaGFydE9wdGlvbnNTZXJ2aWNlIiwiRGlyZWN0aXZlIiwiYXNzaWduRGVmaW5lZCIsIkNvbnRlbnRDaGlsZCIsIlRlbXBsYXRlUmVmIiwiVmlld0NoaWxkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFTQTtZQUdVLGFBQVEsR0FBUSxFQUFFLENBQUM7WUFDbkIsb0JBQWUsR0FBaUIsSUFBSUEsb0JBQWUsQ0FBTSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0ErQ2pGOzs7Ozs7UUE3Q0MseUNBQVM7Ozs7O1lBQVQsVUFBVSxNQUFjLEVBQUUsS0FBVTs7b0JBQzlCLE9BQU8sR0FBUSxFQUFFO2dCQUNyQixPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMxQzs7Ozs7O1FBRUQsOENBQWM7Ozs7O1lBQWQsVUFBZSxNQUFjLEVBQUUsS0FBVTs7b0JBQ25DLFNBQVMsR0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsSUFBSSxTQUFTLEVBQUU7O3dCQUNULEtBQUssR0FBVyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztvQkFDNUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDL0Q7cUJBQU07b0JBQ0wsU0FBUyxHQUFHLENBQUMsS0FB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