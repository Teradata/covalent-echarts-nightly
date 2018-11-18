import { EventEmitter, ElementRef, ChangeDetectorRef, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import { TdChartOptionsService } from './chart-options.service';
export declare class TdChartComponent implements AfterViewInit, OnChanges, OnDestroy {
    private _changeDetectorRef;
    private _elementRef;
    private _optionsService;
    private _destroy;
    private _widthSubject;
    private _heightSubject;
    private _instance;
    readonly instance: any;
    private _state;
    private _options;
    config: any;
    group: string;
    click: EventEmitter<any>;
    dblclick: EventEmitter<any>;
    contextmenu: EventEmitter<any>;
    constructor(_changeDetectorRef: ChangeDetectorRef, _elementRef: ElementRef, _optionsService: TdChartOptionsService);
    ngAfterViewInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    render(): void;
}
