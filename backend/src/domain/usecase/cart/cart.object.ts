import {CartType} from "../../types/cart/cart.type";

export class CartObject {
    cart: CartType = {
        items: [],
        sessionId: ""
    };
}