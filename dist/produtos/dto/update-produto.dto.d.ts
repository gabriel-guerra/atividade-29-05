import { CreateProdutoDto } from './create-produto.dto';
declare const UpdateProdutoDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProdutoDto>>;
export declare class UpdateProdutoDto extends UpdateProdutoDto_base {
    nome: string;
    valor: number;
    quantidade: number;
}
export {};
