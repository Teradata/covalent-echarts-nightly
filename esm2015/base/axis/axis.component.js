/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
TdChartAxisComponent.propDecorators = {
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
    /**
     * @type {?}
     * @private
     */
    TdChartAxisComponent.prototype._axisOption;
    /**
     * @type {?}
     * @private
     */
    TdChartAxisComponent.prototype._optionsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9iYXNlLyIsInNvdXJjZXMiOlsiYXhpcy9heGlzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFHcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLFVBQVUsQ0FBQzs7OztBQWN6QyxNQUFNLE9BQWdCLG9CQUFvQjs7Ozs7SUFvQ3hDLFlBQW9CLFdBQW1CLEVBQVUsZUFBc0M7UUFBbkUsZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFBVSxvQkFBZSxHQUFmLGVBQWUsQ0FBdUI7UUFuQy9FLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFaEIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUdqQixTQUFJLEdBQVksSUFBSSxDQUFDO0lBOEI0RCxDQUFDOzs7O0lBRTNGLFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTyxXQUFXOztjQUNYLE1BQU0sR0FBUSxhQUFhLENBQy9CLElBQUksQ0FBQyxNQUFNLEVBQ1g7WUFDRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7WUFDWCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVk7WUFDL0IsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO1lBQ2pDLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVU7WUFDM0IsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7WUFDYixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ1YsRUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQy9CO1FBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNoRSxDQUFDOzs7OztJQUVPLGFBQWE7UUFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztxQkF6RkEsS0FBSztpQkFFTCxLQUFLO21CQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLO21CQUVMLEtBQUs7bUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzRCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7MEJBQ0wsS0FBSztrQkFDTCxLQUFLO2tCQUNMLEtBQUs7b0JBQ0wsS0FBSzswQkFDTCxLQUFLO3VCQUNMLEtBQUs7c0JBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7dUJBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO21CQUNMLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxLQUFLO2dCQUNMLEtBQUs7Ozs7Ozs7SUFqQ04sc0NBQXlCOztJQUV6QixzQ0FBMEI7O0lBRTFCLGtDQUFvQjs7SUFDcEIsb0NBQThCOztJQUM5Qix5Q0FBMkI7O0lBQzNCLHNDQUF3Qjs7SUFDeEIsd0NBQXFEOztJQUNyRCxvQ0FBMEI7O0lBQzFCLG9DQUFzQjs7SUFDdEIsNENBQXNDOztJQUN0Qyw2Q0FBNEI7O0lBQzVCLHVDQUF5Qjs7SUFDekIsMENBQTRCOztJQUM1Qix1Q0FBMEI7O0lBQzFCLDJDQUF5Qzs7SUFDekMsbUNBQThCOztJQUM5QixtQ0FBOEI7O0lBQzlCLHFDQUF3Qjs7SUFDeEIsMkNBQTZCOztJQUM3Qix3Q0FBMEI7O0lBQzFCLHVDQUF5Qjs7SUFDekIsc0NBQXlCOztJQUN6Qiw0Q0FBK0I7O0lBQy9CLHdDQUErQjs7SUFDL0Isd0NBQStCOztJQUMvQix5Q0FBaUM7O0lBQ2pDLHlDQUFpQzs7SUFDakMseUNBQWlDOztJQUNqQyxvQ0FBbUI7O0lBQ25CLDJDQUFxQzs7SUFDckMsc0NBQXdCOztJQUN4QixpQ0FBbUI7Ozs7O0lBRVAsMkNBQTJCOzs7OztJQUFFLCtDQUE4QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtcbiAgSVRkQXhpc0xpbmUsXG4gIElUZEF4aXNMYWJlbCxcbiAgSVRkQXhpc1RpY2ssXG4gIElUZFNwbGl0TGluZSxcbiAgSVRkU3BsaXRBcmVhLFxuICBJVGRBeGlzUG9pbnRlcixcbiAgVGRBeGlzVHlwZSxcbiAgVGROYW1lTG9jYXRpb24sXG4gIFRkWEF4aXNQb3NpdGlvbixcbiAgVGRZQXhpc1Bvc2l0aW9uLFxufSBmcm9tICcuL2F4aXMuaW50ZXJmYWNlJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRkQ2hhcnRBeGlzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcblxuICBASW5wdXQoKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNob3c6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBncmlkSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCkgb2Zmc2V0OiBudW1iZXI7XG4gIGFic3RyYWN0IHBvc2l0aW9uOiBUZFhBeGlzUG9zaXRpb24gfCBUZFlBeGlzUG9zaXRpb247XG4gIEBJbnB1dCgpIHR5cGU6IFRkQXhpc1R5cGU7XG4gIEBJbnB1dCgpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbmFtZUxvY2F0aW9uOiBUZE5hbWVMb2NhdGlvbjtcbiAgQElucHV0KCkgbmFtZVRleHRTdHlsZTogYW55O1xuICBASW5wdXQoKSBuYW1lR2FwOiBudW1iZXI7XG4gIEBJbnB1dCgpIG5hbWVSb3RhdGU6IG51bWJlcjtcbiAgQElucHV0KCkgaW52ZXJzZTogYm9vbGVhbjtcbiAgQElucHV0KCkgYm91bmRhcnlHYXA6IGJvb2xlYW4gfCBzdHJpbmdbXTtcbiAgQElucHV0KCkgbWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgpIG1heDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoKSBzY2FsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgbWluSW50ZXJ2YWw6IG51bWJlcjtcbiAgQElucHV0KCkgaW50ZXJ2YWw6IG51bWJlcjtcbiAgQElucHV0KCkgbG9nQmFzZTogbnVtYmVyO1xuICBASW5wdXQoKSBzaWxlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRyaWdnZXJFdmVudDogYm9vbGVhbjtcbiAgQElucHV0KCkgYXhpc0xpbmU6IElUZEF4aXNMaW5lO1xuICBASW5wdXQoKSBheGlzVGljazogSVRkQXhpc1RpY2s7XG4gIEBJbnB1dCgpIGF4aXNMYWJlbDogSVRkQXhpc0xhYmVsO1xuICBASW5wdXQoKSBzcGxpdExpbmU6IElUZFNwbGl0TGluZTtcbiAgQElucHV0KCkgc3BsaXRBcmVhOiBJVGRTcGxpdEFyZWE7XG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcbiAgQElucHV0KCkgYXhpc1BvaW50ZXI6IElUZEF4aXNQb2ludGVyO1xuICBASW5wdXQoKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCkgejogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F4aXNPcHRpb246IHN0cmluZywgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG4gICAgY29uc3QgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKFxuICAgICAgdGhpcy5fc3RhdGUsXG4gICAgICB7XG4gICAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgICBzaG93OiB0aGlzLnNob3csXG4gICAgICAgIGdyaWRJbmRleDogdGhpcy5ncmlkSW5kZXgsXG4gICAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgICAgbmFtZUxvY2F0aW9uOiB0aGlzLm5hbWVMb2NhdGlvbixcbiAgICAgICAgbmFtZVRleHRTdHlsZTogdGhpcy5uYW1lVGV4dFN0eWxlLFxuICAgICAgICBuYW1lR2FwOiB0aGlzLm5hbWVHYXAsXG4gICAgICAgIG5hbWVSb3RhdGU6IHRoaXMubmFtZVJvdGF0ZSxcbiAgICAgICAgaW52ZXJzZTogdGhpcy5pbnZlcnNlLFxuICAgICAgICBib3VuZGFyeUdhcDogdGhpcy5ib3VuZGFyeUdhcCxcbiAgICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgICAgbWF4OiB0aGlzLm1heCxcbiAgICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICAgIG1pbkludGVydmFsOiB0aGlzLm1pbkludGVydmFsLFxuICAgICAgICBpbnRlcnZhbDogdGhpcy5pbnRlcnZhbCxcbiAgICAgICAgbG9nQmFzZTogdGhpcy5sb2dCYXNlLFxuICAgICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgICB0cmlnZ2VyRXZlbnQ6IHRoaXMudHJpZ2dlckV2ZW50LFxuICAgICAgICBheGlzTGluZTogdGhpcy5heGlzTGluZSxcbiAgICAgICAgYXhpc1RpY2s6IHRoaXMuYXhpc1RpY2ssXG4gICAgICAgIGF4aXNMYWJlbDogdGhpcy5heGlzTGFiZWwsXG4gICAgICAgIHNwbGl0TGluZTogdGhpcy5zcGxpdExpbmUsXG4gICAgICAgIHNwbGl0QXJlYTogdGhpcy5zcGxpdEFyZWEsXG4gICAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgICAgYXhpc1BvaW50ZXI6IHRoaXMuYXhpc1BvaW50ZXIsXG4gICAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICAgIHo6IHRoaXMueixcbiAgICAgIH0sXG4gICAgICB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sXG4gICAgKTtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5zZXRBcnJheU9wdGlvbih0aGlzLl9heGlzT3B0aW9uLCBjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmNsZWFyT3B0aW9uKHRoaXMuX2F4aXNPcHRpb24pO1xuICB9XG59XG4iXX0=