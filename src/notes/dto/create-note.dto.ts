import { ApiProperty } from '@nestjs/swagger';
// import { IsString } from 'class-validator';
export class CreateNoteDto {
  @ApiProperty()
  // @IsString()
  firstName: string;

  @ApiProperty()
  // @IsString()
  lastName: string;
}
