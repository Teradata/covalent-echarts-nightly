import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/tree';
import { TdSeriesDirective, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * Generated from: tree.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
class TdChartSeriesTreeComponent extends TdSeriesDirective {
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
                        provide: TdSeriesDirective,
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
    { type: TdChartOptionsService }
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
 * Generated from: tree.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * Generated from: covalent-echarts-tree.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentTreeEchartsModule, TREE_MODULE_COMPONENTS, TdChartSeriesTreeComponent };
//# sourceMappingURL=covalent-echarts-tree.js.map
