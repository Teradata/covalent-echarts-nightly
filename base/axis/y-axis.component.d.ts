import { TdChartOptionsService } from '../chart-options.service';
import { TdYAxisPosition } from './axis.interface';
import { TdChartAxisDirective } from './axis.component';
export declare class TdChartYAxisComponent extends TdChartAxisDirective {
    position: TdYAxisPosition;
    constructor(_optionsService: TdChartOptionsService);
}
