/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent, } from '@covalent/echarts/base';
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
var TdChartSeriesTreemapComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdChartSeriesTreemapComponent, _super);
    function TdChartSeriesTreemapComponent(_optionsService) {
        var _this = _super.call(this, 'treemap', _optionsService) || this;
        _this.config = {};
        return _this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesTreemapComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
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
    };
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
                            provide: TdSeriesComponent,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdChartSeriesTreemapComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesTreemapComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesTreemapComponent.propDecorators = {
        config: [{ type: Input, args: ['config',] }],
        id: [{ type: Input, args: ['id',] }],
        name: [{ type: Input, args: ['name',] }],
        data: [{ type: Input, args: ['data',] }],
        zlevel: [{ type: Input, args: ['zlevel',] }],
        z: [{ type: Input, args: ['z',] }],
        left: [{ type: Input, args: ['left',] }],
        top: [{ type: Input, args: ['top',] }],
        right: [{ type: Input, args: ['right',] }],
        bottom: [{ type: Input, args: ['bottom',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }],
        squareRatio: [{ type: Input, args: ['squareRatio',] }],
        leafDepth: [{ type: Input, args: ['leafDepth',] }],
        drillDownIcon: [{ type: Input, args: ['drillDownIcon',] }],
        roam: [{ type: Input, args: ['roam',] }],
        nodeClick: [{ type: Input, args: ['nodeClick',] }],
        zoomToNodeRatio: [{ type: Input, args: ['zoomToNodeRatio',] }],
        levels: [{ type: Input, args: ['levels',] }],
        silent: [{ type: Input, args: ['silent',] }],
        visualDimension: [{ type: Input, args: ['visualDimension',] }],
        visualMin: [{ type: Input, args: ['visualMin',] }],
        visualMax: [{ type: Input, args: ['visualMax',] }],
        colorAlpha: [{ type: Input, args: ['colorAlpha',] }],
        colorSaturation: [{ type: Input, args: ['colorSaturation',] }],
        colorMappingBy: [{ type: Input, args: ['colorMappingBy',] }],
        visibleMin: [{ type: Input, args: ['visibleMin',] }],
        childrenVisibleMin: [{ type: Input, args: ['childrenVisibleMin',] }],
        itemStyle: [{ type: Input, args: ['itemStyle',] }],
        label: [{ type: Input, args: ['label',] }],
        upperLabel: [{ type: Input, args: ['upperLabel',] }],
        breadcrumb: [{ type: Input, args: ['breadcrumb',] }],
        emphasis: [{ type: Input, args: ['emphasis',] }],
        tooltip: [{ type: Input, args: ['tooltip',] }]
    };
    return TdChartSeriesTreemapComponent;
}(TdSeriesComponent));
export { TdChartSeriesTreemapComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlbWFwLyIsInNvdXJjZXMiOlsidHJlZW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUNMLHFCQUFxQixFQUtyQixpQkFBaUIsR0FHbEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQVFoQyxpREFJQzs7O0lBSEMsNENBQVk7O0lBQ1osNENBQWU7O0lBQ2YsZ0RBQW1COzs7OztBQUdyQix3Q0FFQzs7O0lBREMsdUNBQXVDOzs7OztBQUd6QywwQ0FrQ0M7OztJQWpDQyxvQ0FBZTs7SUFDZix3Q0FBMEI7O0lBQzFCLHdDQUEyQjs7SUFDM0Isc0NBQXlCOztJQUN6QixzQ0FBZTs7SUFDZix5Q0FBbUI7O0lBQ25CLHFDQUFZOztJQUNaLHlDQUFtQjs7SUFDbkIsMENBQW9COztJQUNwQiwwQ0FBb0I7O0lBQ3BCLHdDQUEyQjs7SUFDM0IscUNBQWU7O0lBQ2YsNkNBQXVCOztJQUN2QiwwQ0FBNkI7O0lBQzdCLCtDQUFzQjs7SUFDdEIsMkNBQXFCOztJQUNyQiwyQ0FBOEI7O0lBQzlCLDRDQUErQjs7SUFDL0IsdUNBQXlCOztJQUN6QiwyQ0FBcUI7O0lBQ3JCLDBDQUE2Qjs7SUFDN0IsNkNBQWdDOztJQUNoQyw2Q0FBZ0M7O0lBQ2hDLHFDQUF3Qjs7SUFDeEIsc0NBQXlCOztJQUN6QiwrQ0FBeUI7O0lBQ3pCLCtDQUFrQzs7SUFDbEMsK0NBQXlCOztJQUN6Qiw4Q0FBaUM7O0lBQ2pDLGlEQUFvQzs7SUFDcEMsaURBQW9DOztJQUNwQyxvQ0FBVTs7SUFDVix3Q0FBYzs7Ozs7QUFHaEIsMENBVUM7OztJQVRDLG9DQUFlOztJQUNmLG9DQUF1Qjs7SUFDdkIsbUNBQXNCOztJQUN0QixxQ0FBd0I7O0lBQ3hCLHNDQUF5Qjs7SUFDekIsc0NBQXlCOztJQUN6Qiw4Q0FBaUM7O0lBQ2pDLHlDQUF5Qjs7SUFDekIsd0NBQThCOzs7OztBQUdoQywrQkErQkM7OztJQTlCQyxrQ0FBZ0I7O0lBQ2hCLDZCQUFXOztJQUNYLGdDQUF1Qjs7SUFDdkIsK0JBQXNCOztJQUN0QixpQ0FBd0I7O0lBQ3hCLGtDQUF5Qjs7SUFDekIsaUNBQXdCOztJQUN4QixrQ0FBeUI7O0lBQ3pCLHVDQUE4Qjs7SUFDOUIscUNBQTRCOztJQUM1Qix5Q0FBdUI7O0lBQ3ZCLGdDQUF3Qjs7SUFDeEIscUNBQTZCOztJQUM3QiwyQ0FBa0M7O0lBQ2xDLGtDQUFlOztJQUNmLGtDQUFpQjs7SUFDakIsMkNBQWtDOztJQUNsQyxxQ0FBNEI7O0lBQzVCLHFDQUE0Qjs7SUFDNUIsc0NBQW1COztJQUNuQiwyQ0FBa0M7O0lBQ2xDLDBDQUF3Qjs7SUFDeEIsc0NBQTZCOztJQUM3Qiw4Q0FBcUM7O0lBQ3JDLHFDQUF5Qjs7SUFDekIsaUNBQWlCOztJQUNqQixzQ0FBa0M7O0lBQ2xDLHNDQUFrQzs7SUFDbEMsb0NBQThCOztJQUM5QixnQ0FBWTs7QUFHZDtJQTRCbUQseURBQTRCO0lBb0M3RSx1Q0FBWSxlQUFzQztRQUFsRCxZQUNFLGtCQUFNLFNBQVMsRUFBRSxlQUFlLENBQUMsU0FDbEM7UUFyQ2dCLFlBQU0sR0FBUSxFQUFFLENBQUM7O0lBcUNsQyxDQUFDOzs7O0lBRUQsaURBQVM7OztJQUFUO1FBQ0UsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQztJQUNKLENBQUM7O2dCQXBHRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtvQkFDdkMsUUFBUSxFQUFFLEVBQUU7b0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLE1BQU0sRUFBRTt3QkFDTixRQUFRO3dCQUNSLElBQUk7d0JBQ0osTUFBTTt3QkFDTixPQUFPO3dCQUNQLE1BQU07d0JBRU4sV0FBVzt3QkFDWCxvQkFBb0I7d0JBQ3BCLG1CQUFtQjt3QkFDbkIsaUJBQWlCO3dCQUNqQixnQkFBZ0I7d0JBQ2hCLHlCQUF5Qjt3QkFDekIsdUJBQXVCO3dCQUN2QixzQkFBc0I7d0JBQ3RCLFNBQVM7cUJBQ1Y7b0JBQ0QsU0FBUyxFQUFFO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcsRUFBRSxVQUFVOzs7NEJBQUMsY0FBTSxPQUFBLDZCQUE2QixFQUE3QixDQUE2QixFQUFDO3lCQUM3RDtxQkFDRjtpQkFDRjs7OztnQkF0SUMscUJBQXFCOzs7eUJBd0lwQixLQUFLLFNBQUMsUUFBUTtxQkFDZCxLQUFLLFNBQUMsSUFBSTt1QkFDVixLQUFLLFNBQUMsTUFBTTt1QkFDWixLQUFLLFNBQUMsTUFBTTt5QkFDWixLQUFLLFNBQUMsUUFBUTtvQkFDZCxLQUFLLFNBQUMsR0FBRzt1QkFDVCxLQUFLLFNBQUMsTUFBTTtzQkFDWixLQUFLLFNBQUMsS0FBSzt3QkFDWCxLQUFLLFNBQUMsT0FBTzt5QkFDYixLQUFLLFNBQUMsUUFBUTt3QkFDZCxLQUFLLFNBQUMsT0FBTzt5QkFDYixLQUFLLFNBQUMsUUFBUTs4QkFDZCxLQUFLLFNBQUMsYUFBYTs0QkFDbkIsS0FBSyxTQUFDLFdBQVc7Z0NBQ2pCLEtBQUssU0FBQyxlQUFlO3VCQUNyQixLQUFLLFNBQUMsTUFBTTs0QkFDWixLQUFLLFNBQUMsV0FBVztrQ0FDakIsS0FBSyxTQUFDLGlCQUFpQjt5QkFDdkIsS0FBSyxTQUFDLFFBQVE7eUJBQ2QsS0FBSyxTQUFDLFFBQVE7a0NBQ2QsS0FBSyxTQUFDLGlCQUFpQjs0QkFDdkIsS0FBSyxTQUFDLFdBQVc7NEJBQ2pCLEtBQUssU0FBQyxXQUFXOzZCQUNqQixLQUFLLFNBQUMsWUFBWTtrQ0FDbEIsS0FBSyxTQUFDLGlCQUFpQjtpQ0FDdkIsS0FBSyxTQUFDLGdCQUFnQjs2QkFDdEIsS0FBSyxTQUFDLFlBQVk7cUNBQ2xCLEtBQUssU0FBQyxvQkFBb0I7NEJBQzFCLEtBQUssU0FBQyxXQUFXO3dCQUNqQixLQUFLLFNBQUMsT0FBTzs2QkFDYixLQUFLLFNBQUMsWUFBWTs2QkFDbEIsS0FBSyxTQUFDLFlBQVk7MkJBQ2xCLEtBQUssU0FBQyxVQUFVOzBCQUNoQixLQUFLLFNBQUMsU0FBUzs7SUF1Q2xCLG9DQUFDO0NBQUEsQUFyR0QsQ0E0Qm1ELGlCQUFpQixHQXlFbkU7U0F6RVksNkJBQTZCOzs7SUFDeEMsK0NBQWtDOztJQUNsQywyQ0FBd0I7O0lBQ3hCLDZDQUE0Qjs7SUFDNUIsNkNBQXlCOztJQUN6QiwrQ0FBZ0M7O0lBQ2hDLDBDQUFzQjs7SUFDdEIsNkNBQXFDOztJQUNyQyw0Q0FBbUM7O0lBQ25DLDhDQUF1Qzs7SUFDdkMsK0NBQXlDOztJQUN6Qyw4Q0FBdUM7O0lBQ3ZDLCtDQUF5Qzs7SUFDekMsb0RBQW1EOztJQUNuRCxrREFBK0M7O0lBQy9DLHNEQUE4Qzs7SUFDOUMsNkNBQXNDOztJQUN0QyxrREFBZ0Q7O0lBQ2hELHdEQUEyRDs7SUFDM0QsK0NBQStCOztJQUMvQiwrQ0FBaUM7O0lBQ2pDLHdEQUEyRDs7SUFDM0Qsa0RBQStDOztJQUMvQyxrREFBK0M7O0lBQy9DLG1EQUF1Qzs7SUFDdkMsd0RBQTJEOztJQUMzRCx1REFBZ0Q7O0lBQ2hELG1EQUFpRDs7SUFDakQsMkRBQWlFOztJQUNqRSxrREFBNEM7O0lBQzVDLDhDQUFnQzs7SUFDaEMsbURBQXNEOztJQUN0RCxtREFBc0Q7O0lBQ3RELGlEQUFnRDs7SUFDaEQsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZFNlcmllc1Rvb2x0aXAsXG4gIElUZExhYmVsLFxuICBJVGRTZXJpZXMsXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxuICBJVGRFbXBoYXNpcyxcbiAgSVRkU2hhZG93LFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuLyoqXG4gKiBFQ0hBUlQgT1BUSU9OIERPQ1NcbiAqIGh0dHBzOi8vZWNvbWZlLmdpdGh1Yi5pby9lY2hhcnRzLWV4YW1wbGVzL3B1YmxpYy9pbmRleC5odG1sI2NoYXJ0LXR5cGUtdHJlZW1hcFxuICpcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBFbXBoYXNpc0xpbmVTdHlsZSBleHRlbmRzIElUZFNoYWRvdyB7XG4gIGNvbG9yPzogYW55O1xuICB3aWR0aD86IG51bWJlcjtcbiAgY3VydmVuZXNzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBFbXBoYXNpcyBleHRlbmRzIElUZEVtcGhhc2lzIHtcbiAgbGluZVN0eWxlOiBJVGRUcmVlbWFwRW1waGFzaXNMaW5lU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcFVwcGVyTGFiZWwge1xuICBzaG93PzogYm9vbGVhbjtcbiAgcG9zaXRpb24/OiBzdHJpbmcgfCBhbnlbXTtcbiAgZGlzdGFuY2U/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJvdGF0ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgb2Zmc2V0PzogYW55W107XG4gIGZvcm1hdHRlcj86IHN0cmluZztcbiAgY29sb3I/OiBhbnk7XG4gIGZvbnRTdHlsZT86IHN0cmluZztcbiAgZm9udFdlaWdodD86IHN0cmluZztcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGFsaWduPzogc3RyaW5nO1xuICB2ZXJ0aWNhbEFsaWduPzogc3RyaW5nO1xuICBsaW5lSGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBhbnk7XG4gIGJvcmRlckNvbG9yPzogc3RyaW5nO1xuICBib3JkZXJXaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm9yZGVyUmFkaXVzPzogc3RyaW5nIHwgbnVtYmVyO1xuICBwYWRkaW5nPzogbnVtYmVyIHwgYW55W107XG4gIHNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICBzaGFkb3dCbHVyPzogc3RyaW5nIHwgbnVtYmVyO1xuICBzaGFkb3dPZmZzZXRYPzogc3RyaW5nIHwgbnVtYmVyO1xuICBzaGFkb3dPZmZzZXRZPzogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0ZXh0Qm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIHRleHRCb3JkZXJXaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dFNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICB0ZXh0U2hhZG93Qmx1cj86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dFNoYWRvd09mZnNldFg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRleHRTaGFkb3dPZmZzZXRZPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWNoOiBhbnk7XG4gIGVsbGlwc2lzOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcEJyZWFkY3J1bWIge1xuICBzaG93PzogYm9vbGVhbjtcbiAgbGVmdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGVtcHR5SXRlbVdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkVHJlZW1hcEVtcGhhc2lzO1xufVxuXG5pbnRlcmZhY2UgSVRkVHJlZW1hcFNlcmllcyBleHRlbmRzIElUZFNlcmllczwndHJlZW1hcCc+IHtcbiAgemxldmVsPzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHNxdWFyZVJhdGlvPzogc3RyaW5nIHwgbnVtYmVyO1xuICBsZWFmRGVwdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGRyaWxsRG93bkljb24/OiBzdHJpbmc7XG4gIHJvYW0/OiBib29sZWFuIHwgc3RyaW5nO1xuICBub2RlQ2xpY2s/OiBib29sZWFuIHwgc3RyaW5nO1xuICB6b29tVG9Ob2RlUmF0aW8/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGxldmVscz86IGFueVtdO1xuICBzaWxlbnQ/OiBib29sZWFuO1xuICB2aXN1YWxEaW1lbnNpb24/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHZpc3VhbE1pbj86IHN0cmluZyB8IG51bWJlcjtcbiAgdmlzdWFsTWF4Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBjb2xvckFscGhhPzogYW55W107XG4gIGNvbG9yU2F0dXJhdGlvbj86IHN0cmluZyB8IG51bWJlcjtcbiAgY29sb3JNYXBwaW5nQnk/OiBzdHJpbmc7XG4gIHZpc2libGVNaW4/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGNoaWxkcmVuVmlzaWJsZU1pbj86IHN0cmluZyB8IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsYWJlbD86IElUZExhYmVsO1xuICB1cHBlckxhYmVsPzogSVRkVHJlZW1hcFVwcGVyTGFiZWw7XG4gIGJyZWFkY3J1bWI/OiBJVGRUcmVlbWFwQnJlYWRjcnVtYjtcbiAgZW1waGFzaXM/OiBJVGRUcmVlbWFwRW1waGFzaXM7XG4gIGRhdGE6IGFueVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtdHJlZW1hcF0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnY29uZmlnJyxcbiAgICAnaWQnLFxuICAgICduYW1lJyxcbiAgICAnY29sb3InLFxuICAgICdkYXRhJyxcblxuICAgICdhbmltYXRpb24nLFxuICAgICdhbmltYXRpb25UaHJlc2hvbGQnLFxuICAgICdhbmltYXRpb25EdXJhdGlvbicsXG4gICAgJ2FuaW1hdGlvbkVhc2luZycsXG4gICAgJ2FuaW1hdGlvbkRlbGF5JyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUnLFxuICAgICdhbmltYXRpb25FYXNpbmdVcGRhdGUnLFxuICAgICdhbmltYXRpb25EZWxheVVwZGF0ZScsXG4gICAgJ3Rvb2x0aXAnLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNUcmVlbWFwQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzVHJlZW1hcENvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCd0cmVlbWFwJz4gaW1wbGVtZW50cyBJVGRUcmVlbWFwU2VyaWVzIHtcbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2RhdGEnKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcbiAgQElucHV0KCdsZWZ0JykgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3RvcCcpIHRvcDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3JpZ2h0JykgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdib3R0b20nKSBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd3aWR0aCcpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnc3F1YXJlUmF0aW8nKSBzcXVhcmVSYXRpbzogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2xlYWZEZXB0aCcpIGxlYWZEZXB0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2RyaWxsRG93bkljb24nKSBkcmlsbERvd25JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgncm9hbScpIHJvYW06IGJvb2xlYW4gfCBzdHJpbmc7XG4gIEBJbnB1dCgnbm9kZUNsaWNrJykgbm9kZUNsaWNrOiBib29sZWFuIHwgc3RyaW5nO1xuICBASW5wdXQoJ3pvb21Ub05vZGVSYXRpbycpIHpvb21Ub05vZGVSYXRpbzogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2xldmVscycpIGxldmVsczogYW55W107XG4gIEBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuICBASW5wdXQoJ3Zpc3VhbERpbWVuc2lvbicpIHZpc3VhbERpbWVuc2lvbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3Zpc3VhbE1pbicpIHZpc3VhbE1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3Zpc3VhbE1heCcpIHZpc3VhbE1heDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2NvbG9yQWxwaGEnKSBjb2xvckFscGhhOiBhbnlbXTtcbiAgQElucHV0KCdjb2xvclNhdHVyYXRpb24nKSBjb2xvclNhdHVyYXRpb246IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdjb2xvck1hcHBpbmdCeScpIGNvbG9yTWFwcGluZ0J5OiBzdHJpbmc7XG4gIEBJbnB1dCgndmlzaWJsZU1pbicpIHZpc2libGVNaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdjaGlsZHJlblZpc2libGVNaW4nKSBjaGlsZHJlblZpc2libGVNaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCd1cHBlckxhYmVsJykgdXBwZXJMYWJlbDogSVRkVHJlZW1hcFVwcGVyTGFiZWw7XG4gIEBJbnB1dCgnYnJlYWRjcnVtYicpIGJyZWFkY3J1bWI6IElUZFRyZWVtYXBCcmVhZGNydW1iO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZFRyZWVtYXBFbXBoYXNpcztcbiAgQElucHV0KCd0b29sdGlwJykgdG9vbHRpcDogSVRkU2VyaWVzVG9vbHRpcDtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd0cmVlbWFwJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHNxdWFyZVJhdGlvOiB0aGlzLnNxdWFyZVJhdGlvLFxuICAgICAgbGVhZkRlcHRoOiB0aGlzLmxlYWZEZXB0aCxcbiAgICAgIGRyaWxsRG93bkljb246IHRoaXMuZHJpbGxEb3duSWNvbixcbiAgICAgIHJvYW06IHRoaXMucm9hbSxcbiAgICAgIG5vZGVDbGljazogdGhpcy5ub2RlQ2xpY2ssXG4gICAgICB6b29tVG9Ob2RlUmF0aW86IHRoaXMuem9vbVRvTm9kZVJhdGlvLFxuICAgICAgbGV2ZWxzOiB0aGlzLmxldmVscyxcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgICB2aXN1YWxEaW1lbnNpb246IHRoaXMudmlzdWFsRGltZW5zaW9uLFxuICAgICAgdmlzdWFsTWluOiB0aGlzLnZpc3VhbE1pbixcbiAgICAgIHZpc3VhbE1heDogdGhpcy52aXN1YWxNYXgsXG4gICAgICBjb2xvckFscGhhOiB0aGlzLmNvbG9yQWxwaGEsXG4gICAgICBjb2xvclNhdHVyYXRpb246IHRoaXMuY29sb3JTYXR1cmF0aW9uLFxuICAgICAgY29sb3JNYXBwaW5nQnk6IHRoaXMuY29sb3JNYXBwaW5nQnksXG4gICAgICB2aXNpYmxlTWluOiB0aGlzLnZpc2libGVNaW4sXG4gICAgICBjaGlsZHJlblZpc2libGVNaW46IHRoaXMuY2hpbGRyZW5WaXNpYmxlTWluLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgdXBwZXJMYWJlbDogdGhpcy51cHBlckxhYmVsLFxuICAgICAgYnJlYWRjcnVtYjogdGhpcy5icmVhZGNydW1iLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgfTtcbiAgfVxufVxuIl19