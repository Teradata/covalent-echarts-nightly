import { __extends } from 'tslib';
import { Component, Input, ChangeDetectionStrategy, forwardRef, NgModule } from '@angular/core';
import { TdChartOptionsService, TdSeriesComponent } from '@covalent/echarts/base';
import { CommonModule } from '@angular/common';
import 'echarts/lib/chart/sankey';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var TdChartSeriesSankeyComponent = /** @class */ (function (_super) {
    __extends(TdChartSeriesSankeyComponent, _super);
    function TdChartSeriesSankeyComponent(_optionsService) {
        return _super.call(this, 'sankey', _optionsService) || this;
    }
    /**
     * @return {?}
     */
    TdChartSeriesSankeyComponent.prototype.getConfig = /**
     * @return {?}
     */
    function () {
        return {
            zlevel: this.zlevel,
            z: this.z,
            left: this.left,
            top: this.top,
            right: this.right,
            bottom: this.bottom,
            width: this.width,
            height: this.height,
            nodeWidth: this.nodeWidth,
            nodeGap: this.nodeGap,
            layoutIterations: this.layoutIterations,
            orient: this.orient,
            draggable: this.draggable,
            focusNodeAdjacency: this.focusNodeAdjacency,
            label: this.label,
            itemStyle: this.itemStyle,
            lineStyle: this.lineStyle,
            emphasis: this.emphasis,
            nodes: this.nodes,
            links: this.links,
            edges: this.edges,
            silent: this.silent,
        };
    };
    TdChartSeriesSankeyComponent.decorators = [
        { type: Component, args: [{
                    selector: 'td-chart-series[td-sankey]',
                    template: '',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [{
                            provide: TdSeriesComponent, useExisting: forwardRef(function () { return TdChartSeriesSankeyComponent; }),
                        }]
                }] }
    ];
    /** @nocollapse */
    TdChartSeriesSankeyComponent.ctorParameters = function () { return [
        { type: TdChartOptionsService }
    ]; };
    TdChartSeriesSankeyComponent.propDecorators = {
        zlevel: [{ type: Input, args: ['zlevel',] }],
        z: [{ type: Input, args: ['z',] }],
        left: [{ type: Input, args: ['left',] }],
        top: [{ type: Input, args: ['top',] }],
        right: [{ type: Input, args: ['right',] }],
        bottom: [{ type: Input, args: ['bottom',] }],
        width: [{ type: Input, args: ['width',] }],
        height: [{ type: Input, args: ['height',] }],
        nodeWidth: [{ type: Input, args: ['nodeWidth',] }],
        nodeGap: [{ type: Input, args: ['nodeGap',] }],
        layoutIterations: [{ type: Input, args: ['layoutIterations',] }],
        orient: [{ type: Input, args: ['orient',] }],
        draggable: [{ type: Input, args: ['draggable',] }],
        focusNodeAdjacency: [{ type: Input, args: ['focusNodeAdjacency',] }],
        label: [{ type: Input, args: ['label',] }],
        itemStyle: [{ type: Input, args: ['itemStyle',] }],
        lineStyle: [{ type: Input, args: ['lineStyle',] }],
        emphasis: [{ type: Input, args: ['emphasis',] }],
        nodes: [{ type: Input, args: ['nodes',] }],
        links: [{ type: Input, args: ['links',] }],
        edges: [{ type: Input, args: ['edges',] }],
        silent: [{ type: Input, args: ['silent',] }]
    };
    return TdChartSeriesSankeyComponent;
}(TdSeriesComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
/** @type {?} */
var SANKEY_MODULE_COMPONENTS = [
    TdChartSeriesSankeyComponent,
];
var CovalentSankeyEchartsModule = /** @class */ (function () {
    function CovalentSankeyEchartsModule() {
    }
    CovalentSankeyEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        SANKEY_MODULE_COMPONENTS,
                    ],
                    exports: [
                        SANKEY_MODULE_COMPONENTS,
                    ],
                },] }
    ];
    return CovalentSankeyEchartsModule;
}());

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

