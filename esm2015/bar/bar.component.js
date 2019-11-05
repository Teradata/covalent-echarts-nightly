/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhci8iLCJzb3VyY2VzIjpbImJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQ0wscUJBQXFCLEVBV3JCLGlCQUFpQixHQUNsQixNQUFNLHdCQUF3QixDQUFDOzs7O0FBRWhDLGtDQStCQzs7O0lBOUJDLHVDQUEwQjs7SUFDMUIsd0NBQXNDOztJQUN0QyxrQ0FBb0I7O0lBQ3BCLGtDQUFvQjs7SUFDcEIsNkJBQWlCOztJQUNqQixpQ0FBeUI7O0lBQ3pCLGdDQUF1Qjs7SUFDdkIsNkJBQWU7O0lBQ2YsOEJBQWdCOztJQUNoQixnQ0FBMkI7O0lBQzNCLG1DQUE4Qjs7SUFDOUIsb0NBQXNCOztJQUN0Qiw4QkFBZ0I7O0lBQ2hCLHNDQUF3Qjs7SUFDeEIsNkJBQWdCOztJQUNoQixzQ0FBd0I7O0lBQ3hCLG1DQUFxQjs7SUFDckIsNENBQThCOztJQUM5Qiw0Q0FBOEM7O0lBQzlDLGtDQUFtQjs7SUFDbkIsOEJBQWE7O0lBQ2Isc0NBQWtDOztJQUNsQyxvQ0FBc0I7O0lBQ3RCLDRCQUFhOztJQUNiLGlDQUF5Qjs7SUFDekIsZ0NBQXVCOztJQUN2QixnQ0FBdUI7O0lBQ3ZCLDhCQUFXOztJQUNYLHlCQUFXOztJQUNYLDhCQUFpQjs7QUErQm5CLE1BQU0sT0FBTyx5QkFBMEIsU0FBUSxpQkFBd0I7Ozs7SUE4QnJFLFlBQVksZUFBc0M7UUFDaEQsS0FBSyxDQUFDLEtBQUssRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLE9BQU87WUFDTCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMz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QUNoQyxnREFBNkI7O0lBQzdCLHlEQUFzQzs7SUFDdEMseURBQXNEOztJQUN0RCwrQ0FBMkI7O0lBQzNCLDJDQUFxQjs7SUFDckIsbURBQTBDOztJQUMxQyxpREFBOEI7O0lBQzlCLDhDQUFpQzs7SUFDakMsNkNBQStCOztJQUMvQiw2Q0FBK0I7O0lBQy9CLDJDQUF3Qjs7SUFDeEIsc0NBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBUZENvb3JkaW5hdGVTeXN0ZW0sXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkRW1waGFzaXMsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBJVGRTZXJpZXMsXG4gIElUZExhYmVsLFxuICBUZFByb2dyZXNzaXZlQ2h1bmtNb2RlLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQmFyU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdiYXInPiB7XG4gIGxlZ2VuZEhvdmVyTGluaz86IGJvb2xlYW47XG4gIGNvb3JkaW5hdGVTeXN0ZW0/OiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIHhBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHlBeGlzSW5kZXg/OiBudW1iZXI7XG4gIExhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgc3RhY2s/OiBzdHJpbmc7XG4gIGN1cnNvcj86IHN0cmluZztcbiAgYmFyV2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG4gIGJhck1heFdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBiYXJNaW5IZWlnaHQ/OiBudW1iZXI7XG4gIGJhckdhcD86IHN0cmluZztcbiAgYmFyQ2F0ZWdvcnlHYXA/OiBzdHJpbmc7XG4gIGxhcmdlPzogYm9vbGVhbjtcbiAgbGFyZ2VUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIHByb2dyZXNzaXZlPzogbnVtYmVyO1xuICBwcm9ncmVzc2l2ZVRocmVzaG9sZD86IG51bWJlcjtcbiAgcHJvZ3Jlc3NpdmVDaHVua01vZGU/OiBUZFByb2dyZXNzaXZlQ2h1bmtNb2RlO1xuICBkaW1lbnNpb25zPzogYW55W107XG4gIGVuY29kZT86IGFueTtcbiAgc2VyaWVzTGF5b3V0Qnk/OiBUZFNlcmllc0xheW91dEJ5O1xuICBkYXRhc2V0SW5kZXg/OiBudW1iZXI7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICBabGV2ZWw/OiAwO1xuICB6PzogbnVtYmVyO1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtYmFyXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdjb25maWcnLFxuICAgICdpZCcsXG4gICAgJ25hbWUnLFxuICAgICdjb2xvcicsXG4gICAgJ2RhdGEnLFxuXG4gICAgJ2FuaW1hdGlvbicsXG4gICAgJ2FuaW1hdGlvblRocmVzaG9sZCcsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nJyxcbiAgICAnYW5pbWF0aW9uRGVsYXknLFxuICAgICdhbmltYXRpb25EdXJhdGlvblVwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkVhc2luZ1VwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkRlbGF5VXBkYXRlJyxcbiAgICAndG9vbHRpcCcsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc0JhckNvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc0JhckNvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdiYXInPiBpbXBsZW1lbnRzIElUZEJhclNlcmllcyB7XG4gIEBJbnB1dCgpIGNvb3JkaW5hdGVTeXN0ZW06IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgQElucHV0KCkgeEF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSB5QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCkgc3RhY2s6IHN0cmluZztcbiAgQElucHV0KCkgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsOiBhbnk7XG4gIEBJbnB1dCgpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgpIGJhcldpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGJhck1heFdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGJhck1pbkhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBiYXJHYXA6IHN0cmluZztcbiAgQElucHV0KCkgYmFyQ2F0ZWdvcnlHYXA6IHN0cmluZztcbiAgQElucHV0KCkgbGFyZ2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxhcmdlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHByb2dyZXNzaXZlOiBudW1iZXI7XG4gIEBJbnB1dCgpIHByb2dyZXNzaXZlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgpIHByb2dyZXNzaXZlQ2h1bmtNb2RlOiBUZFByb2dyZXNzaXZlQ2h1bmtNb2RlO1xuICBASW5wdXQoKSBkaW1lbnNpb25zOiBhbnlbXTtcbiAgQElucHV0KCkgZW5jb2RlOiBhbnk7XG4gIEBJbnB1dCgpIHNlcmllc0xheW91dEJ5OiBUZFNlcmllc0xheW91dEJ5O1xuICBASW5wdXQoKSBkYXRhc2V0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgbWFya1BvaW50OiBJVGRNYXJrUG9pbnQ7XG4gIEBJbnB1dCgpIG1hcmtMaW5lOiBJVGRNYXJrTGluZTtcbiAgQElucHV0KCkgbWFya0FyZWE6IElUZE1hcmtBcmVhO1xuICBASW5wdXQoKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCkgejogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ2JhcicsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogdGhpcy5jb29yZGluYXRlU3lzdGVtLFxuICAgICAgeEF4aXNJbmRleDogdGhpcy54QXhpc0luZGV4LFxuICAgICAgeUF4aXNJbmRleDogdGhpcy55QXhpc0luZGV4LFxuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIHN0YWNrOiB0aGlzLnN0YWNrLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgICAgYmFyV2lkdGg6IHRoaXMuYmFyV2lkdGgsXG4gICAgICBiYXJNYXhXaWR0aDogdGhpcy5iYXJNYXhXaWR0aCxcbiAgICAgIGJhck1pbkhlaWdodDogdGhpcy5iYXJNaW5IZWlnaHQsXG4gICAgICBiYXJHYXA6IHRoaXMuYmFyR2FwLFxuICAgICAgYmFyQ2F0ZWdvcnlHYXA6IHRoaXMuYmFyQ2F0ZWdvcnlHYXAsXG4gICAgICBsYXJnZTogdGhpcy5sYXJnZSxcbiAgICAgIGxhcmdlVGhyZXNob2xkOiB0aGlzLmxhcmdlVGhyZXNob2xkLFxuICAgICAgcHJvZ3Jlc3NpdmU6IHRoaXMucHJvZ3Jlc3NpdmUsXG4gICAgICBwcm9ncmVzc2l2ZVRocmVzaG9sZDogdGhpcy5wcm9ncmVzc2l2ZVRocmVzaG9sZCxcbiAgICAgIHByb2dyZXNzaXZlQ2h1bmtNb2RlOiB0aGlzLnByb2dyZXNzaXZlQ2h1bmtNb2RlLFxuICAgICAgZGltZW5zaW9uczogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgZW5jb2RlOiB0aGlzLmVuY29kZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICB9O1xuICB9XG59XG4iXX0=