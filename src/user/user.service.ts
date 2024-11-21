import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "./user.entity";
import { Repository } from "typeorm";
interface IUser{
    name:string;
}
@Injectable()
export class UserService{
    constructor(@InjectRepository(User)
private readonly userRepository:Repository<User>,
){}
async findAll():Promise<User[]>{
    return this.userRepository.find();
}
async insertUser(userNew:IUser):Promise<any>{
    return this.userRepository.save(userNew);
}
}