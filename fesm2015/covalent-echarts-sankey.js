import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/sankey';
import { TdSeriesComponent, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TdChartSeriesSankeyComponent extends TdSeriesComponent {
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
                        provide: TdSeriesComponent,
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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

export { CovalentSankeyEchartsModule, SANKEY_MODULE_COMPONENTS, TdChartSeriesSankeyComponent };
//# sourceMappingURL=covalent-echarts-sankey.js.map
