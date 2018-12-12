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
    TdSeriesTooltipComponent.prototype.ngOnChanges = function () {
        this._setOptions();
    };
    TdSeriesTooltipComponent.prototype.ngOnDestroy = function () {
        this._removeOption();
    };
    TdSeriesTooltipComponent.prototype._setOptions = function () {
        var config = assignDefined(this._state, this.config ? this.config : {}, {
            position: this.position,
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth,
            padding: this.padding,
            textStyle: this.textStyle,
            extraCssText: this.extraCssText,
            formatter: this.formatter ? this.formatter : (this.formatterTemplate ? this._formatter() : undefined),
        });
        // set series tooltip configuration in parent chart and render new configurations
        this._seriesComponent.setStateOption('tooltip', config);
    };
    /**
     * Formatter for tooltip
     *
     */
    TdSeriesTooltipComponent.prototype._formatter = function () {
        var _this = this;
        return function (params, ticket, callback) {
            _this._context = {
                $implicit: params,
                ticket: ticket,
            };
            // timeout set since we need to set the HTML at the end of the angular lifecycle when
            // the tooltip delay is more than 0
            setTimeout(function () {
                callback(ticket, _this._elementRef.nativeElement.innerHTML);
            });
            _this._changeDetectorRef.markForCheck();
            return _this._elementRef.nativeElement.innerHTML;
        };
    };
    TdSeriesTooltipComponent.prototype._removeOption = function () {
        this._seriesComponent.removeStateOption('tooltip');
    };
    TdSeriesTooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series-tooltip',
                    template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLXRvb2x0aXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvdG9vbHRpcC8iLCJzb3VyY2VzIjpbInNlcmllcy10b29sdGlwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxZQUFZLEVBQ1osU0FBUyxFQUNULFdBQVcsRUFDWCxpQkFBaUIsRUFDakIsVUFBVSxFQUNWLHVCQUF1QixHQUd4QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUUsT0FBTyxFQUFFLGdDQUFnQyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFekY7SUE0QkUsa0NBQW9CLGtCQUFxQyxFQUNyQyxXQUF1QixFQUN2QixnQkFBbUM7UUFGbkMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQW1CO1FBdkIvQyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXpCLGFBQVEsR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBTzFCLG9CQUFlLEdBQVcsb0JBQW9CLENBQUM7UUFDbkQsZ0JBQVcsR0FBVyxNQUFNLENBQUM7UUFDN0IsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDNUIsWUFBTyxHQUFXLENBQUMsQ0FBQztRQUNsQixjQUFTLEdBQVE7WUFDbkMsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDO0lBU0YsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDhDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLDhDQUFXLEdBQW5CO1FBQ0UsSUFBSSxNQUFNLEdBQVEsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzNFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1NBQ3RHLENBQUMsQ0FBQztRQUNILGlGQUFpRjtRQUNqRixJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssNkNBQVUsR0FBbEI7UUFBQSxpQkFjQztRQWJDLE9BQU8sVUFBQyxNQUFXLEVBQUUsTUFBVyxFQUFFLFFBQWdEO1lBQ2hGLEtBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2QsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FBQztZQUNGLHFGQUFxRjtZQUNyRixtQ0FBbUM7WUFDbkMsVUFBVSxDQUFDO2dCQUNULFFBQVEsQ0FBQyxNQUFNLEVBQWdCLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzVFLENBQUMsQ0FBQyxDQUFDO1lBQ0gsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3ZDLE9BQXFCLEtBQUksQ0FBQyxXQUFXLENBQUMsYUFBYyxDQUFDLFNBQVMsQ0FBQztRQUNqRSxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU8sZ0RBQWEsR0FBckI7UUFDRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckQsQ0FBQzs7Z0JBOUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUseUJBQXlCO29CQUNuQyxtS0FBdUM7b0JBQ3ZDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFmQyxpQkFBaUI7Z0JBQ2pCLFVBQVU7Z0JBTVksaUJBQWlCOzs7eUJBZXRDLEtBQUssU0FBQyxRQUFROzRCQUVkLEtBQUssU0FBQyxXQUFXOzJCQUVqQixLQUFLLFNBQUMsVUFBVTtrQ0FDaEIsS0FBSyxTQUFDLGlCQUFpQjs4QkFDdkIsS0FBSyxTQUFDLGFBQWE7OEJBQ25CLEtBQUssU0FBQyxhQUFhOzBCQUNuQixLQUFLLFNBQUMsU0FBUzs0QkFDZixLQUFLLFNBQUMsV0FBVzsrQkFHakIsS0FBSyxTQUFDLGNBQWM7b0NBRXBCLFlBQVksU0FBQyxnQ0FBZ0MsRUFBRSxFQUFDLElBQUksRUFBRSxXQUFXLEVBQUM7K0JBQ2xFLFNBQVMsU0FBQyxnQkFBZ0I7O0lBc0Q3QiwrQkFBQztDQUFBLEFBaEZELElBZ0ZDO1NBM0VZLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkLCBUZFNlcmllc0NvbXBvbmVudCB9IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5pbXBvcnQgeyBUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwgVGRUb29sdGlwQ29udGV4dCB9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXMtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkU2VyaWVzVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG5cbiAgX2NvbnRleHQ6IFRkVG9vbHRpcENvbnRleHQgPSBuZXcgVGRUb29sdGlwQ29udGV4dCgpO1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnk7XG5cbiAgQElucHV0KCdmb3JtYXR0ZXInKSBmb3JtYXR0ZXI6IGFueTtcbiAgLy8gUGFyZW50IHRvb2x0aXAgdHJpZ2dlciBtdXN0IGJlIHNldCB0byAnaXRlbScgdG8gcmVuZGVyIHRoZXNlIHByb3BlcnRpZXNcbiAgQElucHV0KCdwb3NpdGlvbicpIHBvc2l0aW9uOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bWJlcltdO1xuICBASW5wdXQoJ2JhY2tncm91bmRDb2xvcicpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJ3JnYmEoNTAsNTAsNTAsMC43KSc7XG4gIEBJbnB1dCgnYm9yZGVyQ29sb3InKSBib3JkZXJDb2xvcjogc3RyaW5nID0gJyMzMzMnO1xuICBASW5wdXQoJ2JvcmRlcldpZHRoJykgYm9yZGVyV2lkdGg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgncGFkZGluZycpIHBhZGRpbmc6IG51bWJlciA9IDU7XG4gIEBJbnB1dCgndGV4dFN0eWxlJykgdGV4dFN0eWxlOiBhbnkgPSB7XG4gICAgY29sb3I6ICcjRkZGJyxcbiAgfTtcbiAgQElucHV0KCdleHRyYUNzc1RleHQnKSBleHRyYUNzc1RleHQ6IHN0cmluZztcblxuICBAQ29udGVudENoaWxkKFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlLCB7cmVhZDogVGVtcGxhdGVSZWZ9KSBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcENvbnRlbnQnKSBmdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zZXJpZXNDb21wb25lbnQ6IFRkU2VyaWVzQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LCB7XG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBib3JkZXJDb2xvcjogdGhpcy5ib3JkZXJDb2xvcixcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgdGV4dFN0eWxlOiB0aGlzLnRleHRTdHlsZSxcbiAgICAgIGV4dHJhQ3NzVGV4dDogdGhpcy5leHRyYUNzc1RleHQsXG4gICAgICBmb3JtYXR0ZXI6IHRoaXMuZm9ybWF0dGVyID8gdGhpcy5mb3JtYXR0ZXIgOiAodGhpcy5mb3JtYXR0ZXJUZW1wbGF0ZSA/IHRoaXMuX2Zvcm1hdHRlcigpIDogdW5kZWZpbmVkKSxcbiAgICB9KTtcbiAgICAvLyBzZXQgc2VyaWVzIHRvb2x0aXAgY29uZmlndXJhdGlvbiBpbiBwYXJlbnQgY2hhcnQgYW5kIHJlbmRlciBuZXcgY29uZmlndXJhdGlvbnNcbiAgICB0aGlzLl9zZXJpZXNDb21wb25lbnQuc2V0U3RhdGVPcHRpb24oJ3Rvb2x0aXAnLCBjb25maWcpO1xuICB9XG4gIFxuICAvKipcbiAgICogRm9ybWF0dGVyIGZvciB0b29sdGlwXG4gICAqXG4gICAqL1xuICBwcml2YXRlIF9mb3JtYXR0ZXIoKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiAocGFyYW1zOiBhbnksIHRpY2tldDogYW55LCBjYWxsYmFjazogKHRpY2tldDogc3RyaW5nLCBodG1sOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMuX2NvbnRleHQgPSB7XG4gICAgICAgICRpbXBsaWNpdDogcGFyYW1zLFxuICAgICAgICB0aWNrZXQ6IHRpY2tldCxcbiAgICAgIH07XG4gICAgICAvLyB0aW1lb3V0IHNldCBzaW5jZSB3ZSBuZWVkIHRvIHNldCB0aGUgSFRNTCBhdCB0aGUgZW5kIG9mIHRoZSBhbmd1bGFyIGxpZmVjeWNsZSB3aGVuXG4gICAgICAvLyB0aGUgdG9vbHRpcCBkZWxheSBpcyBtb3JlIHRoYW4gMFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHRpY2tldCwgKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUw7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXJpZXNDb21wb25lbnQucmVtb3ZlU3RhdGVPcHRpb24oJ3Rvb2x0aXAnKTtcbiAgfVxuXG59XG4iXX0=