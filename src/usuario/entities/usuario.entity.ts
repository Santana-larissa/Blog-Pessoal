// eslint-disable-next-line quotes
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Postagem } from '../../postagem/entities/postagem.entity';

@Entity({name: 'tb_usuarios'})
export class Usuario {

    @ApiProperty()
    @PrimaryGeneratedColumn() 
      id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()  
      nome: string;

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    // eslint-disable-next-line quotes
    @ApiProperty({example: "email@email.com.br"}) 
      usuario: string;

    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false }) 
    @ApiProperty({ required: false })
      senha: string;

    @Column({length: 5000 })
    @ApiProperty({ required: false }) 
      foto: string;

    @OneToMany(() => Postagem, (postagem) => postagem.usuario)
    @ApiProperty({ type: () => [Postagem]})
      postagem: Postagem[];

}