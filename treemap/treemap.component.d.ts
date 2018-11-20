import { TdChartOptionsService, ITdItemStyle, ITdSeriesTooltip, ITdLabel, ITdSeries, TdSeriesComponent, ITdEmphasis, ITdShadow } from '@covalent/echarts/base';
/**
 * ECHART OPTION DOCS
 * https://ecomfe.github.io/echarts-examples/public/index.html#chart-type-treemap
 *
 */
export interface ITdTreemapEmphasisLineStyle extends ITdShadow {
    color?: any;
    width?: number;
    curveness?: number;
}
export interface ITdTreemapEmphasis extends ITdEmphasis {
    lineStyle: ITdTreemapEmphasisLineStyle;
}
export interface ITdTreemapUpperLabel {
    show?: boolean;
    position?: string | any[];
    distance?: string | number;
    rotate?: string | number;
    offset?: any[];
    formatter?: string;
    color?: any;
    fontStyle?: string;
    fontWeight?: string;
    fontFamily?: string;
    fontSize?: string | number;
    align?: string;
    verticalAlign?: string;
    lineHeight?: string | number;
    backgroundColor?: any;
    borderColor?: string;
    borderWidth?: string | number;
    borderRadius?: string | number;
    padding?: number | any[];
    shadowColor?: string;
    shadowBlur?: string | number;
    shadowOffsetX?: string | number;
    shadowOffsetY?: string | number;
    width?: string | number;
    height?: string | number;
    textBorderColor?: string;
    textBorderWidth?: string | number;
    textShadowColor?: string;
    textShadowBlur?: string | number;
    textShadowOffsetX?: string | number;
    textShadowOffsetY?: string | number;
    rich: any;
    ellipsis: any;
}
export interface ITdTreemapBreadcrumb {
    show?: boolean;
    left?: string | number;
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    height?: string | number;
    emptyItemWidth?: string | number;
    itemStyle?: ITdItemStyle;
    emphasis?: ITdTreemapEmphasis;
}
interface ITdTreemapSeries extends ITdSeries<'treemap'> {
    zlevel?: number;
    z?: number;
    left?: string | number;
    top?: string | number;
    right?: string | number;
    bottom?: string | number;
    width?: string | number;
    height?: string | number;
    squareRatio?: string | number;
    leafDepth?: string | number;
    drillDownIcon?: string;
    roam?: boolean | string;
    nodeClick?: boolean | string;
    zoomToNodeRatio?: string | number;
    levels?: any[];
    silent?: boolean;
    visualDimension?: string | number;
    visualMin?: string | number;
    visualMax?: string | number;
    colorAlpha?: any[];
    colorSaturation?: string | number;
    colorMappingBy?: string;
    visibleMin?: string | number;
    childrenVisibleMin?: string | number;
    itemStyle?: ITdItemStyle;
    label?: ITdLabel;
    upperLabel?: ITdTreemapUpperLabel;
    breadcrumb?: ITdTreemapBreadcrumb;
    emphasis?: ITdTreemapEmphasis;
    data: any[];
}
export declare class TdChartSeriesTreemapComponent extends TdSeriesComponent<'treemap'> implements ITdTreemapSeries {
    config: any;
    id: string;
    name: string;
    data: any;
    zlevel: number;
    z: number;
    left: string | number;
    top: string | number;
    right: string | number;
    bottom: string | number;
    width: string | number;
    height: string | number;
    squareRatio: string | number;
    leafDepth: string | number;
    drillDownIcon: string;
    roam: boolean | string;
    nodeClick: boolean | string;
    zoomToNodeRatio: string | number;
    levels: any[];
    silent: boolean;
    visualDimension: string | number;
    visualMin: string | number;
    visualMax: string | number;
    colorAlpha: any[];
    colorSaturation: string | number;
    colorMappingBy: string;
    visibleMin: string | number;
    childrenVisibleMin: string | number;
    itemStyle: ITdItemStyle;
    label: ITdLabel;
    upperLabel: ITdTreemapUpperLabel;
    breadcrumb: ITdTreemapBreadcrumb;
    emphasis: ITdTreemapEmphasis;
    tooltip: ITdSeriesTooltip;
    constructor(_optionsService: TdChartOptionsService);
    getConfig(): any;
}
export {};
