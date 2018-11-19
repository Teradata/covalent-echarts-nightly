/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
export class TdChartSeriesGraphComponent extends TdSeriesComponent {
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
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesGraphComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesGraphComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvZ3JhcGgvIiwic291cmNlcyI6WyJncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLHFCQUFxQixFQVVyQixpQkFBaUIsR0FJbEIsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVoQyxtQ0FVQzs7O0lBVEMsNkJBQWM7O0lBQ2QsK0JBQW9DOztJQUNwQyxtQ0FBNEI7O0lBQzVCLHFDQUFzQjs7SUFDdEIseUNBQTJCOztJQUMzQixxQ0FBb0I7O0lBQ3BCLGtDQUF3Qjs7SUFDeEIsOEJBQWdCOztJQUNoQixpQ0FBc0I7Ozs7O0FBR3hCLG1DQU1DOzs7SUFMQyxtQ0FBb0I7O0lBQ3BCLGtDQUF5Qjs7SUFDekIsZ0NBQWlCOztJQUNqQixtQ0FBMEI7O0lBQzFCLHdDQUEwQjs7Ozs7QUFLNUIsb0NBd0RDOzs7SUF2REMseUNBQTBCOztJQUMxQiwwQ0FBc0M7O0lBQ3RDLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQixvQ0FBb0I7O0lBQ3BCLHVDQUF1Qjs7SUFDdkIsa0NBQWtCOztJQUNsQix3Q0FBeUI7O0lBQ3pCLGtDQUFrQjs7SUFDbEIsK0JBQXNCOztJQUN0QixnQ0FBdUI7O0lBQ3ZCLHdDQUF5Qjs7SUFDekIsbUNBQW9COztJQUNwQixnQ0FBb0M7O0lBQ3BDLG9DQUF1Qzs7SUFDdkMsc0NBQXNCOztJQUN0QiwwQ0FBMkI7O0lBQzNCLHNDQUFxQjs7SUFDckIsNENBQTRCOztJQUM1QixvQ0FBMkI7O0lBQzNCLHdDQUF1Qjs7SUFDdkIsZ0NBQWU7O0lBQ2YsOEJBQWU7O0lBQ2YsMkNBQTRCOztJQUM1QiwwQ0FBMEI7O0lBQzFCLG1DQUF5Qjs7SUFDekIsbUNBQXlCOztJQUN6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QywrQ0FBeUM7O0lBQ3pDLCtDQUF5Qzs7SUFDekMsNkNBQWdDOztJQUNoQyx3Q0FBc0I7O0lBQ3RCLDZDQUFpQzs7SUFDakMsMkNBQXFDOztJQUNyQywwQ0FBbUM7O0lBQ25DLDRDQUF1Qzs7SUFDdkMsNkNBQXlDOztJQUN6Qyw0Q0FBdUM7O0lBQ3ZDLDZDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgVGRDb29yZGluYXRlU3lzdGVtLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZEVtcGhhc2lzLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBJVGRNYXJrUG9pbnQsXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgSVRkU2VyaWVzLFxuICBJVGRMYWJlbCxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG4gIFRkTWFya1BvaW50U3ltYm9sLFxuICBJVGRMaW5lU3R5bGUsXG4gIElUZEVkZ2VMYWJlbCxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQ2F0ZWdvcmllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN5bWJvbD86IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBzeW1ib2xTaXplPzogbnVtYmVyIHwgYW55W107XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldDogYW55W107XG4gIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBsYWJlbDogSVRkTGFiZWw7XG4gIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRHcmFwaEZvcmNlIHtcbiAgaW5pdExheW91dD86IHN0cmluZztcbiAgcmVwdWxzaW9uPzogYW55IHwgbnVtYmVyO1xuICBncmF2aXR5PzogbnVtYmVyO1xuICBlZGdlTGVuZ3RoPzogYW55IHwgbnVtYmVyO1xuICBsYXlvdXRBbmltYXRpb24/OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBUZEdyYXBoTGF5b3V0ID0gJ25vbmUnIHwgJ2NpcmN1bGFyJyB8ICdmb3JjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkR3JhcGhTZXJpZXMgZXh0ZW5kcyBJVGRTZXJpZXM8J2dyYXBoJz4ge1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBwb2xhckluZGV4PzogbnVtYmVyO1xuICBjYWxlbmRhckluZGV4PzogbnVtYmVyO1xuICBnZW9JbmRleD86IG51bWJlcjtcbiAgaG92ZXJBbmltYXRpb24/OiBib29sZWFuO1xuICBjaXJjdWxhcj86IG9iamVjdDtcbiAgZm9yY2U/OiBJVGRHcmFwaEZvcmNlO1xuICBsYXlvdXQ/OiBUZEdyYXBoTGF5b3V0OyBcbiAgbm9kZVNjYWxlUmF0aW8/OiBib29sZWFuO1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgc3ltYm9sU2l6ZT86IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldD86IGFueVtdO1xuICBmb2N1c05vZGVBZGphY2VuY3k6IGJvb2xlYW47XG4gIGVkZ2VTeW1ib2w6IGFueVtdIHwgc3RyaW5nO1xuICBlZGdlU3ltYm9sU2l6ZTogbnVtYmVyO1xuICBjdXJzb3I6IHN0cmluZztcbiAgcm9hbT86IGJvb2xlYW47XG4gIGV4cGFuZEFuZENvbGxhcHNlPzogYm9vbGVhbjtcbiAgaW5pdGlhbFRyZWVEZXB0aD86IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsaW5lU3R5bGU/OiBJVGRMaW5lU3R5bGU7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGVkZ2VMYWJlbD86IElUZEVkZ2VMYWJlbDtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgY2F0ZWdvcmllczogSVRkQ2F0ZWdvcmllcztcbiAgZGF0YT86IGFueVtdO1xuICBub2RlczogYW55W107XG4gIGxpbmtzOiBhbnlbXTtcbiAgZWRnZXM6IGFueVtdO1xuICBtYXJrUG9pbnQ/OiBJVGRNYXJrUG9pbnQ7XG4gIG1hcmtMaW5lPzogSVRkTWFya0xpbmU7XG4gIG1hcmtBcmVhPzogSVRkTWFya0FyZWE7XG4gIHpsZXZlbDogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBzaWxlbnQ/OiBib29sZWFuO1xuICBsZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcDogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIGFuaW1hdGlvbj86IGJvb2xlYW47XG4gIGFuaW1hdGlvblRocmVzaG9sZD86IG51bWJlcjtcbiAgYW5pbWF0aW9uRHVyYXRpb24/OiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgYW5pbWF0aW9uRWFzaW5nPzogc3RyaW5nO1xuICBhbmltYXRpb25EZWxheT86IG51bWJlciB8IEZ1bmN0aW9uO1xuICBhbmltYXRpb25EdXJhdGlvblVwZGF0ZT86IG51bWJlciB8IEZ1bmN0aW9uO1xuICBhbmltYXRpb25FYXNpbmdVcGRhdGU/OiBzdHJpbmc7XG4gIGFuaW1hdGlvbkRlbGF5VXBkYXRlPzogbnVtYmVyIHwgRnVuY3Rpb247XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC1ncmFwaF0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNHcmFwaENvbXBvbmVudCksXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzR3JhcGhDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwnZ3JhcGgnPiBpbXBsZW1lbnRzIElUZEdyYXBoU2VyaWVzIHtcblxuQElucHV0KCdsZWdlbmRIb3ZlckxpbmsnKSBsZWdlbmRIb3Zlckxpbms6IGJvb2xlYW47XG5ASW5wdXQoJ2Nvb3JkaW5hdGVTeXN0ZW0nKSBjb29yZGluYXRlU3lzdGVtOiBUZENvb3JkaW5hdGVTeXN0ZW07XG5ASW5wdXQoJ3hBeGlzSW5kZXgnKSB4QXhpc0luZGV4OiBudW1iZXI7XG5ASW5wdXQoJ3lBeGlzSW5kZXgnKSB5QXhpc0luZGV4OiBudW1iZXI7XG5ASW5wdXQoJ3BvbGFySW5kZXgnKSBwb2xhckluZGV4OiBudW1iZXI7XG5ASW5wdXQoJ2NhbGVuZGFySW5kZXgnKSBjYWxlbmRhckluZGV4OiBudW1iZXI7XG5ASW5wdXQoJ2dlb0luZGV4JykgZ2VvSW5kZXg6IG51bWJlcjtcbkBJbnB1dCgnaG92ZXJBbmltYXRpb24nKSBob3ZlckFuaW1hdGlvbjogYm9vbGVhbjtcbkBJbnB1dCgnY2lyY3VsYXInKSBjaXJjdWxhcjogb2JqZWN0O1xuQElucHV0KCdmb3JjZScpIGZvcmNlOiBJVGRHcmFwaEZvcmNlO1xuQElucHV0KCdsYXlvdXQnKSBsYXlvdXQ6IFRkR3JhcGhMYXlvdXQ7IFxuQElucHV0KCdub2RlU2NhbGVSYXRpbycpIG5vZGVTY2FsZVJhdGlvOiBib29sZWFuO1xuQElucHV0KCdkcmFnZ2FibGUnKSBkcmFnZ2FibGU6IGJvb2xlYW47XG5ASW5wdXQoJ3N5bWJvbCcpIHN5bWJvbDogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG5ASW5wdXQoJ3N5bWJvbFNpemUnKSBzeW1ib2xTaXplOiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuQElucHV0KCdzeW1ib2xSb3RhdGUnKSBzeW1ib2xSb3RhdGU6IG51bWJlcjtcbkBJbnB1dCgnc3ltYm9sS2VlcEFzcGVjdCcpIHN5bWJvbEtlZXBBc3BlY3Q6IGJvb2xlYW47XG5ASW5wdXQoJ3N5bWJvbE9mZnNldCcpIHN5bWJvbE9mZnNldDogYW55W107XG5ASW5wdXQoJ2ZvY3VzTm9kZUFkamFjZW5jeScpIGZvY3VzTm9kZUFkamFjZW5jeTogYm9vbGVhbjtcbkBJbnB1dCgnZWRnZVN5bWJvbCcpIGVkZ2VTeW1ib2w6IGFueVtdIHwgc3RyaW5nO1xuQElucHV0KCdlZGdlU3ltYm9sU2l6ZScpIGVkZ2VTeW1ib2xTaXplOiBudW1iZXI7XG5ASW5wdXQoJ2N1cnNvcicpIGN1cnNvcjogc3RyaW5nO1xuQElucHV0KCdyb2FtJykgcm9hbTogYm9vbGVhbjtcbkBJbnB1dCgnaW5pdGlhbFRyZWVEZXB0aCcpIGluaXRpYWxUcmVlRGVwdGg6IG51bWJlcjtcbkBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG5ASW5wdXQoJ2xpbmVTdHlsZScpIGxpbmVTdHlsZTogSVRkTGluZVN0eWxlO1xuQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbkBJbnB1dCgnZWRnZUxhYmVsJykgZWRnZUxhYmVsOiBJVGRFZGdlTGFiZWw7XG5ASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuQElucHV0KCdjYXRlZ29yaWVzJykgY2F0ZWdvcmllczogSVRkQ2F0ZWdvcmllcztcbkBJbnB1dCgnbm9kZXMnKSBub2RlczogYW55W107XG5ASW5wdXQoJ2xpbmtzJykgbGlua3M6IGFueVtdO1xuQElucHV0KCdlZGdlcycpIGVkZ2VzOiBhbnlbXTtcbkBJbnB1dCgnbWFya1BvaW50JykgbWFya1BvaW50OiBJVGRNYXJrUG9pbnQ7XG5ASW5wdXQoJ21hcmtMaW5lJykgbWFya0xpbmU6IElUZE1hcmtMaW5lO1xuQElucHV0KCdtYXJrQXJlYScpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbkBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG5ASW5wdXQoJ3onKSB6OiBudW1iZXI7XG5ASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcbkBJbnB1dCgnbGVmdCcpIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbkBJbnB1dCgndG9wJykgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG5ASW5wdXQoJ3JpZ2h0JykgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbkBJbnB1dCgnYm90dG9tJykgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG5ASW5wdXQoJ3dpZHRoJykgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbkBJbnB1dCgnaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcignZ3JhcGgnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZ2VuZEhvdmVyTGluazogdGhpcy5sZWdlbmRIb3ZlckxpbmssXG4gICAgICBjb29yZGluYXRlU3lzdGVtOiB0aGlzLmNvb3JkaW5hdGVTeXN0ZW0sXG4gICAgICB4QXhpc0luZGV4OiB0aGlzLnhBeGlzSW5kZXgsXG4gICAgICB5QXhpc0luZGV4OiB0aGlzLnlBeGlzSW5kZXgsXG4gICAgICBwb2xhckluZGV4OiB0aGlzLnBvbGFySW5kZXgsXG4gICAgICBjYWxlbmRhckluZGV4OiB0aGlzLmNhbGVuZGFySW5kZXgsXG4gICAgICBnZW9JbmRleDogdGhpcy5nZW9JbmRleCxcbiAgICAgIGhvdmVyQW5pbWF0aW9uOiB0aGlzLmhvdmVyQW5pbWF0aW9uLFxuICAgICAgY2lyY3VsYXI6IHRoaXMuY2lyY3VsYXIsXG4gICAgICBmb3JjZTogdGhpcy5mb3JjZSxcbiAgICAgIGxheW91dDogdGhpcy5sYXlvdXQsIFxuICAgICAgbm9kZVNjYWxlUmF0aW86IHRoaXMubm9kZVNjYWxlUmF0aW8sXG4gICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgIHN5bWJvbFNpemU6IHRoaXMuc3ltYm9sU2l6ZSxcbiAgICAgIHN5bWJvbFJvdGF0ZTogdGhpcy5zeW1ib2xSb3RhdGUsXG4gICAgICBzeW1ib2xLZWVwQXNwZWN0OiB0aGlzLnN5bWJvbEtlZXBBc3BlY3QsXG4gICAgICBzeW1ib2xPZmZzZXQ6IHRoaXMuc3ltYm9sT2Zmc2V0LFxuICAgICAgZm9jdXNOb2RlQWRqYWNlbmN5OiB0aGlzLmZvY3VzTm9kZUFkamFjZW5jeSxcbiAgICAgIGVkZ2VTeW1ib2w6IHRoaXMuZWRnZVN5bWJvbCxcbiAgICAgIGVkZ2VTeW1ib2xTaXplOiB0aGlzLmVkZ2VTeW1ib2xTaXplLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIHJvYW06IHRoaXMucm9hbSxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBsaW5lU3R5bGU6IHRoaXMubGluZVN0eWxlLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBlZGdlTGFiZWw6IHRoaXMuZWRnZUxhYmVsLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXG4gICAgICBub2RlczogdGhpcy5ub2RlcyxcbiAgICAgIGxpbmtzOiB0aGlzLmxpbmtzLFxuICAgICAgZWRnZXM6IHRoaXMuZWRnZXMsXG4gICAgICBtYXJrUG9pbnQ6IHRoaXMubWFya1BvaW50LFxuICAgICAgbWFya0xpbmU6IHRoaXMubWFya0xpbmUsXG4gICAgICBtYXJrQXJlYTogdGhpcy5tYXJrQXJlYSxcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICB9O1xuICB9XG59XG4iXX0=