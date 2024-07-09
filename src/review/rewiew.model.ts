import { index, prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export interface ReviewModel extends Base {}
@index({ title: 'text' })
export class ReviewModel extends TimeStamps {
  @prop()
  name: string;
  @prop()
  title: string;
  @prop()
  description: string;
  @prop()
  rating: number;
  @prop()
  productId: Types.ObjectId;
}
