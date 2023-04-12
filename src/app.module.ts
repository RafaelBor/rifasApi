import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { RifasModule } from './rifas/rifas.module';
import { BoletosModule } from './boletos/boletos.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password:  process.env.DB_PASS,
      database:  process.env.DB_NAME,
      entities: [],
      autoLoadEntities:true,
      synchronize: true,
    }),
    ClientesModule,
    AuthModule,
    CommonModule,
    RifasModule,
    BoletosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
