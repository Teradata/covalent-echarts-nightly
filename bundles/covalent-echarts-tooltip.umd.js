(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('echarts/lib/component/tooltip'), require('@covalent/echarts/base')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/tooltip', ['exports', '@angular/core', '@angular/common', 'echarts/lib/component/tooltip', '@covalent/echarts/base'], factory) :
    (global = global || self, factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.tooltip = {}), global.ng.core, global.ng.common, null, global.covalent.echarts.base));
}(this, function (exports, core, common, tooltip, base) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
         * @private
         * @return {?}
         */
        TdChartTooltipComponent.prototype._setOptions = /**
         * @private
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
        };
        /**
         * @private
         * @return {?}
         */
        TdChartTooltipComponent.prototype._removeOption = /**
         * @private
         * @return {?}
         */
        function () {
            this._optionsService.clearOption('tooltip');
        };
        /**
         * @private
         * @return {?}
         */
        TdChartTooltipComponent.prototype._formatter = /**
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            return (/**
             * @param {?} params
             * @param {?} ticket
             * @param {?} callback
             * @return {?}
             */
            function (params, ticket, callback) {
                _this._context = {
                    $implicit: params,
                    ticket: ticket,
                };
                // timeout set since we need to set the HTML at the end of the angular lifecycle when
                // the tooltip delay is more than 0
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    callback(ticket, ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML);
                }));
                _this._changeDetectorRef.markForCheck();
                return ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML;
            });
        };
        TdChartTooltipComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-tooltip',
                        template: "<ng-template #tooltipContent [ngTemplateOutlet]=\"formatterTemplate\" [ngTemplateOutletContext]=\"_context\"></ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdChartTooltipComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: base.TdChartOptionsService }
        ]; };
        TdChartTooltipComponent.propDecorators = {
            config: [{ type: core.Input }],
            show: [{ type: core.Input }],
            trigger: [{ type: core.Input }],
            axisPointer: [{ type: core.Input }],
            showContent: [{ type: core.Input }],
            alwaysShowContent: [{ type: core.Input }],
            triggerOn: [{ type: core.Input }],
            showDelay: [{ type: core.Input }],
            hideDelay: [{ type: core.Input }],
            enterable: [{ type: core.Input }],
            renderMode: [{ type: core.Input }],
            confine: [{ type: core.Input }],
            transitionDuration: [{ type: core.Input }],
            position: [{ type: core.Input }],
            formatter: [{ type: core.Input }],
            backgroundColor: [{ type: core.Input }],
            borderColor: [{ type: core.Input }],
            borderWidth: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            textStyle: [{ type: core.Input }],
            extraCssText: [{ type: core.Input }],
            formatterTemplate: [{ type: core.ContentChild, args: [TdChartTooltipFormatterDirective, { read: core.TemplateRef, static: false },] }],
            fullTemplate: [{ type: core.ViewChild, args: ['tooltipContent', { static: true },] }]
        };
        return TdChartTooltipComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
         * @private
         * @return {?}
         */
        TdSeriesTooltipComponent.prototype._setOptions = /**
         * @private
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
                formatter: this.formatter ? this.formatter : this.formatterTemplate ? this._formatter() : undefined,
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
         * @private
         * @return {?}
         */
        TdSeriesTooltipComponent.prototype._formatter = /**
         * Formatter for tooltip
         *
         * @private
         * @return {?}
         */
        function () {
            var _this = this;
            return (/**
             * @param {?} params
             * @param {?} ticket
             * @param {?} callback
             * @return {?}
             */
            function (params, ticket, callback) {
                _this._context = {
                    $implicit: params,
                    ticket: ticket,
                };
                // timeout set since we need to set the HTML at the end of the angular lifecycle when
                // the tooltip delay is more than 0
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    callback(ticket, ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML);
                }));
                _this._changeDetectorRef.markForCheck();
                return ((/** @type {?} */ (_this._elementRef.nativeElement))).innerHTML;
            });
        };
        /**
         * @private
         * @return {?}
         */
        TdSeriesTooltipComponent.prototype._removeOption = /**
         * @private
         * @return {?}
         */
        function () {
            this._seriesComponent.removeStateOption('tooltip');
        };
        TdSeriesTooltipComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'td-chart-series-tooltip',
                        template: "<ng-template #tooltipContent [ngTemplateOutlet]=\"formatterTemplate\" [ngTemplateOutletContext]=\"_context\"></ng-template>\n",
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        TdSeriesTooltipComponent.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef },
            { type: core.ElementRef },
            { type: base.TdSeriesComponent }
        ]; };
        TdSeriesTooltipComponent.propDecorators = {
            config: [{ type: core.Input }],
            formatter: [{ type: core.Input }],
            position: [{ type: core.Input }],
            backgroundColor: [{ type: core.Input }],
            borderColor: [{ type: core.Input }],
            borderWidth: [{ type: core.Input }],
            padding: [{ type: core.Input }],
            textStyle: [{ type: core.Input }],
            extraCssText: [{ type: core.Input }],
            formatterTemplate: [{ type: core.ContentChild, args: [TdChartTooltipFormatterDirective, { read: core.TemplateRef, static: false },] }],
            fullTemplate: [{ type: core.ViewChild, args: ['tooltipContent', { static: true },] }]
        };
        return TdSeriesTooltipComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        imports: [common.CommonModule],
                        declarations: [TOOLTIP_MODULE_COMPONENTS],
                        exports: [TOOLTIP_MODULE_COMPONENTS],
                    },] }
        ];
        return CovalentTooltipEchartsModule;
    }());

    exports.CovalentTooltipEchartsModule = CovalentTooltipEchartsModule;
    exports.TOOLTIP_MODULE_COMPONENTS = TOOLTIP_MODULE_COMPONENTS;
    exports.TdChartTooltipComponent = TdChartTooltipComponent;
    exports.TdChartTooltipFormatterDirective = TdChartTooltipFormatterDirective;
    exports.TdSeriesTooltipComponent = TdSeriesTooltipComponent;
    exports.TdTooltipContext = TdTooltipContext;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=covalent-echarts-tooltip.umd.js.map
