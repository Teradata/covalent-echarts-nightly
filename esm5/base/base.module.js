/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdChartComponent } from './chart.component';
import { TdChartXAxisComponent } from './axis/x-axis.component';
import { TdChartYAxisComponent } from './axis/y-axis.component';
import { TdDatasetComponent } from './dataset/dataset.component';
import { registerDefaultThemes } from './utils';
/** @type {?} */
export var BASE_MODULE_COMPONENTS = [
    TdChartComponent,
    TdChartXAxisComponent,
    TdChartYAxisComponent,
    TdDatasetComponent,
];
import 'zrender/lib/svg/svg';
registerDefaultThemes();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImJhc2UvYmFzZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFFaEQsTUFBTSxLQUFPLHNCQUFzQixHQUFnQjtJQUNqRCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixrQkFBa0I7Q0FDbkI7QUFFRCxPQUFPLHFCQUFxQixDQUFDO0FBRTdCLHFCQUFxQixFQUFFLENBQUM7QUFFeEI7SUFBQTtJQWFBLENBQUM7O2dCQWJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osc0JBQXNCO3FCQUN2QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asc0JBQXNCO3FCQUN2QjtpQkFDRjs7SUFHRCxnQ0FBQztDQUFBLEFBYkQsSUFhQztTQUZZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUZENoYXJ0Q29tcG9uZW50IH0gZnJvbSAnLi9jaGFydC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDaGFydFhBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzL3gtYXhpcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRDaGFydFlBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzL3ktYXhpcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGREYXRhc2V0Q29tcG9uZW50IH0gZnJvbSAnLi9kYXRhc2V0L2RhdGFzZXQuY29tcG9uZW50JztcblxuaW1wb3J0IHsgcmVnaXN0ZXJEZWZhdWx0VGhlbWVzIH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBjb25zdCBCQVNFX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydENvbXBvbmVudCxcbiAgVGRDaGFydFhBeGlzQ29tcG9uZW50LFxuICBUZENoYXJ0WUF4aXNDb21wb25lbnQsXG4gIFRkRGF0YXNldENvbXBvbmVudCxcbl07XG5cbmltcG9ydCAnenJlbmRlci9saWIvc3ZnL3N2Zyc7XG5cbnJlZ2lzdGVyRGVmYXVsdFRoZW1lcygpO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBCQVNFX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgQkFTRV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRCYXNlRWNoYXJ0c01vZHVsZSB7XG5cbn1cbiJdfQ==