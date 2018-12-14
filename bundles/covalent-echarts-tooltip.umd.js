(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('echarts/lib/component/tooltip'), require('@angular/core'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/tooltip', ['exports', '@angular/common', 'echarts/lib/component/tooltip', '@angular/core', '@covalent/echarts/base'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.tooltip = {}),global.ng.common,null,global.ng.core,global.covalent.echarts.base));
}(this, (function (exports,common,tooltip,core,base) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdTooltipContext = /** @class */ (function () {
        function TdTooltipContext() {
        }
        return TdTooltipContext;
    }());
    var TdChartTooltipFormatterDirective = /** @class */ (function () {
        function TdChartTooltipFormatterDirective() {
        }
        TdChartTooltipFormatterDirective.decorators = [
            { type: core.Directive, args: [{
                        selector: 'ng-template[tdTooltipFormatter]',
                    },] }
        ];
        return TdChartTooltipFormatterDirective;
    }());
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
                var config = base.assignDefined(this._state, {
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
                    formatter: this.formatter ? this.formatter : (this.formatterTemplate ? this._formatter() : undefined),
                    backgroundColor: this.backgroundColor,
                    borderColor: this.borderColor,
                    borderWidth: this.borderWidth,
                    padding: this.padding,
                    textStyle: this.textStyle,
                    extraCssText: this.extraCssText,
                }, this.config ? this.config : {});
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
                        callback(ticket, (( /** @type {?} */(_this._elementRef.nativeElement))).innerHTML);
                    });
                    _this._changeDetectorRef.markForCheck();
                    return (( /** @type {?} */(_this._elementRef.nativeElement))).innerHTML;
                };
            };
        TdChartTooltipComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-tooltip',
                        template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdChartTooltipComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.ElementRef },
                { type: base.TdChartOptionsService }
            ];
        };
        TdChartTooltipComponent.propDecorators = {
            config: [{ type: core.Input, args: ['config',] }],
            show: [{ type: core.Input, args: ['show',] }],
            trigger: [{ type: core.Input, args: ['trigger',] }],
            axisPointer: [{ type: core.Input, args: ['axisPointer',] }],
            showContent: [{ type: core.Input, args: ['showContent',] }],
            alwaysShowContent: [{ type: core.Input, args: ['alwaysShowContent',] }],
            triggerOn: [{ type: core.Input, args: ['triggerOn',] }],
            showDelay: [{ type: core.Input, args: ['showDelay',] }],
            hideDelay: [{ type: core.Input, args: ['hideDelay',] }],
            enterable: [{ type: core.Input, args: ['enterable',] }],
            renderMode: [{ type: core.Input, args: ['renderMode',] }],
            confine: [{ type: core.Input, args: ['confine',] }],
            transitionDuration: [{ type: core.Input, args: ['transitionDuration',] }],
            position: [{ type: core.Input, args: ['position',] }],
            formatter: [{ type: core.Input, args: ['formatter',] }],
            backgroundColor: [{ type: core.Input, args: ['backgroundColor',] }],
            borderColor: [{ type: core.Input, args: ['borderColor',] }],
            borderWidth: [{ type: core.Input, args: ['borderWidth',] }],
            padding: [{ type: core.Input, args: ['padding',] }],
            textStyle: [{ type: core.Input, args: ['textStyle',] }],
            extraCssText: [{ type: core.Input, args: ['extraCssText',] }],
            formatterTemplate: [{ type: core.ContentChild, args: [TdChartTooltipFormatterDirective, { read: core.TemplateRef },] }],
            fullTemplate: [{ type: core.ViewChild, args: ['tooltipContent',] }]
        };
        return TdChartTooltipComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    var TdSeriesTooltipComponent = /** @class */ (function () {
        function TdSeriesTooltipComponent(_changeDetectorRef, _elementRef, _seriesComponent) {
            this._changeDetectorRef = _changeDetectorRef;
            this._elementRef = _elementRef;
            this._seriesComponent = _seriesComponent;
            this._state = {};
            this._context = new TdTooltipContext();
            this.backgroundColor = 'rgba(50,50,50,0.7)';
            this.borderColor = '#333';
            this.borderWidth = 0;
            this.padding = 5;
            this.textStyle = {
                color: '#FFF',
            };
        }
        /**
         * @return {?}
         */
        TdSeriesTooltipComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this._setOptions();
            };
        /**
         * @return {?}
         */
        TdSeriesTooltipComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this._removeOption();
            };
        /**
         * @return {?}
         */
        TdSeriesTooltipComponent.prototype._setOptions = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var config = base.assignDefined(this._state, {
                    position: this.position,
                    backgroundColor: this.backgroundColor,
                    borderColor: this.borderColor,
                    borderWidth: this.borderWidth,
                    padding: this.padding,
                    textStyle: this.textStyle,
                    extraCssText: this.extraCssText,
                    formatter: this.formatter ? this.formatter : (this.formatterTemplate ? this._formatter() : undefined),
                }, this.config ? this.config : {});
                // set series tooltip configuration in parent chart and render new configurations
                this._seriesComponent.setStateOption('tooltip', config);
            };
        /**
         * Formatter for tooltip
         *
         */
        /**
         * Formatter for tooltip
         *
         * @return {?}
         */
        TdSeriesTooltipComponent.prototype._formatter = /**
         * Formatter for tooltip
         *
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
                        callback(ticket, (( /** @type {?} */(_this._elementRef.nativeElement))).innerHTML);
                    });
                    _this._changeDetectorRef.markForCheck();
                    return (( /** @type {?} */(_this._elementRef.nativeElement))).innerHTML;
                };
            };
        /**
         * @return {?}
         */
        TdSeriesTooltipComponent.prototype._removeOption = /**
         * @return {?}
         */
            function () {
                this._seriesComponent.removeStateOption('tooltip');
            };
        TdSeriesTooltipComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series-tooltip',
                        template: "<ng-template #tooltipContent\n            [ngTemplateOutlet]=\"formatterTemplate\"\n            [ngTemplateOutletContext]=\"_context\">\n</ng-template>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdSeriesTooltipComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.ElementRef },
                { type: base.TdSeriesComponent }
            ];
        };
        TdSeriesTooltipComponent.propDecorators = {
            config: [{ type: core.Input, args: ['config',] }],
            formatter: [{ type: core.Input, args: ['formatter',] }],
            position: [{ type: core.Input, args: ['position',] }],
            backgroundColor: [{ type: core.Input, args: ['backgroundColor',] }],
            borderColor: [{ type: core.Input, args: ['borderColor',] }],
            borderWidth: [{ type: core.Input, args: ['borderWidth',] }],
            padding: [{ type: core.Input, args: ['padding',] }],
            textStyle: [{ type: core.Input, args: ['textStyle',] }],
            extraCssText: [{ type: core.Input, args: ['extraCssText',] }],
            formatterTemplate: [{ type: core.ContentChild, args: [TdChartTooltipFormatterDirective, { read: core.TemplateRef },] }],
            fullTemplate: [{ type: core.ViewChild, args: ['tooltipContent',] }]
        };
        return TdSeriesTooltipComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
     */
    /** @type {?} */
    var TOOLTIP_MODULE_COMPONENTS = [
        TdChartTooltipComponent,
        TdChartTooltipFormatterDirective,
        TdSeriesTooltipComponent,
    ];
    var CovalentTooltipEchartsModule = /** @class */ (function () {
        function CovalentTooltipEchartsModule() {
        }
        CovalentTooltipEchartsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                        ],
                        declarations: [
                            TOOLTIP_MODULE_COMPONENTS,
                        ],
                        exports: [
                            TOOLTIP_MODULE_COMPONENTS,
                        ],
                    },] }
        ];
        return CovalentTooltipEchartsModule;
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

    exports.TOOLTIP_MODULE_COMPONENTS = TOOLTIP_MODULE_COMPONENTS;
    exports.CovalentTooltipEchartsModule = CovalentTooltipEchartsModule;
    exports.TdTooltipContext = TdTooltipContext;
    exports.TdChartTooltipFormatterDirective = TdChartTooltipFormatterDirective;
    exports.TdChartTooltipComponent = TdChartTooltipComponent;
    exports.TdSeriesTooltipComponent = TdSeriesTooltipComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=covalent-echarts-tooltip.umd.js.map