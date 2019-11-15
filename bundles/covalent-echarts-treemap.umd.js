(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/chart/treemap'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/treemap', ['exports', '@angular/core', '@angular/common', 'echarts/lib/chart/treemap', '@covalent/echarts/base'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.treemap = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, (function (exports, core, common, treemap, base) { 'use strict';

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
     * ECHART OPTION DOCS
     * https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-treemap
     *
     * @record
     */
    function ITdTreemapEmphasisLineStyle() { }
    if (false) {
        /** @type {?|undefined} */
        ITdTreemapEmphasisLineStyle.prototype.color;
        /** @type {?|undefined} */
        ITdTreemapEmphasisLineStyle.prototype.width;
        /** @type {?|undefined} */
        ITdTreemapEmphasisLineStyle.prototype.curveness;
    }
    /**
     * @record
     */
    function ITdTreemapEmphasis() { }
    if (false) {
        /** @type {?} */
        ITdTreemapEmphasis.prototype.lineStyle;
    }
    /**
     * @record
     */
    function ITdTreemapUpperLabel() { }
    if (false) {
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.show;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.position;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.distance;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.rotate;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.offset;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.formatter;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.color;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.fontStyle;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.fontWeight;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.fontFamily;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.fontSize;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.align;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.verticalAlign;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.lineHeight;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.backgroundColor;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.borderColor;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.borderWidth;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.borderRadius;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.padding;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.shadowColor;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.shadowBlur;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.shadowOffsetX;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.shadowOffsetY;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.width;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.height;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.textBorderColor;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.textBorderWidth;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.textShadowColor;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.textShadowBlur;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.textShadowOffsetX;
        /** @type {?|undefined} */
        ITdTreemapUpperLabel.prototype.textShadowOffsetY;
        /** @type {?} */
        ITdTreemapUpperLabel.prototype.rich;
        /** @type {?} */
        ITdTreemapUpperLabel.prototype.ellipsis;
    }
    /**
     * @record
     */
    function ITdTreemapBreadcrumb() { }
    if (false) {
        /** @type {?|undefined} */
        ITdTreemapBreadcrumb.prototype.show;
        /** @type {?|undefined} */
        ITdTreemapBreadcrumb.prototype.left;
        /** @type {?|undefined} */
        ITdTreemapBreadcrumb.prototype.top;
        /** @type {?|undefined} */
        ITdTreemapBreadcrumb.prototype.right;
        /** @type {?|undefined} */
        ITdTreemapBreadcrumb.prototype.bottom;
        /** @type {?|undefined} */
        ITdTreemapBreadcrumb.prototype.height;
        /** @type {?|undefined} */
        ITdTreemapBreadcrumb.prototype.emptyItemWidth;
        /** @type {?|undefined} */
        ITdTreemapBreadcrumb.prototype.itemStyle;
        /** @type {?|undefined} */
        ITdTreemapBreadcrumb.prototype.emphasis;
    }
    /**
     * @record
     */
    function ITdTreemapSeries() { }
    if (false) {
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.zlevel;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.z;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.left;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.top;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.right;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.bottom;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.width;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.height;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.squareRatio;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.leafDepth;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.drillDownIcon;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.roam;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.nodeClick;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.zoomToNodeRatio;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.levels;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.silent;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.visualDimension;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.visualMin;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.visualMax;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.colorAlpha;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.colorSaturation;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.colorMappingBy;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.visibleMin;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.childrenVisibleMin;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.itemStyle;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.label;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.upperLabel;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.breadcrumb;
        /** @type {?|undefined} */
        ITdTreemapSeries.prototype.emphasis;
        /** @type {?} */
        ITdTreemapSeries.prototype.data;
    }
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
    if (false) {
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.config;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.id;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.name;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.data;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.zlevel;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.z;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.left;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.top;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.right;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.bottom;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.width;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.height;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.squareRatio;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.leafDepth;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.drillDownIcon;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.roam;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.nodeClick;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.zoomToNodeRatio;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.levels;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.silent;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.visualDimension;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.visualMin;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.visualMax;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.colorAlpha;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.colorSaturation;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.colorMappingBy;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.visibleMin;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.childrenVisibleMin;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.itemStyle;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.label;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.upperLabel;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.breadcrumb;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.emphasis;
        /** @type {?} */
        TdChartSeriesTreemapComponent.prototype.tooltip;
    }

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

})));
//# sourceMappingURL=covalent-echarts-treemap.umd.js.map
