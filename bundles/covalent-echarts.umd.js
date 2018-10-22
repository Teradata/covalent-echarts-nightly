(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('echarts/lib/echarts'), require('echarts/lib/component/title'), require('echarts/lib/component/legend'), require('echarts/lib/component/legendScroll'), require('echarts/lib/component/markArea'), require('echarts/lib/component/dataZoom'), require('@angular/common'), require('echarts/lib/chart/bar'), require('@covalent/echarts/base'), require('echarts/lib/chart/line'), require('echarts/lib/chart/scatter')) :
	typeof define === 'function' && define.amd ? define('@covalent/echarts', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'echarts/lib/echarts', 'echarts/lib/component/title', 'echarts/lib/component/legend', 'echarts/lib/component/legendScroll', 'echarts/lib/component/markArea', 'echarts/lib/component/dataZoom', '@angular/common', 'echarts/lib/chart/bar', '@covalent/echarts/base', 'echarts/lib/chart/line', 'echarts/lib/chart/scatter'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.echarts = {}),global.ng.core,global.rxjs,global.Rx.Observable.prototype,global.echarts,null,null,null,null,null,global.ng.common,null,global.covalent.echarts.base));
}(this, (function (exports,core,rxjs,operators,echarts,title,legend,legendScroll,markArea,dataZoom,common,bar,base) { 'use strict';

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

var TdChartOptionsService$1 = /** @class */ (function () {
    function TdChartOptionsService$1() {
        this._options = {};
        this._optionsSubject = new rxjs.BehaviorSubject(this._options);
    }
    TdChartOptionsService$1.prototype.setOption = function (option, value) {
        var options = {};
        options[option] = value;
        Object.assign(this._options, options);
        this._optionsSubject.next(this._options);
    };
    TdChartOptionsService$1.prototype.setArrayOption = function (option, value) {
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
    TdChartOptionsService$1.prototype.getOption = function (option) {
        return this._options[option];
    };
    TdChartOptionsService$1.prototype.setSeriesOption = function (option, value, index) {
        var _this = this;
        var seriesOption = (_a = {}, _a[option] = value, _a);
        setTimeout(function () {
            var prevSeriesValue = _this.getOption('series');
            if (prevSeriesValue[index]) {
                prevSeriesValue[index] = Object.assign({}, prevSeriesValue[index], seriesOption);
                _this.setOption('series', prevSeriesValue);
            }
            else {
                _this.setOption('series', seriesOption);
            }
        });
        var _a;
    };
    TdChartOptionsService$1.prototype.clearSeriesOption = function (option) {
        var _this = this;
        var prevSeriesValue = this.getOption('series');
        prevSeriesValue.forEach(function (val, i) {
            _this.setSeriesOption(option, undefined, i);
        });
    };
    TdChartOptionsService$1.prototype.clearOption = function (option) {
        this.setOption(option, undefined);
    };
    TdChartOptionsService$1.prototype.listen = function () {
        return this._optionsSubject.asObservable();
    };
    return TdChartOptionsService$1;
}());
TdChartOptionsService$1.decorators = [
    { type: core.Injectable },
];
TdChartOptionsService$1.ctorParameters = function () { return []; };
function CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService$1();
}
var CHART_PROVIDER = {
    provide: TdChartOptionsService$1,
    deps: [[new core.Optional(), new core.SkipSelf(), TdChartOptionsService$1]],
    useFactory: CHART_PROVIDER_FACTORY,
};
function assignDefined$1(target) {
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
            assignDefined$1(_this._options, options);
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
            }, this._instance.setOption(assignDefined$1(this._state, {
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
    { type: TdChartOptionsService$1, },
]; };
TdChartComponent.propDecorators = {
    "config": [{ type: core.Input, args: ['config',] },],
    "chartTitle": [{ type: core.Input, args: ['chartTitle',] },],
    "showLegend": [{ type: core.Input, args: ['showLegend',] },],
    "chartGroup": [{ type: core.Input, args: ['chartGroup',] },],
    "dataZoom": [{ type: core.Input, args: ['dataZoom',] },],
    "markAreaClick": [{ type: core.Output, args: ['markAreaClick',] },],
};
var TdTooltipContext = /** @class */ (function () {
    function TdTooltipContext() {
    }
    return TdTooltipContext;
}());
var TdChartTooltipFormatterDirective = /** @class */ (function () {
    function TdChartTooltipFormatterDirective() {
    }
    return TdChartTooltipFormatterDirective;
}());
TdChartTooltipFormatterDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ng-template[tdTooltipFormatter]',
            },] },
];
TdChartTooltipFormatterDirective.ctorParameters = function () { return []; };
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
        this.backgroundColor = 'rgba(50,50,50,0.7)';
        this.borderColor = '#333';
        this.borderWidth = 0;
        this.padding = 5;
        this.textStyle = {
            color: '#FFF',
        };
    }
    TdChartTooltipComponent.prototype.ngOnInit = function () {
        this._setOptions();
    };
    TdChartTooltipComponent.prototype.ngOnChanges = function () {
        this._setOptions();
    };
    TdChartTooltipComponent.prototype.ngOnDestroy = function () {
        this._removeOption();
    };
    TdChartTooltipComponent.prototype._setOptions = function () {
        var _this = this;
        var config = assignDefined$1(this._state, this.config ? this.config : {}, {
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
            formatter: function (params, ticket, callback) {
                _this._context = {
                    $implicit: params,
                    ticket: ticket,
                };
                setTimeout(function () {
                    callback(ticket, ((_this._elementRef.nativeElement)).innerHTML);
                });
                _this._changeDetectorRef.markForCheck();
                return ((_this._elementRef.nativeElement)).innerHTML;
            },
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth,
            padding: this.padding,
            textStyle: this.textStyle,
            extraCssText: this.extraCssText,
        });
        this._optionsService.setOption('tooltip', config);
    };
    TdChartTooltipComponent.prototype._removeOption = function () {
        this._optionsService.clearOption('tooltip');
    };
    return TdChartTooltipComponent;
}());
TdChartTooltipComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-chart-tooltip',
                template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
                styles: [""],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
TdChartTooltipComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: core.ElementRef, },
    { type: TdChartOptionsService$1, },
]; };
TdChartTooltipComponent.propDecorators = {
    "config": [{ type: core.Input, args: ['config',] },],
    "show": [{ type: core.Input, args: ['show',] },],
    "trigger": [{ type: core.Input, args: ['trigger',] },],
    "axisPointer": [{ type: core.Input, args: ['axisPointer',] },],
    "showContent": [{ type: core.Input, args: ['showContent',] },],
    "alwaysShowContent": [{ type: core.Input, args: ['alwaysShowContent',] },],
    "triggerOn": [{ type: core.Input, args: ['triggerOn',] },],
    "showDelay": [{ type: core.Input, args: ['showDelay',] },],
    "hideDelay": [{ type: core.Input, args: ['hideDelay',] },],
    "enterable": [{ type: core.Input, args: ['enterable',] },],
    "confine": [{ type: core.Input, args: ['confine',] },],
    "transitionDuration": [{ type: core.Input, args: ['transitionDuration',] },],
    "position": [{ type: core.Input, args: ['position',] },],
    "backgroundColor": [{ type: core.Input, args: ['backgroundColor',] },],
    "borderColor": [{ type: core.Input, args: ['borderColor',] },],
    "borderWidth": [{ type: core.Input, args: ['borderWidth',] },],
    "padding": [{ type: core.Input, args: ['padding',] },],
    "textStyle": [{ type: core.Input, args: ['textStyle',] },],
    "extraCssText": [{ type: core.Input, args: ['extraCssText',] },],
    "formatterTemplate": [{ type: core.ContentChild, args: [TdChartTooltipFormatterDirective, { read: core.TemplateRef },] },],
    "fullTemplate": [{ type: core.ViewChild, args: ['tooltipContent',] },],
};
var TdTooltipContext$1 = /** @class */ (function () {
    function TdTooltipContext$1() {
    }
    return TdTooltipContext$1;
}());
var TdChartSeriesTooltipFormatterDirective = /** @class */ (function () {
    function TdChartSeriesTooltipFormatterDirective() {
    }
    return TdChartSeriesTooltipFormatterDirective;
}());
TdChartSeriesTooltipFormatterDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'ng-template[tdSeriesTooltipFormatter]',
            },] },
];
TdChartSeriesTooltipFormatterDirective.ctorParameters = function () { return []; };
var TdSeriesTooltipComponent = /** @class */ (function () {
    function TdSeriesTooltipComponent(_changeDetectorRef, _elementRef, _optionsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._optionsService = _optionsService;
        this._state = {};
        this._context = new TdTooltipContext$1();
        this.index = 0;
        this.backgroundColor = 'rgba(50,50,50,0.7)';
        this.borderColor = '#333';
        this.borderWidth = 0;
        this.padding = 5;
        this.textStyle = {
            color: '#FFF',
        };
    }
    TdSeriesTooltipComponent.prototype.ngOnInit = function () {
        this._setOptions();
    };
    TdSeriesTooltipComponent.prototype.ngOnChanges = function () {
        this._setOptions();
    };
    TdSeriesTooltipComponent.prototype.ngOnDestroy = function () {
        this._removeOption();
    };
    TdSeriesTooltipComponent.prototype._setOptions = function () {
        if (!this.configArray) {
            var config = assignDefined$1(this._state, this.config ? this.config : {}, {
                position: this.position,
                backgroundColor: this.backgroundColor,
                borderColor: this.borderColor,
                borderWidth: this.borderWidth,
                padding: this.padding,
                textStyle: this.textStyle,
                extraCssText: this.extraCssText,
                formatter: this.formatter ? this.formatter : this._formatter(),
            });
            this._optionsService.setSeriesOption('tooltip', config, this.index);
        }
        else {
            this._setConfig();
        }
    };
    TdSeriesTooltipComponent.prototype._setConfig = function () {
        var config = assignDefined$1(this._state, this.configArray);
        try {
            for (var _a = __values(Object.keys(config)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var key = _b.value;
                if (!config[key].formatter) {
                    config[key].formatter = this._formatter();
                }
                this._optionsService.setSeriesOption('tooltip', config[key], parseInt(key, 0));
            }
        }
        catch (e_4_1) { e_4 = { error: e_4_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_4) throw e_4.error; }
        }
        var e_4, _c;
    };
    TdSeriesTooltipComponent.prototype._formatter = function () {
        var _this = this;
        return function (params, ticket, callback) {
            _this._context = {
                $implicit: params,
                ticket: ticket,
            };
            setTimeout(function () {
                callback(ticket, ((_this._elementRef.nativeElement)).innerHTML);
            });
            _this._changeDetectorRef.markForCheck();
            return ((_this._elementRef.nativeElement)).innerHTML;
        };
    };
    TdSeriesTooltipComponent.prototype._removeOption = function () {
        this._optionsService.clearSeriesOption('tooltip');
    };
    return TdSeriesTooltipComponent;
}());
TdSeriesTooltipComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-chart-series-tooltip',
                template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>\n",
                styles: [""],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
TdSeriesTooltipComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: core.ElementRef, },
    { type: TdChartOptionsService$1, },
]; };
TdSeriesTooltipComponent.propDecorators = {
    "config": [{ type: core.Input, args: ['config',] },],
    "configArray": [{ type: core.Input, args: ['configArray',] },],
    "index": [{ type: core.Input, args: ['index',] },],
    "formatter": [{ type: core.Input, args: ['formatter',] },],
    "position": [{ type: core.Input, args: ['position',] },],
    "backgroundColor": [{ type: core.Input, args: ['backgroundColor',] },],
    "borderColor": [{ type: core.Input, args: ['borderColor',] },],
    "borderWidth": [{ type: core.Input, args: ['borderWidth',] },],
    "padding": [{ type: core.Input, args: ['padding',] },],
    "textStyle": [{ type: core.Input, args: ['textStyle',] },],
    "extraCssText": [{ type: core.Input, args: ['extraCssText',] },],
    "formatterTemplate": [{ type: core.ContentChild, args: [TdChartSeriesTooltipFormatterDirective, { read: core.TemplateRef },] },],
    "fullTemplate": [{ type: core.ViewChild, args: ['tooltipContent',] },],
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
        var config = assignDefined$1(this._state, this.config, {
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
    { type: TdChartOptionsService$1, },
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
    { type: TdChartOptionsService$1, },
]; };
TdChartYAxisComponent.propDecorators = {
    "position": [{ type: core.Input, args: ['position',] },],
};
var BASE_MODULE_COMPONENTS = [
    TdChartComponent,
    TdChartTooltipComponent,
    TdChartTooltipFormatterDirective,
    TdChartXAxisComponent,
    TdChartYAxisComponent,
    TdSeriesTooltipComponent,
    TdChartSeriesTooltipFormatterDirective,
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
var TdCoordinateSystem = {
    Cartesian2d: 'cartesian2d',
    Polar: 'polar',
};
var TdSeriesLayoutBy = {
    Column: 'column',
    Row: 'row',
};
var TdProgressiveChunkMode = {
    sequential: 'sequential',
    Mod: 'mod',
};
var TdSeriesType$1 = {
    Line: 'line',
    Bar: 'bar',
    Pie: 'pie',
    Scatter: 'scatter',
    EffectScatter: 'effectScatter',
    Radar: 'radar',
    Tree: 'tree',
    Treemap: 'treemap',
    Sunburst: 'sunburst',
    Boxplot: 'boxplot',
    Candlestick: 'candlestick',
    Heatmap: 'heatmap',
    Map: 'map',
    Parallel: 'parallel',
    Lines: 'lines',
    Graph: 'graph',
    Sankey: 'sankey',
    Funnel: 'funnel',
    Gauge: 'gauge',
    PictorialBar: 'pictorialBar',
    ThemeRiver: 'themeRiver',
    Custom: 'custom',
};
var TdChartSeriesBarComponent = /** @class */ (function () {
    function TdChartSeriesBarComponent(_optionsService) {
        this._optionsService = _optionsService;
        this._type = 'bar';
        this._state = {};
        this.config = {};
    }
    TdChartSeriesBarComponent.prototype.ngOnInit = function () {
        this._setOptions();
    };
    TdChartSeriesBarComponent.prototype.ngOnChanges = function () {
        this._setOptions();
    };
    TdChartSeriesBarComponent.prototype.ngOnDestroy = function () {
        this._removeOption();
    };
    TdChartSeriesBarComponent.prototype._setOptions = function () {
        var config = base.assignDefined(this._state, this.config, {
            id: this.id,
            type: this._type,
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
        });
        this._optionsService.setArrayOption('series', config);
    };
    TdChartSeriesBarComponent.prototype._removeOption = function () {
        this._optionsService.clearOption('series');
    };
    return TdChartSeriesBarComponent;
}());
TdChartSeriesBarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-chart-series[td-bar]',
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
TdChartSeriesBarComponent.ctorParameters = function () { return [
    { type: base.TdChartOptionsService, },
]; };
TdChartSeriesBarComponent.propDecorators = {
    "config": [{ type: core.Input, args: ['config',] },],
    "id": [{ type: core.Input, args: ['id',] },],
    "name": [{ type: core.Input, args: ['name',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "coordinateSystem": [{ type: core.Input, args: ['coordinateSystem',] },],
    "xAxisIndex": [{ type: core.Input, args: ['xAxisIndex',] },],
    "yAxisIndex": [{ type: core.Input, args: ['yAxisIndex',] },],
    "legendHoverLink": [{ type: core.Input, args: ['legendHoverLink',] },],
    "stack": [{ type: core.Input, args: ['stack',] },],
    "cursor": [{ type: core.Input, args: ['cursor',] },],
    "label": [{ type: core.Input, args: ['label',] },],
    "itemStyle": [{ type: core.Input, args: ['itemStyle',] },],
    "emphasis": [{ type: core.Input, args: ['emphasis',] },],
    "barWidth": [{ type: core.Input, args: ['barWidth',] },],
    "barMaxWidth": [{ type: core.Input, args: ['barMaxWidth',] },],
    "barMinHeight": [{ type: core.Input, args: ['barMinHeight',] },],
    "barGap": [{ type: core.Input, args: ['barGap',] },],
    "barCategoryGap": [{ type: core.Input, args: ['barCategoryGap',] },],
    "large": [{ type: core.Input, args: ['large',] },],
    "largeThreshold": [{ type: core.Input, args: ['largeThreshold',] },],
    "progressive": [{ type: core.Input, args: ['progressive',] },],
    "progressiveThreshold": [{ type: core.Input, args: ['progressiveThreshold',] },],
    "progressiveChunkMode": [{ type: core.Input, args: ['progressiveChunkMode',] },],
    "dimensions": [{ type: core.Input, args: ['dimensions',] },],
    "encode": [{ type: core.Input, args: ['encode',] },],
    "seriesLayoutBy": [{ type: core.Input, args: ['seriesLayoutBy',] },],
    "datasetIndex": [{ type: core.Input, args: ['datasetIndex',] },],
    "data": [{ type: core.Input, args: ['data',] },],
    "markPoint": [{ type: core.Input, args: ['markPoint',] },],
    "markLine": [{ type: core.Input, args: ['markLine',] },],
    "markArea": [{ type: core.Input, args: ['markArea',] },],
    "zlevel": [{ type: core.Input, args: ['zlevel',] },],
    "z": [{ type: core.Input, args: ['z',] },],
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
var BAR_MODULE_COMPONENTS = [
    TdChartSeriesBarComponent,
];
var CovalentBarEchartsModule = /** @class */ (function () {
    function CovalentBarEchartsModule() {
    }
    return CovalentBarEchartsModule;
}());
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
            },] },
];
CovalentBarEchartsModule.ctorParameters = function () { return []; };
var TdChartSeriesLineComponent = /** @class */ (function () {
    function TdChartSeriesLineComponent(_optionsService) {
        this._optionsService = _optionsService;
        this._type = base.TdSeriesType.Line;
        this._state = {};
        this.config = {};
    }
    TdChartSeriesLineComponent.prototype.ngOnInit = function () {
        this._setOptions();
    };
    TdChartSeriesLineComponent.prototype.ngOnChanges = function () {
        this._setOptions();
    };
    TdChartSeriesLineComponent.prototype.ngOnDestroy = function () {
        this._removeOption();
    };
    TdChartSeriesLineComponent.prototype._setOptions = function () {
        var config = base.assignDefined(this._state, this.config, {
            id: this.id,
            type: this._type,
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
        });
        this._optionsService.setArrayOption('series', config);
    };
    TdChartSeriesLineComponent.prototype._removeOption = function () {
        this._optionsService.clearOption('series');
    };
    return TdChartSeriesLineComponent;
}());
TdChartSeriesLineComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-chart-series[td-line]',
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
TdChartSeriesLineComponent.ctorParameters = function () { return [
    { type: base.TdChartOptionsService, },
]; };
TdChartSeriesLineComponent.propDecorators = {
    "config": [{ type: core.Input, args: ['config',] },],
    "id": [{ type: core.Input, args: ['id',] },],
    "name": [{ type: core.Input, args: ['name',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "coordinateSystem": [{ type: core.Input, args: ['coordinateSystem',] },],
    "xAxisIndex": [{ type: core.Input, args: ['xAxisIndex',] },],
    "yAxisIndex": [{ type: core.Input, args: ['yAxisIndex',] },],
    "polarIndex": [{ type: core.Input, args: ['polarIndex',] },],
    "symbol": [{ type: core.Input, args: ['symbol',] },],
    "symbolSize": [{ type: core.Input, args: ['symbolSize',] },],
    "symbolRotate": [{ type: core.Input, args: ['symbolRotate',] },],
    "symbolKeepAspect": [{ type: core.Input, args: ['symbolKeepAspect',] },],
    "symbolOffset": [{ type: core.Input, args: ['symbolOffset',] },],
    "showSymbol": [{ type: core.Input, args: ['showSymbol',] },],
    "showAllSymbol": [{ type: core.Input, args: ['showAllSymbol',] },],
    "hoverAnimation": [{ type: core.Input, args: ['hoverAnimation',] },],
    "legendHoverLink": [{ type: core.Input, args: ['legendHoverLink',] },],
    "stack": [{ type: core.Input, args: ['stack',] },],
    "cursor": [{ type: core.Input, args: ['cursor',] },],
    "connectNulls": [{ type: core.Input, args: ['connectNulls',] },],
    "clipOverflow": [{ type: core.Input, args: ['clipOverflow',] },],
    "step": [{ type: core.Input, args: ['step',] },],
    "label": [{ type: core.Input, args: ['label',] },],
    "itemStyle": [{ type: core.Input, args: ['itemStyle',] },],
    "lineStyle": [{ type: core.Input, args: ['lineStyle',] },],
    "areaStyle": [{ type: core.Input, args: ['areaStyle',] },],
    "emphasis": [{ type: core.Input, args: ['emphasis',] },],
    "smooth": [{ type: core.Input, args: ['smooth',] },],
    "smoothMonotone": [{ type: core.Input, args: ['smoothMonotone',] },],
    "sampling": [{ type: core.Input, args: ['sampling',] },],
    "dimensions": [{ type: core.Input, args: ['dimensions',] },],
    "encode": [{ type: core.Input, args: ['encode',] },],
    "seriesLayoutBy": [{ type: core.Input, args: ['seriesLayoutBy',] },],
    "datasetIndex": [{ type: core.Input, args: ['datasetIndex',] },],
    "data": [{ type: core.Input, args: ['data',] },],
    "markPoint": [{ type: core.Input, args: ['markPoint',] },],
    "markLine": [{ type: core.Input, args: ['markLine',] },],
    "markArea": [{ type: core.Input, args: ['markArea',] },],
    "zlevel": [{ type: core.Input, args: ['zlevel',] },],
    "z": [{ type: core.Input, args: ['z',] },],
    "silent": [{ type: core.Input, args: ['silent',] },],
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
var LINE_MODULE_COMPONENTS = [
    TdChartSeriesLineComponent,
];
var CovalentLineEchartsModule = /** @class */ (function () {
    function CovalentLineEchartsModule() {
    }
    return CovalentLineEchartsModule;
}());
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
            },] },
];
CovalentLineEchartsModule.ctorParameters = function () { return []; };
var TdChartSeriesScatterComponent = /** @class */ (function () {
    function TdChartSeriesScatterComponent(_optionsService) {
        this._optionsService = _optionsService;
        this._type = base.TdSeriesType.Scatter;
        this._state = {};
        this.config = {};
    }
    TdChartSeriesScatterComponent.prototype.ngOnInit = function () {
        this._setOptions();
    };
    TdChartSeriesScatterComponent.prototype.ngOnChanges = function () {
        this._setOptions();
    };
    TdChartSeriesScatterComponent.prototype.ngOnDestroy = function () {
        this._removeOption();
    };
    TdChartSeriesScatterComponent.prototype._setOptions = function () {
        var config = base.assignDefined(this._state, this.config, {
            id: this.id,
            type: this._type,
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
        });
        this._optionsService.setArrayOption('series', config);
    };
    TdChartSeriesScatterComponent.prototype._removeOption = function () {
        this._optionsService.clearOption('series');
    };
    return TdChartSeriesScatterComponent;
}());
TdChartSeriesScatterComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-chart-series[td-scatter]',
                template: '',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
TdChartSeriesScatterComponent.ctorParameters = function () { return [
    { type: base.TdChartOptionsService, },
]; };
TdChartSeriesScatterComponent.propDecorators = {
    "config": [{ type: core.Input, args: ['config',] },],
    "id": [{ type: core.Input, args: ['id',] },],
    "name": [{ type: core.Input, args: ['name',] },],
    "color": [{ type: core.Input, args: ['color',] },],
    "coordinateSystem": [{ type: core.Input, args: ['coordinateSystem',] },],
    "xAxisIndex": [{ type: core.Input, args: ['xAxisIndex',] },],
    "yAxisIndex": [{ type: core.Input, args: ['yAxisIndex',] },],
    "polarIndex": [{ type: core.Input, args: ['polarIndex',] },],
    "geoIndex": [{ type: core.Input, args: ['geoIndex',] },],
    "calendarIndex": [{ type: core.Input, args: ['calendarIndex',] },],
    "hoverAnimation": [{ type: core.Input, args: ['hoverAnimation',] },],
    "legendHoverLink": [{ type: core.Input, args: ['legendHoverLink',] },],
    "symbol": [{ type: core.Input, args: ['symbol',] },],
    "symbolSize": [{ type: core.Input, args: ['symbolSize',] },],
    "symbolRotate": [{ type: core.Input, args: ['symbolRotate',] },],
    "symbolKeepAspect": [{ type: core.Input, args: ['symbolKeepAspect',] },],
    "symbolOffset": [{ type: core.Input, args: ['symbolOffset',] },],
    "large": [{ type: core.Input, args: ['large',] },],
    "largeThreshold": [{ type: core.Input, args: ['largeThreshold',] },],
    "cursor": [{ type: core.Input, args: ['cursor',] },],
    "label": [{ type: core.Input, args: ['label',] },],
    "itemStyle": [{ type: core.Input, args: ['itemStyle',] },],
    "emphasis": [{ type: core.Input, args: ['emphasis',] },],
    "progressive": [{ type: core.Input, args: ['progressive',] },],
    "progressiveThreshold": [{ type: core.Input, args: ['progressiveThreshold',] },],
    "dimensions": [{ type: core.Input, args: ['dimensions',] },],
    "encode": [{ type: core.Input, args: ['encode',] },],
    "seriesLayoutBy": [{ type: core.Input, args: ['seriesLayoutBy',] },],
    "datasetIndex": [{ type: core.Input, args: ['datasetIndex',] },],
    "data": [{ type: core.Input, args: ['data',] },],
    "markPoint": [{ type: core.Input, args: ['markPoint',] },],
    "markLine": [{ type: core.Input, args: ['markLine',] },],
    "markArea": [{ type: core.Input, args: ['markArea',] },],
    "zlevel": [{ type: core.Input, args: ['zlevel',] },],
    "z": [{ type: core.Input, args: ['z',] },],
    "silent": [{ type: core.Input, args: ['silent',] },],
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
var SCATTER_MODULE_COMPONENTS = [
    TdChartSeriesScatterComponent,
];
var CovalentScatterEchartsModule = /** @class */ (function () {
    function CovalentScatterEchartsModule() {
    }
    return CovalentScatterEchartsModule;
}());
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
            },] },
];
CovalentScatterEchartsModule.ctorParameters = function () { return []; };

