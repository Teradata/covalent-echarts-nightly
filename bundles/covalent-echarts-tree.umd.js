(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/chart/tree'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/tree', ['exports', '@angular/core', '@angular/common', 'echarts/lib/chart/tree', '@covalent/echarts/base'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.tree = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, function (exports, core, common, tree, base) { 'use strict';

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
    var TdChartSeriesTreeComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesTreeComponent, _super);
        function TdChartSeriesTreeComponent(_optionsService) {
            return _super.call(this, 'tree', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesTreeComponent.prototype.getConfig = /**
         * @return {?}
         */
        function () {
            return {
                zlevel: this.zlevel,
                z: this.z,
                left: this.left,
                top: this.top,
                right: this.right,
                bottom: this.bottom,
                width: this.width,
                height: this.height,
                layout: this.layout,
                orient: this.orient,
                symbol: this.symbol,
                symbolSize: this.symbolSize,
                symbolRotate: this.symbolRotate,
                symbolKeepAspect: this.symbolKeepAspect,
                roam: this.roam,
                expandAndCollapse: this.expandAndCollapse,
                initialTreeDepth: this.initialTreeDepth,
                itemStyle: this.itemStyle,
                label: this.label,
                lineStyle: this.lineStyle,
                leaves: this.leaves,
                emphasis: this.emphasis,
            };
        };
        TdChartSeriesTreeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-tree]',
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
                                function () { return TdChartSeriesTreeComponent; })),
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesTreeComponent.ctorParameters = function () { return [
            { type: base.TdChartOptionsService }
        ]; };
        TdChartSeriesTreeComponent.propDecorators = {
            zlevel: [{ type: core.Input }],
            z: [{ type: core.Input }],
            left: [{ type: core.Input }],
            top: [{ type: core.Input }],
            right: [{ type: core.Input }],
            bottom: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            orient: [{ type: core.Input }],
            symbol: [{ type: core.Input }],
            symbolSize: [{ type: core.Input }],
            symbolRotate: [{ type: core.Input }],
            symbolKeepAspect: [{ type: core.Input }],
            roam: [{ type: core.Input }],
            expandAndCollapse: [{ type: core.Input }],
            initialTreeDepth: [{ type: core.Input }],
            itemStyle: [{ type: core.Input }],
            label: [{ type: core.Input }],
            lineStyle: [{ type: core.Input }],
            leaves: [{ type: core.Input }],
            emphasis: [{ type: core.Input }]
        };
        return TdChartSeriesTreeComponent;
    }(base.TdSeriesComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TREE_MODULE_COMPONENTS = [TdChartSeriesTreeComponent];
    var CovalentTreeEchartsModule = /** @class */ (function () {
        function CovalentTreeEchartsModule() {
        }
        CovalentTreeEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TREE_MODULE_COMPONENTS],
                        exports: [TREE_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentTreeEchartsModule;
    }());

    exports.CovalentTreeEchartsModule = CovalentTreeEchartsModule;
    exports.TREE_MODULE_COMPONENTS = TREE_MODULE_COMPONENTS;
    exports.TdChartSeriesTreeComponent = TdChartSeriesTreeComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-echarts-tree.umd.js.map
