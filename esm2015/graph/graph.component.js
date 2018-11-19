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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvZ3JhcGgvIiwic291cmNlcyI6WyJncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLHFCQUFxQixFQVVyQixpQkFBaUIsR0FJbEIsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVoQyxtQ0FVQzs7O0lBVEMsNkJBQWM7O0lBQ2QsK0JBQW9DOztJQUNwQyxtQ0FBNEI7O0lBQzVCLHFDQUFzQjs7SUFDdEIseUNBQTJCOztJQUMzQixxQ0FBb0I7O0lBQ3BCLGtDQUF3Qjs7SUFDeEIsOEJBQWdCOztJQUNoQixpQ0FBc0I7Ozs7O0FBR3hCLG1DQU1DOzs7SUFMQyxtQ0FBb0I7O0lBQ3BCLGtDQUF5Qjs7SUFDekIsZ0NBQWlCOztJQUNqQixtQ0FBMEI7O0lBQzFCLHdDQUEwQjs7Ozs7QUFLNUIsb0NBd0RDOzs7SUF2REMseUNBQTBCOztJQUMxQiwwQ0FBc0M7O0lBQ3RDLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQixvQ0FBb0I7O0lBQ3BCLHVDQUF1Qjs7SUFDdkIsa0NBQWtCOztJQUNsQix3Q0FBeUI7O0lBQ3pCLGtDQUFrQjs7SUFDbEIsK0JBQXNCOztJQUN0QixnQ0FBdUI7O0lBQ3ZCLHdDQUF5Qjs7SUFDekIsbUNBQW9COztJQUNwQixnQ0FBb0M7O0lBQ3BDLG9DQUF1Qzs7SUFDdkMsc0NBQXNCOztJQUN0QiwwQ0FBMkI7O0lBQzNCLHNDQUFxQjs7SUFDckIsNENBQTRCOztJQUM1QixvQ0FBMkI7O0lBQzNCLHdDQUF1Qjs7SUFDdkIsZ0NBQWU7O0lBQ2YsOEJBQWU7O0lBQ2YsMkNBQTRCOztJQUM1QiwwQ0FBMEI7O0lBQzFCLG1DQUF5Qjs7SUFDekIsbUNBQXlCOztJQUN6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LDhEQUE2RTs7SUFDN0UsNERBQThEOztJQUM5RCwyREFBdUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFxuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIFRkQ29vcmRpbmF0ZVN5c3RlbSxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRFbXBoYXNpcyxcbiAgVGRTZXJpZXNMYXlvdXRCeSxcbiAgSVRkTWFya1BvaW50LFxuICBJVGRNYXJrTGluZSxcbiAgSVRkTWFya0FyZWEsXG4gIElUZFNlcmllcyxcbiAgSVRkTGFiZWwsXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxuICBUZE1hcmtQb2ludFN5bWJvbCxcbiAgSVRkTGluZVN0eWxlLFxuICBJVGRFZGdlTGFiZWwsXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZENhdGVnb3JpZXMge1xuICBuYW1lPzogc3RyaW5nO1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgc3ltYm9sU2l6ZT86IG51bWJlciB8IGFueVtdO1xuICBzeW1ib2xSb3RhdGU/OiBudW1iZXI7XG4gIHN5bWJvbEtlZXBBc3BlY3Q/OiBib29sZWFuO1xuICBzeW1ib2xPZmZzZXQ6IGFueVtdO1xuICBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgbGFiZWw6IElUZExhYmVsO1xuICBlbXBoYXNpczogSVRkRW1waGFzaXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkR3JhcGhGb3JjZSB7XG4gIGluaXRMYXlvdXQ/OiBzdHJpbmc7XG4gIHJlcHVsc2lvbj86IGFueSB8IG51bWJlcjtcbiAgZ3Jhdml0eT86IG51bWJlcjtcbiAgZWRnZUxlbmd0aD86IGFueSB8IG51bWJlcjtcbiAgbGF5b3V0QW5pbWF0aW9uPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgVGRHcmFwaExheW91dCA9ICdub25lJyB8ICdjaXJjdWxhcicgfCAnZm9yY2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEdyYXBoU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdncmFwaCc+IHtcbiAgbGVnZW5kSG92ZXJMaW5rPzogYm9vbGVhbjtcbiAgY29vcmRpbmF0ZVN5c3RlbT86IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgeEF4aXNJbmRleD86IG51bWJlcjtcbiAgeUF4aXNJbmRleD86IG51bWJlcjtcbiAgcG9sYXJJbmRleD86IG51bWJlcjtcbiAgY2FsZW5kYXJJbmRleD86IG51bWJlcjtcbiAgZ2VvSW5kZXg/OiBudW1iZXI7XG4gIGhvdmVyQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgY2lyY3VsYXI/OiBvYmplY3Q7XG4gIGZvcmNlPzogSVRkR3JhcGhGb3JjZTtcbiAgbGF5b3V0PzogVGRHcmFwaExheW91dDsgXG4gIG5vZGVTY2FsZVJhdGlvPzogYm9vbGVhbjtcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgc3ltYm9sPzogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIHN5bWJvbFNpemU/OiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBzeW1ib2xSb3RhdGU/OiBudW1iZXI7XG4gIHN5bWJvbEtlZXBBc3BlY3Q/OiBib29sZWFuO1xuICBzeW1ib2xPZmZzZXQ/OiBhbnlbXTtcbiAgZm9jdXNOb2RlQWRqYWNlbmN5OiBib29sZWFuO1xuICBlZGdlU3ltYm9sOiBhbnlbXSB8IHN0cmluZztcbiAgZWRnZVN5bWJvbFNpemU6IG51bWJlcjtcbiAgY3Vyc29yOiBzdHJpbmc7XG4gIHJvYW0/OiBib29sZWFuO1xuICBleHBhbmRBbmRDb2xsYXBzZT86IGJvb2xlYW47XG4gIGluaXRpYWxUcmVlRGVwdGg/OiBudW1iZXI7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgbGluZVN0eWxlPzogSVRkTGluZVN0eWxlO1xuICBsYWJlbD86IElUZExhYmVsO1xuICBlZGdlTGFiZWw/OiBJVGRFZGdlTGFiZWw7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIGNhdGVnb3JpZXM6IElUZENhdGVnb3JpZXM7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbm9kZXM6IGFueVtdO1xuICBsaW5rczogYW55W107XG4gIGVkZ2VzOiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICB6bGV2ZWw6IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbiAgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBhbmltYXRpb24/OiBib29sZWFuO1xuICBhbmltYXRpb25UaHJlc2hvbGQ/OiBudW1iZXI7XG4gIGFuaW1hdGlvbkR1cmF0aW9uPzogbnVtYmVyIHwgRnVuY3Rpb247XG4gIGFuaW1hdGlvbkVhc2luZz86IHN0cmluZztcbiAgYW5pbWF0aW9uRGVsYXk/OiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgYW5pbWF0aW9uRHVyYXRpb25VcGRhdGU/OiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgYW5pbWF0aW9uRWFzaW5nVXBkYXRlPzogc3RyaW5nO1xuICBhbmltYXRpb25EZWxheVVwZGF0ZT86IG51bWJlciB8IEZ1bmN0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtZ3JhcGhdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzR3JhcGhDb21wb25lbnQpLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc0dyYXBoQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J2dyYXBoJz4gaW1wbGVtZW50cyBJVGRHcmFwaFNlcmllcyB7XG5cbkBJbnB1dCgnbGVnZW5kSG92ZXJMaW5rJykgbGVnZW5kSG92ZXJMaW5rOiBib29sZWFuO1xuQElucHV0KCdjb29yZGluYXRlU3lzdGVtJykgY29vcmRpbmF0ZVN5c3RlbTogVGRDb29yZGluYXRlU3lzdGVtO1xuQElucHV0KCd4QXhpc0luZGV4JykgeEF4aXNJbmRleDogbnVtYmVyO1xuQElucHV0KCd5QXhpc0luZGV4JykgeUF4aXNJbmRleDogbnVtYmVyO1xuQElucHV0KCdwb2xhckluZGV4JykgcG9sYXJJbmRleDogbnVtYmVyO1xuQElucHV0KCdjYWxlbmRhckluZGV4JykgY2FsZW5kYXJJbmRleDogbnVtYmVyO1xuQElucHV0KCdnZW9JbmRleCcpIGdlb0luZGV4OiBudW1iZXI7XG5ASW5wdXQoJ2hvdmVyQW5pbWF0aW9uJykgaG92ZXJBbmltYXRpb246IGJvb2xlYW47XG5ASW5wdXQoJ2NpcmN1bGFyJykgY2lyY3VsYXI6IG9iamVjdDtcbkBJbnB1dCgnZm9yY2UnKSBmb3JjZTogSVRkR3JhcGhGb3JjZTtcbkBJbnB1dCgnbGF5b3V0JykgbGF5b3V0OiBUZEdyYXBoTGF5b3V0OyBcbkBJbnB1dCgnbm9kZVNjYWxlUmF0aW8nKSBub2RlU2NhbGVSYXRpbzogYm9vbGVhbjtcbkBJbnB1dCgnZHJhZ2dhYmxlJykgZHJhZ2dhYmxlOiBib29sZWFuO1xuQElucHV0KCdzeW1ib2wnKSBzeW1ib2w6IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuQElucHV0KCdzeW1ib2xTaXplJykgc3ltYm9sU2l6ZTogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbkBJbnB1dCgnc3ltYm9sUm90YXRlJykgc3ltYm9sUm90YXRlOiBudW1iZXI7XG5ASW5wdXQoJ3N5bWJvbEtlZXBBc3BlY3QnKSBzeW1ib2xLZWVwQXNwZWN0OiBib29sZWFuO1xuQElucHV0KCdzeW1ib2xPZmZzZXQnKSBzeW1ib2xPZmZzZXQ6IGFueVtdO1xuQElucHV0KCdmb2N1c05vZGVBZGphY2VuY3knKSBmb2N1c05vZGVBZGphY2VuY3k6IGJvb2xlYW47XG5ASW5wdXQoJ2VkZ2VTeW1ib2wnKSBlZGdlU3ltYm9sOiBhbnlbXSB8IHN0cmluZztcbkBJbnB1dCgnZWRnZVN5bWJvbFNpemUnKSBlZGdlU3ltYm9sU2l6ZTogbnVtYmVyO1xuQElucHV0KCdjdXJzb3InKSBjdXJzb3I6IHN0cmluZztcbkBJbnB1dCgncm9hbScpIHJvYW06IGJvb2xlYW47XG5ASW5wdXQoJ2luaXRpYWxUcmVlRGVwdGgnKSBpbml0aWFsVHJlZURlcHRoOiBudW1iZXI7XG5ASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuQElucHV0KCdsaW5lU3R5bGUnKSBsaW5lU3R5bGU6IElUZExpbmVTdHlsZTtcbkBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG5ASW5wdXQoJ2VkZ2VMYWJlbCcpIGVkZ2VMYWJlbDogSVRkRWRnZUxhYmVsO1xuQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbkBJbnB1dCgnY2F0ZWdvcmllcycpIGNhdGVnb3JpZXM6IElUZENhdGVnb3JpZXM7XG5ASW5wdXQoJ2RhdGEnKSBkYXRhOiBhbnlbXTtcbkBJbnB1dCgnbm9kZXMnKSBub2RlczogYW55W107XG5ASW5wdXQoJ2xpbmtzJykgbGlua3M6IGFueVtdO1xuQElucHV0KCdlZGdlcycpIGVkZ2VzOiBhbnlbXTtcbkBJbnB1dCgnbWFya1BvaW50JykgbWFya1BvaW50OiBJVGRNYXJrUG9pbnQ7XG5ASW5wdXQoJ21hcmtMaW5lJykgbWFya0xpbmU6IElUZE1hcmtMaW5lO1xuQElucHV0KCdtYXJrQXJlYScpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbkBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG5ASW5wdXQoJ3onKSB6OiBudW1iZXI7XG5ASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcbkBJbnB1dCgnbGVmdCcpIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbkBJbnB1dCgndG9wJykgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG5ASW5wdXQoJ3JpZ2h0JykgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbkBJbnB1dCgnYm90dG9tJykgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG5ASW5wdXQoJ3dpZHRoJykgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbkBJbnB1dCgnaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5ASW5wdXQoJ2FuaW1hdGlvbicpIGFuaW1hdGlvbjogYm9vbGVhbjtcbkBJbnB1dCgnYW5pbWF0aW9uVGhyZXNob2xkJykgYW5pbWF0aW9uVGhyZXNob2xkOiBudW1iZXI7XG5ASW5wdXQoJ2FuaW1hdGlvbkR1cmF0aW9uJykgYW5pbWF0aW9uRHVyYXRpb246IG51bWJlciB8IEZ1bmN0aW9uO1xuQElucHV0KCdhbmltYXRpb25FYXNpbmcnKSBhbmltYXRpb25FYXNpbmc6IHN0cmluZztcbkBJbnB1dCgnYW5pbWF0aW9uRGVsYXknKSBhbmltYXRpb25EZWxheTogbnVtYmVyIHwgRnVuY3Rpb247XG5ASW5wdXQoJ2FuaW1hdGlvbkR1cmF0aW9uVXBkYXRlJykgYW5pbWF0aW9uRHVyYXRpb25VcGRhdGU6IG51bWJlciB8IEZ1bmN0aW9uO1xuQElucHV0KCdhbmltYXRpb25FYXNpbmdVcGRhdGUnKSBhbmltYXRpb25FYXNpbmdVcGRhdGU6IHN0cmluZztcbkBJbnB1dCgnYW5pbWF0aW9uRGVsYXlVcGRhdGUnKSBhbmltYXRpb25EZWxheVVwZGF0ZTogbnVtYmVyIHwgRnVuY3Rpb247XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcignZ3JhcGgnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICBsZWdlbmRIb3Zlckxpbms6IHRoaXMubGVnZW5kSG92ZXJMaW5rLFxuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogdGhpcy5jb29yZGluYXRlU3lzdGVtLFxuICAgICAgeEF4aXNJbmRleDogdGhpcy54QXhpc0luZGV4LFxuICAgICAgeUF4aXNJbmRleDogdGhpcy55QXhpc0luZGV4LFxuICAgICAgcG9sYXJJbmRleDogdGhpcy5wb2xhckluZGV4LFxuICAgICAgY2FsZW5kYXJJbmRleDogdGhpcy5jYWxlbmRhckluZGV4LFxuICAgICAgZ2VvSW5kZXg6IHRoaXMuZ2VvSW5kZXgsXG4gICAgICBob3ZlckFuaW1hdGlvbjogdGhpcy5ob3ZlckFuaW1hdGlvbixcbiAgICAgIGNpcmN1bGFyOiB0aGlzLmNpcmN1bGFyLFxuICAgICAgZm9yY2U6IHRoaXMuZm9yY2UsXG4gICAgICBsYXlvdXQ6IHRoaXMubGF5b3V0LCBcbiAgICAgIG5vZGVTY2FsZVJhdGlvOiB0aGlzLm5vZGVTY2FsZVJhdGlvLFxuICAgICAgZHJhZ2dhYmxlOiB0aGlzLmRyYWdnYWJsZSxcbiAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICBzeW1ib2xTaXplOiB0aGlzLnN5bWJvbFNpemUsXG4gICAgICBzeW1ib2xSb3RhdGU6IHRoaXMuc3ltYm9sUm90YXRlLFxuICAgICAgc3ltYm9sS2VlcEFzcGVjdDogdGhpcy5zeW1ib2xLZWVwQXNwZWN0LFxuICAgICAgc3ltYm9sT2Zmc2V0OiB0aGlzLnN5bWJvbE9mZnNldCxcbiAgICAgIGZvY3VzTm9kZUFkamFjZW5jeTogdGhpcy5mb2N1c05vZGVBZGphY2VuY3ksXG4gICAgICBlZGdlU3ltYm9sOiB0aGlzLmVkZ2VTeW1ib2wsXG4gICAgICBlZGdlU3ltYm9sU2l6ZTogdGhpcy5lZGdlU3ltYm9sU2l6ZSxcbiAgICAgIGN1cnNvcjogdGhpcy5jdXJzb3IsXG4gICAgICByb2FtOiB0aGlzLnJvYW0sXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgbGluZVN0eWxlOiB0aGlzLmxpbmVTdHlsZSxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgZWRnZUxhYmVsOiB0aGlzLmVkZ2VMYWJlbCxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgICAgY2F0ZWdvcmllczogdGhpcy5jYXRlZ29yaWVzLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgbm9kZXM6IHRoaXMubm9kZXMsXG4gICAgICBsaW5rczogdGhpcy5saW5rcyxcbiAgICAgIGVkZ2VzOiB0aGlzLmVkZ2VzLFxuICAgICAgbWFya1BvaW50OiB0aGlzLm1hcmtQb2ludCxcbiAgICAgIG1hcmtMaW5lOiB0aGlzLm1hcmtMaW5lLFxuICAgICAgbWFya0FyZWE6IHRoaXMubWFya0FyZWEsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBhbmltYXRpb246IHRoaXMuYW5pbWF0aW9uLFxuICAgICAgYW5pbWF0aW9uVGhyZXNob2xkOiB0aGlzLmFuaW1hdGlvblRocmVzaG9sZCxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uLFxuICAgICAgYW5pbWF0aW9uRWFzaW5nOiB0aGlzLmFuaW1hdGlvbkVhc2luZyxcbiAgICAgIGFuaW1hdGlvbkRlbGF5OiB0aGlzLmFuaW1hdGlvbkRlbGF5LFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb25VcGRhdGU6IHRoaXMuYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUsXG4gICAgICBhbmltYXRpb25FYXNpbmdVcGRhdGU6IHRoaXMuYW5pbWF0aW9uRWFzaW5nVXBkYXRlLFxuICAgICAgYW5pbWF0aW9uRGVsYXlVcGRhdGU6IHRoaXMuYW5pbWF0aW9uRGVsYXlVcGRhdGUsXG4gICAgICB0b29sdGlwOiB0aGlzLnRvb2x0aXAsXG4gICAgfTtcbiAgfVxufVxuIl19