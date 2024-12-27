import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, ConsoleLogger } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  authenticate(@Body() input : {username:string; password: string}) {
    console.log(input)
    return this.usersService.authenticate(input);
  }
}
