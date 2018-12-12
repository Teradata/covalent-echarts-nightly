import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdChartComponent } from './chart.component';
import { TdChartXAxisComponent } from './axis/x-axis.component';
import { TdChartYAxisComponent } from './axis/y-axis.component';
export var BASE_MODULE_COMPONENTS = [
    TdChartComponent,
    TdChartXAxisComponent,
    TdChartYAxisComponent,
];
var CovalentBaseEchartsModule = /** @class */ (function () {
    function CovalentBaseEchartsModule() {
    }
    CovalentBaseEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        BASE_MODULE_COMPONENTS,
                    ],
                    exports: [
                        BASE_MODULE_COMPONENTS,
                    ],
                },] }
    ];
    return CovalentBaseEchartsModule;
}());
export { CovalentBaseEchartsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImJhc2UvYmFzZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFaEUsTUFBTSxDQUFDLElBQU0sc0JBQXNCLEdBQWdCO0lBQ2pELGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIscUJBQXFCO0NBQ3RCLENBQUM7QUFFRjtJQUFBO0lBYUEsQ0FBQzs7Z0JBYkEsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWixzQkFBc0I7cUJBQ3ZCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxzQkFBc0I7cUJBQ3ZCO2lCQUNGOztJQUdELGdDQUFDO0NBQUEsQUFiRCxJQWFDO1NBRlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRkQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZENoYXJ0WEF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMveC1heGlzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZENoYXJ0WUF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMveS1heGlzLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBCQVNFX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydENvbXBvbmVudCxcbiAgVGRDaGFydFhBeGlzQ29tcG9uZW50LFxuICBUZENoYXJ0WUF4aXNDb21wb25lbnQsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCQVNFX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQkFTRV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRCYXNlRWNoYXJ0c01vZHVsZSB7XG5cbn1cbiJdfQ==