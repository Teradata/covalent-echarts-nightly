import { TemplateRef, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy } from '@angular/core';
import { TdSeriesComponent } from '@covalent/echarts/base';
import { TdTooltipContext } from './tooltip.component';
export declare class TdSeriesTooltipComponent implements OnChanges, OnDestroy {
    private _changeDetectorRef;
    private _elementRef;
    private _seriesComponent;
    private _state;
    _context: TdTooltipContext;
    config: any;
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
    constructor(_changeDetectorRef: ChangeDetectorRef, _elementRef: ElementRef, _seriesComponent: TdSeriesComponent);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    private _setOptions;
    /**
     * Formatter for tooltip
     *
     */
    private _formatter;
    private _removeOption;
}
