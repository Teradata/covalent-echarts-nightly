import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/sankey';
import { __extends } from 'tslib';
import { TdSeriesComponent, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdChartSeriesSankeyComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesSankeyComponent, _super);
    function TdChartSeriesSankeyComponent(_optionsService) {
        return _super.call(this, 'sankey', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesSankeyComponent.prototype.getConfig = /**
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
    };
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
                            function () { return TdChartSeriesSankeyComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesSankeyComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
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
    return TdChartSeriesSankeyComponent;
}(TdSeriesComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var SANKEY_MODULE_COMPONENTS = [TdChartSeriesSankeyComponent];
var CovalentSankeyEchartsModule = /** @class */ (function () {
    function CovalentSankeyEchartsModule() {
    }
    CovalentSankeyEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [SANKEY_MODULE_COMPONENTS],
                    exports: [SANKEY_MODULE_COMPONENTS],
                },] }
    ];
    return CovalentSankeyEchartsModule;
}());

export { CovalentSankeyEchartsModule, SANKEY_MODULE_COMPONENTS, TdChartSeriesSankeyComponent };
//# sourceMappingURL=covalent-echarts-sankey.js.map
