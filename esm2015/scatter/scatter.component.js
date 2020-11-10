/**
 * @fileoverview added by tsickle
 * Generated from: scatter.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesDirective, } from '@covalent/echarts/base';
/**
 * @record
 */
export function ITdScatterSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.coordinateSystem;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.xAxisIndex;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.yAxisIndex;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.polarIndex;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.geoIndex;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.calendarIndex;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.hoverAnimation;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.legendHoverLink;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.symbol;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.symbolSize;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.symbolRotate;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.symbolKeepAspect;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.symbolOffset;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.large;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.largeThreshold;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.cursor;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.connectNulls;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.clipOverflow;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.step;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.label;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.emphasis;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.progressive;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.progressiveThreshold;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.dimensions;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.encode;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.seriesLayoutBy;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.datasetIndex;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.data;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.markPoint;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.markLine;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.markArea;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.zlevel;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.z;
    /** @type {?|undefined} */
    ITdScatterSeries.prototype.silent;
}
export class TdChartSeriesScatterComponent extends TdSeriesDirective {
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
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            silent: this.silent,
        };
    }
}
TdChartSeriesScatterComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-scatter]',
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
                        provide: TdSeriesDirective,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdChartSeriesScatterComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesScatterComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesScatterComponent.propDecorators = {
    coordinateSystem: [{ type: Input }],
    xAxisIndex: [{ type: Input }],
    yAxisIndex: [{ type: Input }],
    polarIndex: [{ type: Input }],
    geoIndex: [{ type: Input }],
    calendarIndex: [{ type: Input }],
    hoverAnimation: [{ type: Input }],
    legendHoverLink: [{ type: Input }],
    symbol: [{ type: Input }],
    symbolSize: [{ type: Input }],
    symbolRotate: [{ type: Input }],
    symbolKeepAspect: [{ type: Input }],
    symbolOffset: [{ type: Input }],
    large: [{ type: Input }],
    largeThreshold: [{ type: Input }],
    cursor: [{ type: Input }],
    label: [{ type: Input }],
    itemStyle: [{ type: Input }],
    emphasis: [{ type: Input }],
    progressive: [{ type: Input }],
    progressiveThreshold: [{ type: Input }],
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
    TdChartSeriesScatterComponent.prototype.coordinateSystem;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.xAxisIndex;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.yAxisIndex;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.polarIndex;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.geoIndex;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.calendarIndex;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.hoverAnimation;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.legendHoverLink;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.symbol;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.symbolSize;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.symbolRotate;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.symbolKeepAspect;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.symbolOffset;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.large;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.largeThreshold;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.cursor;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.label;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.itemStyle;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.emphasis;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.progressive;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.progressiveThreshold;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.dimensions;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.encode;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.seriesLayoutBy;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.datasetIndex;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.markPoint;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.markLine;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.markArea;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.zlevel;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.z;
    /** @type {?} */
    TdChartSeriesScatterComponent.prototype.silent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhdHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vZWNoYXJ0cy9zY2F0dGVyL3NjYXR0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFDTCxxQkFBcUIsRUFVckIsaUJBQWlCLEdBRWxCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFaEMsc0NBb0NDOzs7SUFuQ0MsNENBQXNDOztJQUN0QyxzQ0FBb0I7O0lBQ3BCLHNDQUFvQjs7SUFDcEIsc0NBQW9COztJQUNwQixvQ0FBa0I7O0lBQ2xCLHlDQUF1Qjs7SUFDdkIsMENBQXlCOztJQUN6QiwyQ0FBMEI7O0lBQzFCLGtDQUFvQzs7SUFDcEMsc0NBQXVDOztJQUN2Qyx3Q0FBc0I7O0lBQ3RCLDRDQUEyQjs7SUFDM0Isd0NBQXFCOztJQUNyQixpQ0FBZ0I7O0lBQ2hCLDBDQUF3Qjs7SUFDeEIsa0NBQWdCOztJQUNoQix3Q0FBdUI7O0lBQ3ZCLHdDQUF1Qjs7SUFDdkIsZ0NBQWU7O0lBQ2YsaUNBQWlCOztJQUNqQixxQ0FBZ0I7O0lBQ2hCLG9DQUF1Qjs7SUFDdkIsdUNBQXFCOztJQUNyQixnREFBOEI7O0lBQzlCLHNDQUFtQjs7SUFDbkIsa0NBQWE7O0lBQ2IsMENBQWtDOztJQUNsQyx3Q0FBc0I7O0lBQ3RCLGdDQUFhOztJQUNiLHFDQUF5Qjs7SUFDekIsb0NBQXVCOztJQUN2QixvQ0FBdUI7O0lBQ3ZCLGtDQUFnQjs7SUFDaEIsNkJBQVc7O0lBQ1gsa0NBQWlCOztBQStCbkIsTUFBTSxPQUFPLDZCQUE4QixTQUFRLGlCQUFpQjs7OztJQWlDbEUsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3BD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QTlCTix5REFBOEM7O0lBQzlDLG1EQUE0Qjs7SUFDNUIsbURBQTRCOztJQUM1QixtREFBNEI7O0lBQzVCLGlEQUEwQjs7SUFDMUIsc0RBQStCOztJQUMvQix1REFBaUM7O0lBQ2pDLHdEQUFrQzs7SUFDbEMsK0NBQTRDOztJQUM1QyxtREFBK0M7O0lBQy9DLHFEQUE4Qjs7SUFDOUIseURBQW1DOztJQUNuQyxxREFBNkI7O0lBQzdCLDhDQUF3Qjs7SUFDeEIsdURBQWdDOztJQUNoQywrQ0FBd0I7O0lBQ3hCLDhDQUF5Qjs7SUFDekIsa0RBQWlDOztJQUNqQyxpREFBK0I7O0lBQy9CLG9EQUE2Qjs7SUFDN0IsNkRBQXNDOztJQUN0QyxtREFBMkI7O0lBQzNCLCtDQUFxQjs7SUFDckIsdURBQTBDOztJQUMxQyxxREFBOEI7O0lBQzlCLGtEQUFpQzs7SUFDakMsaURBQStCOztJQUMvQixpREFBK0I7O0lBQy9CLCtDQUF3Qjs7SUFDeEIsMENBQW1COztJQUNuQiwrQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIFRkQ29vcmRpbmF0ZVN5c3RlbSxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRMYWJlbCxcbiAgSVRkRW1waGFzaXMsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgVGRTZXJpZXNEaXJlY3RpdmUsXG4gIElUZFNlcmllcyxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2NhdHRlclNlcmllcyBleHRlbmRzIElUZFNlcmllcyB7XG4gIGNvb3JkaW5hdGVTeXN0ZW0/OiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIHhBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHlBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHBvbGFySW5kZXg/OiBudW1iZXI7XG4gIGdlb0luZGV4PzogbnVtYmVyO1xuICBjYWxlbmRhckluZGV4PzogbnVtYmVyO1xuICBob3ZlckFuaW1hdGlvbj86IGJvb2xlYW47XG4gIGxlZ2VuZEhvdmVyTGluaz86IGJvb2xlYW47XG4gIHN5bWJvbD86IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBzeW1ib2xTaXplPzogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgc3ltYm9sUm90YXRlPzogbnVtYmVyO1xuICBzeW1ib2xLZWVwQXNwZWN0PzogYm9vbGVhbjtcbiAgc3ltYm9sT2Zmc2V0PzogYW55W107XG4gIGxhcmdlPzogYm9vbGVhbjtcbiAgbGFyZ2VUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIGN1cnNvcj86IHN0cmluZztcbiAgY29ubmVjdE51bGxzPzogYm9vbGVhbjtcbiAgY2xpcE92ZXJmbG93PzogYm9vbGVhbjtcbiAgc3RlcD86IGJvb2xlYW47XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IGFueTtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgcHJvZ3Jlc3NpdmU/OiBudW1iZXI7XG4gIHByb2dyZXNzaXZlVGhyZXNob2xkPzogbnVtYmVyO1xuICBkaW1lbnNpb25zPzogYW55W107XG4gIGVuY29kZT86IGFueTtcbiAgc2VyaWVzTGF5b3V0Qnk/OiBUZFNlcmllc0xheW91dEJ5O1xuICBkYXRhc2V0SW5kZXg/OiBudW1iZXI7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICB6bGV2ZWw/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNpbGVudD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC1zY2F0dGVyXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdjb25maWcnLFxuICAgICdpZCcsXG4gICAgJ25hbWUnLFxuICAgICdjb2xvcicsXG4gICAgJ2RhdGEnLFxuXG4gICAgJ2FuaW1hdGlvbicsXG4gICAgJ2FuaW1hdGlvblRocmVzaG9sZCcsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nJyxcbiAgICAnYW5pbWF0aW9uRGVsYXknLFxuICAgICdhbmltYXRpb25EdXJhdGlvblVwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkVhc2luZ1VwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkRlbGF5VXBkYXRlJyxcbiAgICAndG9vbHRpcCcsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRkU2VyaWVzRGlyZWN0aXZlLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc1NjYXR0ZXJDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNTY2F0dGVyQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBJVGRTY2F0dGVyU2VyaWVzIHtcbiAgQElucHV0KCkgY29vcmRpbmF0ZVN5c3RlbTogVGRDb29yZGluYXRlU3lzdGVtO1xuICBASW5wdXQoKSB4QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHlBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgcG9sYXJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBnZW9JbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBjYWxlbmRhckluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGhvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBsZWdlbmRIb3Zlckxpbms6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN5bWJvbDogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHN5bWJvbFNpemU6IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgpIHN5bWJvbFJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoKSBzeW1ib2xLZWVwQXNwZWN0OiBib29sZWFuO1xuICBASW5wdXQoKSBzeW1ib2xPZmZzZXQ6IGFueVtdO1xuICBASW5wdXQoKSBsYXJnZTogYm9vbGVhbjtcbiAgQElucHV0KCkgbGFyZ2VUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCkgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCkgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgpIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbiAgQElucHV0KCkgcHJvZ3Jlc3NpdmU6IG51bWJlcjtcbiAgQElucHV0KCkgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCkgZGltZW5zaW9uczogYW55W107XG4gIEBJbnB1dCgpIGVuY29kZTogYW55O1xuICBASW5wdXQoKSBzZXJpZXNMYXlvdXRCeTogVGRTZXJpZXNMYXlvdXRCeTtcbiAgQElucHV0KCkgZGF0YXNldEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCkgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgpIHo6IG51bWJlcjtcbiAgQElucHV0KCkgc2lsZW50OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3NjYXR0ZXInLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvb3JkaW5hdGVTeXN0ZW06IHRoaXMuY29vcmRpbmF0ZVN5c3RlbSxcbiAgICAgIHhBeGlzSW5kZXg6IHRoaXMueEF4aXNJbmRleCxcbiAgICAgIHlBeGlzSW5kZXg6IHRoaXMueUF4aXNJbmRleCxcbiAgICAgIHBvbGFySW5kZXg6IHRoaXMucG9sYXJJbmRleCxcbiAgICAgIGdlb0luZGV4OiB0aGlzLmdlb0luZGV4LFxuICAgICAgY2FsZW5kYXJJbmRleDogdGhpcy5jYWxlbmRhckluZGV4LFxuICAgICAgaG92ZXJBbmltYXRpb246IHRoaXMuaG92ZXJBbmltYXRpb24sXG4gICAgICBsZWdlbmRIb3Zlckxpbms6IHRoaXMubGVnZW5kSG92ZXJMaW5rLFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgIHN5bWJvbFNpemU6IHRoaXMuc3ltYm9sU2l6ZSxcbiAgICAgIHN5bWJvbFJvdGF0ZTogdGhpcy5zeW1ib2xSb3RhdGUsXG4gICAgICBzeW1ib2xLZWVwQXNwZWN0OiB0aGlzLnN5bWJvbEtlZXBBc3BlY3QsXG4gICAgICBzeW1ib2xPZmZzZXQ6IHRoaXMuc3ltYm9sT2Zmc2V0LFxuICAgICAgbGFyZ2U6IHRoaXMubGFyZ2UsXG4gICAgICBsYXJnZVRocmVzaG9sZDogdGhpcy5sYXJnZVRocmVzaG9sZCxcbiAgICAgIGN1cnNvcjogdGhpcy5jdXJzb3IsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIHByb2dyZXNzaXZlOiB0aGlzLnByb2dyZXNzaXZlLFxuICAgICAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ6IHRoaXMucHJvZ3Jlc3NpdmVUaHJlc2hvbGQsXG4gICAgICBkaW1lbnNpb25zOiB0aGlzLmRpbWVuc2lvbnMsXG4gICAgICBlbmNvZGU6IHRoaXMuZW5jb2RlLFxuICAgICAgc2VyaWVzTGF5b3V0Qnk6IHRoaXMuc2VyaWVzTGF5b3V0QnksXG4gICAgICBkYXRhc2V0SW5kZXg6IHRoaXMuZGF0YXNldEluZGV4LFxuICAgICAgbWFya1BvaW50OiB0aGlzLm1hcmtQb2ludCxcbiAgICAgIG1hcmtMaW5lOiB0aGlzLm1hcmtMaW5lLFxuICAgICAgbWFya0FyZWE6IHRoaXMubWFya0FyZWEsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICB9O1xuICB9XG59XG4iXX0=