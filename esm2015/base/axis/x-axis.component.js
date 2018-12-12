import { Component, ChangeDetectionStrategy, Input, } from '@angular/core';
import { TdChartOptionsService } from '../chart-options.service';
import { TdChartAxisComponent } from './axis.component';
export class TdChartXAxisComponent extends TdChartAxisComponent {
    constructor(_optionsService) {
        super('xAxis', _optionsService);
    }
}
TdChartXAxisComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-x-axis',
                template: '',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieC1heGlzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzLyIsInNvdXJjZXMiOlsiYmFzZS9heGlzL3gtYXhpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCx1QkFBdUIsRUFDdkIsS0FBSyxHQUNOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRWpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBT3hELE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxvQkFBb0I7SUFJN0QsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixRQUFRLEVBQUUsRUFBRTtnQkFDWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVJRLHFCQUFxQjs7O3VCQVczQixLQUFLLFNBQUMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IFRkWEF4aXNQb3NpdGlvbiAgfSBmcm9tICcuL2F4aXMuaW50ZXJmYWNlJztcbmltcG9ydCB7IFRkQ2hhcnRBeGlzQ29tcG9uZW50IH0gZnJvbSAnLi9heGlzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXgtYXhpcycsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRYQXhpc0NvbXBvbmVudCBleHRlbmRzIFRkQ2hhcnRBeGlzQ29tcG9uZW50IHtcblxuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IFRkWEF4aXNQb3NpdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICAgIHN1cGVyKCd4QXhpcycsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxufVxuIl19