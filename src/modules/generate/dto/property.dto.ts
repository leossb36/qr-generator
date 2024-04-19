import { MESSAGES } from '@app/modules/common/constants/message';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, Min, Max, IsOptional } from 'class-validator';

export class QrCodeProperty {
  @ApiPropertyOptional()
  @Type(() => Number)
  @IsInt()
  @Min(80, { message: MESSAGES.MIN_LIMIT })
  @Max(500, { message: MESSAGES.MAX_LIMIT })
  @IsOptional()
  readonly size?: number = 80;
}
