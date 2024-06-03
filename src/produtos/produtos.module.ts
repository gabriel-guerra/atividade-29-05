import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ProdutosService } from './produtos.service';
import { ProdutosController } from './produtos.controller';
import { logger } from './produtos.middleware';
import { Produto, ProdutoSchema } from './entities/produto.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{name: Produto.name, schema: ProdutoSchema}])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})

export class ProdutosModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(logger)
      .forRoutes(ProdutosController);
  }
}
