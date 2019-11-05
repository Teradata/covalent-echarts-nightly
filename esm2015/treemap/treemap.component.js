/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlbWFwLyIsInNvdXJjZXMiOlsidHJlZW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQ0wscUJBQXFCLEVBS3JCLGlCQUFpQixHQUdsQixNQUFNLHdCQUF3QixDQUFDOzs7Ozs7O0FBUWhDLGlEQUlDOzs7SUFIQyw0Q0FBWTs7SUFDWiw0Q0FBZTs7SUFDZixnREFBbUI7Ozs7O0FBR3JCLHdDQUVDOzs7SUFEQyx1Q0FBdUM7Ozs7O0FBR3pDLDBDQWtDQzs7O0lBakNDLG9DQUFlOztJQUNmLHdDQUEwQjs7SUFDMUIsd0NBQTJCOztJQUMzQixzQ0FBeUI7O0lBQ3pCLHNDQUFlOztJQUNmLHlDQUFtQjs7SUFDbkIscUNBQVk7O0lBQ1oseUNBQW1COztJQUNuQiwwQ0FBb0I7O0lBQ3BCLDBDQUFvQjs7SUFDcEIsd0NBQTJCOztJQUMzQixxQ0FBZTs7SUFDZiw2Q0FBdUI7O0lBQ3ZCLDBDQUE2Qjs7SUFDN0IsK0NBQXNCOztJQUN0QiwyQ0FBcUI7O0lBQ3JCLDJDQUE4Qjs7SUFDOUIsNENBQStCOztJQUMvQix1Q0FBeUI7O0lBQ3pCLDJDQUFxQjs7SUFDckIsMENBQTZCOztJQUM3Qiw2Q0FBZ0M7O0lBQ2hDLDZDQUFnQzs7SUFDaEMscUNBQXdCOztJQUN4QixzQ0FBeUI7O0lBQ3pCLCtDQUF5Qjs7SUFDekIsK0NBQWtDOztJQUNsQywrQ0FBeUI7O0lBQ3pCLDhDQUFpQzs7SUFDakMsaURBQW9DOztJQUNwQyxpREFBb0M7O0lBQ3BDLG9DQUFVOztJQUNWLHdDQUFjOzs7OztBQUdoQiwwQ0FVQzs7O0lBVEMsb0NBQWU7O0lBQ2Ysb0NBQXVCOztJQUN2QixtQ0FBc0I7O0lBQ3RC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LGtEQUFvQzs7SUFDcEMsa0RBQW9DOztJQUNwQyxtREFBMkI7O0lBQzNCLHdEQUEwQzs7SUFDMUMsdURBQWdDOztJQUNoQyxtREFBcUM7O0lBQ3JDLDJEQUE2Qzs7SUFDN0Msa0RBQWlDOztJQUNqQyw4Q0FBeUI7O0lBQ3pCLG1EQUEwQzs7SUFDMUMsbURBQTBDOztJQUMxQyxpREFBc0M7O0lBQ3RDLGdEQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRTZXJpZXNUb29sdGlwLFxuICBJVGRMYWJlbCxcbiAgSVRkU2VyaWVzLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgSVRkRW1waGFzaXMsXG4gIElUZFNoYWRvdyxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbi8qKlxuICogRUNIQVJUIE9QVElPTiBET0NTXG4gKiBodHRwczovL2Vjb21mZS5naXRodWIuaW8vZWNoYXJ0cy1leGFtcGxlcy9wdWJsaWMvaW5kZXguaHRtbCNjaGFydC10eXBlLXRyZWVtYXBcbiAqXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlbWFwRW1waGFzaXNMaW5lU3R5bGUgZXh0ZW5kcyBJVGRTaGFkb3cge1xuICBjb2xvcj86IGFueTtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGN1cnZlbmVzcz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlbWFwRW1waGFzaXMgZXh0ZW5kcyBJVGRFbXBoYXNpcyB7XG4gIGxpbmVTdHlsZTogSVRkVHJlZW1hcEVtcGhhc2lzTGluZVN0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBVcHBlckxhYmVsIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHBvc2l0aW9uPzogc3RyaW5nIHwgYW55W107XG4gIGRpc3RhbmNlPzogc3RyaW5nIHwgbnVtYmVyO1xuICByb3RhdGU/OiBzdHJpbmcgfCBudW1iZXI7XG4gIG9mZnNldD86IGFueVtdO1xuICBmb3JtYXR0ZXI/OiBzdHJpbmc7XG4gIGNvbG9yPzogYW55O1xuICBmb250U3R5bGU/OiBzdHJpbmc7XG4gIGZvbnRXZWlnaHQ/OiBzdHJpbmc7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRTaXplPzogc3RyaW5nIHwgbnVtYmVyO1xuICBhbGlnbj86IHN0cmluZztcbiAgdmVydGljYWxBbGlnbj86IHN0cmluZztcbiAgbGluZUhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYmFja2dyb3VuZENvbG9yPzogYW55O1xuICBib3JkZXJDb2xvcj86IHN0cmluZztcbiAgYm9yZGVyV2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvcmRlclJhZGl1cz86IHN0cmluZyB8IG51bWJlcjtcbiAgcGFkZGluZz86IG51bWJlciB8IGFueVtdO1xuICBzaGFkb3dDb2xvcj86IHN0cmluZztcbiAgc2hhZG93Qmx1cj86IHN0cmluZyB8IG51bWJlcjtcbiAgc2hhZG93T2Zmc2V0WD86IHN0cmluZyB8IG51bWJlcjtcbiAgc2hhZG93T2Zmc2V0WT86IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dEJvcmRlckNvbG9yPzogc3RyaW5nO1xuICB0ZXh0Qm9yZGVyV2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRleHRTaGFkb3dDb2xvcj86IHN0cmluZztcbiAgdGV4dFNoYWRvd0JsdXI/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRleHRTaGFkb3dPZmZzZXRYPzogc3RyaW5nIHwgbnVtYmVyO1xuICB0ZXh0U2hhZG93T2Zmc2V0WT86IHN0cmluZyB8IG51bWJlcjtcbiAgcmljaDogYW55O1xuICBlbGxpcHNpczogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBCcmVhZGNydW1iIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIGxlZnQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcD86IHN0cmluZyB8IG51bWJlcjtcbiAgcmlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbT86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBlbXB0eUl0ZW1XaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBlbXBoYXNpcz86IElUZFRyZWVtYXBFbXBoYXNpcztcbn1cblxuaW50ZXJmYWNlIElUZFRyZWVtYXBTZXJpZXMgZXh0ZW5kcyBJVGRTZXJpZXM8J3RyZWVtYXAnPiB7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgbGVmdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBzcXVhcmVSYXRpbz86IHN0cmluZyB8IG51bWJlcjtcbiAgbGVhZkRlcHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBkcmlsbERvd25JY29uPzogc3RyaW5nO1xuICByb2FtPzogYm9vbGVhbiB8IHN0cmluZztcbiAgbm9kZUNsaWNrPzogYm9vbGVhbiB8IHN0cmluZztcbiAgem9vbVRvTm9kZVJhdGlvPzogc3RyaW5nIHwgbnVtYmVyO1xuICBsZXZlbHM/OiBhbnlbXTtcbiAgc2lsZW50PzogYm9vbGVhbjtcbiAgdmlzdWFsRGltZW5zaW9uPzogc3RyaW5nIHwgbnVtYmVyO1xuICB2aXN1YWxNaW4/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHZpc3VhbE1heD86IHN0cmluZyB8IG51bWJlcjtcbiAgY29sb3JBbHBoYT86IGFueVtdO1xuICBjb2xvclNhdHVyYXRpb24/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGNvbG9yTWFwcGluZ0J5Pzogc3RyaW5nO1xuICB2aXNpYmxlTWluPzogc3RyaW5nIHwgbnVtYmVyO1xuICBjaGlsZHJlblZpc2libGVNaW4/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgdXBwZXJMYWJlbD86IElUZFRyZWVtYXBVcHBlckxhYmVsO1xuICBicmVhZGNydW1iPzogSVRkVHJlZW1hcEJyZWFkY3J1bWI7XG4gIGVtcGhhc2lzPzogSVRkVHJlZW1hcEVtcGhhc2lzO1xuICBkYXRhOiBhbnlbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLXRyZWVtYXBdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbXG4gICAgJ2NvbmZpZycsXG4gICAgJ2lkJyxcbiAgICAnbmFtZScsXG4gICAgJ2NvbG9yJyxcbiAgICAnZGF0YScsXG5cbiAgICAnYW5pbWF0aW9uJyxcbiAgICAnYW5pbWF0aW9uVGhyZXNob2xkJyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb24nLFxuICAgICdhbmltYXRpb25FYXNpbmcnLFxuICAgICdhbmltYXRpb25EZWxheScsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uVXBkYXRlJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nVXBkYXRlJyxcbiAgICAnYW5pbWF0aW9uRGVsYXlVcGRhdGUnLFxuICAgICd0b29sdGlwJyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzVHJlZW1hcENvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1RyZWVtYXBDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwndHJlZW1hcCc+IGltcGxlbWVudHMgSVRkVHJlZW1hcFNlcmllcyB7XG4gIEBJbnB1dCgpIGNvbmZpZzogYW55ID0ge307XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgZGF0YTogYW55O1xuICBASW5wdXQoKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCkgejogbnVtYmVyO1xuICBASW5wdXQoKSBsZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHRvcDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHNxdWFyZVJhdGlvOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGxlYWZEZXB0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBkcmlsbERvd25JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvYW06IGJvb2xlYW4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIG5vZGVDbGljazogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCkgem9vbVRvTm9kZVJhdGlvOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGxldmVsczogYW55W107XG4gIEBJbnB1dCgpIHNpbGVudDogYm9vbGVhbjtcbiAgQElucHV0KCkgdmlzdWFsRGltZW5zaW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHZpc3VhbE1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSB2aXN1YWxNYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgY29sb3JBbHBoYTogYW55W107XG4gIEBJbnB1dCgpIGNvbG9yU2F0dXJhdGlvbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBjb2xvck1hcHBpbmdCeTogc3RyaW5nO1xuICBASW5wdXQoKSB2aXNpYmxlTWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGNoaWxkcmVuVmlzaWJsZU1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCkgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoKSB1cHBlckxhYmVsOiBJVGRUcmVlbWFwVXBwZXJMYWJlbDtcbiAgQElucHV0KCkgYnJlYWRjcnVtYjogSVRkVHJlZW1hcEJyZWFkY3J1bWI7XG4gIEBJbnB1dCgpIGVtcGhhc2lzOiBJVGRUcmVlbWFwRW1waGFzaXM7XG4gIEBJbnB1dCgpIHRvb2x0aXA6IElUZFNlcmllc1Rvb2x0aXA7XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigndHJlZW1hcCcsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBzcXVhcmVSYXRpbzogdGhpcy5zcXVhcmVSYXRpbyxcbiAgICAgIGxlYWZEZXB0aDogdGhpcy5sZWFmRGVwdGgsXG4gICAgICBkcmlsbERvd25JY29uOiB0aGlzLmRyaWxsRG93bkljb24sXG4gICAgICByb2FtOiB0aGlzLnJvYW0sXG4gICAgICBub2RlQ2xpY2s6IHRoaXMubm9kZUNsaWNrLFxuICAgICAgem9vbVRvTm9kZVJhdGlvOiB0aGlzLnpvb21Ub05vZGVSYXRpbyxcbiAgICAgIGxldmVsczogdGhpcy5sZXZlbHMsXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgdmlzdWFsRGltZW5zaW9uOiB0aGlzLnZpc3VhbERpbWVuc2lvbixcbiAgICAgIHZpc3VhbE1pbjogdGhpcy52aXN1YWxNaW4sXG4gICAgICB2aXN1YWxNYXg6IHRoaXMudmlzdWFsTWF4LFxuICAgICAgY29sb3JBbHBoYTogdGhpcy5jb2xvckFscGhhLFxuICAgICAgY29sb3JTYXR1cmF0aW9uOiB0aGlzLmNvbG9yU2F0dXJhdGlvbixcbiAgICAgIGNvbG9yTWFwcGluZ0J5OiB0aGlzLmNvbG9yTWFwcGluZ0J5LFxuICAgICAgdmlzaWJsZU1pbjogdGhpcy52aXNpYmxlTWluLFxuICAgICAgY2hpbGRyZW5WaXNpYmxlTWluOiB0aGlzLmNoaWxkcmVuVmlzaWJsZU1pbixcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIHVwcGVyTGFiZWw6IHRoaXMudXBwZXJMYWJlbCxcbiAgICAgIGJyZWFkY3J1bWI6IHRoaXMuYnJlYWRjcnVtYixcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==