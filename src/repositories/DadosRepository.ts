import { Dados } from '@prisma/client';
import { prisma } from '../database';
import { IDadosRepository } from '../interfaces/IDadosRepository';

class DadosRepository implements IDadosRepository {
  public async create(sobrenome: string, idade: number, endereco: string, data_nascimento: string, pai: string, mae: string, genero: string): Promise<Dados> {
    const dados = await prisma.dados.create({
      data: {
        sobrenome,
        idade,
        endereco,
        data_nascimento,
        pai,
        mae,
        genero
      }
    });
    return dados;
  }

}

export { DadosRepository };