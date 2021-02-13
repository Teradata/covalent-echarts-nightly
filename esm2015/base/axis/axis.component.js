/**
 * @fileoverview added by tsickle
 * Generated from: axis/axis.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Input, Directive } from '@angular/core';
import { TdChartOptionsService } from '../chart-options.service';
import { assignDefined } from '../utils';
/**
 * @abstract
 */
export class TdChartAxisDirective {
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
     * @private
     * @return {?}
     */
    _setOptions() {
        /** @type {?} */
        const config = assignDefined(this._state, {
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
     * @private
     * @return {?}
     */
    _removeOption() {
        this._optionsService.clearOption(this._axisOption);
    }
}
TdChartAxisDirective.decorators = [
    { type: Directive }
];
/** @nocollapse */
TdChartAxisDirective.ctorParameters = () => [
    { type: String },
    { type: TdChartOptionsService }
];
TdChartAxisDirective.propDecorators = {
    config: [{ type: Input }],
    id: [{ type: Input }],
    show: [{ type: Input }],
    gridIndex: [{ type: Input }],
    offset: [{ type: Input }],
    type: [{ type: Input }],
    name: [{ type: Input }],
    nameLocation: [{ type: Input }],
    nameTextStyle: [{ type: Input }],
    nameGap: [{ type: Input }],
    nameRotate: [{ type: Input }],
    inverse: [{ type: Input }],
    boundaryGap: [{ type: Input }],
    min: [{ type: Input }],
    max: [{ type: Input }],
    scale: [{ type: Input }],
    minInterval: [{ type: Input }],
    interval: [{ type: Input }],
    logBase: [{ type: Input }],
    silent: [{ type: Input }],
    triggerEvent: [{ type: Input }],
    axisLine: [{ type: Input }],
    axisTick: [{ type: Input }],
    axisLabel: [{ type: Input }],
    splitLine: [{ type: Input }],
    splitArea: [{ type: Input }],
    data: [{ type: Input }],
    axisPointer: [{ type: Input }],
    zlevel: [{ type: Input }],
    z: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    TdChartAxisDirective.prototype._state;
    /** @type {?} */
    TdChartAxisDirective.prototype.config;
    /** @type {?} */
    TdChartAxisDirective.prototype.id;
    /** @type {?} */
    TdChartAxisDirective.prototype.show;
    /** @type {?} */
    TdChartAxisDirective.prototype.gridIndex;
    /** @type {?} */
    TdChartAxisDirective.prototype.offset;
    /** @type {?} */
    TdChartAxisDirective.prototype.position;
    /** @type {?} */
    TdChartAxisDirective.prototype.type;
    /** @type {?} */
    TdChartAxisDirective.prototype.name;
    /** @type {?} */
    TdChartAxisDirective.prototype.nameLocation;
    /** @type {?} */
    TdChartAxisDirective.prototype.nameTextStyle;
    /** @type {?} */
    TdChartAxisDirective.prototype.nameGap;
    /** @type {?} */
    TdChartAxisDirective.prototype.nameRotate;
    /** @type {?} */
    TdChartAxisDirective.prototype.inverse;
    /** @type {?} */
    TdChartAxisDirective.prototype.boundaryGap;
    /** @type {?} */
    TdChartAxisDirective.prototype.min;
    /** @type {?} */
    TdChartAxisDirective.prototype.max;
    /** @type {?} */
    TdChartAxisDirective.prototype.scale;
    /** @type {?} */
    TdChartAxisDirective.prototype.minInterval;
    /** @type {?} */
    TdChartAxisDirective.prototype.interval;
    /** @type {?} */
    TdChartAxisDirective.prototype.logBase;
    /** @type {?} */
    TdChartAxisDirective.prototype.silent;
    /** @type {?} */
    TdChartAxisDirective.prototype.triggerEvent;
    /** @type {?} */
    TdChartAxisDirective.prototype.axisLine;
    /** @type {?} */
    TdChartAxisDirective.prototype.axisTick;
    /** @type {?} */
    TdChartAxisDirective.prototype.axisLabel;
    /** @type {?} */
    TdChartAxisDirective.prototype.splitLine;
    /** @type {?} */
    TdChartAxisDirective.prototype.splitArea;
    /** @type {?} */
    TdChartAxisDirective.prototype.data;
    /** @type {?} */
    TdChartAxisDirective.prototype.axisPointer;
    /** @type {?} */
    TdChartAxisDirective.prototype.zlevel;
    /** @type {?} */
    TdChartAxisDirective.prototype.z;
    /**
     * @type {?}
     * @private
     */
    TdChartAxisDirective.prototype._axisOption;
    /**
     * @type {?}
     * @private
     */
    TdChartAxisDirective.prototype._optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vLi4vc3JjL3BsYXRmb3JtL2VjaGFydHMvYmFzZS8iLCJzb3VyY2VzIjpbImF4aXMvYXhpcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFnQyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFL0UsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQWV6QyxNQUFNLE9BQWdCLG9CQUFvQjs7Ozs7SUFvQ3hDLFlBQW9CLFdBQW1CLEVBQVUsZUFBc0M7UUFBbkUsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFuQy9FLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFaEIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUdqQixTQUFJLEdBQVksSUFBSSxDQUFDO0lBOEI0RCxDQUFDOzs7O0lBRTNGLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTyxXQUFXOztjQUNYLE1BQU0sR0FBUSxhQUFhLENBQy9CLElBQUksQ0FBQyxNQUFNLEVBQ1g7WUFDRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFB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OztJQUN4QixpQ0FBbUI7Ozs7O0lBRVAsMkNBQTJCOzs7OztJQUFFLCtDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95LCBEaXJlY3RpdmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY2hhcnQtb3B0aW9ucy5zZXJ2aWNlJztcbmltcG9ydCB7IGFzc2lnbkRlZmluZWQgfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge1xuICBJVGRBeGlzTGluZSxcbiAgSVRkQXhpc0xhYmVsLFxuICBJVGRBeGlzVGljayxcbiAgSVRkU3BsaXRMaW5lLFxuICBJVGRTcGxpdEFyZWEsXG4gIElUZEF4aXNQb2ludGVyLFxuICBUZEF4aXNUeXBlLFxuICBUZE5hbWVMb2NhdGlvbixcbiAgVGRYQXhpc1Bvc2l0aW9uLFxuICBUZFlBeGlzUG9zaXRpb24sXG59IGZyb20gJy4vYXhpcy5pbnRlcmZhY2UnO1xuXG5ARGlyZWN0aXZlKClcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZENoYXJ0QXhpc0RpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge307XG5cbiAgQElucHV0KCkgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZ3JpZEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgpIG9mZnNldDogbnVtYmVyO1xuICBhYnN0cmFjdCBwb3NpdGlvbjogVGRYQXhpc1Bvc2l0aW9uIHwgVGRZQXhpc1Bvc2l0aW9uO1xuICBASW5wdXQoKSB0eXBlOiBUZEF4aXNUeXBlO1xuICBASW5wdXQoKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG5hbWVMb2NhdGlvbjogVGROYW1lTG9jYXRpb247XG4gIEBJbnB1dCgpIG5hbWVUZXh0U3R5bGU6IGFueTtcbiAgQElucHV0KCkgbmFtZUdhcDogbnVtYmVyO1xuICBASW5wdXQoKSBuYW1lUm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgpIGludmVyc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGJvdW5kYXJ5R2FwOiBib29sZWFuIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIG1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBtYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCkgc2NhbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIG1pbkludGVydmFsOiBudW1iZXI7XG4gIEBJbnB1dCgpIGludGVydmFsOiBudW1iZXI7XG4gIEBJbnB1dCgpIGxvZ0Jhc2U6IG51bWJlcjtcbiAgQElucHV0KCkgc2lsZW50OiBib29sZWFuO1xuICBASW5wdXQoKSB0cmlnZ2VyRXZlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGF4aXNMaW5lOiBJVGRBeGlzTGluZTtcbiAgQElucHV0KCkgYXhpc1RpY2s6IElUZEF4aXNUaWNrO1xuICBASW5wdXQoKSBheGlzTGFiZWw6IElUZEF4aXNMYWJlbDtcbiAgQElucHV0KCkgc3BsaXRMaW5lOiBJVGRTcGxpdExpbmU7XG4gIEBJbnB1dCgpIHNwbGl0QXJlYTogSVRkU3BsaXRBcmVhO1xuICBASW5wdXQoKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgpIGF4aXNQb2ludGVyOiBJVGRBeGlzUG9pbnRlcjtcbiAgQElucHV0KCkgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgpIHo6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9heGlzT3B0aW9uOiBzdHJpbmcsIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGNvbnN0IGNvbmZpZzogYW55ID0gYXNzaWduRGVmaW5lZChcbiAgICAgIHRoaXMuX3N0YXRlLFxuICAgICAge1xuICAgICAgICBpZDogdGhpcy5pZCxcbiAgICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgICBncmlkSW5kZXg6IHRoaXMuZ3JpZEluZGV4LFxuICAgICAgICBwb3NpdGlvbjogdGhpcy5wb3NpdGlvbixcbiAgICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgIG5hbWVMb2NhdGlvbjogdGhpcy5uYW1lTG9jYXRpb24sXG4gICAgICAgIG5hbWVUZXh0U3R5bGU6IHRoaXMubmFtZVRleHRTdHlsZSxcbiAgICAgICAgbmFtZUdhcDogdGhpcy5uYW1lR2FwLFxuICAgICAgICBuYW1lUm90YXRlOiB0aGlzLm5hbWVSb3RhdGUsXG4gICAgICAgIGludmVyc2U6IHRoaXMuaW52ZXJzZSxcbiAgICAgICAgYm91bmRhcnlHYXA6IHRoaXMuYm91bmRhcnlHYXAsXG4gICAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICAgIHNjYWxlOiB0aGlzLnNjYWxlLFxuICAgICAgICBtaW5JbnRlcnZhbDogdGhpcy5taW5JbnRlcnZhbCxcbiAgICAgICAgaW50ZXJ2YWw6IHRoaXMuaW50ZXJ2YWwsXG4gICAgICAgIGxvZ0Jhc2U6IHRoaXMubG9nQmFzZSxcbiAgICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICAgICAgdHJpZ2dlckV2ZW50OiB0aGlzLnRyaWdnZXJFdmVudCxcbiAgICAgICAgYXhpc0xpbmU6IHRoaXMuYXhpc0xpbmUsXG4gICAgICAgIGF4aXNUaWNrOiB0aGlzLmF4aXNUaWNrLFxuICAgICAgICBheGlzTGFiZWw6IHRoaXMuYXhpc0xhYmVsLFxuICAgICAgICBzcGxpdExpbmU6IHRoaXMuc3BsaXRMaW5lLFxuICAgICAgICBzcGxpdEFyZWE6IHRoaXMuc3BsaXRBcmVhLFxuICAgICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICAgIGF4aXNQb2ludGVyOiB0aGlzLmF4aXNQb2ludGVyLFxuICAgICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgICB6OiB0aGlzLnosXG4gICAgICB9LFxuICAgICAgdGhpcy5jb25maWcgPyB0aGlzLmNvbmZpZyA6IHt9LFxuICAgICk7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2Uuc2V0QXJyYXlPcHRpb24odGhpcy5fYXhpc09wdGlvbiwgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5jbGVhck9wdGlvbih0aGlzLl9heGlzT3B0aW9uKTtcbiAgfVxufVxuIl19