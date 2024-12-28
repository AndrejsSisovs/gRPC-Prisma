import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ProductServiceController, 
  CreateProductRequest, 
  GetProductByIdRequest, 
  UpdateProductRequest, 
  ProductServiceControllerMethods,
  Products, 
  ProductServiceClient,
  PRODUCT_SERVICE_NAME,
  UserServiceClient,
  USER_SERVICE_NAME} from '@app/comon';
import { AUTH_SERVICE, TRANSCODE_QUEUE } from './constants';
import { ClientGrpc } from '@nestjs/microservices';
import { InjectQueue } from '@nestjs/bull';
import { Queue } from 'bull';

@Injectable()
export class UserProductsService implements OnModuleInit{
  private productService: ProductServiceClient;

  constructor(@Inject(AUTH_SERVICE) private client: ClientGrpc,

  // to inject queue we use inject que decorater || decorator accepts queue name || we provide variable with which we access queue
  @InjectQueue(TRANSCODE_QUEUE) private readonly transcodeQueue: Queue) {}
  
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

  async transcode() {
    //add method accepts object
    await this.transcodeQueue.add({
      filename: './file.mp3'    //next we need to create a consumer for this job 'transcode-consumer'
    });  
  };

}
