import { Component, Input, ChangeDetectionStrategy, NgModule } from '@angular/core';
import 'echarts/lib/chart/scatter';
import { TdChartOptionsService, assignDefined, TdSeriesType } from '@covalent/echarts/base';
import { CommonModule } from '@angular/common';

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
 * Generated bundle index. Do not edit.
 */

export { SCATTER_MODULE_COMPONENTS, CovalentScatterEchartsModule, TdChartSeriesScatterComponent as ɵa };
//# sourceMappingURL=covalent-echarts-scatter.js.map
