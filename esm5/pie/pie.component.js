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
export function ITdPieSeries() { }
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
export { TdChartSeriesPieComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3BpZS8iLCJzb3VyY2VzIjpbInBpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUNMLHFCQUFxQixFQVVyQixpQkFBaUIsR0FDbEIsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVoQyxrQ0E2QkM7OztJQTVCQyx1Q0FBMEI7O0lBQzFCLHNDQUF5Qjs7SUFDekIsbUNBQXFCOztJQUNyQixvQ0FBZ0M7O0lBQ2hDLHNDQUF3Qjs7SUFDeEIsaUNBQW9COztJQUNwQixrQ0FBb0I7O0lBQ3BCLGdDQUFrQjs7SUFDbEIseUNBQTJCOztJQUMzQixnQ0FBNEI7O0lBQzVCLHlDQUE0Qjs7SUFDNUIsd0NBQTJCOztJQUMzQiw4QkFBZ0I7O0lBQ2hCLGlDQUF5Qjs7SUFDekIsNkJBQWlCOztJQUNqQixpQ0FBeUI7O0lBQ3pCLGdDQUF1Qjs7SUFDdkIsc0NBQWtDOztJQUNsQyxvQ0FBc0I7O0lBQ3RCLDRCQUFhOztJQUNiLGlDQUF5Qjs7SUFDekIsZ0NBQXVCOztJQUN2QixnQ0FBdUI7O0lBQ3ZCLDhCQUFXOztJQUNYLHlCQUFXOztJQUNYLDhCQUFnQjs7SUFDaEIsOEJBQWlDOztJQUNqQyw4QkFBaUI7O0FBR25CO0lBNEIrQyw2Q0FBd0I7SUE0QnJFLG1DQUFZLGVBQXNDO2VBQ2hELGtCQUFNLEtBQUssRUFBRSxlQUFlLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELDZDQUFTOzs7SUFBVDtRQUNFLE9BQU87WUFDTCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFB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Qjs7SUFDeEIsMkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZEVtcGhhc2lzLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBJVGRNYXJrUG9pbnQsXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgSVRkU2VyaWVzLFxuICBJVGRMYWJlbCxcbiAgSVRkTGFiZWxMaW5lLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkUGllU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdwaWUnPiB7XG4gIGxlZ2VuZEhvdmVyTGluaz86IGJvb2xlYW47XG4gIGhvdmVyQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgaG92ZXJPZmZzZXQ/OiBudW1iZXI7XG4gIHNlbGVjdGVkTW9kZT86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIHNlbGVjdGVkT2Zmc2V0PzogbnVtYmVyO1xuICBjbG9ja3dpc2U/OiBib29sZWFuO1xuICBzdGFydEFuZ2xlPzogbnVtYmVyO1xuICBtaW5BbmdsZT86IG51bWJlcjtcbiAgbWluU2hvd0xhYmVsQW5nbGU/OiBudW1iZXI7XG4gIHJvc2VUeXBlPzogYm9vbGVhbiB8IHN0cmluZztcbiAgYXZvaWRMYWJlbE92ZXJsYXA/OiBib29sZWFuO1xuICBzdGlsbFNob3daZXJvU3VtPzogYm9vbGVhbjtcbiAgY3Vyc29yPzogc3RyaW5nO1xuICBsYWJlbExpbmU/OiBJVGRMYWJlbExpbmU7XG4gIExhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgc2VyaWVzTGF5b3V0Qnk/OiBUZFNlcmllc0xheW91dEJ5O1xuICBkYXRhc2V0SW5kZXg/OiBudW1iZXI7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICBabGV2ZWw/OiAwO1xuICB6PzogbnVtYmVyO1xuICBjZW50ZXI/OiBvYmplY3Q7XG4gIHJhZGl1cz86IG51bWJlciB8IHN0cmluZyB8IGFueVtdO1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtcGllXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGlucHV0czogW1xuICAgICdjb25maWcnLFxuICAgICdpZCcsXG4gICAgJ25hbWUnLFxuICAgICdjb2xvcicsXG4gICAgJ2RhdGEnLFxuXG4gICAgJ2FuaW1hdGlvbicsXG4gICAgJ2FuaW1hdGlvblRocmVzaG9sZCcsXG4gICAgJ2FuaW1hdGlvbkR1cmF0aW9uJyxcbiAgICAnYW5pbWF0aW9uRWFzaW5nJyxcbiAgICAnYW5pbWF0aW9uRGVsYXknLFxuICAgICdhbmltYXRpb25EdXJhdGlvblVwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkVhc2luZ1VwZGF0ZScsXG4gICAgJ2FuaW1hdGlvbkRlbGF5VXBkYXRlJyxcbiAgICAndG9vbHRpcCcsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc1BpZUNvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1BpZUNvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdwaWUnPiBpbXBsZW1lbnRzIElUZFBpZVNlcmllcyB7XG4gIEBJbnB1dCgpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCkgaG92ZXJBbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgpIGhvdmVyT2Zmc2V0OiBudW1iZXI7XG4gIEBJbnB1dCgpIHNlbGVjdGVkTW9kZTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCkgc2VsZWN0ZWRPZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgY2xvY2t3aXNlOiBib29sZWFuO1xuICBASW5wdXQoKSBzdGFydEFuZ2xlOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1pbkFuZ2xlOiBudW1iZXI7XG4gIEBJbnB1dCgpIG1pblNob3dMYWJlbEFuZ2xlOiBudW1iZXI7XG4gIEBJbnB1dCgpIHJvc2VUeXBlOiBib29sZWFuIHwgc3RyaW5nO1xuICBASW5wdXQoKSBhdm9pZExhYmVsT3ZlcmxhcDogYm9vbGVhbjtcbiAgQElucHV0KCkgc3RpbGxTaG93WmVyb1N1bTogYm9vbGVhbjtcbiAgQElucHV0KCkgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGxhYmVsTGluZTogb2JqZWN0O1xuICBASW5wdXQoKSBsYWJlbDogYW55O1xuICBASW5wdXQoKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCkgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuICBASW5wdXQoKSBzZXJpZXNMYXlvdXRCeTogVGRTZXJpZXNMYXlvdXRCeTtcbiAgQElucHV0KCkgZGF0YXNldEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgpIG1hcmtBcmVhOiBJVGRNYXJrQXJlYTtcbiAgQElucHV0KCkgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgpIHo6IG51bWJlcjtcbiAgQElucHV0KCkgY2VudGVyOiBvYmplY3Q7XG4gIEBJbnB1dCgpIHJhZGl1czogbnVtYmVyIHwgc3RyaW5nIHwgYW55W107XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigncGllJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxuXG4gIGdldENvbmZpZygpOiBhbnkge1xuICAgIHJldHVybiB7XG4gICAgICBsZWdlbmRIb3Zlckxpbms6IHRoaXMubGVnZW5kSG92ZXJMaW5rLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgZW1waGFzaXM6IHRoaXMuZW1waGFzaXMsXG4gICAgICBzZWxlY3RlZE1vZGU6IHRoaXMuc2VsZWN0ZWRNb2RlLFxuICAgICAgc2VsZWN0ZWRPZmZzZXQ6IHRoaXMuc2VsZWN0ZWRPZmZzZXQsXG4gICAgICBjbG9ja3dpc2U6IHRoaXMuY2xvY2t3aXNlLFxuICAgICAgc3RhcnRBbmdsZTogdGhpcy5zdGFydEFuZ2xlLFxuICAgICAgbWluQW5nbGU6IHRoaXMubWluQW5nbGUsXG4gICAgICBtaW5TaG93TGFiZWxBbmdsZTogdGhpcy5taW5TaG93TGFiZWxBbmdsZSxcbiAgICAgIHJvc2VUeXBlOiB0aGlzLnJvc2VUeXBlLFxuICAgICAgYXZvaWRMYWJlbE92ZXJsYXA6IHRoaXMuYXZvaWRMYWJlbE92ZXJsYXAsXG4gICAgICBzdGlsbFNob3daZXJvU3VtOiB0aGlzLnN0aWxsU2hvd1plcm9TdW0sXG4gICAgICBjdXJzb3I6IHRoaXMuY3Vyc29yLFxuICAgICAgbGFiZWxMaW5lOiB0aGlzLmxhYmVsTGluZSxcbiAgICAgIHNlcmllc0xheW91dEJ5OiB0aGlzLnNlcmllc0xheW91dEJ5LFxuICAgICAgZGF0YXNldEluZGV4OiB0aGlzLmRhdGFzZXRJbmRleCxcbiAgICAgIG1hcmtQb2ludDogdGhpcy5tYXJrUG9pbnQsXG4gICAgICBtYXJrTGluZTogdGhpcy5tYXJrTGluZSxcbiAgICAgIG1hcmtBcmVhOiB0aGlzLm1hcmtBcmVhLFxuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIGNlbnRlcjogdGhpcy5jZW50ZXIsXG4gICAgICByYWRpdXM6IHRoaXMucmFkaXVzLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==