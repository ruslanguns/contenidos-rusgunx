import { BadRequestException } from '@nestjs/common';

export class CreateProductDTO {
  private _name: string;
  private _price: number;
  private _qty: number;

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new BadRequestException('Name must be a string');
    }
    if (value.length < 3) {
      throw new BadRequestException('Name must be at least 3 characters');
    }
    this._name = value;
  }

  get price() {
    return this._price;
  }
  get qty() {
    return this._qty;
  }
}
