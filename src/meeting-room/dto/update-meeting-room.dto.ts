import { PartialType } from '@nestjs/mapped-types';
import { CreateMeetingRoomDto } from './create-meeting-room.dto';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class UpdateMeetingRoomDto extends PartialType(CreateMeetingRoomDto) {
  @IsNotEmpty({
    message: 'id 不能为空',
  })
  id: number;
}
