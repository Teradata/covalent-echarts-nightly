(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('echarts/lib/echarts'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@covalent/echarts/base', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'echarts/lib/echarts', '@angular/common'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.base = {}),global.ng.core,global.rxjs,global.Rx.Observable.prototype,global.echarts,global.ng.common));
}(this, (function (exports,core,rxjs,operators,echarts,common) { 'use strict';

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
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}








function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

var TdChartOptionsService = /** @class */ (function () {
    function TdChartOptionsService() {
        this._options = {};
        this._optionsSubject = new rxjs.BehaviorSubject(this._options);
    }
    TdChartOptionsService.prototype.setOption = function (option, value) {
        var options = {};
        options[option] = value;
        Object.assign(this._options, options);
        this._optionsSubject.next(this._options);
    };
    TdChartOptionsService.prototype.setArrayOption = function (option, value) {
        var prevValue = this.getOption(option);
        if (prevValue) {
            var index = prevValue.indexOf(value);
            index > -1 ? prevValue[index] = value : prevValue.push(value);
        }
        else {
            prevValue = [value];
        }
        this.setOption(option, prevValue);
    };
    TdChartOptionsService.prototype.removeArrayOption = function (option, value) {
        var prevValue = this.getOption(option);
        if (prevValue) {
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
    TdChartOptionsService.prototype.getOption = function (option) {
        return this._options[option];
    };
    TdChartOptionsService.prototype.clearOption = function (option) {
        this.setOption(option, undefined);
    };
    TdChartOptionsService.prototype.listen = function () {
        return this._optionsSubject.asObservable();
    };
    return TdChartOptionsService;
}());
TdChartOptionsService.decorators = [
    { type: core.Injectable },
];
TdChartOptionsService.ctorParameters = function () { return []; };
function CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService();
}
var CHART_PROVIDER = {
    provide: TdChartOptionsService,
    deps: [[new core.Optional(), new core.SkipSelf(), TdChartOptionsService]],
    useFactory: CHART_PROVIDER_FACTORY,
};
function assignDefined(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    try {
        for (var _a = __values(Object.keys(target)), _b = _a.next(); !_b.done; _b = _a.next()) {
            var key = _b.value;
            delete target[key];
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
        }
        finally { if (e_1) throw e_1.error; }
    }
    try {
        for (var sources_1 = __values(sources), sources_1_1 = sources_1.next(); !sources_1_1.done; sources_1_1 = sources_1.next()) {
            var source = sources_1_1.value;
            try {
                for (var _d = __values(Object.keys(source)), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var key = _e.value;
                    var val = source[key];
                    if (val !== undefined) {
                        target[key] = val;
                    }
                    else {
                        delete target[key];
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_f = _d.return)) _f.call(_d);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (sources_1_1 && !sources_1_1.done && (_g = sources_1.return)) _g.call(sources_1);
        }
        finally { if (e_3) throw e_3.error; }
    }
    return target;
    var e_1, _c, e_3, _g, e_2, _f;
}
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
        if (this._instance) {
            this._legend = {
                show: this.showLegend,
                type: 'scroll',
                selectedMode: 'multiple',
                orient: 'horizontal',
                right: '5',
                bottom: '5',
            }, this._instance.setOption(assignDefined(this._state, {
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
                yAxis: [{}],
                series: [],
            }, this.config ? this.config : {}, this._options), true);
            this._changeDetectorRef.markForCheck();
        }
    };
    return TdChartComponent;
}());
TdChartComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-chart',
                template: '',
                styles: [":host{display:block}"],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [CHART_PROVIDER],
            },] },
];
TdChartComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: core.ElementRef, },
    { type: TdChartOptionsService, },
]; };
TdChartComponent.propDecorators = {
    "config": [{ type: core.Input, args: ['config',] },],
    "chartTitle": [{ type: core.Input, args: ['chartTitle',] },],
    "showLegend": [{ type: core.Input, args: ['showLegend',] },],
    "chartGroup": [{ type: core.Input, args: ['chartGroup',] },],
    "dataZoom": [{ type: core.Input, args: ['dataZoom',] },],
    "markAreaClick": [{ type: core.Output, args: ['markAreaClick',] },],
};
var TdChartAxisComponent = /** @class */ (function () {
    function TdChartAxisComponent(_axisOption, _optionsService) {
        this._axisOption = _axisOption;
        this._optionsService = _optionsService;
        this._state = {};
        this.config = {};
        this.show = true;
    }
    TdChartAxisComponent.prototype.ngOnInit = function () {
        this._setOptions();
    };
    TdChartAxisComponent.prototype.ngOnChanges = function () {
        this._setOptions();
    };
    TdChartAxisComponent.prototype.ngOnDestroy = function () {
        this._removeOption();
    };
    TdChartAxisComponent.prototype._setOptions = function () {
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
    TdChartAxisComponent.prototype._removeOption = function () {
        this._optionsService.clearOption(this._axisOption);
    };
    return TdChartAxisComponent;
}());
TdChartAxisComponent.propDecorators = {
    "config": [{ type: core.Input, args: ['config',] },],
    "id": [{ type: core.Input, args: ['id',] },],
    "show": [{ type: core.Input, args: ['show',] },],
    "gridIndex": [{ type: core.Input, args: ['gridIndex',] },],
    "offset": [{ type: core.Input, args: ['offset',] },],
    "type": [{ type: core.Input, args: ['type',] },],
    "name": [{ type: core.Input, args: ['name',] },],
    "nameLocation": [{ type: core.Input, args: ['nameLocation',] },],
    "nameTextStyle": [{ type: core.Input, args: ['nameTextStyle',] },],
    "nameGap": [{ type: core.Input, args: ['nameGap',] },],
    "nameRotate": [{ type: core.Input, args: ['nameRotate',] },],
    "inverse": [{ type: core.Input, args: ['inverse',] },],
    "boundaryGap": [{ type: core.Input, args: ['boundaryGap',] },],
    "min": [{ type: core.Input, args: ['min',] },],
    "max": [{ type: core.Input, args: ['max',] },],
    "scale": [{ type: core.Input, args: ['scale',] },],
    "minInterval": [{ type: core.Input, args: ['minInterval',] },],
    "interval": [{ type: core.Input, args: ['interval',] },],
    "logBase": [{ type: core.Input, args: ['logBase',] },],
    "silent": [{ type: core.Input, args: ['silent',] },],
    "triggerEvent": [{ type: core.Input, args: ['triggerEvent',] },],
    "axisLine": [{ type: core.Input, args: ['axisLine',] },],
    "axisTick": [{ type: core.Input, args: ['axisTick',] },],
    "axisLabel": [{ type: core.Input, args: ['axisLabel',] },],
    "splitLine": [{ type: core.Input, args: ['splitLine',] },],
    "splitArea": [{ type: core.Input, args: ['splitArea',] },],
    "data": [{ type: core.Input, args: ['data',] },],
    "axisPointer": [{ type: core.Input, args: ['axisPointer',] },],
    "zlevel": [{ type: core.Input, args: ['zlevel',] },],
    "z": [{ type: core.Input, args: ['z',] },],
};
var TdChartXAxisComponent = /** @class */ (function (_super) {
    __extends(TdChartXAxisComponent, _super);
    function TdChartXAxisComponent(_optionsService) {
        return _super.call(this, 'xAxis', _optionsService) || this;
    }
    return TdChartXAxisComponent;
}(TdChartAxisComponent));
TdChartXAxisComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-chart-x-axis',
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
TdChartXAxisComponent.ctorParameters = function () { return [
    { type: TdChartOptionsService, },
]; };
TdChartXAxisComponent.propDecorators = {
    "position": [{ type: core.Input, args: ['position',] },],
};
var TdChartYAxisComponent = /** @class */ (function (_super) {
    __extends(TdChartYAxisComponent, _super);
    function TdChartYAxisComponent(_optionsService) {
        return _super.call(this, 'yAxis', _optionsService) || this;
    }
    return TdChartYAxisComponent;
}(TdChartAxisComponent));
TdChartYAxisComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-chart-y-axis',
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
TdChartYAxisComponent.ctorParameters = function () { return [
    { type: TdChartOptionsService, },
]; };
TdChartYAxisComponent.propDecorators = {
    "position": [{ type: core.Input, args: ['position',] },],
};
var BASE_MODULE_COMPONENTS = [
    TdChartComponent,
    TdChartXAxisComponent,
    TdChartYAxisComponent,
];
var CovalentBaseEchartsModule = /** @class */ (function () {
    function CovalentBaseEchartsModule() {
    }
    return CovalentBaseEchartsModule;
}());
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
            },] },
];
CovalentBaseEchartsModule.ctorParameters = function () { return []; };
var TdSeriesComponent = /** @class */ (function () {
    function TdSeriesComponent(type, optionsService) {
        this.optionsService = optionsService;
        this._state = {};
        this._options = {};
        this.config = {};
        this._type = type;
    }
    Object.defineProperty(TdSeriesComponent.prototype, "type", {
        get: function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    TdSeriesComponent.prototype.ngOnInit = function () {
        this._setOptions();
    };
    TdSeriesComponent.prototype.ngOnChanges = function () {
        this._setOptions();
    };
    TdSeriesComponent.prototype.ngOnDestroy = function () {
        this._removeOption();
    };
    TdSeriesComponent.prototype.setStateOption = function (option, value) {
        this._options[option] = value;
        this._setOptions();
    };
    TdSeriesComponent.prototype.removeStateOption = function (option) {
        this._options[option] = undefined;
        this._setOptions();
    };
    TdSeriesComponent.prototype._setOptions = function () {
        var config = assignDefined(this._state, this.config ? this.config : {}, this.getConfig(), this._options);
        this.optionsService.setArrayOption('series', config);
    };
    TdSeriesComponent.prototype._removeOption = function () {
        var config = this.getConfig();
        this.optionsService.removeArrayOption('series', config);
    };
    return TdSeriesComponent;
}());
TdSeriesComponent.propDecorators = {
    "config": [{ type: core.Input, args: ['config',] },],
    "id": [{ type: core.Input, args: ['id',] },],
    "name": [{ type: core.Input, args: ['name',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "animation": [{ type: core.Input, args: ['animation',] },],
    "animationThreshold": [{ type: core.Input, args: ['animationThreshold',] },],
    "animationDuration": [{ type: core.Input, args: ['animationDuration',] },],
    "animationEasing": [{ type: core.Input, args: ['animationEasing',] },],
    "animationDelay": [{ type: core.Input, args: ['animationDelay',] },],
    "animationDurationUpdate": [{ type: core.Input, args: ['animationDurationUpdate',] },],
    "animationEasingUpdate": [{ type: core.Input, args: ['animationEasingUpdate',] },],
    "animationDelayUpdate": [{ type: core.Input, args: ['animationDelayUpdate',] },],
    "tooltip": [{ type: core.Input, args: ['tooltip',] },],
};

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
//# sourceMappingURL=covalent-echarts-base.umd.js.map
