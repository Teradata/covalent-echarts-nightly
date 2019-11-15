import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/pie';
import { __extends } from 'tslib';
import { TdSeriesComponent, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ITdPieSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdPieSeries.prototype.legendHoverLink;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.hoverAnimation;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.hoverOffset;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.selectedMode;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.selectedOffset;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.clockwise;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.startAngle;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.minAngle;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.minShowLabelAngle;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.roseType;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.avoidLabelOverlap;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.stillShowZeroSum;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.cursor;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.labelLine;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.Label;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.emphasis;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.seriesLayoutBy;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.datasetIndex;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.data;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.markPoint;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.markLine;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.markArea;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.Zlevel;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.z;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.center;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.radius;
    /** @type {?|undefined} */
    ITdPieSeries.prototype.silent;
}
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
        legendHoverLink: [{ type: Input }],
        hoverAnimation: [{ type: Input }],
        hoverOffset: [{ type: Input }],
        selectedMode: [{ type: Input }],
        selectedOffset: [{ type: Input }],
        clockwise: [{ type: Input }],
        startAngle: [{ type: Input }],
        minAngle: [{ type: Input }],
        minShowLabelAngle: [{ type: Input }],
        roseType: [{ type: Input }],
        avoidLabelOverlap: [{ type: Input }],
        stillShowZeroSum: [{ type: Input }],
        cursor: [{ type: Input }],
        labelLine: [{ type: Input }],
        label: [{ type: Input }],
        itemStyle: [{ type: Input }],
        emphasis: [{ type: Input }],
        seriesLayoutBy: [{ type: Input }],
        datasetIndex: [{ type: Input }],
        markPoint: [{ type: Input }],
        markLine: [{ type: Input }],
        markArea: [{ type: Input }],
        zlevel: [{ type: Input }],
        z: [{ type: Input }],
        center: [{ type: Input }],
        radius: [{ type: Input }]
    };
    return TdChartSeriesPieComponent;
}(TdSeriesComponent));
if (false) {
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.legendHoverLink;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.hoverAnimation;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.hoverOffset;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.selectedMode;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.selectedOffset;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.clockwise;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.startAngle;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.minAngle;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.minShowLabelAngle;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.roseType;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.avoidLabelOverlap;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.stillShowZeroSum;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.cursor;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.labelLine;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.label;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.itemStyle;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.emphasis;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.seriesLayoutBy;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.datasetIndex;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.markPoint;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.markLine;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.markArea;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.zlevel;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.z;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.center;
    /** @type {?} */
    TdChartSeriesPieComponent.prototype.radius;
}

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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentPieEchartsModule, PIE_MODULE_COMPONENTS, TdChartSeriesPieComponent };
//# sourceMappingURL=covalent-echarts-pie.js.map
