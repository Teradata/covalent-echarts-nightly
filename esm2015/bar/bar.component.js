/**
 * @fileoverview added by tsickle
 * Generated from: bar.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesDirective, } from '@covalent/echarts/base';
/**
 * @record
 */
export function ITdBarSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdBarSeries.prototype.legendHoverLink;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.coordinateSystem;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.xAxisIndex;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.yAxisIndex;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.Label;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.emphasis;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.stack;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.cursor;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.barWidth;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.barMaxWidth;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.barMinHeight;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.barGap;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.barCategoryGap;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.large;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.largeThreshold;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.progressive;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.progressiveThreshold;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.progressiveChunkMode;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.dimensions;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.encode;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.seriesLayoutBy;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.datasetIndex;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.data;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.markPoint;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.markLine;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.markArea;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.Zlevel;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.z;
    /** @type {?|undefined} */
    ITdBarSeries.prototype.silent;
}
export class TdChartSeriesBarComponent extends TdSeriesDirective {
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
                        provide: TdSeriesDirective,
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
if (false) {
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.coordinateSystem;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.xAxisIndex;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.yAxisIndex;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.legendHoverLink;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.stack;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.cursor;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.label;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.itemStyle;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.emphasis;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.barWidth;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.barMaxWidth;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.barMinHeight;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.barGap;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.barCategoryGap;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.large;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.largeThreshold;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.progressive;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.progressiveThreshold;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.progressiveChunkMode;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.dimensions;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.encode;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.seriesLayoutBy;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.datasetIndex;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.markPoint;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.markLine;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.markArea;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.zlevel;
    /** @type {?} */
    TdChartSeriesBarComponent.prototype.z;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9wbGF0Zm9ybS9lY2hhcnRzL2Jhci9iYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFDTCxxQkFBcUIsRUFXckIsaUJBQWlCLEdBQ2xCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFaEMsa0NBK0JDOzs7SUE5QkMsdUNBQTBCOztJQUMxQix3Q0FBc0M7O0lBQ3RDLGtDQUFvQjs7SUFDcEIsa0NBQW9COztJQUNwQiw2QkFBaUI7O0lBQ2pCLGlDQUF5Qjs7SUFDekIsZ0NBQXVCOztJQUN2Qiw2QkFBZTs7SUFDZiw4QkFBZ0I7O0lBQ2hCLGdDQUEyQjs7SUFDM0IsbUNBQThCOztJQUM5QixvQ0FBc0I7O0lBQ3RCLDhCQUFnQjs7SUFDaEIsc0NBQXdCOztJQUN4Qiw2QkFBZ0I7O0lBQ2hCLHNDQUF3Qjs7SUFDeEIsbUNBQXFCOztJQUNyQiw0Q0FBOEI7O0lBQzlCLDRDQUE4Qzs7SUFDOUMsa0NBQW1COztJQUNuQiw4QkFBYTs7SUFDYixzQ0FBa0M7O0lBQ2xDLG9DQUFzQjs7SUFDdEIsNEJBQWE7O0lBQ2IsaUNBQXlCOztJQUN6QixnQ0FBdUI7O0lBQ3ZCLGdDQUF1Qjs7SUFDdkIsOEJBQVc7O0lBQ1gseUJBQVc7O0lBQ1gsOEJBQWlCOztBQStCbkIsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGlCQUFpQjs7OztJQThCOUQsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTztZQUNMLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsVUFBVSxFQUFFLElBQUks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QUN4QixtREFBZ0M7O0lBQ2hDLGdEQUE2Qjs7SUFDN0IseURBQXNDOztJQUN0Qyx5REFBc0Q7O0lBQ3RELCtDQUEyQjs7SUFDM0IsMkNBQXFCOztJQUNyQixtREFBMEM7O0lBQzFDLGlEQUE4Qjs7SUFDOUIsOENBQWlDOztJQUNqQyw2Q0FBK0I7O0lBQy9CLDZDQUErQjs7SUFDL0IsMkNBQXdCOztJQUN4QixzQ0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIFRkQ29vcmRpbmF0ZVN5c3RlbSxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRFbXBoYXNpcyxcbiAgVGRTZXJpZXNMYXlvdXRCeSxcbiAgSVRkTWFya1BvaW50LFxuICBJVGRNYXJrTGluZSxcbiAgSVRkTWFya0FyZWEsXG4gIElUZFNlcmllcyxcbiAgSVRkTGFiZWwsXG4gIFRkUHJvZ3Jlc3NpdmVDaHVua01vZGUsXG4gIFRkU2VyaWVzRGlyZWN0aXZlLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRCYXJTZXJpZXMgZXh0ZW5kcyBJVGRTZXJpZXMge1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBMYWJlbD86IElUZExhYmVsO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIHN0YWNrPzogc3RyaW5nO1xuICBjdXJzb3I/OiBzdHJpbmc7XG4gIGJhcldpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBiYXJNYXhXaWR0aD86IG51bWJlciB8IHN0cmluZztcbiAgYmFyTWluSGVpZ2h0PzogbnVtYmVyO1xuICBiYXJHYXA/OiBzdHJpbmc7XG4gIGJhckNhdGVnb3J5R2FwPzogc3RyaW5nO1xuICBsYXJnZT86IGJvb2xlYW47XG4gIGxhcmdlVGhyZXNob2xkPzogbnVtYmVyO1xuICBwcm9ncmVzc2l2ZT86IG51bWJlcjtcbiAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIHByb2dyZXNzaXZlQ2h1bmtNb2RlPzogVGRQcm9ncmVzc2l2ZUNodW5rTW9kZTtcbiAgZGltZW5zaW9ucz86IGFueVtdO1xuICBlbmNvZGU/OiBhbnk7XG4gIHNlcmllc0xheW91dEJ5PzogVGRTZXJpZXNMYXlvdXRCeTtcbiAgZGF0YXNldEluZGV4PzogbnVtYmVyO1xuICBkYXRhPzogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgWmxldmVsPzogMDtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLWJhcl0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnY29uZmlnJyxcbiAgICAnaWQnLFxuICAgICduYW1lJyxcbiAgICAnY29sb3InLFxuICAgICdkYXRhJyxcblxuICAgICdhbmltYXRpb24nLFxuICAgICdhbmltYXRpb25UaHJlc2hvbGQnLFxuICAgICdhbmltYXRpb25EdXJhdGlvbicsXG4gICAgJ2FuaW1hdGlvbkVhc2luZycsXG4gICAgJ2FuaW1hdGlvbkRlbGF5JyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUnLFxuICAgICdhbmltYXRpb25FYXNpbmdVcGRhdGUnLFxuICAgICdhbmltYXRpb25EZWxheVVwZGF0ZScsXG4gICAgJ3Rvb2x0aXAnLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUZFNlcmllc0RpcmVjdGl2ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNCYXJDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNCYXJDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIElUZEJhclNlcmllcyB7XG4gIEBJbnB1dCgpIGNvb3JkaW5hdGVTeXN0ZW06IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgQElucHV0KCkgeEF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSB5QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCkgc3RhY2s6IHN0cmluZztcbiAgQElucHV0KCkgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBhbnk7XG4gIEBJbnB1dCgpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgpIGJhcldpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGJhck1heFdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGJhck1pbkhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBiYXJHYXA6IHN0cmluZztcbiAgQElucHV0KCkgYmFyQ2F0ZWdvcnlHYXA6IHN0cmluZztcbiAgQElucHV0KCkgbGFyZ2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxhcmdlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHByb2dyZXNzaXZlOiBudW1iZXI7XG4gIEBJbnB1dCgpIHByb2dyZXNzaXZlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHByb2dyZXNzaXZlQ2h1bmtNb2RlOiBUZFByb2dyZXNzaXZlQ2h1bmtNb2RlO1xuICBASW5wdXQoKSBkaW1lbnNpb25zOiBhbnlbXTtcbiAgQElucHV0KCkgZW5jb2RlOiBhbnk7XG4gIEBJbnB1dCgpIHNlcmllc0xheW91dEJ5OiBUZFNlcmllc0xheW91dEJ5O1xuICBASW5wdXQoKSBkYXRhc2V0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgbWFya1BvaW50OiBJVGRNYXJrUG9pbnQ7XG4gIEBJbnB1dCgpIG1hcmtMaW5lOiBJVGRNYXJrTGluZTtcbiAgQElucHV0KCkgbWFya0FyZWE6IElUZE1hcmtBcmVhO1xuICBASW5wdXQoKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCkgejogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ2JhcicsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogdGhpcy5jb29yZGluYXRlU3lzdGVtLFxuICAgICAgeEF4aXNJbmRleDogdGhpcy54QXhpc0luZGV4LFxuICAgICAgeUF4aXNJbmRleDogdGhpcy55QXhpc0luZGV4LFxuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgICAgYmFyV2lkdGg6IHRoaXMuYmFyV2lkdGgsXG4gICAgICBiYXJNYXhXaWR0aDogdGhpcy5iYXJNYXhXaWR0aCxcbiAgICAgIGJhck1pbkhlaWdodDogdGhpcy5iYXJNaW5IZWlnaHQsXG4gICAgICBiYXJHYXA6IHRoaXMuYmFyR2FwLFxuICAgICAgYmFyQ2F0ZWdvcnlHYXA6IHRoaXMuYmFyQ2F0ZWdvcnlHYXAsXG4gICAgICBsYXJnZTogdGhpcy5sYXJnZSxcbiAgICAgIGxhcmdlVGhyZXNob2xkOiB0aGlzLmxhcmdlVGhyZXNob2xkLFxuICAgICAgcHJvZ3Jlc3NpdmU6IHRoaXMucHJvZ3Jlc3NpdmUsXG4gICAgICBwcm9ncmVzc2l2ZVRocmVzaG9sZDogdGhpcy5wcm9ncmVzc2l2ZVRocmVzaG9sZCxcbiAgICAgIHByb2dyZXNzaXZlQ2h1bmtNb2RlOiB0aGlzLnByb2dyZXNzaXZlQ2h1bmtNb2RlLFxuICAgICAgZGltZW5zaW9uczogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgZW5jb2RlOiB0aGlzLmVuY29kZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICB9O1xuICB9XG59XG4iXX0=