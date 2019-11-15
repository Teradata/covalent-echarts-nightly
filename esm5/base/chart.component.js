/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, } from '@angular/core';
import { Subject, fromEvent, merge, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import * as echarts from 'echarts/lib/echarts';
import { TdChartOptionsService, CHART_PROVIDER } from './chart-options.service';
import { assignDefined } from './utils';
var TdChartComponent = /** @class */ (function () {
    function TdChartComponent(_changeDetectorRef, _elementRef, _optionsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._optionsService = _optionsService;
        this._destroy = new Subject();
        this._widthSubject = new Subject();
        this._heightSubject = new Subject();
        this._state = {};
        this._options = {};
        /**
         * config?: any;
         * Sets the JS config object if you choose to not use the property inputs.
         * Note: [config] input properties will override input values
         * https://ecomfe.github.io/echarts-doc/public/en/option.html
         */
        this.config = {};
        /**
         * renderer: 'svg' | 'canvas'
         * sets the rendering mode for the chart.
         * defaults to 'canvas'
         * https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Render%20by%20Canvas%20or%20SVG
         */
        this.renderer = 'canvas';
        this.chartClick = new EventEmitter();
        this.chartDblclick = new EventEmitter();
        this.chartContextmenu = new EventEmitter();
        this.magicTypeChanged = new EventEmitter();
        this.dataViewChanged = new EventEmitter();
        this.datazoom = new EventEmitter();
        this.restore = new EventEmitter();
    }
    Object.defineProperty(TdChartComponent.prototype, "instance", {
        /**
         * returns the echarts instance
         */
        get: /**
         * returns the echarts instance
         * @return {?}
         */
        function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdChartComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this._initializeChart();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    TdChartComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this._instance) {
            // destroy and reinitialize chart only when `renderer`, `themeName` and `group` changes
            if (changes.renderer || changes.themeName || changes.group) {
                this._disposeChart();
                this._initializeChart();
            }
            else {
                this.render();
            }
        }
    };
    /**
     * @return {?}
     */
    TdChartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._disposeChart();
        this._destroy.unsubscribe();
    };
    /**
     * @return {?}
     */
    TdChartComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this._instance) {
            this._instance.setOption(assignDefined(this._state, {
                grid: {
                    show: true,
                    left: '20',
                    right: '20',
                    bottom: (this.config.toolbox && typeof this.config.toolbox.bottom === 'number') ||
                        (this._options.toolbox && typeof this._options.toolbox.bottom === 'number')
                        ? '40'
                        : '10',
                    top: (this.config.toolbox && typeof this.config.toolbox.top === 'number') ||
                        (this._options.toolbox && typeof this._options.toolbox.top === 'number')
                        ? '40'
                        : '10',
                    containLabel: true,
                },
            }, this._options, this.config ? this.config : {}), true);
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * @private
     * @return {?}
     */
    TdChartComponent.prototype._initializeChart = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._instance = echarts.init(this._elementRef.nativeElement, this.themeName, {
            renderer: this.renderer,
        });
        fromEvent(this._instance, 'click')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.chartClick.next(params);
        }));
        fromEvent(this._instance, 'dblclick')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.chartDblclick.next(params);
        }));
        fromEvent(this._instance, 'contextmenu')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.chartContextmenu.next(params);
        }));
        fromEvent(this._instance, 'magictypechanged')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.magicTypeChanged.next(params);
        }));
        fromEvent(this._instance, 'dataviewchanged')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.dataViewChanged.next(params);
        }));
        fromEvent(this._instance, 'datazoom')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.datazoom.next(params);
        }));
        fromEvent(this._instance, 'restore')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        function (params) {
            _this.restore.next(params);
        }));
        if (this.group) {
            this._instance.group = this.group;
            echarts.connect(this.group);
            this._changeDetectorRef.markForCheck();
        }
        merge(fromEvent(window, 'resize').pipe(debounceTime(100)), this._widthSubject.asObservable().pipe(distinctUntilChanged()), this._heightSubject.asObservable().pipe(distinctUntilChanged()))
            .pipe(takeUntil(this._destroy), debounceTime(100))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this._instance) {
                _this._instance.resize();
                _this._changeDetectorRef.markForCheck();
            }
        }));
        this._optionsService
            .listen()
            .pipe(tap((/**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            assignDefined(_this._options, options);
        })), debounceTime(0), takeUntil(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.render();
        }));
        timer(500, 250)
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        function () {
            if (_this._elementRef && _this._elementRef.nativeElement) {
                _this._widthSubject.next(((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().width);
                _this._heightSubject.next(((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().height);
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    TdChartComponent.prototype._disposeChart = /**
     * @private
     * @return {?}
     */
    function () {
        if (this._instance) {
            this._instance.clear();
            echarts.dispose(this._instance);
        }
        this._destroy.next(true);
    };
    TdChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [CHART_PROVIDER],
                    styles: [":host{display:block;width:100%}"]
                }] }
    ];
    /** @nocollapse */
    TdChartComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: TdChartOptionsService }
    ]; };
    TdChartComponent.propDecorators = {
        config: [{ type: Input }],
        group: [{ type: Input }],
        themeName: [{ type: Input }],
        renderer: [{ type: Input }],
        chartClick: [{ type: Output }],
        chartDblclick: [{ type: Output }],
        chartContextmenu: [{ type: Output }],
        magicTypeChanged: [{ type: Output }],
        dataViewChanged: [{ type: Output }],
        datazoom: [{ type: Output }],
        restore: [{ type: Output }]
    };
    return TdChartComponent;
}());
export { TdChartComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdChartComponent.prototype._destroy;
    /**
     * @type {?}
     * @private
     */
    TdChartComponent.prototype._widthSubject;
    /**
     * @type {?}
     * @private
     */
    TdChartComponent.prototype._heightSubject;
    /**
     * @type {?}
     * @private
     */
    TdChartComponent.prototype._instance;
    /**
     * @type {?}
     * @private
     */
    TdChartComponent.prototype._state;
    /**
     * @type {?}
     * @private
     */
    TdChartComponent.prototype._options;
    /**
     * config?: any;
     * Sets the JS config object if you choose to not use the property inputs.
     * Note: [config] input properties will override input values
     * https://ecomfe.github.io/echarts-doc/public/en/option.html
     * @type {?}
     */
    TdChartComponent.prototype.config;
    /**
     * group?: string
     * group name in which the chart instance will be connected to
     * https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.connect
     * @type {?}
     */
    TdChartComponent.prototype.group;
    /**
     * themeName?: string
     * theme to be applied into chart instance
     * https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Overview%20of%20Style%20Customization
     * @type {?}
     */
    TdChartComponent.prototype.themeName;
    /**
     * renderer: 'svg' | 'canvas'
     * sets the rendering mode for the chart.
     * defaults to 'canvas'
     * https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Render%20by%20Canvas%20or%20SVG
     * @type {?}
     */
    TdChartComponent.prototype.renderer;
    /** @type {?} */
    TdChartComponent.prototype.chartClick;
    /** @type {?} */
    TdChartComponent.prototype.chartDblclick;
    /** @type {?} */
    TdChartComponent.prototype.chartContextmenu;
    /** @type {?} */
    TdChartComponent.prototype.magicTypeChanged;
    /** @type {?} */
    TdChartComponent.prototype.dataViewChanged;
    /** @type {?} */
    TdChartComponent.prototype.datazoom;
    /** @type {?} */
    TdChartComponent.prototype.restore;
    /**
     * @type {?}
     * @private
     */
    TdChartComponent.prototype._changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    TdChartComponent.prototype._elementRef;
    /**
     * @type {?}
     * @private
     */
    TdChartComponent.prototype._optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvIiwic291cmNlcyI6WyJiYXNlL2NoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsVUFBVSxFQUNWLGlCQUFpQixHQUtsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBGLE9BQU8sS0FBSyxPQUFPLE1BQU0scUJBQXFCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFeEM7SUE4REUsMEJBQ1Usa0JBQXFDLEVBQ3JDLFdBQXVCLEVBQ3ZCLGVBQXNDO1FBRnRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBekR4QyxhQUFRLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDcEQsa0JBQWEsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUN2RCxtQkFBYyxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBV3hELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFRLEVBQUUsQ0FBQzs7Ozs7OztRQVFsQixXQUFNLEdBQVEsRUFBRSxDQUFDOzs7Ozs7O1FBc0JqQixhQUFRLEdBQXFCLFFBQVEsQ0FBQztR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ckUsNENBQXdFOztJQUN4RSw0Q0FBd0U7O0lBQ3hFLDJDQUF1RTs7SUFDdkUsb0NBQWdFOztJQUNoRSxtQ0FBK0Q7Ozs7O0lBRzdELDhDQUE2Qzs7Ozs7SUFDN0MsdUNBQStCOzs7OztJQUMvQiwyQ0FBOEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZWNoYXJ0cyBmcm9tICdlY2hhcnRzL2xpYi9lY2hhcnRzJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLCBDSEFSVF9QUk9WSURFUiB9IGZyb20gJy4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlVXJsczogWycuL2NoYXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtDSEFSVF9QUk9WSURFUl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2Rlc3Ryb3k6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIF93aWR0aFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfaGVpZ2h0U3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgX2luc3RhbmNlOiBhbnk7XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGVjaGFydHMgaW5zdGFuY2VcbiAgICovXG4gIGdldCBpbnN0YW5jZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XG5cbiAgLyoqXG4gICAqIGNvbmZpZz86IGFueTtcbiAgICogU2V0cyB0aGUgSlMgY29uZmlnIG9iamVjdCBpZiB5b3UgY2hvb3NlIHRvIG5vdCB1c2UgdGhlIHByb3BlcnR5IGlucHV0cy5cbiAgICogTm90ZTogW2NvbmZpZ10gaW5wdXQgcHJvcGVydGllcyB3aWxsIG92ZXJyaWRlIGlucHV0IHZhbHVlc1xuICAgKiBodHRwczovL2Vjb21mZS5naXRodWIuaW8vZWNoYXJ0cy1kb2MvcHVibGljL2VuL29wdGlvbi5odG1sXG4gICAqL1xuICBASW5wdXQoKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIC8qKlxuICAgKiBncm91cD86IHN0cmluZ1xuICAgKiBncm91cCBuYW1lIGluIHdoaWNoIHRoZSBjaGFydCBpbnN0YW5jZSB3aWxsIGJlIGNvbm5lY3RlZCB0b1xuICAgKiBodHRwczovL2Vjb21mZS5naXRodWIuaW8vZWNoYXJ0cy1kb2MvcHVibGljL2VuL2FwaS5odG1sI2VjaGFydHMuY29ubmVjdFxuICAgKi9cbiAgQElucHV0KCkgZ3JvdXA6IHN0cmluZztcblxuICAvKipcbiAgICogdGhlbWVOYW1lPzogc3RyaW5nXG4gICAqIHRoZW1lIHRvIGJlIGFwcGxpZWQgaW50byBjaGFydCBpbnN0YW5jZVxuICAgKiBodHRwczovL2Vjb21mZS5naXRodWIuaW8vZWNoYXJ0cy1kb2MvcHVibGljL2VuL3R1dG9yaWFsLmh0bWwjT3ZlcnZpZXclMjBvZiUyMFN0eWxlJTIwQ3VzdG9taXphdGlvblxuICAgKi9cbiAgQElucHV0KCkgdGhlbWVOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHJlbmRlcmVyOiAnc3ZnJyB8ICdjYW52YXMnXG4gICAqIHNldHMgdGhlIHJlbmRlcmluZyBtb2RlIGZvciB0aGUgY2hhcnQuXG4gICAqIGRlZmF1bHRzIHRvICdjYW52YXMnXG4gICAqIGh0dHBzOi8vZWNvbWZlLmdpdGh1Yi5pby9lY2hhcnRzLWRvYy9wdWJsaWMvZW4vdHV0b3JpYWwuaHRtbCNSZW5kZXIlMjBieSUyMENhbnZhcyUyMG9yJTIwU1ZHXG4gICAqL1xuICBASW5wdXQoKSByZW5kZXJlcjogJ2NhbnZhcycgfCAnc3ZnJyA9ICdjYW52YXMnO1xuXG4gIEBPdXRwdXQoKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgY2hhcnREYmxjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYXJ0Q29udGV4dG1lbnU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBtYWdpY1R5cGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGF0YVZpZXdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgZGF0YXpvb206IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSByZXN0b3JlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZUNoYXJ0KCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAvLyBkZXN0cm95IGFuZCByZWluaXRpYWxpemUgY2hhcnQgb25seSB3aGVuIGByZW5kZXJlcmAsIGB0aGVtZU5hbWVgIGFuZCBgZ3JvdXBgIGNoYW5nZXNcbiAgICAgIGlmIChjaGFuZ2VzLnJlbmRlcmVyIHx8IGNoYW5nZXMudGhlbWVOYW1lIHx8IGNoYW5nZXMuZ3JvdXApIHtcbiAgICAgICAgdGhpcy5fZGlzcG9zZUNoYXJ0KCk7XG4gICAgICAgIHRoaXMuX2luaXRpYWxpemVDaGFydCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kaXNwb3NlQ2hhcnQoKTtcbiAgICB0aGlzLl9kZXN0cm95LnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5zZXRPcHRpb24oXG4gICAgICAgIGFzc2lnbkRlZmluZWQoXG4gICAgICAgICAgdGhpcy5fc3RhdGUsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgICBsZWZ0OiAnMjAnLFxuICAgICAgICAgICAgICByaWdodDogJzIwJyxcbiAgICAgICAgICAgICAgYm90dG9tOlxuICAgICAgICAgICAgICAgICh0aGlzLmNvbmZpZy50b29sYm94ICYmIHR5cGVvZiB0aGlzLmNvbmZpZy50b29sYm94LmJvdHRvbSA9PT0gJ251bWJlcicpIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuX29wdGlvbnMudG9vbGJveCAmJiB0eXBlb2YgdGhpcy5fb3B0aW9ucy50b29sYm94LmJvdHRvbSA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgICA/ICc0MCdcbiAgICAgICAgICAgICAgICAgIDogJzEwJyxcbiAgICAgICAgICAgICAgdG9wOlxuICAgICAgICAgICAgICAgICh0aGlzLmNvbmZpZy50b29sYm94ICYmIHR5cGVvZiB0aGlzLmNvbmZpZy50b29sYm94LnRvcCA9PT0gJ251bWJlcicpIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuX29wdGlvbnMudG9vbGJveCAmJiB0eXBlb2YgdGhpcy5fb3B0aW9ucy50b29sYm94LnRvcCA9PT0gJ251bWJlcicpXG4gICAgICAgICAgICAgICAgICA/ICc0MCdcbiAgICAgICAgICAgICAgICAgIDogJzEwJyxcbiAgICAgICAgICAgICAgY29udGFpbkxhYmVsOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRoaXMuX29wdGlvbnMsXG4gICAgICAgICAgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LFxuICAgICAgICApLFxuICAgICAgICB0cnVlLFxuICAgICAgKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2luaXRpYWxpemVDaGFydCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnN0YW5jZSA9IGVjaGFydHMuaW5pdCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMudGhlbWVOYW1lLCB7XG4gICAgICByZW5kZXJlcjogdGhpcy5yZW5kZXJlcixcbiAgICB9KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdjbGljaycpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmNoYXJ0Q2xpY2submV4dChwYXJhbXMpO1xuICAgICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnZGJsY2xpY2snKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5jaGFydERibGNsaWNrLm5leHQocGFyYW1zKTtcbiAgICAgIH0pO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2NvbnRleHRtZW51JylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuY2hhcnRDb250ZXh0bWVudS5uZXh0KHBhcmFtcyk7XG4gICAgICB9KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdtYWdpY3R5cGVjaGFuZ2VkJylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubWFnaWNUeXBlQ2hhbmdlZC5uZXh0KHBhcmFtcyk7XG4gICAgICB9KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdkYXRhdmlld2NoYW5nZWQnKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhVmlld0NoYW5nZWQubmV4dChwYXJhbXMpO1xuICAgICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnZGF0YXpvb20nKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5kYXRhem9vbS5uZXh0KHBhcmFtcyk7XG4gICAgICB9KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdyZXN0b3JlJylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMucmVzdG9yZS5uZXh0KHBhcmFtcyk7XG4gICAgICB9KTtcbiAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgdGhpcy5faW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICAgICAgZWNoYXJ0cy5jb25uZWN0KHRoaXMuZ3JvdXApO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoZGVib3VuY2VUaW1lKDEwMCkpLFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSksXG4gICAgICB0aGlzLl9oZWlnaHRTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSksXG4gICAgKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLCBkZWJvdW5jZVRpbWUoMTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICB0aGlzLl9pbnN0YW5jZS5yZXNpemUoKTtcbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2VcbiAgICAgIC5saXN0ZW4oKVxuICAgICAgLnBpcGUoXG4gICAgICAgIHRhcCgob3B0aW9uczogYW55KSA9PiB7XG4gICAgICAgICAgYXNzaWduRGVmaW5lZCh0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgfSksXG4gICAgICAgIGRlYm91bmNlVGltZSgwKSxcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9KTtcbiAgICB0aW1lcig1MDAsIDI1MClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLl93aWR0aFN1YmplY3QubmV4dCgoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpO1xuICAgICAgICAgIHRoaXMuX2hlaWdodFN1YmplY3QubmV4dCgoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9kaXNwb3NlQ2hhcnQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5jbGVhcigpO1xuICAgICAgZWNoYXJ0cy5kaXNwb3NlKHRoaXMuX2luc3RhbmNlKTtcbiAgICB9XG4gICAgdGhpcy5fZGVzdHJveS5uZXh0KHRydWUpO1xuICB9XG59XG4iXX0=