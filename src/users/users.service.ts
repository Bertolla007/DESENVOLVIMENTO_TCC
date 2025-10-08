import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.schema';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UsersService {
    async findAll() {
        return this.userModel.find().exec();
    }
 constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(email: string, password: string, role: string = 'editor') {
  const hashed = await bcrypt.hash(password, 10);
  const user = new this.userModel({ email, password: hashed, role });
  return user.save();
}

  async findByEmail(email: string) {
    return this.userModel.findOne({ email }).exec();
  }
}
