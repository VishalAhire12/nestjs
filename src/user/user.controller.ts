import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { createUser } from "./user.dto";
@Controller('user')
export class UserController{
    constructor(
        private readonly userService:UserService
    ){}
    @Get()
    async findAll():Promise<User[]>{
        return this.userService.findAll();
    }
    @Post('/create')
    insertUser(@Body() user:createUser):Promise<any> {
        return this.userService.insertUser(user);
    }
}