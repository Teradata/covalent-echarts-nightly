(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/chart/scatter'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/scatter', ['exports', '@angular/core', '@angular/common', 'echarts/lib/chart/scatter', '@covalent/echarts/base'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.scatter = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, function (exports, core, common, scatter, base) { 'use strict';

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
    var TdChartSeriesScatterComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesScatterComponent, _super);
        function TdChartSeriesScatterComponent(_optionsService) {
            return _super.call(this, 'scatter', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesScatterComponent.prototype.getConfig = /**
         * @return {?}
         */
        function () {
            return {
                coordinateSystem: this.coordinateSystem,
                xAxisIndex: this.xAxisIndex,
                yAxisIndex: this.yAxisIndex,
                polarIndex: this.polarIndex,
                geoIndex: this.geoIndex,
                calendarIndex: this.calendarIndex,
                hoverAnimation: this.hoverAnimation,
                legendHoverLink: this.legendHoverLink,
                symbol: this.symbol,
                symbolSize: this.symbolSize,
                symbolRotate: this.symbolRotate,
                symbolKeepAspect: this.symbolKeepAspect,
                symbolOffset: this.symbolOffset,
                large: this.large,
                largeThreshold: this.largeThreshold,
                cursor: this.cursor,
                label: this.label,
                itemStyle: this.itemStyle,
                emphasis: this.emphasis,
                progressive: this.progressive,
                progressiveThreshold: this.progressiveThreshold,
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
        TdChartSeriesScatterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-scatter]',
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
                                function () { return TdChartSeriesScatterComponent; })),
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesScatterComponent.ctorParameters = function () { return [
            { type: base.TdChartOptionsService }
        ]; };
        TdChartSeriesScatterComponent.propDecorators = {
            coordinateSystem: [{ type: core.Input }],
            xAxisIndex: [{ type: core.Input }],
            yAxisIndex: [{ type: core.Input }],
            polarIndex: [{ type: core.Input }],
            geoIndex: [{ type: core.Input }],
            calendarIndex: [{ type: core.Input }],
            hoverAnimation: [{ type: core.Input }],
            legendHoverLink: [{ type: core.Input }],
            symbol: [{ type: core.Input }],
            symbolSize: [{ type: core.Input }],
            symbolRotate: [{ type: core.Input }],
            symbolKeepAspect: [{ type: core.Input }],
            symbolOffset: [{ type: core.Input }],
            large: [{ type: core.Input }],
            largeThreshold: [{ type: core.Input }],
            cursor: [{ type: core.Input }],
            label: [{ type: core.Input }],
            itemStyle: [{ type: core.Input }],
            emphasis: [{ type: core.Input }],
            progressive: [{ type: core.Input }],
            progressiveThreshold: [{ type: core.Input }],
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
        return TdChartSeriesScatterComponent;
    }(base.TdSeriesComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SCATTER_MODULE_COMPONENTS = [TdChartSeriesScatterComponent];
    var CovalentScatterEchartsModule = /** @class */ (function () {
        function CovalentScatterEchartsModule() {
        }
        CovalentScatterEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [SCATTER_MODULE_COMPONENTS],
                        exports: [SCATTER_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentScatterEchartsModule;
    }());

    exports.CovalentScatterEchartsModule = CovalentScatterEchartsModule;
    exports.SCATTER_MODULE_COMPONENTS = SCATTER_MODULE_COMPONENTS;
    exports.TdChartSeriesScatterComponent = TdChartSeriesScatterComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-echarts-scatter.umd.js.map
