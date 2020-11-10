import { Component, ChangeDetectionStrategy, forwardRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/map';
import { TdSeriesDirective, TdChartOptionsService } from '@covalent/echarts/base';

/**
 * @fileoverview added by tsickle
 * Generated from: map.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function ITdMapScaleLimit() { }
if (false) {
    /** @type {?|undefined} */
    ITdMapScaleLimit.prototype.min;
    /** @type {?|undefined} */
    ITdMapScaleLimit.prototype.max;
}
/**
 * @record
 */
function ITdMapItemStyle() { }
if (false) {
    /** @type {?|undefined} */
    ITdMapItemStyle.prototype.areaColor;
    /** @type {?|undefined} */
    ITdMapItemStyle.prototype.emphasis;
}
/**
 * @record
 */
function ITdMapSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdMapSeries.prototype.map;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.roam;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.center;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.aspectScale;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.boudingCoords;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.zoom;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.scaleLimit;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.nameMap;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.selectedMode;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.label;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.itemStyle;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.zLevel;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.z;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.left;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.top;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.right;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.bottom;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.layoutCenter;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.layoutSize;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.geoIndex;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.mapValueCalculation;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.showLegendSymbol;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.seriesLayoutBy;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.data;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.markPoint;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.markLine;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.markArea;
    /** @type {?|undefined} */
    ITdMapSeries.prototype.silent;
}
class TdChartSeriesMapComponent extends TdSeriesDirective {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('map', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            map: this.map,
            roam: this.roam,
            center: this.center,
            aspectScale: this.aspectScale,
            boudingCoords: this.boudingCoords,
            zoom: this.zoom,
            scaleLimit: this.scaleLimit,
            nameMap: this.nameMap,
            selectedMode: this.selectedMode,
            label: this.label,
            itemStyle: this.itemStyle,
            zLevel: this.zLevel,
            z: this.z,
            left: this.left,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            layoutCenter: this.layoutCenter,
            layoutSize: this.layoutSize,
            geoIndex: this.geoIndex,
            mapValueCalculation: this.mapValueCalculation,
            showLegendSymbol: this.showLegendSymbol,
            seriesLayoutBy: this.seriesLayoutBy,
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            silent: this.silent,
        };
    }
}
TdChartSeriesMapComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-map]',
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
                        provide: TdSeriesDirective,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdChartSeriesMapComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesMapComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesMapComponent.propDecorators = {
    map: [{ type: Input }],
    roam: [{ type: Input }],
    center: [{ type: Input }],
    aspectScale: [{ type: Input }],
    boudingCoords: [{ type: Input }],
    zoom: [{ type: Input }],
    scaleLimit: [{ type: Input }],
    nameMap: [{ type: Input }],
    selectedMode: [{ type: Input }],
    label: [{ type: Input }],
    itemStyle: [{ type: Input }],
    zLevel: [{ type: Input }],
    z: [{ type: Input }],
    left: [{ type: Input }],
    top: [{ type: Input }],
    right: [{ type: Input }],
    bottom: [{ type: Input }],
    layoutCenter: [{ type: Input }],
    layoutSize: [{ type: Input }],
    geoIndex: [{ type: Input }],
    mapValueCalculation: [{ type: Input }],
    showLegendSymbol: [{ type: Input }],
    seriesLayoutBy: [{ type: Input }],
    markPoint: [{ type: Input }],
    markLine: [{ type: Input }],
    markArea: [{ type: Input }],
    silent: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.map;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.roam;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.center;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.aspectScale;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.boudingCoords;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.zoom;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.scaleLimit;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.nameMap;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.selectedMode;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.label;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.itemStyle;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.zLevel;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.z;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.left;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.top;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.right;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.bottom;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.layoutCenter;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.layoutSize;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.geoIndex;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.mapValueCalculation;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.showLegendSymbol;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.seriesLayoutBy;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.markPoint;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.markLine;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.markArea;
    /** @type {?} */
    TdChartSeriesMapComponent.prototype.silent;
}

/**
 * @fileoverview added by tsickle
 * Generated from: map.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAP_MODULE_COMPONENTS = [TdChartSeriesMapComponent];
class CovalentMapEchartsModule {
}
CovalentMapEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [MAP_MODULE_COMPONENTS],
                exports: [MAP_MODULE_COMPONENTS],
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: covalent-echarts-map.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { CovalentMapEchartsModule, MAP_MODULE_COMPONENTS, TdChartSeriesMapComponent };
//# sourceMappingURL=covalent-echarts-map.js.map
