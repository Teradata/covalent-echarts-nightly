import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/line';
import { TdChartSeriesLineComponent } from './line.component';
export var LINE_MODULE_COMPONENTS = [
    TdChartSeriesLineComponent,
];
var CovalentLineEchartsModule = /** @class */ (function () {
    function CovalentLineEchartsModule() {
    }
    CovalentLineEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        LINE_MODULE_COMPONENTS,
                    ],
                    exports: [
                        LINE_MODULE_COMPONENTS,
                    ],
                },] }
    ];
    return CovalentLineEchartsModule;
}());
export { CovalentLineEchartsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9saW5lLyIsInNvdXJjZXMiOlsibGluZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyx3QkFBd0IsQ0FBQztBQUVoQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUU5RCxNQUFNLENBQUMsSUFBTSxzQkFBc0IsR0FBZ0I7SUFDakQsMEJBQTBCO0NBQzNCLENBQUM7QUFFRjtJQUFBO0lBYUEsQ0FBQzs7Z0JBYkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7cUJBQ3ZCO2lCQUNGOztJQUdELGdDQUFDO0NBQUEsQUFiRCxJQWFDO1NBRlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCAnZWNoYXJ0cy9saWIvY2hhcnQvbGluZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRTZXJpZXNMaW5lQ29tcG9uZW50IH0gZnJvbSAnLi9saW5lLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBMSU5FX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydFNlcmllc0xpbmVDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMSU5FX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTElORV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRMaW5lRWNoYXJ0c01vZHVsZSB7XG5cbn1cbiJdfQ==