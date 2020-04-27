(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/chart/line'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/line', ['exports', '@angular/core', '@angular/common', 'echarts/lib/chart/line', '@covalent/echarts/base'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.line = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, (function (exports, core, common, line, base) { 'use strict';

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
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ITdLineSeries() { }
    if (false) {
        /** @type {?|undefined} */
        ITdLineSeries.prototype.coordinateSystem;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.xAxisIndex;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.yAxisIndex;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.polarIndex;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.symbol;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.symbolSize;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.symbolRotate;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.symbolKeepAspect;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.symbolOffset;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.showSymbol;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.showAllSymbol;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.hoverAnimation;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.legendHoverLink;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.stack;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.cursor;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.connectNulls;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.clipOverflow;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.step;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.label;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.itemStyle;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.lineStyle;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.width;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.opacity;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.areaStyle;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.emphasis;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.smooth;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.smoothMonotone;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.sampling;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.dimensions;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.encode;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.seriesLayoutBy;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.datasetIndex;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.data;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.markPoint;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.markLine;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.markArea;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.zlevel;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.z;
        /** @type {?|undefined} */
        ITdLineSeries.prototype.silent;
    }
    var TdChartSeriesLineComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesLineComponent, _super);
        function TdChartSeriesLineComponent(_optionsService) {
            return _super.call(this, 'line', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesLineComponent.prototype.getConfig = /**
         * @return {?}
         */
        function () {
            return {
                coordinateSystem: this.coordinateSystem,
                xAxisIndex: this.xAxisIndex,
                yAxisIndex: this.yAxisIndex,
                polarIndex: this.polarIndex,
                symbol: this.symbol,
                symbolSize: this.symbolSize,
                symbolRotate: this.symbolRotate,
                symbolKeepAspect: this.symbolKeepAspect,
                symbolOffset: this.symbolOffset,
                showSymbol: this.showSymbol,
                showAllSymbol: this.showAllSymbol,
                hoverAnimation: this.hoverAnimation,
                legendHoverLink: this.legendHoverLink,
                stack: this.stack,
                cursor: this.cursor,
                connectNulls: this.connectNulls,
                clipOverflow: this.clipOverflow,
                step: this.step,
                label: this.label,
                itemStyle: this.itemStyle,
                lineStyle: this.lineStyle,
                areaStyle: this.areaStyle,
                emphasis: this.emphasis,
                smooth: this.smooth,
                smoothMonotone: this.smoothMonotone,
                sampling: this.sampling,
                dimensions: this.dimensions,
                encode: this.encode,
                seriesLayoutBy: this.seriesLayoutBy,
                datasetIndex: this.datasetIndex,
                markPoint: this.markPoint,
                markLine: this.markLine,
                markArea: this.markArea,
                zlevel: this.zlevel,
                z: this.z,
                silent: this.silent,
            };
        };
        TdChartSeriesLineComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-line]',
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
                                function () { return TdChartSeriesLineComponent; })),
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesLineComponent.ctorParameters = function () { return [
            { type: base.TdChartOptionsService }
        ]; };
        TdChartSeriesLineComponent.propDecorators = {
            coordinateSystem: [{ type: core.Input }],
            xAxisIndex: [{ type: core.Input }],
            yAxisIndex: [{ type: core.Input }],
            polarIndex: [{ type: core.Input }],
            symbol: [{ type: core.Input }],
            symbolSize: [{ type: core.Input }],
            symbolRotate: [{ type: core.Input }],
            symbolKeepAspect: [{ type: core.Input }],
            symbolOffset: [{ type: core.Input }],
            showSymbol: [{ type: core.Input }],
            showAllSymbol: [{ type: core.Input }],
            hoverAnimation: [{ type: core.Input }],
            legendHoverLink: [{ type: core.Input }],
            stack: [{ type: core.Input }],
            cursor: [{ type: core.Input }],
            connectNulls: [{ type: core.Input }],
            clipOverflow: [{ type: core.Input }],
            step: [{ type: core.Input }],
            label: [{ type: core.Input }],
            itemStyle: [{ type: core.Input }],
            lineStyle: [{ type: core.Input }],
            areaStyle: [{ type: core.Input }],
            emphasis: [{ type: core.Input }],
            smooth: [{ type: core.Input }],
            smoothMonotone: [{ type: core.Input }],
            sampling: [{ type: core.Input }],
            dimensions: [{ type: core.Input }],
            encode: [{ type: core.Input }],
            seriesLayoutBy: [{ type: core.Input }],
            datasetIndex: [{ type: core.Input }],
            markPoint: [{ type: core.Input }],
            markLine: [{ type: core.Input }],
            markArea: [{ type: core.Input }],
            zlevel: [{ type: core.Input }],
            z: [{ type: core.Input }],
            silent: [{ type: core.Input }]
        };
        return TdChartSeriesLineComponent;
    }(base.TdSeriesComponent));
    if (false) {
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.coordinateSystem;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.xAxisIndex;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.yAxisIndex;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.polarIndex;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.symbol;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.symbolSize;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.symbolRotate;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.symbolKeepAspect;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.symbolOffset;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.showSymbol;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.showAllSymbol;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.hoverAnimation;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.legendHoverLink;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.stack;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.cursor;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.connectNulls;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.clipOverflow;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.step;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.label;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.itemStyle;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.lineStyle;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.areaStyle;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.emphasis;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.smooth;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.smoothMonotone;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.sampling;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.dimensions;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.encode;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.seriesLayoutBy;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.datasetIndex;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.markPoint;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.markLine;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.markArea;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.zlevel;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.z;
        /** @type {?} */
        TdChartSeriesLineComponent.prototype.silent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var LINE_MODULE_COMPONENTS = [TdChartSeriesLineComponent];
    var CovalentLineEchartsModule = /** @class */ (function () {
        function CovalentLineEchartsModule() {
        }
        CovalentLineEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [LINE_MODULE_COMPONENTS],
                        exports: [LINE_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentLineEchartsModule;
    }());

    exports.CovalentLineEchartsModule = CovalentLineEchartsModule;
    exports.LINE_MODULE_COMPONENTS = LINE_MODULE_COMPONENTS;
    exports.TdChartSeriesLineComponent = TdChartSeriesLineComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-echarts-line.umd.js.map
