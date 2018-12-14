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
export function ITdSankeyEmphasisLineStyle() { }
if (false) {
    /** @type {?|undefined} */
    ITdSankeyEmphasisLineStyle.prototype.color;
    /** @type {?|undefined} */
    ITdSankeyEmphasisLineStyle.prototype.opacity;
    /** @type {?|undefined} */
    ITdSankeyEmphasisLineStyle.prototype.curveness;
}
/**
 * @record
 */
export function ITdSankeyEmphasis() { }
if (false) {
    /** @type {?} */
    ITdSankeyEmphasis.prototype.lineStyle;
}
/**
 * @record
 */
export function ITdSankeySeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.zlevel;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.z;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.left;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.top;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.right;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.bottom;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.width;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.height;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.nodeWidth;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.nodeGap;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.layoutIterations;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.orient;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.draggable;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.focusNodeAdjacency;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.label;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.lineStyle;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.emphasis;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.data;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.nodes;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.links;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.edges;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.silent;
}
var TdChartSeriesSankeyComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdChartSeriesSankeyComponent, _super);
    function TdChartSeriesSankeyComponent(_optionsService) {
        return _super.call(this, 'sankey', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesSankeyComponent.prototype.getConfig = /**
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
            nodeWidth: this.nodeWidth,
            nodeGap: this.nodeGap,
            layoutIterations: this.layoutIterations,
            orient: this.orient,
            draggable: this.draggable,
            focusNodeAdjacency: this.focusNodeAdjacency,
            label: this.label,
            itemStyle: this.itemStyle,
            lineStyle: this.lineStyle,
            emphasis: this.emphasis,
            nodes: this.nodes,
            links: this.links,
            edges: this.edges,
            silent: this.silent,
        };
    };
    TdChartSeriesSankeyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-sankey]',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: TdSeriesComponent, useExisting: forwardRef(function () { return TdChartSeriesSankeyComponent; }),
                        }]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesSankeyComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesSankeyComponent.propDecorators = {
        zlevel: [{ type: Input, args: ['zlevel',] }],
        z: [{ type: Input, args: ['z',] }],
        left: [{ type: Input, args: ['left',] }],
        top: [{ type: Input, args: ['top',] }],
        right: [{ type: Input, args: ['right',] }],
        bottom: [{ type: Input, args: ['bottom',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }],
        nodeWidth: [{ type: Input, args: ['nodeWidth',] }],
        nodeGap: [{ type: Input, args: ['nodeGap',] }],
        layoutIterations: [{ type: Input, args: ['layoutIterations',] }],
        orient: [{ type: Input, args: ['orient',] }],
        draggable: [{ type: Input, args: ['draggable',] }],
        focusNodeAdjacency: [{ type: Input, args: ['focusNodeAdjacency',] }],
        label: [{ type: Input, args: ['label',] }],
        itemStyle: [{ type: Input, args: ['itemStyle',] }],
        lineStyle: [{ type: Input, args: ['lineStyle',] }],
        emphasis: [{ type: Input, args: ['emphasis',] }],
        nodes: [{ type: Input, args: ['nodes',] }],
        links: [{ type: Input, args: ['links',] }],
        edges: [{ type: Input, args: ['edges',] }],
        silent: [{ type: Input, args: ['silent',] }]
    };
    return TdChartSeriesSankeyComponent;
}(TdSeriesComponent));
export { TdChartSeriesSankeyComponent };
if (false) {
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.zlevel;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.z;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.left;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.top;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.right;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.bottom;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.width;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.height;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.nodeWidth;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.nodeGap;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.layoutIterations;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.orient;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.draggable;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.focusNodeAdjacency;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.label;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.itemStyle;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.lineStyle;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.emphasis;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.nodes;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.links;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.edges;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.silent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Fua2V5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3NhbmtleS8iLCJzb3VyY2VzIjpbInNhbmtleS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxxQkFBcUIsRUFLckIsaUJBQWlCLEdBR2xCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFNaEMsZ0RBSUM7OztJQUhDLDJDQUFZOztJQUNaLDZDQUFpQjs7SUFDakIsK0NBQW1COzs7OztBQUdyQix1Q0FFQzs7O0lBREMsc0NBQXNDOzs7OztBQUd4QyxxQ0F3QkM7OztJQXZCQyxpQ0FBZ0I7O0lBQ2hCLDRCQUFXOztJQUNYLCtCQUF1Qjs7SUFDdkIsOEJBQXNCOztJQUN0QixnQ0FBd0I7O0lBQ3hCLGlDQUF5Qjs7SUFDekIsZ0NBQXdCOztJQUN4QixpQ0FBeUI7O0lBQ3pCLG9DQUFtQjs7SUFDbkIsa0NBQWlCOztJQUNqQiwyQ0FBMEI7O0lBQzFCLGlDQUF3Qjs7SUFDeEIsb0NBQW9COztJQUNwQiw2Q0FBZ0Q7O0lBQ2hELGdDQUFpQjs7SUFDakIsb0NBQXlCOztJQUN6QixvQ0FBOEI7O0lBQzlCLG1DQUF1Qjs7SUFDdkIsK0JBQWE7O0lBQ2IsZ0NBQWM7O0lBQ2QsZ0NBQWM7O0lBQ2QsZ0NBQWM7O0lBQ2QsaUNBQWlCOztBQUduQjtJQVFrRCx3REFBMkI7SUF5QjNFLHNDQUFZLGVBQXNDO2VBQ2hELGtCQUFNLFFBQVEsRUFBRSxlQUFlLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELGdEQUFTOzs7SUFBVDtRQUNFLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0MsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDO0lBQ0osQ0FBQzs7Z0JBOURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsNEJBQTRCO29CQUN0QyxRQUFRLEVBQUUsRUFBRTtvQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUM7NEJBQ1YsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDRCQUE0QixFQUE1QixDQUE0QixDQUFDO3lCQUN4RixDQUFDO2lCQUNIOzs7O2dCQXpEQyxxQkFBcUI7Ozt5QkE0RHBCLEtBQUssU0FBQyxRQUFRO29CQUNkLEtBQUssU0FBQyxHQUFHO3VCQUNULEtBQUssU0FBQyxNQUFNO3NCQUNaLEtBQUssU0FBQyxLQUFLO3dCQUNYLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxRQUFRO3dCQUNkLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxRQUFROzRCQUNkLEtBQUssU0FBQyxXQUFXOzBCQUNqQixLQUFLLFNBQUMsU0FBUzttQ0FDZixLQUFLLFNBQUMsa0JBQWtCO3lCQUN4QixLQUFLLFNBQUMsUUFBUTs0QkFDZCxLQUFLLFNBQUMsV0FBVztxQ0FDakIsS0FBSyxTQUFDLG9CQUFvQjt3QkFDMUIsS0FBSyxTQUFDLE9BQU87NEJBQ2IsS0FBSyxTQUFDLFdBQVc7NEJBQ2pCLEtBQUssU0FBQyxXQUFXOzJCQUNqQixLQUFLLFNBQUMsVUFBVTt3QkFDaEIsS0FBSyxTQUFDLE9BQU87d0JBQ2IsS0FBSyxTQUFDLE9BQU87d0JBQ2IsS0FBSyxTQUFDLE9BQU87eUJBQ2IsS0FBSyxTQUFDLFFBQVE7O0lBaUNqQixtQ0FBQztDQUFBLEFBaEVELENBUWtELGlCQUFpQixHQXdEbEU7U0F4RFksNEJBQTRCOzs7SUFFdkMsOENBQWdDOztJQUNoQyx5Q0FBc0I7O0lBQ3RCLDRDQUFxQzs7SUFDckMsMkNBQW1DOztJQUNuQyw2Q0FBdUM7O0lBQ3ZDLDhDQUF5Qzs7SUFDekMsNkNBQXVDOztJQUN2Qyw4Q0FBeUM7O0lBQ3pDLGlEQUFzQzs7SUFDdEMsK0NBQWtDOztJQUNsQyx3REFBb0Q7O0lBQ3BELDhDQUF3Qzs7SUFDeEMsaURBQXVDOztJQUN2QywwREFBNEU7O0lBQzVFLDZDQUFnQzs7SUFDaEMsaURBQTRDOztJQUM1QyxpREFBaUQ7O0lBQ2pELGdEQUF5Qzs7SUFDekMsNkNBQTZCOztJQUM3Qiw2Q0FBNkI7O0lBQzdCLDZDQUE2Qjs7SUFDN0IsOENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBJVGRMYWJlbCxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRFbXBoYXNpcyxcbiAgSVRkU2VyaWVzLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgSVRkU2hhZG93LFxuICBJVGRMaW5lQ3VydmVTdHlsZSxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCB0eXBlIFRkU2Fua2V5T3JpZW50ID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcblxuZXhwb3J0IHR5cGUgVGRTYW5rZXlGb2N1c05vZGVBZGphY2VuY3kgPSBib29sZWFuIHwgJ2FsbEVkZ2VzJyB8ICdvdXRFZGdlcycgfCAnaW5FZGdlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2Fua2V5RW1waGFzaXNMaW5lU3R5bGUgZXh0ZW5kcyBJVGRTaGFkb3cge1xuICBjb2xvcj86IGFueTtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgY3VydmVuZXNzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFNhbmtleUVtcGhhc2lzIGV4dGVuZHMgSVRkRW1waGFzaXMge1xuICBsaW5lU3R5bGU6IElUZFNhbmtleUVtcGhhc2lzTGluZVN0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFNhbmtleVNlcmllcyBleHRlbmRzIElUZFNlcmllczwnc2Fua2V5Jz4ge1xuICB6bGV2ZWw/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIGxlZnQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcD86IHN0cmluZyB8IG51bWJlcjtcbiAgcmlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbT86IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgbm9kZVdpZHRoPzogbnVtYmVyO1xuICBub2RlR2FwPzogbnVtYmVyO1xuICBsYXlvdXRJdGVyYXRpb25zPzogbnVtYmVyO1xuICBvcmllbnQ/OiBUZFNhbmtleU9yaWVudDtcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgZm9jdXNOb2RlQWRqYWNlbmN5PzogVGRTYW5rZXlGb2N1c05vZGVBZGphY2VuY3k7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgbGluZVN0eWxlPzogSVRkTGluZUN1cnZlU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbm9kZXM/OiBhbnlbXTtcbiAgbGlua3M/OiBhbnlbXTtcbiAgZWRnZXM/OiBhbnlbXTtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLXNhbmtleV0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNTYW5rZXlDb21wb25lbnQpLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1NhbmtleUNvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdzYW5rZXknPiBpbXBsZW1lbnRzIElUZFNhbmtleVNlcmllcyB7XG5cbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ2xlZnQnKSBsZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgndG9wJykgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgncmlnaHQnKSByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2JvdHRvbScpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3dpZHRoJykgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdoZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdub2RlV2lkdGgnKSBub2RlV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCdub2RlR2FwJykgbm9kZUdhcDogbnVtYmVyO1xuICBASW5wdXQoJ2xheW91dEl0ZXJhdGlvbnMnKSBsYXlvdXRJdGVyYXRpb25zOiBudW1iZXI7XG4gIEBJbnB1dCgnb3JpZW50Jykgb3JpZW50OiBUZFNhbmtleU9yaWVudDtcbiAgQElucHV0KCdkcmFnZ2FibGUnKSBkcmFnZ2FibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgnZm9jdXNOb2RlQWRqYWNlbmN5JykgZm9jdXNOb2RlQWRqYWNlbmN5OiBUZFNhbmtleUZvY3VzTm9kZUFkamFjZW5jeTtcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdsaW5lU3R5bGUnKSBsaW5lU3R5bGU6IElUZExpbmVDdXJ2ZVN0eWxlO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuICBASW5wdXQoJ25vZGVzJykgbm9kZXM6IGFueVtdO1xuICBASW5wdXQoJ2xpbmtzJykgbGlua3M6IGFueVtdO1xuICBASW5wdXQoJ2VkZ2VzJykgZWRnZXM6IGFueVtdO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdzYW5rZXknLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgbm9kZVdpZHRoOiB0aGlzLm5vZGVXaWR0aCxcbiAgICAgIG5vZGVHYXA6IHRoaXMubm9kZUdhcCxcbiAgICAgIGxheW91dEl0ZXJhdGlvbnM6IHRoaXMubGF5b3V0SXRlcmF0aW9ucyxcbiAgICAgIG9yaWVudDogdGhpcy5vcmllbnQsXG4gICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgZm9jdXNOb2RlQWRqYWNlbmN5OiB0aGlzLmZvY3VzTm9kZUFkamFjZW5jeSxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxpbmVTdHlsZTogdGhpcy5saW5lU3R5bGUsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIG5vZGVzOiB0aGlzLm5vZGVzLFxuICAgICAgbGlua3M6IHRoaXMubGlua3MsXG4gICAgICBlZGdlczogdGhpcy5lZGdlcyxcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=