import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/treemap';
import { __extends } from 'tslib';
import { Component, Input, ChangeDetectionStrategy, forwardRef, NgModule } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                    providers: [{
                            provide: TdSeriesComponent, useExisting: forwardRef(function () { return TdChartSeriesTreemapComponent; }),
                        }]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesTreemapComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesTreemapComponent.propDecorators = {
        config: [{ type: Input, args: ['config',] }],
        id: [{ type: Input, args: ['id',] }],
        name: [{ type: Input, args: ['name',] }],
        data: [{ type: Input, args: ['data',] }],
        zlevel: [{ type: Input, args: ['zlevel',] }],
        z: [{ type: Input, args: ['z',] }],
        left: [{ type: Input, args: ['left',] }],
        top: [{ type: Input, args: ['top',] }],
        right: [{ type: Input, args: ['right',] }],
        bottom: [{ type: Input, args: ['bottom',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }],
        squareRatio: [{ type: Input, args: ['squareRatio',] }],
        leafDepth: [{ type: Input, args: ['leafDepth',] }],
        drillDownIcon: [{ type: Input, args: ['drillDownIcon',] }],
        roam: [{ type: Input, args: ['roam',] }],
        nodeClick: [{ type: Input, args: ['nodeClick',] }],
        zoomToNodeRatio: [{ type: Input, args: ['zoomToNodeRatio',] }],
        levels: [{ type: Input, args: ['levels',] }],
        silent: [{ type: Input, args: ['silent',] }],
        visualDimension: [{ type: Input, args: ['visualDimension',] }],
        visualMin: [{ type: Input, args: ['visualMin',] }],
        visualMax: [{ type: Input, args: ['visualMax',] }],
        colorAlpha: [{ type: Input, args: ['colorAlpha',] }],
        colorSaturation: [{ type: Input, args: ['colorSaturation',] }],
        colorMappingBy: [{ type: Input, args: ['colorMappingBy',] }],
        visibleMin: [{ type: Input, args: ['visibleMin',] }],
        childrenVisibleMin: [{ type: Input, args: ['childrenVisibleMin',] }],
        itemStyle: [{ type: Input, args: ['itemStyle',] }],
        label: [{ type: Input, args: ['label',] }],
        upperLabel: [{ type: Input, args: ['upperLabel',] }],
        breadcrumb: [{ type: Input, args: ['breadcrumb',] }],
        emphasis: [{ type: Input, args: ['emphasis',] }],
        tooltip: [{ type: Input, args: ['tooltip',] }]
    };
    return TdChartSeriesTreemapComponent;
}(TdSeriesComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TREEMAP_MODULE_COMPONENTS = [
    TdChartSeriesTreemapComponent,
];
var CovalentTreemapEchartsModule = /** @class */ (function () {
    function CovalentTreemapEchartsModule() {
    }
    CovalentTreemapEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        TREEMAP_MODULE_COMPONENTS,
                    ],
                    exports: [
                        TREEMAP_MODULE_COMPONENTS,
                    ],
                },] }
    ];
    return CovalentTreemapEchartsModule;
}());

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

export { TREEMAP_MODULE_COMPONENTS, CovalentTreemapEchartsModule, TdChartSeriesTreemapComponent };

//# sourceMappingURL=covalent-echarts-treemap.js.map