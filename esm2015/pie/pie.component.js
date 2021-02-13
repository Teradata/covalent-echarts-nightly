/**
 * @fileoverview added by tsickle
 * Generated from: pie.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesDirective, } from '@covalent/echarts/base';
/**
 * @record
 */
export function ITdPieSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdPieSeries.prototype.legendHoverLink;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.hoverAnimation;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.hoverOffset;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.selectedMode;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.selectedOffset;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.clockwise;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.startAngle;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.minAngle;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.minShowLabelAngle;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.roseType;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.avoidLabelOverlap;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.stillShowZeroSum;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.cursor;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.labelLine;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.Label;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.emphasis;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.seriesLayoutBy;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.datasetIndex;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.data;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.markPoint;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.markLine;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.markArea;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.Zlevel;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.z;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.center;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.radius;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.silent;
}
export class TdChartSeriesPieComponent extends TdSeriesDirective {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('pie', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            legendHoverLink: this.legendHoverLink,
            label: this.label,
            itemStyle: this.itemStyle,
            emphasis: this.emphasis,
            selectedMode: this.selectedMode,
            selectedOffset: this.selectedOffset,
            clockwise: this.clockwise,
            startAngle: this.startAngle,
            minAngle: this.minAngle,
            minShowLabelAngle: this.minShowLabelAngle,
            roseType: this.roseType,
            avoidLabelOverlap: this.avoidLabelOverlap,
            stillShowZeroSum: this.stillShowZeroSum,
            cursor: this.cursor,
            labelLine: this.labelLine,
            seriesLayoutBy: this.seriesLayoutBy,
            datasetIndex: this.datasetIndex,
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            center: this.center,
            radius: this.radius,
        };
    }
}
TdChartSeriesPieComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-pie]',
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
                        () => TdChartSeriesPieComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesPieComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesPieComponent.propDecorators = {
    legendHoverLink: [{ type: Input }],
    hoverAnimation: [{ type: Input }],
    hoverOffset: [{ type: Input }],
    selectedMode: [{ type: Input }],
    selectedOffset: [{ type: Input }],
    clockwise: [{ type: Input }],
    startAngle: [{ type: Input }],
    minAngle: [{ type: Input }],
    minShowLabelAngle: [{ type: Input }],
    roseType: [{ type: Input }],
    avoidLabelOverlap: [{ type: Input }],
    stillShowZeroSum: [{ type: Input }],
    cursor: [{ type: Input }],
    labelLine: [{ type: Input }],
    label: [{ type: Input }],
    itemStyle: [{ type: Input }],
    emphasis: [{ type: Input }],
    seriesLayoutBy: [{ type: Input }],
    datasetIndex: [{ type: Input }],
    markPoint: [{ type: Input }],
    markLine: [{ type: Input }],
    markArea: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }],
    center: [{ type: Input }],
    radius: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.legendHoverLink;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.hoverAnimation;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.hoverOffset;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.selectedMode;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.selectedOffset;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.clockwise;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.startAngle;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.minAngle;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.minShowLabelAngle;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.roseType;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.avoidLabelOverlap;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.stillShowZeroSum;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.cursor;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.labelLine;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.label;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.itemStyle;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.emphasis;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.seriesLayoutBy;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.datasetIndex;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.markPoint;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.markLine;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.markArea;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.zlevel;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.z;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.center;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.radius;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vZWNoYXJ0cy9waWUvIiwic291cmNlcyI6WyJwaWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFDTCxxQkFBcUIsRUFVckIsaUJBQWlCLEdBQ2xCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFaEMsa0NBNkJDOzs7SUE1QkMsdUNBQTBCOztJQUMxQixzQ0FBeUI7O0lBQ3pCLG1DQUFxQjs7SUFDckIsb0NBQWdDOztJQUNoQyxzQ0FBd0I7O0lBQ3hCLGlDQUFvQjs7SUFDcEIsa0NBQW9COztJQUNwQixnQ0FBa0I7O0lBQ2xCLHlDQUEyQjs7SUFDM0IsZ0NBQTRCOztJQUM1Qix5Q0FBNEI7O0lBQzVCLHdDQUEyQjs7SUFDM0IsOEJBQWdCOztJQUNoQixpQ0FBeUI7O0lBQ3pCLDZCQUFpQjs7SUFDakIsaUNBQXlCOztJQUN6QixnQ0FBdUI7O0lBQ3ZCLHNDQUFrQzs7SUFDbEMsb0NBQXNCOztJQUN0Qiw0QkFBYTs7SUFDYixpQ0FBeUI7O0lBQ3pCLGdDQUF1Qjs7SUFDdkIsZ0NBQXVCOztJQUN2Qiw4QkFBVzs7SUFDWCx5QkFBVzs7SUFDWCw4QkFBZ0I7O0lBQ2hCLDhCQUFpQzs7SUFDakMsOEJBQWlCOztBQStCbkIsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGlCQUFpQjs7OztJQTRCOUQsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTztZQUNMLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7WUFDekMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7WUFDekMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7OztZQXZGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLE1BQU0sRUFBRTtvQkFDTixRQUFRO29CQUNSLElBQUk7b0JBQ0osTUFBTTtvQkFDTixPQUFPO29CQUNQLE1BQU07b0JBRU4sV0FBVztvQkFDWCxvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLHlCQUF5QjtvQkFDekIsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLFNBQVM7aUJBQ1Y7Z0JBQ0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLEVBQUM7cUJBQ3pEO2lCQUNGO2FBQ0Y7Ozs7WUF2RUMscUJBQXFCOzs7OEJBeUVwQixLQUFLOzZCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7Z0NBQ0wsS0FBSzt1QkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSztxQkFDTCxLQUFLO3dCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7NkJBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7Z0JBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUNMLEtBQUs7Ozs7SUF6Qk4sb0RBQWtDOztJQUNsQyxtREFBaUM7O0lBQ2pDLGdEQUE2Qjs7SUFDN0IsaURBQXdDOztJQUN4QyxtREFBZ0M7O0lBQ2hDLDhDQUE0Qjs7SUFDNUIsK0NBQTRCOztJQUM1Qiw2Q0FBMEI7O0lBQzFCLHNEQUFtQzs7SUFDbkMsNkNBQW9DOztJQUNwQyxzREFBb0M7O0lBQ3BDLHFEQUFtQzs7SUFDbkMsMkNBQXdCOztJQUN4Qiw4Q0FBMkI7O0lBQzNCLDBDQUFvQjs7SUFDcEIsOENBQWlDOztJQUNqQyw2Q0FBK0I7O0lBQy9CLG1EQUEwQzs7SUFDMUMsaURBQThCOztJQUM5Qiw4Q0FBaUM7O0lBQ2pDLDZDQUErQjs7SUFDL0IsNkNBQStCOztJQUMvQiwyQ0FBd0I7O0lBQ3hCLHNDQUFtQjs7SUFDbkIsMkNBQXdCOztJQUN4QiwyQ0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkRW1waGFzaXMsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBJVGRTZXJpZXMsXG4gIElUZExhYmVsLFxuICBJVGRMYWJlbExpbmUsXG4gIFRkU2VyaWVzRGlyZWN0aXZlLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRQaWVTZXJpZXMgZXh0ZW5kcyBJVGRTZXJpZXMge1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBob3ZlckFuaW1hdGlvbj86IGJvb2xlYW47XG4gIGhvdmVyT2Zmc2V0PzogbnVtYmVyO1xuICBzZWxlY3RlZE1vZGU/OiBib29sZWFuIHwgc3RyaW5nO1xuICBzZWxlY3RlZE9mZnNldD86IG51bWJlcjtcbiAgY2xvY2t3aXNlPzogYm9vbGVhbjtcbiAgc3RhcnRBbmdsZT86IG51bWJlcjtcbiAgbWluQW5nbGU/OiBudW1iZXI7XG4gIG1pblNob3dMYWJlbEFuZ2xlPzogbnVtYmVyO1xuICByb3NlVHlwZT86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIGF2b2lkTGFiZWxPdmVybGFwPzogYm9vbGVhbjtcbiAgc3RpbGxTaG93WmVyb1N1bT86IGJvb2xlYW47XG4gIGN1cnNvcj86IHN0cmluZztcbiAgbGFiZWxMaW5lPzogSVRkTGFiZWxMaW5lO1xuICBMYWJlbD86IElUZExhYmVsO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIHNlcmllc0xheW91dEJ5PzogVGRTZXJpZXNMYXlvdXRCeTtcbiAgZGF0YXNldEluZGV4PzogbnVtYmVyO1xuICBkYXRhPzogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgWmxldmVsPzogMDtcbiAgej86IG51bWJlcjtcbiAgY2VudGVyPzogb2JqZWN0O1xuICByYWRpdXM/OiBudW1iZXIgfCBzdHJpbmcgfCBhbnlbXTtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLXBpZV0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnY29uZmlnJyxcbiAgICAnaWQnLFxuICAgICduYW1lJyxcbiAgICAnY29sb3InLFxuICAgICdkYXRhJyxcblxuICAgICdhbmltYXRpb24nLFxuICAgICdhbmltYXRpb25UaHJlc2hvbGQnLFxuICAgICdhbmltYXRpb25EdXJhdGlvbicsXG4gICAgJ2FuaW1hdGlvbkVhc2luZycsXG4gICAgJ2FuaW1hdGlvbkRlbGF5JyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUnLFxuICAgICdhbmltYXRpb25FYXNpbmdVcGRhdGUnLFxuICAgICdhbmltYXRpb25EZWxheVVwZGF0ZScsXG4gICAgJ3Rvb2x0aXAnLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUZFNlcmllc0RpcmVjdGl2ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNQaWVDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNQaWVDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIElUZFBpZVNlcmllcyB7XG4gIEBJbnB1dCgpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCkgaG92ZXJBbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhvdmVyT2Zmc2V0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHNlbGVjdGVkTW9kZTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCkgc2VsZWN0ZWRPZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgY2xvY2t3aXNlOiBib29sZWFuO1xuICBASW5wdXQoKSBzdGFydEFuZ2xlOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1pbkFuZ2xlOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1pblNob3dMYWJlbEFuZ2xlOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJvc2VUeXBlOiBib29sZWFuIHwgc3RyaW5nO1xuICBASW5wdXQoKSBhdm9pZExhYmVsT3ZlcmxhcDogYm9vbGVhbjtcbiAgQElucHV0KCkgc3RpbGxTaG93WmVyb1N1bTogYm9vbGVhbjtcbiAgQElucHV0KCkgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsTGluZTogb2JqZWN0O1xuICBASW5wdXQoKSBsYWJlbDogYW55O1xuICBASW5wdXQoKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCkgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuICBASW5wdXQoKSBzZXJpZXNMYXlvdXRCeTogVGRTZXJpZXNMYXlvdXRCeTtcbiAgQElucHV0KCkgZGF0YXNldEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCkgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgpIHo6IG51bWJlcjtcbiAgQElucHV0KCkgY2VudGVyOiBvYmplY3Q7XG4gIEBJbnB1dCgpIHJhZGl1czogbnVtYmVyIHwgc3RyaW5nIHwgYW55W107XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigncGllJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBsZWdlbmRIb3Zlckxpbms6IHRoaXMubGVnZW5kSG92ZXJMaW5rLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBzZWxlY3RlZE1vZGU6IHRoaXMuc2VsZWN0ZWRNb2RlLFxuICAgICAgc2VsZWN0ZWRPZmZzZXQ6IHRoaXMuc2VsZWN0ZWRPZmZzZXQsXG4gICAgICBjbG9ja3dpc2U6IHRoaXMuY2xvY2t3aXNlLFxuICAgICAgc3RhcnRBbmdsZTogdGhpcy5zdGFydEFuZ2xlLFxuICAgICAgbWluQW5nbGU6IHRoaXMubWluQW5nbGUsXG4gICAgICBtaW5TaG93TGFiZWxBbmdsZTogdGhpcy5taW5TaG93TGFiZWxBbmdsZSxcbiAgICAgIHJvc2VUeXBlOiB0aGlzLnJvc2VUeXBlLFxuICAgICAgYXZvaWRMYWJlbE92ZXJsYXA6IHRoaXMuYXZvaWRMYWJlbE92ZXJsYXAsXG4gICAgICBzdGlsbFNob3daZXJvU3VtOiB0aGlzLnN0aWxsU2hvd1plcm9TdW0sXG4gICAgICBjdXJzb3I6IHRoaXMuY3Vyc29yLFxuICAgICAgbGFiZWxMaW5lOiB0aGlzLmxhYmVsTGluZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIGNlbnRlcjogdGhpcy5jZW50ZXIsXG4gICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==