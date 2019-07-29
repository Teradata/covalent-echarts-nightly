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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvZ3JhcGgvIiwic291cmNlcyI6WyJncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUNMLHFCQUFxQixFQVVyQixpQkFBaUIsR0FJbEIsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVoQyxtQ0FVQzs7O0lBVEMsNkJBQWM7O0lBQ2QsK0JBQW9DOztJQUNwQyxtQ0FBNEI7O0lBQzVCLHFDQUFzQjs7SUFDdEIseUNBQTJCOztJQUMzQixxQ0FBb0I7O0lBQ3BCLGtDQUF3Qjs7SUFDeEIsOEJBQWdCOztJQUNoQixpQ0FBc0I7Ozs7O0FBR3hCLG1DQU1DOzs7SUFMQyxtQ0FBb0I7O0lBQ3BCLGtDQUF5Qjs7SUFDekIsZ0NBQWlCOztJQUNqQixtQ0FBMEI7O0lBQzFCLHdDQUEwQjs7Ozs7QUFLNUIsb0NBd0RDOzs7SUF2REMseUNBQTBCOztJQUMxQiwwQ0FBc0M7O0lBQ3RDLG9DQUFvQjs7SUFDcEIsb0NBQW9COztJQUNwQixvQ0FBb0I7O0lBQ3BCLHVDQUF1Qjs7SUFDdkIsa0NBQWtCOztJQUNsQix3Q0FBeUI7O0lBQ3pCLGtDQUFrQjs7SUFDbEIsK0JBQXNCOztJQUN0QixnQ0FBdUI7O0lBQ3ZCLHdDQUF5Qjs7SUFDekIsbUNBQW9COztJQUNwQixnQ0FBb0M7O0lBQ3BDLG9DQUF1Qzs7SUFDdkMsc0NBQXNCOztJQUN0QiwwQ0FBMkI7O0lBQzNCLHNDQUFxQjs7SUFDckIsNENBQTRCOztJQUM1QixvQ0FBMkI7O0lBQzNCLHdDQUF1Qjs7SUFDdkIsZ0NBQWU7O0lBQ2YsOEJBQWU7O0lBQ2YsMkNBQTRCOztJQUM1QiwwQ0FBMEI7O0lBQzFCLG1DQUF5Qjs7SUFDekIsbUNBQXlCOztJQUN6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NENBQTZCOztJQUM3Qiw0Q0FBNkI7O0lBQzdCLDRDQUE2Qjs7SUFDN0IsZ0RBQTRDOztJQUM1QywrQ0FBeUM7O0lBQ3pDLCtDQUF5Qzs7SUFDekMsNkNBQWdDOztJQUNoQyx3Q0FBc0I7O0lBQ3RCLDZDQUFpQzs7SUFDakMsMkNBQXFDOztJQUNyQywwQ0FBbUM7O0lBQ25DLDRDQUF1Qzs7SUFDdkMsNkNBQXlDOztJQUN6Qyw0Q0FBdUM7O0lBQ3ZDLDZDQUF5QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgVGRDb29yZGluYXRlU3lzdGVtLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZEVtcGhhc2lzLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBJVGRNYXJrUG9pbnQsXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgSVRkU2VyaWVzLFxuICBJVGRMYWJlbCxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG4gIFRkTWFya1BvaW50U3ltYm9sLFxuICBJVGRMaW5lU3R5bGUsXG4gIElUZEVkZ2VMYWJlbCxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQ2F0ZWdvcmllcyB7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIHN5bWJvbD86IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBzeW1ib2xTaXplPzogbnVtYmVyIHwgYW55W107XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldDogYW55W107XG4gIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBsYWJlbDogSVRkTGFiZWw7XG4gIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRHcmFwaEZvcmNlIHtcbiAgaW5pdExheW91dD86IHN0cmluZztcbiAgcmVwdWxzaW9uPzogYW55IHwgbnVtYmVyO1xuICBncmF2aXR5PzogbnVtYmVyO1xuICBlZGdlTGVuZ3RoPzogYW55IHwgbnVtYmVyO1xuICBsYXlvdXRBbmltYXRpb24/OiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBUZEdyYXBoTGF5b3V0ID0gJ25vbmUnIHwgJ2NpcmN1bGFyJyB8ICdmb3JjZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkR3JhcGhTZXJpZXMgZXh0ZW5kcyBJVGRTZXJpZXM8J2dyYXBoJz4ge1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBwb2xhckluZGV4PzogbnVtYmVyO1xuICBjYWxlbmRhckluZGV4PzogbnVtYmVyO1xuICBnZW9JbmRleD86IG51bWJlcjtcbiAgaG92ZXJBbmltYXRpb24/OiBib29sZWFuO1xuICBjaXJjdWxhcj86IG9iamVjdDtcbiAgZm9yY2U/OiBJVGRHcmFwaEZvcmNlO1xuICBsYXlvdXQ/OiBUZEdyYXBoTGF5b3V0O1xuICBub2RlU2NhbGVSYXRpbz86IGJvb2xlYW47XG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gIHN5bWJvbD86IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBzeW1ib2xTaXplPzogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgc3ltYm9sUm90YXRlPzogbnVtYmVyO1xuICBzeW1ib2xLZWVwQXNwZWN0PzogYm9vbGVhbjtcbiAgc3ltYm9sT2Zmc2V0PzogYW55W107XG4gIGZvY3VzTm9kZUFkamFjZW5jeTogYm9vbGVhbjtcbiAgZWRnZVN5bWJvbDogYW55W10gfCBzdHJpbmc7XG4gIGVkZ2VTeW1ib2xTaXplOiBudW1iZXI7XG4gIGN1cnNvcjogc3RyaW5nO1xuICByb2FtPzogYm9vbGVhbjtcbiAgZXhwYW5kQW5kQ29sbGFwc2U/OiBib29sZWFuO1xuICBpbml0aWFsVHJlZURlcHRoPzogbnVtYmVyO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGxpbmVTdHlsZT86IElUZExpbmVTdHlsZTtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgZWRnZUxhYmVsPzogSVRkRWRnZUxhYmVsO1xuICBlbXBoYXNpcz86IElUZEVtcGhhc2lzO1xuICBjYXRlZ29yaWVzOiBJVGRDYXRlZ29yaWVzO1xuICBkYXRhPzogYW55W107XG4gIG5vZGVzOiBhbnlbXTtcbiAgbGlua3M6IGFueVtdO1xuICBlZGdlczogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgemxldmVsOiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNpbGVudD86IGJvb2xlYW47XG4gIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgYW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgYW5pbWF0aW9uVGhyZXNob2xkPzogbnVtYmVyO1xuICBhbmltYXRpb25EdXJhdGlvbj86IG51bWJlciB8IEZ1bmN0aW9uO1xuICBhbmltYXRpb25FYXNpbmc/OiBzdHJpbmc7XG4gIGFuaW1hdGlvbkRlbGF5PzogbnVtYmVyIHwgRnVuY3Rpb247XG4gIGFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlPzogbnVtYmVyIHwgRnVuY3Rpb247XG4gIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZT86IHN0cmluZztcbiAgYW5pbWF0aW9uRGVsYXlVcGRhdGU/OiBudW1iZXIgfCBGdW5jdGlvbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLWdyYXBoXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc0dyYXBoQ29tcG9uZW50KSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzR3JhcGhDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwnZ3JhcGgnPiBpbXBsZW1lbnRzIElUZEdyYXBoU2VyaWVzIHtcbiAgQElucHV0KCdsZWdlbmRIb3ZlckxpbmsnKSBsZWdlbmRIb3Zlckxpbms6IGJvb2xlYW47XG4gIEBJbnB1dCgnY29vcmRpbmF0ZVN5c3RlbScpIGNvb3JkaW5hdGVTeXN0ZW06IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgQElucHV0KCd4QXhpc0luZGV4JykgeEF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3lBeGlzSW5kZXgnKSB5QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgncG9sYXJJbmRleCcpIHBvbGFySW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdjYWxlbmRhckluZGV4JykgY2FsZW5kYXJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2dlb0luZGV4JykgZ2VvSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdob3ZlckFuaW1hdGlvbicpIGhvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoJ2NpcmN1bGFyJykgY2lyY3VsYXI6IG9iamVjdDtcbiAgQElucHV0KCdmb3JjZScpIGZvcmNlOiBJVGRHcmFwaEZvcmNlO1xuICBASW5wdXQoJ2xheW91dCcpIGxheW91dDogVGRHcmFwaExheW91dDtcbiAgQElucHV0KCdub2RlU2NhbGVSYXRpbycpIG5vZGVTY2FsZVJhdGlvOiBib29sZWFuO1xuICBASW5wdXQoJ2RyYWdnYWJsZScpIGRyYWdnYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCdzeW1ib2wnKSBzeW1ib2w6IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBASW5wdXQoJ3N5bWJvbFNpemUnKSBzeW1ib2xTaXplOiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ3N5bWJvbFJvdGF0ZScpIHN5bWJvbFJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ3N5bWJvbEtlZXBBc3BlY3QnKSBzeW1ib2xLZWVwQXNwZWN0OiBib29sZWFuO1xuICBASW5wdXQoJ3N5bWJvbE9mZnNldCcpIHN5bWJvbE9mZnNldDogYW55W107XG4gIEBJbnB1dCgnZm9jdXNOb2RlQWRqYWNlbmN5JykgZm9jdXNOb2RlQWRqYWNlbmN5OiBib29sZWFuO1xuICBASW5wdXQoJ2VkZ2VTeW1ib2wnKSBlZGdlU3ltYm9sOiBhbnlbXSB8IHN0cmluZztcbiAgQElucHV0KCdlZGdlU3ltYm9sU2l6ZScpIGVkZ2VTeW1ib2xTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgnY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgncm9hbScpIHJvYW06IGJvb2xlYW47XG4gIEBJbnB1dCgnaW5pdGlhbFRyZWVEZXB0aCcpIGluaXRpYWxUcmVlRGVwdGg6IG51bWJlcjtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdsaW5lU3R5bGUnKSBsaW5lU3R5bGU6IElUZExpbmVTdHlsZTtcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCdlZGdlTGFiZWwnKSBlZGdlTGFiZWw6IElUZEVkZ2VMYWJlbDtcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbiAgQElucHV0KCdjYXRlZ29yaWVzJykgY2F0ZWdvcmllczogSVRkQ2F0ZWdvcmllcztcbiAgQElucHV0KCdub2RlcycpIG5vZGVzOiBhbnlbXTtcbiAgQElucHV0KCdsaW5rcycpIGxpbmtzOiBhbnlbXTtcbiAgQElucHV0KCdlZGdlcycpIGVkZ2VzOiBhbnlbXTtcbiAgQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbiAgQElucHV0KCdtYXJrTGluZScpIG1hcmtMaW5lOiBJVGRNYXJrTGluZTtcbiAgQElucHV0KCdtYXJrQXJlYScpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcbiAgQElucHV0KCdsZWZ0JykgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3RvcCcpIHRvcDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3JpZ2h0JykgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdib3R0b20nKSBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd3aWR0aCcpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcignZ3JhcGgnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZ2VuZEhvdmVyTGluazogdGhpcy5sZWdlbmRIb3ZlckxpbmssXG4gICAgICBjb29yZGluYXRlU3lzdGVtOiB0aGlzLmNvb3JkaW5hdGVTeXN0ZW0sXG4gICAgICB4QXhpc0luZGV4OiB0aGlzLnhBeGlzSW5kZXgsXG4gICAgICB5QXhpc0luZGV4OiB0aGlzLnlBeGlzSW5kZXgsXG4gICAgICBwb2xhckluZGV4OiB0aGlzLnBvbGFySW5kZXgsXG4gICAgICBjYWxlbmRhckluZGV4OiB0aGlzLmNhbGVuZGFySW5kZXgsXG4gICAgICBnZW9JbmRleDogdGhpcy5nZW9JbmRleCxcbiAgICAgIGhvdmVyQW5pbWF0aW9uOiB0aGlzLmhvdmVyQW5pbWF0aW9uLFxuICAgICAgY2lyY3VsYXI6IHRoaXMuY2lyY3VsYXIsXG4gICAgICBmb3JjZTogdGhpcy5mb3JjZSxcbiAgICAgIGxheW91dDogdGhpcy5sYXlvdXQsXG4gICAgICBub2RlU2NhbGVSYXRpbzogdGhpcy5ub2RlU2NhbGVSYXRpbyxcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUsXG4gICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgc3ltYm9sU2l6ZTogdGhpcy5zeW1ib2xTaXplLFxuICAgICAgc3ltYm9sUm90YXRlOiB0aGlzLnN5bWJvbFJvdGF0ZSxcbiAgICAgIHN5bWJvbEtlZXBBc3BlY3Q6IHRoaXMuc3ltYm9sS2VlcEFzcGVjdCxcbiAgICAgIHN5bWJvbE9mZnNldDogdGhpcy5zeW1ib2xPZmZzZXQsXG4gICAgICBmb2N1c05vZGVBZGphY2VuY3k6IHRoaXMuZm9jdXNOb2RlQWRqYWNlbmN5LFxuICAgICAgZWRnZVN5bWJvbDogdGhpcy5lZGdlU3ltYm9sLFxuICAgICAgZWRnZVN5bWJvbFNpemU6IHRoaXMuZWRnZVN5bWJvbFNpemUsXG4gICAgICBjdXJzb3I6IHRoaXMuY3Vyc29yLFxuICAgICAgcm9hbTogdGhpcy5yb2FtLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxpbmVTdHlsZTogdGhpcy5saW5lU3R5bGUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGVkZ2VMYWJlbDogdGhpcy5lZGdlTGFiZWwsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcbiAgICAgIG5vZGVzOiB0aGlzLm5vZGVzLFxuICAgICAgbGlua3M6IHRoaXMubGlua3MsXG4gICAgICBlZGdlczogdGhpcy5lZGdlcyxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==