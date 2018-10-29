/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, } from '@angular/core';
import { Subject, fromEvent, merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
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
        this._subs = [];
        this._widthSubject = new Subject();
        this._heightSubject = new Subject();
        this._state = {};
        this._options = {};
        this.config = {};
        this.click = new EventEmitter();
        this.dblclick = new EventEmitter();
        this.contextmenu = new EventEmitter();
    }
    /**
     * @return {?}
     */
    get instance() {
        return this._instance;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._instance = echarts.init(this._elementRef.nativeElement);
        this._subs.push(fromEvent(this._instance, 'click').subscribe((params) => {
            this.click.next(params);
        }));
        this._subs.push(fromEvent(this._instance, 'dblclick').subscribe((params) => {
            this.dblclick.next(params);
        }));
        this._subs.push(fromEvent(this._instance, 'contextmenu').subscribe((params) => {
            this.contextmenu.next(params);
        }));
        if (this.group) {
            this._instance.group = this.group;
            echarts.connect(this.group);
            this._changeDetectorRef.markForCheck();
        }
        this._subs.push(merge(fromEvent(window, 'resize').pipe(debounceTime(100)), this._widthSubject.asObservable().pipe(debounceTime(100)), this._heightSubject.asObservable().pipe(debounceTime(100))).pipe(debounceTime(100)).subscribe(() => {
            this._instance.resize();
            this._changeDetectorRef.markForCheck();
        }));
        this.render();
        this._optionsService.listen().subscribe((options) => {
            assignDefined(this._options, options);
            this.render();
        });
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._elementRef && this._elementRef.nativeElement) {
            this._widthSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().width);
            this._heightSubject.next(((/** @type {?} */ (this._elementRef.nativeElement))).getBoundingClientRect().height);
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (this._instance) {
            this._instance.clear();
            this.render();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this._subs) {
            this._subs.forEach((sub) => {
                sub.unsubscribe();
            });
        }
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
                    bottom: '10',
                    top: '10',
                    containLabel: true,
                    borderColor: '#FCFCFC',
                },
                xAxis: [{}],
                // throws error if its empty
                yAxis: [{}],
                // throws error if its empty
                series: [],
            }, this.config ? this.config : {}, this._options), true);
            this._changeDetectorRef.markForCheck();
        }
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
    config: [{ type: Input, args: ['config',] }],
    group: [{ type: Input, args: ['group',] }],
    click: [{ type: Output, args: ['click',] }],
    dblclick: [{ type: Output, args: ['dblclick',] }],
    contextmenu: [{ type: Output, args: ['contextmenu',] }]
};
if (false) {
    /** @type {?} */
    TdChartComponent.prototype._subs;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvIiwic291cmNlcyI6WyJiYXNlL2NoYXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsVUFBVSxFQUNWLGlCQUFpQixHQUtsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQWdCLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFTLE1BQU0sTUFBTSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxZQUFZLEVBQXdCLE1BQU0sZ0JBQWdCLENBQUM7QUFFcEUsT0FBTyxLQUFLLE9BQU8sTUFBTSxxQkFBcUIsQ0FBQztBQUUvQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFNBQVMsQ0FBQztBQVN4QyxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7SUF1QjNCLFlBQW9CLGtCQUFxQyxFQUNyQyxXQUF1QixFQUN2QixlQUFzQztRQUZ0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQXZCbEQsVUFBSyxHQUFtQixFQUFFLENBQUM7UUFDM0Isa0JBQWEsR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQztRQUN2RCxtQkFBYyxHQUFvQixJQUFJLE9BQU8sRUFBVSxDQUFDO1FBUXhELFdBQU0sR0FBUSxFQUFFLENBQUM7UUFDakIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUVWLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFJakIsVUFBSyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ2hELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8s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QUFRLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDeEM7SUFDSCxDQUFDOzs7WUExSEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQixRQUFRLEVBQUUsRUFBRTtnQkFFWixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDOzthQUM1Qjs7OztZQXJCQyxpQkFBaUI7WUFEakIsVUFBVTtZQWFILHFCQUFxQjs7O3FCQXlCM0IsS0FBSyxTQUFDLFFBQVE7b0JBRWQsS0FBSyxTQUFDLE9BQU87b0JBRWIsTUFBTSxTQUFDLE9BQU87dUJBQ2QsTUFBTSxTQUFDLFVBQVU7MEJBQ2pCLE1BQU0sU0FBQyxhQUFhOzs7O0lBbkJyQixpQ0FBbUM7O0lBQ25DLHlDQUErRDs7SUFDL0QsMENBQWdFOztJQUVoRSxxQ0FBdUI7O0lBTXZCLGtDQUF5Qjs7SUFDekIsb0NBQTJCOztJQUUzQixrQ0FBa0M7O0lBRWxDLGlDQUE4Qjs7SUFFOUIsaUNBQW9FOztJQUNwRSxvQ0FBMEU7O0lBQzFFLHVDQUFnRjs7SUFFcEUsOENBQTZDOztJQUM3Qyx1Q0FBK0I7O0lBQy9CLDJDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBEb0NoZWNrLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uLCBTdWJqZWN0LCBmcm9tRXZlbnQsIG1lcmdlLCB0aW1lciB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0ICogYXMgZWNoYXJ0cyBmcm9tICdlY2hhcnRzL2xpYi9lY2hhcnRzJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlLCBDSEFSVF9QUk9WSURFUiB9IGZyb20gJy4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuL3V0aWxzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQnLFxuICB0ZW1wbGF0ZTogJycsXG4gIHN0eWxlVXJsczogWycuL2NoYXJ0LmNvbXBvbmVudC5zY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtDSEFSVF9QUk9WSURFUl0sXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIERvQ2hlY2ssIE9uRGVzdHJveSB7XG5cbiAgcHJpdmF0ZSBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBfd2lkdGhTdWJqZWN0OiBTdWJqZWN0PG51bWJlcj4gPSBuZXcgU3ViamVjdDxudW1iZXI+KCk7XG4gIHByaXZhdGUgX2hlaWdodFN1YmplY3Q6IFN1YmplY3Q8bnVtYmVyPiA9IG5ldyBTdWJqZWN0PG51bWJlcj4oKTtcblxuICBwcml2YXRlIF9pbnN0YW5jZTogYW55O1xuXG4gIGdldCBpbnN0YW5jZSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfb3B0aW9uczogYW55ID0ge307XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnZ3JvdXAnKSBncm91cDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoJ2NsaWNrJykgY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2RibGNsaWNrJykgZGJsY2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoJ2NvbnRleHRtZW51JykgY29udGV4dG1lbnU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5faW5zdGFuY2UgPSBlY2hhcnRzLmluaXQodGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB0aGlzLl9zdWJzLnB1c2goXG4gICAgICBmcm9tRXZlbnQodGhpcy5faW5zdGFuY2UsICdjbGljaycpLnN1YnNjcmliZSgocGFyYW1zOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5jbGljay5uZXh0KHBhcmFtcyk7XG4gICAgICB9KSxcbiAgICApO1xuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIGZyb21FdmVudCh0aGlzLl9pbnN0YW5jZSwgJ2RibGNsaWNrJykuc3Vic2NyaWJlKChwYXJhbXM6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmRibGNsaWNrLm5leHQocGFyYW1zKTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgdGhpcy5fc3Vicy5wdXNoKFxuICAgICAgZnJvbUV2ZW50KHRoaXMuX2luc3RhbmNlLCAnY29udGV4dG1lbnUnKS5zdWJzY3JpYmUoKHBhcmFtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMuY29udGV4dG1lbnUubmV4dChwYXJhbXMpO1xuICAgICAgfSksXG4gICAgKTtcbiAgICBpZiAodGhpcy5ncm91cCkge1xuICAgICAgdGhpcy5faW5zdGFuY2UuZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICAgICAgZWNoYXJ0cy5jb25uZWN0KHRoaXMuZ3JvdXApO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICAgIHRoaXMuX3N1YnMucHVzaChcbiAgICAgIG1lcmdlKFxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgKSxcbiAgICAgICAgdGhpcy5fd2lkdGhTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpLnBpcGUoXG4gICAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICAgICksXG4gICAgICAgIHRoaXMuX2hlaWdodFN1YmplY3QuYXNPYnNlcnZhYmxlKCkucGlwZShcbiAgICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgKSxcbiAgICAgICkucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2luc3RhbmNlLnJlc2l6ZSgpO1xuICAgICAgICB0aGlzLl9jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICAgIH0pLFxuICAgICk7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5saXN0ZW4oKS5zdWJzY3JpYmUoKG9wdGlvbnM6IGFueSkgPT4ge1xuICAgICAgYXNzaWduRGVmaW5lZCh0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2VsZW1lbnRSZWYgJiYgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLl93aWR0aFN1YmplY3QubmV4dCgoPEhUTUxFbGVtZW50PnRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGgpO1xuICAgICAgdGhpcy5faGVpZ2h0U3ViamVjdC5uZXh0KCg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5faW5zdGFuY2UuY2xlYXIoKTtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N1YnMpIHtcbiAgICAgIHRoaXMuX3N1YnMuZm9yRWFjaCgoc3ViOiBTdWJzY3JpcHRpb24pID0+IHtcbiAgICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICB0aGlzLl9pbnN0YW5jZS5zZXRPcHRpb24oYXNzaWduRGVmaW5lZCh0aGlzLl9zdGF0ZSwge1xuICAgICAgICBncmlkOiB7XG4gICAgICAgICAgc2hvdzogdHJ1ZSxcbiAgICAgICAgICBsZWZ0OiAnMjAnLFxuICAgICAgICAgIHJpZ2h0OiAnMjAnLFxuICAgICAgICAgIGJvdHRvbTogJzEwJyxcbiAgICAgICAgICB0b3A6ICcxMCcsXG4gICAgICAgICAgY29udGFpbkxhYmVsOiB0cnVlLFxuICAgICAgICAgIGJvcmRlckNvbG9yOiAnI0ZDRkNGQycsXG4gICAgICAgIH0sXG4gICAgICAgIHhBeGlzIDogW3t9XSwgLy8gdGhyb3dzIGVycm9yIGlmIGl0cyBlbXB0eVxuICAgICAgICB5QXhpcyA6IFt7fV0sIC8vIHRocm93cyBlcnJvciBpZiBpdHMgZW1wdHlcbiAgICAgICAgc2VyaWVzOiBbXSxcbiAgICAgIH0sIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwgdGhpcy5fb3B0aW9ucyksIHRydWUpO1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==