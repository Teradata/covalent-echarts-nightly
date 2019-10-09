/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Directive, TemplateRef, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, ContentChild, ViewChild, } from '@angular/core';
import { TdChartOptionsService, assignDefined, } from '@covalent/echarts/base';
/**
 * @record
 */
export function ITdAcceptedBrushTypes() { }
if (false) {
    /** @type {?|undefined} */
    ITdAcceptedBrushTypes.prototype.rect;
    /** @type {?|undefined} */
    ITdAcceptedBrushTypes.prototype.polygon;
    /** @type {?|undefined} */
    ITdAcceptedBrushTypes.prototype.lineX;
    /** @type {?|undefined} */
    ITdAcceptedBrushTypes.prototype.lineY;
    /** @type {?|undefined} */
    ITdAcceptedBrushTypes.prototype.keep;
    /** @type {?|undefined} */
    ITdAcceptedBrushTypes.prototype.clear;
}
/**
 * @record
 */
export function ITdAcceptedMagicTypes() { }
if (false) {
    /** @type {?|undefined} */
    ITdAcceptedMagicTypes.prototype.line;
    /** @type {?|undefined} */
    ITdAcceptedMagicTypes.prototype.bar;
    /** @type {?|undefined} */
    ITdAcceptedMagicTypes.prototype.stack;
    /** @type {?|undefined} */
    ITdAcceptedMagicTypes.prototype.tiled;
}
/**
 * @record
 */
export function ITdToolboxIconEmphasis() { }
/**
 * @record
 */
export function ITdFeatureIconStyle() { }
if (false) {
    /** @type {?|undefined} */
    ITdFeatureIconStyle.prototype.textPosition;
    /** @type {?|undefined} */
    ITdFeatureIconStyle.prototype.textAlign;
    /** @type {?|undefined} */
    ITdFeatureIconStyle.prototype.emphasis;
}
/**
 * @record
 */
export function ITdZoomTitles() { }
if (false) {
    /** @type {?|undefined} */
    ITdZoomTitles.prototype.zoom;
    /** @type {?|undefined} */
    ITdZoomTitles.prototype.back;
}
/**
 * @record
 */
export function ITdSaveAsImage() { }
if (false) {
    /** @type {?|undefined} */
    ITdSaveAsImage.prototype.type;
    /** @type {?|undefined} */
    ITdSaveAsImage.prototype.name;
    /** @type {?|undefined} */
    ITdSaveAsImage.prototype.backgroundColor;
    /** @type {?|undefined} */
    ITdSaveAsImage.prototype.excludeComponents;
    /** @type {?|undefined} */
    ITdSaveAsImage.prototype.show;
    /** @type {?|undefined} */
    ITdSaveAsImage.prototype.title;
    /** @type {?|undefined} */
    ITdSaveAsImage.prototype.icon;
    /** @type {?|undefined} */
    ITdSaveAsImage.prototype.iconStyle;
    /** @type {?|undefined} */
    ITdSaveAsImage.prototype.pixelRatio;
}
/**
 * @record
 */
export function ITdRestore() { }
if (false) {
    /** @type {?|undefined} */
    ITdRestore.prototype.show;
    /** @type {?|undefined} */
    ITdRestore.prototype.title;
    /** @type {?|undefined} */
    ITdRestore.prototype.icon;
    /** @type {?|undefined} */
    ITdRestore.prototype.iconStyle;
}
/**
 * @record
 */
export function ITdDataView() { }
if (false) {
    /** @type {?|undefined} */
    ITdDataView.prototype.show;
    /** @type {?|undefined} */
    ITdDataView.prototype.title;
    /** @type {?|undefined} */
    ITdDataView.prototype.icon;
    /** @type {?|undefined} */
    ITdDataView.prototype.iconStyle;
    /** @type {?|undefined} */
    ITdDataView.prototype.readOnly;
    /** @type {?|undefined} */
    ITdDataView.prototype.optionToContent;
    /** @type {?|undefined} */
    ITdDataView.prototype.contentToOption;
    /** @type {?|undefined} */
    ITdDataView.prototype.lang;
    /** @type {?|undefined} */
    ITdDataView.prototype.textareaColor;
    /** @type {?|undefined} */
    ITdDataView.prototype.textareaBorderColor;
    /** @type {?|undefined} */
    ITdDataView.prototype.textColor;
    /** @type {?|undefined} */
    ITdDataView.prototype.buttonColor;
    /** @type {?|undefined} */
    ITdDataView.prototype.buttonTextColor;
}
/**
 * @record
 */
