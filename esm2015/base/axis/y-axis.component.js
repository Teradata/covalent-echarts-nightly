/**
 * @fileoverview added by tsickle
 * Generated from: axis/y-axis.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TdChartOptionsService } from '../chart-options.service';
import { TdChartAxisDirective } from './axis.component';
export class TdChartYAxisComponent extends TdChartAxisDirective {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('yAxis', _optionsService);
    }
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
TdChartYAxisComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartYAxisComponent.propDecorators = {
    position: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdChartYAxisComponent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieS1heGlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vZWNoYXJ0cy9iYXNlLyIsInNvdXJjZXMiOlsiYXhpcy95LWF4aXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFMUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFakUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUF1Q3hELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxvQkFBb0I7Ozs7SUFHN0QsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osTUFBTSxFQUFFO29CQUNOLFFBQVE7b0JBQ1IsSUFBSTtvQkFDSixNQUFNO29CQUNOLFdBQVc7b0JBQ1gsUUFBUTtvQkFDUixNQUFNO29CQUNOLE1BQU07b0JBQ04sY0FBYztvQkFDZCxlQUFlO29CQUNmLFNBQVM7b0JBQ1QsWUFBWTtvQkFDWixTQUFTO29CQUNULGFBQWE7b0JBQ2IsS0FBSztvQkFDTCxLQUFLO29CQUNMLE9BQU87b0JBQ1AsYUFBYTtvQkFDYixVQUFVO29CQUNWLFNBQVM7b0JBQ1QsUUFBUTtvQkFDUixjQUFjO29CQUNkLFVBQVU7b0JBQ1YsVUFBVTtvQkFDVixXQUFXO29CQUNYLFdBQVc7b0JBQ1gsV0FBVztvQkFDWCxNQUFNO29CQUNOLGFBQWE7b0JBQ2IsUUFBUTtvQkFDUixHQUFHO2lCQUNKO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBeENRLHFCQUFxQjs7O3VCQTBDM0IsS0FBSzs7OztJQUFOLHlDQUFtQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBUZFlBeGlzUG9zaXRpb24gfSBmcm9tICcuL2F4aXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRkQ2hhcnRBeGlzRGlyZWN0aXZlIH0gZnJvbSAnLi9heGlzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXktYXhpcycsXG4gIHRlbXBsYXRlOiAnJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2NvbmZpZycsXG4gICAgJ2lkJyxcbiAgICAnc2hvdycsXG4gICAgJ2dyaWRJbmRleCcsXG4gICAgJ29mZnNldCcsXG4gICAgJ3R5cGUnLFxuICAgICduYW1lJyxcbiAgICAnbmFtZUxvY2F0aW9uJyxcbiAgICAnbmFtZVRleHRTdHlsZScsXG4gICAgJ25hbWVHYXAnLFxuICAgICduYW1lUm90YXRlJyxcbiAgICAnaW52ZXJzZScsXG4gICAgJ2JvdW5kYXJ5R2FwJyxcbiAgICAnbWluJyxcbiAgICAnbWF4JyxcbiAgICAnc2NhbGUnLFxuICAgICdtaW5JbnRlcnZhbCcsXG4gICAgJ2ludGVydmFsJyxcbiAgICAnbG9nQmFzZScsXG4gICAgJ3NpbGVudCcsXG4gICAgJ3RyaWdnZXJFdmVudCcsXG4gICAgJ2F4aXNMaW5lJyxcbiAgICAnYXhpc1RpY2snLFxuICAgICdheGlzTGFiZWwnLFxuICAgICdzcGxpdExpbmUnLFxuICAgICdzcGxpdEFyZWEnLFxuICAgICdkYXRhJyxcbiAgICAnYXhpc1BvaW50ZXInLFxuICAgICd6bGV2ZWwnLFxuICAgICd6JyxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRZQXhpc0NvbXBvbmVudCBleHRlbmRzIFRkQ2hhcnRBeGlzRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgcG9zaXRpb246IFRkWUF4aXNQb3NpdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd5QXhpcycsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cbn1cbiJdfQ==