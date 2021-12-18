import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get()
  getAll() {
    return 'Array of products';
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
