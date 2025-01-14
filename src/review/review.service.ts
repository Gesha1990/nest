import { Injectable } from '@nestjs/common';
import { ReviewModel } from './rewiew.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { CreateReviewDto } from './dto/create-review.dto';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ReviewModel)
    private readonly reviewModel: ModelType<ReviewModel>,
  ) {}
  async create(dto: CreateReviewDto): Promise<DocumentType<ReviewModel>> {
    return this.reviewModel.create(dto);
  }
  async delete(id: string): Promise<DocumentType<ReviewModel | null>> {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }
  async findByProductId(
    productId: string,
  ): Promise<DocumentType<ReviewModel>[]> {
    this.reviewModel
      .aggregate([
        {
          $match: {
            productId: productId,
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
        { $limit: 10 },
        {
          $lookup: {
            // from what collection
            from: 'Review',
            localField: '_id',
            foreignField: 'productId',
            as: 'review',
          },
        },
        {
          $addFields: {
            reviewCount: { $size: '$review' },
            reviewAvg: { $avg: '$review.rating' },
            reviews: {
              $function: {
                body: `function(reviews){
                        reviews.sort((a, b)=>new Date(b.createdAt) - new Date(a.createdAt))
                        return reviews
                    }`,
                args: ['$reviews'],
                lang: 'js',
              },
            },
          },
        },
      ])
      .exec();
    return this.reviewModel
      .find({
        productId,
      })
      .exec();
  }
  async deleteByProductId(productId: string) {
    return this.reviewModel.deleteMany({ productId: productId }).exec();
  }
}
