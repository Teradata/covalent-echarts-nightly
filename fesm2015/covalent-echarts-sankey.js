import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/sankey';
import { TdSeriesDirective, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * Generated from: sankey.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ITdSankeyEmphasisLineStyle() { }
if (false) {
    /** @type {?|undefined} */
    ITdSankeyEmphasisLineStyle.prototype.color;
    /** @type {?|undefined} */
    ITdSankeyEmphasisLineStyle.prototype.opacity;
    /** @type {?|undefined} */
    ITdSankeyEmphasisLineStyle.prototype.curveness;
}
/**
 * @record
 */
function ITdSankeyEmphasis() { }
if (false) {
    /** @type {?} */
    ITdSankeyEmphasis.prototype.lineStyle;
}
/**
 * @record
 */
function ITdSankeySeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.zlevel;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.z;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.left;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.top;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.right;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.bottom;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.width;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.height;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.nodeWidth;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.nodeGap;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.layoutIterations;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.orient;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.draggable;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.focusNodeAdjacency;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.label;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.lineStyle;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.emphasis;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.data;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.nodes;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.links;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.edges;
    /** @type {?|undefined} */
    ITdSankeySeries.prototype.silent;
}
class TdChartSeriesSankeyComponent extends TdSeriesDirective {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('sankey', _optionsService);
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
            nodeWidth: this.nodeWidth,
            nodeGap: this.nodeGap,
            layoutIterations: this.layoutIterations,
            orient: this.orient,
            draggable: this.draggable,
            focusNodeAdjacency: this.focusNodeAdjacency,
            label: this.label,
            itemStyle: this.itemStyle,
            lineStyle: this.lineStyle,
            emphasis: this.emphasis,
            nodes: this.nodes,
            links: this.links,
            edges: this.edges,
            silent: this.silent,
        };
    }
}
TdChartSeriesSankeyComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-sankey]',
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
                        () => TdChartSeriesSankeyComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesSankeyComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesSankeyComponent.propDecorators = {
    zlevel: [{ type: Input }],
    z: [{ type: Input }],
    left: [{ type: Input }],
    top: [{ type: Input }],
    right: [{ type: Input }],
    bottom: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    nodeWidth: [{ type: Input }],
    nodeGap: [{ type: Input }],
    layoutIterations: [{ type: Input }],
    orient: [{ type: Input }],
    draggable: [{ type: Input }],
    focusNodeAdjacency: [{ type: Input }],
    label: [{ type: Input }],
    itemStyle: [{ type: Input }],
    lineStyle: [{ type: Input }],
    emphasis: [{ type: Input }],
    nodes: [{ type: Input }],
    links: [{ type: Input }],
    edges: [{ type: Input }],
    silent: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.zlevel;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.z;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.left;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.top;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.right;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.bottom;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.width;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.height;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.nodeWidth;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.nodeGap;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.layoutIterations;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.orient;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.draggable;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.focusNodeAdjacency;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.label;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.itemStyle;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.lineStyle;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.emphasis;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.nodes;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.links;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.edges;
    /** @type {?} */
    TdChartSeriesSankeyComponent.prototype.silent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: sankey.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SANKEY_MODULE_COMPONENTS = [TdChartSeriesSankeyComponent];
class CovalentSankeyEchartsModule {
}
CovalentSankeyEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SANKEY_MODULE_COMPONENTS],
                exports: [SANKEY_MODULE_COMPONENTS],
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
 * Generated from: covalent-echarts-sankey.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentSankeyEchartsModule, SANKEY_MODULE_COMPONENTS, TdChartSeriesSankeyComponent };
//# sourceMappingURL=covalent-echarts-sankey.js.map
