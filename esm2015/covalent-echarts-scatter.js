import { Component, Input, ChangeDetectionStrategy, forwardRef, NgModule } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent } from '@covalent/echarts/base';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/scatter';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class TdChartSeriesScatterComponent extends TdSeriesComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('scatter', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            id: this.id,
            type: this.type,
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
        };
    }
}
TdChartSeriesScatterComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-scatter]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesScatterComponent),
                    }],
            },] },
];
/** @nocollapse */
TdChartSeriesScatterComponent.ctorParameters = () => [
    { type: TdChartOptionsService, },
];
TdChartSeriesScatterComponent.propDecorators = {
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

export { SCATTER_MODULE_COMPONENTS, CovalentScatterEchartsModule, TdChartSeriesScatterComponent };
//# sourceMappingURL=covalent-echarts-scatter.js.map
