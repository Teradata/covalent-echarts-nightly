import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/bar';
import { Component, Input, ChangeDetectionStrategy, forwardRef, NgModule } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesBarComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesBarComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesBarComponent.propDecorators = {
    coordinateSystem: [{ type: Input, args: ['coordinateSystem',] }],
    xAxisIndex: [{ type: Input, args: ['xAxisIndex',] }],
    yAxisIndex: [{ type: Input, args: ['yAxisIndex',] }],
    legendHoverLink: [{ type: Input, args: ['legendHoverLink',] }],
    stack: [{ type: Input, args: ['stack',] }],
    cursor: [{ type: Input, args: ['cursor',] }],
    label: [{ type: Input, args: ['label',] }],
    itemStyle: [{ type: Input, args: ['itemStyle',] }],
    emphasis: [{ type: Input, args: ['emphasis',] }],
    barWidth: [{ type: Input, args: ['barWidth',] }],
    barMaxWidth: [{ type: Input, args: ['barMaxWidth',] }],
    barMinHeight: [{ type: Input, args: ['barMinHeight',] }],
    barGap: [{ type: Input, args: ['barGap',] }],
    barCategoryGap: [{ type: Input, args: ['barCategoryGap',] }],
    large: [{ type: Input, args: ['large',] }],
    largeThreshold: [{ type: Input, args: ['largeThreshold',] }],
    progressive: [{ type: Input, args: ['progressive',] }],
    progressiveThreshold: [{ type: Input, args: ['progressiveThreshold',] }],
    progressiveChunkMode: [{ type: Input, args: ['progressiveChunkMode',] }],
    dimensions: [{ type: Input, args: ['dimensions',] }],
    encode: [{ type: Input, args: ['encode',] }],
    seriesLayoutBy: [{ type: Input, args: ['seriesLayoutBy',] }],
    datasetIndex: [{ type: Input, args: ['datasetIndex',] }],
    markPoint: [{ type: Input, args: ['markPoint',] }],
    markLine: [{ type: Input, args: ['markLine',] }],
    markArea: [{ type: Input, args: ['markArea',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
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
            },] }
];

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

export { BAR_MODULE_COMPONENTS, CovalentBarEchartsModule, TdChartSeriesBarComponent };

//# sourceMappingURL=covalent-echarts-bar.js.map