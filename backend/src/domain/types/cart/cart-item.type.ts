import {ProductType} from "../product/product.type";

export interface CartItemType {
    product: ProductType;
    count: number;
}