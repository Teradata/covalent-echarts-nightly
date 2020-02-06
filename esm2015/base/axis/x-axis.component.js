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
    position: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    TdChartXAxisComponent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC1heGlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UvIiwic291cmNlcyI6WyJheGlzL3gtYXhpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTFFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBdUN4RCxNQUFNLE9BQU8scUJBQXNCLFNBQVEsb0JBQW9COzs7O0lBRzdELFlBQVksZUFBc0M7UUFDaEQsS0FBSyxDQUFDLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUExQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLE1BQU0sRUFBRTtvQkFDTixRQUFRO29CQUNSLElBQUk7b0JBQ0osTUFBTTtvQkFDTixXQUFXO29CQUNYLFFBQVE7b0JBQ1IsTUFBTTtvQkFDTixNQUFNO29CQUNOLGNBQWM7b0JBQ2QsZUFBZTtvQkFDZixTQUFTO29CQUNULFlBQVk7b0JBQ1osU0FBUztvQkFDVCxhQUFhO29CQUNiLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxPQUFPO29CQUNQLGFBQWE7b0JBQ2IsVUFBVTtvQkFDVixTQUFTO29CQUNULFFBQVE7b0JBQ1IsY0FBYztvQkFDZCxVQUFVO29CQUNWLFVBQVU7b0JBQ1YsV0FBVztvQkFDWCxXQUFXO29CQUNYLFdBQVc7b0JBQ1gsTUFBTTtvQkFDTixhQUFhO29CQUNiLFFBQVE7b0JBQ1IsR0FBRztpQkFDSjtnQkFDRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQXhDUSxxQkFBcUI7Ozt1QkEwQzNCLEtBQUs7Ozs7SUFBTix5Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGRYQXhpc1Bvc2l0aW9uIH0gZnJvbSAnLi9heGlzLmludGVyZmFjZSc7XG5pbXBvcnQgeyBUZENoYXJ0QXhpc0NvbXBvbmVudCB9IGZyb20gJy4vYXhpcy5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC14LWF4aXMnLFxuICB0ZW1wbGF0ZTogJycsXG4gIGlucHV0czogW1xuICAgICdjb25maWcnLFxuICAgICdpZCcsXG4gICAgJ3Nob3cnLFxuICAgICdncmlkSW5kZXgnLFxuICAgICdvZmZzZXQnLFxuICAgICd0eXBlJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVMb2NhdGlvbicsXG4gICAgJ25hbWVUZXh0U3R5bGUnLFxuICAgICduYW1lR2FwJyxcbiAgICAnbmFtZVJvdGF0ZScsXG4gICAgJ2ludmVyc2UnLFxuICAgICdib3VuZGFyeUdhcCcsXG4gICAgJ21pbicsXG4gICAgJ21heCcsXG4gICAgJ3NjYWxlJyxcbiAgICAnbWluSW50ZXJ2YWwnLFxuICAgICdpbnRlcnZhbCcsXG4gICAgJ2xvZ0Jhc2UnLFxuICAgICdzaWxlbnQnLFxuICAgICd0cmlnZ2VyRXZlbnQnLFxuICAgICdheGlzTGluZScsXG4gICAgJ2F4aXNUaWNrJyxcbiAgICAnYXhpc0xhYmVsJyxcbiAgICAnc3BsaXRMaW5lJyxcbiAgICAnc3BsaXRBcmVhJyxcbiAgICAnZGF0YScsXG4gICAgJ2F4aXNQb2ludGVyJyxcbiAgICAnemxldmVsJyxcbiAgICAneicsXG4gIF0sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0WEF4aXNDb21wb25lbnQgZXh0ZW5kcyBUZENoYXJ0QXhpc0NvbXBvbmVudCB7XG4gIEBJbnB1dCgpIHBvc2l0aW9uOiBUZFhBeGlzUG9zaXRpb247XG5cbiAgY29uc3RydWN0b3IoX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICBzdXBlcigneEF4aXMnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG59XG4iXX0=