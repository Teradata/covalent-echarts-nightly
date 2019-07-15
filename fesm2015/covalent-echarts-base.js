import { CommonModule } from '@angular/common';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { BehaviorSubject, Subject, fromEvent, merge, timer } from 'rxjs';
import { init, connect, dispose, registerTheme } from 'echarts/lib/echarts';
import 'zrender/lib/svg/svg';
import { Injectable, Optional, SkipSelf, Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
TdChartOptionsService.decorators = [
    { type: Injectable }
];
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
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/**
 * @param {?} target
 * @param {...?} sources
 * @return {?}
 */
function assignDefined(target, ...sources) {
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
            this._instance.setOption(assignDefined(this._state, {
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
            assignDefined(this._options, options);
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
    { type: TdChartOptionsService }
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
        let config = assignDefined(this._state, {
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
    { type: TdChartOptionsService }
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
    { type: TdChartOptionsService }
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
        let config = assignDefined(this._state, {
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
    { type: TdChartOptionsService }
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
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        let config = assignDefined(this._state, {
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
TdSeriesComponent.propDecorators = {
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

export { TdChartComponent, TdChartAxisComponent, TdChartYAxisComponent, TdChartXAxisComponent, TdDatasetComponent, TdChartOptionsService, CHART_PROVIDER, BASE_MODULE_COMPONENTS, CovalentBaseEchartsModule, assignDefined, registerTheme$1 as registerTheme, registerDefaultThemes, getThemes, TdSeriesComponent, CHART_PROVIDER_FACTORY as ɵa };

//# sourceMappingURL=covalent-echarts-base.js.map