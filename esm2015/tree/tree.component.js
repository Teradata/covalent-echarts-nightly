import { Component, Input, ChangeDetectionStrategy, forwardRef, } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent, } from '@covalent/echarts/base';
export class TdChartSeriesTreeComponent extends TdSeriesComponent {
    constructor(_optionsService) {
        super('tree', _optionsService);
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
        };
    }
}
TdChartSeriesTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-tree]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesTreeComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesTreeComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesTreeComponent.propDecorators = {
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
    emphasis: [{ type: Input, args: ['emphasis',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlLyIsInNvdXJjZXMiOlsidHJlZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wscUJBQXFCLEVBT3JCLGlCQUFpQixHQUdsQixNQUFNLHdCQUF3QixDQUFDO0FBc0VoQyxNQUFNLE9BQU8sMEJBQTJCLFNBQVEsaUJBQXlCO0lBeUJ2RSxZQUFZLGVBQXNDO1FBQ2hELEtBQUssQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLGlCQUFpQjtZQUN6QyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQztJQUNKLENBQUM7OztZQS9ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDBCQUEwQjtnQkFDcEMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDBCQUEwQixDQUFDO3FCQUN0RixDQUFDO2FBQ0g7Ozs7WUE5RUMscUJBQXFCOzs7cUJBa0ZwQixLQUFLLFNBQUMsUUFBUTtnQkFDZCxLQUFLLFNBQUMsR0FBRzttQkFDVCxLQUFLLFNBQUMsTUFBTTtrQkFDWixLQUFLLFNBQUMsS0FBSztvQkFDWCxLQUFLLFNBQUMsT0FBTztxQkFDYixLQUFLLFNBQUMsUUFBUTtvQkFDZCxLQUFLLFNBQUMsT0FBTztxQkFDYixLQUFLLFNBQUMsUUFBUTtxQkFDZCxLQUFLLFNBQUMsUUFBUTtxQkFDZCxLQUFLLFNBQUMsUUFBUTtxQkFDZCxLQUFLLFNBQUMsUUFBUTt5QkFDZCxLQUFLLFNBQUMsWUFBWTsyQkFDbEIsS0FBSyxTQUFDLGNBQWM7K0JBQ3BCLEtBQUssU0FBQyxrQkFBa0I7bUJBQ3hCLEtBQUssU0FBQyxNQUFNO2dDQUNaLEtBQUssU0FBQyxtQkFBbUI7K0JBQ3pCLEtBQUssU0FBQyxrQkFBa0I7d0JBQ3hCLEtBQUssU0FBQyxXQUFXO29CQUNqQixLQUFLLFNBQUMsT0FBTzt3QkFDYixLQUFLLFNBQUMsV0FBVztxQkFDakIsS0FBSyxTQUFDLFFBQVE7dUJBQ2QsS0FBSyxTQUFDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFxuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIElUZEl0ZW1TdHlsZSxcbiAgSVRkU2VyaWVzVG9vbHRpcCxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZExhYmVsLFxuICBJVGRMaW5lU3R5bGUsXG4gIElUZFNlcmllcyxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG4gIElUZEVtcGhhc2lzLFxuICBJVGRTaGFkb3csXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG4vKipcbiAqIEVDSEFSVCBPUFRJT04gRE9DU1xuICogaHR0cHM6Ly9lY29tZmUuZ2l0aHViLmlvL2VjaGFydHMtZG9jL3B1YmxpYy9lbi9vcHRpb24uaHRtbCNzZXJpZXMtdHJlZVxuICpcbiAqL1xuXG4vKiogXG4gKiBMUiAtIGZyb20gbGVmdCB0byByaWdodFxuICogUkwgLSBmcm9tIHJpZ2h0IHRvIGxlZnRcbiAqIFRCIC0gZnJvbSB0b3AgdG8gYm90dG9tXG4gKiBCVCAtIGZyb20gYm90dG9tIHRvIHRvcFxuICovXG5leHBvcnQgdHlwZSBUZFRyZWVPcmllbnQgPSAnTFInIHwgJ1JMJ3wgJ1RCJyB8ICdCVCc7XG5cbmV4cG9ydCB0eXBlIFRkVHJlZUxheW91dCA9ICdvcnRob2dvbmFsJyB8ICdyYWRpYWwnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVFbXBoYXNpc0xpbmVTdHlsZSBleHRlbmRzIElUZFNoYWRvdyB7XG4gIGNvbG9yPzogYW55O1xuICB3aWR0aD86IG51bWJlcjtcbiAgY3VydmVuZXNzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVFbXBoYXNpcyBleHRlbmRzIElUZEVtcGhhc2lzIHtcbiAgbGluZVN0eWxlOiBJVGRUcmVlRW1waGFzaXNMaW5lU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVHJlZUxlYXZlcyB7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xufVxuXG5pbnRlcmZhY2UgSVRkVHJlZVNlcmllcyBleHRlbmRzIElUZFNlcmllczwndHJlZSc+IHtcbiAgemxldmVsPzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGxheW91dD86IFRkVHJlZUxheW91dDtcbiAgb3JpZW50PzogVGRUcmVlT3JpZW50O1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZzsgLy8gc3RyaW5nIGFkZGVkIGZvciBjdXN0b20gU1ZHLCBVUkwgb3IgZGF0YVVSSVxuICBzeW1ib2xTaXplPzogbnVtYmVyO1xuICBzeW1ib2xSb3RhdGU/OiBudW1iZXI7XG4gIHN5bWJvbEtlZXBBc3BlY3Q/OiBib29sZWFuO1xuICBzeW1ib2xPZmZzZXQ/OiBhbnlbXTtcbiAgcm9hbT86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIGV4cGFuZEFuZENvbGxhcHNlPzogYm9vbGVhbjtcbiAgaW5pdGlhbFRyZWVEZXB0aD86IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsYWJlbD86IElUZExhYmVsO1xuICBsaW5lU3R5bGU/OiBJVGRMaW5lU3R5bGU7XG4gIGxlYXZlcz86IElUZFRyZWVMZWF2ZXM7XG4gIGVtcGhhc2lzPzogSVRkVHJlZUVtcGhhc2lzO1xuICBkYXRhOiBhbnlbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLXRyZWVdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzVHJlZUNvbXBvbmVudCksXG4gIH1dLFxufSlcblxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNUcmVlQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J3RyZWUnPiBpbXBsZW1lbnRzIElUZFRyZWVTZXJpZXMge1xuXG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcbiAgQElucHV0KCdsZWZ0JykgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3RvcCcpIHRvcDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3JpZ2h0JykgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdib3R0b20nKSBib3R0b206IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd3aWR0aCcpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnbGF5b3V0JykgbGF5b3V0OiBUZFRyZWVMYXlvdXQ7XG4gIEBJbnB1dCgnb3JpZW50Jykgb3JpZW50OiBUZFRyZWVPcmllbnQ7XG4gIEBJbnB1dCgnc3ltYm9sJykgc3ltYm9sOiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZzsgLy8gc3RyaW5nIGFkZGVkIGZvciBjdXN0b20gU1ZHLCBVUkwgb3IgZGF0YVVSSVxuICBASW5wdXQoJ3N5bWJvbFNpemUnKSBzeW1ib2xTaXplOiBudW1iZXI7IC8vIHN0cmluZyBhZGRlZCBmb3IgY3VzdG9tIFNWRywgVVJMIG9yIGRhdGFVUklcbiAgQElucHV0KCdzeW1ib2xSb3RhdGUnKSBzeW1ib2xSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCdzeW1ib2xLZWVwQXNwZWN0Jykgc3ltYm9sS2VlcEFzcGVjdDogYm9vbGVhbjtcbiAgQElucHV0KCdyb2FtJykgcm9hbTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCdleHBhbmRBbmRDb2xsYXBzZScpIGV4cGFuZEFuZENvbGxhcHNlOiBib29sZWFuO1xuICBASW5wdXQoJ2luaXRpYWxUcmVlRGVwdGgnKSBpbml0aWFsVHJlZURlcHRoOiBudW1iZXI7XG4gIEBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgnbGluZVN0eWxlJykgbGluZVN0eWxlOiBJVGRMaW5lU3R5bGU7XG4gIEBJbnB1dCgnbGVhdmVzJykgbGVhdmVzOiBJVGRUcmVlTGVhdmVzO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZFRyZWVFbXBoYXNpcztcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd0cmVlJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIGxheW91dDogdGhpcy5sYXlvdXQsXG4gICAgICBvcmllbnQ6IHRoaXMub3JpZW50LFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgIHN5bWJvbFNpemU6IHRoaXMuc3ltYm9sU2l6ZSxcbiAgICAgIHN5bWJvbFJvdGF0ZTogdGhpcy5zeW1ib2xSb3RhdGUsXG4gICAgICBzeW1ib2xLZWVwQXNwZWN0OiB0aGlzLnN5bWJvbEtlZXBBc3BlY3QsXG4gICAgICByb2FtOiB0aGlzLnJvYW0sXG4gICAgICBleHBhbmRBbmRDb2xsYXBzZTogdGhpcy5leHBhbmRBbmRDb2xsYXBzZSxcbiAgICAgIGluaXRpYWxUcmVlRGVwdGg6IHRoaXMuaW5pdGlhbFRyZWVEZXB0aCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGxpbmVTdHlsZTogdGhpcy5saW5lU3R5bGUsXG4gICAgICBsZWF2ZXM6IHRoaXMubGVhdmVzLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgfTtcbiAgfVxufVxuIl19