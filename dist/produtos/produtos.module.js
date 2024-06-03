"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutosModule = void 0;
const common_1 = require("@nestjs/common");
const produtos_service_1 = require("./produtos.service");
const produtos_controller_1 = require("./produtos.controller");
const produtos_middleware_1 = require("./produtos.middleware");
const produto_entity_1 = require("./entities/produto.entity");
const mongoose_1 = require("@nestjs/mongoose");
let ProdutosModule = class ProdutosModule {
    configure(consumer) {
        consumer
            .apply(produtos_middleware_1.logger)
            .forRoutes(produtos_controller_1.ProdutosController);
    }
};
exports.ProdutosModule = ProdutosModule;
exports.ProdutosModule = ProdutosModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([{ name: produto_entity_1.Produto.name, schema: produto_entity_1.ProdutoSchema }])],
        controllers: [produtos_controller_1.ProdutosController],
        providers: [produtos_service_1.ProdutosService],
    })
], ProdutosModule);
//# sourceMappingURL=produtos.module.js.map