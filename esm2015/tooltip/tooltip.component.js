/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * @private
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
     * @private
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('tooltip');
    }
    /**
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
}
TdChartTooltipComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-tooltip',
                template: "<ng-template #tooltipContent [ngTemplateOutlet]=\"formatterTemplate\" [ngTemplateOutletContext]=\"_context\"></ng-template>\n",
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
    formatterTemplate: [{ type: ContentChild, args: [TdChartTooltipFormatterDirective, { read: TemplateRef, static: false },] }],
    fullTemplate: [{ type: ViewChild, args: ['tooltipContent', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
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
    /**
     * @type {?}
     * @private
     */
    TdChartTooltipComponent.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    TdChartTooltipComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdChartTooltipComponent.prototype._optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixpQkFBaUIsRUFFakIsWUFBWSxFQUNaLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGFBQWEsR0FJZCxNQUFNLHdCQUF3QixDQUFDO0FBRWhDLE1BQU0sT0FBTyxnQkFBZ0I7Q0FHNUI7OztJQUZDLHFDQUFlOztJQUNmLGtDQUFlOztBQU1qQixNQUFNLE9BQU8sZ0NBQWdDOzs7WUFINUMsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7YUFDNUM7O0FBUUQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7O0lBb0NsQyxZQUNVLGtCQUFxQyxFQUNyQyxXQUF1QixFQUN2QixlQUFzQztRQUZ0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQXRDeEMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUV6QixhQUFRLEdBQXFCLElBQUksZ0JBQWdCLEVBQUUsQ0FBQztRQUVuQyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRW5CLFNBQUksR0FBWSxJQUFJLENBQUM7UUFDbEIsWUFBTyxHQUFxQixNQUFNLENBQUM7UUFFL0IsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFDdEIsc0JBQWlCLEdBQVksS0FBSyxDQUFDO1FBQzNDLGNBQVMsR0FBdUIsaUJBQWlCLENBQUM7UUFDbEQsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FB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O0lBQ2xELG9EQUErRDs7SUFDL0QsNENBQXNFOztJQUN0RSw0Q0FBMEM7O0lBQzFDLDRDQUEwQzs7SUFDMUMsNENBQStDOztJQUMvQyw2Q0FBcUQ7O0lBQ3JELDBDQUEyQzs7SUFDM0MscURBQThEOztJQUM5RCwyQ0FBK0M7O0lBQy9DLDRDQUFpRDs7SUFDakQsa0RBQXlFOztJQUN6RSw4Q0FBbUQ7O0lBQ25ELDhDQUE4Qzs7SUFDOUMsMENBQXNDOztJQUN0Qyw0Q0FHRTs7SUFDRiwrQ0FBNEM7O0lBRTVDLG9EQUVFOztJQUNGLCtDQUE4RTs7Ozs7SUFHNUUscURBQTZDOzs7OztJQUM3Qyw4Q0FBK0I7Ozs7O0lBQy9CLGtEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25DaGFuZ2VzLFxuICBDb250ZW50Q2hpbGQsXG4gIFZpZXdDaGlsZCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBhc3NpZ25EZWZpbmVkLFxuICBUZFRvb2x0aXBUcmlnZ2VyLFxuICBUZFRvb2x0aXBUcmlnZ2VyT24sXG4gIFRkVG9vbHRpcFBvc2l0aW9uLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IGNsYXNzIFRkVG9vbHRpcENvbnRleHQge1xuICAkaW1wbGljaXQ6IGFueTtcbiAgdGlja2V0OiBzdHJpbmc7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW3RkVG9vbHRpcEZvcm1hdHRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC10b29sdGlwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2x0aXAuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFRvb2x0aXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcblxuICBfY29udGV4dDogVGRUb29sdGlwQ29udGV4dCA9IG5ldyBUZFRvb2x0aXBDb250ZXh0KCk7XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ3RyaWdnZXInKSB0cmlnZ2VyOiBUZFRvb2x0aXBUcmlnZ2VyID0gJ2F4aXMnO1xuICBASW5wdXQoJ2F4aXNQb2ludGVyJykgYXhpc1BvaW50ZXI6IGFueTtcbiAgQElucHV0KCdzaG93Q29udGVudCcpIHNob3dDb250ZW50OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCdhbHdheXNTaG93Q29udGVudCcpIGFsd2F5c1Nob3dDb250ZW50OiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgndHJpZ2dlck9uJykgdHJpZ2dlck9uOiBUZFRvb2x0aXBUcmlnZ2VyT24gPSAnbW91c2Vtb3ZlfGNsaWNrJztcbiAgQElucHV0KCdzaG93RGVsYXknKSBzaG93RGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnaGlkZURlbGF5JykgaGlkZURlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ2VudGVyYWJsZScpIGVudGVyYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3JlbmRlck1vZGUnKSByZW5kZXJNb2RlOiAnaHRtbCcgfCAncmljaFRleHQnO1xuICBASW5wdXQoJ2NvbmZpbmUnKSBjb25maW5lOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgndHJhbnNpdGlvbkR1cmF0aW9uJykgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXIgPSAwLjU7XG4gIEBJbnB1dCgncG9zaXRpb24nKSBwb3NpdGlvbjogVGRUb29sdGlwUG9zaXRpb247IC8vIHNlcmllc1xuICBASW5wdXQoJ2Zvcm1hdHRlcicpIGZvcm1hdHRlcjogc3RyaW5nIHwgRnVuY3Rpb247IC8vIHNlcmllc1xuICBASW5wdXQoJ2JhY2tncm91bmRDb2xvcicpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJ3JnYmEoNTAsNTAsNTAsMC43KSc7IC8vIHNlcmllc1xuICBASW5wdXQoJ2JvcmRlckNvbG9yJykgYm9yZGVyQ29sb3I6IHN0cmluZyA9ICcjMzMzJzsgLy8gc2VyaWVzXG4gIEBJbnB1dCgnYm9yZGVyV2lkdGgnKSBib3JkZXJXaWR0aDogbnVtYmVyID0gMDsgLy8gc2VyaWVzXG4gIEBJbnB1dCgncGFkZGluZycpIHBhZGRpbmc6IG51bWJlciA9IDU7IC8vIHNlcmllc1xuICBASW5wdXQoJ3RleHRTdHlsZScpIHRleHRTdHlsZTogYW55ID0ge1xuICAgIC8vIHNlcmllc1xuICAgIGNvbG9yOiAnI0ZGRicsXG4gIH07XG4gIEBJbnB1dCgnZXh0cmFDc3NUZXh0JykgZXh0cmFDc3NUZXh0OiBzdHJpbmc7IC8vIHNlcmllc1xuXG4gIEBDb250ZW50Q2hpbGQoVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSkgZm9ybWF0dGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPFxuICAgIGFueVxuICA+O1xuICBAVmlld0NoaWxkKCd0b29sdGlwQ29udGVudCcsIHsgc3RhdGljOiB0cnVlIH0pIGZ1bGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQoXG4gICAgICB0aGlzLl9zdGF0ZSxcbiAgICAgIHtcbiAgICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgICB0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG4gICAgICAgIGF4aXNQb2ludGVyOiB0aGlzLmF4aXNQb2ludGVyLFxuICAgICAgICBzaG93Q29udGVudDogdGhpcy5zaG93Q29udGVudCxcbiAgICAgICAgYWx3YXlzU2hvd0NvbnRlbnQ6IHRoaXMuYWx3YXlzU2hvd0NvbnRlbnQsXG4gICAgICAgIHRyaWdnZXJPbjogdGhpcy50cmlnZ2VyT24sXG4gICAgICAgIHNob3dEZWxheTogdGhpcy5zaG93RGVsYXksXG4gICAgICAgIGhpZGVEZWxheTogdGhpcy5oaWRlRGVsYXksXG4gICAgICAgIGVudGVyYWJsZTogdGhpcy5lbnRlcmFibGUsXG4gICAgICAgIGNvbmZpbmU6IHRoaXMuY29uZmluZSxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgIGZvcm1hdHRlcjogdGhpcy5mb3JtYXR0ZXIgPyB0aGlzLmZvcm1hdHRlciA6IHRoaXMuZm9ybWF0dGVyVGVtcGxhdGUgPyB0aGlzLl9mb3JtYXR0ZXIoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICAgIHRleHRTdHlsZTogdGhpcy50ZXh0U3R5bGUsXG4gICAgICAgIGV4dHJhQ3NzVGV4dDogdGhpcy5leHRyYUNzc1RleHQsXG4gICAgICB9LFxuICAgICAgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LFxuICAgICk7XG4gICAgLy8gc2V0IHRvb2x0aXAgY29uZmlndXJhdGlvbiBpbiBwYXJlbnQgY2hhcnQgYW5kIHJlbmRlciBuZXcgY29uZmlndXJhdGlvbnNcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5zZXRPcHRpb24oJ3Rvb2x0aXAnLCBjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmNsZWFyT3B0aW9uKCd0b29sdGlwJyk7XG4gIH1cblxuICBwcml2YXRlIF9mb3JtYXR0ZXIoKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiAocGFyYW1zOiBhbnksIHRpY2tldDogYW55LCBjYWxsYmFjazogKHRpY2tldDogc3RyaW5nLCBodG1sOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMuX2NvbnRleHQgPSB7XG4gICAgICAgICRpbXBsaWNpdDogcGFyYW1zLFxuICAgICAgICB0aWNrZXQ6IHRpY2tldCxcbiAgICAgIH07XG4gICAgICAvLyB0aW1lb3V0IHNldCBzaW5jZSB3ZSBuZWVkIHRvIHNldCB0aGUgSFRNTCBhdCB0aGUgZW5kIG9mIHRoZSBhbmd1bGFyIGxpZmVjeWNsZSB3aGVuXG4gICAgICAvLyB0aGUgdG9vbHRpcCBkZWxheSBpcyBtb3JlIHRoYW4gMFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHRpY2tldCwgKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUw7XG4gICAgfTtcbiAgfVxufVxuIl19