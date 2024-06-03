import { HttpException, HttpStatus } from "@nestjs/common";

export class NaoEncontradoException extends HttpException {
    constructor() {
      super('Produto não encontrado', HttpStatus.NOT_FOUND);
    }
  }