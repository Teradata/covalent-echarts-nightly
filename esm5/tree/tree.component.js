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
export function ITdTreeEmphasisLineStyle() { }
if (false) {
    /** @type {?|undefined} */
    ITdTreeEmphasisLineStyle.prototype.color;
    /** @type {?|undefined} */
    ITdTreeEmphasisLineStyle.prototype.width;
    /** @type {?|undefined} */
    ITdTreeEmphasisLineStyle.prototype.curveness;
}
/**
 * @record
 */
export function ITdTreeEmphasis() { }
if (false) {
    /** @type {?} */
    ITdTreeEmphasis.prototype.lineStyle;
}
/**
 * @record
 */
export function ITdTreeLeaves() { }
if (false) {
    /** @type {?|undefined} */
    ITdTreeLeaves.prototype.label;
    /** @type {?|undefined} */
    ITdTreeLeaves.prototype.itemStyle;
    /** @type {?} */
    ITdTreeLeaves.prototype.emphasis;
}
/**
 * @record
 */
function ITdTreeSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.zlevel;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.z;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.left;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.top;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.right;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.bottom;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.width;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.height;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.layout;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.orient;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.symbol;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.symbolSize;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.symbolRotate;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.symbolKeepAspect;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.symbolOffset;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.roam;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.expandAndCollapse;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.initialTreeDepth;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.label;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.lineStyle;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.leaves;
    /** @type {?|undefined} */
    ITdTreeSeries.prototype.emphasis;
    /** @type {?} */
    ITdTreeSeries.prototype.data;
}
var TdChartSeriesTreeComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdChartSeriesTreeComponent, _super);
    function TdChartSeriesTreeComponent(_optionsService) {
        var _this = _super.call(this, 'tree', _optionsService) || this;
        _this.config = {};
        return _this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesTreeComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return {
            id: this.id,
            type: this.type,
            name: this.name,
            data: this.data,
            zlevel: this.zlevel,
            z: this.z,
            left: this.left,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            width: this.width,
            height: this.height,
            layout: this.layout,
            orient: this.orient,
            symbol: this.symbol,
            symbolSize: this.symbolSize,
            symbolRotate: this.symbolRotate,
            symbolKeepAspect: this.symbolKeepAspect,
            roam: this.roam,
            expandAndCollapse: this.expandAndCollapse,
            initialTreeDepth: this.initialTreeDepth,
            itemStyle: this.itemStyle,
            label: this.label,
            lineStyle: this.lineStyle,
            leaves: this.leaves,
            emphasis: this.emphasis,
            tooltip: this.tooltip,
        };
    };
    TdChartSeriesTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-tree]',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: TdSeriesComponent, useExisting: forwardRef(function () { return TdChartSeriesTreeComponent; }),
                        }]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesTreeComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesTreeComponent.propDecorators = {
        config: [{ type: Input, args: ['config',] }],
        id: [{ type: Input, args: ['id',] }],
        name: [{ type: Input, args: ['name',] }],
        data: [{ type: Input, args: ['data',] }],
        zlevel: [{ type: Input, args: ['zlevel',] }],
        z: [{ type: Input, args: ['z',] }],
        left: [{ type: Input, args: ['left',] }],
        top: [{ type: Input, args: ['top',] }],
        right: [{ type: Input, args: ['right',] }],
        bottom: [{ type: Input, args: ['bottom',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }],
        layout: [{ type: Input, args: ['layout',] }],
        orient: [{ type: Input, args: ['orient',] }],
        symbol: [{ type: Input, args: ['symbol',] }],
        symbolSize: [{ type: Input, args: ['symbolSize',] }],
        symbolRotate: [{ type: Input, args: ['symbolRotate',] }],
        symbolKeepAspect: [{ type: Input, args: ['symbolKeepAspect',] }],
        roam: [{ type: Input, args: ['roam',] }],
        expandAndCollapse: [{ type: Input, args: ['expandAndCollapse',] }],
        initialTreeDepth: [{ type: Input, args: ['initialTreeDepth',] }],
        itemStyle: [{ type: Input, args: ['itemStyle',] }],
        label: [{ type: Input, args: ['label',] }],
        lineStyle: [{ type: Input, args: ['lineStyle',] }],
        leaves: [{ type: Input, args: ['leaves',] }],
        emphasis: [{ type: Input, args: ['emphasis',] }],
        tooltip: [{ type: Input, args: ['tooltip',] }]
    };
    return TdChartSeriesTreeComponent;
}(TdSeriesComponent));
export { TdChartSeriesTreeComponent };
if (false) {
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.config;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.id;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.name;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.data;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.zlevel;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.z;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.left;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.top;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.right;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.bottom;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.width;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.height;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.layout;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.orient;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.symbol;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.symbolSize;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.symbolRotate;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.symbolKeepAspect;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.roam;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.expandAndCollapse;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.initialTreeDepth;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.itemStyle;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.label;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.lineStyle;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.leaves;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.emphasis;
    /** @type {?} */
    TdChartSeriesTreeComponent.prototype.tooltip;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlLyIsInNvdXJjZXMiOlsidHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCx1QkFBdUIsRUFDdkIsVUFBVSxHQUNYLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxxQkFBcUIsRUFPckIsaUJBQWlCLEdBR2xCLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFrQmhDLDhDQUlDOzs7SUFIQyx5Q0FBWTs7SUFDWix5Q0FBZTs7SUFDZiw2Q0FBbUI7Ozs7O0FBR3JCLHFDQUVDOzs7SUFEQyxvQ0FBb0M7Ozs7O0FBR3RDLG1DQUlDOzs7SUFIQyw4QkFBaUI7O0lBQ2pCLGtDQUF5Qjs7SUFDekIsaUNBQXNCOzs7OztBQUd4Qiw0QkF5QkM7OztJQXhCQywrQkFBZ0I7O0lBQ2hCLDBCQUFXOztJQUNYLDZCQUF1Qjs7SUFDdkIsNEJBQXNCOztJQUN0Qiw4QkFBd0I7O0lBQ3hCLCtCQUF5Qjs7SUFDekIsOEJBQXdCOztJQUN4QiwrQkFBeUI7O0lBQ3pCLCtCQUFzQjs7SUFDdEIsK0JBQXNCOztJQUN0QiwrQkFBb0M7O0lBQ3BDLG1DQUFvQjs7SUFDcEIscUNBQXNCOztJQUN0Qix5Q0FBMkI7O0lBQzNCLHFDQUFxQjs7SUFDckIsNkJBQXdCOztJQUN4QiwwQ0FBNEI7O0lBQzVCLHlDQUEwQjs7SUFDMUIsa0NBQXlCOztJQUN6Qiw4QkFBaUI7O0lBQ2pCLGtDQUF5Qjs7SUFDekIsK0JBQXVCOztJQUN2QixpQ0FBMkI7O0lBQzNCLDZCQUFZOztBQUdkO0lBU2dELHNEQUF5QjtJQThCdkUsb0NBQVksZUFBc0M7UUFBbEQsWUFDRSxrQkFBTSxNQUFNLEVBQUUsZUFBZSxDQUFDLFNBQy9CO1FBOUJnQixZQUFNLEdBQVEsRUFBRSxDQUFDOztJQThCbEMsQ0FBQzs7OztJQUVELDhD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NEI7O0lBQzVCLDBDQUF5Qjs7SUFDekIsNENBQWdDOztJQUNoQyx1Q0FBc0I7O0lBQ3RCLDBDQUFxQzs7SUFDckMseUNBQW1DOztJQUNuQywyQ0FBdUM7O0lBQ3ZDLDRDQUF5Qzs7SUFDekMsMkNBQXVDOztJQUN2Qyw0Q0FBeUM7O0lBQ3pDLDRDQUFzQzs7SUFDdEMsNENBQXNDOztJQUN0Qyw0Q0FBb0Q7O0lBQ3BELGdEQUF3Qzs7SUFDeEMsa0RBQTRDOztJQUM1QyxzREFBcUQ7O0lBQ3JELDBDQUFzQzs7SUFDdEMsdURBQXVEOztJQUN2RCxzREFBb0Q7O0lBQ3BELCtDQUE0Qzs7SUFDNUMsMkNBQWdDOztJQUNoQywrQ0FBNEM7O0lBQzVDLDRDQUF1Qzs7SUFDdkMsOENBQTZDOztJQUM3Qyw2Q0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFxuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkU2VyaWVzVG9vbHRpcCxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZExhYmVsLFxuICBJVGRMaW5lU3R5bGUsXG4gIElUZFNlcmllcyxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG4gIElUZEVtcGhhc2lzLFxuICBJVGRTaGFkb3csXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG4vKipcbiAqIEVDSEFSVCBPUFRJT04gRE9DU1xuICogaHR0cHM6Ly9lY29tZmUuZ2l0aHViLmlvL2VjaGFydHMtZG9jL3B1YmxpYy9lbi9vcHRpb24uaHRtbCNzZXJpZXMtdHJlZVxuICpcbiAqL1xuXG4vKiogXG4gKiBMUiAtIGZyb20gbGVmdCB0byByaWdodFxuICogUkwgLSBmcm9tIHJpZ2h0IHRvIGxlZnRcbiAqIFRCIC0gZnJvbSB0b3AgdG8gYm90dG9tXG4gKiBCVCAtIGZyb20gYm90dG9tIHRvIHRvcFxuICovXG5leHBvcnQgdHlwZSBUZFRyZWVPcmllbnQgPSAnTFInIHwgJ1JMJ3wgJ1RCJyB8ICdCVCc7XG5cbmV4cG9ydCB0eXBlIFRkVHJlZUxheW91dCA9ICdvcnRob2dvbmFsJyB8ICdyYWRpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVFbXBoYXNpc0xpbmVTdHlsZSBleHRlbmRzIElUZFNoYWRvdyB7XG4gIGNvbG9yPzogYW55O1xuICB3aWR0aD86IG51bWJlcjtcbiAgY3VydmVuZXNzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVFbXBoYXNpcyBleHRlbmRzIElUZEVtcGhhc2lzIHtcbiAgbGluZVN0eWxlOiBJVGRUcmVlRW1waGFzaXNMaW5lU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZUxlYXZlcyB7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xufVxuXG5pbnRlcmZhY2UgSVRkVHJlZVNlcmllcyBleHRlbmRzIElUZFNlcmllczwndHJlZSc+IHtcbiAgemxldmVsPzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGxheW91dD86IFRkVHJlZUxheW91dDtcbiAgb3JpZW50PzogVGRUcmVlT3JpZW50O1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZzsgLy8gc3RyaW5nIGFkZGVkIGZvciBjdXN0b20gU1ZHLCBVUkwgb3IgZGF0YVVSSVxuICBzeW1ib2xTaXplPzogbnVtYmVyO1xuICBzeW1ib2xSb3RhdGU/OiBudW1iZXI7XG4gIHN5bWJvbEtlZXBBc3BlY3Q/OiBib29sZWFuO1xuICBzeW1ib2xPZmZzZXQ/OiBhbnlbXTtcbiAgcm9hbT86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIGV4cGFuZEFuZENvbGxhcHNlPzogYm9vbGVhbjtcbiAgaW5pdGlhbFRyZWVEZXB0aD86IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsYWJlbD86IElUZExhYmVsO1xuICBsaW5lU3R5bGU/OiBJVGRMaW5lU3R5bGU7XG4gIGxlYXZlcz86IElUZFRyZWVMZWF2ZXM7XG4gIGVtcGhhc2lzPzogSVRkVHJlZUVtcGhhc2lzO1xuICBkYXRhOiBhbnlbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLXRyZWVdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzVHJlZUNvbXBvbmVudCksXG4gIH1dLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNUcmVlQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J3RyZWUnPiBpbXBsZW1lbnRzIElUZFRyZWVTZXJpZXMge1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCdkYXRhJykgZGF0YTogYW55O1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgnbGVmdCcpIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdyaWdodCcpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnYm90dG9tJykgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2xheW91dCcpIGxheW91dDogVGRUcmVlTGF5b3V0O1xuICBASW5wdXQoJ29yaWVudCcpIG9yaWVudDogVGRUcmVlT3JpZW50O1xuICBASW5wdXQoJ3N5bWJvbCcpIHN5bWJvbDogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7IC8vIHN0cmluZyBhZGRlZCBmb3IgY3VzdG9tIFNWRywgVVJMIG9yIGRhdGFVUklcbiAgQElucHV0KCdzeW1ib2xTaXplJykgc3ltYm9sU2l6ZTogbnVtYmVyOyAvLyBzdHJpbmcgYWRkZWQgZm9yIGN1c3RvbSBTVkcsIFVSTCBvciBkYXRhVVJJXG4gIEBJbnB1dCgnc3ltYm9sUm90YXRlJykgc3ltYm9sUm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgnc3ltYm9sS2VlcEFzcGVjdCcpIHN5bWJvbEtlZXBBc3BlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgncm9hbScpIHJvYW06IGJvb2xlYW4gfCBzdHJpbmc7XG4gIEBJbnB1dCgnZXhwYW5kQW5kQ29sbGFwc2UnKSBleHBhbmRBbmRDb2xsYXBzZTogYm9vbGVhbjtcbiAgQElucHV0KCdpbml0aWFsVHJlZURlcHRoJykgaW5pdGlhbFRyZWVEZXB0aDogbnVtYmVyO1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ2xpbmVTdHlsZScpIGxpbmVTdHlsZTogSVRkTGluZVN0eWxlO1xuICBASW5wdXQoJ2xlYXZlcycpIGxlYXZlczogSVRkVHJlZUxlYXZlcztcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRUcmVlRW1waGFzaXM7XG4gIEBJbnB1dCgndG9vbHRpcCcpIHRvb2x0aXA6IElUZFNlcmllc1Rvb2x0aXA7XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigndHJlZScsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIGxheW91dDogdGhpcy5sYXlvdXQsXG4gICAgICBvcmllbnQ6IHRoaXMub3JpZW50LFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgIHN5bWJvbFNpemU6IHRoaXMuc3ltYm9sU2l6ZSxcbiAgICAgIHN5bWJvbFJvdGF0ZTogdGhpcy5zeW1ib2xSb3RhdGUsXG4gICAgICBzeW1ib2xLZWVwQXNwZWN0OiB0aGlzLnN5bWJvbEtlZXBBc3BlY3QsXG4gICAgICByb2FtOiB0aGlzLnJvYW0sXG4gICAgICBleHBhbmRBbmRDb2xsYXBzZTogdGhpcy5leHBhbmRBbmRDb2xsYXBzZSxcbiAgICAgIGluaXRpYWxUcmVlRGVwdGg6IHRoaXMuaW5pdGlhbFRyZWVEZXB0aCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGxpbmVTdHlsZTogdGhpcy5saW5lU3R5bGUsXG4gICAgICBsZWF2ZXM6IHRoaXMubGVhdmVzLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICB0b29sdGlwOiB0aGlzLnRvb2x0aXAsXG4gICAgfTtcbiAgfVxufVxuIl19