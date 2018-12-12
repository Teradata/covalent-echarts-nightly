import { Input, } from '@angular/core';
import { assignDefined } from '../utils';
export class TdChartAxisComponent {
    constructor(_axisOption, _optionsService) {
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
    ngOnInit() {
        this._setOptions();
    }
    ngOnChanges() {
        this._setOptions();
    }
    ngOnDestroy() {
        this._removeOption();
    }
    _setOptions() {
        let config = assignDefined(this._state, this.config ? this.config : {}, {
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
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXhpcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy8iLCJzb3VyY2VzIjpbImJhc2UvYXhpcy9heGlzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsS0FBSyxHQUlOLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFhekMsTUFBTSxPQUFnQixvQkFBb0I7SUFnRHhDLFlBQW9CLFdBQW1CLEVBQ25CLGVBQXNDO1FBRHRDLGdCQUFXLEdBQVgsV0FBVyxDQUFRO1FBQ25CLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQS9DbEQsV0FBTSxHQUFRO1lBQ3BCLFFBQVEsRUFBRTtnQkFDUixTQUFTLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLFNBQVM7aUJBQ2pCO2FBQ0Y7WUFDRCxTQUFTLEVBQUU7Z0JBQ1QsU0FBUyxFQUFFO29CQUNULEtBQUssRUFBRSxTQUFTO2lCQUNqQjthQUNGO1NBQ0YsQ0FBQztRQUVlLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFHbkIsU0FBSSxHQUFZLElBQUksQ0FBQztJQWdDcEMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVPLFdBQVc7UUFDakIsSUFBSSxNQUFNLEdBQVEsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzNFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWTtZQUMvQixhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7WUFDakMsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1lBQ3JCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtZQUMzQixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBTztZQUNyQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsWUFBWSxFQUFFLElBQUksQ0FBQyxZQUFZO1lBQy9CLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUN2QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7U0FDVixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUFFTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRCxDQUFDOzs7cUJBdkZBLEtBQUssU0FBQyxRQUFRO2lCQUVkLEtBQUssU0FBQyxJQUFJO21CQUNWLEtBQUssU0FBQyxNQUFNO3dCQUNaLEtBQUssU0FBQyxXQUFXO3FCQUNqQixLQUFLLFNBQUMsUUFBUTttQkFFZCxLQUFLLFNBQUMsTUFBTTttQkFDWixLQUFLLFNBQUMsTUFBTTsyQkFDWixLQUFLLFNBQUMsY0FBYzs0QkFDcEIsS0FBSyxTQUFDLGVBQWU7c0JBQ3JCLEtBQUssU0FBQyxTQUFTO3lCQUNmLEtBQUssU0FBQyxZQUFZO3NCQUNsQixLQUFLLFNBQUMsU0FBUzswQkFDZixLQUFLLFNBQUMsYUFBYTtrQkFDbkIsS0FBSyxTQUFDLEtBQUs7a0JBQ1gsS0FBSyxTQUFDLEtBQUs7b0JBQ1gsS0FBSyxTQUFDLE9BQU87MEJBQ2IsS0FBSyxTQUFDLGFBQWE7dUJBQ25CLEtBQUssU0FBQyxVQUFVO3NCQUNoQixLQUFLLFNBQUMsU0FBUztxQkFDZixLQUFLLFNBQUMsUUFBUTsyQkFDZCxLQUFLLFNBQUMsY0FBYzt1QkFDcEIsS0FBSyxTQUFDLFVBQVU7dUJBQ2hCLEtBQUssU0FBQyxVQUFVO3dCQUNoQixLQUFLLFNBQUMsV0FBVzt3QkFDakIsS0FBSyxTQUFDLFdBQVc7d0JBQ2pCLEtBQUssU0FBQyxXQUFXO21CQUNqQixLQUFLLFNBQUMsTUFBTTswQkFDWixLQUFLLFNBQUMsYUFBYTtxQkFDbkIsS0FBSyxTQUFDLFFBQVE7Z0JBQ2QsS0FBSyxTQUFDLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBhc3NpZ25EZWZpbmVkIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgXG4gIElUZEF4aXNMaW5lLFxuICBJVGRBeGlzTGFiZWwsXG4gIElUZEF4aXNUaWNrLFxuICBJVGRTcGxpdExpbmUsXG4gIElUZFNwbGl0QXJlYSxcbiAgSVRkQXhpc1BvaW50ZXIsXG4gIFRkQXhpc1R5cGUsXG4gIFRkTmFtZUxvY2F0aW9uLFxuICBUZFhBeGlzUG9zaXRpb24sXG4gIFRkWUF4aXNQb3NpdGlvbiB9IGZyb20gJy4vYXhpcy5pbnRlcmZhY2UnO1xuICBcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBUZENoYXJ0QXhpc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7XG4gICAgYXhpc0xpbmU6IHtcbiAgICAgIGxpbmVTdHlsZToge1xuICAgICAgICBjb2xvcjogJyNBQkFCQUInLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHNwbGl0TGluZToge1xuICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgIGNvbG9yOiAnI0FCQUJBQicsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG5cbiAgQElucHV0KCdjb25maWcnKSBjb25maWc6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICBASW5wdXQoJ3Nob3cnKSBzaG93OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCdncmlkSW5kZXgnKSBncmlkSW5kZXg6IG51bWJlcjtcbiAgQElucHV0KCdvZmZzZXQnKSBvZmZzZXQ6IG51bWJlcjtcbiAgYWJzdHJhY3QgcG9zaXRpb246IFRkWEF4aXNQb3NpdGlvbiB8IFRkWUF4aXNQb3NpdGlvbjtcbiAgQElucHV0KCd0eXBlJykgdHlwZTogVGRBeGlzVHlwZTtcbiAgQElucHV0KCduYW1lJykgbmFtZTogc3RyaW5nO1xuICBASW5wdXQoJ25hbWVMb2NhdGlvbicpIG5hbWVMb2NhdGlvbjogVGROYW1lTG9jYXRpb247XG4gIEBJbnB1dCgnbmFtZVRleHRTdHlsZScpIG5hbWVUZXh0U3R5bGU6IGFueTtcbiAgQElucHV0KCduYW1lR2FwJykgbmFtZUdhcDogbnVtYmVyO1xuICBASW5wdXQoJ25hbWVSb3RhdGUnKSBuYW1lUm90YXRlOiBudW1iZXI7XG4gIEBJbnB1dCgnaW52ZXJzZScpIGludmVyc2U6IGJvb2xlYW47XG4gIEBJbnB1dCgnYm91bmRhcnlHYXAnKSBib3VuZGFyeUdhcDogYm9vbGVhbiB8IHN0cmluZ1tdO1xuICBASW5wdXQoJ21pbicpIG1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ21heCcpIG1heDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3NjYWxlJykgc2NhbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgnbWluSW50ZXJ2YWwnKSBtaW5JbnRlcnZhbDogbnVtYmVyO1xuICBASW5wdXQoJ2ludGVydmFsJykgaW50ZXJ2YWw6IG51bWJlcjtcbiAgQElucHV0KCdsb2dCYXNlJykgbG9nQmFzZTogbnVtYmVyO1xuICBASW5wdXQoJ3NpbGVudCcpIHNpbGVudDogYm9vbGVhbjtcbiAgQElucHV0KCd0cmlnZ2VyRXZlbnQnKSB0cmlnZ2VyRXZlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgnYXhpc0xpbmUnKSBheGlzTGluZTogSVRkQXhpc0xpbmU7XG4gIEBJbnB1dCgnYXhpc1RpY2snKSBheGlzVGljazogSVRkQXhpc1RpY2s7XG4gIEBJbnB1dCgnYXhpc0xhYmVsJykgYXhpc0xhYmVsOiBJVGRBeGlzTGFiZWw7XG4gIEBJbnB1dCgnc3BsaXRMaW5lJykgc3BsaXRMaW5lOiBJVGRTcGxpdExpbmU7XG4gIEBJbnB1dCgnc3BsaXRBcmVhJykgc3BsaXRBcmVhOiBJVGRTcGxpdEFyZWE7XG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueTtcbiAgQElucHV0KCdheGlzUG9pbnRlcicpIGF4aXNQb2ludGVyOiBJVGRBeGlzUG9pbnRlcjtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2F4aXNPcHRpb246IHN0cmluZyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5fcmVtb3ZlT3B0aW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICBzaG93OiB0aGlzLnNob3csXG4gICAgICBncmlkSW5kZXg6IHRoaXMuZ3JpZEluZGV4LFxuICAgICAgcG9zaXRpb246IHRoaXMucG9zaXRpb24sXG4gICAgICBvZmZzZXQ6IHRoaXMub2Zmc2V0LFxuICAgICAgdHlwZTogdGhpcy50eXBlLFxuICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgbmFtZUxvY2F0aW9uOiB0aGlzLm5hbWVMb2NhdGlvbixcbiAgICAgIG5hbWVUZXh0U3R5bGU6IHRoaXMubmFtZVRleHRTdHlsZSxcbiAgICAgIG5hbWVHYXA6IHRoaXMubmFtZUdhcCxcbiAgICAgIG5hbWVSb3RhdGU6IHRoaXMubmFtZVJvdGF0ZSxcbiAgICAgIGludmVyc2U6IHRoaXMuaW52ZXJzZSxcbiAgICAgIGJvdW5kYXJ5R2FwOiB0aGlzLmJvdW5kYXJ5R2FwLFxuICAgICAgbWluOiB0aGlzLm1pbixcbiAgICAgIG1heDogdGhpcy5tYXgsXG4gICAgICBzY2FsZTogdGhpcy5zY2FsZSxcbiAgICAgIG1pbkludGVydmFsOiB0aGlzLm1pbkludGVydmFsLFxuICAgICAgaW50ZXJ2YWw6IHRoaXMuaW50ZXJ2YWwsXG4gICAgICBsb2dCYXNlOiB0aGlzLmxvZ0Jhc2UsXG4gICAgICBzaWxlbnQ6IHRoaXMuc2lsZW50LFxuICAgICAgdHJpZ2dlckV2ZW50OiB0aGlzLnRyaWdnZXJFdmVudCxcbiAgICAgIGF4aXNMaW5lOiB0aGlzLmF4aXNMaW5lLFxuICAgICAgYXhpc1RpY2s6IHRoaXMuYXhpc1RpY2ssXG4gICAgICBheGlzTGFiZWw6IHRoaXMuYXhpc0xhYmVsLFxuICAgICAgc3BsaXRMaW5lOiB0aGlzLnNwbGl0TGluZSxcbiAgICAgIHNwbGl0QXJlYTogdGhpcy5zcGxpdEFyZWEsXG4gICAgICBkYXRhOiB0aGlzLmRhdGEsXG4gICAgICBheGlzUG9pbnRlcjogdGhpcy5heGlzUG9pbnRlcixcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgfSk7XG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2Uuc2V0QXJyYXlPcHRpb24odGhpcy5fYXhpc09wdGlvbiwgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5jbGVhck9wdGlvbih0aGlzLl9heGlzT3B0aW9uKTtcbiAgfVxuXG59XG4iXX0=