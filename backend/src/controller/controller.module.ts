import {Module} from "@nestjs/common";
import {ProductController} from "./product/product.controller";
import {CartController} from "./cart/cart.controller";
import {DomainModule} from "../domain/domain.module";

@Module({
    imports: [DomainModule],
    controllers: [ProductController, CartController],
    providers: []
})
export class ControllerModule {

}