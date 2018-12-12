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
        this.config = {};
        this.chartClick = new EventEmitter();
        this.chartDblclick = new EventEmitter();
        this.chartContextmenu = new EventEmitter();
        this.magicTypeChanged = new EventEmitter();
        this.dataViewChanged = new EventEmitter();
        this.datazoom = new EventEmitter();
        this.restore = new EventEmitter();
    }
    Object.defineProperty(TdChartComponent.prototype, "instance", {
        get: function () {
            return this._instance;
        },
        enumerable: true,
        configurable: true
    });
    TdChartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._instance = echarts.init(this._elementRef.nativeElement);
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
                _this._widthSubject.next(_this._elementRef.nativeElement.getBoundingClientRect().width);
                _this._heightSubject.next(_this._elementRef.nativeElement.getBoundingClientRect().height);
            }
        });
    };
    TdChartComponent.prototype.ngOnChanges = function () {
        if (this._instance) {
            this.render();
        }
    };
    TdChartComponent.prototype.ngOnDestroy = function () {
        if (this._instance) {
            this._instance.clear();
            echarts.dispose(this._instance);
        }
        this._destroy.next(true);
        this._destroy.unsubscribe();
    };
    TdChartComponent.prototype.checkToolboxHeight = function () {
        return this.config.toolbox.height ? this.config.toolbox.height : '40';
    };
    TdChartComponent.prototype.render = function () {
        if (this._instance) {
            this._instance.setOption(assignDefined(this._state, {
                grid: {
                    show: true,
                    left: '20',
                    right: '20',
                    bottom: (this.config.toolbox && typeof this.config.toolbox.bottom === 'number')
                        || (this.config.toolbox && this.config.toolbox.bottom) ? this.checkToolboxHeight() : '10',
                    top: (this.config.toolbox && typeof this.config.toolbox.top === 'number')
                        || (this.config.toolbox && this.config.toolbox.top) ? this.checkToolboxHeight() : '10',
                    containLabel: true,
                    borderColor: '#FCFCFC',
                },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvIiwic291cmNlcyI6WyJiYXNlL2NoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixVQUFVLEVBQ1YsaUJBQWlCLEdBSWxCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEYsT0FBTyxLQUFLLE9BQU8sTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQUV4QztJQWtDRSwwQkFBb0Isa0JBQXFDLEVBQ3JDLFdBQXVCLEVBQ3ZCLGVBQXNDO1FBRnRDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsb0JBQWUsR0FBZixlQUFlLENBQXVCO1FBM0JsRCxhQUFRLEdBQXFCLElBQUksT0FBTyxFQUFXLENBQUM7UUFDcEQsa0JBQWEsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUN2RCxtQkFBYyxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBUXhELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVWLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFJWixlQUFVLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDckQsa0JB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U0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsRUFBRTtvQkFFWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDOztpQkFDNUI7Ozs7Z0JBcEJDLGlCQUFpQjtnQkFEakIsVUFBVTtnQkFZSCxxQkFBcUI7Ozt5QkF5QjNCLEtBQUssU0FBQyxRQUFRO3dCQUVkLEtBQUssU0FBQyxPQUFPOzZCQUViLE1BQU0sU0FBQyxZQUFZO2dDQUNuQixNQUFNLFNBQUMsZUFBZTttQ0FDdEIsTUFBTSxTQUFDLGtCQUFrQjttQ0FDekIsTUFBTSxTQUFDLGtCQUFrQjtrQ0FDekIsTUFBTSxTQUFDLGlCQUFpQjsyQkFDeEIsTUFBTSxTQUFDLFVBQVU7MEJBQ2pCLE1BQU0sU0FBQyxTQUFTOztJQTZIbkIsdUJBQUM7Q0FBQSxBQTdKRCxJQTZKQztTQXRKWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QsIGZyb21FdmVudCwgbWVyZ2UsIHRpbWVyIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCB0YWtlVW50aWwsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZWNoYXJ0cyBmcm9tICdlY2hhcnRzL2xpYi9lY2hhcnRzJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLCBDSEFSVF9QUk9WSURFUiB9IGZyb20gJy4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlVXJsczogWycuL2NoYXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtDSEFSVF9QUk9WSURFUl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfZGVzdHJveTogU3ViamVjdDxib29sZWFuPiA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgX3dpZHRoU3ViamVjdDogU3ViamVjdDxudW1iZXI+ID0gbmV3IFN1YmplY3Q8bnVtYmVyPigpO1xuICBwcml2YXRlIF9oZWlnaHRTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG5cbiAgcHJpdmF0ZSBfaW5zdGFuY2U6IGFueTtcblxuICBnZXQgaW5zdGFuY2UoKTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gIH1cblxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG4gIHByaXZhdGUgX29wdGlvbnM6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2dyb3VwJykgZ3JvdXA6IHN0cmluZztcblxuICBAT3V0cHV0KCdjaGFydENsaWNrJykgY2hhcnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgnY2hhcnREYmxjbGljaycpIGNoYXJ0RGJsY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2NoYXJ0Q29udGV4dG1lbnUnKSBjaGFydENvbnRleHRtZW51OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdtYWdpY1R5cGVDaGFuZ2VkJykgbWFnaWNUeXBlQ2hhbmdlZDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgQE91dHB1dCgnZGF0YVZpZXdDaGFuZ2VkJykgZGF0YVZpZXdDaGFuZ2VkOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdkYXRhem9vbScpIGRhdGF6b29tOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBAT3V0cHV0KCdyZXN0b3JlJykgcmVzdG9yZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9pbnN0YW5jZSA9IGVjaGFydHMuaW5pdCh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2NsaWNrJykucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSxcbiAgICApLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuY2hhcnRDbGljay5uZXh0KHBhcmFtcyk7XG4gICAgfSk7XG4gICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnZGJsY2xpY2snKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5jaGFydERibGNsaWNrLm5leHQocGFyYW1zKTtcbiAgICB9KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdjb250ZXh0bWVudScpLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICB0aGlzLmNoYXJ0Q29udGV4dG1lbnUubmV4dChwYXJhbXMpO1xuICAgIH0pO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ21hZ2ljdHlwZWNoYW5nZWQnKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5tYWdpY1R5cGVDaGFuZ2VkLm5leHQocGFyYW1zKTtcbiAgICB9KTtcbiAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdkYXRhdmlld2NoYW5nZWQnKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5kYXRhVmlld0NoYW5nZWQubmV4dChwYXJhbXMpO1xuICAgIH0pO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2RhdGF6b29tJykucGlwZShcbiAgICAgIHRha2VVbnRpbCh0aGlzLl9kZXN0cm95KSxcbiAgICApLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgIHRoaXMuZGF0YXpvb20ubmV4dChwYXJhbXMpO1xuICAgIH0pO1xuICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ3Jlc3RvcmUnKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgdGhpcy5yZXN0b3JlLm5leHQocGFyYW1zKTtcbiAgICB9KTtcbiAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgdGhpcy5faW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICAgICAgZWNoYXJ0cy5jb25uZWN0KHRoaXMuZ3JvdXApO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIG1lcmdlKFxuICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgKSxcbiAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5hc09ic2VydmFibGUoKS5waXBlKFxuICAgICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxuICAgICAgKSxcbiAgICAgIHRoaXMuX2hlaWdodFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcbiAgICAgICksXG4gICAgKS5waXBlKFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuX2luc3RhbmNlLnJlc2l6ZSgpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5saXN0ZW4oKS5waXBlKFxuICAgICAgdGFwKChvcHRpb25zOiBhbnkpID0+IHtcbiAgICAgICAgYXNzaWduRGVmaW5lZCh0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIH0pLFxuICAgICAgZGVib3VuY2VUaW1lKDApLFxuICAgICAgdGFrZVVudGlsKHRoaXMuX2Rlc3Ryb3kpLFxuICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gICAgdGltZXIoNTAwLCAyNTApLnBpcGUoXG4gICAgICB0YWtlVW50aWwodGhpcy5fZGVzdHJveSksXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX3dpZHRoU3ViamVjdC5uZXh0KCg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCk7XG4gICAgICAgIHRoaXMuX2hlaWdodFN1YmplY3QubmV4dCgoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5faW5zdGFuY2UpIHtcbiAgICAgIHRoaXMuX2luc3RhbmNlLmNsZWFyKCk7XG4gICAgICBlY2hhcnRzLmRpc3Bvc2UodGhpcy5faW5zdGFuY2UpO1xuICAgIH1cbiAgICB0aGlzLl9kZXN0cm95Lm5leHQodHJ1ZSk7XG4gICAgdGhpcy5fZGVzdHJveS51bnN1YnNjcmliZSgpO1xuICB9XG5cbiAgY2hlY2tUb29sYm94SGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuY29uZmlnLnRvb2xib3guaGVpZ2h0ID8gdGhpcy5jb25maWcudG9vbGJveC5oZWlnaHQgOiAnNDAnO1xuICB9XG5cbiAgcmVuZGVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2Uuc2V0T3B0aW9uKGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHtcbiAgICAgICAgZ3JpZDoge1xuICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgbGVmdDogJzIwJyxcbiAgICAgICAgICByaWdodDogJzIwJyxcbiAgICAgICAgICBib3R0b206ICh0aGlzLmNvbmZpZy50b29sYm94ICYmIHR5cGVvZiB0aGlzLmNvbmZpZy50b29sYm94LmJvdHRvbSA9PT0gJ251bWJlcicpIFxuICAgICAgICAgIHx8ICh0aGlzLmNvbmZpZy50b29sYm94ICYmIHRoaXMuY29uZmlnLnRvb2xib3guYm90dG9tKSA/IHRoaXMuY2hlY2tUb29sYm94SGVpZ2h0KCkgOiAnMTAnLFxuICAgICAgICAgIHRvcDogKHRoaXMuY29uZmlnLnRvb2xib3ggJiYgdHlwZW9mIHRoaXMuY29uZmlnLnRvb2xib3gudG9wID09PSAnbnVtYmVyJykgXG4gICAgICAgICAgfHwgKHRoaXMuY29uZmlnLnRvb2xib3ggJiYgdGhpcy5jb25maWcudG9vbGJveC50b3ApID8gdGhpcy5jaGVja1Rvb2xib3hIZWlnaHQoKSA6ICcxMCcsXG4gICAgICAgICAgY29udGFpbkxhYmVsOiB0cnVlLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0ZDRkNGQycsXG4gICAgICAgIH0sXG4gICAgICB9LCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHRoaXMuX29wdGlvbnMpLCB0cnVlKTtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG59XG4iXX0=