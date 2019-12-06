/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, forwardRef } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent, } from '@covalent/echarts/base';
/**
 * @record
 */
export function ITdMapScaleLimit() { }
if (false) {
    /** @type {?|undefined} */
    ITdMapScaleLimit.prototype.min;
    /** @type {?|undefined} */
    ITdMapScaleLimit.prototype.max;
}
/**
 * @record
 */
export function ITdMapItemStyle() { }
if (false) {
    /** @type {?|undefined} */
    ITdMapItemStyle.prototype.areaColor;
    /** @type {?|undefined} */
    ITdMapItemStyle.prototype.emphasis;
}
/**
 * @record
 */
export function ITdMapSeries() { }
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
export class TdChartSeriesMapComponent extends TdSeriesComponent {
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
                        provide: TdSeriesComponent,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL21hcC8iLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQ0wscUJBQXFCLEVBT3JCLGlCQUFpQixHQUNsQixNQUFNLHdCQUF3QixDQUFDOzs7O0FBS2hDLHNDQUdDOzs7SUFGQywrQkFBYTs7SUFDYiwrQkFBYTs7Ozs7QUFHZixxQ0FHQzs7O0lBRkMsb0NBQXlCOztJQUN6QixtQ0FBd0I7Ozs7O0FBRzFCLGtDQTZCQzs7O0lBNUJDLDJCQUFhOztJQUNiLDRCQUFlOztJQUNmLDhCQUFrQjs7SUFDbEIsbUNBQXFCOztJQUNyQixxQ0FBc0I7O0lBQ3RCLDRCQUFjOztJQUNkLGtDQUE4Qjs7SUFDOUIsK0JBQWlCOztJQUNqQixvQ0FBZ0M7O0lBQ2hDLDZCQUFpQjs7SUFDakIsaUNBQTRCOztJQUM1Qiw4QkFBZ0I7O0lBQ2hCLHlCQUFXOztJQUNYLDRCQUF1Qjs7SUFDdkIsMkJBQXNCOztJQUN0Qiw2QkFBd0I7O0lBQ3hCLDhCQUF5Qjs7SUFDekIsb0NBQXFCOztJQUNyQixrQ0FBbUI7O0lBQ25CLGdDQUFrQjs7SUFDbEIsMkNBQTRDOztJQUM1Qyx3Q0FBMkI7O0lBQzNCLHNDQUF3Qjs7SUFDeEIsNEJBQWE7O0lBQ2IsaUNBQXlCOztJQUN6QixnQ0FBdUI7O0lBQ3ZCLGdDQUF1Qjs7SUFDdkIsOEJBQWlCOztBQStCbkIsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGlCQUF3Qjs7OztJQTZCckUsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTztZQUNMLEdBQUcsRUFB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Z0M7O0lBQ2hDLDJDQUFpQzs7SUFDakMsaURBQTZCOztJQUM3QiwrQ0FBMkI7O0lBQzNCLDZDQUEwQjs7SUFDMUIsd0RBQW9EOztJQUNwRCxxREFBbUM7O0lBQ25DLG1EQUFnQzs7SUFDaEMsOENBQWlDOztJQUNqQyw2Q0FBK0I7O0lBQy9CLDZDQUErQjs7SUFDL0IsMkNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBJVGRTZXJpZXMsXG4gIElUZExhYmVsLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCB0eXBlIFRkTWFwVmFsdWVDYWxjdWxhdGlvbiA9ICdzdW0nIHwgJ2F2ZXJhZ2UnIHwgJ21heCcgfCAnbWluJztcbmV4cG9ydCB0eXBlIFRkTWFwU2VyaWVzTGF5b3V0QnkgPSAnY29sdW1uJyB8ICdyb3cnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZE1hcFNjYWxlTGltaXQge1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRNYXBJdGVtU3R5bGUge1xuICBhcmVhQ29sb3I/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkSXRlbVN0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZE1hcFNlcmllcyBleHRlbmRzIElUZFNlcmllczwnbWFwJz4ge1xuICBtYXA/OiBzdHJpbmc7XG4gIHJvYW0/OiBib29sZWFuO1xuICBjZW50ZXI/OiBudW1iZXJbXTtcbiAgYXNwZWN0U2NhbGU/OiBudW1iZXI7XG4gIGJvdWRpbmdDb29yZHM/OiBhbnlbXTtcbiAgem9vbT86IG51bWJlcjtcbiAgc2NhbGVMaW1pdD86IElUZE1hcFNjYWxlTGltaXQ7XG4gIG5hbWVNYXA/OiBvYmplY3Q7XG4gIHNlbGVjdGVkTW9kZT86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZE1hcEl0ZW1TdHlsZTtcbiAgekxldmVsPzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGxheW91dENlbnRlcj86IGFueVtdO1xuICBsYXlvdXRTaXplPzogYW55W107XG4gIGdlb0luZGV4PzogbnVtYmVyO1xuICBtYXBWYWx1ZUNhbGN1bGF0aW9uPzogVGRNYXBWYWx1ZUNhbGN1bGF0aW9uO1xuICBzaG93TGVnZW5kU3ltYm9sPzogYm9vbGVhbjtcbiAgc2VyaWVzTGF5b3V0Qnk/OiBzdHJpbmc7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtbWFwXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdjb25maWcnLFxuICAgICdpZCcsXG4gICAgJ25hbWUnLFxuICAgICdjb2xvcicsXG4gICAgJ2RhdGEnLFxuXG4gICAgJ2FuaW1hdGlvbicsXG4gICAgJ2FuaW1hdGlvblRocmVzaG9sZCcsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nJyxcbiAgICAnYW5pbWF0aW9uRGVsYXknLFxuICAgICdhbmltYXRpb25EdXJhdGlvblVwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkVhc2luZ1VwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkRlbGF5VXBkYXRlJyxcbiAgICAndG9vbHRpcCcsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc01hcENvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc01hcENvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdtYXAnPiBpbXBsZW1lbnRzIElUZE1hcFNlcmllcyB7XG4gIEBJbnB1dCgpIG1hcDogc3RyaW5nO1xuICBASW5wdXQoKSByb2FtOiBib29sZWFuO1xuICBASW5wdXQoKSBjZW50ZXI6IG51bWJlcltdO1xuICBASW5wdXQoKSBhc3BlY3RTY2FsZTogbnVtYmVyO1xuICBASW5wdXQoKSBib3VkaW5nQ29vcmRzOiBhbnlbXTtcbiAgQElucHV0KCkgem9vbTogbnVtYmVyO1xuICBASW5wdXQoKSBzY2FsZUxpbWl0OiBJVGRNYXBTY2FsZUxpbWl0O1xuICBASW5wdXQoKSBuYW1lTWFwOiBvYmplY3Q7XG4gIEBJbnB1dCgpIHNlbGVjdGVkTW9kZTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoKSBpdGVtU3R5bGU6IElUZE1hcEl0ZW1TdHlsZTtcbiAgQElucHV0KCkgekxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgpIHo6IG51bWJlcjtcbiAgQElucHV0KCkgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGxheW91dENlbnRlcjogYW55W107XG4gIEBJbnB1dCgpIGxheW91dFNpemU6IGFueVtdO1xuICBASW5wdXQoKSBnZW9JbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBtYXBWYWx1ZUNhbGN1bGF0aW9uOiBUZE1hcFZhbHVlQ2FsY3VsYXRpb247XG4gIEBJbnB1dCgpIHNob3dMZWdlbmRTeW1ib2w6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlcmllc0xheW91dEJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCkgc2lsZW50OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ21hcCcsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIHJvYW06IHRoaXMucm9hbSxcbiAgICAgIGNlbnRlcjogdGhpcy5jZW50ZXIsXG4gICAgICBhc3BlY3RTY2FsZTogdGhpcy5hc3BlY3RTY2FsZSxcbiAgICAgIGJvdWRpbmdDb29yZHM6IHRoaXMuYm91ZGluZ0Nvb3JkcyxcbiAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgIHNjYWxlTGltaXQ6IHRoaXMuc2NhbGVMaW1pdCxcbiAgICAgIG5hbWVNYXA6IHRoaXMubmFtZU1hcCxcbiAgICAgIHNlbGVjdGVkTW9kZTogdGhpcy5zZWxlY3RlZE1vZGUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICB6TGV2ZWw6IHRoaXMuekxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIGxheW91dENlbnRlcjogdGhpcy5sYXlvdXRDZW50ZXIsXG4gICAgICBsYXlvdXRTaXplOiB0aGlzLmxheW91dFNpemUsXG4gICAgICBnZW9JbmRleDogdGhpcy5nZW9JbmRleCxcbiAgICAgIG1hcFZhbHVlQ2FsY3VsYXRpb246IHRoaXMubWFwVmFsdWVDYWxjdWxhdGlvbixcbiAgICAgIHNob3dMZWdlbmRTeW1ib2w6IHRoaXMuc2hvd0xlZ2VuZFN5bWJvbCxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgbWFya1BvaW50OiB0aGlzLm1hcmtQb2ludCxcbiAgICAgIG1hcmtMaW5lOiB0aGlzLm1hcmtMaW5lLFxuICAgICAgbWFya0FyZWE6IHRoaXMubWFya0FyZWEsXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==