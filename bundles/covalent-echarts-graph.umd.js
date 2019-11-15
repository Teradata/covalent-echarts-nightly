(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/chart/graph'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/graph', ['exports', '@angular/core', '@angular/common', 'echarts/lib/chart/graph', '@covalent/echarts/base'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.graph = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, (function (exports, core, common, graph, base) { 'use strict';

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

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ITdCategories() { }
    if (false) {
        /** @type {?|undefined} */
        ITdCategories.prototype.name;
        /** @type {?|undefined} */
        ITdCategories.prototype.symbol;
        /** @type {?|undefined} */
        ITdCategories.prototype.symbolSize;
        /** @type {?|undefined} */
        ITdCategories.prototype.symbolRotate;
        /** @type {?|undefined} */
        ITdCategories.prototype.symbolKeepAspect;
        /** @type {?} */
        ITdCategories.prototype.symbolOffset;
        /** @type {?} */
        ITdCategories.prototype.itemStyle;
        /** @type {?} */
        ITdCategories.prototype.label;
        /** @type {?} */
        ITdCategories.prototype.emphasis;
    }
    /**
     * @record
     */
    function ITdGraphForce() { }
    if (false) {
        /** @type {?|undefined} */
        ITdGraphForce.prototype.initLayout;
        /** @type {?|undefined} */
        ITdGraphForce.prototype.repulsion;
        /** @type {?|undefined} */
        ITdGraphForce.prototype.gravity;
        /** @type {?|undefined} */
        ITdGraphForce.prototype.edgeLength;
        /** @type {?|undefined} */
        ITdGraphForce.prototype.layoutAnimation;
    }
    /**
     * @record
     */
    function ITdGraphSeries() { }
    if (false) {
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.legendHoverLink;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.coordinateSystem;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.xAxisIndex;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.yAxisIndex;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.polarIndex;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.calendarIndex;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.geoIndex;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.hoverAnimation;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.circular;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.force;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.layout;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.nodeScaleRatio;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.draggable;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.symbol;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.symbolSize;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.symbolRotate;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.symbolKeepAspect;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.symbolOffset;
        /** @type {?} */
        ITdGraphSeries.prototype.focusNodeAdjacency;
        /** @type {?} */
        ITdGraphSeries.prototype.edgeSymbol;
        /** @type {?} */
        ITdGraphSeries.prototype.edgeSymbolSize;
        /** @type {?} */
        ITdGraphSeries.prototype.cursor;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.roam;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.expandAndCollapse;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.initialTreeDepth;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.itemStyle;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.lineStyle;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.label;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.edgeLabel;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.emphasis;
        /** @type {?} */
        ITdGraphSeries.prototype.categories;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.data;
        /** @type {?} */
        ITdGraphSeries.prototype.nodes;
        /** @type {?} */
        ITdGraphSeries.prototype.links;
        /** @type {?} */
        ITdGraphSeries.prototype.edges;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.markPoint;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.markLine;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.markArea;
        /** @type {?} */
        ITdGraphSeries.prototype.zlevel;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.z;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.silent;
        /** @type {?} */
        ITdGraphSeries.prototype.left;
        /** @type {?} */
        ITdGraphSeries.prototype.top;
        /** @type {?} */
        ITdGraphSeries.prototype.right;
        /** @type {?} */
        ITdGraphSeries.prototype.bottom;
        /** @type {?} */
        ITdGraphSeries.prototype.width;
        /** @type {?} */
        ITdGraphSeries.prototype.height;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.animation;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.animationThreshold;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.animationDuration;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.animationEasing;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.animationDelay;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.animationDurationUpdate;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.animationEasingUpdate;
        /** @type {?|undefined} */
        ITdGraphSeries.prototype.animationDelayUpdate;
    }
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
    if (false) {
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.legendHoverLink;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.coordinateSystem;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.xAxisIndex;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.yAxisIndex;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.polarIndex;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.calendarIndex;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.geoIndex;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.hoverAnimation;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.circular;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.force;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.layout;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.nodeScaleRatio;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.draggable;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.symbol;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.symbolSize;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.symbolRotate;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.symbolKeepAspect;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.symbolOffset;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.focusNodeAdjacency;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.edgeSymbol;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.edgeSymbolSize;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.cursor;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.roam;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.initialTreeDepth;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.itemStyle;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.lineStyle;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.label;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.edgeLabel;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.emphasis;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.categories;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.nodes;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.links;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.edges;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.markPoint;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.markLine;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.markArea;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.zlevel;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.z;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.silent;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.left;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.top;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.right;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.bottom;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.width;
        /** @type {?} */
        TdChartSeriesGraphComponent.prototype.height;
    }

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

})));
//# sourceMappingURL=covalent-echarts-graph.umd.js.map
