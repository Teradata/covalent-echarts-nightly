import { __assign } from 'tslib';
import { Component, Input, Directive, TemplateRef, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, ContentChild, ViewChild, NgModule } from '@angular/core';
import { TdChartOptionsService, assignDefined } from '@covalent/echarts/base';
import { CommonModule } from '@angular/common';
import 'echarts/lib/component/toolbox';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
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
     * @return {?}
     */
    TdChartToolboxComponent.prototype._setOptions = /**
     * @return {?}
     */
    function () {
        this._checkFormatterTemplate();
        /** @type {?} */
        var config = assignDefined(this._state, this.config ? this.config : {}, {
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
        });
        // set toolbox configuration in parent chart and render new configurations
        this._optionsService.setOption('toolbox', config);
    };
    /**
     * @return {?}
     */
    TdChartToolboxComponent.prototype._removeOption = /**
     * @return {?}
     */
    function () {
        this._optionsService.clearOption('toolbox');
    };
    /**
     * @return {?}
     */
    TdChartToolboxComponent.prototype._checkFormatterTemplate = /**
     * @return {?}
     */
    function () {
        if (this.formatterTemplate) {
            this.feature = __assign({}, this.feature, { dataView: __assign({}, this.feature.dataView, { optionToContent: this._optionToContentFormatter() }) });
        }
    };
    /**
     * @return {?}
     */
    TdChartToolboxComponent.prototype._optionToContentFormatter = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return function () {
            _this._changeDetectorRef.markForCheck();
            return ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML;
        };
    };
    TdChartToolboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-toolbox',
                    template: "<ng-template #toolboxContent\n            [ngTemplateOutlet]=\"formatterTemplate\">\n</ng-template>",
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
        formatterTemplate: [{ type: ContentChild, args: [TdChartViewDataFormatterDirective, { read: TemplateRef },] }],
        fullTemplate: [{ type: ViewChild, args: ['toolboxContent',] }]
    };
    return TdChartToolboxComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var TOOLBOX_MODULE_COMPONENTS = [
    TdChartToolboxComponent,
    TdChartViewDataFormatterDirective,
];
var CovalentToolboxEchartsModule = /** @class */ (function () {
    function CovalentToolboxEchartsModule() {
    }
    CovalentToolboxEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        TOOLBOX_MODULE_COMPONENTS,
                    ],
                    exports: [
                        TOOLBOX_MODULE_COMPONENTS,
                    ],
                },] }
    ];
    return CovalentToolboxEchartsModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { TOOLBOX_MODULE_COMPONENTS, CovalentToolboxEchartsModule, TdChartViewDataFormatterDirective, TdChartToolboxComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy10b29sYm94LmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sYm94L3Rvb2xib3guY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sYm94L3Rvb2xib3gubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIERpcmVjdGl2ZSxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT25DaGFuZ2VzLFxuICBDb250ZW50Q2hpbGQsXG4gIFZpZXdDaGlsZCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHtcbiAgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBhc3NpZ25EZWZpbmVkLFxuICBJVGRMYWJlbCxcbiAgSVRkU2hhZG93LFxuICBJVGRJdGVtU3R5bGUsXG4gIFRkVGV4dFBvc2l0aW9uLFxuICBUZFRleHRBbGlnbixcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbmV4cG9ydCB0eXBlIFRkVG9vbGJveE9yaWVudCA9ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCc7XG5leHBvcnQgdHlwZSBUZEltYWdlVHlwZSA9ICdwbmcnIHwgJ2pwZWcnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElUZEFjY2VwdGVkQnJ1c2hUeXBlcyB7XG4gIHJlY3Q/OiBzdHJpbmc7XG4gIHBvbHlnb24/OiBzdHJpbmc7XG4gIGxpbmVYPzogc3RyaW5nO1xuICBsaW5lWT86IHN0cmluZztcbiAga2VlcD86IHN0cmluZztcbiAgY2xlYXI/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQWNjZXB0ZWRNYWdpY1R5cGVzIHtcbiAgbGluZT86IHN0cmluZztcbiAgYmFyPzogc3RyaW5nO1xuICBzdGFjaz86IHN0cmluZztcbiAgdGlsZWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVG9vbGJveEljb25FbXBoYXNpcyBleHRlbmRzIElUZEl0ZW1TdHlsZSwgSVRkU2hhZG93IHt9XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRmVhdHVyZUljb25TdHlsZSBleHRlbmRzIElUZEl0ZW1TdHlsZSwgSVRkU2hhZG93IHtcbiAgdGV4dFBvc2l0aW9uPzogVGRUZXh0UG9zaXRpb247XG4gIHRleHRBbGlnbj86IFRkVGV4dEFsaWduO1xuICBlbXBoYXNpcz86IElUZFRvb2xib3hJY29uRW1waGFzaXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkWm9vbVRpdGxlcyB7XG4gIHpvb20/OiBzdHJpbmc7XG4gIGJhY2s/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2F2ZUFzSW1hZ2Uge1xuICB0eXBlPzogVGRJbWFnZVR5cGU7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGJhY2tncm91bmRDb2xvcj86IGFueTtcbiAgZXhjbHVkZUNvbXBvbmVudHM/OiBzdHJpbmdbXTsgLy8gZGVmYXVsdHMgdG8gWyd0b29sYm94J11cbiAgc2hvdz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICBwaXhlbFJhdGlvPzogbnVtYmVyO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFJlc3RvcmUge1xuICBzaG93PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVZpZXcge1xuICBzaG93PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIHJlYWRPbmx5PzogYm9vbGVhbjtcbiAgb3B0aW9uVG9Db250ZW50PzogRnVuY3Rpb247XG4gIGNvbnRlbnRUb09wdGlvbj86IEZ1bmN0aW9uO1xuICBsYW5nPzogc3RyaW5nW107IC8vIERlZmF1bHRzIHRvIENoaW5lc2UsIHRoZXJlIGFyZSAzIG5hbWVzIGluIGRhdGEgdmlldywgd2hpY2ggYXJlIFsnZGF0YSB2aWV3JywgJ3R1cm4gb2ZmJyBhbmQgJ3JlZnJlc2gnXS5cbiAgdGV4dGFyZWFDb2xvcj86IHN0cmluZztcbiAgdGV4dGFyZWFCb3JkZXJDb2xvcj86IHN0cmluZztcbiAgdGV4dENvbG9yPzogc3RyaW5nO1xuICBidXR0b25Db2xvcj86IHN0cmluZztcbiAgYnV0dG9uVGV4dENvbG9yPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFab29tIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHRpdGxlPzogSVRkWm9vbVRpdGxlcztcbiAgaWNvbj86IElUZFpvb21UaXRsZXM7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIHhBeGlzSW5kZXg/OiBudW1iZXIgfCBudW1iZXJbXSB8IGJvb2xlYW47XG4gIHlBeGlzSW5kZXg/OiBudW1iZXIgfCBudW1iZXJbXSB8IGJvb2xlYW47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkTWFnaWNUeXBlIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHR5cGU/OiBzdHJpbmdbXTsgLy8gb25seSBleHBlY3RzICdsaW5lJyB8ICdiYXInIHwgJ3N0YWNrJyB8ICd0aWxlZCc7XG4gIHRpdGxlPzogSVRkQWNjZXB0ZWRNYWdpY1R5cGVzO1xuICBpY29uPzogSVRkQWNjZXB0ZWRNYWdpY1R5cGVzO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICBvcHRpb24/OiB7XG4gICAgbGluZT86IG9iamVjdDtcbiAgICBiYXI/OiBvYmplY3Q7XG4gICAgc3RhY2s/OiBvYmplY3Q7XG4gICAgdGlsZWQ/OiBvYmplY3Q7XG4gIH07XG4gIHNlcmllc0luZGV4Pzoge1xuICAgIGxpbmU/OiBhbnlbXTtcbiAgICBiYXI/OiBhbnlbXTtcbiAgICBzdGFjaz86IGFueVtdO1xuICAgIHRpbGVkPzogYW55W107XG4gIH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQnJ1c2gge1xuICB0eXBlPzogYW55W107XG4gIGljb24/OiBJVGRBY2NlcHRlZEJydXNoVHlwZXM7XG4gIHRpdGxlPzogSVRkQWNjZXB0ZWRCcnVzaFR5cGVzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRvb2xib3hGZWF0dXJlIHtcbiAgc2F2ZUFzSW1hZ2U/OiBJVGRTYXZlQXNJbWFnZTtcbiAgcmVzdG9yZT86IElUZFJlc3RvcmU7XG4gIGRhdGFWaWV3PzogSVRkRGF0YVZpZXc7XG4gIGRhdGFab29tPzogSVRkRGF0YVpvb207XG4gIG1hZ2ljVHlwZT86IElUZE1hZ2ljVHlwZTtcbiAgYnJ1c2g/OiBJVGRCcnVzaDtcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbdGRWaWV3RGF0YUZvcm1hdHRlcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0Vmlld0RhdGFGb3JtYXR0ZXJEaXJlY3RpdmUge31cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtdG9vbGJveCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sYm94LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRUb29sYm94Q29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ25hbWUnKSB0cmlnZ2VyOiBzdHJpbmc7XG4gIEBJbnB1dCgnb3JpZW50Jykgb3JpZW50OiBUZFRvb2xib3hPcmllbnQ7XG4gIEBJbnB1dCgnaXRlbVNpemUnKSBpdGVtU2l6ZTogbnVtYmVyO1xuICBASW5wdXQoJ2l0ZW1HYXAnKSBpdGVtR2FwOiBudW1iZXI7XG4gIEBJbnB1dCgnc2hvd1RpdGxlJykgc2hvd1RpdGxlOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCdsYWJlbCcpIGxhYmVsOiBJVGRMYWJlbDtcbiAgQElucHV0KCdmZWF0dXJlJykgZmVhdHVyZTogSVRkVG9vbGJveEZlYXR1cmU7XG4gIEBJbnB1dCgnaWNvblN0eWxlJykgaWNvblN0eWxlOiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgndHJhbnNpdGlvbkR1cmF0aW9uJykgdHJhbnNpdGlvbkR1cmF0aW9uOiBudW1iZXIgPSAwLjU7XG4gIEBJbnB1dCgnbGVmdCcpIGxlZnQ6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCdyaWdodCcpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgnYm90dG9tJykgYm90dG9tOiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuXG4gIEBDb250ZW50Q2hpbGQoVGRDaGFydFZpZXdEYXRhRm9ybWF0dGVyRGlyZWN0aXZlLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXG4gIGZvcm1hdHRlclRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuICBAVmlld0NoaWxkKCd0b29sYm94Q29udGVudCcpIGZ1bGxUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuXG4gICAgdGhpcy5fY2hlY2tGb3JtYXR0ZXJUZW1wbGF0ZSgpO1xuXG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZChcbiAgICAgIHRoaXMuX3N0YXRlLFxuICAgICAgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LFxuICAgICAge1xuICAgICAgICBzaG93OiB0aGlzLnNob3csXG4gICAgICAgIG5hbWU6IHRoaXMudHJpZ2dlcixcbiAgICAgICAgb3JpZW50OiB0aGlzLm9yaWVudCxcbiAgICAgICAgaXRlbVNpemU6IHRoaXMuaXRlbVNpemUsXG4gICAgICAgIGl0ZW1HYXA6IHRoaXMuaXRlbUdhcCxcbiAgICAgICAgc2hvd1RpdGxlOiB0aGlzLnNob3dUaXRsZSxcbiAgICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICAgIGZlYXR1cmU6IHRoaXMuZmVhdHVyZSxcbiAgICAgICAgaWNvblN0eWxlOiB0aGlzLmljb25TdHlsZSxcbiAgICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgICAgejogdGhpcy56LFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb246IHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICAgIHJpZ2h0OiB0aGlzLnJpZ2h0LFxuICAgICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIH0sXG4gICAgKTtcbiAgICAvLyBzZXQgdG9vbGJveCBjb25maWd1cmF0aW9uIGluIHBhcmVudCBjaGFydCBhbmQgcmVuZGVyIG5ldyBjb25maWd1cmF0aW9uc1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnNldE9wdGlvbigndG9vbGJveCcsIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UuY2xlYXJPcHRpb24oJ3Rvb2xib3gnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NoZWNrRm9ybWF0dGVyVGVtcGxhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybWF0dGVyVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuZmVhdHVyZSA9IHtcbiAgICAgICAgLi4udGhpcy5mZWF0dXJlLFxuICAgICAgICBkYXRhVmlldzoge1xuICAgICAgICAgIC4uLnRoaXMuZmVhdHVyZS5kYXRhVmlldyxcbiAgICAgICAgICBvcHRpb25Ub0NvbnRlbnQ6IHRoaXMuX29wdGlvblRvQ29udGVudEZvcm1hdHRlcigpLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9vcHRpb25Ub0NvbnRlbnRGb3JtYXR0ZXIoKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIHJldHVybiAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MO1xuICAgIH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgJ2VjaGFydHMvbGliL2NvbXBvbmVudC90b29sYm94JztcblxuaW1wb3J0IHsgVGRDaGFydFRvb2xib3hDb21wb25lbnQsIFRkQ2hhcnRWaWV3RGF0YUZvcm1hdHRlckRpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbGJveC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgVE9PTEJPWF9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRUb29sYm94Q29tcG9uZW50LFxuICBUZENoYXJ0Vmlld0RhdGFGb3JtYXR0ZXJEaXJlY3RpdmUsXG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUT09MQk9YX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVE9PTEJPWF9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRUb29sYm94RWNoYXJ0c01vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQXVJQTtLQUdpRDs7Z0JBSGhELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2lCQUM3Qzs7SUFDK0Msd0NBQUM7Q0FIakQsSUFHaUQ7O0lBbUMvQyxpQ0FDVSxrQkFBcUMsRUFDckMsV0FBdUIsRUFDdkIsZUFBc0M7UUFGdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUE5QnhDLFdB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