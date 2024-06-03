"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
function logger(req, res, next) {
    req.body.valor = req.body.valor * 1.25;
    next();
}
exports.logger = logger;
;
//# sourceMappingURL=produtos.middleware.js.map