/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
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
var TdChartSeriesMapComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesMapComponent, _super);
    function TdChartSeriesMapComponent(_optionsService) {
        return _super.call(this, 'map', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesMapComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
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
    };
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
                            function () { return TdChartSeriesMapComponent; })),
                        },
                    ]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesMapComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
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
    return TdChartSeriesMapComponent;
}(TdSeriesComponent));
export { TdChartSeriesMapComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL21hcC8iLCJzb3VyY2VzIjpbIm1hcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUNMLHFCQUFxQixFQU9yQixpQkFBaUIsR0FDbEIsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUtoQyxzQ0FHQzs7O0lBRkMsK0JBQWE7O0lBQ2IsK0JBQWE7Ozs7O0FBR2YscUNBR0M7OztJQUZDLG9DQUF5Qjs7SUFDekIsbUNBQXdCOzs7OztBQUcxQixrQ0E2QkM7OztJQTVCQywyQkFBYTs7SUFDYiw0QkFBZTs7SUFDZiw4QkFBa0I7O0lBQ2xCLG1DQUFxQjs7SUFDckIscUNBQXNCOztJQUN0Qiw0QkFBYzs7SUFDZCxrQ0FBOEI7O0lBQzlCLCtCQUFpQjs7SUFDakIsb0NBQWdDOztJQUNoQyw2QkFBaUI7O0lBQ2pCLGlDQUE0Qjs7SUFDNUIsOEJBQWdCOztJQUNoQix5QkFBVzs7SUFDWCw0QkFBdUI7O0lBQ3ZCLDJCQUFzQjs7SUFDdEIsNkJBQXdCOztJQUN4Qiw4QkFBeUI7O0lBQ3pCLG9DQUFxQjs7SUFDckIsa0NBQW1COztJQUNuQixnQ0FBa0I7O0lBQ2xCLDJDQUE0Qzs7SUFDNUMsd0NBQTJCOztJQUMzQixzQ0FBd0I7O0lBQ3hCLDRCQUFhOztJQUNiLGlDQUF5Qjs7SUFDekIsZ0NBQXVCOztJQUN2QixnQ0FBdUI7O0lBQ3ZCLDhCQUFpQjs7QUFHbkI7SUE0QitDLDZDQUF3QjtJQTZCckUsbUNBQVksZUFBc0M7ZUFDaEQsa0JBQU0sS0FBSyxFQUFFLGVBQWUsQ0FBQztJQUMvQixDQUFDOzs7O0lBRUQsNkNBQVM7OztJQUFUO1FBQ0UsT0FBTztZQUNMLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZ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QixzQ0FBbUI7O0lBQ25CLHlDQUErQjs7SUFDL0Isd0NBQThCOztJQUM5QiwwQ0FBZ0M7O0lBQ2hDLDJDQUFpQzs7SUFDakMsaURBQTZCOztJQUM3QiwrQ0FBMkI7O0lBQzNCLDZDQUEwQjs7SUFDMUIsd0RBQW9EOztJQUNwRCxxREFBbUM7O0lBQ25DLG1EQUFnQzs7SUFDaEMsOENBQWlDOztJQUNqQyw2Q0FBK0I7O0lBQy9CLDZDQUErQjs7SUFDL0IsMkNBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZE1hcmtQb2ludCxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBJVGRTZXJpZXMsXG4gIElUZExhYmVsLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCB0eXBlIFRkTWFwVmFsdWVDYWxjdWxhdGlvbiA9ICdzdW0nIHwgJ2F2ZXJhZ2UnIHwgJ21heCcgfCAnbWluJztcbmV4cG9ydCB0eXBlIFRkTWFwU2VyaWVzTGF5b3V0QnkgPSAnY29sdW1uJyB8ICdyb3cnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZE1hcFNjYWxlTGltaXQge1xuICBtaW4/OiBudW1iZXI7XG4gIG1heD86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRNYXBJdGVtU3R5bGUge1xuICBhcmVhQ29sb3I/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkSXRlbVN0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZE1hcFNlcmllcyBleHRlbmRzIElUZFNlcmllczwnbWFwJz4ge1xuICBtYXA/OiBzdHJpbmc7XG4gIHJvYW0/OiBib29sZWFuO1xuICBjZW50ZXI/OiBudW1iZXJbXTtcbiAgYXNwZWN0U2NhbGU/OiBudW1iZXI7XG4gIGJvdWRpbmdDb29yZHM/OiBhbnlbXTtcbiAgem9vbT86IG51bWJlcjtcbiAgc2NhbGVMaW1pdD86IElUZE1hcFNjYWxlTGltaXQ7XG4gIG5hbWVNYXA/OiBvYmplY3Q7XG4gIHNlbGVjdGVkTW9kZT86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIGxhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZE1hcEl0ZW1TdHlsZTtcbiAgekxldmVsPzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBsZWZ0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICB0b3A/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHJpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBib3R0b20/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGxheW91dENlbnRlcj86IGFueVtdO1xuICBsYXlvdXRTaXplPzogYW55W107XG4gIGdlb0luZGV4PzogbnVtYmVyO1xuICBtYXBWYWx1ZUNhbGN1bGF0aW9uPzogVGRNYXBWYWx1ZUNhbGN1bGF0aW9uO1xuICBzaG93TGVnZW5kU3ltYm9sPzogYm9vbGVhbjtcbiAgc2VyaWVzTGF5b3V0Qnk/OiBzdHJpbmc7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtbWFwXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdjb25maWcnLFxuICAgICdpZCcsXG4gICAgJ25hbWUnLFxuICAgICdjb2xvcicsXG4gICAgJ2RhdGEnLFxuXG4gICAgJ2FuaW1hdGlvbicsXG4gICAgJ2FuaW1hdGlvblRocmVzaG9sZCcsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nJyxcbiAgICAnYW5pbWF0aW9uRGVsYXknLFxuICAgICdhbmltYXRpb25EdXJhdGlvblVwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkVhc2luZ1VwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkRlbGF5VXBkYXRlJyxcbiAgICAndG9vbHRpcCcsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc01hcENvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc01hcENvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdtYXAnPiBpbXBsZW1lbnRzIElUZE1hcFNlcmllcyB7XG4gIEBJbnB1dCgpIG1hcDogc3RyaW5nO1xuICBASW5wdXQoKSByb2FtOiBib29sZWFuO1xuICBASW5wdXQoKSBjZW50ZXI6IG51bWJlcltdO1xuICBASW5wdXQoKSBhc3BlY3RTY2FsZTogbnVtYmVyO1xuICBASW5wdXQoKSBib3VkaW5nQ29vcmRzOiBhbnlbXTtcbiAgQElucHV0KCkgem9vbTogbnVtYmVyO1xuICBASW5wdXQoKSBzY2FsZUxpbWl0OiBJVGRNYXBTY2FsZUxpbWl0O1xuICBASW5wdXQoKSBuYW1lTWFwOiBvYmplY3Q7XG4gIEBJbnB1dCgpIHNlbGVjdGVkTW9kZTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCkgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoKSBpdGVtU3R5bGU6IElUZE1hcEl0ZW1TdHlsZTtcbiAgQElucHV0KCkgekxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgpIHo6IG51bWJlcjtcbiAgQElucHV0KCkgbGVmdDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgcmlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIGxheW91dENlbnRlcjogYW55W107XG4gIEBJbnB1dCgpIGxheW91dFNpemU6IGFueVtdO1xuICBASW5wdXQoKSBnZW9JbmRleDogbnVtYmVyO1xuICBASW5wdXQoKSBtYXBWYWx1ZUNhbGN1bGF0aW9uOiBUZE1hcFZhbHVlQ2FsY3VsYXRpb247XG4gIEBJbnB1dCgpIHNob3dMZWdlbmRTeW1ib2w6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNlcmllc0xheW91dEJ5OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCkgc2lsZW50OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ21hcCcsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgbWFwOiB0aGlzLm1hcCxcbiAgICAgIHJvYW06IHRoaXMucm9hbSxcbiAgICAgIGNlbnRlcjogdGhpcy5jZW50ZXIsXG4gICAgICBhc3BlY3RTY2FsZTogdGhpcy5hc3BlY3RTY2FsZSxcbiAgICAgIGJvdWRpbmdDb29yZHM6IHRoaXMuYm91ZGluZ0Nvb3JkcyxcbiAgICAgIHpvb206IHRoaXMuem9vbSxcbiAgICAgIHNjYWxlTGltaXQ6IHRoaXMuc2NhbGVMaW1pdCxcbiAgICAgIG5hbWVNYXA6IHRoaXMubmFtZU1hcCxcbiAgICAgIHNlbGVjdGVkTW9kZTogdGhpcy5zZWxlY3RlZE1vZGUsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICB6TGV2ZWw6IHRoaXMuekxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgIGxheW91dENlbnRlcjogdGhpcy5sYXlvdXRDZW50ZXIsXG4gICAgICBsYXlvdXRTaXplOiB0aGlzLmxheW91dFNpemUsXG4gICAgICBnZW9JbmRleDogdGhpcy5nZW9JbmRleCxcbiAgICAgIG1hcFZhbHVlQ2FsY3VsYXRpb246IHRoaXMubWFwVmFsdWVDYWxjdWxhdGlvbixcbiAgICAgIHNob3dMZWdlbmRTeW1ib2w6IHRoaXMuc2hvd0xlZ2VuZFN5bWJvbCxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgbWFya1BvaW50OiB0aGlzLm1hcmtQb2ludCxcbiAgICAgIG1hcmtMaW5lOiB0aGlzLm1hcmtMaW5lLFxuICAgICAgbWFya0FyZWE6IHRoaXMubWFya0FyZWEsXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgIH07XG4gIH1cbn1cbiJdfQ==