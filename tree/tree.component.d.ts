import { TdChartOptionsService, ITdItemStyle, TdMarkPointSymbol, ITdLabel, ITdLineStyle, ITdSeries, TdSeriesComponent, ITdEmphasis, ITdShadow } from '@covalent/echarts/base';
/**
 * ECHART OPTION DOCS
 * https://ecomfe.github.io/echarts-doc/public/en/option.html#series-tree
 *
 */
/**
 * LR - from left to right
 * RL - from right to left
 * TB - from top to bottom
 * BT - from bottom to top
 */
export declare type TdTreeOrient = 'LR' | 'RL' | 'TB' | 'BT';
export declare type TdTreeLayout = 'orthogonal' | 'radial';
export interface ITdTreeEmphasisLineStyle extends ITdShadow {
    color?: any;
    width?: number;
    curveness?: number;
}
export interface ITdTreeEmphasis extends ITdEmphasis {
    lineStyle: ITdTreeEmphasisLineStyle;
}
export interface ITdTreeLeaves {
    label?: ITdLabel;
    itemStyle?: ITdItemStyle;
    emphasis: ITdEmphasis;
}
interface ITdTreeSeries extends ITdSeries<'tree'> {
    zlevel?: number;
    z?: number;
    left?: string | number;
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    width?: string | number;
    height?: string | number;
    layout?: TdTreeLayout;
    orient?: TdTreeOrient;
    symbol?: TdMarkPointSymbol | string;
    symbolSize?: number;
    symbolRotate?: number;
    symbolKeepAspect?: boolean;
    symbolOffset?: any[];
    roam?: boolean | string;
    expandAndCollapse?: boolean;
    initialTreeDepth?: number;
    itemStyle?: ITdItemStyle;
    label?: ITdLabel;
    lineStyle?: ITdLineStyle;
    leaves?: ITdTreeLeaves;
    emphasis?: ITdTreeEmphasis;
    data: any[];
}
export declare class TdChartSeriesTreeComponent extends TdSeriesComponent<'tree'> implements ITdTreeSeries {
    zlevel: number;
    z: number;
    left: string | number;
    top: string | number;
    right: string | number;
    bottom: string | number;
    width: string | number;
    height: string | number;
    layout: TdTreeLayout;
    orient: TdTreeOrient;
    symbol: TdMarkPointSymbol | string;
    symbolSize: number;
    symbolRotate: number;
    symbolKeepAspect: boolean;
    roam: boolean | string;
    expandAndCollapse: boolean;
    initialTreeDepth: number;
    itemStyle: ITdItemStyle;
    label: ITdLabel;
    lineStyle: ITdLineStyle;
    leaves: ITdTreeLeaves;
    emphasis: ITdTreeEmphasis;
    constructor(_optionsService: TdChartOptionsService);
    getConfig(): any;
}
export {};
