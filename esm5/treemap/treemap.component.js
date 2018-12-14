/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
                    providers: [{
                            provide: TdSeriesComponent, useExisting: forwardRef(function () { return TdChartSeriesTreemapComponent; }),
                        }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlbWFwLyIsInNvdXJjZXMiOlsidHJlZW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxxQkFBcUIsRUFLckIsaUJBQWlCLEdBR2xCLE1BQU0sd0JBQXdCLENBQUM7Ozs7Ozs7QUFRaEMsaURBSUM7OztJQUhDLDRDQUFZOztJQUNaLDRDQUFlOztJQUNmLGdEQUFtQjs7Ozs7QUFHckIsd0NBRUM7OztJQURDLHVDQUF1Qzs7Ozs7QUFHekMsMENBa0NDOzs7SUFqQ0Msb0NBQWU7O0lBQ2Ysd0NBQTBCOztJQUMxQix3Q0FBMkI7O0lBQzNCLHNDQUF5Qjs7SUFDekIsc0NBQWU7O0lBQ2YseUNBQW1COztJQUNuQixxQ0FBWTs7SUFDWix5Q0FBbUI7O0lBQ25CLDBDQUFvQjs7SUFDcEIsMENBQW9COztJQUNwQix3Q0FBMkI7O0lBQzNCLHFDQUFlOztJQUNmLDZDQUF1Qjs7SUFDdkIsMENBQTZCOztJQUM3QiwrQ0FBc0I7O0lBQ3RCLDJDQUFxQjs7SUFDckIsMkNBQThCOztJQUM5Qiw0Q0FBK0I7O0lBQy9CLHVDQUF5Qjs7SUFDekIsMkNBQXFCOztJQUNyQiwwQ0FBNkI7O0lBQzdCLDZDQUFnQzs7SUFDaEMsNkNBQWdDOztJQUNoQyxxQ0FBd0I7O0lBQ3hCLHNDQUF5Qjs7SUFDekIsK0NBQXlCOztJQUN6QiwrQ0FBa0M7O0lBQ2xDLCtDQUF5Qjs7SUFDekIsOENBQWlDOztJQUNqQyxpREFBb0M7O0lBQ3BDLGlEQUFvQzs7SUFDcEMsb0NBQVU7O0lBQ1Ysd0NBQWM7Ozs7O0FBR2hCLDBDQVVDOzs7SUFUQyxvQ0FBZTs7SUFDZixvQ0FBdUI7O0lBQ3ZCLG1DQUFzQjs7SUFD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MENBQXNCOztJQUN0Qiw2Q0FBcUM7O0lBQ3JDLDRDQUFtQzs7SUFDbkMsOENBQXVDOztJQUN2QywrQ0FBeUM7O0lBQ3pDLDhDQUF1Qzs7SUFDdkMsK0NBQXlDOztJQUN6QyxvREFBbUQ7O0lBQ25ELGtEQUErQzs7SUFDL0Msc0RBQThDOztJQUM5Qyw2Q0FBc0M7O0lBQ3RDLGtEQUFnRDs7SUFDaEQsd0RBQTJEOztJQUMzRCwrQ0FBK0I7O0lBQy9CLCtDQUFpQzs7SUFDakMsd0RBQTJEOztJQUMzRCxrREFBK0M7O0lBQy9DLGtEQUErQzs7SUFDL0MsbURBQXVDOztJQUN2Qyx3REFBMkQ7O0lBQzNELHVEQUFnRDs7SUFDaEQsbURBQWlEOztJQUNqRCwyREFBaUU7O0lBQ2pFLGtEQUE0Qzs7SUFDNUMsOENBQWdDOztJQUNoQyxtREFBc0Q7O0lBQ3RELG1EQUFzRDs7SUFDdEQsaURBQWdEOztJQUNoRCxnREFBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFxuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkU2VyaWVzVG9vbHRpcCxcbiAgSVRkTGFiZWwsXG4gIElUZFNlcmllcyxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG4gIElUZEVtcGhhc2lzLFxuICBJVGRTaGFkb3csXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG4vKipcbiAqIEVDSEFSVCBPUFRJT04gRE9DU1xuICogaHR0cHM6Ly9lY29tZmUuZ2l0aHViLmlvL2VjaGFydHMtZXhhbXBsZXMvcHVibGljL2luZGV4Lmh0bWwjY2hhcnQtdHlwZS10cmVlbWFwXG4gKlxuICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcEVtcGhhc2lzTGluZVN0eWxlIGV4dGVuZHMgSVRkU2hhZG93IHtcbiAgY29sb3I/OiBhbnk7XG4gIHdpZHRoPzogbnVtYmVyO1xuICBjdXJ2ZW5lc3M/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcEVtcGhhc2lzIGV4dGVuZHMgSVRkRW1waGFzaXMge1xuICBsaW5lU3R5bGU6IElUZFRyZWVtYXBFbXBoYXNpc0xpbmVTdHlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlbWFwVXBwZXJMYWJlbCB7XG4gIHNob3c/OiBib29sZWFuO1xuICBwb3NpdGlvbj86IHN0cmluZyB8IGFueVtdO1xuICBkaXN0YW5jZT86IHN0cmluZyB8IG51bWJlcjtcbiAgcm90YXRlPzogc3RyaW5nIHwgbnVtYmVyO1xuICBvZmZzZXQ/OiBhbnlbXTtcbiAgZm9ybWF0dGVyPzogc3RyaW5nO1xuICBjb2xvcj86IGFueTtcbiAgZm9udFN0eWxlPzogc3RyaW5nO1xuICBmb250V2VpZ2h0Pzogc3RyaW5nO1xuICBmb250RmFtaWx5Pzogc3RyaW5nO1xuICBmb250U2l6ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgYWxpZ24/OiBzdHJpbmc7XG4gIHZlcnRpY2FsQWxpZ24/OiBzdHJpbmc7XG4gIGxpbmVIZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJhY2tncm91bmRDb2xvcj86IGFueTtcbiAgYm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIGJvcmRlcldpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3JkZXJSYWRpdXM/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHBhZGRpbmc/OiBudW1iZXIgfCBhbnlbXTtcbiAgc2hhZG93Q29sb3I/OiBzdHJpbmc7XG4gIHNoYWRvd0JsdXI/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHNoYWRvd09mZnNldFg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHNoYWRvd09mZnNldFk/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRleHRCb3JkZXJDb2xvcj86IHN0cmluZztcbiAgdGV4dEJvcmRlcldpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICB0ZXh0U2hhZG93Q29sb3I/OiBzdHJpbmc7XG4gIHRleHRTaGFkb3dCbHVyPzogc3RyaW5nIHwgbnVtYmVyO1xuICB0ZXh0U2hhZG93T2Zmc2V0WD86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dFNoYWRvd09mZnNldFk/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpY2g6IGFueTtcbiAgZWxsaXBzaXM6IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlbWFwQnJlYWRjcnVtYiB7XG4gIHNob3c/OiBib29sZWFuO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgZW1wdHlJdGVtV2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgZW1waGFzaXM/OiBJVGRUcmVlbWFwRW1waGFzaXM7XG59XG5cbmludGVyZmFjZSBJVGRUcmVlbWFwU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCd0cmVlbWFwJz4ge1xuICB6bGV2ZWw/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIGxlZnQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcD86IHN0cmluZyB8IG51bWJlcjtcbiAgcmlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbT86IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgc3F1YXJlUmF0aW8/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGxlYWZEZXB0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgZHJpbGxEb3duSWNvbj86IHN0cmluZztcbiAgcm9hbT86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIG5vZGVDbGljaz86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIHpvb21Ub05vZGVSYXRpbz86IHN0cmluZyB8IG51bWJlcjtcbiAgbGV2ZWxzPzogYW55W107XG4gIHNpbGVudD86IGJvb2xlYW47XG4gIHZpc3VhbERpbWVuc2lvbj86IHN0cmluZyB8IG51bWJlcjtcbiAgdmlzdWFsTWluPzogc3RyaW5nIHwgbnVtYmVyO1xuICB2aXN1YWxNYXg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGNvbG9yQWxwaGE/OiBhbnlbXTtcbiAgY29sb3JTYXR1cmF0aW9uPzogc3RyaW5nIHwgbnVtYmVyO1xuICBjb2xvck1hcHBpbmdCeT86IHN0cmluZztcbiAgdmlzaWJsZU1pbj86IHN0cmluZyB8IG51bWJlcjtcbiAgY2hpbGRyZW5WaXNpYmxlTWluPzogc3RyaW5nIHwgbnVtYmVyO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIHVwcGVyTGFiZWw/OiBJVGRUcmVlbWFwVXBwZXJMYWJlbDtcbiAgYnJlYWRjcnVtYj86IElUZFRyZWVtYXBCcmVhZGNydW1iO1xuICBlbXBoYXNpcz86IElUZFRyZWVtYXBFbXBoYXNpcztcbiAgZGF0YTogYW55W107XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC10cmVlbWFwXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc1RyZWVtYXBDb21wb25lbnQpLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1RyZWVtYXBDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwndHJlZW1hcCc+IGltcGxlbWVudHMgSVRkVHJlZW1hcFNlcmllcyB7XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ2RhdGEnKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcbiAgQElucHV0KCdsZWZ0JykgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3RvcCcpIHRvcDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3JpZ2h0JykgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdib3R0b20nKSBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd3aWR0aCcpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnc3F1YXJlUmF0aW8nKSBzcXVhcmVSYXRpbzogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2xlYWZEZXB0aCcpIGxlYWZEZXB0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2RyaWxsRG93bkljb24nKSBkcmlsbERvd25JY29uOiBzdHJpbmc7XG4gIEBJbnB1dCgncm9hbScpIHJvYW06IGJvb2xlYW4gfCBzdHJpbmc7XG4gIEBJbnB1dCgnbm9kZUNsaWNrJykgbm9kZUNsaWNrOiBib29sZWFuIHwgc3RyaW5nO1xuICBASW5wdXQoJ3pvb21Ub05vZGVSYXRpbycpIHpvb21Ub05vZGVSYXRpbzogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2xldmVscycpIGxldmVsczogYW55W107XG4gIEBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuICBASW5wdXQoJ3Zpc3VhbERpbWVuc2lvbicpIHZpc3VhbERpbWVuc2lvbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3Zpc3VhbE1pbicpIHZpc3VhbE1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3Zpc3VhbE1heCcpIHZpc3VhbE1heDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2NvbG9yQWxwaGEnKSBjb2xvckFscGhhOiBhbnlbXTtcbiAgQElucHV0KCdjb2xvclNhdHVyYXRpb24nKSBjb2xvclNhdHVyYXRpb246IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdjb2xvck1hcHBpbmdCeScpIGNvbG9yTWFwcGluZ0J5OiBzdHJpbmc7XG4gIEBJbnB1dCgndmlzaWJsZU1pbicpIHZpc2libGVNaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdjaGlsZHJlblZpc2libGVNaW4nKSBjaGlsZHJlblZpc2libGVNaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCd1cHBlckxhYmVsJykgdXBwZXJMYWJlbDogSVRkVHJlZW1hcFVwcGVyTGFiZWw7XG4gIEBJbnB1dCgnYnJlYWRjcnVtYicpIGJyZWFkY3J1bWI6IElUZFRyZWVtYXBCcmVhZGNydW1iO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZFRyZWVtYXBFbXBoYXNpcztcbiAgQElucHV0KCd0b29sdGlwJykgdG9vbHRpcDogSVRkU2VyaWVzVG9vbHRpcDtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd0cmVlbWFwJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIHNxdWFyZVJhdGlvOiB0aGlzLnNxdWFyZVJhdGlvLFxuICAgICAgbGVhZkRlcHRoOiB0aGlzLmxlYWZEZXB0aCxcbiAgICAgIGRyaWxsRG93bkljb246IHRoaXMuZHJpbGxEb3duSWNvbixcbiAgICAgIHJvYW06IHRoaXMucm9hbSxcbiAgICAgIG5vZGVDbGljazogdGhpcy5ub2RlQ2xpY2ssXG4gICAgICB6b29tVG9Ob2RlUmF0aW86IHRoaXMuem9vbVRvTm9kZVJhdGlvLFxuICAgICAgbGV2ZWxzOiB0aGlzLmxldmVscyxcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgICB2aXN1YWxEaW1lbnNpb246IHRoaXMudmlzdWFsRGltZW5zaW9uLFxuICAgICAgdmlzdWFsTWluOiB0aGlzLnZpc3VhbE1pbixcbiAgICAgIHZpc3VhbE1heDogdGhpcy52aXN1YWxNYXgsXG4gICAgICBjb2xvckFscGhhOiB0aGlzLmNvbG9yQWxwaGEsXG4gICAgICBjb2xvclNhdHVyYXRpb246IHRoaXMuY29sb3JTYXR1cmF0aW9uLFxuICAgICAgY29sb3JNYXBwaW5nQnk6IHRoaXMuY29sb3JNYXBwaW5nQnksXG4gICAgICB2aXNpYmxlTWluOiB0aGlzLnZpc2libGVNaW4sXG4gICAgICBjaGlsZHJlblZpc2libGVNaW46IHRoaXMuY2hpbGRyZW5WaXNpYmxlTWluLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgdXBwZXJMYWJlbDogdGhpcy51cHBlckxhYmVsLFxuICAgICAgYnJlYWRjcnVtYjogdGhpcy5icmVhZGNydW1iLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgfTtcbiAgfVxufVxuIl19