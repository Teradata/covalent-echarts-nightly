/**
 * @fileoverview added by tsickle
 * Generated from: chart.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, } from '@angular/core';
import { Subject, fromEvent, merge, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import * as echarts from 'echarts/lib/echarts';
import { TdChartOptionsService, CHART_PROVIDER } from './chart-options.service';
import { assignDefined } from './utils';
export class TdChartComponent {
    /**
     * @param {?} _changeDetectorRef
     * @param {?} _elementRef
     * @param {?} _optionsService
     */
    constructor(_changeDetectorRef, _elementRef, _optionsService) {
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
    /**
     * returns the echarts instance
     * @return {?}
     */
    get instance() {
        return this._instance;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._initializeChart();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._disposeChart();
        this._destroy.unsubscribe();
    }
    /**
     * @return {?}
     */
    render() {
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
    }
    /**
     * @private
     * @return {?}
     */
    _initializeChart() {
        this._instance = echarts.init(this._elementRef.nativeElement, this.themeName, {
            renderer: this.renderer,
        });
        fromEvent(this._instance, 'click')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.chartClick.next(params);
        }));
        fromEvent(this._instance, 'dblclick')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.chartDblclick.next(params);
        }));
        fromEvent(this._instance, 'contextmenu')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.chartContextmenu.next(params);
        }));
        fromEvent(this._instance, 'magictypechanged')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.magicTypeChanged.next(params);
        }));
        fromEvent(this._instance, 'dataviewchanged')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.dataViewChanged.next(params);
        }));
        fromEvent(this._instance, 'datazoom')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.datazoom.next(params);
        }));
        fromEvent(this._instance, 'restore')
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @param {?} params
         * @return {?}
         */
        (params) => {
            this.restore.next(params);
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
        () => {
            if (this._instance) {
                this._instance.resize();
                this._changeDetectorRef.markForCheck();
            }
        }));
        this._optionsService
            .listen()
            .pipe(tap((/**
         * @param {?} options
         * @return {?}
         */
        (options) => {
            assignDefined(this._options, options);
        })), debounceTime(0), takeUntil(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.render();
        }));
        timer(500, 250)
            .pipe(takeUntil(this._destroy))
            .subscribe((/**
         * @return {?}
         */
        () => {
            if (this._elementRef && this._elementRef.nativeElement) {
                this._widthSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().width);
                this._heightSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height);
            }
        }));
    }
    /**
     * @private
     * @return {?}
     */
    _disposeChart() {
        if (this._instance) {
            this._instance.clear();
            echarts.dispose(this._instance);
        }
        this._destroy.next(true);
    }
}
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
TdChartComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdChartOptionsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2VjaGFydHMvYmFzZS9jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixVQUFVLEVBQ1YsaUJBQWlCLEdBS2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEYsT0FBTyxLQUFLLE9BQU8sTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQVN4QyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUF1RDNCLFlBQ1Usa0JBQXFDLEVBQ3JDLFdBQXVCLEVBQ3ZCLGVBQXNDO1FBRnRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBekR4QyxhQUFRLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDcEQsa0JBQWEsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUN2RCxtQkFBYyxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBV3hELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFRLEVBQUUsQ0FBQzs7Ozs7OztRQVFsQixXQUFNLEdBQVEsRUFBRSxDQUFD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RSx5Q0FBcUU7O0lBQ3JFLDRDQUF3RTs7SUFDeEUsNENBQXdFOztJQUN4RSwyQ0FBdUU7O0lBQ3ZFLG9DQUFnRTs7SUFDaEUsbUNBQStEOzs7OztJQUc3RCw4Q0FBNkM7Ozs7O0lBQzdDLHVDQUErQjs7Ozs7SUFDL0IsMkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFNpbXBsZUNoYW5nZXMsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBmcm9tRXZlbnQsIG1lcmdlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCAqIGFzIGVjaGFydHMgZnJvbSAnZWNoYXJ0cy9saWIvZWNoYXJ0cyc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSwgQ0hBUlRfUFJPVklERVIgfSBmcm9tICcuL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi91dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0JyxcbiAgdGVtcGxhdGU6ICcnLFxuICBzdHlsZVVybHM6IFsnLi9jaGFydC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbQ0hBUlRfUFJPVklERVJdLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9kZXN0cm95OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX2hlaWdodFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBwcml2YXRlIF9pbnN0YW5jZTogYW55O1xuXG4gIC8qKlxuICAgKiByZXR1cm5zIHRoZSBlY2hhcnRzIGluc3RhbmNlXG4gICAqL1xuICBnZXQgaW5zdGFuY2UoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG4gIHByaXZhdGUgX29wdGlvbnM6IGFueSA9IHt9O1xuXG4gIC8qKlxuICAgKiBjb25maWc/OiBhbnk7XG4gICAqIFNldHMgdGhlIEpTIGNvbmZpZyBvYmplY3QgaWYgeW91IGNob29zZSB0byBub3QgdXNlIHRoZSBwcm9wZXJ0eSBpbnB1dHMuXG4gICAqIE5vdGU6IFtjb25maWddIGlucHV0IHByb3BlcnRpZXMgd2lsbCBvdmVycmlkZSBpbnB1dCB2YWx1ZXNcbiAgICogaHR0cHM6Ly9lY29tZmUuZ2l0aHViLmlvL2VjaGFydHMtZG9jL3B1YmxpYy9lbi9vcHRpb24uaHRtbFxuICAgKi9cbiAgQElucHV0KCkgY29uZmlnOiBhbnkgPSB7fTtcblxuICAvKipcbiAgICogZ3JvdXA/OiBzdHJpbmdcbiAgICogZ3JvdXAgbmFtZSBpbiB3aGljaCB0aGUgY2hhcnQgaW5zdGFuY2Ugd2lsbCBiZSBjb25uZWN0ZWQgdG9cbiAgICogaHR0cHM6Ly9lY29tZmUuZ2l0aHViLmlvL2VjaGFydHMtZG9jL3B1YmxpYy9lbi9hcGkuaHRtbCNlY2hhcnRzLmNvbm5lY3RcbiAgICovXG4gIEBJbnB1dCgpIGdyb3VwOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIHRoZW1lTmFtZT86IHN0cmluZ1xuICAgKiB0aGVtZSB0byBiZSBhcHBsaWVkIGludG8gY2hhcnQgaW5zdGFuY2VcbiAgICogaHR0cHM6Ly9lY29tZmUuZ2l0aHViLmlvL2VjaGFydHMtZG9jL3B1YmxpYy9lbi90dXRvcmlhbC5odG1sI092ZXJ2aWV3JTIwb2YlMjBTdHlsZSUyMEN1c3RvbWl6YXRpb25cbiAgICovXG4gIEBJbnB1dCgpIHRoZW1lTmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiByZW5kZXJlcjogJ3N2ZycgfCAnY2FudmFzJ1xuICAgKiBzZXRzIHRoZSByZW5kZXJpbmcgbW9kZSBmb3IgdGhlIGNoYXJ0LlxuICAgKiBkZWZhdWx0cyB0byAnY2FudmFzJ1xuICAgKiBodHRwczovL2Vjb21mZS5naXRodWIuaW8vZWNoYXJ0cy1kb2MvcHVibGljL2VuL3R1dG9yaWFsLmh0bWwjUmVuZGVyJTIwYnklMjBDYW52YXMlMjBvciUyMFNWR1xuICAgKi9cbiAgQElucHV0KCkgcmVuZGVyZXI6ICdjYW52YXMnIHwgJ3N2ZycgPSAnY2FudmFzJztcblxuICBAT3V0cHV0KCkgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGNoYXJ0RGJsY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSBjaGFydENvbnRleHRtZW51OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgbWFnaWNUeXBlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRhdGFWaWV3Q2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgpIGRhdGF6b29tOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCkgcmVzdG9yZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICApIHt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX2luaXRpYWxpemVDaGFydCgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgLy8gZGVzdHJveSBhbmQgcmVpbml0aWFsaXplIGNoYXJ0IG9ubHkgd2hlbiBgcmVuZGVyZXJgLCBgdGhlbWVOYW1lYCBhbmQgYGdyb3VwYCBjaGFuZ2VzXG4gICAgICBpZiAoY2hhbmdlcy5yZW5kZXJlciB8fCBjaGFuZ2VzLnRoZW1lTmFtZSB8fCBjaGFuZ2VzLmdyb3VwKSB7XG4gICAgICAgIHRoaXMuX2Rpc3Bvc2VDaGFydCgpO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplQ2hhcnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fZGlzcG9zZUNoYXJ0KCk7XG4gICAgdGhpcy5fZGVzdHJveS51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2Uuc2V0T3B0aW9uKFxuICAgICAgICBhc3NpZ25EZWZpbmVkKFxuICAgICAgICAgIHRoaXMuX3N0YXRlLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICAgICAgbGVmdDogJzIwJyxcbiAgICAgICAgICAgICAgcmlnaHQ6ICcyMCcsXG4gICAgICAgICAgICAgIGJvdHRvbTpcbiAgICAgICAgICAgICAgICAodGhpcy5jb25maWcudG9vbGJveCAmJiB0eXBlb2YgdGhpcy5jb25maWcudG9vbGJveC5ib3R0b20gPT09ICdudW1iZXInKSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLl9vcHRpb25zLnRvb2xib3ggJiYgdHlwZW9mIHRoaXMuX29wdGlvbnMudG9vbGJveC5ib3R0b20gPT09ICdudW1iZXInKVxuICAgICAgICAgICAgICAgICAgPyAnNDAnXG4gICAgICAgICAgICAgICAgICA6ICcxMCcsXG4gICAgICAgICAgICAgIHRvcDpcbiAgICAgICAgICAgICAgICAodGhpcy5jb25maWcudG9vbGJveCAmJiB0eXBlb2YgdGhpcy5jb25maWcudG9vbGJveC50b3AgPT09ICdudW1iZXInKSB8fFxuICAgICAgICAgICAgICAgICh0aGlzLl9vcHRpb25zLnRvb2xib3ggJiYgdHlwZW9mIHRoaXMuX29wdGlvbnMudG9vbGJveC50b3AgPT09ICdudW1iZXInKVxuICAgICAgICAgICAgICAgICAgPyAnNDAnXG4gICAgICAgICAgICAgICAgICA6ICcxMCcsXG4gICAgICAgICAgICAgIGNvbnRhaW5MYWJlbDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzLl9vcHRpb25zLFxuICAgICAgICAgIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSxcbiAgICAgICAgKSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9pbml0aWFsaXplQ2hhcnQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5zdGFuY2UgPSBlY2hhcnRzLmluaXQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnRoZW1lTmFtZSwge1xuICAgICAgcmVuZGVyZXI6IHRoaXMucmVuZGVyZXIsXG4gICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnY2xpY2snKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpKVxuICAgICAgLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5jaGFydENsaWNrLm5leHQocGFyYW1zKTtcbiAgICAgIH0pO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2RibGNsaWNrJylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuY2hhcnREYmxjbGljay5uZXh0KHBhcmFtcyk7XG4gICAgICB9KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdjb250ZXh0bWVudScpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmNoYXJ0Q29udGV4dG1lbnUubmV4dChwYXJhbXMpO1xuICAgICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnbWFnaWN0eXBlY2hhbmdlZCcpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLm1hZ2ljVHlwZUNoYW5nZWQubmV4dChwYXJhbXMpO1xuICAgICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnZGF0YXZpZXdjaGFuZ2VkJylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YVZpZXdDaGFuZ2VkLm5leHQocGFyYW1zKTtcbiAgICAgIH0pO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2RhdGF6b29tJylcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSlcbiAgICAgIC5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuZGF0YXpvb20ubmV4dChwYXJhbXMpO1xuICAgICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAncmVzdG9yZScpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnJlc3RvcmUubmV4dChwYXJhbXMpO1xuICAgICAgfSk7XG4gICAgaWYgKHRoaXMuZ3JvdXApIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcbiAgICAgIGVjaGFydHMuY29ubmVjdCh0aGlzLmdyb3VwKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgICBtZXJnZShcbiAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKS5waXBlKGRlYm91bmNlVGltZSgxMDApKSxcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLFxuICAgICAgdGhpcy5faGVpZ2h0U3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpLFxuICAgIClcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSwgZGVib3VuY2VUaW1lKDEwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgdGhpcy5faW5zdGFuY2UucmVzaXplKCk7XG4gICAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlXG4gICAgICAubGlzdGVuKClcbiAgICAgIC5waXBlKFxuICAgICAgICB0YXAoKG9wdGlvbnM6IGFueSkgPT4ge1xuICAgICAgICAgIGFzc2lnbkRlZmluZWQodGhpcy5fb3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIH0pLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMCksXG4gICAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSxcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfSk7XG4gICAgdGltZXIoNTAwLCAyNTApXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5fZGVzdHJveSkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0Lm5leHQoKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKTtcbiAgICAgICAgICB0aGlzLl9oZWlnaHRTdWJqZWN0Lm5leHQoKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGlzcG9zZUNoYXJ0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UuY2xlYXIoKTtcbiAgICAgIGVjaGFydHMuZGlzcG9zZSh0aGlzLl9pbnN0YW5jZSk7XG4gICAgfVxuICAgIHRoaXMuX2Rlc3Ryb3kubmV4dCh0cnVlKTtcbiAgfVxufVxuIl19