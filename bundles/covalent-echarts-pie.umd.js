(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/chart/pie'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/pie', ['exports', '@angular/core', '@angular/common', 'echarts/lib/chart/pie', '@covalent/echarts/base'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.pie = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, function (exports, core, common, pie, base) { 'use strict';

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
    var TdChartSeriesPieComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesPieComponent, _super);
        function TdChartSeriesPieComponent(_optionsService) {
            return _super.call(this, 'pie', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesPieComponent.prototype.getConfig = /**
         * @return {?}
         */
        function () {
            return {
                legendHoverLink: this.legendHoverLink,
                label: this.label,
                itemStyle: this.itemStyle,
                emphasis: this.emphasis,
                selectedMode: this.selectedMode,
                selectedOffset: this.selectedOffset,
                clockwise: this.clockwise,
                startAngle: this.startAngle,
                minAngle: this.minAngle,
                minShowLabelAngle: this.minShowLabelAngle,
                roseType: this.roseType,
                avoidLabelOverlap: this.avoidLabelOverlap,
                stillShowZeroSum: this.stillShowZeroSum,
                cursor: this.cursor,
                labelLine: this.labelLine,
                seriesLayoutBy: this.seriesLayoutBy,
                datasetIndex: this.datasetIndex,
                markPoint: this.markPoint,
                markLine: this.markLine,
                markArea: this.markArea,
                zlevel: this.zlevel,
                z: this.z,
                center: this.center,
                radius: this.radius,
            };
        };
        TdChartSeriesPieComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-pie]',
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
                                function () { return TdChartSeriesPieComponent; })),
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesPieComponent.ctorParameters = function () { return [
            { type: base.TdChartOptionsService }
        ]; };
        TdChartSeriesPieComponent.propDecorators = {
            legendHoverLink: [{ type: core.Input }],
            hoverAnimation: [{ type: core.Input }],
            hoverOffset: [{ type: core.Input }],
            selectedMode: [{ type: core.Input }],
            selectedOffset: [{ type: core.Input }],
            clockwise: [{ type: core.Input }],
            startAngle: [{ type: core.Input }],
            minAngle: [{ type: core.Input }],
            minShowLabelAngle: [{ type: core.Input }],
            roseType: [{ type: core.Input }],
            avoidLabelOverlap: [{ type: core.Input }],
            stillShowZeroSum: [{ type: core.Input }],
            cursor: [{ type: core.Input }],
            labelLine: [{ type: core.Input }],
            label: [{ type: core.Input }],
            itemStyle: [{ type: core.Input }],
            emphasis: [{ type: core.Input }],
            seriesLayoutBy: [{ type: core.Input }],
            datasetIndex: [{ type: core.Input }],
            markPoint: [{ type: core.Input }],
            markLine: [{ type: core.Input }],
            markArea: [{ type: core.Input }],
            zlevel: [{ type: core.Input }],
            z: [{ type: core.Input }],
            center: [{ type: core.Input }],
            radius: [{ type: core.Input }]
        };
        return TdChartSeriesPieComponent;
    }(base.TdSeriesComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PIE_MODULE_COMPONENTS = [TdChartSeriesPieComponent];
    var CovalentPieEchartsModule = /** @class */ (function () {
        function CovalentPieEchartsModule() {
        }
        CovalentPieEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [PIE_MODULE_COMPONENTS],
                        exports: [PIE_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentPieEchartsModule;
    }());

    exports.CovalentPieEchartsModule = CovalentPieEchartsModule;
    exports.PIE_MODULE_COMPONENTS = PIE_MODULE_COMPONENTS;
    exports.TdChartSeriesPieComponent = TdChartSeriesPieComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-echarts-pie.umd.js.map
