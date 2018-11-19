(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@covalent/echarts/base'), require('@angular/common'), require('echarts/lib/component/tooltip')) :
    typeof define === 'function' && define.amd ? define('@covalent/echarts/tooltip', ['exports', '@angular/core', '@covalent/echarts/base', '@angular/common', 'echarts/lib/component/tooltip'], factory) :
    (factory((global.covalent = global.covalent || {}, global.covalent.echarts = global.covalent.echarts || {}, global.covalent.echarts.tooltip = {}),global.ng.core,global.covalent.echarts.base,global.ng.common));
}(this, (function (exports,core,base,common) { 'use strict';

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
                var config = base.assignDefined(this._state, this.config ? this.config : {}, {
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
                });
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
                var config = base.assignDefined(this._state, this.config ? this.config : {}, {
                    position: this.position,
                    backgroundColor: this.backgroundColor,
                    borderColor: this.borderColor,
                    borderWidth: this.borderWidth,
                    padding: this.padding,
                    textStyle: this.textStyle,
                    extraCssText: this.extraCssText,
                    formatter: this.formatter ? this.formatter : (this.formatterTemplate ? this._formatter() : undefined),
                });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy10b29sdGlwLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC50cyIsIm5nOi8vQGNvdmFsZW50L2VjaGFydHMvdG9vbHRpcC9zZXJpZXMtdG9vbHRpcC5jb21wb25lbnQudHMiLCJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkNoYW5nZXMsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIGFzc2lnbkRlZmluZWQsXG4gIFRkVG9vbHRpcFRyaWdnZXIsXG4gIFRkVG9vbHRpcFRyaWdnZXJPbixcbiAgVGRUb29sdGlwUG9zaXRpb24sXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgY2xhc3MgVGRUb29sdGlwQ29udGV4dCB7XG4gICRpbXBsaWNpdDogYW55O1xuICB0aWNrZXQ6IHN0cmluZztcbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnbmctdGVtcGxhdGVbdGRUb29sdGlwRm9ybWF0dGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlIHtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRUb29sdGlwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcblxuICBfY29udGV4dDogVGRUb29sdGlwQ29udGV4dCA9IG5ldyBUZFRvb2x0aXBDb250ZXh0KCk7XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ3RyaWdnZXInKSB0cmlnZ2VyOiBUZFRvb2x0aXBUcmlnZ2VyID0gICdheGlzJztcbiAgQElucHV0KCdheGlzUG9pbnRlcicpIGF4aXNQb2ludGVyOiBhbnk7XG4gIEBJbnB1dCgnc2hvd0NvbnRlbnQnKSBzaG93Q29udGVudDogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnYWx3YXlzU2hvd0NvbnRlbnQnKSBhbHdheXNTaG93Q29udGVudDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3RyaWdnZXJPbicpIHRyaWdnZXJPbjogVGRUb29sdGlwVHJpZ2dlck9uID0gJ21vdXNlbW92ZXxjbGljayc7XG4gIEBJbnB1dCgnc2hvd0RlbGF5Jykgc2hvd0RlbGF5OiBudW1iZXIgPSAwO1xuICBASW5wdXQoJ2hpZGVEZWxheScpIGhpZGVEZWxheTogbnVtYmVyID0gMDtcbiAgQElucHV0KCdlbnRlcmFibGUnKSBlbnRlcmFibGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCdyZW5kZXJNb2RlJykgcmVuZGVyTW9kZTogJ2h0bWwnIHwgJ3JpY2hUZXh0JztcbiAgQElucHV0KCdjb25maW5lJykgY29uZmluZTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoJ3RyYW5zaXRpb25EdXJhdGlvbicpIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyID0gMC41O1xuICBASW5wdXQoJ3Bvc2l0aW9uJykgcG9zaXRpb246IFRkVG9vbHRpcFBvc2l0aW9uOyAvLyBzZXJpZXNcbiAgQElucHV0KCdmb3JtYXR0ZXInKSBmb3JtYXR0ZXI6IHN0cmluZyB8IEZ1bmN0aW9uOyAvLyBzZXJpZXNcbiAgQElucHV0KCdiYWNrZ3JvdW5kQ29sb3InKSBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9ICdyZ2JhKDUwLDUwLDUwLDAuNyknOyAvLyBzZXJpZXNcbiAgQElucHV0KCdib3JkZXJDb2xvcicpIGJvcmRlckNvbG9yOiBzdHJpbmcgPSAnIzMzMyc7IC8vIHNlcmllc1xuICBASW5wdXQoJ2JvcmRlcldpZHRoJykgYm9yZGVyV2lkdGg6IG51bWJlciA9IDA7IC8vIHNlcmllc1xuICBASW5wdXQoJ3BhZGRpbmcnKSBwYWRkaW5nOiBudW1iZXIgPSA1OyAvLyBzZXJpZXNcbiAgQElucHV0KCd0ZXh0U3R5bGUnKSB0ZXh0U3R5bGU6IGFueSA9IHsgLy8gc2VyaWVzXG4gICAgY29sb3I6ICcjRkZGJyxcbiAgfTtcbiAgQElucHV0KCdleHRyYUNzc1RleHQnKSBleHRyYUNzc1RleHQ6IHN0cmluZzsgLy8gc2VyaWVzXG5cbiAgQENvbnRlbnRDaGlsZChUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwge3JlYWQ6IFRlbXBsYXRlUmVmfSkgZm9ybWF0dGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3Rvb2x0aXBDb250ZW50JykgZnVsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwge1xuICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgdHJpZ2dlcjogdGhpcy50cmlnZ2VyLFxuICAgICAgYXhpc1BvaW50ZXI6IHRoaXMuYXhpc1BvaW50ZXIsXG4gICAgICBzaG93Q29udGVudDogdGhpcy5zaG93Q29udGVudCxcbiAgICAgIGFsd2F5c1Nob3dDb250ZW50OiB0aGlzLmFsd2F5c1Nob3dDb250ZW50LFxuICAgICAgdHJpZ2dlck9uOiB0aGlzLnRyaWdnZXJPbixcbiAgICAgIHNob3dEZWxheTogdGhpcy5zaG93RGVsYXksXG4gICAgICBoaWRlRGVsYXk6IHRoaXMuaGlkZURlbGF5LFxuICAgICAgZW50ZXJhYmxlOiB0aGlzLmVudGVyYWJsZSxcbiAgICAgIGNvbmZpbmU6IHRoaXMuY29uZmluZSxcbiAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIGZvcm1hdHRlcjogdGhpcy5mb3JtYXR0ZXIgPyB0aGlzLmZvcm1hdHRlciA6ICh0aGlzLmZvcm1hdHRlclRlbXBsYXRlID8gdGhpcy5fZm9ybWF0dGVyKCkgOiB1bmRlZmluZWQpLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmJhY2tncm91bmRDb2xvcixcbiAgICAgIGJvcmRlckNvbG9yOiB0aGlzLmJvcmRlckNvbG9yLFxuICAgICAgYm9yZGVyV2lkdGg6IHRoaXMuYm9yZGVyV2lkdGgsXG4gICAgICBwYWRkaW5nOiB0aGlzLnBhZGRpbmcsXG4gICAgICB0ZXh0U3R5bGU6IHRoaXMudGV4dFN0eWxlLFxuICAgICAgZXh0cmFDc3NUZXh0OiB0aGlzLmV4dHJhQ3NzVGV4dCxcbiAgICB9KTtcbiAgICAvLyBzZXQgdG9vbHRpcCBjb25maWd1cmF0aW9uIGluIHBhcmVudCBjaGFydCBhbmQgcmVuZGVyIG5ldyBjb25maWd1cmF0aW9uc1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnNldE9wdGlvbigndG9vbHRpcCcsIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UuY2xlYXJPcHRpb24oJ3Rvb2x0aXAnKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Zvcm1hdHRlcigpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuIChwYXJhbXM6IGFueSwgdGlja2V0OiBhbnksIGNhbGxiYWNrOiAodGlja2V0OiBzdHJpbmcsIGh0bWw6IHN0cmluZykgPT4gdm9pZCkgPT4ge1xuICAgICAgdGhpcy5fY29udGV4dCA9IHtcbiAgICAgICAgJGltcGxpY2l0OiBwYXJhbXMsXG4gICAgICAgIHRpY2tldDogdGlja2V0LFxuICAgICAgfTtcbiAgICAgIC8vIHRpbWVvdXQgc2V0IHNpbmNlIHdlIG5lZWQgdG8gc2V0IHRoZSBIVE1MIGF0IHRoZSBlbmQgb2YgdGhlIGFuZ3VsYXIgbGlmZWN5Y2xlIHdoZW5cbiAgICAgIC8vIHRoZSB0b29sdGlwIGRlbGF5IGlzIG1vcmUgdGhhbiAwXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2FsbGJhY2sodGlja2V0LCAoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuaW5uZXJIVE1MKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTDtcbiAgICB9O1xuICB9XG5cbn1cbiIsImltcG9ydCB7IFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDb250ZW50Q2hpbGQsXG4gIFZpZXdDaGlsZCxcbiAgVGVtcGxhdGVSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkLCBUZFNlcmllc0NvbXBvbmVudCB9IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5pbXBvcnQgeyBUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSwgVGRUb29sdGlwQ29udGV4dCB9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXMtdG9vbHRpcCcsXG4gIHRlbXBsYXRlVXJsOiAnLi90b29sdGlwLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRkU2VyaWVzVG9vbHRpcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG5cbiAgX2NvbnRleHQ6IFRkVG9vbHRpcENvbnRleHQgPSBuZXcgVGRUb29sdGlwQ29udGV4dCgpO1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnk7XG5cbiAgQElucHV0KCdmb3JtYXR0ZXInKSBmb3JtYXR0ZXI6IGFueTtcbiAgLy8gUGFyZW50IHRvb2x0aXAgdHJpZ2dlciBtdXN0IGJlIHNldCB0byAnaXRlbScgdG8gcmVuZGVyIHRoZXNlIHByb3BlcnRpZXNcbiAgQElucHV0KCdwb3NpdGlvbicpIHBvc2l0aW9uOiBzdHJpbmcgfCBzdHJpbmdbXSB8IG51bWJlcltdO1xuICBASW5wdXQoJ2JhY2tncm91bmRDb2xvcicpIGJhY2tncm91bmRDb2xvcjogc3RyaW5nID0gJ3JnYmEoNTAsNTAsNTAsMC43KSc7XG4gIEBJbnB1dCgnYm9yZGVyQ29sb3InKSBib3JkZXJDb2xvcjogc3RyaW5nID0gJyMzMzMnO1xuICBASW5wdXQoJ2JvcmRlcldpZHRoJykgYm9yZGVyV2lkdGg6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgncGFkZGluZycpIHBhZGRpbmc6IG51bWJlciA9IDU7XG4gIEBJbnB1dCgndGV4dFN0eWxlJykgdGV4dFN0eWxlOiBhbnkgPSB7XG4gICAgY29sb3I6ICcjRkZGJyxcbiAgfTtcbiAgQElucHV0KCdleHRyYUNzc1RleHQnKSBleHRyYUNzc1RleHQ6IHN0cmluZztcblxuICBAQ29udGVudENoaWxkKFRkQ2hhcnRUb29sdGlwRm9ybWF0dGVyRGlyZWN0aXZlLCB7cmVhZDogVGVtcGxhdGVSZWZ9KSBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndG9vbHRpcENvbnRlbnQnKSBmdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9zZXJpZXNDb21wb25lbnQ6IFRkU2VyaWVzQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LCB7XG4gICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICBib3JkZXJDb2xvcjogdGhpcy5ib3JkZXJDb2xvcixcbiAgICAgIGJvcmRlcldpZHRoOiB0aGlzLmJvcmRlcldpZHRoLFxuICAgICAgcGFkZGluZzogdGhpcy5wYWRkaW5nLFxuICAgICAgdGV4dFN0eWxlOiB0aGlzLnRleHRTdHlsZSxcbiAgICAgIGV4dHJhQ3NzVGV4dDogdGhpcy5leHRyYUNzc1RleHQsXG4gICAgICBmb3JtYXR0ZXI6IHRoaXMuZm9ybWF0dGVyID8gdGhpcy5mb3JtYXR0ZXIgOiAodGhpcy5mb3JtYXR0ZXJUZW1wbGF0ZSA/IHRoaXMuX2Zvcm1hdHRlcigpIDogdW5kZWZpbmVkKSxcbiAgICB9KTtcbiAgICAvLyBzZXQgc2VyaWVzIHRvb2x0aXAgY29uZmlndXJhdGlvbiBpbiBwYXJlbnQgY2hhcnQgYW5kIHJlbmRlciBuZXcgY29uZmlndXJhdGlvbnNcbiAgICB0aGlzLl9zZXJpZXNDb21wb25lbnQuc2V0U3RhdGVPcHRpb24oJ3Rvb2x0aXAnLCBjb25maWcpO1xuICB9XG4gIFxuICAvKipcbiAgICogRm9ybWF0dGVyIGZvciB0b29sdGlwXG4gICAqXG4gICAqL1xuICBwcml2YXRlIF9mb3JtYXR0ZXIoKTogRnVuY3Rpb24ge1xuICAgIHJldHVybiAocGFyYW1zOiBhbnksIHRpY2tldDogYW55LCBjYWxsYmFjazogKHRpY2tldDogc3RyaW5nLCBodG1sOiBzdHJpbmcpID0+IHZvaWQpID0+IHtcbiAgICAgIHRoaXMuX2NvbnRleHQgPSB7XG4gICAgICAgICRpbXBsaWNpdDogcGFyYW1zLFxuICAgICAgICB0aWNrZXQ6IHRpY2tldCxcbiAgICAgIH07XG4gICAgICAvLyB0aW1lb3V0IHNldCBzaW5jZSB3ZSBuZWVkIHRvIHNldCB0aGUgSFRNTCBhdCB0aGUgZW5kIG9mIHRoZSBhbmd1bGFyIGxpZmVjeWNsZSB3aGVuXG4gICAgICAvLyB0aGUgdG9vbHRpcCBkZWxheSBpcyBtb3JlIHRoYW4gMFxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhbGxiYWNrKHRpY2tldCwgKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUw7XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXJpZXNDb21wb25lbnQucmVtb3ZlU3RhdGVPcHRpb24oJ3Rvb2x0aXAnKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jb21wb25lbnQvdG9vbHRpcCc7XG5cbmltcG9ydCB7IFRkQ2hhcnRUb29sdGlwQ29tcG9uZW50LCBUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSB9IGZyb20gJy4vdG9vbHRpcC5jb21wb25lbnQnO1xuaW1wb3J0IHsgVGRTZXJpZXNUb29sdGlwQ29tcG9uZW50IH0gZnJvbSAnLi9zZXJpZXMtdG9vbHRpcC5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgVE9PTFRJUF9NT0RVTEVfQ09NUE9ORU5UUzogVHlwZTxhbnk+W10gPSBbXG4gIFRkQ2hhcnRUb29sdGlwQ29tcG9uZW50LFxuICBUZENoYXJ0VG9vbHRpcEZvcm1hdHRlckRpcmVjdGl2ZSxcbiAgVGRTZXJpZXNUb29sdGlwQ29tcG9uZW50LFxuXTtcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVE9PTFRJUF9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFRPT0xUSVBfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIENvdmFsZW50VG9vbHRpcEVjaGFydHNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiRGlyZWN0aXZlIiwiYXNzaWduRGVmaW5lZCIsIkNvbXBvbmVudCIsIkNoYW5nZURldGVjdGlvblN0cmF0ZWd5IiwiQ2hhbmdlRGV0ZWN0b3JSZWYiLCJFbGVtZW50UmVmIiwiVGRDaGFydE9wdGlvbnNTZXJ2aWNlIiwiSW5wdXQiLCJDb250ZW50Q2hpbGQiLCJUZW1wbGF0ZVJlZiIsIlZpZXdDaGlsZCIsIlRkU2VyaWVzQ29tcG9uZW50IiwiTmdNb2R1bGUiLCJDb21tb25Nb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtRQXNCQTtTQUdDO1FBQUQsdUJBQUM7SUFBRCxDQUFDLElBQUE7O1FBRUQ7U0FJQzs7b0JBSkFBLGNBQVMsU0FBQzt3QkFDVCxRQUFRLEVBQUUsaUNBQWlDO3FCQUM1Qzs7UUFFRCx1Q0FBQztLQUpELElBSUM7O1FBeUNDLGlDQUFvQixrQkFBcUMsRUFDckMsV0FBdUIsRUFDdkIsZUFBc0M7WUFGdEMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtZQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtZQUN2QixvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7WUFsQ2xELFdBQU0sR0FBUSxFQUFFLENBQUM7WUFFekIsYUFBUSxHQUFxQixJQUFJLGdCQUFnQixFQUFFLENBQUM7WUFFbkMsV0FBTSxHQUFRLEVBQUUsQ0FBQztZQUVuQixTQUFJLEdBQVksSUFBSSxDQUFD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