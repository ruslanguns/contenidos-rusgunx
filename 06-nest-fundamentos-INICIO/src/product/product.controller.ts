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
  /**
   * http://localhost:3000/product?page=1&perPage=10&search=iphone
   */
  @Get()
  getAll(
    @Query('page') _page: string,
    @Query('perPage') _perPage: string,
    @Query('search') search: string,
    @Query() query: any,
  ) {
    console.log(query);

    const page = parseInt(_page, 10);
    const perPage = parseInt(_perPage, 10);

    const metadata = { page, perPage, search };

    return {
      message: 'Array of products',
      data: [],
      metadata,
    };
  }

  /**
   * - Parámetros URL - @Param()
   *   /product/parametro-estatico
   *   /product/:parametro-dinamico
   *   /product/:productID/categoria/:categoryID
   */
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

  /**
   * Capturando el cuerpo del request del cliente usando el @Body()
   *
   * interface Product {
   *  name: string;
   *  price: number;
   *  qty: number;
   * }
   *
   *  // POST /product -d {  name: 'iPhone X', price: 999.99, qty: 10 }
   */
  @Post()
  create(
    @Body() body: CreateProductDTO,
    // @Body('name') name: string,
    // @Body('price') price: number,
    // @Body('qty') qty: number,
  ) {
    return {
      message: 'Create a product',
      data: { ...body },
      // data: { name, price, qty },
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
