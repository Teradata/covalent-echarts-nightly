import { Component, Input, ChangeDetectionStrategy, forwardRef, } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent, } from '@covalent/echarts/base';
export class TdChartSeriesSankeyComponent extends TdSeriesComponent {
    constructor(_optionsService) {
        super('sankey', _optionsService);
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
    }
}
TdChartSeriesSankeyComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-sankey]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesSankeyComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesSankeyComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Fua2V5LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3NhbmtleS8iLCJzb3VyY2VzIjpbInNhbmtleS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEVBQ3ZCLFVBQVUsR0FDWCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wscUJBQXFCLEVBS3JCLGlCQUFpQixHQUdsQixNQUFNLHdCQUF3QixDQUFDO0FBa0RoQyxNQUFNLE9BQU8sNEJBQTZCLFNBQVEsaUJBQTJCO0lBeUIzRSxZQUFZLGVBQXNDO1FBQ2hELEtBQUssQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxnQkFBZ0I7WUFDdkMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07U0FDcEIsQ0FBQztJQUNKLENBQUM7OztZQTlERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUE0QixDQUFDO3FCQUN4RixDQUFDO2FBQ0g7Ozs7WUF6REMscUJBQXFCOzs7cUJBNERwQixLQUFLLFNBQUMsUUFBUTtnQkFDZCxLQUFLLFNBQUMsR0FBRzttQkFDVCxLQUFLLFNBQUMsTUFBTTtrQkFDWixLQUFLLFNBQUMsS0FBSztvQkFDWCxLQUFLLFNBQUMsT0FBTztxQkFDYixLQUFLLFNBQUMsUUFBUTtvQkFDZCxLQUFLLFNBQUMsT0FBTztxQkFDYixLQUFLLFNBQUMsUUFBUTt3QkFDZCxLQUFLLFNBQUMsV0FBVztzQkFDakIsS0FBSyxTQUFDLFNBQVM7K0JBQ2YsS0FBSyxTQUFDLGtCQUFrQjtxQkFDeEIsS0FBSyxTQUFDLFFBQVE7d0JBQ2QsS0FBSyxTQUFDLFdBQVc7aUNBQ2pCLEtBQUssU0FBQyxvQkFBb0I7b0JBQzFCLEtBQUssU0FBQyxPQUFPO3dCQUNiLEtBQUssU0FBQyxXQUFXO3dCQUNqQixLQUFLLFNBQUMsV0FBVzt1QkFDakIsS0FBSyxTQUFDLFVBQVU7b0JBQ2hCLEtBQUssU0FBQyxPQUFPO29CQUNiLEtBQUssU0FBQyxPQUFPO29CQUNiLEtBQUssU0FBQyxPQUFPO3FCQUNiLEtBQUssU0FBQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIGZvcndhcmRSZWYsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBJVGRMYWJlbCxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRFbXBoYXNpcyxcbiAgSVRkU2VyaWVzLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgSVRkU2hhZG93LFxuICBJVGRMaW5lQ3VydmVTdHlsZSxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCB0eXBlIFRkU2Fua2V5T3JpZW50ID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcblxuZXhwb3J0IHR5cGUgVGRTYW5rZXlGb2N1c05vZGVBZGphY2VuY3kgPSBib29sZWFuIHwgJ2FsbEVkZ2VzJyB8ICdvdXRFZGdlcycgfCAnaW5FZGdlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2Fua2V5RW1waGFzaXNMaW5lU3R5bGUgZXh0ZW5kcyBJVGRTaGFkb3cge1xuICBjb2xvcj86IGFueTtcbiAgb3BhY2l0eT86IG51bWJlcjtcbiAgY3VydmVuZXNzPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFNhbmtleUVtcGhhc2lzIGV4dGVuZHMgSVRkRW1waGFzaXMge1xuICBsaW5lU3R5bGU6IElUZFNhbmtleUVtcGhhc2lzTGluZVN0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFNhbmtleVNlcmllcyBleHRlbmRzIElUZFNlcmllczwnc2Fua2V5Jz4ge1xuICB6bGV2ZWw/OiBudW1iZXI7XG4gIHo/OiBudW1iZXI7XG4gIGxlZnQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcD86IHN0cmluZyB8IG51bWJlcjtcbiAgcmlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbT86IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgbm9kZVdpZHRoPzogbnVtYmVyO1xuICBub2RlR2FwPzogbnVtYmVyO1xuICBsYXlvdXRJdGVyYXRpb25zPzogbnVtYmVyO1xuICBvcmllbnQ/OiBUZFNhbmtleU9yaWVudDtcbiAgZHJhZ2dhYmxlPzogYm9vbGVhbjtcbiAgZm9jdXNOb2RlQWRqYWNlbmN5PzogVGRTYW5rZXlGb2N1c05vZGVBZGphY2VuY3k7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgbGluZVN0eWxlPzogSVRkTGluZUN1cnZlU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbm9kZXM/OiBhbnlbXTtcbiAgbGlua3M/OiBhbnlbXTtcbiAgZWRnZXM/OiBhbnlbXTtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLXNhbmtleV0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogVGRTZXJpZXNDb21wb25lbnQsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNTYW5rZXlDb21wb25lbnQpLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1NhbmtleUNvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdzYW5rZXknPiBpbXBsZW1lbnRzIElUZFNhbmtleVNlcmllcyB7XG5cbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ2xlZnQnKSBsZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgndG9wJykgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgncmlnaHQnKSByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2JvdHRvbScpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3dpZHRoJykgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdoZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdub2RlV2lkdGgnKSBub2RlV2lkdGg6IG51bWJlcjtcbiAgQElucHV0KCdub2RlR2FwJykgbm9kZUdhcDogbnVtYmVyO1xuICBASW5wdXQoJ2xheW91dEl0ZXJhdGlvbnMnKSBsYXlvdXRJdGVyYXRpb25zOiBudW1iZXI7XG4gIEBJbnB1dCgnb3JpZW50Jykgb3JpZW50OiBUZFNhbmtleU9yaWVudDtcbiAgQElucHV0KCdkcmFnZ2FibGUnKSBkcmFnZ2FibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgnZm9jdXNOb2RlQWRqYWNlbmN5JykgZm9jdXNOb2RlQWRqYWNlbmN5OiBUZFNhbmtleUZvY3VzTm9kZUFkamFjZW5jeTtcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdsaW5lU3R5bGUnKSBsaW5lU3R5bGU6IElUZExpbmVDdXJ2ZVN0eWxlO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuICBASW5wdXQoJ25vZGVzJykgbm9kZXM6IGFueVtdO1xuICBASW5wdXQoJ2xpbmtzJykgbGlua3M6IGFueVtdO1xuICBASW5wdXQoJ2VkZ2VzJykgZWRnZXM6IGFueVtdO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdzYW5rZXknLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgbm9kZVdpZHRoOiB0aGlzLm5vZGVXaWR0aCxcbiAgICAgIG5vZGVHYXA6IHRoaXMubm9kZUdhcCxcbiAgICAgIGxheW91dEl0ZXJhdGlvbnM6IHRoaXMubGF5b3V0SXRlcmF0aW9ucyxcbiAgICAgIG9yaWVudDogdGhpcy5vcmllbnQsXG4gICAgICBkcmFnZ2FibGU6IHRoaXMuZHJhZ2dhYmxlLFxuICAgICAgZm9jdXNOb2RlQWRqYWNlbmN5OiB0aGlzLmZvY3VzTm9kZUFkamFjZW5jeSxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGxpbmVTdHlsZTogdGhpcy5saW5lU3R5bGUsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIG5vZGVzOiB0aGlzLm5vZGVzLFxuICAgICAgbGlua3M6IHRoaXMubGlua3MsXG4gICAgICBlZGdlczogdGhpcy5lZGdlcyxcbiAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=