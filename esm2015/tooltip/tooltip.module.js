import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/component/tooltip';
import { TdChartTooltipComponent, TdChartTooltipFormatterDirective } from './tooltip.component';
import { TdSeriesTooltipComponent } from './series-tooltip.component';
export const TOOLTIP_MODULE_COMPONENTS = [
    TdChartTooltipComponent,
    TdChartTooltipFormatterDirective,
    TdSeriesTooltipComponent,
];
export class CovalentTooltipEchartsModule {
}
CovalentTooltipEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TOOLTIP_MODULE_COMPONENTS,
                ],
                exports: [
                    TOOLTIP_MODULE_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTywrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsZ0NBQWdDLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRyxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUV0RSxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBZ0I7SUFDcEQsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyx3QkFBd0I7Q0FDekIsQ0FBQztBQWFGLE1BQU0sT0FBTyw0QkFBNEI7OztZQVh4QyxRQUFRLFNBQUM7Z0JBQ1IsT0FBTyxFQUFFO29CQUNQLFlBQVk7aUJBQ2I7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHlCQUF5QjtpQkFDMUI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLHlCQUF5QjtpQkFDMUI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgJ2VjaGFydHMvbGliL2NvbXBvbmVudC90b29sdGlwJztcblxuaW1wb3J0IHsgVGRDaGFydFRvb2x0aXBDb21wb25lbnQsIFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlIH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZFNlcmllc1Rvb2x0aXBDb21wb25lbnQgfSBmcm9tICcuL3Nlcmllcy10b29sdGlwLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBUT09MVElQX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydFRvb2x0aXBDb21wb25lbnQsXG4gIFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlLFxuICBUZFNlcmllc1Rvb2x0aXBDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUT09MVElQX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVE9PTFRJUF9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRUb29sdGlwRWNoYXJ0c01vZHVsZSB7IH1cbiJdfQ==