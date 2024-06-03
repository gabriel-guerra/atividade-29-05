import { IsNumber, IsString } from "class-validator";

export class CreateProdutoDto {
    @IsString()
    nome: string;

    @IsNumber()
    valor: number;
    
    @IsNumber()
    quantidade: number;
}
