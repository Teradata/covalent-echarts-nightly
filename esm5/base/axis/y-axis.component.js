/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { __extends } from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TdChartOptionsService } from '../chart-options.service';
import { TdChartAxisComponent } from './axis.component';
var TdChartYAxisComponent = /** @class */ (function (_super) {
    __extends(TdChartYAxisComponent, _super);
    function TdChartYAxisComponent(_optionsService) {
        return _super.call(this, 'yAxis', _optionsService) || this;
    }
    TdChartYAxisComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-y-axis',
                    template: '',
                    inputs: [
                        'config',
                        'id',
                        'show',
                        'gridIndex',
                        'offset',
                        'type',
                        'name',
                        'nameLocation',
                        'nameTextStyle',
                        'nameGap',
                        'nameRotate',
                        'inverse',
                        'boundaryGap',
                        'min',
                        'max',
                        'scale',
                        'minInterval',
                        'interval',
                        'logBase',
                        'silent',
                        'triggerEvent',
                        'axisLine',
                        'axisTick',
                        'axisLabel',
                        'splitLine',
                        'splitArea',
                        'data',
                        'axisPointer',
                        'zlevel',
                        'z',
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TdChartYAxisComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartYAxisComponent.propDecorators = {
        position: [{ type: Input }]
    };
    return TdChartYAxisComponent;
}(TdChartAxisComponent));
export { TdChartYAxisComponent };
if (false) {
    /** @type {?} */
    TdChartYAxisComponent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieS1heGlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvIiwic291cmNlcyI6WyJheGlzL3ktYXhpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV4RDtJQXFDMkMseUNBQW9CO0lBRzdELCtCQUFZLGVBQXNDO2VBQ2hELGtCQUFNLE9BQU8sRUFBRSxlQUFlLENBQUM7SUFDakMsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUU7d0JBQ04sUUFBUTt3QkFDUixJQUFJO3dCQUNKLE1BQU07d0JBQ04sV0FBVzt3QkFDWCxRQUFRO3dCQUNSLE1BQU07d0JBQ04sTUFBTTt3QkFDTixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsU0FBUzt3QkFDVCxZQUFZO3dCQUNaLFNBQVM7d0JBQ1QsYUFBYTt3QkFDYixLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsT0FBTzt3QkFDUCxhQUFhO3dCQUNiLFVBQVU7d0JBQ1YsU0FBUzt3QkFDVCxRQUFRO3dCQUNSLGNBQWM7d0JBQ2QsVUFBVTt3QkFDVixVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLE1BQU07d0JBQ04sYUFBYTt3QkFDYixRQUFRO3dCQUNSLEdBQUc7cUJBQ0o7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQXhDUSxxQkFBcUI7OzsyQkEwQzNCLEtBQUs7O0lBS1IsNEJBQUM7Q0FBQSxBQTNDRCxDQXFDMkMsb0JBQW9CLEdBTTlEO1NBTlkscUJBQXFCOzs7SUFDaEMseUNBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFRkWUF4aXNQb3NpdGlvbiB9IGZyb20gJy4vYXhpcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVGRDaGFydEF4aXNDb21wb25lbnQgfSBmcm9tICcuL2F4aXMuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQteS1heGlzJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBpbnB1dHM6IFtcbiAgICAnY29uZmlnJyxcbiAgICAnaWQnLFxuICAgICdzaG93JyxcbiAgICAnZ3JpZEluZGV4JyxcbiAgICAnb2Zmc2V0JyxcbiAgICAndHlwZScsXG4gICAgJ25hbWUnLFxuICAgICduYW1lTG9jYXRpb24nLFxuICAgICduYW1lVGV4dFN0eWxlJyxcbiAgICAnbmFtZUdhcCcsXG4gICAgJ25hbWVSb3RhdGUnLFxuICAgICdpbnZlcnNlJyxcbiAgICAnYm91bmRhcnlHYXAnLFxuICAgICdtaW4nLFxuICAgICdtYXgnLFxuICAgICdzY2FsZScsXG4gICAgJ21pbkludGVydmFsJyxcbiAgICAnaW50ZXJ2YWwnLFxuICAgICdsb2dCYXNlJyxcbiAgICAnc2lsZW50JyxcbiAgICAndHJpZ2dlckV2ZW50JyxcbiAgICAnYXhpc0xpbmUnLFxuICAgICdheGlzVGljaycsXG4gICAgJ2F4aXNMYWJlbCcsXG4gICAgJ3NwbGl0TGluZScsXG4gICAgJ3NwbGl0QXJlYScsXG4gICAgJ2RhdGEnLFxuICAgICdheGlzUG9pbnRlcicsXG4gICAgJ3psZXZlbCcsXG4gICAgJ3onLFxuICBdLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFlBeGlzQ29tcG9uZW50IGV4dGVuZHMgVGRDaGFydEF4aXNDb21wb25lbnQge1xuICBASW5wdXQoKSBwb3NpdGlvbjogVGRZQXhpc1Bvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3lBeGlzJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxufVxuIl19