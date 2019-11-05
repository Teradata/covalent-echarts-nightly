import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/bar';
import { TdSeriesComponent, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdChartSeriesBarComponent extends TdSeriesComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('bar', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
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
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
        };
    }
}
TdChartSeriesBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-bar]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                inputs: [
                    'config',
                    'id',
                    'name',
                    'color',
                    'data',
                    'animation',
                    'animationThreshold',
                    'animationDuration',
                    'animationEasing',
                    'animationDelay',
                    'animationDurationUpdate',
                    'animationEasingUpdate',
                    'animationDelayUpdate',
                    'tooltip',
                ],
                providers: [
                    {
                        provide: TdSeriesComponent,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdChartSeriesBarComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesBarComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesBarComponent.propDecorators = {
    coordinateSystem: [{ type: Input }],
    xAxisIndex: [{ type: Input }],
    yAxisIndex: [{ type: Input }],
    legendHoverLink: [{ type: Input }],
    stack: [{ type: Input }],
    cursor: [{ type: Input }],
    label: [{ type: Input }],
    itemStyle: [{ type: Input }],
    emphasis: [{ type: Input }],
    barWidth: [{ type: Input }],
    barMaxWidth: [{ type: Input }],
    barMinHeight: [{ type: Input }],
    barGap: [{ type: Input }],
    barCategoryGap: [{ type: Input }],
    large: [{ type: Input }],
    largeThreshold: [{ type: Input }],
    progressive: [{ type: Input }],
    progressiveThreshold: [{ type: Input }],
    progressiveChunkMode: [{ type: Input }],
    dimensions: [{ type: Input }],
    encode: [{ type: Input }],
    seriesLayoutBy: [{ type: Input }],
    datasetIndex: [{ type: Input }],
    markPoint: [{ type: Input }],
    markLine: [{ type: Input }],
    markArea: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const BAR_MODULE_COMPONENTS = [TdChartSeriesBarComponent];
class CovalentBarEchartsModule {
}
CovalentBarEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [BAR_MODULE_COMPONENTS],
                exports: [BAR_MODULE_COMPONENTS],
            },] }
];

export { BAR_MODULE_COMPONENTS, CovalentBarEchartsModule, TdChartSeriesBarComponent };
//# sourceMappingURL=covalent-echarts-bar.js.map
