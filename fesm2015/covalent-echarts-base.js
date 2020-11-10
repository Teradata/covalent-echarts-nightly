import { Injectable, Optional, SkipSelf, EventEmitter, Component, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, Input, Output, Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, Subject, fromEvent, merge, timer } from 'rxjs';
import { takeUntil, debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { registerTheme as registerTheme$1, init, connect, dispose } from 'echarts/lib/echarts';
import 'zrender/lib/svg/svg';

/**
 * @fileoverview added by tsickle
 * Generated from: chart-options.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: utils/assign-defined.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: themes/aqua-splash.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: themes/california-coast.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: themes/hawaiian-sunrise.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: themes/passion-flower.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: themes/razzleberry-pie.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: themes/teradata-classic.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: themes/teradata-default.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: themes/urban-sunrise.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: themes/volcanic-eruption.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: utils/echarts.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: utils/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: axis/axis.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class TdChartAxisDirective {
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
TdChartAxisDirective.decorators = [
    { type: Directive }
];
/** @nocollapse */
TdChartAxisDirective.ctorParameters = () => [
    { type: String },
    { type: TdChartOptionsService }
];
TdChartAxisDirective.propDecorators = {
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
    TdChartAxisDirective.prototype._state;
    /** @type {?} */
    TdChartAxisDirective.prototype.config;
    /** @type {?} */
    TdChartAxisDirective.prototype.id;
    /** @type {?} */
    TdChartAxisDirective.prototype.show;
    /** @type {?} */
    TdChartAxisDirective.prototype.gridIndex;
    /** @type {?} */
    TdChartAxisDirective.prototype.offset;
    /** @type {?} */
    TdChartAxisDirective.prototype.position;
    /** @type {?} */
    TdChartAxisDirective.prototype.type;
    /** @type {?} */
    TdChartAxisDirective.prototype.name;
    /** @type {?} */
    TdChartAxisDirective.prototype.nameLocation;
    /** @type {?} */
    TdChartAxisDirective.prototype.nameTextStyle;
    /** @type {?} */
    TdChartAxisDirective.prototype.nameGap;
    /** @type {?} */
    TdChartAxisDirective.prototype.nameRotate;
    /** @type {?} */
    TdChartAxisDirective.prototype.inverse;
    /** @type {?} */
    TdChartAxisDirective.prototype.boundaryGap;
    /** @type {?} */
    TdChartAxisDirective.prototype.min;
    /** @type {?} */
    TdChartAxisDirective.prototype.max;
    /** @type {?} */
    TdChartAxisDirective.prototype.scale;
    /** @type {?} */
    TdChartAxisDirective.prototype.minInterval;
    /** @type {?} */
    TdChartAxisDirective.prototype.interval;
    /** @type {?} */
    TdChartAxisDirective.prototype.logBase;
    /** @type {?} */
    TdChartAxisDirective.prototype.silent;
    /** @type {?} */
    TdChartAxisDirective.prototype.triggerEvent;
    /** @type {?} */
    TdChartAxisDirective.prototype.axisLine;
    /** @type {?} */
    TdChartAxisDirective.prototype.axisTick;
    /** @type {?} */
    TdChartAxisDirective.prototype.axisLabel;
    /** @type {?} */
    TdChartAxisDirective.prototype.splitLine;
    /** @type {?} */
    TdChartAxisDirective.prototype.splitArea;
    /** @type {?} */
    TdChartAxisDirective.prototype.data;
    /** @type {?} */
    TdChartAxisDirective.prototype.axisPointer;
    /** @type {?} */
    TdChartAxisDirective.prototype.zlevel;
    /** @type {?} */
    TdChartAxisDirective.prototype.z;
    /**
     * @type {?}
     * @private
     */
    TdChartAxisDirective.prototype._axisOption;
    /**
     * @type {?}
     * @private
     */
    TdChartAxisDirective.prototype._optionsService;
}

/**
 * @fileoverview added by tsickle
 * Generated from: axis/x-axis.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdChartXAxisComponent extends TdChartAxisDirective {
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
 * Generated from: axis/y-axis.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdChartYAxisComponent extends TdChartAxisDirective {
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
 * Generated from: dataset/dataset.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: base.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: series/series.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
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
 */
class TdSeriesDirective {
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
TdSeriesDirective.decorators = [
    { type: Directive }
];
/** @nocollapse */
TdSeriesDirective.ctorParameters = () => [
    { type: String },
    { type: TdChartOptionsService }
];
TdSeriesDirective.propDecorators = {
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
    TdSeriesDirective.prototype._type;
    /** @type {?} */
    TdSeriesDirective.prototype._state;
    /** @type {?} */
    TdSeriesDirective.prototype._options;
    /** @type {?} */
    TdSeriesDirective.prototype.config;
    /** @type {?} */
    TdSeriesDirective.prototype.id;
    /** @type {?} */
    TdSeriesDirective.prototype.name;
    /** @type {?} */
    TdSeriesDirective.prototype.color;
    /** @type {?} */
    TdSeriesDirective.prototype.data;
    /** @type {?} */
    TdSeriesDirective.prototype.animation;
    /** @type {?} */
    TdSeriesDirective.prototype.animationThreshold;
    /** @type {?} */
    TdSeriesDirective.prototype.animationDuration;
    /** @type {?} */
    TdSeriesDirective.prototype.animationEasing;
    /** @type {?} */
    TdSeriesDirective.prototype.animationDelay;
    /** @type {?} */
    TdSeriesDirective.prototype.animationDurationUpdate;
    /** @type {?} */
    TdSeriesDirective.prototype.animationEasingUpdate;
    /** @type {?} */
    TdSeriesDirective.prototype.animationDelayUpdate;
    /** @type {?} */
    TdSeriesDirective.prototype.tooltip;
    /**
     * @type {?}
     * @protected
     */
    TdSeriesDirective.prototype.optionsService;
    /**
     * @abstract
     * @return {?}
     */
    TdSeriesDirective.prototype.getConfig = function () { };
}

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
 * Generated from: covalent-echarts-base.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { BASE_MODULE_COMPONENTS, CovalentBaseEchartsModule, TdChartAxisDirective, TdChartComponent, TdChartOptionsService, TdChartXAxisComponent, TdChartYAxisComponent, TdDatasetComponent, TdSeriesDirective, assignDefined, getThemes, registerDefaultThemes, registerTheme, CHART_PROVIDER_FACTORY as ɵa, CHART_PROVIDER as ɵb };
//# sourceMappingURL=covalent-echarts-base.js.map
