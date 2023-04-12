import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRifaDto } from './dto/create-rifa.dto';
import { UpdateRifaDto } from './dto/update-rifa.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Rifa } from './entities/rifa.entity';
import { Repository } from 'typeorm';
import { BaseResponseModel } from 'src/common/models/base';

@Injectable()
export class RifasService {
  constructor(
    @InjectRepository(Rifa)
    private readonly rifaRepository: Repository<Rifa>
  ){}
 async create(createRifaDto: CreateRifaDto) {
   try {
      const rifa = this.rifaRepository.create({
        ...createRifaDto
      })

      await this.rifaRepository.save(rifa)

      const response: BaseResponseModel<Rifa> = {
        code: '200',
        message: 'La rifa se ha creado con exito',
        data: rifa
      }

      return response;
   } catch (error) {
      const response: BaseResponseModel<Rifa> = {
        code: '400',
        message: 'Hubo un error al crear la rifa:' + error.message,
        data: null
      }
   }
  }

  findAll() {
    return `This action returns all rifas`;
  }

  async findOne(id: string) {
    const rifa = await this.rifaRepository.findOneBy({
      id:id
    })

    if(!rifa) throw new NotFoundException('No se encontre la rifa')

    const response: BaseResponseModel<Rifa> = {
      code: '200',
      message: 'La rifa se ha encontrado correctamente',
      data: rifa
    }
    return response;
  }

  update(id: number, updateRifaDto: UpdateRifaDto) {
    return `This action updates a #${id} rifa`;

    //prueba
  }

  remove(id: number) {
    return `This action removes a #${id} rifa`;
  }
}
