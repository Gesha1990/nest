import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface TopLevelModel extends Base {}

class HhData {
  @prop()
  count: number;
  @prop()
  juniorSalary: number;
  @prop()
  middleSalary: number;
  @prop()
  seniorSalary: number;
}
class TopPageAdvantage {
  @prop()
  title: string;
  @prop()
  description: string;
}
export class TopLevelModel extends TimeStamps {
  @prop({ enum: TopLevelCategory })
  firstLevelCategory: TopLevelCategory;
  @prop()
  secondCategory: string;
  @prop({ unique: true })
  alias: string;
  @prop()
  title: string;
  @prop()
  category: string;
  @prop({ type: () => HhData })
  hh?: HhData;
  @prop({ type: () => [TopPageAdvantage] })
  advantages: TopPageAdvantage[];
  @prop()
  seoText: string;
  @prop()
  tagsTitle: string;
  @prop({ type: () => [String] })
  tags: string[];
}
