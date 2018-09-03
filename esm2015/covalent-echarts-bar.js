import { Component, Input, ChangeDetectionStrategy, NgModule } from '@angular/core';
import 'echarts/lib/chart/bar';
import { TdChartOptionsService, assignDefined } from '@covalent/echarts/base';
import { CommonModule } from '@angular/common';

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
/**
 * Generated bundle index. Do not edit.
 */

export { BAR_MODULE_COMPONENTS, CovalentBarEchartsModule, TdChartSeriesBarComponent as ɵa };
//# sourceMappingURL=covalent-echarts-bar.js.map
