/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
import { TdChartOptionsService } from '../chart-options.service';
import { assignDefined } from '../utils';
export class TdDatasetComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        this._optionsService = _optionsService;
        this._state = {};
        this.config = {};
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        let config = assignDefined(this._state, {
            id: this.id,
            source: this.source,
            dimensions: this.dimensions,
            sourceHeader: this.sourceHeader,
        }, this.config ? this.config : {});
        // set dataset configuration in parent chart and render new configurations
        this._optionsService.setOption('dataset', config);
    }
    /**
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('dataset');
    }
}
TdDatasetComponent.decorators = [
    { type: Component, args: [{
                template: '',
                selector: 'td-chart-dataset',
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdDatasetComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdDatasetComponent.propDecorators = {
    id: [{ type: Input, args: ['id',] }],
    config: [{ type: Input, args: ['config',] }],
    source: [{ type: Input, args: ['source',] }],
    dimensions: [{ type: Input, args: ['dimensions',] }],
    sourceHeader: [{ type: Input, args: ['sourceHeader',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImJhc2UvZGF0YXNldC9kYXRhc2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsdUJBQXVCLEdBR3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFPekMsTUFBTSxPQUFPLGtCQUFrQjs7OztJQVU3QixZQUFvQixlQUFzQztRQUF0QyxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFSbEQsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUdSLFdBQU0sR0FBUSxFQUFFLENBQUM7SUFLMkIsQ0FBQzs7OztJQUU5RCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFTyxXQUFXOztZQUNiLE1BQU0sR0FBUSxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUMzQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsVUFBVSxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzNCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtTQUVoQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsQywwRUFBMEU7UUFDMUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3BELENBQUM7Ozs7SUFFTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQzlDLENBQUM7OztZQXZDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFQUSxxQkFBcUI7OztpQkFZM0IsS0FBSyxTQUFDLElBQUk7cUJBQ1YsS0FBSyxTQUFDLFFBQVE7cUJBQ2QsS0FBSyxTQUFDLFFBQVE7eUJBQ2QsS0FBSyxTQUFDLFlBQVk7MkJBQ2xCLEtBQUssU0FBQyxjQUFjOzs7O0lBTnJCLG9DQUF5Qjs7SUFFekIsZ0NBQXdCOztJQUN4QixvQ0FBa0M7O0lBQ2xDLG9DQUF3Qzs7SUFDeEMsd0NBQXVDOztJQUN2QywwQ0FBNkM7O0lBRWpDLDZDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCB9IGZyb20gJy4uL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlOiAnJyxcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1kYXRhc2V0JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkRGF0YXNldENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG5cbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcbiAgQElucHV0KCdzb3VyY2UnKSBzb3VyY2U6IG9iamVjdCB8IGFueVtdO1xuICBASW5wdXQoJ2RpbWVuc2lvbnMnKSBkaW1lbnNpb25zOiBhbnlbXTtcbiAgQElucHV0KCdzb3VyY2VIZWFkZXInKSBzb3VyY2VIZWFkZXI6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBzb3VyY2U6IHRoaXMuc291cmNlLFxuICAgICAgZGltZW5zaW9uczogdGhpcy5kaW1lbnNpb25zLFxuICAgICAgc291cmNlSGVhZGVyOiB0aGlzLnNvdXJjZUhlYWRlcixcblxuICAgIH0sIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSk7XG4gICAgLy8gc2V0IGRhdGFzZXQgY29uZmlndXJhdGlvbiBpbiBwYXJlbnQgY2hhcnQgYW5kIHJlbmRlciBuZXcgY29uZmlndXJhdGlvbnNcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5zZXRPcHRpb24oJ2RhdGFzZXQnLCBjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmNsZWFyT3B0aW9uKCdkYXRhc2V0Jyk7XG4gIH1cblxufVxuIl19