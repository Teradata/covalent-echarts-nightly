/**
 * @fileoverview added by tsickle
 * Generated from: base.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TdChartComponent } from './chart.component';
import { TdChartXAxisComponent } from './axis/x-axis.component';
import { TdChartYAxisComponent } from './axis/y-axis.component';
import { TdDatasetComponent } from './dataset/dataset.component';
import { registerDefaultThemes } from './utils';
/** @type {?} */
export const BASE_MODULE_COMPONENTS = [
    TdChartComponent,
    TdChartXAxisComponent,
    TdChartYAxisComponent,
    TdDatasetComponent,
];
import 'zrender/lib/svg/svg';
registerDefaultThemes();
export class CovalentBaseEchartsModule {
}
CovalentBaseEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [BASE_MODULE_COMPONENTS],
                exports: [BASE_MODULE_COMPONENTS],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vZWNoYXJ0cy9iYXNlL2Jhc2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBUSxNQUFNLGVBQWUsQ0FBQztBQUMvQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDckQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFakUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sU0FBUyxDQUFDOztBQUVoRCxNQUFNLE9BQU8sc0JBQXNCLEdBQWdCO0lBQ2pELGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGtCQUFrQjtDQUNuQjtBQUVELE9BQU8scUJBQXFCLENBQUM7QUFFN0IscUJBQXFCLEVBQUUsQ0FBQztBQU94QixNQUFNLE9BQU8seUJBQXlCOzs7WUFMckMsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsWUFBWSxFQUFFLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3RDLE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2FBQ2xDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IFRkQ2hhcnRDb21wb25lbnQgfSBmcm9tICcuL2NoYXJ0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZENoYXJ0WEF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMveC1heGlzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZENoYXJ0WUF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMveS1heGlzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUZERhdGFzZXRDb21wb25lbnQgfSBmcm9tICcuL2RhdGFzZXQvZGF0YXNldC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyByZWdpc3RlckRlZmF1bHRUaGVtZXMgfSBmcm9tICcuL3V0aWxzJztcblxuZXhwb3J0IGNvbnN0IEJBU0VfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0Q29tcG9uZW50LFxuICBUZENoYXJ0WEF4aXNDb21wb25lbnQsXG4gIFRkQ2hhcnRZQXhpc0NvbXBvbmVudCxcbiAgVGREYXRhc2V0Q29tcG9uZW50LFxuXTtcblxuaW1wb3J0ICd6cmVuZGVyL2xpYi9zdmcvc3ZnJztcblxucmVnaXN0ZXJEZWZhdWx0VGhlbWVzKCk7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtCQVNFX01PRFVMRV9DT01QT05FTlRTXSxcbiAgZXhwb3J0czogW0JBU0VfTU9EVUxFX0NPTVBPTkVOVFNdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudEJhc2VFY2hhcnRzTW9kdWxlIHt9XG4iXX0=