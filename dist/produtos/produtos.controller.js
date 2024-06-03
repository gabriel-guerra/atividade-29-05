"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosController = void 0;
const common_1 = require("@nestjs/common");
const produtos_service_1 = require("./produtos.service");
const create_produto_dto_1 = require("./dto/create-produto.dto");
const update_produto_dto_1 = require("./dto/update-produto.dto");
const nao_encontrado_exception_1 = require("./exceptions/nao-encontrado.exception");
let ProdutosController = class ProdutosController {
    constructor(produtosService) {
        this.produtosService = produtosService;
    }
    async create(createProdutoDto) {
        try {
            return await this.produtosService.create(createProdutoDto);
        }
        catch (e) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async findAll() {
        try {
            const result = await this.produtosService.findAll();
            if (result.length < 1)
                throw new nao_encontrado_exception_1.NaoEncontradoException();
            return result;
        }
        catch (e) {
            throw new nao_encontrado_exception_1.NaoEncontradoException();
        }
    }
    async findOne(id) {
        try {
            const produto = await this.produtosService.findOne(id);
            if (!produto)
                throw new nao_encontrado_exception_1.NaoEncontradoException();
            return;
        }
        catch (e) {
            throw new nao_encontrado_exception_1.NaoEncontradoException();
        }
    }
    async update(id, updateProdutoDto) {
        try {
            return await this.produtosService.update(id, updateProdutoDto);
        }
        catch (e) {
            throw new common_1.InternalServerErrorException();
        }
    }
    async remove(id) {
        try {
            return await this.produtosService.remove(id);
        }
        catch (e) {
            throw new common_1.InternalServerErrorException();
        }
    }
};
exports.ProdutosController = ProdutosController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_produto_dto_1.CreateProdutoDto]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_produto_dto_1.UpdateProdutoDto]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProdutosController.prototype, "remove", null);
exports.ProdutosController = ProdutosController = __decorate([
    (0, common_1.Controller)('produtos'),
    __metadata("design:paramtypes", [produtos_service_1.ProdutosService])
], ProdutosController);
//# sourceMappingURL=produtos.controller.js.map