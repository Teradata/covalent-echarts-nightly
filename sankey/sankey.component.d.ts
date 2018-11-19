import { TdChartOptionsService, ITdLabel, ITdItemStyle, ITdEmphasis, ITdSeries, TdSeriesComponent, ITdShadow, ITdLineCurveStyle } from '@covalent/echarts/base';
export declare type TdSankeyOrient = 'horizontal' | 'vertical';
export declare type TdSankeyFocusNodeAdjacency = boolean | 'allEdges' | 'outEdges' | 'inEdges';
export interface ITdSankeyEmphasisLineStyle extends ITdShadow {
    color?: any;
    opacity?: number;
    curveness?: number;
}
export interface ITdSankeyEmphasis extends ITdEmphasis {
    lineStyle: ITdSankeyEmphasisLineStyle;
}
export interface ITdSankeySeries extends ITdSeries<'sankey'> {
    zlevel?: number;
    z?: number;
    left?: string | number;
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    width?: string | number;
    height?: string | number;
    nodeWidth?: number;
    nodeGap?: number;
    layoutIterations?: number;
    orient?: TdSankeyOrient;
    draggable?: boolean;
    focusNodeAdjacency?: TdSankeyFocusNodeAdjacency;
    label?: ITdLabel;
    itemStyle?: ITdItemStyle;
    lineStyle?: ITdLineCurveStyle;
    emphasis?: ITdEmphasis;
    data?: any[];
    nodes?: any[];
    links?: any[];
    edges?: any[];
    silent?: boolean;
}
export declare class TdChartSeriesSankeyComponent extends TdSeriesComponent<'sankey'> implements ITdSankeySeries {
    zlevel: number;
    z: number;
    left: string | number;
    top: string | number;
    right: string | number;
    bottom: string | number;
    width: string | number;
    height: string | number;
    nodeWidth: number;
    nodeGap: number;
    layoutIterations: number;
    orient: TdSankeyOrient;
    draggable: boolean;
    focusNodeAdjacency: TdSankeyFocusNodeAdjacency;
    label: ITdLabel;
    itemStyle: ITdItemStyle;
    lineStyle: ITdLineCurveStyle;
    emphasis: ITdEmphasis;
    nodes: any[];
    links: any[];
    edges: any[];
    silent: boolean;
    constructor(_optionsService: TdChartOptionsService);
    getConfig(): any;
}
