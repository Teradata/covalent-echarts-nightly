import { TdChartOptionsService, ITdItemStyle, ITdMarkPoint, ITdMarkLine, ITdMarkArea, ITdSeries, ITdLabel, TdSeriesDirective } from '@covalent/echarts/base';
export declare type TdMapValueCalculation = 'sum' | 'average' | 'max' | 'min';
export declare type TdMapSeriesLayoutBy = 'column' | 'row';
export interface ITdMapScaleLimit {
    min?: number;
    max?: number;
}
export interface ITdMapItemStyle {
    areaColor?: ITdItemStyle;
    emphasis?: ITdItemStyle;
}
export interface ITdMapSeries extends ITdSeries {
    map?: string;
    roam?: boolean;
    center?: number[];
    aspectScale?: number;
    boudingCoords?: any[];
    zoom?: number;
    scaleLimit?: ITdMapScaleLimit;
    nameMap?: object;
    selectedMode?: boolean | string;
    label?: ITdLabel;
    itemStyle?: ITdMapItemStyle;
    zLevel?: number;
    z?: number;
    left?: string | number;
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    layoutCenter?: any[];
    layoutSize?: any[];
    geoIndex?: number;
    mapValueCalculation?: TdMapValueCalculation;
    showLegendSymbol?: boolean;
    seriesLayoutBy?: string;
    data?: any[];
    markPoint?: ITdMarkPoint;
    markLine?: ITdMarkLine;
    markArea?: ITdMarkArea;
    silent?: boolean;
}
export declare class TdChartSeriesMapComponent extends TdSeriesDirective implements ITdMapSeries {
    map: string;
    roam: boolean;
    center: number[];
    aspectScale: number;
    boudingCoords: any[];
    zoom: number;
    scaleLimit: ITdMapScaleLimit;
    nameMap: object;
    selectedMode: boolean | string;
    label: ITdLabel;
    itemStyle: ITdMapItemStyle;
    zLevel: number;
    z: number;
    left: string | number;
    top: string | number;
    right: string | number;
    bottom: string | number;
    layoutCenter: any[];
    layoutSize: any[];
    geoIndex: number;
    mapValueCalculation: TdMapValueCalculation;
    showLegendSymbol: boolean;
    seriesLayoutBy: string;
    markPoint: ITdMarkPoint;
    markLine: ITdMarkLine;
    markArea: ITdMarkArea;
    silent: boolean;
    constructor(_optionsService: TdChartOptionsService);
    getConfig(): any;
}
