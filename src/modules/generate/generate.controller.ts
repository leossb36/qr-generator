import { Controller, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenerateService } from './generate.service';
import { GetQrCodeModelView } from './model-view/get-qr-code.mv';

@Controller('generate')
@ApiTags('Generate')
export class GenerateController {
  constructor(private readonly generateService: GenerateService) {}

  @Post(':data')
  async generateQrCode(
    @Param('data') data: string,
  ): Promise<GetQrCodeModelView> {
    return await this.generateService.generateQrCode(data);
  }
}
