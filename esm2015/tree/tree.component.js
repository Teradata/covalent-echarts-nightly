/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent, } from '@covalent/echarts/base';
/**
 * @record
 */
export function ITdTreeEmphasisLineStyle() { }
if (false) {
    /** @type {?|undefined} */
    ITdTreeEmphasisLineStyle.prototype.color;
    /** @type {?|undefined} */
    ITdTreeEmphasisLineStyle.prototype.width;
    /** @type {?|undefined} */
    ITdTreeEmphasisLineStyle.prototype.curveness;
}
/**
 * @record
 */
export function ITdTreeEmphasis() { }
if (false) {
    /** @type {?} */
    ITdTreeEmphasis.prototype.lineStyle;
}
/**
 * @record
 */
export function ITdTreeLeaves() { }
if (false) {
    /** @type {?|undefined} */
    ITdTreeLeaves.prototype.label;
    /** @type {?|undefined} */
    ITdTreeLeaves.prototype.itemStyle;
    /** @type {?} */
    ITdTreeLeaves.prototype.emphasis;
}
/**
 * @record
 */
function ITdTreeSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.zlevel;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.z;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.left;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.top;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.right;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.bottom;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.width;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.height;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.layout;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.orient;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.symbol;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.symbolSize;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.symbolRotate;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.symbolKeepAspect;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.symbolOffset;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.roam;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.expandAndCollapse;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.initialTreeDepth;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.label;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.lineStyle;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.leaves;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.emphasis;
    /** @type {?} */
    ITdTreeSeries.prototype.data;
}
export class TdChartSeriesTreeComponent extends TdSeriesComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('tree', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            zlevel: this.zlevel,
            z: this.z,
            left: this.left,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            width: this.width,
            height: this.height,
            layout: this.layout,
            orient: this.orient,
            symbol: this.symbol,
            symbolSize: this.symbolSize,
            symbolRotate: this.symbolRotate,
            symbolKeepAspect: this.symbolKeepAspect,
            roam: this.roam,
            expandAndCollapse: this.expandAndCollapse,
            initialTreeDepth: this.initialTreeDepth,
            itemStyle: this.itemStyle,
            label: this.label,
            lineStyle: this.lineStyle,
            leaves: this.leaves,
            emphasis: this.emphasis,
        };
    }
}
TdChartSeriesTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-tree]',
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
                        () => TdChartSeriesTreeComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesTreeComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesTreeComponent.propDecorators = {
    zlevel: [{ type: Input }],
    z: [{ type: Input }],
    left: [{ type: Input }],
    top: [{ type: Input }],
    right: [{ type: Input }],
    bottom: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    layout: [{ type: Input }],
    orient: [{ type: Input }],
    symbol: [{ type: Input }],
    symbolSize: [{ type: Input }],
    symbolRotate: [{ type: Input }],
    symbolKeepAspect: [{ type: Input }],
    roam: [{ type: Input }],
    expandAndCollapse: [{ type: Input }],
    initialTreeDepth: [{ type: Input }],
    itemStyle: [{ type: Input }],
    label: [{ type: Input }],
    lineStyle: [{ type: Input }],
    leaves: [{ type: Input }],
    emphasis: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.zlevel;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.z;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.left;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.top;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.right;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.bottom;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.width;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.height;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.layout;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.orient;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.symbol;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.symbolSize;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.symbolRotate;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.symbolKeepAspect;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.roam;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.expandAndCollapse;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.initialTreeDepth;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.itemStyle;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.label;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.lineStyle;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.leaves;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.emphasis;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlLyIsInNvdXJjZXMiOlsidHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQ0wscUJBQXFCLEVBT3JCLGlCQUFpQixHQUdsQixNQUFNLHdCQUF3QixDQUFDOzs7O0FBa0JoQyw4Q0FJQzs7O0lBSEMseUNBQVk7O0lBQ1oseUNBQWU7O0lBQ2YsNkNBQW1COzs7OztBQUdyQixxQ0FFQzs7O0lBREMsb0NBQW9DOzs7OztBQUd0QyxtQ0FJQzs7O0lBSEMsOEJBQWlCOztJQUNqQixrQ0FBeUI7O0lBQ3pCLGlDQUFzQjs7Ozs7QUFHeEIsNEJBeUJDOzs7SUF4QkMsK0JBQWdCOztJQUNoQiwwQkFBVzs7SUFDWCw2QkFBdUI7O0lBQ3ZCLDRCQUFzQjs7SUFDdEIsOEJBQXdCOztJQUN4QiwrQkFBeUI7O0lBQ3pCLDhCQUF3Qjs7SUFDeEIsK0JBQXlCOztJQUN6QiwrQkFBc0I7O0lBQ3RCLCtCQUFzQjs7SUFDdEIsK0JBQW9DOztJQUNwQyxtQ0FBb0I7O0lBQ3BCLHFDQUFzQjs7SUFDdEIseUNBQTJCOztJQUMzQixxQ0FBcUI7O0lBQ3JCLDZCQUF3Qjs7SUFDeEIsMENBQTRCOztJQUM1Qix5Q0FBMEI7O0lBQzFCLGtDQUF5Qjs7SUFDekIsOEJBQWlCOztJQUNqQixrQ0FBeUI7O0lBQ3pCLCtCQUF1Qjs7SUFDdkIsaUNBQTJCOztJQUMzQiw2QkFBWTs7QUErQmQsTUFBTSxPQUFPLDBCQUEyQixTQUFRLGlCQUF5Qjs7OztJQXdCdkUsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7WUFDekMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7SUFDSixDQUFDOzs7WUFqRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwwQkFBMEI7Z0JBQ3BDLFFBQVEsRUFBRSxFQUFFO2dCQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxNQUFNLEVBQUU7b0JBQ04sUUFBUTtvQkFDUixJQUFJO29CQUNKLE1BQU07b0JBQ04sT0FBTztvQkFDUCxNQUFNO29CQUVOLFdBQVc7b0JBQ1gsb0JBQW9CO29CQUNwQixtQkFBbUI7b0JBQ25CLGlCQUFpQjtvQkFDakIsZ0JBQWdCO29CQUNoQix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0QixTQUFTO2lCQUNWO2dCQUNELFNBQVMsRUFBRTtvQkFDVDt3QkFDRSxPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixXQUFXLEVBQUUsVUFBVTs7O3dCQUFDLEdBQUcsRUFBRSxDQUFDLDBCQUEwQixFQUFDO3FCQUMxRDtpQkFDRjthQUNGOzs7O1lBbEdDLHFCQUFxQjs7O3FCQW9HcEIsS0FBSztnQkFDTCxLQUFLO21CQUNMLEtBQUs7a0JBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLO21CQUNMLEtBQUs7Z0NBQ0wsS0FBSzsrQkFDTCxLQUFLO3dCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7OztJQXJCTiw0Q0FBd0I7O0lBQ3hCLHVDQUFtQjs7SUFDbkIsMENBQStCOztJQUMvQix5Q0FBOEI7O0lBQzlCLDJDQUFnQzs7SUFDaEMsNENBQWlDOztJQUNqQywyQ0FBZ0M7O0lBQ2hDLDRDQUFpQzs7SUFDakMsNENBQThCOztJQUM5Qiw0Q0FBOEI7O0lBQzlCLDRDQUE0Qzs7SUFDNUMsZ0RBQTRCOztJQUM1QixrREFBOEI7O0lBQzlCLHNEQUFtQzs7SUFDbkMsMENBQWdDOztJQUNoQyx1REFBb0M7O0lBQ3BDLHNEQUFrQzs7SUFDbEMsK0NBQWlDOztJQUNqQywyQ0FBeUI7O0lBQ3pCLCtDQUFpQzs7SUFDakMsNENBQStCOztJQUMvQiw4Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkU2VyaWVzVG9vbHRpcCxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZExhYmVsLFxuICBJVGRMaW5lU3R5bGUsXG4gIElUZFNlcmllcyxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG4gIElUZEVtcGhhc2lzLFxuICBJVGRTaGFkb3csXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG4vKipcbiAqIEVDSEFSVCBPUFRJT04gRE9DU1xuICogaHR0cHM6Ly9lY29tZmUuZ2l0aHViLmlvL2VjaGFydHMtZG9jL3B1YmxpYy9lbi9vcHRpb24uaHRtbCNzZXJpZXMtdHJlZVxuICpcbiAqL1xuXG4vKipcbiAqIExSIC0gZnJvbSBsZWZ0IHRvIHJpZ2h0XG4gKiBSTCAtIGZyb20gcmlnaHQgdG8gbGVmdFxuICogVEIgLSBmcm9tIHRvcCB0byBib3R0b21cbiAqIEJUIC0gZnJvbSBib3R0b20gdG8gdG9wXG4gKi9cbmV4cG9ydCB0eXBlIFRkVHJlZU9yaWVudCA9ICdMUicgfCAnUkwnIHwgJ1RCJyB8ICdCVCc7XG5cbmV4cG9ydCB0eXBlIFRkVHJlZUxheW91dCA9ICdvcnRob2dvbmFsJyB8ICdyYWRpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVFbXBoYXNpc0xpbmVTdHlsZSBleHRlbmRzIElUZFNoYWRvdyB7XG4gIGNvbG9yPzogYW55O1xuICB3aWR0aD86IG51bWJlcjtcbiAgY3VydmVuZXNzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVFbXBoYXNpcyBleHRlbmRzIElUZEVtcGhhc2lzIHtcbiAgbGluZVN0eWxlOiBJVGRUcmVlRW1waGFzaXNMaW5lU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZUxlYXZlcyB7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xufVxuXG5pbnRlcmZhY2UgSVRkVHJlZVNlcmllcyBleHRlbmRzIElUZFNlcmllczwndHJlZSc+IHtcbiAgemxldmVsPzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGxheW91dD86IFRkVHJlZUxheW91dDtcbiAgb3JpZW50PzogVGRUcmVlT3JpZW50O1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZzsgLy8gc3RyaW5nIGFkZGVkIGZvciBjdXN0b20gU1ZHLCBVUkwgb3IgZGF0YVVSSVxuICBzeW1ib2xTaXplPzogbnVtYmVyO1xuICBzeW1ib2xSb3RhdGU/OiBudW1iZXI7XG4gIHN5bWJvbEtlZXBBc3BlY3Q/OiBib29sZWFuO1xuICBzeW1ib2xPZmZzZXQ/OiBhbnlbXTtcbiAgcm9hbT86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIGV4cGFuZEFuZENvbGxhcHNlPzogYm9vbGVhbjtcbiAgaW5pdGlhbFRyZWVEZXB0aD86IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsYWJlbD86IElUZExhYmVsO1xuICBsaW5lU3R5bGU/OiBJVGRMaW5lU3R5bGU7XG4gIGxlYXZlcz86IElUZFRyZWVMZWF2ZXM7XG4gIGVtcGhhc2lzPzogSVRkVHJlZUVtcGhhc2lzO1xuICBkYXRhOiBhbnlbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLXRyZWVdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbXG4gICAgJ2NvbmZpZycsXG4gICAgJ2lkJyxcbiAgICAnbmFtZScsXG4gICAgJ2NvbG9yJyxcbiAgICAnZGF0YScsXG5cbiAgICAnYW5pbWF0aW9uJyxcbiAgICAnYW5pbWF0aW9uVGhyZXNob2xkJyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb24nLFxuICAgICdhbmltYXRpb25FYXNpbmcnLFxuICAgICdhbmltYXRpb25EZWxheScsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uVXBkYXRlJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nVXBkYXRlJyxcbiAgICAnYW5pbWF0aW9uRGVsYXlVcGRhdGUnLFxuICAgICd0b29sdGlwJyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzVHJlZUNvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1RyZWVDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwndHJlZSc+IGltcGxlbWVudHMgSVRkVHJlZVNlcmllcyB7XG4gIEBJbnB1dCgpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgpIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgbGF5b3V0OiBUZFRyZWVMYXlvdXQ7XG4gIEBJbnB1dCgpIG9yaWVudDogVGRUcmVlT3JpZW50O1xuICBASW5wdXQoKSBzeW1ib2w6IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nOyAvLyBzdHJpbmcgYWRkZWQgZm9yIGN1c3RvbSBTVkcsIFVSTCBvciBkYXRhVVJJXG4gIEBJbnB1dCgpIHN5bWJvbFNpemU6IG51bWJlcjsgLy8gc3RyaW5nIGFkZGVkIGZvciBjdXN0b20gU1ZHLCBVUkwgb3IgZGF0YVVSSVxuICBASW5wdXQoKSBzeW1ib2xSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCkgc3ltYm9sS2VlcEFzcGVjdDogYm9vbGVhbjtcbiAgQElucHV0KCkgcm9hbTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCkgZXhwYW5kQW5kQ29sbGFwc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGluaXRpYWxUcmVlRGVwdGg6IG51bWJlcjtcbiAgQElucHV0KCkgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCkgbGluZVN0eWxlOiBJVGRMaW5lU3R5bGU7XG4gIEBJbnB1dCgpIGxlYXZlczogSVRkVHJlZUxlYXZlcztcbiAgQElucHV0KCkgZW1waGFzaXM6IElUZFRyZWVFbXBoYXNpcztcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd0cmVlJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIGxheW91dDogdGhpcy5sYXlvdXQsXG4gICAgICBvcmllbnQ6IHRoaXMub3JpZW50LFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgIHN5bWJvbFNpemU6IHRoaXMuc3ltYm9sU2l6ZSxcbiAgICAgIHN5bWJvbFJvdGF0ZTogdGhpcy5zeW1ib2xSb3RhdGUsXG4gICAgICBzeW1ib2xLZWVwQXNwZWN0OiB0aGlzLnN5bWJvbEtlZXBBc3BlY3QsXG4gICAgICByb2FtOiB0aGlzLnJvYW0sXG4gICAgICBleHBhbmRBbmRDb2xsYXBzZTogdGhpcy5leHBhbmRBbmRDb2xsYXBzZSxcbiAgICAgIGluaXRpYWxUcmVlRGVwdGg6IHRoaXMuaW5pdGlhbFRyZWVEZXB0aCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGxpbmVTdHlsZTogdGhpcy5saW5lU3R5bGUsXG4gICAgICBsZWF2ZXM6IHRoaXMubGVhdmVzLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgfTtcbiAgfVxufVxuIl19