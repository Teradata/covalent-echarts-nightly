/**
 * @fileoverview added by tsickle
 * Generated from: wordcloud.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesDirective } from '@covalent/echarts/base';
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
export class TdChartSeriesWordcloudComponent extends TdSeriesDirective {
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
                        provide: TdSeriesDirective,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZGNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vZWNoYXJ0cy93b3JkY2xvdWQvIiwic291cmNlcyI6WyJ3b3JkY2xvdWQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFBRSxxQkFBcUIsRUFBYSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOzs7O0FBVzdGLDJDQVVDOzs7SUFUQyx1Q0FJRTs7SUFDRix5Q0FHRTs7Ozs7QUFHSixzQ0FJQzs7O0lBSEMsZ0NBQWE7O0lBQ2IsaUNBQWM7O0lBQ2QscUNBQWtDOzs7OztBQUdwQyx3Q0FlQzs7O0lBZEMsa0NBQTBCOztJQUMxQixtQ0FBeUI7O0lBQ3pCLGtDQUF1Qjs7SUFDdkIsaUNBQXNCOztJQUN0QixtQ0FBd0I7O0lBQ3hCLG9DQUF5Qjs7SUFDekIsbUNBQXdCOztJQUN4QixvQ0FBeUI7O0lBQ3pCLHVDQUFxQjs7SUFDckIsMkNBQXlCOztJQUN6QiwwQ0FBc0I7O0lBQ3RCLHNDQUFrQjs7SUFDbEIsNENBQXlCOztJQUN6Qix1Q0FBa0M7O0FBK0JwQyxNQUFNLE9BQU8sK0JBQWdDLFNBQVEsaUJBQWlCOzs7O0lBZ0JwRSxZQUFZLGVBQXNDO1FBQ2hELEtBQUssQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPO1lBQ0wsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDO0lBQ0osQ0FBQzs7O1lBaEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsTUFBTSxFQUFFO29CQUNOLFFBQVE7b0JBQ1IsSUFBSTtvQkFDSixNQUFNO29CQUNOLE9BQU87b0JBQ1AsTUFBTTtvQkFFTixXQUFXO29CQUNYLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFDdEIsU0FBUztpQkFDVjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQywrQkFBK0IsRUFBQztxQkFDL0Q7aUJBQ0Y7YUFDRjs7OztZQXpFUSxxQkFBcUI7OzttQkEyRTNCLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO2tCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7MkJBQ0wsS0FBSzt1QkFDTCxLQUFLOzZCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7OztJQWJOLCtDQUFrQzs7SUFDbEMsZ0RBQWlDOztJQUNqQywrQ0FBK0I7O0lBQy9CLDhDQUE4Qjs7SUFDOUIsZ0RBQWdDOztJQUNoQyxpREFBaUM7O0lBQ2pDLGdEQUFnQzs7SUFDaEMsaURBQWlDOztJQUNqQyxvREFBNkI7O0lBQzdCLHdEQUFpQzs7SUFDakMsdURBQThCOztJQUM5QixtREFBMEI7O0lBQzFCLHlEQUFpQzs7SUFDakMsb0RBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLCBJVGRTZXJpZXMsIFRkU2VyaWVzRGlyZWN0aXZlIH0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCB0eXBlIFRkV29yZGNsb3VkU2hhcGUgPVxuICB8ICdjaXJjbGUnXG4gIHwgJ2NhcmRpb2lkJ1xuICB8ICdkaWFtb25kJ1xuICB8ICd0cmlhbmdsZS1mb3J3YXJkJ1xuICB8ICd0cmlhbmdsZSdcbiAgfCAncGVudGFnb24nXG4gIHwgJ3N0YXInO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFdvcmRjbG91ZFRleHRTdHlsZSB7XG4gIG5vcm1hbD86IHtcbiAgICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICAgIGZvbnRXZWlnaHQ/OiBzdHJpbmc7XG4gICAgY29sb3I/OiBzdHJpbmcgfCAoKHg6IGFueSkgPT4gc3RyaW5nKTtcbiAgfTtcbiAgZW1waGFzaXM/OiB7XG4gICAgc2hhZG93Qmx1cj86IG51bWJlcjtcbiAgICBzaGFkb3dDb2xvcj86IHN0cmluZztcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRXb3JkQ2xvdWREYXRhIHtcbiAgbmFtZTogc3RyaW5nO1xuICB2YWx1ZTogbnVtYmVyO1xuICB0ZXh0U3R5bGU/OiBJVGRXb3JkY2xvdWRUZXh0U3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkV29yZGNsb3VkU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzIHtcbiAgZGF0YT86IElUZFdvcmRDbG91ZERhdGFbXTtcbiAgc2hhcGU/OiBUZFdvcmRjbG91ZFNoYXBlO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHNpemVSYW5nZT86IG51bWJlcltdO1xuICByb3RhdGlvblJhbmdlPzogbnVtYmVyW107XG4gIHJvdGF0aW9uU3RlcD86IG51bWJlcjtcbiAgZ3JpZFNpemU/OiBudW1iZXI7XG4gIGRyYXdPdXRPZkJvdW5kPzogYm9vbGVhbjtcbiAgdGV4dFN0eWxlPzogSVRkV29yZGNsb3VkVGV4dFN0eWxlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtd29yZENsb3VkXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdjb25maWcnLFxuICAgICdpZCcsXG4gICAgJ25hbWUnLFxuICAgICdjb2xvcicsXG4gICAgJ2RhdGEnLFxuXG4gICAgJ2FuaW1hdGlvbicsXG4gICAgJ2FuaW1hdGlvblRocmVzaG9sZCcsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nJyxcbiAgICAnYW5pbWF0aW9uRGVsYXknLFxuICAgICdhbmltYXRpb25EdXJhdGlvblVwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkVhc2luZ1VwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkRlbGF5VXBkYXRlJyxcbiAgICAndG9vbHRpcCcsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRkU2VyaWVzRGlyZWN0aXZlLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc1dvcmRjbG91ZENvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1dvcmRjbG91ZENvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzRGlyZWN0aXZlIGltcGxlbWVudHMgSVRkV29yZGNsb3VkU2VyaWVzIHtcbiAgQElucHV0KCkgZGF0YTogSVRkV29yZENsb3VkRGF0YVtdO1xuICBASW5wdXQoKSBzaGFwZTogVGRXb3JkY2xvdWRTaGFwZTtcbiAgQElucHV0KCkgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzaXplUmFuZ2U6IG51bWJlcltdO1xuICBASW5wdXQoKSByb3RhdGlvblJhbmdlOiBudW1iZXJbXTtcbiAgQElucHV0KCkgcm90YXRpb25TdGVwOiBudW1iZXI7XG4gIEBJbnB1dCgpIGdyaWRTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGRyYXdPdXRPZkJvdW5kOiBib29sZWFuO1xuICBASW5wdXQoKSB0ZXh0U3R5bGU6IElUZFdvcmRjbG91ZFRleHRTdHlsZTtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd3b3JkQ2xvdWQnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNoYXBlOiB0aGlzLnNoYXBlLFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHNpemVSYW5nZTogdGhpcy5zaXplUmFuZ2UsXG4gICAgICByb3RhdGlvblJhbmdlOiB0aGlzLnJvdGF0aW9uUmFuZ2UsXG4gICAgICByb3RhdGlvblN0ZXA6IHRoaXMucm90YXRpb25TdGVwLFxuICAgICAgZ3JpZFNpemU6IHRoaXMuZ3JpZFNpemUsXG4gICAgICBkcmF3T3V0T2ZCb3VuZDogdGhpcy5kcmF3T3V0T2ZCb3VuZCxcbiAgICAgIHRleHRTdHlsZTogdGhpcy50ZXh0U3R5bGUsXG4gICAgfTtcbiAgfVxufVxuIl19