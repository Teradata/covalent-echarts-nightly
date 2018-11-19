import { Component, Input, ChangeDetectionStrategy, forwardRef, NgModule } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent } from '@covalent/echarts/base';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/graph';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartSeriesGraphComponent extends TdSeriesComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const GRAPH_MODULE_COMPONENTS = [
    TdChartSeriesGraphComponent,
];
class CovalentGraphEchartsModule {
}
CovalentGraphEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    GRAPH_MODULE_COMPONENTS,
                ],
                exports: [
                    GRAPH_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { GRAPH_MODULE_COMPONENTS, CovalentGraphEchartsModule, TdChartSeriesGraphComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy1ncmFwaC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvZ3JhcGgvZ3JhcGguY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9ncmFwaC9ncmFwaC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBUZENvb3JkaW5hdGVTeXN0ZW0sXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkRW1waGFzaXMsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBJVGRTZXJpZXMsXG4gIElUZExhYmVsLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZExpbmVTdHlsZSxcbiAgSVRkRWRnZUxhYmVsLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRDYXRlZ29yaWVzIHtcbiAgbmFtZT86IHN0cmluZztcbiAgc3ltYm9sPzogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIHN5bWJvbFNpemU/OiBudW1iZXIgfCBhbnlbXTtcbiAgc3ltYm9sUm90YXRlPzogbnVtYmVyO1xuICBzeW1ib2xLZWVwQXNwZWN0PzogYm9vbGVhbjtcbiAgc3ltYm9sT2Zmc2V0OiBhbnlbXTtcbiAgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIGxhYmVsOiBJVGRMYWJlbDtcbiAgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEdyYXBoRm9yY2Uge1xuICBpbml0TGF5b3V0Pzogc3RyaW5nO1xuICByZXB1bHNpb24/OiBhbnkgfCBudW1iZXI7XG4gIGdyYXZpdHk/OiBudW1iZXI7XG4gIGVkZ2VMZW5ndGg/OiBhbnkgfCBudW1iZXI7XG4gIGxheW91dEFuaW1hdGlvbj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCB0eXBlIFRkR3JhcGhMYXlvdXQgPSAnbm9uZScgfCAnY2lyY3VsYXInIHwgJ2ZvcmNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRHcmFwaFNlcmllcyBleHRlbmRzIElUZFNlcmllczwnZ3JhcGgnPiB7XG4gIGxlZ2VuZEhvdmVyTGluaz86IGJvb2xlYW47XG4gIGNvb3JkaW5hdGVTeXN0ZW0/OiBUZENvb3JkaW5hdGVTeXN0ZW07XG4gIHhBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHlBeGlzSW5kZXg/OiBudW1iZXI7XG4gIHBvbGFySW5kZXg/OiBudW1iZXI7XG4gIGNhbGVuZGFySW5kZXg/OiBudW1iZXI7XG4gIGdlb0luZGV4PzogbnVtYmVyO1xuICBob3ZlckFuaW1hdGlvbj86IGJvb2xlYW47XG4gIGNpcmN1bGFyPzogb2JqZWN0O1xuICBmb3JjZT86IElUZEdyYXBoRm9yY2U7XG4gIGxheW91dD86IFRkR3JhcGhMYXlvdXQ7IFxuICBub2RlU2NhbGVSYXRpbz86IGJvb2xlYW47XG4gIGRyYWdnYWJsZT86IGJvb2xlYW47XG4gIHN5bWJvbD86IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBzeW1ib2xTaXplPzogbnVtYmVyIHwgYW55W10gfCBGdW5jdGlvbjtcbiAgc3ltYm9sUm90YXRlPzogbnVtYmVyO1xuICBzeW1ib2xLZWVwQXNwZWN0PzogYm9vbGVhbjtcbiAgc3ltYm9sT2Zmc2V0PzogYW55W107XG4gIGZvY3VzTm9kZUFkamFjZW5jeTogYm9vbGVhbjtcbiAgZWRnZVN5bWJvbDogYW55W10gfCBzdHJpbmc7XG4gIGVkZ2VTeW1ib2xTaXplOiBudW1iZXI7XG4gIGN1cnNvcjogc3RyaW5nO1xuICByb2FtPzogYm9vbGVhbjtcbiAgZXhwYW5kQW5kQ29sbGFwc2U/OiBib29sZWFuO1xuICBpbml0aWFsVHJlZURlcHRoPzogbnVtYmVyO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGxpbmVTdHlsZT86IElUZExpbmVTdHlsZTtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgZWRnZUxhYmVsPzogSVRkRWRnZUxhYmVsO1xuICBlbXBoYXNpcz86IElUZEVtcGhhc2lzO1xuICBjYXRlZ29yaWVzOiBJVGRDYXRlZ29yaWVzO1xuICBkYXRhPzogYW55W107XG4gIG5vZGVzOiBhbnlbXTtcbiAgbGlua3M6IGFueVtdO1xuICBlZGdlczogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgemxldmVsOiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIHNpbGVudD86IGJvb2xlYW47XG4gIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgYW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgYW5pbWF0aW9uVGhyZXNob2xkPzogbnVtYmVyO1xuICBhbmltYXRpb25EdXJhdGlvbj86IG51bWJlciB8IEZ1bmN0aW9uO1xuICBhbmltYXRpb25FYXNpbmc/OiBzdHJpbmc7XG4gIGFuaW1hdGlvbkRlbGF5PzogbnVtYmVyIHwgRnVuY3Rpb247XG4gIGFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlPzogbnVtYmVyIHwgRnVuY3Rpb247XG4gIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZT86IHN0cmluZztcbiAgYW5pbWF0aW9uRGVsYXlVcGRhdGU/OiBudW1iZXIgfCBGdW5jdGlvbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLWdyYXBoXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc0dyYXBoQ29tcG9uZW50KSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNHcmFwaENvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdncmFwaCc+IGltcGxlbWVudHMgSVRkR3JhcGhTZXJpZXMge1xuXG5ASW5wdXQoJ2xlZ2VuZEhvdmVyTGluaycpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbkBJbnB1dCgnY29vcmRpbmF0ZVN5c3RlbScpIGNvb3JkaW5hdGVTeXN0ZW06IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbkBJbnB1dCgneEF4aXNJbmRleCcpIHhBeGlzSW5kZXg6IG51bWJlcjtcbkBJbnB1dCgneUF4aXNJbmRleCcpIHlBeGlzSW5kZXg6IG51bWJlcjtcbkBJbnB1dCgncG9sYXJJbmRleCcpIHBvbGFySW5kZXg6IG51bWJlcjtcbkBJbnB1dCgnY2FsZW5kYXJJbmRleCcpIGNhbGVuZGFySW5kZXg6IG51bWJlcjtcbkBJbnB1dCgnZ2VvSW5kZXgnKSBnZW9JbmRleDogbnVtYmVyO1xuQElucHV0KCdob3ZlckFuaW1hdGlvbicpIGhvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuQElucHV0KCdjaXJjdWxhcicpIGNpcmN1bGFyOiBvYmplY3Q7XG5ASW5wdXQoJ2ZvcmNlJykgZm9yY2U6IElUZEdyYXBoRm9yY2U7XG5ASW5wdXQoJ2xheW91dCcpIGxheW91dDogVGRHcmFwaExheW91dDsgXG5ASW5wdXQoJ25vZGVTY2FsZVJhdGlvJykgbm9kZVNjYWxlUmF0aW86IGJvb2xlYW47XG5ASW5wdXQoJ2RyYWdnYWJsZScpIGRyYWdnYWJsZTogYm9vbGVhbjtcbkBJbnB1dCgnc3ltYm9sJykgc3ltYm9sOiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbkBJbnB1dCgnc3ltYm9sU2l6ZScpIHN5bWJvbFNpemU6IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG5ASW5wdXQoJ3N5bWJvbFJvdGF0ZScpIHN5bWJvbFJvdGF0ZTogbnVtYmVyO1xuQElucHV0KCdzeW1ib2xLZWVwQXNwZWN0Jykgc3ltYm9sS2VlcEFzcGVjdDogYm9vbGVhbjtcbkBJbnB1dCgnc3ltYm9sT2Zmc2V0Jykgc3ltYm9sT2Zmc2V0OiBhbnlbXTtcbkBJbnB1dCgnZm9jdXNOb2RlQWRqYWNlbmN5JykgZm9jdXNOb2RlQWRqYWNlbmN5OiBib29sZWFuO1xuQElucHV0KCdlZGdlU3ltYm9sJykgZWRnZVN5bWJvbDogYW55W10gfCBzdHJpbmc7XG5ASW5wdXQoJ2VkZ2VTeW1ib2xTaXplJykgZWRnZVN5bWJvbFNpemU6IG51bWJlcjtcbkBJbnB1dCgnY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG5ASW5wdXQoJ3JvYW0nKSByb2FtOiBib29sZWFuO1xuQElucHV0KCdpbml0aWFsVHJlZURlcHRoJykgaW5pdGlhbFRyZWVEZXB0aDogbnVtYmVyO1xuQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbkBJbnB1dCgnbGluZVN0eWxlJykgbGluZVN0eWxlOiBJVGRMaW5lU3R5bGU7XG5ASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuQElucHV0KCdlZGdlTGFiZWwnKSBlZGdlTGFiZWw6IElUZEVkZ2VMYWJlbDtcbkBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG5ASW5wdXQoJ2NhdGVnb3JpZXMnKSBjYXRlZ29yaWVzOiBJVGRDYXRlZ29yaWVzO1xuQElucHV0KCdub2RlcycpIG5vZGVzOiBhbnlbXTtcbkBJbnB1dCgnbGlua3MnKSBsaW5rczogYW55W107XG5ASW5wdXQoJ2VkZ2VzJykgZWRnZXM6IGFueVtdO1xuQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbkBJbnB1dCgnbWFya0xpbmUnKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG5ASW5wdXQoJ21hcmtBcmVhJykgbWFya0FyZWE6IElUZE1hcmtBcmVhO1xuQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbkBJbnB1dCgneicpIHo6IG51bWJlcjtcbkBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuQElucHV0KCdsZWZ0JykgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbkBJbnB1dCgncmlnaHQnKSByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuQElucHV0KCdib3R0b20nKSBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbkBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuQElucHV0KCdoZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdncmFwaCcsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIGNvb3JkaW5hdGVTeXN0ZW06IHRoaXMuY29vcmRpbmF0ZVN5c3RlbSxcbiAgICAgIHhBeGlzSW5kZXg6IHRoaXMueEF4aXNJbmRleCxcbiAgICAgIHlBeGlzSW5kZXg6IHRoaXMueUF4aXNJbmRleCxcbiAgICAgIHBvbGFySW5kZXg6IHRoaXMucG9sYXJJbmRleCxcbiAgICAgIGNhbGVuZGFySW5kZXg6IHRoaXMuY2FsZW5kYXJJbmRleCxcbiAgICAgIGdlb0luZGV4OiB0aGlzLmdlb0luZGV4LFxuICAgICAgaG92ZXJBbmltYXRpb246IHRoaXMuaG92ZXJBbmltYXRpb24sXG4gICAgICBjaXJjdWxhcjogdGhpcy5jaXJjdWxhcixcbiAgICAgIGZvcmNlOiB0aGlzLmZvcmNlLFxuICAgICAgbGF5b3V0OiB0aGlzLmxheW91dCwgXG4gICAgICBub2RlU2NhbGVSYXRpbzogdGhpcy5ub2RlU2NhbGVSYXRpbyxcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUsXG4gICAgICBzeW1ib2w6IHRoaXMuc3ltYm9sLFxuICAgICAgc3ltYm9sU2l6ZTogdGhpcy5zeW1ib2xTaXplLFxuICAgICAgc3ltYm9sUm90YXRlOiB0aGlzLnN5bWJvbFJvdGF0ZSxcbiAgICAgIHN5bWJvbEtlZXBBc3BlY3Q6IHRoaXMuc3ltYm9sS2VlcEFzcGVjdCxcbiAgICAgIHN5bWJvbE9mZnNldDogdGhpcy5zeW1ib2xPZmZzZXQsXG4gICAgICBmb2N1c05vZGVBZGphY2VuY3k6IHRoaXMuZm9jdXNOb2RlQWRqYWNlbmN5LFxuICAgICAgZWRnZVN5bWJvbDogdGhpcy5lZGdlU3ltYm9sLFxuICAgICAgZWRnZVN5bWJvbFNpemU6IHRoaXMuZWRnZVN5bWJvbFNpemUsXG4gICAgICBjdXJzb3I6IHRoaXMuY3Vyc29yLFxuICAgICAgcm9hbTogdGhpcy5yb2FtLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxpbmVTdHlsZTogdGhpcy5saW5lU3R5bGUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGVkZ2VMYWJlbDogdGhpcy5lZGdlTGFiZWwsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIGNhdGVnb3JpZXM6IHRoaXMuY2F0ZWdvcmllcyxcbiAgICAgIG5vZGVzOiB0aGlzLm5vZGVzLFxuICAgICAgbGlua3M6IHRoaXMubGlua3MsXG4gICAgICBlZGdlczogdGhpcy5lZGdlcyxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgJ2VjaGFydHMvbGliL2NoYXJ0L2dyYXBoJztcblxuaW1wb3J0IHsgVGRDaGFydFNlcmllc0dyYXBoQ29tcG9uZW50IH0gZnJvbSAnLi9ncmFwaC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgR1JBUEhfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0U2VyaWVzR3JhcGhDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBHUkFQSF9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEdSQVBIX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEdyYXBoRWNoYXJ0c01vZHVsZSB7XG5cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxNQWdIYSwyQkFBNEIsU0FB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