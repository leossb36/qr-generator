import { BadRequestException, Injectable } from '@nestjs/common';
import { MESSAGES } from '../common/constants/message';
import { CreateQrCodeUseCase } from './use-case/create-qr-code.use-case';
import { GetQrCodeModelView } from './model-view/get-qr-code.mv';

@Injectable()
export class GenerateService {
  constructor(private readonly createQrCodeUseCase: CreateQrCodeUseCase) {}

  async generateQrCode(data: string): Promise<GetQrCodeModelView> {
    if (!data) {
      throw new BadRequestException(MESSAGES.NOT_FOUND);
    }

    const response = await this.createQrCodeUseCase.execute(data);

    if (!response) {
      throw new BadRequestException(MESSAGES.ERROR);
    }

    return { qrcode: `<img src="${response}" alt="QR Code" />` };
  }
}
