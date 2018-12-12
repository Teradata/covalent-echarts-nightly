import { CommonModule } from '@angular/common';
import 'echarts/lib/component/toolbox';
import { __assign } from 'tslib';
import { Component, Input, Directive, TemplateRef, ChangeDetectionStrategy, ElementRef, ChangeDetectorRef, ContentChild, ViewChild, NgModule } from '@angular/core';
import { TdChartOptionsService, assignDefined } from '@covalent/echarts/base';

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
            this.feature = __assign({}, this.feature, { dataView: __assign({}, this.feature.dataView, { optionToContent: this._optionToContentFormatter() }) });
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

var TOOLBOX_MODULE_COMPONENTS = [
    TdChartToolboxComponent,
    TdChartViewDataFormatterDirective,
];
var CovalentToolboxEchartsModule = /** @class */ (function () {
    function CovalentToolboxEchartsModule() {
    }
    CovalentToolboxEchartsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                    ],
                    declarations: [
                        TOOLBOX_MODULE_COMPONENTS,
                    ],
                    exports: [
                        TOOLBOX_MODULE_COMPONENTS,
                    ],
                },] }
    ];
    return CovalentToolboxEchartsModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { TOOLBOX_MODULE_COMPONENTS, CovalentToolboxEchartsModule, TdChartViewDataFormatterDirective, TdChartToolboxComponent };

//# sourceMappingURL=covalent-echarts-toolbox.js.map