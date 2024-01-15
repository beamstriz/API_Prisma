import { IDadosRepository } from '../interfaces/IDadosRepository';

class CreateDadosService {
  constructor(
    private DadosRepository: IDadosRepository
  ){ }

  public async execute(sobrenome: string, idade: number, endereco: string, data_nascimento: string, pai: string, mae: string, genero: string){
    const dados = await this.DadosRepository.create(sobrenome, idade, endereco, data_nascimento, pai, mae, genero);
    return dados;
  }
}

export { CreateDadosService };