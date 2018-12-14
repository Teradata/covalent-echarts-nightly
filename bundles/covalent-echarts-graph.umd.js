(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('echarts/lib/chart/graph'), require('@angular/core'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/graph', ['exports', '@angular/common', 'echarts/lib/chart/graph', '@angular/core', '@covalent/echarts/base'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.graph = {}),global.ng.common,null,global.ng.core,global.covalent.echarts.base));
}(this, (function (exports,common,graph,core,base) { 'use strict';

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
    var TdChartSeriesGraphComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesGraphComponent, _super);
        function TdChartSeriesGraphComponent(_optionsService) {
            return _super.call(this, 'graph', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesGraphComponent.prototype.getConfig = /**
         * @return {?}
         */
            function () {
                return {
                    legendHoverLink: this.legendHoverLink,
                    coordinateSystem: this.coordinateSystem,
                    xAxisIndex: this.xAxisIndex,
                    yAxisIndex: this.yAxisIndex,
                    polarIndex: this.polarIndex,
                    calendarIndex: this.calendarIndex,
                    geoIndex: this.geoIndex,
                    hoverAnimation: this.hoverAnimation,
                    circular: this.circular,
                    force: this.force,
                    layout: this.layout,
                    nodeScaleRatio: this.nodeScaleRatio,
                    draggable: this.draggable,
                    symbol: this.symbol,
                    symbolSize: this.symbolSize,
                    symbolRotate: this.symbolRotate,
                    symbolKeepAspect: this.symbolKeepAspect,
                    symbolOffset: this.symbolOffset,
                    focusNodeAdjacency: this.focusNodeAdjacency,
                    edgeSymbol: this.edgeSymbol,
                    edgeSymbolSize: this.edgeSymbolSize,
                    cursor: this.cursor,
                    roam: this.roam,
                    itemStyle: this.itemStyle,
                    lineStyle: this.lineStyle,
                    label: this.label,
                    edgeLabel: this.edgeLabel,
                    emphasis: this.emphasis,
                    categories: this.categories,
                    nodes: this.nodes,
                    links: this.links,
                    edges: this.edges,
                    markPoint: this.markPoint,
                    markLine: this.markLine,
                    markArea: this.markArea,
                    zlevel: this.zlevel,
                    z: this.z,
                    silent: this.silent,
                    left: this.left,
                    top: this.top,
                    right: this.right,
                    bottom: this.bottom,
                    width: this.width,
                    height: this.height,
                };
            };
        TdChartSeriesGraphComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-graph]',
                        template: '',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [{
                                provide: base.TdSeriesComponent, useExisting: core.forwardRef(function () { return TdChartSeriesGraphComponent; }),
                            }]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesGraphComponent.ctorParameters = function () {
            return [
                { type: base.TdChartOptionsService }
            ];
        };
        TdChartSeriesGraphComponent.propDecorators = {
            legendHoverLink: [{ type: core.Input, args: ['legendHoverLink',] }],
            coordinateSystem: [{ type: core.Input, args: ['coordinateSystem',] }],
            xAxisIndex: [{ type: core.Input, args: ['xAxisIndex',] }],
            yAxisIndex: [{ type: core.Input, args: ['yAxisIndex',] }],
            polarIndex: [{ type: core.Input, args: ['polarIndex',] }],
            calendarIndex: [{ type: core.Input, args: ['calendarIndex',] }],
            geoIndex: [{ type: core.Input, args: ['geoIndex',] }],
            hoverAnimation: [{ type: core.Input, args: ['hoverAnimation',] }],
            circular: [{ type: core.Input, args: ['circular',] }],
            force: [{ type: core.Input, args: ['force',] }],
            layout: [{ type: core.Input, args: ['layout',] }],
            nodeScaleRatio: [{ type: core.Input, args: ['nodeScaleRatio',] }],
            draggable: [{ type: core.Input, args: ['draggable',] }],
            symbol: [{ type: core.Input, args: ['symbol',] }],
            symbolSize: [{ type: core.Input, args: ['symbolSize',] }],
            symbolRotate: [{ type: core.Input, args: ['symbolRotate',] }],
            symbolKeepAspect: [{ type: core.Input, args: ['symbolKeepAspect',] }],
            symbolOffset: [{ type: core.Input, args: ['symbolOffset',] }],
            focusNodeAdjacency: [{ type: core.Input, args: ['focusNodeAdjacency',] }],
            edgeSymbol: [{ type: core.Input, args: ['edgeSymbol',] }],
            edgeSymbolSize: [{ type: core.Input, args: ['edgeSymbolSize',] }],
            cursor: [{ type: core.Input, args: ['cursor',] }],
            roam: [{ type: core.Input, args: ['roam',] }],
            initialTreeDepth: [{ type: core.Input, args: ['initialTreeDepth',] }],
            itemStyle: [{ type: core.Input, args: ['itemStyle',] }],
            lineStyle: [{ type: core.Input, args: ['lineStyle',] }],
            label: [{ type: core.Input, args: ['label',] }],
            edgeLabel: [{ type: core.Input, args: ['edgeLabel',] }],
            emphasis: [{ type: core.Input, args: ['emphasis',] }],
            categories: [{ type: core.Input, args: ['categories',] }],
            nodes: [{ type: core.Input, args: ['nodes',] }],
            links: [{ type: core.Input, args: ['links',] }],
            edges: [{ type: core.Input, args: ['edges',] }],
            markPoint: [{ type: core.Input, args: ['markPoint',] }],
            markLine: [{ type: core.Input, args: ['markLine',] }],
            markArea: [{ type: core.Input, args: ['markArea',] }],
            zlevel: [{ type: core.Input, args: ['zlevel',] }],
            z: [{ type: core.Input, args: ['z',] }],
            silent: [{ type: core.Input, args: ['silent',] }],
            left: [{ type: core.Input, args: ['left',] }],
            top: [{ type: core.Input, args: ['top',] }],
            right: [{ type: core.Input, args: ['right',] }],
            bottom: [{ type: core.Input, args: ['bottom',] }],
            width: [{ type: core.Input, args: ['width',] }],
            height: [{ type: core.Input, args: ['height',] }]
        };
        return TdChartSeriesGraphComponent;
    }(base.TdSeriesComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var GRAPH_MODULE_COMPONENTS = [
        TdChartSeriesGraphComponent,
    ];
    var CovalentGraphEchartsModule = /** @class */ (function () {
        function CovalentGraphEchartsModule() {
        }
        CovalentGraphEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            GRAPH_MODULE_COMPONENTS,
                        ],
                        exports: [
                            GRAPH_MODULE_COMPONENTS,
                        ],
                    },] }
        ];
        return CovalentGraphEchartsModule;
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

    exports.GRAPH_MODULE_COMPONENTS = GRAPH_MODULE_COMPONENTS;
    exports.CovalentGraphEchartsModule = CovalentGraphEchartsModule;
    exports.TdChartSeriesGraphComponent = TdChartSeriesGraphComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-echarts-graph.umd.js.map