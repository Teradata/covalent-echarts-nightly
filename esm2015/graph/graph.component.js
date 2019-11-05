/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvZ3JhcGgvIiwic291cmNlcyI6WyJncmFwaC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQ0wscUJBQXFCLEVBVXJCLGlCQUFpQixHQUlsQixNQUFNLHdCQUF3QixDQUFDOzs7O0FBRWhDLG1DQVVDOzs7SUFUQyw2QkFBYzs7SUFDZCwrQkFBb0M7O0lBQ3BDLG1DQUE0Qjs7SUFDNUIscUNBQXNCOztJQUN0Qix5Q0FBMkI7O0lBQzNCLHFDQUFvQjs7SUFDcEIsa0NBQXdCOztJQUN4Qiw4QkFBZ0I7O0lBQ2hCLGlDQUFzQjs7Ozs7QUFHeEIsbUNBTUM7OztJQUxDLG1DQUFvQjs7SUFDcEIsa0NBQXlCOztJQUN6QixnQ0FBaUI7O0lBQ2pCLG1DQUEwQjs7SUFDMUIsd0NBQTBCOzs7OztBQUs1QixvQ0F3REM7OztJQXZEQyx5Q0FBMEI7O0lBQzFCLDBDQUFzQzs7SUFDdEMsb0NBQW9COztJQUNwQixvQ0FBb0I7O0lBQ3BCLG9DQUFvQjs7SUFDcEIsdUNBQXVCOztJQUN2QixrQ0FBa0I7O0lBQ2xCLHdDQUF5Qjs7SUFDekIsa0NBQWtCOztJQUNsQiwrQkFBc0I7O0lBQ3RCLGdDQUF1Qjs7SUFDdkIsd0NBQXlCOztJQUN6QixtQ0FBb0I7O0lBQ3BCLGdDQUFvQzs7SUFDcEMsb0NBQXVDOztJQUN2QyxzQ0FBc0I7O0lBQ3RCLDBDQUEyQjs7SUFDM0Isc0NBQXFCOztJQUNyQiw0Q0FBNEI7O0lBQzVCLG9DQUEyQjs7SUFDM0Isd0NBQXVCOztJQUN2QixnQ0FBZTs7SUFDZiw4QkFBZTs7SUFDZiwyQ0FBNEI7O0lBQzVCLDBDQUEwQjs7SUFDMUIsbUNBQXlCOztJQUN6QixtQ0FBeUI7O0lBQ3pC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TCxLQUFLO3VCQUNMLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLO2dCQUNMLEtBQUs7cUJBQ0wsS0FBSzttQkFDTCxLQUFLO2tCQUNMLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSzs7OztJQTVDTixzREFBa0M7O0lBQ2xDLHVEQUE4Qzs7SUFDOUMsaURBQTRCOztJQUM1QixpREFBNEI7O0lBQzVCLGlEQUE0Qjs7SUFDNUIsb0RBQStCOztJQUMvQiwrQ0FBMEI7O0lBQzFCLHFEQUFpQzs7SUFDakMsK0NBQTBCOztJQUMxQiw0Q0FBOEI7O0lBQzlCLDZDQUErQjs7SUFDL0IscURBQWlDOztJQUNqQyxnREFBNEI7O0lBQzVCLDZDQUE0Qzs7SUFDNUMsaURBQStDOztJQUMvQyxtREFBOEI7O0lBQzlCLHVEQUFtQzs7SUFDbkMsbURBQTZCOztJQUM3Qix5REFBcUM7O0lBQ3JDLGlEQUFvQzs7SUFDcEMscURBQWdDOztJQUNoQyw2Q0FBd0I7O0lBQ3hCLDJDQUF1Qjs7SUFDdkIsdURBQWtDOztJQUNsQyxnREFBaUM7O0lBQ2pDLGdEQUFpQzs7SUFDakMsNENBQXlCOztJQUN6QixnREFBaUM7O0lBQ2pDLCtDQUErQjs7SUFDL0IsaURBQW1DOztJQUNuQyw0Q0FBc0I7O0lBQ3RCLDRDQUFzQjs7SUFDdEIsNENBQXNCOztJQUN0QixnREFBaUM7O0lBQ2pDLCtDQUErQjs7SUFDL0IsK0NBQStCOztJQUMvQiw2Q0FBd0I7O0lBQ3hCLHdDQUFtQjs7SUFDbkIsNkNBQXlCOztJQUN6QiwyQ0FBK0I7O0lBQy9CLDBDQUE4Qjs7SUFDOUIsNENBQWdDOztJQUNoQyw2Q0FBaUM7O0lBQ2pDLDRDQUFnQzs7SUFDaEMsNkNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBUZENvb3JkaW5hdGVTeXN0ZW0sXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkRW1waGFzaXMsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBJVGRTZXJpZXMsXG4gIElUZExhYmVsLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZExpbmVTdHlsZSxcbiAgSVRkRWRnZUxhYmVsLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRDYXRlZ29yaWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgc3ltYm9sPzogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIHN5bWJvbFNpemU/OiBudW1iZXIgfCBhbnlbXTtcbiAgc3ltYm9sUm90YXRlPzogbnVtYmVyO1xuICBzeW1ib2xLZWVwQXNwZWN0PzogYm9vbGVhbjtcbiAgc3ltYm9sT2Zmc2V0OiBhbnlbXTtcbiAgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIGxhYmVsOiBJVGRMYWJlbDtcbiAgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEdyYXBoRm9yY2Uge1xuICBpbml0TGF5b3V0Pzogc3RyaW5nO1xuICByZXB1bHNpb24/OiBhbnkgfCBudW1iZXI7XG4gIGdyYXZpdHk/OiBudW1iZXI7XG4gIGVkZ2VMZW5ndGg/OiBhbnkgfCBudW1iZXI7XG4gIGxheW91dEFuaW1hdGlvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFRkR3JhcGhMYXlvdXQgPSAnbm9uZScgfCAnY2lyY3VsYXInIHwgJ2ZvcmNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRHcmFwaFNlcmllcyBleHRlbmRzIElUZFNlcmllczwnZ3JhcGgnPiB7XG4gIGxlZ2VuZEhvdmVyTGluaz86IGJvb2xlYW47XG4gIGNvb3JkaW5hdGVTeXN0ZW0/OiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIHhBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHlBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHBvbGFySW5kZXg/OiBudW1iZXI7XG4gIGNhbGVuZGFySW5kZXg/OiBudW1iZXI7XG4gIGdlb0luZGV4PzogbnVtYmVyO1xuICBob3ZlckFuaW1hdGlvbj86IGJvb2xlYW47XG4gIGNpcmN1bGFyPzogb2JqZWN0O1xuICBmb3JjZT86IElUZEdyYXBoRm9yY2U7XG4gIGxheW91dD86IFRkR3JhcGhMYXlvdXQ7XG4gIG5vZGVTY2FsZVJhdGlvPzogYm9vbGVhbjtcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgc3ltYm9sPzogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIHN5bWJvbFNpemU/OiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBzeW1ib2xSb3RhdGU/OiBudW1iZXI7XG4gIHN5bWJvbEtlZXBBc3BlY3Q/OiBib29sZWFuO1xuICBzeW1ib2xPZmZzZXQ/OiBhbnlbXTtcbiAgZm9jdXNOb2RlQWRqYWNlbmN5OiBib29sZWFuO1xuICBlZGdlU3ltYm9sOiBhbnlbXSB8IHN0cmluZztcbiAgZWRnZVN5bWJvbFNpemU6IG51bWJlcjtcbiAgY3Vyc29yOiBzdHJpbmc7XG4gIHJvYW0/OiBib29sZWFuO1xuICBleHBhbmRBbmRDb2xsYXBzZT86IGJvb2xlYW47XG4gIGluaXRpYWxUcmVlRGVwdGg/OiBudW1iZXI7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgbGluZVN0eWxlPzogSVRkTGluZVN0eWxlO1xuICBsYWJlbD86IElUZExhYmVsO1xuICBlZGdlTGFiZWw/OiBJVGRFZGdlTGFiZWw7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIGNhdGVnb3JpZXM6IElUZENhdGVnb3JpZXM7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbm9kZXM6IGFueVtdO1xuICBsaW5rczogYW55W107XG4gIGVkZ2VzOiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICB6bGV2ZWw6IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbiAgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBhbmltYXRpb24/OiBib29sZWFuO1xuICBhbmltYXRpb25UaHJlc2hvbGQ/OiBudW1iZXI7XG4gIGFuaW1hdGlvbkR1cmF0aW9uPzogbnVtYmVyIHwgRnVuY3Rpb247XG4gIGFuaW1hdGlvbkVhc2luZz86IHN0cmluZztcbiAgYW5pbWF0aW9uRGVsYXk/OiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgYW5pbWF0aW9uRHVyYXRpb25VcGRhdGU/OiBudW1iZXIgfCBGdW5jdGlvbjtcbiAgYW5pbWF0aW9uRWFzaW5nVXBkYXRlPzogc3RyaW5nO1xuICBhbmltYXRpb25EZWxheVVwZGF0ZT86IG51bWJlciB8IEZ1bmN0aW9uO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtZ3JhcGhdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgaW5wdXRzOiBbXG4gICAgJ2NvbmZpZycsXG4gICAgJ2lkJyxcbiAgICAnbmFtZScsXG4gICAgJ2NvbG9yJyxcbiAgICAnZGF0YScsXG5cbiAgICAnYW5pbWF0aW9uJyxcbiAgICAnYW5pbWF0aW9uVGhyZXNob2xkJyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb24nLFxuICAgICdhbmltYXRpb25FYXNpbmcnLFxuICAgICdhbmltYXRpb25EZWxheScsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uVXBkYXRlJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nVXBkYXRlJyxcbiAgICAnYW5pbWF0aW9uRGVsYXlVcGRhdGUnLFxuICAgICd0b29sdGlwJyxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzR3JhcGhDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNHcmFwaENvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdncmFwaCc+IGltcGxlbWVudHMgSVRkR3JhcGhTZXJpZXMge1xuICBASW5wdXQoKSBsZWdlbmRIb3Zlckxpbms6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNvb3JkaW5hdGVTeXN0ZW06IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgQElucHV0KCkgeEF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSB5QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIHBvbGFySW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgY2FsZW5kYXJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBnZW9JbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBob3ZlckFuaW1hdGlvbjogYm9vbGVhbjtcbiAgQElucHV0KCkgY2lyY3VsYXI6IG9iamVjdDtcbiAgQElucHV0KCkgZm9yY2U6IElUZEdyYXBoRm9yY2U7XG4gIEBJbnB1dCgpIGxheW91dDogVGRHcmFwaExheW91dDtcbiAgQElucHV0KCkgbm9kZVNjYWxlUmF0aW86IGJvb2xlYW47XG4gIEBJbnB1dCgpIGRyYWdnYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgc3ltYm9sOiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgQElucHV0KCkgc3ltYm9sU2l6ZTogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgQElucHV0KCkgc3ltYm9sUm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgpIHN5bWJvbEtlZXBBc3BlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHN5bWJvbE9mZnNldDogYW55W107XG4gIEBJbnB1dCgpIGZvY3VzTm9kZUFkamFjZW5jeTogYm9vbGVhbjtcbiAgQElucHV0KCkgZWRnZVN5bWJvbDogYW55W10gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIGVkZ2VTeW1ib2xTaXplOiBudW1iZXI7XG4gIEBJbnB1dCgpIGN1cnNvcjogc3RyaW5nO1xuICBASW5wdXQoKSByb2FtOiBib29sZWFuO1xuICBASW5wdXQoKSBpbml0aWFsVHJlZURlcHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoKSBsaW5lU3R5bGU6IElUZExpbmVTdHlsZTtcbiAgQElucHV0KCkgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoKSBlZGdlTGFiZWw6IElUZEVkZ2VMYWJlbDtcbiAgQElucHV0KCkgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuICBASW5wdXQoKSBjYXRlZ29yaWVzOiBJVGRDYXRlZ29yaWVzO1xuICBASW5wdXQoKSBub2RlczogYW55W107XG4gIEBJbnB1dCgpIGxpbmtzOiBhbnlbXTtcbiAgQElucHV0KCkgZWRnZXM6IGFueVtdO1xuICBASW5wdXQoKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbiAgQElucHV0KCkgbWFya0xpbmU6IElUZE1hcmtMaW5lO1xuICBASW5wdXQoKSBtYXJrQXJlYTogSVRkTWFya0FyZWE7XG4gIEBJbnB1dCgpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgpIHNpbGVudDogYm9vbGVhbjtcbiAgQElucHV0KCkgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ2dyYXBoJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBsZWdlbmRIb3Zlckxpbms6IHRoaXMubGVnZW5kSG92ZXJMaW5rLFxuICAgICAgY29vcmRpbmF0ZVN5c3RlbTogdGhpcy5jb29yZGluYXRlU3lzdGVtLFxuICAgICAgeEF4aXNJbmRleDogdGhpcy54QXhpc0luZGV4LFxuICAgICAgeUF4aXNJbmRleDogdGhpcy55QXhpc0luZGV4LFxuICAgICAgcG9sYXJJbmRleDogdGhpcy5wb2xhckluZGV4LFxuICAgICAgY2FsZW5kYXJJbmRleDogdGhpcy5jYWxlbmRhckluZGV4LFxuICAgICAgZ2VvSW5kZXg6IHRoaXMuZ2VvSW5kZXgsXG4gICAgICBob3ZlckFuaW1hdGlvbjogdGhpcy5ob3ZlckFuaW1hdGlvbixcbiAgICAgIGNpcmN1bGFyOiB0aGlzLmNpcmN1bGFyLFxuICAgICAgZm9yY2U6IHRoaXMuZm9yY2UsXG4gICAgICBsYXlvdXQ6IHRoaXMubGF5b3V0LFxuICAgICAgbm9kZVNjYWxlUmF0aW86IHRoaXMubm9kZVNjYWxlUmF0aW8sXG4gICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgIHN5bWJvbFNpemU6IHRoaXMuc3ltYm9sU2l6ZSxcbiAgICAgIHN5bWJvbFJvdGF0ZTogdGhpcy5zeW1ib2xSb3RhdGUsXG4gICAgICBzeW1ib2xLZWVwQXNwZWN0OiB0aGlzLnN5bWJvbEtlZXBBc3BlY3QsXG4gICAgICBzeW1ib2xPZmZzZXQ6IHRoaXMuc3ltYm9sT2Zmc2V0LFxuICAgICAgZm9jdXNOb2RlQWRqYWNlbmN5OiB0aGlzLmZvY3VzTm9kZUFkamFjZW5jeSxcbiAgICAgIGVkZ2VTeW1ib2w6IHRoaXMuZWRnZVN5bWJvbCxcbiAgICAgIGVkZ2VTeW1ib2xTaXplOiB0aGlzLmVkZ2VTeW1ib2xTaXplLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIHJvYW06IHRoaXMucm9hbSxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBsaW5lU3R5bGU6IHRoaXMubGluZVN0eWxlLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBlZGdlTGFiZWw6IHRoaXMuZWRnZUxhYmVsLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBjYXRlZ29yaWVzOiB0aGlzLmNhdGVnb3JpZXMsXG4gICAgICBub2RlczogdGhpcy5ub2RlcyxcbiAgICAgIGxpbmtzOiB0aGlzLmxpbmtzLFxuICAgICAgZWRnZXM6IHRoaXMuZWRnZXMsXG4gICAgICBtYXJrUG9pbnQ6IHRoaXMubWFya1BvaW50LFxuICAgICAgbWFya0xpbmU6IHRoaXMubWFya0xpbmUsXG4gICAgICBtYXJrQXJlYTogdGhpcy5tYXJrQXJlYSxcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICB9O1xuICB9XG59XG4iXX0=