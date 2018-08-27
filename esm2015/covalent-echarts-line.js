import { Component, Input, ChangeDetectionStrategy, NgModule } from '@angular/core';
import 'echarts/lib/chart/line';
import { BASE_CHART_PROVIDER, CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TdLineChartComponent {
}
TdLineChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-line',
                template: `<td-base-chart [style.height.%]="100"
                [data]="data">
  <ng-content></ng-content>
</td-base-chart>`,
                styles: [`:host{display:block}`],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [BASE_CHART_PROVIDER],
            },] },
];
/** @nocollapse */
TdLineChartComponent.ctorParameters = () => [];
TdLineChartComponent.propDecorators = {
    "data": [{ type: Input, args: ['data',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const LINE_MODULE_COMPONENTS = [
    TdLineChartComponent,
];
class CovalentLineEchartsModule {
}
CovalentLineEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    CovalentBaseEchartsModule,
                ],
                declarations: [
                    LINE_MODULE_COMPONENTS,
                ],
                exports: [
                    LINE_MODULE_COMPONENTS,
                ],
            },] },
];
/** @nocollapse */
CovalentLineEchartsModule.ctorParameters = () => [];

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

export { TdLineChartComponent, LINE_MODULE_COMPONENTS, CovalentLineEchartsModule };
//# sourceMappingURL=covalent-echarts-line.js.map
