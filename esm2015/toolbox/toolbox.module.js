import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/component/toolbox';
import { TdChartToolboxComponent, TdChartViewDataFormatterDirective } from './toolbox.component';
export const TOOLBOX_MODULE_COMPONENTS = [
    TdChartToolboxComponent,
    TdChartViewDataFormatterDirective,
];
export class CovalentToolboxEchartsModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJveC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sYm94LyIsInNvdXJjZXMiOlsidG9vbGJveC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTywrQkFBK0IsQ0FBQztBQUV2QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRyxNQUFNLENBQUMsTUFBTSx5QkFBeUIsR0FBZ0I7SUFDcEQsdUJBQXVCO0lBQ3ZCLGlDQUFpQztDQUNsQyxDQUFDO0FBYUYsTUFBTSxPQUFPLDRCQUE0Qjs7O1lBWHhDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1oseUJBQXlCO2lCQUMxQjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AseUJBQXlCO2lCQUMxQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCAnZWNoYXJ0cy9saWIvY29tcG9uZW50L3Rvb2xib3gnO1xuXG5pbXBvcnQgeyBUZENoYXJ0VG9vbGJveENvbXBvbmVudCwgVGRDaGFydFZpZXdEYXRhRm9ybWF0dGVyRGlyZWN0aXZlIH0gZnJvbSAnLi90b29sYm94LmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBUT09MQk9YX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydFRvb2xib3hDb21wb25lbnQsXG4gIFRkQ2hhcnRWaWV3RGF0YUZvcm1hdHRlckRpcmVjdGl2ZSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRPT0xCT1hfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUT09MQk9YX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFRvb2xib3hFY2hhcnRzTW9kdWxlIHsgfVxuIl19