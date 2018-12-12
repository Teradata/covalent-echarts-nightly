import { Input, } from '@angular/core';
import { assignDefined } from '../utils';
var TdChartAxisComponent = /** @class */ (function () {
    function TdChartAxisComponent(_axisOption, _optionsService) {
        this._axisOption = _axisOption;
        this._optionsService = _optionsService;
        this._state = {
            axisLine: {
                lineStyle: {
                    color: '#ABABAB',
                },
            },
            splitLine: {
                lineStyle: {
                    color: '#ABABAB',
                },
            },
        };
        this.config = {};
        this.show = true;
    }
    TdChartAxisComponent.prototype.ngOnInit = function () {
        this._setOptions();
    };
    TdChartAxisComponent.prototype.ngOnChanges = function () {
        this._setOptions();
    };
    TdChartAxisComponent.prototype.ngOnDestroy = function () {
        this._removeOption();
    };
    TdChartAxisComponent.prototype._setOptions = function () {
        var config = assignDefined(this._state, this.config ? this.config : {}, {
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
        });
        this._optionsService.setArrayOption(this._axisOption, config);
    };
    TdChartAxisComponent.prototype._removeOption = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImJhc2UvYXhpcy9heGlzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsS0FBSyxHQUlOLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFhekM7SUFnREUsOEJBQW9CLFdBQW1CLEVBQ25CLGVBQXNDO1FBRHRDLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQS9DbEQsV0FBTSxHQUFRO1lBQ3BCLFFBQVEsRUFBRTtnQkFDUixTQUFTLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2FBQ0Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsU0FBUyxFQUFFO29CQUNULEtBQUssRUFBRSxTQUFTO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztRQUVlLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFHbkIsU0FBSSxHQUFZLElBQUksQ0FBQztJQWdDcEMsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDBDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLDBDQUFXLEdBQW5CO1FBQ0UsSUFBSSxNQUFNLEdBQVEsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzNFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMs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bml0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBUZENoYXJ0T3B0aW9uc1NlcnZpY2UgfSBmcm9tICcuLi9jaGFydC1vcHRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCB9IGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFxuICBJVGRBeGlzTGluZSxcbiAgSVRkQXhpc0xhYmVsLFxuICBJVGRBeGlzVGljayxcbiAgSVRkU3BsaXRMaW5lLFxuICBJVGRTcGxpdEFyZWEsXG4gIElUZEF4aXNQb2ludGVyLFxuICBUZEF4aXNUeXBlLFxuICBUZE5hbWVMb2NhdGlvbixcbiAgVGRYQXhpc1Bvc2l0aW9uLFxuICBUZFlBeGlzUG9zaXRpb24gfSBmcm9tICcuL2F4aXMuaW50ZXJmYWNlJztcbiAgXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVGRDaGFydEF4aXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBwcml2YXRlIF9zdGF0ZTogYW55ID0ge1xuICAgIGF4aXNMaW5lOiB7XG4gICAgICBsaW5lU3R5bGU6IHtcbiAgICAgICAgY29sb3I6ICcjQUJBQkFCJyxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBzcGxpdExpbmU6IHtcbiAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICBjb2xvcjogJyNBQkFCQUInLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2lkJykgaWQ6IHN0cmluZztcbiAgQElucHV0KCdzaG93Jykgc2hvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnZ3JpZEluZGV4JykgZ3JpZEluZGV4OiBudW1iZXI7XG4gIEBJbnB1dCgnb2Zmc2V0Jykgb2Zmc2V0OiBudW1iZXI7XG4gIGFic3RyYWN0IHBvc2l0aW9uOiBUZFhBeGlzUG9zaXRpb24gfCBUZFlBeGlzUG9zaXRpb247XG4gIEBJbnB1dCgndHlwZScpIHR5cGU6IFRkQXhpc1R5cGU7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCduYW1lTG9jYXRpb24nKSBuYW1lTG9jYXRpb246IFRkTmFtZUxvY2F0aW9uO1xuICBASW5wdXQoJ25hbWVUZXh0U3R5bGUnKSBuYW1lVGV4dFN0eWxlOiBhbnk7XG4gIEBJbnB1dCgnbmFtZUdhcCcpIG5hbWVHYXA6IG51bWJlcjtcbiAgQElucHV0KCduYW1lUm90YXRlJykgbmFtZVJvdGF0ZTogbnVtYmVyO1xuICBASW5wdXQoJ2ludmVyc2UnKSBpbnZlcnNlOiBib29sZWFuO1xuICBASW5wdXQoJ2JvdW5kYXJ5R2FwJykgYm91bmRhcnlHYXA6IGJvb2xlYW4gfCBzdHJpbmdbXTtcbiAgQElucHV0KCdtaW4nKSBtaW46IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdtYXgnKSBtYXg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdzY2FsZScpIHNjYWxlOiBib29sZWFuO1xuICBASW5wdXQoJ21pbkludGVydmFsJykgbWluSW50ZXJ2YWw6IG51bWJlcjtcbiAgQElucHV0KCdpbnRlcnZhbCcpIGludGVydmFsOiBudW1iZXI7XG4gIEBJbnB1dCgnbG9nQmFzZScpIGxvZ0Jhc2U6IG51bWJlcjtcbiAgQElucHV0KCdzaWxlbnQnKSBzaWxlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgndHJpZ2dlckV2ZW50JykgdHJpZ2dlckV2ZW50OiBib29sZWFuO1xuICBASW5wdXQoJ2F4aXNMaW5lJykgYXhpc0xpbmU6IElUZEF4aXNMaW5lO1xuICBASW5wdXQoJ2F4aXNUaWNrJykgYXhpc1RpY2s6IElUZEF4aXNUaWNrO1xuICBASW5wdXQoJ2F4aXNMYWJlbCcpIGF4aXNMYWJlbDogSVRkQXhpc0xhYmVsO1xuICBASW5wdXQoJ3NwbGl0TGluZScpIHNwbGl0TGluZTogSVRkU3BsaXRMaW5lO1xuICBASW5wdXQoJ3NwbGl0QXJlYScpIHNwbGl0QXJlYTogSVRkU3BsaXRBcmVhO1xuICBASW5wdXQoJ2RhdGEnKSBkYXRhOiBhbnk7XG4gIEBJbnB1dCgnYXhpc1BvaW50ZXInKSBheGlzUG9pbnRlcjogSVRkQXhpc1BvaW50ZXI7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9heGlzT3B0aW9uOiBzdHJpbmcsXG4gICAgICAgICAgICAgIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKHRoaXMuX3N0YXRlLCB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sIHtcbiAgICAgIGlkOiB0aGlzLmlkLFxuICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgZ3JpZEluZGV4OiB0aGlzLmdyaWRJbmRleCxcbiAgICAgIHBvc2l0aW9uOiB0aGlzLnBvc2l0aW9uLFxuICAgICAgb2Zmc2V0OiB0aGlzLm9mZnNldCxcbiAgICAgIHR5cGU6IHRoaXMudHlwZSxcbiAgICAgIG5hbWU6IHRoaXMubmFtZSxcbiAgICAgIG5hbWVMb2NhdGlvbjogdGhpcy5uYW1lTG9jYXRpb24sXG4gICAgICBuYW1lVGV4dFN0eWxlOiB0aGlzLm5hbWVUZXh0U3R5bGUsXG4gICAgICBuYW1lR2FwOiB0aGlzLm5hbWVHYXAsXG4gICAgICBuYW1lUm90YXRlOiB0aGlzLm5hbWVSb3RhdGUsXG4gICAgICBpbnZlcnNlOiB0aGlzLmludmVyc2UsXG4gICAgICBib3VuZGFyeUdhcDogdGhpcy5ib3VuZGFyeUdhcCxcbiAgICAgIG1pbjogdGhpcy5taW4sXG4gICAgICBtYXg6IHRoaXMubWF4LFxuICAgICAgc2NhbGU6IHRoaXMuc2NhbGUsXG4gICAgICBtaW5JbnRlcnZhbDogdGhpcy5taW5JbnRlcnZhbCxcbiAgICAgIGludGVydmFsOiB0aGlzLmludGVydmFsLFxuICAgICAgbG9nQmFzZTogdGhpcy5sb2dCYXNlLFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICAgIHRyaWdnZXJFdmVudDogdGhpcy50cmlnZ2VyRXZlbnQsXG4gICAgICBheGlzTGluZTogdGhpcy5heGlzTGluZSxcbiAgICAgIGF4aXNUaWNrOiB0aGlzLmF4aXNUaWNrLFxuICAgICAgYXhpc0xhYmVsOiB0aGlzLmF4aXNMYWJlbCxcbiAgICAgIHNwbGl0TGluZTogdGhpcy5zcGxpdExpbmUsXG4gICAgICBzcGxpdEFyZWE6IHRoaXMuc3BsaXRBcmVhLFxuICAgICAgZGF0YTogdGhpcy5kYXRhLFxuICAgICAgYXhpc1BvaW50ZXI6IHRoaXMuYXhpc1BvaW50ZXIsXG4gICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgejogdGhpcy56LFxuICAgIH0pO1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLnNldEFycmF5T3B0aW9uKHRoaXMuX2F4aXNPcHRpb24sIGNvbmZpZyk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2UuY2xlYXJPcHRpb24odGhpcy5fYXhpc09wdGlvbik7XG4gIH1cblxufVxuIl19