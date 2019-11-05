import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/treemap';
import { __extends } from 'tslib';
import { TdSeriesComponent, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdChartSeriesTreemapComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesTreemapComponent, _super);
    function TdChartSeriesTreemapComponent(_optionsService) {
        var _this = _super.call(this, 'treemap', _optionsService) || this;
        _this.config = {};
        return _this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesTreemapComponent.prototype.getConfig = /**
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
            squareRatio: this.squareRatio,
            leafDepth: this.leafDepth,
            drillDownIcon: this.drillDownIcon,
            roam: this.roam,
            nodeClick: this.nodeClick,
            zoomToNodeRatio: this.zoomToNodeRatio,
            levels: this.levels,
            silent: this.silent,
            visualDimension: this.visualDimension,
            visualMin: this.visualMin,
            visualMax: this.visualMax,
            colorAlpha: this.colorAlpha,
            colorSaturation: this.colorSaturation,
            colorMappingBy: this.colorMappingBy,
            visibleMin: this.visibleMin,
            childrenVisibleMin: this.childrenVisibleMin,
            itemStyle: this.itemStyle,
            label: this.label,
            upperLabel: this.upperLabel,
            breadcrumb: this.breadcrumb,
            emphasis: this.emphasis,
        };
    };
    TdChartSeriesTreemapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-treemap]',
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
                            function () { return TdChartSeriesTreemapComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesTreemapComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesTreemapComponent.propDecorators = {
        config: [{ type: Input }],
        id: [{ type: Input }],
        name: [{ type: Input }],
        data: [{ type: Input }],
        zlevel: [{ type: Input }],
        z: [{ type: Input }],
        left: [{ type: Input }],
        top: [{ type: Input }],
        right: [{ type: Input }],
        bottom: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        squareRatio: [{ type: Input }],
        leafDepth: [{ type: Input }],
        drillDownIcon: [{ type: Input }],
        roam: [{ type: Input }],
        nodeClick: [{ type: Input }],
        zoomToNodeRatio: [{ type: Input }],
        levels: [{ type: Input }],
        silent: [{ type: Input }],
        visualDimension: [{ type: Input }],
        visualMin: [{ type: Input }],
        visualMax: [{ type: Input }],
        colorAlpha: [{ type: Input }],
        colorSaturation: [{ type: Input }],
        colorMappingBy: [{ type: Input }],
        visibleMin: [{ type: Input }],
        childrenVisibleMin: [{ type: Input }],
        itemStyle: [{ type: Input }],
        label: [{ type: Input }],
        upperLabel: [{ type: Input }],
        breadcrumb: [{ type: Input }],
        emphasis: [{ type: Input }],
        tooltip: [{ type: Input }]
    };
    return TdChartSeriesTreemapComponent;
}(TdSeriesComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var TREEMAP_MODULE_COMPONENTS = [TdChartSeriesTreemapComponent];
var CovalentTreemapEchartsModule = /** @class */ (function () {
    function CovalentTreemapEchartsModule() {
    }
    CovalentTreemapEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [TREEMAP_MODULE_COMPONENTS],
                    exports: [TREEMAP_MODULE_COMPONENTS],
                },] }
    ];
    return CovalentTreemapEchartsModule;
}());

export { CovalentTreemapEchartsModule, TREEMAP_MODULE_COMPONENTS, TdChartSeriesTreemapComponent };
//# sourceMappingURL=covalent-echarts-treemap.js.map
