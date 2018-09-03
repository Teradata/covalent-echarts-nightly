import { TdXAxisPosition } from './axis.interface';
import { TdChartOptionsService } from '../base.service';
import { TdChartAxisComponent } from './axis.component';
export declare class TdChartXAxisComponent extends TdChartAxisComponent {
    position: TdXAxisPosition;
    constructor(_optionsService: TdChartOptionsService);
}
