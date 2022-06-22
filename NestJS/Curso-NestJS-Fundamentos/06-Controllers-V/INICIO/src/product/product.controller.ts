import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
  @Get()
  getAll(
    @Query('page') _page: string,
    @Query('perPage') _perPage: string,
    @Query('search') search: string,
  ) {
    // http://localhost:3000/product?page=1&perPage=10&search=iphone

    const page = parseInt(_page, 10);
    const perPage = parseInt(_perPage, 10);
    const metadata = { page, perPage, search };

    return {
      message: 'Array of products',
      data: [],
      metadata,
    };
  }

  @Get(':productID/categoria/:categoryName')
  getOne(
    @Param('productID') id: number,
    @Param('categoryName') categoryName: string,
  ) {
    return {
      message: 'Get a product by ID',
      data: { id: Number(id), categoryName },
    };
  }

  @Post()
  create(@Body() body: CreateProductDTO) {
    return {
      message: 'Create a product',
      data: { ...body },
    };
  }

  @Put()
  update() {
    return 'Updating a product by ID or cursor';
  }

  @Delete()
  delete() {
    return 'Delete a product by ID or cursor';
  }
}
