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
                    providers: [
                        {
                            provide: TdSeriesComponent,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdChartSeriesSankeyComponent; })),
                        },
                    ]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Fua2V5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3NhbmtleS8iLCJzb3VyY2VzIjpbInNhbmtleS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUNMLHFCQUFxQixFQUtyQixpQkFBaUIsR0FHbEIsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQU1oQyxnREFJQzs7O0lBSEMsMkNBQVk7O0lBQ1osNkNBQWlCOztJQUNqQiwrQ0FBbUI7Ozs7O0FBR3JCLHVDQUVDOzs7SUFEQyxzQ0FBc0M7Ozs7O0FBR3hDLHFDQXdCQzs7O0lBdkJDLGlDQUFnQjs7SUFDaEIsNEJBQVc7O0lBQ1gsK0JBQXVCOztJQUN2Qiw4QkFBc0I7O0lBQ3RCLGdDQUF3Qjs7SUFDeEIsaUNBQXlCOztJQUN6QixnQ0FBd0I7O0lBQ3hCLGlDQUF5Qjs7SUFDekIsb0NBQW1COztJQUNuQixrQ0FBaUI7O0lBQ2pCLDJDQUEwQjs7SUFDMUIsaUNBQXdCOztJQUN4QixvQ0FBb0I7O0lBQ3BCLDZDQUFnRDs7SUFDaEQsZ0NBQWlCOztJQUNqQixvQ0FBeUI7O0lBQ3pCLG9DQUE4Qjs7SUFDOUIsbUNBQXVCOztJQUN2QiwrQkFBYTs7SUFDYixnQ0FBYzs7SUFDZCxnQ0FBYzs7SUFDZCxnQ0FBYzs7SUFDZCxpQ0FBaUI7O0FBR25CO0lBV2tELHdEQUEyQjtJQXdCM0Usc0NBQVksZUFBc0M7ZUFDaEQsa0JBQU0sUUFBUSxFQUFFLGVBQWUsQ0FBQztJQUNsQyxDQUFDOzs7O0lBRUQsZ0RBQVM7OztJQUFUO1FBQ0UsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3BCLENBQUM7SUFDSixDQUFDOztnQkFoRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUU7d0JBQ1Q7NEJBQ0UsT0FBTyxFQUFFLGlCQUFpQjs0QkFDMUIsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsNEJBQTRCLEVBQTVCLENBQTRCLEVBQUM7eUJBQzVEO3FCQUNGO2lCQUNGOzs7O2dCQTVEQyxxQkFBcUI7Ozt5QkE4RHBCLEtBQUssU0FBQyxRQUFRO29CQUNkLEtBQUssU0FBQyxHQUFHO3VCQUNULEtBQUssU0FBQyxNQUFNO3NCQUNaLEtBQUssU0FBQyxLQUFLO3dCQUNYLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxRQUFRO3dCQUNkLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxRQUFROzRCQUNkLEtBQUssU0FBQyxXQUFXOzBCQUNqQixLQUFLLFNBQUMsU0FBUzttQ0FDZixLQUFLLFNBQUMsa0JBQWtCO3lCQUN4QixLQUFLLFNBQUMsUUFBUTs0QkFDZCxLQUFLLFNBQUMsV0FBVztxQ0FDakIsS0FBSyxTQUFDLG9CQUFvQjt3QkFDMUIsS0FBSyxTQUFDLE9BQU87NEJBQ2IsS0FBSyxTQUFDLFdBQVc7NEJBQ2pCLEtBQUssU0FBQyxXQUFXOzJCQUNqQixLQUFLLFNBQUMsVUFBVTt3QkFDaEIsS0FBSyxTQUFDLE9BQU87d0JBQ2IsS0FBSyxTQUFDLE9BQU87d0JBQ2IsS0FBSyxTQUFDLE9BQU87eUJBQ2IsS0FBSyxTQUFDLFFBQVE7O0lBZ0NqQixtQ0FBQztDQUFBLEFBakVELENBV2tELGlCQUFpQixHQXNEbEU7U0F0RFksNEJBQTRCOzs7SUFDdkMsOENBQWdDOztJQUNoQyx5Q0FBc0I7O0lBQ3RCLDRDQUFxQzs7SUFDckMsMkNBQW1DOztJQUNuQyw2Q0FBdUM7O0lBQ3ZDLDhDQUF5Qzs7SUFDekMsNkNBQXVDOztJQUN2Qyw4Q0FBeUM7O0lBQ3pDLGlEQUFzQzs7SUFDdEMsK0NBQWtDOztJQUNsQyx3REFBb0Q7O0lBQ3BELDhDQUF3Qzs7SUFDeEMsaURBQXVDOztJQUN2QywwREFBNEU7O0lBQzVFLDZDQUFnQzs7SUFDaEMsaURBQTRDOztJQUM1QyxpREFBaUQ7O0lBQ2pELGdEQUF5Qzs7SUFDekMsNkNBQTZCOztJQUM3Qiw2Q0FBNkI7O0lBQzdCLDZDQUE2Qjs7SUFDN0IsOENBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBJVGRMYWJlbCxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRFbXBoYXNpcyxcbiAgSVRkU2VyaWVzLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgSVRkU2hhZG93LFxuICBJVGRMaW5lQ3VydmVTdHlsZSxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCB0eXBlIFRkU2Fua2V5T3JpZW50ID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcblxuZXhwb3J0IHR5cGUgVGRTYW5rZXlGb2N1c05vZGVBZGphY2VuY3kgPSBib29sZWFuIHwgJ2FsbEVkZ2VzJyB8ICdvdXRFZGdlcycgfCAnaW5FZGdlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2Fua2V5RW1waGFzaXNMaW5lU3R5bGUgZXh0ZW5kcyBJVGRTaGFkb3cge1xuICBjb2xvcj86IGFueTtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgY3VydmVuZXNzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFNhbmtleUVtcGhhc2lzIGV4dGVuZHMgSVRkRW1waGFzaXMge1xuICBsaW5lU3R5bGU6IElUZFNhbmtleUVtcGhhc2lzTGluZVN0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFNhbmtleVNlcmllcyBleHRlbmRzIElUZFNlcmllczwnc2Fua2V5Jz4ge1xuICB6bGV2ZWw/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIGxlZnQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcD86IHN0cmluZyB8IG51bWJlcjtcbiAgcmlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbT86IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgbm9kZVdpZHRoPzogbnVtYmVyO1xuICBub2RlR2FwPzogbnVtYmVyO1xuICBsYXlvdXRJdGVyYXRpb25zPzogbnVtYmVyO1xuICBvcmllbnQ/OiBUZFNhbmtleU9yaWVudDtcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgZm9jdXNOb2RlQWRqYWNlbmN5PzogVGRTYW5rZXlGb2N1c05vZGVBZGphY2VuY3k7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgbGluZVN0eWxlPzogSVRkTGluZUN1cnZlU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbm9kZXM/OiBhbnlbXTtcbiAgbGlua3M/OiBhbnlbXTtcbiAgZWRnZXM/OiBhbnlbXTtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLXNhbmtleV0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNTYW5rZXlDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNTYW5rZXlDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwnc2Fua2V5Jz4gaW1wbGVtZW50cyBJVGRTYW5rZXlTZXJpZXMge1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgnbGVmdCcpIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdyaWdodCcpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnYm90dG9tJykgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ25vZGVXaWR0aCcpIG5vZGVXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoJ25vZGVHYXAnKSBub2RlR2FwOiBudW1iZXI7XG4gIEBJbnB1dCgnbGF5b3V0SXRlcmF0aW9ucycpIGxheW91dEl0ZXJhdGlvbnM6IG51bWJlcjtcbiAgQElucHV0KCdvcmllbnQnKSBvcmllbnQ6IFRkU2Fua2V5T3JpZW50O1xuICBASW5wdXQoJ2RyYWdnYWJsZScpIGRyYWdnYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCdmb2N1c05vZGVBZGphY2VuY3knKSBmb2N1c05vZGVBZGphY2VuY3k6IFRkU2Fua2V5Rm9jdXNOb2RlQWRqYWNlbmN5O1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2xpbmVTdHlsZScpIGxpbmVTdHlsZTogSVRkTGluZUN1cnZlU3R5bGU7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgnbm9kZXMnKSBub2RlczogYW55W107XG4gIEBJbnB1dCgnbGlua3MnKSBsaW5rczogYW55W107XG4gIEBJbnB1dCgnZWRnZXMnKSBlZGdlczogYW55W107XG4gIEBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3NhbmtleScsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBub2RlV2lkdGg6IHRoaXMubm9kZVdpZHRoLFxuICAgICAgbm9kZUdhcDogdGhpcy5ub2RlR2FwLFxuICAgICAgbGF5b3V0SXRlcmF0aW9uczogdGhpcy5sYXlvdXRJdGVyYXRpb25zLFxuICAgICAgb3JpZW50OiB0aGlzLm9yaWVudCxcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUsXG4gICAgICBmb2N1c05vZGVBZGphY2VuY3k6IHRoaXMuZm9jdXNOb2RlQWRqYWNlbmN5LFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgbGluZVN0eWxlOiB0aGlzLmxpbmVTdHlsZSxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgICAgbm9kZXM6IHRoaXMubm9kZXMsXG4gICAgICBsaW5rczogdGhpcy5saW5rcyxcbiAgICAgIGVkZ2VzOiB0aGlzLmVkZ2VzLFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICB9O1xuICB9XG59XG4iXX0=