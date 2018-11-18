/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, } from '@angular/core';
import { Subject, fromEvent, merge, timer } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
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
        this.config = {};
        this.click = new EventEmitter();
        this.dblclick = new EventEmitter();
        this.contextmenu = new EventEmitter();
    }
    Object.defineProperty(TdChartComponent.prototype, "instance", {
        get: /**
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
        var _this = this;
        this._instance = echarts.init(this._elementRef.nativeElement);
        fromEvent(this._instance, 'click').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.click.next(params);
        });
        fromEvent(this._instance, 'dblclick').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.dblclick.next(params);
        });
        fromEvent(this._instance, 'contextmenu').pipe(takeUntil(this._destroy)).subscribe(function (params) {
            _this.contextmenu.next(params);
        });
        if (this.group) {
            this._instance.group = this.group;
            echarts.connect(this.group);
            this._changeDetectorRef.markForCheck();
        }
        merge(fromEvent(window, 'resize').pipe(debounceTime(100)), this._widthSubject.asObservable().pipe(distinctUntilChanged()), this._heightSubject.asObservable().pipe(distinctUntilChanged())).pipe(takeUntil(this._destroy), debounceTime(100)).subscribe(function () {
            _this._instance.resize();
            _this._changeDetectorRef.markForCheck();
        }),
            this.render();
        this._optionsService.listen().subscribe(function (options) {
            assignDefined(_this._options, options);
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
    TdChartComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (this._instance) {
            this._instance.clear();
            this.render();
        }
    };
    /**
     * @return {?}
     */
    TdChartComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroy.next(true);
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
                    bottom: '10',
                    top: '10',
                    containLabel: true,
                    borderColor: '#FCFCFC',
                },
                xAxis: [{}],
                // throws error if its empty
                yAxis: [{}],
            }, this.config ? this.config : {}, this._options), true);
            this._changeDetectorRef.markForCheck();
        }
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
        click: [{ type: Output, args: ['click',] }],
        dblclick: [{ type: Output, args: ['dblclick',] }],
        contextmenu: [{ type: Output, args: ['contextmenu',] }]
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
    /** @type {?} */
    TdChartComponent.prototype.config;
    /** @type {?} */
    TdChartComponent.prototype.group;
    /** @type {?} */
    TdChartComponent.prototype.click;
    /** @type {?} */
    TdChartComponent.prototype.dblclick;
    /** @type {?} */
    TdChartComponent.prototype.contextmenu;
    /** @type {?} */
    TdChartComponent.prototype._changeDetectorRef;
    /** @type {?} */
    TdChartComponent.prototype._elementRef;
    /** @type {?} */
    TdChartComponent.prototype._optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvIiwic291cmNlcyI6WyJiYXNlL2NoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsVUFBVSxFQUNWLGlCQUFpQixHQUlsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0UsT0FBTyxLQUFLLE9BQU8sTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUV4QztJQThCRSwwQkFBb0Isa0JBQXFDLEVBQ3JDLFdBQXVCLEVBQ3ZCLGVBQXNDO1FBRnRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBdkJsRCxhQUFRLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDcEQsa0JBQWEsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUN2RCxtQkFBYyxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBUXhELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVWLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFJakIsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2hELGFBQVEsR0FB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QUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3hDO0lBQ0gsQ0FBQzs7Z0JBdEhGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLEVBQUU7b0JBRVosZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDLGNBQWMsQ0FBQzs7aUJBQzVCOzs7O2dCQXBCQyxpQkFBaUI7Z0JBRGpCLFVBQVU7Z0JBWUgscUJBQXFCOzs7eUJBeUIzQixLQUFLLFNBQUMsUUFBUTt3QkFFZCxLQUFLLFNBQUMsT0FBTzt3QkFFYixNQUFNLFNBQUMsT0FBTzsyQkFDZCxNQUFNLFNBQUMsVUFBVTs4QkFDakIsTUFBTSxTQUFDLGFBQWE7O0lBNEZ2Qix1QkFBQztDQUFBLEFBeEhELElBd0hDO1NBakhZLGdCQUFnQjs7O0lBRTNCLG9DQUE0RDs7SUFDNUQseUNBQStEOztJQUMvRCwwQ0FBZ0U7O0lBRWhFLHFDQUF1Qjs7SUFNdkIsa0NBQXlCOztJQUN6QixvQ0FBMkI7O0lBRTNCLGtDQUFrQzs7SUFFbEMsaUNBQThCOztJQUU5QixpQ0FBb0U7O0lBQ3BFLG9DQUEwRTs7SUFDMUUsdUNBQWdGOztJQUVwRSw4Q0FBNkM7O0lBQzdDLHVDQUErQjs7SUFDL0IsMkNBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBmcm9tRXZlbnQsIG1lcmdlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gJ2VjaGFydHMvbGliL2VjaGFydHMnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsIENIQVJUX1BST1ZJREVSIH0gZnJvbSAnLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCB9IGZyb20gJy4vdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydCcsXG4gIHRlbXBsYXRlOiAnJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW0NIQVJUX1BST1ZJREVSXSxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9kZXN0cm95OiBTdWJqZWN0PGJvb2xlYW4+ID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX2hlaWdodFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBwcml2YXRlIF9pbnN0YW5jZTogYW55O1xuXG4gIGdldCBpbnN0YW5jZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnZ3JvdXAnKSBncm91cDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoJ2NsaWNrJykgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2RibGNsaWNrJykgZGJsY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2NvbnRleHRtZW51JykgY29udGV4dG1lbnU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5zdGFuY2UgPSBlY2hhcnRzLmluaXQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdjbGljaycpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICB0aGlzLmNsaWNrLm5leHQocGFyYW1zKTtcbiAgICB9KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdkYmxjbGljaycpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICB0aGlzLmRibGNsaWNrLm5leHQocGFyYW1zKTtcbiAgICB9KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdjb250ZXh0bWVudScpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICB0aGlzLmNvbnRleHRtZW51Lm5leHQocGFyYW1zKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgdGhpcy5faW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICAgICAgZWNoYXJ0cy5jb25uZWN0KHRoaXMuZ3JvdXApO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgKSxcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgICAgIHRoaXMuX2hlaWdodFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICksXG4gICAgKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5faW5zdGFuY2UucmVzaXplKCk7XG4gICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9KSxcbiAgICB0aGlzLnJlbmRlcigpO1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmxpc3RlbigpLnN1YnNjcmliZSgob3B0aW9uczogYW55KSA9PiB7XG4gICAgICBhc3NpZ25EZWZpbmVkKHRoaXMuX29wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9KTtcbiAgICB0aW1lcig1MDAsIDI1MCkucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSxcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fZWxlbWVudFJlZiAmJiB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0Lm5leHQoKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoKTtcbiAgICAgICAgdGhpcy5faGVpZ2h0U3ViamVjdC5uZXh0KCg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5jbGVhcigpO1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9kZXN0cm95Lm5leHQodHJ1ZSk7XG4gICAgdGhpcy5fZGVzdHJveS51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2Uuc2V0T3B0aW9uKGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHtcbiAgICAgICAgZ3JpZDoge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgbGVmdDogJzIwJyxcbiAgICAgICAgICByaWdodDogJzIwJyxcbiAgICAgICAgICBib3R0b206ICcxMCcsXG4gICAgICAgICAgdG9wOiAnMTAnLFxuICAgICAgICAgIGNvbnRhaW5MYWJlbDogdHJ1ZSxcbiAgICAgICAgICBib3JkZXJDb2xvcjogJyNGQ0ZDRkMnLFxuICAgICAgICB9LFxuICAgICAgICB4QXhpcyA6IFt7fV0sIC8vIHRocm93cyBlcnJvciBpZiBpdHMgZW1wdHlcbiAgICAgICAgeUF4aXMgOiBbe31dLCAvLyB0aHJvd3MgZXJyb3IgaWYgaXRzIGVtcHR5XG4gICAgICB9LCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHRoaXMuX29wdGlvbnMpLCB0cnVlKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=