import {Module} from "@nestjs/common";
import {ProductObject} from "./usecase/product/product.object";
import {CartObject} from "./usecase/cart/cart.object";


@Module({
    imports: [],
    providers: [ProductObject,CartObject],
    exports: [ProductObject,CartObject]
})
export class DomainModule {
}