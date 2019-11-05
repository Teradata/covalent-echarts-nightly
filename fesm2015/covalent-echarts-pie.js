import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/pie';
import { TdSeriesComponent, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdChartSeriesPieComponent extends TdSeriesComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('pie', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            legendHoverLink: this.legendHoverLink,
            label: this.label,
            itemStyle: this.itemStyle,
            emphasis: this.emphasis,
            selectedMode: this.selectedMode,
            selectedOffset: this.selectedOffset,
            clockwise: this.clockwise,
            startAngle: this.startAngle,
            minAngle: this.minAngle,
            minShowLabelAngle: this.minShowLabelAngle,
            roseType: this.roseType,
            avoidLabelOverlap: this.avoidLabelOverlap,
            stillShowZeroSum: this.stillShowZeroSum,
            cursor: this.cursor,
            labelLine: this.labelLine,
            seriesLayoutBy: this.seriesLayoutBy,
            datasetIndex: this.datasetIndex,
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            center: this.center,
            radius: this.radius,
        };
    }
}
TdChartSeriesPieComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-pie]',
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
                        () => TdChartSeriesPieComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesPieComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesPieComponent.propDecorators = {
    legendHoverLink: [{ type: Input }],
    hoverAnimation: [{ type: Input }],
    hoverOffset: [{ type: Input }],
    selectedMode: [{ type: Input }],
    selectedOffset: [{ type: Input }],
    clockwise: [{ type: Input }],
    startAngle: [{ type: Input }],
    minAngle: [{ type: Input }],
    minShowLabelAngle: [{ type: Input }],
    roseType: [{ type: Input }],
    avoidLabelOverlap: [{ type: Input }],
    stillShowZeroSum: [{ type: Input }],
    cursor: [{ type: Input }],
    labelLine: [{ type: Input }],
    label: [{ type: Input }],
    itemStyle: [{ type: Input }],
    emphasis: [{ type: Input }],
    seriesLayoutBy: [{ type: Input }],
    datasetIndex: [{ type: Input }],
    markPoint: [{ type: Input }],
    markLine: [{ type: Input }],
    markArea: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }],
    center: [{ type: Input }],
    radius: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const PIE_MODULE_COMPONENTS = [TdChartSeriesPieComponent];
class CovalentPieEchartsModule {
}
CovalentPieEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PIE_MODULE_COMPONENTS],
                exports: [PIE_MODULE_COMPONENTS],
            },] }
];

export { CovalentPieEchartsModule, PIE_MODULE_COMPONENTS, TdChartSeriesPieComponent };
//# sourceMappingURL=covalent-echarts-pie.js.map
