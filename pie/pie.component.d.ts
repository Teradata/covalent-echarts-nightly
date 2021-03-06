import { TdChartOptionsService, ITdItemStyle, ITdEmphasis, TdSeriesLayoutBy, ITdMarkPoint, ITdMarkLine, ITdMarkArea, ITdSeries, ITdLabel, ITdLabelLine, TdSeriesDirective } from '@covalent/echarts/base';
export interface ITdPieSeries extends ITdSeries {
    legendHoverLink?: boolean;
    hoverAnimation?: boolean;
    hoverOffset?: number;
    selectedMode?: boolean | string;
    selectedOffset?: number;
    clockwise?: boolean;
    startAngle?: number;
    minAngle?: number;
    minShowLabelAngle?: number;
    roseType?: boolean | string;
    avoidLabelOverlap?: boolean;
    stillShowZeroSum?: boolean;
    cursor?: string;
    labelLine?: ITdLabelLine;
    Label?: ITdLabel;
    itemStyle?: ITdItemStyle;
    emphasis?: ITdEmphasis;
    seriesLayoutBy?: TdSeriesLayoutBy;
    datasetIndex?: number;
    data?: any[];
    markPoint?: ITdMarkPoint;
    markLine?: ITdMarkLine;
    markArea?: ITdMarkArea;
    Zlevel?: 0;
    z?: number;
    center?: object;
    radius?: number | string | any[];
    silent?: boolean;
}
export declare class TdChartSeriesPieComponent extends TdSeriesDirective implements ITdPieSeries {
    legendHoverLink: boolean;
    hoverAnimation: boolean;
    hoverOffset: number;
    selectedMode: boolean | string;
    selectedOffset: number;
    clockwise: boolean;
    startAngle: number;
    minAngle: number;
    minShowLabelAngle: number;
    roseType: boolean | string;
    avoidLabelOverlap: boolean;
    stillShowZeroSum: boolean;
    cursor: string;
    labelLine: object;
    label: any;
    itemStyle: ITdItemStyle;
    emphasis: ITdEmphasis;
    seriesLayoutBy: TdSeriesLayoutBy;
    datasetIndex: number;
    markPoint: ITdMarkPoint;
    markLine: ITdMarkLine;
    markArea: ITdMarkArea;
    zlevel: number;
    z: number;
    center: object;
    radius: number | string | any[];
    constructor(_optionsService: TdChartOptionsService);
    getConfig(): any;
}
