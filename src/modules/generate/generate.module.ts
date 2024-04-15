import { Module } from '@nestjs/common';
import { GenerateService } from './generate.service';
import { GenerateController } from './generate.controller';
import { CreateQrCodeUseCase } from './use-case/create-qr-code.use-case';

@Module({
  controllers: [GenerateController],
  providers: [GenerateService, CreateQrCodeUseCase],
  imports: [],
})
export class GenerateModule {}
