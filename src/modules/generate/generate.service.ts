import { BadRequestException, Injectable } from '@nestjs/common';
import { MESSAGES } from '../common/constants/message';
import { CreateQrCodeUseCase } from './use-case/create-qr-code.use-case';
import { QrCodeProperty } from './dto/property.dto';

@Injectable()
export class GenerateService {
  constructor(private readonly createQrCodeUseCase: CreateQrCodeUseCase) {}

  async generateQrCode(
    data: string,
    property?: QrCodeProperty,
  ): Promise<string> {
    if (!data) {
      throw new BadRequestException(MESSAGES.NOT_FOUND);
    }

    const response = await this.createQrCodeUseCase.execute(data, property);

    if (!response) {
      throw new BadRequestException(MESSAGES.ERROR);
    }

    return response;
  }
}
