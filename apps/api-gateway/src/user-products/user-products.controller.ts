import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserProductsService } from './user-products.service';
import { CreateProductRequest, UpdateProductRequest } from '@app/comon';

@Controller('user-products')
export class UserProductsController {
  constructor(private readonly userProductsService: UserProductsService) {}

  
  @Post()
  create(@Body() createProductRequest: CreateProductRequest) {
    return this.userProductsService.createProduct(createProductRequest);
  }

  @Get()
  findAll() {
    return this.userProductsService.listProducts();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userProductsService.getProductById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProductRequest: UpdateProductRequest) {
    return this.userProductsService.updateProduct(+id, updateProductRequest);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userProductsService.removeProduct(+id);
  }

  @Post('transcode')
  async transcode() {
    return this.userProductsService.transcode();
  }
}