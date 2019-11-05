(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/chart/sankey'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/sankey', ['exports', '@angular/core', '@angular/common', 'echarts/lib/chart/sankey', '@covalent/echarts/base'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.sankey = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, function (exports, core, common, sankey, base) { 'use strict';

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
    var TdChartSeriesSankeyComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesSankeyComponent, _super);
        function TdChartSeriesSankeyComponent(_optionsService) {
            return _super.call(this, 'sankey', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesSankeyComponent.prototype.getConfig = /**
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
                nodeWidth: this.nodeWidth,
                nodeGap: this.nodeGap,
                layoutIterations: this.layoutIterations,
                orient: this.orient,
                draggable: this.draggable,
                focusNodeAdjacency: this.focusNodeAdjacency,
                label: this.label,
                itemStyle: this.itemStyle,
                lineStyle: this.lineStyle,
                emphasis: this.emphasis,
                nodes: this.nodes,
                links: this.links,
                edges: this.edges,
                silent: this.silent,
            };
        };
        TdChartSeriesSankeyComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-sankey]',
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
                                function () { return TdChartSeriesSankeyComponent; })),
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesSankeyComponent.ctorParameters = function () { return [
            { type: base.TdChartOptionsService }
        ]; };
        TdChartSeriesSankeyComponent.propDecorators = {
            zlevel: [{ type: core.Input }],
            z: [{ type: core.Input }],
            left: [{ type: core.Input }],
            top: [{ type: core.Input }],
            right: [{ type: core.Input }],
            bottom: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            nodeWidth: [{ type: core.Input }],
            nodeGap: [{ type: core.Input }],
            layoutIterations: [{ type: core.Input }],
            orient: [{ type: core.Input }],
            draggable: [{ type: core.Input }],
            focusNodeAdjacency: [{ type: core.Input }],
            label: [{ type: core.Input }],
            itemStyle: [{ type: core.Input }],
            lineStyle: [{ type: core.Input }],
            emphasis: [{ type: core.Input }],
            nodes: [{ type: core.Input }],
            links: [{ type: core.Input }],
            edges: [{ type: core.Input }],
            silent: [{ type: core.Input }]
        };
        return TdChartSeriesSankeyComponent;
    }(base.TdSeriesComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SANKEY_MODULE_COMPONENTS = [TdChartSeriesSankeyComponent];
    var CovalentSankeyEchartsModule = /** @class */ (function () {
        function CovalentSankeyEchartsModule() {
        }
        CovalentSankeyEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [SANKEY_MODULE_COMPONENTS],
                        exports: [SANKEY_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentSankeyEchartsModule;
    }());

    exports.CovalentSankeyEchartsModule = CovalentSankeyEchartsModule;
    exports.SANKEY_MODULE_COMPONENTS = SANKEY_MODULE_COMPONENTS;
    exports.TdChartSeriesSankeyComponent = TdChartSeriesSankeyComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-echarts-sankey.umd.js.map
