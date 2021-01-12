import {ProductDto} from "./product.dto";
import {IsNotEmpty, IsNumber} from "class-validator";

export class CartItemDto {

    product: ProductDto;

    @IsNotEmpty()
    @IsNumber()
    count: number;
}