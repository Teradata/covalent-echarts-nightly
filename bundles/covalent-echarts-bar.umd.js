(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/chart/bar'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/bar', ['exports', '@angular/core', '@angular/common', 'echarts/lib/chart/bar', '@covalent/echarts/base'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.bar = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, (function (exports, core, common, bar, base) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
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
     * @record
     */
    function ITdBarSeries() { }
    if (false) {
        /** @type {?|undefined} */
        ITdBarSeries.prototype.legendHoverLink;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.coordinateSystem;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.xAxisIndex;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.yAxisIndex;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.Label;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.itemStyle;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.emphasis;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.stack;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.cursor;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.barWidth;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.barMaxWidth;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.barMinHeight;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.barGap;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.barCategoryGap;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.large;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.largeThreshold;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.progressive;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.progressiveThreshold;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.progressiveChunkMode;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.dimensions;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.encode;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.seriesLayoutBy;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.datasetIndex;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.data;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.markPoint;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.markLine;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.markArea;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.Zlevel;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.z;
        /** @type {?|undefined} */
        ITdBarSeries.prototype.silent;
    }
    var TdChartSeriesBarComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesBarComponent, _super);
        /**
         * @param {?} _optionsService
         */
        function TdChartSeriesBarComponent(_optionsService) {
            return _super.call(this, 'bar', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesBarComponent.prototype.getConfig = function () {
            return {
                coordinateSystem: this.coordinateSystem,
                xAxisIndex: this.xAxisIndex,
                yAxisIndex: this.yAxisIndex,
                legendHoverLink: this.legendHoverLink,
                stack: this.stack,
                cursor: this.cursor,
                label: this.label,
                itemStyle: this.itemStyle,
                emphasis: this.emphasis,
                barWidth: this.barWidth,
                barMaxWidth: this.barMaxWidth,
                barMinHeight: this.barMinHeight,
                barGap: this.barGap,
                barCategoryGap: this.barCategoryGap,
                large: this.large,
                largeThreshold: this.largeThreshold,
                progressive: this.progressive,
                progressiveThreshold: this.progressiveThreshold,
                progressiveChunkMode: this.progressiveChunkMode,
                dimensions: this.dimensions,
                encode: this.encode,
                seriesLayoutBy: this.seriesLayoutBy,
                datasetIndex: this.datasetIndex,
                markPoint: this.markPoint,
                markLine: this.markLine,
                markArea: this.markArea,
                zlevel: this.zlevel,
                z: this.z,
            };
        };
        return TdChartSeriesBarComponent;
    }(base.TdSeriesDirective));
    TdChartSeriesBarComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-chart-series[td-bar]',
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
                            provide: base.TdSeriesDirective,
                            useExisting: core.forwardRef(( /**
                             * @return {?}
                             */function () { return TdChartSeriesBarComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesBarComponent.ctorParameters = function () { return [
        { type: base.TdChartOptionsService }
    ]; };
    TdChartSeriesBarComponent.propDecorators = {
        coordinateSystem: [{ type: core.Input }],
        xAxisIndex: [{ type: core.Input }],
        yAxisIndex: [{ type: core.Input }],
        legendHoverLink: [{ type: core.Input }],
        stack: [{ type: core.Input }],
        cursor: [{ type: core.Input }],
        label: [{ type: core.Input }],
        itemStyle: [{ type: core.Input }],
        emphasis: [{ type: core.Input }],
        barWidth: [{ type: core.Input }],
        barMaxWidth: [{ type: core.Input }],
        barMinHeight: [{ type: core.Input }],
        barGap: [{ type: core.Input }],
        barCategoryGap: [{ type: core.Input }],
        large: [{ type: core.Input }],
        largeThreshold: [{ type: core.Input }],
        progressive: [{ type: core.Input }],
        progressiveThreshold: [{ type: core.Input }],
        progressiveChunkMode: [{ type: core.Input }],
        dimensions: [{ type: core.Input }],
        encode: [{ type: core.Input }],
        seriesLayoutBy: [{ type: core.Input }],
        datasetIndex: [{ type: core.Input }],
        markPoint: [{ type: core.Input }],
        markLine: [{ type: core.Input }],
        markArea: [{ type: core.Input }],
        zlevel: [{ type: core.Input }],
        z: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.coordinateSystem;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.xAxisIndex;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.yAxisIndex;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.legendHoverLink;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.stack;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.cursor;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.label;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.itemStyle;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.emphasis;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.barWidth;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.barMaxWidth;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.barMinHeight;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.barGap;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.barCategoryGap;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.large;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.largeThreshold;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.progressive;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.progressiveThreshold;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.progressiveChunkMode;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.dimensions;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.encode;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.seriesLayoutBy;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.datasetIndex;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.markPoint;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.markLine;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.markArea;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.zlevel;
        /** @type {?} */
        TdChartSeriesBarComponent.prototype.z;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: bar.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var BAR_MODULE_COMPONENTS = [TdChartSeriesBarComponent];
    var CovalentBarEchartsModule = /** @class */ (function () {
        function CovalentBarEchartsModule() {
        }
        return CovalentBarEchartsModule;
    }());
    CovalentBarEchartsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [BAR_MODULE_COMPONENTS],
                    exports: [BAR_MODULE_COMPONENTS],
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: covalent-echarts-bar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.BAR_MODULE_COMPONENTS = BAR_MODULE_COMPONENTS;
    exports.CovalentBarEchartsModule = CovalentBarEchartsModule;
    exports.TdChartSeriesBarComponent = TdChartSeriesBarComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-echarts-bar.umd.js.map
