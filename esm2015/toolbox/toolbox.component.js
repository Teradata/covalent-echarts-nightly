/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption('toolbox');
    }
    /**
     * @return {?}
     */
    _checkFormatterTemplate() {
        if (this.formatterTemplate) {
            this.feature = Object.assign({}, this.feature, { dataView: Object.assign({}, this.feature.dataView, { optionToContent: this._optionToContentFormatter() }) });
        }
    }
    /**
     * @return {?}
     */
    _optionToContentFormatter() {
        return () => {
            this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (this._elementRef.nativeElement))).innerHTML;
        };
    }
}
TdChartToolboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-toolbox',
                template: "<ng-template #toolboxContent\n            [ngTemplateOutlet]=\"formatterTemplate\">\n</ng-template>",
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
    formatterTemplate: [{ type: ContentChild, args: [TdChartViewDataFormatterDirective, { read: TemplateRef },] }],
    fullTemplate: [{ type: ViewChild, args: ['toolboxContent',] }]
};
if (false) {
    /** @type {?} */
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
    /** @type {?} */
    TdChartToolboxComponent.prototype._changeDetectorRef;
    /** @type {?} */
    TdChartToolboxComponent.prototype._elementRef;
    /** @type {?} */
    TdChartToolboxComponent.prototype._optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sYm94LyIsInNvdXJjZXMiOlsidG9vbGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixpQkFBaUIsRUFFakIsWUFBWSxFQUNaLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGFBQWEsR0FNZCxNQUFNLHdCQUF3QixDQUFDOzs7O0FBS2hDLDJDQU9DOzs7SUFOQyxxQ0FBYzs7SUFDZCx3Q0FBaUI7O0lBQ2pCLHNDQUFlOztJQUNmLHNDQUFlOztJQUNmLHFDQUFjOztJQUNkLHNDQUFlOzs7OztBQUdqQiwyQ0FLQzs7O0lBSkMscUNBQWM7O0lBQ2Qsb0NBQWE7O0lBQ2Isc0NBQWU7O0lBQ2Ysc0NBQWU7Ozs7O0FBR2pCLDRDQUEwRTs7OztBQUUxRSx5Q0FJQzs7O0lBSEMsMkNBQThCOztJQUM5Qix3Q0FBd0I7O0lBQ3hCLHVDQUFrQzs7Ozs7QUFHcEMsbUNBR0M7OztJQUZDLDZCQUFjOztJQUNkLDZCQUFjOzs7OztBQUdoQixvQ0FVQzs7O0lBVEMsOEJBQW1COztJQUNuQiw4QkFBYzs7SUFDZCx5Q0FBc0I7O0lBQ3RCLDJDQUE2Qjs7SUFDN0IsOEJBQWU7O0lBQ2YsK0JBQWU7O0lBQ2YsOEJBQWM7O0lBQ2QsbUNBQWdDOztJQUNoQyxvQ0FBb0I7Ozs7O0FBR3RCLGdDQUtDOzs7SUFKQywwQkFBZTs7SUFDZiwyQkFBZTs7SUFDZiwwQkFBYzs7SUFDZCwrQkFBZ0M7Ozs7O0FBR2xDLGlDQWNDOzs7SUFiQywyQkFBZTs7SUFDZiw0QkFBZTs7SUFDZiwyQkFBYzs7SUFDZCxnQ0FBZ0M7O0lBQ2hDLCtCQUFtQjs7SUFDbkIsc0NBQTJCOztJ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S0FBSyxTQUFDLFdBQVc7cUJBQ2pCLEtBQUssU0FBQyxRQUFRO2dCQUNkLEtBQUssU0FBQyxHQUFHO2lDQUNULEtBQUssU0FBQyxvQkFBb0I7bUJBQzFCLEtBQUssU0FBQyxNQUFNO2tCQUNaLEtBQUssU0FBQyxLQUFLO29CQUNYLEtBQUssU0FBQyxPQUFPO3FCQUNiLEtBQUssU0FBQyxRQUFRO29CQUNkLEtBQUssU0FBQyxPQUFPO3FCQUNiLEtBQUssU0FBQyxRQUFRO2dDQUVkLFlBQVksU0FBQyxpQ0FBaUMsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7MkJBRXJFLFNBQVMsU0FBQyxnQkFBZ0I7Ozs7SUF6QjNCLHlDQUF5Qjs7SUFFekIseUNBQWtDOztJQUVsQyx1Q0FBb0M7O0lBQ3BDLDBDQUErQjs7SUFDL0IseUNBQXlDOztJQUN6QywyQ0FBb0M7O0lBQ3BDLDBDQUFrQzs7SUFDbEMsNENBQThDOztJQUM5Qyx3Q0FBZ0M7O0lBQ2hDLDBDQUE2Qzs7SUFDN0MsNENBQW1EOztJQUNuRCx5Q0FBZ0M7O0lBQ2hDLG9DQUFzQjs7SUFDdEIscURBQThEOztJQUM5RCx1Q0FBOEM7O0lBQzlDLHNDQUE0Qzs7SUFDNUMsd0NBQWdEOztJQUNoRCx5Q0FBa0Q7O0lBQ2xELHdDQUFnRDs7SUFDaEQseUNBQWtEOztJQUVsRCxvREFDb0M7O0lBQ3BDLCtDQUE0RDs7SUFHMUQscURBQTZDOztJQUM3Qyw4Q0FBK0I7O0lBQy9CLGtEQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25DaGFuZ2VzLFxuICBDb250ZW50Q2hpbGQsXG4gIFZpZXdDaGlsZCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBhc3NpZ25EZWZpbmVkLFxuICBJVGRMYWJlbCxcbiAgSVRkU2hhZG93LFxuICBJVGRJdGVtU3R5bGUsXG4gIFRkVGV4dFBvc2l0aW9uLFxuICBUZFRleHRBbGlnbixcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCB0eXBlIFRkVG9vbGJveE9yaWVudCA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG5leHBvcnQgdHlwZSBUZEltYWdlVHlwZSA9ICdwbmcnIHwgJ2pwZWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEFjY2VwdGVkQnJ1c2hUeXBlcyB7XG4gIHJlY3Q/OiBzdHJpbmc7XG4gIHBvbHlnb24/OiBzdHJpbmc7XG4gIGxpbmVYPzogc3RyaW5nO1xuICBsaW5lWT86IHN0cmluZztcbiAga2VlcD86IHN0cmluZztcbiAgY2xlYXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQWNjZXB0ZWRNYWdpY1R5cGVzIHtcbiAgbGluZT86IHN0cmluZztcbiAgYmFyPzogc3RyaW5nO1xuICBzdGFjaz86IHN0cmluZztcbiAgdGlsZWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVG9vbGJveEljb25FbXBoYXNpcyBleHRlbmRzIElUZEl0ZW1TdHlsZSwgSVRkU2hhZG93IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRmVhdHVyZUljb25TdHlsZSBleHRlbmRzIElUZEl0ZW1TdHlsZSwgSVRkU2hhZG93IHtcbiAgdGV4dFBvc2l0aW9uPzogVGRUZXh0UG9zaXRpb247XG4gIHRleHRBbGlnbj86IFRkVGV4dEFsaWduO1xuICBlbXBoYXNpcz86IElUZFRvb2xib3hJY29uRW1waGFzaXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkWm9vbVRpdGxlcyB7XG4gIHpvb20/OiBzdHJpbmc7XG4gIGJhY2s/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2F2ZUFzSW1hZ2Uge1xuICB0eXBlPzogVGRJbWFnZVR5cGU7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGJhY2tncm91bmRDb2xvcj86IGFueTtcbiAgZXhjbHVkZUNvbXBvbmVudHM/OiBzdHJpbmdbXTsgLy8gZGVmYXVsdHMgdG8gWyd0b29sYm94J11cbiAgc2hvdz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICBwaXhlbFJhdGlvPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFJlc3RvcmUge1xuICBzaG93PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVZpZXcge1xuICBzaG93PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgb3B0aW9uVG9Db250ZW50PzogRnVuY3Rpb247XG4gIGNvbnRlbnRUb09wdGlvbj86IEZ1bmN0aW9uO1xuICBsYW5nPzogc3RyaW5nW107IC8vIERlZmF1bHRzIHRvIENoaW5lc2UsIHRoZXJlIGFyZSAzIG5hbWVzIGluIGRhdGEgdmlldywgd2hpY2ggYXJlIFsnZGF0YSB2aWV3JywgJ3R1cm4gb2ZmJyBhbmQgJ3JlZnJlc2gnXS5cbiAgdGV4dGFyZWFDb2xvcj86IHN0cmluZztcbiAgdGV4dGFyZWFCb3JkZXJDb2xvcj86IHN0cmluZztcbiAgdGV4dENvbG9yPzogc3RyaW5nO1xuICBidXR0b25Db2xvcj86IHN0cmluZztcbiAgYnV0dG9uVGV4dENvbG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFab29tIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHRpdGxlPzogSVRkWm9vbVRpdGxlcztcbiAgaWNvbj86IElUZFpvb21UaXRsZXM7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIHhBeGlzSW5kZXg/OiBudW1iZXIgfCBudW1iZXJbXSB8IGJvb2xlYW47XG4gIHlBeGlzSW5kZXg/OiBudW1iZXIgfCBudW1iZXJbXSB8IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTWFnaWNUeXBlIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHR5cGU/OiBzdHJpbmdbXTsgLy8gb25seSBleHBlY3RzICdsaW5lJyB8ICdiYXInIHwgJ3N0YWNrJyB8ICd0aWxlZCc7XG4gIHRpdGxlPzogSVRkQWNjZXB0ZWRNYWdpY1R5cGVzO1xuICBpY29uPzogSVRkQWNjZXB0ZWRNYWdpY1R5cGVzO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICBvcHRpb24/OiB7XG4gICAgbGluZT86IG9iamVjdDtcbiAgICBiYXI/OiBvYmplY3Q7XG4gICAgc3RhY2s/OiBvYmplY3Q7XG4gICAgdGlsZWQ/OiBvYmplY3Q7XG4gIH07XG4gIHNlcmllc0luZGV4Pzoge1xuICAgIGxpbmU/OiBhbnlbXTtcbiAgICBiYXI/OiBhbnlbXTtcbiAgICBzdGFjaz86IGFueVtdO1xuICAgIHRpbGVkPzogYW55W107XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQnJ1c2gge1xuICB0eXBlPzogYW55W107XG4gIGljb24/OiBJVGRBY2NlcHRlZEJydXNoVHlwZXM7XG4gIHRpdGxlPzogSVRkQWNjZXB0ZWRCcnVzaFR5cGVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRvb2xib3hGZWF0dXJlIHtcbiAgc2F2ZUFzSW1hZ2U/OiBJVGRTYXZlQXNJbWFnZTtcbiAgcmVzdG9yZT86IElUZFJlc3RvcmU7XG4gIGRhdGFWaWV3PzogSVRkRGF0YVZpZXc7XG4gIGRhdGFab29tPzogSVRkRGF0YVpvb207XG4gIG1hZ2ljVHlwZT86IElUZE1hZ2ljVHlwZTtcbiAgYnJ1c2g/OiBJVGRCcnVzaDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbdGRWaWV3RGF0YUZvcm1hdHRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0Vmlld0RhdGFGb3JtYXR0ZXJEaXJlY3RpdmUge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtdG9vbGJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYm94LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRUb29sYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ25hbWUnKSB0cmlnZ2VyOiBzdHJpbmc7XG4gIEBJbnB1dCgnb3JpZW50Jykgb3JpZW50OiBUZFRvb2xib3hPcmllbnQ7XG4gIEBJbnB1dCgnaXRlbVNpemUnKSBpdGVtU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoJ2l0ZW1HYXAnKSBpdGVtR2FwOiBudW1iZXI7XG4gIEBJbnB1dCgnc2hvd1RpdGxlJykgc2hvd1RpdGxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCdmZWF0dXJlJykgZmVhdHVyZTogSVRkVG9vbGJveEZlYXR1cmU7XG4gIEBJbnB1dCgnaWNvblN0eWxlJykgaWNvblN0eWxlOiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgndHJhbnNpdGlvbkR1cmF0aW9uJykgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXIgPSAwLjU7XG4gIEBJbnB1dCgnbGVmdCcpIGxlZnQ6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCdyaWdodCcpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgnYm90dG9tJykgYm90dG9tOiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuXG4gIEBDb250ZW50Q2hpbGQoVGRDaGFydFZpZXdEYXRhRm9ybWF0dGVyRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGZvcm1hdHRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd0b29sYm94Q29udGVudCcpIGZ1bGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuXG4gICAgdGhpcy5fY2hlY2tGb3JtYXR0ZXJUZW1wbGF0ZSgpO1xuXG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZChcbiAgICAgIHRoaXMuX3N0YXRlLCB7XG4gICAgICAgIHNob3c6IHRoaXMuc2hvdyxcbiAgICAgICAgbmFtZTogdGhpcy50cmlnZ2VyLFxuICAgICAgICBvcmllbnQ6IHRoaXMub3JpZW50LFxuICAgICAgICBpdGVtU2l6ZTogdGhpcy5pdGVtU2l6ZSxcbiAgICAgICAgaXRlbUdhcDogdGhpcy5pdGVtR2FwLFxuICAgICAgICBzaG93VGl0bGU6IHRoaXMuc2hvd1RpdGxlLFxuICAgICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgICAgZmVhdHVyZTogdGhpcy5mZWF0dXJlLFxuICAgICAgICBpY29uU3R5bGU6IHRoaXMuaWNvblN0eWxlLFxuICAgICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgICB6OiB0aGlzLnosXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgfSxcbiAgICAgIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSxcbiAgICApO1xuICAgIC8vIHNldCB0b29sYm94IGNvbmZpZ3VyYXRpb24gaW4gcGFyZW50IGNoYXJ0IGFuZCByZW5kZXIgbmV3IGNvbmZpZ3VyYXRpb25zXG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2Uuc2V0T3B0aW9uKCd0b29sYm94JywgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5jbGVhck9wdGlvbigndG9vbGJveCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hlY2tGb3JtYXR0ZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtYXR0ZXJUZW1wbGF0ZSkge1xuICAgICAgdGhpcy5mZWF0dXJlID0ge1xuICAgICAgICAuLi50aGlzLmZlYXR1cmUsXG4gICAgICAgIGRhdGFWaWV3OiB7XG4gICAgICAgICAgLi4udGhpcy5mZWF0dXJlLmRhdGFWaWV3LFxuICAgICAgICAgIG9wdGlvblRvQ29udGVudDogdGhpcy5fb3B0aW9uVG9Db250ZW50Rm9ybWF0dGVyKCksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29wdGlvblRvQ29udGVudEZvcm1hdHRlcigpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUw7XG4gICAgfTtcbiAgfVxufVxuIl19