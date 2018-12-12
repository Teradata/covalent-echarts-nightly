import * as tslib_1 from "tslib";
import { Component, Input, ChangeDetectionStrategy, forwardRef, } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent, } from '@covalent/echarts/base';
var TdChartSeriesTreemapComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdChartSeriesTreemapComponent, _super);
    function TdChartSeriesTreemapComponent(_optionsService) {
        var _this = _super.call(this, 'treemap', _optionsService) || this;
        _this.config = {};
        return _this;
    }
    TdChartSeriesTreemapComponent.prototype.getConfig = function () {
        return {
            zlevel: this.zlevel,
            z: this.z,
            left: this.left,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            width: this.width,
            height: this.height,
            squareRatio: this.squareRatio,
            leafDepth: this.leafDepth,
            drillDownIcon: this.drillDownIcon,
            roam: this.roam,
            nodeClick: this.nodeClick,
            zoomToNodeRatio: this.zoomToNodeRatio,
            levels: this.levels,
            silent: this.silent,
            visualDimension: this.visualDimension,
            visualMin: this.visualMin,
            visualMax: this.visualMax,
            colorAlpha: this.colorAlpha,
            colorSaturation: this.colorSaturation,
            colorMappingBy: this.colorMappingBy,
            visibleMin: this.visibleMin,
            childrenVisibleMin: this.childrenVisibleMin,
            itemStyle: this.itemStyle,
            label: this.label,
            upperLabel: this.upperLabel,
            breadcrumb: this.breadcrumb,
            emphasis: this.emphasis,
        };
    };
    TdChartSeriesTreemapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-treemap]',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: TdSeriesComponent, useExisting: forwardRef(function () { return TdChartSeriesTreemapComponent; }),
                        }]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesTreemapComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesTreemapComponent.propDecorators = {
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
        squareRatio: [{ type: Input, args: ['squareRatio',] }],
        leafDepth: [{ type: Input, args: ['leafDepth',] }],
        drillDownIcon: [{ type: Input, args: ['drillDownIcon',] }],
        roam: [{ type: Input, args: ['roam',] }],
        nodeClick: [{ type: Input, args: ['nodeClick',] }],
        zoomToNodeRatio: [{ type: Input, args: ['zoomToNodeRatio',] }],
        levels: [{ type: Input, args: ['levels',] }],
        silent: [{ type: Input, args: ['silent',] }],
        visualDimension: [{ type: Input, args: ['visualDimension',] }],
        visualMin: [{ type: Input, args: ['visualMin',] }],
        visualMax: [{ type: Input, args: ['visualMax',] }],
        colorAlpha: [{ type: Input, args: ['colorAlpha',] }],
        colorSaturation: [{ type: Input, args: ['colorSaturation',] }],
        colorMappingBy: [{ type: Input, args: ['colorMappingBy',] }],
        visibleMin: [{ type: Input, args: ['visibleMin',] }],
        childrenVisibleMin: [{ type: Input, args: ['childrenVisibleMin',] }],
        itemStyle: [{ type: Input, args: ['itemStyle',] }],
        label: [{ type: Input, args: ['label',] }],
        upperLabel: [{ type: Input, args: ['upperLabel',] }],
        breadcrumb: [{ type: Input, args: ['breadcrumb',] }],
        emphasis: [{ type: Input, args: ['emphasis',] }],
        tooltip: [{ type: Input, args: ['tooltip',] }]
    };
    return TdChartSeriesTreemapComponent;
}(TdSeriesComponent));
export { TdChartSeriesTreemapComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlbWFwLyIsInNvdXJjZXMiOlsidHJlZW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLHVCQUF1QixFQUN2QixVQUFVLEdBQ1gsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLHFCQUFxQixFQUtyQixpQkFBaUIsR0FHbEIsTUFBTSx3QkFBd0IsQ0FBQztBQW1HaEM7SUFRbUQseURBQTRCO0lBcUM3RSx1Q0FBWSxlQUFzQztRQUFsRCxZQUNFLGtCQUFNLFNBQVMsRUFBRSxlQUFlLENBQUMsU0FDbEM7UUFyQ2dCLFlBQU0sR0FBUSxFQUFFLENBQUM7O0lBcUNsQyxDQUFDO0lBRUQsaURBQVMsR0FBVDtRQUNFLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0Isa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ3hCLENBQUM7SUFDSixDQUFDOztnQkFqRkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw2QkFBNkI7b0JBQ3ZDLFFBQVEsRUFBRSxFQUFFO29CQUNaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsQ0FBQzs0QkFDVixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsNkJBQTZCLEVBQTdCLENBQTZCLENBQUM7eUJBQ3pGLENBQUM7aUJBQ0g7Ozs7Z0JBbEhDLHFCQUFxQjs7O3lCQXFIcEIsS0FBSyxTQUFDLFFBQVE7cUJBQ2QsS0FBSyxTQUFDLElBQUk7dUJBQ1YsS0FBSyxTQUFDLE1BQU07dUJBQ1osS0FBSyxTQUFDLE1BQU07eUJBQ1osS0FBSyxTQUFDLFFBQVE7b0JBQ2QsS0FBSyxTQUFDLEdBQUc7dUJBQ1QsS0FBSyxTQUFDLE1BQU07c0JBQ1osS0FBSyxTQUFDLEtBQUs7d0JBQ1gsS0FBSyxTQUFDLE9BQU87eUJBQ2IsS0FBSyxTQUFDLFFBQVE7d0JBQ2QsS0FBSyxTQUFDLE9BQU87eUJBQ2IsS0FBSyxTQUFDLFFBQVE7OEJBQ2QsS0FBSyxTQUFDLGFBQWE7NEJBQ25CLEtBQUssU0FBQyxXQUFXO2dDQUNqQixLQUFLLFNBQUMsZUFBZTt1QkFDckIsS0FBSyxTQUFDLE1BQU07NEJBQ1osS0FBSyxTQUFDLFdBQVc7a0NBQ2pCLEtBQUssU0FBQyxpQkFBaUI7eUJBQ3ZCLEtBQUssU0FBQyxRQUFRO3lCQUNkLEtBQUssU0FBQyxRQUFRO2tDQUNkLEtBQUssU0FBQyxpQkFBaUI7NEJBQ3ZCLEtBQUssU0FBQyxXQUFXOzRCQUNqQixLQUFLLFNBQUMsV0FBVzs2QkFDakIsS0FBSyxTQUFDLFlBQVk7a0NBQ2xCLEtBQUssU0FBQyxpQkFBaUI7aUNBQ3ZCLEtBQUssU0FBQyxnQkFBZ0I7NkJBQ3RCLEtBQUssU0FBQyxZQUFZO3FDQUNsQixLQUFLLFNBQUMsb0JBQW9COzRCQUMxQixLQUFLLFNBQUMsV0FBVzt3QkFDakIsS0FBSyxTQUFDLE9BQU87NkJBQ2IsS0FBSyxTQUFDLFlBQVk7NkJBQ2xCLEtBQUssU0FBQyxZQUFZOzJCQUNsQixLQUFLLFNBQUMsVUFBVTswQkFDaEIsS0FBSyxTQUFDLFNBQVM7O0lBdUNsQixvQ0FBQztDQUFBLEFBbEZELENBUW1ELGlCQUFpQixHQTBFbkU7U0ExRVksNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZFNlcmllc1Rvb2x0aXAsXG4gIElUZExhYmVsLFxuICBJVGRTZXJpZXMsXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxuICBJVGRFbXBoYXNpcyxcbiAgSVRkU2hhZG93LFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuLyoqXG4gKiBFQ0hBUlQgT1BUSU9OIERPQ1NcbiAqIGh0dHBzOi8vZWNvbWZlLmdpdGh1Yi5pby9lY2hhcnRzLWV4YW1wbGVzL3B1YmxpYy9pbmRleC5odG1sI2NoYXJ0LXR5cGUtdHJlZW1hcFxuICpcbiAqL1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBFbXBoYXNpc0xpbmVTdHlsZSBleHRlbmRzIElUZFNoYWRvdyB7XG4gIGNvbG9yPzogYW55O1xuICB3aWR0aD86IG51bWJlcjtcbiAgY3VydmVuZXNzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBFbXBoYXNpcyBleHRlbmRzIElUZEVtcGhhc2lzIHtcbiAgbGluZVN0eWxlOiBJVGRUcmVlbWFwRW1waGFzaXNMaW5lU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcFVwcGVyTGFiZWwge1xuICBzaG93PzogYm9vbGVhbjtcbiAgcG9zaXRpb24/OiBzdHJpbmcgfCBhbnlbXTtcbiAgZGlzdGFuY2U/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJvdGF0ZT86IHN0cmluZyB8IG51bWJlcjtcbiAgb2Zmc2V0PzogYW55W107XG4gIGZvcm1hdHRlcj86IHN0cmluZztcbiAgY29sb3I/OiBhbnk7XG4gIGZvbnRTdHlsZT86IHN0cmluZztcbiAgZm9udFdlaWdodD86IHN0cmluZztcbiAgZm9udEZhbWlseT86IHN0cmluZztcbiAgZm9udFNpemU/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGFsaWduPzogc3RyaW5nO1xuICB2ZXJ0aWNhbEFsaWduPzogc3RyaW5nO1xuICBsaW5lSGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBhbnk7XG4gIGJvcmRlckNvbG9yPzogc3RyaW5nO1xuICBib3JkZXJXaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm9yZGVyUmFkaXVzPzogc3RyaW5nIHwgbnVtYmVyO1xuICBwYWRkaW5nPzogbnVtYmVyIHwgYW55W107XG4gIHNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICBzaGFkb3dCbHVyPzogc3RyaW5nIHwgbnVtYmVyO1xuICBzaGFkb3dPZmZzZXRYPzogc3RyaW5nIHwgbnVtYmVyO1xuICBzaGFkb3dPZmZzZXRZPzogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0ZXh0Qm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIHRleHRCb3JkZXJXaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dFNoYWRvd0NvbG9yPzogc3RyaW5nO1xuICB0ZXh0U2hhZG93Qmx1cj86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dFNoYWRvd09mZnNldFg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRleHRTaGFkb3dPZmZzZXRZPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWNoOiBhbnk7XG4gIGVsbGlwc2lzOiBhbnk7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZW1hcEJyZWFkY3J1bWIge1xuICBzaG93PzogYm9vbGVhbjtcbiAgbGVmdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGVtcHR5SXRlbVdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkVHJlZW1hcEVtcGhhc2lzO1xufVxuXG5pbnRlcmZhY2UgSVRkVHJlZW1hcFNlcmllcyBleHRlbmRzIElUZFNlcmllczwndHJlZW1hcCc+IHtcbiAgemxldmVsPzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHNxdWFyZVJhdGlvPzogc3RyaW5nIHwgbnVtYmVyO1xuICBsZWFmRGVwdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGRyaWxsRG93bkljb24/OiBzdHJpbmc7XG4gIHJvYW0/OiBib29sZWFuIHwgc3RyaW5nO1xuICBub2RlQ2xpY2s/OiBib29sZWFuIHwgc3RyaW5nO1xuICB6b29tVG9Ob2RlUmF0aW8/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGxldmVscz86IGFueVtdO1xuICBzaWxlbnQ/OiBib29sZWFuO1xuICB2aXN1YWxEaW1lbnNpb24/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHZpc3VhbE1pbj86IHN0cmluZyB8IG51bWJlcjtcbiAgdmlzdWFsTWF4Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBjb2xvckFscGhhPzogYW55W107XG4gIGNvbG9yU2F0dXJhdGlvbj86IHN0cmluZyB8IG51bWJlcjtcbiAgY29sb3JNYXBwaW5nQnk/OiBzdHJpbmc7XG4gIHZpc2libGVNaW4/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGNoaWxkcmVuVmlzaWJsZU1pbj86IHN0cmluZyB8IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsYWJlbD86IElUZExhYmVsO1xuICB1cHBlckxhYmVsPzogSVRkVHJlZW1hcFVwcGVyTGFiZWw7XG4gIGJyZWFkY3J1bWI/OiBJVGRUcmVlbWFwQnJlYWRjcnVtYjtcbiAgZW1waGFzaXM/OiBJVGRUcmVlbWFwRW1waGFzaXM7XG4gIGRhdGE6IGFueVtdO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtdHJlZW1hcF0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNUcmVlbWFwQ29tcG9uZW50KSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNUcmVlbWFwQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J3RyZWVtYXAnPiBpbXBsZW1lbnRzIElUZFRyZWVtYXBTZXJpZXMge1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCdkYXRhJykgZGF0YTogYW55O1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgnbGVmdCcpIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdyaWdodCcpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnYm90dG9tJykgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3NxdWFyZVJhdGlvJykgc3F1YXJlUmF0aW86IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdsZWFmRGVwdGgnKSBsZWFmRGVwdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdkcmlsbERvd25JY29uJykgZHJpbGxEb3duSWNvbjogc3RyaW5nO1xuICBASW5wdXQoJ3JvYW0nKSByb2FtOiBib29sZWFuIHwgc3RyaW5nO1xuICBASW5wdXQoJ25vZGVDbGljaycpIG5vZGVDbGljazogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCd6b29tVG9Ob2RlUmF0aW8nKSB6b29tVG9Ob2RlUmF0aW86IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdsZXZlbHMnKSBsZXZlbHM6IGFueVtdO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcbiAgQElucHV0KCd2aXN1YWxEaW1lbnNpb24nKSB2aXN1YWxEaW1lbnNpb246IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd2aXN1YWxNaW4nKSB2aXN1YWxNaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd2aXN1YWxNYXgnKSB2aXN1YWxNYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdjb2xvckFscGhhJykgY29sb3JBbHBoYTogYW55W107XG4gIEBJbnB1dCgnY29sb3JTYXR1cmF0aW9uJykgY29sb3JTYXR1cmF0aW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnY29sb3JNYXBwaW5nQnknKSBjb2xvck1hcHBpbmdCeTogc3RyaW5nO1xuICBASW5wdXQoJ3Zpc2libGVNaW4nKSB2aXNpYmxlTWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnY2hpbGRyZW5WaXNpYmxlTWluJykgY2hpbGRyZW5WaXNpYmxlTWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgndXBwZXJMYWJlbCcpIHVwcGVyTGFiZWw6IElUZFRyZWVtYXBVcHBlckxhYmVsO1xuICBASW5wdXQoJ2JyZWFkY3J1bWInKSBicmVhZGNydW1iOiBJVGRUcmVlbWFwQnJlYWRjcnVtYjtcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRUcmVlbWFwRW1waGFzaXM7XG4gIEBJbnB1dCgndG9vbHRpcCcpIHRvb2x0aXA6IElUZFNlcmllc1Rvb2x0aXA7XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigndHJlZW1hcCcsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBzcXVhcmVSYXRpbzogdGhpcy5zcXVhcmVSYXRpbyxcbiAgICAgIGxlYWZEZXB0aDogdGhpcy5sZWFmRGVwdGgsXG4gICAgICBkcmlsbERvd25JY29uOiB0aGlzLmRyaWxsRG93bkljb24sXG4gICAgICByb2FtOiB0aGlzLnJvYW0sXG4gICAgICBub2RlQ2xpY2s6IHRoaXMubm9kZUNsaWNrLFxuICAgICAgem9vbVRvTm9kZVJhdGlvOiB0aGlzLnpvb21Ub05vZGVSYXRpbyxcbiAgICAgIGxldmVsczogdGhpcy5sZXZlbHMsXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgdmlzdWFsRGltZW5zaW9uOiB0aGlzLnZpc3VhbERpbWVuc2lvbixcbiAgICAgIHZpc3VhbE1pbjogdGhpcy52aXN1YWxNaW4sXG4gICAgICB2aXN1YWxNYXg6IHRoaXMudmlzdWFsTWF4LFxuICAgICAgY29sb3JBbHBoYTogdGhpcy5jb2xvckFscGhhLFxuICAgICAgY29sb3JTYXR1cmF0aW9uOiB0aGlzLmNvbG9yU2F0dXJhdGlvbixcbiAgICAgIGNvbG9yTWFwcGluZ0J5OiB0aGlzLmNvbG9yTWFwcGluZ0J5LFxuICAgICAgdmlzaWJsZU1pbjogdGhpcy52aXNpYmxlTWluLFxuICAgICAgY2hpbGRyZW5WaXNpYmxlTWluOiB0aGlzLmNoaWxkcmVuVmlzaWJsZU1pbixcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIHVwcGVyTGFiZWw6IHRoaXMudXBwZXJMYWJlbCxcbiAgICAgIGJyZWFkY3J1bWI6IHRoaXMuYnJlYWRjcnVtYixcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==