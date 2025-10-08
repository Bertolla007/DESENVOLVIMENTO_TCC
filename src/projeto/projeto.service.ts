import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Projeto, ProjetoDocument } from './projeto.schema';

@Injectable()
export class ProjetoService {
  constructor(@InjectModel(Projeto.name) private projetoModel: Model<ProjetoDocument>) {}

  create(data: Partial<Projeto>) {
    const projeto = new this.projetoModel(data);
    return projeto.save();
  }

  findAll() {
    return this.projetoModel.find().exec();
  }

  findOne(id: string) {
    return this.projetoModel.findById(id).exec();
  }

  update(id: string, data: Partial<Projeto>) {
    return this.projetoModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  remove(id: string) {
    return this.projetoModel.findByIdAndDelete(id).exec();
  }
}
