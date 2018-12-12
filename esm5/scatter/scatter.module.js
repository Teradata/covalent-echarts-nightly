import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/scatter';
import { TdChartSeriesScatterComponent } from './scatter.component';
export var SCATTER_MODULE_COMPONENTS = [
    TdChartSeriesScatterComponent,
];
var CovalentScatterEchartsModule = /** @class */ (function () {
    function CovalentScatterEchartsModule() {
    }
    CovalentScatterEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        SCATTER_MODULE_COMPONENTS,
                    ],
                    exports: [
                        SCATTER_MODULE_COMPONENTS,
                    ],
                },] }
    ];
    return CovalentScatterEchartsModule;
}());
export { CovalentScatterEchartsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2NhdHRlci5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9zY2F0dGVyLyIsInNvdXJjZXMiOlsic2NhdHRlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTywyQkFBMkIsQ0FBQztBQUVuQyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVwRSxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBZ0I7SUFDcEQsNkJBQTZCO0NBQzlCLENBQUM7QUFFRjtJQUFBO0lBVzRDLENBQUM7O2dCQVg1QyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLFlBQVk7cUJBQ2I7b0JBQ0QsWUFBWSxFQUFFO3dCQUNaLHlCQUF5QjtxQkFDMUI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLHlCQUF5QjtxQkFDMUI7aUJBQ0Y7O0lBQzJDLG1DQUFDO0NBQUEsQUFYN0MsSUFXNkM7U0FBaEMsNEJBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCAnZWNoYXJ0cy9saWIvY2hhcnQvc2NhdHRlcic7XG5cbmltcG9ydCB7IFRkQ2hhcnRTZXJpZXNTY2F0dGVyQ29tcG9uZW50IH0gZnJvbSAnLi9zY2F0dGVyLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBTQ0FUVEVSX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydFNlcmllc1NjYXR0ZXJDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTQ0FUVEVSX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU0NBVFRFUl9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRTY2F0dGVyRWNoYXJ0c01vZHVsZSB7IH1cbiJdfQ==