// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { UserProductsService } from './user-products.service';
// import { CreateProductRequest, UpdateProductRequest } from '@app/comon';

// @Controller('user-products')
// export class UserProductsController {
//   constructor(private readonly userProductsService: UserProductsService) {}

  
//   @Post()
//   create(@Body() createProductRequest: CreateProductRequest) {
//     return this.userProductsService.createProduct(createProductRequest);
//   }

//   @Get()
//   findAll() {
//     return this.userProductsService.listProducts();
//   }

//   @Get(':id')
//   findOne(@Param('id') id: number) {
//     return this.userProductsService.getProductById(+id);
//   }

//   @Patch(':id')
//   update(@Param('id') id: number, @Body() updateProductRequest: UpdateProductRequest) {
//     return this.userProductsService.updateProduct(+id, updateProductRequest);
//   }

//   @Delete(':id')
//   remove(@Param('id') id: number) {
//     return this.userProductsService.removeProduct(+id);
//   }
// }
import { Controller, Get, Post, Body, Patch, Param, Delete, Render } from '@nestjs/common';
import { UserProductsService } from './user-products.service';
import { CreateProductRequest, UpdateProductRequest } from '@app/comon';
import { firstValueFrom } from 'rxjs';

@Controller('user-products')
export class UserProductsController {
  constructor(private readonly userProductsService: UserProductsService) {}

  // Render the main HTML view for user-product management
  @Get()
  @Render('user-products/index')
  async renderProducts() {
    const productsObservable = this.userProductsService.listProducts();
    const products = await firstValueFrom(productsObservable); // Convert Observable to a Promise
    return { products: products.products }; // Access the 'products' property
  }

  // REST API: Create a product
  @Post()
  create(@Body() createProductRequest: CreateProductRequest) {
    return this.userProductsService.createProduct(createProductRequest);
  }

  // REST API: List all products (JSON response)
  @Get('list')
  findAll() {
    return this.userProductsService.listProducts();
  }

  // REST API: Get a single product
  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userProductsService.getProductById(+id);
  }

  // REST API: Update a product
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateProductRequest: UpdateProductRequest) {
    return this.userProductsService.updateProduct(+id, updateProductRequest);
  }

  // REST API: Remove a product
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.userProductsService.removeProduct(+id);
  }
}
