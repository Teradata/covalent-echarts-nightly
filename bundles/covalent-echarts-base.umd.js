(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('echarts/lib/echarts'), require('echarts/lib/component/title'), require('echarts/lib/component/legend'), require('echarts/lib/component/legendScroll'), require('echarts/lib/component/markArea'), require('echarts/lib/component/dataZoom'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@covalent/echarts/base', ['exports', '@angular/core', 'rxjs', 'rxjs/operators', 'echarts/lib/echarts', 'echarts/lib/component/title', 'echarts/lib/component/legend', 'echarts/lib/component/legendScroll', 'echarts/lib/component/markArea', 'echarts/lib/component/dataZoom', '@angular/common'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.base = {}),global.ng.core,global.rxjs,global.Rx.Observable.prototype,global.echarts,null,null,null,null,null,global.ng.common));
}(this, (function (exports,core,rxjs,operators,echarts,title,legend,legendScroll,markArea,dataZoom,common) { 'use strict';

var TdChartOptionsService = /** @class */ (function () {
    function TdChartOptionsService() {
        this._options = {};
        this._optionsSubject = new rxjs.BehaviorSubject(this._options);
    }
    TdChartOptionsService.prototype.setOption = function (option, value) {
        var options = {};
        options[option] = value;
        Object.assign(this._options, options);
        this._optionsSubject.next(options);
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
function BASE_CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService();
}
var BASE_CHART_PROVIDER = {
    provide: TdChartOptionsService,
    deps: [[new core.Optional(), new core.SkipSelf(), TdChartOptionsService]],
    useFactory: BASE_CHART_PROVIDER_FACTORY,
};
var TdBaseChartComponent = /** @class */ (function () {
    function TdBaseChartComponent(_changeDetectorRef, _elementRef, _optionsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._optionsService = _optionsService;
        this._widthSubject = new rxjs.Subject();
        this._heightSubject = new rxjs.Subject();
        this._resizing = false;
        this._options = {};
        this.showLegend = true;
        this.yAxisType = 'value';
        this.xAxisType = 'time';
        this.dataZoom = true;
        this.showXAxis = true;
        this.showYAxis = true;
        this.markAreaClick = new core.EventEmitter();
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
            Object.assign(_this._options, options);
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
            var option = {};
            if (this.chartTitle) {
                option.title = {
                    text: this.chartTitle,
                };
            }
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
                xAxis: [{
                        show: this.showXAxis,
                        position: 'bottom',
                        type: this.xAxisType,
                        boundaryGap: false,
                        axisLabel: {
                            formatter: this.xAxisFormatter,
                            inside: !this.showXAxis,
                        },
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#777777',
                            },
                        },
                        data: this.xAxis,
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: '#ECECEC',
                            },
                        },
                    }],
                yAxis: [{
                        show: this.showYAxis,
                        max: this.max,
                        type: this.yAxisType,
                        axisLabel: {
                            inside: true,
                            showMinLabel: false,
                            formatter: this.yAxisFormatter,
                        },
                        splitNumber: this.yAxisSplitNumber,
                        axisLine: {
                            show: false,
                            lineStyle: {
                                color: '#777777',
                            },
                        },
                        data: this.yAxis,
                        splitLine: {
                            lineStyle: {
                                color: '#ECECEC',
                            },
                        },
                    }],
                series: this._series,
            }, this._options), true);
            this._changeDetectorRef.markForCheck();
        }
    };
    return TdBaseChartComponent;
}());
TdBaseChartComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-base-chart',
                template: "",
                styles: [":host{display:block}"],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [BASE_CHART_PROVIDER],
            },] },
];
TdBaseChartComponent.ctorParameters = function () { return [
    { type: core.ChangeDetectorRef, },
    { type: core.ElementRef, },
    { type: TdChartOptionsService, },
]; };
TdBaseChartComponent.propDecorators = {
    "chartTitle": [{ type: core.Input, args: ['chartTitle',] },],
    "showLegend": [{ type: core.Input, args: ['showLegend',] },],
    "data": [{ type: core.Input, args: ['data',] },],
    "max": [{ type: core.Input, args: ['max',] },],
    "chartGroup": [{ type: core.Input, args: ['chartGroup',] },],
    "yAxisFormatter": [{ type: core.Input, args: ['yAxisFormatter',] },],
    "xAxisFormatter": [{ type: core.Input, args: ['xAxisFormatter',] },],
    "yAxisType": [{ type: core.Input, args: ['yAxisType',] },],
    "xAxisType": [{ type: core.Input, args: ['xAxisType',] },],
    "dataZoom": [{ type: core.Input, args: ['dataZoom',] },],
    "xAxis": [{ type: core.Input, args: ['xAxis',] },],
    "yAxis": [{ type: core.Input, args: ['yAxis',] },],
    "showXAxis": [{ type: core.Input, args: ['showXAxis',] },],
    "showYAxis": [{ type: core.Input, args: ['showYAxis',] },],
    "yAxisSplitNumber": [{ type: core.Input, args: ['yAxisSplitNumber',] },],
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
        var config = Object.assign({}, this.config ? this.config : {}, {
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
    { type: TdChartOptionsService, },
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
var BASE_MODULE_COMPONENTS = [
    TdBaseChartComponent,
    TdChartTooltipComponent,
    TdChartTooltipFormatterDirective,
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

exports.TdBaseChartComponent = TdBaseChartComponent;
exports.TdChartOptionsService = TdChartOptionsService;
exports.BASE_CHART_PROVIDER = BASE_CHART_PROVIDER;
exports.BASE_MODULE_COMPONENTS = BASE_MODULE_COMPONENTS;
exports.CovalentBaseEchartsModule = CovalentBaseEchartsModule;
exports.ɵa = BASE_CHART_PROVIDER_FACTORY;
exports.ɵc = TdChartTooltipComponent;
exports.ɵb = TdChartTooltipFormatterDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-echarts-base.umd.js.map
