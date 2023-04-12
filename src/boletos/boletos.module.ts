import { Module } from '@nestjs/common';
import { BoletosService } from './boletos.service';
import { BoletosController } from './boletos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Boleto } from './entities/boleto.entity';

@Module({
  controllers: [BoletosController],
  providers: [BoletosService],
  imports: [
    TypeOrmModule.forFeature([Boleto]),
  ]
})
export class BoletosModule {}
