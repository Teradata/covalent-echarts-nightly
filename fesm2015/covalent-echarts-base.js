import { Injectable, Optional, SkipSelf, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, NgModule } from '@angular/core';
import { BehaviorSubject, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { init, connect } from 'echarts/lib/echarts';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        /** @type {?} */
        let options = {};
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
        /** @type {?} */
        let prevValue = this.getOption(option);
        if (prevValue) {
            /** @type {?} */
            let index = prevValue.indexOf(value);
            index > -1 ? prevValue[index] = value : prevValue.push(value);
        }
        else {
            prevValue = [value];
        }
        this.setOption(option, prevValue);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    removeArrayOption(option, value) {
        /** @type {?} */
        let prevValue = this.getOption(option);
        if (prevValue) {
            /** @type {?} */
            let index = prevValue.indexOf(value);
            if (index > -1) {
                prevValue[index] = undefined;
            }
            else {
                prevValue = [];
            }
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
    { type: Injectable }
];
/**
 * @param {?} parent
 * @return {?}
 */
function CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService();
}
/** @type {?} */
const CHART_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdChartOptionsService,
    deps: [[new Optional(), new SkipSelf(), TdChartOptionsService]],
    useFactory: CHART_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {...?} sources
 * @return {?}
 */
function assignDefined(target, ...sources) {
    for (const key of Object.keys(target)) {
        delete target[key];
    }
    for (const source of sources) {
        for (const key of Object.keys(source)) {
            /** @type {?} */
            const val = source[key];
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            assignDefined(this._options, options);
            this.render();
        });
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().width);
            this._heightSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height);
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
            },
                this._instance.setOption(assignDefined(this._state, {
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
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [CHART_PROVIDER],
                styles: [":host{display:block}"]
            }] }
];
/** @nocollapse */
TdChartComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdChartOptionsService }
];
TdChartComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    chartTitle: [{ type: Input, args: ['chartTitle',] }],
    showLegend: [{ type: Input, args: ['showLegend',] }],
    chartGroup: [{ type: Input, args: ['chartGroup',] }],
    dataZoom: [{ type: Input, args: ['dataZoom',] }],
    markAreaClick: [{ type: Output, args: ['markAreaClick',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
        /** @type {?} */
        let config = assignDefined(this._state, this.config ? this.config : {}, {
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
    config: [{ type: Input, args: ['config',] }],
    id: [{ type: Input, args: ['id',] }],
    show: [{ type: Input, args: ['show',] }],
    gridIndex: [{ type: Input, args: ['gridIndex',] }],
    offset: [{ type: Input, args: ['offset',] }],
    type: [{ type: Input, args: ['type',] }],
    name: [{ type: Input, args: ['name',] }],
    nameLocation: [{ type: Input, args: ['nameLocation',] }],
    nameTextStyle: [{ type: Input, args: ['nameTextStyle',] }],
    nameGap: [{ type: Input, args: ['nameGap',] }],
    nameRotate: [{ type: Input, args: ['nameRotate',] }],
    inverse: [{ type: Input, args: ['inverse',] }],
    boundaryGap: [{ type: Input, args: ['boundaryGap',] }],
    min: [{ type: Input, args: ['min',] }],
    max: [{ type: Input, args: ['max',] }],
    scale: [{ type: Input, args: ['scale',] }],
    minInterval: [{ type: Input, args: ['minInterval',] }],
    interval: [{ type: Input, args: ['interval',] }],
    logBase: [{ type: Input, args: ['logBase',] }],
    silent: [{ type: Input, args: ['silent',] }],
    triggerEvent: [{ type: Input, args: ['triggerEvent',] }],
    axisLine: [{ type: Input, args: ['axisLine',] }],
    axisTick: [{ type: Input, args: ['axisTick',] }],
    axisLabel: [{ type: Input, args: ['axisLabel',] }],
    splitLine: [{ type: Input, args: ['splitLine',] }],
    splitArea: [{ type: Input, args: ['splitArea',] }],
    data: [{ type: Input, args: ['data',] }],
    axisPointer: [{ type: Input, args: ['axisPointer',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartXAxisComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartXAxisComponent.propDecorators = {
    position: [{ type: Input, args: ['position',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartYAxisComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartYAxisComponent.propDecorators = {
    position: [{ type: Input, args: ['position',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const BASE_MODULE_COMPONENTS = [
    TdChartComponent,
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
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class TdSeriesComponent {
    /**
     * @param {?} type
     * @param {?} optionsService
     */
    constructor(type, optionsService) {
        this.optionsService = optionsService;
        this._state = {};
        this._options = {};
        this.config = {};
        this._type = type;
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
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
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    setStateOption(option, value) {
        this._options[option] = value;
        this._setOptions();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    removeStateOption(option) {
        this._options[option] = undefined;
        this._setOptions();
    }
    /**
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        let config = assignDefined(this._state, this.config ? this.config : {}, this.getConfig(), this._options);
        this.optionsService.setArrayOption('series', config);
    }
    /**
     * @return {?}
     */
    _removeOption() {
        /** @type {?} */
        let config = this.getConfig();
        this.optionsService.removeArrayOption('series', config);
    }
}
TdSeriesComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    id: [{ type: Input, args: ['id',] }],
    name: [{ type: Input, args: ['name',] }],
    color: [{ type: Input, args: ['color',] }],
    animation: [{ type: Input, args: ['animation',] }],
    animationThreshold: [{ type: Input, args: ['animationThreshold',] }],
    animationDuration: [{ type: Input, args: ['animationDuration',] }],
    animationEasing: [{ type: Input, args: ['animationEasing',] }],
    animationDelay: [{ type: Input, args: ['animationDelay',] }],
    animationDurationUpdate: [{ type: Input, args: ['animationDurationUpdate',] }],
    animationEasingUpdate: [{ type: Input, args: ['animationEasingUpdate',] }],
    animationDelayUpdate: [{ type: Input, args: ['animationDelayUpdate',] }],
    tooltip: [{ type: Input, args: ['tooltip',] }]
};

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

export { TdChartComponent, TdChartAxisComponent, TdChartYAxisComponent, TdChartXAxisComponent, TdChartOptionsService, CHART_PROVIDER, BASE_MODULE_COMPONENTS, CovalentBaseEchartsModule, assignDefined, TdSeriesComponent, CHART_PROVIDER_FACTORY as ɵa };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy1iYXNlLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL2NoYXJ0LW9wdGlvbnMuc2VydmljZS50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS91dGlscy9hc3NpZ24tZGVmaW5lZC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9jaGFydC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvYXhpcy9heGlzLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvYmFzZS9heGlzL3gtYXhpcy5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvYXhpcy95LWF4aXMuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL2Jhc2UubW9kdWxlLnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlL3Nlcmllcy9zZXJpZXMuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIFByb3ZpZGVyLFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRPcHRpb25zU2VydmljZSB7XG5cbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XG4gIHByaXZhdGUgX29wdGlvbnNTdWJqZWN0OiBTdWJqZWN0PGFueT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGFueT4odGhpcy5fb3B0aW9ucyk7XG5cbiAgc2V0T3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IG9wdGlvbnM6IGFueSA9IHt9O1xuICAgIG9wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuICAgIE9iamVjdC5hc3NpZ24odGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgdGhpcy5fb3B0aW9uc1N1YmplY3QubmV4dCh0aGlzLl9vcHRpb25zKTtcbiAgfVxuXG4gIHNldEFycmF5T3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBsZXQgcHJldlZhbHVlOiBhbnlbXSA9IHRoaXMuZ2V0T3B0aW9uKG9wdGlvbik7XG4gICAgaWYgKHByZXZWYWx1ZSkge1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBwcmV2VmFsdWUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICBpbmRleCA+IC0xID8gcHJldlZhbHVlW2luZGV4XSA9IHZhbHVlIDogcHJldlZhbHVlLnB1c2godmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmV2VmFsdWUgPSBbdmFsdWVdO1xuICAgIH1cbiAgICB0aGlzLnNldE9wdGlvbihvcHRpb24sIHByZXZWYWx1ZSk7XG4gIH1cblxuICByZW1vdmVBcnJheU9wdGlvbihvcHRpb246IHN0cmluZywgdmFsdWU6IGFueSk6IGFueSB7XG4gICAgbGV0IHByZXZWYWx1ZTogYW55W10gPSB0aGlzLmdldE9wdGlvbihvcHRpb24pO1xuICAgIGlmIChwcmV2VmFsdWUpIHtcbiAgICAgIGxldCBpbmRleDogbnVtYmVyID0gcHJldlZhbHVlLmluZGV4T2YodmFsdWUpO1xuICAgICAgaWYgKGluZGV4ID4gLTEgKSB7XG4gICAgICAgIHByZXZWYWx1ZVtpbmRleF0gPSB1bmRlZmluZWQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcmV2VmFsdWUgPSBbXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zZXRPcHRpb24ob3B0aW9uLCBwcmV2VmFsdWUpO1xuICB9XG5cbiAgZ2V0T3B0aW9uKG9wdGlvbjogc3RyaW5nKTogYW55W10ge1xuICAgIHJldHVybiB0aGlzLl9vcHRpb25zW29wdGlvbl07XG4gIH1cblxuICBjbGVhck9wdGlvbihvcHRpb246IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuc2V0T3B0aW9uKG9wdGlvbiwgdW5kZWZpbmVkKTtcblxuICB9XG5cbiAgbGlzdGVuKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnNTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIENIQVJUX1BST1ZJREVSX0ZBQ1RPUlkoXG4gIHBhcmVudDogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlIHtcbiAgcmV0dXJuIHBhcmVudCB8fCBuZXcgVGRDaGFydE9wdGlvbnNTZXJ2aWNlKCk7XG59XG5cbmV4cG9ydCBjb25zdCBDSEFSVF9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZXJ2aWNlIGF2YWlsYWJsZSwgdXNlIHRoYXQuIE90aGVyd2lzZSwgcHJvdmlkZSBhIG5ldyBvbmUuXG4gIHByb3ZpZGU6IFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgZGVwczogW1tuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIFRkQ2hhcnRPcHRpb25zU2VydmljZV1dLFxuICB1c2VGYWN0b3J5OiBDSEFSVF9QUk9WSURFUl9GQUNUT1JZLFxufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBhc3NpZ25EZWZpbmVkKHRhcmdldDogYW55LCAuLi5zb3VyY2VzOiBhbnlbXSk6IGFueSB7XG4gIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRhcmdldCkpIHtcbiAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gIH1cbiAgZm9yIChjb25zdCBzb3VyY2Ugb2Ygc291cmNlcykge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHNvdXJjZSkpIHtcbiAgICAgIGNvbnN0IHZhbDogYW55ID0gc291cmNlW2tleV07XG4gICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkZWxldGUgdGFyZ2V0W2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiB0YXJnZXQ7XG59XG4iLCJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIE5nWm9uZSxcbiAgT25EZXN0cm95LFxuICBEb0NoZWNrLFxuICBDb250ZW50Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGVjaGFydHMgZnJvbSAnZWNoYXJ0cy9saWIvZWNoYXJ0cyc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSwgQ0hBUlRfUFJPVklERVIgfSBmcm9tICcuL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0JyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFydC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbQ0hBUlRfUFJPVklERVJdLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBEb0NoZWNrLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3Jlc2l6ZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIF93aWR0aFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfaGVpZ2h0U3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9yZXNpemluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgX2xlZ2VuZDogYW55O1xuXG4gIHByaXZhdGUgX2luc3RhbmNlOiBhbnk7XG5cbiAgZ2V0IGluc3RhbmNlKCk6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICB9XG5cbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuICBwcml2YXRlIF9vcHRpb25zOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdjaGFydFRpdGxlJykgY2hhcnRUaXRsZTogc3RyaW5nO1xuICBASW5wdXQoJ3Nob3dMZWdlbmQnKSBzaG93TGVnZW5kOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCdjaGFydEdyb3VwJykgY2hhcnRHcm91cDogc3RyaW5nO1xuICBASW5wdXQoJ2RhdGFab29tJykgZGF0YVpvb206IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBPdXRwdXQoJ21hcmtBcmVhQ2xpY2snKSBtYXJrQXJlYUNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luc3RhbmNlID0gZWNoYXJ0cy5pbml0KHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnY2xpY2snKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICBpZiAocGFyYW1zLmNvbXBvbmVudFR5cGUgPT09ICdtYXJrQXJlYScpIHtcbiAgICAgICAgdGhpcy5tYXJrQXJlYUNsaWNrLm5leHQocGFyYW1zKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5jaGFydEdyb3VwKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5ncm91cCA9IHRoaXMuY2hhcnRHcm91cDtcbiAgICAgIGVjaGFydHMuY29ubmVjdCh0aGlzLmNoYXJ0R3JvdXApO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbiA9IG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMCksXG4gICAgICApLFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICksXG4gICAgICB0aGlzLl9oZWlnaHRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLl9yZXNpemluZykge1xuICAgICAgICB0aGlzLl9yZXNpemluZyA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX2luc3RhbmNlLnJlc2l6ZSgpO1xuICAgICAgICAgIHRoaXMuX3Jlc2l6aW5nID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH0sIDEwMCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5saXN0ZW4oKS5zdWJzY3JpYmUoKG9wdGlvbnM6IGFueSkgPT4ge1xuICAgICAgYXNzaWduRGVmaW5lZCh0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QubmV4dCgoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpO1xuICAgICAgdGhpcy5faGVpZ2h0U3ViamVjdC5uZXh0KCg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3Jlc2l6ZVN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5fcmVzaXplU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5fbGVnZW5kID0ge1xuICAgICAgICBzaG93OiB0aGlzLnNob3dMZWdlbmQsXG4gICAgICAgIHR5cGU6ICdzY3JvbGwnLFxuICAgICAgICBzZWxlY3RlZE1vZGU6ICdtdWx0aXBsZScsXG4gICAgICAgIG9yaWVudDogJ2hvcml6b250YWwnLCAvLyAndmVydGljYWwnXG4gICAgICAgIHJpZ2h0OiAnNScsXG4gICAgICAgIGJvdHRvbTogJzUnLFxuICAgICAgfSxcbiAgICAgIHRoaXMuX2luc3RhbmNlLnNldE9wdGlvbihhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB7XG4gICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgIGxlZnQ6ICcyMCcsXG4gICAgICAgICAgcmlnaHQ6ICcyMCcsXG4gICAgICAgICAgYm90dG9tOiB0aGlzLnNob3dMZWdlbmQgPyAnMzAnIDogJzEwJyxcbiAgICAgICAgICB0b3A6ICcxMCcsXG4gICAgICAgICAgY29udGFpbkxhYmVsOiB0cnVlLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0ZDRkNGQycsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFab29tOiB0aGlzLmRhdGFab29tID8gW3tcbiAgICAgICAgICB0eXBlOiAnaW5zaWRlJyxcbiAgICAgICAgICB0aHJvdHRsZTogNTAsXG4gICAgICAgICAgem9vbU9uTW91c2VXaGVlbDogJ3NoaWZ0JyxcbiAgICAgICAgfV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGxlZ2VuZDogdGhpcy5fbGVnZW5kLFxuICAgICAgICB4QXhpcyA6IFt7fV0sIC8vIHRocm93cyBlcnJvciBpZiBpdHMgZW1wdHlcbiAgICAgICAgeUF4aXMgOiBbe31dLCAvLyB0aHJvd3MgZXJyb3IgaWYgaXRzIGVtcHR5XG4gICAgICAgIHNlcmllczogW10sXG4gICAgICB9LCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHRoaXMuX29wdGlvbnMpLCB0cnVlKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG59XG4iLCJpbXBvcnQge1xuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgXG4gIElUZEF4aXNMaW5lLFxuICBJVGRBeGlzTGFiZWwsXG4gIElUZEF4aXNUaWNrLFxuICBJVGRTcGxpdExpbmUsXG4gIElUZFNwbGl0QXJlYSxcbiAgSVRkQXhpc1BvaW50ZXIsXG4gIFRkQXhpc1R5cGUsXG4gIFRkTmFtZUxvY2F0aW9uLFxuICBUZFhBeGlzUG9zaXRpb24sXG4gIFRkWUF4aXNQb3NpdGlvbiB9IGZyb20gJy4vYXhpcy5pbnRlcmZhY2UnO1xuICBcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZENoYXJ0QXhpc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ2dyaWRJbmRleCcpIGdyaWRJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ29mZnNldCcpIG9mZnNldDogbnVtYmVyO1xuICBhYnN0cmFjdCBwb3NpdGlvbjogVGRYQXhpc1Bvc2l0aW9uIHwgVGRZQXhpc1Bvc2l0aW9uO1xuICBASW5wdXQoJ3R5cGUnKSB0eXBlOiBUZEF4aXNUeXBlO1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZUxvY2F0aW9uJykgbmFtZUxvY2F0aW9uOiBUZE5hbWVMb2NhdGlvbjtcbiAgQElucHV0KCduYW1lVGV4dFN0eWxlJykgbmFtZVRleHRTdHlsZTogYW55O1xuICBASW5wdXQoJ25hbWVHYXAnKSBuYW1lR2FwOiBudW1iZXI7XG4gIEBJbnB1dCgnbmFtZVJvdGF0ZScpIG5hbWVSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCdpbnZlcnNlJykgaW52ZXJzZTogYm9vbGVhbjtcbiAgQElucHV0KCdib3VuZGFyeUdhcCcpIGJvdW5kYXJ5R2FwOiBib29sZWFuIHwgc3RyaW5nW107XG4gIEBJbnB1dCgnbWluJykgbWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnbWF4JykgbWF4OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnc2NhbGUnKSBzY2FsZTogYm9vbGVhbjtcbiAgQElucHV0KCdtaW5JbnRlcnZhbCcpIG1pbkludGVydmFsOiBudW1iZXI7XG4gIEBJbnB1dCgnaW50ZXJ2YWwnKSBpbnRlcnZhbDogbnVtYmVyO1xuICBASW5wdXQoJ2xvZ0Jhc2UnKSBsb2dCYXNlOiBudW1iZXI7XG4gIEBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuICBASW5wdXQoJ3RyaWdnZXJFdmVudCcpIHRyaWdnZXJFdmVudDogYm9vbGVhbjtcbiAgQElucHV0KCdheGlzTGluZScpIGF4aXNMaW5lOiBJVGRBeGlzTGluZTtcbiAgQElucHV0KCdheGlzVGljaycpIGF4aXNUaWNrOiBJVGRBeGlzVGljaztcbiAgQElucHV0KCdheGlzTGFiZWwnKSBheGlzTGFiZWw6IElUZEF4aXNMYWJlbDtcbiAgQElucHV0KCdzcGxpdExpbmUnKSBzcGxpdExpbmU6IElUZFNwbGl0TGluZTtcbiAgQElucHV0KCdzcGxpdEFyZWEnKSBzcGxpdEFyZWE6IElUZFNwbGl0QXJlYTtcbiAgQElucHV0KCdkYXRhJykgZGF0YTogYW55O1xuICBASW5wdXQoJ2F4aXNQb2ludGVyJykgYXhpc1BvaW50ZXI6IElUZEF4aXNQb2ludGVyO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXhpc09wdGlvbjogc3RyaW5nLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LCB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHNob3c6IHRoaXMuc2hvdyxcbiAgICAgIGdyaWRJbmRleDogdGhpcy5ncmlkSW5kZXgsXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBuYW1lTG9jYXRpb246IHRoaXMubmFtZUxvY2F0aW9uLFxuICAgICAgbmFtZVRleHRTdHlsZTogdGhpcy5uYW1lVGV4dFN0eWxlLFxuICAgICAgbmFtZUdhcDogdGhpcy5uYW1lR2FwLFxuICAgICAgbmFtZVJvdGF0ZTogdGhpcy5uYW1lUm90YXRlLFxuICAgICAgaW52ZXJzZTogdGhpcy5pbnZlcnNlLFxuICAgICAgYm91bmRhcnlHYXA6IHRoaXMuYm91bmRhcnlHYXAsXG4gICAgICBtaW46IHRoaXMubWluLFxuICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgbWluSW50ZXJ2YWw6IHRoaXMubWluSW50ZXJ2YWwsXG4gICAgICBpbnRlcnZhbDogdGhpcy5pbnRlcnZhbCxcbiAgICAgIGxvZ0Jhc2U6IHRoaXMubG9nQmFzZSxcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgICB0cmlnZ2VyRXZlbnQ6IHRoaXMudHJpZ2dlckV2ZW50LFxuICAgICAgYXhpc0xpbmU6IHRoaXMuYXhpc0xpbmUsXG4gICAgICBheGlzVGljazogdGhpcy5heGlzVGljayxcbiAgICAgIGF4aXNMYWJlbDogdGhpcy5heGlzTGFiZWwsXG4gICAgICBzcGxpdExpbmU6IHRoaXMuc3BsaXRMaW5lLFxuICAgICAgc3BsaXRBcmVhOiB0aGlzLnNwbGl0QXJlYSxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIGF4aXNQb2ludGVyOiB0aGlzLmF4aXNQb2ludGVyLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICB9KTtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5zZXRBcnJheU9wdGlvbih0aGlzLl9heGlzT3B0aW9uLCBjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmNsZWFyT3B0aW9uKHRoaXMuX2F4aXNPcHRpb24pO1xuICB9XG5cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFRkWEF4aXNQb3NpdGlvbiAgfSBmcm9tICcuL2F4aXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRkQ2hhcnRBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXgtYXhpcycsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRYQXhpc0NvbXBvbmVudCBleHRlbmRzIFRkQ2hhcnRBeGlzQ29tcG9uZW50IHtcblxuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IFRkWEF4aXNQb3NpdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd4QXhpcycsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxufVxuIiwiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSW5wdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGRZQXhpc1Bvc2l0aW9uICB9IGZyb20gJy4vYXhpcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGRDaGFydEF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQteS1heGlzJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFlBeGlzQ29tcG9uZW50IGV4dGVuZHMgVGRDaGFydEF4aXNDb21wb25lbnQge1xuXG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogVGRZQXhpc1Bvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3lBeGlzJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVGRDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ2hhcnRYQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy94LWF4aXMuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ2hhcnRZQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy95LWF4aXMuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEJBU0VfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0Q29tcG9uZW50LFxuICBUZENoYXJ0WEF4aXNDb21wb25lbnQsXG4gIFRkQ2hhcnRZQXhpc0NvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEJBU0VfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBCQVNFX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEJhc2VFY2hhcnRzTW9kdWxlIHtcblxufVxuIiwiaW1wb3J0IHsgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCB9IGZyb20gJy4uL3V0aWxzL2Fzc2lnbi1kZWZpbmVkJztcbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBJVGRTZXJpZXNUb29sdGlwIH0gZnJvbSAnLi4vc2VyaWVzL3Nlcmllcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVRkQW5pbWF0aW9uIH0gZnJvbSAnLi4vYmFzZS50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2VyaWVzPFQ+IGV4dGVuZHMgSVRkQW5pbWF0aW9uIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICB0eXBlPzogVDtcblxuICB0b29sdGlwPzogSVRkU2VyaWVzVG9vbHRpcDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRkU2VyaWVzQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgSVRkU2VyaWVzPFQ+LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95ICB7XG5cbiAgcHJpdmF0ZSBfdHlwZTogVDtcblxuICBnZXQgdHlwZSgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIF9zdGF0ZTogYW55ID0ge307XG4gIF9vcHRpb25zOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KCdhbmltYXRpb24nKSBhbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgnYW5pbWF0aW9uVGhyZXNob2xkJykgYW5pbWF0aW9uVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgnYW5pbWF0aW9uRHVyYXRpb24nKSBhbmltYXRpb25EdXJhdGlvbjogbnVtYmVyIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnYW5pbWF0aW9uRWFzaW5nJykgYW5pbWF0aW9uRWFzaW5nOiBzdHJpbmc7XG4gIEBJbnB1dCgnYW5pbWF0aW9uRGVsYXknKSBhbmltYXRpb25EZWxheTogbnVtYmVyIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUnKSBhbmltYXRpb25EdXJhdGlvblVwZGF0ZTogbnVtYmVyIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnYW5pbWF0aW9uRWFzaW5nVXBkYXRlJykgYW5pbWF0aW9uRWFzaW5nVXBkYXRlOiBzdHJpbmc7XG4gIEBJbnB1dCgnYW5pbWF0aW9uRGVsYXlVcGRhdGUnKSBhbmltYXRpb25EZWxheVVwZGF0ZTogbnVtYmVyIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgndG9vbHRpcCcpIHRvb2x0aXA6IElUZFNlcmllc1Rvb2x0aXA7XG5cbiAgY29uc3RydWN0b3IodHlwZTogVCwgcHJvdGVjdGVkIG9wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG4gIFxuICBzZXRTdGF0ZU9wdGlvbihvcHRpb246IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIHJlbW92ZVN0YXRlT3B0aW9uKG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1tvcHRpb25dID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIGFic3RyYWN0IGdldENvbmZpZygpOiBhbnk7XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHRoaXMuZ2V0Q29uZmlnKCksIHRoaXMuX29wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9uc1NlcnZpY2Uuc2V0QXJyYXlPcHRpb24oJ3NlcmllcycsIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICB0aGlzLm9wdGlvbnNTZXJ2aWNlLnJlbW92ZUFycmF5T3B0aW9uKCdzZXJpZXMnLCBjb25maWcpO1xuICB9XG5cbn1cbiJdLCJuYW1lcyI6WyJlY2hhcnRzLmluaXQiLCJlY2hhcnRzLmNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxNQVVhLHFCQUFxQjtJQURsQztRQUdVLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbkIsb0JBQWUsR0FBaUIsSUFBSSxlQUFlLENBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBOENqRjs7Ozs7O0lBNUNDLFNBQVMsQ0FBQyxNQUFjLEVBQUUsS0FBVTs7WUFDOUIsT0FBTyxHQUFRLEVBQUU7UUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQzFDOzs7Ozs7SUFFRCxjQUFj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