import { Input } from '@angular/core';
import { assignDefined } from '../utils/assign-defined';
export class TdSeriesComponent {
    constructor(type, optionsService) {
        this.optionsService = optionsService;
        this._state = {};
        this._options = {};
        this.config = {};
        this._type = type;
    }
    get type() {
        return this._type;
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
    setStateOption(option, value) {
        this._options[option] = value;
        this._setOptions();
    }
    removeStateOption(option) {
        /* tslint:disable-next-line */
        this._options[option] = null;
        this._setOptions();
    }
    _setOptions() {
        let config = assignDefined(this._state, this.config ? this.config : {}, {
            id: this.id,
            type: this.type,
            name: this.name,
            color: this.color,
            data: this.data,
            animation: this.animation,
            animationThreshold: this.animationThreshold,
            animationDuration: this.animationDuration,
            animationEasing: this.animationEasing,
            animationDelay: this.animationDelay,
            animationDurationUpdate: this.animationDurationUpdate,
            animationEasingUpdate: this.animationEasingUpdate,
            animationDelayUpdate: this.animationDelayUpdate,
            tooltip: this.tooltip,
        }, this.getConfig(), this._options);
        this.optionsService.setArrayOption('series', config);
    }
    _removeOption() {
        this.optionsService.removeArrayOption('series', this._state);
    }
}
TdSeriesComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    id: [{ type: Input, args: ['id',] }],
    name: [{ type: Input, args: ['name',] }],
    color: [{ type: Input, args: ['color',] }],
    data: [{ type: Input, args: ['data',] }],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VyaWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzLyIsInNvdXJjZXMiOlsiYmFzZS9zZXJpZXMvc2VyaWVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUVwRSxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFjeEQsTUFBTSxPQUFnQixpQkFBaUI7SUE0QnJDLFlBQVksSUFBTyxFQUFZLGNBQXFDO1FBQXJDLG1CQUFjLEdBQWQsY0FBYyxDQUF1QjtRQXBCcEUsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBRUYsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQWtCaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQTFCRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQTBCRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxjQUFjLENBQUMsTUFBYyxFQUFFLEtBQVU7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxNQUFjO1FBQzlCLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUM3QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUlPLFdBQVc7UUFDakIsSUFBSSxNQUFNLEdBQVEsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQzNFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtZQUNYLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjtZQUMzQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQ3pDLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLHVCQUF1QjtZQUNyRCxxQkFBcUIsRUFBRSxJQUFJLENBQUMscUJBQXFCO1lBQ2pELG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0I7WUFDL0MsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQ3RCLEVBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVPLGFBQWE7UUFDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQy9ELENBQUM7OztxQkFwRUEsS0FBSyxTQUFDLFFBQVE7aUJBRWQsS0FBSyxTQUFDLElBQUk7bUJBQ1YsS0FBSyxTQUFDLE1BQU07b0JBQ1osS0FBSyxTQUFDLE9BQU87bUJBQ2IsS0FBSyxTQUFDLE1BQU07d0JBRVosS0FBSyxTQUFDLFdBQVc7aUNBQ2pCLEtBQUssU0FBQyxvQkFBb0I7Z0NBQzFCLEtBQUssU0FBQyxtQkFBbUI7OEJBQ3pCLEtBQUssU0FBQyxpQkFBaUI7NkJBQ3ZCLEtBQUssU0FBQyxnQkFBZ0I7c0NBQ3RCLEtBQUssU0FBQyx5QkFBeUI7b0NBQy9CLEtBQUssU0FBQyx1QkFBdUI7bUNBQzdCLEtBQUssU0FBQyxzQkFBc0I7c0JBQzVCLEtBQUssU0FBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgYXNzaWduRGVmaW5lZCB9IGZyb20gJy4uL3V0aWxzL2Fzc2lnbi1kZWZpbmVkJztcbmltcG9ydCB7IFRkQ2hhcnRPcHRpb25zU2VydmljZSB9IGZyb20gJy4uL2NoYXJ0LW9wdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBJVGRTZXJpZXNUb29sdGlwIH0gZnJvbSAnLi4vc2VyaWVzL3Nlcmllcy5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgSVRkQW5pbWF0aW9uIH0gZnJvbSAnLi4vYmFzZS50eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2VyaWVzPFQ+IGV4dGVuZHMgSVRkQW5pbWF0aW9uIHtcbiAgaWQ/OiBzdHJpbmc7XG4gIG5hbWU/OiBzdHJpbmc7XG4gIGNvbG9yPzogc3RyaW5nO1xuICB0eXBlPzogVDtcblxuICB0b29sdGlwPzogSVRkU2VyaWVzVG9vbHRpcDtcbn1cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFRkU2VyaWVzQ29tcG9uZW50PFQgPSBhbnk+IGltcGxlbWVudHMgSVRkU2VyaWVzPFQ+LCBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95ICB7XG5cbiAgcHJpdmF0ZSBfdHlwZTogVDtcblxuICBnZXQgdHlwZSgpOiBUIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIF9zdGF0ZTogYW55ID0ge307XG4gIF9vcHRpb25zOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdpZCcpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgnbmFtZScpIG5hbWU6IHN0cmluZztcbiAgQElucHV0KCdjb2xvcicpIGNvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueVtdO1xuXG4gIEBJbnB1dCgnYW5pbWF0aW9uJykgYW5pbWF0aW9uOiBib29sZWFuO1xuICBASW5wdXQoJ2FuaW1hdGlvblRocmVzaG9sZCcpIGFuaW1hdGlvblRocmVzaG9sZDogbnVtYmVyO1xuICBASW5wdXQoJ2FuaW1hdGlvbkR1cmF0aW9uJykgYW5pbWF0aW9uRHVyYXRpb246IG51bWJlciB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ2FuaW1hdGlvbkVhc2luZycpIGFuaW1hdGlvbkVhc2luZzogc3RyaW5nO1xuICBASW5wdXQoJ2FuaW1hdGlvbkRlbGF5JykgYW5pbWF0aW9uRGVsYXk6IG51bWJlciB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ2FuaW1hdGlvbkR1cmF0aW9uVXBkYXRlJykgYW5pbWF0aW9uRHVyYXRpb25VcGRhdGU6IG51bWJlciB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ2FuaW1hdGlvbkVhc2luZ1VwZGF0ZScpIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZTogc3RyaW5nO1xuICBASW5wdXQoJ2FuaW1hdGlvbkRlbGF5VXBkYXRlJykgYW5pbWF0aW9uRGVsYXlVcGRhdGU6IG51bWJlciB8IEZ1bmN0aW9uO1xuICBASW5wdXQoJ3Rvb2x0aXAnKSB0b29sdGlwOiBJVGRTZXJpZXNUb29sdGlwO1xuXG4gIGNvbnN0cnVjdG9yKHR5cGU6IFQsIHByb3RlY3RlZCBvcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuICBcbiAgc2V0U3RhdGVPcHRpb24ob3B0aW9uOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zW29wdGlvbl0gPSB2YWx1ZTtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICByZW1vdmVTdGF0ZU9wdGlvbihvcHRpb246IHN0cmluZyk6IHZvaWQge1xuICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSAqL1xuICAgIHRoaXMuX29wdGlvbnNbb3B0aW9uXSA9IG51bGw7XG4gICAgdGhpcy5fc2V0T3B0aW9ucygpO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0Q29uZmlnKCk6IGFueTtcblxuICBwcml2YXRlIF9zZXRPcHRpb25zKCk6IHZvaWQge1xuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQodGhpcy5fc3RhdGUsIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSwge1xuICAgICAgaWQ6IHRoaXMuaWQsXG4gICAgICB0eXBlOiB0aGlzLnR5cGUsXG4gICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICBjb2xvcjogdGhpcy5jb2xvcixcbiAgICAgIGRhdGE6IHRoaXMuZGF0YSxcbiAgICAgIGFuaW1hdGlvbjogdGhpcy5hbmltYXRpb24sXG4gICAgICBhbmltYXRpb25UaHJlc2hvbGQ6IHRoaXMuYW5pbWF0aW9uVGhyZXNob2xkLFxuICAgICAgYW5pbWF0aW9uRHVyYXRpb246IHRoaXMuYW5pbWF0aW9uRHVyYXRpb24sXG4gICAgICBhbmltYXRpb25FYXNpbmc6IHRoaXMuYW5pbWF0aW9uRWFzaW5nLFxuICAgICAgYW5pbWF0aW9uRGVsYXk6IHRoaXMuYW5pbWF0aW9uRGVsYXksXG4gICAgICBhbmltYXRpb25EdXJhdGlvblVwZGF0ZTogdGhpcy5hbmltYXRpb25EdXJhdGlvblVwZGF0ZSxcbiAgICAgIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZTogdGhpcy5hbmltYXRpb25FYXNpbmdVcGRhdGUsXG4gICAgICBhbmltYXRpb25EZWxheVVwZGF0ZTogdGhpcy5hbmltYXRpb25EZWxheVVwZGF0ZSxcbiAgICAgIHRvb2x0aXA6IHRoaXMudG9vbHRpcCxcbiAgICB9ICwgdGhpcy5nZXRDb25maWcoKSwgdGhpcy5fb3B0aW9ucyk7XG4gICAgdGhpcy5vcHRpb25zU2VydmljZS5zZXRBcnJheU9wdGlvbignc2VyaWVzJywgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLm9wdGlvbnNTZXJ2aWNlLnJlbW92ZUFycmF5T3B0aW9uKCdzZXJpZXMnLCB0aGlzLl9zdGF0ZSk7XG4gIH1cblxufVxuIl19