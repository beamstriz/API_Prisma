import { Dados } from '@prisma/client';

export interface IDadosRepository {
    create(sobrenome: string, idade: number, endereco: string, data_nascimento: string, pai: string, mae: string, genero: string): Promise <Dados>;
}