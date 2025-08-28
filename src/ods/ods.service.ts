import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ods, OdsDocument } from './schema/ods.schema';

@Injectable()
export class OdsService {
  constructor(@InjectModel(Ods.name) private odsModel: Model<OdsDocument>) {}

  create(data: Partial<Ods>) {
    const novaOds = new this.odsModel(data);
    return novaOds.save();
  }

  findAll() {
    return this.odsModel.find().exec();
  }

  findOne(id: string) {
    return this.odsModel.findById(id).exec();
  }

  update(id: string, data: Partial<Ods>) {
    return this.odsModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  remove(id: string) {
    return this.odsModel.findByIdAndDelete(id).exec();
  }
}

