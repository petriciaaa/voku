import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import axios from 'axios';
import { AUTH_SERVICE_HOST } from '@auth-service/auth-service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  async create(@Body() createAuthDto: any) {
    try {
      console.log(`${AUTH_SERVICE_HOST}register`);

      const response = await axios.post(`${AUTH_SERVICE_HOST}register`, {
        email: createAuthDto.email,
        password: createAuthDto.password,
      });
      return response.data;
    } catch (error) {
      console.error('Error connecting to auth service:', error.message);
      throw new Error('Failed to connect to auth service');
    }
  }

  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
