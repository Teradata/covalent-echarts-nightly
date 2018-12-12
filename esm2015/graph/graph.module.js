import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/graph';
import { TdChartSeriesGraphComponent } from './graph.component';
export const GRAPH_MODULE_COMPONENTS = [
    TdChartSeriesGraphComponent,
];
export class CovalentGraphEchartsModule {
}
CovalentGraphEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    GRAPH_MODULE_COMPONENTS,
                ],
                exports: [
                    GRAPH_MODULE_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvZ3JhcGgvIiwic291cmNlcyI6WyJncmFwaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyx5QkFBeUIsQ0FBQztBQUVqQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRSxNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBZ0I7SUFDbEQsMkJBQTJCO0NBQzVCLENBQUM7QUFhRixNQUFNLE9BQU8sMEJBQTBCOzs7WUFYdEMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWix1QkFBdUI7aUJBQ3hCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx1QkFBdUI7aUJBQ3hCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jaGFydC9ncmFwaCc7XG5cbmltcG9ydCB7IFRkQ2hhcnRTZXJpZXNHcmFwaENvbXBvbmVudCB9IGZyb20gJy4vZ3JhcGguY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IEdSQVBIX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydFNlcmllc0dyYXBoQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgR1JBUEhfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBHUkFQSF9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRHcmFwaEVjaGFydHNNb2R1bGUge1xuXG59XG4iXX0=