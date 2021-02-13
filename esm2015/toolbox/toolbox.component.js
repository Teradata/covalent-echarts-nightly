/**
 * @fileoverview added by tsickle
 * Generated from: toolbox.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        const config = assignDefined(this._state, {
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
            this.feature = Object.assign(Object.assign({}, this.feature), { dataView: Object.assign(Object.assign({}, this.feature.dataView), { optionToContent: this._optionToContentFormatter() }) });
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
    config: [{ type: Input }],
    show: [{ type: Input }],
    trigger: [{ type: Input }],
    orient: [{ type: Input }],
    itemSize: [{ type: Input }],
    itemGap: [{ type: Input }],
    showTitle: [{ type: Input }],
    label: [{ type: Input }],
    feature: [{ type: Input }],
    iconStyle: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }],
    transitionDuration: [{ type: Input }],
    left: [{ type: Input }],
    top: [{ type: Input }],
    right: [{ type: Input }],
    bottom: [{ type: Input }],
    width: [{ type: Input }],
    height: [{ type: Input }],
    formatterTemplate: [{ type: ContentChild, args: [TdChartViewDataFormatterDirective, { read: TemplateRef },] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2VjaGFydHMvdG9vbGJveC8iLCJzb3VyY2VzIjpbInRvb2xib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsVUFBVSxFQUNWLGlCQUFpQixFQUVqQixZQUFZLEVBQ1osU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsYUFBYSxHQU1kLE1BQU0sd0JBQXdCLENBQUM7Ozs7QUFLaEMsMkNBT0M7OztJQU5DLHFDQUFjOztJQUNkLHdDQUFpQjs7SUFDakIsc0NBQWU7O0lBQ2Ysc0NBQWU7O0lBQ2YscUNBQWM7O0lBQ2Qsc0NBQWU7Ozs7O0FBR2pCLDJDQUtDOzs7SUFKQyxxQ0FBYzs7SUFDZCxvQ0FBYTs7SUFDYixzQ0FBZTs7SUFDZixzQ0FBZTs7Ozs7QUFHakIsNENBQTBFOzs7O0FBRTFFLHlDQUlDOzs7SUFIQywyQ0FBOEI7O0lBQzlCLHdDQUF3Qjs7SUFDeEIsdUNBQWtDOzs7OztBQUdwQyxtQ0FHQzs7O0lBRkMsNkJBQWM7O0lBQ2QsNkJBQWM7Ozs7O0FBR2hCLG9DQVVDOzs7SUFUQyw4QkFBbUI7O0lBQ25CLDhCQUFjOztJQUNkLHlDQUFzQjs7SUFDdEIsMkNBQTZCOztJQUM3Qiw4QkFBZTs7SUFDZiwrQkFBZTs7SUFDZiw4QkFBYzs7SUFDZCxtQ0FBZ0M7O0lBQ2hDLG9DQUFvQjs7Ozs7QUFHdEIsZ0NBS0M7OztJQUpDLDBCQUFlOztJQUNmLDJCQUFlOztJQUNmLDBCQUFjOztJQUNkLCtCQUFnQzs7Ozs7QUFHbEMsaUNBY0M7OztJQWJDLDJCQUFlOztJQUNmLDRCQUFlOztJQUNmLDJCQUFjOztJQUNkLGdDQUFnQzs7SUFDaEMsK0JBQW1COztJ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cUJBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7Z0NBRUwsWUFBWSxTQUFDLGlDQUFpQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTsyQkFFckUsU0FBUyxTQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTs7Ozs7OztJQXpCN0MseUNBQXlCOztJQUV6Qix5Q0FBMEI7O0lBRTFCLHVDQUE4Qjs7SUFDOUIsMENBQXlCOztJQUN6Qix5Q0FBaUM7O0lBQ2pDLDJDQUEwQjs7SUFDMUIsMENBQXlCOztJQUN6Qiw0Q0FBbUM7O0lBQ25DLHdDQUF5Qjs7SUFDekIsMENBQW9DOztJQUNwQyw0Q0FBd0M7O0lBQ3hDLHlDQUF3Qjs7SUFDeEIsb0NBQW1COztJQUNuQixxREFBMEM7O0lBQzFDLHVDQUF3Qzs7SUFDeEMsc0NBQXVDOztJQUN2Qyx3Q0FBeUM7O0lBQ3pDLHlDQUEwQzs7SUFDMUMsd0NBQXlDOztJQUN6Qyx5Q0FBMEM7O0lBRTFDLG9EQUNvQzs7SUFDcEMsK0NBQThFOzs7OztJQUc1RSxxREFBNkM7Ozs7O0lBQzdDLDhDQUErQjs7Ozs7SUFDL0Isa0RBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkNoYW5nZXMsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIGFzc2lnbkRlZmluZWQsXG4gIElUZExhYmVsLFxuICBJVGRTaGFkb3csXG4gIElUZEl0ZW1TdHlsZSxcbiAgVGRUZXh0UG9zaXRpb24sXG4gIFRkVGV4dEFsaWduLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IHR5cGUgVGRUb29sYm94T3JpZW50ID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbmV4cG9ydCB0eXBlIFRkSW1hZ2VUeXBlID0gJ3BuZycgfCAnanBlZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQWNjZXB0ZWRCcnVzaFR5cGVzIHtcbiAgcmVjdD86IHN0cmluZztcbiAgcG9seWdvbj86IHN0cmluZztcbiAgbGluZVg/OiBzdHJpbmc7XG4gIGxpbmVZPzogc3RyaW5nO1xuICBrZWVwPzogc3RyaW5nO1xuICBjbGVhcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRBY2NlcHRlZE1hZ2ljVHlwZXMge1xuICBsaW5lPzogc3RyaW5nO1xuICBiYXI/OiBzdHJpbmc7XG4gIHN0YWNrPzogc3RyaW5nO1xuICB0aWxlZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUb29sYm94SWNvbkVtcGhhc2lzIGV4dGVuZHMgSVRkSXRlbVN0eWxlLCBJVGRTaGFkb3cge31cblxuZXhwb3J0IGludGVyZmFjZSBJVGRGZWF0dXJlSWNvblN0eWxlIGV4dGVuZHMgSVRkSXRlbVN0eWxlLCBJVGRTaGFkb3cge1xuICB0ZXh0UG9zaXRpb24/OiBUZFRleHRQb3NpdGlvbjtcbiAgdGV4dEFsaWduPzogVGRUZXh0QWxpZ247XG4gIGVtcGhhc2lzPzogSVRkVG9vbGJveEljb25FbXBoYXNpcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRab29tVGl0bGVzIHtcbiAgem9vbT86IHN0cmluZztcbiAgYmFjaz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRTYXZlQXNJbWFnZSB7XG4gIHR5cGU/OiBUZEltYWdlVHlwZTtcbiAgbmFtZT86IHN0cmluZztcbiAgYmFja2dyb3VuZENvbG9yPzogYW55O1xuICBleGNsdWRlQ29tcG9uZW50cz86IHN0cmluZ1tdOyAvLyBkZWZhdWx0cyB0byBbJ3Rvb2xib3gnXVxuICBzaG93PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIHBpeGVsUmF0aW8/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkUmVzdG9yZSB7XG4gIHNob3c/OiBib29sZWFuO1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVmlldyB7XG4gIHNob3c/OiBib29sZWFuO1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xuICBvcHRpb25Ub0NvbnRlbnQ/OiBGdW5jdGlvbjtcbiAgY29udGVudFRvT3B0aW9uPzogRnVuY3Rpb247XG4gIGxhbmc/OiBzdHJpbmdbXTsgLy8gRGVmYXVsdHMgdG8gQ2hpbmVzZSwgdGhlcmUgYXJlIDMgbmFtZXMgaW4gZGF0YSB2aWV3LCB3aGljaCBhcmUgWydkYXRhIHZpZXcnLCAndHVybiBvZmYnIGFuZCAncmVmcmVzaCddLlxuICB0ZXh0YXJlYUNvbG9yPzogc3RyaW5nO1xuICB0ZXh0YXJlYUJvcmRlckNvbG9yPzogc3RyaW5nO1xuICB0ZXh0Q29sb3I/OiBzdHJpbmc7XG4gIGJ1dHRvbkNvbG9yPzogc3RyaW5nO1xuICBidXR0b25UZXh0Q29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVpvb20ge1xuICBzaG93PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBJVGRab29tVGl0bGVzO1xuICBpY29uPzogSVRkWm9vbVRpdGxlcztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgeEF4aXNJbmRleD86IG51bWJlciB8IG51bWJlcltdIHwgYm9vbGVhbjtcbiAgeUF4aXNJbmRleD86IG51bWJlciB8IG51bWJlcltdIHwgYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRNYWdpY1R5cGUge1xuICBzaG93PzogYm9vbGVhbjtcbiAgdHlwZT86IHN0cmluZ1tdOyAvLyBvbmx5IGV4cGVjdHMgJ2xpbmUnIHwgJ2JhcicgfCAnc3RhY2snIHwgJ3RpbGVkJztcbiAgdGl0bGU/OiBJVGRBY2NlcHRlZE1hZ2ljVHlwZXM7XG4gIGljb24/OiBJVGRBY2NlcHRlZE1hZ2ljVHlwZXM7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIG9wdGlvbj86IHtcbiAgICBsaW5lPzogb2JqZWN0O1xuICAgIGJhcj86IG9iamVjdDtcbiAgICBzdGFjaz86IG9iamVjdDtcbiAgICB0aWxlZD86IG9iamVjdDtcbiAgfTtcbiAgc2VyaWVzSW5kZXg/OiB7XG4gICAgbGluZT86IGFueVtdO1xuICAgIGJhcj86IGFueVtdO1xuICAgIHN0YWNrPzogYW55W107XG4gICAgdGlsZWQ/OiBhbnlbXTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRCcnVzaCB7XG4gIHR5cGU/OiBhbnlbXTtcbiAgaWNvbj86IElUZEFjY2VwdGVkQnJ1c2hUeXBlcztcbiAgdGl0bGU/OiBJVGRBY2NlcHRlZEJydXNoVHlwZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVG9vbGJveEZlYXR1cmUge1xuICBzYXZlQXNJbWFnZT86IElUZFNhdmVBc0ltYWdlO1xuICByZXN0b3JlPzogSVRkUmVzdG9yZTtcbiAgZGF0YVZpZXc/OiBJVGREYXRhVmlldztcbiAgZGF0YVpvb20/OiBJVGREYXRhWm9vbTtcbiAgbWFnaWNUeXBlPzogSVRkTWFnaWNUeXBlO1xuICBicnVzaD86IElUZEJydXNoO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVt0ZFZpZXdEYXRhRm9ybWF0dGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRWaWV3RGF0YUZvcm1hdHRlckRpcmVjdGl2ZSB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC10b29sYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2xib3guY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFRvb2xib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcblxuICBASW5wdXQoKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSB0cmlnZ2VyOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG9yaWVudDogVGRUb29sYm94T3JpZW50O1xuICBASW5wdXQoKSBpdGVtU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoKSBpdGVtR2FwOiBudW1iZXI7XG4gIEBJbnB1dCgpIHNob3dUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCkgZmVhdHVyZTogSVRkVG9vbGJveEZlYXR1cmU7XG4gIEBJbnB1dCgpIGljb25TdHlsZTogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgQElucHV0KCkgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgpIHo6IG51bWJlcjtcbiAgQElucHV0KCkgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXIgPSAwLjU7XG4gIEBJbnB1dCgpIGxlZnQ6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCkgdG9wOiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcblxuICBAQ29udGVudENoaWxkKFRkQ2hhcnRWaWV3RGF0YUZvcm1hdHRlckRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndG9vbGJveENvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBmdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGVja0Zvcm1hdHRlclRlbXBsYXRlKCk7XG5cbiAgICBjb25zdCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQoXG4gICAgICB0aGlzLl9zdGF0ZSxcbiAgICAgIHtcbiAgICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgICBuYW1lOiB0aGlzLnRyaWdnZXIsXG4gICAgICAgIG9yaWVudDogdGhpcy5vcmllbnQsXG4gICAgICAgIGl0ZW1TaXplOiB0aGlzLml0ZW1TaXplLFxuICAgICAgICBpdGVtR2FwOiB0aGlzLml0ZW1HYXAsXG4gICAgICAgIHNob3dUaXRsZTogdGhpcy5zaG93VGl0bGUsXG4gICAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgICBmZWF0dXJlOiB0aGlzLmZlYXR1cmUsXG4gICAgICAgIGljb25TdHlsZTogdGhpcy5pY29uU3R5bGUsXG4gICAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICAgIHo6IHRoaXMueixcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICB9LFxuICAgICAgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LFxuICAgICk7XG4gICAgLy8gc2V0IHRvb2xib3ggY29uZmlndXJhdGlvbiBpbiBwYXJlbnQgY2hhcnQgYW5kIHJlbmRlciBuZXcgY29uZmlndXJhdGlvbnNcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5zZXRPcHRpb24oJ3Rvb2xib3gnLCBjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmNsZWFyT3B0aW9uKCd0b29sYm94Jyk7XG4gIH1cblxuICBwcml2YXRlIF9jaGVja0Zvcm1hdHRlclRlbXBsYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvcm1hdHRlclRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmZlYXR1cmUgPSB7XG4gICAgICAgIC4uLnRoaXMuZmVhdHVyZSxcbiAgICAgICAgZGF0YVZpZXc6IHtcbiAgICAgICAgICAuLi50aGlzLmZlYXR1cmUuZGF0YVZpZXcsXG4gICAgICAgICAgb3B0aW9uVG9Db250ZW50OiB0aGlzLl9vcHRpb25Ub0NvbnRlbnRGb3JtYXR0ZXIoKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3B0aW9uVG9Db250ZW50Rm9ybWF0dGVyKCk6ICgpID0+IHN0cmluZyB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUw7XG4gICAgfTtcbiAgfVxufVxuIl19