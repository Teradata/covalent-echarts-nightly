import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, fromEvent, merge, timer } from 'rxjs';
import { init, connect, dispose, registerTheme } from 'echarts/lib/echarts';
import 'zrender/lib/svg/svg';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/scatter';
import 'echarts/lib/chart/tree';
import 'echarts/lib/component/tooltip';
import { CommonModule } from '@angular/common';
import 'echarts/lib/component/toolbox';
import { Injectable, Optional, SkipSelf, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, NgModule, forwardRef, Directive, TemplateRef, ContentChild, ViewChild } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent, assignDefined } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartOptionsService$1 {
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
        let options = {};
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
            let index = prevValue.indexOf(value);
            index > -1 ? prevValue[index] = value : prevValue.push(value);
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
            let index = prevValue.indexOf(value);
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
TdChartOptionsService$1.decorators = [
    { type: Injectable }
];
/**
 * @param {?} parent
 * @return {?}
 */
function CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService$1();
}
/** @type {?} */
const CHART_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdChartOptionsService$1,
    deps: [[new Optional(), new SkipSelf(), TdChartOptionsService$1]],
    useFactory: CHART_PROVIDER_FACTORY,
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {...?} sources
 * @return {?}
 */
function assignDefined$1(target, ...sources) {
    /** @type {?} */
    let keys = new Set();
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/* tslint:disable */
var aquaSplash = {
    "color": [
        "#305b9e",
        "#0076a9",
        "#1d8daa",
        "#51a2a8",
        "#7fb5aa",
        "#aac6b4",
        "#CFD8C8",
        "#ECEBE4"
    ],
    "backgroundColor": "transparent",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#aaaaaa"
        },
        "subtextStyle": {
            "color": "#aaaaaa"
        }
    },
    "tree": {
        "itemStyle": {
            "color": '#ECEBE4',
            "borderColor": '#305b9e'
        }
    },
    "line": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "radar": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "bar": {
        "itemStyle": {
            "normal": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "emphasis": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        }
    },
    "pie": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "scatter": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "boxplot": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "parallel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "sankey": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "funnel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "gauge": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "candlestick": {
        "itemStyle": {
            "normal": {
                "color": "#305b9e",
                "color0": "transparent",
                "borderColor": "#305b9e",
                "borderColor0": "#1d8daa",
                "borderWidth": "2"
            }
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "lineStyle": {
            "normal": {
                "width": 1,
                "color": "#aaaaaa"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true,
        "color": [
            "#305b9e",
            "#0076a9",
            "#1d8daa",
            "#51a2a8",
            "#7fb5aa",
            "#aac6b4",
            "#CFD8C8",
            "#ECEBE4"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#00475e"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(0,71,94)"
                }
            }
        }
    },
    "geo": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#00475e"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(0,71,94)"
                }
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#000000"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#cccccc",
                "width": 1
            },
            "crossStyle": {
                "color": "#cccccc",
                "width": 1
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#666666",
            "width": 1
        },
        "itemStyle": {
            "normal": {
                "color": "#666666",
                "borderWidth": 1
            },
            "emphasis": {
                "color": "#f7ac4f"
            }
        },
        "controlStyle": {
            "normal": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            },
            "emphasis": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            }
        },
        "checkpointStyle": {
            "color": "#f7ac4f",
            "borderColor": "rgba(254,198,77,0.6)"
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#666666"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#666666"
                }
            }
        }
    },
    "visualMap": {
        "color": [
            "#305b9e",
            "#0076a9",
            "#1d8daa",
            "#51a2a8",
            "#7fb5aa",
            "#aac6b4",
            "#CFD8C8",
            "#ECEBE4"
        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(255,255,255,0)",
        "dataBackgroundColor": "rgba(255,178,72,0.5)",
        "fillerColor": "rgba(255,178,72,0.15)",
        "handleColor": "#ffb248",
        "handleSize": "100%",
        "textStyle": {
            "color": "#aaaaaa"
        }
    },
    "markPoint": {
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/* tslint:disable */
var californiaCoast = {
    "color": [
        "#0098c9",
        "#6ab1d7",
        "#a0cae4",
        "#ffbb9c",
        "#fd986d",
        "#f3753f"
    ],
    "backgroundColor": "transparent",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#aaaaaa"
        },
        "subtextStyle": {
            "color": "#aaaaaa"
        }
    },
    "tree": {
        "itemStyle": {
            "color": '#ffbb9c',
            "borderColor": '#0098c9'
        }
    },
    "line": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "radar": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "bar": {
        "itemStyle": {
            "normal": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "emphasis": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        }
    },
    "pie": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "scatter": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "boxplot": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "parallel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "sankey": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "funnel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "gauge": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "candlestick": {
        "itemStyle": {
            "normal": {
                "color": "#f3753f",
                "color0": "transparent",
                "borderColor": "#f3753f",
                "borderColor0": "#0098c9",
                "borderWidth": "2"
            }
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "lineStyle": {
            "normal": {
                "width": 1,
                "color": "#aaaaaa"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true,
        "color": [
            "#0098c9",
            "#6ab1d7",
            "#a0cae4",
            "#ffbb9c",
            "#fd986d",
            "#f3753f"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#394851"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(57,72,81)"
                }
            }
        }
    },
    "geo": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#394851"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(57,72,81)"
                }
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#aaaaaa"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#cccccc",
                "width": 1
            },
            "crossStyle": {
                "color": "#cccccc",
                "width": 1
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#666666",
            "width": 1
        },
        "itemStyle": {
            "normal": {
                "color": "#666666",
                "borderWidth": 1
            },
            "emphasis": {
                "color": "#fec64d"
            }
        },
        "controlStyle": {
            "normal": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            },
            "emphasis": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            }
        },
        "checkpointStyle": {
            "color": "#f3753f",
            "borderColor": "rgba(255,178,72,0.41)"
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#666666"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#666666"
                }
            }
        }
    },
    "visualMap": {
        "color": [
            "#0098c9",
            "#6ab1d7",
            "#a0cae4",
            "#FFBB9C",
            "#FD986D",
            "#F3753F"
        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(255,255,255,0)",
        "dataBackgroundColor": "rgba(255,178,72,0.5)",
        "fillerColor": "rgba(255,178,72,0.15)",
        "handleColor": "#fec64d",
        "handleSize": "100%",
        "textStyle": {
            "color": "#aaaaaa"
        }
    },
    "markPoint": {
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/* tslint:disable */
var hawaiianSunrise = {
    "color": [
        "#00b2b1",
        "#69c6c4",
        "#a0d9d7",
        "#ffbb9c",
        "#fd986d",
        "#f3753f"
    ],
    "backgroundColor": "transparent",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#aaaaaa"
        },
        "subtextStyle": {
            "color": "#aaaaaa"
        }
    },
    "tree": {
        "itemStyle": {
            "color": '#a0d9d7',
            "borderColor": '#00b2b1'
        }
    },
    "line": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "radar": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "bar": {
        "itemStyle": {
            "normal": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "emphasis": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        }
    },
    "pie": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "scatter": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "boxplot": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "parallel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "sankey": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "funnel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "gauge": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "candlestick": {
        "itemStyle": {
            "normal": {
                "color": "#f3753f",
                "color0": "transparent",
                "borderColor": "#f3753f",
                "borderColor0": "#00b2b1",
                "borderWidth": "2"
            }
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "lineStyle": {
            "normal": {
                "width": 1,
                "color": "#aaaaaa"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true,
        "color": [
            "#00b2b1",
            "#69c6c4",
            "#a0d9d7",
            "#ffbb9c",
            "#fd986d",
            "#f3753f"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#007373"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(0,115,115)"
                }
            }
        }
    },
    "geo": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#007373"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(0,115,115)"
                }
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#000000"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#cccccc",
                "width": 1
            },
            "crossStyle": {
                "color": "#cccccc",
                "width": 1
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#666666",
            "width": 1
        },
        "itemStyle": {
            "normal": {
                "color": "#666666",
                "borderWidth": 1
            },
            "emphasis": {
                "color": "#fec64d"
            }
        },
        "controlStyle": {
            "normal": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            },
            "emphasis": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            }
        },
        "checkpointStyle": {
            "color": "#f3753f",
            "borderColor": "rgba(255,178,72,0.41)"
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#666666"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#666666"
                }
            }
        }
    },
    "visualMap": {
        "color": [
            "#00b2b1",
            "#69c6c4",
            "#a0d9d7",
            "#ffbb9c",
            "#fd986d",
            "#f3753f"
        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(255,255,255,0)",
        "dataBackgroundColor": "rgba(255,178,72,0.5)",
        "fillerColor": "rgba(255,178,72,0.15)",
        "handleColor": "#fec64d",
        "handleSize": "100%",
        "textStyle": {
            "color": "#aaaaaa"
        }
    },
    "markPoint": {
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/* tslint:disable */
var passionFlower = {
    "color": [
        "#007e7d",
        "#977ed2",
        "#d58a9c",
        "#97b6eb",
        "#ceccbb",
        "#f2dfd8"
    ],
    "backgroundColor": "transparent",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#aaaaaa"
        },
        "subtextStyle": {
            "color": "#aaaaaa"
        }
    },
    "tree": {
        "itemStyle": {
            "color": '#f2dfd8',
            "borderColor": '#007e7d'
        }
    },
    "line": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "radar": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "bar": {
        "itemStyle": {
            "normal": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "emphasis": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        }
    },
    "pie": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "scatter": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "boxplot": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "parallel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "sankey": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "funnel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "gauge": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "candlestick": {
        "itemStyle": {
            "normal": {
                "color": "#977ed2",
                "color0": "transparent",
                "borderColor": "#977ed2",
                "borderColor0": "#007e7d",
                "borderWidth": "2"
            }
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "lineStyle": {
            "normal": {
                "width": 1,
                "color": "#aaaaaa"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true,
        "color": [
            "#007e7d",
            "#977ed2",
            "#d58a9c",
            "#97b6eb",
            "#ceccbb",
            "#f2dfd8"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#00475e"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(0,71,94)"
                }
            }
        }
    },
    "geo": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#00475e"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(0,71,94)"
                }
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#999999"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#cccccc",
                "width": 1
            },
            "crossStyle": {
                "color": "#cccccc",
                "width": 1
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#666666",
            "width": 1
        },
        "itemStyle": {
            "normal": {
                "color": "#666666",
                "borderWidth": 1
            },
            "emphasis": {
                "color": "#f7ac4f"
            }
        },
        "controlStyle": {
            "normal": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            },
            "emphasis": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            }
        },
        "checkpointStyle": {
            "color": "#f7ac4f",
            "borderColor": "rgba(254,198,77,0.6)"
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#666666"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#666666"
                }
            }
        }
    },
    "visualMap": {
        "color": [
            "#007e7d",
            "#977ed2",
            "#d58a9c",
            "#97b6eb",
            "#ceccbb",
            "#f2dfd8"
        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(255,255,255,0)",
        "dataBackgroundColor": "rgba(255,178,72,0.5)",
        "fillerColor": "rgba(255,178,72,0.15)",
        "handleColor": "#ffb248",
        "handleSize": "100%",
        "textStyle": {
            "color": "#aaaaaa"
        }
    },
    "markPoint": {
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/* tslint:disable */
var razzleberryPie = {
    "color": [
        "#523e85",
        "#8b4f8f",
        "#b96595",
        "#e0829a",
        "#ffa3a2",
        "#f9b8a3",
        "#f1ccb1",
        "#ebddc8"
    ],
    "backgroundColor": "transparent",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#aaaaaa"
        },
        "subtextStyle": {
            "color": "#aaaaaa"
        }
    },
    "tree": {
        "itemStyle": {
            "color": '#ffa3a2',
            "borderColor": '#523e85'
        }
    },
    "line": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "radar": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "bar": {
        "itemStyle": {
            "normal": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "emphasis": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        }
    },
    "pie": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "scatter": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "boxplot": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "parallel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "sankey": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "funnel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "gauge": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "candlestick": {
        "itemStyle": {
            "normal": {
                "color": "#8b4f8f",
                "color0": "#ffa3a2",
                "borderColor": "#8b4f8f",
                "borderColor0": "#ffa3a2",
                "borderWidth": "2"
            }
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "lineStyle": {
            "normal": {
                "width": 1,
                "color": "#aaaaaa"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true,
        "color": [
            "#523e85",
            "#8b4f8f",
            "#b96595",
            "#e0829a",
            "#ffa3a2",
            "#f9b8a3",
            "#f1ccb1",
            "#ebddc8"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(255,178,72,1)",
                "borderColor": "#eb8146",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#523e85"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(82,62,133)"
                }
            }
        }
    },
    "geo": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(255,178,72,1)",
                "borderColor": "#eb8146",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#523e85"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(82,62,133)"
                }
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#000000"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#cccccc",
                "width": 1
            },
            "crossStyle": {
                "color": "#cccccc",
                "width": 1
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#523e85",
            "width": 1
        },
        "itemStyle": {
            "normal": {
                "color": "#523e85",
                "borderWidth": 1
            },
            "emphasis": {
                "color": "#ffb248"
            }
        },
        "controlStyle": {
            "normal": {
                "color": "#523e85",
                "borderColor": "#523e85",
                "borderWidth": 0.5
            },
            "emphasis": {
                "color": "#523e85",
                "borderColor": "#523e85",
                "borderWidth": 0.5
            }
        },
        "checkpointStyle": {
            "color": "#eb8146",
            "borderColor": "rgba(255,178,72,0.41)"
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#523e85"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#523e85"
                }
            }
        }
    },
    "visualMap": {
        "color": [
            "#523e85",
            "#8b4f8f",
            "#b96595",
            "#e0829a",
            "#ffa3a2",
            "#f9b8a3",
            "#f1ccb1",
            "#ebddc8"
        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(255,255,255,0)",
        "dataBackgroundColor": "rgba(255,178,72,0.5)",
        "fillerColor": "rgba(255,178,72,0.15)",
        "handleColor": "#ffb248",
        "handleSize": "100%",
        "textStyle": {
            "color": "#aaaaaa"
        }
    },
    "markPoint": {
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/* tslint:disable */
var teradataClassic = {
    "color": [
        "#005e7d",
        "#c54b17",
        "#009392",
        "#f5bb3c",
        "#0098c9",
        "#f58b5e",
        "#59cecd",
        "#fee2a6"
    ],
    "backgroundColor": "transparent",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#aaaaaa"
        },
        "subtextStyle": {
            "color": "#aaaaaa"
        }
    },
    "tree": {
        "itemStyle": {
            "color": '#fee2a6',
            "borderColor": '#005e7d'
        }
    },
    "line": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "radar": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "bar": {
        "itemStyle": {
            "normal": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "emphasis": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        }
    },
    "pie": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "scatter": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "boxplot": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "parallel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "sankey": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "funnel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "gauge": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "candlestick": {
        "itemStyle": {
            "normal": {
                "color": "#0098c9",
                "color0": "transparent",
                "borderColor": "#0098c9",
                "borderColor0": "#c54b17",
                "borderWidth": "2"
            }
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "lineStyle": {
            "normal": {
                "width": 1,
                "color": "#aaaaaa"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true,
        "color": [
            "#005e7d",
            "#c54b17",
            "#009392",
            "#f5bb3c",
            "#0098c9",
            "#f58b5e",
            "#59cecd",
            "#fee2a6"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#00475e"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(0,71,94)"
                }
            }
        }
    },
    "geo": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#00475e"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(0,71,94)"
                }
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#999999"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#cccccc",
                "width": 1
            },
            "crossStyle": {
                "color": "#cccccc",
                "width": 1
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#666666",
            "width": 1
        },
        "itemStyle": {
            "normal": {
                "color": "#666666",
                "borderWidth": 1
            },
            "emphasis": {
                "color": "#f7ac4f"
            }
        },
        "controlStyle": {
            "normal": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            },
            "emphasis": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            }
        },
        "checkpointStyle": {
            "color": "#f7ac4f",
            "borderColor": "rgba(254,198,77,0.6)"
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#666666"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#666666"
                }
            }
        }
    },
    "visualMap": {
        "color": [
            "#005e7d",
            "#c54b17",
            "#009392",
            "#f5bb3c",
            "#0098c9",
            "#f58b5e",
            "#59cecd",
            "#fee2a6"
        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(255,255,255,0)",
        "dataBackgroundColor": "rgba(255,178,72,0.5)",
        "fillerColor": "rgba(255,178,72,0.15)",
        "handleColor": "#ffb248",
        "handleSize": "100%",
        "textStyle": {
            "color": "#aaaaaa"
        }
    },
    "markPoint": {
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/* tslint:disable */
var teradataDefault = {
    "color": [
        "#4d5b62",
        "#008ab6",
        "#f3753f",
        "#2cc0bf",
        "#fed887"
    ],
    "backgroundColor": "transparent",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#aaaaaa"
        },
        "subtextStyle": {
            "color": "#aaaaaa"
        }
    },
    "tree": {
        "itemStyle": {
            "color": '#fed887',
            "borderColor": '#4d5b62'
        }
    },
    "line": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "radar": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "bar": {
        "itemStyle": {
            "normal": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "emphasis": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        }
    },
    "pie": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "scatter": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "boxplot": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "parallel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "sankey": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "funnel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "gauge": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "candlestick": {
        "itemStyle": {
            "normal": {
                "color": "#977ed2",
                "color0": "transparent",
                "borderColor": "#977ed2",
                "borderColor0": "#009d9c",
                "borderWidth": "2"
            }
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "lineStyle": {
            "normal": {
                "width": 1,
                "color": "#aaaaaa"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true,
        "color": [
            "#4d5b62",
            "#008ab6",
            "#f3753f",
            "#2cc0bf",
            "#fed887"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#00475e"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(0,71,94)"
                }
            }
        }
    },
    "geo": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#00475e"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(0,71,94)"
                }
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#999999"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#cccccc",
                "width": 1
            },
            "crossStyle": {
                "color": "#cccccc",
                "width": 1
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#666666",
            "width": 1
        },
        "itemStyle": {
            "normal": {
                "color": "#666666",
                "borderWidth": 1
            },
            "emphasis": {
                "color": "#f7ac4f"
            }
        },
        "controlStyle": {
            "normal": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            },
            "emphasis": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            }
        },
        "checkpointStyle": {
            "color": "#f7ac4f",
            "borderColor": "rgba(254,198,77,0.6)"
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#666666"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#666666"
                }
            }
        }
    },
    "visualMap": {
        "color": [
            "#4d5b62",
            "#008ab6",
            "#f3753f",
            "#2cc0bf",
            "#fed887"
        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(255,255,255,0)",
        "dataBackgroundColor": "rgba(255,178,72,0.5)",
        "fillerColor": "rgba(255,178,72,0.15)",
        "handleColor": "#ffb248",
        "handleSize": "100%",
        "textStyle": {
            "color": "#aaaaaa"
        }
    },
    "markPoint": {
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/* tslint:disable */
var urbanSunrise = {
    "color": [
        "#667279",
        "#979ea4",
        "#caced0",
        "#ffbb9c",
        "#fd986d",
        "#F3753F"
    ],
    "backgroundColor": "transparent",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#aaaaaa"
        },
        "subtextStyle": {
            "color": "#aaaaaa"
        }
    },
    "tree": {
        "itemStyle": {
            "color": '#ffbb9c',
            "borderColor": '#667279'
        }
    },
    "line": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "radar": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "bar": {
        "itemStyle": {
            "normal": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "emphasis": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        }
    },
    "pie": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "scatter": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "boxplot": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "parallel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "sankey": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "funnel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "gauge": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "candlestick": {
        "itemStyle": {
            "normal": {
                "color": "#f3753f",
                "color0": "transparent",
                "borderColor": "#f3753f",
                "borderColor0": "#667279",
                "borderWidth": "2"
            }
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "lineStyle": {
            "normal": {
                "width": 1,
                "color": "#aaaaaa"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true,
        "color": [
            "#667279",
            "#979ea4",
            "#caced0",
            "#ffbb9c",
            "#fd986d",
            "#F3753F"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#667279"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(102,114,121)"
                }
            }
        }
    },
    "geo": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#667279"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(102,114,121)"
                }
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#999999"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#cccccc",
                "width": 1
            },
            "crossStyle": {
                "color": "#cccccc",
                "width": 1
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#666666",
            "width": 1
        },
        "itemStyle": {
            "normal": {
                "color": "#666666",
                "borderWidth": 1
            },
            "emphasis": {
                "color": "#fec64d"
            }
        },
        "controlStyle": {
            "normal": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            },
            "emphasis": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            }
        },
        "checkpointStyle": {
            "color": "#f3753f",
            "borderColor": "rgba(255,178,72,0.41)"
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#666666"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#666666"
                }
            }
        }
    },
    "visualMap": {
        "color": [
            "#667279",
            "#979ea4",
            "#caced0",
            "#ffbb9c",
            "#fd986d",
            "#F3753F"
        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(255,255,255,0)",
        "dataBackgroundColor": "rgba(255,178,72,0.5)",
        "fillerColor": "rgba(255,178,72,0.15)",
        "handleColor": "#fec64d",
        "handleSize": "100%",
        "textStyle": {
            "color": "#aaaaaa"
        }
    },
    "markPoint": {
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/* tslint:disable */
var volcanicEruption = {
    "color": [
        "#565a83",
        "#7c5c91",
        "#a85a90",
        "#cf5880",
        "#ea5f64",
        "#f3753f"
    ],
    "backgroundColor": "transparent",
    "textStyle": {},
    "title": {
        "textStyle": {
            "color": "#aaaaaa"
        },
        "subtextStyle": {
            "color": "#aaaaaa"
        }
    },
    "tree": {
        "itemStyle": {
            "color": '#a85a90',
            "borderColor": '#565a83'
        }
    },
    "line": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "radar": {
        "itemStyle": {
            "normal": {
                "borderWidth": "2"
            }
        },
        "lineStyle": {
            "normal": {
                "width": "2"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true
    },
    "bar": {
        "itemStyle": {
            "normal": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            },
            "emphasis": {
                "barBorderWidth": 0,
                "barBorderColor": "#ccc"
            }
        }
    },
    "pie": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "scatter": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "boxplot": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "parallel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "sankey": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "funnel": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "gauge": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            },
            "emphasis": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        }
    },
    "candlestick": {
        "itemStyle": {
            "normal": {
                "color": "#f3753f",
                "color0": "transparent",
                "borderColor": "#f3753f",
                "borderColor0": "#667279",
                "borderWidth": "2"
            }
        }
    },
    "graph": {
        "itemStyle": {
            "normal": {
                "borderWidth": 0,
                "borderColor": "#ccc"
            }
        },
        "lineStyle": {
            "normal": {
                "width": 1,
                "color": "#aaaaaa"
            }
        },
        "symbolSize": "6",
        "symbol": "emptyCircle",
        "smooth": true,
        "color": [
            "#565a83",
            "#7c5c91",
            "#a85a90",
            "#cf5880",
            "#ea5f64",
            "#f3753f"
        ],
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    },
    "map": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#667279"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(102,114,121)"
                }
            }
        }
    },
    "geo": {
        "itemStyle": {
            "normal": {
                "areaColor": "#f3f3f3",
                "borderColor": "#999999",
                "borderWidth": 0.5
            },
            "emphasis": {
                "areaColor": "rgba(254,198,77,1)",
                "borderColor": "#ecaf2b",
                "borderWidth": 1
            }
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#667279"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "rgb(102,114,121)"
                }
            }
        }
    },
    "categoryAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "valueAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "logAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "timeAxis": {
        "axisLine": {
            "show": true,
            "lineStyle": {
                "color": "#aaaaaa"
            }
        },
        "axisTick": {
            "show": false,
            "lineStyle": {
                "color": "#333"
            }
        },
        "axisLabel": {
            "show": true,
            "textStyle": {
                "color": "#999999"
            }
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": [
                    "#e6e6e6"
                ]
            }
        },
        "splitArea": {
            "show": false,
            "areaStyle": {
                "color": [
                    "rgba(250,250,250,0.05)",
                    "rgba(200,200,200,0.02)"
                ]
            }
        }
    },
    "toolbox": {
        "iconStyle": {
            "normal": {
                "borderColor": "#999999"
            },
            "emphasis": {
                "borderColor": "#666666"
            }
        }
    },
    "legend": {
        "textStyle": {
            "color": "#000000"
        }
    },
    "tooltip": {
        "axisPointer": {
            "lineStyle": {
                "color": "#cccccc",
                "width": 1
            },
            "crossStyle": {
                "color": "#cccccc",
                "width": 1
            }
        }
    },
    "timeline": {
        "lineStyle": {
            "color": "#666666",
            "width": 1
        },
        "itemStyle": {
            "normal": {
                "color": "#666666",
                "borderWidth": 1
            },
            "emphasis": {
                "color": "#fec64d"
            }
        },
        "controlStyle": {
            "normal": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            },
            "emphasis": {
                "color": "#666666",
                "borderColor": "#666666",
                "borderWidth": 0.5
            }
        },
        "checkpointStyle": {
            "color": "#f3753f",
            "borderColor": "rgba(255,178,72,0.41)"
        },
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#666666"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#666666"
                }
            }
        }
    },
    "visualMap": {
        "color": [
            "#565a83",
            "#7c5c91",
            "#a85a90",
            "#cf5880",
            "#ea5f64",
            "#f3753f"
        ]
    },
    "dataZoom": {
        "backgroundColor": "rgba(255,255,255,0)",
        "dataBackgroundColor": "rgba(255,178,72,0.5)",
        "fillerColor": "rgba(255,178,72,0.15)",
        "handleColor": "#fec64d",
        "handleSize": "100%",
        "textStyle": {
            "color": "#aaaaaa"
        }
    },
    "markPoint": {
        "label": {
            "normal": {
                "textStyle": {
                    "color": "#ffffff"
                }
            },
            "emphasis": {
                "textStyle": {
                    "color": "#ffffff"
                }
            }
        }
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * Function used to register a theme into echarts
 * Theme name and theme object needed as stated in
 * https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.registerTheme
 * @param {?} themeName
 * @param {?} theme
 * @return {?}
 */
function registerTheme$1(themeName, theme) {
    registerTheme(themeName, theme);
}
/**
 * Function to register all default themes
 * \@internal
 * @return {?}
 */
function registerDefaultThemes() {
    registerTheme$1('aqua-splash', aquaSplash);
    registerTheme$1('california-coast', californiaCoast);
    registerTheme$1('hawaiian-sunrise', hawaiianSunrise);
    registerTheme$1('passion-flower', passionFlower);
    registerTheme$1('razzleberry-pie', razzleberryPie);
    registerTheme$1('teradata-classic', teradataClassic);
    registerTheme$1('teradata-default', teradataDefault);
    registerTheme$1('urban-sunrise', urbanSunrise);
    registerTheme$1('volcanic-eruption', volcanicEruption);
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            this._instance.setOption(assignDefined$1(this._state, {
                grid: {
                    show: true,
                    left: '20',
                    right: '20',
                    bottom: (this.config.toolbox && typeof this.config.toolbox.bottom === 'number') ||
                        (this._options.toolbox && typeof this._options.toolbox.bottom === 'number') ? '40' : '10',
                    top: (this.config.toolbox && typeof this.config.toolbox.top === 'number') ||
                        (this._options.toolbox && typeof this._options.toolbox.top === 'number') ? '40' : '10',
                    containLabel: true,
                },
            }, this._options, this.config ? this.config : {}), true);
            this._changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    _initializeChart() {
        this._instance = init(this._elementRef.nativeElement, this.themeName, {
            renderer: this.renderer,
        });
        fromEvent(this._instance, 'click').pipe(takeUntil(this._destroy)).subscribe((params) => {
            this.chartClick.next(params);
        });
        fromEvent(this._instance, 'dblclick').pipe(takeUntil(this._destroy)).subscribe((params) => {
            this.chartDblclick.next(params);
        });
        fromEvent(this._instance, 'contextmenu').pipe(takeUntil(this._destroy)).subscribe((params) => {
            this.chartContextmenu.next(params);
        });
        fromEvent(this._instance, 'magictypechanged').pipe(takeUntil(this._destroy)).subscribe((params) => {
            this.magicTypeChanged.next(params);
        });
        fromEvent(this._instance, 'dataviewchanged').pipe(takeUntil(this._destroy)).subscribe((params) => {
            this.dataViewChanged.next(params);
        });
        fromEvent(this._instance, 'datazoom').pipe(takeUntil(this._destroy)).subscribe((params) => {
            this.datazoom.next(params);
        });
        fromEvent(this._instance, 'restore').pipe(takeUntil(this._destroy)).subscribe((params) => {
            this.restore.next(params);
        });
        if (this.group) {
            this._instance.group = this.group;
            connect(this.group);
            this._changeDetectorRef.markForCheck();
        }
        merge(fromEvent(window, 'resize').pipe(debounceTime(100)), this._widthSubject.asObservable().pipe(distinctUntilChanged()), this._heightSubject.asObservable().pipe(distinctUntilChanged())).pipe(takeUntil(this._destroy), debounceTime(100)).subscribe(() => {
            if (this._instance) {
                this._instance.resize();
                this._changeDetectorRef.markForCheck();
            }
        });
        this._optionsService.listen().pipe(tap((options) => {
            assignDefined$1(this._options, options);
        }), debounceTime(0), takeUntil(this._destroy)).subscribe(() => {
            this.render();
        });
        timer(500, 250).pipe(takeUntil(this._destroy)).subscribe(() => {
            if (this._elementRef && this._elementRef.nativeElement) {
                this._widthSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().width);
                this._heightSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height);
            }
        });
    }
    /**
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
    { type: TdChartOptionsService$1 }
];
TdChartComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    group: [{ type: Input, args: ['group',] }],
    themeName: [{ type: Input, args: ['themeName',] }],
    renderer: [{ type: Input, args: ['renderer',] }],
    chartClick: [{ type: Output, args: ['chartClick',] }],
    chartDblclick: [{ type: Output, args: ['chartDblclick',] }],
    chartContextmenu: [{ type: Output, args: ['chartContextmenu',] }],
    magicTypeChanged: [{ type: Output, args: ['magicTypeChanged',] }],
    dataViewChanged: [{ type: Output, args: ['dataViewChanged',] }],
    datazoom: [{ type: Output, args: ['datazoom',] }],
    restore: [{ type: Output, args: ['restore',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        let config = assignDefined$1(this._state, {
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
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption(this._axisOption);
    }
}
TdChartAxisComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    id: [{ type: Input, args: ['id',] }],
    show: [{ type: Input, args: ['show',] }],
    gridIndex: [{ type: Input, args: ['gridIndex',] }],
    offset: [{ type: Input, args: ['offset',] }],
    type: [{ type: Input, args: ['type',] }],
    name: [{ type: Input, args: ['name',] }],
    nameLocation: [{ type: Input, args: ['nameLocation',] }],
    nameTextStyle: [{ type: Input, args: ['nameTextStyle',] }],
    nameGap: [{ type: Input, args: ['nameGap',] }],
    nameRotate: [{ type: Input, args: ['nameRotate',] }],
    inverse: [{ type: Input, args: ['inverse',] }],
    boundaryGap: [{ type: Input, args: ['boundaryGap',] }],
    min: [{ type: Input, args: ['min',] }],
    max: [{ type: Input, args: ['max',] }],
    scale: [{ type: Input, args: ['scale',] }],
    minInterval: [{ type: Input, args: ['minInterval',] }],
    interval: [{ type: Input, args: ['interval',] }],
    logBase: [{ type: Input, args: ['logBase',] }],
    silent: [{ type: Input, args: ['silent',] }],
    triggerEvent: [{ type: Input, args: ['triggerEvent',] }],
    axisLine: [{ type: Input, args: ['axisLine',] }],
    axisTick: [{ type: Input, args: ['axisTick',] }],
    axisLabel: [{ type: Input, args: ['axisLabel',] }],
    splitLine: [{ type: Input, args: ['splitLine',] }],
    splitArea: [{ type: Input, args: ['splitArea',] }],
    data: [{ type: Input, args: ['data',] }],
    axisPointer: [{ type: Input, args: ['axisPointer',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartXAxisComponent.ctorParameters = () => [
    { type: TdChartOptionsService$1 }
];
TdChartXAxisComponent.propDecorators = {
    position: [{ type: Input, args: ['position',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartYAxisComponent.ctorParameters = () => [
    { type: TdChartOptionsService$1 }
];
TdChartYAxisComponent.propDecorators = {
    position: [{ type: Input, args: ['position',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        let config = assignDefined$1(this._state, {
            id: this.id,
            source: this.source,
            dimensions: this.dimensions,
            sourceHeader: this.sourceHeader,
        }, this.config ? this.config : {});
        // set dataset configuration in parent chart and render new configurations
        this._optionsService.setOption('dataset', config);
    }
    /**
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
    { type: TdChartOptionsService$1 }
];
TdDatasetComponent.propDecorators = {
    id: [{ type: Input, args: ['id',] }],
    config: [{ type: Input, args: ['config',] }],
    source: [{ type: Input, args: ['source',] }],
    dimensions: [{ type: Input, args: ['dimensions',] }],
    sourceHeader: [{ type: Input, args: ['sourceHeader',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                imports: [
                    CommonModule,
                ],
                declarations: [
                    BASE_MODULE_COMPONENTS,
                ],
                exports: [
                    BASE_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @abstract
 * @template T
 */
