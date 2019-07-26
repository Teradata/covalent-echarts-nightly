/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { assignDefined } from '../utils';
/**
 * @abstract
 */
var TdChartAxisComponent = /** @class */ (function () {
    function TdChartAxisComponent(_axisOption, _optionsService) {
        this._axisOption = _axisOption;
        this._optionsService = _optionsService;
        this._state = {};
        this.config = {};
        this.show = true;
    }
    /**
     * @return {?}
     */
    TdChartAxisComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdChartAxisComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdChartAxisComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeOption();
    };
    /**
     * @return {?}
     */
    TdChartAxisComponent.prototype._setOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = assignDefined(this._state, {
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
    };
    /**
     * @return {?}
     */
    TdChartAxisComponent.prototype._removeOption = /**
     * @return {?}
     */
    function () {
        this._optionsService.clearOption(this._axisOption);
    };
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
    return TdChartAxisComponent;
}());
export { TdChartAxisComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImJhc2UvYXhpcy9heGlzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFHcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQWN6QztJQW9DRSw4QkFBb0IsV0FBbUIsRUFBVSxlQUFzQztRQUFuRSxnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQUFVLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQW5DL0UsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUVSLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFHbkIsU0FBSSxHQUFZLElBQUksQ0FBQztJQThCc0QsQ0FBQzs7OztJQUUzRix1Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELDBDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsMENBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFTywwQ0FBVzs7O0lBQW5COztZQUNNLE1BQU0sR0FBUSxhQUFhLENBQzdCLElBQUksQ0FBQyxNQUFNLEVBQ1g7WUFDRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixZQUFZLEVBQUUsSUFB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QUFrQzs7SUFDbEMsMENBQXdDOztJQUN4Qyx1Q0FBbUM7O0lBQ25DLDJDQUFzRDs7SUFDdEQsbUNBQW1DOztJQUNuQyxtQ0FBbUM7O0lBQ25DLHFDQUErQjs7SUFDL0IsMkNBQTBDOztJQUMxQyx3Q0FBb0M7O0lBQ3BDLHVDQUFrQzs7SUFDbEMsc0NBQWlDOztJQUNqQyw0Q0FBNkM7O0lBQzdDLHdDQUF5Qzs7SUFDekMsd0NBQXlDOztJQUN6Qyx5Q0FBNEM7O0lBQzVDLHlDQUE0Qzs7SUFDNUMseUNBQTRDOztJQUM1QyxvQ0FBeUI7O0lBQ3pCLDJDQUFrRDs7SUFDbEQsc0NBQWdDOztJQUNoQyxpQ0FBc0I7O0lBRVYsMkNBQTJCOztJQUFFLCtDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgSVRkQXhpc0xpbmUsXG4gIElUZEF4aXNMYWJlbCxcbiAgSVRkQXhpc1RpY2ssXG4gIElUZFNwbGl0TGluZSxcbiAgSVRkU3BsaXRBcmVhLFxuICBJVGRBeGlzUG9pbnRlcixcbiAgVGRBeGlzVHlwZSxcbiAgVGROYW1lTG9jYXRpb24sXG4gIFRkWEF4aXNQb3NpdGlvbixcbiAgVGRZQXhpc1Bvc2l0aW9uLFxufSBmcm9tICcuL2F4aXMuaW50ZXJmYWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRkQ2hhcnRBeGlzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnc2hvdycpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ2dyaWRJbmRleCcpIGdyaWRJbmRleDogbnVtYmVyO1xuICBASW5wdXQoJ29mZnNldCcpIG9mZnNldDogbnVtYmVyO1xuICBhYnN0cmFjdCBwb3NpdGlvbjogVGRYQXhpc1Bvc2l0aW9uIHwgVGRZQXhpc1Bvc2l0aW9uO1xuICBASW5wdXQoJ3R5cGUnKSB0eXBlOiBUZEF4aXNUeXBlO1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZUxvY2F0aW9uJykgbmFtZUxvY2F0aW9uOiBUZE5hbWVMb2NhdGlvbjtcbiAgQElucHV0KCduYW1lVGV4dFN0eWxlJykgbmFtZVRleHRTdHlsZTogYW55O1xuICBASW5wdXQoJ25hbWVHYXAnKSBuYW1lR2FwOiBudW1iZXI7XG4gIEBJbnB1dCgnbmFtZVJvdGF0ZScpIG5hbWVSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCdpbnZlcnNlJykgaW52ZXJzZTogYm9vbGVhbjtcbiAgQElucHV0KCdib3VuZGFyeUdhcCcpIGJvdW5kYXJ5R2FwOiBib29sZWFuIHwgc3RyaW5nW107XG4gIEBJbnB1dCgnbWluJykgbWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnbWF4JykgbWF4OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnc2NhbGUnKSBzY2FsZTogYm9vbGVhbjtcbiAgQElucHV0KCdtaW5JbnRlcnZhbCcpIG1pbkludGVydmFsOiBudW1iZXI7XG4gIEBJbnB1dCgnaW50ZXJ2YWwnKSBpbnRlcnZhbDogbnVtYmVyO1xuICBASW5wdXQoJ2xvZ0Jhc2UnKSBsb2dCYXNlOiBudW1iZXI7XG4gIEBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuICBASW5wdXQoJ3RyaWdnZXJFdmVudCcpIHRyaWdnZXJFdmVudDogYm9vbGVhbjtcbiAgQElucHV0KCdheGlzTGluZScpIGF4aXNMaW5lOiBJVGRBeGlzTGluZTtcbiAgQElucHV0KCdheGlzVGljaycpIGF4aXNUaWNrOiBJVGRBeGlzVGljaztcbiAgQElucHV0KCdheGlzTGFiZWwnKSBheGlzTGFiZWw6IElUZEF4aXNMYWJlbDtcbiAgQElucHV0KCdzcGxpdExpbmUnKSBzcGxpdExpbmU6IElUZFNwbGl0TGluZTtcbiAgQElucHV0KCdzcGxpdEFyZWEnKSBzcGxpdEFyZWE6IElUZFNwbGl0QXJlYTtcbiAgQElucHV0KCdkYXRhJykgZGF0YTogYW55O1xuICBASW5wdXQoJ2F4aXNQb2ludGVyJykgYXhpc1BvaW50ZXI6IElUZEF4aXNQb2ludGVyO1xuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfYXhpc09wdGlvbjogc3RyaW5nLCBwcml2YXRlIF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKFxuICAgICAgdGhpcy5fc3RhdGUsXG4gICAgICB7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICBzaG93OiB0aGlzLnNob3csXG4gICAgICAgIGdyaWRJbmRleDogdGhpcy5ncmlkSW5kZXgsXG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgbmFtZUxvY2F0aW9uOiB0aGlzLm5hbWVMb2NhdGlvbixcbiAgICAgICAgbmFtZVRleHRTdHlsZTogdGhpcy5uYW1lVGV4dFN0eWxlLFxuICAgICAgICBuYW1lR2FwOiB0aGlzLm5hbWVHYXAsXG4gICAgICAgIG5hbWVSb3RhdGU6IHRoaXMubmFtZVJvdGF0ZSxcbiAgICAgICAgaW52ZXJzZTogdGhpcy5pbnZlcnNlLFxuICAgICAgICBib3VuZGFyeUdhcDogdGhpcy5ib3VuZGFyeUdhcCxcbiAgICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICAgIG1pbkludGVydmFsOiB0aGlzLm1pbkludGVydmFsLFxuICAgICAgICBpbnRlcnZhbDogdGhpcy5pbnRlcnZhbCxcbiAgICAgICAgbG9nQmFzZTogdGhpcy5sb2dCYXNlLFxuICAgICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgICB0cmlnZ2VyRXZlbnQ6IHRoaXMudHJpZ2dlckV2ZW50LFxuICAgICAgICBheGlzTGluZTogdGhpcy5heGlzTGluZSxcbiAgICAgICAgYXhpc1RpY2s6IHRoaXMuYXhpc1RpY2ssXG4gICAgICAgIGF4aXNMYWJlbDogdGhpcy5heGlzTGFiZWwsXG4gICAgICAgIHNwbGl0TGluZTogdGhpcy5zcGxpdExpbmUsXG4gICAgICAgIHNwbGl0QXJlYTogdGhpcy5zcGxpdEFyZWEsXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgYXhpc1BvaW50ZXI6IHRoaXMuYXhpc1BvaW50ZXIsXG4gICAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICAgIHo6IHRoaXMueixcbiAgICAgIH0sXG4gICAgICB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sXG4gICAgKTtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5zZXRBcnJheU9wdGlvbih0aGlzLl9heGlzT3B0aW9uLCBjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmNsZWFyT3B0aW9uKHRoaXMuX2F4aXNPcHRpb24pO1xuICB9XG59XG4iXX0=