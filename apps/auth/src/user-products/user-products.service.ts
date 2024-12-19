import { Injectable, OnModuleInit } from '@nestjs/common';
import { Product } from '.prisma/client';
import { CreateProductRequest } from '@app/comon';
import { DatabaseService } from '../database/database.service';
@Injectable()
export class UserProductsService  implements OnModuleInit{
  private readonly products: Product [] = []
  constructor(private readonly databaseService: DatabaseService) {}
  onModuleInit() {
    
  }
  
  async createProduct(createProductRequest: CreateProductRequest): Promise<Product> {
    const product = await this.databaseService.product.create({
      data: {
        name: createProductRequest.name,
        price: createProductRequest.price,
        sale: createProductRequest.sale,
        availibility: createProductRequest.availibility,
        description: createProductRequest.description,
      },
    });
    return product
  }

  listProducts() {
    return `This action returns all userProducts`;
  }

  getProductById(id: number) {
    return `This action returns a #${id} userProduct`;
  }

  updateProduct() {
    return `This action updates a  userProduct`;
  }

  removeProduct(id: number) {
    return `This action removes a #${id} userProduct`;
  }

  queryProducts() {
    return `This action removes a #$} userProduct`;
  }

}
