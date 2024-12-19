import { Controller } from '@nestjs/common';
// import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserProductsService } from './user-products.service';
import { ProductServiceController, 
  CreateProductRequest, 
  GetProductByIdRequest, 
  UpdateProductRequest, 
  ProductServiceControllerMethods,
  Products } from '@app/comon';
// import { Observable } from 'rxjs';

@Controller()
@ProductServiceControllerMethods()
export class UserProductsController  implements ProductServiceController{
  constructor(private readonly userProductsService: UserProductsService) {}

  createProduct( createProductRequest: CreateProductRequest) {
    return this.userProductsService.createProduct(createProductRequest);
  }

  listProducts() {
    return this.userProductsService.listProducts();
  }

  getProductById(getProductByIdRequest: GetProductByIdRequest) {
    return this.userProductsService.getProductById(getProductByIdRequest.id);
  }

  updateProduct(updateProductRequest: UpdateProductRequest) {
    return this.userProductsService.updateProduct(updateProductRequest.id, updateProductRequest);
  }

  removeProduct(getProductByIdRequest: GetProductByIdRequest) {
    return this.userProductsService.removeProduct(getProductByIdRequest.id);
  }

}
