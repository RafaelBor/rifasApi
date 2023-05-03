import { Cliente } from "src/clientes/entities/cliente.entity";
import { Rifa } from "src/rifas/entities/rifa.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

export enum StatusBoleto {
    DISPONIBLE = 'disponible',
    APARTADO = 'apartado',
    PAGADO = 'pagado'
  }

@Entity('boletos')
export class Boleto {
    
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column('text')
    num_boleto:string

    @Column({
        type: 'enum',
        enum: StatusBoleto,
        default: StatusBoleto.APARTADO

    })
    status:string

    @ManyToOne(
        () => Rifa,
        (rifa) => rifa.boleto
    )
    rifa: Rifa


    @ManyToOne(
        () => Cliente,
        (cliente) => cliente.boleto
    )
    cliente: Cliente
}
