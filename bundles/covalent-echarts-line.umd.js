(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('echarts/lib/chart/line'), require('@covalent/echarts/base'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@covalent/echarts/line', ['exports', '@angular/core', 'echarts/lib/chart/line', '@covalent/echarts/base', '@angular/common'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.line = {}),global.ng.core,null,global.covalent.echarts.base,global.ng.common));
}(this, (function (exports,core,line,base,common) { 'use strict';

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
var TdSampling = {
    Average: 'average',
    Max: 'max',
    Min: 'min',
    Sum: 'sum',
};

exports.LINE_MODULE_COMPONENTS = LINE_MODULE_COMPONENTS;
exports.CovalentLineEchartsModule = CovalentLineEchartsModule;
exports.TdSampling = TdSampling;
exports.ɵa = TdChartSeriesLineComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-echarts-line.umd.js.map
