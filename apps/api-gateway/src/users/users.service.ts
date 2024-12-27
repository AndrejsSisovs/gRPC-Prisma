import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { 
  UserServiceClient,
  USER_SERVICE_NAME} from '@app/comon';
import { USER_SERVICE } from './constants';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class UsersService implements OnModuleInit{
  private userService: UserServiceClient;

  constructor(@Inject(USER_SERVICE) private user:ClientGrpc) {}
  
  onModuleInit() {
    this.userService = this.user.getService<UserServiceClient>(USER_SERVICE_NAME)
  }

  authenticate(userData: {username:string; password: string}) {
    return this.userService.authenticate(userData);
  }
}
