import { Module } from '@nestjs/common';
import { RifasService } from './rifas.service';
import { RifasController } from './rifas.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rifa } from './entities/rifa.entity';

@Module({
  controllers: [RifasController],
  providers: [RifasService],
  imports: [
    TypeOrmModule.forFeature([Rifa]),
  ]
})
export class RifasModule {}
