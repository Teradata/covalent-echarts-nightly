import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
export declare class TdChartOptionsService {
    private _options;
    private _optionsSubject;
    setOption(option: string, value: any): void;
    setArrayOption(option: string, value: any): any;
    getOption(option: string): any[];
    /**
     * Sets Series option using an index, normally used with an ngFor in the template or with setSeriesOptionArray method
     *
     * @param option Series option (e.i. tooltip)
     * @param value series option value(s)
     * @param index Series Index used to specify where the value param to be added
     */
    setSeriesOption(option: string, value: any, index: number): void;
    /**
     * Sets Series option using an index, normally used with an ngFor in the template
     *
     * @param option Series option (e.i. tooltip)
     */
    clearSeriesOption(option: string): void;
    clearOption(option: string): void;
    listen(): Observable<any>;
}
export declare function CHART_PROVIDER_FACTORY(parent: TdChartOptionsService): TdChartOptionsService;
export declare const CHART_PROVIDER: Provider;
