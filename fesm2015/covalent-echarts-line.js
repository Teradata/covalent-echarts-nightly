import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/line';
import { TdSeriesComponent, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ITdLineSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdLineSeries.prototype.coordinateSystem;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.xAxisIndex;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.yAxisIndex;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.polarIndex;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.symbol;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.symbolSize;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.symbolRotate;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.symbolKeepAspect;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.symbolOffset;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.showSymbol;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.showAllSymbol;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.hoverAnimation;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.legendHoverLink;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.stack;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.cursor;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.connectNulls;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.clipOverflow;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.step;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.label;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.lineStyle;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.width;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.opacity;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.areaStyle;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.emphasis;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.smooth;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.smoothMonotone;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.sampling;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.dimensions;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.encode;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.seriesLayoutBy;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.datasetIndex;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.data;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.markPoint;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.markLine;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.markArea;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.zlevel;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.z;
    /** @type {?|undefined} */
    ITdLineSeries.prototype.silent;
}
class TdChartSeriesLineComponent extends TdSeriesComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('line', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
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
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            silent: this.silent,
        };
    }
}
TdChartSeriesLineComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-line]',
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
                        () => TdChartSeriesLineComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesLineComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesLineComponent.propDecorators = {
    coordinateSystem: [{ type: Input }],
    xAxisIndex: [{ type: Input }],
    yAxisIndex: [{ type: Input }],
    polarIndex: [{ type: Input }],
    symbol: [{ type: Input }],
    symbolSize: [{ type: Input }],
    symbolRotate: [{ type: Input }],
    symbolKeepAspect: [{ type: Input }],
    symbolOffset: [{ type: Input }],
    showSymbol: [{ type: Input }],
    showAllSymbol: [{ type: Input }],
    hoverAnimation: [{ type: Input }],
    legendHoverLink: [{ type: Input }],
    stack: [{ type: Input }],
    cursor: [{ type: Input }],
    connectNulls: [{ type: Input }],
    clipOverflow: [{ type: Input }],
    step: [{ type: Input }],
    label: [{ type: Input }],
    itemStyle: [{ type: Input }],
    lineStyle: [{ type: Input }],
    areaStyle: [{ type: Input }],
    emphasis: [{ type: Input }],
    smooth: [{ type: Input }],
    smoothMonotone: [{ type: Input }],
    sampling: [{ type: Input }],
    dimensions: [{ type: Input }],
    encode: [{ type: Input }],
    seriesLayoutBy: [{ type: Input }],
    datasetIndex: [{ type: Input }],
    markPoint: [{ type: Input }],
    markLine: [{ type: Input }],
    markArea: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }],
    silent: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.coordinateSystem;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.xAxisIndex;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.yAxisIndex;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.polarIndex;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.symbol;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.symbolSize;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.symbolRotate;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.symbolKeepAspect;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.symbolOffset;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.showSymbol;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.showAllSymbol;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.hoverAnimation;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.legendHoverLink;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.stack;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.cursor;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.connectNulls;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.clipOverflow;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.step;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.label;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.itemStyle;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.lineStyle;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.areaStyle;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.emphasis;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.smooth;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.smoothMonotone;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.sampling;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.dimensions;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.encode;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.seriesLayoutBy;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.datasetIndex;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.markPoint;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.markLine;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.markArea;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.zlevel;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.z;
    /** @type {?} */
    TdChartSeriesLineComponent.prototype.silent;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LINE_MODULE_COMPONENTS = [TdChartSeriesLineComponent];
class CovalentLineEchartsModule {
}
CovalentLineEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [LINE_MODULE_COMPONENTS],
                exports: [LINE_MODULE_COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentLineEchartsModule, LINE_MODULE_COMPONENTS, TdChartSeriesLineComponent };
//# sourceMappingURL=covalent-echarts-line.js.map
