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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdChartOptionsService$1 {
    constructor() {
        this._options = {};
        this._optionsSubject = new BehaviorSubject(this._options);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    setOption(option, value) {
        let /** @type {?} */ options = {};
        options[option] = value;
        Object.assign(this._options, options);
        this._optionsSubject.next(this._options);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    setArrayOption(option, value) {
        let /** @type {?} */ prevValue = this.getOption(option);
        if (prevValue) {
            let /** @type {?} */ index = prevValue.indexOf(value);
            index > -1 ? prevValue[index] = value : prevValue.push(value);
        }
        else {
            prevValue = [value];
        }
        this.setOption(option, prevValue);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getOption(option) {
        return this._options[option];
    }
    /**
     * @param {?} option
     * @return {?}
     */
    clearOption(option) {
        this.setOption(option, undefined);
    }
    /**
     * @return {?}
     */
    listen() {
        return this._optionsSubject.asObservable();
    }
}
TdChartOptionsService$1.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TdChartOptionsService$1.ctorParameters = () => [];
/**
 * @param {?} parent
 * @return {?}
 */
function CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService$1();
}
const CHART_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdChartOptionsService$1,
    deps: [[new Optional(), new SkipSelf(), TdChartOptionsService$1]],
    useFactory: CHART_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} target
 * @param {...?} sources
 * @return {?}
 */
function assignDefined$1(target, ...sources) {
    for (const /** @type {?} */ key of Object.keys(target)) {
        delete target[key];
    }
    for (const /** @type {?} */ source of sources) {
        for (const /** @type {?} */ key of Object.keys(source)) {
            const /** @type {?} */ val = source[key];
            if (val !== undefined) {
                target[key] = val;
            }
            else {
                delete target[key];
            }
        }
    }
    return target;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdChartComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _optionsService
     */
    constructor(_changeDetectorRef, _elementRef, _optionsService) {
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
    /**
     * @return {?}
     */
    get instance() {
        return this._instance;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._instance = init(this._elementRef.nativeElement);
        fromEvent(this._instance, 'click').subscribe((params) => {
            if (params.componentType === 'markArea') {
                this.markAreaClick.next(params);
            }
        });
        if (this.chartGroup) {
            this._instance.group = this.chartGroup;
            connect(this.chartGroup);
            this._changeDetectorRef.markForCheck();
        }
        this._resizeSubscription = merge(fromEvent(window, 'resize').pipe(debounceTime(10)), this._widthSubject.asObservable().pipe(debounceTime(0), distinctUntilChanged()), this._heightSubject.asObservable().pipe(debounceTime(0), distinctUntilChanged())).subscribe(() => {
            if (!this._resizing) {
                this._resizing = true;
                setTimeout(() => {
                    this._instance.resize();
                    this._resizing = false;
                    this._changeDetectorRef.markForCheck();
                }, 100);
            }
        });
        this.render();
        this._optionsService.listen().subscribe((options) => {
            assignDefined$1(this._options, options);
            this.render();
        });
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next((/** @type {?} */ (this._elementRef.nativeElement)).getBoundingClientRect().width);
            this._heightSubject.next((/** @type {?} */ (this._elementRef.nativeElement)).getBoundingClientRect().height);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this._instance) {
            this._instance.clear();
            this.render();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._resizeSubscription) {
            this._resizeSubscription.unsubscribe();
        }
    }
    /**
     * @return {?}
     */
    render() {
        if (this._instance) {
            this._legend = {
                show: this.showLegend,
                type: 'scroll',
                selectedMode: 'multiple',
                orient: 'horizontal',
                // 'vertical'
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
                    // throws error if its empty
                    yAxis: [{}],
                    // throws error if its empty
                    series: [],
                }, this.config ? this.config : {}, this._options), true);
            this._changeDetectorRef.markForCheck();
        }
    }
}
TdChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart',
                template: ``,
                styles: [`:host{display:block}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [CHART_PROVIDER],
            },] },
];
/** @nocollapse */
TdChartComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: TdChartOptionsService$1, },
];
TdChartComponent.propDecorators = {
    "config": [{ type: Input, args: ['config',] },],
    "chartTitle": [{ type: Input, args: ['chartTitle',] },],
    "showLegend": [{ type: Input, args: ['showLegend',] },],
    "chartGroup": [{ type: Input, args: ['chartGroup',] },],
    "dataZoom": [{ type: Input, args: ['dataZoom',] },],
    "markAreaClick": [{ type: Output, args: ['markAreaClick',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdTooltipContext {
}
class TdChartTooltipFormatterDirective {
}
TdChartTooltipFormatterDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[tdTooltipFormatter]',
            },] },
];
/** @nocollapse */
TdChartTooltipFormatterDirective.ctorParameters = () => [];
class TdChartTooltipComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _optionsService
     */
    constructor(_changeDetectorRef, _elementRef, _optionsService) {
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
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @return {?}
     */
    _setOptions() {
        let /** @type {?} */ config = assignDefined$1(this._state, this.config ? this.config : {}, {
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
            formatter: (params, ticket, callback) => {
                this._context = {
                    $implicit: params,
                    ticket: ticket,
                };
                // timeout set since we need to set the HTML at the end of the angular lifecycle when
                // the tooltip delay is more than 0
                setTimeout(() => {
                    callback(ticket, (/** @type {?} */ (this._elementRef.nativeElement)).innerHTML);
                });
                this._changeDetectorRef.markForCheck();
                return (/** @type {?} */ (this._elementRef.nativeElement)).innerHTML;
            },
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth,
            padding: this.padding,
            textStyle: this.textStyle,
            extraCssText: this.extraCssText,
        });
        // set tooltip configuration in parent chart and render new configurations
        this._optionsService.setOption('tooltip', config);
    }
    /**
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('tooltip');
    }
}
TdChartTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-tooltip',
                template: `<ng-template #tooltipContent
            [ngTemplateOutlet]="formatterTemplate"
            [ngTemplateOutletContext]="_context">
</ng-template>`,
                styles: [``],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdChartTooltipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: TdChartOptionsService$1, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/** @enum {string} */
const TdNameLocation = {
    Start: 'start',
    Middle: 'middle',
    Center: 'center',
    End: 'end',
};
/** @enum {string} */
const TdAxisType = {
    Value: 'value',
    Category: 'category',
    Time: 'time',
    Log: 'log',
};
/** @enum {string} */
const TdYAxisPosition = {
    Left: 'left',
    Right: 'right',
};
/** @enum {string} */
const TdXAxisPosition = {
    Top: 'top',
    Bottom: 'bottom',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class TdChartAxisComponent {
    /**
     * @param {?} _axisOption
     * @param {?} _optionsService
     */
    constructor(_axisOption, _optionsService) {
        this._axisOption = _axisOption;
        this._optionsService = _optionsService;
        this._state = {};
        this.config = {};
        this.show = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @return {?}
     */
    _setOptions() {
        let /** @type {?} */ config = assignDefined$1(this._state, this.config, {
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
    }
    /**
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption(this._axisOption);
    }
}
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdChartXAxisComponent extends TdChartAxisComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('xAxis', _optionsService);
    }
}
TdChartXAxisComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-x-axis',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdChartXAxisComponent.ctorParameters = () => [
    { type: TdChartOptionsService$1, },
];
TdChartXAxisComponent.propDecorators = {
    "position": [{ type: Input, args: ['position',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdChartYAxisComponent extends TdChartAxisComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('yAxis', _optionsService);
    }
}
TdChartYAxisComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-y-axis',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdChartYAxisComponent.ctorParameters = () => [
    { type: TdChartOptionsService$1, },
];
TdChartYAxisComponent.propDecorators = {
    "position": [{ type: Input, args: ['position',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const BASE_MODULE_COMPONENTS = [
    TdChartComponent,
    TdChartTooltipComponent,
    TdChartTooltipFormatterDirective,
    TdChartXAxisComponent,
    TdChartYAxisComponent,
];
class CovalentBaseEchartsModule {
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
            },] },
];
/** @nocollapse */
CovalentBaseEchartsModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/** @enum {string} */
const TdAxisPointerAxis = {
    X: 'x',
    Y: 'y',
    Radius: 'radius',
    Angle: 'angle',
};
/** @enum {string} */
const TdToolTipTrigger = {
    Item: 'item',
    Axis: 'axis',
    None: 'none',
};
/** @enum {string} */
const TdTriggerOn = {
    Mousemove: 'mousemove',
    Click: 'click',
    None: 'none',
};
/** @enum {string} */
const TdToolPointerType = {
    Line: 'line',
    Shadow: 'shadow',
    Cross: 'cross',
};
/** @enum {string} */
const TdLabelPosition = {
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
/** @enum {string} */
const TdAlign = {
    Left: 'left',
    Center: 'center',
    Right: 'right',
};
/** @enum {string} */
const TdLineType = {
    Solid: 'solid',
    Dashed: 'dashed',
    Dotted: 'dotted',
};
/** @enum {string} */
const TdAreaOrigin = {
    Auto: 'auto',
    Start: 'start',
    End: 'end',
};
/** @enum {string} */
const TdLineLabelPosition = {
    Middle: 'middle',
    Start: 'start',
    End: 'end',
};
/** @enum {string} */
const TdTooltipPosition = {
    Inside: 'inside',
    Top: 'top',
    Left: 'left',
    Right: 'right',
    Bottom: 'bottom',
};
/** @enum {string} */
const TdFontWeight = {
    Normal: 'normal',
    Bold: 'bold',
    Bolder: 'bolder',
    Lighter: 'lighter',
};
/** @enum {string} */
const TdVerticalAlign = {
    Top: 'top',
    Middle: 'middle',
    Bottom: 'bottom',
    Center: 'center',
};
/** @enum {string} */
const TdPointerType = {
    Line: 'line',
    Shadow: 'shadow',
};
/** @enum {string} */
const TdFontFamily = {
    Sans: 'sans-serif',
    Serif: 'serif',
    Mono: 'monospace',
};
/** @enum {string} */
const TdFontStyle = {
    Normal: 'normal',
    Italic: 'italic',
    Oblique: 'oblique',
};
/** @enum {string} */
const TdStatus = {
    Show: 'show',
    Hide: 'hide',
};
/** @enum {string} */
const TdMarkPointSymbol = {
    Circle: 'circle',
    Rect: 'rect',
    RoundRect: 'roundRect',
    Triangle: 'triangle',
    Diamond: 'diamond',
    Pin: 'pin',
    Arrow: 'arrow',
    None: 'none',
};
/** @enum {string} */
const TdAnimationEasing = {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/** @enum {string} */
const TdCoordinateSystem = {
    Cartesian2d: 'cartesian2d',
    Polar: 'polar',
};
/** @enum {string} */
const TdSeriesLayoutBy = {
    Column: 'column',
    Row: 'row',
};
/** @enum {string} */
const TdProgressiveChunkMode = {
    sequential: 'sequential',
    Mod: 'mod',
};
/** @enum {string} */
const TdSeriesType$1 = {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdChartSeriesBarComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        this._optionsService = _optionsService;
        this._type = 'bar';
        this._state = {};
        this.config = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @return {?}
     */
    _setOptions() {
        let /** @type {?} */ config = assignDefined(this._state, this.config, {
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
    }
    /**
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('series');
    }
}
TdChartSeriesBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-bar]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdChartSeriesBarComponent.ctorParameters = () => [
    { type: TdChartOptionsService, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const BAR_MODULE_COMPONENTS = [
    TdChartSeriesBarComponent,
];
class CovalentBarEchartsModule {
}
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
/** @nocollapse */
CovalentBarEchartsModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdChartSeriesLineComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        this._optionsService = _optionsService;
        this._type = TdSeriesType.Line;
        this._state = {};
        this.config = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @return {?}
     */
    _setOptions() {
        let /** @type {?} */ config = assignDefined(this._state, this.config, {
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
    }
    /**
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('series');
    }
}
TdChartSeriesLineComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-line]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdChartSeriesLineComponent.ctorParameters = () => [
    { type: TdChartOptionsService, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const LINE_MODULE_COMPONENTS = [
    TdChartSeriesLineComponent,
];
class CovalentLineEchartsModule {
}
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
/** @nocollapse */
CovalentLineEchartsModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {string} */
const TdSampling = {
    Average: 'average',
    Max: 'max',
    Min: 'min',
    Sum: 'sum',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdChartSeriesScatterComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        this._optionsService = _optionsService;
        this._type = TdSeriesType.Scatter;
        this._state = {};
        this.config = {};
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @return {?}
     */
    _setOptions() {
        let /** @type {?} */ config = assignDefined(this._state, this.config, {
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
    }
    /**
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('series');
    }
}
TdChartSeriesScatterComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-scatter]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
TdChartSeriesScatterComponent.ctorParameters = () => [
    { type: TdChartOptionsService, },
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const SCATTER_MODULE_COMPONENTS = [
    TdChartSeriesScatterComponent,
];
class CovalentScatterEchartsModule {
}
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
/** @nocollapse */
CovalentScatterEchartsModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { TdChartComponent, TdChartAxisComponent, TdChartYAxisComponent, TdChartXAxisComponent, TdChartTooltipComponent, TdChartOptionsService$1 as TdChartOptionsService, CHART_PROVIDER, TdYAxisPosition, TdXAxisPosition, TdNameLocation, TdAxisType, TdAlign, TdFontStyle, TdFontWeight, TdVerticalAlign, TdFontFamily, TdPointerType, TdStatus, TdLineType, TdToolTipTrigger, TdLabelPosition, TdToolPointerType, TdTriggerOn, TdAreaOrigin, TdMarkPointSymbol, TdAnimationEasing, TdTooltipPosition, TdLineLabelPosition, TdAxisPointerAxis, TdSeriesType$1 as TdSeriesType, TdCoordinateSystem, TdSeriesLayoutBy, TdProgressiveChunkMode, BASE_MODULE_COMPONENTS, CovalentBaseEchartsModule, assignDefined$1 as assignDefined, BAR_MODULE_COMPONENTS, CovalentBarEchartsModule, LINE_MODULE_COMPONENTS, CovalentLineEchartsModule, TdSampling, SCATTER_MODULE_COMPONENTS, CovalentScatterEchartsModule, TdChartSeriesBarComponent as ɵc, CHART_PROVIDER_FACTORY as ɵb, TdChartTooltipFormatterDirective as ɵa, TdChartSeriesLineComponent as ɵd, TdChartSeriesScatterComponent as ɵe };
//# sourceMappingURL=covalent-echarts.js.map
