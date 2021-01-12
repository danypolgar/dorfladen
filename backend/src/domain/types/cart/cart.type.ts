import {CartItemType} from "./cart-item.type";

export interface CartType {
    items: CartItemType[];
    sessionId: string;
}