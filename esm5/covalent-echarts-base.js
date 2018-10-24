import { __values, __extends } from 'tslib';
import { Injectable, Optional, SkipSelf, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, NgModule } from '@angular/core';
import { BehaviorSubject, Subject, fromEvent, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { init, connect } from 'echarts/lib/echarts';
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
    { type: Injectable },
];
TdChartOptionsService.ctorParameters = function () { return []; };
function CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService();
}
var CHART_PROVIDER = {
    provide: TdChartOptionsService,
    deps: [[new Optional(), new SkipSelf(), TdChartOptionsService]],
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
    { type: Component, args: [{
                selector: 'td-chart',
                template: '',
                styles: [":host{display:block}"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [CHART_PROVIDER],
            },] },
];
TdChartComponent.ctorParameters = function () { return [
    { type: ChangeDetectorRef, },
    { type: ElementRef, },
    { type: TdChartOptionsService, },
]; };
TdChartComponent.propDecorators = {
    "config": [{ type: Input, args: ['config',] },],
    "chartTitle": [{ type: Input, args: ['chartTitle',] },],
    "showLegend": [{ type: Input, args: ['showLegend',] },],
    "chartGroup": [{ type: Input, args: ['chartGroup',] },],
    "dataZoom": [{ type: Input, args: ['dataZoom',] },],
    "markAreaClick": [{ type: Output, args: ['markAreaClick',] },],
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
    "config": [{ type: Input, args: ['config',] },],
    "id": [{ type: Input, args: ['id',] },],
    "name": [{ type: Input, args: ['name',] },],
    "color": [{ type: Input, args: ['color',] },],
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

export { TdChartComponent, TdChartAxisComponent, TdChartYAxisComponent, TdChartXAxisComponent, TdChartOptionsService, CHART_PROVIDER, BASE_MODULE_COMPONENTS, CovalentBaseEchartsModule, assignDefined, TdSeriesComponent, CHART_PROVIDER_FACTORY as ɵa };
//# sourceMappingURL=covalent-echarts-base.js.map
