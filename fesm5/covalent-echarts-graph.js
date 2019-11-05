import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/graph';
import { __extends } from 'tslib';
import { TdSeriesComponent, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdChartSeriesGraphComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesGraphComponent, _super);
    function TdChartSeriesGraphComponent(_optionsService) {
        return _super.call(this, 'graph', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesGraphComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return {
            legendHoverLink: this.legendHoverLink,
            coordinateSystem: this.coordinateSystem,
            xAxisIndex: this.xAxisIndex,
            yAxisIndex: this.yAxisIndex,
            polarIndex: this.polarIndex,
            calendarIndex: this.calendarIndex,
            geoIndex: this.geoIndex,
            hoverAnimation: this.hoverAnimation,
            circular: this.circular,
            force: this.force,
            layout: this.layout,
            nodeScaleRatio: this.nodeScaleRatio,
            draggable: this.draggable,
            symbol: this.symbol,
            symbolSize: this.symbolSize,
            symbolRotate: this.symbolRotate,
            symbolKeepAspect: this.symbolKeepAspect,
            symbolOffset: this.symbolOffset,
            focusNodeAdjacency: this.focusNodeAdjacency,
            edgeSymbol: this.edgeSymbol,
            edgeSymbolSize: this.edgeSymbolSize,
            cursor: this.cursor,
            roam: this.roam,
            itemStyle: this.itemStyle,
            lineStyle: this.lineStyle,
            label: this.label,
            edgeLabel: this.edgeLabel,
            emphasis: this.emphasis,
            categories: this.categories,
            nodes: this.nodes,
            links: this.links,
            edges: this.edges,
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            silent: this.silent,
            left: this.left,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            width: this.width,
            height: this.height,
        };
    };
    TdChartSeriesGraphComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-graph]',
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
                            function () { return TdChartSeriesGraphComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesGraphComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesGraphComponent.propDecorators = {
        legendHoverLink: [{ type: Input }],
        coordinateSystem: [{ type: Input }],
        xAxisIndex: [{ type: Input }],
        yAxisIndex: [{ type: Input }],
        polarIndex: [{ type: Input }],
        calendarIndex: [{ type: Input }],
        geoIndex: [{ type: Input }],
        hoverAnimation: [{ type: Input }],
        circular: [{ type: Input }],
        force: [{ type: Input }],
        layout: [{ type: Input }],
        nodeScaleRatio: [{ type: Input }],
        draggable: [{ type: Input }],
        symbol: [{ type: Input }],
        symbolSize: [{ type: Input }],
        symbolRotate: [{ type: Input }],
        symbolKeepAspect: [{ type: Input }],
        symbolOffset: [{ type: Input }],
        focusNodeAdjacency: [{ type: Input }],
        edgeSymbol: [{ type: Input }],
        edgeSymbolSize: [{ type: Input }],
        cursor: [{ type: Input }],
        roam: [{ type: Input }],
        initialTreeDepth: [{ type: Input }],
        itemStyle: [{ type: Input }],
        lineStyle: [{ type: Input }],
        label: [{ type: Input }],
        edgeLabel: [{ type: Input }],
        emphasis: [{ type: Input }],
        categories: [{ type: Input }],
        nodes: [{ type: Input }],
        links: [{ type: Input }],
        edges: [{ type: Input }],
        markPoint: [{ type: Input }],
        markLine: [{ type: Input }],
        markArea: [{ type: Input }],
        zlevel: [{ type: Input }],
        z: [{ type: Input }],
        silent: [{ type: Input }],
        left: [{ type: Input }],
        top: [{ type: Input }],
        right: [{ type: Input }],
        bottom: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }]
    };
    return TdChartSeriesGraphComponent;
}(TdSeriesComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var GRAPH_MODULE_COMPONENTS = [TdChartSeriesGraphComponent];
var CovalentGraphEchartsModule = /** @class */ (function () {
    function CovalentGraphEchartsModule() {
    }
    CovalentGraphEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [GRAPH_MODULE_COMPONENTS],
                    exports: [GRAPH_MODULE_COMPONENTS],
                },] }
    ];
    return CovalentGraphEchartsModule;
}());

export { CovalentGraphEchartsModule, GRAPH_MODULE_COMPONENTS, TdChartSeriesGraphComponent };
//# sourceMappingURL=covalent-echarts-graph.js.map
