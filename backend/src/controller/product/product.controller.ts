import { Controller, Get, Param} from "@nestjs/common";
import {ProductObject} from "../../domain/usecase/product/product.object";
import {ProductDto} from "../dto/product.dto";

@Controller('api/product')
export class ProductController {

    constructor(private productObject: ProductObject) {
    }

    @Get('/getProducts')
    public async getProducts(): Promise<ProductDto[]> {
        return this.productObject.products
    }

    @Get('/getProduct/:id')
    public getProductById(@Param('id') id: string): ProductDto {
        for (const product of this.productObject.products) {
            if(product.id == id){
                return product;
            }
        }
    }
}
