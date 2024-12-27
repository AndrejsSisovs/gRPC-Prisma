import { Body, Controller, Get, HttpCode, Request, HttpStatus, NotImplementedException, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from './guards/auth.guard';
import { request } from 'http';
import { UserServiceControllerMethods, UsertServiceController } from '@app/comon';

@Controller('auth')
@UserServiceControllerMethods()

export class AuthController implements UsertServiceController{

    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    authenticate(@Body() input : {username:string; password: string}) {
        return this.authService.authenticate(input);
    }

    @UseGuards(AuthGuard)
    @Get('me')
    getUserInfo(@Request() request) {
        return request.user
    }
}
