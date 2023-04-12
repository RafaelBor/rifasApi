import { IsDecimal, IsNotEmpty, IsNumber, IsString, isNumber } from "class-validator";
import { isFloat32Array } from "util/types";

export class CreateRifaDto {
    @IsString()
    @IsNotEmpty()
    nombre:string;

    @IsNumber()
    @IsNotEmpty()
    precio:number;

    @IsNumber()
    @IsNotEmpty()
    cantidad_boletos:number;

    @IsString()
    @IsNotEmpty()
    descripcion:string
}
