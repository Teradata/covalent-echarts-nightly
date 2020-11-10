import { TdChartOptionsService, ITdSeries, TdSeriesDirective } from '@covalent/echarts/base';
export declare type TdWordcloudShape = 'circle' | 'cardioid' | 'diamond' | 'triangle-forward' | 'triangle' | 'pentagon' | 'star';
export interface ITdWordcloudTextStyle {
    normal?: {
        fontFamily?: string;
        fontWeight?: string;
        color?: string | ((x: any) => string);
    };
    emphasis?: {
        shadowBlur?: number;
        shadowColor?: string;
    };
}
export interface ITdWordCloudData {
    name: string;
    value: number;
    textStyle?: ITdWordcloudTextStyle;
}
export interface ITdWordcloudSeries extends ITdSeries {
    data?: ITdWordCloudData[];
    shape?: TdWordcloudShape;
    left?: string | number;
    top?: string | number;
    width?: string | number;
    height?: string | number;
    right?: string | number;
    bottom?: string | number;
    sizeRange?: number[];
    rotationRange?: number[];
    rotationStep?: number;
    gridSize?: number;
    drawOutOfBound?: boolean;
    textStyle?: ITdWordcloudTextStyle;
}
export declare class TdChartSeriesWordcloudComponent extends TdSeriesDirective implements ITdWordcloudSeries {
    data: ITdWordCloudData[];
    shape: TdWordcloudShape;
    left: string | number;
    top: string | number;
    width: string | number;
    height: string | number;
    right: string | number;
    bottom: string | number;
    sizeRange: number[];
    rotationRange: number[];
    rotationStep: number;
    gridSize: number;
    drawOutOfBound: boolean;
    textStyle: ITdWordcloudTextStyle;
    constructor(_optionsService: TdChartOptionsService);
    getConfig(): any;
}
