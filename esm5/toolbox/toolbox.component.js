/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
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
var TdChartViewDataFormatterDirective = /** @class */ (function () {
    function TdChartViewDataFormatterDirective() {
    }
    TdChartViewDataFormatterDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'ng-template[tdViewDataFormatter]',
                },] }
    ];
    return TdChartViewDataFormatterDirective;
}());
export { TdChartViewDataFormatterDirective };
var TdChartToolboxComponent = /** @class */ (function () {
    function TdChartToolboxComponent(_changeDetectorRef, _elementRef, _optionsService) {
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
    TdChartToolboxComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdChartToolboxComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeOption();
    };
    /**
     * @private
     * @return {?}
     */
    TdChartToolboxComponent.prototype._setOptions = /**
     * @private
     * @return {?}
     */
    function () {
        this._checkFormatterTemplate();
        /** @type {?} */
        var config = assignDefined(this._state, {
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
    };
    /**
     * @private
     * @return {?}
     */
    TdChartToolboxComponent.prototype._removeOption = /**
     * @private
     * @return {?}
     */
    function () {
        this._optionsService.clearOption('toolbox');
    };
    /**
     * @private
     * @return {?}
     */
    TdChartToolboxComponent.prototype._checkFormatterTemplate = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.formatterTemplate) {
            this.feature = tslib_1.__assign({}, this.feature, { dataView: tslib_1.__assign({}, this.feature.dataView, { optionToContent: this._optionToContentFormatter() }) });
        }
    };
    /**
     * @private
     * @return {?}
     */
    TdChartToolboxComponent.prototype._optionToContentFormatter = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        return (/**
         * @return {?}
         */
        function () {
            _this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML;
        });
    };
    TdChartToolboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-toolbox',
                    template: "<ng-template #toolboxContent [ngTemplateOutlet]=\"formatterTemplate\"> </ng-template>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TdChartToolboxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: TdChartOptionsService }
    ]; };
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
    return TdChartToolboxComponent;
}());
export { TdChartToolboxComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sYm94LyIsInNvdXJjZXMiOlsidG9vbGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLHVCQUF1QixFQUN2QixVQUFVLEVBQ1YsaUJBQWlCLEVBRWpCLFlBQVksRUFDWixTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUNMLHFCQUFxQixFQUNyQixhQUFhLEdBTWQsTUFBTSx3QkFBd0IsQ0FBQzs7OztBQUtoQywyQ0FPQzs7O0lBTkMscUNBQWM7O0lBQ2Qsd0NBQWlCOztJQUNqQixzQ0FBZTs7SUFDZixzQ0FBZTs7SUFDZixxQ0FBYzs7SUFDZCxzQ0FBZTs7Ozs7QUFHakIsMkNBS0M7OztJQUpDLHFDQUFjOztJQUNkLG9DQUFhOztJQUNiLHNDQUFlOztJQUNmLHNDQUFlOzs7OztBQUdqQiw0Q0FBMEU7Ozs7QUFFMUUseUNBSUM7OztJQUhDLDJDQUE4Qjs7SUFDOUIsd0NBQXdCOztJQUN4Qix1Q0FBa0M7Ozs7O0FBR3BDLG1DQUdDOzs7SUFGQyw2QkFBYzs7SUFDZCw2QkFBYzs7Ozs7QUFHaEIsb0NBVUM7OztJQVRDLDhCQUFtQjs7SUFDbkIsOEJBQWM7O0lBQ2QseUNBQXNCOztJQUN0QiwyQ0FBNkI7O0lBQzdCLDhCQUFlOztJQUNmLCtCQUFlOztJQUNmLDhCQUFjOztJQUNkLG1DQUFnQzs7SUFDaEMsb0NBQW9COzs7OztBQUd0QixnQ0FLQzs7O0lBSkMsMEJBQWU7O0lBQ2YsMkJBQWU7O0lBQ2YsMEJBQWM7O0lBQ2QsK0JBQWdDOzs7OztBQUdsQyxpQ0FjQzs7O0lBYkMsMkJBQWU7O0lBQ2YsNEJBQWU7O0lBQ2YsMkJBQWM7O0lBQ2QsZ0NBQWdDOztJQUNoQywrQkFBbUI7O0lBQ25CLHNDQUEyQjs7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QUssU0FBQyxTQUFTOzRCQUNmLEtBQUssU0FBQyxXQUFXO3dCQUNqQixLQUFLLFNBQUMsT0FBTzswQkFDYixLQUFLLFNBQUMsU0FBUzs0QkFDZixLQUFLLFNBQUMsV0FBVzt5QkFDakIsS0FBSyxTQUFDLFFBQVE7b0JBQ2QsS0FBSyxTQUFDLEdBQUc7cUNBQ1QsS0FBSyxTQUFDLG9CQUFvQjt1QkFDMUIsS0FBSyxTQUFDLE1BQU07c0JBQ1osS0FBSyxTQUFDLEtBQUs7d0JBQ1gsS0FBSyxTQUFDLE9BQU87eUJBQ2IsS0FBSyxTQUFDLFFBQVE7d0JBQ2QsS0FBSyxTQUFDLE9BQU87eUJBQ2IsS0FBSyxTQUFDLFFBQVE7b0NBRWQsWUFBWSxTQUFDLGlDQUFpQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOytCQUVwRixTQUFTLFNBQUMsZ0JBQWdCLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFOztJQXFFL0MsOEJBQUM7Q0FBQSxBQXBHRCxJQW9HQztTQS9GWSx1QkFBdUI7Ozs7OztJQUNsQyx5Q0FBeUI7O0lBRXpCLHlDQUFrQzs7SUFFbEMsdUNBQW9DOztJQUNwQywwQ0FBK0I7O0lBQy9CLHlDQUF5Qzs7SUFDekMsMkNBQW9DOztJQUNwQywwQ0FBa0M7O0lBQ2xDLDRDQUE4Qzs7SUFDOUMsd0NBQWdDOztJQUNoQywwQ0FBNkM7O0lBQzdDLDRDQUFtRDs7SUFDbkQseUNBQWdDOztJQUNoQyxvQ0FBc0I7O0lBQ3RCLHFEQUE4RDs7SUFDOUQsdUNBQThDOztJQUM5QyxzQ0FBNEM7O0lBQzVDLHdDQUFnRDs7SUFDaEQseUNBQWtEOztJQUNsRCx3Q0FBZ0Q7O0lBQ2hELHlDQUFrRDs7SUFFbEQsb0RBQ29DOztJQUNwQywrQ0FBOEU7Ozs7O0lBRzVFLHFEQUE2Qzs7Ozs7SUFDN0MsOENBQStCOzs7OztJQUMvQixrREFBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgQ29udGVudENoaWxkLFxuICBWaWV3Q2hpbGQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgYXNzaWduRGVmaW5lZCxcbiAgSVRkTGFiZWwsXG4gIElUZFNoYWRvdyxcbiAgSVRkSXRlbVN0eWxlLFxuICBUZFRleHRQb3NpdGlvbixcbiAgVGRUZXh0QWxpZ24sXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgdHlwZSBUZFRvb2xib3hPcmllbnQgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuZXhwb3J0IHR5cGUgVGRJbWFnZVR5cGUgPSAncG5nJyB8ICdqcGVnJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRBY2NlcHRlZEJydXNoVHlwZXMge1xuICByZWN0Pzogc3RyaW5nO1xuICBwb2x5Z29uPzogc3RyaW5nO1xuICBsaW5lWD86IHN0cmluZztcbiAgbGluZVk/OiBzdHJpbmc7XG4gIGtlZXA/OiBzdHJpbmc7XG4gIGNsZWFyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEFjY2VwdGVkTWFnaWNUeXBlcyB7XG4gIGxpbmU/OiBzdHJpbmc7XG4gIGJhcj86IHN0cmluZztcbiAgc3RhY2s/OiBzdHJpbmc7XG4gIHRpbGVkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRvb2xib3hJY29uRW1waGFzaXMgZXh0ZW5kcyBJVGRJdGVtU3R5bGUsIElUZFNoYWRvdyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEZlYXR1cmVJY29uU3R5bGUgZXh0ZW5kcyBJVGRJdGVtU3R5bGUsIElUZFNoYWRvdyB7XG4gIHRleHRQb3NpdGlvbj86IFRkVGV4dFBvc2l0aW9uO1xuICB0ZXh0QWxpZ24/OiBUZFRleHRBbGlnbjtcbiAgZW1waGFzaXM/OiBJVGRUb29sYm94SWNvbkVtcGhhc2lzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFpvb21UaXRsZXMge1xuICB6b29tPzogc3RyaW5nO1xuICBiYWNrPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFNhdmVBc0ltYWdlIHtcbiAgdHlwZT86IFRkSW1hZ2VUeXBlO1xuICBuYW1lPzogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBhbnk7XG4gIGV4Y2x1ZGVDb21wb25lbnRzPzogc3RyaW5nW107IC8vIGRlZmF1bHRzIHRvIFsndG9vbGJveCddXG4gIHNob3c/OiBib29sZWFuO1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgcGl4ZWxSYXRpbz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRSZXN0b3JlIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFWaWV3IHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIG9wdGlvblRvQ29udGVudD86IEZ1bmN0aW9uO1xuICBjb250ZW50VG9PcHRpb24/OiBGdW5jdGlvbjtcbiAgbGFuZz86IHN0cmluZ1tdOyAvLyBEZWZhdWx0cyB0byBDaGluZXNlLCB0aGVyZSBhcmUgMyBuYW1lcyBpbiBkYXRhIHZpZXcsIHdoaWNoIGFyZSBbJ2RhdGEgdmlldycsICd0dXJuIG9mZicgYW5kICdyZWZyZXNoJ10uXG4gIHRleHRhcmVhQ29sb3I/OiBzdHJpbmc7XG4gIHRleHRhcmVhQm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIHRleHRDb2xvcj86IHN0cmluZztcbiAgYnV0dG9uQ29sb3I/OiBzdHJpbmc7XG4gIGJ1dHRvblRleHRDb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhWm9vbSB7XG4gIHNob3c/OiBib29sZWFuO1xuICB0aXRsZT86IElUZFpvb21UaXRsZXM7XG4gIGljb24/OiBJVGRab29tVGl0bGVzO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICB4QXhpc0luZGV4PzogbnVtYmVyIHwgbnVtYmVyW10gfCBib29sZWFuO1xuICB5QXhpc0luZGV4PzogbnVtYmVyIHwgbnVtYmVyW10gfCBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZE1hZ2ljVHlwZSB7XG4gIHNob3c/OiBib29sZWFuO1xuICB0eXBlPzogc3RyaW5nW107IC8vIG9ubHkgZXhwZWN0cyAnbGluZScgfCAnYmFyJyB8ICdzdGFjaycgfCAndGlsZWQnO1xuICB0aXRsZT86IElUZEFjY2VwdGVkTWFnaWNUeXBlcztcbiAgaWNvbj86IElUZEFjY2VwdGVkTWFnaWNUeXBlcztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgb3B0aW9uPzoge1xuICAgIGxpbmU/OiBvYmplY3Q7XG4gICAgYmFyPzogb2JqZWN0O1xuICAgIHN0YWNrPzogb2JqZWN0O1xuICAgIHRpbGVkPzogb2JqZWN0O1xuICB9O1xuICBzZXJpZXNJbmRleD86IHtcbiAgICBsaW5lPzogYW55W107XG4gICAgYmFyPzogYW55W107XG4gICAgc3RhY2s/OiBhbnlbXTtcbiAgICB0aWxlZD86IGFueVtdO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEJydXNoIHtcbiAgdHlwZT86IGFueVtdO1xuICBpY29uPzogSVRkQWNjZXB0ZWRCcnVzaFR5cGVzO1xuICB0aXRsZT86IElUZEFjY2VwdGVkQnJ1c2hUeXBlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUb29sYm94RmVhdHVyZSB7XG4gIHNhdmVBc0ltYWdlPzogSVRkU2F2ZUFzSW1hZ2U7XG4gIHJlc3RvcmU/OiBJVGRSZXN0b3JlO1xuICBkYXRhVmlldz86IElUZERhdGFWaWV3O1xuICBkYXRhWm9vbT86IElUZERhdGFab29tO1xuICBtYWdpY1R5cGU/OiBJVGRNYWdpY1R5cGU7XG4gIGJydXNoPzogSVRkQnJ1c2g7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW3RkVmlld0RhdGFGb3JtYXR0ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFZpZXdEYXRhRm9ybWF0dGVyRGlyZWN0aXZlIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXRvb2xib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJveC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0VG9vbGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ3Nob3cnKSBzaG93OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCduYW1lJykgdHJpZ2dlcjogc3RyaW5nO1xuICBASW5wdXQoJ29yaWVudCcpIG9yaWVudDogVGRUb29sYm94T3JpZW50O1xuICBASW5wdXQoJ2l0ZW1TaXplJykgaXRlbVNpemU6IG51bWJlcjtcbiAgQElucHV0KCdpdGVtR2FwJykgaXRlbUdhcDogbnVtYmVyO1xuICBASW5wdXQoJ3Nob3dUaXRsZScpIHNob3dUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgnZmVhdHVyZScpIGZlYXR1cmU6IElUZFRvb2xib3hGZWF0dXJlO1xuICBASW5wdXQoJ2ljb25TdHlsZScpIGljb25TdHlsZTogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ3RyYW5zaXRpb25EdXJhdGlvbicpIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyID0gMC41O1xuICBASW5wdXQoJ2xlZnQnKSBsZWZ0OiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgndG9wJykgdG9wOiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgncmlnaHQnKSByaWdodDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoJ2JvdHRvbScpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoJ3dpZHRoJykgd2lkdGg6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCdoZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcblxuICBAQ29udGVudENoaWxkKFRkQ2hhcnRWaWV3RGF0YUZvcm1hdHRlckRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiwgc3RhdGljOiBmYWxzZSB9KVxuICBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndG9vbGJveENvbnRlbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBmdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGVja0Zvcm1hdHRlclRlbXBsYXRlKCk7XG5cbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKFxuICAgICAgdGhpcy5fc3RhdGUsXG4gICAgICB7XG4gICAgICAgIHNob3c6IHRoaXMuc2hvdyxcbiAgICAgICAgbmFtZTogdGhpcy50cmlnZ2VyLFxuICAgICAgICBvcmllbnQ6IHRoaXMub3JpZW50LFxuICAgICAgICBpdGVtU2l6ZTogdGhpcy5pdGVtU2l6ZSxcbiAgICAgICAgaXRlbUdhcDogdGhpcy5pdGVtR2FwLFxuICAgICAgICBzaG93VGl0bGU6IHRoaXMuc2hvd1RpdGxlLFxuICAgICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgICAgZmVhdHVyZTogdGhpcy5mZWF0dXJlLFxuICAgICAgICBpY29uU3R5bGU6IHRoaXMuaWNvblN0eWxlLFxuICAgICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgICB6OiB0aGlzLnosXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgfSxcbiAgICAgIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSxcbiAgICApO1xuICAgIC8vIHNldCB0b29sYm94IGNvbmZpZ3VyYXRpb24gaW4gcGFyZW50IGNoYXJ0IGFuZCByZW5kZXIgbmV3IGNvbmZpZ3VyYXRpb25zXG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2Uuc2V0T3B0aW9uKCd0b29sYm94JywgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5jbGVhck9wdGlvbigndG9vbGJveCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hlY2tGb3JtYXR0ZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtYXR0ZXJUZW1wbGF0ZSkge1xuICAgICAgdGhpcy5mZWF0dXJlID0ge1xuICAgICAgICAuLi50aGlzLmZlYXR1cmUsXG4gICAgICAgIGRhdGFWaWV3OiB7XG4gICAgICAgICAgLi4udGhpcy5mZWF0dXJlLmRhdGFWaWV3LFxuICAgICAgICAgIG9wdGlvblRvQ29udGVudDogdGhpcy5fb3B0aW9uVG9Db250ZW50Rm9ybWF0dGVyKCksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29wdGlvblRvQ29udGVudEZvcm1hdHRlcigpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUw7XG4gICAgfTtcbiAgfVxufVxuIl19