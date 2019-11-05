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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlbWFwLyIsInNvdXJjZXMiOlsidHJlZW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUNMLHFCQUFxQixFQUtyQixpQkFBaUIsR0FHbEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQVFoQyxpREFJQzs7O0lBSEMsNENBQVk7O0lBQ1osNENBQWU7O0lBQ2YsZ0RBQW1COzs7OztBQUdyQix3Q0FFQzs7O0lBREMsdUNBQXVDOzs7OztBQUd6QywwQ0FrQ0M7OztJQWpDQyxvQ0FBZTs7SUFDZix3Q0FBMEI7O0lBQzFCLHdDQUEyQjs7SUFDM0Isc0NBQXlCOztJQUN6QixzQ0FBZTs7SUFDZix5Q0FBbUI7O0lBQ25CLHFDQUFZOztJQUNaLHlDQUFtQjs7SUFDbkIsMENBQW9COztJQUNwQiwwQ0FBb0I7O0lBQ3BCLHdDQUEyQjs7SUFDM0IscUNBQWU7O0lBQ2YsNkNBQXVCOztJQUN2QiwwQ0FBNkI7O0lBQzdCLCtDQUFzQjs7SUFDdEIsMkNBQXFCOztJQUNyQiwyQ0FBOEI7O0lBQzlCLDRDQUErQjs7SUFDL0IsdUNBQXlCOztJQUN6QiwyQ0FBcUI7O0lBQ3JCLDBDQUE2Qjs7SUFDN0IsNkNBQWdDOztJQUNoQyw2Q0FBZ0M7O0lBQ2hDLHFDQUF3Qjs7SUFDeEIsc0NBQXlCOztJQUN6QiwrQ0FBeUI7O0lBQ3pCLCtDQUFrQzs7SUFDbEMsK0NBQXlCOztJQUN6Qiw4Q0FBaUM7O0lBQ2pDLGlEQUFvQzs7SUFDcEMsaURBQW9DOztJQUNwQyxvQ0FBVTs7SUFDVix3Q0FBYzs7Ozs7QUFHaEIsMENBVUM7OztJQVRDLG9DQUFlOztJQUNmLG9DQUF1Qjs7SUFDdkIsbUNBQXNCOztJQUN0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Q3JDLHdEQUEwQzs7SUFDMUMsK0NBQXVCOztJQUN2QiwrQ0FBeUI7O0lBQ3pCLHdEQUEwQzs7SUFDMUMsa0RBQW9DOztJQUNwQyxrREFBb0M7O0lBQ3BDLG1EQUEyQjs7SUFDM0Isd0RBQTBDOztJQUMxQyx1REFBZ0M7O0lBQ2hDLG1EQUFxQzs7SUFDckMsMkRBQTZDOztJQUM3QyxrREFBaUM7O0lBQ2pDLDhDQUF5Qjs7SUFDekIsbURBQTBDOztJQUMxQyxtREFBMEM7O0lBQzFDLGlEQUFzQzs7SUFDdEMsZ0RBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZFNlcmllc1Rvb2x0aXAsXG4gIElUZExhYmVsLFxuICBJVGRTZXJpZXMsXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxuICBJVGRFbXBoYXNpcyxcbiAgSVRkU2hhZG93LFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuLyoqXG4gKiBFQ0hBUlQgT1BUSU9OIERPQ1NcbiAqIGh0dHBzOi8vZWNvbWZlLmdpdGh1Yi5pby9lY2hhcnRzLWV4YW1wbGVzL3B1YmxpYy9pbmRleC5odG1sI2NoYXJ0LXR5cGUtdHJlZW1hcFxuICpcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBFbXBoYXNpc0xpbmVTdHlsZSBleHRlbmRzIElUZFNoYWRvdyB7XG4gIGNvbG9yPzogYW55O1xuICB3aWR0aD86IG51bWJlcjtcbiAgY3VydmVuZXNzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBFbXBoYXNpcyBleHRlbmRzIElUZEVtcGhhc2lzIHtcbiAgbGluZVN0eWxlOiBJVGRUcmVlbWFwRW1waGFzaXNMaW5lU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcFVwcGVyTGFiZWwge1xuICBzaG93PzogYm9vbGVhbjtcbiAgcG9zaXRpb24/OiBzdHJpbmcgfCBhbnlbXTtcbiAgZGlzdGFuY2U/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJvdGF0ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgb2Zmc2V0PzogYW55W107XG4gIGZvcm1hdHRlcj86IHN0cmluZztcbiAgY29sb3I/OiBhbnk7XG4gIGZvbnRTdHlsZT86IHN0cmluZztcbiAgZm9udFdlaWdodD86IHN0cmluZztcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGFsaWduPzogc3RyaW5nO1xuICB2ZXJ0aWNhbEFsaWduPzogc3RyaW5nO1xuICBsaW5lSGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBhbnk7XG4gIGJvcmRlckNvbG9yPzogc3RyaW5nO1xuICBib3JkZXJXaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm9yZGVyUmFkaXVzPzogc3RyaW5nIHwgbnVtYmVyO1xuICBwYWRkaW5nPzogbnVtYmVyIHwgYW55W107XG4gIHNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICBzaGFkb3dCbHVyPzogc3RyaW5nIHwgbnVtYmVyO1xuICBzaGFkb3dPZmZzZXRYPzogc3RyaW5nIHwgbnVtYmVyO1xuICBzaGFkb3dPZmZzZXRZPzogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0ZXh0Qm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIHRleHRCb3JkZXJXaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dFNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICB0ZXh0U2hhZG93Qmx1cj86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dFNoYWRvd09mZnNldFg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRleHRTaGFkb3dPZmZzZXRZPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWNoOiBhbnk7XG4gIGVsbGlwc2lzOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcEJyZWFkY3J1bWIge1xuICBzaG93PzogYm9vbGVhbjtcbiAgbGVmdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGVtcHR5SXRlbVdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkVHJlZW1hcEVtcGhhc2lzO1xufVxuXG5pbnRlcmZhY2UgSVRkVHJlZW1hcFNlcmllcyBleHRlbmRzIElUZFNlcmllczwndHJlZW1hcCc+IHtcbiAgemxldmVsPzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHNxdWFyZVJhdGlvPzogc3RyaW5nIHwgbnVtYmVyO1xuICBsZWFmRGVwdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGRyaWxsRG93bkljb24/OiBzdHJpbmc7XG4gIHJvYW0/OiBib29sZWFuIHwgc3RyaW5nO1xuICBub2RlQ2xpY2s/OiBib29sZWFuIHwgc3RyaW5nO1xuICB6b29tVG9Ob2RlUmF0aW8/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGxldmVscz86IGFueVtdO1xuICBzaWxlbnQ/OiBib29sZWFuO1xuICB2aXN1YWxEaW1lbnNpb24/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHZpc3VhbE1pbj86IHN0cmluZyB8IG51bWJlcjtcbiAgdmlzdWFsTWF4Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBjb2xvckFscGhhPzogYW55W107XG4gIGNvbG9yU2F0dXJhdGlvbj86IHN0cmluZyB8IG51bWJlcjtcbiAgY29sb3JNYXBwaW5nQnk/OiBzdHJpbmc7XG4gIHZpc2libGVNaW4/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGNoaWxkcmVuVmlzaWJsZU1pbj86IHN0cmluZyB8IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsYWJlbD86IElUZExhYmVsO1xuICB1cHBlckxhYmVsPzogSVRkVHJlZW1hcFVwcGVyTGFiZWw7XG4gIGJyZWFkY3J1bWI/OiBJVGRUcmVlbWFwQnJlYWRjcnVtYjtcbiAgZW1waGFzaXM/OiBJVGRUcmVlbWFwRW1waGFzaXM7XG4gIGRhdGE6IGFueVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtdHJlZW1hcF0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnY29uZmlnJyxcbiAgICAnaWQnLFxuICAgICduYW1lJyxcbiAgICAnY29sb3InLFxuICAgICdkYXRhJyxcblxuICAgICdhbmltYXRpb24nLFxuICAgICdhbmltYXRpb25UaHJlc2hvbGQnLFxuICAgICdhbmltYXRpb25EdXJhdGlvbicsXG4gICAgJ2FuaW1hdGlvbkVhc2luZycsXG4gICAgJ2FuaW1hdGlvbkRlbGF5JyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUnLFxuICAgICdhbmltYXRpb25FYXNpbmdVcGRhdGUnLFxuICAgICdhbmltYXRpb25EZWxheVVwZGF0ZScsXG4gICAgJ3Rvb2x0aXAnLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNUcmVlbWFwQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzVHJlZW1hcENvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCd0cmVlbWFwJz4gaW1wbGVtZW50cyBJVGRUcmVlbWFwU2VyaWVzIHtcbiAgQElucHV0KCkgY29uZmlnOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgpIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc3F1YXJlUmF0aW86IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgbGVhZkRlcHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGRyaWxsRG93bkljb246IHN0cmluZztcbiAgQElucHV0KCkgcm9hbTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCkgbm9kZUNsaWNrOiBib29sZWFuIHwgc3RyaW5nO1xuICBASW5wdXQoKSB6b29tVG9Ob2RlUmF0aW86IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgbGV2ZWxzOiBhbnlbXTtcbiAgQElucHV0KCkgc2lsZW50OiBib29sZWFuO1xuICBASW5wdXQoKSB2aXN1YWxEaW1lbnNpb246IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgdmlzdWFsTWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHZpc3VhbE1heDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBjb2xvckFscGhhOiBhbnlbXTtcbiAgQElucHV0KCkgY29sb3JTYXR1cmF0aW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGNvbG9yTWFwcGluZ0J5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHZpc2libGVNaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgY2hpbGRyZW5WaXNpYmxlTWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgpIHVwcGVyTGFiZWw6IElUZFRyZWVtYXBVcHBlckxhYmVsO1xuICBASW5wdXQoKSBicmVhZGNydW1iOiBJVGRUcmVlbWFwQnJlYWRjcnVtYjtcbiAgQElucHV0KCkgZW1waGFzaXM6IElUZFRyZWVtYXBFbXBoYXNpcztcbiAgQElucHV0KCkgdG9vbHRpcDogSVRkU2VyaWVzVG9vbHRpcDtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd0cmVlbWFwJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHNxdWFyZVJhdGlvOiB0aGlzLnNxdWFyZVJhdGlvLFxuICAgICAgbGVhZkRlcHRoOiB0aGlzLmxlYWZEZXB0aCxcbiAgICAgIGRyaWxsRG93bkljb246IHRoaXMuZHJpbGxEb3duSWNvbixcbiAgICAgIHJvYW06IHRoaXMucm9hbSxcbiAgICAgIG5vZGVDbGljazogdGhpcy5ub2RlQ2xpY2ssXG4gICAgICB6b29tVG9Ob2RlUmF0aW86IHRoaXMuem9vbVRvTm9kZVJhdGlvLFxuICAgICAgbGV2ZWxzOiB0aGlzLmxldmVscyxcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgICB2aXN1YWxEaW1lbnNpb246IHRoaXMudmlzdWFsRGltZW5zaW9uLFxuICAgICAgdmlzdWFsTWluOiB0aGlzLnZpc3VhbE1pbixcbiAgICAgIHZpc3VhbE1heDogdGhpcy52aXN1YWxNYXgsXG4gICAgICBjb2xvckFscGhhOiB0aGlzLmNvbG9yQWxwaGEsXG4gICAgICBjb2xvclNhdHVyYXRpb246IHRoaXMuY29sb3JTYXR1cmF0aW9uLFxuICAgICAgY29sb3JNYXBwaW5nQnk6IHRoaXMuY29sb3JNYXBwaW5nQnksXG4gICAgICB2aXNpYmxlTWluOiB0aGlzLnZpc2libGVNaW4sXG4gICAgICBjaGlsZHJlblZpc2libGVNaW46IHRoaXMuY2hpbGRyZW5WaXNpYmxlTWluLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgdXBwZXJMYWJlbDogdGhpcy51cHBlckxhYmVsLFxuICAgICAgYnJlYWRjcnVtYjogdGhpcy5icmVhZGNydW1iLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgfTtcbiAgfVxufVxuIl19