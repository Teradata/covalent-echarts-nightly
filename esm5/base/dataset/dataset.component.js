/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
import { TdChartOptionsService } from '../chart-options.service';
import { assignDefined } from '../utils';
var TdDatasetComponent = /** @class */ (function () {
    function TdDatasetComponent(_optionsService) {
        this._optionsService = _optionsService;
        this._state = {};
        this.config = {};
    }
    /**
     * @return {?}
     */
    TdDatasetComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdDatasetComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeOption();
    };
    /**
     * @return {?}
     */
    TdDatasetComponent.prototype._setOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = assignDefined(this._state, {
            id: this.id,
            source: this.source,
            dimensions: this.dimensions,
            sourceHeader: this.sourceHeader,
        }, this.config ? this.config : {});
        // set dataset configuration in parent chart and render new configurations
        this._optionsService.setOption('dataset', config);
    };
    /**
     * @return {?}
     */
    TdDatasetComponent.prototype._removeOption = /**
     * @return {?}
     */
    function () {
        this._optionsService.clearOption('dataset');
    };
    TdDatasetComponent.decorators = [
        { type: Component, args: [{
                    template: '',
                    selector: 'td-chart-dataset',
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TdDatasetComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdDatasetComponent.propDecorators = {
        id: [{ type: Input, args: ['id',] }],
        config: [{ type: Input, args: ['config',] }],
        source: [{ type: Input, args: ['source',] }],
        dimensions: [{ type: Input, args: ['dimensions',] }],
        sourceHeader: [{ type: Input, args: ['sourceHeader',] }]
    };
    return TdDatasetComponent;
}());
export { TdDatasetComponent };
if (false) {
    /** @type {?} */
    TdDatasetComponent.prototype._state;
    /** @type {?} */
    TdDatasetComponent.prototype.id;
    /** @type {?} */
    TdDatasetComponent.prototype.config;
    /** @type {?} */
    TdDatasetComponent.prototype.source;
    /** @type {?} */
    TdDatasetComponent.prototype.dimensions;
    /** @type {?} */
    TdDatasetComponent.prototype.sourceHeader;
    /** @type {?} */
    TdDatasetComponent.prototype._optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImJhc2UvZGF0YXNldC9kYXRhc2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFekM7SUFlRSw0QkFBb0IsZUFBc0M7UUFBdEMsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBUmxELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFHUixXQUFNLEdBQVEsRUFBRSxDQUFDO0lBSzJCLENBQUM7Ozs7SUFFOUQsd0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCx3Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7OztJQUVPLHdDQUFXOzs7SUFBbkI7O1lBQ00sTUFBTSxHQUFRLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzNDLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1NBRWhDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ2xDLDBFQUEwRTtRQUMxRSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7OztJQUVPLDBDQUFhOzs7SUFBckI7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QyxDQUFDOztnQkF2Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxFQUFFO29CQUNaLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFQUSxxQkFBcUI7OztxQkFZM0IsS0FBSyxTQUFDLElBQUk7eUJBQ1YsS0FBSyxTQUFDLFFBQVE7eUJBQ2QsS0FBSyxTQUFDLFFBQVE7NkJBQ2QsS0FBSyxTQUFDLFlBQVk7K0JBQ2xCLEtBQUssU0FBQyxjQUFjOztJQTRCdkIseUJBQUM7Q0FBQSxBQXpDRCxJQXlDQztTQXBDWSxrQkFBa0I7OztJQUU3QixvQ0FBeUI7O0lBRXpCLGdDQUF3Qjs7SUFDeEIsb0NBQWtDOztJQUNsQyxvQ0FBd0M7O0lBQ3hDLHdDQUF1Qzs7SUFDdkMsMENBQTZDOztJQUVqQyw2Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICB0ZW1wbGF0ZTogJycsXG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtZGF0YXNldCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZERhdGFzZXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG4gIEBJbnB1dCgnc291cmNlJykgc291cmNlOiBvYmplY3QgfCBhbnlbXTtcbiAgQElucHV0KCdkaW1lbnNpb25zJykgZGltZW5zaW9uczogYW55W107XG4gIEBJbnB1dCgnc291cmNlSGVhZGVyJykgc291cmNlSGVhZGVyOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgc291cmNlOiB0aGlzLnNvdXJjZSxcbiAgICAgIGRpbWVuc2lvbnM6IHRoaXMuZGltZW5zaW9ucyxcbiAgICAgIHNvdXJjZUhlYWRlcjogdGhpcy5zb3VyY2VIZWFkZXIsXG5cbiAgICB9LCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30pO1xuICAgIC8vIHNldCBkYXRhc2V0IGNvbmZpZ3VyYXRpb24gaW4gcGFyZW50IGNoYXJ0IGFuZCByZW5kZXIgbmV3IGNvbmZpZ3VyYXRpb25zXG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2Uuc2V0T3B0aW9uKCdkYXRhc2V0JywgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5jbGVhck9wdGlvbignZGF0YXNldCcpO1xuICB9XG5cbn1cbiJdfQ==