class TdSeriesComponent$1 {
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
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        let config = assignDefined$1(this._state, {
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
     * @return {?}
     */
    _removeOption() {
        this.optionsService.removeArrayOption('series', this._state);
    }
}
TdSeriesComponent$1.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    id: [{ type: Input, args: ['id',] }],
    name: [{ type: Input, args: ['name',] }],
    color: [{ type: Input, args: ['color',] }],
    data: [{ type: Input, args: ['data',] }],
    animation: [{ type: Input, args: ['animation',] }],
    animationThreshold: [{ type: Input, args: ['animationThreshold',] }],
    animationDuration: [{ type: Input, args: ['animationDuration',] }],
    animationEasing: [{ type: Input, args: ['animationEasing',] }],
    animationDelay: [{ type: Input, args: ['animationDelay',] }],
    animationDurationUpdate: [{ type: Input, args: ['animationDurationUpdate',] }],
    animationEasingUpdate: [{ type: Input, args: ['animationEasingUpdate',] }],
    animationDelayUpdate: [{ type: Input, args: ['animationDelayUpdate',] }],
    tooltip: [{ type: Input, args: ['tooltip',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartSeriesBarComponent extends TdSeriesComponent {
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
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesBarComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesBarComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesBarComponent.propDecorators = {
    coordinateSystem: [{ type: Input, args: ['coordinateSystem',] }],
    xAxisIndex: [{ type: Input, args: ['xAxisIndex',] }],
    yAxisIndex: [{ type: Input, args: ['yAxisIndex',] }],
    legendHoverLink: [{ type: Input, args: ['legendHoverLink',] }],
    stack: [{ type: Input, args: ['stack',] }],
    cursor: [{ type: Input, args: ['cursor',] }],
    label: [{ type: Input, args: ['label',] }],
    itemStyle: [{ type: Input, args: ['itemStyle',] }],
    emphasis: [{ type: Input, args: ['emphasis',] }],
    barWidth: [{ type: Input, args: ['barWidth',] }],
    barMaxWidth: [{ type: Input, args: ['barMaxWidth',] }],
    barMinHeight: [{ type: Input, args: ['barMinHeight',] }],
    barGap: [{ type: Input, args: ['barGap',] }],
    barCategoryGap: [{ type: Input, args: ['barCategoryGap',] }],
    large: [{ type: Input, args: ['large',] }],
    largeThreshold: [{ type: Input, args: ['largeThreshold',] }],
    progressive: [{ type: Input, args: ['progressive',] }],
    progressiveThreshold: [{ type: Input, args: ['progressiveThreshold',] }],
    progressiveChunkMode: [{ type: Input, args: ['progressiveChunkMode',] }],
    dimensions: [{ type: Input, args: ['dimensions',] }],
    encode: [{ type: Input, args: ['encode',] }],
    seriesLayoutBy: [{ type: Input, args: ['seriesLayoutBy',] }],
    datasetIndex: [{ type: Input, args: ['datasetIndex',] }],
    markPoint: [{ type: Input, args: ['markPoint',] }],
    markLine: [{ type: Input, args: ['markLine',] }],
    markArea: [{ type: Input, args: ['markArea',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const BAR_MODULE_COMPONENTS = [
    TdChartSeriesBarComponent,
];
class CovalentBarEchartsModule {
}
CovalentBarEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    BAR_MODULE_COMPONENTS,
                ],
                exports: [
                    BAR_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartSeriesLineComponent extends TdSeriesComponent {
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
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesLineComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesLineComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesLineComponent.propDecorators = {
    coordinateSystem: [{ type: Input, args: ['coordinateSystem',] }],
    xAxisIndex: [{ type: Input, args: ['xAxisIndex',] }],
    yAxisIndex: [{ type: Input, args: ['yAxisIndex',] }],
    polarIndex: [{ type: Input, args: ['polarIndex',] }],
    symbol: [{ type: Input, args: ['symbol',] }],
    symbolSize: [{ type: Input, args: ['symbolSize',] }],
    symbolRotate: [{ type: Input, args: ['symbolRotate',] }],
    symbolKeepAspect: [{ type: Input, args: ['symbolKeepAspect',] }],
    symbolOffset: [{ type: Input, args: ['symbolOffset',] }],
    showSymbol: [{ type: Input, args: ['showSymbol',] }],
    showAllSymbol: [{ type: Input, args: ['showAllSymbol',] }],
    hoverAnimation: [{ type: Input, args: ['hoverAnimation',] }],
    legendHoverLink: [{ type: Input, args: ['legendHoverLink',] }],
    stack: [{ type: Input, args: ['stack',] }],
    cursor: [{ type: Input, args: ['cursor',] }],
    connectNulls: [{ type: Input, args: ['connectNulls',] }],
    clipOverflow: [{ type: Input, args: ['clipOverflow',] }],
    step: [{ type: Input, args: ['step',] }],
    label: [{ type: Input, args: ['label',] }],
    itemStyle: [{ type: Input, args: ['itemStyle',] }],
    lineStyle: [{ type: Input, args: ['lineStyle',] }],
    areaStyle: [{ type: Input, args: ['areaStyle',] }],
    emphasis: [{ type: Input, args: ['emphasis',] }],
    smooth: [{ type: Input, args: ['smooth',] }],
    smoothMonotone: [{ type: Input, args: ['smoothMonotone',] }],
    sampling: [{ type: Input, args: ['sampling',] }],
    dimensions: [{ type: Input, args: ['dimensions',] }],
    encode: [{ type: Input, args: ['encode',] }],
    seriesLayoutBy: [{ type: Input, args: ['seriesLayoutBy',] }],
    datasetIndex: [{ type: Input, args: ['datasetIndex',] }],
    markPoint: [{ type: Input, args: ['markPoint',] }],
    markLine: [{ type: Input, args: ['markLine',] }],
    markArea: [{ type: Input, args: ['markArea',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }],
    silent: [{ type: Input, args: ['silent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const LINE_MODULE_COMPONENTS = [
    TdChartSeriesLineComponent,
];
class CovalentLineEchartsModule {
}
CovalentLineEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    LINE_MODULE_COMPONENTS,
                ],
                exports: [
                    LINE_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartSeriesScatterComponent extends TdSeriesComponent {
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
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesScatterComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesScatterComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesScatterComponent.propDecorators = {
    coordinateSystem: [{ type: Input, args: ['coordinateSystem',] }],
    xAxisIndex: [{ type: Input, args: ['xAxisIndex',] }],
    yAxisIndex: [{ type: Input, args: ['yAxisIndex',] }],
    polarIndex: [{ type: Input, args: ['polarIndex',] }],
    geoIndex: [{ type: Input, args: ['geoIndex',] }],
    calendarIndex: [{ type: Input, args: ['calendarIndex',] }],
    hoverAnimation: [{ type: Input, args: ['hoverAnimation',] }],
    legendHoverLink: [{ type: Input, args: ['legendHoverLink',] }],
    symbol: [{ type: Input, args: ['symbol',] }],
    symbolSize: [{ type: Input, args: ['symbolSize',] }],
    symbolRotate: [{ type: Input, args: ['symbolRotate',] }],
    symbolKeepAspect: [{ type: Input, args: ['symbolKeepAspect',] }],
    symbolOffset: [{ type: Input, args: ['symbolOffset',] }],
    large: [{ type: Input, args: ['large',] }],
    largeThreshold: [{ type: Input, args: ['largeThreshold',] }],
    cursor: [{ type: Input, args: ['cursor',] }],
    label: [{ type: Input, args: ['label',] }],
    itemStyle: [{ type: Input, args: ['itemStyle',] }],
    emphasis: [{ type: Input, args: ['emphasis',] }],
    progressive: [{ type: Input, args: ['progressive',] }],
    progressiveThreshold: [{ type: Input, args: ['progressiveThreshold',] }],
    dimensions: [{ type: Input, args: ['dimensions',] }],
    encode: [{ type: Input, args: ['encode',] }],
    seriesLayoutBy: [{ type: Input, args: ['seriesLayoutBy',] }],
    datasetIndex: [{ type: Input, args: ['datasetIndex',] }],
    markPoint: [{ type: Input, args: ['markPoint',] }],
    markLine: [{ type: Input, args: ['markLine',] }],
    markArea: [{ type: Input, args: ['markArea',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }],
    silent: [{ type: Input, args: ['silent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const SCATTER_MODULE_COMPONENTS = [
    TdChartSeriesScatterComponent,
];
class CovalentScatterEchartsModule {
}
CovalentScatterEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    SCATTER_MODULE_COMPONENTS,
                ],
                exports: [
                    SCATTER_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartSeriesTreeComponent extends TdSeriesComponent {
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
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesTreeComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesTreeComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesTreeComponent.propDecorators = {
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }],
    left: [{ type: Input, args: ['left',] }],
    top: [{ type: Input, args: ['top',] }],
    right: [{ type: Input, args: ['right',] }],
    bottom: [{ type: Input, args: ['bottom',] }],
    width: [{ type: Input, args: ['width',] }],
    height: [{ type: Input, args: ['height',] }],
    layout: [{ type: Input, args: ['layout',] }],
    orient: [{ type: Input, args: ['orient',] }],
    symbol: [{ type: Input, args: ['symbol',] }],
    symbolSize: [{ type: Input, args: ['symbolSize',] }],
    symbolRotate: [{ type: Input, args: ['symbolRotate',] }],
    symbolKeepAspect: [{ type: Input, args: ['symbolKeepAspect',] }],
    roam: [{ type: Input, args: ['roam',] }],
    expandAndCollapse: [{ type: Input, args: ['expandAndCollapse',] }],
    initialTreeDepth: [{ type: Input, args: ['initialTreeDepth',] }],
    itemStyle: [{ type: Input, args: ['itemStyle',] }],
    label: [{ type: Input, args: ['label',] }],
    lineStyle: [{ type: Input, args: ['lineStyle',] }],
    leaves: [{ type: Input, args: ['leaves',] }],
    emphasis: [{ type: Input, args: ['emphasis',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TREE_MODULE_COMPONENTS = [
    TdChartSeriesTreeComponent,
];
class CovalentTreeEchartsModule {
}
CovalentTreeEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TREE_MODULE_COMPONENTS,
                ],
                exports: [
                    TREE_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdTooltipContext {
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
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        let config = assignDefined(this._state, {
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
            formatter: this.formatter ? this.formatter : (this.formatterTemplate ? this._formatter() : undefined),
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
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('tooltip');
    }
    /**
     * @return {?}
     */
    _formatter() {
        return (params, ticket, callback) => {
            this._context = {
                $implicit: params,
                ticket: ticket,
            };
            // timeout set since we need to set the HTML at the end of the angular lifecycle when
            // the tooltip delay is more than 0
            setTimeout(() => {
                callback(ticket, ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML);
            });
            this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML;
        };
    }
}
TdChartTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-tooltip',
                template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartTooltipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdChartOptionsService }
];
TdChartTooltipComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    show: [{ type: Input, args: ['show',] }],
    trigger: [{ type: Input, args: ['trigger',] }],
    axisPointer: [{ type: Input, args: ['axisPointer',] }],
    showContent: [{ type: Input, args: ['showContent',] }],
    alwaysShowContent: [{ type: Input, args: ['alwaysShowContent',] }],
    triggerOn: [{ type: Input, args: ['triggerOn',] }],
    showDelay: [{ type: Input, args: ['showDelay',] }],
    hideDelay: [{ type: Input, args: ['hideDelay',] }],
    enterable: [{ type: Input, args: ['enterable',] }],
    renderMode: [{ type: Input, args: ['renderMode',] }],
    confine: [{ type: Input, args: ['confine',] }],
    transitionDuration: [{ type: Input, args: ['transitionDuration',] }],
    position: [{ type: Input, args: ['position',] }],
    formatter: [{ type: Input, args: ['formatter',] }],
    backgroundColor: [{ type: Input, args: ['backgroundColor',] }],
    borderColor: [{ type: Input, args: ['borderColor',] }],
    borderWidth: [{ type: Input, args: ['borderWidth',] }],
    padding: [{ type: Input, args: ['padding',] }],
    textStyle: [{ type: Input, args: ['textStyle',] }],
    extraCssText: [{ type: Input, args: ['extraCssText',] }],
    formatterTemplate: [{ type: ContentChild, args: [TdChartTooltipFormatterDirective, { read: TemplateRef },] }],
    fullTemplate: [{ type: ViewChild, args: ['tooltipContent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        let config = assignDefined(this._state, {
            position: this.position,
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth,
            padding: this.padding,
            textStyle: this.textStyle,
            extraCssText: this.extraCssText,
            formatter: this.formatter ? this.formatter : (this.formatterTemplate ? this._formatter() : undefined),
        }, this.config ? this.config : {});
        // set series tooltip configuration in parent chart and render new configurations
        this._seriesComponent.setStateOption('tooltip', config);
    }
    /**
     * Formatter for tooltip
     *
     * @return {?}
     */
    _formatter() {
        return (params, ticket, callback) => {
            this._context = {
                $implicit: params,
                ticket: ticket,
            };
            // timeout set since we need to set the HTML at the end of the angular lifecycle when
            // the tooltip delay is more than 0
            setTimeout(() => {
                callback(ticket, ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML);
            });
            this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML;
        };
    }
    /**
     * @return {?}
     */
    _removeOption() {
        this._seriesComponent.removeStateOption('tooltip');
    }
}
TdSeriesTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series-tooltip',
                template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdSeriesTooltipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdSeriesComponent }
];
TdSeriesTooltipComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    formatter: [{ type: Input, args: ['formatter',] }],
    position: [{ type: Input, args: ['position',] }],
    backgroundColor: [{ type: Input, args: ['backgroundColor',] }],
    borderColor: [{ type: Input, args: ['borderColor',] }],
    borderWidth: [{ type: Input, args: ['borderWidth',] }],
    padding: [{ type: Input, args: ['padding',] }],
    textStyle: [{ type: Input, args: ['textStyle',] }],
    extraCssText: [{ type: Input, args: ['extraCssText',] }],
    formatterTemplate: [{ type: ContentChild, args: [TdChartTooltipFormatterDirective, { read: TemplateRef },] }],
    fullTemplate: [{ type: ViewChild, args: ['tooltipContent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TOOLTIP_MODULE_COMPONENTS,
                ],
                exports: [
                    TOOLTIP_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
     * @return {?}
     */
    _setOptions() {
        this._checkFormatterTemplate();
        /** @type {?} */
        let config = assignDefined(this._state, {
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
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('toolbox');
    }
    /**
     * @return {?}
     */
    _checkFormatterTemplate() {
        if (this.formatterTemplate) {
            this.feature = Object.assign({}, this.feature, { dataView: Object.assign({}, this.feature.dataView, { optionToContent: this._optionToContentFormatter() }) });
        }
    }
    /**
     * @return {?}
     */
    _optionToContentFormatter() {
        return () => {
            this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML;
        };
    }
}
TdChartToolboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-toolbox',
                template: "<ng-template #toolboxContent\n            [ngTemplateOutlet]=\"formatterTemplate\">\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartToolboxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdChartOptionsService }
];
TdChartToolboxComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    show: [{ type: Input, args: ['show',] }],
    trigger: [{ type: Input, args: ['name',] }],
    orient: [{ type: Input, args: ['orient',] }],
    itemSize: [{ type: Input, args: ['itemSize',] }],
    itemGap: [{ type: Input, args: ['itemGap',] }],
    showTitle: [{ type: Input, args: ['showTitle',] }],
    label: [{ type: Input, args: ['label',] }],
    feature: [{ type: Input, args: ['feature',] }],
    iconStyle: [{ type: Input, args: ['iconStyle',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }],
    transitionDuration: [{ type: Input, args: ['transitionDuration',] }],
    left: [{ type: Input, args: ['left',] }],
    top: [{ type: Input, args: ['top',] }],
    right: [{ type: Input, args: ['right',] }],
    bottom: [{ type: Input, args: ['bottom',] }],
    width: [{ type: Input, args: ['width',] }],
    height: [{ type: Input, args: ['height',] }],
    formatterTemplate: [{ type: ContentChild, args: [TdChartViewDataFormatterDirective, { read: TemplateRef },] }],
    fullTemplate: [{ type: ViewChild, args: ['toolboxContent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TOOLBOX_MODULE_COMPONENTS = [
    TdChartToolboxComponent,
    TdChartViewDataFormatterDirective,
];
class CovalentToolboxEchartsModule {
}
CovalentToolboxEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TOOLBOX_MODULE_COMPONENTS,
                ],
                exports: [
                    TOOLBOX_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { TdChartComponent, TdChartAxisComponent, TdChartYAxisComponent, TdChartXAxisComponent, TdDatasetComponent, TdChartOptionsService$1 as TdChartOptionsService, CHART_PROVIDER, BASE_MODULE_COMPONENTS, CovalentBaseEchartsModule, assignDefined$1 as assignDefined, registerTheme$1 as registerTheme, registerDefaultThemes, getThemes, TdSeriesComponent$1 as TdSeriesComponent, BAR_MODULE_COMPONENTS, CovalentBarEchartsModule, TdChartSeriesBarComponent, LINE_MODULE_COMPONENTS, CovalentLineEchartsModule, TdChartSeriesLineComponent, SCATTER_MODULE_COMPONENTS, CovalentScatterEchartsModule, TdChartSeriesScatterComponent, TREE_MODULE_COMPONENTS, CovalentTreeEchartsModule, TdChartSeriesTreeComponent, TOOLTIP_MODULE_COMPONENTS, CovalentTooltipEchartsModule, TdTooltipContext, TdChartTooltipFormatterDirective, TdChartTooltipComponent, TdSeriesTooltipComponent, TOOLBOX_MODULE_COMPONENTS, CovalentToolboxEchartsModule, TdChartViewDataFormatterDirective, TdChartToolboxComponent, CHART_PROVIDER_FACTORY as ɵa };

//# sourceMappingURL=covalent-echarts.js.map