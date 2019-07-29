(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('rxjs'), require('rxjs/operators'), require('echarts/lib/echarts'), require('zrender/lib/svg/svg')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/base', ['exports', '@angular/core', '@angular/common', 'rxjs', 'rxjs/operators', 'echarts/lib/echarts', 'zrender/lib/svg/svg'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.base = {}), global.ng.core, global.ng.common, global.rxjs, global.rxjs.operators, global.echarts));
}(this, function (exports, core, common, rxjs, operators, echarts) { 'use strict';

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
                    for (var _d = __values(Object.keys(source)), _e = _d.next(); !_e.done; _e = _d.next()) {
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
            config: [{ type: core.Input, args: ['config',] }],
            group: [{ type: core.Input, args: ['group',] }],
            themeName: [{ type: core.Input, args: ['themeName',] }],
            renderer: [{ type: core.Input, args: ['renderer',] }],
            chartClick: [{ type: core.Output, args: ['chartClick',] }],
            chartDblclick: [{ type: core.Output, args: ['chartDblclick',] }],
            chartContextmenu: [{ type: core.Output, args: ['chartContextmenu',] }],
            magicTypeChanged: [{ type: core.Output, args: ['magicTypeChanged',] }],
            dataViewChanged: [{ type: core.Output, args: ['dataViewChanged',] }],
            datazoom: [{ type: core.Output, args: ['datazoom',] }],
            restore: [{ type: core.Output, args: ['restore',] }]
        };
        return TdChartComponent;
    }());

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
            config: [{ type: core.Input, args: ['config',] }],
            id: [{ type: core.Input, args: ['id',] }],
            show: [{ type: core.Input, args: ['show',] }],
            gridIndex: [{ type: core.Input, args: ['gridIndex',] }],
            offset: [{ type: core.Input, args: ['offset',] }],
            type: [{ type: core.Input, args: ['type',] }],
            name: [{ type: core.Input, args: ['name',] }],
            nameLocation: [{ type: core.Input, args: ['nameLocation',] }],
            nameTextStyle: [{ type: core.Input, args: ['nameTextStyle',] }],
            nameGap: [{ type: core.Input, args: ['nameGap',] }],
            nameRotate: [{ type: core.Input, args: ['nameRotate',] }],
            inverse: [{ type: core.Input, args: ['inverse',] }],
            boundaryGap: [{ type: core.Input, args: ['boundaryGap',] }],
            min: [{ type: core.Input, args: ['min',] }],
            max: [{ type: core.Input, args: ['max',] }],
            scale: [{ type: core.Input, args: ['scale',] }],
            minInterval: [{ type: core.Input, args: ['minInterval',] }],
            interval: [{ type: core.Input, args: ['interval',] }],
            logBase: [{ type: core.Input, args: ['logBase',] }],
            silent: [{ type: core.Input, args: ['silent',] }],
            triggerEvent: [{ type: core.Input, args: ['triggerEvent',] }],
            axisLine: [{ type: core.Input, args: ['axisLine',] }],
            axisTick: [{ type: core.Input, args: ['axisTick',] }],
            axisLabel: [{ type: core.Input, args: ['axisLabel',] }],
            splitLine: [{ type: core.Input, args: ['splitLine',] }],
            splitArea: [{ type: core.Input, args: ['splitArea',] }],
            data: [{ type: core.Input, args: ['data',] }],
            axisPointer: [{ type: core.Input, args: ['axisPointer',] }],
            zlevel: [{ type: core.Input, args: ['zlevel',] }],
            z: [{ type: core.Input, args: ['z',] }]
        };
        return TdChartAxisComponent;
    }());

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
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdChartXAxisComponent.ctorParameters = function () { return [
            { type: TdChartOptionsService }
        ]; };
        TdChartXAxisComponent.propDecorators = {
            position: [{ type: core.Input, args: ['position',] }]
        };
        return TdChartXAxisComponent;
    }(TdChartAxisComponent));

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
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdChartYAxisComponent.ctorParameters = function () { return [
            { type: TdChartOptionsService }
        ]; };
        TdChartYAxisComponent.propDecorators = {
            position: [{ type: core.Input, args: ['position',] }]
        };
        return TdChartYAxisComponent;
    }(TdChartAxisComponent));

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
            id: [{ type: core.Input, args: ['id',] }],
            config: [{ type: core.Input, args: ['config',] }],
            source: [{ type: core.Input, args: ['source',] }],
            dimensions: [{ type: core.Input, args: ['dimensions',] }],
            sourceHeader: [{ type: core.Input, args: ['sourceHeader',] }]
        };
        return TdDatasetComponent;
    }());

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
            config: [{ type: core.Input, args: ['config',] }],
            id: [{ type: core.Input, args: ['id',] }],
            name: [{ type: core.Input, args: ['name',] }],
            color: [{ type: core.Input, args: ['color',] }],
            data: [{ type: core.Input, args: ['data',] }],
            animation: [{ type: core.Input, args: ['animation',] }],
            animationThreshold: [{ type: core.Input, args: ['animationThreshold',] }],
            animationDuration: [{ type: core.Input, args: ['animationDuration',] }],
            animationEasing: [{ type: core.Input, args: ['animationEasing',] }],
            animationDelay: [{ type: core.Input, args: ['animationDelay',] }],
            animationDurationUpdate: [{ type: core.Input, args: ['animationDurationUpdate',] }],
            animationEasingUpdate: [{ type: core.Input, args: ['animationEasingUpdate',] }],
            animationDelayUpdate: [{ type: core.Input, args: ['animationDelayUpdate',] }],
            tooltip: [{ type: core.Input, args: ['tooltip',] }]
        };
        return TdSeriesComponent;
    }());

    exports.BASE_MODULE_COMPONENTS = BASE_MODULE_COMPONENTS;
    exports.CHART_PROVIDER = CHART_PROVIDER;
    exports.CovalentBaseEchartsModule = CovalentBaseEchartsModule;
    exports.TdChartAxisComponent = TdChartAxisComponent;
    exports.TdChartComponent = TdChartComponent;
    exports.TdChartOptionsService = TdChartOptionsService;
    exports.TdChartXAxisComponent = TdChartXAxisComponent;
    exports.TdChartYAxisComponent = TdChartYAxisComponent;
    exports.TdDatasetComponent = TdDatasetComponent;
    exports.TdSeriesComponent = TdSeriesComponent;
    exports.assignDefined = assignDefined;
    exports.getThemes = getThemes;
    exports.registerDefaultThemes = registerDefaultThemes;
    exports.registerTheme = registerTheme;
    exports.ɵa = CHART_PROVIDER_FACTORY;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-echarts-base.umd.js.map
