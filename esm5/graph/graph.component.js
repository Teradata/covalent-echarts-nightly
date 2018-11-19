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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvZ3JhcGgvIiwic291cmNlcyI6WyJncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxxQkFBcUIsRUFVckIsaUJBQWlCLEdBSWxCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFFaEMsbUNBVUM7OztJQVRDLDZCQUFjOztJQUNkLCtCQUFvQzs7SUFDcEMsbUNBQTRCOztJQUM1QixxQ0FBc0I7O0lBQ3RCLHlDQUEyQjs7SUFDM0IscUNBQW9COztJQUNwQixrQ0FBd0I7O0lBQ3hCLDhCQUFnQjs7SUFDaEIsaUNBQXNCOzs7OztBQUd4QixtQ0FNQzs7O0lBTEMsbUNBQW9COztJQUNwQixrQ0FBeUI7O0lBQ3pCLGdDQUFpQjs7SUFDakIsbUNBQTBCOztJQUMxQix3Q0FBMEI7Ozs7O0FBSzVCLG9DQXdEQzs7O0lBdkRDLHlDQUEwQjs7SUFDMUIsMENBQXNDOztJQUN0QyxvQ0FBb0I7O0lBQ3BCLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQix1Q0FBdUI7O0lBQ3ZCLGtDQUFrQjs7SUFDbEIsd0NBQXlCOztJQUN6QixrQ0FBa0I7O0lBQ2xCLCtCQUFzQjs7SUFDdEIsZ0NBQXVCOztJQUN2Qix3Q0FBeUI7O0lBQ3pCLG1DQUFvQjs7SUFDcEIsZ0NBQW9DOztJQUNwQyxvQ0FBdUM7O0lBQ3ZDLHNDQUFzQjs7SUFDdEIsMENBQTJCOztJQUMzQixzQ0FBcUI7O0lBQ3JCLDRDQUE0Qjs7SUFDNUIsb0NBQTJCOztJQUMzQix3Q0FBdUI7O0lBQ3ZCLGdDQUFlOztJQUNmLDhCQUFlOztJQUNmLDJDQUE0Qjs7SUFDNUIsMENBQTBCOztJQUMxQixtQ0FBeUI7O0lBQ3pCLG1DQUF5Qjs7SUFD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O0lBQzdCLDRDQUE2Qjs7SUFDN0IsNENBQTZCOztJQUM3QixnREFBNEM7O0lBQzVDLCtDQUF5Qzs7SUFDekMsK0NBQXlDOztJQUN6Qyw2Q0FBZ0M7O0lBQ2hDLHdDQUFzQjs7SUFDdEIsNkNBQWlDOztJQUNqQywyQ0FBcUM7O0lBQ3JDLDBDQUFtQzs7SUFDbkMsNENBQXVDOztJQUN2Qyw2Q0FBeUM7O0lBQ3pDLDRDQUF1Qzs7SUFDdkMsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBUZENvb3JkaW5hdGVTeXN0ZW0sXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkRW1waGFzaXMsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBJVGRTZXJpZXMsXG4gIElUZExhYmVsLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZExpbmVTdHlsZSxcbiAgSVRkRWRnZUxhYmVsLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRDYXRlZ29yaWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgc3ltYm9sPzogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIHN5bWJvbFNpemU/OiBudW1iZXIgfCBhbnlbXTtcbiAgc3ltYm9sUm90YXRlPzogbnVtYmVyO1xuICBzeW1ib2xLZWVwQXNwZWN0PzogYm9vbGVhbjtcbiAgc3ltYm9sT2Zmc2V0OiBhbnlbXTtcbiAgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIGxhYmVsOiBJVGRMYWJlbDtcbiAgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEdyYXBoRm9yY2Uge1xuICBpbml0TGF5b3V0Pzogc3RyaW5nO1xuICByZXB1bHNpb24/OiBhbnkgfCBudW1iZXI7XG4gIGdyYXZpdHk/OiBudW1iZXI7XG4gIGVkZ2VMZW5ndGg/OiBhbnkgfCBudW1iZXI7XG4gIGxheW91dEFuaW1hdGlvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFRkR3JhcGhMYXlvdXQgPSAnbm9uZScgfCAnY2lyY3VsYXInIHwgJ2ZvcmNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRHcmFwaFNlcmllcyBleHRlbmRzIElUZFNlcmllczwnZ3JhcGgnPiB7XG4gIGxlZ2VuZEhvdmVyTGluaz86IGJvb2xlYW47XG4gIGNvb3JkaW5hdGVTeXN0ZW0/OiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIHhBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHlBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHBvbGFySW5kZXg/OiBudW1iZXI7XG4gIGNhbGVuZGFySW5kZXg/OiBudW1iZXI7XG4gIGdlb0luZGV4PzogbnVtYmVyO1xuICBob3ZlckFuaW1hdGlvbj86IGJvb2xlYW47XG4gIGNpcmN1bGFyPzogb2JqZWN0O1xuICBmb3JjZT86IElUZEdyYXBoRm9yY2U7XG4gIGxheW91dD86IFRkR3JhcGhMYXlvdXQ7IFxuICBub2RlU2NhbGVSYXRpbz86IGJvb2xlYW47XG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gIHN5bWJvbD86IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBzeW1ib2xTaXplPzogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgc3ltYm9sUm90YXRlPzogbnVtYmVyO1xuICBzeW1ib2xLZWVwQXNwZWN0PzogYm9vbGVhbjtcbiAgc3ltYm9sT2Zmc2V0PzogYW55W107XG4gIGZvY3VzTm9kZUFkamFjZW5jeTogYm9vbGVhbjtcbiAgZWRnZVN5bWJvbDogYW55W10gfCBzdHJpbmc7XG4gIGVkZ2VTeW1ib2xTaXplOiBudW1iZXI7XG4gIGN1cnNvcjogc3RyaW5nO1xuICByb2FtPzogYm9vbGVhbjtcbiAgZXhwYW5kQW5kQ29sbGFwc2U/OiBib29sZWFuO1xuICBpbml0aWFsVHJlZURlcHRoPzogbnVtYmVyO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGxpbmVTdHlsZT86IElUZExpbmVTdHlsZTtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgZWRnZUxhYmVsPzogSVRkRWRnZUxhYmVsO1xuICBlbXBoYXNpcz86IElUZEVtcGhhc2lzO1xuICBjYXRlZ29yaWVzOiBJVGRDYXRlZ29yaWVzO1xuICBkYXRhPzogYW55W107XG4gIG5vZGVzOiBhbnlbXTtcbiAgbGlua3M6IGFueVtdO1xuICBlZGdlczogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgemxldmVsOiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNpbGVudD86IGJvb2xlYW47XG4gIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgYW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgYW5pbWF0aW9uVGhyZXNob2xkPzogbnVtYmVyO1xuICBhbmltYXRpb25EdXJhdGlvbj86IG51bWJlciB8IEZ1bmN0aW9uO1xuICBhbmltYXRpb25FYXNpbmc/OiBzdHJpbmc7XG4gIGFuaW1hdGlvbkRlbGF5PzogbnVtYmVyIHwgRnVuY3Rpb247XG4gIGFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlPzogbnVtYmVyIHwgRnVuY3Rpb247XG4gIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZT86IHN0cmluZztcbiAgYW5pbWF0aW9uRGVsYXlVcGRhdGU/OiBudW1iZXIgfCBGdW5jdGlvbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLWdyYXBoXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc0dyYXBoQ29tcG9uZW50KSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNHcmFwaENvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdncmFwaCc+IGltcGxlbWVudHMgSVRkR3JhcGhTZXJpZXMge1xuXG5ASW5wdXQoJ2xlZ2VuZEhvdmVyTGluaycpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbkBJbnB1dCgnY29vcmRpbmF0ZVN5c3RlbScpIGNvb3JkaW5hdGVTeXN0ZW06IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbkBJbnB1dCgneEF4aXNJbmRleCcpIHhBeGlzSW5kZXg6IG51bWJlcjtcbkBJbnB1dCgneUF4aXNJbmRleCcpIHlBeGlzSW5kZXg6IG51bWJlcjtcbkBJbnB1dCgncG9sYXJJbmRleCcpIHBvbGFySW5kZXg6IG51bWJlcjtcbkBJbnB1dCgnY2FsZW5kYXJJbmRleCcpIGNhbGVuZGFySW5kZXg6IG51bWJlcjtcbkBJbnB1dCgnZ2VvSW5kZXgnKSBnZW9JbmRleDogbnVtYmVyO1xuQElucHV0KCdob3ZlckFuaW1hdGlvbicpIGhvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuQElucHV0KCdjaXJjdWxhcicpIGNpcmN1bGFyOiBvYmplY3Q7XG5ASW5wdXQoJ2ZvcmNlJykgZm9yY2U6IElUZEdyYXBoRm9yY2U7XG5ASW5wdXQoJ2xheW91dCcpIGxheW91dDogVGRHcmFwaExheW91dDsgXG5ASW5wdXQoJ25vZGVTY2FsZVJhdGlvJykgbm9kZVNjYWxlUmF0aW86IGJvb2xlYW47XG5ASW5wdXQoJ2RyYWdnYWJsZScpIGRyYWdnYWJsZTogYm9vbGVhbjtcbkBJbnB1dCgnc3ltYm9sJykgc3ltYm9sOiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbkBJbnB1dCgnc3ltYm9sU2l6ZScpIHN5bWJvbFNpemU6IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG5ASW5wdXQoJ3N5bWJvbFJvdGF0ZScpIHN5bWJvbFJvdGF0ZTogbnVtYmVyO1xuQElucHV0KCdzeW1ib2xLZWVwQXNwZWN0Jykgc3ltYm9sS2VlcEFzcGVjdDogYm9vbGVhbjtcbkBJbnB1dCgnc3ltYm9sT2Zmc2V0Jykgc3ltYm9sT2Zmc2V0OiBhbnlbXTtcbkBJbnB1dCgnZm9jdXNOb2RlQWRqYWNlbmN5JykgZm9jdXNOb2RlQWRqYWNlbmN5OiBib29sZWFuO1xuQElucHV0KCdlZGdlU3ltYm9sJykgZWRnZVN5bWJvbDogYW55W10gfCBzdHJpbmc7XG5ASW5wdXQoJ2VkZ2VTeW1ib2xTaXplJykgZWRnZVN5bWJvbFNpemU6IG51bWJlcjtcbkBJbnB1dCgnY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG5ASW5wdXQoJ3JvYW0nKSByb2FtOiBib29sZWFuO1xuQElucHV0KCdpbml0aWFsVHJlZURlcHRoJykgaW5pdGlhbFRyZWVEZXB0aDogbnVtYmVyO1xuQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbkBJbnB1dCgnbGluZVN0eWxlJykgbGluZVN0eWxlOiBJVGRMaW5lU3R5bGU7XG5ASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuQElucHV0KCdlZGdlTGFiZWwnKSBlZGdlTGFiZWw6IElUZEVkZ2VMYWJlbDtcbkBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG5ASW5wdXQoJ2NhdGVnb3JpZXMnKSBjYXRlZ29yaWVzOiBJVGRDYXRlZ29yaWVzO1xuQElucHV0KCdub2RlcycpIG5vZGVzOiBhbnlbXTtcbkBJbnB1dCgnbGlua3MnKSBsaW5rczogYW55W107XG5ASW5wdXQoJ2VkZ2VzJykgZWRnZXM6IGFueVtdO1xuQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbkBJbnB1dCgnbWFya0xpbmUnKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG5ASW5wdXQoJ21hcmtBcmVhJykgbWFya0FyZWE6IElUZE1hcmtBcmVhO1xuQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbkBJbnB1dCgneicpIHo6IG51bWJlcjtcbkBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuQElucHV0KCdsZWZ0JykgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbkBJbnB1dCgncmlnaHQnKSByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuQElucHV0KCdib3R0b20nKSBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbkBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuQElucHV0KCdoZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdncmFwaCcsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIGNvb3JkaW5hdGVTeXN0ZW06IHRoaXMuY29vcmRpbmF0ZVN5c3RlbSxcbiAgICAgIHhBeGlzSW5kZXg6IHRoaXMueEF4aXNJbmRleCxcbiAgICAgIHlBeGlzSW5kZXg6IHRoaXMueUF4aXNJbmRleCxcbiAgICAgIHBvbGFySW5kZXg6IHRoaXMucG9sYXJJbmRleCxcbiAgICAgIGNhbGVuZGFySW5kZXg6IHRoaXMuY2FsZW5kYXJJbmRleCxcbiAgICAgIGdlb0luZGV4OiB0aGlzLmdlb0luZGV4LFxuICAgICAgaG92ZXJBbmltYXRpb246IHRoaXMuaG92ZXJBbmltYXRpb24sXG4gICAgICBjaXJjdWxhcjogdGhpcy5jaXJjdWxhcixcbiAgICAgIGZvcmNlOiB0aGlzLmZvcmNlLFxuICAgICAgbGF5b3V0OiB0aGlzLmxheW91dCwgXG4gICAgICBub2RlU2NhbGVSYXRpbzogdGhpcy5ub2RlU2NhbGVSYXRpbyxcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUsXG4gICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgc3ltYm9sU2l6ZTogdGhpcy5zeW1ib2xTaXplLFxuICAgICAgc3ltYm9sUm90YXRlOiB0aGlzLnN5bWJvbFJvdGF0ZSxcbiAgICAgIHN5bWJvbEtlZXBBc3BlY3Q6IHRoaXMuc3ltYm9sS2VlcEFzcGVjdCxcbiAgICAgIHN5bWJvbE9mZnNldDogdGhpcy5zeW1ib2xPZmZzZXQsXG4gICAgICBmb2N1c05vZGVBZGphY2VuY3k6IHRoaXMuZm9jdXNOb2RlQWRqYWNlbmN5LFxuICAgICAgZWRnZVN5bWJvbDogdGhpcy5lZGdlU3ltYm9sLFxuICAgICAgZWRnZVN5bWJvbFNpemU6IHRoaXMuZWRnZVN5bWJvbFNpemUsXG4gICAgICBjdXJzb3I6IHRoaXMuY3Vyc29yLFxuICAgICAgcm9hbTogdGhpcy5yb2FtLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxpbmVTdHlsZTogdGhpcy5saW5lU3R5bGUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGVkZ2VMYWJlbDogdGhpcy5lZGdlTGFiZWwsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcbiAgICAgIG5vZGVzOiB0aGlzLm5vZGVzLFxuICAgICAgbGlua3M6IHRoaXMubGlua3MsXG4gICAgICBlZGdlczogdGhpcy5lZGdlcyxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==