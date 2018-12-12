import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/sankey';
import { TdChartSeriesSankeyComponent } from './sankey.component';
export const SANKEY_MODULE_COMPONENTS = [
    TdChartSeriesSankeyComponent,
];
export class CovalentSankeyEchartsModule {
}
CovalentSankeyEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    SANKEY_MODULE_COMPONENTS,
                ],
                exports: [
                    SANKEY_MODULE_COMPONENTS,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Fua2V5Lm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3NhbmtleS8iLCJzb3VyY2VzIjpbInNhbmtleS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTywwQkFBMEIsQ0FBQztBQUVsQyxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRSxNQUFNLENBQUMsTUFBTSx3QkFBd0IsR0FBZ0I7SUFDbkQsNEJBQTRCO0NBQzdCLENBQUM7QUFhRixNQUFNLE9BQU8sMkJBQTJCOzs7WUFYdkMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO2lCQUNiO2dCQUNELFlBQVksRUFBRTtvQkFDWix3QkFBd0I7aUJBQ3pCO2dCQUNELE9BQU8sRUFBRTtvQkFDUCx3QkFBd0I7aUJBQ3pCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jaGFydC9zYW5rZXknO1xuXG5pbXBvcnQgeyBUZENoYXJ0U2VyaWVzU2Fua2V5Q29tcG9uZW50IH0gZnJvbSAnLi9zYW5rZXkuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFNBTktFWV9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRTZXJpZXNTYW5rZXlDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTQU5LRVlfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTQU5LRVlfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50U2Fua2V5RWNoYXJ0c01vZHVsZSB7XG5cbn1cbiJdfQ==