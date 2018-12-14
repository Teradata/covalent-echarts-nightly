/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, forwardRef, } from '@angular/core';
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
export class TdChartSeriesTreemapComponent extends TdSeriesComponent {
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
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesTreemapComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesTreemapComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlbWFwLyIsInNvdXJjZXMiOlsidHJlZW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLHFCQUFxQixFQUtyQixpQkFBaUIsR0FHbEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQVFoQyxpREFJQzs7O0lBSEMsNENBQVk7O0lBQ1osNENBQWU7O0lBQ2YsZ0RBQW1COzs7OztBQUdyQix3Q0FFQzs7O0lBREMsdUNBQXVDOzs7OztBQUd6QywwQ0FrQ0M7OztJQWpDQyxvQ0FBZTs7SUFDZix3Q0FBMEI7O0lBQzFCLHdDQUEyQjs7SUFDM0Isc0NBQXlCOztJQUN6QixzQ0FBZTs7SUFDZix5Q0FBbUI7O0lBQ25CLHFDQUFZOztJQUNaLHlDQUFtQjs7SUFDbkIsMENBQW9COztJQUNwQiwwQ0FBb0I7O0lBQ3BCLHdDQUEyQjs7SUFDM0IscUNBQWU7O0lBQ2YsNkNBQXVCOztJQUN2QiwwQ0FBNkI7O0lBQzdCLCtDQUFzQjs7SUFDdEIsMkNBQXFCOztJQUNyQiwyQ0FBOEI7O0lBQzlCLDRDQUErQjs7SUFDL0IsdUNBQXlCOztJQUN6QiwyQ0FBcUI7O0lBQ3JCLDBDQUE2Qjs7SUFDN0IsNkNBQWdDOztJQUNoQyw2Q0FBZ0M7O0lBQ2hDLHFDQUF3Qjs7SUFDeEIsc0NBQXlCOztJQUN6QiwrQ0FBeUI7O0lBQ3pCLCtDQUFrQzs7SUFDbEMsK0NBQXlCOztJQUN6Qiw4Q0FBaUM7O0lBQ2pDLGlEQUFvQzs7SUFDcEMsaURBQW9DOztJQUNwQyxvQ0FBVTs7SUFDVix3Q0FBYzs7Ozs7QUFHaEIsMENBVUM7OztJQVRDLG9DQUFlOztJQUNmLG9DQUF1Qjs7SUFDdkIsbUNBQXNCOztJQUN0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QXlDOztJQUN6Qyw4Q0FBdUM7O0lBQ3ZDLCtDQUF5Qzs7SUFDekMsb0RBQW1EOztJQUNuRCxrREFBK0M7O0lBQy9DLHNEQUE4Qzs7SUFDOUMsNkNBQXNDOztJQUN0QyxrREFBZ0Q7O0lBQ2hELHdEQUEyRDs7SUFDM0QsK0NBQStCOztJQUMvQiwrQ0FBaUM7O0lBQ2pDLHdEQUEyRDs7SUFDM0Qsa0RBQStDOztJQUMvQyxrREFBK0M7O0lBQy9DLG1EQUF1Qzs7SUFDdkMsd0RBQTJEOztJQUMzRCx1REFBZ0Q7O0lBQ2hELG1EQUFpRDs7SUFDakQsMkRBQWlFOztJQUNqRSxrREFBNEM7O0lBQzVDLDhDQUFnQzs7SUFDaEMsbURBQXNEOztJQUN0RCxtREFBc0Q7O0lBQ3RELGlEQUFnRDs7SUFDaEQsZ0RBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZFNlcmllc1Rvb2x0aXAsXG4gIElUZExhYmVsLFxuICBJVGRTZXJpZXMsXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxuICBJVGRFbXBoYXNpcyxcbiAgSVRkU2hhZG93LFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuLyoqXG4gKiBFQ0hBUlQgT1BUSU9OIERPQ1NcbiAqIGh0dHBzOi8vZWNvbWZlLmdpdGh1Yi5pby9lY2hhcnRzLWV4YW1wbGVzL3B1YmxpYy9pbmRleC5odG1sI2NoYXJ0LXR5cGUtdHJlZW1hcFxuICpcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBFbXBoYXNpc0xpbmVTdHlsZSBleHRlbmRzIElUZFNoYWRvdyB7XG4gIGNvbG9yPzogYW55O1xuICB3aWR0aD86IG51bWJlcjtcbiAgY3VydmVuZXNzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBFbXBoYXNpcyBleHRlbmRzIElUZEVtcGhhc2lzIHtcbiAgbGluZVN0eWxlOiBJVGRUcmVlbWFwRW1waGFzaXNMaW5lU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcFVwcGVyTGFiZWwge1xuICBzaG93PzogYm9vbGVhbjtcbiAgcG9zaXRpb24/OiBzdHJpbmcgfCBhbnlbXTtcbiAgZGlzdGFuY2U/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJvdGF0ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgb2Zmc2V0PzogYW55W107XG4gIGZvcm1hdHRlcj86IHN0cmluZztcbiAgY29sb3I/OiBhbnk7XG4gIGZvbnRTdHlsZT86IHN0cmluZztcbiAgZm9udFdlaWdodD86IHN0cmluZztcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGFsaWduPzogc3RyaW5nO1xuICB2ZXJ0aWNhbEFsaWduPzogc3RyaW5nO1xuICBsaW5lSGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBhbnk7XG4gIGJvcmRlckNvbG9yPzogc3RyaW5nO1xuICBib3JkZXJXaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm9yZGVyUmFkaXVzPzogc3RyaW5nIHwgbnVtYmVyO1xuICBwYWRkaW5nPzogbnVtYmVyIHwgYW55W107XG4gIHNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICBzaGFkb3dCbHVyPzogc3RyaW5nIHwgbnVtYmVyO1xuICBzaGFkb3dPZmZzZXRYPzogc3RyaW5nIHwgbnVtYmVyO1xuICBzaGFkb3dPZmZzZXRZPzogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0ZXh0Qm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIHRleHRCb3JkZXJXaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dFNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICB0ZXh0U2hhZG93Qmx1cj86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dFNoYWRvd09mZnNldFg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRleHRTaGFkb3dPZmZzZXRZPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWNoOiBhbnk7XG4gIGVsbGlwc2lzOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcEJyZWFkY3J1bWIge1xuICBzaG93PzogYm9vbGVhbjtcbiAgbGVmdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGVtcHR5SXRlbVdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkVHJlZW1hcEVtcGhhc2lzO1xufVxuXG5pbnRlcmZhY2UgSVRkVHJlZW1hcFNlcmllcyBleHRlbmRzIElUZFNlcmllczwndHJlZW1hcCc+IHtcbiAgemxldmVsPzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHNxdWFyZVJhdGlvPzogc3RyaW5nIHwgbnVtYmVyO1xuICBsZWFmRGVwdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGRyaWxsRG93bkljb24/OiBzdHJpbmc7XG4gIHJvYW0/OiBib29sZWFuIHwgc3RyaW5nO1xuICBub2RlQ2xpY2s/OiBib29sZWFuIHwgc3RyaW5nO1xuICB6b29tVG9Ob2RlUmF0aW8/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGxldmVscz86IGFueVtdO1xuICBzaWxlbnQ/OiBib29sZWFuO1xuICB2aXN1YWxEaW1lbnNpb24/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHZpc3VhbE1pbj86IHN0cmluZyB8IG51bWJlcjtcbiAgdmlzdWFsTWF4Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBjb2xvckFscGhhPzogYW55W107XG4gIGNvbG9yU2F0dXJhdGlvbj86IHN0cmluZyB8IG51bWJlcjtcbiAgY29sb3JNYXBwaW5nQnk/OiBzdHJpbmc7XG4gIHZpc2libGVNaW4/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGNoaWxkcmVuVmlzaWJsZU1pbj86IHN0cmluZyB8IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsYWJlbD86IElUZExhYmVsO1xuICB1cHBlckxhYmVsPzogSVRkVHJlZW1hcFVwcGVyTGFiZWw7XG4gIGJyZWFkY3J1bWI/OiBJVGRUcmVlbWFwQnJlYWRjcnVtYjtcbiAgZW1waGFzaXM/OiBJVGRUcmVlbWFwRW1waGFzaXM7XG4gIGRhdGE6IGFueVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtdHJlZW1hcF0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNUcmVlbWFwQ29tcG9uZW50KSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNUcmVlbWFwQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J3RyZWVtYXAnPiBpbXBsZW1lbnRzIElUZFRyZWVtYXBTZXJpZXMge1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCdkYXRhJykgZGF0YTogYW55O1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgnbGVmdCcpIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdyaWdodCcpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnYm90dG9tJykgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3NxdWFyZVJhdGlvJykgc3F1YXJlUmF0aW86IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdsZWFmRGVwdGgnKSBsZWFmRGVwdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdkcmlsbERvd25JY29uJykgZHJpbGxEb3duSWNvbjogc3RyaW5nO1xuICBASW5wdXQoJ3JvYW0nKSByb2FtOiBib29sZWFuIHwgc3RyaW5nO1xuICBASW5wdXQoJ25vZGVDbGljaycpIG5vZGVDbGljazogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCd6b29tVG9Ob2RlUmF0aW8nKSB6b29tVG9Ob2RlUmF0aW86IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdsZXZlbHMnKSBsZXZlbHM6IGFueVtdO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcbiAgQElucHV0KCd2aXN1YWxEaW1lbnNpb24nKSB2aXN1YWxEaW1lbnNpb246IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd2aXN1YWxNaW4nKSB2aXN1YWxNaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd2aXN1YWxNYXgnKSB2aXN1YWxNYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdjb2xvckFscGhhJykgY29sb3JBbHBoYTogYW55W107XG4gIEBJbnB1dCgnY29sb3JTYXR1cmF0aW9uJykgY29sb3JTYXR1cmF0aW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnY29sb3JNYXBwaW5nQnknKSBjb2xvck1hcHBpbmdCeTogc3RyaW5nO1xuICBASW5wdXQoJ3Zpc2libGVNaW4nKSB2aXNpYmxlTWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnY2hpbGRyZW5WaXNpYmxlTWluJykgY2hpbGRyZW5WaXNpYmxlTWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgndXBwZXJMYWJlbCcpIHVwcGVyTGFiZWw6IElUZFRyZWVtYXBVcHBlckxhYmVsO1xuICBASW5wdXQoJ2JyZWFkY3J1bWInKSBicmVhZGNydW1iOiBJVGRUcmVlbWFwQnJlYWRjcnVtYjtcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRUcmVlbWFwRW1waGFzaXM7XG4gIEBJbnB1dCgndG9vbHRpcCcpIHRvb2x0aXA6IElUZFNlcmllc1Rvb2x0aXA7XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigndHJlZW1hcCcsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBzcXVhcmVSYXRpbzogdGhpcy5zcXVhcmVSYXRpbyxcbiAgICAgIGxlYWZEZXB0aDogdGhpcy5sZWFmRGVwdGgsXG4gICAgICBkcmlsbERvd25JY29uOiB0aGlzLmRyaWxsRG93bkljb24sXG4gICAgICByb2FtOiB0aGlzLnJvYW0sXG4gICAgICBub2RlQ2xpY2s6IHRoaXMubm9kZUNsaWNrLFxuICAgICAgem9vbVRvTm9kZVJhdGlvOiB0aGlzLnpvb21Ub05vZGVSYXRpbyxcbiAgICAgIGxldmVsczogdGhpcy5sZXZlbHMsXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgdmlzdWFsRGltZW5zaW9uOiB0aGlzLnZpc3VhbERpbWVuc2lvbixcbiAgICAgIHZpc3VhbE1pbjogdGhpcy52aXN1YWxNaW4sXG4gICAgICB2aXN1YWxNYXg6IHRoaXMudmlzdWFsTWF4LFxuICAgICAgY29sb3JBbHBoYTogdGhpcy5jb2xvckFscGhhLFxuICAgICAgY29sb3JTYXR1cmF0aW9uOiB0aGlzLmNvbG9yU2F0dXJhdGlvbixcbiAgICAgIGNvbG9yTWFwcGluZ0J5OiB0aGlzLmNvbG9yTWFwcGluZ0J5LFxuICAgICAgdmlzaWJsZU1pbjogdGhpcy52aXNpYmxlTWluLFxuICAgICAgY2hpbGRyZW5WaXNpYmxlTWluOiB0aGlzLmNoaWxkcmVuVmlzaWJsZU1pbixcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIHVwcGVyTGFiZWw6IHRoaXMudXBwZXJMYWJlbCxcbiAgICAgIGJyZWFkY3J1bWI6IHRoaXMuYnJlYWRjcnVtYixcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==