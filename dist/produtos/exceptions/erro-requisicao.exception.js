"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErroRequisicaoException = void 0;
const common_1 = require("@nestjs/common");
class ErroRequisicaoException extends common_1.HttpException {
    constructor() {
        super('Produto não encontrado', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.ErroRequisicaoException = ErroRequisicaoException;
//# sourceMappingURL=erro-requisicao.exception.js.map