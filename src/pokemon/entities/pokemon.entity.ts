import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Le digo a Nest que esto creará una tabla en MariaDB automáticamente
export class Pokemon {
  @PrimaryGeneratedColumn() // Configuro esta columna como ID autoincremental único
  id!: number;

  @Column() // Defino un campo de texto normal para almacenar el nombre
  name!: string;

  @Column() // Defino un campo de texto para almacenar el tipo del Pokémon
  type!: string;
}