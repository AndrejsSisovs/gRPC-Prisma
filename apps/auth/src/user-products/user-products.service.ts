import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { Product } from '.prisma/client';
import { CreateProductRequest, Products, UpdateProductRequest } from '@app/comon';
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

  listProducts() : Products {
    return {products: this.products};
  }

  getProductById(id: number) {
    const searchedObject = this.products.find(product => product.id == id);
    return searchedObject;
  }

  updateProduct(id: number, updateProduct: UpdateProductRequest) {
    const productIndex = this.products.findIndex((product) => product.id ==id )
    if(productIndex !== -1) { 
      this.products[productIndex] = {
        ...this.products[productIndex],
        ...updateProduct,
      };
      return this.products[productIndex]
    }
    throw new NotFoundException(`User not found by id: ${id}`)
  }

  removeProduct(id: number) {
    const productIndex = this.products.findIndex((product) => product.id ==id )
    if(productIndex !== -1) { 
      return this.products.splice(productIndex)[0];
      };
    }
  }
  
}
