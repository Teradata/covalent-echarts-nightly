import { TemplateRef, ElementRef, ChangeDetectorRef, OnChanges, OnInit, OnDestroy } from '@angular/core';
import { TdChartOptionsService } from '../chart.service';
export declare class TdTooltipContext {
    $implicit: any;
    ticket: string;
}
export declare class TdChartTooltipFormatterDirective {
}
export declare class TdChartTooltipComponent implements OnChanges, OnInit, OnDestroy {
    private _changeDetectorRef;
    private _elementRef;
    private _optionsService;
    private _state;
    _context: TdTooltipContext;
    config: any;
    show: boolean;
    trigger: 'axis' | 'item' | 'none';
    axisPointer: any;
    showContent: boolean;
    alwaysShowContent: boolean;
    triggerOn: 'mousemove' | 'click' | 'mousemove|click' | 'none';
    showDelay: number;
    hideDelay: number;
    enterable: boolean;
    confine: boolean;
    transitionDuration: number;
    position: string | string[] | number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    padding: number;
    textStyle: any;
    extraCssText: string;
    formatterTemplate: TemplateRef<any>;
    fullTemplate: TemplateRef<any>;
    constructor(_changeDetectorRef: ChangeDetectorRef, _elementRef: ElementRef, _optionsService: TdChartOptionsService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    private _setOptions();
    private _removeOption();
}
