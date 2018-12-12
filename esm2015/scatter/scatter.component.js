import { Component, Input, ChangeDetectionStrategy, forwardRef, } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent, } from '@covalent/echarts/base';
export class TdChartSeriesScatterComponent extends TdSeriesComponent {
    constructor(_optionsService) {
        super('scatter', _optionsService);
    }
    getConfig() {
        return {
            coordinateSystem: this.coordinateSystem,
            xAxisIndex: this.xAxisIndex,
            yAxisIndex: this.yAxisIndex,
            polarIndex: this.polarIndex,
            geoIndex: this.geoIndex,
            calendarIndex: this.calendarIndex,
            hoverAnimation: this.hoverAnimation,
            legendHoverLink: this.legendHoverLink,
            symbol: this.symbol,
            symbolSize: this.symbolSize,
            symbolRotate: this.symbolRotate,
            symbolKeepAspect: this.symbolKeepAspect,
            symbolOffset: this.symbolOffset,
            large: this.large,
            largeThreshold: this.largeThreshold,
            cursor: this.cursor,
            label: this.label,
            itemStyle: this.itemStyle,
            emphasis: this.emphasis,
            progressive: this.progressive,
            progressiveThreshold: this.progressiveThreshold,
            dimensions: this.dimensions,
            encode: this.encode,
            seriesLayoutBy: this.seriesLayoutBy,
            datasetIndex: this.datasetIndex,
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            silent: this.silent,
        };
    }
}
TdChartSeriesScatterComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-scatter]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesScatterComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesScatterComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesScatterComponent.propDecorators = {
    coordinateSystem: [{ type: Input, args: ['coordinateSystem',] }],
    xAxisIndex: [{ type: Input, args: ['xAxisIndex',] }],
    yAxisIndex: [{ type: Input, args: ['yAxisIndex',] }],
    polarIndex: [{ type: Input, args: ['polarIndex',] }],
    geoIndex: [{ type: Input, args: ['geoIndex',] }],
    calendarIndex: [{ type: Input, args: ['calendarIndex',] }],
    hoverAnimation: [{ type: Input, args: ['hoverAnimation',] }],
    legendHoverLink: [{ type: Input, args: ['legendHoverLink',] }],
    symbol: [{ type: Input, args: ['symbol',] }],
    symbolSize: [{ type: Input, args: ['symbolSize',] }],
    symbolRotate: [{ type: Input, args: ['symbolRotate',] }],
    symbolKeepAspect: [{ type: Input, args: ['symbolKeepAspect',] }],
    symbolOffset: [{ type: Input, args: ['symbolOffset',] }],
    large: [{ type: Input, args: ['large',] }],
    largeThreshold: [{ type: Input, args: ['largeThreshold',] }],
    cursor: [{ type: Input, args: ['cursor',] }],
    label: [{ type: Input, args: ['label',] }],
    itemStyle: [{ type: Input, args: ['itemStyle',] }],
    emphasis: [{ type: Input, args: ['emphasis',] }],
    progressive: [{ type: Input, args: ['progressive',] }],
    progressiveThreshold: [{ type: Input, args: ['progressiveThreshold',] }],
    dimensions: [{ type: Input, args: ['dimensions',] }],
    encode: [{ type: Input, args: ['encode',] }],
    seriesLayoutBy: [{ type: Input, args: ['seriesLayoutBy',] }],
    datasetIndex: [{ type: Input, args: ['datasetIndex',] }],
    markPoint: [{ type: Input, args: ['markPoint',] }],
    markLine: [{ type: Input, args: ['markLine',] }],
    markArea: [{ type: Input, args: ['markArea',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }],
    silent: [{ type: Input, args: ['silent',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhdHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9zY2F0dGVyLyIsInNvdXJjZXMiOlsic2NhdHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wscUJBQXFCLEVBVXJCLGlCQUFpQixHQUVsQixNQUFNLHdCQUF3QixDQUFDO0FBZ0RoQyxNQUFNLE9BQU8sNkJBQThCLFNBQVEsaUJBQTRCO0lBa0M3RSxZQUFZLGVBQXNDO1FBQ2hELEtBQUssQ0FBQyxTQUFTLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPO1lBQ0wsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0I7WUFDL0MsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7OztZQWhGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDZCQUE2QixDQUFDO3FCQUN6RixDQUFDO2FBQ0g7Ozs7WUEzREMscUJBQXFCOzs7K0JBOERwQixLQUFLLFNBQUMsa0JBQWtCO3lCQUN4QixLQUFLLFNBQUMsWUFBWTt5QkFDbEIsS0FBSyxTQUFDLFlBQVk7eUJBQ2xCLEtBQUssU0FBQyxZQUFZO3VCQUNsQixLQUFLLFNBQUMsVUFBVTs0QkFDaEIsS0FBSyxTQUFDLGVBQWU7NkJBQ3JCLEtBQUssU0FBQyxnQkFBZ0I7OEJBQ3RCLEtBQUssU0FBQyxpQkFBaUI7cUJBQ3ZCLEtBQUssU0FBQyxRQUFRO3lCQUNkLEtBQUssU0FBQyxZQUFZOzJCQUNsQixLQUFLLFNBQUMsY0FBYzsrQkFDcEIsS0FBSyxTQUFDLGtCQUFrQjsyQkFDeEIsS0FBSyxTQUFDLGNBQWM7b0JBQ3BCLEtBQUssU0FBQyxPQUFPOzZCQUNiLEtBQUssU0FBQyxnQkFBZ0I7cUJBQ3RCLEtBQUssU0FBQyxRQUFRO29CQUNkLEtBQUssU0FBQyxPQUFPO3dCQUNiLEtBQUssU0FBQyxXQUFXO3VCQUNqQixLQUFLLFNBQUMsVUFBVTswQkFDaEIsS0FBSyxTQUFDLGFBQWE7bUNBQ25CLEtBQUssU0FBQyxzQkFBc0I7eUJBQzVCLEtBQUssU0FBQyxZQUFZO3FCQUNsQixLQUFLLFNBQUMsUUFBUTs2QkFDZCxLQUFLLFNBQUMsZ0JBQWdCOzJCQUN0QixLQUFLLFNBQUMsY0FBYzt3QkFDcEIsS0FBSyxTQUFDLFdBQVc7dUJBQ2pCLEtBQUssU0FBQyxVQUFVO3VCQUNoQixLQUFLLFNBQUMsVUFBVTtxQkFDaEIsS0FBSyxTQUFDLFFBQVE7Z0JBQ2QsS0FBSyxTQUFDLEdBQUc7cUJBQ1QsS0FBSyxTQUFDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFxuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIFRkQ29vcmRpbmF0ZVN5c3RlbSxcbiAgVGRNYXJrUG9pbnRTeW1ib2wsXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRMYWJlbCxcbiAgSVRkRW1waGFzaXMsXG4gIFRkU2VyaWVzTGF5b3V0QnksXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG4gIElUZFNlcmllcyxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2NhdHRlclNlcmllcyBleHRlbmRzIElUZFNlcmllczwnc2NhdHRlcic+IHtcbiAgY29vcmRpbmF0ZVN5c3RlbT86IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgeEF4aXNJbmRleD86IG51bWJlcjtcbiAgeUF4aXNJbmRleD86IG51bWJlcjtcbiAgcG9sYXJJbmRleD86IG51bWJlcjtcbiAgZ2VvSW5kZXg/OiBudW1iZXI7XG4gIGNhbGVuZGFySW5kZXg/OiBudW1iZXI7XG4gIGhvdmVyQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgbGVnZW5kSG92ZXJMaW5rPzogYm9vbGVhbjtcbiAgc3ltYm9sPzogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIHN5bWJvbFNpemU/OiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBzeW1ib2xSb3RhdGU/OiBudW1iZXI7XG4gIHN5bWJvbEtlZXBBc3BlY3Q/OiBib29sZWFuO1xuICBzeW1ib2xPZmZzZXQ/OiBhbnlbXTtcbiAgbGFyZ2U/OiBib29sZWFuO1xuICBsYXJnZVRocmVzaG9sZD86IG51bWJlcjtcbiAgY3Vyc29yPzogc3RyaW5nO1xuICBjb25uZWN0TnVsbHM/OiBib29sZWFuO1xuICBjbGlwT3ZlcmZsb3c/OiBib29sZWFuO1xuICBzdGVwPzogYm9vbGVhbjtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgaXRlbVN0eWxlPzogYW55O1xuICBlbXBoYXNpcz86IElUZEVtcGhhc2lzO1xuICBwcm9ncmVzc2l2ZT86IG51bWJlcjtcbiAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ/OiBudW1iZXI7XG4gIGRpbWVuc2lvbnM/OiBhbnlbXTtcbiAgZW5jb2RlPzogYW55O1xuICBzZXJpZXNMYXlvdXRCeT86IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIGRhdGFzZXRJbmRleD86IG51bWJlcjtcbiAgZGF0YT86IGFueVtdO1xuICBtYXJrUG9pbnQ/OiBJVGRNYXJrUG9pbnQ7XG4gIG1hcmtMaW5lPzogSVRkTWFya0xpbmU7XG4gIG1hcmtBcmVhPzogSVRkTWFya0FyZWE7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cbiAgXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtc2NhdHRlcl0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNTY2F0dGVyQ29tcG9uZW50KSxcbiAgfV0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNTY2F0dGVyQ29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J3NjYXR0ZXInPiBpbXBsZW1lbnRzIElUZFNjYXR0ZXJTZXJpZXMge1xuXG4gIEBJbnB1dCgnY29vcmRpbmF0ZVN5c3RlbScpIGNvb3JkaW5hdGVTeXN0ZW06IFRkQ29vcmRpbmF0ZVN5c3RlbTtcbiAgQElucHV0KCd4QXhpc0luZGV4JykgeEF4aXNJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ3lBeGlzSW5kZXgnKSB5QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgncG9sYXJJbmRleCcpIHBvbGFySW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdnZW9JbmRleCcpIGdlb0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnY2FsZW5kYXJJbmRleCcpIGNhbGVuZGFySW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdob3ZlckFuaW1hdGlvbicpIGhvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoJ2xlZ2VuZEhvdmVyTGluaycpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCdzeW1ib2wnKSBzeW1ib2w6IFRkTWFya1BvaW50U3ltYm9sIHwgc3RyaW5nO1xuICBASW5wdXQoJ3N5bWJvbFNpemUnKSBzeW1ib2xTaXplOiBudW1iZXIgfCBhbnlbXSB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ3N5bWJvbFJvdGF0ZScpIHN5bWJvbFJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ3N5bWJvbEtlZXBBc3BlY3QnKSBzeW1ib2xLZWVwQXNwZWN0OiBib29sZWFuO1xuICBASW5wdXQoJ3N5bWJvbE9mZnNldCcpIHN5bWJvbE9mZnNldDogYW55W107XG4gIEBJbnB1dCgnbGFyZ2UnKSBsYXJnZTogYm9vbGVhbjtcbiAgQElucHV0KCdsYXJnZVRocmVzaG9sZCcpIGxhcmdlVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgnY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgnaXRlbVN0eWxlJykgaXRlbVN0eWxlOiBJVGRJdGVtU3R5bGU7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmUnKSBwcm9ncmVzc2l2ZTogbnVtYmVyO1xuICBASW5wdXQoJ3Byb2dyZXNzaXZlVGhyZXNob2xkJykgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdkaW1lbnNpb25zJykgZGltZW5zaW9uczogYW55W107XG4gIEBJbnB1dCgnZW5jb2RlJykgZW5jb2RlOiBhbnk7XG4gIEBJbnB1dCgnc2VyaWVzTGF5b3V0QnknKSBzZXJpZXNMYXlvdXRCeTogVGRTZXJpZXNMYXlvdXRCeTtcbiAgQElucHV0KCdkYXRhc2V0SW5kZXgnKSBkYXRhc2V0SW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdtYXJrUG9pbnQnKSBtYXJrUG9pbnQ6IElUZE1hcmtQb2ludDtcbiAgQElucHV0KCdtYXJrTGluZScpIG1hcmtMaW5lOiBJVGRNYXJrTGluZTtcbiAgQElucHV0KCdtYXJrQXJlYScpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdzY2F0dGVyJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBjb29yZGluYXRlU3lzdGVtOiB0aGlzLmNvb3JkaW5hdGVTeXN0ZW0sXG4gICAgICB4QXhpc0luZGV4OiB0aGlzLnhBeGlzSW5kZXgsXG4gICAgICB5QXhpc0luZGV4OiB0aGlzLnlBeGlzSW5kZXgsXG4gICAgICBwb2xhckluZGV4OiB0aGlzLnBvbGFySW5kZXgsXG4gICAgICBnZW9JbmRleDogdGhpcy5nZW9JbmRleCxcbiAgICAgIGNhbGVuZGFySW5kZXg6IHRoaXMuY2FsZW5kYXJJbmRleCxcbiAgICAgIGhvdmVyQW5pbWF0aW9uOiB0aGlzLmhvdmVyQW5pbWF0aW9uLFxuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIHN5bWJvbDogdGhpcy5zeW1ib2wsXG4gICAgICBzeW1ib2xTaXplOiB0aGlzLnN5bWJvbFNpemUsXG4gICAgICBzeW1ib2xSb3RhdGU6IHRoaXMuc3ltYm9sUm90YXRlLFxuICAgICAgc3ltYm9sS2VlcEFzcGVjdDogdGhpcy5zeW1ib2xLZWVwQXNwZWN0LFxuICAgICAgc3ltYm9sT2Zmc2V0OiB0aGlzLnN5bWJvbE9mZnNldCxcbiAgICAgIGxhcmdlOiB0aGlzLmxhcmdlLFxuICAgICAgbGFyZ2VUaHJlc2hvbGQ6IHRoaXMubGFyZ2VUaHJlc2hvbGQsXG4gICAgICBjdXJzb3I6IHRoaXMuY3Vyc29yLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBwcm9ncmVzc2l2ZTogdGhpcy5wcm9ncmVzc2l2ZSxcbiAgICAgIHByb2dyZXNzaXZlVGhyZXNob2xkOiB0aGlzLnByb2dyZXNzaXZlVGhyZXNob2xkLFxuICAgICAgZGltZW5zaW9uczogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgZW5jb2RlOiB0aGlzLmVuY29kZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgfTtcbiAgfVxufVxuIl19