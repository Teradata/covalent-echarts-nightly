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
var TdChartSeriesLineComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdChartSeriesLineComponent, _super);
    function TdChartSeriesLineComponent(_optionsService) {
        return _super.call(this, 'line', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesLineComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
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
    };
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
                            function () { return TdChartSeriesLineComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesLineComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
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
    return TdChartSeriesLineComponent;
}(TdSeriesComponent));
export { TdChartSeriesLineComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9saW5lLyIsInNvdXJjZXMiOlsibGluZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUNMLHFCQUFxQixFQWNyQixpQkFBaUIsR0FDbEIsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUloQyxtQ0F3Q0M7OztJQXZDQyx5Q0FBc0M7O0lBQ3RDLG1DQUFvQjs7SUFDcEIsbUNBQW9COztJQUNwQixtQ0FBb0I7O0lBQ3BCLCtCQUFvQzs7SUFDcEMsbUNBQXVDOztJQUN2QyxxQ0FBc0I7O0lBQ3RCLHlDQUEyQjs7SUFDM0IscUNBQXFCOztJQUNyQixtQ0FBcUI7O0lBQ3JCLHNDQUFpQzs7SUFDakMsdUNBQXlCOztJQUN6Qix3Q0FBMEI7O0lBQzFCLDhCQUFlOztJQUNmLCtCQUFnQjs7SUFDaEIscUNBQXVCOztJQUN2QixxQ0FBdUI7O0lBQ3ZCLDZCQUF3Qjs7SUFDeEIsOEJBQWlCOztJQUNqQixrQ0FBeUI7O0lBQ3pCLGtDQUF5Qjs7SUFDekIsOEJBQWU7O0lBQ2YsZ0NBQWlCOztJQUNqQixrQ0FBeUI7O0lBQ3pCLGlDQUF1Qjs7SUFDdkIsK0JBQTBCOztJQUMxQix1Q0FBd0I7O0lBQ3hCLGlDQUFzQjs7SUFDdEIsbUNBQW1COztJQUNuQiwrQkFBYTs7SUFDYix1Q0FBa0M7O0lBQ2xDLHFDQUFzQjs7SUFDdEIsNkJBQWE7O0lBQ2Isa0NBQXlCOztJQUN6QixpQ0FBdUI7O0lBQ3ZCLGlDQUF1Qjs7SUFDdkIsK0JBQWdCOztJQUNoQiwwQkFBVzs7SUFDWCwrQkFBaUI7O0FBR25CO0lBNEJnRCxzREFBeUI7SUFzQ3ZFLG9DQUFZLGVBQXNDO2VBQ2hELGtCQUFNLE1BQU0sRUFBRSxlQUFlLENBQUM7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QUE2Qzs7SUFDN0Msa0RBQTZDOztJQUM3QywwQ0FBc0M7O0lBQ3RDLDJDQUFnQzs7SUFDaEMsK0NBQTRDOztJQUM1QywrQ0FBNEM7O0lBQzVDLCtDQUE0Qzs7SUFDNUMsOENBQXlDOztJQUN6Qyw0Q0FBMEM7O0lBQzFDLG9EQUFnRDs7SUFDaEQsOENBQXdDOztJQUN4QyxnREFBdUM7O0lBQ3ZDLDRDQUE2Qjs7SUFDN0Isb0RBQTBEOztJQUMxRCxrREFBNEM7O0lBQzVDLCtDQUE0Qzs7SUFDNUMsOENBQXlDOztJQUN6Qyw4Q0FBeUM7O0lBQ3pDLDRDQUFnQzs7SUFDaEMsdUNBQXNCOztJQUN0Qiw0Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIFRkQ29vcmRpbmF0ZVN5c3RlbSxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZExhYmVsLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZExpbmVTdHlsZSxcbiAgSVRkQXJlYVN0eWxlLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBJVGRNYXJrUG9pbnQsXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgSVRkRW1waGFzaXMsXG4gIElUZFNlcmllcyxcbiAgSVRkU2hhZG93LFxuICBUZFNlcmllc0NvbXBvbmVudCxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCB0eXBlIFRkU2FtcGxpbmcgPSAnYXZlcmFnZScgfCAnbWF4JyB8ICdtaW4nIHwgJ3N1bSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTGluZVNlcmllcyBleHRlbmRzIElUZFNlcmllczwnbGluZSc+LCBJVGRTaGFkb3cge1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBwb2xhckluZGV4PzogbnVtYmVyO1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgc3ltYm9sU2l6ZT86IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldD86IGFueVtdO1xuICBzaG93U3ltYm9sPzogYm9vbGVhbjtcbiAgc2hvd0FsbFN5bWJvbD86IGJvb2xlYW4gfCAnYXV0byc7XG4gIGhvdmVyQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgbGVnZW5kSG92ZXJMaW5rPzogYm9vbGVhbjtcbiAgc3RhY2s/OiBzdHJpbmc7XG4gIGN1cnNvcj86IHN0cmluZztcbiAgY29ubmVjdE51bGxzPzogYm9vbGVhbjtcbiAgY2xpcE92ZXJmbG93PzogYm9vbGVhbjtcbiAgc3RlcD86IHN0cmluZyB8IGJvb2xlYW47XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgbGluZVN0eWxlPzogSVRkTGluZVN0eWxlO1xuICB3aWR0aD86IG51bWJlcjtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgYXJlYVN0eWxlPzogSVRkQXJlYVN0eWxlO1xuICBlbXBoYXNpcz86IElUZEVtcGhhc2lzO1xuICBzbW9vdGg/OiBib29sZWFuIHwgbnVtYmVyO1xuICBzbW9vdGhNb25vdG9uZT86IHN0cmluZztcbiAgc2FtcGxpbmc/OiBUZFNhbXBsaW5nO1xuICBkaW1lbnNpb25zPzogYW55W107XG4gIGVuY29kZT86IGFueTtcbiAgc2VyaWVzTGF5b3V0Qnk/OiBUZFNlcmllc0xheW91dEJ5O1xuICBkYXRhc2V0SW5kZXg/OiBudW1iZXI7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICB6bGV2ZWw/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNpbGVudD86IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC1saW5lXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdjb25maWcnLFxuICAgICdpZCcsXG4gICAgJ25hbWUnLFxuICAgICdjb2xvcicsXG4gICAgJ2RhdGEnLFxuXG4gICAgJ2FuaW1hdGlvbicsXG4gICAgJ2FuaW1hdGlvblRocmVzaG9sZCcsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nJyxcbiAgICAnYW5pbWF0aW9uRGVsYXknLFxuICAgICdhbmltYXRpb25EdXJhdGlvblVwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkVhc2luZ1VwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkRlbGF5VXBkYXRlJyxcbiAgICAndG9vbHRpcCcsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc0xpbmVDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNMaW5lQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J2xpbmUnPiBpbXBsZW1lbnRzIElUZExpbmVTZXJpZXMge1xuICBASW5wdXQoJ2Nvb3JkaW5hdGVTeXN0ZW0nKSBjb29yZGluYXRlU3lzdGVtOiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIEBJbnB1dCgneEF4aXNJbmRleCcpIHhBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCd5QXhpc0luZGV4JykgeUF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3BvbGFySW5kZXgnKSBwb2xhckluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnc3ltYm9sJykgc3ltYm9sOiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgQElucHV0KCdzeW1ib2xTaXplJykgc3ltYm9sU2l6ZTogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgQElucHV0KCdzeW1ib2xSb3RhdGUnKSBzeW1ib2xSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCdzeW1ib2xLZWVwQXNwZWN0Jykgc3ltYm9sS2VlcEFzcGVjdDogYm9vbGVhbjtcbiAgQElucHV0KCdzeW1ib2xPZmZzZXQnKSBzeW1ib2xPZmZzZXQ6IGFueVtdO1xuICBASW5wdXQoJ3Nob3dTeW1ib2wnKSBzaG93U3ltYm9sOiBib29sZWFuO1xuICBASW5wdXQoJ3Nob3dBbGxTeW1ib2wnKSBzaG93QWxsU3ltYm9sOiBib29sZWFuO1xuICBASW5wdXQoJ2hvdmVyQW5pbWF0aW9uJykgaG92ZXJBbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgnbGVnZW5kSG92ZXJMaW5rJykgbGVnZW5kSG92ZXJMaW5rOiBib29sZWFuO1xuICBASW5wdXQoJ3N0YWNrJykgc3RhY2s6IHN0cmluZztcbiAgQElucHV0KCdjdXJzb3InKSBjdXJzb3I6IHN0cmluZztcbiAgQElucHV0KCdjb25uZWN0TnVsbHMnKSBjb25uZWN0TnVsbHM6IGJvb2xlYW47XG4gIEBJbnB1dCgnY2xpcE92ZXJmbG93JykgY2xpcE92ZXJmbG93OiBib29sZWFuO1xuICBASW5wdXQoJ3N0ZXAnKSBzdGVwOiBzdHJpbmcgfCBib29sZWFuO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2xpbmVTdHlsZScpIGxpbmVTdHlsZTogSVRkTGluZVN0eWxlO1xuICBASW5wdXQoJ2FyZWFTdHlsZScpIGFyZWFTdHlsZTogSVRkQXJlYVN0eWxlO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuICBASW5wdXQoJ3Ntb290aCcpIHNtb290aDogYm9vbGVhbiB8IG51bWJlcjtcbiAgQElucHV0KCdzbW9vdGhNb25vdG9uZScpIHNtb290aE1vbm90b25lOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2FtcGxpbmcnKSBzYW1wbGluZzogVGRTYW1wbGluZztcbiAgQElucHV0KCdkaW1lbnNpb25zJykgZGltZW5zaW9uczogYW55W107XG4gIEBJbnB1dCgnZW5jb2RlJykgZW5jb2RlOiBhbnk7XG4gIEBJbnB1dCgnc2VyaWVzTGF5b3V0QnknKSBzZXJpZXNMYXlvdXRCeTogVGRTZXJpZXNMYXlvdXRCeTtcbiAgQElucHV0KCdkYXRhc2V0SW5kZXgnKSBkYXRhc2V0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbiAgQElucHV0KCdtYXJrTGluZScpIG1hcmtMaW5lOiBJVGRNYXJrTGluZTtcbiAgQElucHV0KCdtYXJrQXJlYScpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdsaW5lJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjb29yZGluYXRlU3lzdGVtOiB0aGlzLmNvb3JkaW5hdGVTeXN0ZW0sXG4gICAgICB4QXhpc0luZGV4OiB0aGlzLnhBeGlzSW5kZXgsXG4gICAgICB5QXhpc0luZGV4OiB0aGlzLnlBeGlzSW5kZXgsXG4gICAgICBwb2xhckluZGV4OiB0aGlzLnBvbGFySW5kZXgsXG4gICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgc3ltYm9sU2l6ZTogdGhpcy5zeW1ib2xTaXplLFxuICAgICAgc3ltYm9sUm90YXRlOiB0aGlzLnN5bWJvbFJvdGF0ZSxcbiAgICAgIHN5bWJvbEtlZXBBc3BlY3Q6IHRoaXMuc3ltYm9sS2VlcEFzcGVjdCxcbiAgICAgIHN5bWJvbE9mZnNldDogdGhpcy5zeW1ib2xPZmZzZXQsXG4gICAgICBzaG93U3ltYm9sOiB0aGlzLnNob3dTeW1ib2wsXG4gICAgICBzaG93QWxsU3ltYm9sOiB0aGlzLnNob3dBbGxTeW1ib2wsXG4gICAgICBob3ZlckFuaW1hdGlvbjogdGhpcy5ob3ZlckFuaW1hdGlvbixcbiAgICAgIGxlZ2VuZEhvdmVyTGluazogdGhpcy5sZWdlbmRIb3ZlckxpbmssXG4gICAgICBzdGFjazogdGhpcy5zdGFjayxcbiAgICAgIGN1cnNvcjogdGhpcy5jdXJzb3IsXG4gICAgICBjb25uZWN0TnVsbHM6IHRoaXMuY29ubmVjdE51bGxzLFxuICAgICAgY2xpcE92ZXJmbG93OiB0aGlzLmNsaXBPdmVyZmxvdyxcbiAgICAgIHN0ZXA6IHRoaXMuc3RlcCxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxpbmVTdHlsZTogdGhpcy5saW5lU3R5bGUsXG4gICAgICBhcmVhU3R5bGU6IHRoaXMuYXJlYVN0eWxlLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBzbW9vdGg6IHRoaXMuc21vb3RoLFxuICAgICAgc21vb3RoTW9ub3RvbmU6IHRoaXMuc21vb3RoTW9ub3RvbmUsXG4gICAgICBzYW1wbGluZzogdGhpcy5zYW1wbGluZyxcbiAgICAgIGRpbWVuc2lvbnM6IHRoaXMuZGltZW5zaW9ucyxcbiAgICAgIGVuY29kZTogdGhpcy5lbmNvZGUsXG4gICAgICBzZXJpZXNMYXlvdXRCeTogdGhpcy5zZXJpZXNMYXlvdXRCeSxcbiAgICAgIGRhdGFzZXRJbmRleDogdGhpcy5kYXRhc2V0SW5kZXgsXG4gICAgICBtYXJrUG9pbnQ6IHRoaXMubWFya1BvaW50LFxuICAgICAgbWFya0xpbmU6IHRoaXMubWFya0xpbmUsXG4gICAgICBtYXJrQXJlYTogdGhpcy5tYXJrQXJlYSxcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==