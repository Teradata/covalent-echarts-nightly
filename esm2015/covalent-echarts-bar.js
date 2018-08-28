import { Component, Input, ChangeDetectionStrategy, NgModule } from '@angular/core';
import 'echarts/lib/chart/bar';
import { BASE_CHART_PROVIDER, CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdBarChartComponent {
}
TdBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-bar',
                template: `<td-base-chart [style.height.%]="100"
                [data]="data"
                [dataZoom]="false">
  <td-chart-x-axis [show]="true"
                    [position]="'bottom'"
                    [type]="'category'"
                    [boundaryGap]="false"
                    [axisLine]="{show: false}"
                    [splitLine]="{show: false}">
  </td-chart-x-axis>
  <td-chart-y-axis [show]="true"
                    [type]="'value'"
                    [axisLabel]="{inside: true}"
                    [axisLine]="{show: false}"
                    [splitLine]="{show: false}">
  </td-chart-y-axis>
  <ng-content></ng-content>
</td-base-chart>`,
                styles: [`:host{display:block}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [BASE_CHART_PROVIDER],
            },] },
];
/** @nocollapse */
TdBarChartComponent.ctorParameters = () => [];
TdBarChartComponent.propDecorators = {
    "data": [{ type: Input, args: ['data',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const BAR_MODULE_COMPONENTS = [
    TdBarChartComponent,
];
class CovalentBarEchartsModule {
}
CovalentBarEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CovalentBaseEchartsModule,
                ],
                declarations: [
                    BAR_MODULE_COMPONENTS,
                ],
                exports: [
                    BAR_MODULE_COMPONENTS,
                ],
            },] },
];
/** @nocollapse */
CovalentBarEchartsModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { TdBarChartComponent, BAR_MODULE_COMPONENTS, CovalentBarEchartsModule };
//# sourceMappingURL=covalent-echarts-bar.js.map
