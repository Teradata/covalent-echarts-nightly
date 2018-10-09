import { __values, __extends } from 'tslib';
import { Injectable, Optional, SkipSelf, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, Directive, TemplateRef, ContentChild, ViewChild, NgModule } from '@angular/core';
import { BehaviorSubject, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { init, connect } from 'echarts/lib/echarts';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/legendScroll';
import 'echarts/lib/component/markArea';
import 'echarts/lib/component/dataZoom';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/bar';
import { TdChartOptionsService, assignDefined, TdSeriesType } from '@covalent/echarts/base';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/scatter';

var TdChartOptionsService$1 = /** @class */ (function () {
    function TdChartOptionsService$1() {
        this._options = {};
        this._optionsSubject = new BehaviorSubject(this._options);
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
    { type: Injectable },
];
TdChartOptionsService$1.ctorParameters = function () { return []; };
function CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService$1();
}
var CHART_PROVIDER = {
    provide: TdChartOptionsService$1,
    deps: [[new Optional(), new SkipSelf(), TdChartOptionsService$1]],
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
        this._widthSubject = new Subject();
        this._heightSubject = new Subject();
        this._resizing = false;
        this._state = {};
        this._options = {};
        this.config = {};
        this.showLegend = true;
        this.dataZoom = true;
        this.markAreaClick = new EventEmitter();
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
        this._instance = init(this._elementRef.nativeElement);
        fromEvent(this._instance, 'click').subscribe(function (params) {
            if (params.componentType === 'markArea') {
                _this.markAreaClick.next(params);
            }
        });
        if (this.chartGroup) {
            this._instance.group = this.chartGroup;
            connect(this.chartGroup);
            this._changeDetectorRef.markForCheck();
        }
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(debounceTime(0), distinctUntilChanged()), this._heightSubject.asObservable().pipe(debounceTime(0), distinctUntilChanged())).subscribe(function () {
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
    { type: Component, args: [{
                selector: 'td-chart',
                template: "",
                styles: [":host{display:block}"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [CHART_PROVIDER],
            },] },
];
TdChartComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: TdChartOptionsService$1, },
]; };
TdChartComponent.propDecorators = {
    "config": [{ type: Input, args: ['config',] },],
    "chartTitle": [{ type: Input, args: ['chartTitle',] },],
    "showLegend": [{ type: Input, args: ['showLegend',] },],
    "chartGroup": [{ type: Input, args: ['chartGroup',] },],
    "dataZoom": [{ type: Input, args: ['dataZoom',] },],
    "markAreaClick": [{ type: Output, args: ['markAreaClick',] },],
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
    { type: Directive, args: [{
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
    { type: Component, args: [{
                selector: 'td-chart-tooltip',
                template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
TdChartTooltipComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: TdChartOptionsService$1, },
]; };
TdChartTooltipComponent.propDecorators = {
    "config": [{ type: Input, args: ['config',] },],
    "show": [{ type: Input, args: ['show',] },],
    "trigger": [{ type: Input, args: ['trigger',] },],
    "axisPointer": [{ type: Input, args: ['axisPointer',] },],
    "showContent": [{ type: Input, args: ['showContent',] },],
    "alwaysShowContent": [{ type: Input, args: ['alwaysShowContent',] },],
    "triggerOn": [{ type: Input, args: ['triggerOn',] },],
    "showDelay": [{ type: Input, args: ['showDelay',] },],
    "hideDelay": [{ type: Input, args: ['hideDelay',] },],
    "enterable": [{ type: Input, args: ['enterable',] },],
    "confine": [{ type: Input, args: ['confine',] },],
    "transitionDuration": [{ type: Input, args: ['transitionDuration',] },],
    "position": [{ type: Input, args: ['position',] },],
    "backgroundColor": [{ type: Input, args: ['backgroundColor',] },],
    "borderColor": [{ type: Input, args: ['borderColor',] },],
    "borderWidth": [{ type: Input, args: ['borderWidth',] },],
    "padding": [{ type: Input, args: ['padding',] },],
    "textStyle": [{ type: Input, args: ['textStyle',] },],
    "extraCssText": [{ type: Input, args: ['extraCssText',] },],
    "formatterTemplate": [{ type: ContentChild, args: [TdChartTooltipFormatterDirective, { read: TemplateRef },] },],
    "fullTemplate": [{ type: ViewChild, args: ['tooltipContent',] },],
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
    { type: Directive, args: [{
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
    { type: Component, args: [{
                selector: 'td-chart-series-tooltip',
                template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>\n",
                styles: [""],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
TdSeriesTooltipComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: TdChartOptionsService$1, },
]; };
TdSeriesTooltipComponent.propDecorators = {
    "config": [{ type: Input, args: ['config',] },],
    "configArray": [{ type: Input, args: ['configArray',] },],
    "index": [{ type: Input, args: ['index',] },],
    "formatter": [{ type: Input, args: ['formatter',] },],
    "position": [{ type: Input, args: ['position',] },],
    "backgroundColor": [{ type: Input, args: ['backgroundColor',] },],
    "borderColor": [{ type: Input, args: ['borderColor',] },],
    "borderWidth": [{ type: Input, args: ['borderWidth',] },],
    "padding": [{ type: Input, args: ['padding',] },],
    "textStyle": [{ type: Input, args: ['textStyle',] },],
    "extraCssText": [{ type: Input, args: ['extraCssText',] },],
    "formatterTemplate": [{ type: ContentChild, args: [TdChartSeriesTooltipFormatterDirective, { read: TemplateRef },] },],
    "fullTemplate": [{ type: ViewChild, args: ['tooltipContent',] },],
};
var TdNameLocation = {
    Start: 'start',
    Middle: 'middle',
    Center: 'center',
    End: 'end',
};
var TdAxisType = {
    Value: 'value',
    Category: 'category',
    Time: 'time',
    Log: 'log',
};
var TdYAxisPosition = {
    Left: 'left',
    Right: 'right',
};
var TdXAxisPosition = {
    Top: 'top',
    Bottom: 'bottom',
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
    "config": [{ type: Input, args: ['config',] },],
    "id": [{ type: Input, args: ['id',] },],
    "show": [{ type: Input, args: ['show',] },],
    "gridIndex": [{ type: Input, args: ['gridIndex',] },],
    "offset": [{ type: Input, args: ['offset',] },],
    "type": [{ type: Input, args: ['type',] },],
    "name": [{ type: Input, args: ['name',] },],
    "nameLocation": [{ type: Input, args: ['nameLocation',] },],
    "nameTextStyle": [{ type: Input, args: ['nameTextStyle',] },],
    "nameGap": [{ type: Input, args: ['nameGap',] },],
    "nameRotate": [{ type: Input, args: ['nameRotate',] },],
    "inverse": [{ type: Input, args: ['inverse',] },],
    "boundaryGap": [{ type: Input, args: ['boundaryGap',] },],
    "min": [{ type: Input, args: ['min',] },],
    "max": [{ type: Input, args: ['max',] },],
    "scale": [{ type: Input, args: ['scale',] },],
    "minInterval": [{ type: Input, args: ['minInterval',] },],
    "interval": [{ type: Input, args: ['interval',] },],
    "logBase": [{ type: Input, args: ['logBase',] },],
    "silent": [{ type: Input, args: ['silent',] },],
    "triggerEvent": [{ type: Input, args: ['triggerEvent',] },],
    "axisLine": [{ type: Input, args: ['axisLine',] },],
    "axisTick": [{ type: Input, args: ['axisTick',] },],
    "axisLabel": [{ type: Input, args: ['axisLabel',] },],
    "splitLine": [{ type: Input, args: ['splitLine',] },],
    "splitArea": [{ type: Input, args: ['splitArea',] },],
    "data": [{ type: Input, args: ['data',] },],
    "axisPointer": [{ type: Input, args: ['axisPointer',] },],
    "zlevel": [{ type: Input, args: ['zlevel',] },],
    "z": [{ type: Input, args: ['z',] },],
};
var TdChartXAxisComponent = /** @class */ (function (_super) {
    __extends(TdChartXAxisComponent, _super);
    function TdChartXAxisComponent(_optionsService) {
        return _super.call(this, 'xAxis', _optionsService) || this;
    }
    return TdChartXAxisComponent;
}(TdChartAxisComponent));
TdChartXAxisComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-x-axis',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
TdChartXAxisComponent.ctorParameters = function () { return [
    { type: TdChartOptionsService$1, },
]; };
TdChartXAxisComponent.propDecorators = {
    "position": [{ type: Input, args: ['position',] },],
};
var TdChartYAxisComponent = /** @class */ (function (_super) {
    __extends(TdChartYAxisComponent, _super);
    function TdChartYAxisComponent(_optionsService) {
        return _super.call(this, 'yAxis', _optionsService) || this;
    }
    return TdChartYAxisComponent;
}(TdChartAxisComponent));
TdChartYAxisComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-y-axis',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
TdChartYAxisComponent.ctorParameters = function () { return [
    { type: TdChartOptionsService$1, },
]; };
TdChartYAxisComponent.propDecorators = {
    "position": [{ type: Input, args: ['position',] },],
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
            },] },
];
CovalentBaseEchartsModule.ctorParameters = function () { return []; };
var TdAxisPointerAxis = {
    X: 'x',
    Y: 'y',
    Radius: 'radius',
    Angle: 'angle',
};
var TdToolTipTrigger = {
    Item: 'item',
    Axis: 'axis',
    None: 'none',
};
var TdTriggerOn = {
    Mousemove: 'mousemove',
    Click: 'click',
    None: 'none',
};
var TdToolPointerType = {
    Line: 'line',
    Shadow: 'shadow',
    Cross: 'cross',
};
var TdLabelPosition = {
    Top: 'top',
    Left: 'left',
    Right: 'right',
    Bottom: 'bottom',
    Inside: 'inside',
    InsideLeft: 'insideLeft',
    InsideRight: 'insideRight',
    InsideTop: 'insideTop',
    InsideBottom: 'insideBottom',
    InsideTopLeft: 'insideTopLeft',
    InsideBottomLeft: 'insideBottomLeft',
    InsideTopRight: 'insideTopRight',
    InsideBottomRight: 'insideBottomRight',
};
var TdAlign = {
    Left: 'left',
    Center: 'center',
    Right: 'right',
};
var TdLineType = {
    Solid: 'solid',
    Dashed: 'dashed',
    Dotted: 'dotted',
};
var TdAreaOrigin = {
    Auto: 'auto',
    Start: 'start',
    End: 'end',
};
var TdLineLabelPosition = {
    Middle: 'middle',
    Start: 'start',
    End: 'end',
};
var TdTooltipPosition = {
    Inside: 'inside',
    Top: 'top',
    Left: 'left',
    Right: 'right',
    Bottom: 'bottom',
};
var TdFontWeight = {
    Normal: 'normal',
    Bold: 'bold',
    Bolder: 'bolder',
    Lighter: 'lighter',
};
var TdVerticalAlign = {
    Top: 'top',
    Middle: 'middle',
    Bottom: 'bottom',
    Center: 'center',
};
var TdPointerType = {
    Line: 'line',
    Shadow: 'shadow',
};
var TdFontFamily = {
    Sans: 'sans-serif',
    Serif: 'serif',
    Mono: 'monospace',
};
var TdFontStyle = {
    Normal: 'normal',
    Italic: 'italic',
    Oblique: 'oblique',
};
var TdStatus = {
    Show: 'show',
    Hide: 'hide',
};
var TdMarkPointSymbol = {
    Circle: 'circle',
    Rect: 'rect',
    RoundRect: 'roundRect',
    Triangle: 'triangle',
    Diamond: 'diamond',
    Pin: 'pin',
    Arrow: 'arrow',
    None: 'none',
};
var TdAnimationEasing = {
    Linear: 'linear',
    QuadraticIn: 'quadraticIn',
    QuadraticOut: 'quadraticOut',
    QuadraticInOut: 'quadraticInOut',
    CubicIn: 'cubicIn',
    CubicOut: 'cubicOut',
    CubicInOut: 'cubicInOut',
    QuarticIn: 'quarticIn',
    QuarticOut: 'quarticOut',
    QuarticInOut: 'quarticInOut',
    QuinticIn: 'quinticIn',
    QuinticOut: 'quinticOut',
    QuinticInOut: 'quinticInOut',
    SinusoidalIn: 'sinusoidalIn',
    SinusoidalOut: 'sinusoidalOut',
    SinusoidalInOut: 'sinusoidalInOut',
    ExponentialIn: 'exponentialIn',
    ExponentialOut: 'exponentialOut',
    ExponentialInOut: 'exponentialInOut',
    CircularIn: 'circularIn',
    CircularOut: 'circularOut',
    CircularInOut: 'circularInOut',
    ElasticIn: 'elasticIn',
    ElasticOut: 'elasticOut',
    ElasticInOut: 'elasticInOut',
    BackIn: 'backIn',
    BackOut: 'backOut',
    BackInOut: 'backInOut',
    BounceOut: 'bounceOut',
    BounceInOut: 'bounceInOut',
};
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
        var config = assignDefined(this._state, this.config, {
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
    { type: Component, args: [{
                selector: 'td-chart-series[td-bar]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
TdChartSeriesBarComponent.ctorParameters = function () { return [
    { type: TdChartOptionsService, },
]; };
TdChartSeriesBarComponent.propDecorators = {
    "config": [{ type: Input, args: ['config',] },],
    "id": [{ type: Input, args: ['id',] },],
    "name": [{ type: Input, args: ['name',] },],
    "color": [{ type: Input, args: ['color',] },],
    "coordinateSystem": [{ type: Input, args: ['coordinateSystem',] },],
    "xAxisIndex": [{ type: Input, args: ['xAxisIndex',] },],
    "yAxisIndex": [{ type: Input, args: ['yAxisIndex',] },],
    "legendHoverLink": [{ type: Input, args: ['legendHoverLink',] },],
    "stack": [{ type: Input, args: ['stack',] },],
    "cursor": [{ type: Input, args: ['cursor',] },],
    "label": [{ type: Input, args: ['label',] },],
    "itemStyle": [{ type: Input, args: ['itemStyle',] },],
    "emphasis": [{ type: Input, args: ['emphasis',] },],
    "barWidth": [{ type: Input, args: ['barWidth',] },],
    "barMaxWidth": [{ type: Input, args: ['barMaxWidth',] },],
    "barMinHeight": [{ type: Input, args: ['barMinHeight',] },],
    "barGap": [{ type: Input, args: ['barGap',] },],
    "barCategoryGap": [{ type: Input, args: ['barCategoryGap',] },],
    "large": [{ type: Input, args: ['large',] },],
    "largeThreshold": [{ type: Input, args: ['largeThreshold',] },],
    "progressive": [{ type: Input, args: ['progressive',] },],
    "progressiveThreshold": [{ type: Input, args: ['progressiveThreshold',] },],
    "progressiveChunkMode": [{ type: Input, args: ['progressiveChunkMode',] },],
    "dimensions": [{ type: Input, args: ['dimensions',] },],
    "encode": [{ type: Input, args: ['encode',] },],
    "seriesLayoutBy": [{ type: Input, args: ['seriesLayoutBy',] },],
    "datasetIndex": [{ type: Input, args: ['datasetIndex',] },],
    "data": [{ type: Input, args: ['data',] },],
    "markPoint": [{ type: Input, args: ['markPoint',] },],
    "markLine": [{ type: Input, args: ['markLine',] },],
    "markArea": [{ type: Input, args: ['markArea',] },],
    "zlevel": [{ type: Input, args: ['zlevel',] },],
    "z": [{ type: Input, args: ['z',] },],
    "animation": [{ type: Input, args: ['animation',] },],
    "animationThreshold": [{ type: Input, args: ['animationThreshold',] },],
    "animationDuration": [{ type: Input, args: ['animationDuration',] },],
    "animationEasing": [{ type: Input, args: ['animationEasing',] },],
    "animationDelay": [{ type: Input, args: ['animationDelay',] },],
    "animationDurationUpdate": [{ type: Input, args: ['animationDurationUpdate',] },],
    "animationEasingUpdate": [{ type: Input, args: ['animationEasingUpdate',] },],
    "animationDelayUpdate": [{ type: Input, args: ['animationDelayUpdate',] },],
    "tooltip": [{ type: Input, args: ['tooltip',] },],
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
            },] },
];
CovalentBarEchartsModule.ctorParameters = function () { return []; };
var TdChartSeriesLineComponent = /** @class */ (function () {
    function TdChartSeriesLineComponent(_optionsService) {
        this._optionsService = _optionsService;
        this._type = TdSeriesType.Line;
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
        var config = assignDefined(this._state, this.config, {
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
    { type: Component, args: [{
                selector: 'td-chart-series[td-line]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
TdChartSeriesLineComponent.ctorParameters = function () { return [
    { type: TdChartOptionsService, },
]; };
TdChartSeriesLineComponent.propDecorators = {
    "config": [{ type: Input, args: ['config',] },],
    "id": [{ type: Input, args: ['id',] },],
    "name": [{ type: Input, args: ['name',] },],
    "color": [{ type: Input, args: ['color',] },],
    "coordinateSystem": [{ type: Input, args: ['coordinateSystem',] },],
    "xAxisIndex": [{ type: Input, args: ['xAxisIndex',] },],
    "yAxisIndex": [{ type: Input, args: ['yAxisIndex',] },],
    "polarIndex": [{ type: Input, args: ['polarIndex',] },],
    "symbol": [{ type: Input, args: ['symbol',] },],
    "symbolSize": [{ type: Input, args: ['symbolSize',] },],
    "symbolRotate": [{ type: Input, args: ['symbolRotate',] },],
    "symbolKeepAspect": [{ type: Input, args: ['symbolKeepAspect',] },],
    "symbolOffset": [{ type: Input, args: ['symbolOffset',] },],
    "showSymbol": [{ type: Input, args: ['showSymbol',] },],
    "showAllSymbol": [{ type: Input, args: ['showAllSymbol',] },],
    "hoverAnimation": [{ type: Input, args: ['hoverAnimation',] },],
    "legendHoverLink": [{ type: Input, args: ['legendHoverLink',] },],
    "stack": [{ type: Input, args: ['stack',] },],
    "cursor": [{ type: Input, args: ['cursor',] },],
    "connectNulls": [{ type: Input, args: ['connectNulls',] },],
    "clipOverflow": [{ type: Input, args: ['clipOverflow',] },],
    "step": [{ type: Input, args: ['step',] },],
    "label": [{ type: Input, args: ['label',] },],
    "itemStyle": [{ type: Input, args: ['itemStyle',] },],
    "lineStyle": [{ type: Input, args: ['lineStyle',] },],
    "areaStyle": [{ type: Input, args: ['areaStyle',] },],
    "emphasis": [{ type: Input, args: ['emphasis',] },],
    "smooth": [{ type: Input, args: ['smooth',] },],
    "smoothMonotone": [{ type: Input, args: ['smoothMonotone',] },],
    "sampling": [{ type: Input, args: ['sampling',] },],
    "dimensions": [{ type: Input, args: ['dimensions',] },],
    "encode": [{ type: Input, args: ['encode',] },],
    "seriesLayoutBy": [{ type: Input, args: ['seriesLayoutBy',] },],
    "datasetIndex": [{ type: Input, args: ['datasetIndex',] },],
    "data": [{ type: Input, args: ['data',] },],
    "markPoint": [{ type: Input, args: ['markPoint',] },],
    "markLine": [{ type: Input, args: ['markLine',] },],
    "markArea": [{ type: Input, args: ['markArea',] },],
    "zlevel": [{ type: Input, args: ['zlevel',] },],
    "z": [{ type: Input, args: ['z',] },],
    "silent": [{ type: Input, args: ['silent',] },],
    "animation": [{ type: Input, args: ['animation',] },],
    "animationThreshold": [{ type: Input, args: ['animationThreshold',] },],
    "animationDuration": [{ type: Input, args: ['animationDuration',] },],
    "animationEasing": [{ type: Input, args: ['animationEasing',] },],
    "animationDelay": [{ type: Input, args: ['animationDelay',] },],
    "animationDurationUpdate": [{ type: Input, args: ['animationDurationUpdate',] },],
    "animationEasingUpdate": [{ type: Input, args: ['animationEasingUpdate',] },],
    "animationDelayUpdate": [{ type: Input, args: ['animationDelayUpdate',] },],
    "tooltip": [{ type: Input, args: ['tooltip',] },],
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
            },] },
];
CovalentLineEchartsModule.ctorParameters = function () { return []; };
var TdSampling = {
    Average: 'average',
    Max: 'max',
    Min: 'min',
    Sum: 'sum',
};
var TdChartSeriesScatterComponent = /** @class */ (function () {
    function TdChartSeriesScatterComponent(_optionsService) {
        this._optionsService = _optionsService;
        this._type = TdSeriesType.Scatter;
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
        var config = assignDefined(this._state, this.config, {
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
    { type: Component, args: [{
                selector: 'td-chart-series[td-scatter]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
TdChartSeriesScatterComponent.ctorParameters = function () { return [
    { type: TdChartOptionsService, },
]; };
TdChartSeriesScatterComponent.propDecorators = {
    "config": [{ type: Input, args: ['config',] },],
    "id": [{ type: Input, args: ['id',] },],
    "name": [{ type: Input, args: ['name',] },],
    "color": [{ type: Input, args: ['color',] },],
    "coordinateSystem": [{ type: Input, args: ['coordinateSystem',] },],
    "xAxisIndex": [{ type: Input, args: ['xAxisIndex',] },],
    "yAxisIndex": [{ type: Input, args: ['yAxisIndex',] },],
    "polarIndex": [{ type: Input, args: ['polarIndex',] },],
    "geoIndex": [{ type: Input, args: ['geoIndex',] },],
    "calendarIndex": [{ type: Input, args: ['calendarIndex',] },],
    "hoverAnimation": [{ type: Input, args: ['hoverAnimation',] },],
    "legendHoverLink": [{ type: Input, args: ['legendHoverLink',] },],
    "symbol": [{ type: Input, args: ['symbol',] },],
    "symbolSize": [{ type: Input, args: ['symbolSize',] },],
    "symbolRotate": [{ type: Input, args: ['symbolRotate',] },],
    "symbolKeepAspect": [{ type: Input, args: ['symbolKeepAspect',] },],
    "symbolOffset": [{ type: Input, args: ['symbolOffset',] },],
    "large": [{ type: Input, args: ['large',] },],
    "largeThreshold": [{ type: Input, args: ['largeThreshold',] },],
    "cursor": [{ type: Input, args: ['cursor',] },],
    "label": [{ type: Input, args: ['label',] },],
    "itemStyle": [{ type: Input, args: ['itemStyle',] },],
    "emphasis": [{ type: Input, args: ['emphasis',] },],
    "progressive": [{ type: Input, args: ['progressive',] },],
    "progressiveThreshold": [{ type: Input, args: ['progressiveThreshold',] },],
    "dimensions": [{ type: Input, args: ['dimensions',] },],
    "encode": [{ type: Input, args: ['encode',] },],
    "seriesLayoutBy": [{ type: Input, args: ['seriesLayoutBy',] },],
    "datasetIndex": [{ type: Input, args: ['datasetIndex',] },],
    "data": [{ type: Input, args: ['data',] },],
    "markPoint": [{ type: Input, args: ['markPoint',] },],
    "markLine": [{ type: Input, args: ['markLine',] },],
    "markArea": [{ type: Input, args: ['markArea',] },],
    "zlevel": [{ type: Input, args: ['zlevel',] },],
    "z": [{ type: Input, args: ['z',] },],
    "silent": [{ type: Input, args: ['silent',] },],
    "animation": [{ type: Input, args: ['animation',] },],
    "animationThreshold": [{ type: Input, args: ['animationThreshold',] },],
    "animationDuration": [{ type: Input, args: ['animationDuration',] },],
    "animationEasing": [{ type: Input, args: ['animationEasing',] },],
    "animationDelay": [{ type: Input, args: ['animationDelay',] },],
    "animationDurationUpdate": [{ type: Input, args: ['animationDurationUpdate',] },],
    "animationEasingUpdate": [{ type: Input, args: ['animationEasingUpdate',] },],
    "animationDelayUpdate": [{ type: Input, args: ['animationDelayUpdate',] },],
    "tooltip": [{ type: Input, args: ['tooltip',] },],
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
            },] },
];
CovalentScatterEchartsModule.ctorParameters = function () { return []; };

export { TdChartComponent, TdChartAxisComponent, TdChartYAxisComponent, TdChartXAxisComponent, TdChartTooltipComponent, TdChartOptionsService$1 as TdChartOptionsService, CHART_PROVIDER, TdYAxisPosition, TdXAxisPosition, TdNameLocation, TdAxisType, TdAlign, TdFontStyle, TdFontWeight, TdVerticalAlign, TdFontFamily, TdPointerType, TdStatus, TdLineType, TdToolTipTrigger, TdLabelPosition, TdToolPointerType, TdTriggerOn, TdAreaOrigin, TdMarkPointSymbol, TdAnimationEasing, TdTooltipPosition, TdLineLabelPosition, TdAxisPointerAxis, TdSeriesType$1 as TdSeriesType, TdCoordinateSystem, TdSeriesLayoutBy, TdProgressiveChunkMode, BASE_MODULE_COMPONENTS, CovalentBaseEchartsModule, assignDefined$1 as assignDefined, BAR_MODULE_COMPONENTS, CovalentBarEchartsModule, LINE_MODULE_COMPONENTS, CovalentLineEchartsModule, TdSampling, SCATTER_MODULE_COMPONENTS, CovalentScatterEchartsModule, TdChartSeriesBarComponent as ɵe, CHART_PROVIDER_FACTORY as ɵb, TdChartSeriesTooltipFormatterDirective as ɵc, TdSeriesTooltipComponent as ɵd, TdChartTooltipFormatterDirective as ɵa, TdChartSeriesLineComponent as ɵf, TdChartSeriesScatterComponent as ɵg };
//# sourceMappingURL=covalent-echarts.js.map
