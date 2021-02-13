/**
 * @fileoverview added by tsickle
 * Generated from: map.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesDirective, } from '@covalent/echarts/base';
/**
 * @record
 */
export function ITdMapScaleLimit() { }
if (false) {
    /** @type {?|undefined} */
    ITdMapScaleLimit.prototype.min;
    /** @type {?|undefined} */
    ITdMapScaleLimit.prototype.max;
}
/**
 * @record
 */
export function ITdMapItemStyle() { }
if (false) {
    /** @type {?|undefined} */
    ITdMapItemStyle.prototype.areaColor;
    /** @type {?|undefined} */
    ITdMapItemStyle.prototype.emphasis;
}
/**
 * @record
 */
export function ITdMapSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdMapSeries.prototype.map;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.roam;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.center;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.aspectScale;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.boudingCoords;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.zoom;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.scaleLimit;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.nameMap;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.selectedMode;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.label;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.zLevel;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.z;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.left;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.top;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.right;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.bottom;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.layoutCenter;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.layoutSize;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.geoIndex;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.mapValueCalculation;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.showLegendSymbol;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.seriesLayoutBy;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.data;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.markPoint;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.markLine;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.markArea;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.silent;
}
export class TdChartSeriesMapComponent extends TdSeriesDirective {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('map', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            map: this.map,
            roam: this.roam,
            center: this.center,
            aspectScale: this.aspectScale,
            boudingCoords: this.boudingCoords,
            zoom: this.zoom,
            scaleLimit: this.scaleLimit,
            nameMap: this.nameMap,
            selectedMode: this.selectedMode,
            label: this.label,
            itemStyle: this.itemStyle,
            zLevel: this.zLevel,
            z: this.z,
            left: this.left,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            layoutCenter: this.layoutCenter,
            layoutSize: this.layoutSize,
            geoIndex: this.geoIndex,
            mapValueCalculation: this.mapValueCalculation,
            showLegendSymbol: this.showLegendSymbol,
            seriesLayoutBy: this.seriesLayoutBy,
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            silent: this.silent,
        };
    }
}
TdChartSeriesMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-map]',
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
                        () => TdChartSeriesMapComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesMapComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesMapComponent.propDecorators = {
    map: [{ type: Input }],
    roam: [{ type: Input }],
    center: [{ type: Input }],
    aspectScale: [{ type: Input }],
    boudingCoords: [{ type: Input }],
    zoom: [{ type: Input }],
    scaleLimit: [{ type: Input }],
    nameMap: [{ type: Input }],
    selectedMode: [{ type: Input }],
    label: [{ type: Input }],
    itemStyle: [{ type: Input }],
    zLevel: [{ type: Input }],
    z: [{ type: Input }],
    left: [{ type: Input }],
    top: [{ type: Input }],
    right: [{ type: Input }],
    bottom: [{ type: Input }],
    layoutCenter: [{ type: Input }],
    layoutSize: [{ type: Input }],
    geoIndex: [{ type: Input }],
    mapValueCalculation: [{ type: Input }],
    showLegendSymbol: [{ type: Input }],
    seriesLayoutBy: [{ type: Input }],
    markPoint: [{ type: Input }],
    markLine: [{ type: Input }],
    markArea: [{ type: Input }],
    silent: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.map;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.roam;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.center;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.aspectScale;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.boudingCoords;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.zoom;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.scaleLimit;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.nameMap;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.selectedMode;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.label;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.itemStyle;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.zLevel;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.z;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.left;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.top;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.right;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.bottom;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.layoutCenter;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.layoutSize;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.geoIndex;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.mapValueCalculation;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.showLegendSymbol;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.seriesLayoutBy;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.markPoint;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.markLine;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.markArea;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.silent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vZWNoYXJ0cy9tYXAvIiwic291cmNlcyI6WyJtYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFDTCxxQkFBcUIsRUFPckIsaUJBQWlCLEdBQ2xCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLaEMsc0NBR0M7OztJQUZDLCtCQUFhOztJQUNiLCtCQUFhOzs7OztBQUdmLHFDQUdDOzs7SUFGQyxvQ0FBeUI7O0lBQ3pCLG1DQUF3Qjs7Ozs7QUFHMUIsa0NBNkJDOzs7SUE1QkMsMkJBQWE7O0lBQ2IsNEJBQWU7O0lBQ2YsOEJBQWtCOztJQUNsQixtQ0FBcUI7O0lBQ3JCLHFDQUFzQjs7SUFDdEIsNEJBQWM7O0lBQ2Qsa0NBQThCOztJQUM5QiwrQkFBaUI7O0lBQ2pCLG9DQUFnQzs7SUFDaEMsNkJBQWlCOztJQUNqQixpQ0FBNEI7O0lBQzVCLDhCQUFnQjs7SUFDaEIseUJBQVc7O0lBQ1gsNEJBQXVCOztJQUN2QiwyQkFBc0I7O0lBQ3RCLDZCQUF3Qjs7SUFDeEIsOEJBQXlCOztJQUN6QixvQ0FBcUI7O0lBQ3JCLGtDQUFtQjs7SUFDbkIsZ0NBQWtCOztJQUNsQiwyQ0FBNEM7O0lBQzVDLHdDQUEyQjs7SUFDM0Isc0NBQXdCOztJQUN4Qiw0QkFBYTs7SUFDYixpQ0FBeUI7O0lBQ3pCLGdDQUF1Qjs7SUFDdkIsZ0NBQXVCOztJQUN2Qiw4QkFBaUI7O0FBK0JuQixNQUFNLE9BQU8seUJBQTBCLFNBQVEsaUJBQWlCOzs7O0lBNkI5RCxZQUFZLGVBQXNDO1FBQ2hELEtBQUssQ0FBQyxLQUFLLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFP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OEI7O0lBQzlCLDBDQUFnQzs7SUFDaEMsMkNBQWlDOztJQUNqQyxpREFBNkI7O0lBQzdCLCtDQUEyQjs7SUFDM0IsNkNBQTBCOztJQUMxQix3REFBb0Q7O0lBQ3BELHFEQUFtQzs7SUFDbkMsbURBQWdDOztJQUNoQyw4Q0FBaUM7O0lBQ2pDLDZDQUErQjs7SUFDL0IsNkNBQStCOztJQUMvQiwyQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkTWFya1BvaW50LFxuICBJVGRNYXJrTGluZSxcbiAgSVRkTWFya0FyZWEsXG4gIElUZFNlcmllcyxcbiAgSVRkTGFiZWwsXG4gIFRkU2VyaWVzRGlyZWN0aXZlLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IHR5cGUgVGRNYXBWYWx1ZUNhbGN1bGF0aW9uID0gJ3N1bScgfCAnYXZlcmFnZScgfCAnbWF4JyB8ICdtaW4nO1xuZXhwb3J0IHR5cGUgVGRNYXBTZXJpZXNMYXlvdXRCeSA9ICdjb2x1bW4nIHwgJ3Jvdyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTWFwU2NhbGVMaW1pdCB7XG4gIG1pbj86IG51bWJlcjtcbiAgbWF4PzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZE1hcEl0ZW1TdHlsZSB7XG4gIGFyZWFDb2xvcj86IElUZEl0ZW1TdHlsZTtcbiAgZW1waGFzaXM/OiBJVGRJdGVtU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTWFwU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzIHtcbiAgbWFwPzogc3RyaW5nO1xuICByb2FtPzogYm9vbGVhbjtcbiAgY2VudGVyPzogbnVtYmVyW107XG4gIGFzcGVjdFNjYWxlPzogbnVtYmVyO1xuICBib3VkaW5nQ29vcmRzPzogYW55W107XG4gIHpvb20/OiBudW1iZXI7XG4gIHNjYWxlTGltaXQ/OiBJVGRNYXBTY2FsZUxpbWl0O1xuICBuYW1lTWFwPzogb2JqZWN0O1xuICBzZWxlY3RlZE1vZGU/OiBib29sZWFuIHwgc3RyaW5nO1xuICBsYWJlbD86IElUZExhYmVsO1xuICBpdGVtU3R5bGU/OiBJVGRNYXBJdGVtU3R5bGU7XG4gIHpMZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgbGVmdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVtYmVyO1xuICBsYXlvdXRDZW50ZXI/OiBhbnlbXTtcbiAgbGF5b3V0U2l6ZT86IGFueVtdO1xuICBnZW9JbmRleD86IG51bWJlcjtcbiAgbWFwVmFsdWVDYWxjdWxhdGlvbj86IFRkTWFwVmFsdWVDYWxjdWxhdGlvbjtcbiAgc2hvd0xlZ2VuZFN5bWJvbD86IGJvb2xlYW47XG4gIHNlcmllc0xheW91dEJ5Pzogc3RyaW5nO1xuICBkYXRhPzogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLW1hcF0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnY29uZmlnJyxcbiAgICAnaWQnLFxuICAgICduYW1lJyxcbiAgICAnY29sb3InLFxuICAgICdkYXRhJyxcblxuICAgICdhbmltYXRpb24nLFxuICAgICdhbmltYXRpb25UaHJlc2hvbGQnLFxuICAgICdhbmltYXRpb25EdXJhdGlvbicsXG4gICAgJ2FuaW1hdGlvbkVhc2luZycsXG4gICAgJ2FuaW1hdGlvbkRlbGF5JyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUnLFxuICAgICdhbmltYXRpb25FYXNpbmdVcGRhdGUnLFxuICAgICdhbmltYXRpb25EZWxheVVwZGF0ZScsXG4gICAgJ3Rvb2x0aXAnLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUZFNlcmllc0RpcmVjdGl2ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNNYXBDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNNYXBDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIElUZE1hcFNlcmllcyB7XG4gIEBJbnB1dCgpIG1hcDogc3RyaW5nO1xuICBASW5wdXQoKSByb2FtOiBib29sZWFuO1xuICBASW5wdXQoKSBjZW50ZXI6IG51bWJlcltdO1xuICBASW5wdXQoKSBhc3BlY3RTY2FsZTogbnVtYmVyO1xuICBASW5wdXQoKSBib3VkaW5nQ29vcmRzOiBhbnlbXTtcbiAgQElucHV0KCkgem9vbTogbnVtYmVyO1xuICBASW5wdXQoKSBzY2FsZUxpbWl0OiBJVGRNYXBTY2FsZUxpbWl0O1xuICBASW5wdXQoKSBuYW1lTWFwOiBvYmplY3Q7XG4gIEBJbnB1dCgpIHNlbGVjdGVkTW9kZTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoKSBpdGVtU3R5bGU6IElUZE1hcEl0ZW1TdHlsZTtcbiAgQElucHV0KCkgekxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgpIHo6IG51bWJlcjtcbiAgQElucHV0KCkgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGxheW91dENlbnRlcjogYW55W107XG4gIEBJbnB1dCgpIGxheW91dFNpemU6IGFueVtdO1xuICBASW5wdXQoKSBnZW9JbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBtYXBWYWx1ZUNhbGN1bGF0aW9uOiBUZE1hcFZhbHVlQ2FsY3VsYXRpb247XG4gIEBJbnB1dCgpIHNob3dMZWdlbmRTeW1ib2w6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlcmllc0xheW91dEJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCkgc2lsZW50OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ21hcCcsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIHJvYW06IHRoaXMucm9hbSxcbiAgICAgIGNlbnRlcjogdGhpcy5jZW50ZXIsXG4gICAgICBhc3BlY3RTY2FsZTogdGhpcy5hc3BlY3RTY2FsZSxcbiAgICAgIGJvdWRpbmdDb29yZHM6IHRoaXMuYm91ZGluZ0Nvb3JkcyxcbiAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgIHNjYWxlTGltaXQ6IHRoaXMuc2NhbGVMaW1pdCxcbiAgICAgIG5hbWVNYXA6IHRoaXMubmFtZU1hcCxcbiAgICAgIHNlbGVjdGVkTW9kZTogdGhpcy5zZWxlY3RlZE1vZGUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICB6TGV2ZWw6IHRoaXMuekxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIGxheW91dENlbnRlcjogdGhpcy5sYXlvdXRDZW50ZXIsXG4gICAgICBsYXlvdXRTaXplOiB0aGlzLmxheW91dFNpemUsXG4gICAgICBnZW9JbmRleDogdGhpcy5nZW9JbmRleCxcbiAgICAgIG1hcFZhbHVlQ2FsY3VsYXRpb246IHRoaXMubWFwVmFsdWVDYWxjdWxhdGlvbixcbiAgICAgIHNob3dMZWdlbmRTeW1ib2w6IHRoaXMuc2hvd0xlZ2VuZFN5bWJvbCxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgbWFya1BvaW50OiB0aGlzLm1hcmtQb2ludCxcbiAgICAgIG1hcmtMaW5lOiB0aGlzLm1hcmtMaW5lLFxuICAgICAgbWFya0FyZWE6IHRoaXMubWFya0FyZWEsXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==