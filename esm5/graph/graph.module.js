import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/graph';
import { TdChartSeriesGraphComponent } from './graph.component';
export var GRAPH_MODULE_COMPONENTS = [
    TdChartSeriesGraphComponent,
];
var CovalentGraphEchartsModule = /** @class */ (function () {
    function CovalentGraphEchartsModule() {
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
    return CovalentGraphEchartsModule;
}());
export { CovalentGraphEchartsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JhcGgubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvZ3JhcGgvIiwic291cmNlcyI6WyJncmFwaC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyx5QkFBeUIsQ0FBQztBQUVqQyxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVoRSxNQUFNLENBQUMsSUFBTSx1QkFBdUIsR0FBZ0I7SUFDbEQsMkJBQTJCO0NBQzVCLENBQUM7QUFFRjtJQUFBO0lBYUEsQ0FBQzs7Z0JBYkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx1QkFBdUI7cUJBQ3hCO2lCQUNGOztJQUdELGlDQUFDO0NBQUEsQUFiRCxJQWFDO1NBRlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCAnZWNoYXJ0cy9saWIvY2hhcnQvZ3JhcGgnO1xuXG5pbXBvcnQgeyBUZENoYXJ0U2VyaWVzR3JhcGhDb21wb25lbnQgfSBmcm9tICcuL2dyYXBoLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBHUkFQSF9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRTZXJpZXNHcmFwaENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEdSQVBIX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgR1JBUEhfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50R3JhcGhFY2hhcnRzTW9kdWxlIHtcblxufVxuIl19