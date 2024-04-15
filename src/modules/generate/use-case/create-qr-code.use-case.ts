import { Injectable } from '@nestjs/common';
import * as qrCode from 'qrcode';
import { GetQrCodeModelView } from '../model-view/get-qr-code.mv';

@Injectable()
export class CreateQrCodeUseCase {
  constructor() {}

  async execute(data: string): Promise<GetQrCodeModelView> {
    try {
      const response = await qrCode.toDataURL(data);
      return response;
    } catch (error) {
      throw new Error('Falha na comunicação com a biblioteca');
    }
  }
}
