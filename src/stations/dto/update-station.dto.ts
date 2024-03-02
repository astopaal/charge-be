import { PartialType } from '@nestjs/swagger';
import Station from './create-station.dto';

export class UpdateStationDto extends PartialType(Station) {

}
