import * as tslib_1 from "tslib";
import { Component, Input, Directive, TemplateRef, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, ContentChild, ViewChild, } from '@angular/core';
import { TdChartOptionsService, assignDefined, } from '@covalent/echarts/base';
var TdChartViewDataFormatterDirective = /** @class */ (function () {
    function TdChartViewDataFormatterDirective() {
    }
    TdChartViewDataFormatterDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'ng-template[tdViewDataFormatter]',
                },] }
    ];
    return TdChartViewDataFormatterDirective;
}());
export { TdChartViewDataFormatterDirective };
var TdChartToolboxComponent = /** @class */ (function () {
    function TdChartToolboxComponent(_changeDetectorRef, _elementRef, _optionsService) {
        this._changeDetectorRef = _changeDetectorRef;
        this._elementRef = _elementRef;
        this._optionsService = _optionsService;
        this._state = {};
        this.config = {};
        this.show = true;
        this.showTitle = true;
        this.transitionDuration = 0.5;
        this.left = 'auto';
        this.top = 'auto';
        this.right = 'auto';
        this.bottom = 'auto';
        this.width = 'auto';
        this.height = 'auto';
    }
    TdChartToolboxComponent.prototype.ngOnChanges = function () {
        this._setOptions();
    };
    TdChartToolboxComponent.prototype.ngOnDestroy = function () {
        this._removeOption();
    };
    TdChartToolboxComponent.prototype._setOptions = function () {
        this._checkFormatterTemplate();
        var config = assignDefined(this._state, this.config ? this.config : {}, {
            show: this.show,
            name: this.trigger,
            orient: this.orient,
            itemSize: this.itemSize,
            itemGap: this.itemGap,
            showTitle: this.showTitle,
            label: this.label,
            feature: this.feature,
            iconStyle: this.iconStyle,
            zlevel: this.zlevel,
            z: this.z,
            transitionDuration: this.transitionDuration,
            left: this.left,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            width: this.width,
            height: this.height,
        });
        // set toolbox configuration in parent chart and render new configurations
        this._optionsService.setOption('toolbox', config);
    };
    TdChartToolboxComponent.prototype._removeOption = function () {
        this._optionsService.clearOption('toolbox');
    };
    TdChartToolboxComponent.prototype._checkFormatterTemplate = function () {
        if (this.formatterTemplate) {
            this.feature = tslib_1.__assign({}, this.feature, { dataView: tslib_1.__assign({}, this.feature.dataView, { optionToContent: this._optionToContentFormatter() }) });
        }
    };
    TdChartToolboxComponent.prototype._optionToContentFormatter = function () {
        var _this = this;
        return function () {
            _this._changeDetectorRef.markForCheck();
            return _this._elementRef.nativeElement.innerHTML;
        };
    };
    TdChartToolboxComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-toolbox',
                    template: "<ng-template #toolboxContent\n            [ngTemplateOutlet]=\"formatterTemplate\">\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TdChartToolboxComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef },
        { type: TdChartOptionsService }
    ]; };
    TdChartToolboxComponent.propDecorators = {
        config: [{ type: Input, args: ['config',] }],
        show: [{ type: Input, args: ['show',] }],
        trigger: [{ type: Input, args: ['name',] }],
        orient: [{ type: Input, args: ['orient',] }],
        itemSize: [{ type: Input, args: ['itemSize',] }],
        itemGap: [{ type: Input, args: ['itemGap',] }],
        showTitle: [{ type: Input, args: ['showTitle',] }],
        label: [{ type: Input, args: ['label',] }],
        feature: [{ type: Input, args: ['feature',] }],
        iconStyle: [{ type: Input, args: ['iconStyle',] }],
        zlevel: [{ type: Input, args: ['zlevel',] }],
        z: [{ type: Input, args: ['z',] }],
        transitionDuration: [{ type: Input, args: ['transitionDuration',] }],
        left: [{ type: Input, args: ['left',] }],
        top: [{ type: Input, args: ['top',] }],
        right: [{ type: Input, args: ['right',] }],
        bottom: [{ type: Input, args: ['bottom',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }],
        formatterTemplate: [{ type: ContentChild, args: [TdChartViewDataFormatterDirective, { read: TemplateRef },] }],
        fullTemplate: [{ type: ViewChild, args: ['toolboxContent',] }]
    };
    return TdChartToolboxComponent;
}());
export { TdChartToolboxComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sYm94LyIsInNvdXJjZXMiOlsidG9vbGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLFNBQVMsRUFDVCxXQUFXLEVBQ1gsdUJBQXVCLEVBQ3ZCLFVBQVUsRUFDVixpQkFBaUIsRUFFakIsWUFBWSxFQUNaLFNBQVMsR0FFVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wscUJBQXFCLEVBQ3JCLGFBQWEsR0FNZCxNQUFNLHdCQUF3QixDQUFDO0FBaUhoQztJQUFBO0lBR2dELENBQUM7O2dCQUhoRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtDQUFrQztpQkFDN0M7O0lBQytDLHdDQUFDO0NBQUEsQUFIakQsSUFHaUQ7U0FBcEMsaUNBQWlDO0FBRTlDO0lBaUNFLGlDQUNVLGtCQUFxQyxFQUNyQyxXQUF1QixFQUN2QixlQUFzQztRQUZ0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQTlCeEMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUVSLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFbkIsU0FBSSxHQUFZLElBQUksQ0FBQztRQUtoQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBTWpCLHVCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUMvQyxTQUFJLEdBQW9CLE1BQU0sQ0FBQztRQUNoQyxRQUFHLEdBQW9CLE1BQU0sQ0FBQztRQUM1QixVQUFLLEdBQW9CLE1BQU0sQ0FBQztRQUMvQixXQUFNLEdBQW9CLE1BQU0sQ0FBQztRQUNsQyxVQUFLLEdBQW9CLE1BQU0sQ0FBQztRQUMvQixXQUFNLEdBQW9CLE1BQU0sQ0FBQztJQVUvQyxDQUFDO0lBRUosNkNBQVcsR0FB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TUFBTTtzQkFDWixLQUFLLFNBQUMsS0FBSzt3QkFDWCxLQUFLLFNBQUMsT0FBTzt5QkFDYixLQUFLLFNBQUMsUUFBUTt3QkFDZCxLQUFLLFNBQUMsT0FBTzt5QkFDYixLQUFLLFNBQUMsUUFBUTtvQ0FFZCxZQUFZLFNBQUMsaUNBQWlDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOytCQUVyRSxTQUFTLFNBQUMsZ0JBQWdCOztJQXNFN0IsOEJBQUM7Q0FBQSxBQXJHRCxJQXFHQztTQWhHWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBEaXJlY3RpdmUsXG4gIFRlbXBsYXRlUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE9uQ2hhbmdlcyxcbiAgQ29udGVudENoaWxkLFxuICBWaWV3Q2hpbGQsXG4gIE9uRGVzdHJveSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7XG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgYXNzaWduRGVmaW5lZCxcbiAgSVRkTGFiZWwsXG4gIElUZFNoYWRvdyxcbiAgSVRkSXRlbVN0eWxlLFxuICBUZFRleHRQb3NpdGlvbixcbiAgVGRUZXh0QWxpZ24sXG59IGZyb20gJ0Bjb3ZhbGVudC9lY2hhcnRzL2Jhc2UnO1xuXG5leHBvcnQgdHlwZSBUZFRvb2xib3hPcmllbnQgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuZXhwb3J0IHR5cGUgVGRJbWFnZVR5cGUgPSAncG5nJyB8ICdqcGVnJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRBY2NlcHRlZEJydXNoVHlwZXMge1xuICByZWN0Pzogc3RyaW5nO1xuICBwb2x5Z29uPzogc3RyaW5nO1xuICBsaW5lWD86IHN0cmluZztcbiAgbGluZVk/OiBzdHJpbmc7XG4gIGtlZXA/OiBzdHJpbmc7XG4gIGNsZWFyPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEFjY2VwdGVkTWFnaWNUeXBlcyB7XG4gIGxpbmU/OiBzdHJpbmc7XG4gIGJhcj86IHN0cmluZztcbiAgc3RhY2s/OiBzdHJpbmc7XG4gIHRpbGVkPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRvb2xib3hJY29uRW1waGFzaXMgZXh0ZW5kcyBJVGRJdGVtU3R5bGUsIElUZFNoYWRvdyB7fVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEZlYXR1cmVJY29uU3R5bGUgZXh0ZW5kcyBJVGRJdGVtU3R5bGUsIElUZFNoYWRvdyB7XG4gIHRleHRQb3NpdGlvbj86IFRkVGV4dFBvc2l0aW9uO1xuICB0ZXh0QWxpZ24/OiBUZFRleHRBbGlnbjtcbiAgZW1waGFzaXM/OiBJVGRUb29sYm94SWNvbkVtcGhhc2lzO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFpvb21UaXRsZXMge1xuICB6b29tPzogc3RyaW5nO1xuICBiYWNrPzogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFNhdmVBc0ltYWdlIHtcbiAgdHlwZT86IFRkSW1hZ2VUeXBlO1xuICBuYW1lPzogc3RyaW5nO1xuICBiYWNrZ3JvdW5kQ29sb3I/OiBhbnk7XG4gIGV4Y2x1ZGVDb21wb25lbnRzPzogc3RyaW5nW107IC8vIGRlZmF1bHRzIHRvIFsndG9vbGJveCddXG4gIHNob3c/OiBib29sZWFuO1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgcGl4ZWxSYXRpbz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRSZXN0b3JlIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZERhdGFWaWV3IHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHRpdGxlPzogc3RyaW5nO1xuICBpY29uPzogc3RyaW5nO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICByZWFkT25seT86IGJvb2xlYW47XG4gIG9wdGlvblRvQ29udGVudD86IEZ1bmN0aW9uO1xuICBjb250ZW50VG9PcHRpb24/OiBGdW5jdGlvbjtcbiAgbGFuZz86IHN0cmluZ1tdOyAvLyBEZWZhdWx0cyB0byBDaGluZXNlLCB0aGVyZSBhcmUgMyBuYW1lcyBpbiBkYXRhIHZpZXcsIHdoaWNoIGFyZSBbJ2RhdGEgdmlldycsICd0dXJuIG9mZicgYW5kICdyZWZyZXNoJ10uXG4gIHRleHRhcmVhQ29sb3I/OiBzdHJpbmc7XG4gIHRleHRhcmVhQm9yZGVyQ29sb3I/OiBzdHJpbmc7XG4gIHRleHRDb2xvcj86IHN0cmluZztcbiAgYnV0dG9uQ29sb3I/OiBzdHJpbmc7XG4gIGJ1dHRvblRleHRDb2xvcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhWm9vbSB7XG4gIHNob3c/OiBib29sZWFuO1xuICB0aXRsZT86IElUZFpvb21UaXRsZXM7XG4gIGljb24/OiBJVGRab29tVGl0bGVzO1xuICBpY29uU3R5bGU/OiBJVGRGZWF0dXJlSWNvblN0eWxlO1xuICB4QXhpc0luZGV4PzogbnVtYmVyIHwgbnVtYmVyW10gfCBib29sZWFuO1xuICB5QXhpc0luZGV4PzogbnVtYmVyIHwgbnVtYmVyW10gfCBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZE1hZ2ljVHlwZSB7XG4gIHNob3c/OiBib29sZWFuO1xuICB0eXBlPzogc3RyaW5nW107IC8vIG9ubHkgZXhwZWN0cyAnbGluZScgfCAnYmFyJyB8ICdzdGFjaycgfCAndGlsZWQnO1xuICB0aXRsZT86IElUZEFjY2VwdGVkTWFnaWNUeXBlcztcbiAgaWNvbj86IElUZEFjY2VwdGVkTWFnaWNUeXBlcztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgb3B0aW9uPzoge1xuICAgIGxpbmU/OiBvYmplY3Q7XG4gICAgYmFyPzogb2JqZWN0O1xuICAgIHN0YWNrPzogb2JqZWN0O1xuICAgIHRpbGVkPzogb2JqZWN0O1xuICB9O1xuICBzZXJpZXNJbmRleD86IHtcbiAgICBsaW5lPzogYW55W107XG4gICAgYmFyPzogYW55W107XG4gICAgc3RhY2s/OiBhbnlbXTtcbiAgICB0aWxlZD86IGFueVtdO1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZEJydXNoIHtcbiAgdHlwZT86IGFueVtdO1xuICBpY29uPzogSVRkQWNjZXB0ZWRCcnVzaFR5cGVzO1xuICB0aXRsZT86IElUZEFjY2VwdGVkQnJ1c2hUeXBlcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUb29sYm94RmVhdHVyZSB7XG4gIHNhdmVBc0ltYWdlPzogSVRkU2F2ZUFzSW1hZ2U7XG4gIHJlc3RvcmU/OiBJVGRSZXN0b3JlO1xuICBkYXRhVmlldz86IElUZERhdGFWaWV3O1xuICBkYXRhWm9vbT86IElUZERhdGFab29tO1xuICBtYWdpY1R5cGU/OiBJVGRNYWdpY1R5cGU7XG4gIGJydXNoPzogSVRkQnJ1c2g7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ25nLXRlbXBsYXRlW3RkVmlld0RhdGFGb3JtYXR0ZXJdJyxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFZpZXdEYXRhRm9ybWF0dGVyRGlyZWN0aXZlIHt9XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3RkLWNoYXJ0LXRvb2xib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9vbGJveC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0VG9vbGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc3RhdGU6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgnY29uZmlnJykgY29uZmlnOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ3Nob3cnKSBzaG93OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCduYW1lJykgdHJpZ2dlcjogc3RyaW5nO1xuICBASW5wdXQoJ29yaWVudCcpIG9yaWVudDogVGRUb29sYm94T3JpZW50O1xuICBASW5wdXQoJ2l0ZW1TaXplJykgaXRlbVNpemU6IG51bWJlcjtcbiAgQElucHV0KCdpdGVtR2FwJykgaXRlbUdhcDogbnVtYmVyO1xuICBASW5wdXQoJ3Nob3dUaXRsZScpIHNob3dUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnbGFiZWwnKSBsYWJlbDogSVRkTGFiZWw7XG4gIEBJbnB1dCgnZmVhdHVyZScpIGZlYXR1cmU6IElUZFRvb2xib3hGZWF0dXJlO1xuICBASW5wdXQoJ2ljb25TdHlsZScpIGljb25TdHlsZTogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ3RyYW5zaXRpb25EdXJhdGlvbicpIHRyYW5zaXRpb25EdXJhdGlvbjogbnVtYmVyID0gMC41O1xuICBASW5wdXQoJ2xlZnQnKSBsZWZ0OiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgndG9wJykgdG9wOiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgncmlnaHQnKSByaWdodDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoJ2JvdHRvbScpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoJ3dpZHRoJykgd2lkdGg6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCdoZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcblxuICBAQ29udGVudENoaWxkKFRkQ2hhcnRWaWV3RGF0YUZvcm1hdHRlckRpcmVjdGl2ZSwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxuICBmb3JtYXR0ZXJUZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcbiAgQFZpZXdDaGlsZCgndG9vbGJveENvbnRlbnQnKSBmdWxsVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfY2hhbmdlRGV0ZWN0b3JSZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfb3B0aW9uc1NlcnZpY2U6IFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX3NldE9wdGlvbnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuX3JlbW92ZU9wdGlvbigpO1xuICB9XG5cbiAgcHJpdmF0ZSBfc2V0T3B0aW9ucygpOiB2b2lkIHtcblxuICAgIHRoaXMuX2NoZWNrRm9ybWF0dGVyVGVtcGxhdGUoKTtcblxuICAgIGxldCBjb25maWc6IGFueSA9IGFzc2lnbkRlZmluZWQoXG4gICAgICB0aGlzLl9zdGF0ZSxcbiAgICAgIHRoaXMuY29uZmlnID8gdGhpcy5jb25maWcgOiB7fSxcbiAgICAgIHtcbiAgICAgICAgc2hvdzogdGhpcy5zaG93LFxuICAgICAgICBuYW1lOiB0aGlzLnRyaWdnZXIsXG4gICAgICAgIG9yaWVudDogdGhpcy5vcmllbnQsXG4gICAgICAgIGl0ZW1TaXplOiB0aGlzLml0ZW1TaXplLFxuICAgICAgICBpdGVtR2FwOiB0aGlzLml0ZW1HYXAsXG4gICAgICAgIHNob3dUaXRsZTogdGhpcy5zaG93VGl0bGUsXG4gICAgICAgIGxhYmVsOiB0aGlzLmxhYmVsLFxuICAgICAgICBmZWF0dXJlOiB0aGlzLmZlYXR1cmUsXG4gICAgICAgIGljb25TdHlsZTogdGhpcy5pY29uU3R5bGUsXG4gICAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICAgIHo6IHRoaXMueixcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uOiB0aGlzLnRyYW5zaXRpb25EdXJhdGlvbixcbiAgICAgICAgbGVmdDogdGhpcy5sZWZ0LFxuICAgICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgICAgYm90dG9tOiB0aGlzLmJvdHRvbSxcbiAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICB9LFxuICAgICk7XG4gICAgLy8gc2V0IHRvb2xib3ggY29uZmlndXJhdGlvbiBpbiBwYXJlbnQgY2hhcnQgYW5kIHJlbmRlciBuZXcgY29uZmlndXJhdGlvbnNcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5zZXRPcHRpb24oJ3Rvb2xib3gnLCBjb25maWcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuX29wdGlvbnNTZXJ2aWNlLmNsZWFyT3B0aW9uKCd0b29sYm94Jyk7XG4gIH1cblxuICBwcml2YXRlIF9jaGVja0Zvcm1hdHRlclRlbXBsYXRlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZvcm1hdHRlclRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmZlYXR1cmUgPSB7XG4gICAgICAgIC4uLnRoaXMuZmVhdHVyZSxcbiAgICAgICAgZGF0YVZpZXc6IHtcbiAgICAgICAgICAuLi50aGlzLmZlYXR1cmUuZGF0YVZpZXcsXG4gICAgICAgICAgb3B0aW9uVG9Db250ZW50OiB0aGlzLl9vcHRpb25Ub0NvbnRlbnRGb3JtYXR0ZXIoKSxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3B0aW9uVG9Db250ZW50Rm9ybWF0dGVyKCk6IEZ1bmN0aW9uIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgICByZXR1cm4gKDxIVE1MRWxlbWVudD50aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmlubmVySFRNTDtcbiAgICB9O1xuICB9XG59XG4iXX0=