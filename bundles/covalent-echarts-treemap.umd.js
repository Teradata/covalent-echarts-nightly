(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/chart/treemap'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/treemap', ['exports', '@angular/core', '@angular/common', 'echarts/lib/chart/treemap', '@covalent/echarts/base'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.treemap = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, function (exports, core, common, treemap, base) { 'use strict';

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
    var TdChartSeriesTreemapComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesTreemapComponent, _super);
        function TdChartSeriesTreemapComponent(_optionsService) {
            var _this = _super.call(this, 'treemap', _optionsService) || this;
            _this.config = {};
            return _this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesTreemapComponent.prototype.getConfig = /**
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
                squareRatio: this.squareRatio,
                leafDepth: this.leafDepth,
                drillDownIcon: this.drillDownIcon,
                roam: this.roam,
                nodeClick: this.nodeClick,
                zoomToNodeRatio: this.zoomToNodeRatio,
                levels: this.levels,
                silent: this.silent,
                visualDimension: this.visualDimension,
                visualMin: this.visualMin,
                visualMax: this.visualMax,
                colorAlpha: this.colorAlpha,
                colorSaturation: this.colorSaturation,
                colorMappingBy: this.colorMappingBy,
                visibleMin: this.visibleMin,
                childrenVisibleMin: this.childrenVisibleMin,
                itemStyle: this.itemStyle,
                label: this.label,
                upperLabel: this.upperLabel,
                breadcrumb: this.breadcrumb,
                emphasis: this.emphasis,
            };
        };
        TdChartSeriesTreemapComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-treemap]',
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
                                function () { return TdChartSeriesTreemapComponent; })),
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesTreemapComponent.ctorParameters = function () { return [
            { type: base.TdChartOptionsService }
        ]; };
        TdChartSeriesTreemapComponent.propDecorators = {
            config: [{ type: core.Input }],
            id: [{ type: core.Input }],
            name: [{ type: core.Input }],
            data: [{ type: core.Input }],
            zlevel: [{ type: core.Input }],
            z: [{ type: core.Input }],
            left: [{ type: core.Input }],
            top: [{ type: core.Input }],
            right: [{ type: core.Input }],
            bottom: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            squareRatio: [{ type: core.Input }],
            leafDepth: [{ type: core.Input }],
            drillDownIcon: [{ type: core.Input }],
            roam: [{ type: core.Input }],
            nodeClick: [{ type: core.Input }],
            zoomToNodeRatio: [{ type: core.Input }],
            levels: [{ type: core.Input }],
            silent: [{ type: core.Input }],
            visualDimension: [{ type: core.Input }],
            visualMin: [{ type: core.Input }],
            visualMax: [{ type: core.Input }],
            colorAlpha: [{ type: core.Input }],
            colorSaturation: [{ type: core.Input }],
            colorMappingBy: [{ type: core.Input }],
            visibleMin: [{ type: core.Input }],
            childrenVisibleMin: [{ type: core.Input }],
            itemStyle: [{ type: core.Input }],
            label: [{ type: core.Input }],
            upperLabel: [{ type: core.Input }],
            breadcrumb: [{ type: core.Input }],
            emphasis: [{ type: core.Input }],
            tooltip: [{ type: core.Input }]
        };
        return TdChartSeriesTreemapComponent;
    }(base.TdSeriesComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TREEMAP_MODULE_COMPONENTS = [TdChartSeriesTreemapComponent];
    var CovalentTreemapEchartsModule = /** @class */ (function () {
        function CovalentTreemapEchartsModule() {
        }
        CovalentTreemapEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TREEMAP_MODULE_COMPONENTS],
                        exports: [TREEMAP_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentTreemapEchartsModule;
    }());

    exports.CovalentTreemapEchartsModule = CovalentTreemapEchartsModule;
    exports.TREEMAP_MODULE_COMPONENTS = TREEMAP_MODULE_COMPONENTS;
    exports.TdChartSeriesTreemapComponent = TdChartSeriesTreemapComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-echarts-treemap.umd.js.map
