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

var TdChartOptionsService = /** @class */ (function () {
    function TdChartOptionsService() {
        this._options = {};
        this._optionsSubject = new BehaviorSubject(this._options);
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
    { type: Injectable },
];
TdChartOptionsService.ctorParameters = function () { return []; };
function BASE_CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService();
}
var BASE_CHART_PROVIDER = {
    provide: TdChartOptionsService,
    deps: [[new Optional(), new SkipSelf(), TdChartOptionsService]],
    useFactory: BASE_CHART_PROVIDER_FACTORY,
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
var TdBaseChartComponent = /** @class */ (function () {
    function TdBaseChartComponent(_changeDetectorRef, _elementRef, _optionsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._optionsService = _optionsService;
        this._widthSubject = new Subject();
        this._heightSubject = new Subject();
        this._resizing = false;
        this._options = {};
        this.showLegend = true;
        this.dataZoom = true;
        this.markAreaClick = new EventEmitter();
    }
    Object.defineProperty(TdBaseChartComponent.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TdBaseChartComponent.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    TdBaseChartComponent.prototype.ngAfterViewInit = function () {
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
            assignDefined(_this._options, options);
            _this.render();
        });
    };
    TdBaseChartComponent.prototype.ngDoCheck = function () {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(((this._elementRef.nativeElement)).getBoundingClientRect().width);
            this._heightSubject.next(((this._elementRef.nativeElement)).getBoundingClientRect().height);
        }
    };
    TdBaseChartComponent.prototype.ngOnChanges = function () {
        if (this._instance) {
            this._instance.clear();
            this.render();
        }
    };
    TdBaseChartComponent.prototype.ngOnDestroy = function () {
        if (this._resizeSubscription) {
            this._resizeSubscription.unsubscribe();
        }
    };
    TdBaseChartComponent.prototype.render = function () {
        if (this._instance) {
            if (this.data && this.data instanceof Array) {
                this._series = this.data.map(function (d) {
                    return {
                        name: d.name,
                        id: d.id,
                        type: d.type ? d.type : 'line',
                        stack: d.stack,
                        data: d.data,
                        color: d.color,
                        connectNulls: false,
                        barWidth: d.barWidth,
                        barGap: d.barGap,
                        z: d.z,
                        lineStyle: {
                            opacity: d.opacity,
                            width: d.width,
                            shadowBlur: d.shadowBlur,
                            shadowColor: d.shadowColor,
                            shadowOffsetX: d.shadowOffsetX,
                            shadowOffsetY: d.shadowOffsetY,
                        },
                        itemStyle: {
                            opacity: d.opacity,
                        },
                        showSymbol: false,
                        areaStyle: d.area ? { opacity: d.opacity } : undefined,
                        markArea: {
                            data: d.markArea,
                            itemStyle: {
                                borderColor: '#464646',
                                borderWidth: 1,
                                opacity: d.markAreaOpacity ? d.markAreaOpacity : 0.1,
                            },
                        },
                    };
                });
            }
            this._legend = {
                show: this.showLegend,
                type: 'scroll',
                selectedMode: 'multiple',
                orient: 'horizontal',
                right: '5',
                bottom: '5',
                data: this.data && this.data instanceof Array ? this.data.map(function (d) { return d.name; }) : [],
            }, this._instance.setOption(Object.assign({}, {
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
                series: this._series,
            }, this._options), true);
            this._changeDetectorRef.markForCheck();
        }
    };
    return TdBaseChartComponent;
}());
TdBaseChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-base-chart',
                template: "",
                styles: [":host{display:block}"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [BASE_CHART_PROVIDER],
            },] },
];
TdBaseChartComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: TdChartOptionsService, },
]; };
TdBaseChartComponent.propDecorators = {
    "chartTitle": [{ type: Input, args: ['chartTitle',] },],
    "showLegend": [{ type: Input, args: ['showLegend',] },],
    "data": [{ type: Input, args: ['data',] },],
    "max": [{ type: Input, args: ['max',] },],
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
    { type: TdChartOptionsService, },
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
        var config = assignDefined(this._state, this.config, {
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
    { type: TdChartOptionsService, },
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
    { type: TdChartOptionsService, },
]; };
TdChartYAxisComponent.propDecorators = {
    "position": [{ type: Input, args: ['position',] },],
};
var BASE_MODULE_COMPONENTS = [
    TdBaseChartComponent,
    TdChartTooltipComponent,
    TdChartTooltipFormatterDirective,
    TdChartXAxisComponent,
    TdChartYAxisComponent,
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

export { TdBaseChartComponent, TdChartOptionsService, BASE_CHART_PROVIDER, BASE_MODULE_COMPONENTS, CovalentBaseEchartsModule, TdChartAxisComponent as ɵe, TdChartXAxisComponent as ɵd, TdChartYAxisComponent as ɵf, BASE_CHART_PROVIDER_FACTORY as ɵa, TdChartTooltipComponent as ɵc, TdChartTooltipFormatterDirective as ɵb };
//# sourceMappingURL=covalent-echarts-base.js.map
