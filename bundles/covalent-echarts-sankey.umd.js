(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/chart/sankey'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/sankey', ['exports', '@angular/core', '@angular/common', 'echarts/lib/chart/sankey', '@covalent/echarts/base'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.sankey = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, (function (exports, core, common, sankey, base) { 'use strict';

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
    function ITdSankeyEmphasisLineStyle() { }
    if (false) {
        /** @type {?|undefined} */
        ITdSankeyEmphasisLineStyle.prototype.color;
        /** @type {?|undefined} */
        ITdSankeyEmphasisLineStyle.prototype.opacity;
        /** @type {?|undefined} */
        ITdSankeyEmphasisLineStyle.prototype.curveness;
    }
    /**
     * @record
     */
    function ITdSankeyEmphasis() { }
    if (false) {
        /** @type {?} */
        ITdSankeyEmphasis.prototype.lineStyle;
    }
    /**
     * @record
     */
    function ITdSankeySeries() { }
    if (false) {
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.zlevel;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.z;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.left;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.top;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.right;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.bottom;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.width;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.height;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.nodeWidth;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.nodeGap;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.layoutIterations;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.orient;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.draggable;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.focusNodeAdjacency;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.label;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.itemStyle;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.lineStyle;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.emphasis;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.data;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.nodes;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.links;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.edges;
        /** @type {?|undefined} */
        ITdSankeySeries.prototype.silent;
    }
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
    if (false) {
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.zlevel;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.z;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.left;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.top;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.right;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.bottom;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.width;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.height;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.nodeWidth;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.nodeGap;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.layoutIterations;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.orient;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.draggable;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.focusNodeAdjacency;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.label;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.itemStyle;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.lineStyle;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.emphasis;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.nodes;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.links;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.edges;
        /** @type {?} */
        TdChartSeriesSankeyComponent.prototype.silent;
    }

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

})));
//# sourceMappingURL=covalent-echarts-sankey.umd.js.map
