import { User } from "src/auth/entities/auth.entity";
import { Boleto } from "src/boletos/entities/boleto.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity('clientes')
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column('text')
    nombre:string

    @Column('text')
    apellidos:string

    @Column('text')
    celular:string

    @Column('text')
    estado:string

    @Column('text')
    folio:string

    @OneToMany(
        () => Boleto,
        (boleto) => boleto.cliente
    )
    boleto: Boleto


    @ManyToOne(
        () => User,
        (usuario) => usuario.cliente
    )
    usuario: User
}
