(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('echarts/lib/chart/line'), require('@angular/core'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/line', ['exports', '@angular/common', 'echarts/lib/chart/line', '@angular/core', '@covalent/echarts/base'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.line = {}),global.ng.common,null,global.ng.core,global.covalent.echarts.base));
}(this, (function (exports,common,line,core,base) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdChartSeriesLineComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesLineComponent, _super);
        function TdChartSeriesLineComponent(_optionsService) {
            return _super.call(this, 'line', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesLineComponent.prototype.getConfig = /**
         * @return {?}
         */
            function () {
                return {
                    coordinateSystem: this.coordinateSystem,
                    xAxisIndex: this.xAxisIndex,
                    yAxisIndex: this.yAxisIndex,
                    polarIndex: this.polarIndex,
                    symbol: this.symbol,
                    symbolSize: this.symbolSize,
                    symbolRotate: this.symbolRotate,
                    symbolKeepAspect: this.symbolKeepAspect,
                    symbolOffset: this.symbolOffset,
                    showSymbol: this.showSymbol,
                    showAllSymbol: this.showAllSymbol,
                    hoverAnimation: this.hoverAnimation,
                    legendHoverLink: this.legendHoverLink,
                    stack: this.stack,
                    cursor: this.cursor,
                    connectNulls: this.connectNulls,
                    clipOverflow: this.clipOverflow,
                    step: this.step,
                    label: this.label,
                    itemStyle: this.itemStyle,
                    lineStyle: this.lineStyle,
                    areaStyle: this.areaStyle,
                    emphasis: this.emphasis,
                    smooth: this.smooth,
                    smoothMonotone: this.smoothMonotone,
                    sampling: this.sampling,
                    dimensions: this.dimensions,
                    encode: this.encode,
                    seriesLayoutBy: this.seriesLayoutBy,
                    datasetIndex: this.datasetIndex,
                    markPoint: this.markPoint,
                    markLine: this.markLine,
                    markArea: this.markArea,
                    zlevel: this.zlevel,
                    z: this.z,
                    silent: this.silent,
                };
            };
        TdChartSeriesLineComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-line]',
                        template: '',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: base.TdSeriesComponent, useExisting: core.forwardRef(function () { return TdChartSeriesLineComponent; }),
                            }]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesLineComponent.ctorParameters = function () {
            return [
                { type: base.TdChartOptionsService }
            ];
        };
        TdChartSeriesLineComponent.propDecorators = {
            coordinateSystem: [{ type: core.Input, args: ['coordinateSystem',] }],
            xAxisIndex: [{ type: core.Input, args: ['xAxisIndex',] }],
            yAxisIndex: [{ type: core.Input, args: ['yAxisIndex',] }],
            polarIndex: [{ type: core.Input, args: ['polarIndex',] }],
            symbol: [{ type: core.Input, args: ['symbol',] }],
            symbolSize: [{ type: core.Input, args: ['symbolSize',] }],
            symbolRotate: [{ type: core.Input, args: ['symbolRotate',] }],
            symbolKeepAspect: [{ type: core.Input, args: ['symbolKeepAspect',] }],
            symbolOffset: [{ type: core.Input, args: ['symbolOffset',] }],
            showSymbol: [{ type: core.Input, args: ['showSymbol',] }],
            showAllSymbol: [{ type: core.Input, args: ['showAllSymbol',] }],
            hoverAnimation: [{ type: core.Input, args: ['hoverAnimation',] }],
            legendHoverLink: [{ type: core.Input, args: ['legendHoverLink',] }],
            stack: [{ type: core.Input, args: ['stack',] }],
            cursor: [{ type: core.Input, args: ['cursor',] }],
            connectNulls: [{ type: core.Input, args: ['connectNulls',] }],
            clipOverflow: [{ type: core.Input, args: ['clipOverflow',] }],
            step: [{ type: core.Input, args: ['step',] }],
            label: [{ type: core.Input, args: ['label',] }],
            itemStyle: [{ type: core.Input, args: ['itemStyle',] }],
            lineStyle: [{ type: core.Input, args: ['lineStyle',] }],
            areaStyle: [{ type: core.Input, args: ['areaStyle',] }],
            emphasis: [{ type: core.Input, args: ['emphasis',] }],
            smooth: [{ type: core.Input, args: ['smooth',] }],
            smoothMonotone: [{ type: core.Input, args: ['smoothMonotone',] }],
            sampling: [{ type: core.Input, args: ['sampling',] }],
            dimensions: [{ type: core.Input, args: ['dimensions',] }],
            encode: [{ type: core.Input, args: ['encode',] }],
            seriesLayoutBy: [{ type: core.Input, args: ['seriesLayoutBy',] }],
            datasetIndex: [{ type: core.Input, args: ['datasetIndex',] }],
            markPoint: [{ type: core.Input, args: ['markPoint',] }],
            markLine: [{ type: core.Input, args: ['markLine',] }],
            markArea: [{ type: core.Input, args: ['markArea',] }],
            zlevel: [{ type: core.Input, args: ['zlevel',] }],
            z: [{ type: core.Input, args: ['z',] }],
            silent: [{ type: core.Input, args: ['silent',] }]
        };
        return TdChartSeriesLineComponent;
    }(base.TdSeriesComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LINE_MODULE_COMPONENTS = [
        TdChartSeriesLineComponent,
    ];
    var CovalentLineEchartsModule = /** @class */ (function () {
        function CovalentLineEchartsModule() {
        }
        CovalentLineEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            LINE_MODULE_COMPONENTS,
                        ],
                        exports: [
                            LINE_MODULE_COMPONENTS,
                        ],
                    },] }
        ];
        return CovalentLineEchartsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */

    exports.LINE_MODULE_COMPONENTS = LINE_MODULE_COMPONENTS;
    exports.CovalentLineEchartsModule = CovalentLineEchartsModule;
    exports.TdChartSeriesLineComponent = TdChartSeriesLineComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-echarts-line.umd.js.map