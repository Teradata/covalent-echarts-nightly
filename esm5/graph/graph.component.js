/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, forwardRef, } from '@angular/core';
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
            id: this.id,
            type: this.type,
            name: this.name,
            color: this.color,
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
            data: this.data,
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
            animation: this.animation,
            animationThreshold: this.animationThreshold,
            animationDuration: this.animationDuration,
            animationEasing: this.animationEasing,
            animationDelay: this.animationDelay,
            animationDurationUpdate: this.animationDurationUpdate,
            animationEasingUpdate: this.animationEasingUpdate,
            animationDelayUpdate: this.animationDelayUpdate,
            tooltip: this.tooltip,
        };
    };
    TdChartSeriesGraphComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-graph]',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: TdSeriesComponent, useExisting: forwardRef(function () { return TdChartSeriesGraphComponent; }),
                        }]
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
        data: [{ type: Input, args: ['data',] }],
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
        height: [{ type: Input, args: ['height',] }],
        animation: [{ type: Input, args: ['animation',] }],
        animationThreshold: [{ type: Input, args: ['animationThreshold',] }],
        animationDuration: [{ type: Input, args: ['animationDuration',] }],
        animationEasing: [{ type: Input, args: ['animationEasing',] }],
        animationDelay: [{ type: Input, args: ['animationDelay',] }],
        animationDurationUpdate: [{ type: Input, args: ['animationDurationUpdate',] }],
        animationEasingUpdate: [{ type: Input, args: ['animationEasingUpdate',] }],
        animationDelayUpdate: [{ type: Input, args: ['animationDelayUpdate',] }]
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
    TdChartSeriesGraphComponent.prototype.data;
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
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.animation;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.animationThreshold;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.animationDuration;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.animationEasing;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.animationDelay;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.animationDurationUpdate;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.animationEasingUpdate;
    /** @type {?} */
    TdChartSeriesGraphComponent.prototype.animationDelayUpdate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvZ3JhcGgvIiwic291cmNlcyI6WyJncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxxQkFBcUIsRUFVckIsaUJBQWlCLEdBSWxCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFaEMsbUNBVUM7OztJQVRDLDZCQUFjOztJQUNkLCtCQUFvQzs7SUFDcEMsbUNBQTRCOztJQUM1QixxQ0FBc0I7O0lBQ3RCLHlDQUEyQjs7SUFDM0IscUNBQW9COztJQUNwQixrQ0FBd0I7O0lBQ3hCLDhCQUFnQjs7SUFDaEIsaUNBQXNCOzs7OztBQUd4QixtQ0FNQzs7O0lBTEMsbUNBQW9COztJQUNwQixrQ0FBeUI7O0lBQ3pCLGdDQUFpQjs7SUFDakIsbUNBQTBCOztJQUMxQix3Q0FBMEI7Ozs7O0FBSzVCLG9DQXdEQzs7O0lBdkRDLHlDQUEwQjs7SUFDMUIsMENBQXNDOztJQUN0QyxvQ0FBb0I7O0lBQ3BCLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQix1Q0FBdUI7O0lBQ3ZCLGtDQUFrQjs7SUFDbEIsd0NBQXlCOztJQUN6QixrQ0FBa0I7O0lBQ2xCLCtCQUFzQjs7SUFDdEIsZ0NBQXVCOztJQUN2Qix3Q0FBeUI7O0lBQ3pCLG1DQUFvQjs7SUFDcEIsZ0NBQW9DOztJQUNwQyxvQ0FBdUM7O0lBQ3ZDLHNDQUFzQjs7SUFDdEIsMENBQTJCOztJQUMzQixzQ0FBcUI7O0lBQ3JCLDRDQUE0Qjs7SUFDNUIsb0NBQTJCOztJQUMzQix3Q0FBdUI7O0lBQ3ZCLGdDQUFlOztJQUNmLDhCQUFlOztJQUNmLDJDQUE0Qjs7SUFDNUIsMENBQTBCOztJQUMxQixtQ0FBeUI7O0lBQ3pCLG1DQUF5Qjs7SUFD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SUFDeEQsd0RBQWlFOztJQUNqRSxzREFBa0Q7O0lBQ2xELHFEQUEyRDs7SUFDM0QsOERBQTZFOztJQUM3RSw0REFBOEQ7O0lBQzlELDJEQUF1RSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgVGRDb29yZGluYXRlU3lzdGVtLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZEVtcGhhc2lzLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBJVGRNYXJrUG9pbnQsXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgSVRkU2VyaWVzLFxuICBJVGRMYWJlbCxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG4gIFRkTWFya1BvaW50U3ltYm9sLFxuICBJVGRMaW5lU3R5bGUsXG4gIElUZEVkZ2VMYWJlbCxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQ2F0ZWdvcmllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN5bWJvbD86IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBzeW1ib2xTaXplPzogbnVtYmVyIHwgYW55W107XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldDogYW55W107XG4gIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBsYWJlbDogSVRkTGFiZWw7XG4gIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRHcmFwaEZvcmNlIHtcbiAgaW5pdExheW91dD86IHN0cmluZztcbiAgcmVwdWxzaW9uPzogYW55IHwgbnVtYmVyO1xuICBncmF2aXR5PzogbnVtYmVyO1xuICBlZGdlTGVuZ3RoPzogYW55IHwgbnVtYmVyO1xuICBsYXlvdXRBbmltYXRpb24/OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBUZEdyYXBoTGF5b3V0ID0gJ25vbmUnIHwgJ2NpcmN1bGFyJyB8ICdmb3JjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkR3JhcGhTZXJpZXMgZXh0ZW5kcyBJVGRTZXJpZXM8J2dyYXBoJz4ge1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBwb2xhckluZGV4PzogbnVtYmVyO1xuICBjYWxlbmRhckluZGV4PzogbnVtYmVyO1xuICBnZW9JbmRleD86IG51bWJlcjtcbiAgaG92ZXJBbmltYXRpb24/OiBib29sZWFuO1xuICBjaXJjdWxhcj86IG9iamVjdDtcbiAgZm9yY2U/OiBJVGRHcmFwaEZvcmNlO1xuICBsYXlvdXQ/OiBUZEdyYXBoTGF5b3V0OyBcbiAgbm9kZVNjYWxlUmF0aW8/OiBib29sZWFuO1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgc3ltYm9sU2l6ZT86IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldD86IGFueVtdO1xuICBmb2N1c05vZGVBZGphY2VuY3k6IGJvb2xlYW47XG4gIGVkZ2VTeW1ib2w6IGFueVtdIHwgc3RyaW5nO1xuICBlZGdlU3ltYm9sU2l6ZTogbnVtYmVyO1xuICBjdXJzb3I6IHN0cmluZztcbiAgcm9hbT86IGJvb2xlYW47XG4gIGV4cGFuZEFuZENvbGxhcHNlPzogYm9vbGVhbjtcbiAgaW5pdGlhbFRyZWVEZXB0aD86IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsaW5lU3R5bGU/OiBJVGRMaW5lU3R5bGU7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGVkZ2VMYWJlbD86IElUZEVkZ2VMYWJlbDtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgY2F0ZWdvcmllczogSVRkQ2F0ZWdvcmllcztcbiAgZGF0YT86IGFueVtdO1xuICBub2RlczogYW55W107XG4gIGxpbmtzOiBhbnlbXTtcbiAgZWRnZXM6IGFueVtdO1xuICBtYXJrUG9pbnQ/OiBJVGRNYXJrUG9pbnQ7XG4gIG1hcmtMaW5lPzogSVRkTWFya0xpbmU7XG4gIG1hcmtBcmVhPzogSVRkTWFya0FyZWE7XG4gIHpsZXZlbDogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBzaWxlbnQ/OiBib29sZWFuO1xuICBsZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcDogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIGFuaW1hdGlvbj86IGJvb2xlYW47XG4gIGFuaW1hdGlvblRocmVzaG9sZD86IG51bWJlcjtcbiAgYW5pbWF0aW9uRHVyYXRpb24/OiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgYW5pbWF0aW9uRWFzaW5nPzogc3RyaW5nO1xuICBhbmltYXRpb25EZWxheT86IG51bWJlciB8IEZ1bmN0aW9uO1xuICBhbmltYXRpb25EdXJhdGlvblVwZGF0ZT86IG51bWJlciB8IEZ1bmN0aW9uO1xuICBhbmltYXRpb25FYXNpbmdVcGRhdGU/OiBzdHJpbmc7XG4gIGFuaW1hdGlvbkRlbGF5VXBkYXRlPzogbnVtYmVyIHwgRnVuY3Rpb247XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC1ncmFwaF0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNHcmFwaENvbXBvbmVudCksXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzR3JhcGhDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwnZ3JhcGgnPiBpbXBsZW1lbnRzIElUZEdyYXBoU2VyaWVzIHtcblxuQElucHV0KCdsZWdlbmRIb3ZlckxpbmsnKSBsZWdlbmRIb3Zlckxpbms6IGJvb2xlYW47XG5ASW5wdXQoJ2Nvb3JkaW5hdGVTeXN0ZW0nKSBjb29yZGluYXRlU3lzdGVtOiBUZENvb3JkaW5hdGVTeXN0ZW07XG5ASW5wdXQoJ3hBeGlzSW5kZXgnKSB4QXhpc0luZGV4OiBudW1iZXI7XG5ASW5wdXQoJ3lBeGlzSW5kZXgnKSB5QXhpc0luZGV4OiBudW1iZXI7XG5ASW5wdXQoJ3BvbGFySW5kZXgnKSBwb2xhckluZGV4OiBudW1iZXI7XG5ASW5wdXQoJ2NhbGVuZGFySW5kZXgnKSBjYWxlbmRhckluZGV4OiBudW1iZXI7XG5ASW5wdXQoJ2dlb0luZGV4JykgZ2VvSW5kZXg6IG51bWJlcjtcbkBJbnB1dCgnaG92ZXJBbmltYXRpb24nKSBob3ZlckFuaW1hdGlvbjogYm9vbGVhbjtcbkBJbnB1dCgnY2lyY3VsYXInKSBjaXJjdWxhcjogb2JqZWN0O1xuQElucHV0KCdmb3JjZScpIGZvcmNlOiBJVGRHcmFwaEZvcmNlO1xuQElucHV0KCdsYXlvdXQnKSBsYXlvdXQ6IFRkR3JhcGhMYXlvdXQ7IFxuQElucHV0KCdub2RlU2NhbGVSYXRpbycpIG5vZGVTY2FsZVJhdGlvOiBib29sZWFuO1xuQElucHV0KCdkcmFnZ2FibGUnKSBkcmFnZ2FibGU6IGJvb2xlYW47XG5ASW5wdXQoJ3N5bWJvbCcpIHN5bWJvbDogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG5ASW5wdXQoJ3N5bWJvbFNpemUnKSBzeW1ib2xTaXplOiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuQElucHV0KCdzeW1ib2xSb3RhdGUnKSBzeW1ib2xSb3RhdGU6IG51bWJlcjtcbkBJbnB1dCgnc3ltYm9sS2VlcEFzcGVjdCcpIHN5bWJvbEtlZXBBc3BlY3Q6IGJvb2xlYW47XG5ASW5wdXQoJ3N5bWJvbE9mZnNldCcpIHN5bWJvbE9mZnNldDogYW55W107XG5ASW5wdXQoJ2ZvY3VzTm9kZUFkamFjZW5jeScpIGZvY3VzTm9kZUFkamFjZW5jeTogYm9vbGVhbjtcbkBJbnB1dCgnZWRnZVN5bWJvbCcpIGVkZ2VTeW1ib2w6IGFueVtdIHwgc3RyaW5nO1xuQElucHV0KCdlZGdlU3ltYm9sU2l6ZScpIGVkZ2VTeW1ib2xTaXplOiBudW1iZXI7XG5ASW5wdXQoJ2N1cnNvcicpIGN1cnNvcjogc3RyaW5nO1xuQElucHV0KCdyb2FtJykgcm9hbTogYm9vbGVhbjtcbkBJbnB1dCgnaW5pdGlhbFRyZWVEZXB0aCcpIGluaXRpYWxUcmVlRGVwdGg6IG51bWJlcjtcbkBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG5ASW5wdXQoJ2xpbmVTdHlsZScpIGxpbmVTdHlsZTogSVRkTGluZVN0eWxlO1xuQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbkBJbnB1dCgnZWRnZUxhYmVsJykgZWRnZUxhYmVsOiBJVGRFZGdlTGFiZWw7XG5ASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuQElucHV0KCdjYXRlZ29yaWVzJykgY2F0ZWdvcmllczogSVRkQ2F0ZWdvcmllcztcbkBJbnB1dCgnZGF0YScpIGRhdGE6IGFueVtdO1xuQElucHV0KCdub2RlcycpIG5vZGVzOiBhbnlbXTtcbkBJbnB1dCgnbGlua3MnKSBsaW5rczogYW55W107XG5ASW5wdXQoJ2VkZ2VzJykgZWRnZXM6IGFueVtdO1xuQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbkBJbnB1dCgnbWFya0xpbmUnKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG5ASW5wdXQoJ21hcmtBcmVhJykgbWFya0FyZWE6IElUZE1hcmtBcmVhO1xuQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbkBJbnB1dCgneicpIHo6IG51bWJlcjtcbkBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuQElucHV0KCdsZWZ0JykgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbkBJbnB1dCgncmlnaHQnKSByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuQElucHV0KCdib3R0b20nKSBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbkBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuQElucHV0KCdoZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbkBJbnB1dCgnYW5pbWF0aW9uJykgYW5pbWF0aW9uOiBib29sZWFuO1xuQElucHV0KCdhbmltYXRpb25UaHJlc2hvbGQnKSBhbmltYXRpb25UaHJlc2hvbGQ6IG51bWJlcjtcbkBJbnB1dCgnYW5pbWF0aW9uRHVyYXRpb24nKSBhbmltYXRpb25EdXJhdGlvbjogbnVtYmVyIHwgRnVuY3Rpb247XG5ASW5wdXQoJ2FuaW1hdGlvbkVhc2luZycpIGFuaW1hdGlvbkVhc2luZzogc3RyaW5nO1xuQElucHV0KCdhbmltYXRpb25EZWxheScpIGFuaW1hdGlvbkRlbGF5OiBudW1iZXIgfCBGdW5jdGlvbjtcbkBJbnB1dCgnYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUnKSBhbmltYXRpb25EdXJhdGlvblVwZGF0ZTogbnVtYmVyIHwgRnVuY3Rpb247XG5ASW5wdXQoJ2FuaW1hdGlvbkVhc2luZ1VwZGF0ZScpIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZTogc3RyaW5nO1xuQElucHV0KCdhbmltYXRpb25EZWxheVVwZGF0ZScpIGFuaW1hdGlvbkRlbGF5VXBkYXRlOiBudW1iZXIgfCBGdW5jdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdncmFwaCcsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgIGxlZ2VuZEhvdmVyTGluazogdGhpcy5sZWdlbmRIb3ZlckxpbmssXG4gICAgICBjb29yZGluYXRlU3lzdGVtOiB0aGlzLmNvb3JkaW5hdGVTeXN0ZW0sXG4gICAgICB4QXhpc0luZGV4OiB0aGlzLnhBeGlzSW5kZXgsXG4gICAgICB5QXhpc0luZGV4OiB0aGlzLnlBeGlzSW5kZXgsXG4gICAgICBwb2xhckluZGV4OiB0aGlzLnBvbGFySW5kZXgsXG4gICAgICBjYWxlbmRhckluZGV4OiB0aGlzLmNhbGVuZGFySW5kZXgsXG4gICAgICBnZW9JbmRleDogdGhpcy5nZW9JbmRleCxcbiAgICAgIGhvdmVyQW5pbWF0aW9uOiB0aGlzLmhvdmVyQW5pbWF0aW9uLFxuICAgICAgY2lyY3VsYXI6IHRoaXMuY2lyY3VsYXIsXG4gICAgICBmb3JjZTogdGhpcy5mb3JjZSxcbiAgICAgIGxheW91dDogdGhpcy5sYXlvdXQsIFxuICAgICAgbm9kZVNjYWxlUmF0aW86IHRoaXMubm9kZVNjYWxlUmF0aW8sXG4gICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgIHN5bWJvbFNpemU6IHRoaXMuc3ltYm9sU2l6ZSxcbiAgICAgIHN5bWJvbFJvdGF0ZTogdGhpcy5zeW1ib2xSb3RhdGUsXG4gICAgICBzeW1ib2xLZWVwQXNwZWN0OiB0aGlzLnN5bWJvbEtlZXBBc3BlY3QsXG4gICAgICBzeW1ib2xPZmZzZXQ6IHRoaXMuc3ltYm9sT2Zmc2V0LFxuICAgICAgZm9jdXNOb2RlQWRqYWNlbmN5OiB0aGlzLmZvY3VzTm9kZUFkamFjZW5jeSxcbiAgICAgIGVkZ2VTeW1ib2w6IHRoaXMuZWRnZVN5bWJvbCxcbiAgICAgIGVkZ2VTeW1ib2xTaXplOiB0aGlzLmVkZ2VTeW1ib2xTaXplLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIHJvYW06IHRoaXMucm9hbSxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBsaW5lU3R5bGU6IHRoaXMubGluZVN0eWxlLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBlZGdlTGFiZWw6IHRoaXMuZWRnZUxhYmVsLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBub2RlczogdGhpcy5ub2RlcyxcbiAgICAgIGxpbmtzOiB0aGlzLmxpbmtzLFxuICAgICAgZWRnZXM6IHRoaXMuZWRnZXMsXG4gICAgICBtYXJrUG9pbnQ6IHRoaXMubWFya1BvaW50LFxuICAgICAgbWFya0xpbmU6IHRoaXMubWFya0xpbmUsXG4gICAgICBtYXJrQXJlYTogdGhpcy5tYXJrQXJlYSxcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIGFuaW1hdGlvbjogdGhpcy5hbmltYXRpb24sXG4gICAgICBhbmltYXRpb25UaHJlc2hvbGQ6IHRoaXMuYW5pbWF0aW9uVGhyZXNob2xkLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHRoaXMuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBhbmltYXRpb25FYXNpbmc6IHRoaXMuYW5pbWF0aW9uRWFzaW5nLFxuICAgICAgYW5pbWF0aW9uRGVsYXk6IHRoaXMuYW5pbWF0aW9uRGVsYXksXG4gICAgICBhbmltYXRpb25EdXJhdGlvblVwZGF0ZTogdGhpcy5hbmltYXRpb25EdXJhdGlvblVwZGF0ZSxcbiAgICAgIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZTogdGhpcy5hbmltYXRpb25FYXNpbmdVcGRhdGUsXG4gICAgICBhbmltYXRpb25EZWxheVVwZGF0ZTogdGhpcy5hbmltYXRpb25EZWxheVVwZGF0ZSxcbiAgICAgIHRvb2x0aXA6IHRoaXMudG9vbHRpcCxcbiAgICB9O1xuICB9XG59XG4iXX0=