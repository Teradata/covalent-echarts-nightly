(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('echarts/lib/chart/bar'), require('@covalent/echarts/base'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define('@covalent/echarts/bar', ['exports', '@angular/core', 'echarts/lib/chart/bar', '@covalent/echarts/base', '@angular/common'], factory) :
	(factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.bar = {}),global.ng.core,null,global.covalent.echarts.base,global.ng.common));
}(this, (function (exports,core,bar,base,common) { 'use strict';

var TdBarChartComponent = /** @class */ (function () {
    function TdBarChartComponent() {
    }
    return TdBarChartComponent;
}());
TdBarChartComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'td-chart-bar',
                template: "<td-base-chart [style.height.%]=\"100\"\n                [data]=\"data\"\n                [yAxisType]=\"'value'\"\n                [xAxisType]=\"'category'\"\n                [dataZoom]=\"false\"\n                [dataZoom]=\"false\">\n  <ng-content></ng-content>\n</td-base-chart>",
                styles: [":host{display:block}"],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                providers: [base.BASE_CHART_PROVIDER],
            },] },
];
TdBarChartComponent.ctorParameters = function () { return []; };
TdBarChartComponent.propDecorators = {
    "data": [{ type: core.Input, args: ['data',] },],
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
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    base.CovalentBaseEchartsModule,
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

exports.TdBarChartComponent = TdBarChartComponent;
exports.BAR_MODULE_COMPONENTS = BAR_MODULE_COMPONENTS;
exports.CovalentBarEchartsModule = CovalentBarEchartsModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-echarts-bar.umd.js.map
