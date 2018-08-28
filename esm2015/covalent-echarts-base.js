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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdChartOptionsService {
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
TdChartOptionsService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TdChartOptionsService.ctorParameters = () => [];
/**
 * @param {?} parent
 * @return {?}
 */
function BASE_CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService();
}
const BASE_CHART_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdChartOptionsService,
    deps: [[new Optional(), new SkipSelf(), TdChartOptionsService]],
    useFactory: BASE_CHART_PROVIDER_FACTORY,
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
function assignDefined(target, ...sources) {
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
class TdBaseChartComponent {
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
        this._options = {};
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
    get options() {
        return this._options;
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
            assignDefined(this._options, options);
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
            if (this.data && this.data instanceof Array) {
                this._series = this.data.map((d) => {
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
                // 'vertical'
                right: '5',
                bottom: '5',
                data: this.data && this.data instanceof Array ? this.data.map((d) => d.name) : [],
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
                    // throws error if its empty
                    yAxis: [{}],
                    // throws error if its empty
                    series: this._series,
                }, this._options), true);
            this._changeDetectorRef.markForCheck();
        }
    }
}
TdBaseChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-base-chart',
                template: ``,
                styles: [`:host{display:block}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [BASE_CHART_PROVIDER],
            },] },
];
/** @nocollapse */
TdBaseChartComponent.ctorParameters = () => [
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: TdChartOptionsService, },
];
TdBaseChartComponent.propDecorators = {
    "chartTitle": [{ type: Input, args: ['chartTitle',] },],
    "showLegend": [{ type: Input, args: ['showLegend',] },],
    "data": [{ type: Input, args: ['data',] },],
    "max": [{ type: Input, args: ['max',] },],
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
        let /** @type {?} */ config = assignDefined(this._state, this.config ? this.config : {}, {
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
    { type: TdChartOptionsService, },
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
        let /** @type {?} */ config = assignDefined(this._state, this.config, {
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
    { type: TdChartOptionsService, },
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
    { type: TdChartOptionsService, },
];
TdChartYAxisComponent.propDecorators = {
    "position": [{ type: Input, args: ['position',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const BASE_MODULE_COMPONENTS = [
    TdBaseChartComponent,
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

export { TdBaseChartComponent, TdChartOptionsService, BASE_CHART_PROVIDER, BASE_MODULE_COMPONENTS, CovalentBaseEchartsModule, TdChartAxisComponent as ɵe, TdChartXAxisComponent as ɵd, TdChartYAxisComponent as ɵf, BASE_CHART_PROVIDER_FACTORY as ɵa, TdChartTooltipComponent as ɵc, TdChartTooltipFormatterDirective as ɵb };
//# sourceMappingURL=covalent-echarts-base.js.map
