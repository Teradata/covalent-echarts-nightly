/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ContentChild, ViewChild, TemplateRef, ChangeDetectorRef, ElementRef, ChangeDetectionStrategy, } from '@angular/core';
import { assignDefined, TdSeriesComponent } from '@covalent/echarts/base';
import { TdChartTooltipFormatterDirective, TdTooltipContext } from './tooltip.component';
export class TdSeriesTooltipComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _seriesComponent
     */
    constructor(_changeDetectorRef, _elementRef, _seriesComponent) {
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
        let config = assignDefined(this._state, {
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
    }
    /**
     * Formatter for tooltip
     *
     * @private
     * @return {?}
     */
    _formatter() {
        return (/**
         * @param {?} params
         * @param {?} ticket
         * @param {?} callback
         * @return {?}
         */
        (params, ticket, callback) => {
            this._context = {
                $implicit: params,
                ticket: ticket,
            };
            // timeout set since we need to set the HTML at the end of the angular lifecycle when
            // the tooltip delay is more than 0
            setTimeout((/**
             * @return {?}
             */
            () => {
                callback(ticket, ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML);
            }));
            this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML;
        });
    }
    /**
     * @private
     * @return {?}
     */
    _removeOption() {
        this._seriesComponent.removeStateOption('tooltip');
    }
}
TdSeriesTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series-tooltip',
                template: "<ng-template #tooltipContent [ngTemplateOutlet]=\"formatterTemplate\" [ngTemplateOutletContext]=\"_context\"> </ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdSeriesTooltipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdSeriesComponent }
];
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
    formatterTemplate: [{ type: ContentChild, args: [TdChartTooltipFormatterDirective, { read: TemplateRef, static: false },] }],
    fullTemplate: [{ type: ViewChild, args: ['tooltipContent', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    TdSeriesTooltipComponent.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    TdSeriesTooltipComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdSeriesTooltipComponent.prototype._seriesComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvdG9vbHRpcC8iLCJzb3VyY2VzIjpbInNlcmllcy10b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVix1QkFBdUIsR0FHeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBT3pGLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQXdCbkMsWUFDVSxrQkFBcUMsRUFDckMsV0FBdUIsRUFDdkIsZ0JBQW1DO1FBRm5DLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQTFCckMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUV6QixhQUFRLEdBQXFCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQU8xQixvQkFBZSxHQUFXLG9CQUFvQixDQUFDO1FBQ25ELGdCQUFXLEdBQVcsTUFBTSxDQUFDO1FBQzdCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDbEIsY0FBUyxHQUFRO1lBQ25DLEtBQUssRUFBRSxNQUFNO1NBQ2QsQ0FBQztJQVlDLENBQUM7Ozs7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7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K0NBQStCOzs7OztJQUMvQixvREFBMkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkLCBUZFNlcmllc0NvbXBvbmVudCB9IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5pbXBvcnQgeyBUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwgVGRUb29sdGlwQ29udGV4dCB9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXMtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkU2VyaWVzVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuXG4gIF9jb250ZXh0OiBUZFRvb2x0aXBDb250ZXh0ID0gbmV3IFRkVG9vbHRpcENvbnRleHQoKTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55O1xuXG4gIEBJbnB1dCgnZm9ybWF0dGVyJykgZm9ybWF0dGVyOiBhbnk7XG4gIC8vIFBhcmVudCB0b29sdGlwIHRyaWdnZXIgbXVzdCBiZSBzZXQgdG8gJ2l0ZW0nIHRvIHJlbmRlciB0aGVzZSBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogc3RyaW5nIHwgc3RyaW5nW10gfCBudW1iZXJbXTtcbiAgQElucHV0KCdiYWNrZ3JvdW5kQ29sb3InKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICdyZ2JhKDUwLDUwLDUwLDAuNyknO1xuICBASW5wdXQoJ2JvcmRlckNvbG9yJykgYm9yZGVyQ29sb3I6IHN0cmluZyA9ICcjMzMzJztcbiAgQElucHV0KCdib3JkZXJXaWR0aCcpIGJvcmRlcldpZHRoOiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ3BhZGRpbmcnKSBwYWRkaW5nOiBudW1iZXIgPSA1O1xuICBASW5wdXQoJ3RleHRTdHlsZScpIHRleHRTdHlsZTogYW55ID0ge1xuICAgIGNvbG9yOiAnI0ZGRicsXG4gIH07XG4gIEBJbnB1dCgnZXh0cmFDc3NUZXh0JykgZXh0cmFDc3NUZXh0OiBzdHJpbmc7XG5cbiAgQENvbnRlbnRDaGlsZChUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiBmYWxzZSB9KSBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8XG4gICAgYW55XG4gID47XG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXBDb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgZnVsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3Nlcmllc0NvbXBvbmVudDogVGRTZXJpZXNDb21wb25lbnQsXG4gICkge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZChcbiAgICAgIHRoaXMuX3N0YXRlLFxuICAgICAge1xuICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICAgIHRleHRTdHlsZTogdGhpcy50ZXh0U3R5bGUsXG4gICAgICAgIGV4dHJhQ3NzVGV4dDogdGhpcy5leHRyYUNzc1RleHQsXG4gICAgICAgIGZvcm1hdHRlcjogdGhpcy5mb3JtYXR0ZXIgPyB0aGlzLmZvcm1hdHRlciA6IHRoaXMuZm9ybWF0dGVyVGVtcGxhdGUgPyB0aGlzLl9mb3JtYXR0ZXIoKSA6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sXG4gICAgKTtcbiAgICAvLyBzZXQgc2VyaWVzIHRvb2x0aXAgY29uZmlndXJhdGlvbiBpbiBwYXJlbnQgY2hhcnQgYW5kIHJlbmRlciBuZXcgY29uZmlndXJhdGlvbnNcbiAgICB0aGlzLl9zZXJpZXNDb21wb25lbnQuc2V0U3RhdGVPcHRpb24oJ3Rvb2x0aXAnLCBjb25maWcpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdHRlciBmb3IgdG9vbHRpcFxuICAgKlxuICAgKi9cbiAgcHJpdmF0ZSBfZm9ybWF0dGVyKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKHBhcmFtczogYW55LCB0aWNrZXQ6IGFueSwgY2FsbGJhY2s6ICh0aWNrZXQ6IHN0cmluZywgaHRtbDogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLl9jb250ZXh0ID0ge1xuICAgICAgICAkaW1wbGljaXQ6IHBhcmFtcyxcbiAgICAgICAgdGlja2V0OiB0aWNrZXQsXG4gICAgICB9O1xuICAgICAgLy8gdGltZW91dCBzZXQgc2luY2Ugd2UgbmVlZCB0byBzZXQgdGhlIEhUTUwgYXQgdGhlIGVuZCBvZiB0aGUgYW5ndWxhciBsaWZlY3ljbGUgd2hlblxuICAgICAgLy8gdGhlIHRvb2x0aXAgZGVsYXkgaXMgbW9yZSB0aGFuIDBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayh0aWNrZXQsICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUwpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fc2VyaWVzQ29tcG9uZW50LnJlbW92ZVN0YXRlT3B0aW9uKCd0b29sdGlwJyk7XG4gIH1cbn1cbiJdfQ==