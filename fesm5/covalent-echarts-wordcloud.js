import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts-wordcloud';
import { __extends } from 'tslib';
import { TdSeriesComponent, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ITdWordcloudTextStyle() { }
if (false) {
    /** @type {?|undefined} */
    ITdWordcloudTextStyle.prototype.normal;
    /** @type {?|undefined} */
    ITdWordcloudTextStyle.prototype.emphasis;
}
/**
 * @record
 */
function ITdWordCloudData() { }
if (false) {
    /** @type {?} */
    ITdWordCloudData.prototype.name;
    /** @type {?} */
    ITdWordCloudData.prototype.value;
    /** @type {?|undefined} */
    ITdWordCloudData.prototype.textStyle;
}
/**
 * @record
 */
function ITdWordcloudSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.data;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.shape;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.left;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.top;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.width;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.height;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.right;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.bottom;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.sizeRange;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.rotationRange;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.rotationStep;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.gridSize;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.drawOutOfBound;
    /** @type {?|undefined} */
    ITdWordcloudSeries.prototype.textStyle;
}
var TdChartSeriesWordcloudComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesWordcloudComponent, _super);
    function TdChartSeriesWordcloudComponent(_optionsService) {
        return _super.call(this, 'wordCloud', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesWordcloudComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return {
            shape: this.shape,
            left: this.left,
            top: this.top,
            width: this.width,
            height: this.height,
            right: this.right,
            bottom: this.bottom,
            sizeRange: this.sizeRange,
            rotationRange: this.rotationRange,
            rotationStep: this.rotationStep,
            gridSize: this.gridSize,
            drawOutOfBound: this.drawOutOfBound,
            textStyle: this.textStyle,
        };
    };
    TdChartSeriesWordcloudComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-wordCloud]',
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
                            function () { return TdChartSeriesWordcloudComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesWordcloudComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesWordcloudComponent.propDecorators = {
        data: [{ type: Input }],
        shape: [{ type: Input }],
        left: [{ type: Input }],
        top: [{ type: Input }],
        width: [{ type: Input }],
        height: [{ type: Input }],
        right: [{ type: Input }],
        bottom: [{ type: Input }],
        sizeRange: [{ type: Input }],
        rotationRange: [{ type: Input }],
        rotationStep: [{ type: Input }],
        gridSize: [{ type: Input }],
        drawOutOfBound: [{ type: Input }],
        textStyle: [{ type: Input }]
    };
    return TdChartSeriesWordcloudComponent;
}(TdSeriesComponent));
if (false) {
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.data;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.shape;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.left;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.top;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.width;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.height;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.right;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.bottom;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.sizeRange;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.rotationRange;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.rotationStep;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.gridSize;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.drawOutOfBound;
    /** @type {?} */
    TdChartSeriesWordcloudComponent.prototype.textStyle;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var WORDCLOUD_MODULE_COMPONENTS = [TdChartSeriesWordcloudComponent];
var CovalentWordcloudEchartsModule = /** @class */ (function () {
    function CovalentWordcloudEchartsModule() {
    }
    CovalentWordcloudEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    declarations: [WORDCLOUD_MODULE_COMPONENTS],
                    exports: [WORDCLOUD_MODULE_COMPONENTS],
                },] }
    ];
    return CovalentWordcloudEchartsModule;
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

export { CovalentWordcloudEchartsModule, TdChartSeriesWordcloudComponent, WORDCLOUD_MODULE_COMPONENTS };
//# sourceMappingURL=covalent-echarts-wordcloud.js.map
