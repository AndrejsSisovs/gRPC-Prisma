import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '.prisma/client';
import { CreateProductRequest, Products, UpdateProductRequest } from '@app/comon';
import { DatabaseService } from '../database/database.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class UserProductsService {
  constructor(private readonly databaseService: DatabaseService) {}

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
    return product;
  }

  async listProducts(): Promise<Products> {
    const products = await this.databaseService.product.findMany();
    return { products };
  }

  async getProductById(id: number): Promise<Product> {
    const product = await this.databaseService.product.findUnique({ where: { id } });
    if (!product) {
      throw new NotFoundException(`Product not found with id: ${id}`);
    }
    return product;
  }

  async updateProduct(id: number, updateProduct: UpdateProductRequest): Promise<Product> {
    const product = await this.databaseService.product.update({
      where: { id },
      data: {
        name: updateProduct.name,
        price: updateProduct.price,
        sale: updateProduct.sale,
        availibility: updateProduct.availibility,
        description: updateProduct.description,
      },
    });
    return product;
  }

  async removeProduct(id: number): Promise<Product> {
    const product = await this.databaseService.product.delete({
      where: { id },
    });
    return product;
  }
}
