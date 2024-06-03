"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NaoEncontradoException = void 0;
const common_1 = require("@nestjs/common");
class NaoEncontradoException extends common_1.HttpException {
    constructor() {
        super('Produto não encontrado', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.NaoEncontradoException = NaoEncontradoException;
//# sourceMappingURL=nao-encontrado.exception.js.map