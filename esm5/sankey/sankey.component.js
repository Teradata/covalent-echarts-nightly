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
            id: this.id,
            type: this.type,
            name: this.name,
            color: this.color,
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
            data: this.data,
            nodes: this.nodes,
            links: this.links,
            edges: this.edges,
            silent: this.silent,
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
        data: [{ type: Input, args: ['data',] }],
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
    TdChartSeriesSankeyComponent.prototype.data;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.nodes;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.links;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.edges;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.silent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Fua2V5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3NhbmtleS8iLCJzb3VyY2VzIjpbInNhbmtleS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxxQkFBcUIsRUFLckIsaUJBQWlCLEdBR2xCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFNaEMsZ0RBSUM7OztJQUhDLDJDQUFZOztJQUNaLDZDQUFpQjs7SUFDakIsK0NBQW1COzs7OztBQUdyQix1Q0FFQzs7O0lBREMsc0NBQXNDOzs7OztBQUd4QyxxQ0F3QkM7OztJQXZCQyxpQ0FBZ0I7O0lBQ2hCLDRCQUFXOztJQUNYLCtCQUF1Qjs7SUFDdkIsOEJBQXNCOztJQUN0QixnQ0FBd0I7O0lBQ3hCLGlDQUF5Qjs7SUFDekIsZ0NBQXdCOztJQUN4QixpQ0FBeUI7O0lBQ3pCLG9DQUFtQjs7SUFDbkIsa0NBQWlCOztJQUNqQiwyQ0FBMEI7O0lBQzFCLGlDQUF3Qjs7SUFDeEIsb0NBQW9COztJQUNwQiw2Q0FBZ0Q7O0lBQ2hELGdDQUFpQjs7SUFDakIsb0NBQXlCOztJQUN6QixvQ0FBOEI7O0lBQzlCLG1DQUF1Qjs7SUFDdkIsK0JBQWE7O0lBQ2IsZ0NBQWM7O0lBQ2QsZ0NBQWM7O0lBQ2QsZ0NBQWM7O0lBQ2QsaUNBQWlCOztBQUduQjtJQVFrRCx3REFBMkI7SUEwQjNFLHNDQUFZLGVBQXNDO2VBQ2hELGtCQUFNLFFBQVEsRUFBRSxlQUFlLENBQUM7SUFDbEMsQ0FBQzs7OztJQUVELGdEQUFTOzs7SUFBVDtRQUNFLE9BQU87WUFDTCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7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O0lBK0NqQixtQ0FBQztDQUFBLEFBL0VELENBUWtELGlCQUFpQixHQXVFbEU7U0F2RVksNEJBQTRCOzs7SUFFdkMsOENBQWdDOztJQUNoQyx5Q0FBc0I7O0lBQ3RCLDRDQUFxQzs7SUFDckMsMkNBQW1DOztJQUNuQyw2Q0FBdUM7O0lBQ3ZDLDhDQUF5Qzs7SUFDekMsNkNBQXVDOztJQUN2Qyw4Q0FBeUM7O0lBQ3pDLGlEQUFzQzs7SUFDdEMsK0NBQWtDOztJQUNsQyx3REFBb0Q7O0lBQ3BELDhDQUF3Qzs7SUFDeEMsaURBQXVDOztJQUN2QywwREFBNEU7O0lBQzVFLDZDQUFnQzs7SUFDaEMsaURBQTRDOztJQUM1QyxpREFBaUQ7O0lBQ2pELGdEQUF5Qzs7SUFDekMsNENBQTJCOztJQUMzQiw2Q0FBNkI7O0lBQzdCLDZDQUE2Qjs7SUFDN0IsNkNBQTZCOztJQUM3Qiw4Q0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFxuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIElUZExhYmVsLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZEVtcGhhc2lzLFxuICBJVGRTZXJpZXMsXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxuICBJVGRTaGFkb3csXG4gIElUZExpbmVDdXJ2ZVN0eWxlLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IHR5cGUgVGRTYW5rZXlPcmllbnQgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuXG5leHBvcnQgdHlwZSBUZFNhbmtleUZvY3VzTm9kZUFkamFjZW5jeSA9IGJvb2xlYW4gfCAnYWxsRWRnZXMnIHwgJ291dEVkZ2VzJyB8ICdpbkVkZ2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRTYW5rZXlFbXBoYXNpc0xpbmVTdHlsZSBleHRlbmRzIElUZFNoYWRvdyB7XG4gIGNvbG9yPzogYW55O1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBjdXJ2ZW5lc3M/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2Fua2V5RW1waGFzaXMgZXh0ZW5kcyBJVGRFbXBoYXNpcyB7XG4gIGxpbmVTdHlsZTogSVRkU2Fua2V5RW1waGFzaXNMaW5lU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2Fua2V5U2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdzYW5rZXknPiB7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgbGVmdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBub2RlV2lkdGg/OiBudW1iZXI7XG4gIG5vZGVHYXA/OiBudW1iZXI7XG4gIGxheW91dEl0ZXJhdGlvbnM/OiBudW1iZXI7XG4gIG9yaWVudD86IFRkU2Fua2V5T3JpZW50O1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICBmb2N1c05vZGVBZGphY2VuY3k/OiBUZFNhbmtleUZvY3VzTm9kZUFkamFjZW5jeTtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsaW5lU3R5bGU/OiBJVGRMaW5lQ3VydmVTdHlsZTtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgZGF0YT86IGFueVtdO1xuICBub2Rlcz86IGFueVtdO1xuICBsaW5rcz86IGFueVtdO1xuICBlZGdlcz86IGFueVtdO1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtc2Fua2V5XScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc1NhbmtleUNvbXBvbmVudCksXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzU2Fua2V5Q29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J3NhbmtleSc+IGltcGxlbWVudHMgSVRkU2Fua2V5U2VyaWVzIHtcblxuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgnbGVmdCcpIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdyaWdodCcpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnYm90dG9tJykgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ25vZGVXaWR0aCcpIG5vZGVXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoJ25vZGVHYXAnKSBub2RlR2FwOiBudW1iZXI7XG4gIEBJbnB1dCgnbGF5b3V0SXRlcmF0aW9ucycpIGxheW91dEl0ZXJhdGlvbnM6IG51bWJlcjtcbiAgQElucHV0KCdvcmllbnQnKSBvcmllbnQ6IFRkU2Fua2V5T3JpZW50O1xuICBASW5wdXQoJ2RyYWdnYWJsZScpIGRyYWdnYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCdmb2N1c05vZGVBZGphY2VuY3knKSBmb2N1c05vZGVBZGphY2VuY3k6IFRkU2Fua2V5Rm9jdXNOb2RlQWRqYWNlbmN5O1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2xpbmVTdHlsZScpIGxpbmVTdHlsZTogSVRkTGluZUN1cnZlU3R5bGU7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueVtdO1xuICBASW5wdXQoJ25vZGVzJykgbm9kZXM6IGFueVtdO1xuICBASW5wdXQoJ2xpbmtzJykgbGlua3M6IGFueVtdO1xuICBASW5wdXQoJ2VkZ2VzJykgZWRnZXM6IGFueVtdO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdzYW5rZXknLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgY29sb3I6IHRoaXMuY29sb3IsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIG5vZGVXaWR0aDogdGhpcy5ub2RlV2lkdGgsXG4gICAgICBub2RlR2FwOiB0aGlzLm5vZGVHYXAsXG4gICAgICBsYXlvdXRJdGVyYXRpb25zOiB0aGlzLmxheW91dEl0ZXJhdGlvbnMsXG4gICAgICBvcmllbnQ6IHRoaXMub3JpZW50LFxuICAgICAgZHJhZ2dhYmxlOiB0aGlzLmRyYWdnYWJsZSxcbiAgICAgIGZvY3VzTm9kZUFkamFjZW5jeTogdGhpcy5mb2N1c05vZGVBZGphY2VuY3ksXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBsaW5lU3R5bGU6IHRoaXMubGluZVN0eWxlLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBub2RlczogdGhpcy5ub2RlcyxcbiAgICAgIGxpbmtzOiB0aGlzLmxpbmtzLFxuICAgICAgZWRnZXM6IHRoaXMuZWRnZXMsXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgYW5pbWF0aW9uOiB0aGlzLmFuaW1hdGlvbixcbiAgICAgIGFuaW1hdGlvblRocmVzaG9sZDogdGhpcy5hbmltYXRpb25UaHJlc2hvbGQsXG4gICAgICBhbmltYXRpb25EdXJhdGlvbjogdGhpcy5hbmltYXRpb25EdXJhdGlvbixcbiAgICAgIGFuaW1hdGlvbkVhc2luZzogdGhpcy5hbmltYXRpb25FYXNpbmcsXG4gICAgICBhbmltYXRpb25EZWxheTogdGhpcy5hbmltYXRpb25EZWxheSxcbiAgICAgIGFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlOiB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uVXBkYXRlLFxuICAgICAgYW5pbWF0aW9uRWFzaW5nVXBkYXRlOiB0aGlzLmFuaW1hdGlvbkVhc2luZ1VwZGF0ZSxcbiAgICAgIGFuaW1hdGlvbkRlbGF5VXBkYXRlOiB0aGlzLmFuaW1hdGlvbkRlbGF5VXBkYXRlLFxuICAgICAgdG9vbHRpcDogdGhpcy50b29sdGlwLFxuICAgIH07XG4gIH1cblxufVxuIl19