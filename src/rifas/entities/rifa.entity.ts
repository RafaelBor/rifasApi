import { Boleto } from "src/boletos/entities/boleto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";

export enum Status {
    ACTIVA = 'activa',
    FINALIZADA = 'finalizada',
    CANCELADA = 'cancelada'
  }

@Entity('rifas')
export class Rifa {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column('text',{
        nullable:false
    })
    nombre:string

    @Column('float', {
        nullable:false
    })
    precio:number

    @Column('int', {
        nullable:false
    })
    cantidad_boletos:number

    @Column('text',{
        nullable:false
    })
    descripcion:string

    @Column({
        type:'enum',
        enum:Status,
        default:Status.ACTIVA
    })
    status:string

    @OneToMany(
        () => Boleto,
        (boleto) => boleto.rifa
    )
    boleto: Boleto




}
