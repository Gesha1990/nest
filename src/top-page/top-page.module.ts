import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { TopLevelModel } from './top-page.model';

@Module({
  controllers: [TopPageController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: TopLevelModel,
        schemaOptions: {
          collection: 'TopLevel',
        },
      },
    ]),
  ],
})
export class TopPageModule {}
