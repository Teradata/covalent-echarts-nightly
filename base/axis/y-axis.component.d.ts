import { TdChartOptionsService } from '../chart-options.service';
import { TdYAxisPosition } from './axis.interface';
import { TdChartAxisComponent } from './axis.component';
export declare class TdChartYAxisComponent extends TdChartAxisComponent {
    position: TdYAxisPosition;
    constructor(_optionsService: TdChartOptionsService);
}
