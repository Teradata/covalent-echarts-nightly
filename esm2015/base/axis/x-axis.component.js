/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { TdChartOptionsService } from '../chart-options.service';
import { TdChartAxisComponent } from './axis.component';
export class TdChartXAxisComponent extends TdChartAxisComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('xAxis', _optionsService);
    }
}
TdChartXAxisComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-x-axis',
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
TdChartXAxisComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartXAxisComponent.propDecorators = {
    position: [{ type: Input, args: ['position',] }]
};
if (false) {
    /** @type {?} */
    TdChartXAxisComponent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC1heGlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzLyIsInNvdXJjZXMiOlsiYmFzZS9heGlzL3gtYXhpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBdUN4RCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsb0JBQW9COzs7O0lBRzdELFlBQVksZUFBc0M7UUFDaEQsS0FBSyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE1BQU0sRUFBRTtvQkFDTixRQUFRO29CQUNSLElBQUk7b0JBQ0osTUFBTTtvQkFDTixXQUFXO29CQUNYLFFBQVE7b0JBQ1IsTUFBTTtvQkFDTixNQUFNO29CQUNOLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixTQUFTO29CQUNULFlBQVk7b0JBQ1osU0FBUztvQkFDVCxhQUFhO29CQUNiLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxPQUFPO29CQUNQLGFBQWE7b0JBQ2IsVUFBVTtvQkFDVixTQUFTO29CQUNULFFBQVE7b0JBQ1IsY0FBYztvQkFDZCxVQUFVO29CQUNWLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsTUFBTTtvQkFDTixhQUFhO29CQUNiLFFBQVE7b0JBQ1IsR0FBRztpQkFDSjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQXhDUSxxQkFBcUI7Ozt1QkEwQzNCLEtBQUssU0FBQyxVQUFVOzs7O0lBQWpCLHlDQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBUZFhBeGlzUG9zaXRpb24gfSBmcm9tICcuL2F4aXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRkQ2hhcnRBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXgtYXhpcycsXG4gIHRlbXBsYXRlOiAnJyxcbiAgaW5wdXRzOiBbXG4gICAgJ2NvbmZpZycsXG4gICAgJ2lkJyxcbiAgICAnc2hvdycsXG4gICAgJ2dyaWRJbmRleCcsXG4gICAgJ29mZnNldCcsXG4gICAgJ3R5cGUnLFxuICAgICduYW1lJyxcbiAgICAnbmFtZUxvY2F0aW9uJyxcbiAgICAnbmFtZVRleHRTdHlsZScsXG4gICAgJ25hbWVHYXAnLFxuICAgICduYW1lUm90YXRlJyxcbiAgICAnaW52ZXJzZScsXG4gICAgJ2JvdW5kYXJ5R2FwJyxcbiAgICAnbWluJyxcbiAgICAnbWF4JyxcbiAgICAnc2NhbGUnLFxuICAgICdtaW5JbnRlcnZhbCcsXG4gICAgJ2ludGVydmFsJyxcbiAgICAnbG9nQmFzZScsXG4gICAgJ3NpbGVudCcsXG4gICAgJ3RyaWdnZXJFdmVudCcsXG4gICAgJ2F4aXNMaW5lJyxcbiAgICAnYXhpc1RpY2snLFxuICAgICdheGlzTGFiZWwnLFxuICAgICdzcGxpdExpbmUnLFxuICAgICdzcGxpdEFyZWEnLFxuICAgICdkYXRhJyxcbiAgICAnYXhpc1BvaW50ZXInLFxuICAgICd6bGV2ZWwnLFxuICAgICd6JyxcbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRYQXhpc0NvbXBvbmVudCBleHRlbmRzIFRkQ2hhcnRBeGlzQ29tcG9uZW50IHtcbiAgQElucHV0KCdwb3NpdGlvbicpIHBvc2l0aW9uOiBUZFhBeGlzUG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigneEF4aXMnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG59XG4iXX0=