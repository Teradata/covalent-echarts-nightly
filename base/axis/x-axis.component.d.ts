import { TdChartOptionsService } from '../chart-options.service';
import { TdXAxisPosition } from './axis.interface';
import { TdChartAxisDirective } from './axis.component';
export declare class TdChartXAxisComponent extends TdChartAxisDirective {
    position: TdXAxisPosition;
    constructor(_optionsService: TdChartOptionsService);
}
