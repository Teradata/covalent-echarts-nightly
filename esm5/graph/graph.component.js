/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent, } from '@covalent/echarts/base';
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
var TdChartSeriesGraphComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdChartSeriesGraphComponent, _super);
    function TdChartSeriesGraphComponent(_optionsService) {
        return _super.call(this, 'graph', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesGraphComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
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
    };
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
                            provide: TdSeriesComponent,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdChartSeriesGraphComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesGraphComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesGraphComponent.propDecorators = {
        legendHoverLink: [{ type: Input, args: ['legendHoverLink',] }],
        coordinateSystem: [{ type: Input, args: ['coordinateSystem',] }],
        xAxisIndex: [{ type: Input, args: ['xAxisIndex',] }],
        yAxisIndex: [{ type: Input, args: ['yAxisIndex',] }],
        polarIndex: [{ type: Input, args: ['polarIndex',] }],
        calendarIndex: [{ type: Input, args: ['calendarIndex',] }],
        geoIndex: [{ type: Input, args: ['geoIndex',] }],
        hoverAnimation: [{ type: Input, args: ['hoverAnimation',] }],
        circular: [{ type: Input, args: ['circular',] }],
        force: [{ type: Input, args: ['force',] }],
        layout: [{ type: Input, args: ['layout',] }],
        nodeScaleRatio: [{ type: Input, args: ['nodeScaleRatio',] }],
        draggable: [{ type: Input, args: ['draggable',] }],
        symbol: [{ type: Input, args: ['symbol',] }],
        symbolSize: [{ type: Input, args: ['symbolSize',] }],
        symbolRotate: [{ type: Input, args: ['symbolRotate',] }],
        symbolKeepAspect: [{ type: Input, args: ['symbolKeepAspect',] }],
        symbolOffset: [{ type: Input, args: ['symbolOffset',] }],
        focusNodeAdjacency: [{ type: Input, args: ['focusNodeAdjacency',] }],
        edgeSymbol: [{ type: Input, args: ['edgeSymbol',] }],
        edgeSymbolSize: [{ type: Input, args: ['edgeSymbolSize',] }],
        cursor: [{ type: Input, args: ['cursor',] }],
        roam: [{ type: Input, args: ['roam',] }],
        initialTreeDepth: [{ type: Input, args: ['initialTreeDepth',] }],
        itemStyle: [{ type: Input, args: ['itemStyle',] }],
        lineStyle: [{ type: Input, args: ['lineStyle',] }],
        label: [{ type: Input, args: ['label',] }],
        edgeLabel: [{ type: Input, args: ['edgeLabel',] }],
        emphasis: [{ type: Input, args: ['emphasis',] }],
        categories: [{ type: Input, args: ['categories',] }],
        nodes: [{ type: Input, args: ['nodes',] }],
        links: [{ type: Input, args: ['links',] }],
        edges: [{ type: Input, args: ['edges',] }],
        markPoint: [{ type: Input, args: ['markPoint',] }],
        markLine: [{ type: Input, args: ['markLine',] }],
        markArea: [{ type: Input, args: ['markArea',] }],
        zlevel: [{ type: Input, args: ['zlevel',] }],
        z: [{ type: Input, args: ['z',] }],
        silent: [{ type: Input, args: ['silent',] }],
        left: [{ type: Input, args: ['left',] }],
        top: [{ type: Input, args: ['top',] }],
        right: [{ type: Input, args: ['right',] }],
        bottom: [{ type: Input, args: ['bottom',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }]
    };
    return TdChartSeriesGraphComponent;
}(TdSeriesComponent));
export { TdChartSeriesGraphComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvZ3JhcGgvIiwic291cmNlcyI6WyJncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUNMLHFCQUFxQixFQVVyQixpQkFBaUIsR0FJbEIsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVoQyxtQ0FVQzs7O0lBVEMsNkJBQWM7O0lBQ2QsK0JBQW9DOztJQUNwQyxtQ0FBNEI7O0lBQzVCLHFDQUFzQjs7SUFDdEIseUNBQTJCOztJQUMzQixxQ0FBb0I7O0lBQ3BCLGtDQUF3Qjs7SUFDeEIsOEJBQWdCOztJQUNoQixpQ0FBc0I7Ozs7O0FBR3hCLG1DQU1DOzs7SUFMQyxtQ0FBb0I7O0lBQ3BCLGtDQUF5Qjs7SUFDekIsZ0NBQWlCOztJQUNqQixtQ0FBMEI7O0lBQzFCLHdDQUEwQjs7Ozs7QUFLNUIsb0NBd0RDOzs7SUF2REMseUNBQTBCOztJQUMxQiwwQ0FBc0M7O0lBQ3RDLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQixvQ0FBb0I7O0lBQ3BCLHVDQUF1Qjs7SUFDdkIsa0NBQWtCOztJQUNsQix3Q0FBeUI7O0lBQ3pCLGtDQUFrQjs7SUFDbEIsK0JBQXNCOztJQUN0QixnQ0FBdUI7O0lBQ3ZCLHdDQUF5Qjs7SUFDekIsbUNBQW9COztJQUNwQixnQ0FBb0M7O0lBQ3BDLG9DQUF1Qzs7SUFDdkMsc0NBQXNCOztJQUN0QiwwQ0FBMkI7O0lBQzNCLHNDQUFxQjs7SUFDckIsNENBQTRCOztJQUM1QixvQ0FBMkI7O0lBQzNCLHdDQUF1Qjs7SUFDdkIsZ0NBQWU7O0lBQ2YsOEJBQWU7O0lBQ2YsMkNBQTRCOztJQUM1QiwwQ0FBMEI7O0lBQzFCLG1DQUF5Qjs7SUFDekIsbUNBQXlCOztJQUN6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NUMsdURBQXFEOztJQUNyRCxtREFBMkM7O0lBQzNDLHlEQUF5RDs7SUFDekQsaURBQWdEOztJQUNoRCxxREFBZ0Q7O0lBQ2hELDZDQUFnQzs7SUFDaEMsMkNBQTZCOztJQUM3Qix1REFBb0Q7O0lBQ3BELGdEQUE0Qzs7SUFDNUMsZ0RBQTRDOztJQUM1Qyw0Q0FBZ0M7O0lBQ2hDLGdEQUE0Qzs7SUFDNUMsK0NBQXlDOztJQUN6QyxpREFBK0M7O0lBQy9DLDRDQUE2Qjs7SUFDN0IsNENBQTZCOztJQUM3Qiw0Q0FBNkI7O0lBQzdCLGdEQUE0Qzs7SUFDNUMsK0NBQXlDOztJQUN6QywrQ0FBeUM7O0lBQ3pDLDZDQUFnQzs7SUFDaEMsd0NBQXNCOztJQUN0Qiw2Q0FBaUM7O0lBQ2pDLDJDQUFxQzs7SUFDckMsMENBQW1DOztJQUNuQyw0Q0FBdUM7O0lBQ3ZDLDZDQUF5Qzs7SUFDekMsNENBQXVDOztJQUN2Qyw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIFRkQ29vcmRpbmF0ZVN5c3RlbSxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRFbXBoYXNpcyxcbiAgVGRTZXJpZXNMYXlvdXRCeSxcbiAgSVRkTWFya1BvaW50LFxuICBJVGRNYXJrTGluZSxcbiAgSVRkTWFya0FyZWEsXG4gIElUZFNlcmllcyxcbiAgSVRkTGFiZWwsXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxuICBUZE1hcmtQb2ludFN5bWJvbCxcbiAgSVRkTGluZVN0eWxlLFxuICBJVGRFZGdlTGFiZWwsXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZENhdGVnb3JpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgc3ltYm9sU2l6ZT86IG51bWJlciB8IGFueVtdO1xuICBzeW1ib2xSb3RhdGU/OiBudW1iZXI7XG4gIHN5bWJvbEtlZXBBc3BlY3Q/OiBib29sZWFuO1xuICBzeW1ib2xPZmZzZXQ6IGFueVtdO1xuICBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgbGFiZWw6IElUZExhYmVsO1xuICBlbXBoYXNpczogSVRkRW1waGFzaXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkR3JhcGhGb3JjZSB7XG4gIGluaXRMYXlvdXQ/OiBzdHJpbmc7XG4gIHJlcHVsc2lvbj86IGFueSB8IG51bWJlcjtcbiAgZ3Jhdml0eT86IG51bWJlcjtcbiAgZWRnZUxlbmd0aD86IGFueSB8IG51bWJlcjtcbiAgbGF5b3V0QW5pbWF0aW9uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgVGRHcmFwaExheW91dCA9ICdub25lJyB8ICdjaXJjdWxhcicgfCAnZm9yY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEdyYXBoU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdncmFwaCc+IHtcbiAgbGVnZW5kSG92ZXJMaW5rPzogYm9vbGVhbjtcbiAgY29vcmRpbmF0ZVN5c3RlbT86IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgeEF4aXNJbmRleD86IG51bWJlcjtcbiAgeUF4aXNJbmRleD86IG51bWJlcjtcbiAgcG9sYXJJbmRleD86IG51bWJlcjtcbiAgY2FsZW5kYXJJbmRleD86IG51bWJlcjtcbiAgZ2VvSW5kZXg/OiBudW1iZXI7XG4gIGhvdmVyQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgY2lyY3VsYXI/OiBvYmplY3Q7XG4gIGZvcmNlPzogSVRkR3JhcGhGb3JjZTtcbiAgbGF5b3V0PzogVGRHcmFwaExheW91dDtcbiAgbm9kZVNjYWxlUmF0aW8/OiBib29sZWFuO1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgc3ltYm9sU2l6ZT86IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldD86IGFueVtdO1xuICBmb2N1c05vZGVBZGphY2VuY3k6IGJvb2xlYW47XG4gIGVkZ2VTeW1ib2w6IGFueVtdIHwgc3RyaW5nO1xuICBlZGdlU3ltYm9sU2l6ZTogbnVtYmVyO1xuICBjdXJzb3I6IHN0cmluZztcbiAgcm9hbT86IGJvb2xlYW47XG4gIGV4cGFuZEFuZENvbGxhcHNlPzogYm9vbGVhbjtcbiAgaW5pdGlhbFRyZWVEZXB0aD86IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsaW5lU3R5bGU/OiBJVGRMaW5lU3R5bGU7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGVkZ2VMYWJlbD86IElUZEVkZ2VMYWJlbDtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgY2F0ZWdvcmllczogSVRkQ2F0ZWdvcmllcztcbiAgZGF0YT86IGFueVtdO1xuICBub2RlczogYW55W107XG4gIGxpbmtzOiBhbnlbXTtcbiAgZWRnZXM6IGFueVtdO1xuICBtYXJrUG9pbnQ/OiBJVGRNYXJrUG9pbnQ7XG4gIG1hcmtMaW5lPzogSVRkTWFya0xpbmU7XG4gIG1hcmtBcmVhPzogSVRkTWFya0FyZWE7XG4gIHpsZXZlbDogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBzaWxlbnQ/OiBib29sZWFuO1xuICBsZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcDogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIGFuaW1hdGlvbj86IGJvb2xlYW47XG4gIGFuaW1hdGlvblRocmVzaG9sZD86IG51bWJlcjtcbiAgYW5pbWF0aW9uRHVyYXRpb24/OiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgYW5pbWF0aW9uRWFzaW5nPzogc3RyaW5nO1xuICBhbmltYXRpb25EZWxheT86IG51bWJlciB8IEZ1bmN0aW9uO1xuICBhbmltYXRpb25EdXJhdGlvblVwZGF0ZT86IG51bWJlciB8IEZ1bmN0aW9uO1xuICBhbmltYXRpb25FYXNpbmdVcGRhdGU/OiBzdHJpbmc7XG4gIGFuaW1hdGlvbkRlbGF5VXBkYXRlPzogbnVtYmVyIHwgRnVuY3Rpb247XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC1ncmFwaF0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnY29uZmlnJyxcbiAgICAnaWQnLFxuICAgICduYW1lJyxcbiAgICAnY29sb3InLFxuICAgICdkYXRhJyxcblxuICAgICdhbmltYXRpb24nLFxuICAgICdhbmltYXRpb25UaHJlc2hvbGQnLFxuICAgICdhbmltYXRpb25EdXJhdGlvbicsXG4gICAgJ2FuaW1hdGlvbkVhc2luZycsXG4gICAgJ2FuaW1hdGlvbkRlbGF5JyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUnLFxuICAgICdhbmltYXRpb25FYXNpbmdVcGRhdGUnLFxuICAgICdhbmltYXRpb25EZWxheVVwZGF0ZScsXG4gICAgJ3Rvb2x0aXAnLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNHcmFwaENvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc0dyYXBoQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J2dyYXBoJz4gaW1wbGVtZW50cyBJVGRHcmFwaFNlcmllcyB7XG4gIEBJbnB1dCgnbGVnZW5kSG92ZXJMaW5rJykgbGVnZW5kSG92ZXJMaW5rOiBib29sZWFuO1xuICBASW5wdXQoJ2Nvb3JkaW5hdGVTeXN0ZW0nKSBjb29yZGluYXRlU3lzdGVtOiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIEBJbnB1dCgneEF4aXNJbmRleCcpIHhBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCd5QXhpc0luZGV4JykgeUF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3BvbGFySW5kZXgnKSBwb2xhckluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnY2FsZW5kYXJJbmRleCcpIGNhbGVuZGFySW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdnZW9JbmRleCcpIGdlb0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnaG92ZXJBbmltYXRpb24nKSBob3ZlckFuaW1hdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCdjaXJjdWxhcicpIGNpcmN1bGFyOiBvYmplY3Q7XG4gIEBJbnB1dCgnZm9yY2UnKSBmb3JjZTogSVRkR3JhcGhGb3JjZTtcbiAgQElucHV0KCdsYXlvdXQnKSBsYXlvdXQ6IFRkR3JhcGhMYXlvdXQ7XG4gIEBJbnB1dCgnbm9kZVNjYWxlUmF0aW8nKSBub2RlU2NhbGVSYXRpbzogYm9vbGVhbjtcbiAgQElucHV0KCdkcmFnZ2FibGUnKSBkcmFnZ2FibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3ltYm9sJykgc3ltYm9sOiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgQElucHV0KCdzeW1ib2xTaXplJykgc3ltYm9sU2l6ZTogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgQElucHV0KCdzeW1ib2xSb3RhdGUnKSBzeW1ib2xSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCdzeW1ib2xLZWVwQXNwZWN0Jykgc3ltYm9sS2VlcEFzcGVjdDogYm9vbGVhbjtcbiAgQElucHV0KCdzeW1ib2xPZmZzZXQnKSBzeW1ib2xPZmZzZXQ6IGFueVtdO1xuICBASW5wdXQoJ2ZvY3VzTm9kZUFkamFjZW5jeScpIGZvY3VzTm9kZUFkamFjZW5jeTogYm9vbGVhbjtcbiAgQElucHV0KCdlZGdlU3ltYm9sJykgZWRnZVN5bWJvbDogYW55W10gfCBzdHJpbmc7XG4gIEBJbnB1dCgnZWRnZVN5bWJvbFNpemUnKSBlZGdlU3ltYm9sU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoJ2N1cnNvcicpIGN1cnNvcjogc3RyaW5nO1xuICBASW5wdXQoJ3JvYW0nKSByb2FtOiBib29sZWFuO1xuICBASW5wdXQoJ2luaXRpYWxUcmVlRGVwdGgnKSBpbml0aWFsVHJlZURlcHRoOiBudW1iZXI7XG4gIEBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgnbGluZVN0eWxlJykgbGluZVN0eWxlOiBJVGRMaW5lU3R5bGU7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgnZWRnZUxhYmVsJykgZWRnZUxhYmVsOiBJVGRFZGdlTGFiZWw7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgnY2F0ZWdvcmllcycpIGNhdGVnb3JpZXM6IElUZENhdGVnb3JpZXM7XG4gIEBJbnB1dCgnbm9kZXMnKSBub2RlczogYW55W107XG4gIEBJbnB1dCgnbGlua3MnKSBsaW5rczogYW55W107XG4gIEBJbnB1dCgnZWRnZXMnKSBlZGdlczogYW55W107XG4gIEBJbnB1dCgnbWFya1BvaW50JykgbWFya1BvaW50OiBJVGRNYXJrUG9pbnQ7XG4gIEBJbnB1dCgnbWFya0xpbmUnKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgnbWFya0FyZWEnKSBtYXJrQXJlYTogSVRkTWFya0FyZWE7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcbiAgQElucHV0KCdzaWxlbnQnKSBzaWxlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgnbGVmdCcpIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdyaWdodCcpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnYm90dG9tJykgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ2dyYXBoJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBsZWdlbmRIb3Zlckxpbms6IHRoaXMubGVnZW5kSG92ZXJMaW5rLFxuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogdGhpcy5jb29yZGluYXRlU3lzdGVtLFxuICAgICAgeEF4aXNJbmRleDogdGhpcy54QXhpc0luZGV4LFxuICAgICAgeUF4aXNJbmRleDogdGhpcy55QXhpc0luZGV4LFxuICAgICAgcG9sYXJJbmRleDogdGhpcy5wb2xhckluZGV4LFxuICAgICAgY2FsZW5kYXJJbmRleDogdGhpcy5jYWxlbmRhckluZGV4LFxuICAgICAgZ2VvSW5kZXg6IHRoaXMuZ2VvSW5kZXgsXG4gICAgICBob3ZlckFuaW1hdGlvbjogdGhpcy5ob3ZlckFuaW1hdGlvbixcbiAgICAgIGNpcmN1bGFyOiB0aGlzLmNpcmN1bGFyLFxuICAgICAgZm9yY2U6IHRoaXMuZm9yY2UsXG4gICAgICBsYXlvdXQ6IHRoaXMubGF5b3V0LFxuICAgICAgbm9kZVNjYWxlUmF0aW86IHRoaXMubm9kZVNjYWxlUmF0aW8sXG4gICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgIHN5bWJvbFNpemU6IHRoaXMuc3ltYm9sU2l6ZSxcbiAgICAgIHN5bWJvbFJvdGF0ZTogdGhpcy5zeW1ib2xSb3RhdGUsXG4gICAgICBzeW1ib2xLZWVwQXNwZWN0OiB0aGlzLnN5bWJvbEtlZXBBc3BlY3QsXG4gICAgICBzeW1ib2xPZmZzZXQ6IHRoaXMuc3ltYm9sT2Zmc2V0LFxuICAgICAgZm9jdXNOb2RlQWRqYWNlbmN5OiB0aGlzLmZvY3VzTm9kZUFkamFjZW5jeSxcbiAgICAgIGVkZ2VTeW1ib2w6IHRoaXMuZWRnZVN5bWJvbCxcbiAgICAgIGVkZ2VTeW1ib2xTaXplOiB0aGlzLmVkZ2VTeW1ib2xTaXplLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIHJvYW06IHRoaXMucm9hbSxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBsaW5lU3R5bGU6IHRoaXMubGluZVN0eWxlLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBlZGdlTGFiZWw6IHRoaXMuZWRnZUxhYmVsLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXG4gICAgICBub2RlczogdGhpcy5ub2RlcyxcbiAgICAgIGxpbmtzOiB0aGlzLmxpbmtzLFxuICAgICAgZWRnZXM6IHRoaXMuZWRnZXMsXG4gICAgICBtYXJrUG9pbnQ6IHRoaXMubWFya1BvaW50LFxuICAgICAgbWFya0xpbmU6IHRoaXMubWFya0xpbmUsXG4gICAgICBtYXJrQXJlYTogdGhpcy5tYXJrQXJlYSxcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICB9O1xuICB9XG59XG4iXX0=