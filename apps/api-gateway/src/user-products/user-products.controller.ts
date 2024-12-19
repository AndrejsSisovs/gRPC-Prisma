import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserProductsService } from './user-products.service';
import { ProductServiceController, 
  CreateProductRequest, 
  GetProductByIdRequest, 
  UpdateProductRequest, 
  ProductServiceControllerMethods,
  Products } from '@app/comon';

@Controller('user-products')
export class UserProductsController {
  constructor(private readonly userProductsService: UserProductsService) {}

  @Post()
  create(@Body() createUserProductDto: CreateUserProductDto) {
    return this.userProductsService.create(createUserProductDto);
  }

  @Get()
  findAll() {
    return this.userProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserProductDto: UpdateUserProductDto) {
    return this.userProductsService.update(+id, updateUserProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userProductsService.remove(+id);
  }
}
