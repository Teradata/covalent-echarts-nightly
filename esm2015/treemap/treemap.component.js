import { Component, Input, ChangeDetectionStrategy, forwardRef, } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent, } from '@covalent/echarts/base';
export class TdChartSeriesTreemapComponent extends TdSeriesComponent {
    constructor(_optionsService) {
        super('treemap', _optionsService);
        this.config = {};
    }
    getConfig() {
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
    }
}
TdChartSeriesTreemapComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-treemap]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesTreemapComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesTreemapComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZW1hcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlbWFwLyIsInNvdXJjZXMiOlsidHJlZW1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wscUJBQXFCLEVBS3JCLGlCQUFpQixHQUdsQixNQUFNLHdCQUF3QixDQUFDO0FBMkdoQyxNQUFNLE9BQU8sNkJBQThCLFNBQVEsaUJBQTRCO0lBcUM3RSxZQUFZLGVBQXNDO1FBQ2hELEtBQUssQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFwQ25CLFdBQU0sR0FBUSxFQUFFLENBQUM7SUFxQ2xDLENBQUM7SUFFRCxTQUFTO1FBQ1AsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQztJQUNKLENBQUM7OztZQWpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDZCQUE2QixDQUFDO3FCQUN6RixDQUFDO2FBQ0g7Ozs7WUFsSEMscUJBQXFCOzs7cUJBcUhwQixLQUFLLFNBQUMsUUFBUTtpQkFDZCxLQUFLLFNBQUMsSUFBSTttQkFDVixLQUFLLFNBQUMsTUFBTTttQkFDWixLQUFLLFNBQUMsTUFBTTtxQkFDWixLQUFLLFNBQUMsUUFBUTtnQkFDZCxLQUFLLFNBQUMsR0FBRzttQkFDVCxLQUFLLFNBQUMsTUFBTTtrQkFDWixLQUFLLFNBQUMsS0FBSztvQkFDWCxLQUFLLFNBQUMsT0FBTztxQkFDYixLQUFLLFNBQUMsUUFBUTtvQkFDZCxLQUFLLFNBQUMsT0FBTztxQkFDYixLQUFLLFNBQUMsUUFBUTswQkFDZCxLQUFLLFNBQUMsYUFBYTt3QkFDbkIsS0FBSyxTQUFDLFdBQVc7NEJBQ2pCLEtBQUssU0FBQyxlQUFlO21CQUNyQixLQUFLLFNBQUMsTUFBTTt3QkFDWixLQUFLLFNBQUMsV0FBVzs4QkFDakIsS0FBSyxTQUFDLGlCQUFpQjtxQkFDdkIsS0FBSyxTQUFDLFFBQVE7cUJBQ2QsS0FBSyxTQUFDLFFBQVE7OEJBQ2QsS0FBSyxTQUFDLGlCQUFpQjt3QkFDdkIsS0FBSyxTQUFDLFdBQVc7d0JBQ2pCLEtBQUssU0FBQyxXQUFXO3lCQUNqQixLQUFLLFNBQUMsWUFBWTs4QkFDbEIsS0FBSyxTQUFDLGlCQUFpQjs2QkFDdkIsS0FBSyxTQUFDLGdCQUFnQjt5QkFDdEIsS0FBSyxTQUFDLFlBQVk7aUNBQ2xCLEtBQUssU0FBQyxvQkFBb0I7d0JBQzFCLEtBQUssU0FBQyxXQUFXO29CQUNqQixLQUFLLFNBQUMsT0FBTzt5QkFDYixLQUFLLFNBQUMsWUFBWTt5QkFDbEIsS0FBSyxTQUFDLFlBQVk7dUJBQ2xCLEtBQUssU0FBQyxVQUFVO3NCQUNoQixLQUFLLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRTZXJpZXNUb29sdGlwLFxuICBJVGRMYWJlbCxcbiAgSVRkU2VyaWVzLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgSVRkRW1waGFzaXMsXG4gIElUZFNoYWRvdyxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbi8qKlxuICogRUNIQVJUIE9QVElPTiBET0NTXG4gKiBodHRwczovL2Vjb21mZS5naXRodWIuaW8vZWNoYXJ0cy1leGFtcGxlcy9wdWJsaWMvaW5kZXguaHRtbCNjaGFydC10eXBlLXRyZWVtYXBcbiAqXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlbWFwRW1waGFzaXNMaW5lU3R5bGUgZXh0ZW5kcyBJVGRTaGFkb3cge1xuICBjb2xvcj86IGFueTtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGN1cnZlbmVzcz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlbWFwRW1waGFzaXMgZXh0ZW5kcyBJVGRFbXBoYXNpcyB7XG4gIGxpbmVTdHlsZTogSVRkVHJlZW1hcEVtcGhhc2lzTGluZVN0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBVcHBlckxhYmVsIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHBvc2l0aW9uPzogc3RyaW5nIHwgYW55W107XG4gIGRpc3RhbmNlPzogc3RyaW5nIHwgbnVtYmVyO1xuICByb3RhdGU/OiBzdHJpbmcgfCBudW1iZXI7XG4gIG9mZnNldD86IGFueVtdO1xuICBmb3JtYXR0ZXI/OiBzdHJpbmc7XG4gIGNvbG9yPzogYW55O1xuICBmb250U3R5bGU/OiBzdHJpbmc7XG4gIGZvbnRXZWlnaHQ/OiBzdHJpbmc7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRTaXplPzogc3RyaW5nIHwgbnVtYmVyO1xuICBhbGlnbj86IHN0cmluZztcbiAgdmVydGljYWxBbGlnbj86IHN0cmluZztcbiAgbGluZUhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYmFja2dyb3VuZENvbG9yPzogYW55O1xuICBib3JkZXJDb2xvcj86IHN0cmluZztcbiAgYm9yZGVyV2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvcmRlclJhZGl1cz86IHN0cmluZyB8IG51bWJlcjtcbiAgcGFkZGluZz86IG51bWJlciB8IGFueVtdO1xuICBzaGFkb3dDb2xvcj86IHN0cmluZztcbiAgc2hhZG93Qmx1cj86IHN0cmluZyB8IG51bWJlcjtcbiAgc2hhZG93T2Zmc2V0WD86IHN0cmluZyB8IG51bWJlcjtcbiAgc2hhZG93T2Zmc2V0WT86IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dEJvcmRlckNvbG9yPzogc3RyaW5nO1xuICB0ZXh0Qm9yZGVyV2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRleHRTaGFkb3dDb2xvcj86IHN0cmluZztcbiAgdGV4dFNoYWRvd0JsdXI/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRleHRTaGFkb3dPZmZzZXRYPzogc3RyaW5nIHwgbnVtYmVyO1xuICB0ZXh0U2hhZG93T2Zmc2V0WT86IHN0cmluZyB8IG51bWJlcjtcbiAgcmljaDogYW55O1xuICBlbGxpcHNpczogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBCcmVhZGNydW1iIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIGxlZnQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcD86IHN0cmluZyB8IG51bWJlcjtcbiAgcmlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbT86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBlbXB0eUl0ZW1XaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBlbXBoYXNpcz86IElUZFRyZWVtYXBFbXBoYXNpcztcbn1cblxuaW50ZXJmYWNlIElUZFRyZWVtYXBTZXJpZXMgZXh0ZW5kcyBJVGRTZXJpZXM8J3RyZWVtYXAnPiB7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgbGVmdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBzcXVhcmVSYXRpbz86IHN0cmluZyB8IG51bWJlcjtcbiAgbGVhZkRlcHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBkcmlsbERvd25JY29uPzogc3RyaW5nO1xuICByb2FtPzogYm9vbGVhbiB8IHN0cmluZztcbiAgbm9kZUNsaWNrPzogYm9vbGVhbiB8IHN0cmluZztcbiAgem9vbVRvTm9kZVJhdGlvPzogc3RyaW5nIHwgbnVtYmVyO1xuICBsZXZlbHM/OiBhbnlbXTtcbiAgc2lsZW50PzogYm9vbGVhbjtcbiAgdmlzdWFsRGltZW5zaW9uPzogc3RyaW5nIHwgbnVtYmVyO1xuICB2aXN1YWxNaW4/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHZpc3VhbE1heD86IHN0cmluZyB8IG51bWJlcjtcbiAgY29sb3JBbHBoYT86IGFueVtdO1xuICBjb2xvclNhdHVyYXRpb24/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGNvbG9yTWFwcGluZ0J5Pzogc3RyaW5nO1xuICB2aXNpYmxlTWluPzogc3RyaW5nIHwgbnVtYmVyO1xuICBjaGlsZHJlblZpc2libGVNaW4/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgdXBwZXJMYWJlbD86IElUZFRyZWVtYXBVcHBlckxhYmVsO1xuICBicmVhZGNydW1iPzogSVRkVHJlZW1hcEJyZWFkY3J1bWI7XG4gIGVtcGhhc2lzPzogSVRkVHJlZW1hcEVtcGhhc2lzO1xuICBkYXRhOiBhbnlbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLXRyZWVtYXBdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzVHJlZW1hcENvbXBvbmVudCksXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzVHJlZW1hcENvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCd0cmVlbWFwJz4gaW1wbGVtZW50cyBJVGRUcmVlbWFwU2VyaWVzIHtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ2xlZnQnKSBsZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgndG9wJykgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgncmlnaHQnKSByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2JvdHRvbScpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3dpZHRoJykgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdoZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdzcXVhcmVSYXRpbycpIHNxdWFyZVJhdGlvOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnbGVhZkRlcHRoJykgbGVhZkRlcHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnZHJpbGxEb3duSWNvbicpIGRyaWxsRG93bkljb246IHN0cmluZztcbiAgQElucHV0KCdyb2FtJykgcm9hbTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCdub2RlQ2xpY2snKSBub2RlQ2xpY2s6IGJvb2xlYW4gfCBzdHJpbmc7XG4gIEBJbnB1dCgnem9vbVRvTm9kZVJhdGlvJykgem9vbVRvTm9kZVJhdGlvOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnbGV2ZWxzJykgbGV2ZWxzOiBhbnlbXTtcbiAgQElucHV0KCdzaWxlbnQnKSBzaWxlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgndmlzdWFsRGltZW5zaW9uJykgdmlzdWFsRGltZW5zaW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgndmlzdWFsTWluJykgdmlzdWFsTWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgndmlzdWFsTWF4JykgdmlzdWFsTWF4OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnY29sb3JBbHBoYScpIGNvbG9yQWxwaGE6IGFueVtdO1xuICBASW5wdXQoJ2NvbG9yU2F0dXJhdGlvbicpIGNvbG9yU2F0dXJhdGlvbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2NvbG9yTWFwcGluZ0J5JykgY29sb3JNYXBwaW5nQnk6IHN0cmluZztcbiAgQElucHV0KCd2aXNpYmxlTWluJykgdmlzaWJsZU1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2NoaWxkcmVuVmlzaWJsZU1pbicpIGNoaWxkcmVuVmlzaWJsZU1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ3VwcGVyTGFiZWwnKSB1cHBlckxhYmVsOiBJVGRUcmVlbWFwVXBwZXJMYWJlbDtcbiAgQElucHV0KCdicmVhZGNydW1iJykgYnJlYWRjcnVtYjogSVRkVHJlZW1hcEJyZWFkY3J1bWI7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkVHJlZW1hcEVtcGhhc2lzO1xuICBASW5wdXQoJ3Rvb2x0aXAnKSB0b29sdGlwOiBJVGRTZXJpZXNUb29sdGlwO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3RyZWVtYXAnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgc3F1YXJlUmF0aW86IHRoaXMuc3F1YXJlUmF0aW8sXG4gICAgICBsZWFmRGVwdGg6IHRoaXMubGVhZkRlcHRoLFxuICAgICAgZHJpbGxEb3duSWNvbjogdGhpcy5kcmlsbERvd25JY29uLFxuICAgICAgcm9hbTogdGhpcy5yb2FtLFxuICAgICAgbm9kZUNsaWNrOiB0aGlzLm5vZGVDbGljayxcbiAgICAgIHpvb21Ub05vZGVSYXRpbzogdGhpcy56b29tVG9Ob2RlUmF0aW8sXG4gICAgICBsZXZlbHM6IHRoaXMubGV2ZWxzLFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICAgIHZpc3VhbERpbWVuc2lvbjogdGhpcy52aXN1YWxEaW1lbnNpb24sXG4gICAgICB2aXN1YWxNaW46IHRoaXMudmlzdWFsTWluLFxuICAgICAgdmlzdWFsTWF4OiB0aGlzLnZpc3VhbE1heCxcbiAgICAgIGNvbG9yQWxwaGE6IHRoaXMuY29sb3JBbHBoYSxcbiAgICAgIGNvbG9yU2F0dXJhdGlvbjogdGhpcy5jb2xvclNhdHVyYXRpb24sXG4gICAgICBjb2xvck1hcHBpbmdCeTogdGhpcy5jb2xvck1hcHBpbmdCeSxcbiAgICAgIHZpc2libGVNaW46IHRoaXMudmlzaWJsZU1pbixcbiAgICAgIGNoaWxkcmVuVmlzaWJsZU1pbjogdGhpcy5jaGlsZHJlblZpc2libGVNaW4sXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICB1cHBlckxhYmVsOiB0aGlzLnVwcGVyTGFiZWwsXG4gICAgICBicmVhZGNydW1iOiB0aGlzLmJyZWFkY3J1bWIsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICB9O1xuICB9XG59XG4iXX0=