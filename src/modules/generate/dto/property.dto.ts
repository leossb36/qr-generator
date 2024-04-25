import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class QrCodeProperty {
  @ApiProperty({ default: 80, required: false })
  @Type(() => Number)
  @IsInt()
  @IsOptional()
  readonly size?: number = 80;
}
