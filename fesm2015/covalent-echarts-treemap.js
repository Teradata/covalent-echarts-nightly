import { Component, Input, ChangeDetectionStrategy, forwardRef, NgModule } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent } from '@covalent/echarts/base';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/treemap';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
class TdChartSeriesTreemapComponent extends TdSeriesComponent {
    /**
     * @param {?} _optionsService
     */
    constructor(_optionsService) {
        super('treemap', _optionsService);
        this.config = {};
    }
    /**
     * @return {?}
     */
    getConfig() {
        return {
            zlevel: this.zlevel,
            z: this.z,
            left: this.left,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            width: this.width,
            height: this.height,
            squareRatio: this.squareRatio,
            leafDepth: this.leafDepth,
            drillDownIcon: this.drillDownIcon,
            roam: this.roam,
            nodeClick: this.nodeClick,
            zoomToNodeRatio: this.zoomToNodeRatio,
            levels: this.levels,
            silent: this.silent,
            visualDimension: this.visualDimension,
            visualMin: this.visualMin,
            visualMax: this.visualMax,
            colorAlpha: this.colorAlpha,
            colorSaturation: this.colorSaturation,
            colorMappingBy: this.colorMappingBy,
            visibleMin: this.visibleMin,
            childrenVisibleMin: this.childrenVisibleMin,
            itemStyle: this.itemStyle,
            label: this.label,
            upperLabel: this.upperLabel,
            breadcrumb: this.breadcrumb,
            emphasis: this.emphasis,
        };
    }
}
TdChartSeriesTreemapComponent.decorators = [
    { type: Component, args: [{
                selector: 'td-chart-series[td-treemap]',
                template: '',
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [{
                        provide: TdSeriesComponent, useExisting: forwardRef(() => TdChartSeriesTreemapComponent),
                    }]
            }] }
];
/** @nocollapse */
TdChartSeriesTreemapComponent.ctorParameters = () => [
    { type: TdChartOptionsService }
];
TdChartSeriesTreemapComponent.propDecorators = {
    config: [{ type: Input, args: ['config',] }],
    id: [{ type: Input, args: ['id',] }],
    name: [{ type: Input, args: ['name',] }],
    data: [{ type: Input, args: ['data',] }],
    zlevel: [{ type: Input, args: ['zlevel',] }],
    z: [{ type: Input, args: ['z',] }],
    left: [{ type: Input, args: ['left',] }],
    top: [{ type: Input, args: ['top',] }],
    right: [{ type: Input, args: ['right',] }],
    bottom: [{ type: Input, args: ['bottom',] }],
    width: [{ type: Input, args: ['width',] }],
    height: [{ type: Input, args: ['height',] }],
    squareRatio: [{ type: Input, args: ['squareRatio',] }],
    leafDepth: [{ type: Input, args: ['leafDepth',] }],
    drillDownIcon: [{ type: Input, args: ['drillDownIcon',] }],
    roam: [{ type: Input, args: ['roam',] }],
    nodeClick: [{ type: Input, args: ['nodeClick',] }],
    zoomToNodeRatio: [{ type: Input, args: ['zoomToNodeRatio',] }],
    levels: [{ type: Input, args: ['levels',] }],
    silent: [{ type: Input, args: ['silent',] }],
    visualDimension: [{ type: Input, args: ['visualDimension',] }],
    visualMin: [{ type: Input, args: ['visualMin',] }],
    visualMax: [{ type: Input, args: ['visualMax',] }],
    colorAlpha: [{ type: Input, args: ['colorAlpha',] }],
    colorSaturation: [{ type: Input, args: ['colorSaturation',] }],
    colorMappingBy: [{ type: Input, args: ['colorMappingBy',] }],
    visibleMin: [{ type: Input, args: ['visibleMin',] }],
    childrenVisibleMin: [{ type: Input, args: ['childrenVisibleMin',] }],
    itemStyle: [{ type: Input, args: ['itemStyle',] }],
    label: [{ type: Input, args: ['label',] }],
    upperLabel: [{ type: Input, args: ['upperLabel',] }],
    breadcrumb: [{ type: Input, args: ['breadcrumb',] }],
    emphasis: [{ type: Input, args: ['emphasis',] }],
    tooltip: [{ type: Input, args: ['tooltip',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
const TREEMAP_MODULE_COMPONENTS = [
    TdChartSeriesTreemapComponent,
];
class CovalentTreemapEchartsModule {
}
CovalentTreemapEchartsModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                ],
                declarations: [
                    TREEMAP_MODULE_COMPONENTS,
                ],
                exports: [
                    TREEMAP_MODULE_COMPONENTS,
                ],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

export { TREEMAP_MODULE_COMPONENTS, CovalentTreemapEchartsModule, TdChartSeriesTreemapComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy10cmVlbWFwLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlbWFwL3RyZWVtYXAuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy90cmVlbWFwL3RyZWVtYXAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBmb3J3YXJkUmVmLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgXG4gIFRkQ2hhcnRPcHRpb25zU2VydmljZSxcbiAgSVRkSXRlbVN0eWxlLFxuICBJVGRTZXJpZXNUb29sdGlwLFxuICBJVGRMYWJlbCxcbiAgSVRkU2VyaWVzLFxuICBUZFNlcmllc0NvbXBvbmVudCxcbiAgSVRkRW1waGFzaXMsXG4gIElUZFNoYWRvdyxcbn0gZnJvbSAnQGNvdmFsZW50L2VjaGFydHMvYmFzZSc7XG5cbi8qKlxuICogRUNIQVJUIE9QVElPTiBET0NTXG4gKiBodHRwczovL2Vjb21mZS5naXRodWIuaW8vZWNoYXJ0cy1leGFtcGxlcy9wdWJsaWMvaW5kZXguaHRtbCNjaGFydC10eXBlLXRyZWVtYXBcbiAqXG4gKi9cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlbWFwRW1waGFzaXNMaW5lU3R5bGUgZXh0ZW5kcyBJVGRTaGFkb3cge1xuICBjb2xvcj86IGFueTtcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGN1cnZlbmVzcz86IG51bWJlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVGRUcmVlbWFwRW1waGFzaXMgZXh0ZW5kcyBJVGRFbXBoYXNpcyB7XG4gIGxpbmVTdHlsZTogSVRkVHJlZW1hcEVtcGhhc2lzTGluZVN0eWxlO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBVcHBlckxhYmVsIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIHBvc2l0aW9uPzogc3RyaW5nIHwgYW55W107XG4gIGRpc3RhbmNlPzogc3RyaW5nIHwgbnVtYmVyO1xuICByb3RhdGU/OiBzdHJpbmcgfCBudW1iZXI7XG4gIG9mZnNldD86IGFueVtdO1xuICBmb3JtYXR0ZXI/OiBzdHJpbmc7XG4gIGNvbG9yPzogYW55O1xuICBmb250U3R5bGU/OiBzdHJpbmc7XG4gIGZvbnRXZWlnaHQ/OiBzdHJpbmc7XG4gIGZvbnRGYW1pbHk/OiBzdHJpbmc7XG4gIGZvbnRTaXplPzogc3RyaW5nIHwgbnVtYmVyO1xuICBhbGlnbj86IHN0cmluZztcbiAgdmVydGljYWxBbGlnbj86IHN0cmluZztcbiAgbGluZUhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYmFja2dyb3VuZENvbG9yPzogYW55O1xuICBib3JkZXJDb2xvcj86IHN0cmluZztcbiAgYm9yZGVyV2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvcmRlclJhZGl1cz86IHN0cmluZyB8IG51bWJlcjtcbiAgcGFkZGluZz86IG51bWJlciB8IGFueVtdO1xuICBzaGFkb3dDb2xvcj86IHN0cmluZztcbiAgc2hhZG93Qmx1cj86IHN0cmluZyB8IG51bWJlcjtcbiAgc2hhZG93T2Zmc2V0WD86IHN0cmluZyB8IG51bWJlcjtcbiAgc2hhZG93T2Zmc2V0WT86IHN0cmluZyB8IG51bWJlcjtcbiAgd2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgdGV4dEJvcmRlckNvbG9yPzogc3RyaW5nO1xuICB0ZXh0Qm9yZGVyV2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRleHRTaGFkb3dDb2xvcj86IHN0cmluZztcbiAgdGV4dFNoYWRvd0JsdXI/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRleHRTaGFkb3dPZmZzZXRYPzogc3RyaW5nIHwgbnVtYmVyO1xuICB0ZXh0U2hhZG93T2Zmc2V0WT86IHN0cmluZyB8IG51bWJlcjtcbiAgcmljaDogYW55O1xuICBlbGxpcHNpczogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUZFRyZWVtYXBCcmVhZGNydW1iIHtcbiAgc2hvdz86IGJvb2xlYW47XG4gIGxlZnQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHRvcD86IHN0cmluZyB8IG51bWJlcjtcbiAgcmlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGJvdHRvbT86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBlbXB0eUl0ZW1XaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBlbXBoYXNpcz86IElUZFRyZWVtYXBFbXBoYXNpcztcbn1cblxuaW50ZXJmYWNlIElUZFRyZWVtYXBTZXJpZXMgZXh0ZW5kcyBJVGRTZXJpZXM8J3RyZWVtYXAnPiB7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgbGVmdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBzcXVhcmVSYXRpbz86IHN0cmluZyB8IG51bWJlcjtcbiAgbGVhZkRlcHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBkcmlsbERvd25JY29uPzogc3RyaW5nO1xuICByb2FtPzogYm9vbGVhbiB8IHN0cmluZztcbiAgbm9kZUNsaWNrPzogYm9vbGVhbiB8IHN0cmluZztcbiAgem9vbVRvTm9kZVJhdGlvPzogc3RyaW5nIHwgbnVtYmVyO1xuICBsZXZlbHM/OiBhbnlbXTtcbiAgc2lsZW50PzogYm9vbGVhbjtcbiAgdmlzdWFsRGltZW5zaW9uPzogc3RyaW5nIHwgbnVtYmVyO1xuICB2aXN1YWxNaW4/OiBzdHJpbmcgfCBudW1iZXI7XG4gIHZpc3VhbE1heD86IHN0cmluZyB8IG51bWJlcjtcbiAgY29sb3JBbHBoYT86IGFueVtdO1xuICBjb2xvclNhdHVyYXRpb24/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGNvbG9yTWFwcGluZ0J5Pzogc3RyaW5nO1xuICB2aXNpYmxlTWluPzogc3RyaW5nIHwgbnVtYmVyO1xuICBjaGlsZHJlblZpc2libGVNaW4/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGl0ZW1TdHlsZT86IElUZEl0ZW1TdHlsZTtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgdXBwZXJMYWJlbD86IElUZFRyZWVtYXBVcHBlckxhYmVsO1xuICBicmVhZGNydW1iPzogSVRkVHJlZW1hcEJyZWFkY3J1bWI7XG4gIGVtcGhhc2lzPzogSVRkVHJlZW1hcEVtcGhhc2lzO1xuICBkYXRhOiBhbnlbXTtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGQtY2hhcnQtc2VyaWVzW3RkLXRyZWVtYXBdJyxcbiAgdGVtcGxhdGU6ICcnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IFRkU2VyaWVzQ29tcG9uZW50LCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBUZENoYXJ0U2VyaWVzVHJlZW1hcENvbXBvbmVudCksXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzVHJlZW1hcENvbXBvbmVudCBleHRlbmRzIFRkU2VyaWVzQ29tcG9uZW50PCd0cmVlbWFwJz4gaW1wbGVtZW50cyBJVGRUcmVlbWFwU2VyaWVzIHtcblxuICBASW5wdXQoJ2NvbmZpZycpIGNvbmZpZzogYW55ID0ge307XG4gIEBJbnB1dCgnaWQnKSBpZDogc3RyaW5nO1xuICBASW5wdXQoJ25hbWUnKSBuYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgnZGF0YScpIGRhdGE6IGFueTtcbiAgQElucHV0KCd6bGV2ZWwnKSB6bGV2ZWw6IG51bWJlcjtcbiAgQElucHV0KCd6JykgejogbnVtYmVyO1xuICBASW5wdXQoJ2xlZnQnKSBsZWZ0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgndG9wJykgdG9wOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgncmlnaHQnKSByaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2JvdHRvbScpIGJvdHRvbTogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ3dpZHRoJykgd2lkdGg6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdoZWlnaHQnKSBoZWlnaHQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdzcXVhcmVSYXRpbycpIHNxdWFyZVJhdGlvOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnbGVhZkRlcHRoJykgbGVhZkRlcHRoOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnZHJpbGxEb3duSWNvbicpIGRyaWxsRG93bkljb246IHN0cmluZztcbiAgQElucHV0KCdyb2FtJykgcm9hbTogYm9vbGVhbiB8IHN0cmluZztcbiAgQElucHV0KCdub2RlQ2xpY2snKSBub2RlQ2xpY2s6IGJvb2xlYW4gfCBzdHJpbmc7XG4gIEBJbnB1dCgnem9vbVRvTm9kZVJhdGlvJykgem9vbVRvTm9kZVJhdGlvOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnbGV2ZWxzJykgbGV2ZWxzOiBhbnlbXTtcbiAgQElucHV0KCdzaWxlbnQnKSBzaWxlbnQ6IGJvb2xlYW47XG4gIEBJbnB1dCgndmlzdWFsRGltZW5zaW9uJykgdmlzdWFsRGltZW5zaW9uOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgndmlzdWFsTWluJykgdmlzdWFsTWluOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgndmlzdWFsTWF4JykgdmlzdWFsTWF4OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnY29sb3JBbHBoYScpIGNvbG9yQWxwaGE6IGFueVtdO1xuICBASW5wdXQoJ2NvbG9yU2F0dXJhdGlvbicpIGNvbG9yU2F0dXJhdGlvbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2NvbG9yTWFwcGluZ0J5JykgY29sb3JNYXBwaW5nQnk6IHN0cmluZztcbiAgQElucHV0KCd2aXNpYmxlTWluJykgdmlzaWJsZU1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2NoaWxkcmVuVmlzaWJsZU1pbicpIGNoaWxkcmVuVmlzaWJsZU1pbjogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ3VwcGVyTGFiZWwnKSB1cHBlckxhYmVsOiBJVGRUcmVlbWFwVXBwZXJMYWJlbDtcbiAgQElucHV0KCdicmVhZGNydW1iJykgYnJlYWRjcnVtYjogSVRkVHJlZW1hcEJyZWFkY3J1bWI7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkVHJlZW1hcEVtcGhhc2lzO1xuICBASW5wdXQoJ3Rvb2x0aXAnKSB0b29sdGlwOiBJVGRTZXJpZXNUb29sdGlwO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3RyZWVtYXAnLCBfb3B0aW9uc1NlcnZpY2UpO1xuICB9XG5cbiAgZ2V0Q29uZmlnKCk6IGFueSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHpsZXZlbDogdGhpcy56bGV2ZWwsXG4gICAgICB6OiB0aGlzLnosXG4gICAgICBsZWZ0OiB0aGlzLmxlZnQsXG4gICAgICB0b3A6IHRoaXMudG9wLFxuICAgICAgcmlnaHQ6IHRoaXMucmlnaHQsXG4gICAgICBib3R0b206IHRoaXMuYm90dG9tLFxuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAgc3F1YXJlUmF0aW86IHRoaXMuc3F1YXJlUmF0aW8sXG4gICAgICBsZWFmRGVwdGg6IHRoaXMubGVhZkRlcHRoLFxuICAgICAgZHJpbGxEb3duSWNvbjogdGhpcy5kcmlsbERvd25JY29uLFxuICAgICAgcm9hbTogdGhpcy5yb2FtLFxuICAgICAgbm9kZUNsaWNrOiB0aGlzLm5vZGVDbGljayxcbiAgICAgIHpvb21Ub05vZGVSYXRpbzogdGhpcy56b29tVG9Ob2RlUmF0aW8sXG4gICAgICBsZXZlbHM6IHRoaXMubGV2ZWxzLFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICAgIHZpc3VhbERpbWVuc2lvbjogdGhpcy52aXN1YWxEaW1lbnNpb24sXG4gICAgICB2aXN1YWxNaW46IHRoaXMudmlzdWFsTWluLFxuICAgICAgdmlzdWFsTWF4OiB0aGlzLnZpc3VhbE1heCxcbiAgICAgIGNvbG9yQWxwaGE6IHRoaXMuY29sb3JBbHBoYSxcbiAgICAgIGNvbG9yU2F0dXJhdGlvbjogdGhpcy5jb2xvclNhdHVyYXRpb24sXG4gICAgICBjb2xvck1hcHBpbmdCeTogdGhpcy5jb2xvck1hcHBpbmdCeSxcbiAgICAgIHZpc2libGVNaW46IHRoaXMudmlzaWJsZU1pbixcbiAgICAgIGNoaWxkcmVuVmlzaWJsZU1pbjogdGhpcy5jaGlsZHJlblZpc2libGVNaW4sXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICB1cHBlckxhYmVsOiB0aGlzLnVwcGVyTGFiZWwsXG4gICAgICBicmVhZGNydW1iOiB0aGlzLmJyZWFkY3J1bWIsXG4gICAgICBlbXBoYXNpczogdGhpcy5lbXBoYXNpcyxcbiAgICB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0ICdlY2hhcnRzL2xpYi9jaGFydC90cmVlbWFwJztcblxuaW1wb3J0IHsgVGRDaGFydFNlcmllc1RyZWVtYXBDb21wb25lbnQgfSBmcm9tICcuL3RyZWVtYXAuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IFRSRUVNQVBfTU9EVUxFX0NPTVBPTkVOVFM6IFR5cGU8YW55PltdID0gW1xuICBUZENoYXJ0U2VyaWVzVHJlZW1hcENvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRSRUVNQVBfTU9EVUxFX0NPTVBPTkVOVFMsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUUkVFTUFQX01PRFVMRV9DT01QT05FTlRTLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBDb3ZhbGVudFRyZWVtYXBFY2hhcnRzTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE1BMkhhLDZCQUE4QixTQUFRLGlCQUE0Qjs7OztJQXFDN0UsWUFBWSxlQUFzQztRQUNoRCxLQUFLLENBQUMsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBcENuQixXQUFNLEdBQVEsRUFBRSxDQUFDO0tBcUNqQzs7OztJQUVELFNBQVM7UUFDUCxPQUFPO1lBQ0wsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNULElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtZQUNmLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNiLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVc7WUFDN0IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtZQUNqQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7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