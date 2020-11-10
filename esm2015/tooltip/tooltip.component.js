/**
 * @fileoverview added by tsickle
 * Generated from: tooltip.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        const config = assignDefined(this._state, {
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
    config: [{ type: Input }],
    show: [{ type: Input }],
    trigger: [{ type: Input }],
    axisPointer: [{ type: Input }],
    showContent: [{ type: Input }],
    alwaysShowContent: [{ type: Input }],
    triggerOn: [{ type: Input }],
    showDelay: [{ type: Input }],
    hideDelay: [{ type: Input }],
    enterable: [{ type: Input }],
    renderMode: [{ type: Input }],
    confine: [{ type: Input }],
    transitionDuration: [{ type: Input }],
    position: [{ type: Input }],
    formatter: [{ type: Input }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvcGxhdGZvcm0vZWNoYXJ0cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsVUFBVSxFQUNWLGlCQUFpQixFQUVqQixZQUFZLEVBQ1osU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsYUFBYSxHQUlkLE1BQU0sd0JBQXdCLENBQUM7QUFFaEMsTUFBTSxPQUFPLGdCQUFnQjtDQUc1Qjs7O0lBRkMscUNBQWU7O0lBQ2Ysa0NBQWU7O0FBTWpCLE1BQU0sT0FBTyxnQ0FBZ0M7OztZQUg1QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlDQUFpQzthQUM1Qzs7QUFRRCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7SUFvQ2xDLFlBQ1Usa0JBQXFDLEVBQ3JDLFdBQXVCLEVBQ3ZCLGVBQXNDO1FBRnRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBdEN4QyxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBRXpCLGFBQVEsR0FBcUIsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDO1FBRTNDLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFakIsU0FBSSxHQUFZLElBQUksQ0FBQztRQUNyQixZQUFPLEdBQXFCLE1BQU0sQ0FBQztRQUVuQyxnQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixzQkFBaUIsR0FBWSxLQUFLLENBQUM7UUFDbkMsY0FBUyxHQUF1QixpQkFBaUIsQ0FBQztRQUNsRCxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUUzQixZQUFPLEdBQVksS0FBSyxDQUFDO1FBQ3pCLHVCQUFrQixHQUFXLEdBQUcsQ0FBQzs7UUFHakMsb0JBQWUsR0FBVyxvQkFBb0IsQ0FBQyxDQUFDLFNBQVM7O1FBQ3pELGdCQUFXLEdBQVcsTUFBTSxDQUFDLENBQUMsU0FBUzs7UUFDdkMsZ0JBQVcsR0FBVyxDQUFDLENBQUMsQ0FBQyxTQUFTOztRQUNsQyxZQUFPLEdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUzs7UUFDOUIsY0FBUyxHQUFROztZQUV4QixLQUFLLEVBQUUsTUFBTTtTQUNkLENBQUM7SUFZQyxDQUFDOzs7O0lBRUosV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVPLFdBQVc7O2NBQ1gsTUFBTSxHQUFRLGFBQWEsQ0FDL0IsSUFBSSxDQUFDLE1BQU0sRUFDWDtZQUNFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLGlCQUFpQixFQUFFLElBQUksQ0FBQyxpQkFBaUI7WUFDekMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixrQkFBa0IsRUFBRSxJQUFJLENBQUMsa0JBQWtCO1lBQzNDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVM7WUFDbkcsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7U0FDaEMsRUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQy9CO1FBQ0QsMEVBQTBFO1FBQzFFLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNwRCxDQUFDOzs7OztJQUVPLGFBQWE7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDOUMsQ0FBQzs7Ozs7SUFFTyxVQUFVO1FBQ2hCOzs7Ozs7UUFBTyxDQUFDLE1BQVcsRUFBRSxNQUFXLEVBQUUsUUFBZ0QsRUFBRSxFQUFFO1lBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUc7Z0JBQ2QsU0FBUyxFQUFFLE1BQU07Z0JBQ2pCLE1BQU07YUFDUCxDQUFDO1lBQ0YscUZBQXFGO1lBQ3JGLG1DQUFtQztZQUNuQyxVQUFVOzs7WUFBQyxHQUFHLEVBQUU7Z0JBQ2QsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLG1CQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFBLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM1RSxDQUFDLEVBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN2QyxPQUFPLENBQUMsbUJBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUEsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNqRSxDQUFDLEVBQUM7SUFDSixDQUFDOzs7WUF2R0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLHlJQUF1QztnQkFDdkMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUE3QkMsaUJBQWlCO1lBRGpCLFVBQVU7WUFTVixxQkFBcUI7OztxQkEyQnBCLEtBQUs7bUJBRUwsS0FBSztzQkFDTCxLQUFLOzBCQUNMLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSztzQkFDTCxLQUFLO2lDQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLEtBQUs7d0JBQ0wsS0FBSzsyQkFJTCxLQUFLO2dDQUVMLFlBQVksU0FBQyxnQ0FBZ0MsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTsyQkFHbEYsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7Ozs7OztJQWpDN0MseUNBQXlCOztJQUV6QiwyQ0FBb0Q7O0lBRXBELHlDQUEwQjs7SUFFMUIsdUNBQThCOztJQUM5QiwwQ0FBNEM7O0lBQzVDLDhDQUEwQjs7SUFDMUIsOENBQXFDOztJQUNyQyxvREFBNEM7O0lBQzVDLDRDQUEyRDs7SUFDM0QsNENBQStCOztJQUMvQiw0Q0FBK0I7O0lBQy9CLDRDQUFvQzs7SUFDcEMsNkNBQXlDOztJQUN6QywwQ0FBa0M7O0lBQ2xDLHFEQUEwQzs7SUFDMUMsMkNBQXFDOztJQUNyQyw0Q0FBc0M7O0lBQ3RDLGtEQUF3RDs7SUFDeEQsOENBQXNDOztJQUN0Qyw4Q0FBaUM7O0lBQ2pDLDBDQUE2Qjs7SUFDN0IsNENBR0U7O0lBQ0YsK0NBQThCOztJQUU5QixvREFFRTs7SUFDRiwrQ0FBOEU7Ozs7O0lBRzVFLHFEQUE2Qzs7Ozs7SUFDN0MsOENBQStCOzs7OztJQUMvQixrREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgQ29udGVudENoaWxkLFxuICBWaWV3Q2hpbGQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgYXNzaWduRGVmaW5lZCxcbiAgVGRUb29sdGlwVHJpZ2dlcixcbiAgVGRUb29sdGlwVHJpZ2dlck9uLFxuICBUZFRvb2x0aXBQb3NpdGlvbixcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBUZFRvb2x0aXBDb250ZXh0IHtcbiAgJGltcGxpY2l0OiBhbnk7XG4gIHRpY2tldDogc3RyaW5nO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVt0ZFRvb2x0aXBGb3JtYXR0ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFRvb2x0aXBGb3JtYXR0ZXJEaXJlY3RpdmUge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG5cbiAgX2NvbnRleHQ6IFRkVG9vbHRpcENvbnRleHQgPSBuZXcgVGRUb29sdGlwQ29udGV4dCgpO1xuXG4gIEBJbnB1dCgpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCkgc2hvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHRyaWdnZXI6IFRkVG9vbHRpcFRyaWdnZXIgPSAnYXhpcyc7XG4gIEBJbnB1dCgpIGF4aXNQb2ludGVyOiBhbnk7XG4gIEBJbnB1dCgpIHNob3dDb250ZW50OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgYWx3YXlzU2hvd0NvbnRlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgdHJpZ2dlck9uOiBUZFRvb2x0aXBUcmlnZ2VyT24gPSAnbW91c2Vtb3ZlfGNsaWNrJztcbiAgQElucHV0KCkgc2hvd0RlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoKSBoaWRlRGVsYXk6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIGVudGVyYWJsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSByZW5kZXJNb2RlOiAnaHRtbCcgfCAncmljaFRleHQnO1xuICBASW5wdXQoKSBjb25maW5lOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyID0gMC41O1xuICBASW5wdXQoKSBwb3NpdGlvbjogVGRUb29sdGlwUG9zaXRpb247IC8vIHNlcmllc1xuICBASW5wdXQoKSBmb3JtYXR0ZXI6IHN0cmluZyB8IEZ1bmN0aW9uOyAvLyBzZXJpZXNcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSAncmdiYSg1MCw1MCw1MCwwLjcpJzsgLy8gc2VyaWVzXG4gIEBJbnB1dCgpIGJvcmRlckNvbG9yOiBzdHJpbmcgPSAnIzMzMyc7IC8vIHNlcmllc1xuICBASW5wdXQoKSBib3JkZXJXaWR0aDogbnVtYmVyID0gMDsgLy8gc2VyaWVzXG4gIEBJbnB1dCgpIHBhZGRpbmc6IG51bWJlciA9IDU7IC8vIHNlcmllc1xuICBASW5wdXQoKSB0ZXh0U3R5bGU6IGFueSA9IHtcbiAgICAvLyBzZXJpZXNcbiAgICBjb2xvcjogJyNGRkYnLFxuICB9O1xuICBASW5wdXQoKSBleHRyYUNzc1RleHQ6IHN0cmluZzsgLy8gc2VyaWVzXG5cbiAgQENvbnRlbnRDaGlsZChUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiB0cnVlIH0pIGZvcm1hdHRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxcbiAgICBhbnlcbiAgPjtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcENvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBmdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBjb25zdCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQoXG4gICAgICB0aGlzLl9zdGF0ZSxcbiAgICAgIHtcbiAgICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgICB0cmlnZ2VyOiB0aGlzLnRyaWdnZXIsXG4gICAgICAgIGF4aXNQb2ludGVyOiB0aGlzLmF4aXNQb2ludGVyLFxuICAgICAgICBzaG93Q29udGVudDogdGhpcy5zaG93Q29udGVudCxcbiAgICAgICAgYWx3YXlzU2hvd0NvbnRlbnQ6IHRoaXMuYWx3YXlzU2hvd0NvbnRlbnQsXG4gICAgICAgIHRyaWdnZXJPbjogdGhpcy50cmlnZ2VyT24sXG4gICAgICAgIHNob3dEZWxheTogdGhpcy5zaG93RGVsYXksXG4gICAgICAgIGhpZGVEZWxheTogdGhpcy5oaWRlRGVsYXksXG4gICAgICAgIGVudGVyYWJsZTogdGhpcy5lbnRlcmFibGUsXG4gICAgICAgIGNvbmZpbmU6IHRoaXMuY29uZmluZSxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgIGZvcm1hdHRlcjogdGhpcy5mb3JtYXR0ZXIgPyB0aGlzLmZvcm1hdHRlciA6IHRoaXMuZm9ybWF0dGVyVGVtcGxhdGUgPyB0aGlzLl9mb3JtYXR0ZXIoKSA6IHVuZGVmaW5lZCxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgYm9yZGVyQ29sb3I6IHRoaXMuYm9yZGVyQ29sb3IsXG4gICAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICAgIHRleHRTdHlsZTogdGhpcy50ZXh0U3R5bGUsXG4gICAgICAgIGV4dHJhQ3NzVGV4dDogdGhpcy5leHRyYUNzc1RleHQsXG4gICAgICB9LFxuICAgICAgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LFxuICAgICk7XG4gICAgLy8gc2V0IHRvb2x0aXAgY29uZmlndXJhdGlvbiBpbiBwYXJlbnQgY2hhcnQgYW5kIHJlbmRlciBuZXcgY29uZmlndXJhdGlvbnNcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5zZXRPcHRpb24oJ3Rvb2x0aXAnLCBjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmNsZWFyT3B0aW9uKCd0b29sdGlwJyk7XG4gIH1cblxuICBwcml2YXRlIF9mb3JtYXR0ZXIoKTogKHBhcmFtczogYW55LCB0aWNrZXQ6IGFueSwgY2FsbGJhY2s6ICh0aWNrZXQ6IHN0cmluZywgaHRtbDogc3RyaW5nKSA9PiB2b2lkKSA9PiBzdHJpbmcge1xuICAgIHJldHVybiAocGFyYW1zOiBhbnksIHRpY2tldDogYW55LCBjYWxsYmFjazogKHRpY2tldDogc3RyaW5nLCBodG1sOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMuX2NvbnRleHQgPSB7XG4gICAgICAgICRpbXBsaWNpdDogcGFyYW1zLFxuICAgICAgICB0aWNrZXQsXG4gICAgICB9O1xuICAgICAgLy8gdGltZW91dCBzZXQgc2luY2Ugd2UgbmVlZCB0byBzZXQgdGhlIEhUTUwgYXQgdGhlIGVuZCBvZiB0aGUgYW5ndWxhciBsaWZlY3ljbGUgd2hlblxuICAgICAgLy8gdGhlIHRvb2x0aXAgZGVsYXkgaXMgbW9yZSB0aGFuIDBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjYWxsYmFjayh0aWNrZXQsICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUwpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==