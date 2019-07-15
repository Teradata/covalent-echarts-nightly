/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
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
                        (this._options.toolbox && typeof this._options.toolbox.bottom === 'number') ? '40' : '10',
                    top: (this.config.toolbox && typeof this.config.toolbox.top === 'number') ||
                        (this._options.toolbox && typeof this._options.toolbox.top === 'number') ? '40' : '10',
                    containLabel: true,
                },
            }, this._options, this.config ? this.config : {}), true);
            this._changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    TdChartComponent.prototype._initializeChart = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._instance = echarts.init(this._elementRef.nativeElement, this.themeName, {
            renderer: this.renderer,
        });
        fromEvent(this._instance, 'click').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.chartClick.next(params);
        });
        fromEvent(this._instance, 'dblclick').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.chartDblclick.next(params);
        });
        fromEvent(this._instance, 'contextmenu').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.chartContextmenu.next(params);
        });
        fromEvent(this._instance, 'magictypechanged').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.magicTypeChanged.next(params);
        });
        fromEvent(this._instance, 'dataviewchanged').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.dataViewChanged.next(params);
        });
        fromEvent(this._instance, 'datazoom').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.datazoom.next(params);
        });
        fromEvent(this._instance, 'restore').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.restore.next(params);
        });
        if (this.group) {
            this._instance.group = this.group;
            echarts.connect(this.group);
            this._changeDetectorRef.markForCheck();
        }
        merge(fromEvent(window, 'resize').pipe(debounceTime(100)), this._widthSubject.asObservable().pipe(distinctUntilChanged()), this._heightSubject.asObservable().pipe(distinctUntilChanged())).pipe(takeUntil(this._destroy), debounceTime(100)).subscribe(function () {
            if (_this._instance) {
                _this._instance.resize();
                _this._changeDetectorRef.markForCheck();
            }
        });
        this._optionsService.listen().pipe(tap(function (options) {
            assignDefined(_this._options, options);
        }), debounceTime(0), takeUntil(this._destroy)).subscribe(function () {
            _this.render();
        });
        timer(500, 250).pipe(takeUntil(this._destroy)).subscribe(function () {
            if (_this._elementRef && _this._elementRef.nativeElement) {
                _this._widthSubject.next(((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().width);
                _this._heightSubject.next(((/** @type {?} */ (_this._elementRef.nativeElement))).getBoundingClientRect().height);
            }
        });
    };
    /**
     * @return {?}
     */
    TdChartComponent.prototype._disposeChart = /**
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
        config: [{ type: Input, args: ['config',] }],
        group: [{ type: Input, args: ['group',] }],
        themeName: [{ type: Input, args: ['themeName',] }],
        renderer: [{ type: Input, args: ['renderer',] }],
        chartClick: [{ type: Output, args: ['chartClick',] }],
        chartDblclick: [{ type: Output, args: ['chartDblclick',] }],
        chartContextmenu: [{ type: Output, args: ['chartContextmenu',] }],
        magicTypeChanged: [{ type: Output, args: ['magicTypeChanged',] }],
        dataViewChanged: [{ type: Output, args: ['dataViewChanged',] }],
        datazoom: [{ type: Output, args: ['datazoom',] }],
        restore: [{ type: Output, args: ['restore',] }]
    };
    return TdChartComponent;
}());
export { TdChartComponent };
if (false) {
    /** @type {?} */
    TdChartComponent.prototype._destroy;
    /** @type {?} */
    TdChartComponent.prototype._widthSubject;
    /** @type {?} */
    TdChartComponent.prototype._heightSubject;
    /** @type {?} */
    TdChartComponent.prototype._instance;
    /** @type {?} */
    TdChartComponent.prototype._state;
    /** @type {?} */
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
    /** @type {?} */
    TdChartComponent.prototype._changeDetectorRef;
    /** @type {?} */
    TdChartComponent.prototype._elementRef;
    /** @type {?} */
    TdChartComponent.prototype._optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvIiwic291cmNlcyI6WyJiYXNlL2NoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsVUFBVSxFQUNWLGlCQUFpQixHQUtsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXBGLE9BQU8sS0FBSyxPQUFPLE1BQU0scUJBQXFCLENBQUM7QUFFL0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hGLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFFeEM7SUErREUsMEJBQW9CLGtCQUFxQyxFQUNyQyxXQUF1QixFQUN2QixlQUFzQztRQUZ0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQXhEbEQsYUFBUSxHQUFxQixJQUFJLE9BQU8sRUFBVyxDQUFDO1FBQ3BELGtCQUFhLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7UUFDdkQsbUJBQWMsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQVd4RCxXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBUSxFQUFFLENBQUM7Ozs7Ozs7UUFRVixXQUFNLEdBQVEsRUFBRSxDQUFDOzs7Ozs7O1FBc0JmLGFBQVEsR0FBcUIsUUFBUSxDQUFDO1FBRW5DLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNyRCxrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3hELHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzlELHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQy9ELG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEUsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3ZELFlBQU8sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztJQUt4RSxDQUFDO0lBaERELHNCQUFJLHNDQUFRO1FBSFo7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7Ozs7SUFnREQsMENBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxzQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLHVGQUF1RjtZQUN2RixJQUFJLE9BQU8sQ0FBQyxRQUFRLElBQUksT0FBTyxDQUFDLFNBQVMsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUMxRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3JCLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUNmO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUIsQ0FBQzs7OztJQUVELGlDQUFNOzs7SUFBTjtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDbEQsSUFBSSxFQUFFO29CQUNKLElBQUksRUFBRSxJQUFJO29CQUNWLElBQUksRUFBRSxJQUFJO29CQUNWLEtBQUssRUFBRSxJQUFJO29CQUNYLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQzt3QkFDekUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBTSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJO29CQUNoRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxRQUFRLENBQUM7d0JBQ25FLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEtBQU0sUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSTtvQkFDN0YsWUFBWSxFQUFFLElBQUk7aUJBQ25CO2FBQ0YsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7SUFFTywyQ0FBZ0I7OztJQUF4QjtRQUFBLGlCQWdGQztRQS9FQyxJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUM1RSxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDeEIsQ0FBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUNyQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QixDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7WUFDdEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQ3hDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVztZQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUNILFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FDM0MsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekIsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFXO1lBQ3RCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLElBQUksQ0FDaEQsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekIsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFXO1lBQ3RCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FDL0MsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FDekIsQ0FBQyxTQUFTLENBQUMsVUFBQyxNQUFXO1lBQ3RCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUN4QyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QixDQUFDLFNBQVMsQ0FBQyxVQUFDLE1BQVc7WUFDdEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUM7UUFDSCxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ3ZDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3pCLENBQUMsU0FBUyxDQUFDLFVBQUMsTUFBVztZQUN0QixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQztRQUNILElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7WUFDbEMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3hDO1FBQ0QsS0FBSyxDQUNILFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM5QixZQUFZLENBQUMsR0FBRyxDQUFDLENBQ2xCLEVBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3BDLG9CQUFvQixFQUFFLENBQ3ZCLEVBQ0QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQ3JDLG9CQUFvQixFQUFFLENBQ3ZCLENBQ0YsQ0FBQyxJQUFJLENBQ0osU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDeEIsWUFBWSxDQUFDLEdBQUcsQ0FBQyxDQUNsQixDQUFDLFNBQVMsQ0FBQztZQUNWLElBQUksS0FBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDeEIsS0FBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3hDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FDaEMsR0FBRyxDQUFDLFVBQUMsT0FBWTtZQUNmLGFBQWEsQ0FBQyxLQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxFQUNGLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFDZixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QixDQUFDLFNBQVMsQ0FBQztZQUNWLEtBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixDQUFDLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUNsQixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUN6QixDQUFDLFNBQVMsQ0FBQztZQUNWLElBQUksS0FBSSxDQUFDLFdBQVcsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtnQkFDdEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQkFBYSxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDckcsS0FBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxtQkFBYSxLQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBQSxDQUFDLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN4RztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7OztJQUVPLHdDQUFhOzs7SUFBckI7UUFDRSxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUN2QixPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7O2dCQW5NRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLFFBQVEsRUFBRSxFQUFFO29CQUVaLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxTQUFTLEVBQUUsQ0FBQyxjQUFjLENBQUM7O2lCQUM1Qjs7OztnQkFyQkMsaUJBQWlCO2dCQURqQixVQUFVO2dCQWFILHFCQUFxQjs7O3lCQWtDM0IsS0FBSyxTQUFDLFFBQVE7d0JBT2QsS0FBSyxTQUFDLE9BQU87NEJBT2IsS0FBSyxTQUFDLFdBQVc7MkJBUWpCLEtBQUssU0FBQyxVQUFVOzZCQUVoQixNQUFNLFNBQUMsWUFBWTtnQ0FDbkIsTUFBTSxTQUFDLGVBQWU7bUNBQ3RCLE1BQU0sU0FBQyxrQkFBa0I7bUNBQ3pCLE1BQU0sU0FBQyxrQkFBa0I7a0NBQ3pCLE1BQU0sU0FBQyxpQkFBaUI7MkJBQ3hCLE1BQU0sU0FBQyxVQUFVOzBCQUNqQixNQUFNLFNBQUMsU0FBUzs7SUF3SW5CLHVCQUFDO0NBQUEsQUFyTUQsSUFxTUM7U0E5TFksZ0JBQWdCOzs7SUFFM0Isb0NBQTREOztJQUM1RCx5Q0FBK0Q7O0lBQy9ELDBDQUFnRTs7SUFFaEUscUNBQXVCOztJQVN2QixrQ0FBeUI7O0lBQ3pCLG9DQUEyQjs7Ozs7Ozs7SUFRM0Isa0NBQWtDOzs7Ozs7O0lBT2xDLGlDQUE4Qjs7Ozs7OztJQU85QixxQ0FBc0M7Ozs7Ozs7O0lBUXRDLG9DQUF5RDs7SUFFekQsc0NBQThFOztJQUM5RSx5Q0FBb0Y7O0lBQ3BGLDRDQUEwRjs7SUFDMUYsNENBQTBGOztJQUMxRiwyQ0FBd0Y7O0lBQ3hGLG9DQUEwRTs7SUFDMUUsbUNBQXdFOztJQUU1RCw4Q0FBNkM7O0lBQzdDLHVDQUErQjs7SUFDL0IsMkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBmcm9tRXZlbnQsIG1lcmdlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGVjaGFydHMgZnJvbSAnZWNoYXJ0cy9saWIvZWNoYXJ0cyc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSwgQ0hBUlRfUFJPVklERVIgfSBmcm9tICcuL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0JyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFydC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbQ0hBUlRfUFJPVklERVJdLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX2Rlc3Ryb3k6IFN1YmplY3Q8Ym9vbGVhbj4gPSBuZXcgU3ViamVjdDxib29sZWFuPigpO1xuICBwcml2YXRlIF93aWR0aFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcbiAgcHJpdmF0ZSBfaGVpZ2h0U3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuXG4gIHByaXZhdGUgX2luc3RhbmNlOiBhbnk7XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdGhlIGVjaGFydHMgaW5zdGFuY2VcbiAgICovXG4gIGdldCBpbnN0YW5jZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XG5cbiAgLyoqXG4gICAqIGNvbmZpZz86IGFueTtcbiAgICogU2V0cyB0aGUgSlMgY29uZmlnIG9iamVjdCBpZiB5b3UgY2hvb3NlIHRvIG5vdCB1c2UgdGhlIHByb3BlcnR5IGlucHV0cy5cbiAgICogTm90ZTogW2NvbmZpZ10gaW5wdXQgcHJvcGVydGllcyB3aWxsIG92ZXJyaWRlIGlucHV0IHZhbHVlc1xuICAgKiBodHRwczovL2Vjb21mZS5naXRodWIuaW8vZWNoYXJ0cy1kb2MvcHVibGljL2VuL29wdGlvbi5odG1sXG4gICAqL1xuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgLyoqXG4gICAqIGdyb3VwPzogc3RyaW5nXG4gICAqIGdyb3VwIG5hbWUgaW4gd2hpY2ggdGhlIGNoYXJ0IGluc3RhbmNlIHdpbGwgYmUgY29ubmVjdGVkIHRvXG4gICAqIGh0dHBzOi8vZWNvbWZlLmdpdGh1Yi5pby9lY2hhcnRzLWRvYy9wdWJsaWMvZW4vYXBpLmh0bWwjZWNoYXJ0cy5jb25uZWN0XG4gICAqL1xuICBASW5wdXQoJ2dyb3VwJykgZ3JvdXA6IHN0cmluZztcblxuICAvKipcbiAgICogdGhlbWVOYW1lPzogc3RyaW5nXG4gICAqIHRoZW1lIHRvIGJlIGFwcGxpZWQgaW50byBjaGFydCBpbnN0YW5jZVxuICAgKiBodHRwczovL2Vjb21mZS5naXRodWIuaW8vZWNoYXJ0cy1kb2MvcHVibGljL2VuL3R1dG9yaWFsLmh0bWwjT3ZlcnZpZXclMjBvZiUyMFN0eWxlJTIwQ3VzdG9taXphdGlvblxuICAgKi9cbiAgQElucHV0KCd0aGVtZU5hbWUnKSB0aGVtZU5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogcmVuZGVyZXI6ICdzdmcnIHwgJ2NhbnZhcydcbiAgICogc2V0cyB0aGUgcmVuZGVyaW5nIG1vZGUgZm9yIHRoZSBjaGFydC5cbiAgICogZGVmYXVsdHMgdG8gJ2NhbnZhcydcbiAgICogaHR0cHM6Ly9lY29tZmUuZ2l0aHViLmlvL2VjaGFydHMtZG9jL3B1YmxpYy9lbi90dXRvcmlhbC5odG1sI1JlbmRlciUyMGJ5JTIwQ2FudmFzJTIwb3IlMjBTVkdcbiAgICovXG4gIEBJbnB1dCgncmVuZGVyZXInKSByZW5kZXJlcjogJ2NhbnZhcycgfCAnc3ZnJyA9ICdjYW52YXMnO1xuXG4gIEBPdXRwdXQoJ2NoYXJ0Q2xpY2snKSBjaGFydENsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdjaGFydERibGNsaWNrJykgY2hhcnREYmxjbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgnY2hhcnRDb250ZXh0bWVudScpIGNoYXJ0Q29udGV4dG1lbnU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ21hZ2ljVHlwZUNoYW5nZWQnKSBtYWdpY1R5cGVDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdkYXRhVmlld0NoYW5nZWQnKSBkYXRhVmlld0NoYW5nZWQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2RhdGF6b29tJykgZGF0YXpvb206IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ3Jlc3RvcmUnKSByZXN0b3JlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRpYWxpemVDaGFydCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgLy8gZGVzdHJveSBhbmQgcmVpbml0aWFsaXplIGNoYXJ0IG9ubHkgd2hlbiBgcmVuZGVyZXJgLCBgdGhlbWVOYW1lYCBhbmQgYGdyb3VwYCBjaGFuZ2VzXG4gICAgICBpZiAoY2hhbmdlcy5yZW5kZXJlciB8fCBjaGFuZ2VzLnRoZW1lTmFtZSB8fCBjaGFuZ2VzLmdyb3VwKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VDaGFydCgpO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplQ2hhcnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGlzcG9zZUNoYXJ0KCk7XG4gICAgdGhpcy5fZGVzdHJveS51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2Uuc2V0T3B0aW9uKGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHtcbiAgICAgICAgZ3JpZDoge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgbGVmdDogJzIwJyxcbiAgICAgICAgICByaWdodDogJzIwJyxcbiAgICAgICAgICBib3R0b206ICh0aGlzLmNvbmZpZy50b29sYm94ICYmIHR5cGVvZiB0aGlzLmNvbmZpZy50b29sYm94LmJvdHRvbSA9PT0gJ251bWJlcicpIHx8XG4gICAgICAgICAgICAgICAgKHRoaXMuX29wdGlvbnMudG9vbGJveCAmJiB0eXBlb2YgdGhpcy5fb3B0aW9ucy50b29sYm94LmJvdHRvbSAgPT09ICdudW1iZXInKSA/ICc0MCcgOiAnMTAnLFxuICAgICAgICAgIHRvcDogKHRoaXMuY29uZmlnLnRvb2xib3ggJiYgdHlwZW9mIHRoaXMuY29uZmlnLnRvb2xib3gudG9wID09PSAnbnVtYmVyJykgfHxcbiAgICAgICAgICAgICAgICAodGhpcy5fb3B0aW9ucy50b29sYm94ICYmIHR5cGVvZiB0aGlzLl9vcHRpb25zLnRvb2xib3gudG9wICA9PT0gJ251bWJlcicpID8gJzQwJyA6ICcxMCcsXG4gICAgICAgICAgY29udGFpbkxhYmVsOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSwgdGhpcy5fb3B0aW9ucywgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9KSwgdHJ1ZSk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbml0aWFsaXplQ2hhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5zdGFuY2UgPSBlY2hhcnRzLmluaXQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnRoZW1lTmFtZSwge1xuICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXG4gICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnY2xpY2snKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5jaGFydENsaWNrLm5leHQocGFyYW1zKTtcbiAgICB9KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdkYmxjbGljaycpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0RGJsY2xpY2submV4dChwYXJhbXMpO1xuICAgIH0pO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2NvbnRleHRtZW51JykucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSxcbiAgICApLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuY2hhcnRDb250ZXh0bWVudS5uZXh0KHBhcmFtcyk7XG4gICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnbWFnaWN0eXBlY2hhbmdlZCcpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICB0aGlzLm1hZ2ljVHlwZUNoYW5nZWQubmV4dChwYXJhbXMpO1xuICAgIH0pO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2RhdGF2aWV3Y2hhbmdlZCcpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICB0aGlzLmRhdGFWaWV3Q2hhbmdlZC5uZXh0KHBhcmFtcyk7XG4gICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnZGF0YXpvb20nKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5kYXRhem9vbS5uZXh0KHBhcmFtcyk7XG4gICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAncmVzdG9yZScpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICB0aGlzLnJlc3RvcmUubmV4dChwYXJhbXMpO1xuICAgIH0pO1xuICAgIGlmICh0aGlzLmdyb3VwKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XG4gICAgICBlY2hhcnRzLmNvbm5lY3QodGhpcy5ncm91cCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgbWVyZ2UoXG4gICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICApLFxuICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICApLFxuICAgICAgdGhpcy5faGVpZ2h0U3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgICApLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5faW5zdGFuY2UucmVzaXplKCk7XG4gICAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmxpc3RlbigpLnBpcGUoXG4gICAgICB0YXAoKG9wdGlvbnM6IGFueSkgPT4ge1xuICAgICAgICBhc3NpZ25EZWZpbmVkKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgfSksXG4gICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgICB0aW1lcig1MDAsIDI1MCkucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0Lm5leHQoKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKTtcbiAgICAgICAgdGhpcy5faGVpZ2h0U3ViamVjdC5uZXh0KCg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGlzcG9zZUNoYXJ0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UuY2xlYXIoKTtcbiAgICAgIGVjaGFydHMuZGlzcG9zZSh0aGlzLl9pbnN0YW5jZSk7XG4gICAgfVxuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCh0cnVlKTtcbiAgfVxuXG59XG4iXX0=