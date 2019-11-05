import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/tree';
import { __extends } from 'tslib';
import { TdSeriesComponent, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdChartSeriesTreeComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesTreeComponent, _super);
    function TdChartSeriesTreeComponent(_optionsService) {
        return _super.call(this, 'tree', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesTreeComponent.prototype.getConfig = /**
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
    };
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
                            provide: TdSeriesComponent,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return TdChartSeriesTreeComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesTreeComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
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
    return TdChartSeriesTreeComponent;
}(TdSeriesComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TREE_MODULE_COMPONENTS = [TdChartSeriesTreeComponent];
var CovalentTreeEchartsModule = /** @class */ (function () {
    function CovalentTreeEchartsModule() {
    }
    CovalentTreeEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [TREE_MODULE_COMPONENTS],
                    exports: [TREE_MODULE_COMPONENTS],
                },] }
    ];
    return CovalentTreeEchartsModule;
}());

export { CovalentTreeEchartsModule, TREE_MODULE_COMPONENTS, TdChartSeriesTreeComponent };
//# sourceMappingURL=covalent-echarts-tree.js.map
