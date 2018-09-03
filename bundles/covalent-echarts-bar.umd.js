(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('echarts/lib/chart/bar'), require('@covalent/echarts/base'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@covalent/echarts/bar', ['exports', '@angular/core', 'echarts/lib/chart/bar', '@covalent/echarts/base', '@angular/common'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.bar = {}),global.ng.core,null,global.covalent.echarts.base,global.ng.common));
}(this, (function (exports,core,bar,base,common) { 'use strict';

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

exports.BAR_MODULE_COMPONENTS = BAR_MODULE_COMPONENTS;
exports.CovalentBarEchartsModule = CovalentBarEchartsModule;
exports.ɵa = TdChartSeriesBarComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-echarts-bar.umd.js.map
