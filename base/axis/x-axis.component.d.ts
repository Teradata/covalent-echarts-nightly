import { TdChartOptionsService } from '../chart-options.service';
import { TdXAxisPosition } from './axis.interface';
import { TdChartAxisComponent } from './axis.component';
export declare class TdChartXAxisComponent extends TdChartAxisComponent {
    position: TdXAxisPosition;
    constructor(_optionsService: TdChartOptionsService);
}
