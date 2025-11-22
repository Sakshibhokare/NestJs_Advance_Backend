import { Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
    //using routing decorators
    @Get()
    public getUsers(){
        return "we are inside of getUsers";
    }

    @Post()
    public postUsers(){
        return "we are inside of postUsers";
    }
}
