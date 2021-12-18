import { Controller, Delete, Get, Post, Put, Query } from '@nestjs/common';

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

  @Get()
  getOne() {
    return 'Specific product by ID or cursor';
  }

  @Post()
  create() {
    return 'Adding a new product';
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
