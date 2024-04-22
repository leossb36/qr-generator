import { Controller, Get, Query, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GenerateService } from './generate.service';
import { Response } from 'express';
import { QrCodeProperty } from './dto/property.dto';

@Controller('generate')
@ApiTags('Generate')
export class GenerateController {
  constructor(private readonly generateService: GenerateService) {}

  @Get()
  async generateQRCode(
    @Query() property: QrCodeProperty,
    @Query('data') data: string,
    @Res() res: Response,
  ) {
    try {
      const response = await this.generateService.generateQrCode(
        data,
        property,
      );
      res
        .header('Content-Type', 'image/png')
        .send(Buffer.from(response.split(',')[1], 'base64'));
    } catch (error) {
      res.status(400).send('Error ao gerar imagem qrCode');
    }
  }
}
