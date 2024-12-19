import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ProductServiceController, 
  CreateProductRequest, 
  GetProductByIdRequest, 
  UpdateProductRequest, 
  ProductServiceControllerMethods,
  Products, 
  ProductServiceClient,
  PRODUCT_SERVICE_NAME} from '@app/comon';
import { AUTH_SERVICE } from './constants';
import { ClientGrpc } from '@nestjs/microservices';

@Injectable()
export class UserProductsService implements OnModuleInit{
  private productService: ProductServiceClient;

  constructor(@Inject(AUTH_SERVICE) private client: ClientGrpc) {}
  
  onModuleInit() {
    this.productService = this.client.getService<ProductServiceClient>(PRODUCT_SERVICE_NAME)
  }

  createProduct(createProductRequest: CreateProductRequest) {
    return this.productService.createProduct(createProductRequest);
  }

  listProducts() {
    return this.productService.listProducts({});
  }

  getProductById(id: number) {
    return this.productService.getProductById({id});
  }

  updateProduct(id: number, updateProductRequest: UpdateProductRequest) {
    return this.productService.updateProduct({id, ...updateProductRequest});
  }

  removeProduct(id: number) {
    return this.productService.removeProduct({id});
  }
}
