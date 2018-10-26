/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Injectable, Optional, SkipSelf, } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export class TdChartOptionsService {
    constructor() {
        this._options = {};
        this._optionsSubject = new BehaviorSubject(this._options);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    setOption(option, value) {
        /** @type {?} */
        let options = {};
        options[option] = value;
        Object.assign(this._options, options);
        this._optionsSubject.next(this._options);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    setArrayOption(option, value) {
        /** @type {?} */
        let prevValue = this.getOption(option);
        if (prevValue) {
            /** @type {?} */
            let index = prevValue.indexOf(value);
            index > -1 ? prevValue[index] = value : prevValue.push(value);
        }
        else {
            prevValue = [value];
        }
        this.setOption(option, prevValue);
    }
    /**
     * @param {?} option
     * @param {?} value
     * @return {?}
     */
    removeArrayOption(option, value) {
        /** @type {?} */
        let prevValue = this.getOption(option);
        if (prevValue) {
            /** @type {?} */
            let index = prevValue.indexOf(value);
            if (index > -1) {
                prevValue[index] = undefined;
            }
            else {
                prevValue = [];
            }
        }
        this.setOption(option, prevValue);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getOption(option) {
        return this._options[option];
    }
    /**
     * @param {?} option
     * @return {?}
     */
    clearOption(option) {
        this.setOption(option, undefined);
    }
    /**
     * @return {?}
     */
    listen() {
        return this._optionsSubject.asObservable();
    }
}
TdChartOptionsService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    TdChartOptionsService.prototype._options;
    /** @type {?} */
    TdChartOptionsService.prototype._optionsSubject;
}
/**
 * @param {?} parent
 * @return {?}
 */
export function CHART_PROVIDER_FACTORY(parent) {
    return parent || new TdChartOptionsService();
}
/** @type {?} */
export const CHART_PROVIDER = {
    // If there is already a service available, use that. Otherwise, provide a new one.
    provide: TdChartOptionsService,
    deps: [[new Optional(), new SkipSelf(), TdChartOptionsService]],
    useFactory: CHART_PROVIDER_FACTORY,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhcnQtb3B0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGNvdmFsZW50L2VjaGFydHMvIiwic291cmNlcyI6WyJiYXNlL2NoYXJ0LW9wdGlvbnMuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFFVixRQUFRLEVBQ1IsUUFBUSxHQUNULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBdUIsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRzVELE1BQU0sT0FBTyxxQkFBcUI7SUFEbEM7UUFHVSxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ25CLG9CQUFlLEdBQWlCLElBQUksZUFBZSxDQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQThDbEYsQ0FBQzs7Ozs7O0lBNUNDLFNBQVMsQ0FBQyxNQUFjLEVBQUUsS0FBVTs7WUFDOUIsT0FBTyxHQUFRLEVBQUU7UUFDckIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUN4QixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7OztJQUVELGNBQWMsQ0FBQyxNQUFjLEVBQUUsS0FBVTs7WUFDbkMsU0FBUyxHQUFVLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzdDLElBQUksU0FBUyxFQUFFOztnQkFDVCxLQUFLLEdBQVcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDNUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9EO2FBQU07WUFDTCxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7OztJQUVELGlCQUFpQixDQUFDLE1BQWMsRUFBRSxLQUFVOztZQUN0QyxTQUFTLEdBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDN0MsSUFBSSxTQUFTLEVBQUU7O2dCQUNULEtBQUssR0FBVyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUM1QyxJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRztnQkFDZixTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsU0FBUyxDQUFDO2FBQzlCO2lCQUFNO2dCQUNMLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDaEI7U0FDRjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE1BQWM7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFFcEMsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7O1lBaERGLFVBQVU7Ozs7SUFHVCx5Q0FBMkI7O0lBQzNCLGdEQUFnRjs7Ozs7O0FBZ0RsRixNQUFNLFVBQVUsc0JBQXNCLENBQ3BDLE1BQTZCO0lBQzdCLE9BQU8sTUFBTSxJQUFJLElBQUkscUJBQXFCLEVBQUUsQ0FBQztBQUMvQyxDQUFDOztBQUVELE1BQU0sT0FBTyxjQUFjLEdBQWE7O0lBRXRDLE9BQU8sRUFBRSxxQkFBcUI7SUFDOUIsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLFFBQVEsRUFBRSxFQUFFLElBQUksUUFBUSxFQUFFLEVBQUUscUJBQXFCLENBQUMsQ0FBQztJQUMvRCxVQUFVLEVBQUUsc0JBQXNCO0NBQ25DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgUHJvdmlkZXIsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVGRDaGFydE9wdGlvbnNTZXJ2aWNlIHtcblxuICBwcml2YXRlIF9vcHRpb25zOiBhbnkgPSB7fTtcbiAgcHJpdmF0ZSBfb3B0aW9uc1N1YmplY3Q6IFN1YmplY3Q8YW55PiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8YW55Pih0aGlzLl9vcHRpb25zKTtcblxuICBzZXRPcHRpb24ob3B0aW9uOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgb3B0aW9uczogYW55ID0ge307XG4gICAgb3B0aW9uc1tvcHRpb25dID0gdmFsdWU7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLl9vcHRpb25zLCBvcHRpb25zKTtcbiAgICB0aGlzLl9vcHRpb25zU3ViamVjdC5uZXh0KHRoaXMuX29wdGlvbnMpO1xuICB9XG5cbiAgc2V0QXJyYXlPcHRpb24ob3B0aW9uOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBhbnkge1xuICAgIGxldCBwcmV2VmFsdWU6IGFueVtdID0gdGhpcy5nZXRPcHRpb24ob3B0aW9uKTtcbiAgICBpZiAocHJldlZhbHVlKSB7XG4gICAgICBsZXQgaW5kZXg6IG51bWJlciA9IHByZXZWYWx1ZS5pbmRleE9mKHZhbHVlKTtcbiAgICAgIGluZGV4ID4gLTEgPyBwcmV2VmFsdWVbaW5kZXhdID0gdmFsdWUgOiBwcmV2VmFsdWUucHVzaCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByZXZWYWx1ZSA9IFt2YWx1ZV07XG4gICAgfVxuICAgIHRoaXMuc2V0T3B0aW9uKG9wdGlvbiwgcHJldlZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZUFycmF5T3B0aW9uKG9wdGlvbjogc3RyaW5nLCB2YWx1ZTogYW55KTogYW55IHtcbiAgICBsZXQgcHJldlZhbHVlOiBhbnlbXSA9IHRoaXMuZ2V0T3B0aW9uKG9wdGlvbik7XG4gICAgaWYgKHByZXZWYWx1ZSkge1xuICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBwcmV2VmFsdWUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICBpZiAoaW5kZXggPiAtMSApIHtcbiAgICAgICAgcHJldlZhbHVlW2luZGV4XSA9IHVuZGVmaW5lZDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZWYWx1ZSA9IFtdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNldE9wdGlvbihvcHRpb24sIHByZXZWYWx1ZSk7XG4gIH1cblxuICBnZXRPcHRpb24ob3B0aW9uOiBzdHJpbmcpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX29wdGlvbnNbb3B0aW9uXTtcbiAgfVxuXG4gIGNsZWFyT3B0aW9uKG9wdGlvbjogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5zZXRPcHRpb24ob3B0aW9uLCB1bmRlZmluZWQpO1xuXG4gIH1cblxuICBsaXN0ZW4oKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5fb3B0aW9uc1N1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gQ0hBUlRfUFJPVklERVJfRkFDVE9SWShcbiAgcGFyZW50OiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2Uge1xuICByZXR1cm4gcGFyZW50IHx8IG5ldyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UoKTtcbn1cblxuZXhwb3J0IGNvbnN0IENIQVJUX1BST1ZJREVSOiBQcm92aWRlciA9IHtcbiAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlcnZpY2UgYXZhaWxhYmxlLCB1c2UgdGhhdC4gT3RoZXJ3aXNlLCBwcm92aWRlIGEgbmV3IG9uZS5cbiAgcHJvdmlkZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlLFxuICBkZXBzOiBbW25ldyBPcHRpb25hbCgpLCBuZXcgU2tpcFNlbGYoKSwgVGRDaGFydE9wdGlvbnNTZXJ2aWNlXV0sXG4gIHVzZUZhY3Rvcnk6IENIQVJUX1BST1ZJREVSX0ZBQ1RPUlksXG59O1xuIl19