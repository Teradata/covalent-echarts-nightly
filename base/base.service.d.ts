import { Provider } from '@angular/core';
import { Observable } from 'rxjs';
export declare class TdChartOptionsService {
    private _options;
    private _optionsSubject;
    setOption(option: string, value: any): void;
    setArrayOption(option: string, value: any): any;
    getOption(option: string): any[];
    clearOption(option: string): void;
    listen(): Observable<any>;
}
export declare function BASE_CHART_PROVIDER_FACTORY(parent: TdChartOptionsService): TdChartOptionsService;
export declare const BASE_CHART_PROVIDER: Provider;
