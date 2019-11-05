(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/chart/line'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/line', ['exports', '@angular/core', '@angular/common', 'echarts/lib/chart/line', '@covalent/echarts/base'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.line = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, function (exports, core, common, line, base) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        inputs: [
                            'config',
                            'id',
                            'name',
                            'color',
                            'data',
                            'animation',
                            'animationThreshold',
                            'animationDuration',
                            'animationEasing',
                            'animationDelay',
                            'animationDurationUpdate',
                            'animationEasingUpdate',
                            'animationDelayUpdate',
                            'tooltip',
                        ],
                        providers: [
                            {
                                provide: base.TdSeriesComponent,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdChartSeriesLineComponent; })),
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesLineComponent.ctorParameters = function () { return [
            { type: base.TdChartOptionsService }
        ]; };
        TdChartSeriesLineComponent.propDecorators = {
            coordinateSystem: [{ type: core.Input }],
            xAxisIndex: [{ type: core.Input }],
            yAxisIndex: [{ type: core.Input }],
            polarIndex: [{ type: core.Input }],
            symbol: [{ type: core.Input }],
            symbolSize: [{ type: core.Input }],
            symbolRotate: [{ type: core.Input }],
            symbolKeepAspect: [{ type: core.Input }],
            symbolOffset: [{ type: core.Input }],
            showSymbol: [{ type: core.Input }],
            showAllSymbol: [{ type: core.Input }],
            hoverAnimation: [{ type: core.Input }],
            legendHoverLink: [{ type: core.Input }],
            stack: [{ type: core.Input }],
            cursor: [{ type: core.Input }],
            connectNulls: [{ type: core.Input }],
            clipOverflow: [{ type: core.Input }],
            step: [{ type: core.Input }],
            label: [{ type: core.Input }],
            itemStyle: [{ type: core.Input }],
            lineStyle: [{ type: core.Input }],
            areaStyle: [{ type: core.Input }],
            emphasis: [{ type: core.Input }],
            smooth: [{ type: core.Input }],
            smoothMonotone: [{ type: core.Input }],
            sampling: [{ type: core.Input }],
            dimensions: [{ type: core.Input }],
            encode: [{ type: core.Input }],
            seriesLayoutBy: [{ type: core.Input }],
            datasetIndex: [{ type: core.Input }],
            markPoint: [{ type: core.Input }],
            markLine: [{ type: core.Input }],
            markArea: [{ type: core.Input }],
            zlevel: [{ type: core.Input }],
            z: [{ type: core.Input }],
            silent: [{ type: core.Input }]
        };
        return TdChartSeriesLineComponent;
    }(base.TdSeriesComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LINE_MODULE_COMPONENTS = [TdChartSeriesLineComponent];
    var CovalentLineEchartsModule = /** @class */ (function () {
        function CovalentLineEchartsModule() {
        }
        CovalentLineEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [LINE_MODULE_COMPONENTS],
                        exports: [LINE_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentLineEchartsModule;
    }());

    exports.CovalentLineEchartsModule = CovalentLineEchartsModule;
    exports.LINE_MODULE_COMPONENTS = LINE_MODULE_COMPONENTS;
    exports.TdChartSeriesLineComponent = TdChartSeriesLineComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-echarts-line.umd.js.map
