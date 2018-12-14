(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('echarts/lib/chart/sankey'), require('@angular/core'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/sankey', ['exports', '@angular/common', 'echarts/lib/chart/sankey', '@angular/core', '@covalent/echarts/base'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.sankey = {}),global.ng.common,null,global.ng.core,global.covalent.echarts.base));
}(this, (function (exports,common,sankey,core,base) { 'use strict';

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
                        providers: [{
                                provide: base.TdSeriesComponent, useExisting: core.forwardRef(function () { return TdChartSeriesSankeyComponent; }),
                            }]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesSankeyComponent.ctorParameters = function () {
            return [
                { type: base.TdChartOptionsService }
            ];
        };
        TdChartSeriesSankeyComponent.propDecorators = {
            zlevel: [{ type: core.Input, args: ['zlevel',] }],
            z: [{ type: core.Input, args: ['z',] }],
            left: [{ type: core.Input, args: ['left',] }],
            top: [{ type: core.Input, args: ['top',] }],
            right: [{ type: core.Input, args: ['right',] }],
            bottom: [{ type: core.Input, args: ['bottom',] }],
            width: [{ type: core.Input, args: ['width',] }],
            height: [{ type: core.Input, args: ['height',] }],
            nodeWidth: [{ type: core.Input, args: ['nodeWidth',] }],
            nodeGap: [{ type: core.Input, args: ['nodeGap',] }],
            layoutIterations: [{ type: core.Input, args: ['layoutIterations',] }],
            orient: [{ type: core.Input, args: ['orient',] }],
            draggable: [{ type: core.Input, args: ['draggable',] }],
            focusNodeAdjacency: [{ type: core.Input, args: ['focusNodeAdjacency',] }],
            label: [{ type: core.Input, args: ['label',] }],
            itemStyle: [{ type: core.Input, args: ['itemStyle',] }],
            lineStyle: [{ type: core.Input, args: ['lineStyle',] }],
            emphasis: [{ type: core.Input, args: ['emphasis',] }],
            nodes: [{ type: core.Input, args: ['nodes',] }],
            links: [{ type: core.Input, args: ['links',] }],
            edges: [{ type: core.Input, args: ['edges',] }],
            silent: [{ type: core.Input, args: ['silent',] }]
        };
        return TdChartSeriesSankeyComponent;
    }(base.TdSeriesComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SANKEY_MODULE_COMPONENTS = [
        TdChartSeriesSankeyComponent,
    ];
    var CovalentSankeyEchartsModule = /** @class */ (function () {
        function CovalentSankeyEchartsModule() {
        }
        CovalentSankeyEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            SANKEY_MODULE_COMPONENTS,
                        ],
                        exports: [
                            SANKEY_MODULE_COMPONENTS,
                        ],
                    },] }
        ];
        return CovalentSankeyEchartsModule;
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

    exports.SANKEY_MODULE_COMPONENTS = SANKEY_MODULE_COMPONENTS;
    exports.CovalentSankeyEchartsModule = CovalentSankeyEchartsModule;
    exports.TdChartSeriesSankeyComponent = TdChartSeriesSankeyComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-echarts-sankey.umd.js.map