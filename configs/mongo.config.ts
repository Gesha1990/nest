import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
  };
};
const getMongoString = (configService: ConfigService) => {
  return `mongodb+srv://hennadiipetrov:${configService.get('MONGO_PASSWORD')}@cluster0.94vd8dj.mongodb.net/`;
};
