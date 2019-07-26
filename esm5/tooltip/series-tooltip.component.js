/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, ViewChild, TemplateRef, ChangeDetectorRef, ElementRef, ChangeDetectionStrategy, } from '@angular/core';
import { assignDefined, TdSeriesComponent } from '@covalent/echarts/base';
import { TdChartTooltipFormatterDirective, TdTooltipContext } from './tooltip.component';
var TdSeriesTooltipComponent = /** @class */ (function () {
    function TdSeriesTooltipComponent(_changeDetectorRef, _elementRef, _seriesComponent) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._seriesComponent = _seriesComponent;
        this._state = {};
        this._context = new TdTooltipContext();
        this.backgroundColor = 'rgba(50,50,50,0.7)';
        this.borderColor = '#333';
        this.borderWidth = 0;
        this.padding = 5;
        this.textStyle = {
            color: '#FFF',
        };
    }
    /**
     * @return {?}
     */
    TdSeriesTooltipComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdSeriesTooltipComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeOption();
    };
    /**
     * @return {?}
     */
    TdSeriesTooltipComponent.prototype._setOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = assignDefined(this._state, {
            position: this.position,
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth,
            padding: this.padding,
            textStyle: this.textStyle,
            extraCssText: this.extraCssText,
            formatter: this.formatter ? this.formatter : this.formatterTemplate ? this._formatter() : undefined,
        }, this.config ? this.config : {});
        // set series tooltip configuration in parent chart and render new configurations
        this._seriesComponent.setStateOption('tooltip', config);
    };
    /**
     * Formatter for tooltip
     *
     */
    /**
     * Formatter for tooltip
     *
     * @return {?}
     */
    TdSeriesTooltipComponent.prototype._formatter = /**
     * Formatter for tooltip
     *
     * @return {?}
     */
    function () {
        var _this = this;
        return function (params, ticket, callback) {
            _this._context = {
                $implicit: params,
                ticket: ticket,
            };
            // timeout set since we need to set the HTML at the end of the angular lifecycle when
            // the tooltip delay is more than 0
            setTimeout(function () {
                callback(ticket, ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML);
            });
            _this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML;
        };
    };
    /**
     * @return {?}
     */
    TdSeriesTooltipComponent.prototype._removeOption = /**
     * @return {?}
     */
    function () {
        this._seriesComponent.removeStateOption('tooltip');
    };
    TdSeriesTooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series-tooltip',
                    template: "<ng-template #tooltipContent [ngTemplateOutlet]=\"formatterTemplate\" [ngTemplateOutletContext]=\"_context\"> </ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TdSeriesTooltipComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: TdSeriesComponent }
    ]; };
    TdSeriesTooltipComponent.propDecorators = {
        config: [{ type: Input, args: ['config',] }],
        formatter: [{ type: Input, args: ['formatter',] }],
        position: [{ type: Input, args: ['position',] }],
        backgroundColor: [{ type: Input, args: ['backgroundColor',] }],
        borderColor: [{ type: Input, args: ['borderColor',] }],
        borderWidth: [{ type: Input, args: ['borderWidth',] }],
        padding: [{ type: Input, args: ['padding',] }],
        textStyle: [{ type: Input, args: ['textStyle',] }],
        extraCssText: [{ type: Input, args: ['extraCssText',] }],
        formatterTemplate: [{ type: ContentChild, args: [TdChartTooltipFormatterDirective, { read: TemplateRef },] }],
        fullTemplate: [{ type: ViewChild, args: ['tooltipContent',] }]
    };
    return TdSeriesTooltipComponent;
}());
export { TdSeriesTooltipComponent };
if (false) {
    /** @type {?} */
    TdSeriesTooltipComponent.prototype._state;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype._context;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype.config;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype.formatter;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype.position;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype.backgroundColor;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype.borderColor;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype.borderWidth;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype.padding;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype.textStyle;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype.extraCssText;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype.formatterTemplate;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype.fullTemplate;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype._changeDetectorRef;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype._elementRef;
    /** @type {?} */
    TdSeriesTooltipComponent.prototype._seriesComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvdG9vbHRpcC8iLCJzb3VyY2VzIjpbInNlcmllcy10b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVix1QkFBdUIsR0FHeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXpGO0lBMkJFLGtDQUNVLGtCQUFxQyxFQUNyQyxXQUF1QixFQUN2QixnQkFBbUM7UUFGbkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBeEJyQyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXpCLGFBQVEsR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBTzFCLG9CQUFlLEdBQVcsb0JBQW9CLENBQUM7UUFDbkQsZ0JBQVcsR0FBVyxNQUFNLENBQUM7UUFDN0IsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDNUIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNsQixjQUFTLEdBQVE7WUFDbkMsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDO0lBVUMsQ0FBQzs7OztJQUVKLDhDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsOENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFTyw4Q0FBVzs7O0lBQW5COztZQUNNLE1BQU0sR0FBUSxhQUFhLENBQzdCLElBQUksQ0FBQyxNQUFNLEVBQ1g7WUFDRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTO1NBQ3BHLEVBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUMvQjtRQUNELGlGQUFpRjtRQUNqRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSyw2Q0FBVTs7Ozs7SUFBbEI7UUFBQSxpQkFjQztRQWJDLE9BQU8sVUFBQyxNQUFXLEVBQUUsTUFBVyxFQUFFLFFBQWdEO1lBQ2hGLEtBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2QsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FBQztZQUNGLHFGQUFxRjtZQUNyRixtQ0FBbUM7WUFDbkMsVUFBVSxDQUFDO2dCQUNULFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxtQkFBYSxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDNUUsQ0FBQyxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDdkMsT0FBTyxDQUFDLG1CQUFhLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFBLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDakUsQ0FBQyxDQUFDO0lBQ0osQ0FBQzs7OztJQUVPLGdEQUFhOzs7SUFBckI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBbEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQywwSUFBdUM7b0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFmQyxpQkFBaUI7Z0JBQ2pCLFVBQVU7Z0JBTVksaUJBQWlCOzs7eUJBY3RDLEtBQUssU0FBQyxRQUFROzRCQUVkLEtBQUssU0FBQyxXQUFXOzJCQUVqQixLQUFLLFNBQUMsVUFBVTtrQ0FDaEIsS0FBSyxTQUFDLGlCQUFpQjs4QkFDdkIsS0FBSyxTQUFDLGFBQWE7OEJBQ25CLEtBQUssU0FBQyxhQUFhOzBCQUNuQixLQUFLLFNBQUMsU0FBUzs0QkFDZixLQUFLLFNBQUMsV0FBVzsrQkFHakIsS0FBSyxTQUFDLGNBQWM7b0NBRXBCLFlBQVksU0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7K0JBQ3BFLFNBQVMsU0FBQyxnQkFBZ0I7O0lBMEQ3QiwrQkFBQztDQUFBLEFBbkZELElBbUZDO1NBOUVZLHdCQUF3Qjs7O0lBQ25DLDBDQUF5Qjs7SUFFekIsNENBQW9EOztJQUVwRCwwQ0FBNkI7O0lBRTdCLDZDQUFtQzs7SUFFbkMsNENBQTBEOztJQUMxRCxtREFBeUU7O0lBQ3pFLCtDQUFtRDs7SUFDbkQsK0NBQThDOztJQUM5QywyQ0FBc0M7O0lBQ3RDLDZDQUVFOztJQUNGLGdEQUE0Qzs7SUFFNUMscURBQTJHOztJQUMzRyxnREFBNEQ7O0lBRzFELHNEQUE2Qzs7SUFDN0MsK0NBQStCOztJQUMvQixvREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkLCBUZFNlcmllc0NvbXBvbmVudCB9IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5pbXBvcnQgeyBUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwgVGRUb29sdGlwQ29udGV4dCB9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXMtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkU2VyaWVzVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuXG4gIF9jb250ZXh0OiBUZFRvb2x0aXBDb250ZXh0ID0gbmV3IFRkVG9vbHRpcENvbnRleHQoKTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55O1xuXG4gIEBJbnB1dCgnZm9ybWF0dGVyJykgZm9ybWF0dGVyOiBhbnk7XG4gIC8vIFBhcmVudCB0b29sdGlwIHRyaWdnZXIgbXVzdCBiZSBzZXQgdG8gJ2l0ZW0nIHRvIHJlbmRlciB0aGVzZSBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogc3RyaW5nIHwgc3RyaW5nW10gfCBudW1iZXJbXTtcbiAgQElucHV0KCdiYWNrZ3JvdW5kQ29sb3InKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICdyZ2JhKDUwLDUwLDUwLDAuNyknO1xuICBASW5wdXQoJ2JvcmRlckNvbG9yJykgYm9yZGVyQ29sb3I6IHN0cmluZyA9ICcjMzMzJztcbiAgQElucHV0KCdib3JkZXJXaWR0aCcpIGJvcmRlcldpZHRoOiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ3BhZGRpbmcnKSBwYWRkaW5nOiBudW1iZXIgPSA1O1xuICBASW5wdXQoJ3RleHRTdHlsZScpIHRleHRTdHlsZTogYW55ID0ge1xuICAgIGNvbG9yOiAnI0ZGRicsXG4gIH07XG4gIEBJbnB1dCgnZXh0cmFDc3NUZXh0JykgZXh0cmFDc3NUZXh0OiBzdHJpbmc7XG5cbiAgQENvbnRlbnRDaGlsZChUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcENvbnRlbnQnKSBmdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfc2VyaWVzQ29tcG9uZW50OiBUZFNlcmllc0NvbXBvbmVudCxcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKFxuICAgICAgdGhpcy5fc3RhdGUsXG4gICAgICB7XG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhpcy5ib3JkZXJDb2xvcixcbiAgICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuYm9yZGVyV2lkdGgsXG4gICAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgICAgdGV4dFN0eWxlOiB0aGlzLnRleHRTdHlsZSxcbiAgICAgICAgZXh0cmFDc3NUZXh0OiB0aGlzLmV4dHJhQ3NzVGV4dCxcbiAgICAgICAgZm9ybWF0dGVyOiB0aGlzLmZvcm1hdHRlciA/IHRoaXMuZm9ybWF0dGVyIDogdGhpcy5mb3JtYXR0ZXJUZW1wbGF0ZSA/IHRoaXMuX2Zvcm1hdHRlcigpIDogdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICAgIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSxcbiAgICApO1xuICAgIC8vIHNldCBzZXJpZXMgdG9vbHRpcCBjb25maWd1cmF0aW9uIGluIHBhcmVudCBjaGFydCBhbmQgcmVuZGVyIG5ldyBjb25maWd1cmF0aW9uc1xuICAgIHRoaXMuX3Nlcmllc0NvbXBvbmVudC5zZXRTdGF0ZU9wdGlvbigndG9vbHRpcCcsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0dGVyIGZvciB0b29sdGlwXG4gICAqXG4gICAqL1xuICBwcml2YXRlIF9mb3JtYXR0ZXIoKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiAocGFyYW1zOiBhbnksIHRpY2tldDogYW55LCBjYWxsYmFjazogKHRpY2tldDogc3RyaW5nLCBodG1sOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMuX2NvbnRleHQgPSB7XG4gICAgICAgICRpbXBsaWNpdDogcGFyYW1zLFxuICAgICAgICB0aWNrZXQ6IHRpY2tldCxcbiAgICAgIH07XG4gICAgICAvLyB0aW1lb3V0IHNldCBzaW5jZSB3ZSBuZWVkIHRvIHNldCB0aGUgSFRNTCBhdCB0aGUgZW5kIG9mIHRoZSBhbmd1bGFyIGxpZmVjeWNsZSB3aGVuXG4gICAgICAvLyB0aGUgdG9vbHRpcCBkZWxheSBpcyBtb3JlIHRoYW4gMFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHRpY2tldCwgKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUw7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXJpZXNDb21wb25lbnQucmVtb3ZlU3RhdGVPcHRpb24oJ3Rvb2x0aXAnKTtcbiAgfVxufVxuIl19