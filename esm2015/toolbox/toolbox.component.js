import { Component, Input, Directive, TemplateRef, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, ContentChild, ViewChild, } from '@angular/core';
import { TdChartOptionsService, assignDefined, } from '@covalent/echarts/base';
export class TdChartViewDataFormatterDirective {
}
TdChartViewDataFormatterDirective.decorators = [
    { type: Directive, args: [{
                selector: 'ng-template[tdViewDataFormatter]',
            },] }
];
export class TdChartToolboxComponent {
    constructor(_changeDetectorRef, _elementRef, _optionsService) {
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
    ngOnChanges() {
        this._setOptions();
    }
    ngOnDestroy() {
        this._removeOption();
    }
    _setOptions() {
        this._checkFormatterTemplate();
        let config = assignDefined(this._state, this.config ? this.config : {}, {
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
    }
    _removeOption() {
        this._optionsService.clearOption('toolbox');
    }
    _checkFormatterTemplate() {
        if (this.formatterTemplate) {
            this.feature = Object.assign({}, this.feature, { dataView: Object.assign({}, this.feature.dataView, { optionToContent: this._optionToContentFormatter() }) });
        }
    }
    _optionToContentFormatter() {
        return () => {
            this._changeDetectorRef.markForCheck();
            return this._elementRef.nativeElement.innerHTML;
        };
    }
}
TdChartToolboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-toolbox',
                template: "<ng-template #toolboxContent\n            [ngTemplateOutlet]=\"formatterTemplate\">\n</ng-template>",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TdChartToolboxComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: TdChartOptionsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJveC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90b29sYm94LyIsInNvdXJjZXMiOlsidG9vbGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFDWCx1QkFBdUIsRUFDdkIsVUFBVSxFQUNWLGlCQUFpQixFQUVqQixZQUFZLEVBQ1osU0FBUyxHQUVWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFDTCxxQkFBcUIsRUFDckIsYUFBYSxHQU1kLE1BQU0sd0JBQXdCLENBQUM7QUFvSGhDLE1BQU0sT0FBTyxpQ0FBaUM7OztZQUg3QyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtDQUFrQzthQUM3Qzs7QUFRRCxNQUFNLE9BQU8sdUJBQXVCO0lBNEJsQyxZQUNVLGtCQUFxQyxFQUNyQyxXQUF1QixFQUN2QixlQUFzQztRQUZ0Qyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQ3ZCLG9CQUFlLEdBQWYsZUFBZSxDQUF1QjtRQTlCeEMsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUVSLFdBQU0sR0FBUSxFQUFFLENBQUM7UUFFbkIsU0FBSSxHQUFZLElBQUksQ0FBQztRQUtoQixjQUFTLEdBQVksSUFBSSxDQUFDO1FBTWpCLHVCQUFrQixHQUFXLEdBQUcsQ0FBQztRQUMvQyxTQUFJLEdBQW9CLE1BQU0sQ0FBQztRQUNoQyxRQUFHLEdBQW9CLE1BQU0sQ0FBQztRQUM1QixVQUFLLEdBQW9CLE1BQU0sQ0FBQztRQUMvQixXQUFNLEdBQW9CLE1BQU0sQ0FBQztRQUNsQyxVQUFLLEdBQW9CLE1BQU0sQ0FBQztRQUMvQixXQUFNLEdBQW9CLE1BQU0sQ0FBQztJQVUvQyxDQUFDO0lBRUosV0FBVztRQUNULElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJ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UTtvQkFDZCxLQUFLLFNBQUMsT0FBTztxQkFDYixLQUFLLFNBQUMsUUFBUTtnQ0FFZCxZQUFZLFNBQUMsaUNBQWlDLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFOzJCQUVyRSxTQUFTLFNBQUMsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgRGlyZWN0aXZlLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIEVsZW1lbnRSZWYsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBPbkNoYW5nZXMsXG4gIENvbnRlbnRDaGlsZCxcbiAgVmlld0NoaWxkLFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQge1xuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIGFzc2lnbkRlZmluZWQsXG4gIElUZExhYmVsLFxuICBJVGRTaGFkb3csXG4gIElUZEl0ZW1TdHlsZSxcbiAgVGRUZXh0UG9zaXRpb24sXG4gIFRkVGV4dEFsaWduLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IHR5cGUgVGRUb29sYm94T3JpZW50ID0gJ2hvcml6b250YWwnIHwgJ3ZlcnRpY2FsJztcbmV4cG9ydCB0eXBlIFRkSW1hZ2VUeXBlID0gJ3BuZycgfCAnanBlZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkQWNjZXB0ZWRCcnVzaFR5cGVzIHtcbiAgcmVjdD86IHN0cmluZztcbiAgcG9seWdvbj86IHN0cmluZztcbiAgbGluZVg/OiBzdHJpbmc7XG4gIGxpbmVZPzogc3RyaW5nO1xuICBrZWVwPzogc3RyaW5nO1xuICBjbGVhcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRBY2NlcHRlZE1hZ2ljVHlwZXMge1xuICBsaW5lPzogc3RyaW5nO1xuICBiYXI/OiBzdHJpbmc7XG4gIHN0YWNrPzogc3RyaW5nO1xuICB0aWxlZD86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUb29sYm94SWNvbkVtcGhhc2lzIGV4dGVuZHMgSVRkSXRlbVN0eWxlLCBJVGRTaGFkb3cge31cblxuZXhwb3J0IGludGVyZmFjZSBJVGRGZWF0dXJlSWNvblN0eWxlIGV4dGVuZHMgSVRkSXRlbVN0eWxlLCBJVGRTaGFkb3cge1xuICB0ZXh0UG9zaXRpb24/OiBUZFRleHRQb3NpdGlvbjtcbiAgdGV4dEFsaWduPzogVGRUZXh0QWxpZ247XG4gIGVtcGhhc2lzPzogSVRkVG9vbGJveEljb25FbXBoYXNpcztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRab29tVGl0bGVzIHtcbiAgem9vbT86IHN0cmluZztcbiAgYmFjaz86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRTYXZlQXNJbWFnZSB7XG4gIHR5cGU/OiBUZEltYWdlVHlwZTtcbiAgbmFtZT86IHN0cmluZztcbiAgYmFja2dyb3VuZENvbG9yPzogYW55O1xuICBleGNsdWRlQ29tcG9uZW50cz86IHN0cmluZ1tdOyAvLyBkZWZhdWx0cyB0byBbJ3Rvb2xib3gnXVxuICBzaG93PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIHBpeGVsUmF0aW8/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkUmVzdG9yZSB7XG4gIHNob3c/OiBib29sZWFuO1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGREYXRhVmlldyB7XG4gIHNob3c/OiBib29sZWFuO1xuICB0aXRsZT86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xuICBvcHRpb25Ub0NvbnRlbnQ/OiBGdW5jdGlvbjtcbiAgY29udGVudFRvT3B0aW9uPzogRnVuY3Rpb247XG4gIGxhbmc/OiBzdHJpbmdbXTsgLy8gRGVmYXVsdHMgdG8gQ2hpbmVzZSwgdGhlcmUgYXJlIDMgbmFtZXMgaW4gZGF0YSB2aWV3LCB3aGljaCBhcmUgWydkYXRhIHZpZXcnLCAndHVybiBvZmYnIGFuZCAncmVmcmVzaCddLlxuICB0ZXh0YXJlYUNvbG9yPzogc3RyaW5nO1xuICB0ZXh0YXJlYUJvcmRlckNvbG9yPzogc3RyaW5nO1xuICB0ZXh0Q29sb3I/OiBzdHJpbmc7XG4gIGJ1dHRvbkNvbG9yPzogc3RyaW5nO1xuICBidXR0b25UZXh0Q29sb3I/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkRGF0YVpvb20ge1xuICBzaG93PzogYm9vbGVhbjtcbiAgdGl0bGU/OiBJVGRab29tVGl0bGVzO1xuICBpY29uPzogSVRkWm9vbVRpdGxlcztcbiAgaWNvblN0eWxlPzogSVRkRmVhdHVyZUljb25TdHlsZTtcbiAgeEF4aXNJbmRleD86IG51bWJlciB8IG51bWJlcltdIHwgYm9vbGVhbjtcbiAgeUF4aXNJbmRleD86IG51bWJlciB8IG51bWJlcltdIHwgYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRNYWdpY1R5cGUge1xuICBzaG93PzogYm9vbGVhbjtcbiAgdHlwZT86IHN0cmluZ1tdOyAvLyBvbmx5IGV4cGVjdHMgJ2xpbmUnIHwgJ2JhcicgfCAnc3RhY2snIHwgJ3RpbGVkJztcbiAgdGl0bGU/OiBJVGRBY2NlcHRlZE1hZ2ljVHlwZXM7XG4gIGljb24/OiBJVGRBY2NlcHRlZE1hZ2ljVHlwZXM7XG4gIGljb25TdHlsZT86IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIG9wdGlvbj86IHtcbiAgICBsaW5lPzogb2JqZWN0O1xuICAgIGJhcj86IG9iamVjdDtcbiAgICBzdGFjaz86IG9iamVjdDtcbiAgICB0aWxlZD86IG9iamVjdDtcbiAgfTtcbiAgc2VyaWVzSW5kZXg/OiB7XG4gICAgbGluZT86IGFueVtdO1xuICAgIGJhcj86IGFueVtdO1xuICAgIHN0YWNrPzogYW55W107XG4gICAgdGlsZWQ/OiBhbnlbXTtcbiAgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRCcnVzaCB7XG4gIHR5cGU/OiBhbnlbXTtcbiAgaWNvbj86IElUZEFjY2VwdGVkQnJ1c2hUeXBlcztcbiAgdGl0bGU/OiBJVGRBY2NlcHRlZEJydXNoVHlwZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkVG9vbGJveEZlYXR1cmUge1xuICBzYXZlQXNJbWFnZT86IElUZFNhdmVBc0ltYWdlO1xuICByZXN0b3JlPzogSVRkUmVzdG9yZTtcbiAgZGF0YVZpZXc/OiBJVGREYXRhVmlldztcbiAgZGF0YVpvb20/OiBJVGREYXRhWm9vbTtcbiAgbWFnaWNUeXBlPzogSVRkTWFnaWNUeXBlO1xuICBicnVzaD86IElUZEJydXNoO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICduZy10ZW1wbGF0ZVt0ZFZpZXdEYXRhRm9ybWF0dGVyXScsXG59KVxuZXhwb3J0IGNsYXNzIFRkQ2hhcnRWaWV3RGF0YUZvcm1hdHRlckRpcmVjdGl2ZSB7fVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC10b29sYm94JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rvb2xib3guY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGRDaGFydFRvb2xib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX3N0YXRlOiBhbnkgPSB7fTtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG5cbiAgQElucHV0KCdzaG93Jykgc2hvdzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgnbmFtZScpIHRyaWdnZXI6IHN0cmluZztcbiAgQElucHV0KCdvcmllbnQnKSBvcmllbnQ6IFRkVG9vbGJveE9yaWVudDtcbiAgQElucHV0KCdpdGVtU2l6ZScpIGl0ZW1TaXplOiBudW1iZXI7XG4gIEBJbnB1dCgnaXRlbUdhcCcpIGl0ZW1HYXA6IG51bWJlcjtcbiAgQElucHV0KCdzaG93VGl0bGUnKSBzaG93VGl0bGU6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ2ZlYXR1cmUnKSBmZWF0dXJlOiBJVGRUb29sYm94RmVhdHVyZTtcbiAgQElucHV0KCdpY29uU3R5bGUnKSBpY29uU3R5bGU6IElUZEZlYXR1cmVJY29uU3R5bGU7XG4gIEBJbnB1dCgnemxldmVsJykgemxldmVsOiBudW1iZXI7XG4gIEBJbnB1dCgneicpIHo6IG51bWJlcjtcbiAgQElucHV0KCd0cmFuc2l0aW9uRHVyYXRpb24nKSB0cmFuc2l0aW9uRHVyYXRpb246IG51bWJlciA9IDAuNTtcbiAgQElucHV0KCdsZWZ0JykgbGVmdDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoJ3RvcCcpIHRvcDogc3RyaW5nIHwgbnVtYmVyID0gJ2F1dG8nO1xuICBASW5wdXQoJ3JpZ2h0JykgcmlnaHQ6IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCdib3R0b20nKSBib3R0b206IHN0cmluZyB8IG51bWJlciA9ICdhdXRvJztcbiAgQElucHV0KCd3aWR0aCcpIHdpZHRoOiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG4gIEBJbnB1dCgnaGVpZ2h0JykgaGVpZ2h0OiBzdHJpbmcgfCBudW1iZXIgPSAnYXV0byc7XG5cbiAgQENvbnRlbnRDaGlsZChUZENoYXJ0Vmlld0RhdGFGb3JtYXR0ZXJEaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgZm9ybWF0dGVyVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIEBWaWV3Q2hpbGQoJ3Rvb2xib3hDb250ZW50JykgZnVsbFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX2NoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX29wdGlvbnNTZXJ2aWNlOiBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gICkge31cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9zZXRPcHRpb25zKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLl9yZW1vdmVPcHRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldE9wdGlvbnMoKTogdm9pZCB7XG5cbiAgICB0aGlzLl9jaGVja0Zvcm1hdHRlclRlbXBsYXRlKCk7XG5cbiAgICBsZXQgY29uZmlnOiBhbnkgPSBhc3NpZ25EZWZpbmVkKFxuICAgICAgdGhpcy5fc3RhdGUsXG4gICAgICB0aGlzLmNvbmZpZyA/IHRoaXMuY29uZmlnIDoge30sXG4gICAgICB7XG4gICAgICAgIHNob3c6IHRoaXMuc2hvdyxcbiAgICAgICAgbmFtZTogdGhpcy50cmlnZ2VyLFxuICAgICAgICBvcmllbnQ6IHRoaXMub3JpZW50LFxuICAgICAgICBpdGVtU2l6ZTogdGhpcy5pdGVtU2l6ZSxcbiAgICAgICAgaXRlbUdhcDogdGhpcy5pdGVtR2FwLFxuICAgICAgICBzaG93VGl0bGU6IHRoaXMuc2hvd1RpdGxlLFxuICAgICAgICBsYWJlbDogdGhpcy5sYWJlbCxcbiAgICAgICAgZmVhdHVyZTogdGhpcy5mZWF0dXJlLFxuICAgICAgICBpY29uU3R5bGU6IHRoaXMuaWNvblN0eWxlLFxuICAgICAgICB6bGV2ZWw6IHRoaXMuemxldmVsLFxuICAgICAgICB6OiB0aGlzLnosXG4gICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbjogdGhpcy50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgICAgdG9wOiB0aGlzLnRvcCxcbiAgICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgfSxcbiAgICApO1xuICAgIC8vIHNldCB0b29sYm94IGNvbmZpZ3VyYXRpb24gaW4gcGFyZW50IGNoYXJ0IGFuZCByZW5kZXIgbmV3IGNvbmZpZ3VyYXRpb25zXG4gICAgdGhpcy5fb3B0aW9uc1NlcnZpY2Uuc2V0T3B0aW9uKCd0b29sYm94JywgY29uZmlnKTtcbiAgfVxuXG4gIHByaXZhdGUgX3JlbW92ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLl9vcHRpb25zU2VydmljZS5jbGVhck9wdGlvbigndG9vbGJveCcpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2hlY2tGb3JtYXR0ZXJUZW1wbGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtYXR0ZXJUZW1wbGF0ZSkge1xuICAgICAgdGhpcy5mZWF0dXJlID0ge1xuICAgICAgICAuLi50aGlzLmZlYXR1cmUsXG4gICAgICAgIGRhdGFWaWV3OiB7XG4gICAgICAgICAgLi4udGhpcy5mZWF0dXJlLmRhdGFWaWV3LFxuICAgICAgICAgIG9wdGlvblRvQ29udGVudDogdGhpcy5fb3B0aW9uVG9Db250ZW50Rm9ybWF0dGVyKCksXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX29wdGlvblRvQ29udGVudEZvcm1hdHRlcigpOiBGdW5jdGlvbiB7XG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuX2NoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgICAgcmV0dXJuICg8SFRNTEVsZW1lbnQ+dGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KS5pbm5lckhUTUw7XG4gICAgfTtcbiAgfVxufVxuIl19