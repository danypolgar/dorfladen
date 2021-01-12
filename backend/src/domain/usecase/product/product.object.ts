import {ProductType} from "../../types/product/product.type";
import * as jsonData from "./products.json";

export class ProductObject {
    products: ProductType[] = jsonData
}