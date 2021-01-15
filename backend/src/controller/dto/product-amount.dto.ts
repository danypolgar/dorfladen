import {IsNotEmpty, IsString} from "class-validator";
import {ProductChangeDirectionEnum} from "./product-change-direction.enum";

export class ProductAmountDto {

    @IsString()
    @IsNotEmpty()
    id: string;

    @IsNotEmpty()
    direction: ProductChangeDirectionEnum;
}