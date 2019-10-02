/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class TdChartSeriesPieComponent extends TdSeriesComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('pie', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
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
    }
}
TdChartSeriesPieComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-pie]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [
                    {
                        provide: TdSeriesComponent,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => TdChartSeriesPieComponent)),
                    },
                ]
            }] }
];
/** @nocollapse */
TdChartSeriesPieComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3BpZS8iLCJzb3VyY2VzIjpbInBpZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0RixPQUFPLEVBQ0wscUJBQXFCLEVBVXJCLGlCQUFpQixHQUNsQixNQUFNLHdCQUF3QixDQUFDOzs7O0FBRWhDLGtDQTZCQzs7O0lBNUJDLHVDQUEwQjs7SUFDMUIsc0NBQXlCOztJQUN6QixtQ0FBcUI7O0lBQ3JCLG9DQUFnQzs7SUFDaEMsc0NBQXdCOztJQUN4QixpQ0FBb0I7O0lBQ3BCLGtDQUFvQjs7SUFDcEIsZ0NBQWtCOztJQUNsQix5Q0FBMkI7O0lBQzNCLGdDQUE0Qjs7SUFDNUIseUNBQTRCOztJQUM1Qix3Q0FBMkI7O0lBQzNCLDhCQUFnQjs7SUFDaEIsaUNBQXlCOztJQUN6Qiw2QkFBaUI7O0lBQ2pCLGlDQUF5Qjs7SUFDekIsZ0NBQXVCOztJQUN2QixzQ0FBa0M7O0lBQ2xDLG9DQUFzQjs7SUFDdEIsNEJBQWE7O0lBQ2IsaUNBQXlCOztJQUN6QixnQ0FBdUI7O0lBQ3ZCLGdDQUF1Qjs7SUFDdkIsOEJBQVc7O0lBQ1gseUJBQVc7O0lBQ1gsOEJBQWdCOztJQUNoQiw4QkFBaUM7O0lBQ2pDLDhCQUFpQjs7QUFjbkIsTUFBTSxPQUFPLHlCQUEwQixTQUFRLGlCQUF3Qjs7OztJQTRCckUsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTztZQUNMLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lB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LDZDQUF5Qzs7SUFDekMsMkNBQWdDOztJQUNoQyxzQ0FBc0I7O0lBQ3RCLDJDQUFnQzs7SUFDaEMsMkNBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZEVtcGhhc2lzLFxuICBUZFNlcmllc0xheW91dEJ5LFxuICBJVGRNYXJrUG9pbnQsXG4gIElUZE1hcmtMaW5lLFxuICBJVGRNYXJrQXJlYSxcbiAgSVRkU2VyaWVzLFxuICBJVGRMYWJlbCxcbiAgSVRkTGFiZWxMaW5lLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkUGllU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdwaWUnPiB7XG4gIGxlZ2VuZEhvdmVyTGluaz86IGJvb2xlYW47XG4gIGhvdmVyQW5pbWF0aW9uPzogYm9vbGVhbjtcbiAgaG92ZXJPZmZzZXQ/OiBudW1iZXI7XG4gIHNlbGVjdGVkTW9kZT86IGJvb2xlYW4gfCBzdHJpbmc7XG4gIHNlbGVjdGVkT2Zmc2V0PzogbnVtYmVyO1xuICBjbG9ja3dpc2U/OiBib29sZWFuO1xuICBzdGFydEFuZ2xlPzogbnVtYmVyO1xuICBtaW5BbmdsZT86IG51bWJlcjtcbiAgbWluU2hvd0xhYmVsQW5nbGU/OiBudW1iZXI7XG4gIHJvc2VUeXBlPzogYm9vbGVhbiB8IHN0cmluZztcbiAgYXZvaWRMYWJlbE92ZXJsYXA/OiBib29sZWFuO1xuICBzdGlsbFNob3daZXJvU3VtPzogYm9vbGVhbjtcbiAgY3Vyc29yPzogc3RyaW5nO1xuICBsYWJlbExpbmU/OiBJVGRMYWJlbExpbmU7XG4gIExhYmVsPzogSVRkTGFiZWw7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgc2VyaWVzTGF5b3V0Qnk/OiBUZFNlcmllc0xheW91dEJ5O1xuICBkYXRhc2V0SW5kZXg/OiBudW1iZXI7XG4gIGRhdGE/OiBhbnlbXTtcbiAgbWFya1BvaW50PzogSVRkTWFya1BvaW50O1xuICBtYXJrTGluZT86IElUZE1hcmtMaW5lO1xuICBtYXJrQXJlYT86IElUZE1hcmtBcmVhO1xuICBabGV2ZWw/OiAwO1xuICB6PzogbnVtYmVyO1xuICBjZW50ZXI/OiBvYmplY3Q7XG4gIHJhZGl1cz86IG51bWJlciB8IHN0cmluZyB8IGFueVtdO1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtcGllXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc1BpZUNvbXBvbmVudCksXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1BpZUNvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCdwaWUnPiBpbXBsZW1lbnRzIElUZFBpZVNlcmllcyB7XG4gIEBJbnB1dCgnbGVnZW5kSG92ZXJMaW5rJykgbGVnZW5kSG92ZXJMaW5rOiBib29sZWFuO1xuICBASW5wdXQoJ2hvdmVyQW5pbWF0aW9uJykgaG92ZXJBbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgnaG92ZXJPZmZzZXQnKSBob3Zlck9mZnNldDogbnVtYmVyO1xuICBASW5wdXQoJ3NlbGVjdGVkTW9kZScpIHNlbGVjdGVkTW9kZTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCdzZWxlY3RlZE9mZnNldCcpIHNlbGVjdGVkT2Zmc2V0OiBudW1iZXI7XG4gIEBJbnB1dCgnY2xvY2t3aXNlJykgY2xvY2t3aXNlOiBib29sZWFuO1xuICBASW5wdXQoJ3N0YXJ0QW5nbGUnKSBzdGFydEFuZ2xlOiBudW1iZXI7XG4gIEBJbnB1dCgnbWluQW5nbGUnKSBtaW5BbmdsZTogbnVtYmVyO1xuICBASW5wdXQoJ21pblNob3dMYWJlbEFuZ2xlJykgbWluU2hvd0xhYmVsQW5nbGU6IG51bWJlcjtcbiAgQElucHV0KCdyb3NlVHlwZScpIHJvc2VUeXBlOiBib29sZWFuIHwgc3RyaW5nO1xuICBASW5wdXQoJ2F2b2lkTGFiZWxPdmVybGFwJykgYXZvaWRMYWJlbE92ZXJsYXA6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3RpbGxTaG93WmVyb1N1bScpIHN0aWxsU2hvd1plcm9TdW06IGJvb2xlYW47XG4gIEBJbnB1dCgnY3Vyc29yJykgY3Vyc29yOiBzdHJpbmc7XG4gIEBJbnB1dCgnbGFiZWxMaW5lJykgbGFiZWxMaW5lOiBvYmplY3Q7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogYW55O1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2VtcGhhc2lzJykgZW1waGFzaXM6IElUZEVtcGhhc2lzO1xuICBASW5wdXQoJ3Nlcmllc0xheW91dEJ5Jykgc2VyaWVzTGF5b3V0Qnk6IFRkU2VyaWVzTGF5b3V0Qnk7XG4gIEBJbnB1dCgnZGF0YXNldEluZGV4JykgZGF0YXNldEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnbWFya1BvaW50JykgbWFya1BvaW50OiBJVGRNYXJrUG9pbnQ7XG4gIEBJbnB1dCgnbWFya0xpbmUnKSBtYXJrTGluZTogSVRkTWFya0xpbmU7XG4gIEBJbnB1dCgnbWFya0FyZWEnKSBtYXJrQXJlYTogSVRkTWFya0FyZWE7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcbiAgQElucHV0KCdjZW50ZXInKSBjZW50ZXI6IG9iamVjdDtcbiAgQElucHV0KCdyYWRpdXMnKSByYWRpdXM6IG51bWJlciB8IHN0cmluZyB8IGFueVtdO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3BpZScsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgbGVnZW5kSG92ZXJMaW5rOiB0aGlzLmxlZ2VuZEhvdmVyTGluayxcbiAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgaXRlbVN0eWxlOiB0aGlzLml0ZW1TdHlsZSxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgICAgc2VsZWN0ZWRNb2RlOiB0aGlzLnNlbGVjdGVkTW9kZSxcbiAgICAgIHNlbGVjdGVkT2Zmc2V0OiB0aGlzLnNlbGVjdGVkT2Zmc2V0LFxuICAgICAgY2xvY2t3aXNlOiB0aGlzLmNsb2Nrd2lzZSxcbiAgICAgIHN0YXJ0QW5nbGU6IHRoaXMuc3RhcnRBbmdsZSxcbiAgICAgIG1pbkFuZ2xlOiB0aGlzLm1pbkFuZ2xlLFxuICAgICAgbWluU2hvd0xhYmVsQW5nbGU6IHRoaXMubWluU2hvd0xhYmVsQW5nbGUsXG4gICAgICByb3NlVHlwZTogdGhpcy5yb3NlVHlwZSxcbiAgICAgIGF2b2lkTGFiZWxPdmVybGFwOiB0aGlzLmF2b2lkTGFiZWxPdmVybGFwLFxuICAgICAgc3RpbGxTaG93WmVyb1N1bTogdGhpcy5zdGlsbFNob3daZXJvU3VtLFxuICAgICAgY3Vyc29yOiB0aGlzLmN1cnNvcixcbiAgICAgIGxhYmVsTGluZTogdGhpcy5sYWJlbExpbmUsXG4gICAgICBzZXJpZXNMYXlvdXRCeTogdGhpcy5zZXJpZXNMYXlvdXRCeSxcbiAgICAgIGRhdGFzZXRJbmRleDogdGhpcy5kYXRhc2V0SW5kZXgsXG4gICAgICBtYXJrUG9pbnQ6IHRoaXMubWFya1BvaW50LFxuICAgICAgbWFya0xpbmU6IHRoaXMubWFya0xpbmUsXG4gICAgICBtYXJrQXJlYTogdGhpcy5tYXJrQXJlYSxcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBjZW50ZXI6IHRoaXMuY2VudGVyLFxuICAgICAgcmFkaXVzOiB0aGlzLnJhZGl1cyxcbiAgICB9O1xuICB9XG59XG4iXX0=