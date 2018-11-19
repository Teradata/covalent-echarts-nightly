/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, forwardRef, } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent, } from '@covalent/echarts/base';
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
var TdChartSeriesScatterComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdChartSeriesScatterComponent, _super);
    function TdChartSeriesScatterComponent(_optionsService) {
        return _super.call(this, 'scatter', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesScatterComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
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
    };
    TdChartSeriesScatterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-scatter]',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: TdSeriesComponent, useExisting: forwardRef(function () { return TdChartSeriesScatterComponent; }),
                        }]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesScatterComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesScatterComponent.propDecorators = {
        coordinateSystem: [{ type: Input, args: ['coordinateSystem',] }],
        xAxisIndex: [{ type: Input, args: ['xAxisIndex',] }],
        yAxisIndex: [{ type: Input, args: ['yAxisIndex',] }],
        polarIndex: [{ type: Input, args: ['polarIndex',] }],
        geoIndex: [{ type: Input, args: ['geoIndex',] }],
        calendarIndex: [{ type: Input, args: ['calendarIndex',] }],
        hoverAnimation: [{ type: Input, args: ['hoverAnimation',] }],
        legendHoverLink: [{ type: Input, args: ['legendHoverLink',] }],
        symbol: [{ type: Input, args: ['symbol',] }],
        symbolSize: [{ type: Input, args: ['symbolSize',] }],
        symbolRotate: [{ type: Input, args: ['symbolRotate',] }],
        symbolKeepAspect: [{ type: Input, args: ['symbolKeepAspect',] }],
        symbolOffset: [{ type: Input, args: ['symbolOffset',] }],
        large: [{ type: Input, args: ['large',] }],
        largeThreshold: [{ type: Input, args: ['largeThreshold',] }],
        cursor: [{ type: Input, args: ['cursor',] }],
        label: [{ type: Input, args: ['label',] }],
        itemStyle: [{ type: Input, args: ['itemStyle',] }],
        emphasis: [{ type: Input, args: ['emphasis',] }],
        progressive: [{ type: Input, args: ['progressive',] }],
        progressiveThreshold: [{ type: Input, args: ['progressiveThreshold',] }],
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
    return TdChartSeriesScatterComponent;
}(TdSeriesComponent));
export { TdChartSeriesScatterComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhdHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9zY2F0dGVyLyIsInNvdXJjZXMiOlsic2NhdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxxQkFBcUIsRUFVckIsaUJBQWlCLEdBRWxCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFaEMsc0NBb0NDOzs7SUFuQ0MsNENBQXNDOztJQUN0QyxzQ0FBb0I7O0lBQ3BCLHNDQUFvQjs7SUFDcEIsc0NBQW9COztJQUNwQixvQ0FBa0I7O0lBQ2xCLHlDQUF1Qjs7SUFDdkIsMENBQXlCOztJQUN6QiwyQ0FBMEI7O0lBQzFCLGtDQUFvQzs7SUFDcEMsc0NBQXVDOztJQUN2Qyx3Q0FBc0I7O0lBQ3RCLDRDQUEyQjs7SUFDM0Isd0NBQXFCOztJQUNyQixpQ0FBZ0I7O0lBQ2hCLDBDQUF3Qjs7SUFDeEIsa0NBQWdCOztJQUNoQix3Q0FBdUI7O0lBQ3ZCLHdDQUF1Qjs7SUFDdkIsZ0NBQWU7O0lBQ2YsaUNBQWlCOztJQUNqQixxQ0FBZ0I7O0lBQ2hCLG9DQUF1Qjs7SUFDdkIsdUNBQXFCOztJQUNyQixnREFBOEI7O0lBQzlCLHNDQUFtQjs7SUFDbkIsa0NBQWE7O0lBQ2IsMENBQWtDOztJQUNsQyx3Q0FBc0I7O0lBQ3RCLGdDQUFhOztJQUNiLHFDQUF5Qjs7SUFDekIsb0NBQXVCOztJQUN2QixvQ0FBdUI7O0lBQ3ZCLGtDQUFnQjs7SUFDaEIsNkJBQVc7O0lBQ1gsa0NBQWlCOztBQUduQjtJQVFtRCx5REFBNEI7SUFrQzdFLHVDQUFZLGVBQXNDO2VBQ2hELGtCQUFNLFNBQVMsRUFBRSxlQUFlLENBQUM7SUFDbkMsQ0FBQzs7OztJQUVELGlEQUFTOzs7SUFBVDtRQUNFLE9BQU87WUFD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QUMsV0FBVzsyQkFDakIsS0FBSyxTQUFDLFVBQVU7MkJBQ2hCLEtBQUssU0FBQyxVQUFVO3lCQUNoQixLQUFLLFNBQUMsUUFBUTtvQkFDZCxLQUFLLFNBQUMsR0FBRzt5QkFDVCxLQUFLLFNBQUMsUUFBUTs7SUF5Q2pCLG9DQUFDO0NBQUEsQUFqRkQsQ0FRbUQsaUJBQWlCLEdBeUVuRTtTQXpFWSw2QkFBNkI7OztJQUV4Qyx5REFBZ0U7O0lBQ2hFLG1EQUF3Qzs7SUFDeEMsbURBQXdDOztJQUN4QyxtREFBd0M7O0lBQ3hDLGlEQUFvQzs7SUFDcEMsc0RBQThDOztJQUM5Qyx1REFBaUQ7O0lBQ2pELHdEQUFtRDs7SUFDbkQsK0NBQW9EOztJQUNwRCxtREFBMkQ7O0lBQzNELHFEQUE0Qzs7SUFDNUMseURBQXFEOztJQUNyRCxxREFBMkM7O0lBQzNDLDhDQUErQjs7SUFDL0IsdURBQWdEOztJQUNoRCwrQ0FBZ0M7O0lBQ2hDLDhDQUFnQzs7SUFDaEMsa0RBQTRDOztJQUM1QyxpREFBeUM7O0lBQ3pDLG9EQUEwQzs7SUFDMUMsNkRBQTREOztJQUM1RCxtREFBdUM7O0lBQ3ZDLCtDQUE2Qjs7SUFDN0IsdURBQTBEOztJQUMxRCxxREFBNEM7O0lBQzVDLGtEQUE0Qzs7SUFDNUMsaURBQXlDOztJQUN6QyxpREFBeUM7O0lBQ3pDLCtDQUFnQzs7SUFDaEMsMENBQXNCOztJQUN0QiwrQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFxuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIFRkQ29vcmRpbmF0ZVN5c3RlbSxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRMYWJlbCxcbiAgSVRkRW1waGFzaXMsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG4gIElUZFNlcmllcyxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2NhdHRlclNlcmllcyBleHRlbmRzIElUZFNlcmllczwnc2NhdHRlcic+IHtcbiAgY29vcmRpbmF0ZVN5c3RlbT86IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgeEF4aXNJbmRleD86IG51bWJlcjtcbiAgeUF4aXNJbmRleD86IG51bWJlcjtcbiAgcG9sYXJJbmRleD86IG51bWJlcjtcbiAgZ2VvSW5kZXg/OiBudW1iZXI7XG4gIGNhbGVuZGFySW5kZXg/OiBudW1iZXI7XG4gIGhvdmVyQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgbGVnZW5kSG92ZXJMaW5rPzogYm9vbGVhbjtcbiAgc3ltYm9sPzogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIHN5bWJvbFNpemU/OiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBzeW1ib2xSb3RhdGU/OiBudW1iZXI7XG4gIHN5bWJvbEtlZXBBc3BlY3Q/OiBib29sZWFuO1xuICBzeW1ib2xPZmZzZXQ/OiBhbnlbXTtcbiAgbGFyZ2U/OiBib29sZWFuO1xuICBsYXJnZVRocmVzaG9sZD86IG51bWJlcjtcbiAgY3Vyc29yPzogc3RyaW5nO1xuICBjb25uZWN0TnVsbHM/OiBib29sZWFuO1xuICBjbGlwT3ZlcmZsb3c/OiBib29sZWFuO1xuICBzdGVwPzogYm9vbGVhbjtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgaXRlbVN0eWxlPzogYW55O1xuICBlbXBoYXNpcz86IElUZEVtcGhhc2lzO1xuICBwcm9ncmVzc2l2ZT86IG51bWJlcjtcbiAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIGRpbWVuc2lvbnM/OiBhbnlbXTtcbiAgZW5jb2RlPzogYW55O1xuICBzZXJpZXNMYXlvdXRCeT86IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIGRhdGFzZXRJbmRleD86IG51bWJlcjtcbiAgZGF0YT86IGFueVtdO1xuICBtYXJrUG9pbnQ/OiBJVGRNYXJrUG9pbnQ7XG4gIG1hcmtMaW5lPzogSVRkTWFya0xpbmU7XG4gIG1hcmtBcmVhPzogSVRkTWFya0FyZWE7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cbiAgXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtc2NhdHRlcl0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNTY2F0dGVyQ29tcG9uZW50KSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNTY2F0dGVyQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J3NjYXR0ZXInPiBpbXBsZW1lbnRzIElUZFNjYXR0ZXJTZXJpZXMge1xuXG4gIEBJbnB1dCgnY29vcmRpbmF0ZVN5c3RlbScpIGNvb3JkaW5hdGVTeXN0ZW06IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgQElucHV0KCd4QXhpc0luZGV4JykgeEF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3lBeGlzSW5kZXgnKSB5QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgncG9sYXJJbmRleCcpIHBvbGFySW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdnZW9JbmRleCcpIGdlb0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnY2FsZW5kYXJJbmRleCcpIGNhbGVuZGFySW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdob3ZlckFuaW1hdGlvbicpIGhvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoJ2xlZ2VuZEhvdmVyTGluaycpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCdzeW1ib2wnKSBzeW1ib2w6IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBASW5wdXQoJ3N5bWJvbFNpemUnKSBzeW1ib2xTaXplOiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ3N5bWJvbFJvdGF0ZScpIHN5bWJvbFJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ3N5bWJvbEtlZXBBc3BlY3QnKSBzeW1ib2xLZWVwQXNwZWN0OiBib29sZWFuO1xuICBASW5wdXQoJ3N5bWJvbE9mZnNldCcpIHN5bWJvbE9mZnNldDogYW55W107XG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogYm9vbGVhbjtcbiAgQElucHV0KCdsYXJnZVRocmVzaG9sZCcpIGxhcmdlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgnY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmUnKSBwcm9ncmVzc2l2ZTogbnVtYmVyO1xuICBASW5wdXQoJ3Byb2dyZXNzaXZlVGhyZXNob2xkJykgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdkaW1lbnNpb25zJykgZGltZW5zaW9uczogYW55W107XG4gIEBJbnB1dCgnZW5jb2RlJykgZW5jb2RlOiBhbnk7XG4gIEBJbnB1dCgnc2VyaWVzTGF5b3V0QnknKSBzZXJpZXNMYXlvdXRCeTogVGRTZXJpZXNMYXlvdXRCeTtcbiAgQElucHV0KCdkYXRhc2V0SW5kZXgnKSBkYXRhc2V0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbiAgQElucHV0KCdtYXJrTGluZScpIG1hcmtMaW5lOiBJVGRNYXJrTGluZTtcbiAgQElucHV0KCdtYXJrQXJlYScpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdzY2F0dGVyJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjb29yZGluYXRlU3lzdGVtOiB0aGlzLmNvb3JkaW5hdGVTeXN0ZW0sXG4gICAgICB4QXhpc0luZGV4OiB0aGlzLnhBeGlzSW5kZXgsXG4gICAgICB5QXhpc0luZGV4OiB0aGlzLnlBeGlzSW5kZXgsXG4gICAgICBwb2xhckluZGV4OiB0aGlzLnBvbGFySW5kZXgsXG4gICAgICBnZW9JbmRleDogdGhpcy5nZW9JbmRleCxcbiAgICAgIGNhbGVuZGFySW5kZXg6IHRoaXMuY2FsZW5kYXJJbmRleCxcbiAgICAgIGhvdmVyQW5pbWF0aW9uOiB0aGlzLmhvdmVyQW5pbWF0aW9uLFxuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICBzeW1ib2xTaXplOiB0aGlzLnN5bWJvbFNpemUsXG4gICAgICBzeW1ib2xSb3RhdGU6IHRoaXMuc3ltYm9sUm90YXRlLFxuICAgICAgc3ltYm9sS2VlcEFzcGVjdDogdGhpcy5zeW1ib2xLZWVwQXNwZWN0LFxuICAgICAgc3ltYm9sT2Zmc2V0OiB0aGlzLnN5bWJvbE9mZnNldCxcbiAgICAgIGxhcmdlOiB0aGlzLmxhcmdlLFxuICAgICAgbGFyZ2VUaHJlc2hvbGQ6IHRoaXMubGFyZ2VUaHJlc2hvbGQsXG4gICAgICBjdXJzb3I6IHRoaXMuY3Vyc29yLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBwcm9ncmVzc2l2ZTogdGhpcy5wcm9ncmVzc2l2ZSxcbiAgICAgIHByb2dyZXNzaXZlVGhyZXNob2xkOiB0aGlzLnByb2dyZXNzaXZlVGhyZXNob2xkLFxuICAgICAgZGltZW5zaW9uczogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgZW5jb2RlOiB0aGlzLmVuY29kZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgfTtcbiAgfVxufVxuIl19