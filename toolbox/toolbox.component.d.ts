import { TemplateRef, ElementRef, ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { TdChartOptionsService, ITdLabel, ITdShadow, ITdItemStyle, TdTextPosition, TdTextAlign } from '@covalent/echarts/base';
export declare type TdToolboxOrient = 'horizontal' | 'vertical';
export declare type TdImageType = 'png' | 'jpeg';
export interface ITdAcceptedBrushTypes {
    rect?: string;
    polygon?: string;
    lineX?: string;
    lineY?: string;
    keep?: string;
    clear?: string;
}
export interface ITdAcceptedMagicTypes {
    line?: string;
    bar?: string;
    stack?: string;
    tiled?: string;
}
export interface ITdToolboxIconEmphasis extends ITdItemStyle, ITdShadow {
}
export interface ITdFeatureIconStyle extends ITdItemStyle, ITdShadow {
    textPosition?: TdTextPosition;
    textAlign?: TdTextAlign;
    emphasis?: ITdToolboxIconEmphasis;
}
export interface ITdZoomTitles {
    zoom?: string;
    back?: string;
}
export interface ITdSaveAsImage {
    type?: TdImageType;
    name?: string;
    backgroundColor?: any;
    excludeComponents?: string[];
    show?: boolean;
    title?: string;
    icon?: string;
    iconStyle?: ITdFeatureIconStyle;
    pixelRatio?: number;
}
export interface ITdRestore {
    show?: boolean;
    title?: string;
    icon?: string;
    iconStyle?: ITdFeatureIconStyle;
}
export interface ITdDataView {
    show?: boolean;
    title?: string;
    icon?: string;
    iconStyle?: ITdFeatureIconStyle;
    readOnly?: boolean;
    optionToContent?: Function;
    contentToOption?: Function;
    lang?: string[];
    textareaColor?: string;
    textareaBorderColor?: string;
    textColor?: string;
    buttonColor?: string;
    buttonTextColor?: string;
}
export interface ITdDataZoom {
    show?: boolean;
    title?: ITdZoomTitles;
    icon?: ITdZoomTitles;
    iconStyle?: ITdFeatureIconStyle;
    xAxisIndex?: number | number[] | boolean;
    yAxisIndex?: number | number[] | boolean;
}
export interface ITdMagicType {
    show?: boolean;
    type?: string[];
    title?: ITdAcceptedMagicTypes;
    icon?: ITdAcceptedMagicTypes;
    iconStyle?: ITdFeatureIconStyle;
    option?: {
        line?: object;
        bar?: object;
        stack?: object;
        tiled?: object;
    };
    seriesIndex?: {
        line?: any[];
        bar?: any[];
        stack?: any[];
        tiled?: any[];
    };
}
export interface ITdBrush {
    type?: any[];
    icon?: ITdAcceptedBrushTypes;
    title?: ITdAcceptedBrushTypes;
}
export interface ITdToolboxFeature {
    saveAsImage?: ITdSaveAsImage;
    restore?: ITdRestore;
    dataView?: ITdDataView;
    dataZoom?: ITdDataZoom;
    magicType?: ITdMagicType;
    brush?: ITdBrush;
}
export declare class TdChartViewDataFormatterDirective {
}
export declare class TdChartToolboxComponent implements OnChanges, OnDestroy {
    private _changeDetectorRef;
    private _elementRef;
    private _optionsService;
    private _state;
    config: any;
    show: boolean;
    trigger: string;
    orient: TdToolboxOrient;
    itemSize: number;
    itemGap: number;
    showTitle: boolean;
    label: ITdLabel;
    feature: ITdToolboxFeature;
    iconStyle: ITdFeatureIconStyle;
    zlevel: number;
    z: number;
    transitionDuration: number;
    left: string | number;
    top: string | number;
    right: string | number;
    bottom: string | number;
    width: string | number;
    height: string | number;
    formatterTemplate: TemplateRef<any>;
    fullTemplate: TemplateRef<any>;
    constructor(_changeDetectorRef: ChangeDetectorRef, _elementRef: ElementRef, _optionsService: TdChartOptionsService);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    private _setOptions;
    private _removeOption;
    private _checkFormatterTemplate;
    private _optionToContentFormatter;
}
