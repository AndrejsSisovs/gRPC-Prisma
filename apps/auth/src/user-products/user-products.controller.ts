import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserProductsService } from './user-products.service';
import { ProductServiceController, 
  CreateProductRequest, 
  GetProductByIdRequest, 
  UpdateProductRequest, 
  ProductServiceControllerMethods,
  PaginationDto,
  Products } from '@app/comon';
import { Observable } from 'rxjs';

@Controller()
@ProductServiceControllerMethods()
export class UserProductsController  implements ProductServiceController{
  constructor(private readonly userProductsService: UserProductsService) {}

  createProduct( createProductRequest: CreateProductRequest) {
    return this.userProductsService.createProduct(createProductRequest);
  }

  listProducts() {
    return this.userProductsService.findAll();
  }

  getProductById(getProductByIdRequest: GetProductByIdRequest) {
    return this.userProductsService.findOne(getProductByIdRequest.id);
  }

  updateProduct(updateProductRequest: UpdateProductRequest) {
    return this.userProductsService.update(updateProductRequest.id, updateProductRequest.name, 
      updateProductRequest.price, 
      updateProductRequest.sale, 
      updateProductRequest.availibility, 
      updateProductRequest.description);
  }

  removeProduct(getProductByIdRequest: getProductByIdRequest) {
    return this.userProductsService.remove(getProductByIdRequest.id);
  }

  queryProducts(paginationDtoStream: Observable<PaginationDto>)
  {
    return this.userProductsService.queryProducts(paginationDtoStream)
  }
}
