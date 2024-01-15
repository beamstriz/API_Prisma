import { Request, Response} from 'express';
import { prisma } from '../database';

export default{
  async createUser(request: Request, response: Response){
    try{
      const { nome, email, senha } = request.body;
      const userExist = await prisma.user.findUnique({ where: {email} });

      if(userExist){
        return response.json({
          error: true,
          message: 'Error: usuário já existe!'
        });
      }

      const user = await prisma.user.create({
        data: {
          nome,
          email,
          senha
        }
      });

      return response.json({
        error: false,
        message: 'Sucesso: usuário cadastrado com sucesso!',
        user
      });

    }catch(error){
      return response.json({ message: error.message });
    }
  }
};