export interface ITdLineStyle extends ITdShadow {
    color?: any;
    width?: number;
    type?: TdLineType;
    opacity?: number;
}
export interface ITdLineCurveStyle extends ITdLineStyle {
    curveness?: number;
    emphasis?: ITdLineStyle;
}
export interface ITdAnimation {
    animation?: boolean;
    animationThreshold?: number;
    animationDuration?: number | Function;
    animationEasing?: string;
    animationDelay?: number | Function;
    animationDurationUpdate?: number | Function;
    animationEasingUpdate?: string;
    animationDelayUpdate?: number | Function;
}
export interface ITdShadow {
    shadowBlur?: number;
    shadowColor?: any;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
}
export interface ITdTextShadow {
    textShadowColor?: string;
    textShadowBlur?: number;
    textShadowOffsetX?: number;
    textShadowOffsetY?: number;
}
export interface ITdFont {
    fontStyle?: TdFontStyle;
    fontWeight?: TdFontWeight;
    fontFamily?: string;
    fontSize?: number;
}
export interface ITdTooltip {
    show?: boolean;
    trigger?: TdToolTipTrigger;
    axisPointer?: ITdTooltipAxisPointer;
    showContent?: boolean;
    alwaysShowContent?: boolean;
    triggerOn?: TdTooltopTriggerOn;
    showDelay?: number;
    hideDelay?: number;
    enterable?: boolean;
    renderMode?: 'html' | 'richText';
    confine?: boolean;
    transitionDuration?: number;
    position?: string | any[] | Function;
    formatter?: string | Function;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    padding?: number;
    textStyle?: ITdTextStyle;
    extraCssText?: string;
}
export interface ITdTooltipAxisPointer {
    type?: TdAxisPointerType;
    axis?: TdAxisPointerAxis;
    snap?: boolean;
    z?: number;
    label?: ITdAxisPointerLabel;
    lineStyle?: ITdLineStyle;
    shadowStyle?: ITdBaseStyle;
    crossStyle?: ITdLineStyle;
}
export interface ITdBaseStyle extends ITdShadow {
    color?: any;
    opacity?: number;
}
export interface ITdTextStyle extends ITdTextShadow, ITdFont {
    color?: string | object;
    lineHeight?: number;
    width?: number | string;
    height?: number | string;
    textBorderColor?: string;
    textBorderWidth?: number;
    rich: object;
}
export interface ITdLabel extends ITdShadow, ITdTextShadow, ITdFont {
    show?: boolean;
    position?: TdLabelPosition;
    distance?: number;
    rotate?: number;
    offset?: number[];
    formatter?: any | Function;
    color?: any;
    align?: TdAlign;
    verticalAlign?: TdVerticalAlign;
    lineHeight?: number;
    backgroundColor?: string | object;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    padding?: number;
    width?: number | string;
    height?: number | string;
    textBorderColor?: string;
    textBorderWidth?: number;
    rich?: any;
}
export interface ITdAxisPointerLabel extends ITdShadow, ITdTextShadow, ITdFont {
    show?: boolean;
    precision?: string | number;
    formatter?: string | Function;
    margin?: number;
    color?: any;
    lineHeight?: number;
    width?: number | string;
    height?: number | string;
    textBorderColor?: string;
    textBorderWidth?: number;
    padding?: number | number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
}
export declare type TdAxisPointerAxis = 'x' | 'y' | 'radius' | 'angle';
export declare type TdToolTipTrigger = 'item' | 'axis' | 'none';
export declare type TdTooltopTriggerOn = 'mousemove' | 'click' | 'none';
export declare type TdAxisPointerType = 'line' | 'shadow' | 'cross';
export declare type TdLabelPosition = 'top' | 'left' | 'right' | 'bottom' | 'inside' | 'insideLeft' | 'insideRight' | 'insideTop' | 'insideBottom' | 'insideTopLeft' | 'insideBottomLeft' | 'insideTopRight' | 'insideBottomRight' | string[];
export declare type TdAlign = 'left' | 'center' | 'right';
export declare type TdLineType = 'solid' | 'dashed' | 'dotted';
export declare type TdAreaOrigin = 'auto' | 'start' | 'end';
export declare type TdLineLabelPosition = 'middle' | 'start' | 'end';
export declare type TdTooltipPosition = 'inside' | 'top' | 'left' | 'right' | 'bottom';
export declare type TdFontWeight = 'normal' | 'bold' | 'bolder' | 'lighter' | number;
export declare type TdVerticalAlign = 'top' | 'middle' | 'bottom' | 'center';
export declare type TdPointerType = 'line' | 'shadow';
export declare type TdFontStyle = 'normal' | 'italic' | 'oblique';
export declare type TdStatus = 'show' | 'hide';
export declare type TdMarkPointSymbol = 'circle' | 'rect' | 'roundRect' | 'triangle' | 'diamond' | 'pin' | 'arrow' | 'none';