exports.TdChartComponent = TdChartComponent;
exports.TdChartAxisComponent = TdChartAxisComponent;
exports.TdChartYAxisComponent = TdChartYAxisComponent;
exports.TdChartXAxisComponent = TdChartXAxisComponent;
exports.TdChartTooltipComponent = TdChartTooltipComponent;
exports.TdChartOptionsService = TdChartOptionsService$1;
exports.CHART_PROVIDER = CHART_PROVIDER;
exports.TdSeriesType = TdSeriesType$1;
exports.TdCoordinateSystem = TdCoordinateSystem;
exports.TdSeriesLayoutBy = TdSeriesLayoutBy;
exports.TdProgressiveChunkMode = TdProgressiveChunkMode;
exports.BASE_MODULE_COMPONENTS = BASE_MODULE_COMPONENTS;
exports.CovalentBaseEchartsModule = CovalentBaseEchartsModule;
exports.assignDefined = assignDefined$1;
exports.BAR_MODULE_COMPONENTS = BAR_MODULE_COMPONENTS;
exports.CovalentBarEchartsModule = CovalentBarEchartsModule;
exports.LINE_MODULE_COMPONENTS = LINE_MODULE_COMPONENTS;
exports.CovalentLineEchartsModule = CovalentLineEchartsModule;
exports.SCATTER_MODULE_COMPONENTS = SCATTER_MODULE_COMPONENTS;
exports.CovalentScatterEchartsModule = CovalentScatterEchartsModule;
exports.ɵe = TdChartSeriesBarComponent;
exports.ɵb = CHART_PROVIDER_FACTORY;
exports.ɵc = TdChartSeriesTooltipFormatterDirective;
exports.ɵd = TdSeriesTooltipComponent;
exports.ɵa = TdChartTooltipFormatterDirective;
exports.ɵf = TdChartSeriesLineComponent;
exports.ɵg = TdChartSeriesScatterComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-echarts.umd.js.map
