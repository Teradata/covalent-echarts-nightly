/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Directive, TemplateRef, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, ContentChild, ViewChild, } from '@angular/core';
import { TdChartOptionsService, assignDefined, } from '@covalent/echarts/base';
export class TdTooltipContext {
}
if (false) {
    /** @type {?} */
    TdTooltipContext.prototype.$implicit;
    /** @type {?} */
    TdTooltipContext.prototype.ticket;
}
export class TdChartTooltipFormatterDirective {
}
TdChartTooltipFormatterDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[tdTooltipFormatter]',
            },] }
];
export class TdChartTooltipComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _optionsService
     */
    constructor(_changeDetectorRef, _elementRef, _optionsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._optionsService = _optionsService;
        this._state = {};
        this._context = new TdTooltipContext();
        this.config = {};
        this.show = true;
        this.trigger = 'axis';
        this.showContent = true;
        this.alwaysShowContent = false;
        this.triggerOn = 'mousemove|click';
        this.showDelay = 0;
        this.hideDelay = 0;
        this.enterable = false;
        this.confine = false;
        this.transitionDuration = 0.5;
        // series
        this.backgroundColor = 'rgba(50,50,50,0.7)'; // series
        // series
        this.borderColor = '#333'; // series
        // series
        this.borderWidth = 0; // series
        // series
        this.padding = 5; // series
        // series
        this.textStyle = {
            // series
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
            show: this.show,
            trigger: this.trigger,
            axisPointer: this.axisPointer,
            showContent: this.showContent,
            alwaysShowContent: this.alwaysShowContent,
            triggerOn: this.triggerOn,
            showDelay: this.showDelay,
            hideDelay: this.hideDelay,
            enterable: this.enterable,
            confine: this.confine,
            transitionDuration: this.transitionDuration,
            position: this.position,
            formatter: this.formatter ? this.formatter : this.formatterTemplate ? this._formatter() : undefined,
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth,
            padding: this.padding,
            textStyle: this.textStyle,
            extraCssText: this.extraCssText,
        }, this.config ? this.config : {});
        // set tooltip configuration in parent chart and render new configurations
        this._optionsService.setOption('tooltip', config);
    }
    /**
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('tooltip');
    }
    /**
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
}
TdChartTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-tooltip',
                template: "<ng-template #tooltipContent [ngTemplateOutlet]=\"formatterTemplate\" [ngTemplateOutletContext]=\"_context\"> </ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartTooltipComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdChartOptionsService }
];
TdChartTooltipComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    show: [{ type: Input, args: ['show',] }],
    trigger: [{ type: Input, args: ['trigger',] }],
    axisPointer: [{ type: Input, args: ['axisPointer',] }],
    showContent: [{ type: Input, args: ['showContent',] }],
    alwaysShowContent: [{ type: Input, args: ['alwaysShowContent',] }],
    triggerOn: [{ type: Input, args: ['triggerOn',] }],
    showDelay: [{ type: Input, args: ['showDelay',] }],
    hideDelay: [{ type: Input, args: ['hideDelay',] }],
    enterable: [{ type: Input, args: ['enterable',] }],
    renderMode: [{ type: Input, args: ['renderMode',] }],
    confine: [{ type: Input, args: ['confine',] }],
    transitionDuration: [{ type: Input, args: ['transitionDuration',] }],
    position: [{ type: Input, args: ['position',] }],
    formatter: [{ type: Input, args: ['formatter',] }],
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
    TdChartTooltipComponent.prototype._state;
    /** @type {?} */
    TdChartTooltipComponent.prototype._context;
    /** @type {?} */
    TdChartTooltipComponent.prototype.config;
    /** @type {?} */
    TdChartTooltipComponent.prototype.show;
    /** @type {?} */
    TdChartTooltipComponent.prototype.trigger;
    /** @type {?} */
    TdChartTooltipComponent.prototype.axisPointer;
    /** @type {?} */
    TdChartTooltipComponent.prototype.showContent;
    /** @type {?} */
    TdChartTooltipComponent.prototype.alwaysShowContent;
    /** @type {?} */
    TdChartTooltipComponent.prototype.triggerOn;
    /** @type {?} */
    TdChartTooltipComponent.prototype.showDelay;
    /** @type {?} */
    TdChartTooltipComponent.prototype.hideDelay;
    /** @type {?} */
    TdChartTooltipComponent.prototype.enterable;
    /** @type {?} */
    TdChartTooltipComponent.prototype.renderMode;
    /** @type {?} */
    TdChartTooltipComponent.prototype.confine;
    /** @type {?} */
    TdChartTooltipComponent.prototype.transitionDuration;
    /** @type {?} */
    TdChartTooltipComponent.prototype.position;
    /** @type {?} */
    TdChartTooltipComponent.prototype.formatter;
    /** @type {?} */
    TdChartTooltipComponent.prototype.backgroundColor;
    /** @type {?} */
    TdChartTooltipComponent.prototype.borderColor;
    /** @type {?} */
    TdChartTooltipComponent.prototype.borderWidth;
    /** @type {?} */
    TdChartTooltipComponent.prototype.padding;
    /** @type {?} */
    TdChartTooltipComponent.prototype.textStyle;
    /** @type {?} */
    TdChartTooltipComponent.prototype.extraCssText;
    /** @type {?} */
    TdChartTooltipComponent.prototype.formatterTemplate;
    /** @type {?} */
    TdChartTooltipComponent.prototype.fullTemplate;
    /** @type {?} */
    TdChartTooltipComponent.prototype._changeDetectorRef;
    /** @type {?} */
    TdChartTooltipComponent.prototype._elementRef;
    /** @type {?} */
    TdChartTooltipComponent.prototype._optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixpQkFBaUIsRUFFakIsWUFBWSxFQUNaLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGFBQWEsR0FJZCxNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE1BQU0sT0FBTyxnQkFBZ0I7Q0FHNUI7OztJQUZDLHFDQUFlOztJQUNmLGtDQUFlOztBQU1qQixNQUFNLE9BQU8sZ0NBQWdDOzs7WUFINUMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7YUFDNUM7O0FBUUQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBa0NsQyxZQUNVLGtCQUFxQyxFQUNyQyxXQUF1QixFQUN2QixlQUFzQztRQUZ0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQXBDeEMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUV6QixhQUFRLEdBQXFCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUVuQyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRW5CLFNBQUksR0FBWSxJQUFJLENBQUM7UUFDbEIsWUFBTyxHQUFxQixNQUFNLENBQUM7UUFFL0IsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDdEIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQzNDLGNBQVMsR0FBdUIsaUJBQWlCLENBQUM7UUFDbEQsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FB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NENBQStDOztJQUMvQyw2Q0FBcUQ7O0lBQ3JELDBDQUEyQzs7SUFDM0MscURBQThEOztJQUM5RCwyQ0FBK0M7O0lBQy9DLDRDQUFpRDs7SUFDakQsa0RBQXlFOztJQUN6RSw4Q0FBbUQ7O0lBQ25ELDhDQUE4Qzs7SUFDOUMsMENBQXNDOztJQUN0Qyw0Q0FHRTs7SUFDRiwrQ0FBNEM7O0lBRTVDLG9EQUEyRzs7SUFDM0csK0NBQTREOztJQUcxRCxxREFBNkM7O0lBQzdDLDhDQUErQjs7SUFDL0Isa0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkNoYW5nZXMsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIGFzc2lnbkRlZmluZWQsXG4gIFRkVG9vbHRpcFRyaWdnZXIsXG4gIFRkVG9vbHRpcFRyaWdnZXJPbixcbiAgVGRUb29sdGlwUG9zaXRpb24sXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgY2xhc3MgVGRUb29sdGlwQ29udGV4dCB7XG4gICRpbXBsaWNpdDogYW55O1xuICB0aWNrZXQ6IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbdGRUb29sdGlwRm9ybWF0dGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXRvb2x0aXAnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbHRpcC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0VG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuXG4gIF9jb250ZXh0OiBUZFRvb2x0aXBDb250ZXh0ID0gbmV3IFRkVG9vbHRpcENvbnRleHQoKTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdzaG93Jykgc2hvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgndHJpZ2dlcicpIHRyaWdnZXI6IFRkVG9vbHRpcFRyaWdnZXIgPSAnYXhpcyc7XG4gIEBJbnB1dCgnYXhpc1BvaW50ZXInKSBheGlzUG9pbnRlcjogYW55O1xuICBASW5wdXQoJ3Nob3dDb250ZW50Jykgc2hvd0NvbnRlbnQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ2Fsd2F5c1Nob3dDb250ZW50JykgYWx3YXlzU2hvd0NvbnRlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCd0cmlnZ2VyT24nKSB0cmlnZ2VyT246IFRkVG9vbHRpcFRyaWdnZXJPbiA9ICdtb3VzZW1vdmV8Y2xpY2snO1xuICBASW5wdXQoJ3Nob3dEZWxheScpIHNob3dEZWxheTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdoaWRlRGVsYXknKSBoaWRlRGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnZW50ZXJhYmxlJykgZW50ZXJhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgncmVuZGVyTW9kZScpIHJlbmRlck1vZGU6ICdodG1sJyB8ICdyaWNoVGV4dCc7XG4gIEBJbnB1dCgnY29uZmluZScpIGNvbmZpbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCd0cmFuc2l0aW9uRHVyYXRpb24nKSB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciA9IDAuNTtcbiAgQElucHV0KCdwb3NpdGlvbicpIHBvc2l0aW9uOiBUZFRvb2x0aXBQb3NpdGlvbjsgLy8gc2VyaWVzXG4gIEBJbnB1dCgnZm9ybWF0dGVyJykgZm9ybWF0dGVyOiBzdHJpbmcgfCBGdW5jdGlvbjsgLy8gc2VyaWVzXG4gIEBJbnB1dCgnYmFja2dyb3VuZENvbG9yJykgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAncmdiYSg1MCw1MCw1MCwwLjcpJzsgLy8gc2VyaWVzXG4gIEBJbnB1dCgnYm9yZGVyQ29sb3InKSBib3JkZXJDb2xvcjogc3RyaW5nID0gJyMzMzMnOyAvLyBzZXJpZXNcbiAgQElucHV0KCdib3JkZXJXaWR0aCcpIGJvcmRlcldpZHRoOiBudW1iZXIgPSAwOyAvLyBzZXJpZXNcbiAgQElucHV0KCdwYWRkaW5nJykgcGFkZGluZzogbnVtYmVyID0gNTsgLy8gc2VyaWVzXG4gIEBJbnB1dCgndGV4dFN0eWxlJykgdGV4dFN0eWxlOiBhbnkgPSB7XG4gICAgLy8gc2VyaWVzXG4gICAgY29sb3I6ICcjRkZGJyxcbiAgfTtcbiAgQElucHV0KCdleHRyYUNzc1RleHQnKSBleHRyYUNzc1RleHQ6IHN0cmluZzsgLy8gc2VyaWVzXG5cbiAgQENvbnRlbnRDaGlsZChUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KSBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcENvbnRlbnQnKSBmdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKFxuICAgICAgdGhpcy5fc3RhdGUsXG4gICAgICB7XG4gICAgICAgIHNob3c6IHRoaXMuc2hvdyxcbiAgICAgICAgdHJpZ2dlcjogdGhpcy50cmlnZ2VyLFxuICAgICAgICBheGlzUG9pbnRlcjogdGhpcy5heGlzUG9pbnRlcixcbiAgICAgICAgc2hvd0NvbnRlbnQ6IHRoaXMuc2hvd0NvbnRlbnQsXG4gICAgICAgIGFsd2F5c1Nob3dDb250ZW50OiB0aGlzLmFsd2F5c1Nob3dDb250ZW50LFxuICAgICAgICB0cmlnZ2VyT246IHRoaXMudHJpZ2dlck9uLFxuICAgICAgICBzaG93RGVsYXk6IHRoaXMuc2hvd0RlbGF5LFxuICAgICAgICBoaWRlRGVsYXk6IHRoaXMuaGlkZURlbGF5LFxuICAgICAgICBlbnRlcmFibGU6IHRoaXMuZW50ZXJhYmxlLFxuICAgICAgICBjb25maW5lOiB0aGlzLmNvbmZpbmUsXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICBmb3JtYXR0ZXI6IHRoaXMuZm9ybWF0dGVyID8gdGhpcy5mb3JtYXR0ZXIgOiB0aGlzLmZvcm1hdHRlclRlbXBsYXRlID8gdGhpcy5fZm9ybWF0dGVyKCkgOiB1bmRlZmluZWQsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgIGJvcmRlckNvbG9yOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgICAgICBib3JkZXJXaWR0aDogdGhpcy5ib3JkZXJXaWR0aCxcbiAgICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgICB0ZXh0U3R5bGU6IHRoaXMudGV4dFN0eWxlLFxuICAgICAgICBleHRyYUNzc1RleHQ6IHRoaXMuZXh0cmFDc3NUZXh0LFxuICAgICAgfSxcbiAgICAgIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSxcbiAgICApO1xuICAgIC8vIHNldCB0b29sdGlwIGNvbmZpZ3VyYXRpb24gaW4gcGFyZW50IGNoYXJ0IGFuZCByZW5kZXIgbmV3IGNvbmZpZ3VyYXRpb25zXG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2Uuc2V0T3B0aW9uKCd0b29sdGlwJywgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5jbGVhck9wdGlvbigndG9vbHRpcCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZm9ybWF0dGVyKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKHBhcmFtczogYW55LCB0aWNrZXQ6IGFueSwgY2FsbGJhY2s6ICh0aWNrZXQ6IHN0cmluZywgaHRtbDogc3RyaW5nKSA9PiB2b2lkKSA9PiB7XG4gICAgICB0aGlzLl9jb250ZXh0ID0ge1xuICAgICAgICAkaW1wbGljaXQ6IHBhcmFtcyxcbiAgICAgICAgdGlja2V0OiB0aWNrZXQsXG4gICAgICB9O1xuICAgICAgLy8gdGltZW91dCBzZXQgc2luY2Ugd2UgbmVlZCB0byBzZXQgdGhlIEhUTUwgYXQgdGhlIGVuZCBvZiB0aGUgYW5ndWxhciBsaWZlY3ljbGUgd2hlblxuICAgICAgLy8gdGhlIHRvb2x0aXAgZGVsYXkgaXMgbW9yZSB0aGFuIDBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayh0aWNrZXQsICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUwpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==