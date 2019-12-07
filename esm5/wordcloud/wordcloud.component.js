/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
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
var TdChartSeriesWordcloudComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesWordcloudComponent, _super);
    function TdChartSeriesWordcloudComponent(_optionsService) {
        return _super.call(this, 'wordCloud', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesWordcloudComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
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
    };
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
                            function () { return TdChartSeriesWordcloudComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesWordcloudComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
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
    return TdChartSeriesWordcloudComponent;
}(TdSeriesComponent));
export { TdChartSeriesWordcloudComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29yZGNsb3VkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3dvcmRjbG91ZC8iLCJzb3VyY2VzIjpbIndvcmRjbG91ZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUFFLHFCQUFxQixFQUFhLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFXN0YsMkNBVUM7OztJQVRDLHVDQUlFOztJQUNGLHlDQUdFOzs7OztBQUdKLHNDQUlDOzs7SUFIQyxnQ0FBYTs7SUFDYixpQ0FBYzs7SUFDZCxxQ0FBa0M7Ozs7O0FBR3BDLHdDQWVDOzs7SUFkQyxrQ0FBMEI7O0lBQzFCLG1DQUF5Qjs7SUFDekIsa0NBQXVCOztJQUN2QixpQ0FBc0I7O0lBQ3RCLG1DQUF3Qjs7SUFDeEIsb0NBQXlCOztJQUN6QixtQ0FBd0I7O0lBQ3hCLG9DQUF5Qjs7SUFDekIsdUNBQXFCOztJQUNyQiwyQ0FBeUI7O0lBQ3pCLDBDQUFzQjs7SUFDdEIsc0NBQWtCOztJQUNsQiw0Q0FBeUI7O0lBQ3pCLHVDQUFrQzs7QUFHcEM7SUE0QnFELG1EQUE4QjtJQWdCakYseUNBQVksZUFBc0M7ZUFDaEQsa0JBQU0sV0FBVyxFQUFFLGVBQWUsQ0FBQztJQUNyQyxDQUFDOzs7O0lBRUQsbURBQVM7OztJQUFUO1FBQ0UsT0FBTztZQUNMLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7U0FDMUIsQ0FBQztJQUNKLENBQUM7O2dCQWhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMsUUFBUSxFQUFFLEVBQUU7b0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLE1BQU0sRUFBRTt3QkFDTixRQUFRO3dCQUNSLElBQUk7d0JBQ0osTUFBTTt3QkFDTixPQUFPO3dCQUNQLE1BQU07d0JBRU4sV0FBVzt3QkFDWCxvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLHlCQUF5Qjt3QkFDekIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLFNBQVM7cUJBQ1Y7b0JBQ0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLCtCQUErQixFQUEvQixDQUErQixFQUFDO3lCQUMvRDtxQkFDRjtpQkFDRjs7OztnQkF6RVEscUJBQXFCOzs7dUJBMkUzQixLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSztzQkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSztnQ0FDTCxLQUFLOytCQUNMLEtBQUs7MkJBQ0wsS0FBSztpQ0FDTCxLQUFLOzRCQUNMLEtBQUs7O0lBdUJSLHNDQUFDO0NBQUEsQUFqRUQsQ0E0QnFELGlCQUFpQixHQXFDckU7U0FyQ1ksK0JBQStCOzs7SUFDMUMsK0NBQWtDOztJQUNsQyxnREFBaUM7O0lBQ2pDLCtDQUErQjs7SUFDL0IsOENBQThCOztJQUM5QixnREFBZ0M7O0lBQ2hDLGlEQUFpQzs7SUFDakMsZ0RBQWdDOztJQUNoQyxpREFBaUM7O0lBQ2pDLG9EQUE2Qjs7SUFDN0Isd0RBQWlDOztJQUNqQyx1REFBOEI7O0lBQzlCLG1EQUEwQjs7SUFDMUIseURBQWlDOztJQUNqQyxvREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsIElUZFNlcmllcywgVGRTZXJpZXNDb21wb25lbnQgfSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IHR5cGUgVGRXb3JkY2xvdWRTaGFwZSA9XG4gIHwgJ2NpcmNsZSdcbiAgfCAnY2FyZGlvaWQnXG4gIHwgJ2RpYW1vbmQnXG4gIHwgJ3RyaWFuZ2xlLWZvcndhcmQnXG4gIHwgJ3RyaWFuZ2xlJ1xuICB8ICdwZW50YWdvbidcbiAgfCAnc3Rhcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkV29yZGNsb3VkVGV4dFN0eWxlIHtcbiAgbm9ybWFsPzoge1xuICAgIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gICAgZm9udFdlaWdodD86IHN0cmluZztcbiAgICBjb2xvcj86IHN0cmluZyB8ICgoeDogYW55KSA9PiBzdHJpbmcpO1xuICB9O1xuICBlbXBoYXNpcz86IHtcbiAgICBzaGFkb3dCbHVyPzogbnVtYmVyO1xuICAgIHNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFdvcmRDbG91ZERhdGEge1xuICBuYW1lOiBzdHJpbmc7XG4gIHZhbHVlOiBudW1iZXI7XG4gIHRleHRTdHlsZT86IElUZFdvcmRjbG91ZFRleHRTdHlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRXb3JkY2xvdWRTZXJpZXMgZXh0ZW5kcyBJVGRTZXJpZXM8J3dvcmRDbG91ZCc+IHtcbiAgZGF0YT86IElUZFdvcmRDbG91ZERhdGFbXTtcbiAgc2hhcGU/OiBUZFdvcmRjbG91ZFNoYXBlO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHNpemVSYW5nZT86IG51bWJlcltdO1xuICByb3RhdGlvblJhbmdlPzogbnVtYmVyW107XG4gIHJvdGF0aW9uU3RlcD86IG51bWJlcjtcbiAgZ3JpZFNpemU/OiBudW1iZXI7XG4gIGRyYXdPdXRPZkJvdW5kPzogYm9vbGVhbjtcbiAgdGV4dFN0eWxlPzogSVRkV29yZGNsb3VkVGV4dFN0eWxlO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtd29yZENsb3VkXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdjb25maWcnLFxuICAgICdpZCcsXG4gICAgJ25hbWUnLFxuICAgICdjb2xvcicsXG4gICAgJ2RhdGEnLFxuXG4gICAgJ2FuaW1hdGlvbicsXG4gICAgJ2FuaW1hdGlvblRocmVzaG9sZCcsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nJyxcbiAgICAnYW5pbWF0aW9uRGVsYXknLFxuICAgICdhbmltYXRpb25EdXJhdGlvblVwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkVhc2luZ1VwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkRlbGF5VXBkYXRlJyxcbiAgICAndG9vbHRpcCcsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc1dvcmRjbG91ZENvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1dvcmRjbG91ZENvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCd3b3JkQ2xvdWQnPiBpbXBsZW1lbnRzIElUZFdvcmRjbG91ZFNlcmllcyB7XG4gIEBJbnB1dCgpIGRhdGE6IElUZFdvcmRDbG91ZERhdGFbXTtcbiAgQElucHV0KCkgc2hhcGU6IFRkV29yZGNsb3VkU2hhcGU7XG4gIEBJbnB1dCgpIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc2l6ZVJhbmdlOiBudW1iZXJbXTtcbiAgQElucHV0KCkgcm90YXRpb25SYW5nZTogbnVtYmVyW107XG4gIEBJbnB1dCgpIHJvdGF0aW9uU3RlcDogbnVtYmVyO1xuICBASW5wdXQoKSBncmlkU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBkcmF3T3V0T2ZCb3VuZDogYm9vbGVhbjtcbiAgQElucHV0KCkgdGV4dFN0eWxlOiBJVGRXb3JkY2xvdWRUZXh0U3R5bGU7XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcignd29yZENsb3VkJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBzaGFwZTogdGhpcy5zaGFwZSxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICBzaXplUmFuZ2U6IHRoaXMuc2l6ZVJhbmdlLFxuICAgICAgcm90YXRpb25SYW5nZTogdGhpcy5yb3RhdGlvblJhbmdlLFxuICAgICAgcm90YXRpb25TdGVwOiB0aGlzLnJvdGF0aW9uU3RlcCxcbiAgICAgIGdyaWRTaXplOiB0aGlzLmdyaWRTaXplLFxuICAgICAgZHJhd091dE9mQm91bmQ6IHRoaXMuZHJhd091dE9mQm91bmQsXG4gICAgICB0ZXh0U3R5bGU6IHRoaXMudGV4dFN0eWxlLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==