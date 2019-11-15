import { Injectable, Optional, SkipSelf, EventEmitter, Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Input, Output, NgModule, forwardRef, Directive, ContentChild, TemplateRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject, fromEvent, merge, timer } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { registerTheme as registerTheme$1, init, connect, dispose } from 'echarts/lib/echarts';
import 'zrender/lib/svg/svg';
import 'echarts/lib/chart/bar';
import { TdSeriesComponent as TdSeriesComponent$1, TdChartOptionsService as TdChartOptionsService$1, assignDefined as assignDefined$1 } from '@covalent/echarts/base';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/tree';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/toolbox';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdChartOptionsService {
    constructor() {
        this._options = {};
        this._optionsSubject = new BehaviorSubject(this._options);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    setOption(option, value) {
        /** @type {?} */
        const options = {};
        options[option] = value;
        Object.assign(this._options, options);
        this._optionsSubject.next(this._options);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    setArrayOption(option, value) {
        /** @type {?} */
        let prevValue = this.getOption(option);
        if (prevValue) {
            /** @type {?} */
            const index = prevValue.indexOf(value);
            index > -1 ? (prevValue[index] = value) : prevValue.push(value);
        }
        else {
            prevValue = [value];
        }
        this.setOption(option, prevValue);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    removeArrayOption(option, value) {
        /** @type {?} */
        let prevValue = this.getOption(option);
        if (prevValue) {
            /** @type {?} */
            const index = prevValue.indexOf(value);
            if (index > -1) {
                /* tslint:disable-next-line */
                prevValue[index] = null;
            }
            else {
                prevValue = [];
            }
        }
        this.setOption(option, prevValue);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getOption(option) {
        return this._options[option];
    }
    /**
     * @param {?} option
     * @return {?}
     */
    clearOption(option) {
        /* tslint:disable-next-line */
        this.setOption(option, null);
    }
    /**
     * @return {?}
     */
    listen() {
        return this._optionsSubject.asObservable();
    }
}
TdChartOptionsService.decorators = [
    { type: Injectable }
];
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
const CHART_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdChartOptionsService,
    deps: [[new Optional(), new SkipSelf(), TdChartOptionsService]],
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
function assignDefined(target, ...sources) {
    /** @type {?} */
    const keys = new Set();
    for (const source of sources) {
        for (const key of Object.keys(source)) {
            keys.add(key);
            /** @type {?} */
            const val = source[key];
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
    // delete keys that are not in any source
    for (const key of Object.keys(target)) {
        if (!keys.has(key)) {
            delete target[key];
        }
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
    registerTheme$1(themeName, theme);
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
class TdChartComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _optionsService
     */
    constructor(_changeDetectorRef, _elementRef, _optionsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._optionsService = _optionsService;
        this._destroy = new Subject();
        this._widthSubject = new Subject();
        this._heightSubject = new Subject();
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
        this.chartClick = new EventEmitter();
        this.chartDblclick = new EventEmitter();
        this.chartContextmenu = new EventEmitter();
        this.magicTypeChanged = new EventEmitter();
        this.dataViewChanged = new EventEmitter();
        this.datazoom = new EventEmitter();
        this.restore = new EventEmitter();
    }
    /**
     * returns the echarts instance
     * @return {?}
     */
    get instance() {
        return this._instance;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._initializeChart();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._disposeChart();
        this._destroy.unsubscribe();
    }
    /**
     * @return {?}
     */
    render() {
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
    }
    /**
     * @private
     * @return {?}
     */
    _initializeChart() {
        this._instance = init(this._elementRef.nativeElement, this.themeName, {
            renderer: this.renderer,
        });
        fromEvent(this._instance, 'click')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.chartClick.next(params);
        }));
        fromEvent(this._instance, 'dblclick')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.chartDblclick.next(params);
        }));
        fromEvent(this._instance, 'contextmenu')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.chartContextmenu.next(params);
        }));
        fromEvent(this._instance, 'magictypechanged')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.magicTypeChanged.next(params);
        }));
        fromEvent(this._instance, 'dataviewchanged')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.dataViewChanged.next(params);
        }));
        fromEvent(this._instance, 'datazoom')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.datazoom.next(params);
        }));
        fromEvent(this._instance, 'restore')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.restore.next(params);
        }));
        if (this.group) {
            this._instance.group = this.group;
            connect(this.group);
            this._changeDetectorRef.markForCheck();
        }
        merge(fromEvent(window, 'resize').pipe(debounceTime(100)), this._widthSubject.asObservable().pipe(distinctUntilChanged()), this._heightSubject.asObservable().pipe(distinctUntilChanged()))
            .pipe(takeUntil(this._destroy), debounceTime(100))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this._instance) {
                this._instance.resize();
                this._changeDetectorRef.markForCheck();
            }
        }));
        this._optionsService
            .listen()
            .pipe(tap((/**
         * @param {?} options
         * @return {?}
         */
        (options) => {
            assignDefined(this._options, options);
        })), debounceTime(0), takeUntil(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.render();
        }));
        timer(500, 250)
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this._elementRef && this._elementRef.nativeElement) {
                this._widthSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().width);
                this._heightSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _disposeChart() {
        if (this._instance) {
            this._instance.clear();
            dispose(this._instance);
        }
        this._destroy.next(true);
    }
}
TdChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [CHART_PROVIDER],
                styles: [":host{display:block;width:100%}"]
            }] }
];
/** @nocollapse */
TdChartComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdChartOptionsService }
];
TdChartComponent.propDecorators = {
    config: [{ type: Input }],
    group: [{ type: Input }],
    themeName: [{ type: Input }],
    renderer: [{ type: Input }],
    chartClick: [{ type: Output }],
    chartDblclick: [{ type: Output }],
    chartContextmenu: [{ type: Output }],
    magicTypeChanged: [{ type: Output }],
    dataViewChanged: [{ type: Output }],
    datazoom: [{ type: Output }],
    restore: [{ type: Output }]
};
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
class TdChartAxisComponent {
    /**
     * @param {?} _axisOption
     * @param {?} _optionsService
     */
    constructor(_axisOption, _optionsService) {
        this._axisOption = _axisOption;
        this._optionsService = _optionsService;
        this._state = {};
        this.config = {};
        this.show = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @private
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        const config = assignDefined(this._state, {
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
    }
    /**
     * @private
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption(this._axisOption);
    }
}
TdChartAxisComponent.propDecorators = {
    config: [{ type: Input }],
    id: [{ type: Input }],
    show: [{ type: Input }],
    gridIndex: [{ type: Input }],
    offset: [{ type: Input }],
    type: [{ type: Input }],
    name: [{ type: Input }],
    nameLocation: [{ type: Input }],
    nameTextStyle: [{ type: Input }],
    nameGap: [{ type: Input }],
    nameRotate: [{ type: Input }],
    inverse: [{ type: Input }],
    boundaryGap: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    scale: [{ type: Input }],
    minInterval: [{ type: Input }],
    interval: [{ type: Input }],
    logBase: [{ type: Input }],
    silent: [{ type: Input }],
    triggerEvent: [{ type: Input }],
    axisLine: [{ type: Input }],
    axisTick: [{ type: Input }],
    axisLabel: [{ type: Input }],
    splitLine: [{ type: Input }],
    splitArea: [{ type: Input }],
    data: [{ type: Input }],
    axisPointer: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }]
};
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
class TdChartXAxisComponent extends TdChartAxisComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('xAxis', _optionsService);
    }
}
TdChartXAxisComponent.decorators = [
    { type: Component, args: [{
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
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartXAxisComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartXAxisComponent.propDecorators = {
    position: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdChartXAxisComponent.prototype.position;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdChartYAxisComponent extends TdChartAxisComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('yAxis', _optionsService);
    }
}
TdChartYAxisComponent.decorators = [
    { type: Component, args: [{
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
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartYAxisComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartYAxisComponent.propDecorators = {
    position: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdChartYAxisComponent.prototype.position;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdDatasetComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        this._optionsService = _optionsService;
        this._state = {};
        this.config = {};
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @private
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        const config = assignDefined(this._state, {
            id: this.id,
            source: this.source,
            dimensions: this.dimensions,
            sourceHeader: this.sourceHeader,
        }, this.config ? this.config : {});
        // set dataset configuration in parent chart and render new configurations
        this._optionsService.setOption('dataset', config);
    }
    /**
     * @private
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('dataset');
    }
}
TdDatasetComponent.decorators = [
    { type: Component, args: [{
                template: '',
                selector: 'td-chart-dataset',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdDatasetComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdDatasetComponent.propDecorators = {
    id: [{ type: Input }],
    config: [{ type: Input }],
    source: [{ type: Input }],
    dimensions: [{ type: Input }],
    sourceHeader: [{ type: Input }]
};
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
const BASE_MODULE_COMPONENTS = [
    TdChartComponent,
    TdChartXAxisComponent,
    TdChartYAxisComponent,
    TdDatasetComponent,
];
registerDefaultThemes();
class CovalentBaseEchartsModule {
}
CovalentBaseEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [BASE_MODULE_COMPONENTS],
                exports: [BASE_MODULE_COMPONENTS],
            },] }
];

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
class TdSeriesComponent {
    /**
     * @param {?} type
     * @param {?} optionsService
     */
    constructor(type, optionsService) {
        this.optionsService = optionsService;
        this._state = {};
        this._options = {};
        this.config = {};
        this._type = type;
    }
    /**
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    setStateOption(option, value) {
        this._options[option] = value;
        this._setOptions();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    removeStateOption(option) {
        /* tslint:disable-next-line */
        this._options[option] = null;
        this._setOptions();
    }
    /**
     * @private
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        const config = assignDefined(this._state, {
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
    }
    /**
     * @private
     * @return {?}
     */
    _removeOption() {
        this.optionsService.removeArrayOption('series', this._state);
    }
}
TdSeriesComponent.propDecorators = {
    config: [{ type: Input }],
    id: [{ type: Input }],
    name: [{ type: Input }],
    color: [{ type: Input }],
    data: [{ type: Input }],
    animation: [{ type: Input }],
    animationThreshold: [{ type: Input }],
    animationDuration: [{ type: Input }],
    animationEasing: [{ type: Input }],
    animationDelay: [{ type: Input }],
    animationDurationUpdate: [{ type: Input }],
    animationEasingUpdate: [{ type: Input }],
    animationDelayUpdate: [{ type: Input }],
    tooltip: [{ type: Input }]
};
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
class TdChartSeriesBarComponent extends TdSeriesComponent$1 {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('bar', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
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
    }
}
TdChartSeriesBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-bar]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
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
                        provide: TdSeriesComponent$1,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdChartSeriesBarComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesBarComponent.ctorParameters = () => [
    { type: TdChartOptionsService$1 }
];
TdChartSeriesBarComponent.propDecorators = {
    coordinateSystem: [{ type: Input }],
    xAxisIndex: [{ type: Input }],
    yAxisIndex: [{ type: Input }],
    legendHoverLink: [{ type: Input }],
    stack: [{ type: Input }],
    cursor: [{ type: Input }],
    label: [{ type: Input }],
    itemStyle: [{ type: Input }],
    emphasis: [{ type: Input }],
    barWidth: [{ type: Input }],
    barMaxWidth: [{ type: Input }],
    barMinHeight: [{ type: Input }],
    barGap: [{ type: Input }],
    barCategoryGap: [{ type: Input }],
    large: [{ type: Input }],
    largeThreshold: [{ type: Input }],
    progressive: [{ type: Input }],
    progressiveThreshold: [{ type: Input }],
    progressiveChunkMode: [{ type: Input }],
    dimensions: [{ type: Input }],
    encode: [{ type: Input }],
    seriesLayoutBy: [{ type: Input }],
    datasetIndex: [{ type: Input }],
    markPoint: [{ type: Input }],
    markLine: [{ type: Input }],
    markArea: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }]
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
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const BAR_MODULE_COMPONENTS = [TdChartSeriesBarComponent];
class CovalentBarEchartsModule {
}
CovalentBarEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [BAR_MODULE_COMPONENTS],
                exports: [BAR_MODULE_COMPONENTS],
            },] }
];

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
class TdChartSeriesPieComponent extends TdSeriesComponent$1 {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('pie', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
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
    }
}
TdChartSeriesPieComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-pie]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
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
                        provide: TdSeriesComponent$1,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdChartSeriesPieComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesPieComponent.ctorParameters = () => [
    { type: TdChartOptionsService$1 }
];
TdChartSeriesPieComponent.propDecorators = {
    legendHoverLink: [{ type: Input }],
    hoverAnimation: [{ type: Input }],
    hoverOffset: [{ type: Input }],
    selectedMode: [{ type: Input }],
    selectedOffset: [{ type: Input }],
    clockwise: [{ type: Input }],
    startAngle: [{ type: Input }],
    minAngle: [{ type: Input }],
    minShowLabelAngle: [{ type: Input }],
    roseType: [{ type: Input }],
    avoidLabelOverlap: [{ type: Input }],
    stillShowZeroSum: [{ type: Input }],
    cursor: [{ type: Input }],
    labelLine: [{ type: Input }],
    label: [{ type: Input }],
    itemStyle: [{ type: Input }],
    emphasis: [{ type: Input }],
    seriesLayoutBy: [{ type: Input }],
    datasetIndex: [{ type: Input }],
    markPoint: [{ type: Input }],
    markLine: [{ type: Input }],
    markArea: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }],
    center: [{ type: Input }],
    radius: [{ type: Input }]
};
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
const PIE_MODULE_COMPONENTS = [TdChartSeriesPieComponent];
class CovalentPieEchartsModule {
}
CovalentPieEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PIE_MODULE_COMPONENTS],
                exports: [PIE_MODULE_COMPONENTS],
            },] }
];

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
class TdChartSeriesLineComponent extends TdSeriesComponent$1 {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('line', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
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
    }
}
TdChartSeriesLineComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-line]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
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
                        provide: TdSeriesComponent$1,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdChartSeriesLineComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesLineComponent.ctorParameters = () => [
    { type: TdChartOptionsService$1 }
];
TdChartSeriesLineComponent.propDecorators = {
    coordinateSystem: [{ type: Input }],
    xAxisIndex: [{ type: Input }],
    yAxisIndex: [{ type: Input }],
    polarIndex: [{ type: Input }],
    symbol: [{ type: Input }],
    symbolSize: [{ type: Input }],
    symbolRotate: [{ type: Input }],
    symbolKeepAspect: [{ type: Input }],
    symbolOffset: [{ type: Input }],
    showSymbol: [{ type: Input }],
    showAllSymbol: [{ type: Input }],
    hoverAnimation: [{ type: Input }],
    legendHoverLink: [{ type: Input }],
    stack: [{ type: Input }],
    cursor: [{ type: Input }],
    connectNulls: [{ type: Input }],
    clipOverflow: [{ type: Input }],
    step: [{ type: Input }],
    label: [{ type: Input }],
    itemStyle: [{ type: Input }],
    lineStyle: [{ type: Input }],
    areaStyle: [{ type: Input }],
    emphasis: [{ type: Input }],
    smooth: [{ type: Input }],
    smoothMonotone: [{ type: Input }],
    sampling: [{ type: Input }],
    dimensions: [{ type: Input }],
    encode: [{ type: Input }],
    seriesLayoutBy: [{ type: Input }],
    datasetIndex: [{ type: Input }],
    markPoint: [{ type: Input }],
    markLine: [{ type: Input }],
    markArea: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }],
    silent: [{ type: Input }]
};
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
const LINE_MODULE_COMPONENTS = [TdChartSeriesLineComponent];
class CovalentLineEchartsModule {
}
CovalentLineEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [LINE_MODULE_COMPONENTS],
                exports: [LINE_MODULE_COMPONENTS],
            },] }
];

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
class TdChartSeriesScatterComponent extends TdSeriesComponent$1 {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('scatter', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
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
    }
}
TdChartSeriesScatterComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-scatter]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
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
                        provide: TdSeriesComponent$1,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdChartSeriesScatterComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesScatterComponent.ctorParameters = () => [
    { type: TdChartOptionsService$1 }
];
TdChartSeriesScatterComponent.propDecorators = {
    coordinateSystem: [{ type: Input }],
    xAxisIndex: [{ type: Input }],
    yAxisIndex: [{ type: Input }],
    polarIndex: [{ type: Input }],
    geoIndex: [{ type: Input }],
    calendarIndex: [{ type: Input }],
    hoverAnimation: [{ type: Input }],
    legendHoverLink: [{ type: Input }],
    symbol: [{ type: Input }],
    symbolSize: [{ type: Input }],
    symbolRotate: [{ type: Input }],
    symbolKeepAspect: [{ type: Input }],
    symbolOffset: [{ type: Input }],
    large: [{ type: Input }],
    largeThreshold: [{ type: Input }],
    cursor: [{ type: Input }],
    label: [{ type: Input }],
    itemStyle: [{ type: Input }],
    emphasis: [{ type: Input }],
    progressive: [{ type: Input }],
    progressiveThreshold: [{ type: Input }],
    dimensions: [{ type: Input }],
    encode: [{ type: Input }],
    seriesLayoutBy: [{ type: Input }],
    datasetIndex: [{ type: Input }],
    markPoint: [{ type: Input }],
    markLine: [{ type: Input }],
    markArea: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }],
    silent: [{ type: Input }]
};
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
const SCATTER_MODULE_COMPONENTS = [TdChartSeriesScatterComponent];
class CovalentScatterEchartsModule {
}
CovalentScatterEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SCATTER_MODULE_COMPONENTS],
                exports: [SCATTER_MODULE_COMPONENTS],
            },] }
];

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
class TdChartSeriesTreeComponent extends TdSeriesComponent$1 {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('tree', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
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
    }
}
TdChartSeriesTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-tree]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
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
                        provide: TdSeriesComponent$1,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdChartSeriesTreeComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesTreeComponent.ctorParameters = () => [
    { type: TdChartOptionsService$1 }
];
TdChartSeriesTreeComponent.propDecorators = {
    zlevel: [{ type: Input }],
    z: [{ type: Input }],
    left: [{ type: Input }],
    top: [{ type: Input }],
    right: [{ type: Input }],
    bottom: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    layout: [{ type: Input }],
    orient: [{ type: Input }],
    symbol: [{ type: Input }],
    symbolSize: [{ type: Input }],
    symbolRotate: [{ type: Input }],
    symbolKeepAspect: [{ type: Input }],
    roam: [{ type: Input }],
    expandAndCollapse: [{ type: Input }],
    initialTreeDepth: [{ type: Input }],
    itemStyle: [{ type: Input }],
    label: [{ type: Input }],
    lineStyle: [{ type: Input }],
    leaves: [{ type: Input }],
    emphasis: [{ type: Input }]
};
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
const TREE_MODULE_COMPONENTS = [TdChartSeriesTreeComponent];
class CovalentTreeEchartsModule {
}
CovalentTreeEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TREE_MODULE_COMPONENTS],
                exports: [TREE_MODULE_COMPONENTS],
            },] }
];

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
class TdTooltipContext {
}
if (false) {
    /** @type {?} */
    TdTooltipContext.prototype.$implicit;
    /** @type {?} */
    TdTooltipContext.prototype.ticket;
}
class TdChartTooltipFormatterDirective {
}
TdChartTooltipFormatterDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[tdTooltipFormatter]',
            },] }
];
class TdChartTooltipComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _optionsService
     */
    constructor(_changeDetectorRef, _elementRef, _optionsService) {
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
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @private
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        const config = assignDefined$1(this._state, {
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
    }
    /**
     * @private
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('tooltip');
    }
    /**
     * @private
     * @return {?}
     */
    _formatter() {
        return (/**
         * @param {?} params
         * @param {?} ticket
         * @param {?} callback
         * @return {?}
         */
        (params, ticket, callback) => {
            this._context = {
                $implicit: params,
                ticket,
            };
            // timeout set since we need to set the HTML at the end of the angular lifecycle when
            // the tooltip delay is more than 0
            setTimeout((/**
             * @return {?}
             */
            () => {
                callback(ticket, ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML);
            }));
            this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML;
        });
    }
}
TdChartTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-tooltip',
                template: "<ng-template #tooltipContent [ngTemplateOutlet]=\"formatterTemplate\" [ngTemplateOutletContext]=\"_context\"></ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartTooltipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdChartOptionsService$1 }
];
TdChartTooltipComponent.propDecorators = {
    config: [{ type: Input }],
    show: [{ type: Input }],
    trigger: [{ type: Input }],
    axisPointer: [{ type: Input }],
    showContent: [{ type: Input }],
    alwaysShowContent: [{ type: Input }],
    triggerOn: [{ type: Input }],
    showDelay: [{ type: Input }],
    hideDelay: [{ type: Input }],
    enterable: [{ type: Input }],
    renderMode: [{ type: Input }],
    confine: [{ type: Input }],
    transitionDuration: [{ type: Input }],
    position: [{ type: Input }],
    formatter: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    borderColor: [{ type: Input }],
    borderWidth: [{ type: Input }],
    padding: [{ type: Input }],
    textStyle: [{ type: Input }],
    extraCssText: [{ type: Input }],
    formatterTemplate: [{ type: ContentChild, args: [TdChartTooltipFormatterDirective, { read: TemplateRef, static: false },] }],
    fullTemplate: [{ type: ViewChild, args: ['tooltipContent', { static: true },] }]
};
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
class TdSeriesTooltipComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _seriesComponent
     */
    constructor(_changeDetectorRef, _elementRef, _seriesComponent) {
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
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @private
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        const config = assignDefined$1(this._state, {
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
    }
    /**
     * Formatter for tooltip
     *
     * @private
     * @return {?}
     */
    _formatter() {
        return (/**
         * @param {?} params
         * @param {?} ticket
         * @param {?} callback
         * @return {?}
         */
        (params, ticket, callback) => {
            this._context = {
                $implicit: params,
                ticket,
            };
            // timeout set since we need to set the HTML at the end of the angular lifecycle when
            // the tooltip delay is more than 0
            setTimeout((/**
             * @return {?}
             */
            () => {
                callback(ticket, ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML);
            }));
            this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML;
        });
    }
    /**
     * @private
     * @return {?}
     */
    _removeOption() {
        this._seriesComponent.removeStateOption('tooltip');
    }
}
TdSeriesTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series-tooltip',
                template: "<ng-template #tooltipContent [ngTemplateOutlet]=\"formatterTemplate\" [ngTemplateOutletContext]=\"_context\"></ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdSeriesTooltipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdSeriesComponent$1 }
];
TdSeriesTooltipComponent.propDecorators = {
    config: [{ type: Input }],
    formatter: [{ type: Input }],
    position: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    borderColor: [{ type: Input }],
    borderWidth: [{ type: Input }],
    padding: [{ type: Input }],
    textStyle: [{ type: Input }],
    extraCssText: [{ type: Input }],
    formatterTemplate: [{ type: ContentChild, args: [TdChartTooltipFormatterDirective, { read: TemplateRef, static: false },] }],
    fullTemplate: [{ type: ViewChild, args: ['tooltipContent', { static: true },] }]
};
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
const TOOLTIP_MODULE_COMPONENTS = [
    TdChartTooltipComponent,
    TdChartTooltipFormatterDirective,
    TdSeriesTooltipComponent,
];
class CovalentTooltipEchartsModule {
}
CovalentTooltipEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TOOLTIP_MODULE_COMPONENTS],
                exports: [TOOLTIP_MODULE_COMPONENTS],
            },] }
];

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
class TdChartViewDataFormatterDirective {
}
TdChartViewDataFormatterDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[tdViewDataFormatter]',
            },] }
];
class TdChartToolboxComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _optionsService
     */
    constructor(_changeDetectorRef, _elementRef, _optionsService) {
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
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @private
     * @return {?}
     */
    _setOptions() {
        this._checkFormatterTemplate();
        /** @type {?} */
        const config = assignDefined$1(this._state, {
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
    }
    /**
     * @private
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('toolbox');
    }
    /**
     * @private
     * @return {?}
     */
    _checkFormatterTemplate() {
        if (this.formatterTemplate) {
            this.feature = Object.assign(Object.assign({}, this.feature), { dataView: Object.assign(Object.assign({}, this.feature.dataView), { optionToContent: this._optionToContentFormatter() }) });
        }
    }
    /**
     * @private
     * @return {?}
     */
    _optionToContentFormatter() {
        return (/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML;
        });
    }
}
TdChartToolboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-toolbox',
                template: "<ng-template #toolboxContent [ngTemplateOutlet]=\"formatterTemplate\"></ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartToolboxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdChartOptionsService$1 }
];
TdChartToolboxComponent.propDecorators = {
    config: [{ type: Input }],
    show: [{ type: Input }],
    trigger: [{ type: Input }],
    orient: [{ type: Input }],
    itemSize: [{ type: Input }],
    itemGap: [{ type: Input }],
    showTitle: [{ type: Input }],
    label: [{ type: Input }],
    feature: [{ type: Input }],
    iconStyle: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }],
    transitionDuration: [{ type: Input }],
    left: [{ type: Input }],
    top: [{ type: Input }],
    right: [{ type: Input }],
    bottom: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    formatterTemplate: [{ type: ContentChild, args: [TdChartViewDataFormatterDirective, { read: TemplateRef, static: false },] }],
    fullTemplate: [{ type: ViewChild, args: ['toolboxContent', { static: true },] }]
};
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
const TOOLBOX_MODULE_COMPONENTS = [TdChartToolboxComponent, TdChartViewDataFormatterDirective];
class CovalentToolboxEchartsModule {
}
CovalentToolboxEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TOOLBOX_MODULE_COMPONENTS],
                exports: [TOOLBOX_MODULE_COMPONENTS],
            },] }
];

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
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BAR_MODULE_COMPONENTS, BASE_MODULE_COMPONENTS, CovalentBarEchartsModule, CovalentBaseEchartsModule, CovalentLineEchartsModule, CovalentPieEchartsModule, CovalentScatterEchartsModule, CovalentToolboxEchartsModule, CovalentTooltipEchartsModule, CovalentTreeEchartsModule, LINE_MODULE_COMPONENTS, PIE_MODULE_COMPONENTS, SCATTER_MODULE_COMPONENTS, TOOLBOX_MODULE_COMPONENTS, TOOLTIP_MODULE_COMPONENTS, TREE_MODULE_COMPONENTS, TdChartAxisComponent, TdChartComponent, TdChartOptionsService, TdChartSeriesBarComponent, TdChartSeriesLineComponent, TdChartSeriesPieComponent, TdChartSeriesScatterComponent, TdChartSeriesTreeComponent, TdChartToolboxComponent, TdChartTooltipComponent, TdChartTooltipFormatterDirective, TdChartViewDataFormatterDirective, TdChartXAxisComponent, TdChartYAxisComponent, TdDatasetComponent, TdSeriesComponent, TdSeriesTooltipComponent, TdTooltipContext, assignDefined, getThemes, registerDefaultThemes, registerTheme, CHART_PROVIDER_FACTORY as ɵa, CHART_PROVIDER as ɵb };
//# sourceMappingURL=covalent-echarts.js.map
