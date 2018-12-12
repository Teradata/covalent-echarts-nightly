import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/tree';
import { TdChartSeriesTreeComponent } from './tree.component';
export const TREE_MODULE_COMPONENTS = [
    TdChartSeriesTreeComponent,
];
export class CovalentTreeEchartsModule {
}
CovalentTreeEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TREE_MODULE_COMPONENTS,
                ],
                exports: [
                    TREE_MODULE_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlLyIsInNvdXJjZXMiOlsidHJlZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyx3QkFBd0IsQ0FBQztBQUVoQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5RCxNQUFNLENBQUMsTUFBTSxzQkFBc0IsR0FBZ0I7SUFDakQsMEJBQTBCO0NBQzNCLENBQUM7QUFhRixNQUFNLE9BQU8seUJBQXlCOzs7WUFYckMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWixzQkFBc0I7aUJBQ3ZCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxzQkFBc0I7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jaGFydC90cmVlJztcblxuaW1wb3J0IHsgVGRDaGFydFNlcmllc1RyZWVDb21wb25lbnQgfSBmcm9tICcuL3RyZWUuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFRSRUVfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0U2VyaWVzVHJlZUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRSRUVfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUUkVFX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFRyZWVFY2hhcnRzTW9kdWxlIHtcblxufVxuIl19