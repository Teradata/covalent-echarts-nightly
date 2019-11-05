(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/component/toolbox'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/toolbox', ['exports', '@angular/core', '@angular/common', 'echarts/lib/component/toolbox', '@covalent/echarts/base'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.toolbox = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, function (exports, core, common, toolbox, base) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TdChartViewDataFormatterDirective = /** @class */ (function () {
        function TdChartViewDataFormatterDirective() {
        }
        TdChartViewDataFormatterDirective.decorators = [
            { type: core.Directive, args: [{
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
                this.feature = __assign({}, this.feature, { dataView: __assign({}, this.feature.dataView, { optionToContent: this._optionToContentFormatter() }) });
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
            formatterTemplate: [{ type: core.ContentChild, args: [TdChartViewDataFormatterDirective, { read: core.TemplateRef, static: false },] }],
            fullTemplate: [{ type: core.ViewChild, args: ['toolboxContent', { static: true },] }]
        };
        return TdChartToolboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TOOLBOX_MODULE_COMPONENTS = [TdChartToolboxComponent, TdChartViewDataFormatterDirective];
    var CovalentToolboxEchartsModule = /** @class */ (function () {
        function CovalentToolboxEchartsModule() {
        }
        CovalentToolboxEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        declarations: [TOOLBOX_MODULE_COMPONENTS],
                        exports: [TOOLBOX_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentToolboxEchartsModule;
    }());

    exports.CovalentToolboxEchartsModule = CovalentToolboxEchartsModule;
    exports.TOOLBOX_MODULE_COMPONENTS = TOOLBOX_MODULE_COMPONENTS;
    exports.TdChartToolboxComponent = TdChartToolboxComponent;
    exports.TdChartViewDataFormatterDirective = TdChartViewDataFormatterDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-echarts-toolbox.umd.js.map
