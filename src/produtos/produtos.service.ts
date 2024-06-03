import { Inject, Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Produto } from './entities/produto.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProdutosService {
  constructor(@InjectModel(Produto.name) private produtoModel: Model<Produto>){}

  async create(createProdutoDto: CreateProdutoDto): Promise<Produto>{
    const produto = new this.produtoModel(createProdutoDto);
    return await produto.save()
  }

  async findAll(): Promise<Produto[]>{
    return this.produtoModel.find().exec()
  }

  async findOne(id: string): Promise<Produto>{
    return this.produtoModel.findById(id);
  }

  async update(id: string, updateProdutoDto: UpdateProdutoDto) {
    try{
      return await this.produtoModel.findByIdAndUpdate(id, updateProdutoDto, {new: true});
    }catch(e){
      return null;
    }
  }

  async remove(id: string) {
    try{
      return await this.produtoModel.findByIdAndDelete(id);
    }catch(e){
      return null;
    }
  }
}
