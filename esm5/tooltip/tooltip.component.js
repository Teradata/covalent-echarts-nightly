/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Directive, TemplateRef, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, ContentChild, ViewChild, } from '@angular/core';
import { TdChartOptionsService, assignDefined, } from '@covalent/echarts/base';
var TdTooltipContext = /** @class */ (function () {
    function TdTooltipContext() {
    }
    return TdTooltipContext;
}());
export { TdTooltipContext };
if (false) {
    /** @type {?} */
    TdTooltipContext.prototype.$implicit;
    /** @type {?} */
    TdTooltipContext.prototype.ticket;
}
var TdChartTooltipFormatterDirective = /** @class */ (function () {
    function TdChartTooltipFormatterDirective() {
    }
    TdChartTooltipFormatterDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'ng-template[tdTooltipFormatter]',
                },] }
    ];
    return TdChartTooltipFormatterDirective;
}());
export { TdChartTooltipFormatterDirective };
var TdChartTooltipComponent = /** @class */ (function () {
    function TdChartTooltipComponent(_changeDetectorRef, _elementRef, _optionsService) {
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
    TdChartTooltipComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdChartTooltipComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdChartTooltipComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeOption();
    };
    /**
     * @return {?}
     */
    TdChartTooltipComponent.prototype._setOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = assignDefined(this._state, this.config ? this.config : {}, {
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
            formatter: this.formatter ? this.formatter : this._formatter(),
            backgroundColor: this.backgroundColor,
            borderColor: this.borderColor,
            borderWidth: this.borderWidth,
            padding: this.padding,
            textStyle: this.textStyle,
            extraCssText: this.extraCssText,
        });
        // set tooltip configuration in parent chart and render new configurations
        this._optionsService.setOption('tooltip', config);
    };
    /**
     * @return {?}
     */
    TdChartTooltipComponent.prototype._removeOption = /**
     * @return {?}
     */
    function () {
        this._optionsService.clearOption('tooltip');
    };
    /**
     * @return {?}
     */
    TdChartTooltipComponent.prototype._formatter = /**
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
    TdChartTooltipComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-tooltip',
                    template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TdChartTooltipComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: TdChartOptionsService }
    ]; };
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
    return TdChartTooltipComponent;
}());
export { TdChartTooltipComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sdGlwLyIsInNvdXJjZXMiOlsidG9vbHRpcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixpQkFBaUIsRUFFakIsWUFBWSxFQUNaLFNBQVMsR0FHVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGFBQWEsR0FJZCxNQUFNLHdCQUF3QixDQUFDO0FBRWhDO0lBQUE7SUFHQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUFDLEFBSEQsSUFHQzs7OztJQUZDLHFDQUFlOztJQUNmLGtDQUFlOztBQUdqQjtJQUFBO0lBSUEsQ0FBQzs7Z0JBSkEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7aUJBQzVDOztJQUVELHVDQUFDO0NBQUEsQUFKRCxJQUlDO1NBRFksZ0NBQWdDO0FBRzdDO0lBdUNFLGlDQUFvQixrQkFBcUMsRUFDckMsV0FBdUIsRUFDdkIsZUFBc0M7UUFGdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFsQ2xELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFekIsYUFBUSxHQUFxQixJQUFJLGdCQUFnQixFQUFFLENBQUM7UUFFbkMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUVuQixTQUFJLEdBQVksSUFBSSxDQUFDO1FBQ2xCLFlBQU8sR0FBc0IsTUFBTSxDQUFDO1FBRWhDLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ3RCLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUMzQyxjQUFTLEdBQXVCLGlCQUFpQixDQUFDO1FBQ2xELGNBQVMsR0FB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LHlDQUFrQzs7SUFFbEMsdUNBQW9DOztJQUNwQywwQ0FBc0Q7O0lBQ3RELDhDQUF1Qzs7SUFDdkMsOENBQWtEOztJQUNsRCxvREFBK0Q7O0lBQy9ELDRDQUFzRTs7SUFDdEUsNENBQTBDOztJQUMxQyw0Q0FBMEM7O0lBQzFDLDRDQUErQzs7SUFDL0MsNkNBQXFEOztJQUNyRCwwQ0FBMkM7O0lBQzNDLHFEQUE4RDs7SUFDOUQsMkNBQStDOztJQUMvQyw0Q0FBaUQ7O0lBQ2pELGtEQUF5RTs7SUFDekUsOENBQW1EOztJQUNuRCw4Q0FBOEM7O0lBQzlDLDBDQUFzQzs7SUFDdEMsNENBRUU7O0lBQ0YsK0NBQTRDOztJQUU1QyxvREFBeUc7O0lBQ3pHLCtDQUE0RDs7SUFFaEQscURBQTZDOztJQUM3Qyw4Q0FBK0I7O0lBQy9CLGtEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25DaGFuZ2VzLFxuICBDb250ZW50Q2hpbGQsXG4gIFZpZXdDaGlsZCxcbiAgT25Jbml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIGFzc2lnbkRlZmluZWQsXG4gIFRkVG9vbHRpcFRyaWdnZXIsXG4gIFRkVG9vbHRpcFRyaWdnZXJPbixcbiAgVGRUb29sdGlwUG9zaXRpb24sXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgY2xhc3MgVGRUb29sdGlwQ29udGV4dCB7XG4gICRpbXBsaWNpdDogYW55O1xuICB0aWNrZXQ6IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbdGRUb29sdGlwRm9ybWF0dGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlIHtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIFxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG5cbiAgX2NvbnRleHQ6IFRkVG9vbHRpcENvbnRleHQgPSBuZXcgVGRUb29sdGlwQ29udGV4dCgpO1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ3Nob3cnKSBzaG93OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCd0cmlnZ2VyJykgdHJpZ2dlcjogVGRUb29sdGlwVHJpZ2dlciA9ICAnYXhpcyc7XG4gIEBJbnB1dCgnYXhpc1BvaW50ZXInKSBheGlzUG9pbnRlcjogYW55O1xuICBASW5wdXQoJ3Nob3dDb250ZW50Jykgc2hvd0NvbnRlbnQ6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ2Fsd2F5c1Nob3dDb250ZW50JykgYWx3YXlzU2hvd0NvbnRlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCd0cmlnZ2VyT24nKSB0cmlnZ2VyT246IFRkVG9vbHRpcFRyaWdnZXJPbiA9ICdtb3VzZW1vdmV8Y2xpY2snO1xuICBASW5wdXQoJ3Nob3dEZWxheScpIHNob3dEZWxheTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdoaWRlRGVsYXknKSBoaWRlRGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgnZW50ZXJhYmxlJykgZW50ZXJhYmxlOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgncmVuZGVyTW9kZScpIHJlbmRlck1vZGU6ICdodG1sJyB8ICdyaWNoVGV4dCc7XG4gIEBJbnB1dCgnY29uZmluZScpIGNvbmZpbmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCd0cmFuc2l0aW9uRHVyYXRpb24nKSB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciA9IDAuNTtcbiAgQElucHV0KCdwb3NpdGlvbicpIHBvc2l0aW9uOiBUZFRvb2x0aXBQb3NpdGlvbjsgLy8gc2VyaWVzXG4gIEBJbnB1dCgnZm9ybWF0dGVyJykgZm9ybWF0dGVyOiBzdHJpbmcgfCBGdW5jdGlvbjsgLy8gc2VyaWVzXG4gIEBJbnB1dCgnYmFja2dyb3VuZENvbG9yJykgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAncmdiYSg1MCw1MCw1MCwwLjcpJzsgLy8gc2VyaWVzXG4gIEBJbnB1dCgnYm9yZGVyQ29sb3InKSBib3JkZXJDb2xvcjogc3RyaW5nID0gJyMzMzMnOyAvLyBzZXJpZXNcbiAgQElucHV0KCdib3JkZXJXaWR0aCcpIGJvcmRlcldpZHRoOiBudW1iZXIgPSAwOyAvLyBzZXJpZXNcbiAgQElucHV0KCdwYWRkaW5nJykgcGFkZGluZzogbnVtYmVyID0gNTsgLy8gc2VyaWVzXG4gIEBJbnB1dCgndGV4dFN0eWxlJykgdGV4dFN0eWxlOiBhbnkgPSB7IC8vIHNlcmllc1xuICAgIGNvbG9yOiAnI0ZGRicsXG4gIH07XG4gIEBJbnB1dCgnZXh0cmFDc3NUZXh0JykgZXh0cmFDc3NUZXh0OiBzdHJpbmc7IC8vIHNlcmllc1xuXG4gIEBDb250ZW50Q2hpbGQoVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUsIHtyZWFkOiBUZW1wbGF0ZVJlZn0pIGZvcm1hdHRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd0b29sdGlwQ29udGVudCcpIGZ1bGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHtcbiAgICAgIHNob3c6IHRoaXMuc2hvdyxcbiAgICAgIHRyaWdnZXI6IHRoaXMudHJpZ2dlcixcbiAgICAgIGF4aXNQb2ludGVyOiB0aGlzLmF4aXNQb2ludGVyLFxuICAgICAgc2hvd0NvbnRlbnQ6IHRoaXMuc2hvd0NvbnRlbnQsXG4gICAgICBhbHdheXNTaG93Q29udGVudDogdGhpcy5hbHdheXNTaG93Q29udGVudCxcbiAgICAgIHRyaWdnZXJPbjogdGhpcy50cmlnZ2VyT24sXG4gICAgICBzaG93RGVsYXk6IHRoaXMuc2hvd0RlbGF5LFxuICAgICAgaGlkZURlbGF5OiB0aGlzLmhpZGVEZWxheSxcbiAgICAgIGVudGVyYWJsZTogdGhpcy5lbnRlcmFibGUsXG4gICAgICBjb25maW5lOiB0aGlzLmNvbmZpbmUsXG4gICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBmb3JtYXR0ZXI6IHRoaXMuZm9ybWF0dGVyID8gdGhpcy5mb3JtYXR0ZXIgOiB0aGlzLl9mb3JtYXR0ZXIoKSxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBib3JkZXJDb2xvcjogdGhpcy5ib3JkZXJDb2xvcixcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgdGV4dFN0eWxlOiB0aGlzLnRleHRTdHlsZSxcbiAgICAgIGV4dHJhQ3NzVGV4dDogdGhpcy5leHRyYUNzc1RleHQsXG4gICAgfSk7XG4gICAgLy8gc2V0IHRvb2x0aXAgY29uZmlndXJhdGlvbiBpbiBwYXJlbnQgY2hhcnQgYW5kIHJlbmRlciBuZXcgY29uZmlndXJhdGlvbnNcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5zZXRPcHRpb24oJ3Rvb2x0aXAnLCBjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmNsZWFyT3B0aW9uKCd0b29sdGlwJyk7XG4gIH1cblxuICBwcml2YXRlIF9mb3JtYXR0ZXIoKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiAocGFyYW1zOiBhbnksIHRpY2tldDogYW55LCBjYWxsYmFjazogKHRpY2tldDogc3RyaW5nLCBodG1sOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMuX2NvbnRleHQgPSB7XG4gICAgICAgICRpbXBsaWNpdDogcGFyYW1zLFxuICAgICAgICB0aWNrZXQ6IHRpY2tldCxcbiAgICAgIH07XG4gICAgICAvLyB0aW1lb3V0IHNldCBzaW5jZSB3ZSBuZWVkIHRvIHNldCB0aGUgSFRNTCBhdCB0aGUgZW5kIG9mIHRoZSBhbmd1bGFyIGxpZmVjeWNsZSB3aGVuXG4gICAgICAvLyB0aGUgdG9vbHRpcCBkZWxheSBpcyBtb3JlIHRoYW4gMFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHRpY2tldCwgKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUw7XG4gICAgfTtcbiAgfVxuXG59XG4iXX0=