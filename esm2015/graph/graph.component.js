/**
 * @fileoverview added by tsickle
 * Generated from: graph.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesDirective, } from '@covalent/echarts/base';
/**
 * @record
 */
export function ITdCategories() { }
if (false) {
    /** @type {?|undefined} */
    ITdCategories.prototype.name;
    /** @type {?|undefined} */
    ITdCategories.prototype.symbol;
    /** @type {?|undefined} */
    ITdCategories.prototype.symbolSize;
    /** @type {?|undefined} */
    ITdCategories.prototype.symbolRotate;
    /** @type {?|undefined} */
    ITdCategories.prototype.symbolKeepAspect;
    /** @type {?} */
    ITdCategories.prototype.symbolOffset;
    /** @type {?} */
    ITdCategories.prototype.itemStyle;
    /** @type {?} */
    ITdCategories.prototype.label;
    /** @type {?} */
    ITdCategories.prototype.emphasis;
}
/**
 * @record
 */
export function ITdGraphForce() { }
if (false) {
    /** @type {?|undefined} */
    ITdGraphForce.prototype.initLayout;
    /** @type {?|undefined} */
    ITdGraphForce.prototype.repulsion;
    /** @type {?|undefined} */
    ITdGraphForce.prototype.gravity;
    /** @type {?|undefined} */
    ITdGraphForce.prototype.edgeLength;
    /** @type {?|undefined} */
    ITdGraphForce.prototype.layoutAnimation;
}
/**
 * @record
 */
