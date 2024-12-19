import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserProductsService } from './user-products.service';
import { CreateUserProductDto } from './dto/create-user-product.dto';
import { UpdateUserProductDto } from './dto/update-user-product.dto';

@Controller()
export class UserProductsController {
  constructor(private readonly userProductsService: UserProductsService) {}

  @MessagePattern('createUserProduct')
  create(@Payload() createUserProductDto: CreateUserProductDto) {
    return this.userProductsService.create(createUserProductDto);
  }

  @MessagePattern('findAllUserProducts')
  findAll() {
    return this.userProductsService.findAll();
  }

  @MessagePattern('findOneUserProduct')
  findOne(@Payload() id: number) {
    return this.userProductsService.findOne(id);
  }

  @MessagePattern('updateUserProduct')
  update(@Payload() updateUserProductDto: UpdateUserProductDto) {
    return this.userProductsService.update(updateUserProductDto.id, updateUserProductDto);
  }

  @MessagePattern('removeUserProduct')
  remove(@Payload() id: number) {
    return this.userProductsService.remove(id);
  }
}
