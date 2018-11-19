import { OnChanges, OnInit, OnDestroy } from '@angular/core';
import { TdChartOptionsService } from '../chart-options.service';
import { ITdSeriesTooltip } from '../series/series.interface';
import { ITdAnimation } from '../base.types';
export interface ITdSeries<T> extends ITdAnimation {
    id?: string;
    name?: string;
    color?: string;
    type?: T;
    tooltip?: ITdSeriesTooltip;
}
export declare abstract class TdSeriesComponent<T = any> implements ITdSeries<T>, OnChanges, OnInit, OnDestroy {
    protected optionsService: TdChartOptionsService;
    private _type;
    readonly type: T;
    _state: any;
    _options: any;
    config: any;
    id: string;
    name: string;
    color: string;
    data: any[];
    animation: boolean;
    animationThreshold: number;
    animationDuration: number | Function;
    animationEasing: string;
    animationDelay: number | Function;
    animationDurationUpdate: number | Function;
    animationEasingUpdate: string;
    animationDelayUpdate: number | Function;
    tooltip: ITdSeriesTooltip;
    constructor(type: T, optionsService: TdChartOptionsService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    setStateOption(option: string, value: any): void;
    removeStateOption(option: string): void;
    abstract getConfig(): any;
    private _setOptions;
    private _removeOption;
}
