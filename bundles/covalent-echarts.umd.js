(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('echarts/lib/echarts'), require('zrender/lib/svg/svg'), require('echarts/lib/chart/bar'), require('@covalent/echarts/base'), require('echarts/lib/chart/pie'), require('echarts/lib/chart/line'), require('echarts/lib/chart/scatter'), require('echarts/lib/chart/tree'), require('echarts/lib/component/tooltip'), require('echarts/lib/component/toolbox')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', 'echarts/lib/echarts', 'zrender/lib/svg/svg', 'echarts/lib/chart/bar', '@covalent/echarts/base', 'echarts/lib/chart/pie', 'echarts/lib/chart/line', 'echarts/lib/chart/scatter', 'echarts/lib/chart/tree', 'echarts/lib/component/tooltip', 'echarts/lib/component/toolbox'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = {}), global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators, global.echarts, null, null, global.covalent.echarts.base));
}(this, (function (exports, core, common, rxjs, operators, echarts, svg, bar, base) { 'use strict';

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
    var TdChartOptionsService = /** @class */ (function () {
        function TdChartOptionsService() {
            this._options = {};
            this._optionsSubject = new rxjs.BehaviorSubject(this._options);
        }
        /**
         * @param {?} option
         * @param {?} value
         * @return {?}
         */
        TdChartOptionsService.prototype.setOption = /**
         * @param {?} option
         * @param {?} value
         * @return {?}
         */
        function (option, value) {
            /** @type {?} */
            var options = {};
            options[option] = value;
            Object.assign(this._options, options);
            this._optionsSubject.next(this._options);
        };
        /**
         * @param {?} option
         * @param {?} value
         * @return {?}
         */
        TdChartOptionsService.prototype.setArrayOption = /**
         * @param {?} option
         * @param {?} value
         * @return {?}
         */
        function (option, value) {
            /** @type {?} */
            var prevValue = this.getOption(option);
            if (prevValue) {
                /** @type {?} */
                var index = prevValue.indexOf(value);
                index > -1 ? (prevValue[index] = value) : prevValue.push(value);
            }
            else {
                prevValue = [value];
            }
            this.setOption(option, prevValue);
        };
        /**
         * @param {?} option
         * @param {?} value
         * @return {?}
         */
        TdChartOptionsService.prototype.removeArrayOption = /**
         * @param {?} option
         * @param {?} value
         * @return {?}
         */
        function (option, value) {
            /** @type {?} */
            var prevValue = this.getOption(option);
            if (prevValue) {
                /** @type {?} */
                var index = prevValue.indexOf(value);
                if (index > -1) {
                    /* tslint:disable-next-line */
                    prevValue[index] = null;
                }
                else {
                    prevValue = [];
                }
            }
            this.setOption(option, prevValue);
        };
        /**
         * @param {?} option
         * @return {?}
         */
        TdChartOptionsService.prototype.getOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            return this._options[option];
        };
        /**
         * @param {?} option
         * @return {?}
         */
        TdChartOptionsService.prototype.clearOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            /* tslint:disable-next-line */
            this.setOption(option, null);
        };
        /**
         * @return {?}
         */
        TdChartOptionsService.prototype.listen = /**
         * @return {?}
         */
        function () {
            return this._optionsSubject.asObservable();
        };
        TdChartOptionsService.decorators = [
            { type: core.Injectable }
        ];
        return TdChartOptionsService;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdChartOptionsService.prototype._options;
        /**
         * @type {?}
         * @private
         */
        TdChartOptionsService.prototype._optionsSubject;
    }
    /**
     * @param {?} parent
     * @return {?}
     */
    function CHART_PROVIDER_FACTORY(parent) {
        return parent || new TdChartOptionsService();
    }
    /** @type {?} */
    var CHART_PROVIDER = {
        // If there is already a service available, use that. Otherwise, provide a new one.
        provide: TdChartOptionsService,
        deps: [[new core.Optional(), new core.SkipSelf(), TdChartOptionsService]],
        useFactory: CHART_PROVIDER_FACTORY,
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @param {?} target
     * @param {...?} sources
     * @return {?}
     */
    function assignDefined(target) {
        var e_1, _a, e_2, _b, e_3, _c;
        var sources = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            sources[_i - 1] = arguments[_i];
        }
        /** @type {?} */
        var keys = new Set();
        try {
            for (var sources_1 = __values(sources), sources_1_1 = sources_1.next(); !sources_1_1.done; sources_1_1 = sources_1.next()) {
                var source = sources_1_1.value;
                try {
                    for (var _d = (e_2 = void 0, __values(Object.keys(source))), _e = _d.next(); !_e.done; _e = _d.next()) {
                        var key = _e.value;
                        keys.add(key);
                        /** @type {?} */
                        var val = source[key];
                        /* tslint:disable-next-line */
                        if (val !== undefined && val !== null) {
                            target[key] = val;
                            /* tslint:disable-next-line */
                        }
                        else if (val === null) {
                            delete target[key];
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (sources_1_1 && !sources_1_1.done && (_a = sources_1.return)) _a.call(sources_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        try {
            // delete keys that are not in any source
            for (var _f = __values(Object.keys(target)), _g = _f.next(); !_g.done; _g = _f.next()) {
                var key = _g.value;
                if (!keys.has(key)) {
                    delete target[key];
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_g && !_g.done && (_c = _f.return)) _c.call(_f);
            }
            finally { if (e_3) throw e_3.error; }
        }
        return target;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable */
    var aquaSplash = {
        color: ['#305b9e', '#0076a9', '#1d8daa', '#51a2a8', '#7fb5aa', '#aac6b4', '#CFD8C8', '#ECEBE4'],
        backgroundColor: 'transparent',
        textStyle: {},
        title: {
            textStyle: {
                color: '#aaaaaa',
            },
            subtextStyle: {
                color: '#aaaaaa',
            },
        },
        tree: {
            itemStyle: {
                color: '#ECEBE4',
                borderColor: '#305b9e',
            },
        },
        line: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        radar: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        bar: {
            itemStyle: {
                normal: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
                emphasis: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
            },
        },
        pie: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        scatter: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        boxplot: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        parallel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        sankey: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        funnel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        gauge: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: '#305b9e',
                    color0: 'transparent',
                    borderColor: '#305b9e',
                    borderColor0: '#1d8daa',
                    borderWidth: '2',
                },
            },
        },
        graph: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color: '#aaaaaa',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
            color: ['#305b9e', '#0076a9', '#1d8daa', '#51a2a8', '#7fb5aa', '#aac6b4', '#CFD8C8', '#ECEBE4'],
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
        map: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#00475e',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(0,71,94)',
                    },
                },
            },
        },
        geo: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#00475e',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(0,71,94)',
                    },
                },
            },
        },
        categoryAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        valueAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        logAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        timeAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#999999',
                },
                emphasis: {
                    borderColor: '#666666',
                },
            },
        },
        legend: {
            textStyle: {
                color: '#000000',
            },
        },
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: '#cccccc',
                    width: 1,
                },
                crossStyle: {
                    color: '#cccccc',
                    width: 1,
                },
            },
        },
        timeline: {
            lineStyle: {
                color: '#666666',
                width: 1,
            },
            itemStyle: {
                normal: {
                    color: '#666666',
                    borderWidth: 1,
                },
                emphasis: {
                    color: '#f7ac4f',
                },
            },
            controlStyle: {
                normal: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
                emphasis: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
            },
            checkpointStyle: {
                color: '#f7ac4f',
                borderColor: 'rgba(254,198,77,0.6)',
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#666666',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#666666',
                    },
                },
            },
        },
        visualMap: {
            color: ['#305b9e', '#0076a9', '#1d8daa', '#51a2a8', '#7fb5aa', '#aac6b4', '#CFD8C8', '#ECEBE4'],
        },
        dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: {
                color: '#aaaaaa',
            },
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable */
    var californiaCoast = {
        color: ['#0098c9', '#6ab1d7', '#a0cae4', '#ffbb9c', '#fd986d', '#f3753f'],
        backgroundColor: 'transparent',
        textStyle: {},
        title: {
            textStyle: {
                color: '#aaaaaa',
            },
            subtextStyle: {
                color: '#aaaaaa',
            },
        },
        tree: {
            itemStyle: {
                color: '#ffbb9c',
                borderColor: '#0098c9',
            },
        },
        line: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        radar: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        bar: {
            itemStyle: {
                normal: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
                emphasis: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
            },
        },
        pie: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        scatter: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        boxplot: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        parallel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        sankey: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        funnel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        gauge: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: '#f3753f',
                    color0: 'transparent',
                    borderColor: '#f3753f',
                    borderColor0: '#0098c9',
                    borderWidth: '2',
                },
            },
        },
        graph: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color: '#aaaaaa',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
            color: ['#0098c9', '#6ab1d7', '#a0cae4', '#ffbb9c', '#fd986d', '#f3753f'],
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
        map: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#394851',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(57,72,81)',
                    },
                },
            },
        },
        geo: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#394851',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(57,72,81)',
                    },
                },
            },
        },
        categoryAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        valueAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        logAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        timeAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#999999',
                },
                emphasis: {
                    borderColor: '#666666',
                },
            },
        },
        legend: {
            textStyle: {
                color: '#aaaaaa',
            },
        },
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: '#cccccc',
                    width: 1,
                },
                crossStyle: {
                    color: '#cccccc',
                    width: 1,
                },
            },
        },
        timeline: {
            lineStyle: {
                color: '#666666',
                width: 1,
            },
            itemStyle: {
                normal: {
                    color: '#666666',
                    borderWidth: 1,
                },
                emphasis: {
                    color: '#fec64d',
                },
            },
            controlStyle: {
                normal: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
                emphasis: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
            },
            checkpointStyle: {
                color: '#f3753f',
                borderColor: 'rgba(255,178,72,0.41)',
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#666666',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#666666',
                    },
                },
            },
        },
        visualMap: {
            color: ['#0098c9', '#6ab1d7', '#a0cae4', '#FFBB9C', '#FD986D', '#F3753F'],
        },
        dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#fec64d',
            handleSize: '100%',
            textStyle: {
                color: '#aaaaaa',
            },
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable */
    var hawaiianSunrise = {
        color: ['#00b2b1', '#69c6c4', '#a0d9d7', '#ffbb9c', '#fd986d', '#f3753f'],
        backgroundColor: 'transparent',
        textStyle: {},
        title: {
            textStyle: {
                color: '#aaaaaa',
            },
            subtextStyle: {
                color: '#aaaaaa',
            },
        },
        tree: {
            itemStyle: {
                color: '#a0d9d7',
                borderColor: '#00b2b1',
            },
        },
        line: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        radar: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        bar: {
            itemStyle: {
                normal: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
                emphasis: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
            },
        },
        pie: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        scatter: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        boxplot: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        parallel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        sankey: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        funnel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        gauge: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: '#f3753f',
                    color0: 'transparent',
                    borderColor: '#f3753f',
                    borderColor0: '#00b2b1',
                    borderWidth: '2',
                },
            },
        },
        graph: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color: '#aaaaaa',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
            color: ['#00b2b1', '#69c6c4', '#a0d9d7', '#ffbb9c', '#fd986d', '#f3753f'],
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
        map: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#007373',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(0,115,115)',
                    },
                },
            },
        },
        geo: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#007373',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(0,115,115)',
                    },
                },
            },
        },
        categoryAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        valueAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        logAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        timeAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#999999',
                },
                emphasis: {
                    borderColor: '#666666',
                },
            },
        },
        legend: {
            textStyle: {
                color: '#000000',
            },
        },
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: '#cccccc',
                    width: 1,
                },
                crossStyle: {
                    color: '#cccccc',
                    width: 1,
                },
            },
        },
        timeline: {
            lineStyle: {
                color: '#666666',
                width: 1,
            },
            itemStyle: {
                normal: {
                    color: '#666666',
                    borderWidth: 1,
                },
                emphasis: {
                    color: '#fec64d',
                },
            },
            controlStyle: {
                normal: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
                emphasis: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
            },
            checkpointStyle: {
                color: '#f3753f',
                borderColor: 'rgba(255,178,72,0.41)',
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#666666',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#666666',
                    },
                },
            },
        },
        visualMap: {
            color: ['#00b2b1', '#69c6c4', '#a0d9d7', '#ffbb9c', '#fd986d', '#f3753f'],
        },
        dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#fec64d',
            handleSize: '100%',
            textStyle: {
                color: '#aaaaaa',
            },
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable */
    var passionFlower = {
        color: ['#007e7d', '#977ed2', '#d58a9c', '#97b6eb', '#ceccbb', '#f2dfd8'],
        backgroundColor: 'transparent',
        textStyle: {},
        title: {
            textStyle: {
                color: '#aaaaaa',
            },
            subtextStyle: {
                color: '#aaaaaa',
            },
        },
        tree: {
            itemStyle: {
                color: '#f2dfd8',
                borderColor: '#007e7d',
            },
        },
        line: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        radar: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        bar: {
            itemStyle: {
                normal: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
                emphasis: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
            },
        },
        pie: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        scatter: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        boxplot: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        parallel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        sankey: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        funnel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        gauge: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: '#977ed2',
                    color0: 'transparent',
                    borderColor: '#977ed2',
                    borderColor0: '#007e7d',
                    borderWidth: '2',
                },
            },
        },
        graph: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color: '#aaaaaa',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
            color: ['#007e7d', '#977ed2', '#d58a9c', '#97b6eb', '#ceccbb', '#f2dfd8'],
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
        map: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#00475e',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(0,71,94)',
                    },
                },
            },
        },
        geo: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#00475e',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(0,71,94)',
                    },
                },
            },
        },
        categoryAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        valueAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        logAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        timeAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#999999',
                },
                emphasis: {
                    borderColor: '#666666',
                },
            },
        },
        legend: {
            textStyle: {
                color: '#999999',
            },
        },
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: '#cccccc',
                    width: 1,
                },
                crossStyle: {
                    color: '#cccccc',
                    width: 1,
                },
            },
        },
        timeline: {
            lineStyle: {
                color: '#666666',
                width: 1,
            },
            itemStyle: {
                normal: {
                    color: '#666666',
                    borderWidth: 1,
                },
                emphasis: {
                    color: '#f7ac4f',
                },
            },
            controlStyle: {
                normal: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
                emphasis: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
            },
            checkpointStyle: {
                color: '#f7ac4f',
                borderColor: 'rgba(254,198,77,0.6)',
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#666666',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#666666',
                    },
                },
            },
        },
        visualMap: {
            color: ['#007e7d', '#977ed2', '#d58a9c', '#97b6eb', '#ceccbb', '#f2dfd8'],
        },
        dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: {
                color: '#aaaaaa',
            },
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable */
    var razzleberryPie = {
        color: ['#523e85', '#8b4f8f', '#b96595', '#e0829a', '#ffa3a2', '#f9b8a3', '#f1ccb1', '#ebddc8'],
        backgroundColor: 'transparent',
        textStyle: {},
        title: {
            textStyle: {
                color: '#aaaaaa',
            },
            subtextStyle: {
                color: '#aaaaaa',
            },
        },
        tree: {
            itemStyle: {
                color: '#ffa3a2',
                borderColor: '#523e85',
            },
        },
        line: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        radar: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        bar: {
            itemStyle: {
                normal: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
                emphasis: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
            },
        },
        pie: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        scatter: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        boxplot: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        parallel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        sankey: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        funnel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        gauge: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: '#8b4f8f',
                    color0: '#ffa3a2',
                    borderColor: '#8b4f8f',
                    borderColor0: '#ffa3a2',
                    borderWidth: '2',
                },
            },
        },
        graph: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color: '#aaaaaa',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
            color: ['#523e85', '#8b4f8f', '#b96595', '#e0829a', '#ffa3a2', '#f9b8a3', '#f1ccb1', '#ebddc8'],
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
        map: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(255,178,72,1)',
                    borderColor: '#eb8146',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#523e85',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(82,62,133)',
                    },
                },
            },
        },
        geo: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(255,178,72,1)',
                    borderColor: '#eb8146',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#523e85',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(82,62,133)',
                    },
                },
            },
        },
        categoryAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        valueAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        logAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        timeAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#999999',
                },
                emphasis: {
                    borderColor: '#666666',
                },
            },
        },
        legend: {
            textStyle: {
                color: '#000000',
            },
        },
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: '#cccccc',
                    width: 1,
                },
                crossStyle: {
                    color: '#cccccc',
                    width: 1,
                },
            },
        },
        timeline: {
            lineStyle: {
                color: '#523e85',
                width: 1,
            },
            itemStyle: {
                normal: {
                    color: '#523e85',
                    borderWidth: 1,
                },
                emphasis: {
                    color: '#ffb248',
                },
            },
            controlStyle: {
                normal: {
                    color: '#523e85',
                    borderColor: '#523e85',
                    borderWidth: 0.5,
                },
                emphasis: {
                    color: '#523e85',
                    borderColor: '#523e85',
                    borderWidth: 0.5,
                },
            },
            checkpointStyle: {
                color: '#eb8146',
                borderColor: 'rgba(255,178,72,0.41)',
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#523e85',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#523e85',
                    },
                },
            },
        },
        visualMap: {
            color: ['#523e85', '#8b4f8f', '#b96595', '#e0829a', '#ffa3a2', '#f9b8a3', '#f1ccb1', '#ebddc8'],
        },
        dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: {
                color: '#aaaaaa',
            },
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable */
    var teradataClassic = {
        color: ['#005e7d', '#c54b17', '#009392', '#f5bb3c', '#0098c9', '#f58b5e', '#59cecd', '#fee2a6'],
        backgroundColor: 'transparent',
        textStyle: {},
        title: {
            textStyle: {
                color: '#aaaaaa',
            },
            subtextStyle: {
                color: '#aaaaaa',
            },
        },
        tree: {
            itemStyle: {
                color: '#fee2a6',
                borderColor: '#005e7d',
            },
        },
        line: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        radar: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        bar: {
            itemStyle: {
                normal: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
                emphasis: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
            },
        },
        pie: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        scatter: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        boxplot: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        parallel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        sankey: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        funnel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        gauge: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: '#0098c9',
                    color0: 'transparent',
                    borderColor: '#0098c9',
                    borderColor0: '#c54b17',
                    borderWidth: '2',
                },
            },
        },
        graph: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color: '#aaaaaa',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
            color: ['#005e7d', '#c54b17', '#009392', '#f5bb3c', '#0098c9', '#f58b5e', '#59cecd', '#fee2a6'],
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
        map: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#00475e',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(0,71,94)',
                    },
                },
            },
        },
        geo: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#00475e',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(0,71,94)',
                    },
                },
            },
        },
        categoryAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        valueAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        logAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        timeAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#999999',
                },
                emphasis: {
                    borderColor: '#666666',
                },
            },
        },
        legend: {
            textStyle: {
                color: '#999999',
            },
        },
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: '#cccccc',
                    width: 1,
                },
                crossStyle: {
                    color: '#cccccc',
                    width: 1,
                },
            },
        },
        timeline: {
            lineStyle: {
                color: '#666666',
                width: 1,
            },
            itemStyle: {
                normal: {
                    color: '#666666',
                    borderWidth: 1,
                },
                emphasis: {
                    color: '#f7ac4f',
                },
            },
            controlStyle: {
                normal: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
                emphasis: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
            },
            checkpointStyle: {
                color: '#f7ac4f',
                borderColor: 'rgba(254,198,77,0.6)',
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#666666',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#666666',
                    },
                },
            },
        },
        visualMap: {
            color: ['#005e7d', '#c54b17', '#009392', '#f5bb3c', '#0098c9', '#f58b5e', '#59cecd', '#fee2a6'],
        },
        dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: {
                color: '#aaaaaa',
            },
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable */
    var teradataDefault = {
        color: ['#4d5b62', '#008ab6', '#f3753f', '#2cc0bf', '#fed887'],
        backgroundColor: 'transparent',
        textStyle: {},
        title: {
            textStyle: {
                color: '#aaaaaa',
            },
            subtextStyle: {
                color: '#aaaaaa',
            },
        },
        tree: {
            itemStyle: {
                color: '#fed887',
                borderColor: '#4d5b62',
            },
        },
        line: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        radar: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        bar: {
            itemStyle: {
                normal: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
                emphasis: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
            },
        },
        pie: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        scatter: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        boxplot: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        parallel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        sankey: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        funnel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        gauge: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: '#977ed2',
                    color0: 'transparent',
                    borderColor: '#977ed2',
                    borderColor0: '#009d9c',
                    borderWidth: '2',
                },
            },
        },
        graph: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color: '#aaaaaa',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
            color: ['#4d5b62', '#008ab6', '#f3753f', '#2cc0bf', '#fed887'],
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
        map: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#00475e',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(0,71,94)',
                    },
                },
            },
        },
        geo: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#00475e',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(0,71,94)',
                    },
                },
            },
        },
        categoryAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        valueAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        logAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        timeAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#999999',
                },
                emphasis: {
                    borderColor: '#666666',
                },
            },
        },
        legend: {
            textStyle: {
                color: '#999999',
            },
        },
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: '#cccccc',
                    width: 1,
                },
                crossStyle: {
                    color: '#cccccc',
                    width: 1,
                },
            },
        },
        timeline: {
            lineStyle: {
                color: '#666666',
                width: 1,
            },
            itemStyle: {
                normal: {
                    color: '#666666',
                    borderWidth: 1,
                },
                emphasis: {
                    color: '#f7ac4f',
                },
            },
            controlStyle: {
                normal: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
                emphasis: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
            },
            checkpointStyle: {
                color: '#f7ac4f',
                borderColor: 'rgba(254,198,77,0.6)',
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#666666',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#666666',
                    },
                },
            },
        },
        visualMap: {
            color: ['#4d5b62', '#008ab6', '#f3753f', '#2cc0bf', '#fed887'],
        },
        dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#ffb248',
            handleSize: '100%',
            textStyle: {
                color: '#aaaaaa',
            },
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable */
    var urbanSunrise = {
        color: ['#667279', '#979ea4', '#caced0', '#ffbb9c', '#fd986d', '#F3753F'],
        backgroundColor: 'transparent',
        textStyle: {},
        title: {
            textStyle: {
                color: '#aaaaaa',
            },
            subtextStyle: {
                color: '#aaaaaa',
            },
        },
        tree: {
            itemStyle: {
                color: '#ffbb9c',
                borderColor: '#667279',
            },
        },
        line: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        radar: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        bar: {
            itemStyle: {
                normal: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
                emphasis: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
            },
        },
        pie: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        scatter: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        boxplot: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        parallel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        sankey: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        funnel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        gauge: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: '#f3753f',
                    color0: 'transparent',
                    borderColor: '#f3753f',
                    borderColor0: '#667279',
                    borderWidth: '2',
                },
            },
        },
        graph: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color: '#aaaaaa',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
            color: ['#667279', '#979ea4', '#caced0', '#ffbb9c', '#fd986d', '#F3753F'],
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
        map: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#667279',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(102,114,121)',
                    },
                },
            },
        },
        geo: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#667279',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(102,114,121)',
                    },
                },
            },
        },
        categoryAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        valueAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        logAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        timeAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#999999',
                },
                emphasis: {
                    borderColor: '#666666',
                },
            },
        },
        legend: {
            textStyle: {
                color: '#999999',
            },
        },
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: '#cccccc',
                    width: 1,
                },
                crossStyle: {
                    color: '#cccccc',
                    width: 1,
                },
            },
        },
        timeline: {
            lineStyle: {
                color: '#666666',
                width: 1,
            },
            itemStyle: {
                normal: {
                    color: '#666666',
                    borderWidth: 1,
                },
                emphasis: {
                    color: '#fec64d',
                },
            },
            controlStyle: {
                normal: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
                emphasis: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
            },
            checkpointStyle: {
                color: '#f3753f',
                borderColor: 'rgba(255,178,72,0.41)',
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#666666',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#666666',
                    },
                },
            },
        },
        visualMap: {
            color: ['#667279', '#979ea4', '#caced0', '#ffbb9c', '#fd986d', '#F3753F'],
        },
        dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#fec64d',
            handleSize: '100%',
            textStyle: {
                color: '#aaaaaa',
            },
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /* tslint:disable */
    var volcanicEruption = {
        color: ['#565a83', '#7c5c91', '#a85a90', '#cf5880', '#ea5f64', '#f3753f'],
        backgroundColor: 'transparent',
        textStyle: {},
        title: {
            textStyle: {
                color: '#aaaaaa',
            },
            subtextStyle: {
                color: '#aaaaaa',
            },
        },
        tree: {
            itemStyle: {
                color: '#a85a90',
                borderColor: '#565a83',
            },
        },
        line: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        radar: {
            itemStyle: {
                normal: {
                    borderWidth: '2',
                },
            },
            lineStyle: {
                normal: {
                    width: '2',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
        },
        bar: {
            itemStyle: {
                normal: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
                emphasis: {
                    barBorderWidth: 0,
                    barBorderColor: '#ccc',
                },
            },
        },
        pie: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        scatter: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        boxplot: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        parallel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        sankey: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        funnel: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        gauge: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
                emphasis: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
        },
        candlestick: {
            itemStyle: {
                normal: {
                    color: '#f3753f',
                    color0: 'transparent',
                    borderColor: '#f3753f',
                    borderColor0: '#667279',
                    borderWidth: '2',
                },
            },
        },
        graph: {
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    borderColor: '#ccc',
                },
            },
            lineStyle: {
                normal: {
                    width: 1,
                    color: '#aaaaaa',
                },
            },
            symbolSize: '6',
            symbol: 'emptyCircle',
            smooth: true,
            color: ['#565a83', '#7c5c91', '#a85a90', '#cf5880', '#ea5f64', '#f3753f'],
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
        map: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#667279',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(102,114,121)',
                    },
                },
            },
        },
        geo: {
            itemStyle: {
                normal: {
                    areaColor: '#f3f3f3',
                    borderColor: '#999999',
                    borderWidth: 0.5,
                },
                emphasis: {
                    areaColor: 'rgba(254,198,77,1)',
                    borderColor: '#ecaf2b',
                    borderWidth: 1,
                },
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#667279',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: 'rgb(102,114,121)',
                    },
                },
            },
        },
        categoryAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        valueAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        logAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        timeAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#aaaaaa',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#333',
                },
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#999999',
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#e6e6e6'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.05)', 'rgba(200,200,200,0.02)'],
                },
            },
        },
        toolbox: {
            iconStyle: {
                normal: {
                    borderColor: '#999999',
                },
                emphasis: {
                    borderColor: '#666666',
                },
            },
        },
        legend: {
            textStyle: {
                color: '#000000',
            },
        },
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: '#cccccc',
                    width: 1,
                },
                crossStyle: {
                    color: '#cccccc',
                    width: 1,
                },
            },
        },
        timeline: {
            lineStyle: {
                color: '#666666',
                width: 1,
            },
            itemStyle: {
                normal: {
                    color: '#666666',
                    borderWidth: 1,
                },
                emphasis: {
                    color: '#fec64d',
                },
            },
            controlStyle: {
                normal: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
                emphasis: {
                    color: '#666666',
                    borderColor: '#666666',
                    borderWidth: 0.5,
                },
            },
            checkpointStyle: {
                color: '#f3753f',
                borderColor: 'rgba(255,178,72,0.41)',
            },
            label: {
                normal: {
                    textStyle: {
                        color: '#666666',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#666666',
                    },
                },
            },
        },
        visualMap: {
            color: ['#565a83', '#7c5c91', '#a85a90', '#cf5880', '#ea5f64', '#f3753f'],
        },
        dataZoom: {
            backgroundColor: 'rgba(255,255,255,0)',
            dataBackgroundColor: 'rgba(255,178,72,0.5)',
            fillerColor: 'rgba(255,178,72,0.15)',
            handleColor: '#fec64d',
            handleSize: '100%',
            textStyle: {
                color: '#aaaaaa',
            },
        },
        markPoint: {
            label: {
                normal: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
                emphasis: {
                    textStyle: {
                        color: '#ffffff',
                    },
                },
            },
        },
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * Function used to register a theme into echarts
     * Theme name and theme object needed as stated in
     * https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.registerTheme
     * @param {?} themeName
     * @param {?} theme
     * @return {?}
     */
    function registerTheme(themeName, theme) {
        echarts.registerTheme(themeName, theme);
    }
    /**
     * Function to register all default themes
     * \@internal
     * @return {?}
     */
    function registerDefaultThemes() {
        registerTheme('aqua-splash', aquaSplash);
        registerTheme('california-coast', californiaCoast);
        registerTheme('hawaiian-sunrise', hawaiianSunrise);
        registerTheme('passion-flower', passionFlower);
        registerTheme('razzleberry-pie', razzleberryPie);
        registerTheme('teradata-classic', teradataClassic);
        registerTheme('teradata-default', teradataDefault);
        registerTheme('urban-sunrise', urbanSunrise);
        registerTheme('volcanic-eruption', volcanicEruption);
    }
    /**
     * Returns all the theme names bundled with covalent echarts.
     * @return {?}
     */
    function getThemes() {
        return [
            'aqua-splash',
            'california-coast',
            'hawaiian-sunrise',
            'passion-flower',
            'razzleberry-pie',
            'teradata-classic',
            'teradata-default',
            'urban-sunrise',
            'volcanic-eruption',
        ];
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdChartComponent = /** @class */ (function () {
        function TdChartComponent(_changeDetectorRef, _elementRef, _optionsService) {
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._optionsService = _optionsService;
            this._destroy = new rxjs.Subject();
            this._widthSubject = new rxjs.Subject();
            this._heightSubject = new rxjs.Subject();
            this._state = {};
            this._options = {};
            /**
             * config?: any;
             * Sets the JS config object if you choose to not use the property inputs.
             * Note: [config] input properties will override input values
             * https://ecomfe.github.io/echarts-doc/public/en/option.html
             */
            this.config = {};
            /**
             * renderer: 'svg' | 'canvas'
             * sets the rendering mode for the chart.
             * defaults to 'canvas'
             * https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Render%20by%20Canvas%20or%20SVG
             */
            this.renderer = 'canvas';
            this.chartClick = new core.EventEmitter();
            this.chartDblclick = new core.EventEmitter();
            this.chartContextmenu = new core.EventEmitter();
            this.magicTypeChanged = new core.EventEmitter();
            this.dataViewChanged = new core.EventEmitter();
            this.datazoom = new core.EventEmitter();
            this.restore = new core.EventEmitter();
        }
        Object.defineProperty(TdChartComponent.prototype, "instance", {
            /**
             * returns the echarts instance
             */
            get: /**
             * returns the echarts instance
             * @return {?}
             */
            function () {
                return this._instance;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdChartComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
        function () {
            this._initializeChart();
        };
        /**
         * @param {?} changes
         * @return {?}
         */
        TdChartComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
        function (changes) {
            if (this._instance) {
                // destroy and reinitialize chart only when `renderer`, `themeName` and `group` changes
                if (changes.renderer || changes.themeName || changes.group) {
                    this._disposeChart();
                    this._initializeChart();
                }
                else {
                    this.render();
                }
            }
        };
        /**
         * @return {?}
         */
        TdChartComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._disposeChart();
            this._destroy.unsubscribe();
        };
        /**
         * @return {?}
         */
        TdChartComponent.prototype.render = /**
         * @return {?}
         */
        function () {
            if (this._instance) {
                this._instance.setOption(assignDefined(this._state, {
                    grid: {
                        show: true,
                        left: '20',
                        right: '20',
                        bottom: (this.config.toolbox && typeof this.config.toolbox.bottom === 'number') ||
                            (this._options.toolbox && typeof this._options.toolbox.bottom === 'number')
                            ? '40'
                            : '10',
                        top: (this.config.toolbox && typeof this.config.toolbox.top === 'number') ||
                            (this._options.toolbox && typeof this._options.toolbox.top === 'number')
                            ? '40'
                            : '10',
                        containLabel: true,
                    },
                }, this._options, this.config ? this.config : {}), true);
                this._changeDetectorRef.markForCheck();
            }
        };
        /**
         * @private
         * @return {?}
         */
        TdChartComponent.prototype._initializeChart = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            this._instance = echarts.init(this._elementRef.nativeElement, this.themeName, {
                renderer: this.renderer,
            });
            rxjs.fromEvent(this._instance, 'click')
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                _this.chartClick.next(params);
            }));
            rxjs.fromEvent(this._instance, 'dblclick')
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                _this.chartDblclick.next(params);
            }));
            rxjs.fromEvent(this._instance, 'contextmenu')
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                _this.chartContextmenu.next(params);
            }));
            rxjs.fromEvent(this._instance, 'magictypechanged')
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                _this.magicTypeChanged.next(params);
            }));
            rxjs.fromEvent(this._instance, 'dataviewchanged')
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                _this.dataViewChanged.next(params);
            }));
            rxjs.fromEvent(this._instance, 'datazoom')
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                _this.datazoom.next(params);
            }));
            rxjs.fromEvent(this._instance, 'restore')
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @param {?} params
             * @return {?}
             */
            function (params) {
                _this.restore.next(params);
            }));
            if (this.group) {
                this._instance.group = this.group;
                echarts.connect(this.group);
                this._changeDetectorRef.markForCheck();
            }
            rxjs.merge(rxjs.fromEvent(window, 'resize').pipe(operators.debounceTime(100)), this._widthSubject.asObservable().pipe(operators.distinctUntilChanged()), this._heightSubject.asObservable().pipe(operators.distinctUntilChanged()))
                .pipe(operators.takeUntil(this._destroy), operators.debounceTime(100))
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (_this._instance) {
                    _this._instance.resize();
                    _this._changeDetectorRef.markForCheck();
                }
            }));
            this._optionsService
                .listen()
                .pipe(operators.tap((/**
             * @param {?} options
             * @return {?}
             */
            function (options) {
                assignDefined(_this._options, options);
            })), operators.debounceTime(0), operators.takeUntil(this._destroy))
                .subscribe((/**
             * @return {?}
             */
            function () {
                _this.render();
            }));
            rxjs.timer(500, 250)
                .pipe(operators.takeUntil(this._destroy))
                .subscribe((/**
             * @return {?}
             */
            function () {
                if (_this._elementRef && _this._elementRef.nativeElement) {
                    _this._widthSubject.next(((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().width);
                    _this._heightSubject.next(((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().height);
                }
            }));
        };
        /**
         * @private
         * @return {?}
         */
        TdChartComponent.prototype._disposeChart = /**
         * @private
         * @return {?}
         */
        function () {
            if (this._instance) {
                this._instance.clear();
                echarts.dispose(this._instance);
            }
            this._destroy.next(true);
        };
        TdChartComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart',
                        template: '',
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        providers: [CHART_PROVIDER],
                        styles: [":host{display:block;width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        TdChartComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: TdChartOptionsService }
        ]; };
        TdChartComponent.propDecorators = {
            config: [{ type: core.Input }],
            group: [{ type: core.Input }],
            themeName: [{ type: core.Input }],
            renderer: [{ type: core.Input }],
            chartClick: [{ type: core.Output }],
            chartDblclick: [{ type: core.Output }],
            chartContextmenu: [{ type: core.Output }],
            magicTypeChanged: [{ type: core.Output }],
            dataViewChanged: [{ type: core.Output }],
            datazoom: [{ type: core.Output }],
            restore: [{ type: core.Output }]
        };
        return TdChartComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdChartComponent.prototype._destroy;
        /**
         * @type {?}
         * @private
         */
        TdChartComponent.prototype._widthSubject;
        /**
         * @type {?}
         * @private
         */
        TdChartComponent.prototype._heightSubject;
        /**
         * @type {?}
         * @private
         */
        TdChartComponent.prototype._instance;
        /**
         * @type {?}
         * @private
         */
        TdChartComponent.prototype._state;
        /**
         * @type {?}
         * @private
         */
        TdChartComponent.prototype._options;
        /**
         * config?: any;
         * Sets the JS config object if you choose to not use the property inputs.
         * Note: [config] input properties will override input values
         * https://ecomfe.github.io/echarts-doc/public/en/option.html
         * @type {?}
         */
        TdChartComponent.prototype.config;
        /**
         * group?: string
         * group name in which the chart instance will be connected to
         * https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.connect
         * @type {?}
         */
        TdChartComponent.prototype.group;
        /**
         * themeName?: string
         * theme to be applied into chart instance
         * https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Overview%20of%20Style%20Customization
         * @type {?}
         */
        TdChartComponent.prototype.themeName;
        /**
         * renderer: 'svg' | 'canvas'
         * sets the rendering mode for the chart.
         * defaults to 'canvas'
         * https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Render%20by%20Canvas%20or%20SVG
         * @type {?}
         */
        TdChartComponent.prototype.renderer;
        /** @type {?} */
        TdChartComponent.prototype.chartClick;
        /** @type {?} */
        TdChartComponent.prototype.chartDblclick;
        /** @type {?} */
        TdChartComponent.prototype.chartContextmenu;
        /** @type {?} */
        TdChartComponent.prototype.magicTypeChanged;
        /** @type {?} */
        TdChartComponent.prototype.dataViewChanged;
        /** @type {?} */
        TdChartComponent.prototype.datazoom;
        /** @type {?} */
        TdChartComponent.prototype.restore;
        /**
         * @type {?}
         * @private
         */
        TdChartComponent.prototype._changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        TdChartComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdChartComponent.prototype._optionsService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @abstract
     */
    var TdChartAxisComponent = /** @class */ (function () {
        function TdChartAxisComponent(_axisOption, _optionsService) {
            this._axisOption = _axisOption;
            this._optionsService = _optionsService;
            this._state = {};
            this.config = {};
            this.show = true;
        }
        /**
         * @return {?}
         */
        TdChartAxisComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._setOptions();
        };
        /**
         * @return {?}
         */
        TdChartAxisComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this._setOptions();
        };
        /**
         * @return {?}
         */
        TdChartAxisComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._removeOption();
        };
        /**
         * @private
         * @return {?}
         */
        TdChartAxisComponent.prototype._setOptions = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var config = assignDefined(this._state, {
                id: this.id,
                show: this.show,
                gridIndex: this.gridIndex,
                position: this.position,
                offset: this.offset,
                type: this.type,
                name: this.name,
                nameLocation: this.nameLocation,
                nameTextStyle: this.nameTextStyle,
                nameGap: this.nameGap,
                nameRotate: this.nameRotate,
                inverse: this.inverse,
                boundaryGap: this.boundaryGap,
                min: this.min,
                max: this.max,
                scale: this.scale,
                minInterval: this.minInterval,
                interval: this.interval,
                logBase: this.logBase,
                silent: this.silent,
                triggerEvent: this.triggerEvent,
                axisLine: this.axisLine,
                axisTick: this.axisTick,
                axisLabel: this.axisLabel,
                splitLine: this.splitLine,
                splitArea: this.splitArea,
                data: this.data,
                axisPointer: this.axisPointer,
                zlevel: this.zlevel,
                z: this.z,
            }, this.config ? this.config : {});
            this._optionsService.setArrayOption(this._axisOption, config);
        };
        /**
         * @private
         * @return {?}
         */
        TdChartAxisComponent.prototype._removeOption = /**
         * @private
         * @return {?}
         */
        function () {
            this._optionsService.clearOption(this._axisOption);
        };
        TdChartAxisComponent.propDecorators = {
            config: [{ type: core.Input }],
            id: [{ type: core.Input }],
            show: [{ type: core.Input }],
            gridIndex: [{ type: core.Input }],
            offset: [{ type: core.Input }],
            type: [{ type: core.Input }],
            name: [{ type: core.Input }],
            nameLocation: [{ type: core.Input }],
            nameTextStyle: [{ type: core.Input }],
            nameGap: [{ type: core.Input }],
            nameRotate: [{ type: core.Input }],
            inverse: [{ type: core.Input }],
            boundaryGap: [{ type: core.Input }],
            min: [{ type: core.Input }],
            max: [{ type: core.Input }],
            scale: [{ type: core.Input }],
            minInterval: [{ type: core.Input }],
            interval: [{ type: core.Input }],
            logBase: [{ type: core.Input }],
            silent: [{ type: core.Input }],
            triggerEvent: [{ type: core.Input }],
            axisLine: [{ type: core.Input }],
            axisTick: [{ type: core.Input }],
            axisLabel: [{ type: core.Input }],
            splitLine: [{ type: core.Input }],
            splitArea: [{ type: core.Input }],
            data: [{ type: core.Input }],
            axisPointer: [{ type: core.Input }],
            zlevel: [{ type: core.Input }],
            z: [{ type: core.Input }]
        };
        return TdChartAxisComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdChartAxisComponent.prototype._state;
        /** @type {?} */
        TdChartAxisComponent.prototype.config;
        /** @type {?} */
        TdChartAxisComponent.prototype.id;
        /** @type {?} */
        TdChartAxisComponent.prototype.show;
        /** @type {?} */
        TdChartAxisComponent.prototype.gridIndex;
        /** @type {?} */
        TdChartAxisComponent.prototype.offset;
        /** @type {?} */
        TdChartAxisComponent.prototype.position;
        /** @type {?} */
        TdChartAxisComponent.prototype.type;
        /** @type {?} */
        TdChartAxisComponent.prototype.name;
        /** @type {?} */
        TdChartAxisComponent.prototype.nameLocation;
        /** @type {?} */
        TdChartAxisComponent.prototype.nameTextStyle;
        /** @type {?} */
        TdChartAxisComponent.prototype.nameGap;
        /** @type {?} */
        TdChartAxisComponent.prototype.nameRotate;
        /** @type {?} */
        TdChartAxisComponent.prototype.inverse;
        /** @type {?} */
        TdChartAxisComponent.prototype.boundaryGap;
        /** @type {?} */
        TdChartAxisComponent.prototype.min;
        /** @type {?} */
        TdChartAxisComponent.prototype.max;
        /** @type {?} */
        TdChartAxisComponent.prototype.scale;
        /** @type {?} */
        TdChartAxisComponent.prototype.minInterval;
        /** @type {?} */
        TdChartAxisComponent.prototype.interval;
        /** @type {?} */
        TdChartAxisComponent.prototype.logBase;
        /** @type {?} */
        TdChartAxisComponent.prototype.silent;
        /** @type {?} */
        TdChartAxisComponent.prototype.triggerEvent;
        /** @type {?} */
        TdChartAxisComponent.prototype.axisLine;
        /** @type {?} */
        TdChartAxisComponent.prototype.axisTick;
        /** @type {?} */
        TdChartAxisComponent.prototype.axisLabel;
        /** @type {?} */
        TdChartAxisComponent.prototype.splitLine;
        /** @type {?} */
        TdChartAxisComponent.prototype.splitArea;
        /** @type {?} */
        TdChartAxisComponent.prototype.data;
        /** @type {?} */
        TdChartAxisComponent.prototype.axisPointer;
        /** @type {?} */
        TdChartAxisComponent.prototype.zlevel;
        /** @type {?} */
        TdChartAxisComponent.prototype.z;
        /**
         * @type {?}
         * @private
         */
        TdChartAxisComponent.prototype._axisOption;
        /**
         * @type {?}
         * @private
         */
        TdChartAxisComponent.prototype._optionsService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdChartXAxisComponent = /** @class */ (function (_super) {
        __extends(TdChartXAxisComponent, _super);
        function TdChartXAxisComponent(_optionsService) {
            return _super.call(this, 'xAxis', _optionsService) || this;
        }
        TdChartXAxisComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-x-axis',
                        template: '',
                        inputs: [
                            'config',
                            'id',
                            'show',
                            'gridIndex',
                            'offset',
                            'type',
                            'name',
                            'nameLocation',
                            'nameTextStyle',
                            'nameGap',
                            'nameRotate',
                            'inverse',
                            'boundaryGap',
                            'min',
                            'max',
                            'scale',
                            'minInterval',
                            'interval',
                            'logBase',
                            'silent',
                            'triggerEvent',
                            'axisLine',
                            'axisTick',
                            'axisLabel',
                            'splitLine',
                            'splitArea',
                            'data',
                            'axisPointer',
                            'zlevel',
                            'z',
                        ],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdChartXAxisComponent.ctorParameters = function () { return [
            { type: TdChartOptionsService }
        ]; };
        TdChartXAxisComponent.propDecorators = {
            position: [{ type: core.Input }]
        };
        return TdChartXAxisComponent;
    }(TdChartAxisComponent));
    if (false) {
        /** @type {?} */
        TdChartXAxisComponent.prototype.position;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdChartYAxisComponent = /** @class */ (function (_super) {
        __extends(TdChartYAxisComponent, _super);
        function TdChartYAxisComponent(_optionsService) {
            return _super.call(this, 'yAxis', _optionsService) || this;
        }
        TdChartYAxisComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-y-axis',
                        template: '',
                        inputs: [
                            'config',
                            'id',
                            'show',
                            'gridIndex',
                            'offset',
                            'type',
                            'name',
                            'nameLocation',
                            'nameTextStyle',
                            'nameGap',
                            'nameRotate',
                            'inverse',
                            'boundaryGap',
                            'min',
                            'max',
                            'scale',
                            'minInterval',
                            'interval',
                            'logBase',
                            'silent',
                            'triggerEvent',
                            'axisLine',
                            'axisTick',
                            'axisLabel',
                            'splitLine',
                            'splitArea',
                            'data',
                            'axisPointer',
                            'zlevel',
                            'z',
                        ],
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdChartYAxisComponent.ctorParameters = function () { return [
            { type: TdChartOptionsService }
        ]; };
        TdChartYAxisComponent.propDecorators = {
            position: [{ type: core.Input }]
        };
        return TdChartYAxisComponent;
    }(TdChartAxisComponent));
    if (false) {
        /** @type {?} */
        TdChartYAxisComponent.prototype.position;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdDatasetComponent = /** @class */ (function () {
        function TdDatasetComponent(_optionsService) {
            this._optionsService = _optionsService;
            this._state = {};
            this.config = {};
        }
        /**
         * @return {?}
         */
        TdDatasetComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this._setOptions();
        };
        /**
         * @return {?}
         */
        TdDatasetComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._removeOption();
        };
        /**
         * @private
         * @return {?}
         */
        TdDatasetComponent.prototype._setOptions = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var config = assignDefined(this._state, {
                id: this.id,
                source: this.source,
                dimensions: this.dimensions,
                sourceHeader: this.sourceHeader,
            }, this.config ? this.config : {});
            // set dataset configuration in parent chart and render new configurations
            this._optionsService.setOption('dataset', config);
        };
        /**
         * @private
         * @return {?}
         */
        TdDatasetComponent.prototype._removeOption = /**
         * @private
         * @return {?}
         */
        function () {
            this._optionsService.clearOption('dataset');
        };
        TdDatasetComponent.decorators = [
            { type: core.Component, args: [{
                        template: '',
                        selector: 'td-chart-dataset',
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdDatasetComponent.ctorParameters = function () { return [
            { type: TdChartOptionsService }
        ]; };
        TdDatasetComponent.propDecorators = {
            id: [{ type: core.Input }],
            config: [{ type: core.Input }],
            source: [{ type: core.Input }],
            dimensions: [{ type: core.Input }],
            sourceHeader: [{ type: core.Input }]
        };
        return TdDatasetComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdDatasetComponent.prototype._state;
        /** @type {?} */
        TdDatasetComponent.prototype.id;
        /** @type {?} */
        TdDatasetComponent.prototype.config;
        /** @type {?} */
        TdDatasetComponent.prototype.source;
        /** @type {?} */
        TdDatasetComponent.prototype.dimensions;
        /** @type {?} */
        TdDatasetComponent.prototype.sourceHeader;
        /**
         * @type {?}
         * @private
         */
        TdDatasetComponent.prototype._optionsService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var BASE_MODULE_COMPONENTS = [
        TdChartComponent,
        TdChartXAxisComponent,
        TdChartYAxisComponent,
        TdDatasetComponent,
    ];
    registerDefaultThemes();
    var CovalentBaseEchartsModule = /** @class */ (function () {
        function CovalentBaseEchartsModule() {
        }
        CovalentBaseEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [BASE_MODULE_COMPONENTS],
                        exports: [BASE_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentBaseEchartsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     * @template T
     */
    function ITdSeries() { }
    if (false) {
        /** @type {?|undefined} */
        ITdSeries.prototype.id;
        /** @type {?|undefined} */
        ITdSeries.prototype.name;
        /** @type {?|undefined} */
        ITdSeries.prototype.color;
        /** @type {?|undefined} */
        ITdSeries.prototype.type;
        /** @type {?|undefined} */
        ITdSeries.prototype.tooltip;
    }
    /**
     * @abstract
     * @template T
     */
    var TdSeriesComponent = /** @class */ (function () {
        function TdSeriesComponent(type, optionsService) {
            this.optionsService = optionsService;
            this._state = {};
            this._options = {};
            this.config = {};
            this._type = type;
        }
        Object.defineProperty(TdSeriesComponent.prototype, "type", {
            get: /**
             * @return {?}
             */
            function () {
                return this._type;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        TdSeriesComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this._setOptions();
        };
        /**
         * @return {?}
         */
        TdSeriesComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this._setOptions();
        };
        /**
         * @return {?}
         */
        TdSeriesComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._removeOption();
        };
        /**
         * @param {?} option
         * @param {?} value
         * @return {?}
         */
        TdSeriesComponent.prototype.setStateOption = /**
         * @param {?} option
         * @param {?} value
         * @return {?}
         */
        function (option, value) {
            this._options[option] = value;
            this._setOptions();
        };
        /**
         * @param {?} option
         * @return {?}
         */
        TdSeriesComponent.prototype.removeStateOption = /**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            /* tslint:disable-next-line */
            this._options[option] = null;
            this._setOptions();
        };
        /**
         * @private
         * @return {?}
         */
        TdSeriesComponent.prototype._setOptions = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var config = assignDefined(this._state, {
                id: this.id,
                type: this.type,
                name: this.name,
                color: this.color,
                data: this.data,
                animation: this.animation,
                animationThreshold: this.animationThreshold,
                animationDuration: this.animationDuration,
                animationEasing: this.animationEasing,
                animationDelay: this.animationDelay,
                animationDurationUpdate: this.animationDurationUpdate,
                animationEasingUpdate: this.animationEasingUpdate,
                animationDelayUpdate: this.animationDelayUpdate,
                tooltip: this.tooltip,
            }, this.getConfig(), this._options, this.config ? this.config : {});
            this.optionsService.setArrayOption('series', config);
        };
        /**
         * @private
         * @return {?}
         */
        TdSeriesComponent.prototype._removeOption = /**
         * @private
         * @return {?}
         */
        function () {
            this.optionsService.removeArrayOption('series', this._state);
        };
        TdSeriesComponent.propDecorators = {
            config: [{ type: core.Input }],
            id: [{ type: core.Input }],
            name: [{ type: core.Input }],
            color: [{ type: core.Input }],
            data: [{ type: core.Input }],
            animation: [{ type: core.Input }],
            animationThreshold: [{ type: core.Input }],
            animationDuration: [{ type: core.Input }],
            animationEasing: [{ type: core.Input }],
            animationDelay: [{ type: core.Input }],
            animationDurationUpdate: [{ type: core.Input }],
            animationEasingUpdate: [{ type: core.Input }],
            animationDelayUpdate: [{ type: core.Input }],
            tooltip: [{ type: core.Input }]
        };
        return TdSeriesComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdSeriesComponent.prototype._type;
        /** @type {?} */
        TdSeriesComponent.prototype._state;
        /** @type {?} */
        TdSeriesComponent.prototype._options;
        /** @type {?} */
        TdSeriesComponent.prototype.config;
        /** @type {?} */
        TdSeriesComponent.prototype.id;
        /** @type {?} */
        TdSeriesComponent.prototype.name;
        /** @type {?} */
        TdSeriesComponent.prototype.color;
        /** @type {?} */
        TdSeriesComponent.prototype.data;
        /** @type {?} */
        TdSeriesComponent.prototype.animation;
        /** @type {?} */
        TdSeriesComponent.prototype.animationThreshold;
        /** @type {?} */
        TdSeriesComponent.prototype.animationDuration;
        /** @type {?} */
        TdSeriesComponent.prototype.animationEasing;
        /** @type {?} */
        TdSeriesComponent.prototype.animationDelay;
        /** @type {?} */
        TdSeriesComponent.prototype.animationDurationUpdate;
        /** @type {?} */
        TdSeriesComponent.prototype.animationEasingUpdate;
        /** @type {?} */
        TdSeriesComponent.prototype.animationDelayUpdate;
        /** @type {?} */
        TdSeriesComponent.prototype.tooltip;
        /**
         * @type {?}
         * @protected
         */
        TdSeriesComponent.prototype.optionsService;
        /**
         * @abstract
         * @return {?}
         */
        TdSeriesComponent.prototype.getConfig = function () { };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
        function TdChartSeriesBarComponent(_optionsService) {
            return _super.call(this, 'bar', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesBarComponent.prototype.getConfig = /**
         * @return {?}
         */
        function () {
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
                                provide: base.TdSeriesComponent,
                                useExisting: core.forwardRef((/**
                                 * @return {?}
                                 */
                                function () { return TdChartSeriesBarComponent; })),
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
        return TdChartSeriesBarComponent;
    }(base.TdSeriesComponent));
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
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var BAR_MODULE_COMPONENTS = [TdChartSeriesBarComponent];
    var CovalentBarEchartsModule = /** @class */ (function () {
        function CovalentBarEchartsModule() {
        }
        CovalentBarEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [BAR_MODULE_COMPONENTS],
                        exports: [BAR_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentBarEchartsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ITdPieSeries() { }
    if (false) {
        /** @type {?|undefined} */
        ITdPieSeries.prototype.legendHoverLink;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.hoverAnimation;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.hoverOffset;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.selectedMode;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.selectedOffset;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.clockwise;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.startAngle;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.minAngle;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.minShowLabelAngle;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.roseType;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.avoidLabelOverlap;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.stillShowZeroSum;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.cursor;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.labelLine;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.Label;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.itemStyle;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.emphasis;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.seriesLayoutBy;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.datasetIndex;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.data;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.markPoint;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.markLine;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.markArea;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.Zlevel;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.z;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.center;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.radius;
        /** @type {?|undefined} */
        ITdPieSeries.prototype.silent;
    }
    var TdChartSeriesPieComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesPieComponent, _super);
        function TdChartSeriesPieComponent(_optionsService) {
            return _super.call(this, 'pie', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesPieComponent.prototype.getConfig = /**
         * @return {?}
         */
        function () {
            return {
                legendHoverLink: this.legendHoverLink,
                label: this.label,
                itemStyle: this.itemStyle,
                emphasis: this.emphasis,
                selectedMode: this.selectedMode,
                selectedOffset: this.selectedOffset,
                clockwise: this.clockwise,
                startAngle: this.startAngle,
                minAngle: this.minAngle,
                minShowLabelAngle: this.minShowLabelAngle,
                roseType: this.roseType,
                avoidLabelOverlap: this.avoidLabelOverlap,
                stillShowZeroSum: this.stillShowZeroSum,
                cursor: this.cursor,
                labelLine: this.labelLine,
                seriesLayoutBy: this.seriesLayoutBy,
                datasetIndex: this.datasetIndex,
                markPoint: this.markPoint,
                markLine: this.markLine,
                markArea: this.markArea,
                zlevel: this.zlevel,
                z: this.z,
                center: this.center,
                radius: this.radius,
            };
        };
        TdChartSeriesPieComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-pie]',
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
                                function () { return TdChartSeriesPieComponent; })),
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesPieComponent.ctorParameters = function () { return [
            { type: base.TdChartOptionsService }
        ]; };
        TdChartSeriesPieComponent.propDecorators = {
            legendHoverLink: [{ type: core.Input }],
            hoverAnimation: [{ type: core.Input }],
            hoverOffset: [{ type: core.Input }],
            selectedMode: [{ type: core.Input }],
            selectedOffset: [{ type: core.Input }],
            clockwise: [{ type: core.Input }],
            startAngle: [{ type: core.Input }],
            minAngle: [{ type: core.Input }],
            minShowLabelAngle: [{ type: core.Input }],
            roseType: [{ type: core.Input }],
            avoidLabelOverlap: [{ type: core.Input }],
            stillShowZeroSum: [{ type: core.Input }],
            cursor: [{ type: core.Input }],
            labelLine: [{ type: core.Input }],
            label: [{ type: core.Input }],
            itemStyle: [{ type: core.Input }],
            emphasis: [{ type: core.Input }],
            seriesLayoutBy: [{ type: core.Input }],
            datasetIndex: [{ type: core.Input }],
            markPoint: [{ type: core.Input }],
            markLine: [{ type: core.Input }],
            markArea: [{ type: core.Input }],
            zlevel: [{ type: core.Input }],
            z: [{ type: core.Input }],
            center: [{ type: core.Input }],
            radius: [{ type: core.Input }]
        };
        return TdChartSeriesPieComponent;
    }(base.TdSeriesComponent));
    if (false) {
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.legendHoverLink;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.hoverAnimation;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.hoverOffset;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.selectedMode;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.selectedOffset;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.clockwise;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.startAngle;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.minAngle;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.minShowLabelAngle;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.roseType;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.avoidLabelOverlap;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.stillShowZeroSum;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.cursor;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.labelLine;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.label;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.itemStyle;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.emphasis;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.seriesLayoutBy;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.datasetIndex;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.markPoint;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.markLine;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.markArea;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.zlevel;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.z;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.center;
        /** @type {?} */
        TdChartSeriesPieComponent.prototype.radius;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var PIE_MODULE_COMPONENTS = [TdChartSeriesPieComponent];
    var CovalentPieEchartsModule = /** @class */ (function () {
        function CovalentPieEchartsModule() {
        }
        CovalentPieEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [PIE_MODULE_COMPONENTS],
                        exports: [PIE_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentPieEchartsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

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

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ITdScatterSeries() { }
    if (false) {
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.coordinateSystem;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.xAxisIndex;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.yAxisIndex;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.polarIndex;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.geoIndex;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.calendarIndex;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.hoverAnimation;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.legendHoverLink;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.symbol;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.symbolSize;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.symbolRotate;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.symbolKeepAspect;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.symbolOffset;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.large;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.largeThreshold;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.cursor;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.connectNulls;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.clipOverflow;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.step;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.label;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.itemStyle;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.emphasis;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.progressive;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.progressiveThreshold;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.dimensions;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.encode;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.seriesLayoutBy;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.datasetIndex;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.data;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.markPoint;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.markLine;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.markArea;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.zlevel;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.z;
        /** @type {?|undefined} */
        ITdScatterSeries.prototype.silent;
    }
    var TdChartSeriesScatterComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesScatterComponent, _super);
        function TdChartSeriesScatterComponent(_optionsService) {
            return _super.call(this, 'scatter', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesScatterComponent.prototype.getConfig = /**
         * @return {?}
         */
        function () {
            return {
                coordinateSystem: this.coordinateSystem,
                xAxisIndex: this.xAxisIndex,
                yAxisIndex: this.yAxisIndex,
                polarIndex: this.polarIndex,
                geoIndex: this.geoIndex,
                calendarIndex: this.calendarIndex,
                hoverAnimation: this.hoverAnimation,
                legendHoverLink: this.legendHoverLink,
                symbol: this.symbol,
                symbolSize: this.symbolSize,
                symbolRotate: this.symbolRotate,
                symbolKeepAspect: this.symbolKeepAspect,
                symbolOffset: this.symbolOffset,
                large: this.large,
                largeThreshold: this.largeThreshold,
                cursor: this.cursor,
                label: this.label,
                itemStyle: this.itemStyle,
                emphasis: this.emphasis,
                progressive: this.progressive,
                progressiveThreshold: this.progressiveThreshold,
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
        TdChartSeriesScatterComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-scatter]',
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
                                function () { return TdChartSeriesScatterComponent; })),
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesScatterComponent.ctorParameters = function () { return [
            { type: base.TdChartOptionsService }
        ]; };
        TdChartSeriesScatterComponent.propDecorators = {
            coordinateSystem: [{ type: core.Input }],
            xAxisIndex: [{ type: core.Input }],
            yAxisIndex: [{ type: core.Input }],
            polarIndex: [{ type: core.Input }],
            geoIndex: [{ type: core.Input }],
            calendarIndex: [{ type: core.Input }],
            hoverAnimation: [{ type: core.Input }],
            legendHoverLink: [{ type: core.Input }],
            symbol: [{ type: core.Input }],
            symbolSize: [{ type: core.Input }],
            symbolRotate: [{ type: core.Input }],
            symbolKeepAspect: [{ type: core.Input }],
            symbolOffset: [{ type: core.Input }],
            large: [{ type: core.Input }],
            largeThreshold: [{ type: core.Input }],
            cursor: [{ type: core.Input }],
            label: [{ type: core.Input }],
            itemStyle: [{ type: core.Input }],
            emphasis: [{ type: core.Input }],
            progressive: [{ type: core.Input }],
            progressiveThreshold: [{ type: core.Input }],
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
        return TdChartSeriesScatterComponent;
    }(base.TdSeriesComponent));
    if (false) {
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.coordinateSystem;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.xAxisIndex;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.yAxisIndex;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.polarIndex;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.geoIndex;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.calendarIndex;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.hoverAnimation;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.legendHoverLink;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.symbol;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.symbolSize;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.symbolRotate;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.symbolKeepAspect;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.symbolOffset;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.large;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.largeThreshold;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.cursor;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.label;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.itemStyle;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.emphasis;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.progressive;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.progressiveThreshold;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.dimensions;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.encode;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.seriesLayoutBy;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.datasetIndex;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.markPoint;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.markLine;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.markArea;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.zlevel;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.z;
        /** @type {?} */
        TdChartSeriesScatterComponent.prototype.silent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var SCATTER_MODULE_COMPONENTS = [TdChartSeriesScatterComponent];
    var CovalentScatterEchartsModule = /** @class */ (function () {
        function CovalentScatterEchartsModule() {
        }
        CovalentScatterEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [SCATTER_MODULE_COMPONENTS],
                        exports: [SCATTER_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentScatterEchartsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ITdTreeEmphasisLineStyle() { }
    if (false) {
        /** @type {?|undefined} */
        ITdTreeEmphasisLineStyle.prototype.color;
        /** @type {?|undefined} */
        ITdTreeEmphasisLineStyle.prototype.width;
        /** @type {?|undefined} */
        ITdTreeEmphasisLineStyle.prototype.curveness;
    }
    /**
     * @record
     */
    function ITdTreeEmphasis() { }
    if (false) {
        /** @type {?} */
        ITdTreeEmphasis.prototype.lineStyle;
    }
    /**
     * @record
     */
    function ITdTreeLeaves() { }
    if (false) {
        /** @type {?|undefined} */
        ITdTreeLeaves.prototype.label;
        /** @type {?|undefined} */
        ITdTreeLeaves.prototype.itemStyle;
        /** @type {?} */
        ITdTreeLeaves.prototype.emphasis;
    }
    /**
     * @record
     */
    function ITdTreeSeries() { }
    if (false) {
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.zlevel;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.z;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.left;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.top;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.right;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.bottom;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.width;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.height;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.layout;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.orient;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.symbol;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.symbolSize;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.symbolRotate;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.symbolKeepAspect;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.symbolOffset;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.roam;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.expandAndCollapse;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.initialTreeDepth;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.itemStyle;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.label;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.lineStyle;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.leaves;
        /** @type {?|undefined} */
        ITdTreeSeries.prototype.emphasis;
        /** @type {?} */
        ITdTreeSeries.prototype.data;
    }
    var TdChartSeriesTreeComponent = /** @class */ (function (_super) {
        __extends(TdChartSeriesTreeComponent, _super);
        function TdChartSeriesTreeComponent(_optionsService) {
            return _super.call(this, 'tree', _optionsService) || this;
        }
        /**
         * @return {?}
         */
        TdChartSeriesTreeComponent.prototype.getConfig = /**
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
                layout: this.layout,
                orient: this.orient,
                symbol: this.symbol,
                symbolSize: this.symbolSize,
                symbolRotate: this.symbolRotate,
                symbolKeepAspect: this.symbolKeepAspect,
                roam: this.roam,
                expandAndCollapse: this.expandAndCollapse,
                initialTreeDepth: this.initialTreeDepth,
                itemStyle: this.itemStyle,
                label: this.label,
                lineStyle: this.lineStyle,
                leaves: this.leaves,
                emphasis: this.emphasis,
            };
        };
        TdChartSeriesTreeComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series[td-tree]',
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
                                function () { return TdChartSeriesTreeComponent; })),
                            },
                        ]
                    }] }
        ];
        /** @nocollapse */
        TdChartSeriesTreeComponent.ctorParameters = function () { return [
            { type: base.TdChartOptionsService }
        ]; };
        TdChartSeriesTreeComponent.propDecorators = {
            zlevel: [{ type: core.Input }],
            z: [{ type: core.Input }],
            left: [{ type: core.Input }],
            top: [{ type: core.Input }],
            right: [{ type: core.Input }],
            bottom: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            layout: [{ type: core.Input }],
            orient: [{ type: core.Input }],
            symbol: [{ type: core.Input }],
            symbolSize: [{ type: core.Input }],
            symbolRotate: [{ type: core.Input }],
            symbolKeepAspect: [{ type: core.Input }],
            roam: [{ type: core.Input }],
            expandAndCollapse: [{ type: core.Input }],
            initialTreeDepth: [{ type: core.Input }],
            itemStyle: [{ type: core.Input }],
            label: [{ type: core.Input }],
            lineStyle: [{ type: core.Input }],
            leaves: [{ type: core.Input }],
            emphasis: [{ type: core.Input }]
        };
        return TdChartSeriesTreeComponent;
    }(base.TdSeriesComponent));
    if (false) {
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.zlevel;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.z;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.left;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.top;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.right;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.bottom;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.width;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.height;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.layout;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.orient;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.symbol;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.symbolSize;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.symbolRotate;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.symbolKeepAspect;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.roam;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.expandAndCollapse;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.initialTreeDepth;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.itemStyle;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.label;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.lineStyle;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.leaves;
        /** @type {?} */
        TdChartSeriesTreeComponent.prototype.emphasis;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TREE_MODULE_COMPONENTS = [TdChartSeriesTreeComponent];
    var CovalentTreeEchartsModule = /** @class */ (function () {
        function CovalentTreeEchartsModule() {
        }
        CovalentTreeEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TREE_MODULE_COMPONENTS],
                        exports: [TREE_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentTreeEchartsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdTooltipContext = /** @class */ (function () {
        function TdTooltipContext() {
        }
        return TdTooltipContext;
    }());
    if (false) {
        /** @type {?} */
        TdTooltipContext.prototype.$implicit;
        /** @type {?} */
        TdTooltipContext.prototype.ticket;
    }
    var TdChartTooltipFormatterDirective = /** @class */ (function () {
        function TdChartTooltipFormatterDirective() {
        }
        TdChartTooltipFormatterDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ng-template[tdTooltipFormatter]',
                    },] }
        ];
        return TdChartTooltipFormatterDirective;
    }());
    var TdChartTooltipComponent = /** @class */ (function () {
        function TdChartTooltipComponent(_changeDetectorRef, _elementRef, _optionsService) {
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._optionsService = _optionsService;
            this._state = {};
            this._context = new TdTooltipContext();
            this.config = {};
            this.show = true;
            this.trigger = 'axis';
            this.showContent = true;
            this.alwaysShowContent = false;
            this.triggerOn = 'mousemove|click';
            this.showDelay = 0;
            this.hideDelay = 0;
            this.enterable = false;
            this.confine = false;
            this.transitionDuration = 0.5;
            // series
            this.backgroundColor = 'rgba(50,50,50,0.7)'; // series
            // series
            this.borderColor = '#333'; // series
            // series
            this.borderWidth = 0; // series
            // series
            this.padding = 5; // series
            // series
            this.textStyle = {
                // series
                color: '#FFF',
            };
        }
        /**
         * @return {?}
         */
        TdChartTooltipComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this._setOptions();
        };
        /**
         * @return {?}
         */
        TdChartTooltipComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._removeOption();
        };
        /**
         * @private
         * @return {?}
         */
        TdChartTooltipComponent.prototype._setOptions = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var config = base.assignDefined(this._state, {
                show: this.show,
                trigger: this.trigger,
                axisPointer: this.axisPointer,
                showContent: this.showContent,
                alwaysShowContent: this.alwaysShowContent,
                triggerOn: this.triggerOn,
                showDelay: this.showDelay,
                hideDelay: this.hideDelay,
                enterable: this.enterable,
                confine: this.confine,
                transitionDuration: this.transitionDuration,
                position: this.position,
                formatter: this.formatter ? this.formatter : this.formatterTemplate ? this._formatter() : undefined,
                backgroundColor: this.backgroundColor,
                borderColor: this.borderColor,
                borderWidth: this.borderWidth,
                padding: this.padding,
                textStyle: this.textStyle,
                extraCssText: this.extraCssText,
            }, this.config ? this.config : {});
            // set tooltip configuration in parent chart and render new configurations
            this._optionsService.setOption('tooltip', config);
        };
        /**
         * @private
         * @return {?}
         */
        TdChartTooltipComponent.prototype._removeOption = /**
         * @private
         * @return {?}
         */
        function () {
            this._optionsService.clearOption('tooltip');
        };
        /**
         * @private
         * @return {?}
         */
        TdChartTooltipComponent.prototype._formatter = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            return (/**
             * @param {?} params
             * @param {?} ticket
             * @param {?} callback
             * @return {?}
             */
            function (params, ticket, callback) {
                _this._context = {
                    $implicit: params,
                    ticket: ticket,
                };
                // timeout set since we need to set the HTML at the end of the angular lifecycle when
                // the tooltip delay is more than 0
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    callback(ticket, ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML);
                }));
                _this._changeDetectorRef.markForCheck();
                return ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML;
            });
        };
        TdChartTooltipComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-tooltip',
                        template: "<ng-template #tooltipContent [ngTemplateOutlet]=\"formatterTemplate\" [ngTemplateOutletContext]=\"_context\"></ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdChartTooltipComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: base.TdChartOptionsService }
        ]; };
        TdChartTooltipComponent.propDecorators = {
            config: [{ type: core.Input }],
            show: [{ type: core.Input }],
            trigger: [{ type: core.Input }],
            axisPointer: [{ type: core.Input }],
            showContent: [{ type: core.Input }],
            alwaysShowContent: [{ type: core.Input }],
            triggerOn: [{ type: core.Input }],
            showDelay: [{ type: core.Input }],
            hideDelay: [{ type: core.Input }],
            enterable: [{ type: core.Input }],
            renderMode: [{ type: core.Input }],
            confine: [{ type: core.Input }],
            transitionDuration: [{ type: core.Input }],
            position: [{ type: core.Input }],
            formatter: [{ type: core.Input }],
            backgroundColor: [{ type: core.Input }],
            borderColor: [{ type: core.Input }],
            borderWidth: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            textStyle: [{ type: core.Input }],
            extraCssText: [{ type: core.Input }],
            formatterTemplate: [{ type: core.ContentChild, args: [TdChartTooltipFormatterDirective, { read: core.TemplateRef, static: false },] }],
            fullTemplate: [{ type: core.ViewChild, args: ['tooltipContent', { static: true },] }]
        };
        return TdChartTooltipComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdChartTooltipComponent.prototype._state;
        /** @type {?} */
        TdChartTooltipComponent.prototype._context;
        /** @type {?} */
        TdChartTooltipComponent.prototype.config;
        /** @type {?} */
        TdChartTooltipComponent.prototype.show;
        /** @type {?} */
        TdChartTooltipComponent.prototype.trigger;
        /** @type {?} */
        TdChartTooltipComponent.prototype.axisPointer;
        /** @type {?} */
        TdChartTooltipComponent.prototype.showContent;
        /** @type {?} */
        TdChartTooltipComponent.prototype.alwaysShowContent;
        /** @type {?} */
        TdChartTooltipComponent.prototype.triggerOn;
        /** @type {?} */
        TdChartTooltipComponent.prototype.showDelay;
        /** @type {?} */
        TdChartTooltipComponent.prototype.hideDelay;
        /** @type {?} */
        TdChartTooltipComponent.prototype.enterable;
        /** @type {?} */
        TdChartTooltipComponent.prototype.renderMode;
        /** @type {?} */
        TdChartTooltipComponent.prototype.confine;
        /** @type {?} */
        TdChartTooltipComponent.prototype.transitionDuration;
        /** @type {?} */
        TdChartTooltipComponent.prototype.position;
        /** @type {?} */
        TdChartTooltipComponent.prototype.formatter;
        /** @type {?} */
        TdChartTooltipComponent.prototype.backgroundColor;
        /** @type {?} */
        TdChartTooltipComponent.prototype.borderColor;
        /** @type {?} */
        TdChartTooltipComponent.prototype.borderWidth;
        /** @type {?} */
        TdChartTooltipComponent.prototype.padding;
        /** @type {?} */
        TdChartTooltipComponent.prototype.textStyle;
        /** @type {?} */
        TdChartTooltipComponent.prototype.extraCssText;
        /** @type {?} */
        TdChartTooltipComponent.prototype.formatterTemplate;
        /** @type {?} */
        TdChartTooltipComponent.prototype.fullTemplate;
        /**
         * @type {?}
         * @private
         */
        TdChartTooltipComponent.prototype._changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        TdChartTooltipComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdChartTooltipComponent.prototype._optionsService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdSeriesTooltipComponent = /** @class */ (function () {
        function TdSeriesTooltipComponent(_changeDetectorRef, _elementRef, _seriesComponent) {
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._seriesComponent = _seriesComponent;
            this._state = {};
            this._context = new TdTooltipContext();
            this.backgroundColor = 'rgba(50,50,50,0.7)';
            this.borderColor = '#333';
            this.borderWidth = 0;
            this.padding = 5;
            this.textStyle = {
                color: '#FFF',
            };
        }
        /**
         * @return {?}
         */
        TdSeriesTooltipComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this._setOptions();
        };
        /**
         * @return {?}
         */
        TdSeriesTooltipComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._removeOption();
        };
        /**
         * @private
         * @return {?}
         */
        TdSeriesTooltipComponent.prototype._setOptions = /**
         * @private
         * @return {?}
         */
        function () {
            /** @type {?} */
            var config = base.assignDefined(this._state, {
                position: this.position,
                backgroundColor: this.backgroundColor,
                borderColor: this.borderColor,
                borderWidth: this.borderWidth,
                padding: this.padding,
                textStyle: this.textStyle,
                extraCssText: this.extraCssText,
                formatter: this.formatter ? this.formatter : this.formatterTemplate ? this._formatter() : undefined,
            }, this.config ? this.config : {});
            // set series tooltip configuration in parent chart and render new configurations
            this._seriesComponent.setStateOption('tooltip', config);
        };
        /**
         * Formatter for tooltip
         *
         */
        /**
         * Formatter for tooltip
         *
         * @private
         * @return {?}
         */
        TdSeriesTooltipComponent.prototype._formatter = /**
         * Formatter for tooltip
         *
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            return (/**
             * @param {?} params
             * @param {?} ticket
             * @param {?} callback
             * @return {?}
             */
            function (params, ticket, callback) {
                _this._context = {
                    $implicit: params,
                    ticket: ticket,
                };
                // timeout set since we need to set the HTML at the end of the angular lifecycle when
                // the tooltip delay is more than 0
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    callback(ticket, ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML);
                }));
                _this._changeDetectorRef.markForCheck();
                return ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML;
            });
        };
        /**
         * @private
         * @return {?}
         */
        TdSeriesTooltipComponent.prototype._removeOption = /**
         * @private
         * @return {?}
         */
        function () {
            this._seriesComponent.removeStateOption('tooltip');
        };
        TdSeriesTooltipComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series-tooltip',
                        template: "<ng-template #tooltipContent [ngTemplateOutlet]=\"formatterTemplate\" [ngTemplateOutletContext]=\"_context\"></ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdSeriesTooltipComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: base.TdSeriesComponent }
        ]; };
        TdSeriesTooltipComponent.propDecorators = {
            config: [{ type: core.Input }],
            formatter: [{ type: core.Input }],
            position: [{ type: core.Input }],
            backgroundColor: [{ type: core.Input }],
            borderColor: [{ type: core.Input }],
            borderWidth: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            textStyle: [{ type: core.Input }],
            extraCssText: [{ type: core.Input }],
            formatterTemplate: [{ type: core.ContentChild, args: [TdChartTooltipFormatterDirective, { read: core.TemplateRef, static: false },] }],
            fullTemplate: [{ type: core.ViewChild, args: ['tooltipContent', { static: true },] }]
        };
        return TdSeriesTooltipComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdSeriesTooltipComponent.prototype._state;
        /** @type {?} */
        TdSeriesTooltipComponent.prototype._context;
        /** @type {?} */
        TdSeriesTooltipComponent.prototype.config;
        /** @type {?} */
        TdSeriesTooltipComponent.prototype.formatter;
        /** @type {?} */
        TdSeriesTooltipComponent.prototype.position;
        /** @type {?} */
        TdSeriesTooltipComponent.prototype.backgroundColor;
        /** @type {?} */
        TdSeriesTooltipComponent.prototype.borderColor;
        /** @type {?} */
        TdSeriesTooltipComponent.prototype.borderWidth;
        /** @type {?} */
        TdSeriesTooltipComponent.prototype.padding;
        /** @type {?} */
        TdSeriesTooltipComponent.prototype.textStyle;
        /** @type {?} */
        TdSeriesTooltipComponent.prototype.extraCssText;
        /** @type {?} */
        TdSeriesTooltipComponent.prototype.formatterTemplate;
        /** @type {?} */
        TdSeriesTooltipComponent.prototype.fullTemplate;
        /**
         * @type {?}
         * @private
         */
        TdSeriesTooltipComponent.prototype._changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        TdSeriesTooltipComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdSeriesTooltipComponent.prototype._seriesComponent;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TOOLTIP_MODULE_COMPONENTS = [
        TdChartTooltipComponent,
        TdChartTooltipFormatterDirective,
        TdSeriesTooltipComponent,
    ];
    var CovalentTooltipEchartsModule = /** @class */ (function () {
        function CovalentTooltipEchartsModule() {
        }
        CovalentTooltipEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TOOLTIP_MODULE_COMPONENTS],
                        exports: [TOOLTIP_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentTooltipEchartsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ITdAcceptedBrushTypes() { }
    if (false) {
        /** @type {?|undefined} */
        ITdAcceptedBrushTypes.prototype.rect;
        /** @type {?|undefined} */
        ITdAcceptedBrushTypes.prototype.polygon;
        /** @type {?|undefined} */
        ITdAcceptedBrushTypes.prototype.lineX;
        /** @type {?|undefined} */
        ITdAcceptedBrushTypes.prototype.lineY;
        /** @type {?|undefined} */
        ITdAcceptedBrushTypes.prototype.keep;
        /** @type {?|undefined} */
        ITdAcceptedBrushTypes.prototype.clear;
    }
    /**
     * @record
     */
    function ITdAcceptedMagicTypes() { }
    if (false) {
        /** @type {?|undefined} */
        ITdAcceptedMagicTypes.prototype.line;
        /** @type {?|undefined} */
        ITdAcceptedMagicTypes.prototype.bar;
        /** @type {?|undefined} */
        ITdAcceptedMagicTypes.prototype.stack;
        /** @type {?|undefined} */
        ITdAcceptedMagicTypes.prototype.tiled;
    }
    /**
     * @record
     */
    function ITdToolboxIconEmphasis() { }
    /**
     * @record
     */
    function ITdFeatureIconStyle() { }
    if (false) {
        /** @type {?|undefined} */
        ITdFeatureIconStyle.prototype.textPosition;
        /** @type {?|undefined} */
        ITdFeatureIconStyle.prototype.textAlign;
        /** @type {?|undefined} */
        ITdFeatureIconStyle.prototype.emphasis;
    }
    /**
     * @record
     */
    function ITdZoomTitles() { }
    if (false) {
        /** @type {?|undefined} */
        ITdZoomTitles.prototype.zoom;
        /** @type {?|undefined} */
        ITdZoomTitles.prototype.back;
    }
    /**
     * @record
     */
    function ITdSaveAsImage() { }
    if (false) {
        /** @type {?|undefined} */
        ITdSaveAsImage.prototype.type;
        /** @type {?|undefined} */
        ITdSaveAsImage.prototype.name;
        /** @type {?|undefined} */
        ITdSaveAsImage.prototype.backgroundColor;
        /** @type {?|undefined} */
        ITdSaveAsImage.prototype.excludeComponents;
        /** @type {?|undefined} */
        ITdSaveAsImage.prototype.show;
        /** @type {?|undefined} */
        ITdSaveAsImage.prototype.title;
        /** @type {?|undefined} */
        ITdSaveAsImage.prototype.icon;
        /** @type {?|undefined} */
        ITdSaveAsImage.prototype.iconStyle;
        /** @type {?|undefined} */
        ITdSaveAsImage.prototype.pixelRatio;
    }
    /**
     * @record
     */
    function ITdRestore() { }
    if (false) {
        /** @type {?|undefined} */
        ITdRestore.prototype.show;
        /** @type {?|undefined} */
        ITdRestore.prototype.title;
        /** @type {?|undefined} */
        ITdRestore.prototype.icon;
        /** @type {?|undefined} */
        ITdRestore.prototype.iconStyle;
    }
    /**
     * @record
     */
    function ITdDataView() { }
    if (false) {
        /** @type {?|undefined} */
        ITdDataView.prototype.show;
        /** @type {?|undefined} */
        ITdDataView.prototype.title;
        /** @type {?|undefined} */
        ITdDataView.prototype.icon;
        /** @type {?|undefined} */
        ITdDataView.prototype.iconStyle;
        /** @type {?|undefined} */
        ITdDataView.prototype.readOnly;
        /** @type {?|undefined} */
        ITdDataView.prototype.optionToContent;
        /** @type {?|undefined} */
        ITdDataView.prototype.contentToOption;
        /** @type {?|undefined} */
        ITdDataView.prototype.lang;
        /** @type {?|undefined} */
        ITdDataView.prototype.textareaColor;
        /** @type {?|undefined} */
        ITdDataView.prototype.textareaBorderColor;
        /** @type {?|undefined} */
        ITdDataView.prototype.textColor;
        /** @type {?|undefined} */
        ITdDataView.prototype.buttonColor;
        /** @type {?|undefined} */
        ITdDataView.prototype.buttonTextColor;
    }
    /**
     * @record
     */
    function ITdDataZoom() { }
    if (false) {
        /** @type {?|undefined} */
        ITdDataZoom.prototype.show;
        /** @type {?|undefined} */
        ITdDataZoom.prototype.title;
        /** @type {?|undefined} */
        ITdDataZoom.prototype.icon;
        /** @type {?|undefined} */
        ITdDataZoom.prototype.iconStyle;
        /** @type {?|undefined} */
        ITdDataZoom.prototype.xAxisIndex;
        /** @type {?|undefined} */
        ITdDataZoom.prototype.yAxisIndex;
    }
    /**
     * @record
     */
    function ITdMagicType() { }
    if (false) {
        /** @type {?|undefined} */
        ITdMagicType.prototype.show;
        /** @type {?|undefined} */
        ITdMagicType.prototype.type;
        /** @type {?|undefined} */
        ITdMagicType.prototype.title;
        /** @type {?|undefined} */
        ITdMagicType.prototype.icon;
        /** @type {?|undefined} */
        ITdMagicType.prototype.iconStyle;
        /** @type {?|undefined} */
        ITdMagicType.prototype.option;
        /** @type {?|undefined} */
        ITdMagicType.prototype.seriesIndex;
    }
    /**
     * @record
     */
    function ITdBrush() { }
    if (false) {
        /** @type {?|undefined} */
        ITdBrush.prototype.type;
        /** @type {?|undefined} */
        ITdBrush.prototype.icon;
        /** @type {?|undefined} */
        ITdBrush.prototype.title;
    }
    /**
     * @record
     */
    function ITdToolboxFeature() { }
    if (false) {
        /** @type {?|undefined} */
        ITdToolboxFeature.prototype.saveAsImage;
        /** @type {?|undefined} */
        ITdToolboxFeature.prototype.restore;
        /** @type {?|undefined} */
        ITdToolboxFeature.prototype.dataView;
        /** @type {?|undefined} */
        ITdToolboxFeature.prototype.dataZoom;
        /** @type {?|undefined} */
        ITdToolboxFeature.prototype.magicType;
        /** @type {?|undefined} */
        ITdToolboxFeature.prototype.brush;
    }
    var TdChartViewDataFormatterDirective = /** @class */ (function () {
        function TdChartViewDataFormatterDirective() {
        }
        TdChartViewDataFormatterDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ng-template[tdViewDataFormatter]',
                    },] }
        ];
        return TdChartViewDataFormatterDirective;
    }());
    var TdChartToolboxComponent = /** @class */ (function () {
        function TdChartToolboxComponent(_changeDetectorRef, _elementRef, _optionsService) {
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._optionsService = _optionsService;
            this._state = {};
            this.config = {};
            this.show = true;
            this.showTitle = true;
            this.transitionDuration = 0.5;
            this.left = 'auto';
            this.top = 'auto';
            this.right = 'auto';
            this.bottom = 'auto';
            this.width = 'auto';
            this.height = 'auto';
        }
        /**
         * @return {?}
         */
        TdChartToolboxComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
        function () {
            this._setOptions();
        };
        /**
         * @return {?}
         */
        TdChartToolboxComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
        function () {
            this._removeOption();
        };
        /**
         * @private
         * @return {?}
         */
        TdChartToolboxComponent.prototype._setOptions = /**
         * @private
         * @return {?}
         */
        function () {
            this._checkFormatterTemplate();
            /** @type {?} */
            var config = base.assignDefined(this._state, {
                show: this.show,
                name: this.trigger,
                orient: this.orient,
                itemSize: this.itemSize,
                itemGap: this.itemGap,
                showTitle: this.showTitle,
                label: this.label,
                feature: this.feature,
                iconStyle: this.iconStyle,
                zlevel: this.zlevel,
                z: this.z,
                transitionDuration: this.transitionDuration,
                left: this.left,
                top: this.top,
                right: this.right,
                bottom: this.bottom,
                width: this.width,
                height: this.height,
            }, this.config ? this.config : {});
            // set toolbox configuration in parent chart and render new configurations
            this._optionsService.setOption('toolbox', config);
        };
        /**
         * @private
         * @return {?}
         */
        TdChartToolboxComponent.prototype._removeOption = /**
         * @private
         * @return {?}
         */
        function () {
            this._optionsService.clearOption('toolbox');
        };
        /**
         * @private
         * @return {?}
         */
        TdChartToolboxComponent.prototype._checkFormatterTemplate = /**
         * @private
         * @return {?}
         */
        function () {
            if (this.formatterTemplate) {
                this.feature = __assign(__assign({}, this.feature), { dataView: __assign(__assign({}, this.feature.dataView), { optionToContent: this._optionToContentFormatter() }) });
            }
        };
        /**
         * @private
         * @return {?}
         */
        TdChartToolboxComponent.prototype._optionToContentFormatter = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            return (/**
             * @return {?}
             */
            function () {
                _this._changeDetectorRef.markForCheck();
                return ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML;
            });
        };
        TdChartToolboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-toolbox',
                        template: "<ng-template #toolboxContent [ngTemplateOutlet]=\"formatterTemplate\"></ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdChartToolboxComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: base.TdChartOptionsService }
        ]; };
        TdChartToolboxComponent.propDecorators = {
            config: [{ type: core.Input }],
            show: [{ type: core.Input }],
            trigger: [{ type: core.Input }],
            orient: [{ type: core.Input }],
            itemSize: [{ type: core.Input }],
            itemGap: [{ type: core.Input }],
            showTitle: [{ type: core.Input }],
            label: [{ type: core.Input }],
            feature: [{ type: core.Input }],
            iconStyle: [{ type: core.Input }],
            zlevel: [{ type: core.Input }],
            z: [{ type: core.Input }],
            transitionDuration: [{ type: core.Input }],
            left: [{ type: core.Input }],
            top: [{ type: core.Input }],
            right: [{ type: core.Input }],
            bottom: [{ type: core.Input }],
            width: [{ type: core.Input }],
            height: [{ type: core.Input }],
            formatterTemplate: [{ type: core.ContentChild, args: [TdChartViewDataFormatterDirective, { read: core.TemplateRef, static: false },] }],
            fullTemplate: [{ type: core.ViewChild, args: ['toolboxContent', { static: true },] }]
        };
        return TdChartToolboxComponent;
    }());
    if (false) {
        /**
         * @type {?}
         * @private
         */
        TdChartToolboxComponent.prototype._state;
        /** @type {?} */
        TdChartToolboxComponent.prototype.config;
        /** @type {?} */
        TdChartToolboxComponent.prototype.show;
        /** @type {?} */
        TdChartToolboxComponent.prototype.trigger;
        /** @type {?} */
        TdChartToolboxComponent.prototype.orient;
        /** @type {?} */
        TdChartToolboxComponent.prototype.itemSize;
        /** @type {?} */
        TdChartToolboxComponent.prototype.itemGap;
        /** @type {?} */
        TdChartToolboxComponent.prototype.showTitle;
        /** @type {?} */
        TdChartToolboxComponent.prototype.label;
        /** @type {?} */
        TdChartToolboxComponent.prototype.feature;
        /** @type {?} */
        TdChartToolboxComponent.prototype.iconStyle;
        /** @type {?} */
        TdChartToolboxComponent.prototype.zlevel;
        /** @type {?} */
        TdChartToolboxComponent.prototype.z;
        /** @type {?} */
        TdChartToolboxComponent.prototype.transitionDuration;
        /** @type {?} */
        TdChartToolboxComponent.prototype.left;
        /** @type {?} */
        TdChartToolboxComponent.prototype.top;
        /** @type {?} */
        TdChartToolboxComponent.prototype.right;
        /** @type {?} */
        TdChartToolboxComponent.prototype.bottom;
        /** @type {?} */
        TdChartToolboxComponent.prototype.width;
        /** @type {?} */
        TdChartToolboxComponent.prototype.height;
        /** @type {?} */
        TdChartToolboxComponent.prototype.formatterTemplate;
        /** @type {?} */
        TdChartToolboxComponent.prototype.fullTemplate;
        /**
         * @type {?}
         * @private
         */
        TdChartToolboxComponent.prototype._changeDetectorRef;
        /**
         * @type {?}
         * @private
         */
        TdChartToolboxComponent.prototype._elementRef;
        /**
         * @type {?}
         * @private
         */
        TdChartToolboxComponent.prototype._optionsService;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TOOLBOX_MODULE_COMPONENTS = [TdChartToolboxComponent, TdChartViewDataFormatterDirective];
    var CovalentToolboxEchartsModule = /** @class */ (function () {
        function CovalentToolboxEchartsModule() {
        }
        CovalentToolboxEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TOOLBOX_MODULE_COMPONENTS],
                        exports: [TOOLBOX_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentToolboxEchartsModule;
    }());

    exports.BAR_MODULE_COMPONENTS = BAR_MODULE_COMPONENTS;
    exports.BASE_MODULE_COMPONENTS = BASE_MODULE_COMPONENTS;
    exports.CovalentBarEchartsModule = CovalentBarEchartsModule;
    exports.CovalentBaseEchartsModule = CovalentBaseEchartsModule;
    exports.CovalentLineEchartsModule = CovalentLineEchartsModule;
    exports.CovalentPieEchartsModule = CovalentPieEchartsModule;
    exports.CovalentScatterEchartsModule = CovalentScatterEchartsModule;
    exports.CovalentToolboxEchartsModule = CovalentToolboxEchartsModule;
    exports.CovalentTooltipEchartsModule = CovalentTooltipEchartsModule;
    exports.CovalentTreeEchartsModule = CovalentTreeEchartsModule;
    exports.LINE_MODULE_COMPONENTS = LINE_MODULE_COMPONENTS;
    exports.PIE_MODULE_COMPONENTS = PIE_MODULE_COMPONENTS;
    exports.SCATTER_MODULE_COMPONENTS = SCATTER_MODULE_COMPONENTS;
    exports.TOOLBOX_MODULE_COMPONENTS = TOOLBOX_MODULE_COMPONENTS;
    exports.TOOLTIP_MODULE_COMPONENTS = TOOLTIP_MODULE_COMPONENTS;
    exports.TREE_MODULE_COMPONENTS = TREE_MODULE_COMPONENTS;
    exports.TdChartAxisComponent = TdChartAxisComponent;
    exports.TdChartComponent = TdChartComponent;
    exports.TdChartOptionsService = TdChartOptionsService;
    exports.TdChartSeriesBarComponent = TdChartSeriesBarComponent;
    exports.TdChartSeriesLineComponent = TdChartSeriesLineComponent;
    exports.TdChartSeriesPieComponent = TdChartSeriesPieComponent;
    exports.TdChartSeriesScatterComponent = TdChartSeriesScatterComponent;
    exports.TdChartSeriesTreeComponent = TdChartSeriesTreeComponent;
    exports.TdChartToolboxComponent = TdChartToolboxComponent;
    exports.TdChartTooltipComponent = TdChartTooltipComponent;
    exports.TdChartTooltipFormatterDirective = TdChartTooltipFormatterDirective;
    exports.TdChartViewDataFormatterDirective = TdChartViewDataFormatterDirective;
    exports.TdChartXAxisComponent = TdChartXAxisComponent;
    exports.TdChartYAxisComponent = TdChartYAxisComponent;
    exports.TdDatasetComponent = TdDatasetComponent;
    exports.TdSeriesComponent = TdSeriesComponent;
    exports.TdSeriesTooltipComponent = TdSeriesTooltipComponent;
    exports.TdTooltipContext = TdTooltipContext;
    exports.assignDefined = assignDefined;
    exports.getThemes = getThemes;
    exports.registerDefaultThemes = registerDefaultThemes;
    exports.registerTheme = registerTheme;
    exports.ɵa = CHART_PROVIDER_FACTORY;
    exports.ɵb = CHART_PROVIDER;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-echarts.umd.js.map
