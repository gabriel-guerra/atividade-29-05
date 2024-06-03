import { PartialType } from '@nestjs/mapped-types';
import { CreateProdutoDto } from './create-produto.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateProdutoDto extends PartialType(CreateProdutoDto) {
    @IsString()
    nome: string;

    @IsNumber()
    valor: number;

    @IsNumber()
    quantidade: number;
}
