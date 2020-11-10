(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/component/toolbox'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/toolbox', ['exports', '@angular/core', '@angular/common', 'echarts/lib/component/toolbox', '@covalent/echarts/base'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.toolbox = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, (function (exports, core, common, toolbox, base) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: toolbox.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /**
     * @record
     */
    function ITdAcceptedBrushTypes() { }
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
    function ITdAcceptedMagicTypes() { }
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
    function ITdToolboxIconEmphasis() { }
    /**
     * @record
     */
    function ITdFeatureIconStyle() { }
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
    function ITdZoomTitles() { }
    if (false) {
        /** @type {?|undefined} */
        ITdZoomTitles.prototype.zoom;
        /** @type {?|undefined} */
        ITdZoomTitles.prototype.back;
    }
    /**
     * @record
     */
    function ITdSaveAsImage() { }
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
    function ITdRestore() { }
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
    function ITdDataView() { }
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
    function ITdDataZoom() { }
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
    function ITdMagicType() { }
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
    function ITdBrush() { }
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
    function ITdToolboxFeature() { }
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
        return TdChartViewDataFormatterDirective;
    }());
    TdChartViewDataFormatterDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: 'ng-template[tdViewDataFormatter]',
                },] }
    ];
    var TdChartToolboxComponent = /** @class */ (function () {
        /**
         * @param {?} _changeDetectorRef
         * @param {?} _elementRef
         * @param {?} _optionsService
         */
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
        TdChartToolboxComponent.prototype.ngOnChanges = function () {
            this._setOptions();
        };
        /**
         * @return {?}
         */
        TdChartToolboxComponent.prototype.ngOnDestroy = function () {
            this._removeOption();
        };
        /**
         * @private
         * @return {?}
         */
        TdChartToolboxComponent.prototype._setOptions = function () {
            this._checkFormatterTemplate();
            /** @type {?} */
            var config = base.assignDefined(this._state, {
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
        TdChartToolboxComponent.prototype._removeOption = function () {
            this._optionsService.clearOption('toolbox');
        };
        /**
         * @private
         * @return {?}
         */
        TdChartToolboxComponent.prototype._checkFormatterTemplate = function () {
            if (this.formatterTemplate) {
                this.feature = Object.assign(Object.assign({}, this.feature), { dataView: Object.assign(Object.assign({}, this.feature.dataView), { optionToContent: this._optionToContentFormatter() }) });
            }
        };
        /**
         * @private
         * @return {?}
         */
        TdChartToolboxComponent.prototype._optionToContentFormatter = function () {
            var _this = this;
            return ( /**
             * @return {?}
             */function () {
                _this._changeDetectorRef.markForCheck();
                return (( /** @type {?} */(_this._elementRef.nativeElement))).innerHTML;
            });
        };
        return TdChartToolboxComponent;
    }());
    TdChartToolboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'td-chart-toolbox',
                    template: "<ng-template #toolboxContent [ngTemplateOutlet]=\"formatterTemplate\"></ng-template>\n",
                    changeDetection: core.ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TdChartToolboxComponent.ctorParameters = function () { return [
        { type: core.ChangeDetectorRef },
        { type: core.ElementRef },
        { type: base.TdChartOptionsService }
    ]; };
    TdChartToolboxComponent.propDecorators = {
        config: [{ type: core.Input }],
        show: [{ type: core.Input }],
        trigger: [{ type: core.Input }],
        orient: [{ type: core.Input }],
        itemSize: [{ type: core.Input }],
        itemGap: [{ type: core.Input }],
        showTitle: [{ type: core.Input }],
        label: [{ type: core.Input }],
        feature: [{ type: core.Input }],
        iconStyle: [{ type: core.Input }],
        zlevel: [{ type: core.Input }],
        z: [{ type: core.Input }],
        transitionDuration: [{ type: core.Input }],
        left: [{ type: core.Input }],
        top: [{ type: core.Input }],
        right: [{ type: core.Input }],
        bottom: [{ type: core.Input }],
        width: [{ type: core.Input }],
        height: [{ type: core.Input }],
        formatterTemplate: [{ type: core.ContentChild, args: [TdChartViewDataFormatterDirective, { read: core.TemplateRef },] }],
        fullTemplate: [{ type: core.ViewChild, args: ['toolboxContent', { static: true },] }]
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

    /**
     * @fileoverview added by tsickle
     * Generated from: toolbox.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TOOLBOX_MODULE_COMPONENTS = [TdChartToolboxComponent, TdChartViewDataFormatterDirective];
    var CovalentToolboxEchartsModule = /** @class */ (function () {
        function CovalentToolboxEchartsModule() {
        }
        return CovalentToolboxEchartsModule;
    }());
    CovalentToolboxEchartsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [common.CommonModule],
                    declarations: [TOOLBOX_MODULE_COMPONENTS],
                    exports: [TOOLBOX_MODULE_COMPONENTS],
                },] }
    ];

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: covalent-echarts-toolbox.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.CovalentToolboxEchartsModule = CovalentToolboxEchartsModule;
    exports.TOOLBOX_MODULE_COMPONENTS = TOOLBOX_MODULE_COMPONENTS;
    exports.TdChartToolboxComponent = TdChartToolboxComponent;
    exports.TdChartViewDataFormatterDirective = TdChartViewDataFormatterDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=covalent-echarts-toolbox.umd.js.map
