import { Component, Input, ChangeDetectionStrategy, NgModule } from '@angular/core';
import 'echarts/lib/chart/line';
import { BASE_CHART_PROVIDER, CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CommonModule } from '@angular/common';

var TdLineChartComponent = /** @class */ (function () {
    function TdLineChartComponent() {
    }
    return TdLineChartComponent;
}());
TdLineChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-line',
                template: "<td-base-chart [style.height.%]=\"100\"\n                [data]=\"data\">\n  <ng-content></ng-content>\n  <td-chart-x-axis [show]=\"true\"\n                    [position]=\"'bottom'\"\n                    [type]=\"'time'\"\n                    [boundaryGap]=\"false\"\n                    [axisLine]=\"{show: false}\"\n                    [splitLine]=\"{show: false}\">\n  </td-chart-x-axis>\n  <td-chart-y-axis [show]=\"true\"\n                    [type]=\"'value'\"\n                    [axisLabel]=\"{inside: true}\"\n                    [axisLine]=\"{show: false}\"\n                    [splitLine]=\"{show: false}\">\n  </td-chart-y-axis>\n</td-base-chart>",
                styles: [":host{display:block}"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [BASE_CHART_PROVIDER],
            },] },
];
TdLineChartComponent.ctorParameters = function () { return []; };
TdLineChartComponent.propDecorators = {
    "data": [{ type: Input, args: ['data',] },],
};
var LINE_MODULE_COMPONENTS = [
    TdLineChartComponent,
];
var CovalentLineEchartsModule = /** @class */ (function () {
    function CovalentLineEchartsModule() {
    }
    return CovalentLineEchartsModule;
}());
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
CovalentLineEchartsModule.ctorParameters = function () { return []; };

export { TdLineChartComponent, LINE_MODULE_COMPONENTS, CovalentLineEchartsModule };
//# sourceMappingURL=covalent-echarts-line.js.map
