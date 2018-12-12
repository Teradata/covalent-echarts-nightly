import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/component/toolbox';
import { TdChartToolboxComponent, TdChartViewDataFormatterDirective } from './toolbox.component';
export var TOOLBOX_MODULE_COMPONENTS = [
    TdChartToolboxComponent,
    TdChartViewDataFormatterDirective,
];
var CovalentToolboxEchartsModule = /** @class */ (function () {
    function CovalentToolboxEchartsModule() {
    }
    CovalentToolboxEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        TOOLBOX_MODULE_COMPONENTS,
                    ],
                    exports: [
                        TOOLBOX_MODULE_COMPONENTS,
                    ],
                },] }
    ];
    return CovalentToolboxEchartsModule;
}());
export { CovalentToolboxEchartsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sYm94LyIsInNvdXJjZXMiOlsidG9vbGJveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTywrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRyxNQUFNLENBQUMsSUFBTSx5QkFBeUIsR0FBZ0I7SUFDcEQsdUJBQXVCO0lBQ3ZCLGlDQUFpQztDQUNsQyxDQUFDO0FBRUY7SUFBQTtJQVc0QyxDQUFDOztnQkFYNUMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxZQUFZO3FCQUNiO29CQUNELFlBQVksRUFBRTt3QkFDWix5QkFBeUI7cUJBQzFCO29CQUNELE9BQU8sRUFBRTt3QkFDUCx5QkFBeUI7cUJBQzFCO2lCQUNGOztJQUMyQyxtQ0FBQztDQUFBLEFBWDdDLElBVzZDO1NBQWhDLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgJ2VjaGFydHMvbGliL2NvbXBvbmVudC90b29sYm94JztcblxuaW1wb3J0IHsgVGRDaGFydFRvb2xib3hDb21wb25lbnQsIFRkQ2hhcnRWaWV3RGF0YUZvcm1hdHRlckRpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbGJveC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgVE9PTEJPWF9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRUb29sYm94Q29tcG9uZW50LFxuICBUZENoYXJ0Vmlld0RhdGFGb3JtYXR0ZXJEaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUT09MQk9YX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVE9PTEJPWF9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRUb29sYm94RWNoYXJ0c01vZHVsZSB7IH1cbiJdfQ==