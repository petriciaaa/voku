import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  NotFoundException,
  InternalServerErrorException,
  BadRequestException,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  public async findAll() {
    try {
      //   return {
      //     id: 1,
      //   };
      return await this.userService.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }
  @HttpCode(HttpStatus.OK)
  @Get('profile')
  public async findProfile(userId: string) {
    try {
      return await this.userService.findById(userId);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(
          'User not found. Please check the input data.',
        );
      }
      throw new InternalServerErrorException('An unexpected error occurred.');
    }
  }

  @HttpCode(HttpStatus.OK)
  @Get('by-id/:id')
  public async findById(@Param('id') id: string) {
    try {
      return await this.userService.findById(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(
          'User not found. Please check the input data.',
        );
      }
      throw new InternalServerErrorException('An unexpected error occurred.');
    }
  }

  @HttpCode(HttpStatus.OK)
  @Patch('profile')
  public async updateProfile(userId: string, @Body() dto: UpdateUserDto) {
    try {
      return await this.userService.update(userId, dto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(
          'User not found. Please check the input data.',
        );
      }
      if (error instanceof BadRequestException) {
        throw new BadRequestException('Invalid data provided.');
      }
      throw new InternalServerErrorException('An unexpected error occurred.');
    }
  }
}
