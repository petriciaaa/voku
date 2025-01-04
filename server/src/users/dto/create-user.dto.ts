import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  email: string;
  password: string;
  @IsString()
  @IsOptional()
  name?: string;
}
