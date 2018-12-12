import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/treemap';
import { TdChartSeriesTreemapComponent } from './treemap.component';
export const TREEMAP_MODULE_COMPONENTS = [
    TdChartSeriesTreemapComponent,
];
export class CovalentTreemapEchartsModule {
}
CovalentTreemapEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TREEMAP_MODULE_COMPONENTS,
                ],
                exports: [
                    TREEMAP_MODULE_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZW1hcC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlbWFwLyIsInNvdXJjZXMiOlsidHJlZW1hcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTywyQkFBMkIsQ0FBQztBQUVuQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVwRSxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBZ0I7SUFDcEQsNkJBQTZCO0NBQzlCLENBQUM7QUFhRixNQUFNLE9BQU8sNEJBQTRCOzs7WUFYeEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWix5QkFBeUI7aUJBQzFCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx5QkFBeUI7aUJBQzFCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jaGFydC90cmVlbWFwJztcblxuaW1wb3J0IHsgVGRDaGFydFNlcmllc1RyZWVtYXBDb21wb25lbnQgfSBmcm9tICcuL3RyZWVtYXAuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFRSRUVNQVBfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0U2VyaWVzVHJlZW1hcENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRSRUVNQVBfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUUkVFTUFQX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFRyZWVtYXBFY2hhcnRzTW9kdWxlIHtcblxufVxuIl19