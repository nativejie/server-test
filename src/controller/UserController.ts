import { getRepository } from 'typeorm';
import { NextFunction, Request, Response } from 'express';
import { User } from '../entity/User';
import ApiResult from '../utils/ApiResult'
import { Prefix, Get, Post, Delete } from '../core/decorator'
import BaseController from './BaseController'

@Prefix('/user')
export class UserController implements BaseController {
  private userRepository = getRepository(User);

  @Get('/page')
  async all(request: Request, response: Response, next: NextFunction) {
    const user = await this.userRepository.find()
    return ApiResult.toSuccess(user);
  }

  @Get('/get')
  async one(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.findOne(request.params.id);
  }

  @Post('/save')
  async save(request: Request, response: Response, next: NextFunction) {
    return this.userRepository.save(request.body);
  }

  @Delete('/remove')
  async remove(request: Request, response: Response, next: NextFunction) {
    const userToRemove = await this.userRepository.findOne(request.params.id);
    await this.userRepository.remove(userToRemove);
  }
}
