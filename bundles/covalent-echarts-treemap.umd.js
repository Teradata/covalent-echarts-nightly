(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('echarts/lib/chart/treemap'), require('@angular/core'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/treemap', ['exports', '@angular/common', 'echarts/lib/chart/treemap', '@angular/core', '@covalent/echarts/base'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.treemap = {}),global.ng.common,null,global.ng.core,global.covalent.echarts.base));
}(this, (function (exports,common,treemap,core,base) { 'use strict';

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
                        providers: [{
                                provide: base.TdSeriesComponent, useExisting: core.forwardRef(function () { return TdChartSeriesTreemapComponent; }),
                            }]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesTreemapComponent.ctorParameters = function () {
            return [
                { type: base.TdChartOptionsService }
            ];
        };
        TdChartSeriesTreemapComponent.propDecorators = {
            config: [{ type: core.Input, args: ['config',] }],
            id: [{ type: core.Input, args: ['id',] }],
            name: [{ type: core.Input, args: ['name',] }],
            data: [{ type: core.Input, args: ['data',] }],
            zlevel: [{ type: core.Input, args: ['zlevel',] }],
            z: [{ type: core.Input, args: ['z',] }],
            left: [{ type: core.Input, args: ['left',] }],
            top: [{ type: core.Input, args: ['top',] }],
            right: [{ type: core.Input, args: ['right',] }],
            bottom: [{ type: core.Input, args: ['bottom',] }],
            width: [{ type: core.Input, args: ['width',] }],
            height: [{ type: core.Input, args: ['height',] }],
            squareRatio: [{ type: core.Input, args: ['squareRatio',] }],
            leafDepth: [{ type: core.Input, args: ['leafDepth',] }],
            drillDownIcon: [{ type: core.Input, args: ['drillDownIcon',] }],
            roam: [{ type: core.Input, args: ['roam',] }],
            nodeClick: [{ type: core.Input, args: ['nodeClick',] }],
            zoomToNodeRatio: [{ type: core.Input, args: ['zoomToNodeRatio',] }],
            levels: [{ type: core.Input, args: ['levels',] }],
            silent: [{ type: core.Input, args: ['silent',] }],
            visualDimension: [{ type: core.Input, args: ['visualDimension',] }],
            visualMin: [{ type: core.Input, args: ['visualMin',] }],
            visualMax: [{ type: core.Input, args: ['visualMax',] }],
            colorAlpha: [{ type: core.Input, args: ['colorAlpha',] }],
            colorSaturation: [{ type: core.Input, args: ['colorSaturation',] }],
            colorMappingBy: [{ type: core.Input, args: ['colorMappingBy',] }],
            visibleMin: [{ type: core.Input, args: ['visibleMin',] }],
            childrenVisibleMin: [{ type: core.Input, args: ['childrenVisibleMin',] }],
            itemStyle: [{ type: core.Input, args: ['itemStyle',] }],
            label: [{ type: core.Input, args: ['label',] }],
            upperLabel: [{ type: core.Input, args: ['upperLabel',] }],
            breadcrumb: [{ type: core.Input, args: ['breadcrumb',] }],
            emphasis: [{ type: core.Input, args: ['emphasis',] }],
            tooltip: [{ type: core.Input, args: ['tooltip',] }]
        };
        return TdChartSeriesTreemapComponent;
    }(base.TdSeriesComponent));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TREEMAP_MODULE_COMPONENTS = [
        TdChartSeriesTreemapComponent,
    ];
    var CovalentTreemapEchartsModule = /** @class */ (function () {
        function CovalentTreemapEchartsModule() {
        }
        CovalentTreemapEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            TREEMAP_MODULE_COMPONENTS,
                        ],
                        exports: [
                            TREEMAP_MODULE_COMPONENTS,
                        ],
                    },] }
        ];
        return CovalentTreemapEchartsModule;
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

    exports.TREEMAP_MODULE_COMPONENTS = TREEMAP_MODULE_COMPONENTS;
    exports.CovalentTreemapEchartsModule = CovalentTreemapEchartsModule;
    exports.TdChartSeriesTreemapComponent = TdChartSeriesTreemapComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-echarts-treemap.umd.js.map