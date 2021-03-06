(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/chart/map'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/map', ['exports', '@angular/core', '@angular/common', 'echarts/lib/chart/map', '@covalent/echarts/base'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.map = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, (function (exports, core, common, map, base) { 'use strict';

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
    function ITdMapScaleLimit() { }
    if (false) {
        /** @type {?|undefined} */
        ITdMapScaleLimit.prototype.min;
        /** @type {?|undefined} */
        ITdMapScaleLimit.prototype.max;
    }
    /**
     * @record
     */
    function ITdMapItemStyle() { }
    if (false) {
        /** @type {?|undefined} */
        ITdMapItemStyle.prototype.areaColor;
        /** @type {?|undefined} */
        ITdMapItemStyle.prototype.emphasis;
    }
    /**
     * @record
     */
    function ITdMapSeries() { }
    if (false) {
        /** @type {?|undefined} */
        ITdMapSeries.prototype.map;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.roam;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.center;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.aspectScale;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.boudingCoords;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.zoom;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.scaleLimit;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.nameMap;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.selectedMode;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.label;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.itemStyle;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.zLevel;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.z;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.left;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.top;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.right;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.bottom;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.layoutCenter;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.layoutSize;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.geoIndex;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.mapValueCalculation;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.showLegendSymbol;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.seriesLayoutBy;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.data;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.markPoint;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.markLine;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.markArea;
        /** @type {?|undefined} */
        ITdMapSeries.prototype.silent;
    }
    var TdChartSeriesMapComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesMapComponent, _super);
        /**
         * @param {?} _optionsService
         */
        function TdChartSeriesMapComponent(_optionsService) {
            return _super.call(this, 'map', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesMapComponent.prototype.getConfig = function () {
            return {
                map: this.map,
                roam: this.roam,
                center: this.center,
                aspectScale: this.aspectScale,
                boudingCoords: this.boudingCoords,
                zoom: this.zoom,
                scaleLimit: this.scaleLimit,
                nameMap: this.nameMap,
                selectedMode: this.selectedMode,
                label: this.label,
                itemStyle: this.itemStyle,
                zLevel: this.zLevel,
                z: this.z,
                left: this.left,
                top: this.top,
                right: this.right,
                bottom: this.bottom,
                layoutCenter: this.layoutCenter,
                layoutSize: this.layoutSize,
                geoIndex: this.geoIndex,
                mapValueCalculation: this.mapValueCalculation,
                showLegendSymbol: this.showLegendSymbol,
                seriesLayoutBy: this.seriesLayoutBy,
                markPoint: this.markPoint,
                markLine: this.markLine,
                markArea: this.markArea,
                silent: this.silent,
            };
        };
        return TdChartSeriesMapComponent;
    }(base.TdSeriesDirective));
    TdChartSeriesMapComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-chart-series[td-map]',
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
                             */function () { return TdChartSeriesMapComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesMapComponent.ctorParameters = function () { return [
        { type: base.TdChartOptionsService }
    ]; };
    TdChartSeriesMapComponent.propDecorators = {
        map: [{ type: core.Input }],
        roam: [{ type: core.Input }],
        center: [{ type: core.Input }],
        aspectScale: [{ type: core.Input }],
        boudingCoords: [{ type: core.Input }],
        zoom: [{ type: core.Input }],
        scaleLimit: [{ type: core.Input }],
        nameMap: [{ type: core.Input }],
        selectedMode: [{ type: core.Input }],
        label: [{ type: core.Input }],
        itemStyle: [{ type: core.Input }],
        zLevel: [{ type: core.Input }],
        z: [{ type: core.Input }],
        left: [{ type: core.Input }],
        top: [{ type: core.Input }],
        right: [{ type: core.Input }],
        bottom: [{ type: core.Input }],
        layoutCenter: [{ type: core.Input }],
        layoutSize: [{ type: core.Input }],
        geoIndex: [{ type: core.Input }],
        mapValueCalculation: [{ type: core.Input }],
        showLegendSymbol: [{ type: core.Input }],
        seriesLayoutBy: [{ type: core.Input }],
        markPoint: [{ type: core.Input }],
        markLine: [{ type: core.Input }],
        markArea: [{ type: core.Input }],
        silent: [{ type: core.Input }]
    };
    if (false) {
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.map;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.roam;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.center;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.aspectScale;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.boudingCoords;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.zoom;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.scaleLimit;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.nameMap;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.selectedMode;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.label;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.itemStyle;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.zLevel;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.z;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.left;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.top;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.right;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.bottom;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.layoutCenter;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.layoutSize;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.geoIndex;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.mapValueCalculation;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.showLegendSymbol;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.seriesLayoutBy;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.markPoint;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.markLine;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.markArea;
        /** @type {?} */
        TdChartSeriesMapComponent.prototype.silent;
    }

    /**
     * @fileoverview added by tsickle
     * Generated from: map.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var MAP_MODULE_COMPONENTS = [TdChartSeriesMapComponent];
    var CovalentMapEchartsModule = /** @class */ (function () {
        function CovalentMapEchartsModule() {
        }
        return CovalentMapEchartsModule;
    }());
    CovalentMapEchartsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [MAP_MODULE_COMPONENTS],
                    exports: [MAP_MODULE_COMPONENTS],
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
     * Generated from: covalent-echarts-map.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentMapEchartsModule = CovalentMapEchartsModule;
    exports.MAP_MODULE_COMPONENTS = MAP_MODULE_COMPONENTS;
    exports.TdChartSeriesMapComponent = TdChartSeriesMapComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-echarts-map.umd.js.map
