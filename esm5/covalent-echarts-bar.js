import { Component, Input, ChangeDetectionStrategy, NgModule } from '@angular/core';
import 'echarts/lib/chart/bar';
import { BASE_CHART_PROVIDER, CovalentBaseEchartsModule } from '@covalent/echarts/base';
import { CommonModule } from '@angular/common';

var TdBarChartComponent = /** @class */ (function () {
    function TdBarChartComponent() {
    }
    return TdBarChartComponent;
}());
TdBarChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-bar',
                template: "<td-base-chart [style.height.%]=\"100\"\n                [data]=\"data\"\n                [yAxisType]=\"'value'\"\n                [xAxisType]=\"'category'\"\n                [dataZoom]=\"false\"\n                [dataZoom]=\"false\">\n  <ng-content></ng-content>\n</td-base-chart>",
                styles: [":host{display:block}"],
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [BASE_CHART_PROVIDER],
            },] },
];
TdBarChartComponent.ctorParameters = function () { return []; };
TdBarChartComponent.propDecorators = {
    "data": [{ type: Input, args: ['data',] },],
};
var BAR_MODULE_COMPONENTS = [
    TdBarChartComponent,
];
var CovalentBarEchartsModule = /** @class */ (function () {
    function CovalentBarEchartsModule() {
    }
    return CovalentBarEchartsModule;
}());
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
CovalentBarEchartsModule.ctorParameters = function () { return []; };

export { TdBarChartComponent, BAR_MODULE_COMPONENTS, CovalentBarEchartsModule };
//# sourceMappingURL=covalent-echarts-bar.js.map