export function ITdDataZoom() { }
if (false) {
    /** @type {?|undefined} */
    ITdDataZoom.prototype.show;
    /** @type {?|undefined} */
    ITdDataZoom.prototype.title;
    /** @type {?|undefined} */
    ITdDataZoom.prototype.icon;
    /** @type {?|undefined} */
    ITdDataZoom.prototype.iconStyle;
    /** @type {?|undefined} */
    ITdDataZoom.prototype.xAxisIndex;
    /** @type {?|undefined} */
    ITdDataZoom.prototype.yAxisIndex;
}
/**
 * @record
 */
export function ITdMagicType() { }
if (false) {
    /** @type {?|undefined} */
    ITdMagicType.prototype.show;
    /** @type {?|undefined} */
    ITdMagicType.prototype.type;
    /** @type {?|undefined} */
    ITdMagicType.prototype.title;
    /** @type {?|undefined} */
    ITdMagicType.prototype.icon;
    /** @type {?|undefined} */
    ITdMagicType.prototype.iconStyle;
    /** @type {?|undefined} */
    ITdMagicType.prototype.option;
    /** @type {?|undefined} */
    ITdMagicType.prototype.seriesIndex;
}
/**
 * @record
 */
export function ITdBrush() { }
if (false) {
    /** @type {?|undefined} */
    ITdBrush.prototype.type;
    /** @type {?|undefined} */
    ITdBrush.prototype.icon;
    /** @type {?|undefined} */
    ITdBrush.prototype.title;
}
/**
 * @record
 */
