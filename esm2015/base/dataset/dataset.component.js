/**
 * @fileoverview added by tsickle
 * Generated from: dataset/dataset.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
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
     * @private
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        const config = assignDefined(this._state, {
            id: this.id,
            source: this.source,
            dimensions: this.dimensions,
            sourceHeader: this.sourceHeader,
        }, this.config ? this.config : {});
        // set dataset configuration in parent chart and render new configurations
        this._optionsService.setOption('dataset', config);
    }
    /**
     * @private
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
    id: [{ type: Input }],
    config: [{ type: Input }],
    source: [{ type: Input }],
    dimensions: [{ type: Input }],
    sourceHeader: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    TdDatasetComponent.prototype._optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNldC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vZWNoYXJ0cy9iYXNlL2RhdGFzZXQvZGF0YXNldC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBd0IsTUFBTSxlQUFlLENBQUM7QUFDaEcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQztBQU96QyxNQUFNLE9BQU8sa0JBQWtCOzs7O0lBUzdCLFlBQW9CLGVBQXNDO1FBQXRDLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQVJsRCxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBR2hCLFdBQU0sR0FBUSxFQUFFLENBQUM7SUFLbUMsQ0FBQzs7OztJQUU5RCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU8sV0FBVzs7Y0FDWCxNQUFNLEdBQVEsYUFBYSxDQUMvQixJQUFJLENBQUMsTUFBTSxFQUNYO1lBQ0UsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDaEMsRUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQy9CO1FBQ0QsMEVBQTBFO1FBQzFFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVPLGFBQWE7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7O1lBekNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsRUFBRTtnQkFDWixRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQVBRLHFCQUFxQjs7O2lCQVczQixLQUFLO3FCQUNMLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLOzJCQUNMLEtBQUs7Ozs7Ozs7SUFOTixvQ0FBeUI7O0lBRXpCLGdDQUFvQjs7SUFDcEIsb0NBQTBCOztJQUMxQixvQ0FBZ0M7O0lBQ2hDLHdDQUEyQjs7SUFDM0IsMENBQStCOzs7OztJQUVuQiw2Q0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgdGVtcGxhdGU6ICcnLFxuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LWRhdGFzZXQnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGREYXRhc2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG5cbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgY29uZmlnOiBhbnkgPSB7fTtcbiAgQElucHV0KCkgc291cmNlOiBvYmplY3QgfCBhbnlbXTtcbiAgQElucHV0KCkgZGltZW5zaW9uczogYW55W107XG4gIEBJbnB1dCgpIHNvdXJjZUhlYWRlcjogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQoXG4gICAgICB0aGlzLl9zdGF0ZSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHNvdXJjZTogdGhpcy5zb3VyY2UsXG4gICAgICAgIGRpbWVuc2lvbnM6IHRoaXMuZGltZW5zaW9ucyxcbiAgICAgICAgc291cmNlSGVhZGVyOiB0aGlzLnNvdXJjZUhlYWRlcixcbiAgICAgIH0sXG4gICAgICB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sXG4gICAgKTtcbiAgICAvLyBzZXQgZGF0YXNldCBjb25maWd1cmF0aW9uIGluIHBhcmVudCBjaGFydCBhbmQgcmVuZGVyIG5ldyBjb25maWd1cmF0aW9uc1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnNldE9wdGlvbignZGF0YXNldCcsIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UuY2xlYXJPcHRpb24oJ2RhdGFzZXQnKTtcbiAgfVxufVxuIl19