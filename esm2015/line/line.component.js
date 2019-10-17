/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent, } from '@covalent/echarts/base';
/**
 * @record
 */
export function ITdLineSeries() { }
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
export class TdChartSeriesLineComponent extends TdSeriesComponent {
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
    coordinateSystem: [{ type: Input, args: ['coordinateSystem',] }],
    xAxisIndex: [{ type: Input, args: ['xAxisIndex',] }],
    yAxisIndex: [{ type: Input, args: ['yAxisIndex',] }],
    polarIndex: [{ type: Input, args: ['polarIndex',] }],
    symbol: [{ type: Input, args: ['symbol',] }],
    symbolSize: [{ type: Input, args: ['symbolSize',] }],
    symbolRotate: [{ type: Input, args: ['symbolRotate',] }],
    symbolKeepAspect: [{ type: Input, args: ['symbolKeepAspect',] }],
    symbolOffset: [{ type: Input, args: ['symbolOffset',] }],
    showSymbol: [{ type: Input, args: ['showSymbol',] }],
    showAllSymbol: [{ type: Input, args: ['showAllSymbol',] }],
    hoverAnimation: [{ type: Input, args: ['hoverAnimation',] }],
    legendHoverLink: [{ type: Input, args: ['legendHoverLink',] }],
    stack: [{ type: Input, args: ['stack',] }],
    cursor: [{ type: Input, args: ['cursor',] }],
    connectNulls: [{ type: Input, args: ['connectNulls',] }],
    clipOverflow: [{ type: Input, args: ['clipOverflow',] }],
    step: [{ type: Input, args: ['step',] }],
    label: [{ type: Input, args: ['label',] }],
    itemStyle: [{ type: Input, args: ['itemStyle',] }],
    lineStyle: [{ type: Input, args: ['lineStyle',] }],
    areaStyle: [{ type: Input, args: ['areaStyle',] }],
    emphasis: [{ type: Input, args: ['emphasis',] }],
    smooth: [{ type: Input, args: ['smooth',] }],
    smoothMonotone: [{ type: Input, args: ['smoothMonotone',] }],
    sampling: [{ type: Input, args: ['sampling',] }],
    dimensions: [{ type: Input, args: ['dimensions',] }],
    encode: [{ type: Input, args: ['encode',] }],
    seriesLayoutBy: [{ type: Input, args: ['seriesLayoutBy',] }],
    datasetIndex: [{ type: Input, args: ['datasetIndex',] }],
    markPoint: [{ type: Input, args: ['markPoint',] }],
    markLine: [{ type: Input, args: ['markLine',] }],
    markArea: [{ type: Input, args: ['markArea',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }],
    silent: [{ type: Input, args: ['silent',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9saW5lLyIsInNvdXJjZXMiOlsibGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQ0wscUJBQXFCLEVBY3JCLGlCQUFpQixHQUNsQixNQUFNLHdCQUF3QixDQUFDOzs7O0FBSWhDLG1DQXdDQzs7O0lBdkNDLHlDQUFzQzs7SUFDdEMsbUNBQW9COztJQUNwQixtQ0FBb0I7O0lBQ3BCLG1DQUFvQjs7SUFDcEIsK0JBQW9DOztJQUNwQyxtQ0FBdUM7O0lBQ3ZDLHFDQUFzQjs7SUFDdEIseUNBQTJCOztJQUMzQixxQ0FBcUI7O0lBQ3JCLG1DQUFxQjs7SUFDckIsc0NBQWlDOztJQUNqQyx1Q0FBeUI7O0lBQ3pCLHdDQUEwQjs7SUFDMUIsOEJBQWU7O0lBQ2YsK0JBQWdCOztJQUNoQixxQ0FBdUI7O0lBQ3ZCLHFDQUF1Qjs7SUFDdkIsNkJBQXdCOztJQUN4Qiw4QkFBaUI7O0lBQ2pCLGtDQUF5Qjs7SUFDekIsa0NBQXlCOztJQUN6Qiw4QkFBZTs7SUFDZixnQ0FBaUI7O0lBQ2pCLGtDQUF5Qjs7SUFDekIsaUNBQXVCOztJQUN2QiwrQkFBMEI7O0lBQzFCLHVDQUF3Qjs7SUFDeEIsaUNBQXNCOztJQUN0QixtQ0FBbUI7O0lBQ25CLCtCQUFhOztJQUNiLHVDQUFrQzs7SUFDbEMscUNBQXNCOztJQUN0Qiw2QkFBYTs7SUFDYixrQ0FBeUI7O0lBQ3pCLGlDQUF1Qjs7SUFDdkIsaUNBQXVCOztJQUN2QiwrQkFBZ0I7O0lBQ2hCLDBCQUFXOztJQUNYLCtCQUFpQjs7QUErQm5CLE1BQU0sT0FBTywwQkFBMkIsU0FBUSxpQkFBeUI7Ozs7SUFzQ3ZFLFlBQVksZUFBc0M7UUFDaEQsS0FBSyxDQUFD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QUNoQywrQ0FBNEM7O0lBQzVDLCtDQUE0Qzs7SUFDNUMsK0NBQTRDOztJQUM1Qyw4Q0FBeUM7O0lBQ3pDLDRDQUEwQzs7SUFDMUMsb0RBQWdEOztJQUNoRCw4Q0FBd0M7O0lBQ3hDLGdEQUF1Qzs7SUFDdkMsNENBQTZCOztJQUM3QixvREFBMEQ7O0lBQzFELGtEQUE0Qzs7SUFDNUMsK0NBQTRDOztJQUM1Qyw4Q0FBeUM7O0lBQ3pDLDhDQUF5Qzs7SUFDekMsNENBQWdDOztJQUNoQyx1Q0FBc0I7O0lBQ3RCLDRDQUFpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgVGRDb29yZGluYXRlU3lzdGVtLFxuICBUZE1hcmtQb2ludFN5bWJvbCxcbiAgSVRkTGFiZWwsXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkTGluZVN0eWxlLFxuICBJVGRBcmVhU3R5bGUsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBJVGRFbXBoYXNpcyxcbiAgSVRkU2VyaWVzLFxuICBJVGRTaGFkb3csXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IHR5cGUgVGRTYW1wbGluZyA9ICdhdmVyYWdlJyB8ICdtYXgnIHwgJ21pbicgfCAnc3VtJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRMaW5lU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdsaW5lJz4sIElUZFNoYWRvdyB7XG4gIGNvb3JkaW5hdGVTeXN0ZW0/OiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIHhBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHlBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHBvbGFySW5kZXg/OiBudW1iZXI7XG4gIHN5bWJvbD86IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBzeW1ib2xTaXplPzogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgc3ltYm9sUm90YXRlPzogbnVtYmVyO1xuICBzeW1ib2xLZWVwQXNwZWN0PzogYm9vbGVhbjtcbiAgc3ltYm9sT2Zmc2V0PzogYW55W107XG4gIHNob3dTeW1ib2w/OiBib29sZWFuO1xuICBzaG93QWxsU3ltYm9sPzogYm9vbGVhbiB8ICdhdXRvJztcbiAgaG92ZXJBbmltYXRpb24/OiBib29sZWFuO1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBzdGFjaz86IHN0cmluZztcbiAgY3Vyc29yPzogc3RyaW5nO1xuICBjb25uZWN0TnVsbHM/OiBib29sZWFuO1xuICBjbGlwT3ZlcmZsb3c/OiBib29sZWFuO1xuICBzdGVwPzogc3RyaW5nIHwgYm9vbGVhbjtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsaW5lU3R5bGU/OiBJVGRMaW5lU3R5bGU7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBhcmVhU3R5bGU/OiBJVGRBcmVhU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIHNtb290aD86IGJvb2xlYW4gfCBudW1iZXI7XG4gIHNtb290aE1vbm90b25lPzogc3RyaW5nO1xuICBzYW1wbGluZz86IFRkU2FtcGxpbmc7XG4gIGRpbWVuc2lvbnM/OiBhbnlbXTtcbiAgZW5jb2RlPzogYW55O1xuICBzZXJpZXNMYXlvdXRCeT86IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIGRhdGFzZXRJbmRleD86IG51bWJlcjtcbiAgZGF0YT86IGFueVtdO1xuICBtYXJrUG9pbnQ/OiBJVGRNYXJrUG9pbnQ7XG4gIG1hcmtMaW5lPzogSVRkTWFya0xpbmU7XG4gIG1hcmtBcmVhPzogSVRkTWFya0FyZWE7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLWxpbmVdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbXG4gICAgJ2NvbmZpZycsXG4gICAgJ2lkJyxcbiAgICAnbmFtZScsXG4gICAgJ2NvbG9yJyxcbiAgICAnZGF0YScsXG5cbiAgICAnYW5pbWF0aW9uJyxcbiAgICAnYW5pbWF0aW9uVGhyZXNob2xkJyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb24nLFxuICAgICdhbmltYXRpb25FYXNpbmcnLFxuICAgICdhbmltYXRpb25EZWxheScsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uVXBkYXRlJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nVXBkYXRlJyxcbiAgICAnYW5pbWF0aW9uRGVsYXlVcGRhdGUnLFxuICAgICd0b29sdGlwJyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzTGluZUNvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc0xpbmVDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwnbGluZSc+IGltcGxlbWVudHMgSVRkTGluZVNlcmllcyB7XG4gIEBJbnB1dCgnY29vcmRpbmF0ZVN5c3RlbScpIGNvb3JkaW5hdGVTeXN0ZW06IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgQElucHV0KCd4QXhpc0luZGV4JykgeEF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3lBeGlzSW5kZXgnKSB5QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgncG9sYXJJbmRleCcpIHBvbGFySW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdzeW1ib2wnKSBzeW1ib2w6IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBASW5wdXQoJ3N5bWJvbFNpemUnKSBzeW1ib2xTaXplOiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ3N5bWJvbFJvdGF0ZScpIHN5bWJvbFJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ3N5bWJvbEtlZXBBc3BlY3QnKSBzeW1ib2xLZWVwQXNwZWN0OiBib29sZWFuO1xuICBASW5wdXQoJ3N5bWJvbE9mZnNldCcpIHN5bWJvbE9mZnNldDogYW55W107XG4gIEBJbnB1dCgnc2hvd1N5bWJvbCcpIHNob3dTeW1ib2w6IGJvb2xlYW47XG4gIEBJbnB1dCgnc2hvd0FsbFN5bWJvbCcpIHNob3dBbGxTeW1ib2w6IGJvb2xlYW47XG4gIEBJbnB1dCgnaG92ZXJBbmltYXRpb24nKSBob3ZlckFuaW1hdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCdsZWdlbmRIb3ZlckxpbmsnKSBsZWdlbmRIb3Zlckxpbms6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3RhY2snKSBzdGFjazogc3RyaW5nO1xuICBASW5wdXQoJ2N1cnNvcicpIGN1cnNvcjogc3RyaW5nO1xuICBASW5wdXQoJ2Nvbm5lY3ROdWxscycpIGNvbm5lY3ROdWxsczogYm9vbGVhbjtcbiAgQElucHV0KCdjbGlwT3ZlcmZsb3cnKSBjbGlwT3ZlcmZsb3c6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3RlcCcpIHN0ZXA6IHN0cmluZyB8IGJvb2xlYW47XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgnbGluZVN0eWxlJykgbGluZVN0eWxlOiBJVGRMaW5lU3R5bGU7XG4gIEBJbnB1dCgnYXJlYVN0eWxlJykgYXJlYVN0eWxlOiBJVGRBcmVhU3R5bGU7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgnc21vb3RoJykgc21vb3RoOiBib29sZWFuIHwgbnVtYmVyO1xuICBASW5wdXQoJ3Ntb290aE1vbm90b25lJykgc21vb3RoTW9ub3RvbmU6IHN0cmluZztcbiAgQElucHV0KCdzYW1wbGluZycpIHNhbXBsaW5nOiBUZFNhbXBsaW5nO1xuICBASW5wdXQoJ2RpbWVuc2lvbnMnKSBkaW1lbnNpb25zOiBhbnlbXTtcbiAgQElucHV0KCdlbmNvZGUnKSBlbmNvZGU6IGFueTtcbiAgQElucHV0KCdzZXJpZXNMYXlvdXRCeScpIHNlcmllc0xheW91dEJ5OiBUZFNlcmllc0xheW91dEJ5O1xuICBASW5wdXQoJ2RhdGFzZXRJbmRleCcpIGRhdGFzZXRJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ21hcmtQb2ludCcpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoJ21hcmtMaW5lJykgbWFya0xpbmU6IElUZE1hcmtMaW5lO1xuICBASW5wdXQoJ21hcmtBcmVhJykgbWFya0FyZWE6IElUZE1hcmtBcmVhO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ2xpbmUnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvb3JkaW5hdGVTeXN0ZW06IHRoaXMuY29vcmRpbmF0ZVN5c3RlbSxcbiAgICAgIHhBeGlzSW5kZXg6IHRoaXMueEF4aXNJbmRleCxcbiAgICAgIHlBeGlzSW5kZXg6IHRoaXMueUF4aXNJbmRleCxcbiAgICAgIHBvbGFySW5kZXg6IHRoaXMucG9sYXJJbmRleCxcbiAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICBzeW1ib2xTaXplOiB0aGlzLnN5bWJvbFNpemUsXG4gICAgICBzeW1ib2xSb3RhdGU6IHRoaXMuc3ltYm9sUm90YXRlLFxuICAgICAgc3ltYm9sS2VlcEFzcGVjdDogdGhpcy5zeW1ib2xLZWVwQXNwZWN0LFxuICAgICAgc3ltYm9sT2Zmc2V0OiB0aGlzLnN5bWJvbE9mZnNldCxcbiAgICAgIHNob3dTeW1ib2w6IHRoaXMuc2hvd1N5bWJvbCxcbiAgICAgIHNob3dBbGxTeW1ib2w6IHRoaXMuc2hvd0FsbFN5bWJvbCxcbiAgICAgIGhvdmVyQW5pbWF0aW9uOiB0aGlzLmhvdmVyQW5pbWF0aW9uLFxuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIGNvbm5lY3ROdWxsczogdGhpcy5jb25uZWN0TnVsbHMsXG4gICAgICBjbGlwT3ZlcmZsb3c6IHRoaXMuY2xpcE92ZXJmbG93LFxuICAgICAgc3RlcDogdGhpcy5zdGVwLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgbGluZVN0eWxlOiB0aGlzLmxpbmVTdHlsZSxcbiAgICAgIGFyZWFTdHlsZTogdGhpcy5hcmVhU3R5bGUsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIHNtb290aDogdGhpcy5zbW9vdGgsXG4gICAgICBzbW9vdGhNb25vdG9uZTogdGhpcy5zbW9vdGhNb25vdG9uZSxcbiAgICAgIHNhbXBsaW5nOiB0aGlzLnNhbXBsaW5nLFxuICAgICAgZGltZW5zaW9uczogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgZW5jb2RlOiB0aGlzLmVuY29kZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgfTtcbiAgfVxufVxuIl19