import { OnChanges, OnDestroy } from '@angular/core';
import { TdChartOptionsService } from '../chart-options.service';
export declare class TdDatasetComponent implements OnChanges, OnDestroy {
    private _optionsService;
    private _state;
    id: string;
    config: any;
    source: object | any[];
    dimensions: any[];
    sourceHeader: boolean;
    constructor(_optionsService: TdChartOptionsService);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    private _setOptions;
    private _removeOption;
}
