/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Input } from '@angular/core';
import { assignDefined } from '../utils/assign-defined';
/**
 * @record
 * @template T
 */
export function ITdSeries() { }
if (false) {
    /** @type {?|undefined} */
    ITdSeries.prototype.id;
    /** @type {?|undefined} */
    ITdSeries.prototype.name;
    /** @type {?|undefined} */
    ITdSeries.prototype.color;
    /** @type {?|undefined} */
    ITdSeries.prototype.type;
    /** @type {?|undefined} */
    ITdSeries.prototype.tooltip;
}
/**
 * @abstract
 * @template T
 */
var TdSeriesComponent = /** @class */ (function () {
    function TdSeriesComponent(type, optionsService) {
        this.optionsService = optionsService;
        this._state = {};
        this._options = {};
        this.config = {};
        this._type = type;
    }
    Object.defineProperty(TdSeriesComponent.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TdSeriesComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdSeriesComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdSeriesComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._removeOption();
    };
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    TdSeriesComponent.prototype.setStateOption = /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    function (option, value) {
        this._options[option] = value;
        this._setOptions();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    TdSeriesComponent.prototype.removeStateOption = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        this._options[option] = undefined;
        this._setOptions();
    };
    /**
     * @return {?}
     */
    TdSeriesComponent.prototype._setOptions = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = assignDefined(this._state, this.config ? this.config : {}, this.getConfig(), this._options);
        this.optionsService.setArrayOption('series', config);
    };
    /**
     * @return {?}
     */
    TdSeriesComponent.prototype._removeOption = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var config = this.getConfig();
        this.optionsService.removeArrayOption('series', config);
    };
    TdSeriesComponent.propDecorators = {
        config: [{ type: Input, args: ['config',] }],
        id: [{ type: Input, args: ['id',] }],
        name: [{ type: Input, args: ['name',] }],
        color: [{ type: Input, args: ['color',] }],
        animation: [{ type: Input, args: ['animation',] }],
        animationThreshold: [{ type: Input, args: ['animationThreshold',] }],
        animationDuration: [{ type: Input, args: ['animationDuration',] }],
        animationEasing: [{ type: Input, args: ['animationEasing',] }],
        animationDelay: [{ type: Input, args: ['animationDelay',] }],
        animationDurationUpdate: [{ type: Input, args: ['animationDurationUpdate',] }],
        animationEasingUpdate: [{ type: Input, args: ['animationEasingUpdate',] }],
        animationDelayUpdate: [{ type: Input, args: ['animationDelayUpdate',] }],
        tooltip: [{ type: Input, args: ['tooltip',] }]
    };
    return TdSeriesComponent;
}());
export { TdSeriesComponent };
if (false) {
    /** @type {?} */
    TdSeriesComponent.prototype._type;
    /** @type {?} */
    TdSeriesComponent.prototype._state;
    /** @type {?} */
    TdSeriesComponent.prototype._options;
    /** @type {?} */
    TdSeriesComponent.prototype.config;
    /** @type {?} */
    TdSeriesComponent.prototype.id;
    /** @type {?} */
    TdSeriesComponent.prototype.name;
    /** @type {?} */
    TdSeriesComponent.prototype.color;
    /** @type {?} */
    TdSeriesComponent.prototype.animation;
    /** @type {?} */
    TdSeriesComponent.prototype.animationThreshold;
    /** @type {?} */
    TdSeriesComponent.prototype.animationDuration;
    /** @type {?} */
    TdSeriesComponent.prototype.animationEasing;
    /** @type {?} */
    TdSeriesComponent.prototype.animationDelay;
    /** @type {?} */
    TdSeriesComponent.prototype.animationDurationUpdate;
    /** @type {?} */
    TdSeriesComponent.prototype.animationEasingUpdate;
    /** @type {?} */
    TdSeriesComponent.prototype.animationDelayUpdate;
    /** @type {?} */
    TdSeriesComponent.prototype.tooltip;
    /** @type {?} */
    TdSeriesComponent.prototype.optionsService;
    /**
     * @abstract
     * @return {?}
     */
    TdSeriesComponent.prototype.getConfig = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzLyIsInNvdXJjZXMiOlsiYmFzZS9zZXJpZXMvc2VyaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLEtBQUssRUFBZ0MsTUFBTSxlQUFlLENBQUM7QUFFcEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOzs7OztBQUt4RCwrQkFPQzs7O0lBTkMsdUJBQVk7O0lBQ1oseUJBQWM7O0lBQ2QsMEJBQWU7O0lBQ2YseUJBQVM7O0lBRVQsNEJBQTJCOzs7Ozs7QUFHN0I7SUEyQkUsMkJBQVksSUFBTyxFQUFZLGNBQXFDO1FBQXJDLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQW5CcEUsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBRUYsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQWlCaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQXpCRCxzQkFBSSxtQ0FBSTs7OztRQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBOzs7O0lBeUJELG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7SUFFRCx1Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7O0lBRUQsMENBQWM7Ozs7O0lBQWQsVUFBZSxNQUFjLEVBQUUsS0FBVTtRQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCw2Q0FBaUI7Ozs7SUFBakIsVUFBa0IsTUFBYztRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQztRQUNsQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OztJQUlPLHVDQUFXOzs7SUFBbkI7O1lBQ00sTUFBTSxHQUFRLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM3RyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVPLHlDQUFhOzs7SUFBckI7O1lBQ00sTUFBTSxHQUFRLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7eUJBcERBLEtBQUssU0FBQyxRQUFRO3FCQUVkLEtBQUssU0FBQyxJQUFJO3VCQUNWLEtBQUssU0FBQyxNQUFNO3dCQUNaLEtBQUssU0FBQyxPQUFPOzRCQUViLEtBQUssU0FBQyxXQUFXO3FDQUNqQixLQUFLLFNBQUMsb0JBQW9CO29DQUMxQixLQUFLLFNBQUMsbUJBQW1CO2tDQUN6QixLQUFLLFNBQUMsaUJBQWlCO2lDQUN2QixLQUFLLFNBQUMsZ0JBQWdCOzBDQUN0QixLQUFLLFNBQUMseUJBQXlCO3dDQUMvQixLQUFLLFNBQUMsdUJBQXVCO3VDQUM3QixLQUFLLFNBQUMsc0JBQXNCOzBCQUM1QixLQUFLLFNBQUMsU0FBUzs7SUF3Q2xCLHdCQUFDO0NBQUEsQUFqRUQsSUFpRUM7U0FqRXFCLGlCQUFpQjs7O0lBRXJDLGtDQUFpQjs7SUFNakIsbUNBQWlCOztJQUNqQixxQ0FBbUI7O0lBRW5CLG1DQUFrQzs7SUFFbEMsK0JBQXdCOztJQUN4QixpQ0FBNEI7O0lBQzVCLGtDQUE4Qjs7SUFFOUIsc0NBQXVDOztJQUN2QywrQ0FBd0Q7O0lBQ3hELDhDQUFpRTs7SUFDakUsNENBQWtEOztJQUNsRCwyQ0FBMkQ7O0lBQzNELG9EQUE2RTs7SUFDN0Usa0RBQThEOztJQUM5RCxpREFBdUU7O0lBQ3ZFLG9DQUE0Qzs7SUFFdkIsMkNBQStDOzs7OztJQTBCcEUsd0RBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCB9IGZyb20gJy4uL3V0aWxzL2Fzc2lnbi1kZWZpbmVkJztcbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBJVGRTZXJpZXNUb29sdGlwIH0gZnJvbSAnLi4vc2VyaWVzL3Nlcmllcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVRkQW5pbWF0aW9uIH0gZnJvbSAnLi4vYmFzZS50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2VyaWVzPFQ+IGV4dGVuZHMgSVRkQW5pbWF0aW9uIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICB0eXBlPzogVDtcblxuICB0b29sdGlwPzogSVRkU2VyaWVzVG9vbHRpcDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRkU2VyaWVzQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgSVRkU2VyaWVzPFQ+LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95ICB7XG5cbiAgcHJpdmF0ZSBfdHlwZTogVDtcblxuICBnZXQgdHlwZSgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIF9zdGF0ZTogYW55ID0ge307XG4gIF9vcHRpb25zOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmc7XG5cbiAgQElucHV0KCdhbmltYXRpb24nKSBhbmltYXRpb246IGJvb2xlYW47XG4gIEBJbnB1dCgnYW5pbWF0aW9uVGhyZXNob2xkJykgYW5pbWF0aW9uVGhyZXNob2xkOiBudW1iZXI7XG4gIEBJbnB1dCgnYW5pbWF0aW9uRHVyYXRpb24nKSBhbmltYXRpb25EdXJhdGlvbjogbnVtYmVyIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnYW5pbWF0aW9uRWFzaW5nJykgYW5pbWF0aW9uRWFzaW5nOiBzdHJpbmc7XG4gIEBJbnB1dCgnYW5pbWF0aW9uRGVsYXknKSBhbmltYXRpb25EZWxheTogbnVtYmVyIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnYW5pbWF0aW9uRHVyYXRpb25VcGRhdGUnKSBhbmltYXRpb25EdXJhdGlvblVwZGF0ZTogbnVtYmVyIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgnYW5pbWF0aW9uRWFzaW5nVXBkYXRlJykgYW5pbWF0aW9uRWFzaW5nVXBkYXRlOiBzdHJpbmc7XG4gIEBJbnB1dCgnYW5pbWF0aW9uRGVsYXlVcGRhdGUnKSBhbmltYXRpb25EZWxheVVwZGF0ZTogbnVtYmVyIHwgRnVuY3Rpb247XG4gIEBJbnB1dCgndG9vbHRpcCcpIHRvb2x0aXA6IElUZFNlcmllc1Rvb2x0aXA7XG5cbiAgY29uc3RydWN0b3IodHlwZTogVCwgcHJvdGVjdGVkIG9wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG4gIFxuICBzZXRTdGF0ZU9wdGlvbihvcHRpb246IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNbb3B0aW9uXSA9IHZhbHVlO1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIHJlbW92ZVN0YXRlT3B0aW9uKG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1tvcHRpb25dID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIGFic3RyYWN0IGdldENvbmZpZygpOiBhbnk7XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHRoaXMuZ2V0Q29uZmlnKCksIHRoaXMuX29wdGlvbnMpO1xuICAgIHRoaXMub3B0aW9uc1NlcnZpY2Uuc2V0QXJyYXlPcHRpb24oJ3NlcmllcycsIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgbGV0IGNvbmZpZzogYW55ID0gdGhpcy5nZXRDb25maWcoKTtcbiAgICB0aGlzLm9wdGlvbnNTZXJ2aWNlLnJlbW92ZUFycmF5T3B0aW9uKCdzZXJpZXMnLCBjb25maWcpO1xuICB9XG5cbn1cbiJdfQ==