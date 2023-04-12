import { IsString } from "class-validator";

export class CreateClienteDto {

    @IsString()
    nombre:string

    @IsString()
    apellido_paterno:string

    @IsString()
    apellido_materno:string
}
