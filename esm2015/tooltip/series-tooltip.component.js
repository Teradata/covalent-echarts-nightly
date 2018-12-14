/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
            formatter: this.formatter ? this.formatter : (this.formatterTemplate ? this._formatter() : undefined),
        }, this.config ? this.config : {});
        // set series tooltip configuration in parent chart and render new configurations
        this._seriesComponent.setStateOption('tooltip', config);
    }
    /**
     * Formatter for tooltip
     *
     * @return {?}
     */
    _formatter() {
        return (params, ticket, callback) => {
            this._context = {
                $implicit: params,
                ticket: ticket,
            };
            // timeout set since we need to set the HTML at the end of the angular lifecycle when
            // the tooltip delay is more than 0
            setTimeout(() => {
                callback(ticket, ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML);
            });
            this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML;
        };
    }
    /**
     * @return {?}
     */
    _removeOption() {
        this._seriesComponent.removeStateOption('tooltip');
    }
}
TdSeriesTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series-tooltip',
                template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
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
    formatterTemplate: [{ type: ContentChild, args: [TdChartTooltipFormatterDirective, { read: TemplateRef },] }],
    fullTemplate: [{ type: ViewChild, args: ['tooltipContent',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvdG9vbHRpcC8iLCJzb3VyY2VzIjpbInNlcmllcy10b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVix1QkFBdUIsR0FHeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBT3pGLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQXVCbkMsWUFBb0Isa0JBQXFDLEVBQ3JDLFdBQXVCLEVBQ3ZCLGdCQUFtQztRQUZuQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBbUI7UUF2Qi9DLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFekIsYUFBUSxHQUFxQixJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFPMUIsb0JBQWUsR0FBVyxvQkFBb0IsQ0FBQztRQUNuRCxnQkFBVyxHQUFXLE1BQU0sQ0FBQztRQUM3QixnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUM1QixZQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLGNBQVMsR0FBUTtZQUNuQyxLQUFLLEVBQUUsTUFBTTtTQUNkLENBQUM7SUFTRixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7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bXBvbmVudCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGFzc2lnbkRlZmluZWQsIFRkU2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlLCBUZFRvb2x0aXBDb250ZXh0IH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllcy10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRTZXJpZXNUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcblxuICBfY29udGV4dDogVGRUb29sdGlwQ29udGV4dCA9IG5ldyBUZFRvb2x0aXBDb250ZXh0KCk7XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueTtcblxuICBASW5wdXQoJ2Zvcm1hdHRlcicpIGZvcm1hdHRlcjogYW55O1xuICAvLyBQYXJlbnQgdG9vbHRpcCB0cmlnZ2VyIG11c3QgYmUgc2V0IHRvICdpdGVtJyB0byByZW5kZXIgdGhlc2UgcHJvcGVydGllc1xuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IHN0cmluZyB8IHN0cmluZ1tdIHwgbnVtYmVyW107XG4gIEBJbnB1dCgnYmFja2dyb3VuZENvbG9yJykgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAncmdiYSg1MCw1MCw1MCwwLjcpJztcbiAgQElucHV0KCdib3JkZXJDb2xvcicpIGJvcmRlckNvbG9yOiBzdHJpbmcgPSAnIzMzMyc7XG4gIEBJbnB1dCgnYm9yZGVyV2lkdGgnKSBib3JkZXJXaWR0aDogbnVtYmVyID0gMDtcbiAgQElucHV0KCdwYWRkaW5nJykgcGFkZGluZzogbnVtYmVyID0gNTtcbiAgQElucHV0KCd0ZXh0U3R5bGUnKSB0ZXh0U3R5bGU6IGFueSA9IHtcbiAgICBjb2xvcjogJyNGRkYnLFxuICB9O1xuICBASW5wdXQoJ2V4dHJhQ3NzVGV4dCcpIGV4dHJhQ3NzVGV4dDogc3RyaW5nO1xuXG4gIEBDb250ZW50Q2hpbGQoVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUsIHtyZWFkOiBUZW1wbGF0ZVJlZn0pIGZvcm1hdHRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd0b29sdGlwQ29udGVudCcpIGZ1bGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX3Nlcmllc0NvbXBvbmVudDogVGRTZXJpZXNDb21wb25lbnQpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB7XG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBib3JkZXJDb2xvcjogdGhpcy5ib3JkZXJDb2xvcixcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgdGV4dFN0eWxlOiB0aGlzLnRleHRTdHlsZSxcbiAgICAgIGV4dHJhQ3NzVGV4dDogdGhpcy5leHRyYUNzc1RleHQsXG4gICAgICBmb3JtYXR0ZXI6IHRoaXMuZm9ybWF0dGVyID8gdGhpcy5mb3JtYXR0ZXIgOiAodGhpcy5mb3JtYXR0ZXJUZW1wbGF0ZSA/IHRoaXMuX2Zvcm1hdHRlcigpIDogdW5kZWZpbmVkKSxcbiAgICB9LCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30pO1xuICAgIC8vIHNldCBzZXJpZXMgdG9vbHRpcCBjb25maWd1cmF0aW9uIGluIHBhcmVudCBjaGFydCBhbmQgcmVuZGVyIG5ldyBjb25maWd1cmF0aW9uc1xuICAgIHRoaXMuX3Nlcmllc0NvbXBvbmVudC5zZXRTdGF0ZU9wdGlvbigndG9vbHRpcCcsIGNvbmZpZyk7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBGb3JtYXR0ZXIgZm9yIHRvb2x0aXBcbiAgICpcbiAgICovXG4gIHByaXZhdGUgX2Zvcm1hdHRlcigpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIChwYXJhbXM6IGFueSwgdGlja2V0OiBhbnksIGNhbGxiYWNrOiAodGlja2V0OiBzdHJpbmcsIGh0bWw6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xuICAgICAgdGhpcy5fY29udGV4dCA9IHtcbiAgICAgICAgJGltcGxpY2l0OiBwYXJhbXMsXG4gICAgICAgIHRpY2tldDogdGlja2V0LFxuICAgICAgfTtcbiAgICAgIC8vIHRpbWVvdXQgc2V0IHNpbmNlIHdlIG5lZWQgdG8gc2V0IHRoZSBIVE1MIGF0IHRoZSBlbmQgb2YgdGhlIGFuZ3VsYXIgbGlmZWN5Y2xlIHdoZW5cbiAgICAgIC8vIHRoZSB0b29sdGlwIGRlbGF5IGlzIG1vcmUgdGhhbiAwXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2FsbGJhY2sodGlja2V0LCAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTDtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX3Nlcmllc0NvbXBvbmVudC5yZW1vdmVTdGF0ZU9wdGlvbigndG9vbHRpcCcpO1xuICB9XG5cbn1cbiJdfQ==