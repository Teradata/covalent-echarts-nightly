/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TdChartOptionsService } from '../chart-options.service';
import { TdChartAxisComponent } from './axis.component';
var TdChartYAxisComponent = /** @class */ (function (_super) {
    tslib_1.__extends(TdChartYAxisComponent, _super);
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
        position: [{ type: Input, args: ['position',] }]
    };
    return TdChartYAxisComponent;
}(TdChartAxisComponent));
export { TdChartYAxisComponent };
if (false) {
    /** @type {?} */
    TdChartYAxisComponent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieS1heGlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzLyIsInNvdXJjZXMiOlsiYmFzZS9heGlzL3ktYXhpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVqRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUV4RDtJQXFDMkMsaURBQW9CO0lBRzdELCtCQUFZLGVBQXNDO2VBQ2hELGtCQUFNLE9BQU8sRUFBRSxlQUFlLENBQUM7SUFDakMsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixRQUFRLEVBQUUsRUFBRTtvQkFDWixNQUFNLEVBQUU7d0JBQ04sUUFBUTt3QkFDUixJQUFJO3dCQUNKLE1BQU07d0JBQ04sV0FBVzt3QkFDWCxRQUFRO3dCQUNSLE1BQU07d0JBQ04sTUFBTTt3QkFDTixjQUFjO3dCQUNkLGVBQWU7d0JBQ2YsU0FBUzt3QkFDVCxZQUFZO3dCQUNaLFNBQVM7d0JBQ1QsYUFBYTt3QkFDYixLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsT0FBTzt3QkFDUCxhQUFhO3dCQUNiLFVBQVU7d0JBQ1YsU0FBUzt3QkFDVCxRQUFRO3dCQUNSLGNBQWM7d0JBQ2QsVUFBVTt3QkFDVixVQUFVO3dCQUNWLFdBQVc7d0JBQ1gsV0FBVzt3QkFDWCxXQUFXO3dCQUNYLE1BQU07d0JBQ04sYUFBYTt3QkFDYixRQUFRO3dCQUNSLEdBQUc7cUJBQ0o7b0JBQ0QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQXhDUSxxQkFBcUI7OzsyQkEwQzNCLEtBQUssU0FBQyxVQUFVOztJQUtuQiw0QkFBQztDQUFBLEFBM0NELENBcUMyQyxvQkFBb0IsR0FNOUQ7U0FOWSxxQkFBcUI7OztJQUNoQyx5Q0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGRZQXhpc1Bvc2l0aW9uIH0gZnJvbSAnLi9heGlzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUZENoYXJ0QXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC15LWF4aXMnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGlucHV0czogW1xuICAgICdjb25maWcnLFxuICAgICdpZCcsXG4gICAgJ3Nob3cnLFxuICAgICdncmlkSW5kZXgnLFxuICAgICdvZmZzZXQnLFxuICAgICd0eXBlJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVMb2NhdGlvbicsXG4gICAgJ25hbWVUZXh0U3R5bGUnLFxuICAgICduYW1lR2FwJyxcbiAgICAnbmFtZVJvdGF0ZScsXG4gICAgJ2ludmVyc2UnLFxuICAgICdib3VuZGFyeUdhcCcsXG4gICAgJ21pbicsXG4gICAgJ21heCcsXG4gICAgJ3NjYWxlJyxcbiAgICAnbWluSW50ZXJ2YWwnLFxuICAgICdpbnRlcnZhbCcsXG4gICAgJ2xvZ0Jhc2UnLFxuICAgICdzaWxlbnQnLFxuICAgICd0cmlnZ2VyRXZlbnQnLFxuICAgICdheGlzTGluZScsXG4gICAgJ2F4aXNUaWNrJyxcbiAgICAnYXhpc0xhYmVsJyxcbiAgICAnc3BsaXRMaW5lJyxcbiAgICAnc3BsaXRBcmVhJyxcbiAgICAnZGF0YScsXG4gICAgJ2F4aXNQb2ludGVyJyxcbiAgICAnemxldmVsJyxcbiAgICAneicsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0WUF4aXNDb21wb25lbnQgZXh0ZW5kcyBUZENoYXJ0QXhpc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogVGRZQXhpc1Bvc2l0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3lBeGlzJywgX29wdGlvbnNTZXJ2aWNlKTtcbiAgfVxufVxuIl19