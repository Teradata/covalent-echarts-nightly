interface ITdLineStyle {
    color?: any;
    width?: number;
    type?: TdLineType;
    shadowBlur?: number;
    shadowColor?: any;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    opacity?: number;
}
interface ITdLineCurveStyle {
    color?: any;
    width?: number;
    type?: TdLineType;
    shadowBlur?: number;
    shadowColor?: any;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    opacity?: number;
    curveness?: number;
}
interface ITdTooltip {
    show?: boolean;
    trigger?: TdToolTipTrigger;
    axisPointer?: ITdTooltipAxisPointer;
    showContent?: boolean;
    position?: string | any[] | Function;
    triggerOn?: TdTriggerOn;
    showDelay?: number;
    hideDelay?: number;
    enterable?: boolean;
    confine?: boolean;
    transitionDuration?: number;
    Formatter?: string | Function;
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    padding?: number;
    textStyle?: ITdTextStyle;
    extraCssText?: string;
}
interface ITdTooltipAxisPointer {
    type?: TdToolPointerType;
    axis?: TdAxisPointerAxis;
    snap?: boolean;
    z?: number;
    label?: ITdAxisPointerLabel;
    lineStyle?: ITdLineStyle;
    shadowStyle?: ITdBaseStyle;
    crossStyle?: ITdLineStyle;
}
interface ITdBaseStyle {
    color?: any;
    shadowBlur?: number;
    shadowColor?: any;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    opacity?: number;
}
interface ITdTextStyle {
    color?: string | object;
    fontStyle?: TdFontStyle;
    fontWeight?: TdFontWeight;
    fontFamily?: TdFontFamily;
    fontSize?: number;
    lineHeight?: number;
    width?: number | string;
    height?: number | string;
    textBorderColor?: string;
    textBorderWidth?: number;
    textShadowColor?: string;
    textShadowBlur?: number;
    textShadowOffsetX?: number;
    textShadowOffsetY?: number;
    rich: object;
}
interface ITdLabel {
    show?: boolean;
    position?: TdLabelPosition;
    distance?: number;
    rotate?: number;
    offset?: number[];
    formatter?: any | Function;
    color?: any;
    fontStyle?: TdFontStyle;
    fontWeight?: TdFontWeight;
    fontFamily?: TdFontFamily;
    fontSize?: number;
    align?: TdAlign;
    verticalAlign?: TdVerticalAlign;
    lineHeight?: number;
    backgroundColor?: string | object;
    borderColor?: string;
    borderWidth?: number;
    borderRadius?: number;
    padding?: number;
    shadowColor?: string;
    shadowBlur?: number;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
    width?: number | string;
    height?: number | string;
    textBorderColor?: string;
    textBorderWidth?: number;
    textShadowColor?: string;
    textShadowBlur?: number;
    textShadowOffsetX?: number;
    textShadowOffsetY?: number;
    rich?: any;
}
interface ITdAxisPointerLabel {
    show?: boolean;
    precision?: string | number;
    formatter?: any;
    margin?: number;
    color?: string;
    fontStyle?: TdFontStyle;
    fontWeight?: TdFontWeight;
    fontFamily?: TdFontFamily;
    fontSize?: number;
    lineHeight?: number;
    width?: number | string;
    height?: number | string;
    textBorderColor?: string;
    textBorderWidth?: number;
    textShadowColor?: string;
    textShadowBlur?: number;
    textShadowOffsetX?: number;
    textShadowOffsetY?: number;
    padding?: number | number[];
    backgroundColor?: string;
    borderColor?: string;
    borderWidth?: number;
    shadowBlur?: number;
    shadowColor?: any;
    shadowOffsetX?: number;
    shadowOffsetY?: number;
}
declare enum TdAxisPointerAxis {
    X = "x",
    Y = "y",
    Radius = "radius",
    Angle = "angle",
}
declare enum TdToolTipTrigger {
    Item = "item",
    Axis = "axis",
    None = "none",
}
declare enum TdTriggerOn {
    Mousemove = "mousemove",
    Click = "click",
    None = "none",
}
declare enum TdToolPointerType {
    Line = "line",
    Shadow = "shadow",
    Cross = "cross",
}
declare enum TdLabelPosition {
    Top = "top",
    Left = "left",
    Right = "right",
    Bottom = "bottom",
    Inside = "inside",
    InsideLeft = "insideLeft",
    InsideRight = "insideRight",
    InsideTop = "insideTop",
    InsideBottom = "insideBottom",
    InsideTopLeft = "insideTopLeft",
    InsideBottomLeft = "insideBottomLeft",
    InsideTopRight = "insideTopRight",
    InsideBottomRight = "insideBottomRight",
}
declare enum TdAlign {
    Left = "left",
    Center = "center",
    Right = "right",
}
declare enum TdLineType {
    Solid = "solid",
    Dashed = "dashed",
    Dotted = "dotted",
}
declare enum TdAreaOrigin {
    Auto = "auto",
    Start = "start",
    End = "end",
}
declare enum TdLineLabelPosition {
    Middle = "middle",
    Start = "start",
    End = "end",
}
declare enum TdTooltipPosition {
    Inside = "inside",
    Top = "top",
    Left = "left",
    Right = "right",
    Bottom = "bottom",
}
declare enum TdFontWeight {
    Normal = "normal",
    Bold = "bold",
    Bolder = "bolder",
    Lighter = "lighter",
}
declare enum TdVerticalAlign {
    Top = "top",
    Middle = "middle",
    Bottom = "bottom",
    Center = "center",
}
declare enum TdPointerType {
    Line = "line",
    Shadow = "shadow",
}
declare enum TdFontFamily {
    Sans = "sans-serif",
    Serif = "serif",
    Mono = "monospace",
}
declare enum TdFontStyle {
    Normal = "normal",
    Italic = "italic",
    Oblique = "oblique",
}
declare enum TdStatus {
    Show = "show",
    Hide = "hide",
}
declare enum TdMarkPointSymbol {
    Circle = "circle",
    Rect = "rect",
    RoundRect = "roundRect",
    Triangle = "triangle",
    Diamond = "diamond",
    Pin = "pin",
    Arrow = "arrow",
    None = "none",
}
declare enum TdAnimationEasing {
    Linear = "linear",
    QuadraticIn = "quadraticIn",
    QuadraticOut = "quadraticOut",
    QuadraticInOut = "quadraticInOut",
    CubicIn = "cubicIn",
    CubicOut = "cubicOut",
    CubicInOut = "cubicInOut",
    QuarticIn = "quarticIn",
    QuarticOut = "quarticOut",
    QuarticInOut = "quarticInOut",
    QuinticIn = "quinticIn",
    QuinticOut = "quinticOut",
    QuinticInOut = "quinticInOut",
    SinusoidalIn = "sinusoidalIn",
    SinusoidalOut = "sinusoidalOut",
    SinusoidalInOut = "sinusoidalInOut",
    ExponentialIn = "exponentialIn",
    ExponentialOut = "exponentialOut",
    ExponentialInOut = "exponentialInOut",
    CircularIn = "circularIn",
    CircularOut = "circularOut",
    CircularInOut = "circularInOut",
    ElasticIn = "elasticIn",
    ElasticOut = "elasticOut",
    ElasticInOut = "elasticInOut",
    BackIn = "backIn",
    BackOut = "backOut",
    BackInOut = "backInOut",
    BounceOut = "bounceOut",
    BounceInOut = "bounceInOut",
}
export { TdAlign, TdFontStyle, TdFontWeight, TdVerticalAlign, TdFontFamily, TdPointerType, TdStatus, TdLineType, TdToolTipTrigger, TdLabelPosition, TdToolPointerType, TdTriggerOn, ITdLineStyle, TdAreaOrigin, TdMarkPointSymbol, TdAnimationEasing, TdTooltipPosition, ITdTooltip, ITdTextStyle, TdLineLabelPosition, ITdLineCurveStyle, ITdLabel, ITdAxisPointerLabel, ITdBaseStyle, ITdTooltipAxisPointer, TdAxisPointerAxis };
