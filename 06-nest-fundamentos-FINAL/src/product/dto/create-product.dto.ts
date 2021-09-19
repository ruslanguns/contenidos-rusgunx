import { IsNumber, IsString, Max, Min, MinLength } from 'class-validator';

export class CreateProductDTO {
  @IsString()
  @MinLength(3)
  name: string;

  @IsNumber()
  @Min(0)
  @Max(2500)
  price: number;

  @IsNumber()
  @Min(1)
  @Max(100)
  qty: number;
}
