import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/sankey';
import { __extends } from 'tslib';
import { Component, Input, ChangeDetectionStrategy, forwardRef, NgModule } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent } from '@covalent/echarts/base';

var TdChartSeriesSankeyComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesSankeyComponent, _super);
    function TdChartSeriesSankeyComponent(_optionsService) {
        return _super.call(this, 'sankey', _optionsService) || this;
    }
    TdChartSeriesSankeyComponent.prototype.getConfig = function () {
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
                    providers: [{
                            provide: TdSeriesComponent, useExisting: forwardRef(function () { return TdChartSeriesSankeyComponent; }),
                        }]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesSankeyComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesSankeyComponent.propDecorators = {
        zlevel: [{ type: Input, args: ['zlevel',] }],
        z: [{ type: Input, args: ['z',] }],
        left: [{ type: Input, args: ['left',] }],
        top: [{ type: Input, args: ['top',] }],
        right: [{ type: Input, args: ['right',] }],
        bottom: [{ type: Input, args: ['bottom',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }],
        nodeWidth: [{ type: Input, args: ['nodeWidth',] }],
        nodeGap: [{ type: Input, args: ['nodeGap',] }],
        layoutIterations: [{ type: Input, args: ['layoutIterations',] }],
        orient: [{ type: Input, args: ['orient',] }],
        draggable: [{ type: Input, args: ['draggable',] }],
        focusNodeAdjacency: [{ type: Input, args: ['focusNodeAdjacency',] }],
        label: [{ type: Input, args: ['label',] }],
        itemStyle: [{ type: Input, args: ['itemStyle',] }],
        lineStyle: [{ type: Input, args: ['lineStyle',] }],
        emphasis: [{ type: Input, args: ['emphasis',] }],
        nodes: [{ type: Input, args: ['nodes',] }],
        links: [{ type: Input, args: ['links',] }],
        edges: [{ type: Input, args: ['edges',] }],
        silent: [{ type: Input, args: ['silent',] }]
    };
    return TdChartSeriesSankeyComponent;
}(TdSeriesComponent));

var SANKEY_MODULE_COMPONENTS = [
    TdChartSeriesSankeyComponent,
];
var CovalentSankeyEchartsModule = /** @class */ (function () {
    function CovalentSankeyEchartsModule() {
    }
    CovalentSankeyEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        SANKEY_MODULE_COMPONENTS,
                    ],
                    exports: [
                        SANKEY_MODULE_COMPONENTS,
                    ],
                },] }
    ];
    return CovalentSankeyEchartsModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { SANKEY_MODULE_COMPONENTS, CovalentSankeyEchartsModule, TdChartSeriesSankeyComponent };

//# sourceMappingURL=covalent-echarts-sankey.js.map