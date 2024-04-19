import { Injectable } from '@nestjs/common';
import * as qrCode from 'qrcode';
import { QrCodeProperty } from '../dto/property.dto';

@Injectable()
export class CreateQrCodeUseCase {
  constructor() {}

  async execute(data: string, property?: QrCodeProperty): Promise<string> {
    try {
      const options: qrCode.QRCodeToDataURLOptions = {
        width: property.size,
        height: property.size,
      };
      const response = await qrCode.toDataURL(data, options);

      return response;
    } catch (error) {
      throw new Error('Falha na comunicação com a biblioteca');
    }
  }
}
