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
        const config = assignDefined(this._state, {
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
                ticket,
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
                template: "<ng-template #tooltipContent [ngTemplateOutlet]=\"formatterTemplate\" [ngTemplateOutletContext]=\"_context\"></ng-template>\n",
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
    config: [{ type: Input }],
    formatter: [{ type: Input }],
    position: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    borderColor: [{ type: Input }],
    borderWidth: [{ type: Input }],
    padding: [{ type: Input }],
    textStyle: [{ type: Input }],
    extraCssText: [{ type: Input }],
    formatterTemplate: [{ type: ContentChild, args: [TdChartTooltipFormatterDirective, { read: TemplateRef, static: true },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvdG9vbHRpcC8iLCJzb3VyY2VzIjpbInNlcmllcy10b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsWUFBWSxFQUNaLFNBQVMsRUFDVCxXQUFXLEVBQ1gsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVix1QkFBdUIsR0FHeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFFLE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBT3pGLE1BQU0sT0FBTyx3QkFBd0I7Ozs7OztJQXdCbkMsWUFDVSxrQkFBcUMsRUFDckMsV0FBdUIsRUFDdkIsZ0JBQW1DO1FBRm5DLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQTFCckMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUV6QixhQUFRLEdBQXFCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQU8zQyxvQkFBZSxHQUFXLG9CQUFvQixDQUFDO1FBQy9DLGdCQUFXLEdBQVcsTUFBTSxDQUFDO1FBQzdCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBQ3hCLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFDcEIsY0FBUyxHQUFRO1lBQ3hCLEtBQUssRUFBRSxNQUFNO1NBQ2QsQ0FBQztJQVlDLENBQUM7Ozs7SUFFSixXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRU8sV0FBVzs7Y0FDWCxNQUFNLEdBQVEsYUFBYSxDQUMvQixJQUFJLENBQUMsTUFBTSxFQUNYO1lBQ0UsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUNwRyxFQUNELElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FDL0I7UUFDRCxpRkFBaUY7UUFDakYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Ozs7OztJQU1PLFVBQVU7UUFDaEI7Ozs7OztRQUFPLENBQUMsTUFBVyxFQUFFLE1BQVcsRUFBRSxRQUFnRCxFQUFFLEVBQUU7WUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRztnQkFDZCxTQUFTLEVBQUUsTUFBTTtnQkFDakIsTUFBTTthQUNQLENBQUM7WUFDRixxRkFBcUY7WUFDckYsbUNBQW1DO1lBQ25DLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDZCxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsbUJBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVFLENBQUMsRUFBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxtQkFBYSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2pFLENBQUMsRUFBQztJQUNKLENBQUM7Ozs7O0lBRU8sYUFBYTtRQUNuQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7O1lBcEZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUseUJBQXlCO2dCQUNuQyx5SUFBdUM7Z0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBZkMsaUJBQWlCO1lBQ2pCLFVBQVU7WUFNWSxpQkFBaUI7OztxQkFjdEMsS0FBSzt3QkFFTCxLQUFLO3VCQUVMLEtBQUs7OEJBQ0wsS0FBSzswQkFDTCxLQUFLOzBCQUNMLEtBQUs7c0JBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUdMLEtBQUs7Z0NBRUwsWUFBWSxTQUFDLGdDQUFnQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzJCQUdsRixTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOzs7Ozs7O0lBckI3QywwQ0FBeUI7O0lBRXpCLDRDQUFvRDs7SUFFcEQsMENBQXFCOztJQUVyQiw2Q0FBd0I7O0lBRXhCLDRDQUFnRDs7SUFDaEQsbURBQXdEOztJQUN4RCwrQ0FBc0M7O0lBQ3RDLCtDQUFpQzs7SUFDakMsMkNBQTZCOztJQUM3Qiw2Q0FFRTs7SUFDRixnREFBOEI7O0lBRTlCLHFEQUVFOztJQUNGLGdEQUE4RTs7Ozs7SUFHNUUsc0RBQTZDOzs7OztJQUM3QywrQ0FBK0I7Ozs7O0lBQy9CLG9EQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGFzc2lnbkRlZmluZWQsIFRkU2VyaWVzQ29tcG9uZW50IH0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlLCBUZFRvb2x0aXBDb250ZXh0IH0gZnJvbSAnLi90b29sdGlwLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXNlcmllcy10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRTZXJpZXNUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG5cbiAgX2NvbnRleHQ6IFRkVG9vbHRpcENvbnRleHQgPSBuZXcgVGRUb29sdGlwQ29udGV4dCgpO1xuXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55O1xuXG4gIEBJbnB1dCgpIGZvcm1hdHRlcjogYW55O1xuICAvLyBQYXJlbnQgdG9vbHRpcCB0cmlnZ2VyIG11c3QgYmUgc2V0IHRvICdpdGVtJyB0byByZW5kZXIgdGhlc2UgcHJvcGVydGllc1xuICBASW5wdXQoKSBwb3NpdGlvbjogc3RyaW5nIHwgc3RyaW5nW10gfCBudW1iZXJbXTtcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAncmdiYSg1MCw1MCw1MCwwLjcpJztcbiAgQElucHV0KCkgYm9yZGVyQ29sb3I6IHN0cmluZyA9ICcjMzMzJztcbiAgQElucHV0KCkgYm9yZGVyV2lkdGg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciA9IDU7XG4gIEBJbnB1dCgpIHRleHRTdHlsZTogYW55ID0ge1xuICAgIGNvbG9yOiAnI0ZGRicsXG4gIH07XG4gIEBJbnB1dCgpIGV4dHJhQ3NzVGV4dDogc3RyaW5nO1xuXG4gIEBDb250ZW50Q2hpbGQoVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogdHJ1ZSB9KSBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8XG4gICAgYW55XG4gID47XG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXBDb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgZnVsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3Nlcmllc0NvbXBvbmVudDogVGRTZXJpZXNDb21wb25lbnQsXG4gICkge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKFxuICAgICAgdGhpcy5fc3RhdGUsXG4gICAgICB7XG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuYmFja2dyb3VuZENvbG9yLFxuICAgICAgICBib3JkZXJDb2xvcjogdGhpcy5ib3JkZXJDb2xvcixcbiAgICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuYm9yZGVyV2lkdGgsXG4gICAgICAgIHBhZGRpbmc6IHRoaXMucGFkZGluZyxcbiAgICAgICAgdGV4dFN0eWxlOiB0aGlzLnRleHRTdHlsZSxcbiAgICAgICAgZXh0cmFDc3NUZXh0OiB0aGlzLmV4dHJhQ3NzVGV4dCxcbiAgICAgICAgZm9ybWF0dGVyOiB0aGlzLmZvcm1hdHRlciA/IHRoaXMuZm9ybWF0dGVyIDogdGhpcy5mb3JtYXR0ZXJUZW1wbGF0ZSA/IHRoaXMuX2Zvcm1hdHRlcigpIDogdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICAgIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSxcbiAgICApO1xuICAgIC8vIHNldCBzZXJpZXMgdG9vbHRpcCBjb25maWd1cmF0aW9uIGluIHBhcmVudCBjaGFydCBhbmQgcmVuZGVyIG5ldyBjb25maWd1cmF0aW9uc1xuICAgIHRoaXMuX3Nlcmllc0NvbXBvbmVudC5zZXRTdGF0ZU9wdGlvbigndG9vbHRpcCcsIGNvbmZpZyk7XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0dGVyIGZvciB0b29sdGlwXG4gICAqXG4gICAqL1xuICBwcml2YXRlIF9mb3JtYXR0ZXIoKTogKHBhcmFtczogYW55LCB0aWNrZXQ6IGFueSwgY2FsbGJhY2s6ICh0aWNrZXQ6IHN0cmluZywgaHRtbDogc3RyaW5nKSA9PiB2b2lkKSA9PiBzdHJpbmcge1xuICAgIHJldHVybiAocGFyYW1zOiBhbnksIHRpY2tldDogYW55LCBjYWxsYmFjazogKHRpY2tldDogc3RyaW5nLCBodG1sOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMuX2NvbnRleHQgPSB7XG4gICAgICAgICRpbXBsaWNpdDogcGFyYW1zLFxuICAgICAgICB0aWNrZXQsXG4gICAgICB9O1xuICAgICAgLy8gdGltZW91dCBzZXQgc2luY2Ugd2UgbmVlZCB0byBzZXQgdGhlIEhUTUwgYXQgdGhlIGVuZCBvZiB0aGUgYW5ndWxhciBsaWZlY3ljbGUgd2hlblxuICAgICAgLy8gdGhlIHRvb2x0aXAgZGVsYXkgaXMgbW9yZSB0aGFuIDBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayh0aWNrZXQsICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUwpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MO1xuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fc2VyaWVzQ29tcG9uZW50LnJlbW92ZVN0YXRlT3B0aW9uKCd0b29sdGlwJyk7XG4gIH1cbn1cbiJdfQ==