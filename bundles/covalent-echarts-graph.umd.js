(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/chart/graph'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/graph', ['exports', '@angular/core', '@angular/common', 'echarts/lib/chart/graph', '@covalent/echarts/base'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.graph = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, function (exports, core, common, graph, base) { 'use strict';

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
                                function () { return TdChartSeriesGraphComponent; })),
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesGraphComponent.ctorParameters = function () { return [
            { type: base.TdChartOptionsService }
        ]; };
        TdChartSeriesGraphComponent.propDecorators = {
            legendHoverLink: [{ type: core.Input }],
            coordinateSystem: [{ type: core.Input }],
            xAxisIndex: [{ type: core.Input }],
            yAxisIndex: [{ type: core.Input }],
            polarIndex: [{ type: core.Input }],
            calendarIndex: [{ type: core.Input }],
            geoIndex: [{ type: core.Input }],
            hoverAnimation: [{ type: core.Input }],
            circular: [{ type: core.Input }],
            force: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            nodeScaleRatio: [{ type: core.Input }],
            draggable: [{ type: core.Input }],
            symbol: [{ type: core.Input }],
            symbolSize: [{ type: core.Input }],
            symbolRotate: [{ type: core.Input }],
            symbolKeepAspect: [{ type: core.Input }],
            symbolOffset: [{ type: core.Input }],
            focusNodeAdjacency: [{ type: core.Input }],
            edgeSymbol: [{ type: core.Input }],
            edgeSymbolSize: [{ type: core.Input }],
            cursor: [{ type: core.Input }],
            roam: [{ type: core.Input }],
            initialTreeDepth: [{ type: core.Input }],
            itemStyle: [{ type: core.Input }],
            lineStyle: [{ type: core.Input }],
            label: [{ type: core.Input }],
            edgeLabel: [{ type: core.Input }],
            emphasis: [{ type: core.Input }],
            categories: [{ type: core.Input }],
            nodes: [{ type: core.Input }],
            links: [{ type: core.Input }],
            edges: [{ type: core.Input }],
            markPoint: [{ type: core.Input }],
            markLine: [{ type: core.Input }],
            markArea: [{ type: core.Input }],
            zlevel: [{ type: core.Input }],
            z: [{ type: core.Input }],
            silent: [{ type: core.Input }],
            left: [{ type: core.Input }],
            top: [{ type: core.Input }],
            right: [{ type: core.Input }],
            bottom: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }]
        };
        return TdChartSeriesGraphComponent;
    }(base.TdSeriesComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var GRAPH_MODULE_COMPONENTS = [TdChartSeriesGraphComponent];
    var CovalentGraphEchartsModule = /** @class */ (function () {
        function CovalentGraphEchartsModule() {
        }
        CovalentGraphEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [GRAPH_MODULE_COMPONENTS],
                        exports: [GRAPH_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentGraphEchartsModule;
    }());

    exports.CovalentGraphEchartsModule = CovalentGraphEchartsModule;
    exports.GRAPH_MODULE_COMPONENTS = GRAPH_MODULE_COMPONENTS;
    exports.TdChartSeriesGraphComponent = TdChartSeriesGraphComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-echarts-graph.umd.js.map
