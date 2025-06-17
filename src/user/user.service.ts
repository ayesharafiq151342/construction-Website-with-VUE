import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { Form } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor (@InjectRepository(Form) private readonly userRepoitory:Repository<Form>){

  }
  create(createUserDto: CreateUserDto ):Promise<Form> {
    //craete user 
    let form : Form =new Form()
    form.FirstName=createUserDto.FirstName;
    form.PhoneNumber=createUserDto.PhoneNumber;
    form.Email=createUserDto.Email;
form.Meassage=createUserDto.Meassage;


    return this.userRepoitory.save(form);
  }

  findAll():Promise<Form[]> {
    return this.userRepoitory.find();
  }

  findOne(id: number) {
   return this.userRepoitory.findOne({
  where: { id },
});


  }

  update(id: number, updateUserDto: UpdateUserDto) {
        let userUpdate : Form =new Form()
    userUpdate.FirstName=updateUserDto.FirstName;
    userUpdate.PhoneNumber=updateUserDto.PhoneNumber;
    userUpdate.Email=updateUserDto.Email;
userUpdate.Meassage=updateUserDto.Meassage;
    userUpdate.id=id;

    
    return this.userRepoitory.save(userUpdate)
  }

  remove(id: number) {
       return this.userRepoitory.delete(id);

  }
}