export function ITdToolboxFeature() { }
if (false) {
    /** @type {?|undefined} */
    ITdToolboxFeature.prototype.saveAsImage;
    /** @type {?|undefined} */
    ITdToolboxFeature.prototype.restore;
    /** @type {?|undefined} */
    ITdToolboxFeature.prototype.dataView;
    /** @type {?|undefined} */
    ITdToolboxFeature.prototype.dataZoom;
    /** @type {?|undefined} */
    ITdToolboxFeature.prototype.magicType;
    /** @type {?|undefined} */
    ITdToolboxFeature.prototype.brush;
}
export class TdChartViewDataFormatterDirective {
}
TdChartViewDataFormatterDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[tdViewDataFormatter]',
            },] }
];
export class TdChartToolboxComponent {
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
        this.config = {};
        this.show = true;
        this.showTitle = true;
        this.transitionDuration = 0.5;
        this.left = 'auto';
        this.top = 'auto';
        this.right = 'auto';
        this.bottom = 'auto';
        this.width = 'auto';
        this.height = 'auto';
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
        this._checkFormatterTemplate();
        /** @type {?} */
        let config = assignDefined(this._state, {
            show: this.show,
            name: this.trigger,
            orient: this.orient,
            itemSize: this.itemSize,
            itemGap: this.itemGap,
            showTitle: this.showTitle,
            label: this.label,
            feature: this.feature,
            iconStyle: this.iconStyle,
            zlevel: this.zlevel,
            z: this.z,
            transitionDuration: this.transitionDuration,
            left: this.left,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            width: this.width,
            height: this.height,
        }, this.config ? this.config : {});
        // set toolbox configuration in parent chart and render new configurations
        this._optionsService.setOption('toolbox', config);
    }
    /**
     * @private
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('toolbox');
    }
    /**
     * @private
     * @return {?}
     */
    _checkFormatterTemplate() {
        if (this.formatterTemplate) {
            this.feature = Object.assign({}, this.feature, { dataView: Object.assign({}, this.feature.dataView, { optionToContent: this._optionToContentFormatter() }) });
        }
    }
    /**
     * @private
     * @return {?}
     */
    _optionToContentFormatter() {
        return (/**
         * @return {?}
         */
        () => {
            this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML;
        });
    }
}
TdChartToolboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-toolbox',
                template: "<ng-template #toolboxContent [ngTemplateOutlet]=\"formatterTemplate\"></ng-template>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartToolboxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdChartOptionsService }
];
TdChartToolboxComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    show: [{ type: Input, args: ['show',] }],
    trigger: [{ type: Input, args: ['name',] }],
    orient: [{ type: Input, args: ['orient',] }],
    itemSize: [{ type: Input, args: ['itemSize',] }],
    itemGap: [{ type: Input, args: ['itemGap',] }],
    showTitle: [{ type: Input, args: ['showTitle',] }],
    label: [{ type: Input, args: ['label',] }],
    feature: [{ type: Input, args: ['feature',] }],
    iconStyle: [{ type: Input, args: ['iconStyle',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }],
    transitionDuration: [{ type: Input, args: ['transitionDuration',] }],
    left: [{ type: Input, args: ['left',] }],
    top: [{ type: Input, args: ['top',] }],
    right: [{ type: Input, args: ['right',] }],
    bottom: [{ type: Input, args: ['bottom',] }],
    width: [{ type: Input, args: ['width',] }],
    height: [{ type: Input, args: ['height',] }],
    formatterTemplate: [{ type: ContentChild, args: [TdChartViewDataFormatterDirective, { read: TemplateRef, static: false },] }],
    fullTemplate: [{ type: ViewChild, args: ['toolboxContent', { static: true },] }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdChartToolboxComponent.prototype._state;
    /** @type {?} */
    TdChartToolboxComponent.prototype.config;
    /** @type {?} */
    TdChartToolboxComponent.prototype.show;
    /** @type {?} */
    TdChartToolboxComponent.prototype.trigger;
    /** @type {?} */
    TdChartToolboxComponent.prototype.orient;
    /** @type {?} */
    TdChartToolboxComponent.prototype.itemSize;
    /** @type {?} */
    TdChartToolboxComponent.prototype.itemGap;
    /** @type {?} */
    TdChartToolboxComponent.prototype.showTitle;
    /** @type {?} */
    TdChartToolboxComponent.prototype.label;
    /** @type {?} */
    TdChartToolboxComponent.prototype.feature;
    /** @type {?} */
    TdChartToolboxComponent.prototype.iconStyle;
    /** @type {?} */
    TdChartToolboxComponent.prototype.zlevel;
    /** @type {?} */
    TdChartToolboxComponent.prototype.z;
    /** @type {?} */
    TdChartToolboxComponent.prototype.transitionDuration;
    /** @type {?} */
    TdChartToolboxComponent.prototype.left;
    /** @type {?} */
    TdChartToolboxComponent.prototype.top;
    /** @type {?} */
    TdChartToolboxComponent.prototype.right;
    /** @type {?} */
    TdChartToolboxComponent.prototype.bottom;
    /** @type {?} */
    TdChartToolboxComponent.prototype.width;
    /** @type {?} */
    TdChartToolboxComponent.prototype.height;
    /** @type {?} */
    TdChartToolboxComponent.prototype.formatterTemplate;
    /** @type {?} */
    TdChartToolboxComponent.prototype.fullTemplate;
    /**
     * @type {?}
     * @private
     */
    TdChartToolboxComponent.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    TdChartToolboxComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdChartToolboxComponent.prototype._optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sYm94LyIsInNvdXJjZXMiOlsidG9vbGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixpQkFBaUIsRUFFakIsWUFBWSxFQUNaLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGFBQWEsR0FNZCxNQUFNLHdCQUF3QixDQUFDOzs7O0FBS2hDLDJDQU9DOzs7SUFOQyxxQ0FBYzs7SUFDZCx3Q0FBaUI7O0lBQ2pCLHNDQUFlOztJQUNmLHNDQUFlOztJQUNmLHFDQUFjOztJQUNkLHNDQUFlOzs7OztBQUdqQiwyQ0FLQzs7O0lBSkMscUNBQWM7O0lBQ2Qsb0NBQWE7O0lBQ2Isc0NBQWU7O0lBQ2Ysc0NBQWU7Ozs7O0FBR2pCLDRDQUEwRTs7OztBQUUxRSx5Q0FJQzs7O0lBSEMsMkNBQThCOztJQUM5Qix3Q0FBd0I7O0lBQ3hCLHVDQUFrQzs7Ozs7QUFHcEMsbUNBR0M7OztJQUZDLDZCQUFjOztJQUNkLDZCQUFjOzs7OztBQUdoQixvQ0FVQzs7O0lBVEMsOEJBQW1COztJQUNuQiw4QkFBYzs7SUFDZCx5Q0FBc0I7O0lBQ3RCLDJDQUE2Qjs7SUFDN0IsOEJBQWU7O0lBQ2YsK0JBQWU7O0lBQ2YsOEJBQWM7O0lBQ2QsbUNBQWdDOztJQUNoQyxvQ0FBb0I7Ozs7O0FBR3RCLGdDQUtDOzs7SUFKQywwQkFBZTs7SUFDZiwyQkFBZTs7SUFDZiwwQkFBYzs7SUFDZCwrQkFBZ0M7Ozs7O0FBR2xDLGlDQWNDOzs7SUFiQywyQkFBZTs7SUFDZiw0QkFBZTs7SUFDZiwyQkFBYzs7SUFDZCxnQ0FBZ0M7O0lBQ2hDLCtCQUFtQjs7SUFDbkIsc0NBQTJCOztJ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d0JBQ2YsS0FBSyxTQUFDLFdBQVc7cUJBQ2pCLEtBQUssU0FBQyxRQUFRO2dCQUNkLEtBQUssU0FBQyxHQUFHO2lDQUNULEtBQUssU0FBQyxvQkFBb0I7bUJBQzFCLEtBQUssU0FBQyxNQUFNO2tCQUNaLEtBQUssU0FBQyxLQUFLO29CQUNYLEtBQUssU0FBQyxPQUFPO3FCQUNiLEtBQUssU0FBQyxRQUFRO29CQUNkLEtBQUssU0FBQyxPQUFPO3FCQUNiLEtBQUssU0FBQyxRQUFRO2dDQUVkLFlBQVksU0FBQyxpQ0FBaUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTsyQkFFcEYsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7Ozs7OztJQXpCN0MseUNBQXlCOztJQUV6Qix5Q0FBa0M7O0lBRWxDLHVDQUFvQzs7SUFDcEMsMENBQStCOztJQUMvQix5Q0FBeUM7O0lBQ3pDLDJDQUFvQzs7SUFDcEMsMENBQWtDOztJQUNsQyw0Q0FBOEM7O0lBQzlDLHdDQUFnQzs7SUFDaEMsMENBQTZDOztJQUM3Qyw0Q0FBbUQ7O0lBQ25ELHlDQUFnQzs7SUFDaEMsb0NBQXNCOztJQUN0QixxREFBOEQ7O0lBQzlELHVDQUE4Qzs7SUFDOUMsc0NBQTRDOztJQUM1Qyx3Q0FBZ0Q7O0lBQ2hELHlDQUFrRDs7SUFDbEQsd0NBQWdEOztJQUNoRCx5Q0FBa0Q7O0lBRWxELG9EQUNvQzs7SUFDcEMsK0NBQThFOzs7OztJQUc1RSxxREFBNkM7Ozs7O0lBQzdDLDhDQUErQjs7Ozs7SUFDL0Isa0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkNoYW5nZXMsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIGFzc2lnbkRlZmluZWQsXG4gIElUZExhYmVsLFxuICBJVGRTaGFkb3csXG4gIElUZEl0ZW1TdHlsZSxcbiAgVGRUZXh0UG9zaXRpb24sXG4gIFRkVGV4dEFsaWduLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IHR5cGUgVGRUb29sYm94T3JpZW50ID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbmV4cG9ydCB0eXBlIFRkSW1hZ2VUeXBlID0gJ3BuZycgfCAnanBlZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQWNjZXB0ZWRCcnVzaFR5cGVzIHtcbiAgcmVjdD86IHN0cmluZztcbiAgcG9seWdvbj86IHN0cmluZztcbiAgbGluZVg/OiBzdHJpbmc7XG4gIGxpbmVZPzogc3RyaW5nO1xuICBrZWVwPzogc3RyaW5nO1xuICBjbGVhcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRBY2NlcHRlZE1hZ2ljVHlwZXMge1xuICBsaW5lPzogc3RyaW5nO1xuICBiYXI/OiBzdHJpbmc7XG4gIHN0YWNrPzogc3RyaW5nO1xuICB0aWxlZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUb29sYm94SWNvbkVtcGhhc2lzIGV4dGVuZHMgSVRkSXRlbVN0eWxlLCBJVGRTaGFkb3cge31cblxuZXhwb3J0IGludGVyZmFjZSBJVGRGZWF0dXJlSWNvblN0eWxlIGV4dGVuZHMgSVRkSXRlbVN0eWxlLCBJVGRTaGFkb3cge1xuICB0ZXh0UG9zaXRpb24/OiBUZFRleHRQb3NpdGlvbjtcbiAgdGV4dEFsaWduPzogVGRUZXh0QWxpZ247XG4gIGVtcGhhc2lzPzogSVRkVG9vbGJveEljb25FbXBoYXNpcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRab29tVGl0bGVzIHtcbiAgem9vbT86IHN0cmluZztcbiAgYmFjaz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRTYXZlQXNJbWFnZSB7XG4gIHR5cGU/OiBUZEltYWdlVHlwZTtcbiAgbmFtZT86IHN0cmluZztcbiAgYmFja2dyb3VuZENvbG9yPzogYW55O1xuICBleGNsdWRlQ29tcG9uZW50cz86IHN0cmluZ1tdOyAvLyBkZWZhdWx0cyB0byBbJ3Rvb2xib3gnXVxuICBzaG93PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIHBpeGVsUmF0aW8/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkUmVzdG9yZSB7XG4gIHNob3c/OiBib29sZWFuO1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVmlldyB7XG4gIHNob3c/OiBib29sZWFuO1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xuICBvcHRpb25Ub0NvbnRlbnQ/OiBGdW5jdGlvbjtcbiAgY29udGVudFRvT3B0aW9uPzogRnVuY3Rpb247XG4gIGxhbmc/OiBzdHJpbmdbXTsgLy8gRGVmYXVsdHMgdG8gQ2hpbmVzZSwgdGhlcmUgYXJlIDMgbmFtZXMgaW4gZGF0YSB2aWV3LCB3aGljaCBhcmUgWydkYXRhIHZpZXcnLCAndHVybiBvZmYnIGFuZCAncmVmcmVzaCddLlxuICB0ZXh0YXJlYUNvbG9yPzogc3RyaW5nO1xuICB0ZXh0YXJlYUJvcmRlckNvbG9yPzogc3RyaW5nO1xuICB0ZXh0Q29sb3I/OiBzdHJpbmc7XG4gIGJ1dHRvbkNvbG9yPzogc3RyaW5nO1xuICBidXR0b25UZXh0Q29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVpvb20ge1xuICBzaG93PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBJVGRab29tVGl0bGVzO1xuICBpY29uPzogSVRkWm9vbVRpdGxlcztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgeEF4aXNJbmRleD86IG51bWJlciB8IG51bWJlcltdIHwgYm9vbGVhbjtcbiAgeUF4aXNJbmRleD86IG51bWJlciB8IG51bWJlcltdIHwgYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRNYWdpY1R5cGUge1xuICBzaG93PzogYm9vbGVhbjtcbiAgdHlwZT86IHN0cmluZ1tdOyAvLyBvbmx5IGV4cGVjdHMgJ2xpbmUnIHwgJ2JhcicgfCAnc3RhY2snIHwgJ3RpbGVkJztcbiAgdGl0bGU/OiBJVGRBY2NlcHRlZE1hZ2ljVHlwZXM7XG4gIGljb24/OiBJVGRBY2NlcHRlZE1hZ2ljVHlwZXM7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIG9wdGlvbj86IHtcbiAgICBsaW5lPzogb2JqZWN0O1xuICAgIGJhcj86IG9iamVjdDtcbiAgICBzdGFjaz86IG9iamVjdDtcbiAgICB0aWxlZD86IG9iamVjdDtcbiAgfTtcbiAgc2VyaWVzSW5kZXg/OiB7XG4gICAgbGluZT86IGFueVtdO1xuICAgIGJhcj86IGFueVtdO1xuICAgIHN0YWNrPzogYW55W107XG4gICAgdGlsZWQ/OiBhbnlbXTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRCcnVzaCB7XG4gIHR5cGU/OiBhbnlbXTtcbiAgaWNvbj86IElUZEFjY2VwdGVkQnJ1c2hUeXBlcztcbiAgdGl0bGU/OiBJVGRBY2NlcHRlZEJydXNoVHlwZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVG9vbGJveEZlYXR1cmUge1xuICBzYXZlQXNJbWFnZT86IElUZFNhdmVBc0ltYWdlO1xuICByZXN0b3JlPzogSVRkUmVzdG9yZTtcbiAgZGF0YVZpZXc/OiBJVGREYXRhVmlldztcbiAgZGF0YVpvb20/OiBJVGREYXRhWm9vbTtcbiAgbWFnaWNUeXBlPzogSVRkTWFnaWNUeXBlO1xuICBicnVzaD86IElUZEJydXNoO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVt0ZFZpZXdEYXRhRm9ybWF0dGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRWaWV3RGF0YUZvcm1hdHRlckRpcmVjdGl2ZSB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC10b29sYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2xib3guY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFRvb2xib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdzaG93Jykgc2hvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnbmFtZScpIHRyaWdnZXI6IHN0cmluZztcbiAgQElucHV0KCdvcmllbnQnKSBvcmllbnQ6IFRkVG9vbGJveE9yaWVudDtcbiAgQElucHV0KCdpdGVtU2l6ZScpIGl0ZW1TaXplOiBudW1iZXI7XG4gIEBJbnB1dCgnaXRlbUdhcCcpIGl0ZW1HYXA6IG51bWJlcjtcbiAgQElucHV0KCdzaG93VGl0bGUnKSBzaG93VGl0bGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ2ZlYXR1cmUnKSBmZWF0dXJlOiBJVGRUb29sYm94RmVhdHVyZTtcbiAgQElucHV0KCdpY29uU3R5bGUnKSBpY29uU3R5bGU6IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcbiAgQElucHV0KCd0cmFuc2l0aW9uRHVyYXRpb24nKSB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciA9IDAuNTtcbiAgQElucHV0KCdsZWZ0JykgbGVmdDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoJ3RvcCcpIHRvcDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoJ3JpZ2h0JykgcmlnaHQ6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCdib3R0b20nKSBib3R0b206IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCd3aWR0aCcpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgnaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG5cbiAgQENvbnRlbnRDaGlsZChUZENoYXJ0Vmlld0RhdGFGb3JtYXR0ZXJEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYsIHN0YXRpYzogZmFsc2UgfSlcbiAgZm9ybWF0dGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3Rvb2xib3hDb250ZW50JywgeyBzdGF0aWM6IHRydWUgfSkgZnVsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gICkge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy5fY2hlY2tGb3JtYXR0ZXJUZW1wbGF0ZSgpO1xuXG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZChcbiAgICAgIHRoaXMuX3N0YXRlLFxuICAgICAge1xuICAgICAgICBzaG93OiB0aGlzLnNob3csXG4gICAgICAgIG5hbWU6IHRoaXMudHJpZ2dlcixcbiAgICAgICAgb3JpZW50OiB0aGlzLm9yaWVudCxcbiAgICAgICAgaXRlbVNpemU6IHRoaXMuaXRlbVNpemUsXG4gICAgICAgIGl0ZW1HYXA6IHRoaXMuaXRlbUdhcCxcbiAgICAgICAgc2hvd1RpdGxlOiB0aGlzLnNob3dUaXRsZSxcbiAgICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICAgIGZlYXR1cmU6IHRoaXMuZmVhdHVyZSxcbiAgICAgICAgaWNvblN0eWxlOiB0aGlzLmljb25TdHlsZSxcbiAgICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgICAgejogdGhpcy56LFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIH0sXG4gICAgICB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sXG4gICAgKTtcbiAgICAvLyBzZXQgdG9vbGJveCBjb25maWd1cmF0aW9uIGluIHBhcmVudCBjaGFydCBhbmQgcmVuZGVyIG5ldyBjb25maWd1cmF0aW9uc1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnNldE9wdGlvbigndG9vbGJveCcsIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UuY2xlYXJPcHRpb24oJ3Rvb2xib3gnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoZWNrRm9ybWF0dGVyVGVtcGxhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybWF0dGVyVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuZmVhdHVyZSA9IHtcbiAgICAgICAgLi4udGhpcy5mZWF0dXJlLFxuICAgICAgICBkYXRhVmlldzoge1xuICAgICAgICAgIC4uLnRoaXMuZmVhdHVyZS5kYXRhVmlldyxcbiAgICAgICAgICBvcHRpb25Ub0NvbnRlbnQ6IHRoaXMuX29wdGlvblRvQ29udGVudEZvcm1hdHRlcigpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vcHRpb25Ub0NvbnRlbnRGb3JtYXR0ZXIoKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MO1xuICAgIH07XG4gIH1cbn1cbiJdfQ==