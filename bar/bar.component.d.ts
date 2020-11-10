import { TdChartOptionsService, TdCoordinateSystem, ITdItemStyle, ITdEmphasis, TdSeriesLayoutBy, ITdMarkPoint, ITdMarkLine, ITdMarkArea, ITdSeries, ITdLabel, TdProgressiveChunkMode, TdSeriesDirective } from '@covalent/echarts/base';
export interface ITdBarSeries extends ITdSeries {
    legendHoverLink?: boolean;
    coordinateSystem?: TdCoordinateSystem;
    xAxisIndex?: number;
    yAxisIndex?: number;
    Label?: ITdLabel;
    itemStyle?: ITdItemStyle;
    emphasis?: ITdEmphasis;
    stack?: string;
    cursor?: string;
    barWidth?: number | string;
    barMaxWidth?: number | string;
    barMinHeight?: number;
    barGap?: string;
    barCategoryGap?: string;
    large?: boolean;
    largeThreshold?: number;
    progressive?: number;
    progressiveThreshold?: number;
    progressiveChunkMode?: TdProgressiveChunkMode;
    dimensions?: any[];
    encode?: any;
    seriesLayoutBy?: TdSeriesLayoutBy;
    datasetIndex?: number;
    data?: any[];
    markPoint?: ITdMarkPoint;
    markLine?: ITdMarkLine;
    markArea?: ITdMarkArea;
    Zlevel?: 0;
    z?: number;
    silent?: boolean;
}
export declare class TdChartSeriesBarComponent extends TdSeriesDirective implements ITdBarSeries {
    coordinateSystem: TdCoordinateSystem;
    xAxisIndex: number;
    yAxisIndex: number;
    legendHoverLink: boolean;
    stack: string;
    cursor: string;
    label: any;
    itemStyle: ITdItemStyle;
    emphasis: ITdEmphasis;
    barWidth: number;
    barMaxWidth: number;
    barMinHeight: number;
    barGap: string;
    barCategoryGap: string;
    large: boolean;
    largeThreshold: number;
    progressive: number;
    progressiveThreshold: number;
    progressiveChunkMode: TdProgressiveChunkMode;
    dimensions: any[];
    encode: any;
    seriesLayoutBy: TdSeriesLayoutBy;
    datasetIndex: number;
    markPoint: ITdMarkPoint;
    markLine: ITdMarkLine;
    markArea: ITdMarkArea;
    zlevel: number;
    z: number;
    constructor(_optionsService: TdChartOptionsService);
    getConfig(): any;
}
