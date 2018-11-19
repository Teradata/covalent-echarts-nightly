import { Component, Input, ChangeDetectionStrategy, forwardRef, NgModule } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent } from '@covalent/echarts/base';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/scatter';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartSeriesScatterComponent extends TdSeriesComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('scatter', _optionsService);
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            coordinateSystem: this.coordinateSystem,
            xAxisIndex: this.xAxisIndex,
            yAxisIndex: this.yAxisIndex,
            polarIndex: this.polarIndex,
            geoIndex: this.geoIndex,
            calendarIndex: this.calendarIndex,
            hoverAnimation: this.hoverAnimation,
            legendHoverLink: this.legendHoverLink,
            symbol: this.symbol,
            symbolSize: this.symbolSize,
            symbolRotate: this.symbolRotate,
            symbolKeepAspect: this.symbolKeepAspect,
            symbolOffset: this.symbolOffset,
            large: this.large,
            largeThreshold: this.largeThreshold,
            cursor: this.cursor,
            label: this.label,
            itemStyle: this.itemStyle,
            emphasis: this.emphasis,
            progressive: this.progressive,
            progressiveThreshold: this.progressiveThreshold,
            dimensions: this.dimensions,
            encode: this.encode,
            seriesLayoutBy: this.seriesLayoutBy,
            datasetIndex: this.datasetIndex,
            markPoint: this.markPoint,
            markLine: this.markLine,
            markArea: this.markArea,
            zlevel: this.zlevel,
            z: this.z,
            silent: this.silent,
        };
    }
}
TdChartSeriesScatterComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-scatter]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesScatterComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesScatterComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesScatterComponent.propDecorators = {
    coordinateSystem: [{ type: Input, args: ['coordinateSystem',] }],
    xAxisIndex: [{ type: Input, args: ['xAxisIndex',] }],
    yAxisIndex: [{ type: Input, args: ['yAxisIndex',] }],
    polarIndex: [{ type: Input, args: ['polarIndex',] }],
    geoIndex: [{ type: Input, args: ['geoIndex',] }],
    calendarIndex: [{ type: Input, args: ['calendarIndex',] }],
    hoverAnimation: [{ type: Input, args: ['hoverAnimation',] }],
    legendHoverLink: [{ type: Input, args: ['legendHoverLink',] }],
    symbol: [{ type: Input, args: ['symbol',] }],
    symbolSize: [{ type: Input, args: ['symbolSize',] }],
    symbolRotate: [{ type: Input, args: ['symbolRotate',] }],
    symbolKeepAspect: [{ type: Input, args: ['symbolKeepAspect',] }],
    symbolOffset: [{ type: Input, args: ['symbolOffset',] }],
    large: [{ type: Input, args: ['large',] }],
    largeThreshold: [{ type: Input, args: ['largeThreshold',] }],
    cursor: [{ type: Input, args: ['cursor',] }],
    label: [{ type: Input, args: ['label',] }],
    itemStyle: [{ type: Input, args: ['itemStyle',] }],
    emphasis: [{ type: Input, args: ['emphasis',] }],
    progressive: [{ type: Input, args: ['progressive',] }],
    progressiveThreshold: [{ type: Input, args: ['progressiveThreshold',] }],
    dimensions: [{ type: Input, args: ['dimensions',] }],
    encode: [{ type: Input, args: ['encode',] }],
    seriesLayoutBy: [{ type: Input, args: ['seriesLayoutBy',] }],
    datasetIndex: [{ type: Input, args: ['datasetIndex',] }],
    markPoint: [{ type: Input, args: ['markPoint',] }],
    markLine: [{ type: Input, args: ['markLine',] }],
    markArea: [{ type: Input, args: ['markArea',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }],
    silent: [{ type: Input, args: ['silent',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const SCATTER_MODULE_COMPONENTS = [
    TdChartSeriesScatterComponent,
];
class CovalentScatterEchartsModule {
}
CovalentScatterEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    SCATTER_MODULE_COMPONENTS,
                ],
                exports: [
                    SCATTER_MODULE_COMPONENTS,
                ],
            },] }
];

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

