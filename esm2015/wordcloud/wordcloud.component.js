/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent } from '@covalent/echarts/base';
/**
 * @record
 */
export function ITdWordcloudTextStyle() { }
if (false) {
    /** @type {?|undefined} */
    ITdWordcloudTextStyle.prototype.normal;
    /** @type {?|undefined} */
    ITdWordcloudTextStyle.prototype.emphasis;
}
/**
 * @record
 */
export function ITdWordCloudData() { }
if (false) {
    /** @type {?} */
    ITdWordCloudData.prototype.name;
    /** @type {?} */
    ITdWordCloudData.prototype.value;
    /** @type {?|undefined} */
    ITdWordCloudData.prototype.textStyle;
}
/**
 * @record
 */
export function ITdWordcloudSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.data;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.shape;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.left;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.top;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.width;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.height;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.right;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.bottom;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.sizeRange;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.rotationRange;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.rotationStep;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.gridSize;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.drawOutOfBound;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.textStyle;
}
export class TdChartSeriesWordcloudComponent extends TdSeriesComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('wordCloud', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            shape: this.shape,
            left: this.left,
            top: this.top,
            width: this.width,
            height: this.height,
            right: this.right,
            bottom: this.bottom,
            sizeRange: this.sizeRange,
            rotationRange: this.rotationRange,
            rotationStep: this.rotationStep,
            gridSize: this.gridSize,
            drawOutOfBound: this.drawOutOfBound,
            textStyle: this.textStyle,
        };
    }
}
TdChartSeriesWordcloudComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-wordCloud]',
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
                        () => TdChartSeriesWordcloudComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesWordcloudComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesWordcloudComponent.propDecorators = {
    data: [{ type: Input }],
    shape: [{ type: Input }],
    left: [{ type: Input }],
    top: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    right: [{ type: Input }],
    bottom: [{ type: Input }],
    sizeRange: [{ type: Input }],
    rotationRange: [{ type: Input }],
    rotationStep: [{ type: Input }],
    gridSize: [{ type: Input }],
    drawOutOfBound: [{ type: Input }],
    textStyle: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.data;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.shape;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.left;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.top;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.width;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.height;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.right;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.bottom;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.sizeRange;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.rotationRange;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.rotationStep;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.gridSize;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.drawOutOfBound;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.textStyle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZGNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3dvcmRjbG91ZC8iLCJzb3VyY2VzIjpbIndvcmRjbG91ZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQUUscUJBQXFCLEVBQWEsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQVc3RiwyQ0FVQzs7O0lBVEMsdUNBSUU7O0lBQ0YseUNBR0U7Ozs7O0FBR0osc0NBSUM7OztJQUhDLGdDQUFhOztJQUNiLGlDQUFjOztJQUNkLHFDQUFrQzs7Ozs7QUFHcEMsd0NBZUM7OztJQWRDLGtDQUEwQjs7SUFDMUIsbUNBQXlCOztJQUN6QixrQ0FBdUI7O0lBQ3ZCLGlDQUFzQjs7SUFDdEIsbUNBQXdCOztJQUN4QixvQ0FBeUI7O0lBQ3pCLG1DQUF3Qjs7SUFDeEIsb0NBQXlCOztJQUN6Qix1Q0FBcUI7O0lBQ3JCLDJDQUF5Qjs7SUFDekIsMENBQXNCOztJQUN0QixzQ0FBa0I7O0lBQ2xCLDRDQUF5Qjs7SUFDekIsdUNBQWtDOztBQStCcEMsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGlCQUE4Qjs7OztJQWdCakYsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsV0FBVyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztJQUNKLENBQUM7OztZQWhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLE1BQU0sRUFBRTtvQkFDTixRQUFRO29CQUNSLElBQUk7b0JBQ0osTUFBTTtvQkFDTixPQUFPO29CQUNQLE1BQU07b0JBRU4sV0FBVztvQkFDWCxvQkFBb0I7b0JBQ3BCLG1CQUFtQjtvQkFDbkIsaUJBQWlCO29CQUNqQixnQkFBZ0I7b0JBQ2hCLHlCQUF5QjtvQkFDekIsdUJBQXVCO29CQUN2QixzQkFBc0I7b0JBQ3RCLFNBQVM7aUJBQ1Y7Z0JBQ0QsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVOzs7d0JBQUMsR0FBRyxFQUFFLENBQUMsK0JBQStCLEVBQUM7cUJBQy9EO2lCQUNGO2FBQ0Y7Ozs7WUF6RVEscUJBQXFCOzs7bUJBMkUzQixLQUFLO29CQUNMLEtBQUs7bUJBQ0wsS0FBSztrQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3dCQUNMLEtBQUs7Ozs7SUFiTiwrQ0FBa0M7O0lBQ2xDLGdEQUFpQzs7SUFDakMsK0NBQStCOztJQUMvQiw4Q0FBOEI7O0lBQzlCLGdEQUFnQzs7SUFDaEMsaURBQWlDOztJQUNqQyxnREFBZ0M7O0lBQ2hDLGlEQUFpQzs7SUFDakMsb0RBQTZCOztJQUM3Qix3REFBaUM7O0lBQ2pDLHVEQUE4Qjs7SUFDOUIsbURBQTBCOztJQUMxQix5REFBaUM7O0lBQ2pDLG9EQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSwgSVRkU2VyaWVzLCBUZFNlcmllc0NvbXBvbmVudCB9IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgdHlwZSBUZFdvcmRjbG91ZFNoYXBlID1cbiAgfCAnY2lyY2xlJ1xuICB8ICdjYXJkaW9pZCdcbiAgfCAnZGlhbW9uZCdcbiAgfCAndHJpYW5nbGUtZm9yd2FyZCdcbiAgfCAndHJpYW5nbGUnXG4gIHwgJ3BlbnRhZ29uJ1xuICB8ICdzdGFyJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRXb3JkY2xvdWRUZXh0U3R5bGUge1xuICBub3JtYWw/OiB7XG4gICAgZm9udEZhbWlseT86IHN0cmluZztcbiAgICBmb250V2VpZ2h0Pzogc3RyaW5nO1xuICAgIGNvbG9yPzogc3RyaW5nIHwgKCh4OiBhbnkpID0+IHN0cmluZyk7XG4gIH07XG4gIGVtcGhhc2lzPzoge1xuICAgIHNoYWRvd0JsdXI/OiBudW1iZXI7XG4gICAgc2hhZG93Q29sb3I/OiBzdHJpbmc7XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkV29yZENsb3VkRGF0YSB7XG4gIG5hbWU6IHN0cmluZztcbiAgdmFsdWU6IG51bWJlcjtcbiAgdGV4dFN0eWxlPzogSVRkV29yZGNsb3VkVGV4dFN0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFdvcmRjbG91ZFNlcmllcyBleHRlbmRzIElUZFNlcmllczwnd29yZENsb3VkJz4ge1xuICBkYXRhPzogSVRkV29yZENsb3VkRGF0YVtdO1xuICBzaGFwZT86IFRkV29yZGNsb3VkU2hhcGU7XG4gIGxlZnQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcD86IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgcmlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbT86IHN0cmluZyB8IG51bWJlcjtcbiAgc2l6ZVJhbmdlPzogbnVtYmVyW107XG4gIHJvdGF0aW9uUmFuZ2U/OiBudW1iZXJbXTtcbiAgcm90YXRpb25TdGVwPzogbnVtYmVyO1xuICBncmlkU2l6ZT86IG51bWJlcjtcbiAgZHJhd091dE9mQm91bmQ/OiBib29sZWFuO1xuICB0ZXh0U3R5bGU/OiBJVGRXb3JkY2xvdWRUZXh0U3R5bGU7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC13b3JkQ2xvdWRdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbXG4gICAgJ2NvbmZpZycsXG4gICAgJ2lkJyxcbiAgICAnbmFtZScsXG4gICAgJ2NvbG9yJyxcbiAgICAnZGF0YScsXG5cbiAgICAnYW5pbWF0aW9uJyxcbiAgICAnYW5pbWF0aW9uVGhyZXNob2xkJyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb24nLFxuICAgICdhbmltYXRpb25FYXNpbmcnLFxuICAgICdhbmltYXRpb25EZWxheScsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uVXBkYXRlJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nVXBkYXRlJyxcbiAgICAnYW5pbWF0aW9uRGVsYXlVcGRhdGUnLFxuICAgICd0b29sdGlwJyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzV29yZGNsb3VkQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzV29yZGNsb3VkQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J3dvcmRDbG91ZCc+IGltcGxlbWVudHMgSVRkV29yZGNsb3VkU2VyaWVzIHtcbiAgQElucHV0KCkgZGF0YTogSVRkV29yZENsb3VkRGF0YVtdO1xuICBASW5wdXQoKSBzaGFwZTogVGRXb3JkY2xvdWRTaGFwZTtcbiAgQElucHV0KCkgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzaXplUmFuZ2U6IG51bWJlcltdO1xuICBASW5wdXQoKSByb3RhdGlvblJhbmdlOiBudW1iZXJbXTtcbiAgQElucHV0KCkgcm90YXRpb25TdGVwOiBudW1iZXI7XG4gIEBJbnB1dCgpIGdyaWRTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRyYXdPdXRPZkJvdW5kOiBib29sZWFuO1xuICBASW5wdXQoKSB0ZXh0U3R5bGU6IElUZFdvcmRjbG91ZFRleHRTdHlsZTtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd3b3JkQ2xvdWQnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoYXBlOiB0aGlzLnNoYXBlLFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHNpemVSYW5nZTogdGhpcy5zaXplUmFuZ2UsXG4gICAgICByb3RhdGlvblJhbmdlOiB0aGlzLnJvdGF0aW9uUmFuZ2UsXG4gICAgICByb3RhdGlvblN0ZXA6IHRoaXMucm90YXRpb25TdGVwLFxuICAgICAgZ3JpZFNpemU6IHRoaXMuZ3JpZFNpemUsXG4gICAgICBkcmF3T3V0T2ZCb3VuZDogdGhpcy5kcmF3T3V0T2ZCb3VuZCxcbiAgICAgIHRleHRTdHlsZTogdGhpcy50ZXh0U3R5bGUsXG4gICAgfTtcbiAgfVxufVxuIl19