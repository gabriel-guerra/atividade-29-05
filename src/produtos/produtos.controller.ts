import { Controller, Get, Post, Body, Patch, Param, Delete, InternalServerErrorException } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { NaoEncontradoException } from './exceptions/nao-encontrado.exception';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosService: ProdutosService) {}

  @Post()
  async create(@Body() createProdutoDto: CreateProdutoDto) {
    try{
      return await this.produtosService.create(createProdutoDto);
    }catch(e){
      throw new InternalServerErrorException();
    }
  }

  @Get()
  async findAll() {
    try{  
      const result = await this.produtosService.findAll();
      if (result.length < 1) throw new NaoEncontradoException();
      return result;
    }catch(e){
      throw new NaoEncontradoException();
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try{
      const produto = await this.produtosService.findOne(id);
      if (!produto) throw new NaoEncontradoException();
      return 
    }catch(e){
      throw new NaoEncontradoException();
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    try{
      return await this.produtosService.update(id, updateProdutoDto);
    }catch(e){
      throw new InternalServerErrorException();
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    try{
      return await this.produtosService.remove(id);
    }catch(e){
      throw new InternalServerErrorException();
    }
  }
}