export { SCATTER_MODULE_COMPONENTS, CovalentScatterEchartsModule, TdChartSeriesScatterComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy1zY2F0dGVyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9zY2F0dGVyL3NjYXR0ZXIuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9zY2F0dGVyL3NjYXR0ZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgVGRDb29yZGluYXRlU3lzdGVtLFxuICBUZE1hcmtQb2ludFN5bWJvbCxcbiAgSVRkTWFya1BvaW50LFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZExhYmVsLFxuICBJVGRFbXBoYXNpcyxcbiAgVGRTZXJpZXNMYXlvdXRCeSxcbiAgSVRkTWFya0xpbmUsXG4gIElUZE1hcmtBcmVhLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgSVRkU2VyaWVzLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRTY2F0dGVyU2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdzY2F0dGVyJz4ge1xuICBjb29yZGluYXRlU3lzdGVtPzogVGRDb29yZGluYXRlU3lzdGVtO1xuICB4QXhpc0luZGV4PzogbnVtYmVyO1xuICB5QXhpc0luZGV4PzogbnVtYmVyO1xuICBwb2xhckluZGV4PzogbnVtYmVyO1xuICBnZW9JbmRleD86IG51bWJlcjtcbiAgY2FsZW5kYXJJbmRleD86IG51bWJlcjtcbiAgaG92ZXJBbmltYXRpb24/OiBib29sZWFuO1xuICBsZWdlbmRIb3Zlckxpbms/OiBib29sZWFuO1xuICBzeW1ib2w/OiBUZE1hcmtQb2ludFN5bWJvbCB8IHN0cmluZztcbiAgc3ltYm9sU2l6ZT86IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIHN5bWJvbFJvdGF0ZT86IG51bWJlcjtcbiAgc3ltYm9sS2VlcEFzcGVjdD86IGJvb2xlYW47XG4gIHN5bWJvbE9mZnNldD86IGFueVtdO1xuICBsYXJnZT86IGJvb2xlYW47XG4gIGxhcmdlVGhyZXNob2xkPzogbnVtYmVyO1xuICBjdXJzb3I/OiBzdHJpbmc7XG4gIGNvbm5lY3ROdWxscz86IGJvb2xlYW47XG4gIGNsaXBPdmVyZmxvdz86IGJvb2xlYW47XG4gIHN0ZXA/OiBib29sZWFuO1xuICBsYWJlbD86IElUZExhYmVsO1xuICBpdGVtU3R5bGU/OiBhbnk7XG4gIGVtcGhhc2lzPzogSVRkRW1waGFzaXM7XG4gIHByb2dyZXNzaXZlPzogbnVtYmVyO1xuICBwcm9ncmVzc2l2ZVRocmVzaG9sZD86IG51bWJlcjtcbiAgZGltZW5zaW9ucz86IGFueVtdO1xuICBlbmNvZGU/OiBhbnk7XG4gIHNlcmllc0xheW91dEJ5PzogVGRTZXJpZXNMYXlvdXRCeTtcbiAgZGF0YXNldEluZGV4PzogbnVtYmVyO1xuICBkYXRhPzogYW55W107XG4gIG1hcmtQb2ludD86IElUZE1hcmtQb2ludDtcbiAgbWFya0xpbmU/OiBJVGRNYXJrTGluZTtcbiAgbWFya0FyZWE/OiBJVGRNYXJrQXJlYTtcbiAgemxldmVsPzogbnVtYmVyO1xuICB6PzogbnVtYmVyO1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuICBcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllc1t0ZC1zY2F0dGVyXScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc1NjYXR0ZXJDb21wb25lbnQpLFxuICB9XSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFNlcmllc1NjYXR0ZXJDb21wb25lbnQgZXh0ZW5kcyBUZFNlcmllc0NvbXBvbmVudDwnc2NhdHRlcic+IGltcGxlbWVudHMgSVRkU2NhdHRlclNlcmllcyB7XG5cbiAgQElucHV0KCdjb29yZGluYXRlU3lzdGVtJykgY29vcmRpbmF0ZVN5c3RlbTogVGRDb29yZGluYXRlU3lzdGVtO1xuICBASW5wdXQoJ3hBeGlzSW5kZXgnKSB4QXhpc0luZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgneUF4aXNJbmRleCcpIHlBeGlzSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdwb2xhckluZGV4JykgcG9sYXJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2dlb0luZGV4JykgZ2VvSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdjYWxlbmRhckluZGV4JykgY2FsZW5kYXJJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ2hvdmVyQW5pbWF0aW9uJykgaG92ZXJBbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgnbGVnZW5kSG92ZXJMaW5rJykgbGVnZW5kSG92ZXJMaW5rOiBib29sZWFuO1xuICBASW5wdXQoJ3N5bWJvbCcpIHN5bWJvbDogVGRNYXJrUG9pbnRTeW1ib2wgfCBzdHJpbmc7XG4gIEBJbnB1dCgnc3ltYm9sU2l6ZScpIHN5bWJvbFNpemU6IG51bWJlciB8IGFueVtdIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnc3ltYm9sUm90YXRlJykgc3ltYm9sUm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgnc3ltYm9sS2VlcEFzcGVjdCcpIHN5bWJvbEtlZXBBc3BlY3Q6IGJvb2xlYW47XG4gIEBJbnB1dCgnc3ltYm9sT2Zmc2V0Jykgc3ltYm9sT2Zmc2V0OiBhbnlbXTtcbiAgQElucHV0KCdsYXJnZScpIGxhcmdlOiBib29sZWFuO1xuICBASW5wdXQoJ2xhcmdlVGhyZXNob2xkJykgbGFyZ2VUaHJlc2hvbGQ6IG51bWJlcjtcbiAgQElucHV0KCdjdXJzb3InKSBjdXJzb3I6IHN0cmluZztcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCdpdGVtU3R5bGUnKSBpdGVtU3R5bGU6IElUZEl0ZW1TdHlsZTtcbiAgQElucHV0KCdlbXBoYXNpcycpIGVtcGhhc2lzOiBJVGRFbXBoYXNpcztcbiAgQElucHV0KCdwcm9ncmVzc2l2ZScpIHByb2dyZXNzaXZlOiBudW1iZXI7XG4gIEBJbnB1dCgncHJvZ3Jlc3NpdmVUaHJlc2hvbGQnKSBwcm9ncmVzc2l2ZVRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoJ2RpbWVuc2lvbnMnKSBkaW1lbnNpb25zOiBhbnlbXTtcbiAgQElucHV0KCdlbmNvZGUnKSBlbmNvZGU6IGFueTtcbiAgQElucHV0KCdzZXJpZXNMYXlvdXRCeScpIHNlcmllc0xheW91dEJ5OiBUZFNlcmllc0xheW91dEJ5O1xuICBASW5wdXQoJ2RhdGFzZXRJbmRleCcpIGRhdGFzZXRJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ21hcmtQb2ludCcpIG1hcmtQb2ludDogSVRkTWFya1BvaW50O1xuICBASW5wdXQoJ21hcmtMaW5lJykgbWFya0xpbmU6IElUZE1hcmtMaW5lO1xuICBASW5wdXQoJ21hcmtBcmVhJykgbWFya0FyZWE6IElUZE1hcmtBcmVhO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3NjYXR0ZXInLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvb3JkaW5hdGVTeXN0ZW06IHRoaXMuY29vcmRpbmF0ZVN5c3RlbSxcbiAgICAgIHhBeGlzSW5kZXg6IHRoaXMueEF4aXNJbmRleCxcbiAgICAgIHlBeGlzSW5kZXg6IHRoaXMueUF4aXNJbmRleCxcbiAgICAgIHBvbGFySW5kZXg6IHRoaXMucG9sYXJJbmRleCxcbiAgICAgIGdlb0luZGV4OiB0aGlzLmdlb0luZGV4LFxuICAgICAgY2FsZW5kYXJJbmRleDogdGhpcy5jYWxlbmRhckluZGV4LFxuICAgICAgaG92ZXJBbmltYXRpb246IHRoaXMuaG92ZXJBbmltYXRpb24sXG4gICAgICBsZWdlbmRIb3Zlckxpbms6IHRoaXMubGVnZW5kSG92ZXJMaW5rLFxuICAgICAgc3ltYm9sOiB0aGlzLnN5bWJvbCxcbiAgICAgIHN5bWJvbFNpemU6IHRoaXMuc3ltYm9sU2l6ZSxcbiAgICAgIHN5bWJvbFJvdGF0ZTogdGhpcy5zeW1ib2xSb3RhdGUsXG4gICAgICBzeW1ib2xLZWVwQXNwZWN0OiB0aGlzLnN5bWJvbEtlZXBBc3BlY3QsXG4gICAgICBzeW1ib2xPZmZzZXQ6IHRoaXMuc3ltYm9sT2Zmc2V0LFxuICAgICAgbGFyZ2U6IHRoaXMubGFyZ2UsXG4gICAgICBsYXJnZVRocmVzaG9sZDogdGhpcy5sYXJnZVRocmVzaG9sZCxcbiAgICAgIGN1cnNvcjogdGhpcy5jdXJzb3IsXG4gICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgIGl0ZW1TdHlsZTogdGhpcy5pdGVtU3R5bGUsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICAgIHByb2dyZXNzaXZlOiB0aGlzLnByb2dyZXNzaXZlLFxuICAgICAgcHJvZ3Jlc3NpdmVUaHJlc2hvbGQ6IHRoaXMucHJvZ3Jlc3NpdmVUaHJlc2hvbGQsXG4gICAgICBkaW1lbnNpb25zOiB0aGlzLmRpbWVuc2lvbnMsXG4gICAgICBlbmNvZGU6IHRoaXMuZW5jb2RlLFxuICAgICAgc2VyaWVzTGF5b3V0Qnk6IHRoaXMuc2VyaWVzTGF5b3V0QnksXG4gICAgICBkYXRhc2V0SW5kZXg6IHRoaXMuZGF0YXNldEluZGV4LFxuICAgICAgbWFya1BvaW50OiB0aGlzLm1hcmtQb2ludCxcbiAgICAgIG1hcmtMaW5lOiB0aGlzLm1hcmtMaW5lLFxuICAgICAgbWFya0FyZWE6IHRoaXMubWFya0FyZWEsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jaGFydC9zY2F0dGVyJztcblxuaW1wb3J0IHsgVGRDaGFydFNlcmllc1NjYXR0ZXJDb21wb25lbnQgfSBmcm9tICcuL3NjYXR0ZXIuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFNDQVRURVJfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0U2VyaWVzU2NhdHRlckNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNDQVRURVJfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBTQ0FUVEVSX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFNjYXR0ZXJFY2hhcnRzTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1Bb0VhLDZCQUE4QixTQUFRLGlCQUE0Qjs7OztJQWtDN0UsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsU0FBUztRQUNQLE9BQU87WUFDTCxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1lBQ3ZDLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixVQUFVLEVB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