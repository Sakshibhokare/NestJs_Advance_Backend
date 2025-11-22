import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
//we have headers and Ip as well to get headers details and Ip address of sender 
@Controller('users')
export class UsersController {
    //using routing decorators
    @Get("/:id/{:optional}")
    public getUsers(@Param() Param:any, @Query() query:any){
        console.log(Param);
        console.log("limit and offsetValues" + query)
        return "we are inside of getUsers";
    }

    @Post()
    public postUsers(@Body() requestBody: any){
        console.log(requestBody)
        return "we are inside of postUsers";
    }
}
