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
                    imports: [CommonModule],
                    declarations: [BASE_MODULE_COMPONENTS],
                    exports: [BASE_MODULE_COMPONENTS],
                },] }
    ];
    return CovalentBaseEchartsModule;
}());
export { CovalentBaseEchartsModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImJhc2UvYmFzZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQVEsTUFBTSxlQUFlLENBQUM7QUFDL0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRWpFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7QUFFaEQsTUFBTSxLQUFPLHNCQUFzQixHQUFnQjtJQUNqRCxnQkFBZ0I7SUFDaEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixrQkFBa0I7Q0FDbkI7QUFFRCxPQUFPLHFCQUFxQixDQUFDO0FBRTdCLHFCQUFxQixFQUFFLENBQUM7QUFFeEI7SUFBQTtJQUt3QyxDQUFDOztnQkFMeEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztvQkFDdkIsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7b0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQzs7SUFDdUMsZ0NBQUM7Q0FBQSxBQUx6QyxJQUt5QztTQUE1Qix5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgVGRDaGFydENvbXBvbmVudCB9IGZyb20gJy4vY2hhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ2hhcnRYQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy94LWF4aXMuY29tcG9uZW50JztcbmltcG9ydCB7IFRkQ2hhcnRZQXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy95LWF4aXMuY29tcG9uZW50JztcbmltcG9ydCB7IFRkRGF0YXNldENvbXBvbmVudCB9IGZyb20gJy4vZGF0YXNldC9kYXRhc2V0LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IHJlZ2lzdGVyRGVmYXVsdFRoZW1lcyB9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgY29uc3QgQkFTRV9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRDb21wb25lbnQsXG4gIFRkQ2hhcnRYQXhpc0NvbXBvbmVudCxcbiAgVGRDaGFydFlBeGlzQ29tcG9uZW50LFxuICBUZERhdGFzZXRDb21wb25lbnQsXG5dO1xuXG5pbXBvcnQgJ3pyZW5kZXIvbGliL3N2Zy9zdmcnO1xuXG5yZWdpc3RlckRlZmF1bHRUaGVtZXMoKTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW0JBU0VfTU9EVUxFX0NPTVBPTkVOVFNdLFxuICBleHBvcnRzOiBbQkFTRV9NT0RVTEVfQ09NUE9ORU5UU10sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50QmFzZUVjaGFydHNNb2R1bGUge31cbiJdfQ==