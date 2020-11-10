/**
 * @fileoverview added by tsickle
 * Generated from: treemap.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesDirective, } from '@covalent/echarts/base';
/**
 * ECHART OPTION DOCS
 * https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-treemap
 *
 * @record
 */
export function ITdTreemapEmphasisLineStyle() { }
if (false) {
    /** @type {?|undefined} */
    ITdTreemapEmphasisLineStyle.prototype.color;
    /** @type {?|undefined} */
    ITdTreemapEmphasisLineStyle.prototype.width;
    /** @type {?|undefined} */
    ITdTreemapEmphasisLineStyle.prototype.curveness;
}
/**
 * @record
 */
export function ITdTreemapEmphasis() { }
if (false) {
    /** @type {?} */
    ITdTreemapEmphasis.prototype.lineStyle;
}
/**
 * @record
 */
export function ITdTreemapUpperLabel() { }
if (false) {
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.show;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.position;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.distance;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.rotate;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.offset;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.formatter;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.color;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.fontStyle;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.fontWeight;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.fontFamily;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.fontSize;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.align;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.verticalAlign;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.lineHeight;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.backgroundColor;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.borderColor;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.borderWidth;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.borderRadius;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.padding;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.shadowColor;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.shadowBlur;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.shadowOffsetX;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.shadowOffsetY;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.width;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.height;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.textBorderColor;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.textBorderWidth;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.textShadowColor;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.textShadowBlur;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.textShadowOffsetX;
    /** @type {?|undefined} */
    ITdTreemapUpperLabel.prototype.textShadowOffsetY;
    /** @type {?} */
    ITdTreemapUpperLabel.prototype.rich;
    /** @type {?} */
    ITdTreemapUpperLabel.prototype.ellipsis;
}
/**
 * @record
 */
export function ITdTreemapBreadcrumb() { }
if (false) {
    /** @type {?|undefined} */
    ITdTreemapBreadcrumb.prototype.show;
    /** @type {?|undefined} */
    ITdTreemapBreadcrumb.prototype.left;
    /** @type {?|undefined} */
    ITdTreemapBreadcrumb.prototype.top;
    /** @type {?|undefined} */
    ITdTreemapBreadcrumb.prototype.right;
    /** @type {?|undefined} */
    ITdTreemapBreadcrumb.prototype.bottom;
    /** @type {?|undefined} */
    ITdTreemapBreadcrumb.prototype.height;
    /** @type {?|undefined} */
    ITdTreemapBreadcrumb.prototype.emptyItemWidth;
    /** @type {?|undefined} */
    ITdTreemapBreadcrumb.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdTreemapBreadcrumb.prototype.emphasis;
}
/**
 * @record
 */
function ITdTreemapSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.zlevel;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.z;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.left;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.top;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.right;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.bottom;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.width;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.height;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.squareRatio;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.leafDepth;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.drillDownIcon;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.roam;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.nodeClick;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.zoomToNodeRatio;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.levels;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.silent;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.visualDimension;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.visualMin;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.visualMax;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.colorAlpha;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.colorSaturation;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.colorMappingBy;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.visibleMin;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.childrenVisibleMin;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.label;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.upperLabel;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.breadcrumb;
    /** @type {?|undefined} */
    ITdTreemapSeries.prototype.emphasis;
    /** @type {?} */
    ITdTreemapSeries.prototype.data;
}
export class TdChartSeriesTreemapComponent extends TdSeriesDirective {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('treemap', _optionsService);
        this.config = {};
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
            squareRatio: this.squareRatio,
            leafDepth: this.leafDepth,
            drillDownIcon: this.drillDownIcon,
            roam: this.roam,
            nodeClick: this.nodeClick,
            zoomToNodeRatio: this.zoomToNodeRatio,
            levels: this.levels,
            silent: this.silent,
            visualDimension: this.visualDimension,
            visualMin: this.visualMin,
            visualMax: this.visualMax,
            colorAlpha: this.colorAlpha,
            colorSaturation: this.colorSaturation,
            colorMappingBy: this.colorMappingBy,
            visibleMin: this.visibleMin,
            childrenVisibleMin: this.childrenVisibleMin,
            itemStyle: this.itemStyle,
            label: this.label,
            upperLabel: this.upperLabel,
            breadcrumb: this.breadcrumb,
            emphasis: this.emphasis,
        };
    }
}
TdChartSeriesTreemapComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-treemap]',
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
                        () => TdChartSeriesTreemapComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesTreemapComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesTreemapComponent.propDecorators = {
    config: [{ type: Input }],
    id: [{ type: Input }],
    name: [{ type: Input }],
    data: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }],
    left: [{ type: Input }],
    top: [{ type: Input }],
    right: [{ type: Input }],
    bottom: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    squareRatio: [{ type: Input }],
    leafDepth: [{ type: Input }],
    drillDownIcon: [{ type: Input }],
    roam: [{ type: Input }],
    nodeClick: [{ type: Input }],
    zoomToNodeRatio: [{ type: Input }],
    levels: [{ type: Input }],
    silent: [{ type: Input }],
    visualDimension: [{ type: Input }],
    visualMin: [{ type: Input }],
    visualMax: [{ type: Input }],
    colorAlpha: [{ type: Input }],
    colorSaturation: [{ type: Input }],
    colorMappingBy: [{ type: Input }],
    visibleMin: [{ type: Input }],
    childrenVisibleMin: [{ type: Input }],
    itemStyle: [{ type: Input }],
    label: [{ type: Input }],
    upperLabel: [{ type: Input }],
    breadcrumb: [{ type: Input }],
    emphasis: [{ type: Input }],
    tooltip: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.config;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.id;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.name;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.data;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.zlevel;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.z;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.left;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.top;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.right;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.bottom;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.width;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.height;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.squareRatio;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.leafDepth;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.drillDownIcon;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.roam;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.nodeClick;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.zoomToNodeRatio;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.levels;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.silent;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.visualDimension;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.visualMin;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.visualMax;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.colorAlpha;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.colorSaturation;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.colorMappingBy;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.visibleMin;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.childrenVisibleMin;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.itemStyle;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.label;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.upperLabel;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.breadcrumb;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.emphasis;
    /** @type {?} */
    TdChartSeriesTreemapComponent.prototype.tooltip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vZWNoYXJ0cy90cmVlbWFwL3RyZWVtYXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFDTCxxQkFBcUIsRUFLckIsaUJBQWlCLEdBR2xCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7QUFRaEMsaURBSUM7OztJQUhDLDRDQUFZOztJQUNaLDRDQUFlOztJQUNmLGdEQUFtQjs7Ozs7QUFHckIsd0NBRUM7OztJQURDLHVDQUF1Qzs7Ozs7QUFHekMsMENBa0NDOzs7SUFqQ0Msb0NBQWU7O0lBQ2Ysd0NBQTBCOztJQUMxQix3Q0FBMkI7O0lBQzNCLHNDQUF5Qjs7SUFDekIsc0NBQWU7O0lBQ2YseUNBQW1COztJQUNuQixxQ0FBWTs7SUFDWix5Q0FBbUI7O0lBQ25CLDBDQUFvQjs7SUFDcEIsMENBQW9COztJQUNwQix3Q0FBMkI7O0lBQzNCLHFDQUFlOztJQUNmLDZDQUF1Qjs7SUFDdkIsMENBQTZCOztJQUM3QiwrQ0FBc0I7O0lBQ3RCLDJDQUFxQjs7SUFDckIsMkNBQThCOztJQUM5Qiw0Q0FBK0I7O0lBQy9CLHVDQUF5Qjs7SUFDekIsMkNBQXFCOztJQUNyQiwwQ0FBNkI7O0lBQzdCLDZDQUFnQzs7SUFDaEMsNkNBQWdDOztJQUNoQyxxQ0FBd0I7O0lBQ3hCLHNDQUF5Qjs7SUFDekIsK0NBQXlCOztJQUN6QiwrQ0FBa0M7O0lBQ2xDLCtDQUF5Qjs7SUFDekIsOENBQWlDOztJQUNqQyxpREFBb0M7O0lBQ3BDLGlEQUFvQzs7SUFDcEMsb0NBQVU7O0lBQ1Ysd0NBQWM7Ozs7O0FBR2hCLDBDQVVDOzs7SUFUQyxvQ0FBZTs7SUFDZixvQ0FBdUI7O0lBQ3ZCLG1DQUFzQjs7SUFDdEIscUNBQXdCOztJQUN4QixzQ0FBeUI7O0lBQ3pCLHNDQUF5Qjs7SUFDekIsOENBQWlDOztJQUNqQyx5Q0FBeUI7O0lBQ3pCLHdDQUE4Qjs7Ozs7QUFHaEMsK0JBK0JDOzs7SUE5QkMsa0NBQWdCOztJQUNoQiw2QkFBVzs7SUFDWCxnQ0FBdUI7O0lBQ3ZCLCtCQUFzQjs7SUFDdEIsaUNBQXdCOztJQUN4QixrQ0FBeUI7O0lBQ3pCLGlDQUF3Qjs7SUFDeEIsa0NBQXlCOztJQUN6Qix1Q0FBOEI7O0lBQzlCLHFDQUE0Qjs7SUFDNUIseUNBQXVCOztJQUN2QixnQ0FBd0I7O0lBQ3hCLHFDQUE2Qjs7SUFDN0IsMkNBQWtDOztJQUNsQyxrQ0FBZTs7SUFDZixrQ0FBaUI7O0lBQ2pCLDJDQUFrQzs7SUFDbEMscUNBQTRCOztJQUM1QixxQ0FBNEI7O0lBQzVCLHNDQUFtQjs7SUFDbkIsMkNBQWtDOztJQUNsQywwQ0FBd0I7O0lBQ3hCLHNDQUE2Qjs7SUFDN0IsOENBQXFDOztJQUNyQyxxQ0FBeUI7O0lBQ3pCLGlDQUFpQjs7SUFDakIsc0NBQWtDOztJQUNsQyxzQ0FBa0M7O0lBQ2xDLG9DQUE4Qjs7SUFDOUIsZ0NBQVk7O0FBK0JkLE1BQU0sT0FBTyw2QkFBOEIsU0FBUSxpQkFBaUI7Ozs7SUFvQ2xFLFlBQVksZUFBc0M7UUFDaEQsS0FBSyxDQUFDLFNBQVMsRUFBRSxlQUFlLENBQUMsQ0FBQztRQXBDM0IsV0FBTSxHQUFRLEVBQUUsQ0FBQztJQXFDMUIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0MsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtTQUN4QixDQUFDO0lBQ0osQ0FBQzs7O1lBcEdGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsTUFBTSxFQUFFO29CQUNOLFFBQVE7b0JBQ1IsSUFBSTtvQkFDSixNQUFNO29CQUNOLE9BQU87b0JBQ1AsTUFBTTtvQkFFTixXQUFXO29CQUNYLG9CQUFvQjtvQkFDcEIsbUJBQW1CO29CQUNuQixpQkFBaUI7b0JBQ2pCLGdCQUFnQjtvQkFDaEIseUJBQXlCO29CQUN6Qix1QkFBdUI7b0JBQ3ZCLHNCQUFzQjtvQkFDdEIsU0FBUztpQkFDVjtnQkFDRCxTQUFTLEVBQUU7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozt3QkFBQyxHQUFHLEVBQUUsQ0FBQyw2QkFBNkIsRUFBQztxQkFDN0Q7aUJBQ0Y7YUFDRjs7OztZQXRJQyxxQkFBcUI7OztxQkF3SXBCLEtBQUs7aUJBQ0wsS0FBSzttQkFDTCxLQUFLO21CQUNMLEtBQUs7cUJBQ0wsS0FBSztnQkFDTCxLQUFLO21CQUNMLEtBQUs7a0JBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSzs4QkFDTCxLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLO2lDQUNMLEtBQUs7d0JBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3NCQUNMLEtBQUs7Ozs7SUFqQ04sK0NBQTBCOztJQUMxQiwyQ0FBb0I7O0lBQ3BCLDZDQUFzQjs7SUFDdEIsNkNBQW1COztJQUNuQiwrQ0FBd0I7O0lBQ3hCLDBDQUFtQjs7SUFDbkIsNkNBQStCOztJQUMvQiw0Q0FBOEI7O0lBQzlCLDhDQUFnQzs7SUFDaEMsK0NBQWlDOztJQUNqQyw4Q0FBZ0M7O0lBQ2hDLCtDQUFpQzs7SUFDakMsb0RBQXNDOztJQUN0QyxrREFBb0M7O0lBQ3BDLHNEQUErQjs7SUFDL0IsNkNBQWdDOztJQUNoQyxrREFBcUM7O0lBQ3JDLHdEQUEwQzs7SUFDMUMsK0NBQXVCOztJQUN2QiwrQ0FBeUI7O0lBQ3pCLHdEQUEwQzs7SUFDMUMsa0RBQW9DOztJQUNwQyxrREFBb0M7O0lBQ3BDLG1EQUEyQjs7SUFDM0Isd0RBQTBDOztJQUMxQyx1REFBZ0M7O0lBQ2hDLG1EQUFxQzs7SUFDckMsMkRBQTZDOztJQUM3QyxrREFBaUM7O0lBQ2pDLDhDQUF5Qjs7SUFDekIsbURBQTBDOztJQUMxQyxtREFBMEM7O0lBQzFDLGlEQUFzQzs7SUFDdEMsZ0RBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZFNlcmllc1Rvb2x0aXAsXG4gIElUZExhYmVsLFxuICBJVGRTZXJpZXMsXG4gIFRkU2VyaWVzRGlyZWN0aXZlLFxuICBJVGRFbXBoYXNpcyxcbiAgSVRkU2hhZG93LFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuLyoqXG4gKiBFQ0hBUlQgT1BUSU9OIERPQ1NcbiAqIGh0dHBzOi8vZWNvbWZlLmdpdGh1Yi5pby9lY2hhcnRzLWV4YW1wbGVzL3B1YmxpYy9pbmRleC5odG1sI2NoYXJ0LXR5cGUtdHJlZW1hcFxuICpcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBFbXBoYXNpc0xpbmVTdHlsZSBleHRlbmRzIElUZFNoYWRvdyB7XG4gIGNvbG9yPzogYW55O1xuICB3aWR0aD86IG51bWJlcjtcbiAgY3VydmVuZXNzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBFbXBoYXNpcyBleHRlbmRzIElUZEVtcGhhc2lzIHtcbiAgbGluZVN0eWxlOiBJVGRUcmVlbWFwRW1waGFzaXNMaW5lU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcFVwcGVyTGFiZWwge1xuICBzaG93PzogYm9vbGVhbjtcbiAgcG9zaXRpb24/OiBzdHJpbmcgfCBhbnlbXTtcbiAgZGlzdGFuY2U/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJvdGF0ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgb2Zmc2V0PzogYW55W107XG4gIGZvcm1hdHRlcj86IHN0cmluZztcbiAgY29sb3I/OiBhbnk7XG4gIGZvbnRTdHlsZT86IHN0cmluZztcbiAgZm9udFdlaWdodD86IHN0cmluZztcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGFsaWduPzogc3RyaW5nO1xuICB2ZXJ0aWNhbEFsaWduPzogc3RyaW5nO1xuICBsaW5lSGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBhbnk7XG4gIGJvcmRlckNvbG9yPzogc3RyaW5nO1xuICBib3JkZXJXaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm9yZGVyUmFkaXVzPzogc3RyaW5nIHwgbnVtYmVyO1xuICBwYWRkaW5nPzogbnVtYmVyIHwgYW55W107XG4gIHNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICBzaGFkb3dCbHVyPzogc3RyaW5nIHwgbnVtYmVyO1xuICBzaGFkb3dPZmZzZXRYPzogc3RyaW5nIHwgbnVtYmVyO1xuICBzaGFkb3dPZmZzZXRZPzogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0ZXh0Qm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIHRleHRCb3JkZXJXaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dFNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICB0ZXh0U2hhZG93Qmx1cj86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dFNoYWRvd09mZnNldFg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRleHRTaGFkb3dPZmZzZXRZPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWNoOiBhbnk7XG4gIGVsbGlwc2lzOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcEJyZWFkY3J1bWIge1xuICBzaG93PzogYm9vbGVhbjtcbiAgbGVmdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGVtcHR5SXRlbVdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkVHJlZW1hcEVtcGhhc2lzO1xufVxuXG5pbnRlcmZhY2UgSVRkVHJlZW1hcFNlcmllcyBleHRlbmRzIElUZFNlcmllcyB7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgbGVmdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBzcXVhcmVSYXRpbz86IHN0cmluZyB8IG51bWJlcjtcbiAgbGVhZkRlcHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBkcmlsbERvd25JY29uPzogc3RyaW5nO1xuICByb2FtPzogYm9vbGVhbiB8IHN0cmluZztcbiAgbm9kZUNsaWNrPzogYm9vbGVhbiB8IHN0cmluZztcbiAgem9vbVRvTm9kZVJhdGlvPzogc3RyaW5nIHwgbnVtYmVyO1xuICBsZXZlbHM/OiBhbnlbXTtcbiAgc2lsZW50PzogYm9vbGVhbjtcbiAgdmlzdWFsRGltZW5zaW9uPzogc3RyaW5nIHwgbnVtYmVyO1xuICB2aXN1YWxNaW4/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHZpc3VhbE1heD86IHN0cmluZyB8IG51bWJlcjtcbiAgY29sb3JBbHBoYT86IGFueVtdO1xuICBjb2xvclNhdHVyYXRpb24/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGNvbG9yTWFwcGluZ0J5Pzogc3RyaW5nO1xuICB2aXNpYmxlTWluPzogc3RyaW5nIHwgbnVtYmVyO1xuICBjaGlsZHJlblZpc2libGVNaW4/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgdXBwZXJMYWJlbD86IElUZFRyZWVtYXBVcHBlckxhYmVsO1xuICBicmVhZGNydW1iPzogSVRkVHJlZW1hcEJyZWFkY3J1bWI7XG4gIGVtcGhhc2lzPzogSVRkVHJlZW1hcEVtcGhhc2lzO1xuICBkYXRhOiBhbnlbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLXRyZWVtYXBdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbXG4gICAgJ2NvbmZpZycsXG4gICAgJ2lkJyxcbiAgICAnbmFtZScsXG4gICAgJ2NvbG9yJyxcbiAgICAnZGF0YScsXG5cbiAgICAnYW5pbWF0aW9uJyxcbiAgICAnYW5pbWF0aW9uVGhyZXNob2xkJyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb24nLFxuICAgICdhbmltYXRpb25FYXNpbmcnLFxuICAgICdhbmltYXRpb25EZWxheScsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uVXBkYXRlJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nVXBkYXRlJyxcbiAgICAnYW5pbWF0aW9uRGVsYXlVcGRhdGUnLFxuICAgICd0b29sdGlwJyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGRTZXJpZXNEaXJlY3RpdmUsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzVHJlZW1hcENvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1RyZWVtYXBDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIElUZFRyZWVtYXBTZXJpZXMge1xuICBASW5wdXQoKSBjb25maWc6IGFueSA9IHt9O1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgpIHo6IG51bWJlcjtcbiAgQElucHV0KCkgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzcXVhcmVSYXRpbzogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBsZWFmRGVwdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgZHJpbGxEb3duSWNvbjogc3RyaW5nO1xuICBASW5wdXQoKSByb2FtOiBib29sZWFuIHwgc3RyaW5nO1xuICBASW5wdXQoKSBub2RlQ2xpY2s6IGJvb2xlYW4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHpvb21Ub05vZGVSYXRpbzogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBsZXZlbHM6IGFueVtdO1xuICBASW5wdXQoKSBzaWxlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHZpc3VhbERpbWVuc2lvbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSB2aXN1YWxNaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgdmlzdWFsTWF4OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGNvbG9yQWxwaGE6IGFueVtdO1xuICBASW5wdXQoKSBjb2xvclNhdHVyYXRpb246IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgY29sb3JNYXBwaW5nQnk6IHN0cmluZztcbiAgQElucHV0KCkgdmlzaWJsZU1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBjaGlsZHJlblZpc2libGVNaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCkgdXBwZXJMYWJlbDogSVRkVHJlZW1hcFVwcGVyTGFiZWw7XG4gIEBJbnB1dCgpIGJyZWFkY3J1bWI6IElUZFRyZWVtYXBCcmVhZGNydW1iO1xuICBASW5wdXQoKSBlbXBoYXNpczogSVRkVHJlZW1hcEVtcGhhc2lzO1xuICBASW5wdXQoKSB0b29sdGlwOiBJVGRTZXJpZXNUb29sdGlwO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3RyZWVtYXAnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgc3F1YXJlUmF0aW86IHRoaXMuc3F1YXJlUmF0aW8sXG4gICAgICBsZWFmRGVwdGg6IHRoaXMubGVhZkRlcHRoLFxuICAgICAgZHJpbGxEb3duSWNvbjogdGhpcy5kcmlsbERvd25JY29uLFxuICAgICAgcm9hbTogdGhpcy5yb2FtLFxuICAgICAgbm9kZUNsaWNrOiB0aGlzLm5vZGVDbGljayxcbiAgICAgIHpvb21Ub05vZGVSYXRpbzogdGhpcy56b29tVG9Ob2RlUmF0aW8sXG4gICAgICBsZXZlbHM6IHRoaXMubGV2ZWxzLFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICAgIHZpc3VhbERpbWVuc2lvbjogdGhpcy52aXN1YWxEaW1lbnNpb24sXG4gICAgICB2aXN1YWxNaW46IHRoaXMudmlzdWFsTWluLFxuICAgICAgdmlzdWFsTWF4OiB0aGlzLnZpc3VhbE1heCxcbiAgICAgIGNvbG9yQWxwaGE6IHRoaXMuY29sb3JBbHBoYSxcbiAgICAgIGNvbG9yU2F0dXJhdGlvbjogdGhpcy5jb2xvclNhdHVyYXRpb24sXG4gICAgICBjb2xvck1hcHBpbmdCeTogdGhpcy5jb2xvck1hcHBpbmdCeSxcbiAgICAgIHZpc2libGVNaW46IHRoaXMudmlzaWJsZU1pbixcbiAgICAgIGNoaWxkcmVuVmlzaWJsZU1pbjogdGhpcy5jaGlsZHJlblZpc2libGVNaW4sXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICB1cHBlckxhYmVsOiB0aGlzLnVwcGVyTGFiZWwsXG4gICAgICBicmVhZGNydW1iOiB0aGlzLmJyZWFkY3J1bWIsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICB9O1xuICB9XG59XG4iXX0=