(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('echarts/lib/chart/scatter'), require('@covalent/echarts/base'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@covalent/echarts/scatter', ['exports', '@angular/core', 'echarts/lib/chart/scatter', '@covalent/echarts/base', '@angular/common'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.scatter = {}),global.ng.core,null,global.covalent.echarts.base,global.ng.common));
}(this, (function (exports,core,scatter,base,common) { 'use strict';

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

exports.SCATTER_MODULE_COMPONENTS = SCATTER_MODULE_COMPONENTS;
exports.CovalentScatterEchartsModule = CovalentScatterEchartsModule;
exports.ɵa = TdChartSeriesScatterComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-echarts-scatter.umd.js.map
