import { OnChanges, OnInit, OnDestroy } from '@angular/core';
import 'echarts/lib/chart/scatter';
import { TdChartOptionsService, TdCoordinateSystem, TdMarkPointSymbol, ITdMarkPoint, ITdItemStyle, ITdLabel, ITdEmphasis, TdSeriesLayoutBy, ITdMarkLine, ITdMarkArea, ITdSeriesTooltip } from '@covalent/echarts/base';
import { ITdScatterConfig } from './scatter-config.interface';
export declare class TdChartSeriesScatterComponent implements OnChanges, OnInit, OnDestroy {
    private _optionsService;
    private _type;
    private _state;
    config: ITdScatterConfig;
    id: string;
    name: string;
    coordinateSystem: TdCoordinateSystem;
    xAxisIndex: number;
    yAxisIndex: number;
    polarIndex: number;
    geoIndex: number;
    calendarIndex: number;
    hoverAnimation: boolean;
    legendHoverLink: boolean;
    symbol: TdMarkPointSymbol | string;
    symbolSize: number | any[] | Function;
    symbolRotate: number;
    symbolKeepAspect: boolean;
    symbolOffset: any[];
    large: boolean;
    largeThreshold: number;
    cursor: string;
    label: ITdLabel;
    itemStyle: ITdItemStyle;
    emphasis: ITdEmphasis;
    progressive: number;
    progressiveThreshold: number;
    dimensions: any[];
    encode: any;
    seriesLayoutBy: TdSeriesLayoutBy;
    datasetIndex: number;
    data: any[];
    markPoint: ITdMarkPoint;
    markLine: ITdMarkLine;
    markArea: ITdMarkArea;
    zlevel: number;
    z: number;
    silent: boolean;
    animation: boolean;
    animationThreshold: number;
    animationDuration: number | Function;
    animationEasing: string;
    animationDelay: number | Function;
    animationDurationUpdate: number | Function;
    animationEasingUpdate: string;
    animationDelayUpdate: number | Function;
    tooltip: ITdSeriesTooltip;
    constructor(_optionsService: TdChartOptionsService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngOnDestroy(): void;
    private _setOptions();
    private _removeOption();
}