export function ITdGraphSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.legendHoverLink;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.coordinateSystem;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.xAxisIndex;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.yAxisIndex;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.polarIndex;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.calendarIndex;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.geoIndex;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.hoverAnimation;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.circular;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.force;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.layout;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.nodeScaleRatio;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.draggable;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.symbol;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.symbolSize;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.symbolRotate;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.symbolKeepAspect;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.symbolOffset;
    /** @type {?} */
    ITdGraphSeries.prototype.focusNodeAdjacency;
    /** @type {?} */
    ITdGraphSeries.prototype.edgeSymbol;
    /** @type {?} */
    ITdGraphSeries.prototype.edgeSymbolSize;
    /** @type {?} */
    ITdGraphSeries.prototype.cursor;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.roam;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.expandAndCollapse;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.initialTreeDepth;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.lineStyle;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.label;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.edgeLabel;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.emphasis;
    /** @type {?} */
    ITdGraphSeries.prototype.categories;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.data;
    /** @type {?} */
    ITdGraphSeries.prototype.nodes;
    /** @type {?} */
    ITdGraphSeries.prototype.links;
    /** @type {?} */
    ITdGraphSeries.prototype.edges;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.markPoint;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.markLine;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.markArea;
    /** @type {?} */
    ITdGraphSeries.prototype.zlevel;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.z;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.silent;
    /** @type {?} */
    ITdGraphSeries.prototype.left;
    /** @type {?} */
    ITdGraphSeries.prototype.top;
    /** @type {?} */
    ITdGraphSeries.prototype.right;
    /** @type {?} */
    ITdGraphSeries.prototype.bottom;
    /** @type {?} */
    ITdGraphSeries.prototype.width;
    /** @type {?} */
    ITdGraphSeries.prototype.height;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.animation;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.animationThreshold;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.animationDuration;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.animationEasing;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.animationDelay;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.animationDurationUpdate;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.animationEasingUpdate;
    /** @type {?|undefined} */
    ITdGraphSeries.prototype.animationDelayUpdate;
}
export class TdChartSeriesGraphComponent extends TdSeriesDirective {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('graph', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            legendHoverLink: this.legendHoverLink,
            coordinateSystem: this.coordinateSystem,
            xAxisIndex: this.xAxisIndex,
            yAxisIndex: this.yAxisIndex,
            polarIndex: this.polarIndex,
            calendarIndex: this.calendarIndex,
            geoIndex: this.geoIndex,
            hoverAnimation: this.hoverAnimation,
            circular: this.circular,
            force: this.force,
            layout: this.layout,
            nodeScaleRatio: this.nodeScaleRatio,
            draggable: this.draggable,
            symbol: this.symbol,
            symbolSize: this.symbolSize,
            symbolRotate: this.symbolRotate,
            symbolKeepAspect: this.symbolKeepAspect,
            symbolOffset: this.symbolOffset,
            focusNodeAdjacency: this.focusNodeAdjacency,
            edgeSymbol: this.edgeSymbol,
            edgeSymbolSize: this.edgeSymbolSize,
            cursor: this.cursor,
            roam: this.roam,
            itemStyle: this.itemStyle,
            lineStyle: this.lineStyle,
            label: this.label,
            edgeLabel: this.edgeLabel,
            emphasis: this.emphasis,
            categories: this.categories,
            nodes: this.nodes,
            links: this.links,
            edges: this.edges,
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            silent: this.silent,
            left: this.left,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            width: this.width,
            height: this.height,
        };
    }
}
TdChartSeriesGraphComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-graph]',
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
                        () => TdChartSeriesGraphComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesGraphComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesGraphComponent.propDecorators = {
    legendHoverLink: [{ type: Input }],
    coordinateSystem: [{ type: Input }],
    xAxisIndex: [{ type: Input }],
    yAxisIndex: [{ type: Input }],
    polarIndex: [{ type: Input }],
    calendarIndex: [{ type: Input }],
    geoIndex: [{ type: Input }],
    hoverAnimation: [{ type: Input }],
    circular: [{ type: Input }],
    force: [{ type: Input }],
    layout: [{ type: Input }],
    nodeScaleRatio: [{ type: Input }],
    draggable: [{ type: Input }],
    symbol: [{ type: Input }],
    symbolSize: [{ type: Input }],
    symbolRotate: [{ type: Input }],
    symbolKeepAspect: [{ type: Input }],
    symbolOffset: [{ type: Input }],
    focusNodeAdjacency: [{ type: Input }],
    edgeSymbol: [{ type: Input }],
    edgeSymbolSize: [{ type: Input }],
    cursor: [{ type: Input }],
    roam: [{ type: Input }],
    initialTreeDepth: [{ type: Input }],
    itemStyle: [{ type: Input }],
    lineStyle: [{ type: Input }],
    label: [{ type: Input }],
    edgeLabel: [{ type: Input }],
    emphasis: [{ type: Input }],
    categories: [{ type: Input }],
    nodes: [{ type: Input }],
    links: [{ type: Input }],
    edges: [{ type: Input }],
    markPoint: [{ type: Input }],
    markLine: [{ type: Input }],
    markArea: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }],
    silent: [{ type: Input }],
    left: [{ type: Input }],
    top: [{ type: Input }],
    right: [{ type: Input }],
    bottom: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.legendHoverLink;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.coordinateSystem;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.xAxisIndex;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.yAxisIndex;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.polarIndex;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.calendarIndex;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.geoIndex;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.hoverAnimation;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.circular;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.force;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.layout;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.nodeScaleRatio;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.draggable;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.symbol;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.symbolSize;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.symbolRotate;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.symbolKeepAspect;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.symbolOffset;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.focusNodeAdjacency;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.edgeSymbol;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.edgeSymbolSize;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.cursor;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.roam;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.initialTreeDepth;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.itemStyle;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.lineStyle;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.label;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.edgeLabel;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.emphasis;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.categories;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.nodes;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.links;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.edges;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.markPoint;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.markLine;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.markArea;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.zlevel;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.z;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.silent;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.left;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.top;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.right;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.bottom;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.width;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.height;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2VjaGFydHMvZ3JhcGgvZ3JhcGguY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRGLE9BQU8sRUFDTCxxQkFBcUIsRUFVckIsaUJBQWlCLEdBSWxCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFaEMsbUNBVUM7OztJQVRDLDZCQUFjOztJQUNkLCtCQUFvQzs7SUFDcEMsbUNBQTRCOztJQUM1QixxQ0FBc0I7O0lBQ3RCLHlDQUEyQjs7SUFDM0IscUNBQW9COztJQUNwQixrQ0FBd0I7O0lBQ3hCLDhCQUFnQjs7SUFDaEIsaUNBQXNCOzs7OztBQUd4QixtQ0FNQzs7O0lBTEMsbUNBQW9COztJQUNwQixrQ0FBeUI7O0lBQ3pCLGdDQUFpQjs7SUFDakIsbUNBQTBCOztJQUMxQix3Q0FBMEI7Ozs7O0FBSzVCLG9DQXdEQzs7O0lBdkRDLHlDQUEwQjs7SUFDMUIsMENBQXNDOztJQUN0QyxvQ0FBb0I7O0lBQ3BCLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQix1Q0FBdUI7O0lBQ3ZCLGtDQUFrQjs7SUFDbEIsd0NBQXlCOztJQUN6QixrQ0FBa0I7O0lBQ2xCLCtCQUFzQjs7SUFDdEIsZ0NBQXVCOztJQUN2Qix3Q0FBeUI7O0lBQ3pCLG1DQUFvQjs7SUFDcEIsZ0NBQW9DOztJQUNwQyxvQ0FBdUM7O0lBQ3ZDLHNDQUFzQjs7SUFDdEIsMENBQTJCOztJQUMzQixzQ0FBcUI7O0lBQ3JCLDRDQUE0Qjs7SUFDNUIsb0NBQTJCOztJQUMzQix3Q0FBdUI7O0lBQ3ZCLGdDQUFlOztJQUNmLDhCQUFlOztJQUNmLDJDQUE0Qjs7SUFDNUIsMENBQTBCOztJQUMxQixtQ0FBeUI7O0lBQ3pC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QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3FCQUNMLEtBQUs7Z0JBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUNMLEtBQUs7a0JBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLOzs7O0lBNUNOLHNEQUFrQzs7SUFDbEMsdURBQThDOztJQUM5QyxpREFBNEI7O0lBQzVCLGlEQUE0Qjs7SUFDNUIsaURBQTRCOztJQUM1QixvREFBK0I7O0lBQy9CLCtDQUEwQjs7SUFDMUIscURBQWlDOztJQUNqQywrQ0FBMEI7O0lBQzFCLDRDQUE4Qjs7SUFDOUIsNkNBQStCOztJQUMvQixxREFBaUM7O0lBQ2pDLGdEQUE0Qjs7SUFDNUIsNkNBQTRDOztJQUM1QyxpREFBK0M7O0lBQy9DLG1EQUE4Qjs7SUFDOUIsdURBQW1DOztJQUNuQyxtREFBNkI7O0lBQzdCLHlEQUFxQzs7SUFDckMsaURBQW9DOztJQUNwQyxxREFBZ0M7O0lBQ2hDLDZDQUF3Qjs7SUFDeEIsMkNBQXVCOztJQUN2Qix1REFBa0M7O0lBQ2xDLGdEQUFpQzs7SUFDakMsZ0RBQWlDOztJQUNqQyw0Q0FBeUI7O0lBQ3pCLGdEQUFpQzs7SUFDakMsK0NBQStCOztJQUMvQixpREFBbUM7O0lBQ25DLDRDQUFzQjs7SUFDdEIsNENBQXNCOztJQUN0Qiw0Q0FBc0I7O0lBQ3RCLGdEQUFpQzs7SUFDakMsK0NBQStCOztJQUMvQiwrQ0FBK0I7O0lBQy9CLDZDQUF3Qjs7SUFDeEIsd0NBQW1COztJQUNuQiw2Q0FBeUI7O0lBQ3pCLDJDQUErQjs7SUFDL0IsMENBQThCOztJQUM5Qiw0Q0FBZ0M7O0lBQ2hDLDZDQUFpQzs7SUFDakMsNENBQWdDOztJQUNoQyw2Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIFRkQ29vcmRpbmF0ZVN5c3RlbSxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRFbXBoYXNpcyxcbiAgVGRTZXJpZXNMYXlvdXRCeSxcbiAgSVRkTWFya1BvaW50LFxuICBJVGRNYXJrTGluZSxcbiAgSVRkTWFya0FyZWEsXG4gIElUZFNlcmllcyxcbiAgSVRkTGFiZWwsXG4gIFRkU2VyaWVzRGlyZWN0aXZlLFxuICBUZE1hcmtQb2ludFN5bWJvbCxcbiAgSVRkTGluZVN0eWxlLFxuICBJVGRFZGdlTGFiZWwsXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZENhdGVnb3JpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgc3ltYm9sU2l6ZT86IG51bWJlciB8IGFueVtdO1xuICBzeW1ib2xSb3RhdGU/OiBudW1iZXI7XG4gIHN5bWJvbEtlZXBBc3BlY3Q/OiBib29sZWFuO1xuICBzeW1ib2xPZmZzZXQ6IGFueVtdO1xuICBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgbGFiZWw6IElUZExhYmVsO1xuICBlbXBoYXNpczogSVRkRW1waGFzaXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkR3JhcGhGb3JjZSB7XG4gIGluaXRMYXlvdXQ/OiBzdHJpbmc7XG4gIHJlcHVsc2lvbj86IGFueSB8IG51bWJlcjtcbiAgZ3Jhdml0eT86IG51bWJlcjtcbiAgZWRnZUxlbmd0aD86IGFueSB8IG51bWJlcjtcbiAgbGF5b3V0QW5pbWF0aW9uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgVGRHcmFwaExheW91dCA9ICdub25lJyB8ICdjaXJjdWxhcicgfCAnZm9yY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEdyYXBoU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzIHtcbiAgbGVnZW5kSG92ZXJMaW5rPzogYm9vbGVhbjtcbiAgY29vcmRpbmF0ZVN5c3RlbT86IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgeEF4aXNJbmRleD86IG51bWJlcjtcbiAgeUF4aXNJbmRleD86IG51bWJlcjtcbiAgcG9sYXJJbmRleD86IG51bWJlcjtcbiAgY2FsZW5kYXJJbmRleD86IG51bWJlcjtcbiAgZ2VvSW5kZXg/OiBudW1iZXI7XG4gIGhvdmVyQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgY2lyY3VsYXI/OiBvYmplY3Q7XG4gIGZvcmNlPzogSVRkR3JhcGhGb3JjZTtcbiAgbGF5b3V0PzogVGRHcmFwaExheW91dDtcbiAgbm9kZVNjYWxlUmF0aW8/OiBib29sZWFuO1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgc3ltYm9sU2l6ZT86IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldD86IGFueVtdO1xuICBmb2N1c05vZGVBZGphY2VuY3k6IGJvb2xlYW47XG4gIGVkZ2VTeW1ib2w6IGFueVtdIHwgc3RyaW5nO1xuICBlZGdlU3ltYm9sU2l6ZTogbnVtYmVyO1xuICBjdXJzb3I6IHN0cmluZztcbiAgcm9hbT86IGJvb2xlYW47XG4gIGV4cGFuZEFuZENvbGxhcHNlPzogYm9vbGVhbjtcbiAgaW5pdGlhbFRyZWVEZXB0aD86IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsaW5lU3R5bGU/OiBJVGRMaW5lU3R5bGU7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGVkZ2VMYWJlbD86IElUZEVkZ2VMYWJlbDtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgY2F0ZWdvcmllczogSVRkQ2F0ZWdvcmllcztcbiAgZGF0YT86IGFueVtdO1xuICBub2RlczogYW55W107XG4gIGxpbmtzOiBhbnlbXTtcbiAgZWRnZXM6IGFueVtdO1xuICBtYXJrUG9pbnQ/OiBJVGRNYXJrUG9pbnQ7XG4gIG1hcmtMaW5lPzogSVRkTWFya0xpbmU7XG4gIG1hcmtBcmVhPzogSVRkTWFya0FyZWE7XG4gIHpsZXZlbDogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBzaWxlbnQ/OiBib29sZWFuO1xuICBsZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcDogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIGFuaW1hdGlvbj86IGJvb2xlYW47XG4gIGFuaW1hdGlvblRocmVzaG9sZD86IG51bWJlcjtcbiAgYW5pbWF0aW9uRHVyYXRpb24/OiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgYW5pbWF0aW9uRWFzaW5nPzogc3RyaW5nO1xuICBhbmltYXRpb25EZWxheT86IG51bWJlciB8IEZ1bmN0aW9uO1xuICBhbmltYXRpb25EdXJhdGlvblVwZGF0ZT86IG51bWJlciB8IEZ1bmN0aW9uO1xuICBhbmltYXRpb25FYXNpbmdVcGRhdGU/OiBzdHJpbmc7XG4gIGFuaW1hdGlvbkRlbGF5VXBkYXRlPzogbnVtYmVyIHwgRnVuY3Rpb247XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC1ncmFwaF0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnY29uZmlnJyxcbiAgICAnaWQnLFxuICAgICduYW1lJyxcbiAgICAnY29sb3InLFxuICAgICdkYXRhJyxcblxuICAgICdhbmltYXRpb24nLFxuICAgICdhbmltYXRpb25UaHJlc2hvbGQnLFxuICAgICdhbmltYXRpb25EdXJhdGlvbicsXG4gICAgJ2FuaW1hdGlvbkVhc2luZycsXG4gICAgJ2FuaW1hdGlvbkRlbGF5JyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUnLFxuICAgICdhbmltYXRpb25FYXNpbmdVcGRhdGUnLFxuICAgICdhbmltYXRpb25EZWxheVVwZGF0ZScsXG4gICAgJ3Rvb2x0aXAnLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUZFNlcmllc0RpcmVjdGl2ZSxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNHcmFwaENvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc0dyYXBoQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNEaXJlY3RpdmUgaW1wbGVtZW50cyBJVGRHcmFwaFNlcmllcyB7XG4gIEBJbnB1dCgpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCkgY29vcmRpbmF0ZVN5c3RlbTogVGRDb29yZGluYXRlU3lzdGVtO1xuICBASW5wdXQoKSB4QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHlBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgcG9sYXJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBjYWxlbmRhckluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGdlb0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIGhvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoKSBjaXJjdWxhcjogb2JqZWN0O1xuICBASW5wdXQoKSBmb3JjZTogSVRkR3JhcGhGb3JjZTtcbiAgQElucHV0KCkgbGF5b3V0OiBUZEdyYXBoTGF5b3V0O1xuICBASW5wdXQoKSBub2RlU2NhbGVSYXRpbzogYm9vbGVhbjtcbiAgQElucHV0KCkgZHJhZ2dhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBzeW1ib2w6IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBASW5wdXQoKSBzeW1ib2xTaXplOiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBASW5wdXQoKSBzeW1ib2xSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCkgc3ltYm9sS2VlcEFzcGVjdDogYm9vbGVhbjtcbiAgQElucHV0KCkgc3ltYm9sT2Zmc2V0OiBhbnlbXTtcbiAgQElucHV0KCkgZm9jdXNOb2RlQWRqYWNlbmN5OiBib29sZWFuO1xuICBASW5wdXQoKSBlZGdlU3ltYm9sOiBhbnlbXSB8IHN0cmluZztcbiAgQElucHV0KCkgZWRnZVN5bWJvbFNpemU6IG51bWJlcjtcbiAgQElucHV0KCkgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHJvYW06IGJvb2xlYW47XG4gIEBJbnB1dCgpIGluaXRpYWxUcmVlRGVwdGg6IG51bWJlcjtcbiAgQElucHV0KCkgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgpIGxpbmVTdHlsZTogSVRkTGluZVN0eWxlO1xuICBASW5wdXQoKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgpIGVkZ2VMYWJlbDogSVRkRWRnZUxhYmVsO1xuICBASW5wdXQoKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgpIGNhdGVnb3JpZXM6IElUZENhdGVnb3JpZXM7XG4gIEBJbnB1dCgpIG5vZGVzOiBhbnlbXTtcbiAgQElucHV0KCkgbGlua3M6IGFueVtdO1xuICBASW5wdXQoKSBlZGdlczogYW55W107XG4gIEBJbnB1dCgpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCkgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgpIHo6IG51bWJlcjtcbiAgQElucHV0KCkgc2lsZW50OiBib29sZWFuO1xuICBASW5wdXQoKSBsZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHRvcDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcignZ3JhcGgnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZ2VuZEhvdmVyTGluazogdGhpcy5sZWdlbmRIb3ZlckxpbmssXG4gICAgICBjb29yZGluYXRlU3lzdGVtOiB0aGlzLmNvb3JkaW5hdGVTeXN0ZW0sXG4gICAgICB4QXhpc0luZGV4OiB0aGlzLnhBeGlzSW5kZXgsXG4gICAgICB5QXhpc0luZGV4OiB0aGlzLnlBeGlzSW5kZXgsXG4gICAgICBwb2xhckluZGV4OiB0aGlzLnBvbGFySW5kZXgsXG4gICAgICBjYWxlbmRhckluZGV4OiB0aGlzLmNhbGVuZGFySW5kZXgsXG4gICAgICBnZW9JbmRleDogdGhpcy5nZW9JbmRleCxcbiAgICAgIGhvdmVyQW5pbWF0aW9uOiB0aGlzLmhvdmVyQW5pbWF0aW9uLFxuICAgICAgY2lyY3VsYXI6IHRoaXMuY2lyY3VsYXIsXG4gICAgICBmb3JjZTogdGhpcy5mb3JjZSxcbiAgICAgIGxheW91dDogdGhpcy5sYXlvdXQsXG4gICAgICBub2RlU2NhbGVSYXRpbzogdGhpcy5ub2RlU2NhbGVSYXRpbyxcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUsXG4gICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgc3ltYm9sU2l6ZTogdGhpcy5zeW1ib2xTaXplLFxuICAgICAgc3ltYm9sUm90YXRlOiB0aGlzLnN5bWJvbFJvdGF0ZSxcbiAgICAgIHN5bWJvbEtlZXBBc3BlY3Q6IHRoaXMuc3ltYm9sS2VlcEFzcGVjdCxcbiAgICAgIHN5bWJvbE9mZnNldDogdGhpcy5zeW1ib2xPZmZzZXQsXG4gICAgICBmb2N1c05vZGVBZGphY2VuY3k6IHRoaXMuZm9jdXNOb2RlQWRqYWNlbmN5LFxuICAgICAgZWRnZVN5bWJvbDogdGhpcy5lZGdlU3ltYm9sLFxuICAgICAgZWRnZVN5bWJvbFNpemU6IHRoaXMuZWRnZVN5bWJvbFNpemUsXG4gICAgICBjdXJzb3I6IHRoaXMuY3Vyc29yLFxuICAgICAgcm9hbTogdGhpcy5yb2FtLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxpbmVTdHlsZTogdGhpcy5saW5lU3R5bGUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGVkZ2VMYWJlbDogdGhpcy5lZGdlTGFiZWwsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcbiAgICAgIG5vZGVzOiB0aGlzLm5vZGVzLFxuICAgICAgbGlua3M6IHRoaXMubGlua3MsXG4gICAgICBlZGdlczogdGhpcy5lZGdlcyxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==