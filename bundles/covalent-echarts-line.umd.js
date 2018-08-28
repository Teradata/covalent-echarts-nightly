(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('echarts/lib/chart/line'), require('@covalent/echarts/base'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@covalent/echarts/line', ['exports', '@angular/core', 'echarts/lib/chart/line', '@covalent/echarts/base', '@angular/common'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.line = {}),global.ng.core,null,global.covalent.echarts.base,global.ng.common));
}(this, (function (exports,core,line,base,common) { 'use strict';

var TdLineChartComponent = /** @class */ (function () {
    function TdLineChartComponent() {
    }
    return TdLineChartComponent;
}());
TdLineChartComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-chart-line',
                template: "<td-base-chart [style.height.%]=\"100\"\n                [data]=\"data\">\n  <ng-content></ng-content>\n  <td-chart-x-axis [show]=\"true\"\n                    [position]=\"'bottom'\"\n                    [type]=\"'time'\"\n                    [boundaryGap]=\"false\"\n                    [axisLine]=\"{show: false}\"\n                    [splitLine]=\"{show: false}\">\n  </td-chart-x-axis>\n  <td-chart-y-axis [show]=\"true\"\n                    [type]=\"'value'\"\n                    [axisLabel]=\"{inside: true}\"\n                    [axisLine]=\"{show: false}\"\n                    [splitLine]=\"{show: false}\">\n  </td-chart-y-axis>\n</td-base-chart>",
                styles: [":host{display:block}"],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [base.BASE_CHART_PROVIDER],
            },] },
];
TdLineChartComponent.ctorParameters = function () { return []; };
TdLineChartComponent.propDecorators = {
    "data": [{ type: core.Input, args: ['data',] },],
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    base.CovalentBaseEchartsModule,
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

exports.TdLineChartComponent = TdLineChartComponent;
exports.LINE_MODULE_COMPONENTS = LINE_MODULE_COMPONENTS;
exports.CovalentLineEchartsModule = CovalentLineEchartsModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-echarts-line.umd.js.map
