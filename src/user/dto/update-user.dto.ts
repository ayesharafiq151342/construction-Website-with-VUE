// update-user.dto.ts
import { IsOptional, IsString, IsInt, IsEmail } from 'class-validator';

export class UpdateUserDto {
        @IsOptional()
        @IsString()
        FirstName: string;

        @IsOptional()
      @IsString()
PhoneNumber: string;


        @IsOptional()
        @IsEmail()
        Email: string;
        
        @IsOptional()
        @IsString()
        Meassage: string;
}
