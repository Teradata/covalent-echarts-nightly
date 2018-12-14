import { EventEmitter, ElementRef, ChangeDetectorRef, AfterViewInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { TdChartOptionsService } from './chart-options.service';
export declare class TdChartComponent implements AfterViewInit, OnChanges, OnDestroy {
    private _changeDetectorRef;
    private _elementRef;
    private _optionsService;
    private _destroy;
    private _widthSubject;
    private _heightSubject;
    private _instance;
    /**
     * returns the echarts instance
     */
    readonly instance: any;
    private _state;
    private _options;
    /**
     * config?: any;
     * Sets the JS config object if you choose to not use the property inputs.
     * Note: [config] input properties will override input values
     * https://ecomfe.github.io/echarts-doc/public/en/option.html
     */
    config: any;
    /**
     * group?: string
     * group name in which the chart instance will be connected to
     * https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.connect
     */
    group: string;
    /**
     * themeName?: string
     * theme to be applied into chart instance
     * https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Overview%20of%20Style%20Customization
     */
    themeName: string;
    /**
     * renderer: 'svg' | 'canvas'
     * sets the rendering mode for the chart.
     * defaults to 'canvas'
     * https://ecomfe.github.io/echarts-doc/public/en/tutorial.html#Render%20by%20Canvas%20or%20SVG
     */
    renderer: 'canvas' | 'svg';
    chartClick: EventEmitter<any>;
    chartDblclick: EventEmitter<any>;
    chartContextmenu: EventEmitter<any>;
    magicTypeChanged: EventEmitter<any>;
    dataViewChanged: EventEmitter<any>;
    datazoom: EventEmitter<any>;
    restore: EventEmitter<any>;
    constructor(_changeDetectorRef: ChangeDetectorRef, _elementRef: ElementRef, _optionsService: TdChartOptionsService);
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    render(): void;
    private _initializeChart;
    private _disposeChart;
}
