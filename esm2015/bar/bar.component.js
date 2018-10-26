/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, forwardRef, } from '@angular/core';
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
export class TdChartSeriesBarComponent extends TdSeriesComponent {
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
            id: this.id,
            type: this.type,
            name: this.name,
            color: this.color,
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
    data: [{ type: Input, args: ['data',] }],
    markPoint: [{ type: Input, args: ['markPoint',] }],
    markLine: [{ type: Input, args: ['markLine',] }],
    markArea: [{ type: Input, args: ['markArea',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }]
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
    TdChartSeriesBarComponent.prototype.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhci8iLCJzb3VyY2VzIjpbImJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLHFCQUFxQixFQVdyQixpQkFBaUIsR0FDbEIsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVoQyxrQ0ErQkM7OztJQTlCQyx1Q0FBMEI7O0lBQzFCLHdDQUFzQzs7SUFDdEMsa0NBQW9COztJQUNwQixrQ0FBb0I7O0lBQ3BCLDZCQUFpQjs7SUFDakIsaUNBQXlCOztJQUN6QixnQ0FBdUI7O0lBQ3ZCLDZCQUFlOztJQUNmLDhCQUFnQjs7SUFDaEIsZ0NBQTJCOztJQUMzQixtQ0FBOEI7O0lBQzlCLG9DQUFzQjs7SUFDdEIsOEJBQWdCOztJQUNoQixzQ0FBd0I7O0lBQ3hCLDZCQUFnQjs7SUFDaEIsc0NBQXdCOztJQUN4QixtQ0FBcUI7O0lBQ3JCLDRDQUE4Qjs7SUFDOUIsNENBQThDOztJQUM5QyxrQ0FBbUI7O0lBQ25CLDhCQUFhOztJQUNiLHNDQUFrQzs7SUFDbEMsb0NBQXNCOztJQUN0Qiw0QkFBYTs7SUFDYixpQ0FBeUI7O0lBQ3pCLGdDQUF1Qjs7SUFDdkIsZ0NBQXVCOztJQUN2Qiw4QkFBVzs7SUFDWCx5QkFBVzs7SUFDWCw4QkFBaUI7O0FBV25CLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxpQkFBd0I7Ozs7SUFnQ3JFLFlBQVksZUFBc0M7UUFDaEQsS0FBSyxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJ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ZCxLQUFLLFNBQUMsZ0JBQWdCO29CQUN0QixLQUFLLFNBQUMsT0FBTzs2QkFDYixLQUFLLFNBQUMsZ0JBQWdCOzBCQUN0QixLQUFLLFNBQUMsYUFBYTttQ0FDbkIsS0FBSyxTQUFDLHNCQUFzQjttQ0FDNUIsS0FBSyxTQUFDLHNCQUFzQjt5QkFDNUIsS0FBSyxTQUFDLFlBQVk7cUJBQ2xCLEtBQUssU0FBQyxRQUFROzZCQUNkLEtBQUssU0FBQyxnQkFBZ0I7MkJBQ3RCLEtBQUssU0FBQyxjQUFjO21CQUNwQixLQUFLLFNBQUMsTUFBTTt3QkFDWixLQUFLLFNBQUMsV0FBVzt1QkFDakIsS0FBSyxTQUFDLFVBQVU7dUJBQ2hCLEtBQUssU0FBQyxVQUFVO3FCQUNoQixLQUFLLFNBQUMsUUFBUTtnQkFDZCxLQUFLLFNBQUMsR0FBRzs7OztJQTVCVixxREFBZ0U7O0lBQ2hFLCtDQUF3Qzs7SUFDeEMsK0NBQXdDOztJQUN4QyxvREFBbUQ7O0lBQ25ELDBDQUE4Qjs7SUFDOUIsMkNBQWdDOztJQUNoQywwQ0FBMkI7O0lBQzNCLDhDQUE0Qzs7SUFDNUMsNkNBQXlDOztJQUN6Qyw2Q0FBb0M7O0lBQ3BDLGdEQUEwQzs7SUFDMUMsaURBQTRDOztJQUM1QywyQ0FBZ0M7O0lBQ2hDLG1EQUFnRDs7SUFDaEQsMENBQStCOztJQUMvQixtREFBZ0Q7O0lBQ2hELGdEQUEwQzs7SUFDMUMseURBQTREOztJQUM1RCx5REFBNEU7O0lBQzVFLCtDQUF1Qzs7SUFDdkMsMkNBQTZCOztJQUM3QixtREFBMEQ7O0lBQzFELGlEQUE0Qzs7SUFDNUMseUNBQTJCOztJQUMzQiw4Q0FBNEM7O0lBQzVDLDZDQUF5Qzs7SUFDekMsNkNBQXlDOztJQUN6QywyQ0FBZ0M7O0lBQ2hDLHNDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgVGRDb29yZGluYXRlU3lzdGVtLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZEVtcGhhc2lzLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBJVGRNYXJrUG9pbnQsXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgSVRkU2VyaWVzLFxuICBJVGRMYWJlbCxcbiAgVGRQcm9ncmVzc2l2ZUNodW5rTW9kZSxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEJhclNlcmllcyBleHRlbmRzIElUZFNlcmllczwnYmFyJz4ge1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBMYWJlbD86IElUZExhYmVsO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIHN0YWNrPzogc3RyaW5nO1xuICBjdXJzb3I/OiBzdHJpbmc7XG4gIGJhcldpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBiYXJNYXhXaWR0aD86IG51bWJlciB8IHN0cmluZztcbiAgYmFyTWluSGVpZ2h0PzogbnVtYmVyO1xuICBiYXJHYXA/OiBzdHJpbmc7XG4gIGJhckNhdGVnb3J5R2FwPzogc3RyaW5nO1xuICBsYXJnZT86IGJvb2xlYW47XG4gIGxhcmdlVGhyZXNob2xkPzogbnVtYmVyO1xuICBwcm9ncmVzc2l2ZT86IG51bWJlcjtcbiAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIHByb2dyZXNzaXZlQ2h1bmtNb2RlPzogVGRQcm9ncmVzc2l2ZUNodW5rTW9kZTtcbiAgZGltZW5zaW9ucz86IGFueVtdO1xuICBlbmNvZGU/OiBhbnk7XG4gIHNlcmllc0xheW91dEJ5PzogVGRTZXJpZXNMYXlvdXRCeTtcbiAgZGF0YXNldEluZGV4PzogbnVtYmVyO1xuICBkYXRhPzogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgWmxldmVsPzogMDtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLWJhcl0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNCYXJDb21wb25lbnQpLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc0JhckNvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdiYXInPiBpbXBsZW1lbnRzIElUZEJhclNlcmllcyB7XG5cbiAgQElucHV0KCdjb29yZGluYXRlU3lzdGVtJykgY29vcmRpbmF0ZVN5c3RlbTogVGRDb29yZGluYXRlU3lzdGVtO1xuICBASW5wdXQoJ3hBeGlzSW5kZXgnKSB4QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgneUF4aXNJbmRleCcpIHlBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdsZWdlbmRIb3ZlckxpbmsnKSBsZWdlbmRIb3Zlckxpbms6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3RhY2snKSBzdGFjazogc3RyaW5nO1xuICBASW5wdXQoJ2N1cnNvcicpIGN1cnNvcjogc3RyaW5nO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IGFueTtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbiAgQElucHV0KCdiYXJXaWR0aCcpIGJhcldpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgnYmFyTWF4V2lkdGgnKSBiYXJNYXhXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoJ2Jhck1pbkhlaWdodCcpIGJhck1pbkhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoJ2JhckdhcCcpIGJhckdhcDogc3RyaW5nO1xuICBASW5wdXQoJ2JhckNhdGVnb3J5R2FwJykgYmFyQ2F0ZWdvcnlHYXA6IHN0cmluZztcbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBib29sZWFuO1xuICBASW5wdXQoJ2xhcmdlVGhyZXNob2xkJykgbGFyZ2VUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdwcm9ncmVzc2l2ZScpIHByb2dyZXNzaXZlOiBudW1iZXI7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmVUaHJlc2hvbGQnKSBwcm9ncmVzc2l2ZVRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoJ3Byb2dyZXNzaXZlQ2h1bmtNb2RlJykgcHJvZ3Jlc3NpdmVDaHVua01vZGU6IFRkUHJvZ3Jlc3NpdmVDaHVua01vZGU7XG4gIEBJbnB1dCgnZGltZW5zaW9ucycpIGRpbWVuc2lvbnM6IGFueVtdO1xuICBASW5wdXQoJ2VuY29kZScpIGVuY29kZTogYW55O1xuICBASW5wdXQoJ3Nlcmllc0xheW91dEJ5Jykgc2VyaWVzTGF5b3V0Qnk6IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIEBJbnB1dCgnZGF0YXNldEluZGV4JykgZGF0YXNldEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueVtdO1xuICBASW5wdXQoJ21hcmtQb2ludCcpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoJ21hcmtMaW5lJykgbWFya0xpbmU6IElUZE1hcmtMaW5lO1xuICBASW5wdXQoJ21hcmtBcmVhJykgbWFya0FyZWE6IElUZE1hcmtBcmVhO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcignYmFyJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogdGhpcy5pZCxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogdGhpcy5jb29yZGluYXRlU3lzdGVtLFxuICAgICAgeEF4aXNJbmRleDogdGhpcy54QXhpc0luZGV4LFxuICAgICAgeUF4aXNJbmRleDogdGhpcy55QXhpc0luZGV4LFxuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgICAgYmFyV2lkdGg6IHRoaXMuYmFyV2lkdGgsXG4gICAgICBiYXJNYXhXaWR0aDogdGhpcy5iYXJNYXhXaWR0aCxcbiAgICAgIGJhck1pbkhlaWdodDogdGhpcy5iYXJNaW5IZWlnaHQsXG4gICAgICBiYXJHYXA6IHRoaXMuYmFyR2FwLFxuICAgICAgYmFyQ2F0ZWdvcnlHYXA6IHRoaXMuYmFyQ2F0ZWdvcnlHYXAsXG4gICAgICBsYXJnZTogdGhpcy5sYXJnZSxcbiAgICAgIGxhcmdlVGhyZXNob2xkOiB0aGlzLmxhcmdlVGhyZXNob2xkLFxuICAgICAgcHJvZ3Jlc3NpdmU6IHRoaXMucHJvZ3Jlc3NpdmUsXG4gICAgICBwcm9ncmVzc2l2ZVRocmVzaG9sZDogdGhpcy5wcm9ncmVzc2l2ZVRocmVzaG9sZCxcbiAgICAgIHByb2dyZXNzaXZlQ2h1bmtNb2RlOiB0aGlzLnByb2dyZXNzaXZlQ2h1bmtNb2RlLFxuICAgICAgZGltZW5zaW9uczogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgZW5jb2RlOiB0aGlzLmVuY29kZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIGFuaW1hdGlvbjogdGhpcy5hbmltYXRpb24sXG4gICAgICBhbmltYXRpb25UaHJlc2hvbGQ6IHRoaXMuYW5pbWF0aW9uVGhyZXNob2xkLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHRoaXMuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBhbmltYXRpb25FYXNpbmc6IHRoaXMuYW5pbWF0aW9uRWFzaW5nLFxuICAgICAgYW5pbWF0aW9uRGVsYXk6IHRoaXMuYW5pbWF0aW9uRGVsYXksXG4gICAgICBhbmltYXRpb25EdXJhdGlvblVwZGF0ZTogdGhpcy5hbmltYXRpb25EdXJhdGlvblVwZGF0ZSxcbiAgICAgIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZTogdGhpcy5hbmltYXRpb25FYXNpbmdVcGRhdGUsXG4gICAgICBhbmltYXRpb25EZWxheVVwZGF0ZTogdGhpcy5hbmltYXRpb25EZWxheVVwZGF0ZSxcbiAgICAgIHRvb2x0aXA6IHRoaXMudG9vbHRpcCxcbiAgICB9O1xuICB9XG59XG4iXX0=