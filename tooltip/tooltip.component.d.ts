import { TemplateRef, ElementRef, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { TdChartOptionsService, TdTooltipTrigger, TdTooltipTriggerOn, TdTooltipPosition } from '@covalent/echarts/base';
export declare class TdTooltipContext {
    $implicit: any;
    ticket: string;
}
export declare class TdChartTooltipFormatterDirective {
}
export declare class TdChartTooltipComponent implements OnChanges, OnDestroy {
    private _changeDetectorRef;
    private _elementRef;
    private _optionsService;
    private _state;
    _context: TdTooltipContext;
    config: any;
    show: boolean;
    trigger: TdTooltipTrigger;
    axisPointer: any;
    showContent: boolean;
    alwaysShowContent: boolean;
    triggerOn: TdTooltipTriggerOn;
    showDelay: number;
    hideDelay: number;
    enterable: boolean;
    renderMode: 'html' | 'richText';
    confine: boolean;
    transitionDuration: number;
    position: TdTooltipPosition;
    formatter: string | Function;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    padding: number;
    textStyle: any;
    extraCssText: string;
    formatterTemplate: TemplateRef<any>;
    fullTemplate: TemplateRef<any>;
    constructor(_changeDetectorRef: ChangeDetectorRef, _elementRef: ElementRef, _optionsService: TdChartOptionsService);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    private _setOptions;
    private _removeOption;
    private _formatter;
}
