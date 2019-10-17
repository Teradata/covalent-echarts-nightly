import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/pie';
import { __extends } from 'tslib';
import { TdSeriesComponent, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var TdChartSeriesPieComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesPieComponent, _super);
    function TdChartSeriesPieComponent(_optionsService) {
        return _super.call(this, 'pie', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesPieComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return {
            legendHoverLink: this.legendHoverLink,
            label: this.label,
            itemStyle: this.itemStyle,
            emphasis: this.emphasis,
            selectedMode: this.selectedMode,
            selectedOffset: this.selectedOffset,
            clockwise: this.clockwise,
            startAngle: this.startAngle,
            minAngle: this.minAngle,
            minShowLabelAngle: this.minShowLabelAngle,
            roseType: this.roseType,
            avoidLabelOverlap: this.avoidLabelOverlap,
            stillShowZeroSum: this.stillShowZeroSum,
            cursor: this.cursor,
            labelLine: this.labelLine,
            seriesLayoutBy: this.seriesLayoutBy,
            datasetIndex: this.datasetIndex,
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            center: this.center,
            radius: this.radius,
        };
    };
    TdChartSeriesPieComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-pie]',
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
                            function () { return TdChartSeriesPieComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesPieComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesPieComponent.propDecorators = {
        legendHoverLink: [{ type: Input, args: ['legendHoverLink',] }],
        hoverAnimation: [{ type: Input, args: ['hoverAnimation',] }],
        hoverOffset: [{ type: Input, args: ['hoverOffset',] }],
        selectedMode: [{ type: Input, args: ['selectedMode',] }],
        selectedOffset: [{ type: Input, args: ['selectedOffset',] }],
        clockwise: [{ type: Input, args: ['clockwise',] }],
        startAngle: [{ type: Input, args: ['startAngle',] }],
        minAngle: [{ type: Input, args: ['minAngle',] }],
        minShowLabelAngle: [{ type: Input, args: ['minShowLabelAngle',] }],
        roseType: [{ type: Input, args: ['roseType',] }],
        avoidLabelOverlap: [{ type: Input, args: ['avoidLabelOverlap',] }],
        stillShowZeroSum: [{ type: Input, args: ['stillShowZeroSum',] }],
        cursor: [{ type: Input, args: ['cursor',] }],
        labelLine: [{ type: Input, args: ['labelLine',] }],
        label: [{ type: Input, args: ['label',] }],
        itemStyle: [{ type: Input, args: ['itemStyle',] }],
        emphasis: [{ type: Input, args: ['emphasis',] }],
        seriesLayoutBy: [{ type: Input, args: ['seriesLayoutBy',] }],
        datasetIndex: [{ type: Input, args: ['datasetIndex',] }],
        markPoint: [{ type: Input, args: ['markPoint',] }],
        markLine: [{ type: Input, args: ['markLine',] }],
        markArea: [{ type: Input, args: ['markArea',] }],
        zlevel: [{ type: Input, args: ['zlevel',] }],
        z: [{ type: Input, args: ['z',] }],
        center: [{ type: Input, args: ['center',] }],
        radius: [{ type: Input, args: ['radius',] }]
    };
    return TdChartSeriesPieComponent;
}(TdSeriesComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var PIE_MODULE_COMPONENTS = [TdChartSeriesPieComponent];
var CovalentPieEchartsModule = /** @class */ (function () {
    function CovalentPieEchartsModule() {
    }
    CovalentPieEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [PIE_MODULE_COMPONENTS],
                    exports: [PIE_MODULE_COMPONENTS],
                },] }
    ];
    return CovalentPieEchartsModule;
}());

export { CovalentPieEchartsModule, PIE_MODULE_COMPONENTS, TdChartSeriesPieComponent };
//# sourceMappingURL=covalent-echarts-pie.js.map
