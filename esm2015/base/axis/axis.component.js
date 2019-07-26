/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { assignDefined } from '../utils';
/**
 * @abstract
 */
export class TdChartAxisComponent {
    /**
     * @param {?} _axisOption
     * @param {?} _optionsService
     */
    constructor(_axisOption, _optionsService) {
        this._axisOption = _axisOption;
        this._optionsService = _optionsService;
        this._state = {};
        this.config = {};
        this.show = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._setOptions();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._removeOption();
    }
    /**
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        let config = assignDefined(this._state, {
            id: this.id,
            show: this.show,
            gridIndex: this.gridIndex,
            position: this.position,
            offset: this.offset,
            type: this.type,
            name: this.name,
            nameLocation: this.nameLocation,
            nameTextStyle: this.nameTextStyle,
            nameGap: this.nameGap,
            nameRotate: this.nameRotate,
            inverse: this.inverse,
            boundaryGap: this.boundaryGap,
            min: this.min,
            max: this.max,
            scale: this.scale,
            minInterval: this.minInterval,
            interval: this.interval,
            logBase: this.logBase,
            silent: this.silent,
            triggerEvent: this.triggerEvent,
            axisLine: this.axisLine,
            axisTick: this.axisTick,
            axisLabel: this.axisLabel,
            splitLine: this.splitLine,
            splitArea: this.splitArea,
            data: this.data,
            axisPointer: this.axisPointer,
            zlevel: this.zlevel,
            z: this.z,
        }, this.config ? this.config : {});
        this._optionsService.setArrayOption(this._axisOption, config);
    }
    /**
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption(this._axisOption);
    }
}
TdChartAxisComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    id: [{ type: Input, args: ['id',] }],
    show: [{ type: Input, args: ['show',] }],
    gridIndex: [{ type: Input, args: ['gridIndex',] }],
    offset: [{ type: Input, args: ['offset',] }],
    type: [{ type: Input, args: ['type',] }],
    name: [{ type: Input, args: ['name',] }],
    nameLocation: [{ type: Input, args: ['nameLocation',] }],
    nameTextStyle: [{ type: Input, args: ['nameTextStyle',] }],
    nameGap: [{ type: Input, args: ['nameGap',] }],
    nameRotate: [{ type: Input, args: ['nameRotate',] }],
    inverse: [{ type: Input, args: ['inverse',] }],
    boundaryGap: [{ type: Input, args: ['boundaryGap',] }],
    min: [{ type: Input, args: ['min',] }],
    max: [{ type: Input, args: ['max',] }],
    scale: [{ type: Input, args: ['scale',] }],
    minInterval: [{ type: Input, args: ['minInterval',] }],
    interval: [{ type: Input, args: ['interval',] }],
    logBase: [{ type: Input, args: ['logBase',] }],
    silent: [{ type: Input, args: ['silent',] }],
    triggerEvent: [{ type: Input, args: ['triggerEvent',] }],
    axisLine: [{ type: Input, args: ['axisLine',] }],
    axisTick: [{ type: Input, args: ['axisTick',] }],
    axisLabel: [{ type: Input, args: ['axisLabel',] }],
    splitLine: [{ type: Input, args: ['splitLine',] }],
    splitArea: [{ type: Input, args: ['splitArea',] }],
    data: [{ type: Input, args: ['data',] }],
    axisPointer: [{ type: Input, args: ['axisPointer',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }]
};
if (false) {
    /** @type {?} */
    TdChartAxisComponent.prototype._state;
    /** @type {?} */
    TdChartAxisComponent.prototype.config;
    /** @type {?} */
    TdChartAxisComponent.prototype.id;
    /** @type {?} */
    TdChartAxisComponent.prototype.show;
    /** @type {?} */
    TdChartAxisComponent.prototype.gridIndex;
    /** @type {?} */
    TdChartAxisComponent.prototype.offset;
    /** @type {?} */
    TdChartAxisComponent.prototype.position;
    /** @type {?} */
    TdChartAxisComponent.prototype.type;
    /** @type {?} */
    TdChartAxisComponent.prototype.name;
    /** @type {?} */
    TdChartAxisComponent.prototype.nameLocation;
    /** @type {?} */
    TdChartAxisComponent.prototype.nameTextStyle;
    /** @type {?} */
    TdChartAxisComponent.prototype.nameGap;
    /** @type {?} */
    TdChartAxisComponent.prototype.nameRotate;
    /** @type {?} */
    TdChartAxisComponent.prototype.inverse;
    /** @type {?} */
    TdChartAxisComponent.prototype.boundaryGap;
    /** @type {?} */
    TdChartAxisComponent.prototype.min;
    /** @type {?} */
    TdChartAxisComponent.prototype.max;
    /** @type {?} */
    TdChartAxisComponent.prototype.scale;
    /** @type {?} */
    TdChartAxisComponent.prototype.minInterval;
    /** @type {?} */
    TdChartAxisComponent.prototype.interval;
    /** @type {?} */
    TdChartAxisComponent.prototype.logBase;
    /** @type {?} */
    TdChartAxisComponent.prototype.silent;
    /** @type {?} */
    TdChartAxisComponent.prototype.triggerEvent;
    /** @type {?} */
    TdChartAxisComponent.prototype.axisLine;
    /** @type {?} */
    TdChartAxisComponent.prototype.axisTick;
    /** @type {?} */
    TdChartAxisComponent.prototype.axisLabel;
    /** @type {?} */
    TdChartAxisComponent.prototype.splitLine;
    /** @type {?} */
    TdChartAxisComponent.prototype.splitArea;
    /** @type {?} */
    TdChartAxisComponent.prototype.data;
    /** @type {?} */
    TdChartAxisComponent.prototype.axisPointer;
    /** @type {?} */
    TdChartAxisComponent.prototype.zlevel;
    /** @type {?} */
    TdChartAxisComponent.prototype.z;
    /** @type {?} */
    TdChartAxisComponent.prototype._axisOption;
    /** @type {?} */
    TdChartAxisComponent.prototype._optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImJhc2UvYXhpcy9heGlzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFHcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQWN6QyxNQUFNLE9BQWdCLG9CQUFvQjs7Ozs7SUFvQ3hDLFlBQW9CLFdBQW1CLEVBQVUsZUFBc0M7UUFBbkUsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFuQy9FLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFUixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBR25CLFNBQUksR0FBWSxJQUFJLENBQUM7SUE4QnNELENBQUM7Ozs7SUFFM0YsUUFBUTtRQUNOLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7O0lBRU8sV0FBVzs7WUFDYixNQUFNLEdBQVEsYUFBYSxDQUM3QixJQUFJLENBQUMsTUFBTSxFQUNYO1lBQ0UsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1lBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZ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O0lBQ25DLG1DQUFtQzs7SUFDbkMscUNBQStCOztJQUMvQiwyQ0FBMEM7O0lBQzFDLHdDQUFvQzs7SUFDcEMsdUNBQWtDOztJQUNsQyxzQ0FBaUM7O0lBQ2pDLDRDQUE2Qzs7SUFDN0Msd0NBQXlDOztJQUN6Qyx3Q0FBeUM7O0lBQ3pDLHlDQUE0Qzs7SUFDNUMseUNBQTRDOztJQUM1Qyx5Q0FBNEM7O0lBQzVDLG9DQUF5Qjs7SUFDekIsMkNBQWtEOztJQUNsRCxzQ0FBZ0M7O0lBQ2hDLGlDQUFzQjs7SUFFViwyQ0FBMkI7O0lBQUUsK0NBQThDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge1xuICBJVGRBeGlzTGluZSxcbiAgSVRkQXhpc0xhYmVsLFxuICBJVGRBeGlzVGljayxcbiAgSVRkU3BsaXRMaW5lLFxuICBJVGRTcGxpdEFyZWEsXG4gIElUZEF4aXNQb2ludGVyLFxuICBUZEF4aXNUeXBlLFxuICBUZE5hbWVMb2NhdGlvbixcbiAgVGRYQXhpc1Bvc2l0aW9uLFxuICBUZFlBeGlzUG9zaXRpb24sXG59IGZyb20gJy4vYXhpcy5pbnRlcmZhY2UnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGRDaGFydEF4aXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgQElucHV0KCdzaG93Jykgc2hvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnZ3JpZEluZGV4JykgZ3JpZEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnb2Zmc2V0Jykgb2Zmc2V0OiBudW1iZXI7XG4gIGFic3RyYWN0IHBvc2l0aW9uOiBUZFhBeGlzUG9zaXRpb24gfCBUZFlBeGlzUG9zaXRpb247XG4gIEBJbnB1dCgndHlwZScpIHR5cGU6IFRkQXhpc1R5cGU7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCduYW1lTG9jYXRpb24nKSBuYW1lTG9jYXRpb246IFRkTmFtZUxvY2F0aW9uO1xuICBASW5wdXQoJ25hbWVUZXh0U3R5bGUnKSBuYW1lVGV4dFN0eWxlOiBhbnk7XG4gIEBJbnB1dCgnbmFtZUdhcCcpIG5hbWVHYXA6IG51bWJlcjtcbiAgQElucHV0KCduYW1lUm90YXRlJykgbmFtZVJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ2ludmVyc2UnKSBpbnZlcnNlOiBib29sZWFuO1xuICBASW5wdXQoJ2JvdW5kYXJ5R2FwJykgYm91bmRhcnlHYXA6IGJvb2xlYW4gfCBzdHJpbmdbXTtcbiAgQElucHV0KCdtaW4nKSBtaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdtYXgnKSBtYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdzY2FsZScpIHNjYWxlOiBib29sZWFuO1xuICBASW5wdXQoJ21pbkludGVydmFsJykgbWluSW50ZXJ2YWw6IG51bWJlcjtcbiAgQElucHV0KCdpbnRlcnZhbCcpIGludGVydmFsOiBudW1iZXI7XG4gIEBJbnB1dCgnbG9nQmFzZScpIGxvZ0Jhc2U6IG51bWJlcjtcbiAgQElucHV0KCdzaWxlbnQnKSBzaWxlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgndHJpZ2dlckV2ZW50JykgdHJpZ2dlckV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoJ2F4aXNMaW5lJykgYXhpc0xpbmU6IElUZEF4aXNMaW5lO1xuICBASW5wdXQoJ2F4aXNUaWNrJykgYXhpc1RpY2s6IElUZEF4aXNUaWNrO1xuICBASW5wdXQoJ2F4aXNMYWJlbCcpIGF4aXNMYWJlbDogSVRkQXhpc0xhYmVsO1xuICBASW5wdXQoJ3NwbGl0TGluZScpIHNwbGl0TGluZTogSVRkU3BsaXRMaW5lO1xuICBASW5wdXQoJ3NwbGl0QXJlYScpIHNwbGl0QXJlYTogSVRkU3BsaXRBcmVhO1xuICBASW5wdXQoJ2RhdGEnKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgnYXhpc1BvaW50ZXInKSBheGlzUG9pbnRlcjogSVRkQXhpc1BvaW50ZXI7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9heGlzT3B0aW9uOiBzdHJpbmcsIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQoXG4gICAgICB0aGlzLl9zdGF0ZSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICAgIHNob3c6IHRoaXMuc2hvdyxcbiAgICAgICAgZ3JpZEluZGV4OiB0aGlzLmdyaWRJbmRleCxcbiAgICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICAgIG9mZnNldDogdGhpcy5vZmZzZXQsXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICBuYW1lTG9jYXRpb246IHRoaXMubmFtZUxvY2F0aW9uLFxuICAgICAgICBuYW1lVGV4dFN0eWxlOiB0aGlzLm5hbWVUZXh0U3R5bGUsXG4gICAgICAgIG5hbWVHYXA6IHRoaXMubmFtZUdhcCxcbiAgICAgICAgbmFtZVJvdGF0ZTogdGhpcy5uYW1lUm90YXRlLFxuICAgICAgICBpbnZlcnNlOiB0aGlzLmludmVyc2UsXG4gICAgICAgIGJvdW5kYXJ5R2FwOiB0aGlzLmJvdW5kYXJ5R2FwLFxuICAgICAgICBtaW46IHRoaXMubWluLFxuICAgICAgICBtYXg6IHRoaXMubWF4LFxuICAgICAgICBzY2FsZTogdGhpcy5zY2FsZSxcbiAgICAgICAgbWluSW50ZXJ2YWw6IHRoaXMubWluSW50ZXJ2YWwsXG4gICAgICAgIGludGVydmFsOiB0aGlzLmludGVydmFsLFxuICAgICAgICBsb2dCYXNlOiB0aGlzLmxvZ0Jhc2UsXG4gICAgICAgIHNpbGVudDogdGhpcy5zaWxlbnQsXG4gICAgICAgIHRyaWdnZXJFdmVudDogdGhpcy50cmlnZ2VyRXZlbnQsXG4gICAgICAgIGF4aXNMaW5lOiB0aGlzLmF4aXNMaW5lLFxuICAgICAgICBheGlzVGljazogdGhpcy5heGlzVGljayxcbiAgICAgICAgYXhpc0xhYmVsOiB0aGlzLmF4aXNMYWJlbCxcbiAgICAgICAgc3BsaXRMaW5lOiB0aGlzLnNwbGl0TGluZSxcbiAgICAgICAgc3BsaXRBcmVhOiB0aGlzLnNwbGl0QXJlYSxcbiAgICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgICBheGlzUG9pbnRlcjogdGhpcy5heGlzUG9pbnRlcixcbiAgICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgICAgejogdGhpcy56LFxuICAgICAgfSxcbiAgICAgIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSxcbiAgICApO1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnNldEFycmF5T3B0aW9uKHRoaXMuX2F4aXNPcHRpb24sIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UuY2xlYXJPcHRpb24odGhpcy5fYXhpc09wdGlvbik7XG4gIH1cbn1cbiJdfQ==