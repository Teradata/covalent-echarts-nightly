import { OnInit, TemplateRef, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy } from '@angular/core';
import { TdChartOptionsService } from '../chart.service';
export declare class TdTooltipContext {
    $implicit: any;
    ticket: string;
}
export declare class TdChartSeriesTooltipFormatterDirective {
}
export declare class TdSeriesTooltipComponent implements OnChanges, OnInit, OnDestroy {
    private _changeDetectorRef;
    private _elementRef;
    private _optionsService;
    private _state;
    _context: TdTooltipContext;
    config: any;
    configArray: any[];
    index: number;
    formatter: any;
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
    /**
     * processes configArray and updates
     *
     */
    private _setConfig();
    /**
     * Formatter for tooltip
     *
     */
    private _formatter();
    private _removeOption();
}
