import { Request, Response} from 'express';
import { prisma } from '../database';
import { CreateDadosService } from '../service/createDadosService';
import { DadosRepository } from '../repositories/DadosRepository';

export default{
  async createDados(request: Request, response: Response) {
    try {
      const { sobrenome, idade, endereco, data_nascimento, pai, mae, genero } = request.body;

      const createDados = new CreateDadosService(new DadosRepository);

      const dados = await createDados.execute( sobrenome, idade, endereco, data_nascimento, pai, mae, genero);

      return response.json({
        error: false,
        message: 'Sucesso: Dados cadastrados com sucesso!',
        dados
      });

    }catch(error){
      return response.json({ message: error.message });
    }
  },

  async listDados(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const dados = await prisma.dados.findUnique({ where: { id: Number(id) } });

      if(!dados){
        return response.json({
          error: true,
          message: 'Error: Dados não encontrados!',
        });
      }

      return response.json({
        error: false,
        dados
      });



    }catch(error){
      return response.json({ message: error.message });
    }
  },

  async updateDados(request: Request, response: Response) {
    try {
      const { id, sobrenome, idade, endereco, data_nascimento, pai, mae, genero } = request.body;

      const dadosExists = await prisma.dados.findUnique({ where: { id: Number(id) } });

      if(!dadosExists){
        return response.json({
          error: true,
          message: 'Error: Dados não encontrados!',
        });
      }

      const dados = await prisma.dados.update({
        where: {
          id: Number(request.body.id)
        },
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

      return response.json({
        error: false,
        message: 'Sucesso: Dados atualizados com sucesso!',
        dados
      });



    }catch(error){
      return response.json({ message: error.message });
    }
  },

  async deleteDados(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const dadosExists = await prisma.dados.findUnique({ where: { id: Number(id) } });

      if(!dadosExists){
        return response.json({
          error: true,
          message: 'Error: Dados não encontrados!',
        });
      }

      const dados = await prisma.dados.delete({
        where: {
          id: Number(request.params.id)
        },
      });

      return response.json({
        error: false,
        message: 'Sucesso: Dados deletados com sucesso!',
        dados
      });



    }catch(error){
      return response.json({ message: error.message });
    }
  },
};