/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent, } from '@covalent/echarts/base';
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
var TdChartSeriesBarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdChartSeriesBarComponent, _super);
    function TdChartSeriesBarComponent(_optionsService) {
        return _super.call(this, 'bar', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesBarComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
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
    };
    TdChartSeriesBarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-bar]',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: TdSeriesComponent,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdChartSeriesBarComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesBarComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
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
    return TdChartSeriesBarComponent;
}(TdSeriesComponent));
export { TdChartSeriesBarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhci8iLCJzb3VyY2VzIjpbImJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUNMLHFCQUFxQixFQVdyQixpQkFBaUIsR0FDbEIsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVoQyxrQ0ErQkM7OztJQTlCQyx1Q0FBMEI7O0lBQzFCLHdDQUFzQzs7SUFDdEMsa0NBQW9COztJQUNwQixrQ0FBb0I7O0lBQ3BCLDZCQUFpQjs7SUFDakIsaUNBQXlCOztJQUN6QixnQ0FBdUI7O0lBQ3ZCLDZCQUFlOztJQUNmLDhCQUFnQjs7SUFDaEIsZ0NBQTJCOztJQUMzQixtQ0FBOEI7O0lBQzlCLG9DQUFzQjs7SUFDdEIsOEJBQWdCOztJQUNoQixzQ0FBd0I7O0lBQ3hCLDZCQUFnQjs7SUFDaEIsc0NBQXdCOztJQUN4QixtQ0FBcUI7O0lBQ3JCLDRDQUE4Qjs7SUFDOUIsNENBQThDOztJQUM5QyxrQ0FBbUI7O0lBQ25CLDhCQUFhOztJQUNiLHNDQUFrQzs7SUFDbEMsb0NBQXNCOztJQUN0Qiw0QkFBYTs7SUFDYixpQ0FBeUI7O0lBQ3pCLGdDQUF1Qjs7SUFDdkIsZ0NBQXVCOztJQUN2Qiw4QkFBVzs7SUFDWCx5QkFBVzs7SUFDWCw4QkFBaUI7O0FBR25CO0lBVytDLHFEQUF3QjtJQThCckUsbUNBQVksZUFBc0M7ZUFDaEQsa0JBQU0sS0FBSyxFQUFFLGVBQWUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsNkNBQVM7OztJQUFUO1FBQ0UsT0FBTztZQUNMLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFVBQVUsRUFBRSxJQUFJLENB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MENBQThCOztJQUM5QiwyQ0FBZ0M7O0lBQ2hDLDBDQUEyQjs7SUFDM0IsOENBQTRDOztJQUM1Qyw2Q0FBeUM7O0lBQ3pDLDZDQUFvQzs7SUFDcEMsZ0RBQTBDOztJQUMxQyxpREFBNEM7O0lBQzVDLDJDQUFnQzs7SUFDaEMsbURBQWdEOztJQUNoRCwwQ0FBK0I7O0lBQy9CLG1EQUFnRDs7SUFDaEQsZ0RBQTBDOztJQUMxQyx5REFBNEQ7O0lBQzVELHlEQUE0RTs7SUFDNUUsK0NBQXVDOztJQUN2QywyQ0FBNkI7O0lBQzdCLG1EQUEwRDs7SUFDMUQsaURBQTRDOztJQUM1Qyw4Q0FBNEM7O0lBQzVDLDZDQUF5Qzs7SUFDekMsNkNBQXlDOztJQUN6QywyQ0FBZ0M7O0lBQ2hDLHNDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgVGRDb29yZGluYXRlU3lzdGVtLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZEVtcGhhc2lzLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBJVGRNYXJrUG9pbnQsXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgSVRkU2VyaWVzLFxuICBJVGRMYWJlbCxcbiAgVGRQcm9ncmVzc2l2ZUNodW5rTW9kZSxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEJhclNlcmllcyBleHRlbmRzIElUZFNlcmllczwnYmFyJz4ge1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBMYWJlbD86IElUZExhYmVsO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIHN0YWNrPzogc3RyaW5nO1xuICBjdXJzb3I/OiBzdHJpbmc7XG4gIGJhcldpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBiYXJNYXhXaWR0aD86IG51bWJlciB8IHN0cmluZztcbiAgYmFyTWluSGVpZ2h0PzogbnVtYmVyO1xuICBiYXJHYXA/OiBzdHJpbmc7XG4gIGJhckNhdGVnb3J5R2FwPzogc3RyaW5nO1xuICBsYXJnZT86IGJvb2xlYW47XG4gIGxhcmdlVGhyZXNob2xkPzogbnVtYmVyO1xuICBwcm9ncmVzc2l2ZT86IG51bWJlcjtcbiAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIHByb2dyZXNzaXZlQ2h1bmtNb2RlPzogVGRQcm9ncmVzc2l2ZUNodW5rTW9kZTtcbiAgZGltZW5zaW9ucz86IGFueVtdO1xuICBlbmNvZGU/OiBhbnk7XG4gIHNlcmllc0xheW91dEJ5PzogVGRTZXJpZXNMYXlvdXRCeTtcbiAgZGF0YXNldEluZGV4PzogbnVtYmVyO1xuICBkYXRhPzogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgWmxldmVsPzogMDtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLWJhcl0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNCYXJDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNCYXJDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwnYmFyJz4gaW1wbGVtZW50cyBJVGRCYXJTZXJpZXMge1xuICBASW5wdXQoJ2Nvb3JkaW5hdGVTeXN0ZW0nKSBjb29yZGluYXRlU3lzdGVtOiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIEBJbnB1dCgneEF4aXNJbmRleCcpIHhBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCd5QXhpc0luZGV4JykgeUF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2xlZ2VuZEhvdmVyTGluaycpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCdzdGFjaycpIHN0YWNrOiBzdHJpbmc7XG4gIEBJbnB1dCgnY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogYW55O1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuICBASW5wdXQoJ2JhcldpZHRoJykgYmFyV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCdiYXJNYXhXaWR0aCcpIGJhck1heFdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgnYmFyTWluSGVpZ2h0JykgYmFyTWluSGVpZ2h0OiBudW1iZXI7XG4gIEBJbnB1dCgnYmFyR2FwJykgYmFyR2FwOiBzdHJpbmc7XG4gIEBJbnB1dCgnYmFyQ2F0ZWdvcnlHYXAnKSBiYXJDYXRlZ29yeUdhcDogc3RyaW5nO1xuICBASW5wdXQoJ2xhcmdlJykgbGFyZ2U6IGJvb2xlYW47XG4gIEBJbnB1dCgnbGFyZ2VUaHJlc2hvbGQnKSBsYXJnZVRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoJ3Byb2dyZXNzaXZlJykgcHJvZ3Jlc3NpdmU6IG51bWJlcjtcbiAgQElucHV0KCdwcm9ncmVzc2l2ZVRocmVzaG9sZCcpIHByb2dyZXNzaXZlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmVDaHVua01vZGUnKSBwcm9ncmVzc2l2ZUNodW5rTW9kZTogVGRQcm9ncmVzc2l2ZUNodW5rTW9kZTtcbiAgQElucHV0KCdkaW1lbnNpb25zJykgZGltZW5zaW9uczogYW55W107XG4gIEBJbnB1dCgnZW5jb2RlJykgZW5jb2RlOiBhbnk7XG4gIEBJbnB1dCgnc2VyaWVzTGF5b3V0QnknKSBzZXJpZXNMYXlvdXRCeTogVGRTZXJpZXNMYXlvdXRCeTtcbiAgQElucHV0KCdkYXRhc2V0SW5kZXgnKSBkYXRhc2V0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbiAgQElucHV0KCdtYXJrTGluZScpIG1hcmtMaW5lOiBJVGRNYXJrTGluZTtcbiAgQElucHV0KCdtYXJrQXJlYScpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ2JhcicsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogdGhpcy5jb29yZGluYXRlU3lzdGVtLFxuICAgICAgeEF4aXNJbmRleDogdGhpcy54QXhpc0luZGV4LFxuICAgICAgeUF4aXNJbmRleDogdGhpcy55QXhpc0luZGV4LFxuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgICAgYmFyV2lkdGg6IHRoaXMuYmFyV2lkdGgsXG4gICAgICBiYXJNYXhXaWR0aDogdGhpcy5iYXJNYXhXaWR0aCxcbiAgICAgIGJhck1pbkhlaWdodDogdGhpcy5iYXJNaW5IZWlnaHQsXG4gICAgICBiYXJHYXA6IHRoaXMuYmFyR2FwLFxuICAgICAgYmFyQ2F0ZWdvcnlHYXA6IHRoaXMuYmFyQ2F0ZWdvcnlHYXAsXG4gICAgICBsYXJnZTogdGhpcy5sYXJnZSxcbiAgICAgIGxhcmdlVGhyZXNob2xkOiB0aGlzLmxhcmdlVGhyZXNob2xkLFxuICAgICAgcHJvZ3Jlc3NpdmU6IHRoaXMucHJvZ3Jlc3NpdmUsXG4gICAgICBwcm9ncmVzc2l2ZVRocmVzaG9sZDogdGhpcy5wcm9ncmVzc2l2ZVRocmVzaG9sZCxcbiAgICAgIHByb2dyZXNzaXZlQ2h1bmtNb2RlOiB0aGlzLnByb2dyZXNzaXZlQ2h1bmtNb2RlLFxuICAgICAgZGltZW5zaW9uczogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgZW5jb2RlOiB0aGlzLmVuY29kZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICB9O1xuICB9XG59XG4iXX0=