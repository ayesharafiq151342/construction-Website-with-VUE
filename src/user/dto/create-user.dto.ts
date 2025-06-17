// create-user.dto.ts
import { IsString, IsInt, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  FirstName: string;

@IsString()
PhoneNumber: string;


  @IsEmail()
  Email: string;
  @IsString()
  Meassage:string;
}
