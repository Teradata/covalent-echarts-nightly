(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('echarts/lib/chart/bar'), require('@angular/core'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/bar', ['exports', '@angular/common', 'echarts/lib/chart/bar', '@angular/core', '@covalent/echarts/base'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.bar = {}),global.ng.common,null,global.ng.core,global.covalent.echarts.base));
}(this, (function (exports,common,bar,core,base) { 'use strict';

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
    var TdChartSeriesBarComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesBarComponent, _super);
        function TdChartSeriesBarComponent(_optionsService) {
            return _super.call(this, 'bar', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesBarComponent.prototype.getConfig = /**
         * @return {?}
         */
            function () {
                return {
                    coordinateSystem: this.coordinateSystem,
                    xAxisIndex: this.xAxisIndex,
                    yAxisIndex: this.yAxisIndex,
                    legendHoverLink: this.legendHoverLink,
                    stack: this.stack,
                    cursor: this.cursor,
                    label: this.label,
                    itemStyle: this.itemStyle,
                    emphasis: this.emphasis,
                    barWidth: this.barWidth,
                    barMaxWidth: this.barMaxWidth,
                    barMinHeight: this.barMinHeight,
                    barGap: this.barGap,
                    barCategoryGap: this.barCategoryGap,
                    large: this.large,
                    largeThreshold: this.largeThreshold,
                    progressive: this.progressive,
                    progressiveThreshold: this.progressiveThreshold,
                    progressiveChunkMode: this.progressiveChunkMode,
                    dimensions: this.dimensions,
                    encode: this.encode,
                    seriesLayoutBy: this.seriesLayoutBy,
                    datasetIndex: this.datasetIndex,
                    markPoint: this.markPoint,
                    markLine: this.markLine,
                    markArea: this.markArea,
                    zlevel: this.zlevel,
                    z: this.z,
                };
            };
        TdChartSeriesBarComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-bar]',
                        template: '',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: base.TdSeriesComponent, useExisting: core.forwardRef(function () { return TdChartSeriesBarComponent; }),
                            }]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesBarComponent.ctorParameters = function () {
            return [
                { type: base.TdChartOptionsService }
            ];
        };
        TdChartSeriesBarComponent.propDecorators = {
            coordinateSystem: [{ type: core.Input, args: ['coordinateSystem',] }],
            xAxisIndex: [{ type: core.Input, args: ['xAxisIndex',] }],
            yAxisIndex: [{ type: core.Input, args: ['yAxisIndex',] }],
            legendHoverLink: [{ type: core.Input, args: ['legendHoverLink',] }],
            stack: [{ type: core.Input, args: ['stack',] }],
            cursor: [{ type: core.Input, args: ['cursor',] }],
            label: [{ type: core.Input, args: ['label',] }],
            itemStyle: [{ type: core.Input, args: ['itemStyle',] }],
            emphasis: [{ type: core.Input, args: ['emphasis',] }],
            barWidth: [{ type: core.Input, args: ['barWidth',] }],
            barMaxWidth: [{ type: core.Input, args: ['barMaxWidth',] }],
            barMinHeight: [{ type: core.Input, args: ['barMinHeight',] }],
            barGap: [{ type: core.Input, args: ['barGap',] }],
            barCategoryGap: [{ type: core.Input, args: ['barCategoryGap',] }],
            large: [{ type: core.Input, args: ['large',] }],
            largeThreshold: [{ type: core.Input, args: ['largeThreshold',] }],
            progressive: [{ type: core.Input, args: ['progressive',] }],
            progressiveThreshold: [{ type: core.Input, args: ['progressiveThreshold',] }],
            progressiveChunkMode: [{ type: core.Input, args: ['progressiveChunkMode',] }],
            dimensions: [{ type: core.Input, args: ['dimensions',] }],
            encode: [{ type: core.Input, args: ['encode',] }],
            seriesLayoutBy: [{ type: core.Input, args: ['seriesLayoutBy',] }],
            datasetIndex: [{ type: core.Input, args: ['datasetIndex',] }],
            markPoint: [{ type: core.Input, args: ['markPoint',] }],
            markLine: [{ type: core.Input, args: ['markLine',] }],
            markArea: [{ type: core.Input, args: ['markArea',] }],
            zlevel: [{ type: core.Input, args: ['zlevel',] }],
            z: [{ type: core.Input, args: ['z',] }]
        };
        return TdChartSeriesBarComponent;
    }(base.TdSeriesComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var BAR_MODULE_COMPONENTS = [
        TdChartSeriesBarComponent,
    ];
    var CovalentBarEchartsModule = /** @class */ (function () {
        function CovalentBarEchartsModule() {
        }
        CovalentBarEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            BAR_MODULE_COMPONENTS,
                        ],
                        exports: [
                            BAR_MODULE_COMPONENTS,
                        ],
                    },] }
        ];
        return CovalentBarEchartsModule;
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

    exports.BAR_MODULE_COMPONENTS = BAR_MODULE_COMPONENTS;
    exports.CovalentBarEchartsModule = CovalentBarEchartsModule;
    exports.TdChartSeriesBarComponent = TdChartSeriesBarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-echarts-bar.umd.js.map