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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlbWFwLyIsInNvdXJjZXMiOlsidHJlZW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUNMLHFCQUFxQixFQUtyQixpQkFBaUIsR0FHbEIsTUFBTSx3QkFBd0IsQ0FBQzs7Ozs7OztBQVFoQyxpREFJQzs7O0lBSEMsNENBQVk7O0lBQ1osNENBQWU7O0lBQ2YsZ0RBQW1COzs7OztBQUdyQix3Q0FFQzs7O0lBREMsdUNBQXVDOzs7OztBQUd6QywwQ0FrQ0M7OztJQWpDQyxvQ0FBZTs7SUFDZix3Q0FBMEI7O0lBQzFCLHdDQUEyQjs7SUFDM0Isc0NBQXlCOztJQUN6QixzQ0FBZTs7SUFDZix5Q0FBbUI7O0lBQ25CLHFDQUFZOztJQUNaLHlDQUFtQjs7SUFDbkIsMENBQW9COztJQUNwQiwwQ0FBb0I7O0lBQ3BCLHdDQUEyQjs7SUFDM0IscUNBQWU7O0lBQ2YsNkNBQXVCOztJQUN2QiwwQ0FBNkI7O0lBQzdCLCtDQUFzQjs7SUFDdEIsMkNBQXFCOztJQUNyQiwyQ0FBOEI7O0lBQzlCLDRDQUErQjs7SUFDL0IsdUNBQXlCOztJQUN6QiwyQ0FBcUI7O0lBQ3JCLDBDQUE2Qjs7SUFDN0IsNkNBQWdDOztJQUNoQyw2Q0FBZ0M7O0lBQ2hDLHFDQUF3Qjs7SUFDeEIsc0NBQXlCOztJQUN6QiwrQ0FBeUI7O0lBQ3pCLCtDQUFrQzs7SUFDbEMsK0NBQXlCOztJQUN6Qiw4Q0FBaUM7O0lBQ2pDLGlEQUFvQzs7SUFDcEMsaURBQW9DOztJQUNwQyxvQ0FBVTs7SUFDVix3Q0FBYzs7Ozs7QUFHaEIsMENBVUM7OztJQVRDLG9DQUFlOztJQUNmLG9DQUF1Qjs7SUFDdkIsbUNBQXNCOztJQUN0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SUFDaEMsMENBQXNCOztJQUN0Qiw2Q0FBcUM7O0lBQ3JDLDRDQUFtQzs7SUFDbkMsOENBQXVDOztJQUN2QywrQ0FBeUM7O0lBQ3pDLDhDQUF1Qzs7SUFDdkMsK0NBQXlDOztJQUN6QyxvREFBbUQ7O0lBQ25ELGtEQUErQzs7SUFDL0Msc0RBQThDOztJQUM5Qyw2Q0FBc0M7O0lBQ3RDLGtEQUFnRDs7SUFDaEQsd0RBQTJEOztJQUMzRCwrQ0FBK0I7O0lBQy9CLCtDQUFpQzs7SUFDakMsd0RBQTJEOztJQUMzRCxrREFBK0M7O0lBQy9DLGtEQUErQzs7SUFDL0MsbURBQXVDOztJQUN2Qyx3REFBMkQ7O0lBQzNELHVEQUFnRDs7SUFDaEQsbURBQWlEOztJQUNqRCwyREFBaUU7O0lBQ2pFLGtEQUE0Qzs7SUFDNUMsOENBQWdDOztJQUNoQyxtREFBc0Q7O0lBQ3RELG1EQUFzRDs7SUFDdEQsaURBQWdEOztJQUNoRCxnREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkU2VyaWVzVG9vbHRpcCxcbiAgSVRkTGFiZWwsXG4gIElUZFNlcmllcyxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG4gIElUZEVtcGhhc2lzLFxuICBJVGRTaGFkb3csXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG4vKipcbiAqIEVDSEFSVCBPUFRJT04gRE9DU1xuICogaHR0cHM6Ly9lY29tZmUuZ2l0aHViLmlvL2VjaGFydHMtZXhhbXBsZXMvcHVibGljL2luZGV4Lmh0bWwjY2hhcnQtdHlwZS10cmVlbWFwXG4gKlxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcEVtcGhhc2lzTGluZVN0eWxlIGV4dGVuZHMgSVRkU2hhZG93IHtcbiAgY29sb3I/OiBhbnk7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBjdXJ2ZW5lc3M/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcEVtcGhhc2lzIGV4dGVuZHMgSVRkRW1waGFzaXMge1xuICBsaW5lU3R5bGU6IElUZFRyZWVtYXBFbXBoYXNpc0xpbmVTdHlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlbWFwVXBwZXJMYWJlbCB7XG4gIHNob3c/OiBib29sZWFuO1xuICBwb3NpdGlvbj86IHN0cmluZyB8IGFueVtdO1xuICBkaXN0YW5jZT86IHN0cmluZyB8IG51bWJlcjtcbiAgcm90YXRlPzogc3RyaW5nIHwgbnVtYmVyO1xuICBvZmZzZXQ/OiBhbnlbXTtcbiAgZm9ybWF0dGVyPzogc3RyaW5nO1xuICBjb2xvcj86IGFueTtcbiAgZm9udFN0eWxlPzogc3RyaW5nO1xuICBmb250V2VpZ2h0Pzogc3RyaW5nO1xuICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICBmb250U2l6ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgYWxpZ24/OiBzdHJpbmc7XG4gIHZlcnRpY2FsQWxpZ24/OiBzdHJpbmc7XG4gIGxpbmVIZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJhY2tncm91bmRDb2xvcj86IGFueTtcbiAgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIGJvcmRlcldpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3JkZXJSYWRpdXM/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHBhZGRpbmc/OiBudW1iZXIgfCBhbnlbXTtcbiAgc2hhZG93Q29sb3I/OiBzdHJpbmc7XG4gIHNoYWRvd0JsdXI/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHNoYWRvd09mZnNldFg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHNoYWRvd09mZnNldFk/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRleHRCb3JkZXJDb2xvcj86IHN0cmluZztcbiAgdGV4dEJvcmRlcldpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICB0ZXh0U2hhZG93Q29sb3I/OiBzdHJpbmc7XG4gIHRleHRTaGFkb3dCbHVyPzogc3RyaW5nIHwgbnVtYmVyO1xuICB0ZXh0U2hhZG93T2Zmc2V0WD86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dFNoYWRvd09mZnNldFk/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpY2g6IGFueTtcbiAgZWxsaXBzaXM6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlbWFwQnJlYWRjcnVtYiB7XG4gIHNob3c/OiBib29sZWFuO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgZW1wdHlJdGVtV2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgZW1waGFzaXM/OiBJVGRUcmVlbWFwRW1waGFzaXM7XG59XG5cbmludGVyZmFjZSBJVGRUcmVlbWFwU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCd0cmVlbWFwJz4ge1xuICB6bGV2ZWw/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIGxlZnQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcD86IHN0cmluZyB8IG51bWJlcjtcbiAgcmlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbT86IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgc3F1YXJlUmF0aW8/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGxlYWZEZXB0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgZHJpbGxEb3duSWNvbj86IHN0cmluZztcbiAgcm9hbT86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIG5vZGVDbGljaz86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIHpvb21Ub05vZGVSYXRpbz86IHN0cmluZyB8IG51bWJlcjtcbiAgbGV2ZWxzPzogYW55W107XG4gIHNpbGVudD86IGJvb2xlYW47XG4gIHZpc3VhbERpbWVuc2lvbj86IHN0cmluZyB8IG51bWJlcjtcbiAgdmlzdWFsTWluPzogc3RyaW5nIHwgbnVtYmVyO1xuICB2aXN1YWxNYXg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGNvbG9yQWxwaGE/OiBhbnlbXTtcbiAgY29sb3JTYXR1cmF0aW9uPzogc3RyaW5nIHwgbnVtYmVyO1xuICBjb2xvck1hcHBpbmdCeT86IHN0cmluZztcbiAgdmlzaWJsZU1pbj86IHN0cmluZyB8IG51bWJlcjtcbiAgY2hpbGRyZW5WaXNpYmxlTWluPzogc3RyaW5nIHwgbnVtYmVyO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIHVwcGVyTGFiZWw/OiBJVGRUcmVlbWFwVXBwZXJMYWJlbDtcbiAgYnJlYWRjcnVtYj86IElUZFRyZWVtYXBCcmVhZGNydW1iO1xuICBlbXBoYXNpcz86IElUZFRyZWVtYXBFbXBoYXNpcztcbiAgZGF0YTogYW55W107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC10cmVlbWFwXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc1RyZWVtYXBDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNUcmVlbWFwQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J3RyZWVtYXAnPiBpbXBsZW1lbnRzIElUZFRyZWVtYXBTZXJpZXMge1xuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ2xlZnQnKSBsZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgndG9wJykgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgncmlnaHQnKSByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2JvdHRvbScpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3dpZHRoJykgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdoZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdzcXVhcmVSYXRpbycpIHNxdWFyZVJhdGlvOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnbGVhZkRlcHRoJykgbGVhZkRlcHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnZHJpbGxEb3duSWNvbicpIGRyaWxsRG93bkljb246IHN0cmluZztcbiAgQElucHV0KCdyb2FtJykgcm9hbTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCdub2RlQ2xpY2snKSBub2RlQ2xpY2s6IGJvb2xlYW4gfCBzdHJpbmc7XG4gIEBJbnB1dCgnem9vbVRvTm9kZVJhdGlvJykgem9vbVRvTm9kZVJhdGlvOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnbGV2ZWxzJykgbGV2ZWxzOiBhbnlbXTtcbiAgQElucHV0KCdzaWxlbnQnKSBzaWxlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgndmlzdWFsRGltZW5zaW9uJykgdmlzdWFsRGltZW5zaW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgndmlzdWFsTWluJykgdmlzdWFsTWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgndmlzdWFsTWF4JykgdmlzdWFsTWF4OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnY29sb3JBbHBoYScpIGNvbG9yQWxwaGE6IGFueVtdO1xuICBASW5wdXQoJ2NvbG9yU2F0dXJhdGlvbicpIGNvbG9yU2F0dXJhdGlvbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2NvbG9yTWFwcGluZ0J5JykgY29sb3JNYXBwaW5nQnk6IHN0cmluZztcbiAgQElucHV0KCd2aXNpYmxlTWluJykgdmlzaWJsZU1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2NoaWxkcmVuVmlzaWJsZU1pbicpIGNoaWxkcmVuVmlzaWJsZU1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ3VwcGVyTGFiZWwnKSB1cHBlckxhYmVsOiBJVGRUcmVlbWFwVXBwZXJMYWJlbDtcbiAgQElucHV0KCdicmVhZGNydW1iJykgYnJlYWRjcnVtYjogSVRkVHJlZW1hcEJyZWFkY3J1bWI7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkVHJlZW1hcEVtcGhhc2lzO1xuICBASW5wdXQoJ3Rvb2x0aXAnKSB0b29sdGlwOiBJVGRTZXJpZXNUb29sdGlwO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3RyZWVtYXAnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgc3F1YXJlUmF0aW86IHRoaXMuc3F1YXJlUmF0aW8sXG4gICAgICBsZWFmRGVwdGg6IHRoaXMubGVhZkRlcHRoLFxuICAgICAgZHJpbGxEb3duSWNvbjogdGhpcy5kcmlsbERvd25JY29uLFxuICAgICAgcm9hbTogdGhpcy5yb2FtLFxuICAgICAgbm9kZUNsaWNrOiB0aGlzLm5vZGVDbGljayxcbiAgICAgIHpvb21Ub05vZGVSYXRpbzogdGhpcy56b29tVG9Ob2RlUmF0aW8sXG4gICAgICBsZXZlbHM6IHRoaXMubGV2ZWxzLFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICAgIHZpc3VhbERpbWVuc2lvbjogdGhpcy52aXN1YWxEaW1lbnNpb24sXG4gICAgICB2aXN1YWxNaW46IHRoaXMudmlzdWFsTWluLFxuICAgICAgdmlzdWFsTWF4OiB0aGlzLnZpc3VhbE1heCxcbiAgICAgIGNvbG9yQWxwaGE6IHRoaXMuY29sb3JBbHBoYSxcbiAgICAgIGNvbG9yU2F0dXJhdGlvbjogdGhpcy5jb2xvclNhdHVyYXRpb24sXG4gICAgICBjb2xvck1hcHBpbmdCeTogdGhpcy5jb2xvck1hcHBpbmdCeSxcbiAgICAgIHZpc2libGVNaW46IHRoaXMudmlzaWJsZU1pbixcbiAgICAgIGNoaWxkcmVuVmlzaWJsZU1pbjogdGhpcy5jaGlsZHJlblZpc2libGVNaW4sXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICB1cHBlckxhYmVsOiB0aGlzLnVwcGVyTGFiZWwsXG4gICAgICBicmVhZGNydW1iOiB0aGlzLmJyZWFkY3J1bWIsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICB9O1xuICB9XG59XG4iXX0=