/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
    tslib_1.__extends(TdChartSeriesPieComponent, _super);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3BpZS8iLCJzb3VyY2VzIjpbInBpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFdEYsT0FBTyxFQUNMLHFCQUFxQixFQVVyQixpQkFBaUIsR0FDbEIsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUVoQyxrQ0E2QkM7OztJQTVCQyx1Q0FBMEI7O0lBQzFCLHNDQUF5Qjs7SUFDekIsbUNBQXFCOztJQUNyQixvQ0FBZ0M7O0lBQ2hDLHNDQUF3Qjs7SUFDeEIsaUNBQW9COztJQUNwQixrQ0FBb0I7O0lBQ3BCLGdDQUFrQjs7SUFDbEIseUNBQTJCOztJQUMzQixnQ0FBNEI7O0lBQzVCLHlDQUE0Qjs7SUFDNUIsd0NBQTJCOztJQUMzQiw4QkFBZ0I7O0lBQ2hCLGlDQUF5Qjs7SUFDekIsNkJBQWlCOztJQUNqQixpQ0FBeUI7O0lBQ3pCLGdDQUF1Qjs7SUFDdkIsc0NBQWtDOztJQUNsQyxvQ0FBc0I7O0lBQ3RCLDRCQUFhOztJQUNiLGlDQUF5Qjs7SUFDekIsZ0NBQXVCOztJQUN2QixnQ0FBdUI7O0lBQ3ZCLDhCQUFXOztJQUNYLHlCQUFXOztJQUNYLDhCQUFnQjs7SUFDaEIsOEJBQWlDOztJQUNqQyw4QkFBaUI7O0FBR25CO0lBNEIrQyxxREFBd0I7SUE0QnJFLG1DQUFZLGVBQXNDO2VBQ2hELGtCQUFNLEtBQUssRUFBRSxlQUFlLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELDZDQUFTOzs7SUFBVDtRQUNFLE9BQU87WUFDTCxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFB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c0Q7O0lBQ3RELG1EQUFnRDs7SUFDaEQsOENBQXVDOztJQUN2QywrQ0FBd0M7O0lBQ3hDLDZDQUFvQzs7SUFDcEMsc0RBQXNEOztJQUN0RCw2Q0FBOEM7O0lBQzlDLHNEQUF1RDs7SUFDdkQscURBQXFEOztJQUNyRCwyQ0FBZ0M7O0lBQ2hDLDhDQUFzQzs7SUFDdEMsMENBQTJCOztJQUMzQiw4Q0FBNEM7O0lBQzVDLDZDQUF5Qzs7SUFDekMsbURBQTBEOztJQUMxRCxpREFBNEM7O0lBQzVDLDhDQUE0Qzs7SUFDNUMsNkNBQXlDOztJQUN6Qyw2Q0FBeUM7O0lBQ3pDLDJDQUFnQzs7SUFDaEMsc0NBQXNCOztJQUN0QiwyQ0FBZ0M7O0lBQ2hDLDJDQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRFbXBoYXNpcyxcbiAgVGRTZXJpZXNMYXlvdXRCeSxcbiAgSVRkTWFya1BvaW50LFxuICBJVGRNYXJrTGluZSxcbiAgSVRkTWFya0FyZWEsXG4gIElUZFNlcmllcyxcbiAgSVRkTGFiZWwsXG4gIElUZExhYmVsTGluZSxcbiAgVGRTZXJpZXNDb21wb25lbnQsXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZFBpZVNlcmllcyBleHRlbmRzIElUZFNlcmllczwncGllJz4ge1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBob3ZlckFuaW1hdGlvbj86IGJvb2xlYW47XG4gIGhvdmVyT2Zmc2V0PzogbnVtYmVyO1xuICBzZWxlY3RlZE1vZGU/OiBib29sZWFuIHwgc3RyaW5nO1xuICBzZWxlY3RlZE9mZnNldD86IG51bWJlcjtcbiAgY2xvY2t3aXNlPzogYm9vbGVhbjtcbiAgc3RhcnRBbmdsZT86IG51bWJlcjtcbiAgbWluQW5nbGU/OiBudW1iZXI7XG4gIG1pblNob3dMYWJlbEFuZ2xlPzogbnVtYmVyO1xuICByb3NlVHlwZT86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIGF2b2lkTGFiZWxPdmVybGFwPzogYm9vbGVhbjtcbiAgc3RpbGxTaG93WmVyb1N1bT86IGJvb2xlYW47XG4gIGN1cnNvcj86IHN0cmluZztcbiAgbGFiZWxMaW5lPzogSVRkTGFiZWxMaW5lO1xuICBMYWJlbD86IElUZExhYmVsO1xuICBpdGVtU3R5bGU/OiBJVGRJdGVtU3R5bGU7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIHNlcmllc0xheW91dEJ5PzogVGRTZXJpZXNMYXlvdXRCeTtcbiAgZGF0YXNldEluZGV4PzogbnVtYmVyO1xuICBkYXRhPzogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgWmxldmVsPzogMDtcbiAgej86IG51bWJlcjtcbiAgY2VudGVyPzogb2JqZWN0O1xuICByYWRpdXM/OiBudW1iZXIgfCBzdHJpbmcgfCBhbnlbXTtcbiAgc2lsZW50PzogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLXBpZV0nLFxuICB0ZW1wbGF0ZTogJycsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBpbnB1dHM6IFtcbiAgICAnY29uZmlnJyxcbiAgICAnaWQnLFxuICAgICduYW1lJyxcbiAgICAnY29sb3InLFxuICAgICdkYXRhJyxcblxuICAgICdhbmltYXRpb24nLFxuICAgICdhbmltYXRpb25UaHJlc2hvbGQnLFxuICAgICdhbmltYXRpb25EdXJhdGlvbicsXG4gICAgJ2FuaW1hdGlvbkVhc2luZycsXG4gICAgJ2FuaW1hdGlvbkRlbGF5JyxcbiAgICAnYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUnLFxuICAgICdhbmltYXRpb25FYXNpbmdVcGRhdGUnLFxuICAgICdhbmltYXRpb25EZWxheVVwZGF0ZScsXG4gICAgJ3Rvb2x0aXAnLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCxcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFRkQ2hhcnRTZXJpZXNQaWVDb21wb25lbnQpLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRTZXJpZXNQaWVDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwncGllJz4gaW1wbGVtZW50cyBJVGRQaWVTZXJpZXMge1xuICBASW5wdXQoJ2xlZ2VuZEhvdmVyTGluaycpIGxlZ2VuZEhvdmVyTGluazogYm9vbGVhbjtcbiAgQElucHV0KCdob3ZlckFuaW1hdGlvbicpIGhvdmVyQW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoJ2hvdmVyT2Zmc2V0JykgaG92ZXJPZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCdzZWxlY3RlZE1vZGUnKSBzZWxlY3RlZE1vZGU6IGJvb2xlYW4gfCBzdHJpbmc7XG4gIEBJbnB1dCgnc2VsZWN0ZWRPZmZzZXQnKSBzZWxlY3RlZE9mZnNldDogbnVtYmVyO1xuICBASW5wdXQoJ2Nsb2Nrd2lzZScpIGNsb2Nrd2lzZTogYm9vbGVhbjtcbiAgQElucHV0KCdzdGFydEFuZ2xlJykgc3RhcnRBbmdsZTogbnVtYmVyO1xuICBASW5wdXQoJ21pbkFuZ2xlJykgbWluQW5nbGU6IG51bWJlcjtcbiAgQElucHV0KCdtaW5TaG93TGFiZWxBbmdsZScpIG1pblNob3dMYWJlbEFuZ2xlOiBudW1iZXI7XG4gIEBJbnB1dCgncm9zZVR5cGUnKSByb3NlVHlwZTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCdhdm9pZExhYmVsT3ZlcmxhcCcpIGF2b2lkTGFiZWxPdmVybGFwOiBib29sZWFuO1xuICBASW5wdXQoJ3N0aWxsU2hvd1plcm9TdW0nKSBzdGlsbFNob3daZXJvU3VtOiBib29sZWFuO1xuICBASW5wdXQoJ2N1cnNvcicpIGN1cnNvcjogc3RyaW5nO1xuICBASW5wdXQoJ2xhYmVsTGluZScpIGxhYmVsTGluZTogb2JqZWN0O1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IGFueTtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbiAgQElucHV0KCdzZXJpZXNMYXlvdXRCeScpIHNlcmllc0xheW91dEJ5OiBUZFNlcmllc0xheW91dEJ5O1xuICBASW5wdXQoJ2RhdGFzZXRJbmRleCcpIGRhdGFzZXRJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ21hcmtQb2ludCcpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoJ21hcmtMaW5lJykgbWFya0xpbmU6IElUZE1hcmtMaW5lO1xuICBASW5wdXQoJ21hcmtBcmVhJykgbWFya0FyZWE6IElUZE1hcmtBcmVhO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgnY2VudGVyJykgY2VudGVyOiBvYmplY3Q7XG4gIEBJbnB1dCgncmFkaXVzJykgcmFkaXVzOiBudW1iZXIgfCBzdHJpbmcgfCBhbnlbXTtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCdwaWUnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxlZ2VuZEhvdmVyTGluazogdGhpcy5sZWdlbmRIb3ZlckxpbmssXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIHNlbGVjdGVkTW9kZTogdGhpcy5zZWxlY3RlZE1vZGUsXG4gICAgICBzZWxlY3RlZE9mZnNldDogdGhpcy5zZWxlY3RlZE9mZnNldCxcbiAgICAgIGNsb2Nrd2lzZTogdGhpcy5jbG9ja3dpc2UsXG4gICAgICBzdGFydEFuZ2xlOiB0aGlzLnN0YXJ0QW5nbGUsXG4gICAgICBtaW5BbmdsZTogdGhpcy5taW5BbmdsZSxcbiAgICAgIG1pblNob3dMYWJlbEFuZ2xlOiB0aGlzLm1pblNob3dMYWJlbEFuZ2xlLFxuICAgICAgcm9zZVR5cGU6IHRoaXMucm9zZVR5cGUsXG4gICAgICBhdm9pZExhYmVsT3ZlcmxhcDogdGhpcy5hdm9pZExhYmVsT3ZlcmxhcCxcbiAgICAgIHN0aWxsU2hvd1plcm9TdW06IHRoaXMuc3RpbGxTaG93WmVyb1N1bSxcbiAgICAgIGN1cnNvcjogdGhpcy5jdXJzb3IsXG4gICAgICBsYWJlbExpbmU6IHRoaXMubGFiZWxMaW5lLFxuICAgICAgc2VyaWVzTGF5b3V0Qnk6IHRoaXMuc2VyaWVzTGF5b3V0QnksXG4gICAgICBkYXRhc2V0SW5kZXg6IHRoaXMuZGF0YXNldEluZGV4LFxuICAgICAgbWFya1BvaW50OiB0aGlzLm1hcmtQb2ludCxcbiAgICAgIG1hcmtMaW5lOiB0aGlzLm1hcmtMaW5lLFxuICAgICAgbWFya0FyZWE6IHRoaXMubWFya0FyZWEsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgY2VudGVyOiB0aGlzLmNlbnRlcixcbiAgICAgIHJhZGl1czogdGhpcy5yYWRpdXMsXG4gICAgfTtcbiAgfVxufVxuIl19