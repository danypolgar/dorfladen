import {CartItemDto} from "./cart-item.dto";
import {IsNotEmpty, IsString} from "class-validator";

export class CartDto {

    items: CartItemDto[];

    @IsNotEmpty()
    @IsString()
    sessionId: string;
}