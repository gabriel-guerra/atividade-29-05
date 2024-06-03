import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0/books-nest'),
    BooksModule,
    ProdutosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
