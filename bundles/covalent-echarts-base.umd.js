(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('echarts/lib/echarts'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/base', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'echarts/lib/echarts', '@angular/common'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.base = {}),global.ng.core,global.rxjs,global.rxjs.operators,global.echarts,global.ng.common));
}(this, (function (exports,core,rxjs,operators,echarts,common) { 'use strict';

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
    exports.ɵa = CHART_PROVIDER_FACTORY;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy1iYXNlLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9jaGFydC1vcHRpb25zLnNlcnZpY2UudHMiLCJub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL3V0aWxzL2Fzc2lnbi1kZWZpbmVkLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL2NoYXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9heGlzL2F4aXMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL2F4aXMveC1heGlzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9heGlzL3ktYXhpcy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvYmFzZS5tb2R1bGUudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2Uvc2VyaWVzL3Nlcmllcy5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgUHJvdmlkZXIsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9vcHRpb25zOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfb3B0aW9uc1N1YmplY3Q6IFN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih0aGlzLl9vcHRpb25zKTtcblxuICBzZXRPcHRpb24ob3B0aW9uOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgb3B0aW9uczogYW55ID0ge307XG4gICAgb3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcbiAgICB0aGlzLl9vcHRpb25zU3ViamVjdC5uZXh0KHRoaXMuX29wdGlvbnMpO1xuICB9XG5cbiAgc2V0QXJyYXlPcHRpb24ob3B0aW9uOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGxldCBwcmV2VmFsdWU6IGFueVtdID0gdGhpcy5nZXRPcHRpb24ob3B0aW9uKTtcbiAgICBpZiAocHJldlZhbHVlKSB7XG4gICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHByZXZWYWx1ZS5pbmRleE9mKHZhbHVlKTtcbiAgICAgIGluZGV4ID4gLTEgPyBwcmV2VmFsdWVbaW5kZXhdID0gdmFsdWUgOiBwcmV2VmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZWYWx1ZSA9IFt2YWx1ZV07XG4gICAgfVxuICAgIHRoaXMuc2V0T3B0aW9uKG9wdGlvbiwgcHJldlZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZUFycmF5T3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBsZXQgcHJldlZhbHVlOiBhbnlbXSA9IHRoaXMuZ2V0T3B0aW9uKG9wdGlvbik7XG4gICAgaWYgKHByZXZWYWx1ZSkge1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBwcmV2VmFsdWUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSApIHtcbiAgICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICAgIHByZXZWYWx1ZVtpbmRleF0gPSBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcHJldlZhbHVlID0gW107XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2V0T3B0aW9uKG9wdGlvbiwgcHJldlZhbHVlKTtcbiAgfVxuXG4gIGdldE9wdGlvbihvcHRpb246IHN0cmluZyk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uc1tvcHRpb25dO1xuICB9XG5cbiAgY2xlYXJPcHRpb24ob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICB0aGlzLnNldE9wdGlvbihvcHRpb24sIG51bGwpO1xuICB9XG5cbiAgbGlzdGVuKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnNTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENIQVJUX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVGRDaGFydE9wdGlvbnNTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBDSEFSVF9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkQ2hhcnRPcHRpb25zU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBDSEFSVF9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbkRlZmluZWQodGFyZ2V0OiBhbnksIC4uLnNvdXJjZXM6IGFueVtdKTogYW55IHtcbiAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcbiAgICAgIGNvbnN0IHZhbDogYW55ID0gc291cmNlW2tleV07XG4gICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgICAgfSBlbHNlIGlmICh2YWwgPT09IG51bGwpIHtcbiAgICAgICAgZGVsZXRlIHRhcmdldFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIERvQ2hlY2ssXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gJ2VjaGFydHMvbGliL2VjaGFydHMnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsIENIQVJUX1BST1ZJREVSIH0gZnJvbSAnLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCB9IGZyb20gJy4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydCcsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0NIQVJUX1BST1ZJREVSXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgRG9DaGVjaywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zdWJzOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIF93aWR0aFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfaGVpZ2h0U3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgX2luc3RhbmNlOiBhbnk7XG5cbiAgZ2V0IGluc3RhbmNlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuICBwcml2YXRlIF9vcHRpb25zOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdncm91cCcpIGdyb3VwOiBzdHJpbmc7XG5cbiAgQE91dHB1dCgnY2xpY2snKSBjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgnZGJsY2xpY2snKSBkYmxjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgnY29udGV4dG1lbnUnKSBjb250ZXh0bWVudTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnN0YW5jZSA9IGVjaGFydHMuaW5pdCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2NsaWNrJykuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmNsaWNrLm5leHQocGFyYW1zKTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnZGJsY2xpY2snKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZGJsY2xpY2submV4dChwYXJhbXMpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdjb250ZXh0bWVudScpLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5jb250ZXh0bWVudS5uZXh0KHBhcmFtcyk7XG4gICAgICB9KSxcbiAgICApO1xuICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XG4gICAgICBlY2hhcnRzLmNvbm5lY3QodGhpcy5ncm91cCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgbWVyZ2UoXG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICApLFxuICAgICAgICB0aGlzLl93aWR0aFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy5faGVpZ2h0U3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICApLFxuICAgICAgKS5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5faW5zdGFuY2UucmVzaXplKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmxpc3RlbigpLnN1YnNjcmliZSgob3B0aW9uczogYW55KSA9PiB7XG4gICAgICBhc3NpZ25EZWZpbmVkKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nRG9DaGVjaygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KCg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XG4gICAgICB0aGlzLl9oZWlnaHRTdWJqZWN0Lm5leHQoKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5jbGVhcigpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fc3Vicykge1xuICAgICAgdGhpcy5fc3Vicy5mb3JFYWNoKChzdWI6IFN1YnNjcmlwdGlvbikgPT4ge1xuICAgICAgICBzdWIudW5zdWJzY3JpYmUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlLnNldE9wdGlvbihhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB7XG4gICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIGxlZnQ6ICcyMCcsXG4gICAgICAgICAgcmlnaHQ6ICcyMCcsXG4gICAgICAgICAgYm90dG9tOiAnMTAnLFxuICAgICAgICAgIHRvcDogJzEwJyxcbiAgICAgICAgICBjb250YWluTGFiZWw6IHRydWUsXG4gICAgICAgICAgYm9yZGVyQ29sb3I6ICcjRkNGQ0ZDJyxcbiAgICAgICAgfSxcbiAgICAgICAgeEF4aXMgOiBbe31dLCAvLyB0aHJvd3MgZXJyb3IgaWYgaXRzIGVtcHR5XG4gICAgICAgIHlBeGlzIDogW3t9XSwgLy8gdGhyb3dzIGVycm9yIGlmIGl0cyBlbXB0eVxuICAgICAgICBzZXJpZXM6IFtdLFxuICAgICAgfSwgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LCB0aGlzLl9vcHRpb25zKSwgdHJ1ZSk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFxuICBJVGRBeGlzTGluZSxcbiAgSVRkQXhpc0xhYmVsLFxuICBJVGRBeGlzVGljayxcbiAgSVRkU3BsaXRMaW5lLFxuICBJVGRTcGxpdEFyZWEsXG4gIElUZEF4aXNQb2ludGVyLFxuICBUZEF4aXNUeXBlLFxuICBUZE5hbWVMb2NhdGlvbixcbiAgVGRYQXhpc1Bvc2l0aW9uLFxuICBUZFlBeGlzUG9zaXRpb24gfSBmcm9tICcuL2F4aXMuaW50ZXJmYWNlJztcbiAgXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGRDaGFydEF4aXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge1xuICAgIGF4aXNMaW5lOiB7XG4gICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgY29sb3I6ICcjQUJBQkFCJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzcGxpdExpbmU6IHtcbiAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICBjb2xvcjogJyNBQkFCQUInLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgQElucHV0KCdzaG93Jykgc2hvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnZ3JpZEluZGV4JykgZ3JpZEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnb2Zmc2V0Jykgb2Zmc2V0OiBudW1iZXI7XG4gIGFic3RyYWN0IHBvc2l0aW9uOiBUZFhBeGlzUG9zaXRpb24gfCBUZFlBeGlzUG9zaXRpb247XG4gIEBJbnB1dCgndHlwZScpIHR5cGU6IFRkQXhpc1R5cGU7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCduYW1lTG9jYXRpb24nKSBuYW1lTG9jYXRpb246IFRkTmFtZUxvY2F0aW9uO1xuICBASW5wdXQoJ25hbWVUZXh0U3R5bGUnKSBuYW1lVGV4dFN0eWxlOiBhbnk7XG4gIEBJbnB1dCgnbmFtZUdhcCcpIG5hbWVHYXA6IG51bWJlcjtcbiAgQElucHV0KCduYW1lUm90YXRlJykgbmFtZVJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ2ludmVyc2UnKSBpbnZlcnNlOiBib29sZWFuO1xuICBASW5wdXQoJ2JvdW5kYXJ5R2FwJykgYm91bmRhcnlHYXA6IGJvb2xlYW4gfCBzdHJpbmdbXTtcbiAgQElucHV0KCdtaW4nKSBtaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdtYXgnKSBtYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdzY2FsZScpIHNjYWxlOiBib29sZWFuO1xuICBASW5wdXQoJ21pbkludGVydmFsJykgbWluSW50ZXJ2YWw6IG51bWJlcjtcbiAgQElucHV0KCdpbnRlcnZhbCcpIGludGVydmFsOiBudW1iZXI7XG4gIEBJbnB1dCgnbG9nQmFzZScpIGxvZ0Jhc2U6IG51bWJlcjtcbiAgQElucHV0KCdzaWxlbnQnKSBzaWxlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgndHJpZ2dlckV2ZW50JykgdHJpZ2dlckV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoJ2F4aXNMaW5lJykgYXhpc0xpbmU6IElUZEF4aXNMaW5lO1xuICBASW5wdXQoJ2F4aXNUaWNrJykgYXhpc1RpY2s6IElUZEF4aXNUaWNrO1xuICBASW5wdXQoJ2F4aXNMYWJlbCcpIGF4aXNMYWJlbDogSVRkQXhpc0xhYmVsO1xuICBASW5wdXQoJ3NwbGl0TGluZScpIHNwbGl0TGluZTogSVRkU3BsaXRMaW5lO1xuICBASW5wdXQoJ3NwbGl0QXJlYScpIHNwbGl0QXJlYTogSVRkU3BsaXRBcmVhO1xuICBASW5wdXQoJ2RhdGEnKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgnYXhpc1BvaW50ZXInKSBheGlzUG9pbnRlcjogSVRkQXhpc1BvaW50ZXI7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9heGlzT3B0aW9uOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgZ3JpZEluZGV4OiB0aGlzLmdyaWRJbmRleCxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG5hbWVMb2NhdGlvbjogdGhpcy5uYW1lTG9jYXRpb24sXG4gICAgICBuYW1lVGV4dFN0eWxlOiB0aGlzLm5hbWVUZXh0U3R5bGUsXG4gICAgICBuYW1lR2FwOiB0aGlzLm5hbWVHYXAsXG4gICAgICBuYW1lUm90YXRlOiB0aGlzLm5hbWVSb3RhdGUsXG4gICAgICBpbnZlcnNlOiB0aGlzLmludmVyc2UsXG4gICAgICBib3VuZGFyeUdhcDogdGhpcy5ib3VuZGFyeUdhcCxcbiAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICBtYXg6IHRoaXMubWF4LFxuICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICBtaW5JbnRlcnZhbDogdGhpcy5taW5JbnRlcnZhbCxcbiAgICAgIGludGVydmFsOiB0aGlzLmludGVydmFsLFxuICAgICAgbG9nQmFzZTogdGhpcy5sb2dCYXNlLFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICAgIHRyaWdnZXJFdmVudDogdGhpcy50cmlnZ2VyRXZlbnQsXG4gICAgICBheGlzTGluZTogdGhpcy5heGlzTGluZSxcbiAgICAgIGF4aXNUaWNrOiB0aGlzLmF4aXNUaWNrLFxuICAgICAgYXhpc0xhYmVsOiB0aGlzLmF4aXNMYWJlbCxcbiAgICAgIHNwbGl0TGluZTogdGhpcy5zcGxpdExpbmUsXG4gICAgICBzcGxpdEFyZWE6IHRoaXMuc3BsaXRBcmVhLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgYXhpc1BvaW50ZXI6IHRoaXMuYXhpc1BvaW50ZXIsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgIH0pO1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnNldEFycmF5T3B0aW9uKHRoaXMuX2F4aXNPcHRpb24sIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UuY2xlYXJPcHRpb24odGhpcy5fYXhpc09wdGlvbik7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGRYQXhpc1Bvc2l0aW9uICB9IGZyb20gJy4vYXhpcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGRDaGFydEF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQteC1heGlzJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFhBeGlzQ29tcG9uZW50IGV4dGVuZHMgVGRDaGFydEF4aXNDb21wb25lbnQge1xuXG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogVGRYQXhpc1Bvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3hBeGlzJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBJbnB1dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBUZFlBeGlzUG9zaXRpb24gIH0gZnJvbSAnLi9heGlzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUZENoYXJ0QXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC15LWF4aXMnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0WUF4aXNDb21wb25lbnQgZXh0ZW5kcyBUZENoYXJ0QXhpc0NvbXBvbmVudCB7XG5cbiAgQElucHV0KCdwb3NpdGlvbicpIHBvc2l0aW9uOiBUZFlBeGlzUG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigneUF4aXMnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUZENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDaGFydFhBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzL3gtYXhpcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDaGFydFlBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzL3ktYXhpcy5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgQkFTRV9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRDb21wb25lbnQsXG4gIFRkQ2hhcnRYQXhpc0NvbXBvbmVudCxcbiAgVGRDaGFydFlBeGlzQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQkFTRV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEJBU0VfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50QmFzZUVjaGFydHNNb2R1bGUge1xuXG59XG4iLCJpbXBvcnQgeyBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMvYXNzaWduLWRlZmluZWQnO1xuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IElUZFNlcmllc1Rvb2x0aXAgfSBmcm9tICcuLi9zZXJpZXMvc2VyaWVzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBJVGRBbmltYXRpb24gfSBmcm9tICcuLi9iYXNlLnR5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRTZXJpZXM8VD4gZXh0ZW5kcyBJVGRBbmltYXRpb24ge1xuICBpZD86IHN0cmluZztcbiAgbmFtZT86IHN0cmluZztcbiAgY29sb3I/OiBzdHJpbmc7XG4gIHR5cGU/OiBUO1xuXG4gIHRvb2x0aXA/OiBJVGRTZXJpZXNUb29sdGlwO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGRTZXJpZXNDb21wb25lbnQ8VCA9IGFueT4gaW1wbGVtZW50cyBJVGRTZXJpZXM8VD4sIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kgIHtcblxuICBwcml2YXRlIF90eXBlOiBUO1xuXG4gIGdldCB0eXBlKCk6IFQge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgX3N0YXRlOiBhbnkgPSB7fTtcbiAgX29wdGlvbnM6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2NvbG9yJykgY29sb3I6IHN0cmluZztcblxuICBASW5wdXQoJ2FuaW1hdGlvbicpIGFuaW1hdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCdhbmltYXRpb25UaHJlc2hvbGQnKSBhbmltYXRpb25UaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdhbmltYXRpb25EdXJhdGlvbicpIGFuaW1hdGlvbkR1cmF0aW9uOiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCdhbmltYXRpb25FYXNpbmcnKSBhbmltYXRpb25FYXNpbmc6IHN0cmluZztcbiAgQElucHV0KCdhbmltYXRpb25EZWxheScpIGFuaW1hdGlvbkRlbGF5OiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCdhbmltYXRpb25EdXJhdGlvblVwZGF0ZScpIGFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlOiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCdhbmltYXRpb25FYXNpbmdVcGRhdGUnKSBhbmltYXRpb25FYXNpbmdVcGRhdGU6IHN0cmluZztcbiAgQElucHV0KCdhbmltYXRpb25EZWxheVVwZGF0ZScpIGFuaW1hdGlvbkRlbGF5VXBkYXRlOiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgQElucHV0KCd0b29sdGlwJykgdG9vbHRpcDogSVRkU2VyaWVzVG9vbHRpcDtcblxuICBjb25zdHJ1Y3Rvcih0eXBlOiBULCBwcm90ZWN0ZWQgb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHRoaXMuX3R5cGUgPSB0eXBlO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cbiAgXG4gIHNldFN0YXRlT3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgcmVtb3ZlU3RhdGVPcHRpb24ob3B0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgKi9cbiAgICB0aGlzLl9vcHRpb25zW29wdGlvbl0gPSBudWxsO1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIGFic3RyYWN0IGdldENvbmZpZygpOiBhbnk7XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHRoaXMuZ2V0Q29uZmlnKCksIHRoaXMuX29wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9uc1NlcnZpY2Uuc2V0QXJyYXlPcHRpb24oJ3NlcmllcycsIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICB0aGlzLm9wdGlvbnNTZXJ2aWNlLnJlbW92ZUFycmF5T3B0aW9uKCdzZXJpZXMnLCBjb25maWcpO1xuICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJCZWhhdmlvclN1YmplY3QiLCJJbmplY3RhYmxlIiwiT3B0aW9uYWwiLCJTa2lwU2VsZiIsInRzbGliXzEuX192YWx1ZXMiLCJTdWJqZWN0IiwiRXZlbnRFbWl0dGVyIiwiZWNoYXJ0cy5pbml0IiwiZnJvbUV2ZW50IiwiZWNoYXJ0cy5jb25uZWN0IiwibWVyZ2UiLCJkZWJvdW5jZVRpbWUiLCJDb21wb25lbnQiLCJDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSIsIkNoYW5nZURldGVjdG9yUmVmIiwiRWxlbWVudFJlZiIsIklucHV0IiwiT3V0cHV0IiwidHNsaWJfMS5fX2V4dGVuZHMiLCJOZ01vZHVsZSIsIkNvbW1vbk1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO1FBU0E7WUFHVSxhQUFRLEdBQVEsRUFBRSxDQUFDO1lBQ25CLG9CQUFlLEdBQWlCLElBQUlBLG9CQUFlLENBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBK0NqRjs7Ozs7O1FBN0NDLHlDQUFTOzs7OztZQUFULFVBQVUsTUFBYyxFQUFFLEtBQVU7O29CQUM5QixPQUFPLEdBQVEsRUFBRTtnQkFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDeEIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDMUM7Ozs7OztRQUVELDhDQUFjOzs7OztZQUFkLFVBQWUsTUFBYyxFQUFFLEtBQVU7O29CQUNuQyxTQUFTLEdBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQzdDLElBQUksU0FBUyxFQUFFOzt3QkFDVCxLQUFLLEdBQVcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQzVDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFT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