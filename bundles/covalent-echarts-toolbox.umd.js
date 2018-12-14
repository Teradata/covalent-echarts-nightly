(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('echarts/lib/component/toolbox'), require('@angular/core'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/toolbox', ['exports', '@angular/common', 'echarts/lib/component/toolbox', '@angular/core', '@covalent/echarts/base'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.toolbox = {}),global.ng.common,null,global.ng.core,global.covalent.echarts.base));
}(this, (function (exports,common,toolbox,core,base) { 'use strict';

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
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
         * @return {?}
         */
        TdChartToolboxComponent.prototype._setOptions = /**
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
                    return (( /** @type {?} */(_this._elementRef.nativeElement))).innerHTML;
                };
            };
        TdChartToolboxComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-toolbox',
                        template: "<ng-template #toolboxContent\n            [ngTemplateOutlet]=\"formatterTemplate\">\n</ng-template>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdChartToolboxComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.ElementRef },
                { type: base.TdChartOptionsService }
            ];
        };
        TdChartToolboxComponent.propDecorators = {
            config: [{ type: core.Input, args: ['config',] }],
            show: [{ type: core.Input, args: ['show',] }],
            trigger: [{ type: core.Input, args: ['name',] }],
            orient: [{ type: core.Input, args: ['orient',] }],
            itemSize: [{ type: core.Input, args: ['itemSize',] }],
            itemGap: [{ type: core.Input, args: ['itemGap',] }],
            showTitle: [{ type: core.Input, args: ['showTitle',] }],
            label: [{ type: core.Input, args: ['label',] }],
            feature: [{ type: core.Input, args: ['feature',] }],
            iconStyle: [{ type: core.Input, args: ['iconStyle',] }],
            zlevel: [{ type: core.Input, args: ['zlevel',] }],
            z: [{ type: core.Input, args: ['z',] }],
            transitionDuration: [{ type: core.Input, args: ['transitionDuration',] }],
            left: [{ type: core.Input, args: ['left',] }],
            top: [{ type: core.Input, args: ['top',] }],
            right: [{ type: core.Input, args: ['right',] }],
            bottom: [{ type: core.Input, args: ['bottom',] }],
            width: [{ type: core.Input, args: ['width',] }],
            height: [{ type: core.Input, args: ['height',] }],
            formatterTemplate: [{ type: core.ContentChild, args: [TdChartViewDataFormatterDirective, { read: core.TemplateRef },] }],
            fullTemplate: [{ type: core.ViewChild, args: ['toolboxContent',] }]
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
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
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

    exports.TOOLBOX_MODULE_COMPONENTS = TOOLBOX_MODULE_COMPONENTS;
    exports.CovalentToolboxEchartsModule = CovalentToolboxEchartsModule;
    exports.TdChartViewDataFormatterDirective = TdChartViewDataFormatterDirective;
    exports.TdChartToolboxComponent = TdChartToolboxComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-echarts-toolbox.umd.js.map