export { SANKEY_MODULE_COMPONENTS, CovalentSankeyEchartsModule, TdChartSeriesSankeyComponent };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY292YWxlbnQtZWNoYXJ0cy1zYW5rZXkuanMubWFwIiwic291cmNlcyI6WyJuZzovL0Bjb3ZhbGVudC9lY2hhcnRzL3NhbmtleS9zYW5rZXkuY29tcG9uZW50LnRzIiwibmc6Ly9AY292YWxlbnQvZWNoYXJ0cy9zYW5rZXkvc2Fua2V5Lm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgZm9yd2FyZFJlZixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFxuICBUZENoYXJ0T3B0aW9uc1NlcnZpY2UsXG4gIElUZExhYmVsLFxuICBJVGRJdGVtU3R5bGUsXG4gIElUZEVtcGhhc2lzLFxuICBJVGRTZXJpZXMsXG4gIFRkU2VyaWVzQ29tcG9uZW50LFxuICBJVGRTaGFkb3csXG4gIElUZExpbmVDdXJ2ZVN0eWxlLFxufSBmcm9tICdAY292YWxlbnQvZWNoYXJ0cy9iYXNlJztcblxuZXhwb3J0IHR5cGUgVGRTYW5rZXlPcmllbnQgPSAnaG9yaXpvbnRhbCcgfCAndmVydGljYWwnO1xuXG5leHBvcnQgdHlwZSBUZFNhbmtleUZvY3VzTm9kZUFkamFjZW5jeSA9IGJvb2xlYW4gfCAnYWxsRWRnZXMnIHwgJ291dEVkZ2VzJyB8ICdpbkVkZ2VzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVGRTYW5rZXlFbXBoYXNpc0xpbmVTdHlsZSBleHRlbmRzIElUZFNoYWRvdyB7XG4gIGNvbG9yPzogYW55O1xuICBvcGFjaXR5PzogbnVtYmVyO1xuICBjdXJ2ZW5lc3M/OiBudW1iZXI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2Fua2V5RW1waGFzaXMgZXh0ZW5kcyBJVGRFbXBoYXNpcyB7XG4gIGxpbmVTdHlsZTogSVRkU2Fua2V5RW1waGFzaXNMaW5lU3R5bGU7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVRkU2Fua2V5U2VyaWVzIGV4dGVuZHMgSVRkU2VyaWVzPCdzYW5rZXknPiB7XG4gIHpsZXZlbD86IG51bWJlcjtcbiAgej86IG51bWJlcjtcbiAgbGVmdD86IHN0cmluZyB8IG51bWJlcjtcbiAgdG9wPzogc3RyaW5nIHwgbnVtYmVyO1xuICByaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgYm90dG9tPzogc3RyaW5nIHwgbnVtYmVyO1xuICB3aWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaGVpZ2h0Pzogc3RyaW5nIHwgbnVtYmVyO1xuICBub2RlV2lkdGg/OiBudW1iZXI7XG4gIG5vZGVHYXA/OiBudW1iZXI7XG4gIGxheW91dEl0ZXJhdGlvbnM/OiBudW1iZXI7XG4gIG9yaWVudD86IFRkU2Fua2V5T3JpZW50O1xuICBkcmFnZ2FibGU/OiBib29sZWFuO1xuICBmb2N1c05vZGVBZGphY2VuY3k/OiBUZFNhbmtleUZvY3VzTm9kZUFkamFjZW5jeTtcbiAgbGFiZWw/OiBJVGRMYWJlbDtcbiAgaXRlbVN0eWxlPzogSVRkSXRlbVN0eWxlO1xuICBsaW5lU3R5bGU/OiBJVGRMaW5lQ3VydmVTdHlsZTtcbiAgZW1waGFzaXM/OiBJVGRFbXBoYXNpcztcbiAgZGF0YT86IGFueVtdO1xuICBub2Rlcz86IGFueVtdO1xuICBsaW5rcz86IGFueVtdO1xuICBlZGdlcz86IGFueVtdO1xuICBzaWxlbnQ/OiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0ZC1jaGFydC1zZXJpZXNbdGQtc2Fua2V5XScsXG4gIHRlbXBsYXRlOiAnJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW3tcbiAgICBwcm92aWRlOiBUZFNlcmllc0NvbXBvbmVudCwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGRDaGFydFNlcmllc1NhbmtleUNvbXBvbmVudCksXG4gIH1dLFxufSlcbmV4cG9ydCBjbGFzcyBUZENoYXJ0U2VyaWVzU2Fua2V5Q29tcG9uZW50IGV4dGVuZHMgVGRTZXJpZXNDb21wb25lbnQ8J3NhbmtleSc+IGltcGxlbWVudHMgSVRkU2Fua2V5U2VyaWVzIHtcblxuICBASW5wdXQoJ3psZXZlbCcpIHpsZXZlbDogbnVtYmVyO1xuICBASW5wdXQoJ3onKSB6OiBudW1iZXI7XG4gIEBJbnB1dCgnbGVmdCcpIGxlZnQ6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCd0b3AnKSB0b3A6IHN0cmluZyB8IG51bWJlcjtcbiAgQElucHV0KCdyaWdodCcpIHJpZ2h0OiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnYm90dG9tJykgYm90dG9tOiBzdHJpbmcgfCBudW1iZXI7XG4gIEBJbnB1dCgnd2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ2hlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgbnVtYmVyO1xuICBASW5wdXQoJ25vZGVXaWR0aCcpIG5vZGVXaWR0aDogbnVtYmVyO1xuICBASW5wdXQoJ25vZGVHYXAnKSBub2RlR2FwOiBudW1iZXI7XG4gIEBJbnB1dCgnbGF5b3V0SXRlcmF0aW9ucycpIGxheW91dEl0ZXJhdGlvbnM6IG51bWJlcjtcbiAgQElucHV0KCdvcmllbnQnKSBvcmllbnQ6IFRkU2Fua2V5T3JpZW50O1xuICBASW5wdXQoJ2RyYWdnYWJsZScpIGRyYWdnYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCdmb2N1c05vZGVBZGphY2VuY3knKSBmb2N1c05vZGVBZGphY2VuY3k6IFRkU2Fua2V5Rm9jdXNOb2RlQWRqYWNlbmN5O1xuICBASW5wdXQoJ2xhYmVsJykgbGFiZWw6IElUZExhYmVsO1xuICBASW5wdXQoJ2l0ZW1TdHlsZScpIGl0ZW1TdHlsZTogSVRkSXRlbVN0eWxlO1xuICBASW5wdXQoJ2xpbmVTdHlsZScpIGxpbmVTdHlsZTogSVRkTGluZUN1cnZlU3R5bGU7XG4gIEBJbnB1dCgnZW1waGFzaXMnKSBlbXBoYXNpczogSVRkRW1waGFzaXM7XG4gIEBJbnB1dCgnbm9kZXMnKSBub2RlczogYW55W107XG4gIEBJbnB1dCgnbGlua3MnKSBsaW5rczogYW55W107XG4gIEBJbnB1dCgnZWRnZXMnKSBlZGdlczogYW55W107XG4gIEBJbnB1dCgnc2lsZW50Jykgc2lsZW50OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKF9vcHRpb25zU2VydmljZTogVGRDaGFydE9wdGlvbnNTZXJ2aWNlKSB7XG4gICAgc3VwZXIoJ3NhbmtleScsIF9vcHRpb25zU2VydmljZSk7XG4gIH1cblxuICBnZXRDb25maWcoKTogYW55IHtcbiAgICByZXR1cm4ge1xuICAgICAgemxldmVsOiB0aGlzLnpsZXZlbCxcbiAgICAgIHo6IHRoaXMueixcbiAgICAgIGxlZnQ6IHRoaXMubGVmdCxcbiAgICAgIHRvcDogdGhpcy50b3AsXG4gICAgICByaWdodDogdGhpcy5yaWdodCxcbiAgICAgIGJvdHRvbTogdGhpcy5ib3R0b20sXG4gICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXG4gICAgICBub2RlV2lkdGg6IHRoaXMubm9kZVdpZHRoLFxuICAgICAgbm9kZUdhcDogdGhpcy5ub2RlR2FwLFxuICAgICAgbGF5b3V0SXRlcmF0aW9uczogdGhpcy5sYXlvdXRJdGVyYXRpb25zLFxuICAgICAgb3JpZW50OiB0aGlzLm9yaWVudCxcbiAgICAgIGRyYWdnYWJsZTogdGhpcy5kcmFnZ2FibGUsXG4gICAgICBmb2N1c05vZGVBZGphY2VuY3k6IHRoaXMuZm9jdXNOb2RlQWRqYWNlbmN5LFxuICAgICAgbGFiZWw6IHRoaXMubGFiZWwsXG4gICAgICBpdGVtU3R5bGU6IHRoaXMuaXRlbVN0eWxlLFxuICAgICAgbGluZVN0eWxlOiB0aGlzLmxpbmVTdHlsZSxcbiAgICAgIGVtcGhhc2lzOiB0aGlzLmVtcGhhc2lzLFxuICAgICAgbm9kZXM6IHRoaXMubm9kZXMsXG4gICAgICBsaW5rczogdGhpcy5saW5rcyxcbiAgICAgIGVkZ2VzOiB0aGlzLmVkZ2VzLFxuICAgICAgc2lsZW50OiB0aGlzLnNpbGVudCxcbiAgICB9O1xuICB9XG5cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBUeXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgJ2VjaGFydHMvbGliL2NoYXJ0L3NhbmtleSc7XG5cbmltcG9ydCB7IFRkQ2hhcnRTZXJpZXNTYW5rZXlDb21wb25lbnQgfSBmcm9tICcuL3NhbmtleS5jb21wb25lbnQnO1xuXG5leHBvcnQgY29uc3QgU0FOS0VZX01PRFVMRV9DT01QT05FTlRTOiBUeXBlPGFueT5bXSA9IFtcbiAgVGRDaGFydFNlcmllc1NhbmtleUNvbXBvbmVudCxcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFNBTktFWV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNBTktFWV9NT0RVTEVfQ09NUE9ORU5UUyxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ292YWxlbnRTYW5rZXlFY2hhcnRzTW9kdWxlIHtcblxufVxuIl0sIm5hbWVzIjpbInRzbGliXzEuX19leHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztJQWtFa0RBLGdEQUEyQjtJQXlCM0Usc0NBQVksZUFBc0M7ZUFDaEQsa0JBQU0sUUFBUSxFQUFFLGVBQWUsQ0FBQztLQUNqQzs7OztJQUVELGdEQUFTOzs7SUFBVDtRQUNFLE9BQU87WUFDTCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ1QsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU87WUFDckIsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLGdCQUFnQjtZQUN2QyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1lBQ3pCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxrQkFBa0I7WUFDM0MsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztZQUN6QixTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDekIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQ3ZCLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtTQUNwQixDQUFDO0tBQ0g7O2dCQTlERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsUUFBUSxFQUFFLEVBQUU7b0JBQ1osZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLFNBQVMsRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw0QkFBNEIsR0FBQSxDQUFDO3lCQUN4RixDQUFDO2lCQUNIOzs7O2dCQXpEQyxxQkFBcUI7Ozt5QkE0RHBCLEtBQUssU0FBQyxRQUFRO29CQUNkLEtBQUssU0FBQyxHQUFHO3VCQUNULEtBQUssU0FBQyxNQUFNO3NCQUNaLEtBQUssU0FBQyxLQUFLO3dCQUNYLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxRQUFRO3dCQUNkLEtBQUssU0FBQyxPQUFPO3lCQUNiLEtBQUssU0FBQyxRQUFROzRCQUNkLEtBQUssU0FBQyxXQUFXOzBCQUNqQixLQUFLLFNBQUMsU0FBUzttQ0FDZixLQUFLLFNBQUMsa0JBQWtCO3lCQUN4QixLQUFLLFNBQUMsUUFBUTs0QkFDZCxLQUFLLFNBQUMsV0FBVztxQ0FDakIsS0FBSyxTQUFDLG9CQUFvQjt3QkFDMUIsS0FBSyxTQUFDLE9BQU87NEJBQ2IsS0FBSyxTQUFDLFdBQVc7NEJBQ2pCLEtBQUssU0FBQyxXQUFXOzJCQUNqQixLQUFLLFNBQUMsVUFBVTt3QkFDaEIsS0FBSyxTQUFDLE9BQU87d0JBQ2IsS0FBSyxTQUFDLE9BQU87d0JBQ2IsS0FBSyxTQUFDLE9BQU87eUJBQ2IsS0FBSyxTQUFDLFFBQVE7O0lBaUNqQixtQ0FBQztDQUFBLENBeERpRCxpQkFBaUI7Ozs7OztBQ2xFbkU7QUFPQSxJQUFhLHdCQUF3QixHQUFnQjtJQUNuRCw0QkFBNEI7Q0FDN0I7QUFFRDtJQUFBO0tBYUM7O2dCQWJBLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxZQUFZLEVBQUU7d0JBQ1osd0JBQXdCO3FCQUN6QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1Asd0JBQXdCO3FCQUN6QjtpQkFDRjs7SUFHRCxrQ0FBQztDQWJEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OyJ9